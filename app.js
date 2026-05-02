// app.js v3.5 — MOTOR COMPLETO LEOENGLISH (Firebase, Roles, Admin Preview, UX Auth & Guided Route)

import { auth, db, googleProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, doc, setDoc, getDoc, collection, getDocs } from './firebase-config.js';

// ============================================================
// ESTADO GLOBAL
// ============================================================
let state = {
    role: 'student', 
    adminView: false, 
    xp: 0,
    level: 1,
    streak: 1,
    dailyXP: 0,
    dailyGoal: 50,
    totalAnswers: 0,
    correctAnswers: 0,
    modulesCompleted: 0,
    activityLog: [],
    scores: {
        to_be_pronouns: null, articles_dem: null, possessives: null, there_is_are: null,
        present_simple: null, present_cont: null, simple_vs_cont: null,
        numbers: null, past_to_be: null, past_simple: null, future_going_to: null, 
        prepositions: null, imperatives: null, can_could: null, future_will: null,
        comparisons: null, quantifiers: null, past_continuous: null, present_perfect: null,
        future_mixed: null, modals_obligation: null, conditionals: null, phrasal_gerunds: null
    },
    readingScores: {},
    writingDone: {},
    vocabScores: {},
    userName: 'Estudiante'
};

// ============================================================
// ESTADO DE SESIÓN (no persiste)
// ============================================================
let isChecking = false;
let currentModuleId = '';
let currentExerciseIdx = 0;
let currentScore = 0;
let currentErrors = 0;
let currentReadingId = '';
let currentReadingQIdx = 0;
let currentReadingScore = 0;
let vocabCurrentTopic = null;
let vocabMode = 'flash';

// ============================================================
// AUTENTICACIÓN Y PERSISTENCIA (FIREBASE)
// ============================================================

onAuthStateChanged(auth, (user) => {
    const loginOverlay = document.getElementById('login-overlay');
    if (user) {
        if (loginOverlay) loginOverlay.classList.add('hidden');
        state.userName = user.displayName || user.email.split('@')[0];
        loadState(user.uid);
    } else {
        if (loginOverlay) loginOverlay.classList.remove('hidden');
    }
});

// NUEVA FUNCIÓN: Intercambiar vistas de Login y Registro
window.toggleAuthView = function(view) {
    const loginView = document.getElementById('login-view');
    const registerView = document.getElementById('register-view');
    const authTitle = document.getElementById('auth-title');
    
    if (view === 'register') {
        if(loginView) loginView.style.display = 'none';
        if(registerView) registerView.style.display = 'block';
        if(authTitle) authTitle.textContent = 'Crea tu cuenta';
    } else {
        if(registerView) registerView.style.display = 'none';
        if(loginView) loginView.style.display = 'block';
        if(authTitle) authTitle.textContent = '¡Hola! Inicia sesión';
    }
};

window.handleGoogleLogin = async function() {
    try {
        await signInWithPopup(auth, googleProvider);
        window.showToast('¡Bienvenido!', 'success');
    } catch (error) {
        console.error(error);
        window.showToast('Error al iniciar con Google', 'error');
    }
};

window.handleEmailLogin = async function() {
    const email = document.getElementById('login-email').value.trim();
    const pass = document.getElementById('login-password').value.trim();
    if(!email || !pass) return window.showToast('Completa los campos', 'warn');
    
    try {
        await signInWithEmailAndPassword(auth, email, pass);
        window.showToast('Sesión iniciada', 'success');
    } catch (error) {
        console.error(error);
        window.showToast('Credenciales incorrectas', 'error');
    }
};

window.handleEmailRegister = async function() {
    const email = document.getElementById('reg-email').value.trim();
    const pass = document.getElementById('reg-password').value.trim();
    const name = document.getElementById('reg-name').value.trim();

    if(!email || !pass || !name) return window.showToast('Completa todos los campos', 'warn');
    if(pass.length < 6) return window.showToast('La contraseña debe tener al menos 6 caracteres', 'warn');
    
    try {
        await createUserWithEmailAndPassword(auth, email, pass);
        state.userName = name; // Guardamos el nombre real
        await saveState(); 
        window.showToast('Cuenta creada con éxito', 'success');
    } catch (error) {
        console.error(error);
        window.showToast('Error al crear cuenta. Quizás ya existe.', 'error');
    }
};

window.handleLogout = async function() {
    try {
        await signOut(auth);
        
        // Limpiamos el estado global
        state = { 
            role: 'student', adminView: false, xp: 0, level: 1, streak: 1, dailyXP: 0, dailyGoal: 50, 
            totalAnswers: 0, correctAnswers: 0, modulesCompleted: 0, activityLog: [], 
            scores: {
                to_be_pronouns: null, articles_dem: null, possessives: null, there_is_are: null,
                present_simple: null, present_cont: null, simple_vs_cont: null,
                numbers: null, past_to_be: null, past_simple: null, future_going_to: null, 
                prepositions: null, imperatives: null, can_could: null, future_will: null,
                comparisons: null, quantifiers: null, past_continuous: null, present_perfect: null,
                future_mixed: null, modals_obligation: null, conditionals: null, phrasal_gerunds: null
            }, 
            readingScores: {}, writingDone: {}, vocabScores: {}, userName: 'Estudiante' 
        };
        
        // Limpiamos los inputs
        const elLogin = document.getElementById('login-email'); if(elLogin) elLogin.value = '';
        const elPass = document.getElementById('login-password'); if(elPass) elPass.value = '';
        const elRegName = document.getElementById('reg-name'); if(elRegName) elRegName.value = '';
        const elRegEmail = document.getElementById('reg-email'); if(elRegEmail) elRegEmail.value = '';
        const elRegPass = document.getElementById('reg-password'); if(elRegPass) elRegPass.value = '';
        
        // Devolvemos la vista al Login por si cerraron sesión desde otra vista
        window.toggleAuthView('login');
        
        window.showScreen('dashboard');
        window.showToast('Sesión cerrada', 'success');
    } catch (error) {
        window.showToast('Error al cerrar sesión', 'error');
    }
};

async function saveState() {
    if (!auth.currentUser) return;
    try {
        const userRef = doc(db, "users", auth.currentUser.uid);
        await setDoc(userRef, state, { merge: true });
    } catch(e) {
        console.error("Error guardando progreso: ", e);
    }
}

async function loadState(uid) {
    try {
        const userRef = doc(db, "users", uid);
        const docSnap = await getDoc(userRef);
        
        if (docSnap.exists()) {
            state = { ...state, ...docSnap.data() };
        } 
        
        // OVERRIDE DE SEGURIDAD PARA EL ADMIN
        if (auth.currentUser && auth.currentUser.email === 'joseleonardobecerrac@gmail.com') {
            state.role = 'admin';
        } else if (!docSnap.exists()) {
            state.role = 'student';
        }
        
        await saveState();
        updateHeaderUI();
        
        // LÓGICA PARA MOSTRAR/OCULTAR MODO ADMIN
        const adminZone = document.getElementById('admin-zone');
        if (adminZone && auth.currentUser) {
            if (state.role === 'admin') {
                adminZone.style.display = 'block';
            } else {
                adminZone.style.display = 'none';
            }
        }
        
        window.renderDashboard();
        lucide.createIcons();
    } catch(e) {
        console.error("Error cargando progreso: ", e);
    }
}

// ============================================================
// INICIALIZACIÓN
// ============================================================
window.onload = function() {
    lucide.createIcons();
};

function setGreeting() {
    const h = new Date().getHours();
    const g = h < 12 ? 'Buenos días' : h < 19 ? 'Buenas tardes' : 'Buenas noches';
    const el = document.getElementById('greeting-text');
    if (el) el.textContent = `${g}, ${state.userName}!`;
}

// ============================================================
// NAVEGACIÓN
// ============================================================
window.showScreen = function(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const el = document.getElementById('screen-' + screenId);
    if (el) { el.classList.add('active'); el.scrollTop = 0; }
    document.getElementById('main-content').scrollTop = 0;

    if (screenId === 'dashboard') window.renderDashboard();
    else if (screenId === 'reading-hub') window.renderReadingHub();
    else if (screenId === 'writing-hub') window.renderWritingHub();
    else if (screenId === 'vocab-hub') window.renderVocabHub();
    else if (screenId === 'settings') window.renderSettings();
    lucide.createIcons();
};

window.setActiveNav = function(btn) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
};

window.setActiveNavById = function(id) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const dashBtn = document.querySelector(`.nav-btn[onclick*="${id}"]`);
    if (dashBtn) dashBtn.classList.add('active');
};

window.toggleSidebar = function() {
    const sb = document.getElementById('sidebar');
    const icon = document.getElementById('toggle-icon');
    sb.classList.toggle('collapsed');
    const collapsed = sb.classList.contains('collapsed');
    icon.setAttribute('data-lucide', collapsed ? 'panel-left-open' : 'panel-left-close');
    lucide.createIcons();
};


// ============================================================
// DASHBOARD & LEADERBOARD
// ============================================================
window.renderDashboard = function() {
    updateHeaderUI();
    setGreeting();

    const acc = state.totalAnswers > 0 ? Math.round((state.correctAnswers / state.totalAnswers) * 100) + '%' : '—';
    safeSet('stat-xp', state.xp);
    safeSet('stat-done', state.modulesCompleted);
    safeSet('stat-streak', state.streak);
    safeSet('stat-accuracy', acc);

    const validModuleKeys = Object.keys(modulesData);
    const grammarScores = validModuleKeys.map(k => state.scores[k] || 0);
    const grammar = grammarScores.length ? Math.round(grammarScores.reduce((a,b)=>a+b,0) / grammarScores.length) : 0;
    
    const reading = Object.values(state.readingScores).length ? Math.round(Object.values(state.readingScores).reduce((a,b)=>a+b,0) / Object.values(state.readingScores).length) : 0;
    const writing = Object.values(state.writingDone).length ? Math.round(Object.values(state.writingDone).reduce((a,b)=>a+b,0) / Object.values(state.writingDone).length) : 0;
    const vocab = Object.values(state.vocabScores).length ? Math.round(Object.values(state.vocabScores).reduce((a,b)=>a+b,0) / Object.values(state.vocabScores).length) : 0;

    const skills = [
        { name: 'Gramática', val: grammar, color: '#534AB7' },
        { name: 'Vocabulario', val: vocab, color: '#1D9E75' },
        { name: 'Reading', val: reading, color: '#378ADD' },
        { name: 'Writing', val: writing, color: '#D85A30' }
    ];
    
    const barsEl = document.getElementById('skills-bars');
    if (barsEl) {
        barsEl.innerHTML = skills.map(s => `
            <div class="skill-row-item">
                <div class="skill-info"><span>${s.name}</span><span>${s.val}%</span></div>
                <div class="s-bar"><div class="s-fill" style="width:${s.val}%;background:${s.color}"></div></div>
            </div>`).join('');
    }

    const allScores = [grammar, reading, writing, vocab].filter(v => v > 0);
    const totalAvg = allScores.length ? Math.round(allScores.reduce((a,b)=>a+b,0)/allScores.length) : 0;
    safeSet('total-progress-pct', totalAvg + '%');
    const fill = document.getElementById('total-progress-fill');
    if (fill) fill.style.width = totalAvg + '%';

    renderFeedback(grammar, reading, writing, vocab);

    const rank = getrank(totalAvg);
    safeSet('rank-display', rank.name);
    const cefr = document.getElementById('cefr-badge');
    if (cefr) { cefr.textContent = rank.cefr; }

    const grid = document.getElementById('modules-status-grid');
    if (grid) {
        grid.innerHTML = '';
        
        const curriculum = [
            {
                levelName: 'Nivel A1: Fundamentos',
                color: '#38A169',
                modules: [
                    'to_be_pronouns', 'articles_dem', 'possessives', 'there_is_are',
                    'present_simple', 'present_cont', 'prepositions', 'imperatives',
                    'can_could', 'past_to_be', 'past_simple', 'future_going_to'
                ]
            },
            {
                levelName: 'Nivel A2: Explorador Avanzado',
                color: '#3182CE',
                modules: [
                    'comparisons', 'quantifiers', 'past_continuous', 'present_perfect',
                    'future_mixed', 'modals_obligation', 'conditionals', 'phrasal_gerunds'
                ]
            }
        ];

        let isLocked = false; 
        let globalModuleIndex = 1;

        curriculum.forEach(level => {
            const levelHeader = document.createElement('div');
            levelHeader.className = 'level-divider';
            levelHeader.innerHTML = `<h4 style="color:${level.color}; font-size:18px; font-weight:800; margin: 24px 0 16px 0; border-bottom: 2px solid ${level.color}30; padding-bottom: 8px;">${level.levelName}</h4>`;
            grid.appendChild(levelHeader);

            const levelGrid = document.createElement('div');
            levelGrid.className = 'modules-grid';
            levelGrid.style = 'margin-bottom: 32px;';

            level.modules.forEach(modId => {
                if(!modulesData[modId]) return; 

                const m = modulesData[modId];
                const score = state.scores[m.id];
                const isPassed = score !== null && score >= 80;
                
                // Lógica de visualización con el Modo Administrador
                let visualLocked = isLocked;
                if (state.role === 'admin' && state.adminView) {
                    visualLocked = false; // El admin rompe visualmente el candado
                }

                const isCurrent = !isPassed && !isLocked;

                const div = document.createElement('div');
                div.className = `mod-card ${isPassed ? 'mod-done' : ''} ${(!isPassed && !visualLocked) ? 'mod-current' : ''} ${visualLocked ? 'mod-locked' : ''}`;

                if (visualLocked) {
                    div.innerHTML = `
                        <div class="mod-icon-wrap">
                            <i data-lucide="lock"></i>
                        </div>
                        <div style="flex:1;min-width:0">
                            <div class="mod-title">${globalModuleIndex}. ${m.title}</div>
                            <div class="mod-status" style="color:#A0AEC0">Bloqueado</div>
                        </div>`;
                    div.onclick = () => window.showToast('Debes aprobar la lección anterior con 80% o más.', 'warn');
                } else if (isPassed) {
                    div.innerHTML = `
                        <div class="mod-icon-wrap" style="background:${m.color}18;color:${m.color}">
                            <i data-lucide="check-circle"></i>
                        </div>
                        <div style="flex:1;min-width:0">
                            <div class="mod-title">${globalModuleIndex}. ${m.title}</div>
                            <div class="mod-status" style="color:#38A169">✓ Aprobado: ${score}%</div>
                            <div class="mod-score-bar"><div class="mod-score-fill" style="width:${score}%;background:${m.color}"></div></div>
                        </div>`;
                    div.onclick = () => window.openModule(m.id);
                } else {
                    // Diseño desbloqueado (o Current normal)
                    const isAdminBypassed = state.adminView && !isCurrent;
                    
                    div.innerHTML = `
                        <div class="mod-icon-wrap" style="background:${m.color};color:white">
                            <i data-lucide="${isAdminBypassed ? 'unlock' : 'play'}"></i>
                        </div>
                        <div style="flex:1;min-width:0">
                            <div class="mod-title">${globalModuleIndex}. ${m.title}</div>
                            <div class="mod-status" style="color:var(--primary-mid);font-weight:800;">
                                ${isAdminBypassed ? 'Admin: Desbloqueado' : 'Siguiente lección'}
                            </div>
                            ${score !== null ? `<div style="font-size:11px; color:#E53E3E; margin-top:4px;">Último intento: ${score}% (Necesitas 80%)</div>` : ''}
                        </div>`;
                    div.onclick = () => window.openModule(m.id);
                }
                
                // El motor real sigue bloqueando el resto si no has superado este
                if (!isPassed) {
                    isLocked = true; 
                }
                
                levelGrid.appendChild(div);
                globalModuleIndex++;
            });

            grid.appendChild(levelGrid);
        });
        
        lucide.createIcons();
    }

    renderActivity();
    renderLeaderboard();
};

async function renderLeaderboard() {
    const lbContainer = document.getElementById('leaderboard-list');
    if (!lbContainer) return;

    try {
        const usersRef = collection(db, "users");
        const snapshot = await getDocs(usersRef);
        
        let usersList = [];
        snapshot.forEach(doc => {
            const data = doc.data();
            usersList.push({
                id: doc.id,
                name: data.userName || 'Jugador',
                xp: data.xp || 0,
                level: data.level || 1
            });
        });

        usersList.sort((a, b) => b.xp - a.xp);

        if (usersList.length === 0) {
            lbContainer.innerHTML = '<div class="activity-empty">Aún no hay datos familiares.</div>';
            return;
        }

        lbContainer.innerHTML = usersList.map((u, index) => {
            const isFirst = index === 0;
            const isMe = auth.currentUser && auth.currentUser.uid === u.id;
            const rankDisplay = isFirst ? '👑' : `${index + 1}`;
            const initial = u.name.charAt(0).toUpperCase();
            
            return `
            <div class="leaderboard-item ${isMe ? 'lb-me' : ''}">
                <div class="lb-rank ${isFirst ? 'rank-1' : ''}">${rankDisplay}</div>
                <div class="lb-avatar">${initial}</div>
                <div class="lb-info">
                    <span class="lb-name">${u.name} ${isMe ? '(Tú)' : ''}</span>
                    <span class="lb-level">Nivel ${u.level}</span>
                </div>
                <div class="lb-xp">${u.xp} XP</div>
            </div>`;
        }).join('');

    } catch (error) {
        console.error("Error cargando leaderboard:", error);
        lbContainer.innerHTML = '<div class="activity-empty" style="color:#E53E3E;">Error al cargar el ranking.</div>';
    }
}

function renderFeedback(grammar, reading, writing, vocab) {
    const el = document.getElementById('teacher-feedback');
    if (!el) return;
    const items = [];
    if (state.modulesCompleted === 0) {
        items.push({ type: 'fb-info', icon: 'info', text: '¡Bienvenido! Completa tu primer módulo para recibir feedback personalizado.' });
    } else {
        if (grammar >= 80) items.push({ type: 'fb-success', icon: 'check-circle', text: `Excelente dominio de la gramática (${grammar}%). ¡Sigue así!` });
        else if (grammar > 0) items.push({ type: 'fb-warn', icon: 'alert-triangle', text: `Tu gramática está en ${grammar}%. Repasa los tiempos verbales.` });
        
        if (reading >= 80) items.push({ type: 'fb-success', icon: 'check-circle', text: `Muy buena comprensión lectora (${reading}%).` });
        else if (reading > 0) items.push({ type: 'fb-warn', icon: 'alert-triangle', text: `Practica más reading. Tu comprensión actual: ${reading}%.` });
        else items.push({ type: 'fb-info', icon: 'book-open', text: 'Aún no has practicado Reading. ¡Prueba los textos graduados!' });
        
        if (writing > 0 && writing < 70) items.push({ type: 'fb-warn', icon: 'pen-line', text: `Tu writing necesita práctica. Intenta los ejercicios guiados.` });
        if (vocab > 0) items.push({ type: 'fb-success', icon: 'layers', text: `Has estudiado vocabulario con ${vocab}% de precisión.` });
    }
    el.innerHTML = items.map(i => `<div class="fb-item ${i.type}"><i data-lucide="${i.icon}"></i><span>${i.text}</span></div>`).join('') || '<div class="fb-item fb-info"><i data-lucide="info"></i><span>Sigue completando módulos.</span></div>';
}

function renderActivity() {
    const el = document.getElementById('activity-log');
    if (!el) return;
    if (state.activityLog.length === 0) {
        el.innerHTML = '<div class="activity-empty">Aún no hay actividad. ¡Empieza una lección!</div>';
        return;
    }
    el.innerHTML = state.activityLog.slice(0, 6).map(a => `
        <div class="activity-item">
            <div class="activity-dot" style="background:${a.color||'#534AB7'}"></div>
            <div class="activity-text">${a.text}</div>
            <div class="activity-xp">+${a.xp} XP</div>
            <div class="activity-time">${a.time}</div>
        </div>`).join('');
}

function getrank(avg) {
    if (avg >= 90) return { name: 'Maestro del Inglés', cefr: 'B1' };
    if (avg >= 75) return { name: 'Explorador Avanzado', cefr: 'A2+' };
    if (avg >= 50) return { name: 'Viajero del Idioma', cefr: 'A2' };
    if (avg >= 25) return { name: 'Aprendiz Curioso', cefr: 'A1+' };
    return { name: 'Explorador Novato', cefr: 'A1' };
}

// ============================================================
// MÓDULOS DE GRAMÁTICA
// ============================================================
window.openModule = function(modId) {
    currentModuleId = modId;
    currentExerciseIdx = 0;
    currentScore = 0;
    currentErrors = 0;
    isChecking = false;
    window.showScreen('module');
    const mod = modulesData[modId];
    const content = document.getElementById('module-content');
    content.innerHTML = `
        <div class="lesson-header">
            <button class="back-btn" onclick="showScreen('dashboard');setActiveNavById('dashboard')">
                <i data-lucide="arrow-left"></i> Volver
            </button>
            <span class="lesson-title">${mod.title}</span>
        </div>
        <div class="tab-nav">
            <button class="tab-btn active" id="btn-theory" onclick="setPhase('theory')"><i data-lucide="book-open" style="width:14px;height:14px;display:inline;vertical-align:middle;margin-right:4px"></i> Teoría</button>
            <button class="tab-btn" id="btn-practice" onclick="setPhase('practice')"><i data-lucide="zap" style="width:14px;height:14px;display:inline;vertical-align:middle;margin-right:4px"></i> Ejercicios (${mod.exercises.length})</button>
        </div>
        <div id="phase-content"></div>`;
    lucide.createIcons();
    window.setPhase('theory');
};

window.setPhase = function(phase) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById('btn-' + phase);
    if (btn) btn.classList.add('active');
    const mod = modulesData[currentModuleId];
    const content = document.getElementById('phase-content');
    
    if (phase === 'theory') {
        content.innerHTML = `
            <div class="card-theory animate-pop">${mod.theory}
                <div style="text-align:right;margin-top:20px">
                    <button class="btn-check" onclick="setPhase('practice')">
                        <i data-lucide="zap"></i> Empezar ejercicios →
                    </button>
                </div>
            </div>`;
        lucide.createIcons();
    } else {
        currentExerciseIdx = 0; currentScore = 0; currentErrors = 0; isChecking = false;
        renderExercise();
    }
};

function renderExercise() {
    isChecking = false;
    const mod = modulesData[currentModuleId];
    const q = mod.exercises[currentExerciseIdx];
    const dots = mod.exercises.map((_, i) => `<div class="ex-dot ${i < currentExerciseIdx ? 'done' : i === currentExerciseIdx ? 'current' : ''}"></div>`).join('');
    const typeLabel = q.type === 'choice' ? 'Selección múltiple' : q.type === 'write' ? 'Escritura' : 'Ordenar';
    const typeIcon = q.type === 'choice' ? 'list' : q.type === 'write' ? 'pen-line' : 'move';

    let bodyHtml = '';
    if (q.type === 'choice') {
        bodyHtml = `<div class="opts-grid">${q.opts.map(o => `<button class="opt-btn" onclick="checkChoice('${o.replace(/'/g,"\\'")}','${q.a.replace(/'/g,"\\'")}',this)">${o}</button>`).join('')}</div>`;
    } else if (q.type === 'write') {
        bodyHtml = `
            <input type="text" id="write-answer" class="write-input" placeholder="Escribe tu respuesta aquí..."
                onkeypress="if(event.key==='Enter')checkWrite()" autocomplete="off">
            <div class="btn-row">
                <button class="btn-check" onclick="checkWrite()"><i data-lucide="check"></i> Comprobar</button>
            </div>`;
    } else if (q.type === 'order') {
        window.orderAvail = [...q.words].sort(() => Math.random() - 0.5);
        window.orderSel = [];
        window.orderCorrect = q.a;
        bodyHtml = `<div id="order-ui"></div>`;
    }

    document.getElementById('phase-content').innerHTML = `
        <div class="exercise-card animate-pop">
            <div class="ex-meta"><i data-lucide="${typeIcon}"></i> ${typeLabel} · Ejercicio ${currentExerciseIdx + 1} / ${mod.exercises.length}</div>
            <div class="ex-progress">${dots}</div>
            <div class="ex-q">${q.q}</div>
            ${bodyHtml}
            <div id="ex-feedback"></div>
        </div>`;
    lucide.createIcons();
    if (q.type === 'order') drawOrderUI();
    if (q.type === 'write') setTimeout(() => { const inp = document.getElementById('write-answer'); if(inp) inp.focus(); }, 100);
}

function drawOrderUI() {
    const c = document.getElementById('order-ui');
    if (!c) return;
    const allDone = window.orderAvail.length === 0;
    c.innerHTML = `
        <div class="order-zone" id="order-zone">
            ${window.orderSel.length === 0 ? '<span style="color:#A0AEC0;font-size:13px">Toca las palabras para construir la frase...</span>' : ''}
            <div class="order-words-pool" style="justify-content:center">
                ${window.orderSel.map((w,i) => `<div class="order-word in-zone" onclick="moveWord(${i},'back')">${w}</div>`).join('')}
            </div>
        </div>
        <div class="order-words-pool">
            ${window.orderAvail.map((w,i) => `<div class="order-word" onclick="moveWord(${i},'add')">${w}</div>`).join('')}
        </div>
        <div class="btn-row">
            <button class="btn-check" onclick="checkOrder()" ${!allDone?'disabled style="opacity:0.5;cursor:not-allowed"':''}>
                <i data-lucide="check"></i> Evaluar frase
            </button>
            <button class="btn" style="padding:10px 18px;border:1.5px solid #E2E8F0;border-radius:12px;background:white;cursor:pointer;font-size:13px" onclick="resetOrder()">
                Reiniciar
            </button>
        </div>`;
    lucide.createIcons();
}

window.moveWord = function(idx, dir) {
    if (dir === 'add') { window.orderSel.push(window.orderAvail.splice(idx, 1)[0]); }
    else { window.orderAvail.push(window.orderSel.splice(idx, 1)[0]); }
    drawOrderUI();
};

window.resetOrder = function() {
    const all = [...window.orderSel, ...window.orderAvail].sort(() => Math.random() - 0.5);
    window.orderSel = []; window.orderAvail = all;
    drawOrderUI();
};

window.checkChoice = function(val, correct, btn) {
    if (isChecking) return;
    isChecking = true;
    state.totalAnswers++;
    document.querySelectorAll('.opt-btn').forEach(b => { b.disabled = true; });
    if (val === correct) {
        btn.classList.add('correct');
        state.correctAnswers++; currentScore++;
        showFeedback(true, `¡Correcto! "${correct}" es la respuesta exacta.`);
        addXP(10, true);
    } else {
        btn.classList.add('wrong');
        document.querySelectorAll('.opt-btn').forEach(b => { if (b.textContent === correct) b.classList.add('correct'); });
        currentErrors++;
        showFeedback(false, `Incorrecto. La respuesta correcta es "<strong>${correct}</strong>".`);
    }
    saveState();
    setTimeout(() => advanceExercise(), 1600);
};

window.checkWrite = function() {
    if (isChecking) return;
    const input = document.getElementById('write-answer');
    if (!input) return;
    const val = input.value.trim().toLowerCase();
    if (!val) { window.showToast('Escribe tu respuesta primero', 'warn'); return; }
    isChecking = true;
    state.totalAnswers++;
    const mod = modulesData[currentModuleId];
    const correct = mod.exercises[currentExerciseIdx].a.toLowerCase();
    
    if (val === correct) {
        input.classList.add('correct');
        state.correctAnswers++; currentScore++;
        showFeedback(true, `¡Perfecto! "${mod.exercises[currentExerciseIdx].a}" es correcto.`);
        addXP(15, true);
    } else {
        input.classList.add('wrong');
        input.value = mod.exercises[currentExerciseIdx].a;
        currentErrors++;
        showFeedback(false, `Incorrecto. La respuesta es "<strong>${mod.exercises[currentExerciseIdx].a}</strong>".`);
    }
    saveState();
    setTimeout(() => advanceExercise(), 1800);
};

window.checkOrder = function() {
    if (isChecking) return;
    isChecking = true;
    state.totalAnswers++;
    const sentence = window.orderSel.join(' ').trim();
    const zone = document.getElementById('order-zone');
    if (sentence === window.orderCorrect.trim()) {
        if (zone) zone.classList.add('correct');
        state.correctAnswers++; currentScore++;
        showFeedback(true, `¡Sintaxis perfecta! "${window.orderCorrect}"`);
        addXP(20, true);
    } else {
        if (zone) zone.classList.add('wrong');
        currentErrors++;
        showFeedback(false, `Incorrecto. La frase correcta es: "<strong>${window.orderCorrect}</strong>".`);
    }
    saveState();
    setTimeout(() => advanceExercise(), 2000);
};

function showFeedback(ok, msg) {
    const el = document.getElementById('ex-feedback');
    if (!el) return;
    el.innerHTML = `<div class="ex-feedback ${ok?'success':'error'}">
        <i data-lucide="${ok?'check-circle':'x-circle'}"></i><span>${msg}</span></div>`;
    lucide.createIcons();
}

function advanceExercise() {
    isChecking = false;
    currentExerciseIdx++;
    const mod = modulesData[currentModuleId];
    if (currentExerciseIdx < mod.exercises.length) {
        renderExercise();
    } else {
        finishModule();
    }
}

function finishModule() {
    const mod = modulesData[currentModuleId];
    const total = mod.exercises.length;
    const pct = Math.round((currentScore / total) * 100);
    const prev = state.scores[currentModuleId];
    state.scores[currentModuleId] = prev !== null ? Math.max(prev, pct) : pct;
    if (prev === null) state.modulesCompleted++;

    const xpBonus = pct >= 80 ? 60 : pct >= 60 ? 40 : 20;
    addXP(xpBonus, false);
    logActivity(`Módulo "${mod.title}" completado`, xpBonus, mod.color);

    const stars = pct >= 80 ? 3 : pct >= 60 ? 2 : 1;
    const starsHtml = [1,2,3].map(i => `<span class="star ${i<=stars?'lit':''}">★</span>`).join('');
    const msg = pct >= 80 ? '¡Dominio excelente! Eres un pro.' : pct >= 60 ? 'Buen trabajo. Repasa algún punto.' : 'Sigue practicando. ¡Tú puedes!';

    document.getElementById('phase-content').innerHTML = `
        <div class="results-card animate-pop">
            <div class="stars-row">${starsHtml}</div>
            <div class="results-score">${pct}%</div>
            <p class="results-msg">${msg}</p>
            <div class="results-detail">
                <span class="results-pill pill-good">✓ ${currentScore} correctas</span>
                <span class="results-pill pill-bad">✗ ${currentErrors} errores</span>
                <span class="results-pill pill-xp">+${xpBonus} XP</span>
            </div>
            <div class="btn-row">
                <button class="btn-check" onclick="setPhase('practice')" style="background:#718096">
                    <i data-lucide="refresh-cw"></i> Repetir
                </button>
                <button class="btn-check" onclick="showScreen('dashboard');setActiveNavById('dashboard')">
                    <i data-lucide="layout-dashboard"></i> Tablero
                </button>
            </div>
        </div>`;
    lucide.createIcons();
    saveState();
}
// ============================================================
// READING HUB
// Soporta: choice, True/False y fill
// ============================================================

window.renderReadingHub = function() {
    const el = document.getElementById('reading-hub-content');
    if (!el) return;

    el.innerHTML = `
        <div class="reading-grid">
            ${readingTexts.map(r => {
                const score = state.readingScores[r.id];
                const done = score != null;
                const totalQuestions = Array.isArray(r.qs) ? r.qs.length : r.questions;

                return `
                <div class="reading-card" onclick="openReading('${r.id}')">
                    <div class="reading-card-banner" style="background:${r.levelColor}"></div>
                    <div class="reading-card-body">
                        <span class="reading-level-badge" style="background:${r.levelColor}20;color:${r.levelColor}">
                            ${r.level} · ${r.topic}
                        </span>
                        <div class="reading-card-title">${r.title}</div>
                        <div class="reading-card-desc">${r.desc}</div>
                    </div>
                    <div class="reading-card-footer">
                        <span>${totalQuestions} preguntas</span>
                        <span style="font-weight:700;color:${done ? '#38A169' : '#A0AEC0'}">
                            ${done ? `✓ ${score}%` : 'Sin completar'}
                        </span>
                    </div>
                </div>`;
            }).join('')}
        </div>`;
};

window.openReading = function(id) {
    currentReadingId = id;
    currentReadingQIdx = 0;
    currentReadingScore = 0;
    isChecking = false;

    const r = readingTexts.find(x => x.id === id);
    if (!r) return;

    const el = document.getElementById('reading-hub-content');
    if (!el) return;

    el.innerHTML = `
        <div style="margin-bottom:12px">
            <button class="back-btn" onclick="renderReadingHub()">
                <i data-lucide="arrow-left"></i> Volver a textos
            </button>
        </div>

        <div class="reading-lesson-wrap">
            <div class="reading-text-area">
                <div class="reading-title">${r.title}</div>
                <div class="reading-meta">
                    Nivel ${r.level} · ${r.topic} · 
                    Toca las palabras 
                    <span style="border-bottom:2px solid #63B3ED;color:#2B6CB0;font-weight:600">
                        subrayadas
                    </span> 
                    para ver la traducción
                </div>
                <div class="reading-body">${r.body}</div>
            </div>

            <div class="reading-qs">
                <h4>Preguntas de comprensión</h4>
                <div id="reading-q-zone"></div>
            </div>
        </div>`;

    lucide.createIcons();
    renderReadingQ(r);
};

function normalizeSimpleAnswer(str) {
    return String(str || '')
        .trim()
        .toLowerCase()
        .replace(/[’]/g, "'")
        .replace(/[.,!?¿¡;:]/g, '')
        .replace(/\s+/g, ' ');
}

function renderReadingQ(r) {
    if (currentReadingQIdx >= r.qs.length) {
        finishReading(r);
        return;
    }

    const q = r.qs[currentReadingQIdx];
    window.currentReadingQuestion = q;
    isChecking = false;

    const zone = document.getElementById('reading-q-zone');
    if (!zone) return;

    let bodyHtml = '';

    if (!q.type || q.type === 'choice') {
        bodyHtml = `
            <div class="opts-grid">
                ${q.opts.map((o, i) => `
                    <button class="opt-btn" onclick="checkReadingQ(${i}, this)">
                        ${o}
                    </button>
                `).join('')}
            </div>`;
    }

    else if (q.type === 'fill') {
        bodyHtml = `
            <input 
                type="text" 
                id="rq-input" 
                class="write-input" 
                placeholder="Escribe la palabra exacta..." 
                autocomplete="off"
                onkeypress="if(event.key==='Enter')checkReadingFill()"
            >

            <div class="btn-row" style="margin-top:10px">
                <button class="btn-check" onclick="checkReadingFill()">
                    <i data-lucide="check"></i> Comprobar
                </button>
            </div>`;
    }

    else {
        bodyHtml = `
            <div class="ex-feedback error">
                <i data-lucide="alert-circle"></i>
                <span>Tipo de pregunta no soportado: ${q.type}</span>
            </div>`;
    }

    zone.innerHTML = `
        <div style="margin-bottom:10px;font-size:12px;color:#A0AEC0;font-weight:700">
            Pregunta ${currentReadingQIdx + 1} de ${r.qs.length}
        </div>

        <div class="ex-q" style="font-size:16px;text-align:left;margin-bottom:16px">
            ${q.q}
        </div>

        ${bodyHtml}

        <div id="rq-fb"></div>`;

    lucide.createIcons();

    if (q.type === 'fill') {
        setTimeout(() => {
            const input = document.getElementById('rq-input');
            if (input) input.focus();
        }, 100);
    }
}

window.checkReadingQ = function(chosen, btn) {
    if (isChecking) return;

    const q = window.currentReadingQuestion;
    if (!q) return;

    const correct = q.a;
    const exp = q.exp || '';

    isChecking = true;
    state.totalAnswers++;

    document.querySelectorAll('.opts-grid .opt-btn').forEach(b => {
        b.disabled = true;
    });

    const fbEl = document.getElementById('rq-fb');

    if (chosen === correct) {
        btn.classList.add('correct');
        state.correctAnswers++;
        currentReadingScore++;

        if (fbEl) {
            fbEl.innerHTML = `
                <div class="ex-feedback success">
                    <i data-lucide="check-circle"></i>
                    <span>¡Correcto! ${exp}</span>
                </div>`;
        }

        addXP(10, true);
    } else {
        btn.classList.add('wrong');

        const buttons = document.querySelectorAll('.opts-grid .opt-btn');
        if (buttons[correct]) buttons[correct].classList.add('correct');

        if (fbEl) {
            fbEl.innerHTML = `
                <div class="ex-feedback error">
                    <i data-lucide="x-circle"></i>
                    <span>Incorrecto. ${exp}</span>
                </div>`;
        }
    }

    lucide.createIcons();
    saveState();

    setTimeout(() => {
        const r = readingTexts.find(x => x.id === currentReadingId);
        currentReadingQIdx++;
        renderReadingQ(r);
    }, 1800);
};

window.checkReadingFill = function() {
    if (isChecking) return;

    const q = window.currentReadingQuestion;
    const input = document.getElementById('rq-input');
    const fbEl = document.getElementById('rq-fb');

    if (!q || !input) return;

    const val = normalizeSimpleAnswer(input.value);
    const correct = normalizeSimpleAnswer(q.a);

    if (!val) {
        window.showToast('Escribe tu respuesta', 'warn');
        return;
    }

    isChecking = true;
    state.totalAnswers++;

    if (val === correct) {
        input.classList.add('correct');
        state.correctAnswers++;
        currentReadingScore++;

        if (fbEl) {
            fbEl.innerHTML = `
                <div class="ex-feedback success">
                    <i data-lucide="check-circle"></i>
                    <span>¡Correcto! ${q.exp || ''}</span>
                </div>`;
        }

        addXP(10, true);
    } else {
        input.classList.add('wrong');
        input.value = q.a;

        if (fbEl) {
            fbEl.innerHTML = `
                <div class="ex-feedback error">
                    <i data-lucide="x-circle"></i>
                    <span>Incorrecto. ${q.exp || `La respuesta correcta es "${q.a}".`}</span>
                </div>`;
        }
    }

    lucide.createIcons();
    saveState();

    setTimeout(() => {
        const r = readingTexts.find(x => x.id === currentReadingId);
        currentReadingQIdx++;
        renderReadingQ(r);
    }, 2200);
};

function finishReading(r) {
    const pct = Math.round((currentReadingScore / r.qs.length) * 100);
    const prev = state.readingScores[r.id];

    state.readingScores[r.id] = prev != null ? Math.max(prev, pct) : pct;

    const xpBonus = pct >= 80 ? 50 : pct >= 60 ? 30 : 15;

    addXP(xpBonus, false);
    logActivity(`Reading "${r.title}" completado`, xpBonus, r.levelColor);

    const stars = pct >= 80 ? 3 : pct >= 60 ? 2 : 1;
    const starsHtml = [1, 2, 3]
        .map(i => `<span class="star ${i <= stars ? 'lit' : ''}">★</span>`)
        .join('');

    const zone = document.getElementById('reading-q-zone');
    if (!zone) return;

    zone.innerHTML = `
        <div class="results-card animate-pop" style="border:none;box-shadow:none;padding:20px 0">
            <div class="stars-row">${starsHtml}</div>
            <div class="results-score">${pct}%</div>

            <p class="results-msg">
                ${pct >= 80 
                    ? '¡Lectura dominada!' 
                    : pct >= 60 
                        ? 'Buena comprensión. Relee el texto.' 
                        : 'Vuelve a leer el texto con calma.'}
            </p>

            <div class="results-detail">
                <span class="results-pill pill-good">✓ ${currentReadingScore}/${r.qs.length}</span>
                <span class="results-pill pill-xp">+${xpBonus} XP</span>
            </div>

            <div class="btn-row">
                <button class="btn-check" onclick="openReading('${r.id}')" style="background:#718096">
                    <i data-lucide="refresh-cw"></i> Repetir
                </button>

                <button class="btn-check" onclick="renderReadingHub()">
                    <i data-lucide="book-marked"></i> Más textos
                </button>
            </div>
        </div>`;

    lucide.createIcons();
    saveState();
}


// ============================================================
// WRITING HUB
// Soporta: order, transform, free, error y dictation
// ============================================================

window.renderWritingHub = function() {
    const el = document.getElementById('writing-hub-content');
    if (!el) return;

    el.innerHTML = `
        <div class="writing-grid">
            ${writingExercises.map(ex => {
                const done = state.writingDone[ex.id] != null;
                const score = state.writingDone[ex.id];

                return `
                <div class="writing-ex-card" onclick="openWriting('${ex.id}')">
                    <span class="writing-type-badge" style="background:${ex.typeColor}20;color:${ex.typeColor}">
                        ${ex.typeLabel}
                    </span>

                    <div class="writing-ex-title">${ex.title}</div>
                    <div class="writing-ex-desc">${ex.desc}</div>

                    ${done 
                        ? `<div style="margin-top:10px;font-size:12px;font-weight:700;color:#38A169">
                            ✓ Completado: ${score}%
                           </div>` 
                        : `<div style="margin-top:10px;font-size:12px;color:#A0AEC0">
                            Sin completar
                           </div>`}
                </div>`;
            }).join('')}
        </div>`;
};

window.openWriting = function(id) {
    const ex = writingExercises.find(x => x.id === id);
    if (!ex) return;

    window.currentWritingExercise = ex;
    window.currentWritingId = ex.id;

    const el = document.getElementById('writing-hub-content');
    if (!el) return;

    const icon = 
        ex.type === 'dictation' ? 'headphones' :
        ex.type === 'error' ? 'search' :
        ex.type === 'order' ? 'move' :
        ex.type === 'transform' ? 'pen-line' :
        ex.type === 'free' ? 'file-pen-line' :
        'pen-line';

    el.innerHTML = `
        <div style="margin-bottom:12px">
            <button class="back-btn" onclick="renderWritingHub()">
                <i data-lucide="arrow-left"></i> Volver
            </button>
        </div>

        <div class="exercise-card animate-pop">
            <div class="ex-meta">
                <i data-lucide="${icon}"></i> ${ex.title}
            </div>
            <div id="w-${ex.type}-ui"></div>
        </div>`;

    lucide.createIcons();

    if (ex.type === 'order') {
        window.wOrderTasks = ex.tasks;
        window.wOrderIdx = 0;
        window.wOrderScore = 0;
        renderWritingOrder();
    }

    else if (ex.type === 'transform') {
        window.wTransTasks = ex.tasks;
        window.wTransIdx = 0;
        window.wTransScore = 0;
        renderWritingTransform();
    }

    else if (ex.type === 'free') {
        window.wFreeTasks = ex.tasks;
        window.wFreeIdx = 0;
        window.wFreeScore = 0;
        renderWritingFree();
    }

    else if (ex.type === 'error') {
        window.wErrTasks = ex.tasks;
        window.wErrIdx = 0;
        window.wErrScore = 0;
        renderWritingError();
    }

    else if (ex.type === 'dictation') {
        window.wDicTasks = ex.tasks;
        window.wDicIdx = 0;
        window.wDicScore = 0;
        renderWritingDictation();
    }

    else {
        const ui = document.getElementById(`w-${ex.type}-ui`);
        if (ui) {
            ui.innerHTML = `
                <div class="ex-feedback error">
                    <i data-lucide="alert-circle"></i>
                    Tipo de ejercicio no soportado: ${ex.type}
                </div>`;
            lucide.createIcons();
        }
    }
};

function normalizeWritingAnswer(str) {
    return String(str || '')
        .trim()
        .toLowerCase()
        .replace(/[’]/g, "'")
        .replace(/["“”]/g, '')
        .replace(/[.,!?¿¡;:]/g, '')
        .replace(/'/g, '')
        .replace(/\s+/g, ' ');
}


// ------------------------------------------------------------
// 1. WRITING ORDER
// ------------------------------------------------------------

function renderWritingOrder() {
    const ui = document.getElementById('w-order-ui');
    if (!ui) return;

    const t = window.wOrderTasks[window.wOrderIdx];

    if (!t) {
        finishWriting(window.currentWritingId, window.wOrderScore, window.wOrderTasks.length);
        return;
    }

    window.woAvail = [...t.words].sort(() => Math.random() - 0.5);
    window.woSel = [];
    window.woCurrent = t.answer;

    ui.innerHTML = `
        <div style="margin-bottom:10px;font-size:12px;color:#A0AEC0;font-weight:700">
            Ejercicio ${window.wOrderIdx + 1} de ${window.wOrderTasks.length}
        </div>

        <div class="ex-q">${t.prompt}</div>

        <div class="tip-callout" style="margin-bottom:16px">
            <i data-lucide="lightbulb"></i> ${t.tip}
        </div>

        <div class="order-zone" id="wo-zone">
            <div class="order-words-pool" id="wo-sel"></div>
        </div>

        <div class="order-words-pool" id="wo-avail"></div>
        <div id="wo-fb"></div>

        <div class="btn-row">
            <button 
                class="btn-check" 
                id="wo-check-btn" 
                onclick="checkWritingOrder()" 
                disabled 
                style="opacity:0.5;cursor:not-allowed">
                <i data-lucide="check"></i> Comprobar
            </button>
        </div>`;

    lucide.createIcons();
    refreshWritingOrder();
}

function refreshWritingOrder() {
    const selEl = document.getElementById('wo-sel');
    const availEl = document.getElementById('wo-avail');

    if (selEl) {
        selEl.innerHTML = window.woSel
            .map((w, i) => `
                <div class="order-word in-zone" onclick="woMove(${i},'back')">
                    ${w}
                </div>
            `).join('') || 
            '<span style="color:#A0AEC0;font-size:13px">Selecciona palabras...</span>';
    }

    if (availEl) {
        availEl.innerHTML = window.woAvail
            .map((w, i) => `
                <div class="order-word" onclick="woMove(${i},'add')">
                    ${w}
                </div>
            `).join('');
    }

    const btn = document.getElementById('wo-check-btn');

    if (btn) {
        const ok = window.woAvail.length === 0;
        btn.disabled = !ok;
        btn.style.opacity = ok ? '1' : '0.5';
        btn.style.cursor = ok ? 'pointer' : 'not-allowed';
    }
}

window.woMove = function(i, dir) {
    if (dir === 'add') {
        window.woSel.push(window.woAvail.splice(i, 1)[0]);
    } else {
        window.woAvail.push(window.woSel.splice(i, 1)[0]);
    }

    refreshWritingOrder();
};

window.checkWritingOrder = function() {
    const sentence = window.woSel.join(' ').trim();
    const fb = document.getElementById('wo-fb');

    state.totalAnswers++;

    if (sentence === window.woCurrent.trim()) {
        state.correctAnswers++;
        window.wOrderScore++;

        if (fb) {
            fb.innerHTML = `
                <div class="ex-feedback success">
                    <i data-lucide="check-circle"></i> 
                    ¡Correcto! "${window.woCurrent}"
                </div>`;
        }

        addXP(15, true);
    } else {
        if (fb) {
            fb.innerHTML = `
                <div class="ex-feedback error">
                    <i data-lucide="x-circle"></i> 
                    La frase correcta es: <strong>${window.woCurrent}</strong>
                </div>`;
        }
    }

    lucide.createIcons();
    saveState();

    setTimeout(() => {
        window.wOrderIdx++;
        renderWritingOrder();
    }, 1800);
};


// ------------------------------------------------------------
// 2. WRITING TRANSFORM
// ------------------------------------------------------------

function renderWritingTransform() {
    const ui = document.getElementById('w-transform-ui');
    if (!ui) return;

    const t = window.wTransTasks[window.wTransIdx];

    if (!t) {
        finishWriting(window.currentWritingId, window.wTransScore, window.wTransTasks.length);
        return;
    }

    window.currentTransformTask = t;

    ui.innerHTML = `
        <div style="margin-bottom:10px;font-size:12px;color:#A0AEC0;font-weight:700">
            Ejercicio ${window.wTransIdx + 1} de ${window.wTransTasks.length}
        </div>

        <div class="ex-q" style="text-align:left">${t.prompt}</div>

        <div class="tip-callout" style="margin-bottom:14px">
            <i data-lucide="lightbulb"></i> ${t.tip}
        </div>

        <input 
            type="text" 
            id="wt-input" 
            class="write-input" 
            placeholder="Escribe la frase transformada..." 
            autocomplete="off"
            onkeypress="if(event.key==='Enter')checkWritingTransform()"
        >

        <div id="wt-fb"></div>

        <div class="btn-row">
            <button class="btn-check" onclick="checkWritingTransform()">
                <i data-lucide="check"></i> Comprobar
            </button>
        </div>`;

    lucide.createIcons();

    setTimeout(() => {
        const i = document.getElementById('wt-input');
        if (i) i.focus();
    }, 100);
}

window.checkWritingTransform = function() {
    const t = window.currentTransformTask;
    const inp = document.getElementById('wt-input');
    const fb = document.getElementById('wt-fb');

    if (!t || !inp) return;

    const val = normalizeWritingAnswer(inp.value);
    const correct = normalizeWritingAnswer(t.answer);

    if (!val) {
        window.showToast('Escribe tu respuesta', 'warn');
        return;
    }

    state.totalAnswers++;

    if (val === correct) {
        state.correctAnswers++;
        window.wTransScore++;
        inp.classList.add('correct');

        if (fb) {
            fb.innerHTML = `
                <div class="ex-feedback success">
                    <i data-lucide="check-circle"></i> ¡Perfecto!
                </div>`;
        }

        addXP(15, true);
    } else {
        inp.classList.add('wrong');

        if (fb) {
            fb.innerHTML = `
                <div class="ex-feedback error">
                    <i data-lucide="x-circle"></i> 
                    La respuesta correcta es: <strong>${t.answer}</strong>
                </div>`;
        }
    }

    lucide.createIcons();
    saveState();

    setTimeout(() => {
        window.wTransIdx++;
        renderWritingTransform();
    }, 1800);
};


// ------------------------------------------------------------
// 3. FREE WRITING
// ------------------------------------------------------------

function renderWritingFree() {
    const ui = document.getElementById('w-free-ui');
    if (!ui) return;

    const t = window.wFreeTasks[window.wFreeIdx];

    if (!t) {
        finishWriting(window.currentWritingId, window.wFreeScore, window.wFreeTasks.length);
        return;
    }

    ui.innerHTML = `
        <div style="margin-bottom:10px;font-size:12px;color:#A0AEC0;font-weight:700">
            Ejercicio ${window.wFreeIdx + 1} de ${window.wFreeTasks.length}
        </div>

        <div class="ex-q" style="text-align:left;margin-bottom:16px">
            ${t.prompt}
        </div>

        <div class="tip-callout" style="margin-bottom:12px">
            <i data-lucide="lightbulb"></i> 
            <strong>Guía:</strong> ${t.hint}
        </div>

        <div style="background:#F7FAFC;border:1px dashed #CBD5E0;border-radius:10px;padding:12px;margin-bottom:12px;font-size:13px;color:#718096">
            <strong>Ejemplo:</strong> ${t.example}
        </div>

        <textarea 
            id="wf-area" 
            class="writing-textarea" 
            placeholder="Escribe aquí tu respuesta en inglés..."></textarea>

        <div id="wf-fb"></div>

        <div class="btn-row">
            <button class="btn-check" onclick="checkFreeWriting(${t.minWords})">
                <i data-lucide="send"></i> Enviar
            </button>
        </div>`;

    lucide.createIcons();
}

window.checkFreeWriting = function(minWords) {
    const area = document.getElementById('wf-area');
    const fb = document.getElementById('wf-fb');

    if (!area) return;

    const val = area.value.trim();
    const words = val.split(/\s+/).filter(w => w.length > 0).length;

    if (words < 5) {
        window.showToast('Escribe al menos algunas oraciones.', 'warn');
        return;
    }

    state.totalAnswers++;

    if (words >= minWords) {
        state.correctAnswers++;
        window.wFreeScore++;

        if (fb) {
            fb.innerHTML = `
                <div class="ex-feedback success">
                    <i data-lucide="check-circle"></i> 
                    ¡Muy bien! Escribiste ${words} palabras. Tu producción escrita está mejorando.
                </div>`;
        }

        addXP(20, true);
    } else {
        if (fb) {
            fb.innerHTML = `
                <div class="ex-feedback error">
                    <i data-lucide="alert-circle"></i> 
                    Escribiste ${words} palabras. Intenta añadir más detalles. 
                    Mínimo esperado: ${minWords} palabras.
                </div>`;
        }
    }

    lucide.createIcons();
    saveState();

    setTimeout(() => {
        window.wFreeIdx++;
        renderWritingFree();
    }, 2200);
};


// ------------------------------------------------------------
// 4. ERROR CORRECTION
// ------------------------------------------------------------

function renderWritingError() {
    const ui = document.getElementById('w-error-ui');
    if (!ui) return;

    const t = window.wErrTasks[window.wErrIdx];

    if (!t) {
        finishWriting(window.currentWritingId, window.wErrScore, window.wErrTasks.length);
        return;
    }

    window.currentErrorTask = t;

    ui.innerHTML = `
        <div style="margin-bottom:10px;font-size:12px;color:#A0AEC0;font-weight:700">
            Ejercicio ${window.wErrIdx + 1} de ${window.wErrTasks.length}
        </div>

        <div class="ex-q" style="text-align:left;color:#E53E3E;text-decoration:line-through;font-size:18px">
            ${t.wrong}
        </div>

        <div class="tip-callout" style="margin-bottom:14px">
            <i data-lucide="lightbulb"></i> ${t.tip}
        </div>

        <input 
            type="text" 
            id="we-input" 
            class="write-input" 
            placeholder="Escribe la oración correcta..." 
            autocomplete="off"
            onkeypress="if(event.key==='Enter')checkWritingError()"
        >

        <div id="we-fb"></div>

        <div class="btn-row">
            <button class="btn-check" onclick="checkWritingError()">
                <i data-lucide="check"></i> Comprobar
            </button>
        </div>`;

    lucide.createIcons();

    setTimeout(() => {
        const i = document.getElementById('we-input');
        if (i) i.focus();
    }, 100);
}

window.checkWritingError = function() {
    const t = window.currentErrorTask;
    const inp = document.getElementById('we-input');
    const fb = document.getElementById('we-fb');

    if (!t || !inp) return;

    const val = normalizeWritingAnswer(inp.value);
    const correct = normalizeWritingAnswer(t.answer);

    if (!val) {
        window.showToast('Escribe tu respuesta', 'warn');
        return;
    }

    state.totalAnswers++;

    if (val === correct) {
        state.correctAnswers++;
        window.wErrScore++;
        inp.classList.add('correct');

        if (fb) {
            fb.innerHTML = `
                <div class="ex-feedback success">
                    <i data-lucide="check-circle"></i> 
                    ¡Corrección perfecta!
                </div>`;
        }

        addXP(15, true);
    } else {
        inp.classList.add('wrong');

        if (fb) {
            fb.innerHTML = `
                <div class="ex-feedback error">
                    <i data-lucide="x-circle"></i> 
                    Corrección sugerida: <strong>${t.answer}</strong>
                </div>`;
        }
    }

    lucide.createIcons();
    saveState();

    setTimeout(() => {
        window.wErrIdx++;
        renderWritingError();
    }, 2200);
};


// ------------------------------------------------------------
// 5. DICTATION
// ------------------------------------------------------------

function renderWritingDictation() {
    const ui = document.getElementById('w-dictation-ui');
    if (!ui) return;

    const t = window.wDicTasks[window.wDicIdx];

    if (!t) {
        finishWriting(window.currentWritingId, window.wDicScore, window.wDicTasks.length);
        return;
    }

    window.currentDictationTask = t;

    ui.innerHTML = `
        <div style="margin-bottom:10px;font-size:12px;color:#A0AEC0;font-weight:700">
            Dictado ${window.wDicIdx + 1} de ${window.wDicTasks.length}
        </div>

        <div class="ex-q" style="text-align:left;margin-bottom:14px">
            Escucha el audio y escribe exactamente la frase.
        </div>

        <div class="tip-callout" style="margin-bottom:14px">
            <i data-lucide="headphones"></i> 
            Puedes escuchar la frase varias veces antes de responder.
        </div>

        <div class="btn-row" style="margin-bottom:14px">
            <button class="btn-check" onclick="playCurrentDictation()" style="background:#805AD5">
                <i data-lucide="volume-2"></i> Escuchar
            </button>

            <button class="btn-check" onclick="playCurrentDictationSlow()" style="background:#718096">
                <i data-lucide="snail"></i> Lento
            </button>
        </div>

        <input 
            type="text" 
            id="wd-input" 
            class="write-input" 
            placeholder="Escribe lo que escuchas..." 
            autocomplete="off"
            onkeypress="if(event.key==='Enter')checkWritingDictation()"
        >

        <div id="wd-fb"></div>

        <div class="btn-row">
            <button class="btn-check" onclick="checkWritingDictation()">
                <i data-lucide="check"></i> Comprobar
            </button>
        </div>`;

    lucide.createIcons();

    setTimeout(() => {
        const i = document.getElementById('wd-input');
        if (i) i.focus();
    }, 100);
}

window.playCurrentDictation = function() {
    const t = window.currentDictationTask;
    if (!t) return;

    if (typeof window.playAudio === 'function') {
        window.playAudio(t.audio, 'en-US');
        return;
    }

    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(t.audio);
        utterance.lang = 'en-US';
        utterance.rate = 0.95;
        window.speechSynthesis.speak(utterance);
    } else {
        window.showToast('Tu navegador no soporta audio automático.', 'warn');
    }
};

window.playCurrentDictationSlow = function() {
    const t = window.currentDictationTask;
    if (!t) return;

    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(t.audio);
        utterance.lang = 'en-US';
        utterance.rate = 0.68;
        window.speechSynthesis.speak(utterance);
    } else if (typeof window.playAudio === 'function') {
        window.playAudio(t.audio, 'en-US');
    } else {
        window.showToast('Tu navegador no soporta audio automático.', 'warn');
    }
};

window.checkWritingDictation = function() {
    const t = window.currentDictationTask;
    const inp = document.getElementById('wd-input');
    const fb = document.getElementById('wd-fb');

    if (!t || !inp) return;

    const val = normalizeWritingAnswer(inp.value);
    const correct = normalizeWritingAnswer(t.answer);

    if (!val) {
        window.showToast('Escribe lo que escuchaste', 'warn');
        return;
    }

    state.totalAnswers++;

    if (val === correct) {
        state.correctAnswers++;
        window.wDicScore++;
        inp.classList.add('correct');

        if (fb) {
            fb.innerHTML = `
                <div class="ex-feedback success">
                    <i data-lucide="check-circle"></i> 
                    ¡Dictado correcto! ${t.tip || ''}
                </div>`;
        }

        addXP(18, true);
    } else {
        inp.classList.add('wrong');

        if (fb) {
            fb.innerHTML = `
                <div class="ex-feedback error">
                    <i data-lucide="x-circle"></i> 
                    La frase correcta es: <strong>${t.answer}</strong><br>
                    <small>${t.tip || ''}</small>
                </div>`;
        }
    }

    lucide.createIcons();
    saveState();

    setTimeout(() => {
        window.wDicIdx++;
        renderWritingDictation();
    }, 2600);
};


// ------------------------------------------------------------
// FINAL WRITING
// ------------------------------------------------------------

function getCurrentWritingUI() {
    return (
        document.getElementById('w-order-ui') ||
        document.getElementById('w-transform-ui') ||
        document.getElementById('w-free-ui') ||
        document.getElementById('w-error-ui') ||
        document.getElementById('w-dictation-ui')
    );
}

function finishWriting(id, score, total) {
    const pct = total > 0 ? Math.round((score / total) * 100) : 0;
    const prev = state.writingDone[id];

    state.writingDone[id] = prev != null ? Math.max(prev, pct) : pct;

    const xpBonus = pct >= 80 ? 40 : pct >= 60 ? 25 : 15;

    addXP(xpBonus, false);

    const ex = writingExercises.find(x => x.id === id);
    const title = ex ? ex.title : 'Writing';

    logActivity(`Writing "${title}" completado`, xpBonus, '#D85A30');

    const ui = getCurrentWritingUI();
    if (!ui) return;

    const stars = pct >= 80 ? 3 : pct >= 60 ? 2 : 1;
    const starsHtml = [1, 2, 3]
        .map(i => `<span class="star ${i <= stars ? 'lit' : ''}">★</span>`)
        .join('');

    ui.innerHTML = `
        <div class="results-card animate-pop" style="border:none;box-shadow:none;padding:20px 0">
            <div class="stars-row">${starsHtml}</div>
            <div class="results-score">${pct}%</div>

            <p class="results-msg">
                ${pct >= 80 
                    ? '¡Escritura excelente!' 
                    : pct >= 60 
                        ? 'Buen esfuerzo. Sigue practicando.' 
                        : 'La escritura mejora con práctica y corrección.'}
            </p>

            <div class="results-detail">
                <span class="results-pill pill-good">✓ ${score}/${total}</span>
                <span class="results-pill pill-xp">+${xpBonus} XP</span>
            </div>

            <div class="btn-row">
                <button class="btn-check" onclick="openWriting('${id}')" style="background:#718096">
                    <i data-lucide="refresh-cw"></i> Repetir
                </button>

                <button class="btn-check" onclick="renderWritingHub()">
                    <i data-lucide="pen-line"></i> Más ejercicios
                </button>
            </div>
        </div>`;

    lucide.createIcons();
    saveState();
}

// ============================================================
// VOCABULARY HUB CON WEB SPEECH API
// ============================================================
window.renderVocabHub = function() {
    const el = document.getElementById('vocab-hub-content');
    if (!el) return;
    el.innerHTML = `
        <div class="vocab-topics-grid" id="vocab-topics-grid">
            ${vocabTopics.map(t => {
                const score = state.vocabScores[t.id];
                return `<div class="vocab-topic-card" onclick="openVocabTopic('${t.id}')">
                    <div class="vocab-topic-icon">${t.icon}</div>
                    <div class="vocab-topic-title">${t.title}</div>
                    <div class="vocab-topic-count">${t.count} palabras</div>
                    ${score != null ? `<div style="margin-top:6px;font-size:12px;font-weight:700;color:#38A169">✓ ${score}%</div>` : ''}
                </div>`;
            }).join('')}
        </div>`;
};

window.openVocabTopic = function(id) {
    vocabCurrentTopic = vocabTopics.find(t => t.id === id);
    if (!vocabCurrentTopic) return;
    vocabMode = 'flash';
    const el = document.getElementById('vocab-hub-content');
    el.innerHTML = `
        <div style="margin-bottom:12px">
            <button class="back-btn" onclick="renderVocabHub()"><i data-lucide="arrow-left"></i> Volver a temas</button>
        </div>
        <div class="lesson-title" style="margin-bottom:16px">${vocabCurrentTopic.icon} ${vocabCurrentTopic.title}</div>
        <div class="vocab-tabs">
            <button class="vocab-tab active" id="vtab-flash" onclick="setVocabMode('flash',this)">Tarjetas</button>
            <button class="vocab-tab" id="vtab-match" onclick="setVocabMode('match',this)">Conectar</button>
            <button class="vocab-tab" id="vtab-quiz" onclick="setVocabMode('quiz',this)">Quiz</button>
        </div>
        <div id="vocab-mode-content"></div>`;
    lucide.createIcons();
    renderVocabFlash();
};

window.setVocabMode = function(mode, btn) {
    vocabMode = mode;
    document.querySelectorAll('.vocab-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if (mode === 'flash') renderVocabFlash();
    else if (mode === 'match') renderVocabMatch();
    else renderVocabQuiz();
};

function renderVocabFlash() {
    const c = document.getElementById('vocab-mode-content');
    const words = vocabCurrentTopic.words;
    c.innerHTML = `
        <p style="font-size:13px;color:#718096;margin-bottom:14px">Toca el ícono para escuchar, o toca la tarjeta para ver la traducción.</p>
        <div class="flashcard-grid">
            ${words.map((w,i) => `
                <div class="flashcard" id="fc${i}" onclick="this.classList.toggle('flipped')">
                    <div class="flashcard-inner">
                        <div class="flashcard-front">
                            <button class="btn-audio" onclick="playAudio('${w.en.replace(/'/g,"\\'")}', 'en-US', event)" title="Escuchar">
                                <i data-lucide="volume-2"></i>
                            </button>
                            <div class="card-word">${w.en}</div>
                            <div class="card-hint">Toca para ver</div>
                        </div>
                        <div class="flashcard-back">
                            <div class="card-word">${w.es}</div>
                            <div class="card-hint">${w.example}</div>
                        </div>
                    </div>
                </div>`).join('')}
        </div>`;
    lucide.createIcons();
}

function renderVocabMatch() {
    const c = document.getElementById('vocab-mode-content');
    const words = vocabCurrentTopic.words.slice(0, 8);
    const lefts = words.map((w, i) => ({ id: 'L' + i, text: w.en, pair: i }));
    const rights = [...words.map((w, i) => ({ id: 'R' + i, text: w.es, pair: i }))].sort(() => Math.random() - 0.5);
    window.matchState = { lefts, rights, matched: [], firstSel: null, errors: 0, correct: 0 };

    c.innerHTML = `
        <p style="font-size:13px;color:#718096;margin-bottom:14px">Conecta cada palabra con su traducción.</p>
        <div class="match-game-grid">
            <div class="match-col" id="match-left">${lefts.map(l=>`<button class="match-btn" id="${l.id}" onclick="selectMatch('${l.id}',${l.pair},'L')">${l.text}</button>`).join('')}</div>
            <div class="match-col" id="match-right">${rights.map(r=>`<button class="match-btn" id="${r.id}" onclick="selectMatch('${r.id}',${r.pair},'R')">${r.text}</button>`).join('')}</div>
        </div>
        <div id="match-result" style="margin-top:16px"></div>`;
}

window.selectMatch = function(id, pair, side) {
    const ms = window.matchState;
    const el = document.getElementById(id);
    if (!el || el.classList.contains('matched')) return;

    if (side === 'L') {
        const wordData = ms.lefts.find(l => l.id === id);
        if (wordData) window.playAudio(wordData.text, 'en-US');
    }

    if (!ms.firstSel) {
        if (ms.firstSel && ms.firstSel.id !== id) document.getElementById(ms.firstSel.id).classList.remove('selected');
        ms.firstSel = { id, pair, side };
        el.classList.add('selected');
    } else {
        if (ms.firstSel.id === id) { el.classList.remove('selected'); ms.firstSel = null; return; }
        if (ms.firstSel.side === side) {
            document.getElementById(ms.firstSel.id).classList.remove('selected');
            ms.firstSel = { id, pair, side }; el.classList.add('selected'); return;
        }
        if (ms.firstSel.pair === pair) {
            document.getElementById(ms.firstSel.id).classList.remove('selected');
            document.getElementById(ms.firstSel.id).classList.add('matched');
            el.classList.remove('selected'); el.classList.add('matched');
            ms.matched.push(pair); ms.correct++;
            addXP(5, true);
            if (ms.matched.length === ms.lefts.length) {
                const xp = 20; addXP(xp, false);
                state.vocabScores[vocabCurrentTopic.id] = 100;
                logActivity(`Vocabulario "${vocabCurrentTopic.title}" — Matching`, xp, '#1D9E75');
                document.getElementById('match-result').innerHTML = `<div class="ex-feedback success"><i data-lucide="check-circle"></i> ¡Completaste todas las parejas! +${xp} XP extra</div>`;
                lucide.createIcons(); saveState();
            }
        } else {
            document.getElementById(ms.firstSel.id).classList.remove('selected');
            el.classList.add('wrong-pair');
            document.getElementById(ms.firstSel.id).classList.add('wrong-pair');
            ms.errors++;
            setTimeout(() => {
                el.classList.remove('wrong-pair');
                if (document.getElementById(ms.firstSel?.id)) document.getElementById(ms.firstSel.id).classList.remove('wrong-pair');
            }, 600);
        }
        ms.firstSel = null;
    }
};

function renderVocabQuiz() {
    const words = vocabCurrentTopic.words;
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    window.vqTasks = shuffled.map(w => {
        const wrong = words.filter(x => x.en !== w.en).sort(() => Math.random() - 0.5).slice(0, 3).map(x => x.es);
        const opts = [w.es, ...wrong].sort(() => Math.random() - 0.5);
        return { q: `¿Cómo se dice en español: "${w.en}"?`, opts, answer: w.es };
    });
    window.vqIdx = 0; window.vqScore = 0;
    renderVocabQ();
}

function renderVocabQ() {
    const c = document.getElementById('vocab-mode-content');
    if (!c) return;
    if (window.vqIdx >= window.vqTasks.length) {
        const pct = Math.round((window.vqScore / window.vqTasks.length) * 100);
        const prev = state.vocabScores[vocabCurrentTopic.id];
        state.vocabScores[vocabCurrentTopic.id] = prev != null ? Math.max(prev, pct) : pct;
        const xpB = pct >= 80 ? 40 : 20;
        addXP(xpB, false);
        logActivity(`Vocab Quiz "${vocabCurrentTopic.title}"`, xpB, '#1D9E75');
        saveState();
        c.innerHTML = `
            <div class="results-card animate-pop" style="border:none;box-shadow:none;padding:20px 0">
                <div class="results-score">${pct}%</div>
                <p class="results-msg">${pct>=80?'¡Vocabulario dominado!':pct>=60?'Buen trabajo. Repasa las tarjetas.':'Vuelve a las tarjetas y repite el quiz.'}</p>
                <div class="results-detail">
                    <span class="results-pill pill-good">✓ ${window.vqScore}/${window.vqTasks.length}</span>
                    <span class="results-pill pill-xp">+${xpB} XP</span>
                </div>
                <div class="btn-row">
                    <button class="btn-check" onclick="setVocabMode('flash',document.getElementById('vtab-flash'))"><i data-lucide="layers"></i> Ver tarjetas</button>
                    <button class="btn-check" onclick="setVocabMode('quiz',document.getElementById('vtab-quiz'))" style="background:#718096"><i data-lucide="refresh-cw"></i> Repetir Quiz</button>
                </div>
            </div>`;
        lucide.createIcons(); return;
    }
    const q = window.vqTasks[window.vqIdx];
    isChecking = false;
    c.innerHTML = `
        <div style="margin-bottom:10px;font-size:12px;color:#A0AEC0;font-weight:700">Pregunta ${window.vqIdx+1} / ${window.vqTasks.length}</div>
        <div class="ex-q" style="text-align:left">${q.q}</div>
        <div class="opts-grid">
            ${q.opts.map(o=>`<button class="opt-btn" onclick="checkVocabQ('${o.replace(/'/g,"\\'")}','${q.answer.replace(/'/g,"\\'")}',this)">${o}</button>`).join('')}
        </div>
        <div id="vq-fb"></div>`;
    lucide.createIcons();
}

window.checkVocabQ = function(val, correct, btn) {
    if (isChecking) return;
    isChecking = true;
    state.totalAnswers++;
    document.querySelectorAll('#vocab-mode-content .opt-btn').forEach(b => b.disabled = true);
    if (val === correct) {
        btn.classList.add('correct');
        state.correctAnswers++; window.vqScore++;
        document.getElementById('vq-fb').innerHTML = `<div class="ex-feedback success"><i data-lucide="check-circle"></i> ¡Correcto!</div>`;
        addXP(8, true);
    } else {
        btn.classList.add('wrong');
        document.querySelectorAll('#vocab-mode-content .opt-btn').forEach(b => { if(b.textContent === correct) b.classList.add('correct'); });
        document.getElementById('vq-fb').innerHTML = `<div class="ex-feedback error"><i data-lucide="x-circle"></i> Era: "<strong>${correct}</strong>"</div>`;
    }
    lucide.createIcons();
    saveState();
    setTimeout(() => { window.vqIdx++; renderVocabQ(); }, 1600);
};

// ============================================================
// SETTINGS
// ============================================================
window.renderSettings = function() {
    const inp = document.getElementById('setting-name');
    if (inp) inp.value = state.userName;
    document.querySelectorAll('.goal-btn').forEach(b => {
        b.classList.toggle('active', parseInt(b.dataset.goal) === state.dailyGoal);
    });
};

window.setGoal = function(btn) {
    document.querySelectorAll('.goal-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.dailyGoal = parseInt(btn.dataset.goal);
    saveState();
};

window.saveSettings = function() {
    const inp = document.getElementById('setting-name');
    if (inp && inp.value.trim()) {
        state.userName = inp.value.trim();
        const nameEl = document.getElementById('user-name-display');
        if (nameEl) nameEl.textContent = state.userName;
        const init = document.getElementById('avatar-initials');
        if (init) init.textContent = state.userName.charAt(0).toUpperCase();
        saveState();
        window.showToast('Cambios guardados', 'success');
    }
};

window.confirmReset = function() {
    window.openModal(`
        <div style="text-align:center">
            <div style="font-size:40px;margin-bottom:16px">⚠️</div>
            <h3 style="font-size:18px;font-weight:700;margin-bottom:8px">¿Reiniciar progreso?</h3>
            <p style="color:#718096;font-size:14px;margin-bottom:24px">Se eliminarán todos tus XP, puntuaciones y actividad. No se puede deshacer.</p>
            <div style="display:flex;gap:10px;justify-content:center">
                <button onclick="closeModal()" style="padding:10px 24px;border:1.5px solid #E2E8F0;border-radius:10px;background:white;cursor:pointer;font-weight:600">Cancelar</button>
                <button onclick="doReset()" style="padding:10px 24px;background:#E53E3E;color:white;border:none;border-radius:10px;cursor:pointer;font-weight:700">Sí, reiniciar</button>
            </div>
        </div>`);
};

window.doReset = async function() {
    window.closeModal();
    state = { role: state.role, adminView: false, xp: 0, level: 1, streak: 1, dailyXP: 0, dailyGoal: 50, totalAnswers: 0, correctAnswers: 0, modulesCompleted: 0, activityLog: [], scores: {}, readingScores: {}, writingDone: {}, vocabScores: {}, userName: state.userName };
    await saveState();
    location.reload();
};

window.openModal = function(html) {
    document.getElementById('modal-content').innerHTML = html;
    document.getElementById('modal-overlay').classList.add('open');
    lucide.createIcons();
};

window.closeModal = function() {
    document.getElementById('modal-overlay').classList.remove('open');
};

// ============================================================
// XP, NIVELES Y ACTIVIDAD
// ============================================================
function addXP(baseVal, showMsg) {
    const streakBonus = Math.min(state.streak * 0.05, 0.50); 
    const totalXP = Math.round(baseVal * (1 + streakBonus));

    state.xp += totalXP;
    state.dailyXP += totalXP;

    let xpForNext = Math.floor(100 * Math.pow(state.level, 1.5));

    while (state.xp >= xpForNext) {
        state.level++;
        xpForNext = Math.floor(100 * Math.pow(state.level, 1.5));
        window.showToast('¡NIVEL SUBIDO! 🎉 Nivel ' + state.level, 'success');
    }

    updateHeaderUI();
    saveState();
    
    if (showMsg && totalXP > 0) {
        window.showToast(`+${totalXP} XP ${streakBonus > 0 ? '🔥' : ''}`, 'success');
    }
}

function updateHeaderUI() {
    const xpCurrentLevelBase = state.level === 1 ? 0 : Math.floor(100 * Math.pow(state.level - 1, 1.5));
    const xpNextLevelBase = Math.floor(100 * Math.pow(state.level, 1.5));
    
    const xpInLevel = state.xp - xpCurrentLevelBase;
    const xpRequiredForNext = xpNextLevelBase - xpCurrentLevelBase;
    
    const pct = Math.min(100, Math.max(0, Math.round((xpInLevel / xpRequiredForNext) * 100)));
    
    const fill = document.getElementById('xp-fill');
    if (fill) fill.style.width = pct + '%';
    
    safeSet('xp-display', `${xpInLevel} / ${xpRequiredForNext} XP`);
    
    const rankInfo = getrank(0); 
    safeSet('level-display', `Nivel ${state.level} · ${rankInfo.cefr}`);
    
    safeSet('xp-pill', `${state.xp} XP`);
    safeSet('streak-display', `${state.streak} Día${state.streak !== 1 ? 's' : ''}`);
    
    const init = document.getElementById('avatar-initials');
    if (init) init.textContent = state.userName.charAt(0).toUpperCase();
    const nameEl = document.getElementById('user-name-display');
    if (nameEl) nameEl.textContent = state.userName;
}

function logActivity(text, xp, color) {
    const now = new Date();
    const time = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');
    state.activityLog.unshift({ text, xp, color: color || '#534AB7', time });
    if (state.activityLog.length > 20) state.activityLog.pop();
}

// ============================================================
// MOTOR DE AUDIO (Web Speech API)
// ============================================================
window.playAudio = function(text, lang = 'en-US', event = null) {
    if (event) {
        event.stopPropagation();
    }

    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 0.85; 
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
    } else {
        window.showToast('Tu navegador no soporta reproducción de audio', 'warn');
    }
};

// ============================================================
// TOAST & UTILITY
// ============================================================
let toastTimer = null;
window.showToast = function(msg, type) {
    const t = document.getElementById('toast');
    if(!t) return;
    t.textContent = msg;
    t.className = 'toast ' + (type ? 'toast-' + type : 'toast-success') + ' show';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
};

function safeSet(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
}

// ============================================================
// MODO VISTA PREVIA (ADMINISTRADOR)
// ============================================================
window.toggleAdminView = function() {
    state.adminView = !state.adminView;
    window.showToast(state.adminView ? 'Modo Vista Previa: Candados desactivados' : 'Candados activados nuevamente', 'success');
    window.renderDashboard();
};
// ============================================================
// LEOENGLISH v4.0 — RUTA ÚNICA + DIAGNÓSTICO + HOMOLOGACIÓN
// Pega este bloque AL FINAL de tu app.js actual.
// No borra tus motores de Grammar/Reading/Writing/Vocab: los integra en una sola ruta.
// ============================================================

(function leoUnifiedRouteV4(){
    const PASS_SCORE = 80;
    const HOMOLOGATION_SCORE = 85;

    const routeBlueprint = [
        {
            level: 'A1',
            title: 'A1 · Foundations',
            description: 'Bases para comunicarte en situaciones cotidianas.',
            color: '#1D9E75',
            grammar: [
                'to_be_pronouns', 'articles_dem', 'possessives', 'there_is_are',
                'present_simple', 'present_cont', 'prepositions', 'imperatives',
                'can_could', 'past_to_be', 'past_simple', 'future_going_to'
            ],
            vocab: [
                'greetings', 'personal_information', 'countries_nationalities', 'numbers_vocab',
                'family', 'people', 'classroom_objects', 'home_furniture', 'daily_routines',
                'time_calendar', 'food_drink', 'restaurant_phrases', 'shopping_money',
                'hobbies_free_time', 'clothes_accessories', 'weather_seasons', 'common_verbs'
            ],
            reading: [
                'school_day', 'my_family', 'my_room_a1', 'my_best_friend_a1',
                'at_the_restaurant_a1', 'weekend_plans_a1', 'yesterday_at_home_a1', 'school_rules_a1'
            ],
            writing: [
                'free_writing_my_profile', 'word_order_a1_questions', 'dictation_a1_routines',
                'free_writing_my_routine', 'dictation_a1_restaurant', 'free_writing_last_weekend',
                'error_correction_a1_present', 'transform_a1_integrated'
            ]
        },
        {
            level: 'A2',
            title: 'A2 · Expansion',
            description: 'Consolida narración, comparación, futuro, obligación y experiencias.',
            color: '#3182CE',
            grammar: [
                'comparisons', 'quantifiers', 'past_continuous', 'present_perfect',
                'future_mixed', 'modals_obligation', 'conditionals', 'phrasal_gerunds'
            ],
            vocab: [],
            reading: [
                'shopping_day', 'london', 'british_weather',
                'healthy_lifestyle', 'technology_life', 'colombian_festival'
            ],
            writing: [
                'error_correction_a1_mixed'
            ]
        }
    ];

    const fallbackDiagnosticItems = [
        {
            id:'diag_a1_be_1',
            level:'A1',
            skill:'grammar',
            mapsTo:['to_be_pronouns'],
            q:'She ___ my sister.',
            opts:['am','is','are'],
            a:1
        },
        {
            id:'diag_a1_present_1',
            level:'A1',
            skill:'grammar',
            mapsTo:['present_simple'],
            q:'He ___ football every Sunday.',
            opts:['play','plays','playing'],
            a:1
        },
        {
            id:'diag_a1_there_1',
            level:'A1',
            skill:'grammar',
            mapsTo:['there_is_are'],
            q:'There ___ two books on the table.',
            opts:['is','are','am'],
            a:1
        },
        {
            id:'diag_a1_can_1',
            level:'A1',
            skill:'grammar',
            mapsTo:['can_could'],
            q:'She can ___ English.',
            opts:['speaks','speak','speaking'],
            a:1
        },
        {
            id:'diag_a1_past_1',
            level:'A1',
            skill:'grammar',
            mapsTo:['past_simple'],
            q:'Yesterday, I ___ a movie.',
            opts:['watch','watched','watching'],
            a:1
        },
        {
            id:'diag_a1_future_1',
            level:'A1',
            skill:'grammar',
            mapsTo:['future_going_to'],
            q:'I am going ___ my grandmother tomorrow.',
            opts:['visit','to visit','visiting'],
            a:1
        },
        {
            id:'diag_a2_comp_1',
            level:'A2',
            skill:'grammar',
            mapsTo:['comparisons'],
            q:'This book is ___ than that book.',
            opts:['interesting','more interesting','most interesting'],
            a:1
        },
        {
            id:'diag_a2_quant_1',
            level:'A2',
            skill:'grammar',
            mapsTo:['quantifiers'],
            q:'I don’t have ___ money.',
            opts:['many','much','a few'],
            a:1
        },
        {
            id:'diag_a2_pc_1',
            level:'A2',
            skill:'grammar',
            mapsTo:['past_continuous'],
            q:'I ___ TV when you called.',
            opts:['was watching','watched','am watching'],
            a:0
        },
        {
            id:'diag_a2_pp_1',
            level:'A2',
            skill:'grammar',
            mapsTo:['present_perfect'],
            q:'She has ___ to London.',
            opts:['go','went','been'],
            a:2
        },
        {
            id:'diag_a2_modal_1',
            level:'A2',
            skill:'grammar',
            mapsTo:['modals_obligation'],
            q:'You ___ wear a helmet on a motorcycle.',
            opts:['must','can','would'],
            a:0
        },
        {
            id:'diag_a2_cond_1',
            level:'A2',
            skill:'grammar',
            mapsTo:['conditionals'],
            q:'If it rains, I ___ at home.',
            opts:['stay','will stay','stayed'],
            a:1
        }
    ];

    let diagnosticSession = null;
    const originalShowScreen = window.showScreen;
    const originalDoReset = window.doReset;

    function routeSafeSet(id, value) {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    }

    function routeEnsureState() {
        state.scores = state.scores || {};
        state.readingScores = state.readingScores || {};
        state.writingDone = state.writingDone || {};
        state.vocabScores = state.vocabScores || {};
        state.activityLog = state.activityLog || [];

        state.routeProgress = state.routeProgress || {};
        state.routeProgress.completedActivities = state.routeProgress.completedActivities || {};
        state.routeProgress.homologatedActivities = state.routeProgress.homologatedActivities || {};
        state.routeProgress.reinforcementRequired = state.routeProgress.reinforcementRequired || {};
        state.routeProgress.completedUnits = state.routeProgress.completedUnits || {};
        state.routeProgress.placedLevel = state.routeProgress.placedLevel || null;
        state.routeProgress.placedBand = state.routeProgress.placedBand || null;
        state.routeProgress.diagnosticCompleted = !!state.routeProgress.diagnosticCompleted;
        state.routeProgress.diagnosticHistory = state.routeProgress.diagnosticHistory || [];
    }

    function routeCollections() {
        return {
            grammar: typeof modulesData !== 'undefined' ? modulesData : {},
            vocab: typeof vocabTopics !== 'undefined' ? vocabTopics : [],
            reading: typeof readingTexts !== 'undefined' ? readingTexts : [],
            writing: typeof writingExercises !== 'undefined' ? writingExercises : []
        };
    }

    function getSource(type, sourceId) {
        const data = routeCollections();

        if (type === 'grammar') return data.grammar[sourceId];
        if (type === 'vocab') return data.vocab.find(x => x.id === sourceId);
        if (type === 'reading') return data.reading.find(x => x.id === sourceId);
        if (type === 'writing') return data.writing.find(x => x.id === sourceId);

        return null;
    }

    function sourceExists(type, id) {
        return !!getSource(type, id);
    }

    function activityIcon(type) {
        return {
            grammar:'book-open',
            vocab:'layers',
            reading:'book-marked',
            writing:'pen-line'
        }[type] || 'circle';
    }

    function activityColor(type) {
        return {
            grammar:'#12375A',
            vocab:'#1D9E75',
            reading:'#3182CE',
            writing:'#D85A30'
        }[type] || '#12375A';
    }

    function activityTitle(type, source) {
        if (!source) return 'Actividad';
        if (type === 'grammar') return source.title || 'Gramática';
        if (type === 'vocab') return source.title || 'Vocabulario';
        if (type === 'reading') return source.title || 'Reading';
        if (type === 'writing') return source.title || 'Writing';
        return source.title || 'Actividad';
    }

    function createActivity(type, sourceId, level) {
        const source = getSource(type, sourceId);
        if (!source) return null;

        return {
            id: `${type}:${sourceId}`,
            type,
            sourceId,
            level,
            title: activityTitle(type, source),
            color: source.color || source.levelColor || activityColor(type),
            icon: activityIcon(type),
            source
        };
    }

    function inferGrammarLevel(id, mod) {
        if (mod && mod.level) return mod.level;
        if (routeBlueprint[0].grammar.includes(id)) return 'A1';
        if (routeBlueprint[1].grammar.includes(id)) return 'A2';
        return 'A1';
    }

    function buildLearningRoute() {
        const data = routeCollections();
        const used = new Set();

        const levels = routeBlueprint.map(level => {
            const activities = [];

            ['grammar', 'vocab', 'reading', 'writing'].forEach(type => {
                (level[type] || []).forEach(id => {
                    if (sourceExists(type, id)) {
                        const act = createActivity(type, id, level.level);
                        if (act) {
                            activities.push(act);
                            used.add(`${type}:${id}`);
                        }
                    }
                });
            });

            return { ...level, activities };
        });

        Object.entries(data.grammar).forEach(([id, mod]) => {
            if (used.has(`grammar:${id}`)) return;

            const level = inferGrammarLevel(id, mod);
            const target = levels.find(l => l.level === level) || levels[0];
            const act = createActivity('grammar', id, level);

            if (act) target.activities.push(act);
        });

        data.vocab.forEach(topic => {
            if (used.has(`vocab:${topic.id}`)) return;

            const level = topic.level || 'A1';
            const target = levels.find(l => l.level === level) || levels[0];
            const act = createActivity('vocab', topic.id, level);

            if (act) target.activities.push(act);
        });

        data.reading.forEach(text => {
            if (used.has(`reading:${text.id}`)) return;

            const level = text.level || 'A1';
            const target = levels.find(l => l.level === level) || levels[0];
            const act = createActivity('reading', text.id, level);

            if (act) target.activities.push(act);
        });

        data.writing.forEach(ex => {
            if (used.has(`writing:${ex.id}`)) return;

            const level = ex.level || (String(ex.id).includes('a2') ? 'A2' : 'A1');
            const target = levels.find(l => l.level === level) || levels[0];
            const act = createActivity('writing', ex.id, level);

            if (act) target.activities.push(act);
        });

        return levels.filter(level => level.activities.length > 0);
    }

    function flattenRoute() {
        return buildLearningRoute().flatMap(level => level.activities);
    }

    function findRouteActivity(activityId) {
        return flattenRoute().find(a => a.id === activityId);
    }

    function getActivityScore(activity) {
        routeEnsureState();

        if (state.routeProgress.homologatedActivities[activity.id]) return 100;

        if (activity.type === 'grammar') return state.scores[activity.sourceId] ?? null;
        if (activity.type === 'reading') return state.readingScores[activity.sourceId] ?? null;
        if (activity.type === 'writing') return state.writingDone[activity.sourceId] ?? null;
        if (activity.type === 'vocab') return state.vocabScores[activity.sourceId] ?? null;

        return state.routeProgress.completedActivities[activity.id] ?? null;
    }

    function isActivityPassed(activity) {
        const score = getActivityScore(activity);
        return score !== null && score >= PASS_SCORE;
    }

    function isActivityHomologated(activity) {
        routeEnsureState();
        return !!state.routeProgress.homologatedActivities[activity.id];
    }

    function isActivityReinforcement(activity) {
        routeEnsureState();

        return !!(
            state.routeProgress.reinforcementRequired[activity.sourceId] ||
            state.routeProgress.reinforcementRequired[activity.id]
        );
    }

    function isActivityLocked(activity, index, flat) {
        if (state.role === 'admin' && state.adminView) return false;
        if (index === 0) return false;
        if (isActivityPassed(activity)) return false;
        if (isActivityReinforcement(activity)) return false;

        return !isActivityPassed(flat[index - 1]);
    }

    function routeSummary() {
        const activities = flattenRoute();
        const total = activities.length;
        const passed = activities.filter(isActivityPassed).length;
        const pct = total ? Math.round((passed / total) * 100) : 0;

        return { total, passed, pct };
    }

    function hideOpenWorldNav() {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            const onclick = btn.getAttribute('onclick') || '';

            if (
                onclick.includes('reading-hub') ||
                onclick.includes('writing-hub') ||
                onclick.includes('vocab-hub')
            ) {
                btn.style.display = 'none';
            }
        });

        document.querySelectorAll('.nav-sep').forEach(sep => {
            if (sep.textContent.toLowerCase().includes('mundo abierto')) {
                sep.style.display = 'none';
            }
        });
    }

    function injectDiagnosticScreen() {
        if (document.getElementById('screen-diagnostic')) return;

        const main = document.getElementById('main-content');
        if (!main) return;

        const section = document.createElement('section');
        section.id = 'screen-diagnostic';
        section.className = 'screen';

        section.innerHTML = `
            <header class="page-header">
                <div>
                    <h2>Diagnóstico</h2>
                    <p>Evalúa tu nivel, homologa lo que ya dominas y recibe refuerzos puntuales.</p>
                </div>
            </header>
            <div id="diagnostic-content"></div>`;

        main.appendChild(section);
    }

    function injectDiagnosticNavButton() {
        if (document.getElementById('diagnostic-nav-btn')) return;

        const navLinks = document.querySelector('.nav-links');
        if (!navLinks) return;

        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.id = 'diagnostic-nav-btn';
        btn.setAttribute('onclick', "showScreen('diagnostic'); setActiveNav(this)");
        btn.innerHTML = '<i data-lucide="scan-line"></i> <span class="nav-label">Diagnóstico</span>';

        navLinks.insertBefore(btn, navLinks.children[2] || null);
    }

    function prepareUnifiedUI() {
        routeEnsureState();
        injectDiagnosticScreen();
        injectDiagnosticNavButton();
        hideOpenWorldNav();
        lucide.createIcons();
    }

    function renderUnifiedRoute() {
        const grid = document.getElementById('modules-status-grid');
        if (!grid) return;

        const route = buildLearningRoute();
        const flat = route.flatMap(level => level.activities);
        let globalIndex = 0;

        if (!flat.length) {
            grid.innerHTML = '<div class="activity-empty">No hay contenidos cargados todavía.</div>';
            return;
        }

        grid.innerHTML = route.map(level => {
            const completed = level.activities.filter(isActivityPassed).length;
            const pct = level.activities.length
                ? Math.round((completed / level.activities.length) * 100)
                : 0;

            const cards = level.activities.map(activity => {
                const score = getActivityScore(activity);
                const passed = isActivityPassed(activity);
                const homologated = isActivityHomologated(activity);
                const reinforcement = isActivityReinforcement(activity);
                const locked = isActivityLocked(activity, globalIndex, flat);
                const current = !passed && !locked;
                const number = globalIndex + 1;

                globalIndex++;

                const status = homologated
                    ? '✓ Homologado por diagnóstico'
                    : reinforcement
                        ? 'Refuerzo obligatorio'
                        : passed
                            ? `✓ Aprobado: ${score}%`
                            : locked
                                ? 'Bloqueado'
                                : 'Siguiente actividad';

                const statusColor = homologated || passed
                    ? '#1D9E75'
                    : reinforcement
                        ? '#D7262E'
                        : locked
                            ? '#A0AEC0'
                            : 'var(--primary-mid)';

                const icon = locked
                    ? 'lock'
                    : homologated
                        ? 'badge-check'
                        : passed
                            ? 'check-circle'
                            : reinforcement
                                ? 'alert-triangle'
                                : activity.icon;

                return `
                    <div class="mod-card ${passed ? 'mod-done' : ''} ${current ? 'mod-current' : ''} ${locked ? 'mod-locked' : ''}"
                         onclick="openRouteActivity('${activity.id}')">
                        <div class="mod-icon-wrap" style="background:${locked ? '#EDF2F7' : activity.color};color:${locked ? '#A0AEC0' : 'white'}">
                            <i data-lucide="${icon}"></i>
                        </div>
                        <div style="flex:1;min-width:0">
                            <div class="mod-title">${number}. ${activity.title}</div>
                            <div class="mod-status" style="color:${statusColor};font-weight:800;">
                                ${activity.type.toUpperCase()} · ${status}
                            </div>
                            ${
                                score != null
                                    ? `<div class="mod-score-bar"><div class="mod-score-fill" style="width:${score}%;background:${activity.color}"></div></div>`
                                    : ''
                            }
                        </div>
                    </div>`;
            }).join('');

            return `
                <div class="level-divider">
                    <h4 style="color:${level.color};font-size:18px;font-weight:900;margin:24px 0 8px 0;border-bottom:2px solid ${level.color}30;padding-bottom:8px;">
                        ${level.title}
                    </h4>
                    <div style="font-size:13px;color:#6B5F58;margin-bottom:14px;line-height:1.5">
                        ${level.description} · Progreso: <strong>${pct}%</strong>
                    </div>
                </div>
                <div class="modules-grid" style="margin-bottom:32px">${cards}</div>`;
        }).join('');

        lucide.createIcons();
    }

    window.openRouteActivity = function(activityId) {
        const activity = findRouteActivity(activityId);
        if (!activity) return window.showToast('Actividad no encontrada', 'error');

        const flat = flattenRoute();
        const idx = flat.findIndex(a => a.id === activityId);

        if (isActivityLocked(activity, idx, flat)) {
            return window.showToast('Debes aprobar la actividad anterior con 80% o más.', 'warn');
        }

        state.routeProgress.currentActivityId = activityId;

        if (activity.type === 'grammar') {
            return window.openModule(activity.sourceId);
        }

        if (activity.type === 'reading') {
            window.showScreen('reading-hub');
            setTimeout(() => window.openReading(activity.sourceId), 0);
            return;
        }

        if (activity.type === 'writing') {
            window.showScreen('writing-hub');
            setTimeout(() => window.openWriting(activity.sourceId), 0);
            return;
        }

        if (activity.type === 'vocab') {
            window.showScreen('vocab-hub');
            setTimeout(() => window.openVocabTopic(activity.sourceId), 0);
        }
    };

    window.showScreen = function(screenId) {
        prepareUnifiedUI();

        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

        const el = document.getElementById('screen-' + screenId);
        if (el) el.classList.add('active');

        const main = document.getElementById('main-content');
        if (main) main.scrollTop = 0;

        if (screenId === 'dashboard') window.renderDashboard();
        else if (screenId === 'reading-hub') window.renderReadingHub();
        else if (screenId === 'writing-hub') window.renderWritingHub();
        else if (screenId === 'vocab-hub') window.renderVocabHub();
        else if (screenId === 'settings') window.renderSettings();
        else if (screenId === 'diagnostic') window.renderDiagnostic();
        else if (typeof originalShowScreen === 'function' && screenId !== 'module') originalShowScreen(screenId);

        lucide.createIcons();
    };

    window.renderDashboard = function() {
        prepareUnifiedUI();
        updateHeaderUI();
        setGreeting();

        const summary = routeSummary();
        const acc = state.totalAnswers > 0
            ? Math.round((state.correctAnswers / state.totalAnswers) * 100) + '%'
            : '—';

        routeSafeSet('stat-xp', state.xp || 0);
        routeSafeSet('stat-done', summary.passed);
        routeSafeSet('stat-streak', state.streak || 1);
        routeSafeSet('stat-accuracy', acc);
        routeSafeSet('total-progress-pct', summary.pct + '%');

        const totalFill = document.getElementById('total-progress-fill');
        if (totalFill) totalFill.style.width = summary.pct + '%';

        const data = routeCollections();
        const avg = arr => arr.length
            ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length)
            : 0;

        const grammar = avg(Object.keys(data.grammar).map(k => state.scores[k]).filter(v => typeof v === 'number'));
        const reading = avg(Object.values(state.readingScores).filter(v => typeof v === 'number'));
        const writing = avg(Object.values(state.writingDone).filter(v => typeof v === 'number'));
        const vocab = avg(Object.values(state.vocabScores).filter(v => typeof v === 'number'));

        const skills = [
            { name:'Gramática', val:grammar, color:'#12375A' },
            { name:'Vocabulario', val:vocab, color:'#1D9E75' },
            { name:'Reading', val:reading, color:'#3182CE' },
            { name:'Writing', val:writing, color:'#D85A30' }
        ];

        const barsEl = document.getElementById('skills-bars');
        if (barsEl) {
            barsEl.innerHTML = skills.map(s => `
                <div class="skill-row-item">
                    <div class="skill-info"><span>${s.name}</span><span>${s.val}%</span></div>
                    <div class="s-bar"><div class="s-fill" style="width:${s.val}%;background:${s.color}"></div></div>
                </div>`).join('');
        }

        renderFeedback(grammar, reading, writing, vocab);

        const rank = typeof getrank === 'function'
            ? getrank(summary.pct)
            : { name:'Explorador Novato', cefr:'A1' };

        routeSafeSet('rank-display', rank.name);
        routeSafeSet('cefr-badge', state.routeProgress.placedLevel || rank.cefr);

        renderUnifiedRoute();
        renderActivity();
        renderLeaderboard();
    };

    function getDiagnosticItems() {
        if (typeof diagnosticTest !== 'undefined' && diagnosticTest?.sections) {
            return diagnosticTest.sections.flatMap(section =>
                (section.items || []).map(item => ({ ...item, section: section.id }))
            );
        }

        if (typeof diagnosticTest !== 'undefined' && Array.isArray(diagnosticTest.items)) {
            return diagnosticTest.items;
        }

        return fallbackDiagnosticItems;
    }

    window.renderDiagnostic = function() {
        routeEnsureState();

        const el = document.getElementById('diagnostic-content');
        if (!el) return;

        const last = state.routeProgress.diagnosticHistory?.[0];
        const reinforcements = Object.keys(state.routeProgress.reinforcementRequired || {});
        const homologated = Object.keys(state.routeProgress.homologatedActivities || {}).length;

        el.innerHTML = `
            <div class="card-theory animate-pop">
                <h3>Prueba diagnóstica de nivel</h3>
                <p>
                    Esta prueba estima tu nivel, homologa actividades que ya dominas y marca refuerzos obligatorios.
                    Por ahora evalúa A1 y A2. Luego podemos extenderla a B1, B2 y C1.
                </p>

                <div class="theory-grid">
                    <div class="t-box" style="border-color:#12375A;background:#EAF0F7">
                        <strong style="color:#12375A">Nivel actual</strong>
                        <small>${state.routeProgress.placedBand || state.routeProgress.placedLevel || 'Sin diagnóstico'}</small>
                    </div>

                    <div class="t-box" style="border-color:#1D9E75;background:#EAF3DE">
                        <strong style="color:#276749">Homologación</strong>
                        <small>${homologated} actividades homologadas.</small>
                    </div>

                    <div class="t-box" style="border-color:#D7262E;background:#FFE7E4">
                        <strong style="color:#9B2C2C">Refuerzos</strong>
                        <small>${reinforcements.length} ítems pendientes.</small>
                    </div>
                </div>

                ${
                    last
                        ? `<div class="tip-callout"><i data-lucide="info"></i> Último resultado: ${last.placedBand} · ${last.pct}% global.</div>`
                        : ''
                }

                <div class="btn-row">
                    <button class="btn-check" onclick="startDiagnostic()">
                        <i data-lucide="scan-line"></i> Iniciar diagnóstico
                    </button>

                    <button class="btn-secondary" onclick="showScreen('dashboard');setActiveNavById('dashboard')">
                        <i data-lucide="map"></i> Volver a la ruta
                    </button>
                </div>
            </div>

            <div id="diagnostic-zone"></div>`;

        lucide.createIcons();
    };

    window.startDiagnostic = function() {
        const items = getDiagnosticItems();

        if (!items.length) {
            return window.showToast('No hay preguntas diagnósticas cargadas.', 'warn');
        }

        diagnosticSession = {
            items,
            idx: 0,
            correct: 0,
            answers: []
        };

        renderDiagnosticQuestion();
    };

    function renderDiagnosticQuestion() {
        if (!diagnosticSession) return;

        const zone = document.getElementById('diagnostic-zone') || document.getElementById('diagnostic-content');
        if (!zone) return;

        if (diagnosticSession.idx >= diagnosticSession.items.length) {
            return finishDiagnostic();
        }

        const item = diagnosticSession.items[diagnosticSession.idx];
        const progress = Math.round((diagnosticSession.idx / diagnosticSession.items.length) * 100);

        zone.innerHTML = `
            <div class="exercise-card animate-pop" style="margin-top:20px">
                <div class="ex-meta">
                    <i data-lucide="scan-line"></i>
                    Diagnóstico · ${item.level} · ${item.skill || 'grammar'} · ${diagnosticSession.idx + 1}/${diagnosticSession.items.length}
                </div>

                <div class="total-bar" style="margin-bottom:18px">
                    <div class="total-fill" style="width:${progress}%"></div>
                </div>

                <div class="ex-q">${item.q}</div>

                <div class="opts-grid">
                    ${item.opts.map((o, i) => `
                        <button class="opt-btn" onclick="checkDiagnosticAnswer(${i}, this)">
                            ${o}
                        </button>
                    `).join('')}
                </div>

                <div id="diagnostic-fb"></div>
            </div>`;

        lucide.createIcons();
    }

    window.checkDiagnosticAnswer = function(chosen, btn) {
        if (!diagnosticSession || isChecking) return;

        isChecking = true;

        const item = diagnosticSession.items[diagnosticSession.idx];
        const ok = chosen === item.a;

        document
            .querySelectorAll('#diagnostic-zone .opt-btn, #diagnostic-content .opt-btn')
            .forEach(b => b.disabled = true);

        if (ok) {
            btn.classList.add('correct');
            diagnosticSession.correct++;
        } else {
            btn.classList.add('wrong');

            const buttons = document.querySelectorAll('#diagnostic-zone .opt-btn, #diagnostic-content .opt-btn');
            if (buttons[item.a]) buttons[item.a].classList.add('correct');
        }

        diagnosticSession.answers.push({ item, chosen, ok });

        state.totalAnswers++;
        if (ok) state.correctAnswers++;

        setTimeout(() => {
            diagnosticSession.idx++;
            isChecking = false;
            renderDiagnosticQuestion();
        }, 900);

        lucide.createIcons();
    };

    function finishDiagnostic() {
        const answers = diagnosticSession.answers;
        const items = diagnosticSession.items;

        const byLevel = {};
        const bySource = {};

        answers.forEach(({ item, ok }) => {
            byLevel[item.level] = byLevel[item.level] || { total:0, correct:0 };
            byLevel[item.level].total++;

            if (ok) byLevel[item.level].correct++;

            (item.mapsTo || []).forEach(sourceId => {
                bySource[sourceId] = bySource[sourceId] || {
                    total:0,
                    correct:0,
                    level:item.level
                };

                bySource[sourceId].total++;
                if (ok) bySource[sourceId].correct++;
            });
        });

        const levelPct = Object.fromEntries(
            Object.entries(byLevel).map(([level, data]) => [
                level,
                Math.round((data.correct / data.total) * 100)
            ])
        );

        let placedLevel = 'A1';
        let placedBand = 'A1 inicial';

        if ((levelPct.A2 || 0) >= 75) {
            placedLevel = 'B1';
            placedBand = 'B1 inicial';
        } else if ((levelPct.A2 || 0) >= 55) {
            placedLevel = 'A2';
            placedBand = 'A2 en progreso';
        } else if ((levelPct.A1 || 0) >= 75) {
            placedLevel = 'A2';
            placedBand = 'A2 inicial';
        } else if ((levelPct.A1 || 0) >= 55) {
            placedLevel = 'A1';
            placedBand = 'A1 en progreso';
        }

        const reinforcementItems = Object.entries(bySource)
            .filter(([, data]) => Math.round((data.correct / data.total) * 100) < 75)
            .map(([sourceId, data]) => ({
                sourceId,
                level:data.level,
                pct:Math.round((data.correct / data.total) * 100)
            }));

        const result = {
            date: new Date().toISOString(),
            correct: diagnosticSession.correct,
            total: items.length,
            pct: Math.round((diagnosticSession.correct / items.length) * 100),
            levelPct,
            placedLevel,
            placedBand,
            reinforcementItems
        };

        diagnosticSession = null;

        applyDiagnosticResult(result);
        renderDiagnosticResult(result);
    }

    function applyDiagnosticResult(result) {
        routeEnsureState();

        state.routeProgress.diagnosticCompleted = true;
        state.routeProgress.placedLevel = result.placedLevel;
        state.routeProgress.placedBand = result.placedBand;

        result.reinforcementItems.forEach(item => {
            state.routeProgress.reinforcementRequired[item.sourceId] = true;
        });

        const route = flattenRoute();

        route.forEach(activity => {
            const isWeak = result.reinforcementItems.some(item => item.sourceId === activity.sourceId);
            if (isWeak) return;

            const homologateA1 =
                activity.level === 'A1' &&
                (result.levelPct.A1 || 0) >= HOMOLOGATION_SCORE;

            const homologateA2 =
                activity.level === 'A2' &&
                (result.levelPct.A2 || 0) >= HOMOLOGATION_SCORE;

            if (!homologateA1 && !homologateA2) return;

            state.routeProgress.homologatedActivities[activity.id] = true;

            if (activity.type === 'grammar') {
                state.scores[activity.sourceId] = Math.max(state.scores[activity.sourceId] || 0, 100);
            }

            if (activity.type === 'reading') {
                state.readingScores[activity.sourceId] = Math.max(state.readingScores[activity.sourceId] || 0, 100);
            }

            if (activity.type === 'writing') {
                state.writingDone[activity.sourceId] = Math.max(state.writingDone[activity.sourceId] || 0, 100);
            }

            if (activity.type === 'vocab') {
                state.vocabScores[activity.sourceId] = Math.max(state.vocabScores[activity.sourceId] || 0, 100);
            }
        });

        state.routeProgress.diagnosticHistory.unshift(result);
        state.routeProgress.diagnosticHistory = state.routeProgress.diagnosticHistory.slice(0, 5);

        addXP(result.pct >= 80 ? 80 : result.pct >= 60 ? 50 : 25, false);
        logActivity(`Diagnóstico completado: ${result.placedBand}`, 25, '#D7262E');

        saveState();
    }

    function renderDiagnosticResult(result) {
        const zone = document.getElementById('diagnostic-zone') || document.getElementById('diagnostic-content');
        if (!zone) return;

        const homologatedCount = Object.keys(state.routeProgress.homologatedActivities || {}).length;

        zone.innerHTML = `
            <div class="results-card animate-pop" style="margin-top:20px">
                <div class="results-score">${result.placedLevel}</div>

                <p class="results-msg">
                    <strong>${result.placedBand}</strong> · Resultado global: ${result.pct}%
                </p>

                <div class="results-detail">
                    <span class="results-pill pill-good">${homologatedCount} homologadas</span>
                    <span class="results-pill pill-bad">${result.reinforcementItems.length} refuerzos</span>
                    <span class="results-pill pill-xp">${result.correct}/${result.total}</span>
                </div>

                <div class="card-theory" style="box-shadow:none;border:1px dashed #E6BFA6;text-align:left;margin-top:18px">
                    <h3>Refuerzos sugeridos</h3>
                    ${
                        result.reinforcementItems.length
                            ? `<ul style="padding-left:20px;line-height:1.9">
                                ${result.reinforcementItems.map(item => `
                                    <li>
                                        <strong>${item.sourceId}</strong> · desempeño ${item.pct}%
                                    </li>
                                `).join('')}
                               </ul>`
                            : '<p>Excelente. No se detectaron refuerzos obligatorios en este diagnóstico.</p>'
                    }
                </div>

                <div class="btn-row">
                    <button class="btn-check" onclick="showScreen('dashboard');setActiveNavById('dashboard')">
                        <i data-lucide="map"></i> Ver mi ruta ajustada
                    </button>

                    <button class="btn-secondary" onclick="startDiagnostic()">
                        <i data-lucide="refresh-cw"></i> Repetir diagnóstico
                    </button>
                </div>
            </div>`;

        lucide.createIcons();
    }

    window.doReset = async function() {
        if (typeof originalDoReset === 'function') {
            state.routeProgress = {
                completedActivities: {},
                homologatedActivities: {},
                reinforcementRequired: {},
                completedUnits: {},
                placedLevel: null,
                placedBand: null,
                diagnosticCompleted: false,
                diagnosticHistory: []
            };
        }

        window.closeModal();

        const role = state.role;
        const userName = state.userName;

        state = {
            role,
            adminView: false,
            xp: 0,
            level: 1,
            streak: 1,
            dailyXP: 0,
            dailyGoal: 50,
            totalAnswers: 0,
            correctAnswers: 0,
            modulesCompleted: 0,
            activityLog: [],
            scores: {},
            readingScores: {},
            writingDone: {},
            vocabScores: {},
            userName,
            routeProgress: {
                completedActivities: {},
                homologatedActivities: {},
                reinforcementRequired: {},
                completedUnits: {},
                placedLevel: null,
                placedBand: null,
                diagnosticCompleted: false,
                diagnosticHistory: []
            }
        };

        await saveState();
        location.reload();
    };

    window.__leoRoute = buildLearningRoute;
    window.__leoRouteSummary = routeSummary;
    window.__leoPrepareUnifiedUI = prepareUnifiedUI;

    prepareUnifiedUI();
})();

/* ============================================================
   FIN DEL BLOQUE v4.0
   ============================================================ */
