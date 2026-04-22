// app.js - MOTOR LÓGICO Y DE INTERFAZ

// --- ESTILOS DINÁMICOS (Inyectados por JS) ---
const extraStyles = document.createElement('style');
extraStyles.innerHTML = `
    .order-zone { min-height: 80px; border: 2px dashed #CBD5E0; border-radius: 12px; padding: 16px; display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; align-items: center; margin-bottom: 24px; background: white; transition: all 0.3s; }
    .order-word { padding: 10px 16px; background: white; border: 2px solid #E2E8F0; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
    .order-word:hover { border-color: #5A67D8; color: #5A67D8; transform: translateY(-2px); }
    .order-word.selected { background: #5A67D8; color: white; border-color: #5A67D8; }
    .write-input { width: 100%; padding: 16px; font-size: 18px; border: 2px solid #E2E8F0; border-radius: 12px; margin-bottom: 16px; outline: none; transition: 0.3s; }
    .write-input:focus { border-color: #5A67D8; box-shadow: 0 0 0 3px rgba(90, 103, 216, 0.2); }
    .mod-card { transition: 0.2s; cursor: pointer; } .mod-card:hover { transform: translateY(-3px); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
`;
document.head.appendChild(extraStyles);

// --- ESTADO INICIAL ---
let state = {
    xp: 0, 
    level: 1, 
    streak: 1,
    scores: {
        prepositions: null, numbers: null, verbs: null, 
        present_simple: null, present_cont: null, simple_vs_cont: null
    }
};

let isChecking = false;
let currentModuleId = '';
let currentExerciseIdx = 0;
let currentScore = 0;

// --- MOTOR DE NAVEGACIÓN ---
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-' + screenId).classList.add('active');
    if(screenId === 'dashboard') updateUI();
}

function openModule(modId) {
    currentModuleId = modId;
    currentExerciseIdx = 0;
    currentScore = 0;
    showScreen('module');
    renderModule(modulesData[modId]);
}

// --- RENDERIZADO DEL MÓDULO Y EJERCICIOS ---
function renderModule(mod) {
    const container = document.getElementById('module-content');
    container.innerHTML = `
        <div class="tab-nav">
            <button class="tab-btn active" id="btn-theory" onclick="setPhase('theory')">1. Teoría</button>
            <button class="tab-btn" id="btn-practice" onclick="setPhase('practice')">2. Entrenamiento Intensivo</button>
        </div>
        <div id="phase-content"></div>
    `;
    lucide.createIcons();
    setPhase('theory');
}

function setPhase(phase) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('btn-' + phase).classList.add('active');
    
    const content = document.getElementById('phase-content');
    const mod = modulesData[currentModuleId];

    if (phase === 'theory') {
        content.innerHTML = `
            <div class="card-theory animate-fadeIn">${mod.theory}</div>
            <div class="flex justify-end mt-6">
                <button class="nav-btn active" style="width: auto; background: var(--primary); padding: 12px 24px; border-radius: 8px; font-weight: bold; color: white;" onclick="setPhase('practice')">Empezar Ejercicios (${mod.exercises.length}) →</button>
            </div>
        `;
    } else if (phase === 'practice') {
        renderExercise();
    }
}

// --- EL GRAN MOTOR MULTI-HABILIDAD ---
function renderExercise() {
    const mod = modulesData[currentModuleId];
    const q = mod.exercises[currentExerciseIdx];
    const content = document.getElementById('phase-content');
    
    let html = `
        <div class="card-theory animate-fadeIn text-center">
            <p class="mb-4 text-sm font-bold text-indigo-500 uppercase tracking-widest">
                ${q.type === 'choice' ? 'Gramática' : q.type === 'write' ? 'Escritura Libre' : 'Sintaxis'} 
                · Ejercicio ${currentExerciseIdx + 1} de ${mod.exercises.length}
            </p>
            <h3 class="mb-6 text-xl">${q.q}</h3>
    `;

    if (q.type === 'choice') {
        html += `<div id="options-list" class="flex flex-col gap-3">
            ${q.opts.map(o => `<button class="opt-btn text-left p-4 rounded-xl border-2 border-gray-200 hover:border-indigo-400 font-bold" onclick="checkChoice('${o}', '${q.a}', this)">${o}</button>`).join('')}
        </div>`;
    } 
    else if (q.type === 'write') {
        html += `
            <input type="text" id="write-answer" class="write-input" placeholder="Escribe tu respuesta aquí..." onkeypress="if(event.key === 'Enter') checkWrite('${q.a}')">
            <button class="nav-btn active mx-auto" style="width: auto; background: var(--primary); color: white; padding: 12px 24px; border-radius: 8px; font-weight: bold;" onclick="checkWrite('${q.a}')">Comprobar</button>
        `;
    } 
    else if (q.type === 'order') {
        window.orderAvailable = [...q.words].sort(() => Math.random() - 0.5);
        window.orderSelected = [];
        html += `<div id="order-container"></div>`;
    }

    html += `</div>`;
    content.innerHTML = html;

    if (q.type === 'order') {
        drawOrderUI(q.a);
    }
}

// Lógica 1: Selección (Choice)
function checkChoice(val, correct, btn) {
    if (isChecking) return;
    isChecking = true;

    if (val === correct) {
        btn.style.backgroundColor = "#EAF3DE"; btn.style.borderColor = "#3B6D11"; btn.style.color = "#27500A";
        currentScore++; showToast("+10 XP ¡Correcto!");
    } else {
        btn.style.backgroundColor = "#FFF5F5"; btn.style.borderColor = "#FC8181"; btn.style.color = "#C53030";
        showToast("Incorrecto. Era: " + correct);
    }
    
    setTimeout(() => advanceExercise(), 1200);
}

// Lógica 2: Escritura (Write)
function checkWrite(correct) {
    if (isChecking) return;
    isChecking = true;
    const input = document.getElementById('write-answer');
    const val = input.value.trim().toLowerCase();
    
    if (val === correct.toLowerCase()) {
        input.style.borderColor = "#48BB78"; input.style.backgroundColor = "#F0FFF4";
        currentScore++; showToast("+15 XP ¡Escritura Perfecta!");
    } else {
        input.style.borderColor = "#F56565"; input.style.backgroundColor = "#FFF5F5";
        showToast("Incorrecto. La respuesta es: " + correct);
        input.value = correct; // Muestra la respuesta al estudiante
    }

    setTimeout(() => advanceExercise(), 1800);
}

// Lógica 3: Ordenar Frases (Order)
function drawOrderUI(correctAnswer) {
    const container = document.getElementById('order-container');
    if(!container) return;

    container.innerHTML = `
        <div class="order-zone" id="order-zone-selected">
            ${window.orderSelected.length === 0 ? '<span style="color:#A0AEC0">Toca las palabras para formar la frase...</span>' : ''}
            ${window.orderSelected.map((w, i) => `<div class="order-word selected" onclick="moveWord(${i}, 'to-available', '${correctAnswer}')">${w}</div>`).join('')}
        </div>
        <div class="flex flex-wrap gap-2 justify-center mb-6" id="order-zone-available">
            ${window.orderAvailable.map((w, i) => `<div class="order-word" onclick="moveWord(${i}, 'to-selected', '${correctAnswer}')">${w}</div>`).join('')}
        </div>
        <button class="nav-btn active mx-auto" style="width: auto; background: ${window.orderAvailable.length === 0 ? '#1D9E75' : '#CBD5E0'}; color: white; padding: 12px 24px; border-radius: 8px; font-weight: bold; transition: 0.3s;" 
                onclick="checkOrder('${correctAnswer}')" ${window.orderAvailable.length > 0 ? 'disabled' : ''}>
            Evaluar Frase
        </button>
    `;
}

function moveWord(index, direction, correctAnswer) {
    if (direction === 'to-selected') window.orderSelected.push(window.orderAvailable.splice(index, 1)[0]);
    else window.orderAvailable.push(window.orderSelected.splice(index, 1)[0]);
    drawOrderUI(correctAnswer);
}

function checkOrder(correct) {
    if (isChecking) return;
    isChecking = true;

    const userSentence = window.orderSelected.join(" ").trim();
    const zone = document.getElementById('order-zone-selected');
    
    if (userSentence === correct.trim()) {
        zone.style.borderColor = "#48BB78"; zone.style.backgroundColor = "#F0FFF4";
        currentScore++; showToast("+20 XP ¡Sintaxis Perfecta!");
    } else {
        zone.style.borderColor = "#F56565"; zone.style.backgroundColor = "#FFF5F5";
        showToast("Incorrecto. Era: " + correct);
    }

    setTimeout(() => advanceExercise(), 1800);
}

// --- AVANCE Y FINALIZACIÓN DEL MÓDULO ---
function advanceExercise() {
    isChecking = false;
    currentExerciseIdx++;
    const mod = modulesData[currentModuleId];

    if (currentExerciseIdx < mod.exercises.length) {
        renderExercise();
    } else {
        const finalScore = Math.round((currentScore / mod.exercises.length) * 100);
        state.scores[currentModuleId] = finalScore;
        addXP(50); // Bono por completar módulo
        
        document.getElementById('phase-content').innerHTML = `
            <div class="card-theory text-center animate-fadeIn py-12">
                <i data-lucide="award" style="width: 64px; height: 64px; color: #1D9E75; margin: 0 auto 16px;"></i>
                <h2 class="text-3xl font-bold mb-2">¡Módulo Superado!</h2>
                <div class="text-5xl font-black text-indigo-600 mb-6">${finalScore}%</div>
                <p class="text-gray-500 mb-8">Has entrenado Gramática, Lectura y Escritura en una sola sesión.</p>
                <button class="nav-btn active mx-auto" style="width: auto; background: var(--primary); color: white; padding: 16px 32px; border-radius: 12px; font-weight: bold;" onclick="showScreen('dashboard')">Volver al Tablero</button>
            </div>
        `;
        lucide.createIcons();
    }
}

// --- SISTEMA DE XP Y ACTUALIZACIÓN DE INTERFAZ ---
function addXP(val) {
    state.xp += val;
    if (state.xp >= state.level * 100) {
        state.level++;
        showToast("¡NIVEL SUBIDO! 🎉");
    }
    updateUI();
}

function updateUI() {
    document.getElementById('xp-display').innerText = state.xp + " XP Totales";
    document.getElementById('level-display').innerText = "Nivel " + state.level;
    document.getElementById('xp-fill').style.width = (state.xp % 100) + "%";
    
    // Calcular promedios para el dashboard visual
    const scores = Object.values(state.scores).filter(s => s !== null);
    const totalAvg = scores.length > 0 ? Math.round(scores.reduce((a,b)=>a+b,0) / scores.length) : 0;

    const grammarScore = Math.round(((state.scores.prepositions||0) + (state.scores.present_simple||0) + (state.scores.present_cont||0)) / 3) || 0;
    const writingScore = Math.round(((state.scores.verbs||0) + (state.scores.simple_vs_cont||0)) / 2) || 0;
    const vocabScore = state.scores.numbers || 0;
    const readingScore = totalAvg; // Aproximación global de comprensión

    const skills = [
        { name: 'Gramática', val: grammarScore, color: '#534AB7' },
        { name: 'Vocabulario', val: vocabScore, color: '#1D9E75' },
        { name: 'Reading', val: readingScore, color: '#378ADD' },
        { name: 'Writing', val: writingScore, color: '#D85A30' }
    ];
    
    document.getElementById('skills-bars').innerHTML = skills.map(s => `
        <div class="skill-row mb-4">
            <div class="flex justify-between text-sm font-bold text-gray-700 mb-1"><span>${s.name}</span><span>${s.val}%</span></div>
            <div class="w-full bg-gray-200 rounded-full h-2"><div class="h-2 rounded-full transition-all duration-500" style="width:${s.val}%; background:${s.color}"></div></div>
        </div>
    `).join('');
    
    document.getElementById('total-progress-pct').innerText = totalAvg + "%";
    document.getElementById('total-progress-fill').style.width = totalAvg + "%";

    // Actualizar badges de módulos completados vs pendientes
    Object.keys(modulesData).forEach(id => {
        const statusEl = document.getElementById(`status-${id}`);
        if(statusEl) {
            if(state.scores[id] !== null) {
                statusEl.innerText = `Completado: ${state.scores[id]}%`;
                statusEl.style.color = '#38A169'; 
            } else {
                statusEl.innerText = `Pendiente`;
                statusEl.style.color = '#A0AEC0';
            }
        }
    });
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
    
    menu.innerHTML = '';
    statusGrid.innerHTML = '';

    Object.values(modulesData).forEach(m => {
        // Botones del menú lateral
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.innerHTML = `<i data-lucide="${m.icon}"></i> ${m.title}`;
        btn.onclick = () => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            openModule(m.id);
        };
        menu.appendChild(btn);

        // Tarjetas del Dashboard Central
        const card = document.createElement('div');
        card.className = 'mod-card bg-white p-5 rounded-xl border border-gray-200 flex items-center gap-4';
        card.onclick = btn.onclick; 
        card.innerHTML = `
            <div class="p-3 rounded-xl" style="background: ${m.color}22; color: ${m.color}">
                <i data-lucide="${m.icon}"></i>
            </div>
            <div>
                <div class="font-bold text-gray-800">${m.title}</div>
                <div class="text-xs font-bold mt-1" id="status-${m.id}" style="color: #A0AEC0">Pendiente</div>
            </div>
        `;
        statusGrid.appendChild(card);
    });
    
    lucide.createIcons();
    updateUI();
}

window.onload = init;