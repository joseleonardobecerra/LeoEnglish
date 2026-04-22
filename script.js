// --- ESTADO INICIAL ---
let state = {
    xp: 0,
    level: 1,
    streak: 1,
    scores: {
        prepositions: 0,
        numbers: 0,
        verbs: 0,
        vocabulary: 0,
        reading: 0,
        sentences: 0
    }
};

// --- DATOS DE MÓDULOS ---
const modulesData = {
    prepositions: {
        id: 'prepositions', title: "1. Preposiciones", icon: 'target', color: '#3182CE',
        theory: `<h3>Uso de IN, ON, AT</h3>
                <div class="theory-grid">
                    <div class="t-box" style="border-color: #4299E1; background: #EBF8FF">
                        <strong>IN:</strong> Meses, años, ciudades.<br><small>In London, In 1990</small>
                    </div>
                    <div class="t-box" style="border-color: #48BB78; background: #F0FFF4">
                        <strong>ON:</strong> Días, fechas, superficies.<br><small>On Monday, On the floor</small>
                    </div>
                    <div class="t-box" style="border-color: #9F7AEA; background: #F5F3FF">
                        <strong>AT:</strong> Horas, lugares específicos.<br><small>At 7:00, At home</small>
                    </div>
                </div>`,
        quiz: [
            { q: "I live ___ Brighton.", opts: ["in", "on", "at"], a: "in" },
            { q: "The meeting is ___ 7 o'clock.", opts: ["in", "on", "at"], a: "at" },
            { q: "My birthday is ___ June.", opts: ["in", "on", "at"], a: "in" }
        ]
    },
    vocabulary: {
        id: 'vocabulary', title: "2. Vocabulario", icon: 'star', color: '#38A169',
        type: 'match',
        pairs: [
            { en: 'Black', es: 'Negro' }, { en: 'Red', es: 'Rojo' },
            { en: 'Aunt', es: 'Tía' }, { en: 'Nephew', es: 'Sobrino' }
        ],
        quiz: [
            { q: "¿Cómo se dice 'Rojo'?", opts: ["Red", "Blue", "Pink"], a: "Red" },
            { q: "¿Qué es 'Toddler'?", opts: ["Adulto", "Bebé que camina", "Abuelo"], a: "Bebé que camina" }
        ]
    },
    reading: {
        id: 'reading', title: "3. Reading", icon: 'file-text', color: '#D69E2E',
        text: `My name is <span class="word-hl" data-tr="Pedro">Peter</span>. I am a doctor. I live in <span class="word-hl" data-tr="Brighton">Brighton</span>. 
               My <span class="word-hl" data-tr="esposa">wife</span> is Susan. She is a journalist. We have <span class="word-hl" data-tr="dos">two</span> children.`,
        quiz: [
            { q: "Where does Peter live?", opts: ["London", "Brighton", "Paris"], a: "Brighton" },
            { q: "What is Susan's job?", opts: ["Doctor", "Journalist", "Nurse"], a: "Journalist" }
        ]
    }
};

// --- MOTOR DE NAVEGACIÓN ---
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-' + screenId).classList.add('active');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    if(screenId === 'dashboard') document.querySelector('[onclick="showScreen(\'dashboard\')"]').classList.add('active');
}

function openModule(modId) {
    const mod = modulesData[modId];
    showScreen('module');
    renderModule(mod);
}

// --- RENDERIZADO ---
function renderModule(mod) {
    const container = document.getElementById('module-content');
    container.innerHTML = `
        <div class="tab-nav">
            <button class="tab-btn active" id="btn-theory" onclick="setPhase('theory')">1. Teoría</button>
            <button class="tab-btn" id="btn-quiz" onclick="setPhase('quiz')">2. Evaluación</button>
        </div>
        <div id="phase-content">
            <div class="card-theory animate-fadeIn">${mod.theory || '<p>Revisa el vocabulario o texto.</p>'}</div>
            ${mod.text ? `<div class="reading-text mt-4 animate-fadeIn">${mod.text}</div>` : ''}
            ${mod.type === 'match' ? renderMatchGame(mod.pairs) : ''}
        </div>
        <div class="flex justify-end mt-6">
            <button class="nav-btn active" style="width: auto; background: var(--primary)" onclick="setPhase('quiz')">Comenzar Evaluación →</button>
        </div>
    `;
    lucide.createIcons();
}

function setPhase(phase) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('btn-' + phase).classList.add('active');
    
    if (phase === 'quiz') {
        renderQuiz(modulesData[currentModuleId].quiz);
    }
}

let currentModuleId = '';
let currentQuizIdx = 0;
let currentQuizScore = 0;

function renderQuiz(questions) {
    const q = questions[currentQuizIdx];
    const content = document.getElementById('phase-content');
    content.innerHTML = `
        <div class="card-theory animate-fadeIn">
            <p class="mb-4 text-sm font-bold text-indigo-500">Pregunta ${currentQuizIdx + 1} de ${questions.length}</p>
            <h3 class="mb-6">${q.q}</h3>
            <div id="options-list">
                ${q.opts.map(o => `<button class="opt-btn" onclick="checkAnswer('${o}', '${q.a}', this)">${o}</button>`).join('')}
            </div>
        </div>
    `;
}

function checkAnswer(val, correct, btn) {
    if (val === correct) {
        btn.classList.add('correct');
        currentQuizScore++;
        showToast("+10 XP Correcto!");
    } else {
        btn.classList.add('wrong');
        showToast("Incorrecto");
    }
    
    setTimeout(() => {
        currentQuizIdx++;
        if(currentQuizIdx < modulesData[currentModuleId].quiz.length) {
            renderQuiz(modulesData[currentModuleId].quiz);
        } else {
            finishModule();
        }
    }, 1000);
}

function finishModule() {
    const finalScore = Math.round((currentQuizScore / modulesData[currentModuleId].quiz.length) * 100);
    state.scores[currentModuleId] = finalScore;
    addXP(50);
    currentQuizIdx = 0;
    currentQuizScore = 0;
    updateUI();
    showScreen('dashboard');
    triggerConfetti();
}

// --- SISTEMA DE PUNTOS ---
function addXP(val) {
    state.xp += val;
    if (state.xp >= state.level * 100) {
        state.level++;
        showToast("¡NIVEL SUBIDO!");
    }
    updateUI();
}

function updateUI() {
    document.getElementById('xp-display').innerText = state.xp + " XP Totales";
    document.getElementById('level-display').innerText = "Nivel " + state.level;
    document.getElementById('xp-fill').style.width = (state.xp % 100) + "%";
    
    // Skill bars
    const skills = ['Gramática', 'Vocabulario', 'Reading', 'Writing'];
    const avg = Math.round(Object.values(state.scores).reduce((a, b) => a + b, 0) / 6);
    
    document.getElementById('skills-bars').innerHTML = skills.map(s => `
        <div class="skill-row">
            <div class="skill-info"><span>${s}</span><span>${avg}%</span></div>
            <div class="s-bar"><div class="s-fill" style="width:${avg}%; background:${s === 'Gramática' ? '#534AB7' : '#1D9E75'}"></div></div>
        </div>
    `).join('');
    
    document.getElementById('total-progress-pct').innerText = avg + "%";
    document.getElementById('total-progress-fill').style.width = avg + "%";
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.innerText = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}

// --- INICIALIZACIÓN ---
function init() {
    const menu = document.getElementById('module-menu');
    const statusGrid = document.getElementById('modules-status-grid');
    
    Object.values(modulesData).forEach(m => {
        // Botones Sidebar
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.innerHTML = `<i data-lucide="${m.icon}"></i> ${m.title}`;
        btn.onclick = () => {
            currentModuleId = m.id;
            openModule(m.id);
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        };
        menu.appendChild(btn);

        // Status Cards Dashboard
        const card = document.createElement('div');
        card.className = 'mod-card';
        card.innerHTML = `
            <div class="mod-icon" style="background: ${m.color}22; color: ${m.color}">
                <i data-lucide="${m.icon}"></i>
            </div>
            <div>
                <div class="mod-title">${m.title}</div>
                <div class="mod-status" id="status-${m.id}">Pendiente</div>
            </div>
        `;
        statusGrid.appendChild(card);
    });
    
    lucide.createIcons();
    updateUI();
}

window.onload = init;

// Función placeholder para confeti
function triggerConfetti() {
    console.log("¡Felicidades!");
}

function renderMatchGame(pairs) {
    // Lógica simplificada de match
    return `<div class="match-container mt-6">
                <p class="col-span-2 text-center text-sm mb-4">Conecta las palabras (Práctica)</p>
                <div class="match-col">${pairs.map(p => `<button class="match-btn">${p.en}</button>`).join('')}</div>
                <div class="match-col">${pairs.map(p => `<button class="match-btn">${p.es}</button>`).join('')}</div>
            </div>`;
}