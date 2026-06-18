// ============================================================
// data-features.js — LeoEnglish v11.0
// 4 features críticas de retención:
// 1. Misiones de 5 minutos (sprint adaptativo)
// 2. Speaking con WebSpeech API
// 3. Metas semanales con contrato visual
// 4. PWA: registro service worker + notificaciones
// ============================================================

(function () {
  'use strict';

  // ============================================================
  // 1. MISIONES DE 5 MINUTOS
  // Genera un sprint de 3-5 ejercicios del siguiente
  // módulo pendiente. Accesible desde el dashboard.
  // ============================================================

  window.MissionEngine = {

    // Genera misión de exactamente 5 minutos (~4 ejercicios)
    buildMission() {
      const s = window.state;
      if (!s) return null;

      const report = window.AdaptiveEngine?.generateWeaknessReport();
      const next   = window.AdaptiveEngine?.getNextRecommendedActivity();

      // Priorizar: debilidad > siguiente > primera no hecha
      const target = next || this._firstPending();
      if (!target) return null;

      // Seleccionar 4 ejercicios del módulo target
      let exercises = [];
      if (target.type === 'grammar') {
        const mod = window.modulesData?.[target.sourceId || target.id];
        if (mod?.exercises) {
          exercises = this._pickMixed(mod.exercises, 4);
        }
      } else if (target.type === 'vocab') {
        // 4 palabras del tópico
        const topic = (window.vocabTopics || []).find(t => t.id === (target.sourceId || target.id));
        if (topic?.words) {
          exercises = topic.words.slice(0, 4).map(w => ({
            type: 'choice',
            q: `¿Cómo se dice en inglés?\n"${w.es}"`,
            opts: this._generateDistractors(w.en, topic.words),
            a: 0,   // correct is always index 0 before shuffle
            correctText: w.en,
            exp: `"${w.es}" = "${w.en}". ${w.example || ''}`
          }));
        }
      } else if (target.type === 'listening') {
        const act = (window.listeningActivities || []).find(a => a.id === (target.sourceId || target.id));
        if (act?.questions) {
          exercises = this._pickMixed(act.questions, 3);
        }
      }

      if (!exercises.length) return null;

      return {
        id: `mission_${Date.now()}`,
        activity: target,
        exercises,
        estimatedMinutes: Math.round(exercises.length * 1.2),
        title: this._missionTitle(target, report),
        xpReward: exercises.length * 8,
        color: this._activityColor(target.type)
      };
    },

    _firstPending() {
      const route = window.buildLearningRoute?.() || [];
      return route.flatMap(l => l.activities).find(a => !window.isActivityPassed?.(a));
    },

    _pickMixed(exercises, n) {
      // Pick: 2 choice + 1 write + 1 order for variety
      const byType = {};
      exercises.forEach(e => {
        const t = e.type || 'choice';
        if (!byType[t]) byType[t] = [];
        byType[t].push(e);
      });
      const picked = [];
      const types = ['choice', 'write', 'order', 'choice'];
      types.forEach(t => {
        if (byType[t]?.length && picked.length < n) {
          const idx = Math.floor(Math.random() * byType[t].length);
          picked.push(byType[t].splice(idx, 1)[0]);
        }
      });
      // Fill remaining with any
      while (picked.length < n && exercises.length > picked.length) {
        const remaining = exercises.filter(e => !picked.includes(e));
        if (!remaining.length) break;
        picked.push(remaining[Math.floor(Math.random() * remaining.length)]);
      }
      return picked.slice(0, n);
    },

    _generateDistractors(correct, words) {
      const distractors = words
        .filter(w => w.en !== correct)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(w => w.en);
      const opts = [correct, ...distractors].sort(() => Math.random() - 0.5);
      return opts;
    },

    _missionTitle(activity, report) {
      const labels = {
        grammar:   '⚡ Gramática sprint',
        vocab:     '📚 Vocabulario rápido',
        reading:   '📖 Comprensión express',
        writing:   '✍️ Escritura en 5 min',
        listening: '🎧 Escucha rápida'
      };
      if (report?.weaknesses?.length) return '🎯 Refuerza tu punto débil';
      return labels[activity.type] || '⚡ Misión del día';
    },

    _activityColor(type) {
      const colors = {
        grammar: '#1C3F7A', vocab: '#22C55E',
        reading: '#3B82F6', writing: '#CF2B2B', listening: '#0891B2'
      };
      return colors[type] || '#1C3F7A';
    }
  };

  // ── Render Mission Card in dashboard ─────────────────────
  window.renderMissionCard = function () {
    const el = document.getElementById('mission-card');
    if (!el) return;

    const mission = window.MissionEngine.buildMission();
    if (!mission) {
      el.style.display = 'none';
      return;
    }

    el.style.display = 'block';
    el.innerHTML = `
      <div class="mission-card" style="--mission-color:${mission.color}">
        <div class="mission-card-top">
          <div>
            <div class="mission-label">MISIÓN DEL DÍA</div>
            <div class="mission-title">${mission.title}</div>
          </div>
          <div class="mission-time">⏱ ${mission.estimatedMinutes} min</div>
        </div>
        <div class="mission-meta">
          <span class="mission-xp">+${mission.xpReward} XP</span>
          <span class="mission-count">${mission.exercises.length} ejercicios</span>
        </div>
        <button class="mission-start-btn"
          onclick="window.startMission()"
          style="background:${mission.color};border-color:${mission.color};">
          ▶ Empezar ahora
        </button>
      </div>`;

    window._currentMission = mission;
  };

  window.startMission = function () {
    const m = window._currentMission;
    if (!m) return;
    // Navigate directly to the activity
    window.openRouteActivity?.(m.activity.id);
  };

  // ============================================================
  // 2. SPEAKING CON WEBSPEECH API
  // Ejercicios de producción oral: el estudiante habla
  // y el sistema transcribe + evalúa.
  // ============================================================

  window.SpeakingEngine = {

    supported: !!(window.SpeechRecognition || window.webkitSpeechRecognition),

    // Speaking exercises per level
    exercises: {
      A1: [
        { id: 'speak_a1_intro', prompt: 'Introduce yourself in English. Say your name, where you are from, and one thing you like.',
          model: 'My name is [name]. I am from [city]. I like [hobby].',
          keywords: ['name', 'from', 'like'], minWords: 8 },
        { id: 'speak_a1_routine', prompt: 'Describe your morning routine in 3 sentences.',
          model: 'I wake up at [time]. I have breakfast. Then I go to [place].',
          keywords: ['wake', 'have', 'go'], minWords: 10 },
        { id: 'speak_a1_family', prompt: 'Tell me about your family. Use: have, is, are.',
          model: 'I have [number] brothers. My mother is a [job]. We are from [place].',
          keywords: ['have', 'is', 'are'], minWords: 8 }
      ],
      A2: [
        { id: 'speak_a2_past', prompt: 'Tell me about your last weekend. Use past simple.',
          model: 'Last weekend I went to... I saw... It was...',
          keywords: ['went', 'was', 'did', 'saw', 'had'], minWords: 12 },
        { id: 'speak_a2_compare', prompt: 'Compare your city and London. Use: bigger, more, better.',
          model: 'My city is smaller than London. London has more... but my city is more...',
          keywords: ['than', 'more', 'bigger', 'better', 'less'], minWords: 10 }
      ],
      B1: [
        { id: 'speak_b1_opinion', prompt: 'Give your opinion on social media. Do you think it is good or bad? Give two reasons.',
          model: 'I think social media is... because... Also, it can...',
          keywords: ['think', 'because', 'also', 'however', 'but'], minWords: 20 },
        { id: 'speak_b1_future', prompt: 'Talk about your plans for the next year. Use: going to, will, planning to.',
          model: 'I am going to... I will probably... I am planning to...',
          keywords: ['going to', 'will', 'planning'], minWords: 18 }
      ],
      B2: [
        { id: 'speak_b2_discuss', prompt: 'Discuss the advantages and disadvantages of working from home. Speak for 45 seconds.',
          model: 'Working from home has several advantages... However, it also has drawbacks such as...',
          keywords: ['advantage', 'disadvantage', 'however', 'although', 'because'], minWords: 40 },
        { id: 'speak_b2_hypothetical', prompt: 'If you could change one thing about education, what would it be and why?',
          model: 'If I could change one thing, I would... because... This would lead to...',
          keywords: ['would', 'could', 'because', 'if'], minWords: 30 }
      ],
      C1: [
        { id: 'speak_c1_argue', prompt: 'Argue for or against: "Social media companies should be held responsible for harmful content." Speak for 60 seconds.',
          model: 'I would argue that... The evidence suggests... On the other hand... Therefore...',
          keywords: ['argue', 'evidence', 'suggests', 'furthermore', 'however', 'therefore'], minWords: 60 },
        { id: 'speak_c1_abstract', prompt: 'Explain the concept of cognitive bias and give one example.',
          model: 'Cognitive bias refers to... A key example is confirmation bias, which... This means that...',
          keywords: ['refers', 'example', 'means', 'suggests', 'tends'], minWords: 50 }
      ]
    },

    // Start a speaking exercise
    start(exerciseId, level) {
      if (!this.supported) {
        window.showToast?.('Tu navegador no soporta reconocimiento de voz.', 'warn');
        return;
      }

      const exercises = this.exercises[level] || this.exercises.A1;
      const ex = exercises.find(e => e.id === exerciseId) || exercises[0];
      this._renderExercise(ex, level);
    },

    _renderExercise(ex, level) {
      const container = document.getElementById('speaking-container');
      if (!container) return;

      container.innerHTML = `
        <div class="speaking-card">
          <div class="speaking-header">
            <span class="speaking-badge" style="background:var(--navy);color:#fff">🗣 Speaking · ${level}</span>
          </div>
          <div class="speaking-prompt">${ex.prompt}</div>
          <div class="speaking-model">
            <span class="speaking-model-label">Modelo:</span>
            ${ex.model}
          </div>
          <div class="speaking-controls" id="speak-controls">
            <button class="btn-record" id="btn-record" onclick="window.SpeakingEngine.startRecording('${ex.id}','${level}')">
              🎙 Hablar
            </button>
          </div>
          <div class="speaking-result" id="speak-result" style="display:none;"></div>
        </div>`;
    },

    _recognition: null,

    startRecording(exerciseId, level) {
      const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRec) return;

      const exercises = this.exercises[level] || this.exercises.A1;
      const ex = exercises.find(e => e.id === exerciseId);
      if (!ex) return;

      const btn = document.getElementById('btn-record');
      if (btn) { btn.textContent = '⏹ Grabando...'; btn.style.background = 'var(--red)'; }

      const rec = new SpeechRec();
      rec.lang = 'en-US';
      rec.continuous = false;
      rec.interimResults = false;
      rec.maxAlternatives = 1;
      this._recognition = rec;

      rec.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        const confidence = event.results[0][0].confidence;
        this._evaluate(transcript, confidence, ex, level);
      };

      rec.onerror = (e) => {
        if (btn) { btn.textContent = '🎙 Hablar'; btn.style.background = ''; }
        window.showToast?.('No se pudo capturar el audio. Inténtalo de nuevo.', 'warn');
      };

      rec.onend = () => {
        if (btn) { btn.textContent = '🎙 Hablar de nuevo'; btn.style.background = ''; }
      };

      rec.start();
    },

    _evaluate(transcript, confidence, ex, level) {
      const words   = transcript.toLowerCase().split(/\s+/).filter(Boolean);
      const wordCount = words.length;
      const keywordsFound = ex.keywords.filter(kw =>
        transcript.toLowerCase().includes(kw.toLowerCase())
      );
      const keywordScore  = Math.round((keywordsFound.length / ex.keywords.length) * 100);
      const lengthScore   = Math.min(Math.round((wordCount / ex.minWords) * 100), 100);
      const fluencyScore  = Math.round((confidence || 0.7) * 100);
      const totalScore    = Math.round((keywordScore * 0.4 + lengthScore * 0.35 + fluencyScore * 0.25));

      window.addXP?.(Math.round(totalScore * 0.2), false);

      const result = document.getElementById('speak-result');
      if (!result) return;
      result.style.display = 'block';
      result.innerHTML = `
        <div class="speak-transcript">
          <div class="speak-transcript-label">Lo que dijiste:</div>
          <div class="speak-transcript-text">"${transcript}"</div>
        </div>
        <div class="speak-scores">
          <div class="speak-score-item">
            <div class="speak-score-bar-wrap">
              <div class="speak-score-fill" style="width:${keywordScore}%;background:var(--navy)"></div>
            </div>
            <span>Vocabulario clave: ${keywordsFound.length}/${ex.keywords.length}</span>
          </div>
          <div class="speak-score-item">
            <div class="speak-score-bar-wrap">
              <div class="speak-score-fill" style="width:${lengthScore}%;background:var(--green)"></div>
            </div>
            <span>Longitud: ${wordCount} palabras (mín. ${ex.minWords})</span>
          </div>
          <div class="speak-score-item">
            <div class="speak-score-bar-wrap">
              <div class="speak-score-fill" style="width:${totalScore}%;background:${totalScore>=70?'var(--green)':'var(--yellow-deep)'}"></div>
            </div>
            <span>Puntuación total: <strong>${totalScore}%</strong></span>
          </div>
        </div>
        ${keywordsFound.length < ex.keywords.length ? `
        <div class="speak-tip">
          💡 Intenta incluir: ${ex.keywords.filter(k => !transcript.toLowerCase().includes(k)).join(', ')}
        </div>` : `
        <div class="speak-success">✅ ¡Excelente! Usaste todas las palabras clave.</div>`}
      `;
    },

    stopRecording() {
      this._recognition?.stop();
    }
  };

  // ============================================================
  // 3. METAS SEMANALES
  // Contrato visual: XP, módulos, racha.
  // Se resetea cada lunes. Persiste en Firestore.
  // ============================================================

  window.WeeklyGoals = {

    // Default goals por nivel
    DEFAULT_GOALS: {
      A1: { xp: 100,  modules: 3, streak: 3, label: 'Principiante' },
      A2: { xp: 150,  modules: 4, streak: 4, label: 'Básico' },
      B1: { xp: 200,  modules: 5, streak: 5, label: 'Intermedio' },
      B2: { xp: 250,  modules: 5, streak: 5, label: 'Avanzado' },
      C1: { xp: 300,  modules: 6, streak: 6, label: 'Experto' },
    },

    getOrCreate() {
      const s = window.state;
      if (!s) return null;
      const now   = new Date();
      const monday = this._getMondayTimestamp(now);

      // Reset if new week
      if (!s.weeklyGoals || s.weeklyGoals.weekStart !== monday) {
        const level = s.routeProgress?.placedLevel || 'A1';
        const goals = this.DEFAULT_GOALS[level] || this.DEFAULT_GOALS.A1;
        s.weeklyGoals = {
          weekStart:    monday,
          xpGoal:       goals.xp,
          modulesGoal:  goals.modules,
          streakGoal:   goals.streak,
          xpStart:      s.xp || 0,
          modulesStart: Object.keys(s.scores || {}).length,
          level:        level,
          label:        goals.label
        };
        window.saveState?.();
      }
      return s.weeklyGoals;
    },

    getProgress() {
      const s   = window.state;
      const wg  = this.getOrCreate();
      if (!s || !wg) return null;

      const xpThisWeek      = (s.xp || 0) - (wg.xpStart || 0);
      const modulesThisWeek = Object.keys(s.scores || {}).length - (wg.modulesStart || 0);
      const currentStreak   = s.streak || 0;

      return {
        xp:      { current: Math.max(0, xpThisWeek),      goal: wg.xpGoal,      pct: Math.min(Math.round(Math.max(0, xpThisWeek) / wg.xpGoal * 100), 100) },
        modules: { current: Math.max(0, modulesThisWeek), goal: wg.modulesGoal, pct: Math.min(Math.round(Math.max(0, modulesThisWeek) / wg.modulesGoal * 100), 100) },
        streak:  { current: currentStreak,                goal: wg.streakGoal,  pct: Math.min(Math.round(currentStreak / wg.streakGoal * 100), 100) },
        label:   wg.label,
        level:   wg.level,
        daysLeft: this._daysUntilMonday()
      };
    },

    _getMondayTimestamp(date) {
      const d   = new Date(date);
      const day = d.getDay();
      const diff = d.getDate() - day + (day === 0 ? -6 : 1);
      d.setDate(diff);
      d.setHours(0, 0, 0, 0);
      return d.getTime();
    },

    _daysUntilMonday() {
      const now  = new Date();
      const day  = now.getDay();
      return day === 0 ? 1 : 8 - day;
    },

    // Render widget in dashboard
    renderWidget() {
      const el = document.getElementById('weekly-goals-card');
      if (!el) return;

      const progress = this.getProgress();
      if (!progress) { el.style.display = 'none'; return; }
      el.style.display = 'block';

      const allDone = progress.xp.pct >= 100 && progress.modules.pct >= 100 && progress.streak.pct >= 100;

      el.innerHTML = `
        <div class="weekly-card">
          <div class="weekly-header">
            <span class="weekly-title">🎯 Metas de la semana</span>
            <span class="weekly-level">${progress.label} · ${progress.daysLeft}d restantes</span>
          </div>
          ${allDone ? `<div class="weekly-congrats">🏆 ¡Semana completada! Descarga tu certificado.</div>` : ''}
          <div class="weekly-goals">
            ${this._goalRow('⚡', 'XP', progress.xp, 'var(--red)')}
            ${this._goalRow('📚', 'Módulos', progress.modules, 'var(--navy)')}
            ${this._goalRow('🔥', 'Racha', progress.streak, 'var(--yellow-deep)')}
          </div>
        </div>`;
    },

    _goalRow(emoji, label, data, color) {
      const done = data.pct >= 100;
      return `
        <div class="weekly-goal-row">
          <span class="weekly-goal-emoji">${emoji}</span>
          <div class="weekly-goal-body">
            <div class="weekly-goal-label">${label}: ${data.current} / ${data.goal}</div>
            <div class="weekly-goal-bar">
              <div class="weekly-goal-fill" style="width:${data.pct}%;background:${done ? 'var(--green)' : color}"></div>
            </div>
          </div>
          <span class="weekly-goal-pct" style="color:${done ? 'var(--green)' : color}">${done ? '✓' : data.pct + '%'}</span>
        </div>`;
    }
  };

  // ============================================================
  // 4. PWA: SERVICE WORKER + NOTIFICACIONES
  // ============================================================

  window.PWAManager = {

    async init() {
      // Register service worker
      if ('serviceWorker' in navigator) {
        try {
          const reg = await navigator.serviceWorker.register('/LeoEnglish/sw.js', {
            scope: '/LeoEnglish/'
          });
          console.log('[LeoEnglish] SW registered:', reg.scope);
          this._registration = reg;

          // Show install prompt if eligible
          window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            window._installPrompt = e;
            this._showInstallBanner();
          });

          // iOS install hint
          const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
          const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
          if (isIOS && !isStandalone) {
            this._showIOSHint();
          }
        } catch (err) {
          console.warn('[LeoEnglish] SW registration failed:', err);
        }
      }
    },

    _showInstallBanner() {
      // Only show if not already installed and dismissed < 3 times
      const dismissed = parseInt(localStorage.getItem('pwa-dismissed') || '0');
      if (dismissed >= 3) return;
      if (document.getElementById('pwa-banner')) return;

      const banner = document.createElement('div');
      banner.id = 'pwa-banner';
      banner.className = 'pwa-banner animate-pop';
      banner.innerHTML = `
        <div class="pwa-banner-inner">
          <div class="pwa-banner-text">
            <strong>Instala LeoEnglish</strong>
            <span>Estudia sin conexión · Notificaciones de racha</span>
          </div>
          <div class="pwa-banner-actions">
            <button onclick="window.PWAManager.install()" class="pwa-install-btn">Instalar</button>
            <button onclick="window.PWAManager.dismissBanner()" class="pwa-dismiss-btn">✕</button>
          </div>
        </div>`;
      document.body.appendChild(banner);
    },

    _showIOSHint() {
      const dismissed = localStorage.getItem('ios-hint-dismissed');
      if (dismissed) return;

      const hint = document.createElement('div');
      hint.id = 'ios-hint';
      hint.className = 'pwa-banner animate-pop';
      hint.innerHTML = `
        <div class="pwa-banner-inner">
          <div class="pwa-banner-text">
            <strong>Instala en iPhone</strong>
            <span>Pulsa <strong>Compartir</strong> → <strong>Añadir a pantalla de inicio</strong></span>
          </div>
          <button onclick="document.getElementById('ios-hint').remove();localStorage.setItem('ios-hint-dismissed','1')"
            class="pwa-dismiss-btn">✕</button>
        </div>`;
      document.body.appendChild(hint);
    },

    async install() {
      const prompt = window._installPrompt;
      if (!prompt) return;
      prompt.prompt();
      const { outcome } = await prompt.userChoice;
      if (outcome === 'accepted') {
        document.getElementById('pwa-banner')?.remove();
        window.showToast?.('✅ LeoEnglish instalado', 'success');
      }
      window._installPrompt = null;
    },

    dismissBanner() {
      document.getElementById('pwa-banner')?.remove();
      const n = parseInt(localStorage.getItem('pwa-dismissed') || '0');
      localStorage.setItem('pwa-dismissed', String(n + 1));
    },

    async requestNotifications() {
      if (!('Notification' in window)) {
        window.showToast?.('Tu navegador no soporta notificaciones', 'warn');
        return false;
      }
      if (Notification.permission === 'granted') return true;
      if (Notification.permission === 'denied') {
        window.showToast?.('Notificaciones bloqueadas en ajustes del navegador', 'warn');
        return false;
      }
      const result = await Notification.requestPermission();
      return result === 'granted';
    },

    // Schedule daily reminder (uses SW if available)
    async scheduleDailyReminder(hourUTC = 19) {
      const granted = await this.requestNotifications();
      if (!granted) return;

      // Store preference
      window.state && (window.state.notifEnabled = true);
      window.saveState?.();

      // Immediate confirmation notification
      new Notification('LeoEnglish activado', {
        body: `Te recordaremos cada día a las ${hourUTC}:00 para mantener tu racha. 🔥`,
        icon: '/LeoEnglish/icon-192.png',
        tag: 'leoenglish-setup'
      });

      window.showToast?.('🔔 Recordatorio diario activado', 'success');
    }
  };

  // ============================================================
  // INTEGRACIÓN — conectar todo al dashboard
  // ============================================================

  // BUG-FIX 3: La race condition ocurría porque data-features.js (script clásico)
  // se ejecuta ANTES de que app.js (type="module", siempre diferido) defina
  // window.renderDashboard. La solución es aplicar el parche de forma lazy:
  // instalamos un Proxy en window.renderDashboard que se auto-parchea en el
  // primer llamado real, cuando app.js ya ha corrido con seguridad.
  function initFeatures() {
    // PWA init — esto sí puede correr en DOMContentLoaded sin problema
    window.PWAManager.init();

    // Lazy-patch: si renderDashboard ya existe (poco probable pero posible),
    // parchear ahora; si no, instalar un setter que lo parchea cuando se defina.
    function applyFeaturesPatching() {
      const orig = window.renderDashboard;
      if (typeof orig !== 'function' || orig._featuresPatched) return;
      window.renderDashboard = function () {
        orig.call(this);
        setTimeout(() => {
          window.renderMissionCard?.();
          window.WeeklyGoals?.renderWidget?.();
        }, 50);
      };
      window.renderDashboard._featuresPatched = true;
    }

    if (typeof window.renderDashboard === 'function') {
      // app.js ya corrió (inesperado pero manejamos el caso)
      applyFeaturesPatching();
    } else {
      // app.js aún no corrió: observar cuándo se define renderDashboard
      let _rdValue;
      Object.defineProperty(window, 'renderDashboard', {
        configurable: true,
        enumerable:   true,
        get() { return _rdValue; },
        set(fn) {
          _rdValue = fn;
          // Restaurar propiedad normal para que app.js pueda reasignarla libremente
          Object.defineProperty(window, 'renderDashboard', {
            configurable: true, enumerable: true, writable: true, value: fn
          });
          // Aplicar el parche un tick después para que app.js termine su asignación
          setTimeout(applyFeaturesPatching, 0);
        }
      });
    }

    console.log('[LeoEnglish] Features v11 ready: missions, speaking, weekly goals, PWA.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFeatures);
  } else {
    initFeatures();
  }

})();
