// --- ESTILOS DINÁMICOS PARA NUEVOS TIPOS DE EJERCICIOS ---
const extraStyles = document.createElement('style');
extraStyles.innerHTML = `
    .order-zone { min-height: 80px; border: 2px dashed #CBD5E0; border-radius: 12px; padding: 16px; display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; align-items: center; margin-bottom: 24px; background: white; transition: all 0.3s; }
    .order-word { padding: 10px 16px; background: white; border: 2px solid #E2E8F0; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
    .order-word:hover { border-color: #5A67D8; color: #5A67D8; transform: translateY(-2px); }
    .order-word.selected { background: #5A67D8; color: white; border-color: #5A67D8; }
    .flashcards-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 12px; margin-top: 16px; }
    .fc-card { height: 90px; background: white; border: 1px solid #E2E8F0; border-radius: 12px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s; font-weight: bold; text-align: center; padding: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.02); }
    .fc-card.flipped { background: #3C3489; color: white; transform: scale(1.05); }
    .write-input { width: 100%; padding: 16px; font-size: 18px; border: 2px solid #E2E8F0; border-radius: 12px; margin-bottom: 16px; outline: none; transition: 0.3s; }
    .write-input:focus { border-color: #5A67D8; box-shadow: 0 0 0 3px rgba(90, 103, 216, 0.2); }
    .mod-card { transition: 0.2s; cursor: pointer; } .mod-card:hover { transform: translateY(-3px); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
`;
document.head.appendChild(extraStyles);

// --- ESTADO INICIAL ---
let state = {
    xp: 0, level: 1, streak: 1,
    scores: {
        prepositions: null, numbers: null, verbs: null, vocabulary: null,
        reading: null, sentences: null,
        present_simple: null, present_cont: null, simple_vs_cont: null // Nuevos
    }
};

let isChecking = false;

// --- BASE DE DATOS MASIVA Y MULTI-HABILIDAD ---
// Tipos de ejercicio: 'choice' (Selección), 'write' (Escribir), 'order' (Ordenar)
const modulesData = {
    prepositions: {
        id: 'prepositions', title: "1. Preposiciones (In, On, At)", icon: 'target', color: '#3182CE',
        theory: `<h3>Preposiciones de Tiempo y Lugar</h3>
                <div class="theory-grid mt-4">
                    <div class="t-box" style="border-color: #4299E1; background: #EBF8FF">
                        <strong class="text-blue-800">ON (Días/Superficies)</strong><br><small>On Sunday, On 10th June.</small>
                    </div>
                    <div class="t-box" style="border-color: #48BB78; background: #F0FFF4">
                        <strong class="text-green-800">IN (Meses/Años/Ciudades)</strong><br><small>In Brighton, In 1990.</small>
                    </div>
                    <div class="t-box" style="border-color: #9F7AEA; background: #F5F3FF">
                        <strong class="text-purple-800">AT (Horas/Lugares exactos)</strong><br><small>At 7 o'clock, At home.</small>
                    </div>
                </div>`,
        exercises: [
            { type: 'choice', q: "My flat is ___ the first floor.", opts: ["in", "on", "at"], a: "on" },
            { type: 'choice', q: "We often go swimming ___ the summer.", opts: ["on", "in", "at"], a: "in" },
            { type: 'write', q: "Escribe la preposición correcta: I will see you ___ Monday.", a: "on" },
            { type: 'order', q: "Ordena la frase:", words: ["is", "My", "in", "June.", "birthday"], a: "My birthday is in June." },
            { type: 'choice', q: "Peter and Susan go to church ___ Christmas day.", opts: ["in", "at", "on"], a: "on" },
            { type: 'write', q: "Escribe la preposición: He gets up ___ 7 o'clock.", a: "at" },
            { type: 'order', q: "Ordena la frase:", words: ["lives", "He", "Spain.", "in"], a: "He lives in Spain." },
            { type: 'choice', q: "What time do you eat ___ the evening?", opts: ["in", "at", "on"], a: "in" },
            { type: 'write', q: "Completa: The book is ___ the table.", a: "on" },
            { type: 'choice', q: "There were much people ___ his funeral.", opts: ["in", "at", "inside"], a: "at" }
        ]
    },
    numbers: {
        id: 'numbers', title: "2. Números (Cardinales y Ordinales)", icon: 'bar-chart', color: '#D69E2E',
        theory: `<h3>Reglas Numéricas</h3>
                <p>13-19 terminan en <b>-een</b>. Las decenas en <b>-ty</b>. <br>Ordinales: 1st, 2nd, 3rd, y el resto con <b>-th</b>.</p>`,
        exercises: [
            { type: 'choice', q: "Selecciona el ordinal de 20:", opts: ["twentieth", "twentyth", "twentith"], a: "twentieth" },
            { type: 'write', q: "Escribe el número en inglés: 15", a: "fifteen" },
            { type: 'choice', q: "El número 3.333 se escribe:", opts: ["three thousand three hundred and thirty-three", "three thousands three hundreds thirty-three"], a: "three thousand three hundred and thirty-three" },
            { type: 'write', q: "Escribe el número en inglés: 40", a: "forty" },
            { type: 'order', q: "Forma el número 102:", words: ["two", "a", "hundred", "and"], a: "a hundred and two" },
            { type: 'choice', q: "Primero, segundo y tercero son:", opts: ["first, second, third", "oneth, twoth, threeth"], a: "first, second, third" },
            { type: 'write', q: "Escribe el ordinal de 12 (doceno):", a: "twelfth" },
            { type: 'choice', q: "80 se escribe:", opts: ["eighteen", "eighty", "eigty"], a: "eighty" }
        ]
    },
    verbs: {
        id: 'verbs', title: "3. Verbos Base (Be, Have, Do)", icon: 'command', color: '#E53E3E',
        theory: `<h3>Be, Have, Do</h3>
                <p><b>Be:</b> am, is, are. <b>Have:</b> have, has. <b>Do:</b> do, does (3ra persona singular usa 's').</p>`,
        exercises: [
            { type: 'choice', q: "We ___ tired today.", opts: ["am", "is", "are"], a: "are" },
            { type: 'write', q: "Escribe el verbo: It ___ cold outside. (Ser/Estar)", a: "is" },
            { type: 'order', q: "Ordena:", words: ["a", "She", "baby.", "has"], a: "She has a baby." },
            { type: 'choice', q: "I ___ a beautiful house.", opts: ["have", "has", "do"], a: "have" },
            { type: 'write', q: "Completa (Hacer): He ___ his homework every day.", a: "does" },
            { type: 'choice', q: "You ___ a great job.", opts: ["do", "does", "are"], a: "do" },
            { type: 'order', q: "Ordena:", words: ["not", "am", "I", "ill."], a: "I am not ill." },
            { type: 'write', q: "Completa (Tener): They ___ a new car.", a: "have" },
            { type: 'choice', q: "They ___ at the cinema.", opts: ["are", "is", "am"], a: "are" }
        ]
    },
    present_simple: {
        id: 'present_simple', title: "4. Presente Simple", icon: 'sun', color: '#38B2AC',
        theory: `<h3>Presente Simple (Rutinas y Hechos)</h3>
                <div class="t-box" style="border-color: #38B2AC; background: #E6FFFA; margin-top: 10px;">
                    <p>Se usa para hábitos. En afirmativo, agrega <b>-s</b> o <b>-es</b> a la 3ra persona (He, She, It).<br>
                    Para negar/preguntar usamos <b>don't / doesn't</b>.</p>
                    <small>Ej: She <b>works</b> in a bank. / I <b>don't eat</b> fish.</small>
                </div>`,
        exercises: [
            { type: 'choice', q: "I ___ every day at school.", opts: ["eat", "eats", "eating"], a: "eat" },
            { type: 'write', q: "Escribe el verbo correcto: Elephants ___ (live) in Africa.", a: "live" },
            { type: 'choice', q: "She ___ to music in the evenings.", opts: ["listen", "listens", "listening"], a: "listens" },
            { type: 'order', q: "Ordena la pregunta:", words: ["speak", "Does", "English?", "he"], a: "Does he speak English?" },
            { type: 'write', q: "Transforma a negativo: 'I like apples' -> 'I ___ like apples'", a: "don't" },
            { type: 'choice', q: "My father ___ (watch) TV at night.", opts: ["watch", "watches", "watching"], a: "watches" },
            { type: 'order', q: "Ordena la negación:", words: ["work", "doesn't", "She", "here."], a: "She doesn't work here." },
            { type: 'write', q: "Completa: ___ they play tennis on Sundays?", a: "Do" },
            { type: 'choice', q: "It ___ a lot in winter.", opts: ["rain", "rains", "raining"], a: "rains" }
        ]
    },
    present_cont: {
        id: 'present_cont', title: "5. Presente Continuo", icon: 'activity', color: '#805AD5',
        theory: `<h3>Presente Continuo (Acciones en Progreso)</h3>
                <div class="t-box" style="border-color: #805AD5; background: #FAF5FF; margin-top: 10px;">
                    <p>Se usa para cosas que suceden <b>AHORA</b>. Sintaxis: <b>Sujeto + TO BE + Verbo-ING</b>.</p>
                    <small>Ej: I <b>am writing</b> a letter. / He <b>is doing</b> some photocopying.</small>
                </div>`,
        exercises: [
            { type: 'choice', q: "Look! The baby ___.", opts: ["sleeps", "is sleeping", "sleep"], a: "is sleeping" },
            { type: 'write', q: "Escribe el auxiliar correcto: We ___ watching a film on TV.", a: "are" },
            { type: 'order', q: "Ordena la frase:", words: ["a", "I", "letter.", "am", "writing"], a: "I am writing a letter." },
            { type: 'choice', q: "She ___ for a job at the moment.", opts: ["is looking", "looks", "look"], a: "is looking" },
            { type: 'write', q: "Agrega ING al verbo (run): The dog is ___", a: "running" },
            { type: 'order', q: "Ordena:", words: ["not", "are", "listening.", "They"], a: "They are not listening." },
            { type: 'choice', q: "What ___ you doing right now?", opts: ["do", "are", "is"], a: "are" },
            { type: 'write', q: "Traduce 'Estoy comiendo': I am ___", a: "eating" },
            { type: 'order', q: "Ordena la pregunta:", words: ["he", "Is", "photocopying?", "doing"], a: "Is he doing photocopying?" }
        ]
    },
    simple_vs_cont: {
        id: 'simple_vs_cont', title: "6. Simple vs Continuo", icon: 'git-merge', color: '#ED8936',
        theory: `<h3>¿Hábito o Este Momento?</h3>
                <div class="t-box" style="border-color: #ED8936; background: #FFFAF0; margin-top: 10px;">
                    <p><b>Simple:</b> usually, every day, sometimes (Rutina).<br>
                    <b>Continuo:</b> now, at the moment, look! (Ahora).</p>
                </div>`,
        exercises: [
            { type: 'choice', q: "I usually ___ coffee, but today I ___ tea.", opts: ["drink / am drinking", "am drinking / drink", "drinks / drinking"], a: "drink / am drinking" },
            { type: 'write', q: "Completa (Listen / Now): Shh! I am ___ to the radio.", a: "listening" },
            { type: 'choice', q: "He always ___ his car on Sundays.", opts: ["is washing", "washes", "wash"], a: "washes" },
            { type: 'order', q: "Ordena:", words: ["every", "I", "read", "day."], a: "I read every day." },
            { type: 'write', q: "Completa (Work / Usually): She usually ___ in London.", a: "works" },
            { type: 'choice', q: "Look! It ___ outside.", opts: ["rains", "is raining", "rain"], a: "is raining" },
            { type: 'order', q: "Ordena:", words: ["moment.", "reading", "He", "is", "at", "the"], a: "He is reading at the moment." },
            { type: 'choice', q: "They never ___ to the cinema.", opts: ["are going", "goes", "go"], a: "go" }
        ]
    }
};

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
let currentModuleId = '';
let currentExerciseIdx = 0;
let currentScore = 0;

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
        // Variables globales temporales para este ejercicio
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

// 1. Lógica Selection (Choice)
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

// 2. Lógica Writing (Text)
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
        input.value = correct; // Mostrar respuesta
    }

    setTimeout(() => advanceExercise(), 1800);
}

// 3. Lógica Ordering (Syntax)
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

// --- AVANCE Y FINALIZACIÓN ---
function advanceExercise() {
    isChecking = false;
    currentExerciseIdx++;
    const mod = modulesData[currentModuleId];

    if (currentExerciseIdx < mod.exercises.length) {
        renderExercise();
    } else {
        const finalScore = Math.round((currentScore / mod.exercises.length) * 100);
        state.scores[currentModuleId] = finalScore;
        addXP(50);
        
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

// --- SISTEMA GENERAL (XP Y DASHBOARD) ---
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
    
    // Calcular Promedios Reales combinando todos los módulos completados
    const scores = Object.values(state.scores).filter(s => s !== null);
    const totalAvg = scores.length > 0 ? Math.round(scores.reduce((a,b)=>a+b,0) / scores.length) : 0;

    // Para simplificar visualmente en el dashboard, agrupamos aleatoriamente en las 4 barras del marco europeo:
    const grammarScore = Math.round(((state.scores.prepositions||0) + (state.scores.present_simple||0) + (state.scores.present_cont||0)) / 3) || 0;
    const writingScore = Math.round(((state.scores.verbs||0) + (state.scores.simple_vs_cont||0)) / 2) || 0;
    const vocabScore = state.scores.numbers || 0;
    const readingScore = totalAvg; // Promedio global refleja reading comprensivo

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

    // Actualizar badges de módulos en el Dashboard
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

// --- INICIALIZACIÓN DE LA INTERFAZ ---
function init() {
    const menu = document.getElementById('module-menu');
    const statusGrid = document.getElementById('modules-status-grid');
    
    menu.innerHTML = '';
    statusGrid.innerHTML = '';

    Object.values(modulesData).forEach(m => {
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.innerHTML = `<i data-lucide="${m.icon}"></i> ${m.title}`;
        btn.onclick = () => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            openModule(m.id);
        };
        menu.appendChild(btn);

        const card = document.createElement('div');
        card.className = 'mod-card bg-white p-5 rounded-xl border border-gray-200 flex items-center gap-4';
        card.onclick = btn.onclick; // Hacer toda la tarjeta clickeable
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
