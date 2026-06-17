// ============================================================
// data-adaptive-portfolio.js — LeoEnglish v2.0
// Dos motores integrados:
//   1. AdaptiveEngine  — Análisis de debilidades + recomendaciones
//   2. PortfolioGenerator — Generación de certificados PDF/HTML
//   3. PortfolioEngine    — Alias público de AdaptiveEngine
//                          (referenciado en app.js renderAdaptiveWidget)
// Compatible con app.js v5.0
// ============================================================

(function () {
  'use strict';

  // ============================================================
  // 1. ADAPTIVE ENGINE
  // Analiza el estado del estudiante y recomienda la siguiente
  // actividad óptima basándose en debilidades y progresión.
  // ============================================================

  window.AdaptiveEngine = {

    // Umbrales de clasificación
    WEAK_THRESHOLD:     65,  // < 65%  → debilidad activa
    STRENGTH_THRESHOLD: 85,  // ≥ 85%  → fortaleza consolidada
    REINFORCE_BONUS:    10,  // XP extra al reforzar debilidades

    // ── analyzeWeaknesses ─────────────────────────────────────
    // Devuelve { weaknesses, strengths, dominantWeak, dominantWeakLabel }
    analyzeWeaknesses() {
      const s = window.state;
      if (!s) return { weaknesses: [], strengths: [], dominantWeak: null, dominantWeakLabel: '' };

      const scoresByType = {
        grammar: s.scores        || {},
        vocab:   s.vocabScores   || {},
        reading: s.readingScores || {},
        writing: s.writingDone   || {},
        listening: s.listeningScores || {}
      };

      const weaknesses = [];
      const strengths  = [];

      Object.entries(scoresByType).forEach(([type, scores]) => {
        Object.entries(scores).forEach(([id, rawScore]) => {
          const score = typeof rawScore === 'number' ? rawScore : (rawScore === true ? 100 : 0);
          const entry = { type, id, score };

          if (score < this.WEAK_THRESHOLD) {
            weaknesses.push(entry);
          } else if (score >= this.STRENGTH_THRESHOLD) {
            strengths.push(entry);
          }
        });
      });

      // Sort weaknesses by score ascending (worst first)
      weaknesses.sort((a, b) => a.score - b.score);

      const dominantWeak = weaknesses[0] || null;
      const dominantWeakLabel = dominantWeak
        ? this._getLabel(dominantWeak.type, dominantWeak.id)
        : '';

      return { weaknesses, strengths, dominantWeak, dominantWeakLabel };
    },

    // ── generateWeaknessReport ────────────────────────────────
    generateWeaknessReport() {
      const { weaknesses, strengths } = this.analyzeWeaknesses();
      return {
        weaknesses,
        strengths,
        hasWeaknesses: weaknesses.length > 0,
        topWeakness: weaknesses[0] || null,
        summary: weaknesses.length === 0
          ? 'Sin debilidades detectadas. ¡Excelente trabajo!'
          : `${weaknesses.length} área(s) que necesitan refuerzo.`
      };
    },

    // ── getNextRecommendedActivity ────────────────────────────
    // Devuelve la próxima actividad recomendada:
    //   prioridad 1: la peor debilidad activa
    //   prioridad 2: la primera actividad no completada en la ruta
    //   prioridad 3: null (todo completado)
    getNextRecommendedActivity() {
      const { weaknesses } = this.analyzeWeaknesses();

      // Prioridad 1: peor debilidad que existe en la ruta
      if (weaknesses.length) {
        const route = window.buildLearningRoute?.() || [];
        const flat  = route.flatMap(l => l.activities);

        for (const weak of weaknesses) {
          const act = flat.find(a =>
            a.sourceId === weak.id ||
            a.id       === `${weak.type}:${weak.id}`
          );
          if (act) return act;
        }
      }

      // Prioridad 2: primera no completada
      const route = window.buildLearningRoute?.() || [];
      const flat  = route.flatMap(l => l.activities);
      return flat.find(a => !window.isActivityPassed?.(a)) || null;
    },

    // ── _getLevelReadiness ────────────────────────────────────
    // Calcula qué tan listo está el estudiante para avanzar al
    // siguiente nivel CEFR. Usa evidenceRequirements del framework.
    _getLevelReadiness() {
      const s     = window.state;
      const cefr  = window.cefrFramework;
      const level = s?.routeProgress?.placedLevel || 'A1';
      const levels = ['A1', 'A2', 'B1', 'B2', 'C1'];
      const idx   = levels.indexOf(level);
      const nextLvl = levels[idx + 1] || null;

      if (!cefr || !nextLvl) {
        return { level, readiness: 100, completedChecks: 0, total: 0 };
      }

      const req = cefr.evidenceRequirements?.[nextLvl];
      if (!req) return { level, readiness: 100, completedChecks: 0, total: 0 };

      const grammarPct = window.calcSkillPct?.('grammar') ?? 0;
      const vocabPct   = window.calcSkillPct?.('vocab')   ?? 0;
      const readingPct = window.calcSkillPct?.('reading') ?? 0;
      const writingPct = window.calcSkillPct?.('writing') ?? 0;
      const xp         = s?.xp ?? 0;

      const checks = [
        grammarPct  >= (req.grammar?.minScore  || 0),
        vocabPct    >= (req.vocab?.minScore    || 0),
        readingPct  >= (req.reading?.minScore  || 0),
        writingPct  >= (req.writing?.minScore  || 0),
        xp          >= (req.totalXP            || 0)
      ];

      const completedChecks = checks.filter(Boolean).length;
      const total           = checks.length;
      const readiness       = Math.round((completedChecks / total) * 100);

      return { level: nextLvl, readiness, completedChecks, total };
    },

    // ── _getLabel ─────────────────────────────────────────────
    _getLabel(type, id) {
      const labelFns = [
        window.getGrammarWeaknessLabel,
        window.getVocabWeaknessLabel,
        window.getReadingWeaknessLabel,
        window.getWritingWeaknessLabel,
        window.getListeningWeaknessLabel
      ];

      for (const fn of labelFns) {
        if (typeof fn === 'function') {
          const label = fn(id);
          if (label && label !== id) return label;
        }
      }

      return String(id)
        .replace(/_/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());
    },

    // ── Streak intelligence ───────────────────────────────────
    // Devuelve consejo de racha personalizado
    getStreakAdvice() {
      const s = window.state;
      if (!s) return null;
      const streak = s.streak || 0;
      const dailyXP = s.dailyXP || 0;
      const goal = s.dailyGoal || 50;

      if (streak === 0) return '¡Empieza hoy tu racha! Completa una actividad.';
      if (dailyXP >= goal) return `✅ Meta diaria cumplida · ${streak} día${streak !== 1 ? 's' : ''} de racha.`;
      const remaining = goal - dailyXP;
      return `🔥 ${streak} día${streak !== 1 ? 's' : ''} de racha · Necesitas ${remaining} XP más hoy.`;
    },

    // ── Personalised study plan ───────────────────────────────
    // Genera un plan de estudio semanal de 5 días basado en debilidades
    getWeeklyPlan() {
      const { weaknesses } = this.analyzeWeaknesses();
      const route = window.buildLearningRoute?.() || [];
      const flat  = route.flatMap(l => l.activities);
      const notDone = flat.filter(a => !window.isActivityPassed?.(a));

      const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
      const plan = [];

      // Day 1-2: reinforce weaknesses
      const weakActivities = weaknesses
        .map(w => flat.find(a =>
          a.sourceId === w.id || a.id === `${w.type}:${w.id}`
        ))
        .filter(Boolean)
        .slice(0, 2);

      // Day 3-5: advance in route
      const advanceActivities = notDone
        .filter(a => !weakActivities.includes(a))
        .slice(0, 3);

      const pool = [...weakActivities, ...advanceActivities];

      days.forEach((day, i) => {
        const act = pool[i];
        plan.push({
          day,
          activity: act || null,
          type:     act ? act.type : null,
          title:    act ? (act.title || act.sourceId) : 'Repaso libre',
          isWeak:   weakActivities.includes(act)
        });
      });

      return plan;
    }
  };

  // ── Alias público requerido por app.js ─────────────────────
  window.PortfolioEngine = window.AdaptiveEngine;


  // ============================================================
  // 2. PORTFOLIO GENERATOR
  // Genera un certificado HTML descargable con el progreso
  // del estudiante. Invocado desde renderAdaptiveWidget cuando
  // el estudiante está listo para certificar un nivel CEFR.
  // ============================================================

  window.PortfolioGenerator = {

    // ── generateCertificate ───────────────────────────────────
    // Abre una ventana con el certificado HTML listo para imprimir
    generateCertificate(level) {
      const s    = window.state;
      const cefr = window.cefrFramework;
      if (!s) { window.showToast?.('Error: no hay datos del estudiante.', 'error'); return; }

      const name    = s.userName || 'Estudiante';
      const date    = new Date().toLocaleDateString('es-CO', {
        day: 'numeric', month: 'long', year: 'numeric'
      });
      const grammar = window.calcSkillPct?.('grammar') ?? 0;
      const vocab   = window.calcSkillPct?.('vocab')   ?? 0;
      const reading = window.calcSkillPct?.('reading') ?? 0;
      const writing = window.calcSkillPct?.('writing') ?? 0;
      const overall = Math.round((grammar + vocab + reading + writing) / 4);
      const xp      = s.xp || 0;

      const levelColors = {
        A1:'#22C55E', A2:'#3B82F6', B1:'#F59E0B', B2:'#CF2B2B', C1:'#8B5CF6'
      };
      const color = levelColors[level] || '#1C3F7A';

      const levelDescriptions = {
        A1: 'Puede comprender y usar expresiones cotidianas y frases muy básicas.',
        A2: 'Puede comunicarse en tareas sencillas que requieren un intercambio de información.',
        B1: 'Puede comprender los puntos principales cuando se usa lenguaje claro sobre temas familiares.',
        B2: 'Puede comprender las ideas principales de textos complejos y comunicarse con fluidez.',
        C1: 'Puede comprender una amplia variedad de textos exigentes y expresarse con fluidez y espontaneidad.'
      };

      const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Certificado LeoEnglish — ${level} — ${name}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family:'Plus Jakarta Sans',sans-serif; background:#F8F7F3; display:flex; justify-content:center; align-items:center; min-height:100vh; padding:24px; }
    .cert { background:#fff; border:3px solid ${color}; border-radius:24px; max-width:780px; width:100%; padding:52px 56px; box-shadow:0 8px 40px rgba(0,0,0,0.12); }
    .cert-header { text-align:center; margin-bottom:36px; }
    .cert-logo { font-family:'Outfit',sans-serif; font-size:28px; font-weight:900; color:#1C3F7A; letter-spacing:-0.5px; }
    .cert-logo span { color:#CF2B2B; }
    .cert-divider { width:80px; height:4px; background:${color}; border-radius:99px; margin:16px auto; }
    .cert-title { font-size:14px; font-weight:700; color:#718096; letter-spacing:.08em; text-transform:uppercase; margin-bottom:6px; }
    .cert-name { font-family:'Outfit',sans-serif; font-size:40px; font-weight:900; color:#1C3F7A; margin-bottom:8px; }
    .cert-text { font-size:15px; color:#4A5568; line-height:1.7; max-width:520px; margin:0 auto 32px; text-align:center; }
    .cert-level-badge { display:inline-flex; align-items:center; gap:10px; background:${color}15; border:2px solid ${color}; border-radius:14px; padding:14px 28px; margin:20px auto; }
    .cert-level-num { font-family:'Outfit',sans-serif; font-size:54px; font-weight:900; color:${color}; line-height:1; }
    .cert-level-desc { text-align:left; }
    .cert-level-label { font-size:11px; font-weight:800; color:${color}; letter-spacing:.08em; text-transform:uppercase; }
    .cert-level-title { font-size:18px; font-weight:800; color:#1C3F7A; }
    .cert-skills { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin:32px 0; }
    .cert-skill { background:#F8F7F3; border-radius:12px; padding:14px 18px; }
    .cert-skill-top { display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
    .cert-skill-name { font-size:12px; font-weight:700; color:#718096; text-transform:uppercase; letter-spacing:.05em; }
    .cert-skill-pct { font-size:16px; font-weight:900; color:#1C3F7A; }
    .cert-skill-bar { height:6px; background:#E2E8F0; border-radius:99px; overflow:hidden; }
    .cert-skill-fill { height:100%; border-radius:99px; background:${color}; }
    .cert-overall { text-align:center; margin:24px 0; padding:20px; background:${color}08; border:1.5px solid ${color}30; border-radius:14px; }
    .cert-overall-score { font-family:'Outfit',sans-serif; font-size:56px; font-weight:900; color:${color}; }
    .cert-overall-label { font-size:13px; font-weight:700; color:#718096; margin-top:4px; }
    .cert-footer { text-align:center; margin-top:36px; padding-top:24px; border-top:1px solid #E2E8F0; }
    .cert-date { font-size:13px; color:#A0AEC0; margin-bottom:4px; }
    .cert-issuer { font-size:12px; color:#CBD5E0; }
    .cert-xp { display:inline-block; background:#FFF7ED; border:1.5px solid #F59E0B; border-radius:8px; padding:6px 16px; font-size:13px; font-weight:800; color:#D97706; margin:12px 0; }
    .cert-description { font-size:13px; color:#718096; font-style:italic; max-width:500px; margin:8px auto; line-height:1.6; }
    @media print {
      body { background:#fff; }
      .cert { box-shadow:none; }
      .cert-actions { display:none !important; }
    }
    .cert-actions { text-align:center; margin-top:28px; display:flex; gap:12px; justify-content:center; }
    .btn-cert { padding:12px 28px; border-radius:10px; font-size:14px; font-weight:800; cursor:pointer; border:2px solid; font-family:inherit; }
    .btn-print { background:${color}; color:#fff; border-color:${color}; }
    .btn-back  { background:#fff; color:#1C3F7A; border-color:#E2E8F0; }
  </style>
</head>
<body>
  <div class="cert">
    <div class="cert-header">
      <div class="cert-logo">Leo<span>English</span></div>
      <div class="cert-divider"></div>
    </div>

    <div style="text-align:center">
      <div class="cert-title">Certificado de competencia lingüística</div>
      <div class="cert-name">${name}</div>
      <p class="cert-text">
        Ha completado satisfactoriamente el programa de inglés correspondiente al nivel
        <strong>${level}</strong> del Marco Común Europeo de Referencia para las Lenguas (MCER).
      </p>
    </div>

    <div style="text-align:center">
      <div class="cert-level-badge">
        <div class="cert-level-num">${level}</div>
        <div class="cert-level-desc">
          <div class="cert-level-label">Nivel MCER alcanzado</div>
          <div class="cert-level-title">
            ${ level === 'A1' ? 'Usuario básico — Acceso'
             : level === 'A2' ? 'Usuario básico — Plataforma'
             : level === 'B1' ? 'Usuario independiente — Umbral'
             : level === 'B2' ? 'Usuario independiente — Avanzado'
             : 'Usuario competente — Dominio operativo eficaz' }
          </div>
        </div>
      </div>
    </div>

    <p class="cert-description">${levelDescriptions[level] || ''}</p>

    <div class="cert-overall">
      <div class="cert-overall-score">${overall}%</div>
      <div class="cert-overall-label">Puntuación global</div>
    </div>

    <div class="cert-skills">
      <div class="cert-skill">
        <div class="cert-skill-top"><span class="cert-skill-name">Gramática</span><span class="cert-skill-pct">${grammar}%</span></div>
        <div class="cert-skill-bar"><div class="cert-skill-fill" style="width:${grammar}%"></div></div>
      </div>
      <div class="cert-skill">
        <div class="cert-skill-top"><span class="cert-skill-name">Vocabulario</span><span class="cert-skill-pct">${vocab}%</span></div>
        <div class="cert-skill-bar"><div class="cert-skill-fill" style="width:${vocab}%"></div></div>
      </div>
      <div class="cert-skill">
        <div class="cert-skill-top"><span class="cert-skill-name">Reading</span><span class="cert-skill-pct">${reading}%</span></div>
        <div class="cert-skill-bar"><div class="cert-skill-fill" style="width:${reading}%"></div></div>
      </div>
      <div class="cert-skill">
        <div class="cert-skill-top"><span class="cert-skill-name">Writing</span><span class="cert-skill-pct">${writing}%</span></div>
        <div class="cert-skill-bar"><div class="cert-skill-fill" style="width:${writing}%"></div></div>
      </div>
    </div>

    <div style="text-align:center">
      <div class="cert-xp">⚡ ${xp.toLocaleString()} XP acumulados</div>
    </div>

    <div class="cert-footer">
      <div class="cert-date">Emitido el ${date}</div>
      <div class="cert-issuer">LeoEnglish — Plataforma de inglés A1→C1 · Basada en el MCER</div>
    </div>

    <div class="cert-actions">
      <button class="btn-cert btn-print" onclick="window.print()">🖨️ Imprimir / Guardar PDF</button>
      <button class="btn-cert btn-back"  onclick="window.close()">✕ Cerrar</button>
    </div>
  </div>
</body>
</html>`;

      const win = window.open('', '_blank');
      if (win) {
        win.document.write(html);
        win.document.close();
        window.showToast?.(`✅ Certificado ${level} generado`, 'success');
      } else {
        window.showToast?.('Activa las ventanas emergentes para ver el certificado.', 'warn');
      }
    },

    // ── getPortfolioSummary ────────────────────────────────────
    // Resumen del portfolio para mostrar en el dashboard
    getPortfolioSummary() {
      const s = window.state;
      if (!s) return null;

      const levels = ['A1', 'A2', 'B1', 'B2', 'C1'];
      const cefr   = window.cefrFramework;

      return levels.map(level => {
        const req = cefr?.evidenceRequirements?.[level];
        const completed = req ? this._levelComplete(level, req, s) : false;
        return { level, completed };
      });
    },

    _levelComplete(level, req, s) {
      const grammarPct = window.calcSkillPct?.('grammar') ?? 0;
      const vocabPct   = window.calcSkillPct?.('vocab')   ?? 0;
      const readingPct = window.calcSkillPct?.('reading') ?? 0;
      const writingPct = window.calcSkillPct?.('writing') ?? 0;
      const xp         = s?.xp ?? 0;

      return (
        grammarPct  >= (req.grammar?.minScore  || 0) &&
        vocabPct    >= (req.vocab?.minScore    || 0) &&
        readingPct  >= (req.reading?.minScore  || 0) &&
        writingPct  >= (req.writing?.minScore  || 0) &&
        xp          >= (req.totalXP            || 0)
      );
    },

    // ── renderPortfolioMiniWidget ─────────────────────────────
    // Renderiza un widget compacto del portfolio en el dashboard
    renderPortfolioMiniWidget() {
      const el = document.getElementById('portfolio-mini-widget');
      if (!el) return;

      const summary = this.getPortfolioSummary();
      if (!summary) { el.style.display = 'none'; return; }

      const levelColors = {
        A1:'#22C55E', A2:'#3B82F6', B1:'#F59E0B', B2:'#CF2B2B', C1:'#8B5CF6'
      };

      el.style.display = 'block';
      el.innerHTML = `
        <div style="font-size:11px;font-weight:800;color:var(--text-4);letter-spacing:.06em;
            text-transform:uppercase;margin-bottom:8px;">📜 Portfolio MCER</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          ${summary.map(({ level, completed }) => `
            <div style="
              padding:6px 12px;border-radius:8px;font-size:11px;font-weight:900;
              background:${completed ? levelColors[level] + '20' : 'var(--bg-3)'};
              border:1.5px solid ${completed ? levelColors[level] + '50' : 'var(--border)'};
              color:${completed ? levelColors[level] : 'var(--text-4)'};
              cursor:${completed ? 'pointer' : 'default'};
              transition:transform .15s;"
              ${completed ? `onclick="window.PortfolioGenerator.generateCertificate('${level}')" title="Descargar certificado ${level}"` : ''}
            >
              ${completed ? '✓ ' : ''}${level}
            </div>
          `).join('')}
        </div>
        <div style="font-size:10px;color:var(--text-4);margin-top:6px;">
          ${summary.filter(l => l.completed).length} de 5 niveles certificados ·
          <span style="cursor:pointer;color:var(--navy);font-weight:700;"
            onclick="window.showScreen?.('cefr-portfolio')">
            Ver portfolio completo →
          </span>
        </div>`;
    }
  };

  // ============================================================
  // 3. INTEGRACIÓN CON EL DASHBOARD
  // Parcheamos renderDashboard para incluir el widget del portfolio
  // ============================================================
  function initAdaptivePortfolio() {
    const origRender = window.renderDashboard;
    if (typeof origRender === 'function' && !origRender._portfolioPatchApplied) {
      window.renderDashboard = function () {
        origRender.apply(this, arguments);
        setTimeout(() => {
          window.PortfolioGenerator?.renderPortfolioMiniWidget?.();
        }, 120);
      };
      window.renderDashboard._portfolioPatchApplied = true;
    }

    console.log('[LeoEnglish] data-adaptive-portfolio.js cargado — AdaptiveEngine + PortfolioGenerator listos.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAdaptivePortfolio);
  } else {
    initAdaptivePortfolio();
  }

})();
