// --- ESTILO DINÁMICO PARA LOS JUEGOS NUEVOS ---
const extraStyles = document.createElement('style');
extraStyles.innerHTML = `
    .order-zone { min-height: 80px; border: 2px dashed #CBD5E0; border-radius: 12px; padding: 16px; display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; align-items: center; margin-bottom: 24px; background: white; transition: all 0.3s; }
    .order-word { padding: 10px 16px; background: white; border: 2px solid #E2E8F0; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
    .order-word:hover { border-color: #5A67D8; color: #5A67D8; transform: translateY(-2px); }
    .order-word.selected { background: #5A67D8; color: white; border-color: #5A67D8; }
    .order-word.selected:hover { background: #FC8181; border-color: #FC8181; }
    .flashcards-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 12px; margin-top: 16px; }
    .fc-card { height: 90px; background: white; border: 1px solid #E2E8F0; border-radius: 12px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s; font-weight: bold; text-align: center; padding: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.02); }
    .fc-card.flipped { background: #3C3489; color: white; transform: scale(1.05); }
`;
document.head.appendChild(extraStyles);

// --- ESTADO INICIAL (Modificado para soportar 0% reales) ---
let state = {
    xp: 0,
    level: 1,
    streak: 1,
    scores: {
        prepositions: null,
        numbers: null,
        verbs: null,
        vocabulary: null,
        reading: null,
        sentences: null
    }
};

let isChecking = false; // Bloqueo para evitar doble-clic

// --- DATOS DE LOS 6 MÓDULOS COMPLETOS ---
const modulesData = {
    prepositions: {
        id: 'prepositions', title: "1. Las Preposiciones", icon: 'target', color: '#3182CE', type: 'quiz',
        theory: `<h3>Preposiciones de Tiempo y Lugar</h3>
                <div class="theory-grid mt-4">
                    <div class="t-box" style="border-color: #4299E1; background: #EBF8FF">
                        <strong class="text-blue-800">ON (Superficies/Días)</strong><br>
                        <small>On Sunday, On the first floor, On 10th June.</small>
                    </div>
                    <div class="t-box" style="border-color: #48BB78; background: #F0FFF4">
                        <strong class="text-green-800">IN (Meses/Ciudades)</strong><br>
                        <small>In Brighton, In the summer, In 1990.</small>
                    </div>
                    <div class="t-box" style="border-color: #9F7AEA; background: #F5F3FF">
                        <strong class="text-purple-800">AT (Horas/Lugares exactos)</strong><br>
                        <small>At 7 o'clock, At home, At Christmas.</small>
                    </div>
                </div>`,
        quiz: [
            { q: "There were much people ___ his funeral.", opts: ["in", "at", "inside"], a: "at" },
            { q: "My flat is ___ the first floor.", opts: ["in", "on", "at"], a: "on" },
            { q: "We often go swimming ___ the summer.", opts: ["on", "in", "at"], a: "in" },
            { q: "My birthday is ___ 10th June.", opts: ["on", "in", "at"], a: "on" },
            { q: "Peter and Susan always go to church ___ Christmas day.", opts: ["in", "at", "on"], a: "on" },
            { q: "He goes every evening ___ night clubs.", opts: ["to", "at", "in"], a: "to" }
        ]
    },
    numbers: {
        id: 'numbers', title: "2. Números", icon: 'bar-chart', color: '#D69E2E', type: 'quiz',
        theory: `<h3>Cardinales y Ordinales</h3>
                <div class="theory-grid mt-4">
                    <div class="t-box" style="border-color: #D69E2E; background: #FFFFF0">
                        <strong>Cardinales (Cantidad)</strong><br>
                        <small>13-19 terminan en <b>-een</b> (fifteen).<br>Decenas terminan en <b>-ty</b> (fifty).</small>
                    </div>
                    <div class="t-box" style="border-color: #DD6B20; background: #FFF5F5">
                        <strong>Ordinales (Posición)</strong><br>
                        <small>1st (first), 2nd (second), 3rd (third).<br>El resto termina en <b>-th</b> (fourth, twentieth).</small>
                    </div>
                </div>`,
        quiz: [
            { q: "Selecciona el ordinal de 20:", opts: ["twentieth", "twentyth", "twentith"], a: "twentieth" },
            { q: "El número 3.333 se escribe:", opts: ["three thousand three hundred and thirty-three", "three thousands three hundreds thirty-three"], a: "three thousand three hundred and thirty-three" },
            { q: "Primero, segundo y tercero son:", opts: ["first, second, third", "oneth, twoth, threeth"], a: "first, second, third" },
            { q: "80 se escribe:", opts: ["eighteen", "eighty", "eigty"], a: "eighty" },
            { q: "El ordinal de 12 es:", opts: ["twelfth", "twelveth", "twelve"], a: "twelfth" }
        ]
    },
    verbs: {
        id: 'verbs', title: "3. Verbos: Be, Have, Do", icon: 'book-open', color: '#E53E3E', type: 'quiz',
        theory: `<h3>Conjugación (Presente Simple)</h3>
                <div class="theory-grid mt-4">
                    <div class="t-box" style="border-color: #E53E3E; background: #FFF5F5">
                        <strong>TO BE (Ser/Estar)</strong><br>
                        <small>I am | You/We/They are | He/She/It is</small>
                    </div>
                    <div class="t-box" style="border-color: #3182CE; background: #EBF8FF">
                        <strong>TO HAVE (Tener)</strong><br>
                        <small>I/You/We/They have | He/She/It has</small>
                    </div>
                    <div class="t-box" style="border-color: #38A169; background: #F0FFF4">
                        <strong>TO DO (Hacer)</strong><br>
                        <small>I/You/We/They do | He/She/It does</small>
                    </div>
                </div>`,
        quiz: [
            { q: "We ___ tired today.", opts: ["am", "is", "are"], a: "are" },
            { q: "It ___ cold outside.", opts: ["am", "is", "are"], a: "is" },
            { q: "I ___ a beautiful house.", opts: ["have", "has", "do"], a: "have" },
            { q: "Susan ___ a baby.", opts: ["have", "has", "is"], a: "has" },
            { q: "He ___ his homework every day.", opts: ["does", "do", "is"], a: "does" }
        ]
    },
    vocabulary: {
        id: 'vocabulary', title: "4. Vocabulario Animado", icon: 'star', color: '#38A169', type: 'match',
        theory: `<h3>Tarjetas de Vocabulario</h3>
                 <p class="text-sm text-gray-500">Toca las tarjetas para ver la traducción al español.</p>
                 <div class="flashcards-container" id="fc-container"></div>`,
        flashcards: [
            {en: "Black", es: "Negro"}, {en: "Blue", es: "Azul"}, {en: "Yellow", es: "Amarillo"},
            {en: "Boy", es: "Chico"}, {en: "Woman", es: "Mujer"}, {en: "Husband", es: "Esposo"},
            {en: "Twins", es: "Gemelos"}, {en: "Toddler", es: "Niño pequeño"}
        ],
        pairs: [
            { en: 'Grey', es: 'Gris' }, { en: 'Purple', es: 'Morado' },
            { en: 'Aunt', es: 'Tía' }, { en: 'Nephew', es: 'Sobrino' },
            { en: 'Teenager', es: 'Adolescente' }
        ]
    },
    reading: {
        id: 'reading', title: "5. Reading", icon: 'file-text', color: '#805AD5', type: 'quiz',
        theory: `<h3>Text 1: Peter's Life</h3>
                 <p class="text-sm text-gray-500 mb-2">Pasa el mouse sobre las <span class="word-hl">palabras resaltadas</span> para su traducción.</p>`,
        text: `Hello! My name is Peter. I am a doctor. I live in <span class="word-hl" data-tr="Brighton (Ciudad)">Brighton</span> with my <span class="word-hl" data-tr="familia">family</span>. 
               My <span class="word-hl" data-tr="esposa">wife</span> is Susan. She is a journalist. We have <span class="word-hl" data-tr="dos">two</span> children: a boy and a girl. 
               Our boy is a <span class="word-hl" data-tr="adolescente">teenager</span> and our girl is a <span class="word-hl" data-tr="niño pequeño">toddler</span>. 
               Our house is <span class="word-hl" data-tr="en la esquina">on the corner</span> of Portland Street. It has a blue door.`,
        quiz: [
            { q: "Where does Peter live?", opts: ["In London", "In Brighton", "On Portland Street"], a: "In Brighton" },
            { q: "What is Susan's job?", opts: ["Doctor", "Journalist", "Teacher"], a: "Journalist" },
            { q: "How many children do they have?", opts: ["Two", "Three", "One"], a: "Two" },
            { q: "Where is their house?", opts: ["Next to the park", "On the corner", "Behind the school"], a: "On the corner" }
        ]
    },
    sentences: {
        id: 'sentences', title: "6. Writing (Ordenar Frases)", icon: 'edit-3', color: '#DD6B20', type: 'order',
        theory: `<h3>Estructura de la Oración</h3>
                <div class="theory-grid mt-4">
                    <div class="t-box" style="border-color: #CBD5E0; background: #F7FAFC">
                        <strong>Presente Simple</strong><br>
                        <small>Sujeto + Verbo + Complemento<br>Ej: Elephants live in Africa.</small>
                    </div>
                    <div class="t-box" style="border-color: #CBD5E0; background: #F7FAFC">
                        <strong>Presente Continuo</strong><br>
                        <small>Sujeto + TO BE + Verbo-ING<br>Ej: I am writing a letter.</small>
                    </div>
                </div>`,
        quiz: [
            { q: "I am writing a letter.", words: ["I", "a", "writing", "am", "letter."] },
            { q: "Elephants live in Africa.", words: ["live", "Elephants", "Africa.", "in"] },
            { q: "He is doing some photocopying.", words: ["doing", "He", "is", "some", "photocopying."] },
            { q: "Houses are expensive.", words: ["are", "Houses", "expensive."] },
            { q: "She is the best.", words: ["the", "She", "best.", "is"] }
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
    currentModuleId = modId;
    currentQuizIdx = 0;
    currentQuizScore = 0;
    showScreen('module');
    renderModule(modulesData[modId]);
}

// --- RENDERIZADO DE MÓDULOS ---
function renderModule(mod) {
    const container = document.getElementById('module-content');
    container.innerHTML = `
        <div class="tab-nav">
            <button class="tab-btn active" id="btn-theory" onclick="setPhase('theory')">1. Conceptualizar</button>
            <button class="tab-btn" id="btn-quiz" onclick="setPhase('quiz')">2. Evaluar</button>
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
            ${mod.text ? `<div class="reading-text mt-4 animate-fadeIn">${mod.text}</div>` : ''}
            <div class="flex justify-end mt-6">
                <button class="nav-btn active" style="width: auto; background: var(--primary); padding: 12px 24px; border-radius: 8px; font-weight: bold;" onclick="setPhase('quiz')">Ir a Evaluación →</button>
            </div>
        `;
        
        if (mod.flashcards) {
            const fcContainer = document.getElementById('fc-container');
            fcContainer.innerHTML = mod.flashcards.map((fc, i) => `
                <div class="fc-card" onclick="this.classList.toggle('flipped')">
                    <span class="front">${fc.en}</span>
                    <span class="back" style="display:none">${fc.es}</span>
                </div>
            `).join('');
            
            document.querySelectorAll('.fc-card').forEach(card => {
                card.addEventListener('click', function() {
                    const front = this.querySelector('.front');
                    const back = this.querySelector('.back');
                    if(this.classList.contains('flipped')) {
                        front.style.display = 'none'; back.style.display = 'block';
                    } else {
                        front.style.display = 'block'; back.style.display = 'none';
                    }
                });
            });
        }
    } else if (phase === 'quiz') {
        if (mod.type === 'quiz') renderQuiz(mod.quiz);
        else if (mod.type === 'match') renderMatchGame(mod.pairs);
        else if (mod.type === 'order') renderOrderGame(mod.quiz);
    }
}

// --- JUEGO 1: QUIZ ESTÁNDAR ---
function renderQuiz(questions) {
    const q = questions[currentQuizIdx];
    const content = document.getElementById('phase-content');
    content.innerHTML = `
        <div class="card-theory animate-fadeIn">
            <p class="mb-4 text-sm font-bold" style="color: var(--primary)">Pregunta ${currentQuizIdx + 1} de ${questions.length}</p>
            <h3 class="mb-6" style="font-size: 20px;">${q.q}</h3>
            <div id="options-list">
                ${q.opts.map(o => `<button class="opt-btn" onclick="checkAnswer('${o}', '${q.a}', this)">${o}</button>`).join('')}
            </div>
        </div>
    `;
}

function checkAnswer(val, correct, btn) {
    if (isChecking) return;
    isChecking = true;

    if (val === correct) {
        btn.classList.add('correct');
        currentQuizScore++;
        showToast("+10 XP ¡Correcto!");
    } else {
        btn.classList.add('wrong');
        showToast("Incorrecto");
    }
    
    setTimeout(() => {
        isChecking = false;
        currentQuizIdx++;
        if(currentQuizIdx < modulesData[currentModuleId].quiz.length) {
            renderQuiz(modulesData[currentModuleId].quiz);
        } else {
            finishModule(modulesData[currentModuleId].quiz.length);
        }
    }, 1200);
}

// --- JUEGO 2: MATCH (CONECTAR PALABRAS) ---
let matchMatched = [];
let matchSelected = null;

function renderMatchGame(pairs) {
    matchMatched = [];
    matchSelected = null;
    const lefts = [...pairs].sort(() => Math.random() - 0.5);
    const rights = [...pairs].sort(() => Math.random() - 0.5);
    
    const content = document.getElementById('phase-content');
    content.innerHTML = `
        <div class="card-theory animate-fadeIn">
            <h3 class="text-center mb-6">Conecta las palabras</h3>
            <div class="match-container">
                <div class="match-col">
                    ${lefts.map(p => `<button class="match-btn" id="l-${p.en}" onclick="selectMatch(this, '${p.en}', 'left', '${p.es}')">${p.en}</button>`).join('')}
                </div>
                <div class="match-col">
                    ${rights.map(p => `<button class="match-btn" id="r-${p.es}" onclick="selectMatch(this, '${p.es}', 'right', '${p.en}')">${p.es}</button>`).join('')}
                </div>
            </div>
        </div>
    `;
}

function selectMatch(btn, val, side, pairVal) {
    if (btn.classList.contains('matched')) return;

    if (!matchSelected) {
        matchSelected = { btn, val, side, pairVal };
        btn.classList.add('selected');
    } else {
        if (matchSelected.side === side) {
            matchSelected.btn.classList.remove('selected');
            matchSelected = { btn, val, side, pairVal };
            btn.classList.add('selected');
        } else {
            if (matchSelected.pairVal === val) { 
                btn.classList.add('matched');
                matchSelected.btn.classList.remove('selected');
                matchSelected.btn.classList.add('matched');
                matchMatched.push(val);
                showToast("+10 XP");
                
                if (matchMatched.length === modulesData[currentModuleId].pairs.length) {
                    currentQuizScore = matchMatched.length; 
                    setTimeout(() => finishModule(matchMatched.length), 1000);
                }
            } else { 
                btn.style.borderColor = "red";
                matchSelected.btn.style.borderColor = "red";
                setTimeout(() => {
                    btn.style.borderColor = "";
                    matchSelected.btn.style.borderColor = "";
                    matchSelected.btn.classList.remove('selected');
                    matchSelected = null;
                }, 800);
                return;
            }
            matchSelected = null;
        }
    }
}

// --- JUEGO 3: ORDENAR FRASES (WRITING) ---
let orderAvailable = [];
let orderSelected = [];

function renderOrderGame(questions) {
    const q = questions[currentQuizIdx];
    orderAvailable = [...q.words].sort(() => Math.random() - 0.5);
    orderSelected = [];
    drawOrderUI();
}

function drawOrderUI() {
    const content = document.getElementById('phase-content');
    
    content.innerHTML = `
        <div class="card-theory animate-fadeIn text-center">
            <p class="mb-4 text-sm font-bold" style="color: var(--primary)">Frase ${currentQuizIdx + 1} de ${modulesData[currentModuleId].quiz.length}</p>
            <h3 class="mb-6">Ordena las palabras para formar la oración</h3>
            
            <div class="order-zone" id="order-zone-selected">
                ${orderSelected.length === 0 ? '<span style="color:#A0AEC0">Toca las palabras para formar la frase...</span>' : ''}
                ${orderSelected.map((w, i) => `<div class="order-word selected" onclick="moveWord(${i}, 'to-available')">${w}</div>`).join('')}
            </div>

            <div class="flex flex-wrap gap-2 justify-center mb-8" id="order-zone-available">
                ${orderAvailable.map((w, i) => `<div class="order-word" onclick="moveWord(${i}, 'to-selected')">${w}</div>`).join('')}
            </div>

            <button class="nav-btn active mx-auto" style="width: auto; background: ${orderAvailable.length === 0 ? 'var(--accent)' : '#CBD5E0'}; padding: 12px 24px; border-radius: 8px; font-weight: bold; color: white; transition: 0.3s;" 
                    onclick="checkOrder()" ${orderAvailable.length > 0 ? 'disabled' : ''}>
                Comprobar Frase
            </button>
        </div>
    `;
}

function moveWord(index, direction) {
    if (direction === 'to-selected') {
        orderSelected.push(orderAvailable.splice(index, 1)[0]);
    } else {
        orderAvailable.push(orderSelected.splice(index, 1)[0]);
    }
    drawOrderUI();
}

function checkOrder() {
    if (isChecking) return;
    isChecking = true;

    const q = modulesData[currentModuleId].quiz[currentQuizIdx];
    const userSentence = orderSelected.join(" ").trim();
    const orderZone = document.getElementById('order-zone-selected');
    
    if (userSentence === q.q.trim()) {
        currentQuizScore++;
        orderZone.style.borderColor = "#48BB78";
        orderZone.style.backgroundColor = "#F0FFF4";
        showToast("+15 XP ¡Perfecto!");
    } else {
        orderZone.style.borderColor = "#F56565";
        orderZone.style.backgroundColor = "#FFF5F5";
        showToast("Orden incorrecto.");
    }

    setTimeout(() => {
        isChecking = false;
        currentQuizIdx++;
        if(currentQuizIdx < modulesData[currentModuleId].quiz.length) {
            renderOrderGame(modulesData[currentModuleId].quiz);
        } else {
            finishModule(modulesData[currentModuleId].quiz.length);
        }
    }, 1500);
}

// --- FINALIZAR MÓDULO ---
function finishModule(totalQuestions) {
    const finalScore = Math.round((currentQuizScore / totalQuestions) * 100);
    state.scores[currentModuleId] = finalScore;
    addXP(50);
    updateUI();
    showScreen('dashboard');
}

// --- SISTEMA GENERAL ---
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
    
    const pScore = state.scores.prepositions || 0;
    const vScore = state.scores.verbs || 0;
    const nScore = state.scores.numbers || 0;
    const vocScore = state.scores.vocabulary || 0;
    
    const grammarScore = Math.round((pScore + vScore) / 2) || 0;
    const vocabScore = Math.round((vocScore + nScore) / 2) || 0;
    const readingScore = state.scores.reading || 0;
    const writingScore = state.scores.sentences || 0;

    const skills = [
        { name: 'Gramática', val: grammarScore, color: '#534AB7' },
        { name: 'Vocabulario', val: vocabScore, color: '#1D9E75' },
        { name: 'Reading', val: readingScore, color: '#378ADD' },
        { name: 'Writing', val: writingScore, color: '#D85A30' }
    ];
    
    const totalAvg = Math.round((grammarScore + vocabScore + readingScore + writingScore) / 4);
    
    document.getElementById('skills-bars').innerHTML = skills.map(s => `
        <div class="skill-row">
            <div class="skill-info"><span>${s.name}</span><span>${s.val}%</span></div>
            <div class="s-bar"><div class="s-fill" style="width:${s.val}%; background:${s.color}"></div></div>
        </div>
    `).join('');
    
    document.getElementById('total-progress-pct').innerText = totalAvg + "%";
    document.getElementById('total-progress-fill').style.width = totalAvg + "%";

    // Actualización de estado en el Dashboard (Ahora reconoce el 0%)
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
        card.className = 'mod-card';
        card.innerHTML = `
            <div class="mod-icon" style="background: ${m.color}22; color: ${m.color}">
                <i data-lucide="${m.icon}"></i>
            </div>
            <div>
                <div class="mod-title" style="color: #2D3748">${m.title}</div>
                <div class="mod-status" id="status-${m.id}" style="color: #A0AEC0">Pendiente</div>
            </div>
        `;
        statusGrid.appendChild(card);
    });
    
    lucide.createIcons();
    updateUI();
}

window.onload = init;
