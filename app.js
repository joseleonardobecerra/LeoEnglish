// ============================================================
// app.js v5.0 — LEOENGLISH
// Ruta única + diagnóstico + homologación + refuerzos
// Firebase + Grammar + Vocab + Reading + Writing + XP
// ============================================================

import {
    auth,
    db,
    googleProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    doc,
    setDoc,
    getDoc,
    collection,
    getDocs
} from './firebase-config.js';


// ============================================================
// 1. CONSTANTES
// ============================================================

const PASS_SCORE = 80;
const HOMOLOGATION_SCORE = 85;
const REINFORCEMENT_THRESHOLD = 75;
const ADMIN_EMAIL = 'joseleonardobecerrac@gmail.com';

const LEVEL_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1'];

const TYPE_META = {
    grammar: {
        label: 'Grammar',
        icon: 'book-open',
        color: '#12375A',
        scoreKey: 'scores'
    },
    vocab: {
        label: 'Vocabulary',
        icon: 'layers',
        color: '#1D9E75',
        scoreKey: 'vocabScores'
    },
    reading: {
        label: 'Reading',
        icon: 'book-marked',
        color: '#3182CE',
        scoreKey: 'readingScores'
    },
    writing: {
        label: 'Writing',
        icon: 'pen-line',
        color: '#D85A30',
        scoreKey: 'writingDone'
    }
};


// ============================================================
// 2. ESTADO GLOBAL
// ============================================================

function createDefaultRouteProgress() {
    return {
        completedActivities: {},
        homologatedActivities: {},
        reinforcementRequired: {},
        completedUnits: {},
        currentActivityId: null,
        placedLevel: null,
        placedBand: null,
        diagnosticCompleted: false,
        diagnosticHistory: []
    };
}

function createDefaultState() {
    return {
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

        scores: {},
        readingScores: {},
        writingDone: {},
        vocabScores: {},

        userName: 'Estudiante',

        routeProgress: createDefaultRouteProgress()
    };
}

let state = createDefaultState();


// ============================================================
// 3. ESTADO DE SESIÓN
// ============================================================

let isChecking = false;

let currentModuleId = '';
let currentExerciseIdx = 0;
let currentScore = 0;
let currentErrors = 0;

let currentReadingId = '';
let currentReadingQIdx = 0;
let currentReadingScore = 0;
let readingTimer = null;   // FIX: ID del setTimeout activo de reading para poder cancelarlo

let vocabCurrentTopic = null;
let vocabMode = 'flash';

let diagnosticSession = null;


// ============================================================
// 4. ACCESO SEGURO A DATOS GLOBALES
// ============================================================

function getModulesData() {
    return window.modulesData || (typeof modulesData !== 'undefined' ? modulesData : {});
}

function getVocabTopics() {
    return window.vocabTopics || (typeof vocabTopics !== 'undefined' ? vocabTopics : []);
}

function getReadingTexts() {
    return window.readingTexts || (typeof readingTexts !== 'undefined' ? readingTexts : []);
}

function getWritingExercises() {
    return window.writingExercises || (typeof writingExercises !== 'undefined' ? writingExercises : []);
}

function getDiagnosticTest() {
    return window.diagnosticTest || (typeof diagnosticTest !== 'undefined' ? diagnosticTest : null);
}

function getGrammarPath() {
    return window.grammarLearningPath || (typeof grammarLearningPath !== 'undefined' ? grammarLearningPath : null);
}

function getVocabPath() {
    return window.vocabLearningPath || (typeof vocabLearningPath !== 'undefined' ? vocabLearningPath : null);
}

function getReadingPath() {
    return window.readingLearningPath || (typeof readingLearningPath !== 'undefined' ? readingLearningPath : null);
}

function getWritingPath() {
    return window.writingLearningPath || (typeof writingLearningPath !== 'undefined' ? writingLearningPath : null);
}

function resolveGrammarIdSafe(id) {
    if (typeof window.resolveGrammarId === 'function') return window.resolveGrammarId(id);
    return id;
}

function resolveVocabIdSafe(id) {
    if (typeof window.resolveVocabId === 'function') return window.resolveVocabId(id);
    return id;
}

function getCollections() {
    return {
        grammar: getModulesData(),
        vocab: getVocabTopics(),
        reading: getReadingTexts(),
        writing: getWritingExercises()
    };
}


// ============================================================
// 5. UTILIDADES GENERALES
// ============================================================

function safeSet(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
}

function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function escapeAttr(value) {
    return escapeHtml(value).replace(/`/g, '&#096;');
}

function normalizeAnswer(value) {
    // FIX: Pipeline unificado para input Y q.a / task.answer.
    // Antes: apostrofe curvo → recto y luego borrado podian diferir segun encoding del contenido.
    // Orden: 1)trim 2)lowercase 3)unificar apostrofes/comillas a ASCII recto
    //        4)eliminar puntuacion 5)borrar apostrofes (it's → its) 6)colapsar espacios.
    return String(value ?? '')
        .trim()
        .toLowerCase()
        .replace(/[\u2018\u2019\u02BC\u0060\u00B4']/g, "'")
        .replace(/[\u201C\u201D\u00AB\u00BB\u201E"\u0022]/g, '"')
        .replace(/[.,!?\u00BF\u00A1;:"]/g, '')
        .replace(/'/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

function average(values) {
    const nums = values.filter(v => typeof v === 'number' && !Number.isNaN(v));
    if (!nums.length) return 0;
    return Math.round(nums.reduce((a, b) => a + b, 0) / nums.length);
}

function getNowTime() {
    const now = new Date();
    return `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
}

function ensureLucide() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
}

function getScoreObject(type) {
    const meta = TYPE_META[type];
    if (!meta) return {};
    state[meta.scoreKey] = state[meta.scoreKey] || {};
    return state[meta.scoreKey];
}

function getSource(type, sourceId) {
    const data = getCollections();

    if (type === 'grammar') {
        const id = resolveGrammarIdSafe(sourceId);
        return data.grammar[id] || data.grammar[sourceId] || null;
    }

    if (type === 'vocab') {
        const id = resolveVocabIdSafe(sourceId);
        return data.vocab.find(x => x.id === id || x.id === sourceId) || null;
    }

    if (type === 'reading') {
        return data.reading.find(x => x.id === sourceId) || null;
    }

    if (type === 'writing') {
        return data.writing.find(x => x.id === sourceId) || null;
    }

    return null;
}

function getResolvedSourceId(type, sourceId) {
    const source = getSource(type, sourceId);
    if (source?.id) return source.id;

    if (type === 'grammar') return resolveGrammarIdSafe(sourceId);
    if (type === 'vocab') return resolveVocabIdSafe(sourceId);

    return sourceId;
}

function getSourceTitle(type, source) {
    if (!source) return 'Actividad';
    return source.title || source.name || TYPE_META[type]?.label || 'Actividad';
}

function getSourceColor(type, source) {
    return source?.color || source?.levelColor || source?.typeColor || TYPE_META[type]?.color || '#12375A';
}

function getWeaknessDisplayName(sourceId) {
    if (typeof window.getGrammarWeaknessLabel === 'function') {
        const label = window.getGrammarWeaknessLabel(sourceId);
        if (label && label !== sourceId) return label;
    }

    if (typeof window.getVocabWeaknessLabel === 'function') {
        const label = window.getVocabWeaknessLabel(sourceId);
        if (label && label !== sourceId) return label;
    }

    if (typeof window.getReadingWeaknessLabel === 'function') {
        const label = window.getReadingWeaknessLabel(sourceId);
        if (label && label !== sourceId) return label;
    }

    if (typeof window.getWritingWeaknessLabel === 'function') {
        const label = window.getWritingWeaknessLabel(sourceId);
        if (label && label !== sourceId) return label;
    }

    return String(sourceId)
        .replace(/_/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase());
}

function possibleSourceIds(sourceId) {
    const ids = new Set();

    ids.add(sourceId);
    ids.add(resolveGrammarIdSafe(sourceId));
    ids.add(resolveVocabIdSafe(sourceId));

    return ids;
}

function sourceMatches(activity, sourceId) {
    const ids = possibleSourceIds(sourceId);
    return ids.has(activity.sourceId) || ids.has(activity.id);
}


// ============================================================
// 6. NORMALIZACIÓN Y MIGRACIÓN DEL ESTADO
// ============================================================

function normalizeState(raw = {}) {
    const base = createDefaultState();
    const merged = {
        ...base,
        ...raw
    };

    merged.scores = {
        ...(base.scores || {}),
        ...(raw.scores || {})
    };

    merged.readingScores = {
        ...(base.readingScores || {}),
        ...(raw.readingScores || {})
    };

    merged.writingDone = {
        ...(base.writingDone || {}),
        ...(raw.writingDone || {})
    };

    merged.vocabScores = {
        ...(base.vocabScores || {}),
        ...(raw.vocabScores || {})
    };

    merged.activityLog = Array.isArray(raw.activityLog) ? raw.activityLog : [];

    merged.routeProgress = {
        ...createDefaultRouteProgress(),
        ...(raw.routeProgress || {})
    };

    merged.routeProgress.completedActivities = merged.routeProgress.completedActivities || {};
    merged.routeProgress.homologatedActivities = merged.routeProgress.homologatedActivities || {};
    merged.routeProgress.reinforcementRequired = merged.routeProgress.reinforcementRequired || {};
    merged.routeProgress.completedUnits = merged.routeProgress.completedUnits || {};
    merged.routeProgress.diagnosticHistory = Array.isArray(merged.routeProgress.diagnosticHistory)
        ? merged.routeProgress.diagnosticHistory
        : [];

    migrateLegacyGrammarScores(merged);

    return merged;
}

function migrateLegacyGrammarScores(targetState) {
    const aliasMap = window.grammarIdAliases || {
        to_be_pronouns: 'verbs',
        articles_dem: 'articles',
        possessives: 'pronouns',
        present_continuous: 'present_cont',
        adverbs_frequency: 'frequency_adverbs',
        like_love_hate_ing: 'likes_gerunds',
        questions: 'questions_a1',
        basic_questions: 'questions_a1',
        basic_modals: 'can_could',
        comparatives: 'comparisons',
        how_much_many: 'quantifiers'
    };

    Object.entries(aliasMap).forEach(([oldId, newId]) => {
        const oldScore = targetState.scores?.[oldId];

        if (
            typeof oldScore === 'number' &&
            (targetState.scores[newId] == null || oldScore > targetState.scores[newId])
        ) {
            targetState.scores[newId] = oldScore;
        }
    });
}


// ============================================================
// 7. FIREBASE AUTH + PERSISTENCIA
// ============================================================

onAuthStateChanged(auth, async user => {
    const loginOverlay = document.getElementById('login-overlay');
    // FIX: Ocultamos el spinner de carga inicial (visible por defecto en HTML)
    // solo cuando Firebase confirma el estado de sesión — evita el flash de
    // contenido en móviles lentos donde el JS tarda en ejecutarse.
    const appLoader = document.getElementById('app-loader');
    if (appLoader) appLoader.classList.add('hidden');

    if (user) {
        if (loginOverlay) loginOverlay.classList.add('hidden');

        state.userName = user.displayName || user.email?.split('@')[0] || 'Estudiante';

        await loadState(user.uid);
    } else {
        if (loginOverlay) loginOverlay.classList.remove('hidden');
    }
});

async function saveState() {
    if (!auth.currentUser) return;

    try {
        const userRef = doc(db, 'users', auth.currentUser.uid);
        await setDoc(userRef, state, { merge: true });
    } catch (error) {
        console.error('Error guardando progreso:', error);
    }
}

async function loadState(uid) {
    try {
        const userRef = doc(db, 'users', uid);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
            state = normalizeState({
                ...state,
                ...docSnap.data()
            });
        } else {
            state = normalizeState(state);
        }

        if (auth.currentUser?.email === ADMIN_EMAIL) {
            state.role = 'admin';
        } else if (!docSnap.exists()) {
            state.role = 'student';
        }

        if (!state.userName || state.userName === 'Estudiante') {
            state.userName = auth.currentUser?.displayName || auth.currentUser?.email?.split('@')[0] || 'Estudiante';
        }

        await saveState();

        updateHeaderUI();
        updateAdminZone();
        window.renderDashboard();

        ensureLucide();
    } catch (error) {
        console.error('Error cargando progreso:', error);
        window.showToast('Error cargando progreso', 'error');
    }
}

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
    const email = document.getElementById('login-email')?.value.trim();
    const password = document.getElementById('login-password')?.value.trim();

    if (!email || !password) {
        window.showToast('Completa los campos', 'warn');
        return;
    }

    try {
        await signInWithEmailAndPassword(auth, email, password);
        window.showToast('Sesión iniciada', 'success');
    } catch (error) {
        console.error(error);
        window.showToast('Credenciales incorrectas', 'error');
    }
};

window.handleEmailRegister = async function() {
    const email = document.getElementById('reg-email')?.value.trim();
    const password = document.getElementById('reg-password')?.value.trim();
    const name = document.getElementById('reg-name')?.value.trim();

    if (!email || !password || !name) {
        window.showToast('Completa todos los campos', 'warn');
        return;
    }

    if (password.length < 6) {
        window.showToast('La contraseña debe tener al menos 6 caracteres', 'warn');
        return;
    }

    try {
        await createUserWithEmailAndPassword(auth, email, password);

        state = normalizeState({
            ...createDefaultState(),
            userName: name
        });

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

        state = createDefaultState();

        ['login-email', 'login-password', 'reg-name', 'reg-email', 'reg-password'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.value = '';
        });

        window.toggleAuthView('login');
        window.showScreen('dashboard');
        window.showToast('Sesión cerrada', 'success');
    } catch (error) {
        console.error(error);
        window.showToast('Error al cerrar sesión', 'error');
    }
};

window.toggleAuthView = function(view) {
    const loginView = document.getElementById('login-view');
    const registerView = document.getElementById('register-view');
    const authTitle = document.getElementById('auth-title');

    if (view === 'register') {
        if (loginView) loginView.style.display = 'none';
        if (registerView) registerView.style.display = 'block';
        if (authTitle) authTitle.textContent = 'Crea tu cuenta';
    } else {
        if (registerView) registerView.style.display = 'none';
        if (loginView) loginView.style.display = 'block';
        if (authTitle) authTitle.textContent = '¡Hola! Inicia sesión';
    }
};


// ============================================================
// 8. RUTA ÚNICA
// ============================================================

function createActivity(type, sourceId, level = 'A1') {
    const resolvedId = getResolvedSourceId(type, sourceId);
    const source = getSource(type, resolvedId);

    if (!source) return null;

    return {
        id: `${type}:${resolvedId}`,
        type,
        sourceId: resolvedId,
        level: source.level || source.routeMeta?.level || level || 'A1',
        title: getSourceTitle(type, source),
        color: getSourceColor(type, source),
        icon: TYPE_META[type]?.icon || 'circle',
        source
    };
}

function ensureRouteLevel(map, level) {
    const safeLevel = level || 'A1';

    if (!map.has(safeLevel)) {
        map.set(safeLevel, {
            level: safeLevel,
            title: `${safeLevel} · Ruta integrada`,
            description: `Actividades integradas de gramática, vocabulario, reading y writing para ${safeLevel}.`,
            color: safeLevel === 'A1' ? '#1D9E75' : safeLevel === 'A2' ? '#3182CE' : '#805AD5',
            activities: []
        });
    }

    return map.get(safeLevel);
}

function addPathItems(routeMap, used, type, path, itemKey) {
    if (!Array.isArray(path)) return;

    path.forEach(levelBlock => {
        const level = levelBlock.level || 'A1';
        const routeLevel = ensureRouteLevel(routeMap, level);

        if (levelBlock.color && !routeLevel.customColor) {
            routeLevel.color = levelBlock.color;
        }

        const ids = levelBlock[itemKey] || [];

        ids.forEach(id => {
            const activity = createActivity(type, id, level);
            if (!activity) return;

            if (used.has(activity.id)) return;

            routeLevel.activities.push(activity);
            used.add(activity.id);
        });
    });
}

function addRemainingItems(routeMap, used) {
    const data = getCollections();

    Object.entries(data.grammar).forEach(([id, source]) => {
        const activity = createActivity('grammar', source.id || id, source.level || source.routeMeta?.level || 'A1');
        if (!activity || used.has(activity.id)) return;

        ensureRouteLevel(routeMap, activity.level).activities.push(activity);
        used.add(activity.id);
    });

    data.vocab.forEach(source => {
        const activity = createActivity('vocab', source.id, source.level || source.routeMeta?.level || 'A1');
        if (!activity || used.has(activity.id)) return;

        ensureRouteLevel(routeMap, activity.level).activities.push(activity);
        used.add(activity.id);
    });

    data.reading.forEach(source => {
        const activity = createActivity('reading', source.id, source.level || source.routeMeta?.level || 'A1');
        if (!activity || used.has(activity.id)) return;

        ensureRouteLevel(routeMap, activity.level).activities.push(activity);
        used.add(activity.id);
    });

    data.writing.forEach(source => {
        const activity = createActivity('writing', source.id, source.level || source.routeMeta?.level || 'A1');
        if (!activity || used.has(activity.id)) return;

        ensureRouteLevel(routeMap, activity.level).activities.push(activity);
        used.add(activity.id);
    });
}

function buildLearningRoute() {
    const routeMap = new Map();
    const used = new Set();

    addPathItems(routeMap, used, 'grammar', getGrammarPath(), 'modules');
    addPathItems(routeMap, used, 'vocab', getVocabPath(), 'topics');
    addPathItems(routeMap, used, 'reading', getReadingPath(), 'texts');
    addPathItems(routeMap, used, 'writing', getWritingPath(), 'exercises');

    addRemainingItems(routeMap, used);

    const levels = Array.from(routeMap.values());

    levels.forEach(level => {
        level.activities.sort((a, b) => {
            const aSeq = a.source?.routeMeta?.sequence ?? 999;
            const bSeq = b.source?.routeMeta?.sequence ?? 999;

            if (aSeq !== bSeq) return aSeq - bSeq;

            const typeOrder = ['grammar', 'vocab', 'reading', 'writing'];
            return typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type);
        });
    });

    levels.sort((a, b) => {
        const ai = LEVEL_ORDER.indexOf(a.level);
        const bi = LEVEL_ORDER.indexOf(b.level);

        if (ai === -1 && bi === -1) return a.level.localeCompare(b.level);
        if (ai === -1) return 1;
        if (bi === -1) return -1;

        return ai - bi;
    });

    return levels.filter(level => level.activities.length > 0);
}

function flattenRoute() {
    return buildLearningRoute().flatMap(level => level.activities);
}

function findRouteActivity(activityId) {
    return flattenRoute().find(activity => activity.id === activityId);
}

function getActivityScore(activity) {
    if (!activity) return null;

    if (state.routeProgress.homologatedActivities[activity.id]) return 100;

    const scores = getScoreObject(activity.type);
    const value = scores[activity.sourceId];

    if (typeof value === 'number') return value;

    const routeValue = state.routeProgress.completedActivities[activity.id];
    if (typeof routeValue === 'number') return routeValue;

    return null;
}

function isActivityPassed(activity) {
    const score = getActivityScore(activity);
    return typeof score === 'number' && score >= PASS_SCORE;
}

function isActivityHomologated(activity) {
    return !!state.routeProgress.homologatedActivities[activity.id];
}

function isActivityReinforcement(activity) {
    return !!(
        state.routeProgress.reinforcementRequired[activity.sourceId] ||
        state.routeProgress.reinforcementRequired[activity.id]
    );
}

function isActivityLocked(activity, index, flatRoute) {
    if (state.role === 'admin' && state.adminView) return false;
    if (index === 0) return false;
    if (isActivityPassed(activity)) return false;
    if (isActivityReinforcement(activity)) return false;

    const previous = flatRoute[index - 1];
    return !isActivityPassed(previous);
}

function routeSummary() {
    const activities = flattenRoute();
    const total = activities.length;
    const passed = activities.filter(isActivityPassed).length;
    const pct = total ? Math.round((passed / total) * 100) : 0;

    return { total, passed, pct };
}

function markActivityCompleted(type, sourceId, pct) {
    const resolvedId = getResolvedSourceId(type, sourceId);
    const activityId = `${type}:${resolvedId}`;

    const scores = getScoreObject(type);
    const previous = scores[resolvedId];

    scores[resolvedId] = typeof previous === 'number' ? Math.max(previous, pct) : pct;
    state.routeProgress.completedActivities[activityId] = scores[resolvedId];

    state.modulesCompleted = routeSummary().passed;
}

window.openRouteActivity = function(activityId) {
    const activity = findRouteActivity(activityId);

    if (!activity) {
        window.showToast('Actividad no encontrada', 'error');
        return;
    }

    const flat = flattenRoute();
    const index = flat.findIndex(item => item.id === activityId);

    if (isActivityLocked(activity, index, flat)) {
        window.showToast('Debes aprobar la actividad anterior con 80% o más.', 'warn');
        return;
    }

    state.routeProgress.currentActivityId = activityId;

    if (activity.type === 'grammar') {
        window.openModule(activity.sourceId);
        return;
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


// ============================================================
// 9. NAVEGACIÓN
// ============================================================

window.showScreen = function(screenId) {
    // FIX: Al cambiar de pantalla siempre reseteamos isChecking.
    // Evita que un setTimeout pendiente de un ejercicio anterior deje la bandera
    // en true y bloquee la interacción en la siguiente actividad que el usuario abra.
    isChecking = false;

    ensureDiagnosticScreen();

    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));

    const el = document.getElementById(`screen-${screenId}`);

    if (el) {
        el.classList.add('active');
    }

    const main = document.getElementById('main-content');
    if (main) main.scrollTop = 0;

    if (screenId === 'dashboard') window.renderDashboard();
    else if (screenId === 'diagnostic') window.renderDiagnostic();
    else if (screenId === 'reading-hub') window.renderReadingHub();
    else if (screenId === 'writing-hub') window.renderWritingHub();
    else if (screenId === 'vocab-hub') window.renderVocabHub();
    else if (screenId === 'settings') window.renderSettings();
    else if (screenId === 'cefr-portfolio') { if (typeof renderCefrPortfolio === 'function') renderCefrPortfolio(); }
    else if (screenId === 'business-english') { if (typeof renderBusinessEnglish === 'function') renderBusinessEnglish(); }

    ensureLucide();
};

window.setActiveNav = function(btn) {
    document.querySelectorAll('.nav-btn').forEach(item => item.classList.remove('active'));
    if (btn) btn.classList.add('active');
};

window.setActiveNavById = function(id) {
    document.querySelectorAll('.nav-btn').forEach(item => item.classList.remove('active'));

    const btn = document.querySelector(`.nav-btn[onclick*="${id}"]`);
    if (btn) btn.classList.add('active');
};

window.toggleSidebar = function() {
    const sidebar = document.getElementById('sidebar');
    const icon = document.getElementById('toggle-icon');

    if (!sidebar || !icon) return;

    sidebar.classList.toggle('collapsed');

    const collapsed = sidebar.classList.contains('collapsed');
    icon.setAttribute('data-lucide', collapsed ? 'panel-left-open' : 'panel-left-close');

    ensureLucide();
};


// ============================================================
// 10. DASHBOARD
// ============================================================

window.renderDashboard = function() {
    updateHeaderUI();
    updateAdminZone();
    setGreeting();

    const summary = routeSummary();

    const accuracy = state.totalAnswers > 0
        ? `${Math.round((state.correctAnswers / state.totalAnswers) * 100)}%`
        : '—';

    safeSet('stat-xp', state.xp);
    safeSet('stat-done', summary.passed);
    safeSet('stat-streak', state.streak);
    safeSet('stat-accuracy', accuracy);
    safeSet('total-progress-pct', `${summary.pct}%`);

    // Mostrar/ocultar empty state según si el usuario tiene XP
    const esb = document.getElementById('empty-state-banner');
    if (esb) esb.style.display = (state.xp === 0 && summary.passed === 0) ? 'flex' : 'none';

    const totalFill = document.getElementById('total-progress-fill');
    if (totalFill) totalFill.style.width = `${summary.pct}%`;

    const grammar = average(Object.values(state.scores));
    const vocab = average(Object.values(state.vocabScores));
    const reading = average(Object.values(state.readingScores));
    const writing = average(Object.values(state.writingDone));

    renderSkillBars(grammar, vocab, reading, writing);
    renderFeedback(grammar, reading, writing, vocab);

    const rank = getRank(summary.pct);

    safeSet('rank-display', rank.name);
    safeSet('cefr-badge', state.routeProgress.placedLevel || rank.cefr);

    renderUnifiedRoute();
    renderActivity();
    renderLeaderboard();
};

function renderSkillBars(grammar, vocab, reading, writing) {
    const el = document.getElementById('skills-bars');
    if (!el) return;

    const skills = [
        { name: 'Gramática', val: grammar, color: '#12375A' },
        { name: 'Vocabulario', val: vocab, color: '#1D9E75' },
        { name: 'Reading', val: reading, color: '#3182CE' },
        { name: 'Writing', val: writing, color: '#D85A30' }
    ];

    el.innerHTML = skills.map(skill => `
        <div class="skill-row-item">
            <div class="skill-info">
                <span>${skill.name}</span>
                <span>${skill.val}%</span>
            </div>
            <div class="s-bar">
                <div class="s-fill" style="width:${skill.val}%;background:${skill.color}"></div>
            </div>
        </div>
    `).join('');
}

function renderUnifiedRoute() {
    const grid = document.getElementById('modules-status-grid');
    if (!grid) return;

    const route = buildLearningRoute();
    const flat = route.flatMap(level => level.activities);

    if (!flat.length) {
        grid.innerHTML = `
            <div class="empty-state">
                <strong>No hay contenidos cargados</strong>
                Revisa que data-grammar.js, data-reading-writing.js y data-vocab.js estén cargando antes de app.js.
            </div>
        `;
        return;
    }

    let globalIndex = 0;

    grid.innerHTML = route.map(level => {
        const completed = level.activities.filter(isActivityPassed).length;
        const pct = level.activities.length
            ? Math.round((completed / level.activities.length) * 100)
            : 0;

        const cards = level.activities.map(activity => {
            const index = globalIndex;
            const score = getActivityScore(activity);
            const passed = isActivityPassed(activity);
            const homologated = isActivityHomologated(activity);
            const reinforcement = isActivityReinforcement(activity);
            const locked = isActivityLocked(activity, index, flat);
            const current = !passed && !locked;
            const number = globalIndex + 1;

            globalIndex++;

            const status = homologated
                ? '✓ Homologado'
                : reinforcement
                    ? 'Refuerzo obligatorio'
                    : passed
                        ? `✓ Aprobado: ${score}%`
                        : locked
                            ? 'Bloqueado'
                            : 'Siguiente actividad';

            const icon = locked
                ? 'lock'
                : homologated
                    ? 'badge-check'
                    : passed
                        ? 'check-circle'
                        : reinforcement
                            ? 'alert-triangle'
                            : activity.icon;

            const statusColor = homologated || passed
                ? '#1D9E75'
                : reinforcement
                    ? '#D7262E'
                    : locked
                        ? '#A0AEC0'
                        : 'var(--primary-mid)';

            return `
                <div 
                    class="mod-card ${passed ? 'mod-done' : ''} ${current ? 'mod-current' : ''} ${locked ? 'mod-locked' : ''}"
                    onclick="openRouteActivity('${activity.id}')"
                >
                    <div 
                        class="mod-icon-wrap" 
                        style="background:${locked ? '#EDF2F7' : activity.color};color:${locked ? '#A0AEC0' : 'white'}"
                    >
                        <i data-lucide="${icon}"></i>
                    </div>

                    <div style="flex:1;min-width:0">
                        <div class="mod-title">
                            ${number}. ${escapeHtml(activity.title)}
                        </div>

                        <div class="mod-status" style="color:${statusColor};font-weight:800;">
                            ${TYPE_META[activity.type].label} · ${status}
                        </div>

                        ${typeof score === 'number'
                            ? `<div class="mod-score-bar">
                                <div class="mod-score-fill" style="width:${score}%;background:${activity.color}"></div>
                               </div>`
                            : ''}
                    </div>
                </div>
            `;
        }).join('');

        return `
            <div class="level-divider">
                <h4 style="color:${level.color};font-size:18px;font-weight:900;margin:24px 0 8px 0;border-bottom:2px solid ${level.color}30;padding-bottom:8px;">
                    ${escapeHtml(level.title)}
                </h4>

                <div style="font-size:13px;color:#6B5F58;margin-bottom:14px;line-height:1.5">
                    ${escapeHtml(level.description)} · Progreso: <strong>${pct}%</strong>
                </div>
            </div>

            <div class="modules-grid" style="margin-bottom:32px">
                ${cards}
            </div>
        `;
    }).join('');

    ensureLucide();
}

async function renderLeaderboard() {
    const el = document.getElementById('leaderboard-list');
    if (!el) return;

    try {
        const usersRef = collection(db, 'users');
        const snapshot = await getDocs(usersRef);

        const users = [];

        snapshot.forEach(item => {
            const data = item.data();

            users.push({
                id: item.id,
                name: data.userName || 'Jugador',
                xp: data.xp || 0,
                level: data.level || 1
            });
        });

        users.sort((a, b) => b.xp - a.xp);

        if (!users.length) {
            el.innerHTML = '<div class="activity-empty">Aún no hay datos familiares.</div>';
            return;
        }

        el.innerHTML = users.map((user, index) => {
            const isFirst = index === 0;
            const isMe = auth.currentUser && auth.currentUser.uid === user.id;
            const rank = isFirst ? '👑' : `${index + 1}`;
            const initial = user.name.charAt(0).toUpperCase();

            return `
                <div class="leaderboard-item ${isMe ? 'lb-me' : ''}">
                    <div class="lb-rank ${isFirst ? 'rank-1' : ''}">${rank}</div>
                    <div class="lb-avatar">${initial}</div>
                    <div class="lb-info">
                        <span class="lb-name">${escapeHtml(user.name)} ${isMe ? '(Tú)' : ''}</span>
                        <span class="lb-level">Nivel ${user.level}</span>
                    </div>
                    <div class="lb-xp">${user.xp} XP</div>
                </div>
            `;
        }).join('');
    } catch (error) {
        console.error('Error cargando leaderboard:', error);
        el.innerHTML = '<div class="activity-empty" style="color:#D7262E;">Error al cargar el ranking.</div>';
    }
}

function renderFeedback(grammar, reading, writing, vocab) {
    const el = document.getElementById('teacher-feedback');
    if (!el) return;

    const items = [];
    const summary = routeSummary();

    if (!summary.passed) {
        items.push({
            type: 'fb-info',
            icon: 'info',
            text: 'Completa tu diagnóstico o tu primera actividad para recibir feedback personalizado.'
        });
    } else {
        if (grammar >= 80) {
            items.push({
                type: 'fb-success',
                icon: 'check-circle',
                text: `Excelente dominio gramatical: ${grammar}%.`
            });
        } else if (grammar > 0) {
            items.push({
                type: 'fb-warn',
                icon: 'alert-triangle',
                text: `Tu gramática está en ${grammar}%. Refuerza los temas marcados en la ruta.`
            });
        }

        if (vocab >= 80) {
            items.push({
                type: 'fb-success',
                icon: 'layers',
                text: `Muy buen trabajo de vocabulario: ${vocab}%.`
            });
        } else if (vocab > 0) {
            items.push({
                type: 'fb-warn',
                icon: 'layers',
                text: `Tu vocabulario está en ${vocab}%. Usa tarjetas y quiz para reforzar.`
            });
        }

        if (reading > 0 && reading < 75) {
            items.push({
                type: 'fb-warn',
                icon: 'book-open',
                text: `Reading está en ${reading}%. Relee con atención y busca evidencia textual.`
            });
        }

        if (writing > 0 && writing < 75) {
            items.push({
                type: 'fb-warn',
                icon: 'pen-line',
                text: `Writing está en ${writing}%. Revisa orden, ortografía y estructura.`
            });
        }

        if (state.routeProgress.diagnosticCompleted) {
            items.push({
                type: 'fb-info',
                icon: 'scan-line',
                text: `Diagnóstico: ${state.routeProgress.placedBand || state.routeProgress.placedLevel}.`
            });
        }
    }

    el.innerHTML = items.map(item => `
        <div class="fb-item ${item.type}">
            <i data-lucide="${item.icon}"></i>
            <span>${escapeHtml(item.text)}</span>
        </div>
    `).join('');

    ensureLucide();
}

function renderActivity() {
    const el = document.getElementById('activity-log');
    if (!el) return;

    if (!state.activityLog.length) {
        el.innerHTML = '<div class="activity-empty">Aún no hay actividad. ¡Empieza una lección o haz el diagnóstico!</div>';
        return;
    }

    el.innerHTML = state.activityLog.slice(0, 8).map(item => `
        <div class="activity-item">
            <div class="activity-dot" style="background:${item.color || '#12375A'}"></div>
            <div class="activity-text">${escapeHtml(item.text)}</div>
            <div class="activity-xp">+${item.xp} XP</div>
            <div class="activity-time">${item.time}</div>
        </div>
    `).join('');
}

function getRank(avg) {
    if (avg >= 90) return { name: 'Maestro del Inglés', cefr: 'B1' };
    if (avg >= 75) return { name: 'Explorador Avanzado', cefr: 'A2+' };
    if (avg >= 50) return { name: 'Viajero del Idioma', cefr: 'A2' };
    if (avg >= 25) return { name: 'Aprendiz Curioso', cefr: 'A1+' };
    return { name: 'Explorador Novato', cefr: 'A1' };
}


// ============================================================
// 11. GRAMMAR ENGINE
// ============================================================

window.openModule = function(moduleId) {
    const resolvedId = resolveGrammarIdSafe(moduleId);
    const mod = getModulesData()[resolvedId];

    if (!mod) {
        window.showToast('Módulo no encontrado', 'error');
        return;
    }

    currentModuleId = resolvedId;
    currentExerciseIdx = 0;
    currentScore = 0;
    currentErrors = 0;
    isChecking = false;

    window.showScreen('module');

    const content = document.getElementById('module-content');
    if (!content) return;

    content.innerHTML = `
        <div class="lesson-header">
            <button class="back-btn" onclick="showScreen('dashboard');setActiveNavById('dashboard')">
                <i data-lucide="arrow-left"></i>
                Volver a mi ruta
            </button>

            <span class="lesson-title">${escapeHtml(mod.title)}</span>
        </div>

        <div class="tab-nav">
            <button class="tab-btn active" id="btn-theory" onclick="setPhase('theory')">
                <i data-lucide="book-open" style="width:14px;height:14px;display:inline;vertical-align:middle;margin-right:4px"></i>
                Teoría
            </button>

            <button class="tab-btn" id="btn-practice" onclick="setPhase('practice')">
                <i data-lucide="zap" style="width:14px;height:14px;display:inline;vertical-align:middle;margin-right:4px"></i>
                Ejercicios (${mod.exercises?.length || 0})
            </button>
        </div>

        <div id="phase-content"></div>
    `;

    ensureLucide();
    window.setPhase('theory');
};

window.setPhase = function(phase) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

    const btn = document.getElementById(`btn-${phase}`);
    if (btn) btn.classList.add('active');

    const mod = getModulesData()[currentModuleId];
    const content = document.getElementById('phase-content');

    if (!mod || !content) return;

    if (phase === 'theory') {
        content.innerHTML = `
            <div class="card-theory animate-pop">
                ${mod.theory || '<p>Este módulo no tiene teoría cargada.</p>'}

                <div style="text-align:right;margin-top:20px">
                    <button class="btn-check" onclick="setPhase('practice')">
                        <i data-lucide="zap"></i>
                        Empezar ejercicios →
                    </button>
                </div>
            </div>
        `;

        ensureLucide();
        return;
    }

    currentExerciseIdx = 0;
    currentScore = 0;
    currentErrors = 0;
    isChecking = false;

    renderGrammarExercise();
};

function renderGrammarExercise() {
    isChecking = false;

    const mod = getModulesData()[currentModuleId];
    if (!mod) return;

    const exercises = mod.exercises || [];
    const q = exercises[currentExerciseIdx];

    if (!q) {
        finishModule();
        return;
    }

    const dots = exercises.map((_, index) => `
        <div class="ex-dot ${index < currentExerciseIdx ? 'done' : index === currentExerciseIdx ? 'current' : ''}"></div>
    `).join('');

    let bodyHtml = '';

    if (q.type === 'choice') {
        bodyHtml = `
            <div class="opts-grid">
                ${(q.opts || []).map((opt, index) => `
                    <button class="opt-btn" onclick="checkChoice(${index}, this)">
                        ${escapeHtml(opt)}
                    </button>
                `).join('')}
            </div>
        `;
    }

    else if (q.type === 'write') {
        bodyHtml = `
            <input 
                type="text" 
                id="write-answer" 
                class="write-input" 
                placeholder="Escribe tu respuesta aquí..." 
                autocomplete="off"
                onkeypress="if(event.key==='Enter')checkWrite()"
            >

            <div class="btn-row">
                <button class="btn-check" onclick="checkWrite()">
                    <i data-lucide="check"></i>
                    Comprobar
                </button>
            </div>
        `;
    }

    else if (q.type === 'order') {
        window.orderAvail = [...(q.words || [])].sort(() => Math.random() - 0.5);
        window.orderSel = [];
        window.orderCorrect = q.a;

        bodyHtml = `<div id="order-ui"></div>`;
    }

    else {
        bodyHtml = `
            <div class="ex-feedback error">
                <i data-lucide="alert-circle"></i>
                Tipo de ejercicio no soportado: ${escapeHtml(q.type)}
            </div>
        `;
    }

    const phase = document.getElementById('phase-content');
    if (!phase) return;

    const typeLabel = q.type === 'choice'
        ? 'Selección múltiple'
        : q.type === 'write'
            ? 'Escritura'
            : q.type === 'order'
                ? 'Ordenar'
                : 'Ejercicio';

    const typeIcon = q.type === 'choice'
        ? 'list'
        : q.type === 'write'
            ? 'pen-line'
            : q.type === 'order'
                ? 'move'
                : 'circle';

    phase.innerHTML = `
        <div class="exercise-card animate-pop">
            <div class="ex-meta">
                <i data-lucide="${typeIcon}"></i>
                ${typeLabel} · Ejercicio ${currentExerciseIdx + 1} / ${exercises.length}
            </div>

            <div class="ex-progress">${dots}</div>

            <div class="ex-q">${q.q}</div>

            ${bodyHtml}

            <div id="ex-feedback"></div>
        </div>
    `;

    ensureLucide();

    if (q.type === 'order') drawOrderUI();

    if (q.type === 'write') {
        setTimeout(() => document.getElementById('write-answer')?.focus(), 100);
    }
}

function drawOrderUI() {
    const container = document.getElementById('order-ui');
    if (!container) return;

    // FIX: Si orderAvail o orderSel son undefined (ej. el usuario volvió atrás y
    // re-entró al ejercicio antes de que renderGrammarExercise completara la
    // inicialización), los reseteamos a array vacío para evitar TypeError y para
    // que el botón "Evaluar" no aparezca habilitado sin palabras seleccionadas.
    if (!Array.isArray(window.orderAvail)) window.orderAvail = [];
    if (!Array.isArray(window.orderSel))   window.orderSel   = [];

    // El botón "Evaluar" solo se habilita cuando el pool de disponibles está vacío
    // Y hay al menos una palabra seleccionada (evita habilitarlo con todo vacío).
    const allDone = window.orderAvail.length === 0 && window.orderSel.length > 0;

    container.innerHTML = `
        <div class="order-zone" id="order-zone">
            ${window.orderSel.length === 0
                ? '<span style="color:#A0AEC0;font-size:13px">Toca las palabras para construir la frase...</span>'
                : ''}

            <div class="order-words-pool" style="justify-content:center">
                ${window.orderSel.map((word, index) => `
                    <div class="order-word in-zone" onclick="moveWord(${index}, 'back')">
                        ${escapeHtml(word)}
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="order-words-pool">
            ${window.orderAvail.map((word, index) => `
                <div class="order-word" onclick="moveWord(${index}, 'add')">
                    ${escapeHtml(word)}
                </div>
            `).join('')}
        </div>

        <div class="btn-row">
            <button class="btn-check" onclick="checkOrder()" ${!allDone ? 'disabled style="opacity:0.5;cursor:not-allowed"' : ''}>
                <i data-lucide="check"></i>
                Evaluar frase
            </button>

            <button class="btn-secondary" onclick="resetOrder()">
                Reiniciar
            </button>
        </div>
    `;

    ensureLucide();
}

window.moveWord = function(index, direction) {
    if (direction === 'add') {
        window.orderSel.push(window.orderAvail.splice(index, 1)[0]);
    } else {
        window.orderAvail.push(window.orderSel.splice(index, 1)[0]);
    }

    drawOrderUI();
};

window.resetOrder = function() {
    const all = [...window.orderSel, ...window.orderAvail].sort(() => Math.random() - 0.5);

    window.orderSel = [];
    window.orderAvail = all;

    drawOrderUI();
};

window.checkChoice = function(index, btn) {
    if (isChecking) return;

    const mod = getModulesData()[currentModuleId];
    const q = mod.exercises[currentExerciseIdx];
    const selected = q.opts[index];

    // FIX: Calculamos el índice correcto una sola vez y lo usamos para TODO:
    // lógica de acierto Y resaltado visual. Antes el resaltado usaba
    // textContent.trim() que falla con espacios extra o HTML entities en el DOM.
    const correctIndex = typeof q.a === 'number'
        ? q.a
        : q.opts.indexOf(q.a);

    const correct = q.opts[correctIndex] ?? q.a;  // texto legible para el feedback

    const ok = index === correctIndex;

    isChecking = true;
    state.totalAnswers++;

    const allBtns = document.querySelectorAll('.opt-btn');
    allBtns.forEach(button => button.disabled = true);

    if (ok) {
        btn.classList.add('correct');
        state.correctAnswers++;
        currentScore++;

        showGrammarFeedback(true, q.exp || `¡Correcto! "${correct}" es la respuesta exacta.`);
        addXP(10, true);
    } else {
        btn.classList.add('wrong');

        // Resaltado por índice: directo, sin comparar texto, inmune a cualquier
        // diferencia de espaciado o encoding entre el dato y el DOM.
        if (allBtns[correctIndex]) allBtns[correctIndex].classList.add('correct');

        currentErrors++;

        showGrammarFeedback(false, q.exp || `Incorrecto. La respuesta correcta es "<strong>${correct}</strong>".`);
    }

    saveState();

    setTimeout(advanceExercise, 1600);
};

window.checkWrite = function() {
    if (isChecking) return;

    const input = document.getElementById('write-answer');
    if (!input) return;

    const value = normalizeAnswer(input.value);

    if (!value) {
        window.showToast('Escribe tu respuesta primero', 'warn');
        return;
    }

    const mod = getModulesData()[currentModuleId];
    const q = mod.exercises[currentExerciseIdx];
    const correct = normalizeAnswer(q.a);

    isChecking = true;
    state.totalAnswers++;

    if (value === correct) {
        input.classList.add('correct');
        state.correctAnswers++;
        currentScore++;

        showGrammarFeedback(true, q.exp || `¡Perfecto! "${q.a}" es correcto.`);
        addXP(15, true);
    } else {
        input.classList.add('wrong');
        input.value = q.a;
        currentErrors++;

        showGrammarFeedback(false, q.exp || `Incorrecto. La respuesta es "<strong>${q.a}</strong>".`);
    }

    saveState();

    setTimeout(advanceExercise, 1800);
};

window.checkOrder = function() {
    if (isChecking) return;

    const sentence = window.orderSel.join(' ').trim();
    const correct = String(window.orderCorrect || '').trim();
    const zone = document.getElementById('order-zone');

    isChecking = true;
    state.totalAnswers++;

    if (sentence === correct) {
        if (zone) zone.classList.add('correct');

        state.correctAnswers++;
        currentScore++;

        showGrammarFeedback(true, `¡Sintaxis perfecta! "${correct}"`);
        addXP(20, true);
    } else {
        if (zone) zone.classList.add('wrong');

        currentErrors++;

        showGrammarFeedback(false, `Incorrecto. La frase correcta es: "<strong>${correct}</strong>".`);
    }

    saveState();

    setTimeout(advanceExercise, 2000);
};

function showGrammarFeedback(ok, message) {
    const el = document.getElementById('ex-feedback');
    if (!el) return;

    el.innerHTML = `
        <div class="ex-feedback ${ok ? 'success' : 'error'}">
            <i data-lucide="${ok ? 'check-circle' : 'x-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    ensureLucide();
}

function advanceExercise() {
    isChecking = false;
    currentExerciseIdx++;

    const mod = getModulesData()[currentModuleId];

    if (currentExerciseIdx < (mod.exercises || []).length) {
        renderGrammarExercise();
    } else {
        finishModule();
    }
}

function finishModule() {
    const mod = getModulesData()[currentModuleId];
    const total = mod.exercises?.length || 0;
    const pct = total ? Math.round((currentScore / total) * 100) : 0;

    markActivityCompleted('grammar', currentModuleId, pct);

    const xpBonus = pct >= 80 ? 60 : pct >= 60 ? 40 : 20;

    addXP(xpBonus, false);
    logActivity(`Grammar "${mod.title}" completado`, xpBonus, mod.color || TYPE_META.grammar.color);

    renderResultCard({
        containerId: 'phase-content',
        pct,
        score: currentScore,
        total,
        xpBonus,
        title: pct >= 80
            ? '¡Dominio excelente!'
            : pct >= 60
                ? 'Buen trabajo. Repasa algún punto.'
                : 'Sigue practicando. ¡Tú puedes!',
        retryAction: "setPhase('practice')",
        backAction: "showScreen('dashboard');setActiveNavById('dashboard')",
        retryLabel: 'Repetir',
        backLabel: 'Volver a mi ruta'
    });

    saveState();
}


// ============================================================
// 12. READING ENGINE
// ============================================================

window.renderReadingHub = function() {
    const el = document.getElementById('reading-hub-content');
    if (!el) return;

    const texts = getReadingTexts();

    el.innerHTML = `
        <div style="margin-bottom:12px">
            <button class="back-btn" onclick="showScreen('dashboard');setActiveNavById('dashboard')">
                <i data-lucide="arrow-left"></i>
                Volver a mi ruta
            </button>
        </div>

        <div class="reading-grid">
            ${texts.map(text => {
                const score = state.readingScores[text.id];
                const done = score != null;
                const total = Array.isArray(text.qs) ? text.qs.length : text.questions || 0;

                return `
                    <div class="reading-card" onclick="openReading('${text.id}')">
                        <div class="reading-card-banner" style="background:${text.levelColor || TYPE_META.reading.color}"></div>

                        <div class="reading-card-body">
                            <span class="reading-level-badge" style="background:${text.levelColor || TYPE_META.reading.color}20;color:${text.levelColor || TYPE_META.reading.color}">
                                ${text.level || 'A1'} · ${escapeHtml(text.topic || 'Reading')}
                            </span>

                            <div class="reading-card-title">${escapeHtml(text.title)}</div>
                            <div class="reading-card-desc">${escapeHtml(text.desc || '')}</div>
                        </div>

                        <div class="reading-card-footer">
                            <span>${total} preguntas</span>
                            <span style="font-weight:700;color:${done ? '#1D9E75' : '#A0AEC0'}">
                                ${done ? `✓ ${score}%` : 'Sin completar'}
                            </span>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;

    ensureLucide();
};

window.openReading = function(id) {
    const text = getReadingTexts().find(item => item.id === id);
    if (!text) return;

    // FIX: Cancelar cualquier setTimeout pendiente del texto anterior antes de
    // reinicializar el estado. Sin esto, el timer del texto anterior puede
    // ejecutarse milisegundos después y avanzar currentReadingQIdx sobre el
    // texto nuevo, saltándose la primera pregunta.
    if (readingTimer !== null) {
        clearTimeout(readingTimer);
        readingTimer = null;
    }

    currentReadingId = id;
    currentReadingQIdx = 0;
    currentReadingScore = 0;
    isChecking = false;

    const el = document.getElementById('reading-hub-content');
    if (!el) return;

    el.innerHTML = `
        <div style="margin-bottom:12px">
            <button class="back-btn" onclick="showScreen('dashboard');setActiveNavById('dashboard')">
                <i data-lucide="arrow-left"></i>
                Volver a mi ruta
            </button>
        </div>

        <div class="reading-lesson-wrap">
            <div class="reading-text-area">
                <div class="reading-title">${escapeHtml(text.title)}</div>

                <div class="reading-meta">
                    Nivel ${text.level || 'A1'} · ${escapeHtml(text.topic || 'Reading')}
                </div>

                <div class="reading-body">${text.body || ''}</div>
            </div>

            <div class="reading-qs">
                <h4>Preguntas de comprensión</h4>
                <div id="reading-q-zone"></div>
            </div>
        </div>
    `;

    ensureLucide();
    renderReadingQuestion(text);
};

function renderReadingQuestion(text) {
    const questions = text.qs || [];

    if (currentReadingQIdx >= questions.length) {
        finishReading(text);
        return;
    }

    const q = questions[currentReadingQIdx];
    window.currentReadingQuestion = q;
    isChecking = false;

    const zone = document.getElementById('reading-q-zone');
    if (!zone) return;

    let bodyHtml = '';

    if (!q.type || q.type === 'choice') {
        bodyHtml = `
            <div class="opts-grid">
                ${(q.opts || []).map((opt, index) => `
                    <button class="opt-btn" onclick="checkReadingQ(${index}, this)">
                        ${escapeHtml(opt)}
                    </button>
                `).join('')}
            </div>
        `;
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
                    <i data-lucide="check"></i>
                    Comprobar
                </button>
            </div>
        `;
    }

    zone.innerHTML = `
        <div style="margin-bottom:10px;font-size:12px;color:#A0AEC0;font-weight:700">
            Pregunta ${currentReadingQIdx + 1} de ${questions.length}
        </div>

        <div class="ex-q" style="font-size:16px;text-align:left;margin-bottom:16px">
            ${q.q}
        </div>

        ${bodyHtml}

        <div id="rq-fb"></div>
    `;

    ensureLucide();

    if (q.type === 'fill') {
        setTimeout(() => document.getElementById('rq-input')?.focus(), 100);
    }
}

window.checkReadingQ = function(chosen, btn) {
    if (isChecking) return;

    const q = window.currentReadingQuestion;
    if (!q) return;

    const correct = q.a;
    const ok = chosen === correct;

    isChecking = true;
    state.totalAnswers++;

    document.querySelectorAll('.opts-grid .opt-btn').forEach(button => button.disabled = true);

    const fb = document.getElementById('rq-fb');

    if (ok) {
        btn.classList.add('correct');
        state.correctAnswers++;
        currentReadingScore++;

        if (fb) {
            fb.innerHTML = `
                <div class="ex-feedback success">
                    <i data-lucide="check-circle"></i>
                    <span>¡Correcto! ${q.exp || ''}</span>
                </div>
            `;
        }

        addXP(10, true);
    } else {
        btn.classList.add('wrong');

        const buttons = document.querySelectorAll('.opts-grid .opt-btn');
        if (buttons[correct]) buttons[correct].classList.add('correct');

        if (fb) {
            fb.innerHTML = `
                <div class="ex-feedback error">
                    <i data-lucide="x-circle"></i>
                    <span>Incorrecto. ${q.exp || ''}</span>
                </div>
            `;
        }
    }

    ensureLucide();
    saveState();

    // FIX: Guardamos el ID del timer para poder cancelarlo en openReading si el
    // usuario navega antes de que expire. También hacemos snapshot del ID del texto
    // activo ahora: si el timer escapa al clearTimeout, la comparación lo aborta.
    const snapshotReadingId = currentReadingId;
    readingTimer = setTimeout(() => {
        readingTimer = null;
        if (currentReadingId !== snapshotReadingId) return; // texto cambió, abortar
        const text = getReadingTexts().find(item => item.id === currentReadingId);
        currentReadingQIdx++;
        renderReadingQuestion(text);
    }, 1600);
};

window.checkReadingFill = function() {
    if (isChecking) return;

    const q = window.currentReadingQuestion;
    const input = document.getElementById('rq-input');
    const fb = document.getElementById('rq-fb');

    if (!q || !input) return;

    const value = normalizeAnswer(input.value);
    const correct = normalizeAnswer(q.a);

    if (!value) {
        window.showToast('Escribe tu respuesta', 'warn');
        return;
    }

    isChecking = true;
    state.totalAnswers++;

    if (value === correct) {
        input.classList.add('correct');
        state.correctAnswers++;
        currentReadingScore++;

        if (fb) {
            fb.innerHTML = `
                <div class="ex-feedback success">
                    <i data-lucide="check-circle"></i>
                    <span>¡Correcto! ${q.exp || ''}</span>
                </div>
            `;
        }

        addXP(10, true);
    } else {
        input.classList.add('wrong');
        input.value = q.a;

        if (fb) {
            fb.innerHTML = `
                <div class="ex-feedback error">
                    <i data-lucide="x-circle"></i>
                    <span>Incorrecto. ${q.exp || `La respuesta correcta es "${q.a}".`}</span>
                </div>
            `;
        }
    }

    ensureLucide();
    saveState();

    // FIX: mismo patrón que checkReadingQ — timer cancelable + snapshot defensivo.
    const snapshotReadingId = currentReadingId;
    readingTimer = setTimeout(() => {
        readingTimer = null;
        if (currentReadingId !== snapshotReadingId) return;
        const text = getReadingTexts().find(item => item.id === currentReadingId);
        currentReadingQIdx++;
        renderReadingQuestion(text);
    }, 1900);
};

function finishReading(text) {
    const total = text.qs?.length || 0;
    const pct = total ? Math.round((currentReadingScore / total) * 100) : 0;

    markActivityCompleted('reading', text.id, pct);

    const xpBonus = pct >= 80 ? 50 : pct >= 60 ? 30 : 15;

    addXP(xpBonus, false);
    logActivity(`Reading "${text.title}" completado`, xpBonus, text.levelColor || TYPE_META.reading.color);

    renderResultCard({
        containerId: 'reading-q-zone',
        pct,
        score: currentReadingScore,
        total,
        xpBonus,
        title: pct >= 80
            ? '¡Lectura dominada!'
            : pct >= 60
                ? 'Buena comprensión. Relee el texto.'
                : 'Vuelve a leer el texto con calma.',
        retryAction: `openReading('${text.id}')`,
        backAction: "showScreen('dashboard');setActiveNavById('dashboard')",
        retryLabel: 'Repetir',
        backLabel: 'Volver a mi ruta'
    });

    saveState();
}


// ============================================================
// 13. WRITING ENGINE
// ============================================================

window.renderWritingHub = function() {
    const el = document.getElementById('writing-hub-content');
    if (!el) return;

    const exercises = getWritingExercises();

    el.innerHTML = `
        <div style="margin-bottom:12px">
            <button class="back-btn" onclick="showScreen('dashboard');setActiveNavById('dashboard')">
                <i data-lucide="arrow-left"></i>
                Volver a mi ruta
            </button>
        </div>

        <div class="writing-grid">
            ${exercises.map(ex => {
                const score = state.writingDone[ex.id];
                const done = score != null;

                return `
                    <div class="writing-ex-card" onclick="openWriting('${ex.id}')">
                        <span class="writing-type-badge" style="background:${ex.typeColor || TYPE_META.writing.color}20;color:${ex.typeColor || TYPE_META.writing.color}">
                            ${escapeHtml(ex.typeLabel || ex.type || 'Writing')}
                        </span>

                        <div class="writing-ex-title">${escapeHtml(ex.title)}</div>
                        <div class="writing-ex-desc">${escapeHtml(ex.desc || '')}</div>

                        ${done
                            ? `<div style="margin-top:10px;font-size:12px;font-weight:700;color:#1D9E75">✓ Completado: ${score}%</div>`
                            : `<div style="margin-top:10px;font-size:12px;color:#A0AEC0">Sin completar</div>`}
                    </div>
                `;
            }).join('')}
        </div>
    `;

    ensureLucide();
};

window.openWriting = function(id) {
    const exercise = getWritingExercises().find(item => item.id === id);
    if (!exercise) return;

    window.currentWritingExercise = exercise;
    window.currentWritingId = exercise.id;

    const el = document.getElementById('writing-hub-content');
    if (!el) return;

    const icon = exercise.type === 'dictation'
        ? 'headphones'
        : exercise.type === 'error'
            ? 'search'
            : exercise.type === 'order'
                ? 'move'
                : exercise.type === 'transform'
                    ? 'pen-line'
                    : exercise.type === 'free'
                        ? 'file-pen-line'
                        : 'pen-line';

    el.innerHTML = `
        <div style="margin-bottom:12px">
            <button class="back-btn" onclick="showScreen('dashboard');setActiveNavById('dashboard')">
                <i data-lucide="arrow-left"></i>
                Volver a mi ruta
            </button>
        </div>

        <div class="exercise-card animate-pop">
            <div class="ex-meta">
                <i data-lucide="${icon}"></i>
                ${escapeHtml(exercise.title)}
            </div>

            <div id="w-${exercise.type}-ui"></div>
        </div>
    `;

    ensureLucide();

    if (exercise.type === 'order') {
        window.wOrderTasks = exercise.tasks || [];
        window.wOrderIdx = 0;
        window.wOrderScore = 0;
        renderWritingOrder();
    }

    else if (exercise.type === 'transform') {
        window.wTransTasks = exercise.tasks || [];
        window.wTransIdx = 0;
        window.wTransScore = 0;
        renderWritingTransform();
    }

    else if (exercise.type === 'free') {
        window.wFreeTasks = exercise.tasks || [];
        window.wFreeIdx = 0;
        window.wFreeScore = 0;
        renderWritingFree();
    }

    else if (exercise.type === 'error') {
        window.wErrTasks = exercise.tasks || [];
        window.wErrIdx = 0;
        window.wErrScore = 0;
        renderWritingError();
    }

    else if (exercise.type === 'dictation') {
        window.wDicTasks = exercise.tasks || [];
        window.wDicIdx = 0;
        window.wDicScore = 0;
        renderWritingDictation();
    }

    else {
        const ui = document.getElementById(`w-${exercise.type}-ui`);
        if (ui) {
            ui.innerHTML = `
                <div class="ex-feedback error">
                    <i data-lucide="alert-circle"></i>
                    Tipo de ejercicio no soportado: ${escapeHtml(exercise.type)}
                </div>
            `;

            ensureLucide();
        }
    }
};

function renderWritingOrder() {
    const ui = document.getElementById('w-order-ui');
    if (!ui) return;

    const task = window.wOrderTasks[window.wOrderIdx];

    if (!task) {
        finishWriting(window.currentWritingId, window.wOrderScore, window.wOrderTasks.length);
        return;
    }

    window.woAvail = [...(task.words || [])].sort(() => Math.random() - 0.5);
    window.woSel = [];
    window.woCurrent = task.answer;

    ui.innerHTML = `
        <div style="margin-bottom:10px;font-size:12px;color:#A0AEC0;font-weight:700">
            Ejercicio ${window.wOrderIdx + 1} de ${window.wOrderTasks.length}
        </div>

        <div class="ex-q">${escapeHtml(task.prompt || 'Ordena la frase:')}</div>

        ${task.tip ? `<div class="tip-callout" style="margin-bottom:16px"><i data-lucide="lightbulb"></i>${escapeHtml(task.tip)}</div>` : ''}

        <div class="order-zone">
            <div class="order-words-pool" id="wo-sel"></div>
        </div>

        <div class="order-words-pool" id="wo-avail"></div>
        <div id="wo-fb"></div>

        <div class="btn-row">
            <button class="btn-check" id="wo-check-btn" onclick="checkWritingOrder()" disabled style="opacity:0.5;cursor:not-allowed">
                <i data-lucide="check"></i>
                Comprobar
            </button>
        </div>
    `;

    ensureLucide();
    refreshWritingOrder();
}

function refreshWritingOrder() {
    const selectedEl = document.getElementById('wo-sel');
    const availableEl = document.getElementById('wo-avail');
    const btn = document.getElementById('wo-check-btn');

    if (selectedEl) {
        selectedEl.innerHTML = window.woSel.length
            ? window.woSel.map((word, index) => `
                <div class="order-word in-zone" onclick="woMove(${index}, 'back')">
                    ${escapeHtml(word)}
                </div>
            `).join('')
            : '<span style="color:#A0AEC0;font-size:13px">Selecciona palabras...</span>';
    }

    if (availableEl) {
        availableEl.innerHTML = window.woAvail.map((word, index) => `
            <div class="order-word" onclick="woMove(${index}, 'add')">
                ${escapeHtml(word)}
            </div>
        `).join('');
    }

    if (btn) {
        const ready = window.woAvail.length === 0;
        btn.disabled = !ready;
        btn.style.opacity = ready ? '1' : '0.5';
        btn.style.cursor = ready ? 'pointer' : 'not-allowed';
    }
}

window.woMove = function(index, direction) {
    if (direction === 'add') {
        window.woSel.push(window.woAvail.splice(index, 1)[0]);
    } else {
        window.woAvail.push(window.woSel.splice(index, 1)[0]);
    }

    refreshWritingOrder();
};

window.checkWritingOrder = function() {
    const sentence = window.woSel.join(' ').trim();
    const correct = String(window.woCurrent || '').trim();
    const fb = document.getElementById('wo-fb');

    state.totalAnswers++;

    if (sentence === correct) {
        state.correctAnswers++;
        window.wOrderScore++;

        if (fb) {
            fb.innerHTML = `
                <div class="ex-feedback success">
                    <i data-lucide="check-circle"></i>
                    ¡Correcto! "${escapeHtml(correct)}"
                </div>
            `;
        }

        addXP(15, true);
    } else if (fb) {
        fb.innerHTML = `
            <div class="ex-feedback error">
                <i data-lucide="x-circle"></i>
                La frase correcta es: <strong>${escapeHtml(correct)}</strong>
            </div>
        `;
    }

    ensureLucide();
    saveState();

    setTimeout(() => {
        window.wOrderIdx++;
        renderWritingOrder();
    }, 1600);
};

function renderWritingTransform() {
    const ui = document.getElementById('w-transform-ui');
    if (!ui) return;

    const task = window.wTransTasks[window.wTransIdx];

    if (!task) {
        finishWriting(window.currentWritingId, window.wTransScore, window.wTransTasks.length);
        return;
    }

    window.currentTransformTask = task;

    ui.innerHTML = `
        <div style="margin-bottom:10px;font-size:12px;color:#A0AEC0;font-weight:700">
            Ejercicio ${window.wTransIdx + 1} de ${window.wTransTasks.length}
        </div>

        <div class="ex-q" style="text-align:left">${escapeHtml(task.prompt)}</div>

        ${task.tip ? `<div class="tip-callout" style="margin-bottom:14px"><i data-lucide="lightbulb"></i>${escapeHtml(task.tip)}</div>` : ''}

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
                <i data-lucide="check"></i>
                Comprobar
            </button>
        </div>
    `;

    ensureLucide();
    setTimeout(() => document.getElementById('wt-input')?.focus(), 100);
}

window.checkWritingTransform = function() {
    const task = window.currentTransformTask;
    const input = document.getElementById('wt-input');
    const fb = document.getElementById('wt-fb');

    if (!task || !input) return;

    const value = normalizeAnswer(input.value);
    const correct = normalizeAnswer(task.answer);

    if (!value) {
        window.showToast('Escribe tu respuesta', 'warn');
        return;
    }

    state.totalAnswers++;

    if (value === correct) {
        input.classList.add('correct');
        state.correctAnswers++;
        window.wTransScore++;

        if (fb) {
            fb.innerHTML = `
                <div class="ex-feedback success">
                    <i data-lucide="check-circle"></i>
                    ¡Perfecto!
                </div>
            `;
        }

        addXP(15, true);
    } else {
        input.classList.add('wrong');

        if (fb) {
            fb.innerHTML = `
                <div class="ex-feedback error">
                    <i data-lucide="x-circle"></i>
                    La respuesta correcta es: <strong>${escapeHtml(task.answer)}</strong>
                </div>
            `;
        }
    }

    ensureLucide();
    saveState();

    setTimeout(() => {
        window.wTransIdx++;
        renderWritingTransform();
    }, 1700);
};

function renderWritingFree() {
    const ui = document.getElementById('w-free-ui');
    if (!ui) return;

    const task = window.wFreeTasks[window.wFreeIdx];

    if (!task) {
        finishWriting(window.currentWritingId, window.wFreeScore, window.wFreeTasks.length);
        return;
    }

    ui.innerHTML = `
        <div style="margin-bottom:10px;font-size:12px;color:#A0AEC0;font-weight:700">
            Ejercicio ${window.wFreeIdx + 1} de ${window.wFreeTasks.length}
        </div>

        <div class="ex-q" style="text-align:left;margin-bottom:16px">
            ${escapeHtml(task.prompt)}
        </div>

        ${task.hint ? `<div class="tip-callout" style="margin-bottom:12px"><i data-lucide="lightbulb"></i><strong>Guía:</strong> ${escapeHtml(task.hint)}</div>` : ''}

        ${task.example ? `<div style="background:#F7FAFC;border:1px dashed #CBD5E0;border-radius:10px;padding:12px;margin-bottom:12px;font-size:13px;color:#718096"><strong>Ejemplo:</strong> ${escapeHtml(task.example)}</div>` : ''}

        <textarea id="wf-area" class="writing-textarea" placeholder="Escribe aquí tu respuesta en inglés..."></textarea>

        <div id="wf-fb"></div>

        <div class="btn-row">
            <button class="btn-check" onclick="checkFreeWriting(${task.minWords || 25})">
                <i data-lucide="send"></i>
                Enviar
            </button>
        </div>
    `;

    ensureLucide();
};

window.checkFreeWriting = function(minWords) {
    const area = document.getElementById('wf-area');
    const fb = document.getElementById('wf-fb');

    if (!area) return;

    const text = area.value.trim();
    const words = text.split(/\s+/).filter(Boolean).length;

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
                    ¡Muy bien! Escribiste ${words} palabras.
                </div>
            `;
        }

        addXP(20, true);
    } else if (fb) {
        fb.innerHTML = `
            <div class="ex-feedback error">
                <i data-lucide="alert-circle"></i>
                Escribiste ${words} palabras. Mínimo esperado: ${minWords}.
            </div>
        `;
    }

    ensureLucide();
    saveState();

    setTimeout(() => {
        window.wFreeIdx++;
        renderWritingFree();
    }, 2000);
};

function renderWritingError() {
    const ui = document.getElementById('w-error-ui');
    if (!ui) return;

    const task = window.wErrTasks[window.wErrIdx];

    if (!task) {
        finishWriting(window.currentWritingId, window.wErrScore, window.wErrTasks.length);
        return;
    }

    window.currentErrorTask = task;

    ui.innerHTML = `
        <div style="margin-bottom:10px;font-size:12px;color:#A0AEC0;font-weight:700">
            Ejercicio ${window.wErrIdx + 1} de ${window.wErrTasks.length}
        </div>

        <div class="ex-q" style="text-align:left;color:#D7262E;text-decoration:line-through;font-size:18px">
            ${escapeHtml(task.wrong)}
        </div>

        ${task.tip ? `<div class="tip-callout" style="margin-bottom:14px"><i data-lucide="lightbulb"></i>${escapeHtml(task.tip)}</div>` : ''}

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
                <i data-lucide="check"></i>
                Comprobar
            </button>
        </div>
    `;

    ensureLucide();
    setTimeout(() => document.getElementById('we-input')?.focus(), 100);
}

window.checkWritingError = function() {
    const task = window.currentErrorTask;
    const input = document.getElementById('we-input');
    const fb = document.getElementById('we-fb');

    if (!task || !input) return;

    const value = normalizeAnswer(input.value);
    const correct = normalizeAnswer(task.answer);

    if (!value) {
        window.showToast('Escribe tu respuesta', 'warn');
        return;
    }

    state.totalAnswers++;

    if (value === correct) {
        input.classList.add('correct');
        state.correctAnswers++;
        window.wErrScore++;

        if (fb) {
            fb.innerHTML = `
                <div class="ex-feedback success">
                    <i data-lucide="check-circle"></i>
                    ¡Corrección perfecta!
                </div>
            `;
        }

        addXP(15, true);
    } else {
        input.classList.add('wrong');

        if (fb) {
            fb.innerHTML = `
                <div class="ex-feedback error">
                    <i data-lucide="x-circle"></i>
                    Corrección sugerida: <strong>${escapeHtml(task.answer)}</strong>
                </div>
            `;
        }
    }

    ensureLucide();
    saveState();

    setTimeout(() => {
        window.wErrIdx++;
        renderWritingError();
    }, 2000);
};

function renderWritingDictation() {
    const ui = document.getElementById('w-dictation-ui');
    if (!ui) return;

    const task = window.wDicTasks[window.wDicIdx];

    if (!task) {
        finishWriting(window.currentWritingId, window.wDicScore, window.wDicTasks.length);
        return;
    }

    window.currentDictationTask = task;

    ui.innerHTML = `
        <div style="margin-bottom:10px;font-size:12px;color:#A0AEC0;font-weight:700">
            Dictado ${window.wDicIdx + 1} de ${window.wDicTasks.length}
        </div>

        <div class="ex-q" style="text-align:left;margin-bottom:14px">
            Escucha el audio y escribe exactamente la frase.
        </div>

        <div class="btn-row" style="margin-bottom:14px">
            <button class="btn-check" onclick="playCurrentDictation()" style="background:#805AD5">
                <i data-lucide="volume-2"></i>
                Escuchar
            </button>

            <button class="btn-check" onclick="playCurrentDictationSlow()" style="background:#718096">
                <i data-lucide="snail"></i>
                Lento
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
                <i data-lucide="check"></i>
                Comprobar
            </button>
        </div>
    `;

    ensureLucide();
    setTimeout(() => document.getElementById('wd-input')?.focus(), 100);
}

window.playCurrentDictation = function() {
    const task = window.currentDictationTask;
    if (!task) return;

    window.playAudio(task.audio || task.answer || '', 'en-US');
};

window.playCurrentDictationSlow = function() {
    const task = window.currentDictationTask;
    if (!task) return;

    window.playAudio(task.audio || task.answer || '', 'en-US', null, 0.68);
};

window.checkWritingDictation = function() {
    const task = window.currentDictationTask;
    const input = document.getElementById('wd-input');
    const fb = document.getElementById('wd-fb');

    if (!task || !input) return;

    const value = normalizeAnswer(input.value);
    const correct = normalizeAnswer(task.answer);

    if (!value) {
        window.showToast('Escribe lo que escuchaste', 'warn');
        return;
    }

    state.totalAnswers++;

    if (value === correct) {
        input.classList.add('correct');
        state.correctAnswers++;
        window.wDicScore++;

        if (fb) {
            fb.innerHTML = `
                <div class="ex-feedback success">
                    <i data-lucide="check-circle"></i>
                    ¡Dictado correcto! ${escapeHtml(task.tip || '')}
                </div>
            `;
        }

        addXP(18, true);
    } else {
        input.classList.add('wrong');

        if (fb) {
            fb.innerHTML = `
                <div class="ex-feedback error">
                    <i data-lucide="x-circle"></i>
                    La frase correcta es: <strong>${escapeHtml(task.answer)}</strong>
                    ${task.tip ? `<br><small>${escapeHtml(task.tip)}</small>` : ''}
                </div>
            `;
        }
    }

    ensureLucide();
    saveState();

    setTimeout(() => {
        window.wDicIdx++;
        renderWritingDictation();
    }, 2400);
};

function finishWriting(id, score, total) {
    const pct = total ? Math.round((score / total) * 100) : 0;

    markActivityCompleted('writing', id, pct);

    const xpBonus = pct >= 80 ? 40 : pct >= 60 ? 25 : 15;
    const exercise = getWritingExercises().find(item => item.id === id);

    addXP(xpBonus, false);
    logActivity(`Writing "${exercise?.title || id}" completado`, xpBonus, TYPE_META.writing.color);

    // FIX: Buscamos el contenedor por el tipo del ejercicio activo (window.currentWritingExercise).
    // Antes se intentaban IDs hardcodeados; si el tipo era 'fill' u otro nuevo tipo,
    // el getElementById devolvía null y la tarjeta de resultados nunca se renderizaba.
    const activeType = window.currentWritingExercise?.type;
    const ui = activeType
        ? document.getElementById(`w-${activeType}-ui`)
        : (
            document.getElementById('w-order-ui') ||
            document.getElementById('w-transform-ui') ||
            document.getElementById('w-free-ui') ||
            document.getElementById('w-error-ui') ||
            document.getElementById('w-dictation-ui') ||
            document.getElementById('w-fill-ui')
          );

    if (!ui) {
        console.warn(`[LeoEnglish] finishWriting: no se encontró el contenedor UI para tipo "${activeType || 'desconocido'}". La tarjeta de resultados no puede renderizarse.`);
        return;
    }

    renderResultCard({
        containerElement: ui,
        pct,
        score,
        total,
        xpBonus,
        title: pct >= 80
            ? '¡Escritura excelente!'
            : pct >= 60
                ? 'Buen esfuerzo. Sigue practicando.'
                : 'La escritura mejora con práctica y corrección.',
        retryAction: `openWriting('${id}')`,
        backAction: "showScreen('dashboard');setActiveNavById('dashboard')",
        retryLabel: 'Repetir',
        backLabel: 'Volver a mi ruta'
    });

    saveState();
}


// ============================================================
// 14. VOCAB ENGINE
// ============================================================

window.renderVocabHub = function() {
    const el = document.getElementById('vocab-hub-content');
    if (!el) return;

    const topics = getVocabTopics();

    el.innerHTML = `
        <div style="margin-bottom:12px">
            <button class="back-btn" onclick="showScreen('dashboard');setActiveNavById('dashboard')">
                <i data-lucide="arrow-left"></i>
                Volver a mi ruta
            </button>
        </div>

        <div class="vocab-topics-grid">
            ${topics.map(topic => {
                const score = state.vocabScores[topic.id];

                return `
                    <div class="vocab-topic-card" onclick="openVocabTopic('${topic.id}')">
                        <div class="vocab-topic-icon">${topic.icon || '📘'}</div>
                        <div class="vocab-topic-title">${escapeHtml(topic.title)}</div>
                        <div class="vocab-topic-count">${topic.count || topic.words?.length || 0} palabras</div>
                        ${score != null
                            ? `<div style="margin-top:6px;font-size:12px;font-weight:700;color:#1D9E75">✓ ${score}%</div>`
                            : ''}
                    </div>
                `;
            }).join('')}
        </div>
    `;
};

window.openVocabTopic = function(id) {
    const resolved = resolveVocabIdSafe(id);
    vocabCurrentTopic = getVocabTopics().find(topic => topic.id === resolved || topic.id === id);

    if (!vocabCurrentTopic) return;

    vocabMode = 'flash';

    const el = document.getElementById('vocab-hub-content');
    if (!el) return;

    el.innerHTML = `
        <div style="margin-bottom:12px">
            <button class="back-btn" onclick="showScreen('dashboard');setActiveNavById('dashboard')">
                <i data-lucide="arrow-left"></i>
                Volver a mi ruta
            </button>
        </div>

        <div class="lesson-title" style="margin-bottom:16px">
            ${vocabCurrentTopic.icon || '📘'} ${escapeHtml(vocabCurrentTopic.title)}
        </div>

        <div class="vocab-tabs">
            <button class="vocab-tab active" id="vtab-flash" onclick="setVocabMode('flash', this)">Tarjetas</button>
            <button class="vocab-tab" id="vtab-match" onclick="setVocabMode('match', this)">Conectar</button>
            <button class="vocab-tab" id="vtab-quiz" onclick="setVocabMode('quiz', this)">Quiz</button>
        </div>

        <div id="vocab-mode-content"></div>
    `;

    ensureLucide();
    renderVocabFlash();
};

window.setVocabMode = function(mode, btn) {
    vocabMode = mode;

    document.querySelectorAll('.vocab-tab').forEach(item => item.classList.remove('active'));
    if (btn) btn.classList.add('active');

    if (mode === 'flash') renderVocabFlash();
    else if (mode === 'match') renderVocabMatch();
    else renderVocabQuiz();
};

function renderVocabFlash() {
    const el = document.getElementById('vocab-mode-content');
    if (!el || !vocabCurrentTopic) return;

    const words = vocabCurrentTopic.words || [];

    el.innerHTML = `
        <p style="font-size:13px;color:#718096;margin-bottom:14px">
            Toca el ícono para escuchar, o toca la tarjeta para ver la traducción.
        </p>

        <div class="flashcard-grid">
            ${words.map((word, index) => `
                <div class="flashcard" id="fc${index}" onclick="this.classList.toggle('flipped')">
                    <div class="flashcard-inner">
                        <div class="flashcard-front">
                            <button class="btn-audio" onclick="playAudio('${escapeAttr(word.en)}', 'en-US', event)" title="Escuchar">
                                <i data-lucide="volume-2"></i>
                            </button>

                            <div class="card-word">${escapeHtml(word.en)}</div>
                            <div class="card-hint">Toca para ver</div>
                        </div>

                        <div class="flashcard-back">
                            <div class="card-word">${escapeHtml(word.es)}</div>
                            <div class="card-hint">${escapeHtml(word.example || '')}</div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    ensureLucide();
}

function renderVocabMatch() {
    const el = document.getElementById('vocab-mode-content');
    if (!el || !vocabCurrentTopic) return;

    const words = (vocabCurrentTopic.words || []).slice(0, 8);

    const lefts = words.map((word, index) => ({
        id: `L${index}`,
        text: word.en,
        pair: index
    }));

    const rights = words.map((word, index) => ({
        id: `R${index}`,
        text: word.es,
        pair: index
    })).sort(() => Math.random() - 0.5);

    window.matchState = {
        lefts,
        rights,
        matched: [],
        firstSel: null,
        errors: 0,
        correct: 0
    };

    el.innerHTML = `
        <p style="font-size:13px;color:#718096;margin-bottom:14px">
            Conecta cada palabra con su traducción.
        </p>

        <div class="match-game-grid">
            <div class="match-col">
                ${lefts.map(item => `
                    <button class="match-btn" id="${item.id}" onclick="selectMatch('${item.id}', ${item.pair}, 'L')">
                        ${escapeHtml(item.text)}
                    </button>
                `).join('')}
            </div>

            <div class="match-col">
                ${rights.map(item => `
                    <button class="match-btn" id="${item.id}" onclick="selectMatch('${item.id}', ${item.pair}, 'R')">
                        ${escapeHtml(item.text)}
                    </button>
                `).join('')}
            </div>
        </div>

        <div id="match-result" style="margin-top:16px"></div>
    `;
}

window.selectMatch = function(id, pair, side) {
    const ms = window.matchState;
    const el = document.getElementById(id);

    if (!ms || !el || el.classList.contains('matched')) return;

    if (side === 'L') {
        const word = ms.lefts.find(item => item.id === id);
        if (word) window.playAudio(word.text, 'en-US');
    }

    if (!ms.firstSel) {
        ms.firstSel = { id, pair, side };
        el.classList.add('selected');
        return;
    }

    if (ms.firstSel.id === id) {
        el.classList.remove('selected');
        ms.firstSel = null;
        return;
    }

    if (ms.firstSel.side === side) {
        document.getElementById(ms.firstSel.id)?.classList.remove('selected');
        ms.firstSel = { id, pair, side };
        el.classList.add('selected');
        return;
    }

    const firstEl = document.getElementById(ms.firstSel.id);

    if (ms.firstSel.pair === pair) {
        firstEl?.classList.remove('selected');
        firstEl?.classList.add('matched');
        el.classList.add('matched');

        ms.matched.push(pair);
        ms.correct++;

        addXP(5, true);

        if (ms.matched.length === ms.lefts.length) {
            const xpBonus = 20;

            markActivityCompleted('vocab', vocabCurrentTopic.id, 100);
            addXP(xpBonus, false);
            logActivity(`Vocabulario "${vocabCurrentTopic.title}" — Matching`, xpBonus, TYPE_META.vocab.color);

            const result = document.getElementById('match-result');

            if (result) {
                result.innerHTML = `
                    <div class="ex-feedback success">
                        <i data-lucide="check-circle"></i>
                        ¡Completaste todas las parejas! +${xpBonus} XP extra
                    </div>
                `;
            }

            ensureLucide();
            saveState();
        }
    } else {
        firstEl?.classList.remove('selected');
        firstEl?.classList.add('wrong-pair');
        el.classList.add('wrong-pair');

        ms.errors++;

        setTimeout(() => {
            firstEl?.classList.remove('wrong-pair');
            el.classList.remove('wrong-pair');
        }, 600);
    }

    ms.firstSel = null;
};

function renderVocabQuiz() {
    const words = vocabCurrentTopic?.words || [];
    const shuffled = [...words].sort(() => Math.random() - 0.5);

    window.vqTasks = shuffled.map(word => {
        const wrong = words
            .filter(item => item.en !== word.en)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map(item => item.es);

        const opts = [word.es, ...wrong].sort(() => Math.random() - 0.5);

        return {
            q: `¿Cómo se dice en español: "${word.en}"?`,
            opts,
            answer: word.es
        };
    });

    window.vqIdx = 0;
    window.vqScore = 0;

    renderVocabQuestion();
}

function renderVocabQuestion() {
    const el = document.getElementById('vocab-mode-content');
    if (!el) return;

    if (window.vqIdx >= window.vqTasks.length) {
        finishVocabQuiz(el);
        return;
    }

    const q = window.vqTasks[window.vqIdx];
    isChecking = false;

    el.innerHTML = `
        <div style="margin-bottom:10px;font-size:12px;color:#A0AEC0;font-weight:700">
            Pregunta ${window.vqIdx + 1} de ${window.vqTasks.length}
        </div>

        <div class="ex-q">${escapeHtml(q.q)}</div>

        <div class="opts-grid">
            ${q.opts.map((opt, index) => `
                <button class="opt-btn" onclick="checkVocabQuiz(${index}, this)">
                    ${escapeHtml(opt)}
                </button>
            `).join('')}
        </div>

        <div id="vq-fb"></div>
    `;
}

window.checkVocabQuiz = function(index, btn) {
    if (isChecking) return;

    const q = window.vqTasks[window.vqIdx];
    const selected = q.opts[index];

    // FIX: Calculamos el índice correcto para resaltar por posición, no por texto.
    const correctIndex = q.opts.indexOf(q.answer);
    const ok = index === correctIndex;

    isChecking = true;
    state.totalAnswers++;

    const allBtns = document.querySelectorAll('.opt-btn');
    allBtns.forEach(button => button.disabled = true);

    const fb = document.getElementById('vq-fb');

    if (ok) {
        btn.classList.add('correct');
        state.correctAnswers++;
        window.vqScore++;

        if (fb) {
            fb.innerHTML = `
                <div class="ex-feedback success">
                    <i data-lucide="check-circle"></i>
                    ¡Correcto!
                </div>
            `;
        }

        addXP(5, true);
    } else {
        btn.classList.add('wrong');

        // Resaltado por índice, inmune a espacios y HTML entities.
        if (allBtns[correctIndex]) allBtns[correctIndex].classList.add('correct');

        if (fb) {
            fb.innerHTML = `
                <div class="ex-feedback error">
                    <i data-lucide="x-circle"></i>
                    La respuesta correcta es: <strong>${escapeHtml(q.answer)}</strong>
                </div>
            `;
        }
    }

    ensureLucide();
    saveState();

    setTimeout(() => {
        window.vqIdx++;
        renderVocabQuestion();
    }, 1300);
};

function finishVocabQuiz(container) {
    const total = window.vqTasks.length;
    const pct = total ? Math.round((window.vqScore / total) * 100) : 0;

    markActivityCompleted('vocab', vocabCurrentTopic.id, pct);

    const xpBonus = pct >= 80 ? 40 : 20;

    addXP(xpBonus, false);
    logActivity(`Vocab Quiz "${vocabCurrentTopic.title}"`, xpBonus, TYPE_META.vocab.color);

    renderResultCard({
        containerElement: container,
        pct,
        score: window.vqScore,
        total,
        xpBonus,
        title: pct >= 80
            ? '¡Vocabulario dominado!'
            : pct >= 60
                ? 'Buen trabajo. Repasa las tarjetas.'
                : 'Vuelve a las tarjetas y repite el quiz.',
        retryAction: "setVocabMode('quiz', document.getElementById('vtab-quiz'))",
        backAction: "showScreen('dashboard');setActiveNavById('dashboard')",
        retryLabel: 'Repetir quiz',
        backLabel: 'Volver a mi ruta'
    });

    saveState();
}


// ============================================================
// 15. DIAGNÓSTICO
// ============================================================

function ensureDiagnosticScreen() {
    if (document.getElementById('screen-diagnostic')) return;

    const main = document.getElementById('main-content');
    if (!main) return;

    const section = document.createElement('section');

    section.id = 'screen-diagnostic';
    section.className = 'screen';

    section.innerHTML = `
        <header class="page-header">
            <div>
                <h2>Diagnóstico de nivel</h2>
                <p>Evalúa tu nivel, homologa lo que ya dominas y recibe refuerzos obligatorios.</p>
            </div>
        </header>

        <div id="diagnostic-content"></div>
    `;

    main.appendChild(section);
}

function getDiagnosticItems() {
    const test = getDiagnosticTest();

    if (test && Array.isArray(test.sections)) {
        return test.sections.flatMap(section =>
            (section.items || []).map(item => ({
                ...item,
                section: section.id,
                sectionTitle: section.title || section.id
            }))
        );
    }

    if (test && Array.isArray(test.items)) {
        return test.items;
    }

    return [
        {
            id: 'diag_a1_be_1',
            level: 'A1',
            skill: 'grammar',
            mapsTo: ['verbs'],
            q: 'She ___ my sister.',
            opts: ['am', 'is', 'are'],
            a: 1
        },
        {
            id: 'diag_a1_present_1',
            level: 'A1',
            skill: 'grammar',
            mapsTo: ['present_simple'],
            q: 'He ___ football every Sunday.',
            opts: ['play', 'plays', 'playing'],
            a: 1
        },
        {
            id: 'diag_a2_pc_1',
            level: 'A2',
            skill: 'grammar',
            mapsTo: ['past_continuous'],
            q: 'I ___ TV when you called.',
            opts: ['was watching', 'watched', 'am watching'],
            a: 0
        }
    ];
}

window.renderDiagnostic = function() {
    const el = document.getElementById('diagnostic-content');
    if (!el) return;

    const last = state.routeProgress.diagnosticHistory?.[0];
    const reinforcements = Object.keys(state.routeProgress.reinforcementRequired || {});
    const homologatedCount = Object.keys(state.routeProgress.homologatedActivities || {}).length;

    el.innerHTML = `
        <div class="card-theory animate-pop">
            <h3>Prueba diagnóstica de nivel</h3>

            <p>
                Esta prueba estima tu nivel, homologa actividades que ya dominas y marca refuerzos obligatorios.
                Actualmente puede trabajar con A1 y A2; luego se puede extender a B1, B2 y C1.
            </p>

            <div class="theory-grid">
                <div class="t-box" style="border-color:#12375A;background:#EAF0F7">
                    <strong style="color:#12375A">Nivel actual</strong>
                    <small>${escapeHtml(state.routeProgress.placedBand || state.routeProgress.placedLevel || 'Sin diagnóstico')}</small>
                </div>

                <div class="t-box" style="border-color:#1D9E75;background:#EAF3DE">
                    <strong style="color:#276749">Homologación</strong>
                    <small>${homologatedCount} actividades homologadas.</small>
                </div>

                <div class="t-box" style="border-color:#D7262E;background:#FFE7E4">
                    <strong style="color:#9B2C2C">Refuerzos</strong>
                    <small>${reinforcements.length} ítems pendientes.</small>
                </div>
            </div>

            ${last
                ? `<div class="tip-callout"><i data-lucide="info"></i> Último resultado: ${escapeHtml(last.placedBand)} · ${last.pct}% global.</div>`
                : `<div class="tip-callout"><i data-lucide="lightbulb"></i> Responde con honestidad. La prueba ajusta tu ruta, no busca castigarte.</div>`}

            <div class="btn-row">
                <button class="btn-check" onclick="startDiagnostic()">
                    <i data-lucide="scan-line"></i>
                    Iniciar diagnóstico
                </button>

                <button class="btn-secondary" onclick="showScreen('dashboard');setActiveNavById('dashboard')">
                    <i data-lucide="map"></i>
                    Volver a mi ruta
                </button>
            </div>
        </div>

        <div id="diagnostic-zone"></div>
    `;

    ensureLucide();
};

window.startDiagnostic = function() {
    const items = getDiagnosticItems();

    if (!items.length) {
        window.showToast('No hay preguntas diagnósticas cargadas.', 'warn');
        return;
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
    const zone = document.getElementById('diagnostic-zone') || document.getElementById('diagnostic-content');
    if (!zone || !diagnosticSession) return;

    if (diagnosticSession.idx >= diagnosticSession.items.length) {
        finishDiagnostic();
        return;
    }

    const item = diagnosticSession.items[diagnosticSession.idx];
    const progress = Math.round((diagnosticSession.idx / diagnosticSession.items.length) * 100);

    zone.innerHTML = `
        <div class="exercise-card animate-pop" style="margin-top:20px">
            <div class="ex-meta">
                <i data-lucide="scan-line"></i>
                Diagnóstico · ${escapeHtml(item.level || 'A1')} · ${escapeHtml(item.sectionTitle || item.skill || 'General')} · ${diagnosticSession.idx + 1}/${diagnosticSession.items.length}
            </div>

            <div class="total-bar" style="margin-bottom:18px">
                <div class="total-fill" style="width:${progress}%"></div>
            </div>

            <div class="ex-q">${escapeHtml(item.q)}</div>

            <div class="opts-grid">
                ${(item.opts || []).map((opt, index) => `
                    <button class="opt-btn" onclick="checkDiagnosticAnswer(${index}, this)">
                        ${escapeHtml(opt)}
                    </button>
                `).join('')}
            </div>

            <div id="diagnostic-fb"></div>
        </div>
    `;

    ensureLucide();
}

window.checkDiagnosticAnswer = function(chosen, btn) {
    if (!diagnosticSession || isChecking) return;

    isChecking = true;

    const item = diagnosticSession.items[diagnosticSession.idx];
    const correct = item.a;

    const ok = typeof correct === 'number'
        ? chosen === correct
        : item.opts?.[chosen] === correct;

    document
        .querySelectorAll('#diagnostic-zone .opt-btn, #diagnostic-content .opt-btn')
        .forEach(button => button.disabled = true);

    if (ok) {
        btn.classList.add('correct');
        diagnosticSession.correct++;
    } else {
        btn.classList.add('wrong');

        const buttons = document.querySelectorAll('#diagnostic-zone .opt-btn, #diagnostic-content .opt-btn');

        // FIX: mismo patrón que checkChoice/checkVocabQuiz — resaltado siempre por índice.
        const correctIndex = typeof correct === 'number'
            ? correct
            : item.opts ? item.opts.indexOf(correct) : -1;

        if (correctIndex >= 0 && buttons[correctIndex]) {
            buttons[correctIndex].classList.add('correct');
        }
    }

    diagnosticSession.answers.push({
        item,
        chosen,
        ok
    });

    state.totalAnswers++;
    if (ok) state.correctAnswers++;

    ensureLucide();

    setTimeout(() => {
        diagnosticSession.idx++;
        isChecking = false;
        renderDiagnosticQuestion();
    }, 900);
};

function finishDiagnostic() {
    const answers = diagnosticSession.answers;
    const items = diagnosticSession.items;

    const byLevel = {};
    const bySource = {};

    answers.forEach(({ item, ok }) => {
        const level = item.level || 'A1';

        byLevel[level] = byLevel[level] || {
            total: 0,
            correct: 0
        };

        byLevel[level].total++;

        if (ok) byLevel[level].correct++;

        (item.mapsTo || []).forEach(sourceId => {
            const canonicalIds = Array.from(possibleSourceIds(sourceId));

            canonicalIds.forEach(id => {
                bySource[id] = bySource[id] || {
                    total: 0,
                    correct: 0,
                    level
                };

                bySource[id].total++;

                if (ok) bySource[id].correct++;
            });
        });
    });

    const levelPct = Object.fromEntries(
        Object.entries(byLevel).map(([level, data]) => [
            level,
            Math.round((data.correct / data.total) * 100)
        ])
    );

    const placed = calculatePlacement(levelPct);

    const reinforcementItems = Object.entries(bySource)
        .map(([sourceId, data]) => ({
            sourceId,
            level: data.level,
            pct: Math.round((data.correct / data.total) * 100)
        }))
        .filter(item => item.pct < REINFORCEMENT_THRESHOLD);

    const result = {
        date: new Date().toISOString(),
        correct: diagnosticSession.correct,
        total: items.length,
        pct: Math.round((diagnosticSession.correct / items.length) * 100),
        levelPct,
        placedLevel: placed.level,
        placedBand: placed.band,
        reinforcementItems
    };

    diagnosticSession = null;

    applyDiagnosticResult(result);
    renderDiagnosticResult(result);
}

function calculatePlacement(levelPct) {
    const a1 = levelPct.A1 || 0;
    const a2 = levelPct.A2 || 0;
    const b1 = levelPct.B1 || 0;
    const b2 = levelPct.B2 || 0;

    if (b2 >= 75) return { level: 'C1', band: 'C1 inicial' };
    if (b1 >= 75) return { level: 'B2', band: 'B2 inicial' };
    if (a2 >= 75) return { level: 'B1', band: 'B1 inicial' };
    if (a2 >= 55) return { level: 'A2', band: 'A2 en progreso' };
    if (a1 >= 75) return { level: 'A2', band: 'A2 inicial' };
    if (a1 >= 55) return { level: 'A1', band: 'A1 en progreso' };

    return { level: 'A1', band: 'A1 inicial' };
}

function applyDiagnosticResult(result) {
    state.routeProgress.diagnosticCompleted = true;
    state.routeProgress.placedLevel = result.placedLevel;
    state.routeProgress.placedBand = result.placedBand;

    result.reinforcementItems.forEach(item => {
        possibleSourceIds(item.sourceId).forEach(id => {
            state.routeProgress.reinforcementRequired[id] = true;
        });
    });

    const route = flattenRoute();

    // FIX: Antes se homologaban TODAS las actividades de un nivel con score >= 85%,
    // incluyendo las que no tienen ninguna pregunta diagnóstica asociada.
    // Ahora construimos el conjunto de sourceIds cubiertos por el diagnóstico
    // (todos los mapsTo de cada item) y solo homologamos actividades que estén
    // dentro de ese conjunto Y superen el umbral de score por nivel.
    const coveredByDiagnostic = new Set();
    diagnosticSession === null && (() => {
        // diagnosticSession ya es null aquí; leemos del resultado
        (result.reinforcementItems || []).forEach(item => {
            possibleSourceIds(item.sourceId).forEach(id => coveredByDiagnostic.add(id));
        });
    })();

    // Añadir también los sourceIds de las preguntas correctas (no solo refuerzos)
    if (window.diagnosticTest && Array.isArray(window.diagnosticTest.sections)) {
        window.diagnosticTest.sections.forEach(section => {
            (section.items || []).forEach(item => {
                (item.mapsTo || []).forEach(sourceId => {
                    possibleSourceIds(sourceId).forEach(id => coveredByDiagnostic.add(id));
                });
            });
        });
    }

    route.forEach(activity => {
        const weak = result.reinforcementItems.some(item => sourceMatches(activity, item.sourceId));
        if (weak) return;

        const levelScore = result.levelPct[activity.level] || 0;
        if (levelScore < HOMOLOGATION_SCORE) return;

        // FIX: Solo homologar si la actividad tiene cobertura diagnóstica real.
        // Las actividades sin preguntas diagnósticas (ej. módulos de práctica libre
        // añadidos después del diagnóstico) no se homologan automáticamente.
        const resolvedId = getResolvedSourceId(activity.type, activity.sourceId);
        const hasCoverage = coveredByDiagnostic.size === 0 // sin diagnóstico: permitir todo (retrocompat)
            || coveredByDiagnostic.has(activity.sourceId)
            || coveredByDiagnostic.has(resolvedId);

        if (!hasCoverage) return;

        state.routeProgress.homologatedActivities[activity.id] = true;
        markActivityCompleted(activity.type, activity.sourceId, 100);
    });

    state.routeProgress.diagnosticHistory.unshift(result);
    state.routeProgress.diagnosticHistory = state.routeProgress.diagnosticHistory.slice(0, 5);

    const xpBonus = result.pct >= 80 ? 80 : result.pct >= 60 ? 50 : 25;

    addXP(xpBonus, false);
    logActivity(`Diagnóstico completado: ${result.placedBand}`, xpBonus, '#D7262E');

    saveState();
}

function renderDiagnosticResult(result) {
    const zone = document.getElementById('diagnostic-zone') || document.getElementById('diagnostic-content');
    if (!zone) return;

    const homologatedCount = Object.keys(state.routeProgress.homologatedActivities || {}).length;

    const uniqueReinforcements = [];
    const seen = new Set();

    result.reinforcementItems.forEach(item => {
        const display = getWeaknessDisplayName(item.sourceId);

        if (!seen.has(display)) {
            seen.add(display);
            uniqueReinforcements.push({
                ...item,
                display
            });
        }
    });

    zone.innerHTML = `
        <div class="results-card animate-pop" style="margin-top:20px">
            <div class="results-score">${escapeHtml(result.placedLevel)}</div>

            <p class="results-msg">
                <strong>${escapeHtml(result.placedBand)}</strong> · Resultado global: ${result.pct}%
            </p>

            <div class="results-detail">
                <span class="results-pill pill-good">${homologatedCount} homologadas</span>
                <span class="results-pill pill-bad">${uniqueReinforcements.length} refuerzos</span>
                <span class="results-pill pill-xp">${result.correct}/${result.total}</span>
            </div>

            <div class="card-theory" style="box-shadow:none;border:1px dashed #E6BFA6;text-align:left;margin-top:18px">
                <h3>Refuerzos sugeridos</h3>

                ${uniqueReinforcements.length
                    ? `<ul style="padding-left:20px;line-height:1.9">
                        ${uniqueReinforcements.map(item => `
                            <li>
                                <strong>${escapeHtml(item.display)}</strong> · desempeño ${item.pct}%
                            </li>
                        `).join('')}
                       </ul>`
                    : '<p>Excelente. No se detectaron refuerzos obligatorios en este diagnóstico.</p>'}
            </div>

            <div class="btn-row">
                <button class="btn-check" onclick="showScreen('dashboard');setActiveNavById('dashboard')">
                    <i data-lucide="map"></i>
                    Ver mi ruta ajustada
                </button>

                <button class="btn-secondary" onclick="startDiagnostic()">
                    <i data-lucide="refresh-cw"></i>
                    Repetir diagnóstico
                </button>
            </div>
        </div>
    `;

    ensureLucide();
}


// ============================================================
// 16. SETTINGS
// ============================================================

window.renderSettings = function() {
    const input = document.getElementById('setting-name');
    if (input) input.value = state.userName || 'Estudiante';

    document.querySelectorAll('.goal-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.goal, 10) === state.dailyGoal);
    });

    updateAdminZone();
    ensureLucide();
};

window.setGoal = function(btn) {
    if (!btn) return;

    document.querySelectorAll('.goal-btn').forEach(item => item.classList.remove('active'));
    btn.classList.add('active');

    state.dailyGoal = parseInt(btn.dataset.goal, 10) || 50;

    saveState();
};

window.saveSettings = function() {
    const input = document.getElementById('setting-name');

    if (input && input.value.trim()) {
        state.userName = input.value.trim();

        updateHeaderUI();
        saveState();

        window.showToast('Cambios guardados', 'success');
    }
};

window.confirmReset = function() {
    window.openModal(`
        <div style="text-align:center">
            <div style="font-size:40px;margin-bottom:16px">⚠️</div>

            <h3 style="font-size:18px;font-weight:700;margin-bottom:8px">
                ¿Reiniciar progreso?
            </h3>

            <p style="color:#718096;font-size:14px;margin-bottom:24px">
                Se eliminarán tus XP, puntuaciones, diagnóstico, homologaciones, refuerzos y actividad.
                No se puede deshacer.
            </p>

            <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
                <button 
                    onclick="closeModal()" 
                    style="padding:10px 24px;border:1.5px solid #E2E8F0;border-radius:10px;background:white;cursor:pointer;font-weight:600"
                >
                    Cancelar
                </button>

                <button 
                    onclick="doReset()" 
                    style="padding:10px 24px;background:#D7262E;color:white;border:none;border-radius:10px;cursor:pointer;font-weight:700"
                >
                    Sí, reiniciar
                </button>
            </div>
        </div>
    `);
};

window.doReset = async function() {
    window.closeModal();

    const role = state.role;
    const userName = state.userName;

    state = createDefaultState();

    state.role = role;
    state.userName = userName;

    await saveState();

    location.reload();
};

function updateAdminZone() {
    const adminZone = document.getElementById('admin-zone');
    if (!adminZone) return;

    adminZone.style.display = state.role === 'admin' ? 'block' : 'none';
}

window.toggleAdminView = function() {
    if (state.role !== 'admin') {
        window.showToast('Solo el administrador puede usar esta vista.', 'warn');
        return;
    }

    state.adminView = !state.adminView;

    window.showToast(
        state.adminView
            ? 'Vista admin: candados desactivados'
            : 'Candados activados nuevamente',
        'success'
    );

    window.renderDashboard();
    saveState();
};


// ============================================================
// 17. XP, UI Y ACTIVIDAD
// ============================================================

function addXP(baseValue, showMessage) {
    const streakBonus = Math.min((state.streak || 1) * 0.05, 0.5);
    const totalXP = Math.round(baseValue * (1 + streakBonus));
    const prevLevel = state.level;

    state.xp += totalXP;
    state.dailyXP += totalXP;

    let xpNext = Math.floor(100 * Math.pow(state.level, 1.5));
    while (state.xp >= xpNext) {
        state.level++;
        xpNext = Math.floor(100 * Math.pow(state.level, 1.5));
    }

    updateHeaderUI();
    saveState();

    if (showMessage && totalXP > 0) {
        showXpBurst(totalXP, streakBonus > 0);
    }

    if (state.level > prevLevel) {
        setTimeout(() => showLevelUpCelebration(state.level), 600);
    }

    // Ocultar empty state si el usuario ya tiene XP
    const esb = document.getElementById('empty-state-banner');
    if (esb && state.xp > 0) esb.style.display = 'none';
}

// ── XP Burst flotante ──────────────────────────────────────
function showXpBurst(xp, hasStreak) {
    const el = document.createElement('div');
    el.className = 'xp-burst';
    el.textContent = `+${xp} XP${hasStreak ? ' 🔥' : ''}`;

    // Posición aleatoria en la zona central superior
    el.style.left = `${40 + Math.random() * 20}%`;
    el.style.top  = `${30 + Math.random() * 20}%`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
}

// ── Level Up Celebration ──────────────────────────────────
function showLevelUpCelebration(level) {
    const overlay = document.getElementById('levelup-overlay');
    if (!overlay) return;

    const rankInfo = getRank(routeSummary().pct);
    const cefr = state.routeProgress.placedLevel || rankInfo.cefr;

    document.getElementById('levelup-num').textContent = `Nivel ${level}`;
    document.getElementById('levelup-cefr').textContent =
        `Has alcanzado el nivel ${level} — Sigue así para dominar el ${cefr} 🎯`;

    overlay.style.display = 'flex';
    launchConfetti();
}

window.closeLevelUp = function() {
    const overlay = document.getElementById('levelup-overlay');
    if (overlay) overlay.style.display = 'none';
    stopConfetti();
};

// ── Sistema de Confetti ────────────────────────────────────
let confettiAnim = null;
let confettiParticles = [];

function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.style.display = 'block';
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    const COLORS = ['#F5821F','#22C55E','#3B82F6','#F59E0B','#8B5CF6','#EF4444','#fff'];
    confettiParticles = Array.from({length: 120}, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height * 0.5,
        r: 4 + Math.random() * 7,
        d: 1.5 + Math.random() * 3,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        tilt: Math.random() * 20 - 10,
        tiltAngle: 0,
        tiltSpeed: 0.08 + Math.random() * 0.1,
        shape: Math.random() > 0.5 ? 'rect' : 'circle',
    }));

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confettiParticles.forEach(p => {
            ctx.save();
            ctx.globalAlpha = 0.88;
            ctx.fillStyle = p.color;
            ctx.translate(p.x, p.y);
            ctx.rotate(p.tiltAngle * Math.PI / 180);
            if (p.shape === 'rect') {
                ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 0.5);
            } else {
                ctx.beginPath();
                ctx.arc(0, 0, p.r / 2, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();

            p.y += p.d;
            p.tiltAngle += p.tiltSpeed;
            p.x += Math.sin(p.tiltAngle) * 1.2;
        });

        confettiParticles = confettiParticles.filter(p => p.y < canvas.height + 20);
        if (confettiParticles.length > 0) {
            confettiAnim = requestAnimationFrame(draw);
        } else {
            stopConfetti();
        }
    }
    draw();

    // Auto stop después de 4.5s
    setTimeout(stopConfetti, 4500);
}

function stopConfetti() {
    if (confettiAnim) { cancelAnimationFrame(confettiAnim); confettiAnim = null; }
    const canvas = document.getElementById('confetti-canvas');
    if (canvas) {
        canvas.style.display = 'none';
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    confettiParticles = [];
}

// ── Celebración de módulo completo ────────────────────────
window.celebrateModuleComplete = function(moduleName, score, xpGained) {
    const isExcellent = score >= 90;
    window.openModal(`
        <div style="text-align:center;padding:8px 0;">
            <div style="font-size:52px;margin-bottom:10px;animation:bounceIn 0.5s var(--ease-spring) both;">
                ${isExcellent ? '🌟' : '✅'}
            </div>
            <div style="font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;
                color:var(--green);margin-bottom:8px;">
                ${isExcellent ? '¡Excelente!' : '¡Módulo completado!'}
            </div>
            <div style="font-family:var(--font-display);font-size:22px;font-weight:800;
                letter-spacing:-.04em;color:var(--text-1);margin-bottom:6px;">
                ${moduleName}
            </div>
            <div style="font-size:13px;color:var(--text-3);margin-bottom:18px;line-height:1.6;">
                Puntuación: <strong style="color:${score>=80?'var(--green)':'var(--brand-light)'}">${score}%</strong>
                &nbsp;·&nbsp;
                <strong style="color:var(--brand-light)">+${xpGained} XP</strong>
                ${isExcellent ? '<br><span style="color:var(--amber)">⭐ ¡Resultado perfecto!</span>' : ''}
            </div>
            <button onclick="closeModal()" style="
                background:linear-gradient(135deg,var(--brand),var(--brand-deep));
                color:#fff;border:none;border-radius:var(--r-sm);
                padding:11px 26px;font-size:14px;font-weight:700;cursor:pointer;
                font-family:var(--font);box-shadow:var(--shadow-brand);width:100%;">
                Continuar 🚀
            </button>
        </div>
    `);
    if (isExcellent) launchConfetti();
};

function updateHeaderUI() {
    const xpCurrentLevelBase = state.level === 1
        ? 0
        : Math.floor(100 * Math.pow(state.level - 1, 1.5));

    const xpNextLevelBase = Math.floor(100 * Math.pow(state.level, 1.5));

    const xpInLevel = state.xp - xpCurrentLevelBase;
    const xpRequired = xpNextLevelBase - xpCurrentLevelBase;

    const pct = Math.min(100, Math.max(0, Math.round((xpInLevel / xpRequired) * 100)));

    const fill = document.getElementById('xp-fill');
    if (fill) fill.style.width = `${pct}%`;

    safeSet('xp-display', `${xpInLevel} / ${xpRequired} XP`);
    safeSet('xp-pill', `${state.xp} XP`);
    safeSet('streak-display', `${state.streak} Día${state.streak !== 1 ? 's' : ''}`);

    const rankInfo = getRank(routeSummary().pct);
    const cefr = state.routeProgress.placedLevel || rankInfo.cefr;

    safeSet('level-display', `Nivel ${state.level} · ${cefr}`);

    const initial = document.getElementById('avatar-initials');
    if (initial) initial.textContent = (state.userName || 'E').charAt(0).toUpperCase();

    safeSet('user-name-display', state.userName || 'Estudiante');
}

function setGreeting() {
    const hour = new Date().getHours();
    const greeting = hour < 12
        ? 'Buenos días'
        : hour < 19
            ? 'Buenas tardes'
            : 'Buenas noches';

    safeSet('greeting-text', `${greeting}, ${state.userName}!`);
}

function logActivity(text, xp, color) {
    state.activityLog.unshift({
        text,
        xp,
        color: color || '#12375A',
        time: getNowTime()
    });

    state.activityLog = state.activityLog.slice(0, 25);
}


// ============================================================
// 18. RESULT CARD REUTILIZABLE
// ============================================================

function renderResultCard(config) {
    const el = config.containerElement || document.getElementById(config.containerId);
    if (!el) return;

    const stars = config.pct >= 80 ? 3 : config.pct >= 60 ? 2 : 1;
    const starsHtml = [1, 2, 3]
        .map(i => `<span class="star ${i <= stars ? 'lit' : ''}">★</span>`)
        .join('');

    el.innerHTML = `
        <div class="results-card animate-pop" style="border:none;box-shadow:none;padding:20px 0">
            <div class="stars-row">${starsHtml}</div>

            <div class="results-score">${config.pct}%</div>

            <p class="results-msg">${escapeHtml(config.title)}</p>

            <div class="results-detail">
                <span class="results-pill pill-good">✓ ${config.score}/${config.total}</span>
                <span class="results-pill pill-xp">+${config.xpBonus} XP</span>
            </div>

            <div class="btn-row">
                <button class="btn-check" onclick="${config.retryAction}" style="background:#718096">
                    <i data-lucide="refresh-cw"></i>
                    ${escapeHtml(config.retryLabel || 'Repetir')}
                </button>

                <button class="btn-check" onclick="${config.backAction}">
                    <i data-lucide="map"></i>
                    ${escapeHtml(config.backLabel || 'Volver')}
                </button>
            </div>
        </div>
    `;

    ensureLucide();
}


// ============================================================
// 19. AUDIO, TOAST Y MODAL
// ============================================================

window.playAudio = function(text, lang = 'en-US', event = null, rate = 0.85) {
    if (event) event.stopPropagation();

    if (!('speechSynthesis' in window)) {
        window.showToast('Tu navegador no soporta reproducción de audio', 'warn');
        return;
    }

    // FIX: iOS Safari solo permite speechSynthesis.speak() cuando se invoca
    // sincrónicamente desde un gesto del usuario (click/tap). Si se llama desde
    // un setTimeout (ej. auto-play del dictado), el audio se silencia sin error.
    // Solución: cancelamos siempre (necesario para limpiar la cola en iOS),
    // y en iOS diferimos con un requestAnimationFrame para mantenernos en el
    // mismo frame del gesto antes de hablar.
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = rate;
    utterance.pitch = 1;

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    window.speechSynthesis.cancel();

    if (isIOS) {
        // En iOS, cancel() es asíncrono internamente; un rAF lo deja terminar
        // antes de llamar speak() y evita que la cola quede bloqueada.
        requestAnimationFrame(() => window.speechSynthesis.speak(utterance));
    } else {
        window.speechSynthesis.speak(utterance);
    }
};

// toastTimer eliminado — toast ahora crea elemento dinámico por llamada

window.showToast = function(message, type = 'success') {
    // Eliminar toast anterior si existe
    const prev = document.getElementById('toast');
    if (prev) { prev.remove(); }

    const icons = { success:'check-circle', error:'x-circle', warn:'alert-triangle', info:'info' };
    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i data-lucide="${icons[type] || 'info'}"></i><span class="toast-text">${message}</span>`;
    document.body.appendChild(toast);

    if (window.lucide) lucide.createIcons({ nodes: [toast] });

    const timer = setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 250);
    }, 2800);
    toast.addEventListener('click', () => { clearTimeout(timer); toast.remove(); });
};

window.openModal = function(html) {
    const content = document.getElementById('modal-content');
    const overlay = document.getElementById('modal-overlay');

    if (!content || !overlay) return;

    content.innerHTML = html;
    overlay.classList.add('open');

    ensureLucide();
};

window.closeModal = function() {
    document.getElementById('modal-overlay')?.classList.remove('open');
};


// ============================================================
// 20. INICIALIZACIÓN
// ============================================================

window.onload = function() {
    state = normalizeState(state);
    ensureDiagnosticScreen();
    ensureLucide();
};

window.__leoState = () => state;
window.__leoRoute = buildLearningRoute;
window.__leoRouteSummary = routeSummary;


// ============================================================
// 21. PORTFOLIO MCER — Dashboard de evidencias y competencias
// ============================================================
// Los renders de cefr-portfolio y business-english están integrados
// directamente en window.showScreen (sección 4) para evitar doble wrapping.

function getCefrProgress() {
  const cefr = window.cefrFramework;
  if (!cefr) return null;

  const currentLevel = state.routeProgress?.placedLevel || 'A1';
  const levels = ['A1','A2','B1','B2','C1'];
  const currentIdx = levels.indexOf(currentLevel);

  // Calcular progreso real por destreza desde el state
  const grammarAvg   = average(Object.values(state.scores         || {}));
  const vocabAvg     = average(Object.values(state.vocabScores    || {}));
  const readingAvg   = average(Object.values(state.readingScores  || {}));
  const writingAvg   = average(Object.values(state.writingDone    || {}));
  const businessAvg  = average(Object.values(state.businessScores || {}));

  // Contar módulos completados por tipo
  const route = buildLearningRoute ? buildLearningRoute() : [];
  const allActs = route.flatMap(l => l.activities);

  const countDone = (type) => allActs.filter(a => a.type === type && isActivityPassed(a)).length;
  const countTotal = (type) => allActs.filter(a => a.type === type).length;

  return {
    currentLevel, currentIdx, levels,
    grammarAvg, vocabAvg, readingAvg, writingAvg, businessAvg,
    grammar:  { done: countDone('grammar'),  total: countTotal('grammar')  },
    reading:  { done: countDone('reading'),  total: countTotal('reading')  },
    writing:  { done: countDone('writing'),  total: countTotal('writing')  },
    vocab:    { done: countDone('vocab'),    total: countTotal('vocab')    },
    xp: state.xp || 0,
    streak: state.streak || 1
  };
}


function renderCefrPortfolio() {
  const el = document.getElementById('cefr-portfolio-content');
  if (!el) return;

  const cefr = window.cefrFramework;
  if (!cefr) {
    el.innerHTML = `<div class="empty-state"><i data-lucide="alert-circle"></i><p>Framework MCER no cargado. Asegúrate de incluir data-cefr-framework.js.</p></div>`;
    ensureLucide(); return;
  }

  const p = getCefrProgress();
  if (!p) return;

  const levels = ['A1','A2','B1','B2','C1'];
  const profile = cefr.levelProfiles[p.currentLevel] || cefr.levelProfiles['A1'];
  const req = cefr.evidenceRequirements[p.currentLevel] || {};

  const skillData = [
    { id:'grammar',  label:'Gramática',   icon:'book-open',  avg: p.grammarAvg,  done: p.grammar.done,  total: p.grammar.total,  cefrSkill:'grammar',  color:'#6366F1' },
    { id:'vocab',    label:'Vocabulario', icon:'layers',     avg: p.vocabAvg,     done: p.vocab.done,    total: p.vocab.total,    cefrSkill:'vocabulary', color:'#059669' },
    { id:'reading',  label:'Reading',     icon:'file-text',  avg: p.readingAvg,  done: p.reading.done,  total: p.reading.total,  cefrSkill:'reading',   color:'#0891B2' },
    { id:'writing',  label:'Writing',     icon:'edit',       avg: p.writingAvg,  done: p.writing.done,  total: p.writing.total,  cefrSkill:'writing',   color:'#D97706' }
  ];

  // Descriptores MCER por destreza
  function getDescriptor(skillKey) {
    const level = p.currentLevel;
    return cefr.descriptors[skillKey]?.[level]?.global || '';
  }

  function getCanDo(skillKey) {
    const level = p.currentLevel;
    return cefr.descriptors[skillKey]?.[level]?.canDo || [];
  }

  function getLinguisticDescriptor(key) {
    return cefr.linguisticScales[key]?.descriptors[p.currentLevel] || '';
  }

  // Nivel MCER completado (evidencia)
  function levelComplete(lvl) {
    const r = cefr.evidenceRequirements[lvl];
    if (!r) return false;
    return p.grammarAvg >= r.grammar.minScore && p.readingAvg >= r.reading.minScore &&
           p.writingAvg >= r.writing.minScore && p.vocabAvg >= r.vocab.minScore &&
           p.xp >= r.totalXP;
  }

  // Barra de progreso hacia siguiente nivel
  const nextLevel = levels[p.currentIdx + 1];
  const nextReq = nextLevel ? cefr.evidenceRequirements[nextLevel] : null;
  const overallPct = Math.min(100, Math.round((p.grammarAvg + p.vocabAvg + p.readingAvg + p.writingAvg) / 4));

  el.innerHTML = `

    <!-- ── CABECERA: NIVEL ACTUAL ── -->
    <div class="cefr-level-header">
      <div class="cefr-level-badge">
        <span class="cefr-badge-label">Nivel actual</span>
        <span class="cefr-badge-value">${p.currentLevel}</span>
        <span class="cefr-badge-title">${profile.title.replace(p.currentLevel + ' — ', '')}</span>
      </div>
      <div class="cefr-level-info">
        <p class="cefr-global-desc">${profile.globalDescriptor}</p>
        <p class="cefr-comm-goal"><strong>Meta comunicativa:</strong> ${profile.communicativeGoal}</p>
        <div class="cefr-level-progress">
          <div class="cefr-level-bar-wrap">
            <div class="cefr-level-bar-fill" style="width:${overallPct}%"></div>
          </div>
          <span class="cefr-level-pct">${overallPct}% hacia ${nextLevel || 'C2'}</span>
        </div>
      </div>
    </div>

    <!-- ── MAPA DE NIVELES ── -->
    <div class="cefr-levels-map">
      ${levels.map((lvl, i) => {
        const done = levelComplete(lvl);
        const active = lvl === p.currentLevel;
        const locked = i > p.currentIdx + 1;
        const inProgress = lvl === nextLevel;
        return `
          <div class="cefr-level-node ${done ? 'done' : ''} ${active ? 'active' : ''} ${locked ? 'locked' : ''} ${inProgress ? 'in-progress' : ''}">
            <div class="cefr-node-circle">
              ${done ? '<i data-lucide="check"></i>' : locked ? '<i data-lucide="lock"></i>' : lvl}
            </div>
            <span class="cefr-node-label">${lvl}</span>
            ${i < levels.length - 1 ? '<div class="cefr-node-line ' + (done ? 'done' : '') + '"></div>' : ''}
          </div>`;
      }).join('')}
    </div>

    <!-- ── COMPETENCIAS POR DESTREZA ── -->
    <h3 class="cefr-section-title"><i data-lucide="bar-chart-2"></i> Destrezas y competencias</h3>
    <div class="cefr-skills-grid">
      ${skillData.map(skill => {
        const canDo = getCanDo(skill.cefrSkill);
        const descriptor = getDescriptor(skill.cefrSkill);
        const doneItems = Math.round((skill.avg / 100) * canDo.length);
        return `
          <div class="cefr-skill-card">
            <div class="cefr-skill-header">
              <div class="cefr-skill-icon" style="background:${skill.color}20;color:${skill.color}">
                <i data-lucide="${skill.icon}"></i>
              </div>
              <div class="cefr-skill-meta">
                <span class="cefr-skill-name">${skill.label}</span>
                <span class="cefr-skill-score" style="color:${skill.color}">${skill.avg}%</span>
              </div>
            </div>
            <div class="cefr-skill-bar-wrap">
              <div class="cefr-skill-bar-fill" style="width:${skill.avg}%;background:${skill.color}"></div>
            </div>
            <p class="cefr-skill-desc">${descriptor}</p>
            <div class="cefr-cando-list">
              <p class="cefr-cando-title">Descriptores Can-Do (${doneItems}/${canDo.length})</p>
              ${canDo.map((item, idx) => `
                <div class="cefr-cando-item ${idx < doneItems ? 'done' : ''}">
                  <i data-lucide="${idx < doneItems ? 'check-circle' : 'circle'}"></i>
                  <span>${item}</span>
                </div>`).join('')}
            </div>
            <div class="cefr-activity-count">
              <i data-lucide="activity"></i>
              <span>${skill.done} / ${skill.total} actividades completadas</span>
            </div>
          </div>`;
      }).join('')}
    </div>

    <!-- ── COMPETENCIAS LINGÜÍSTICAS ── -->
    <h3 class="cefr-section-title"><i data-lucide="sliders"></i> Competencias lingüísticas</h3>
    <div class="cefr-linguistic-grid">
      ${Object.entries(cefr.linguisticScales).map(([key, scale]) => {
        const scores = { grammar: p.grammarAvg, vocabulary: p.vocabAvg, pronunciation: Math.round((p.grammarAvg + p.vocabAvg)/2), sociolinguistic: Math.round((p.readingAvg + p.writingAvg)/2) };
        const score = scores[key] || 0;
        return `
          <div class="cefr-ling-card">
            <div class="cefr-ling-header">
              <span class="cefr-ling-name">${scale.label}</span>
              <span class="cefr-ling-score">${score}%</span>
            </div>
            <div class="cefr-skill-bar-wrap" style="margin:6px 0">
              <div class="cefr-skill-bar-fill" style="width:${score}%;background:#6366F1"></div>
            </div>
            <p class="cefr-skill-desc">${getLinguisticDescriptor(key)}</p>
            <span class="cefr-ref">${scale.cefrRef}</span>
          </div>`;
      }).join('')}
    </div>

    <!-- ── EVIDENCIAS REQUERIDAS ── -->
    <h3 class="cefr-section-title"><i data-lucide="clipboard-check"></i> Evidencias requeridas para completar ${p.currentLevel}</h3>
    <div class="cefr-evidence-grid">
      ${[
        { label:'Módulos de gramática', done: p.grammar.done, req: req.grammar?.modules || 0, score: p.grammarAvg, minScore: req.grammar?.minScore || 0, icon:'book-open', color:'#6366F1' },
        { label:'Textos de reading', done: p.reading.done, req: req.reading?.texts || 0, score: p.readingAvg, minScore: req.reading?.minScore || 0, icon:'file-text', color:'#0891B2' },
        { label:'Ejercicios de writing', done: p.writing.done, req: req.writing?.exercises || 0, score: p.writingAvg, minScore: req.writing?.minScore || 0, icon:'edit', color:'#D97706' },
        { label:'Tópicos de vocabulario', done: p.vocab.done, req: req.vocab?.topics || 0, score: p.vocabAvg, minScore: req.vocab?.minScore || 0, icon:'layers', color:'#059669' },
        { label:'XP acumulados', done: p.xp, req: req.totalXP || 0, score: Math.min(100,Math.round((p.xp/(req.totalXP||1))*100)), minScore: 100, icon:'zap', color:'#F59E0B', isXP: true }
      ].map(ev => {
        const evDone = ev.isXP ? ev.done >= ev.req : (ev.done >= ev.req && ev.score >= ev.minScore);
        const evPct = ev.isXP ? Math.min(100,Math.round((ev.done/Math.max(1,ev.req))*100)) : ev.score;
        return `
          <div class="cefr-evidence-card ${evDone ? 'done' : ''}">
            <div class="cefr-ev-icon" style="background:${ev.color}15;color:${ev.color}"><i data-lucide="${ev.icon}"></i></div>
            <div class="cefr-ev-body">
              <span class="cefr-ev-label">${ev.label}</span>
              <div class="cefr-ev-progress">
                <div class="cefr-skill-bar-wrap">
                  <div class="cefr-skill-bar-fill" style="width:${evPct}%;background:${ev.color}"></div>
                </div>
                <span class="cefr-ev-count">${ev.isXP ? ev.done + ' / ' + ev.req + ' XP' : ev.done + ' / ' + ev.req + ' · ' + ev.score + '%' }</span>
              </div>
              ${!evDone ? `<span class="cefr-ev-missing">Mínimo requerido: ${ev.isXP ? ev.req + ' XP' : ev.req + ' actividades con ≥' + ev.minScore + '%'}</span>` : '<span class="cefr-ev-ok"><i data-lucide="check-circle"></i> Completado</span>'}
            </div>
          </div>`;
      }).join('')}
    </div>

    <!-- ── OBJETIVOS GRAMATICALES DEL NIVEL ── -->
    <h3 class="cefr-section-title"><i data-lucide="target"></i> Objetivos gramaticales del nivel ${p.currentLevel}</h3>
    <div class="cefr-grammar-targets">
      ${(profile.grammarTargets || []).map(t => `
        <span class="cefr-grammar-tag">${escapeHtml(t)}</span>`).join('')}
    </div>

    <!-- ── REFERENCIA MCER ── -->
    <div class="cefr-mcer-ref">
      <i data-lucide="info"></i>
      <span>Fuente: Marco Común Europeo de Referencia para las Lenguas (MCER) — Consejo de Europa · ${profile.cefrRef}</span>
    </div>
  `;

  ensureLucide();
}


// ============================================================
// 22. BUSINESS ENGLISH — Renderizado de módulos opcionales
// ============================================================

function renderBusinessEnglish() {
  const el = document.getElementById('business-english-content');
  if (!el) return;

  const biz = window.businessModules;
  const paths = window.businessLearningPaths;

  if (!biz || !paths) {
    el.innerHTML = `<div class="empty-state"><i data-lucide="alert-circle"></i><p>Módulos de Business English no cargados.</p></div>`;
    ensureLucide(); return;
  }

  const currentLevel = state.routeProgress?.placedLevel || 'A1';
  const levels = ['A1','A2','B1','B2','C1'];
  const currentIdx = levels.indexOf(currentLevel);

  // B1 disponible desde nivel B1+, B2 desde B2+, C1 desde C1
  const available = { B1: currentIdx >= 2, B2: currentIdx >= 3, C1: currentIdx >= 4 };

  el.innerHTML = `
    <div class="be-intro">
      <div class="be-intro-icon">💼</div>
      <div>
        <h3 class="be-intro-title">Business English — Inglés profesional</h3>
        <p class="be-intro-desc">Módulos opcionales alineados con el MCER (Cap. 4.1.2 — Uso de la lengua con fines específicos). Desbloquea cada nivel al completar la gramática correspondiente.</p>
      </div>
    </div>

    ${['B1','B2','C1'].map(lvl => {
      const path = paths[lvl];
      const isAvailable = available[lvl];
      const modules = (path.modules || []).map(id => biz[id]).filter(Boolean);
      const doneCount = modules.filter(m => state.businessScores?.[m.id] >= 75).length;
      const pct = modules.length ? Math.round((doneCount/modules.length)*100) : 0;

      return `
        <div class="be-level-section ${!isAvailable ? 'be-locked' : ''}">
          <div class="be-level-header">
            <div class="be-level-badge" style="background:${path.color}15;border-color:${path.color}40">
              <span style="font-size:20px">${path.icon}</span>
              <div>
                <p class="be-level-title" style="color:${path.color}">${path.title}</p>
                <p class="be-level-sub">${path.description}</p>
              </div>
            </div>
            ${isAvailable ? `
              <div class="be-level-progress-wrap">
                <div class="be-level-bar-wrap">
                  <div class="be-level-bar-fill" style="width:${pct}%;background:${path.color}"></div>
                </div>
                <span class="be-level-pct">${doneCount}/${modules.length} módulos</span>
              </div>` : `
              <div class="be-lock-msg">
                <i data-lucide="lock"></i>
                <span>Completa nivel ${lvl === 'B1' ? 'A2' : lvl === 'B2' ? 'B1' : 'B2'} para desbloquear</span>
              </div>`}
          </div>

          ${isAvailable ? `
            <div class="be-modules-grid">
              ${modules.map(mod => {
                const score = state.businessScores?.[mod.id];
                const done = score >= 75;
                const isCurrent = !done;
                return `
                  <div class="be-module-card ${done ? 'be-done' : ''}" onclick="${isAvailable ? `openBusinessModule('${mod.id}')` : ''}">
                    <div class="be-mod-icon" style="background:${mod.color}15;color:${mod.color}">
                      <i data-lucide="${mod.icon}"></i>
                    </div>
                    <div class="be-mod-body">
                      <p class="be-mod-title">${escapeHtml(mod.title)}</p>
                      <p class="be-mod-goal">${escapeHtml(mod.learningGoal || '')}</p>
                      ${typeof score === 'number' ? `
                        <div class="be-mod-bar-wrap">
                          <div class="be-mod-bar-fill" style="width:${score}%;background:${mod.color}"></div>
                        </div>
                        <span class="be-mod-score">${score}%</span>` : `
                        <span class="be-mod-tag">
                          <i data-lucide="briefcase"></i> Opcional · MCER ${mod.level}
                        </span>`}
                    </div>
                    ${done ? '<i data-lucide="check-circle" class="be-done-icon"></i>' : ''}
                  </div>`;
              }).join('')}
            </div>` : ''}
        </div>`;
    }).join('')}

    <div class="cefr-mcer-ref" style="margin-top:1.5rem">
      <i data-lucide="info"></i>
      <span>Fuente: MCER Cap. 4.1.2 — Uso de la lengua con fines específicos · Ámbito laboral y profesional</span>
    </div>
  `;

  ensureLucide();
}


// ============================================================
// 23. ABRIR MÓDULO BUSINESS ENGLISH
// ============================================================

window.openBusinessModule = function(id) {
  const mod = window.businessModules?.[id];
  if (!mod) return;

  // Si tiene vocabulario (words), abrirlo como vocab topic
  if (mod.words && mod.words.length) {
    if (!state.businessScores) state.businessScores = {};
    openVocabTopic ? openVocabTopic(id) : showToast('Función de vocabulario no disponible', 'warn');
    return;
  }

  // Si tiene ejercicios, abrirlos como módulo de gramática
  if (mod.exercises && mod.exercises.length) {
    if (!window.modulesData) window.modulesData = {};
    window.modulesData[id] = mod;
    if (!state.businessScores) state.businessScores = {};
    window.openGrammarModule ? window.openGrammarModule(id) : showToast('Función de módulo no disponible', 'warn');
  }
};
