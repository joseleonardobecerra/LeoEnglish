// data.js v2.0 — BASE DE DATOS COMPLETA

// ============================================================
// MÓDULOS DE GRAMÁTICA
// ============================================================
const modulesData = {
    prepositions: {
        id: 'prepositions', title: "Preposiciones (In, On, At)", icon: 'target', color: '#3182CE',
        theory: `
            <h3>Preposiciones de Tiempo y Lugar</h3>
            <p>Las preposiciones conectan sustantivos con el resto de la frase. En inglés las más usadas son <strong>ON</strong>, <strong>IN</strong> y <strong>AT</strong>.</p>
            <div class="theory-grid">
                <div class="t-box" style="border-color:#4299E1;background:#EBF8FF">
                    <strong class="text-blue-800" style="color:#2C5282">ON — Días / Superficies</strong>
                    <small>On Sunday · On 10th June · On the table · On the first floor</small>
                </div>
                <div class="t-box" style="border-color:#48BB78;background:#F0FFF4">
                    <strong style="color:#276749">IN — Meses / Años / Ciudades / Áreas</strong>
                    <small>In June · In 1990 · In Brighton · In the morning · In summer</small>
                </div>
                <div class="t-box" style="border-color:#9F7AEA;background:#F5F3FF">
                    <strong style="color:#553C9A">AT — Horas / Lugares exactos</strong>
                    <small>At 7 o'clock · At home · At school · At Christmas · At the weekend</small>
                </div>
            </div>
            <div class="example-block">
                <div class="ex-row"><div class="ex-en">My flat is on the first floor.</div><div class="ex-es">Mi piso está en la primera planta.</div></div>
                <div class="ex-row"><div class="ex-en">She was born in 1990.</div><div class="ex-es">Ella nació en 1990.</div></div>
                <div class="ex-row"><div class="ex-en">He gets up at 7 o'clock.</div><div class="ex-es">Se levanta a las 7.</div></div>
            </div>
            <div class="tip-callout"><i data-lucide="lightbulb"></i><span><strong>Truco mnemónico:</strong> AT = un punto exacto. ON = una superficie o día. IN = dentro de un espacio o período largo.</span></div>`,
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
            { type: 'choice', q: "There were many people ___ his funeral.", opts: ["in", "at", "inside"], a: "at" },
            { type: 'write', q: "I have a meeting ___ the morning.", a: "in" },
            { type: 'choice', q: "They arrived ___ London yesterday.", opts: ["in", "at", "on"], a: "in" },
            { type: 'order', q: "Ordena la frase:", words: ["are", "We", "home.", "at"], a: "We are at home." },
            { type: 'write', q: "She was born ___ 1995.", a: "in" },
            { type: 'choice', q: "The party is ___ midnight.", opts: ["in", "on", "at"], a: "at" }
        ]
    },
    numbers: {
        id: 'numbers', title: "Números (Cardinales y Ordinales)", icon: 'hash', color: '#D69E2E',
        theory: `
            <h3>Números Cardinales y Ordinales</h3>
            <p>Los <strong>cardinales</strong> son para contar (one, two, three...). Los <strong>ordinales</strong> indican posición o orden (first, second, third...).</p>
            <div class="theory-grid">
                <div class="t-box" style="border-color:#D69E2E;background:#FEFCBF">
                    <strong style="color:#744210">Terminaciones -teen y -ty</strong>
                    <small>13–19: thirteen, fourteen, fifteen...<br>20,30...: twenty, thirty, forty...</small>
                </div>
                <div class="t-box" style="border-color:#48BB78;background:#F0FFF4">
                    <strong style="color:#276749">Centenas y millares</strong>
                    <small>100 = a hundred · 1,000 = a thousand<br>2,500 = two thousand five hundred</small>
                </div>
                <div class="t-box" style="border-color:#9F7AEA;background:#F5F3FF">
                    <strong style="color:#553C9A">Ordinales: -st, -nd, -rd, -th</strong>
                    <small>1st first · 2nd second · 3rd third<br>4th–20th: -th · 21st, 22nd, 23rd...</small>
                </div>
            </div>
            <div class="example-block">
                <div class="ex-row"><div class="ex-en">She lives on the 3rd floor.</div><div class="ex-es">Ella vive en el 3er piso.</div></div>
                <div class="ex-row"><div class="ex-en">Two thousand five hundred people.</div><div class="ex-es">Dos mil quinientas personas.</div></div>
            </div>
            <div class="tip-callout"><i data-lucide="lightbulb"></i><span>Excepción: <strong>fifth</strong> (5th) y <strong>twelfth</strong> (12th) cambian la ortografía. <strong>Forty</strong> (no "fourty").</span></div>`,
        exercises: [
            { type: 'choice', q: "Selecciona el ordinal de 20:", opts: ["twentieth", "twentyth", "twentith"], a: "twentieth" },
            { type: 'write', q: "Escribe el número en inglés: 15", a: "fifteen" },
            { type: 'choice', q: "El número 3.333 se escribe:", opts: ["three thousand three hundred and thirty-three", "three thousands three hundreds thirty-three", "three thousand three hundred thirty three"], a: "three thousand three hundred and thirty-three" },
            { type: 'write', q: "Escribe el número en inglés: 40", a: "forty" },
            { type: 'order', q: "Forma el número 102:", words: ["two", "a", "hundred", "and"], a: "a hundred and two" },
            { type: 'choice', q: "Primero, segundo y tercero son:", opts: ["first, second, third", "oneth, twoth, threeth", "firsted, seconded, thirded"], a: "first, second, third" },
            { type: 'write', q: "Escribe el ordinal de 12:", a: "twelfth" },
            { type: 'choice', q: "80 se escribe:", opts: ["eighteen", "eighty", "eigty"], a: "eighty" },
            { type: 'write', q: "Escribe el número 100:", a: "one hundred" },
            { type: 'order', q: "Forma el ordinal 21st:", words: ["first", "twenty-"], a: "twenty-first" },
            { type: 'choice', q: "El ordinal de 5 es:", opts: ["fiveth", "fifth", "fifeth"], a: "fifth" },
            { type: 'write', q: "Escribe el número 13:", a: "thirteen" },
            { type: 'choice', q: "El número 1.000.000 se dice:", opts: ["one million", "one millions", "a thousands"], a: "one million" },
            { type: 'write', q: "Escribe el número 50:", a: "fifty" },
            { type: 'order', q: "Forma el número 2.500.000:", words: ["million", "two", "hundred", "five", "thousand"], a: "two million five hundred thousand" }
        ]
    },
    verbs: {
        id: 'verbs', title: "Verbos Base (Be, Have, Do)", icon: 'command', color: '#E53E3E',
        theory: `
            <h3>Los tres verbos fundamentales</h3>
            <p>Estos verbos son la base de la gramática inglesa. Se conjugan de forma irregular y también actúan como auxiliares.</p>
            <div class="theory-grid">
                <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
                    <strong style="color:#9B2C2C">TO BE (ser / estar)</strong>
                    <small>I am · You are · He/She/It is<br>We are · You are · They are</small>
                </div>
                <div class="t-box" style="border-color:#48BB78;background:#F0FFF4">
                    <strong style="color:#276749">TO HAVE (tener / haber)</strong>
                    <small>I have · You have · He/She/It has<br>We have · You have · They have</small>
                </div>
                <div class="t-box" style="border-color:#4299E1;background:#EBF8FF">
                    <strong style="color:#2C5282">TO DO (hacer / auxiliar)</strong>
                    <small>I do · You do · He/She/It does<br>We do · You do · They do</small>
                </div>
            </div>
            <div class="example-block">
                <div class="ex-row"><div class="ex-en">She is a teacher. They are tired.</div><div class="ex-es">Ella es profesora. Están cansados.</div></div>
                <div class="ex-row"><div class="ex-en">He has a car. I have two cats.</div><div class="ex-es">Él tiene un coche. Tengo dos gatos.</div></div>
                <div class="ex-row"><div class="ex-en">Do you speak English? She doesn't like fish.</div><div class="ex-es">¿Hablas inglés? No le gusta el pescado.</div></div>
            </div>
            <div class="tip-callout"><i data-lucide="lightbulb"></i><span>En la 3ª persona singular (He/She/It): <strong>is</strong> · <strong>has</strong> · <strong>does</strong>. Siempre con -s.</span></div>`,
        exercises: [
            { type: 'choice', q: "We ___ tired today.", opts: ["am", "is", "are"], a: "are" },
            { type: 'write', q: "Escribe el verbo: It ___ cold outside. (Ser/Estar)", a: "is" },
            { type: 'order', q: "Ordena la frase:", words: ["a", "She", "baby.", "has"], a: "She has a baby." },
            { type: 'choice', q: "I ___ a beautiful house.", opts: ["have", "has", "do"], a: "have" },
            { type: 'write', q: "Completa (Hacer): He ___ his homework every day.", a: "does" },
            { type: 'choice', q: "You ___ a great job.", opts: ["do", "does", "are"], a: "do" },
            { type: 'order', q: "Ordena la frase:", words: ["not", "am", "I", "ill."], a: "I am not ill." },
            { type: 'write', q: "Completa (Tener): They ___ a new car.", a: "have" },
            { type: 'choice', q: "They ___ at the cinema.", opts: ["are", "is", "am"], a: "are" },
            { type: 'write', q: "Escribe el verbo: I ___ (tener) a headache.", a: "have" },
            { type: 'choice', q: "___ she a doctor?", opts: ["Is", "Are", "Am"], a: "Is" },
            { type: 'order', q: "Ordena la frase:", words: ["not", "does", "He", "work."], a: "He does not work." },
            { type: 'write', q: "Escribe el verbo: You ___ (ser) very smart.", a: "are" },
            { type: 'choice', q: "The dog ___ hungry.", opts: ["are", "is", "have"], a: "is" },
            { type: 'order', q: "Ordena la frase:", words: ["two", "We", "have", "cats."], a: "We have two cats." }
        ]
    },
    present_simple: {
        id: 'present_simple', title: "Presente Simple", icon: 'sun', color: '#38B2AC',
        theory: `
            <h3>Presente Simple — Rutinas y Hechos</h3>
            <p>El presente simple describe <strong>hábitos</strong>, <strong>rutinas</strong> y <strong>verdades generales</strong>. Es el tiempo más usado en inglés básico.</p>
            <div class="theory-grid">
                <div class="t-box" style="border-color:#38B2AC;background:#E6FFFA">
                    <strong style="color:#234E52">Afirmativo</strong>
                    <small>I/You/We/They + verbo<br>He/She/It + verbo<strong>-s</strong><br>She <em>reads</em> every day.</small>
                </div>
                <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
                    <strong style="color:#9B2C2C">Negativo</strong>
                    <small>I/You/We/They + <strong>don't</strong> + verbo<br>He/She/It + <strong>doesn't</strong> + verbo<br>He <em>doesn't</em> like fish.</small>
                </div>
                <div class="t-box" style="border-color:#D69E2E;background:#FEFCBF">
                    <strong style="color:#744210">Interrogativo</strong>
                    <small><strong>Do</strong> I/you/we/they + verbo?<br><strong>Does</strong> he/she/it + verbo?<br><em>Does</em> she speak French?</small>
                </div>
            </div>
            <div class="example-block">
                <div class="ex-row"><div class="ex-en">I eat breakfast every day.</div><div class="ex-es">Como el desayuno todos los días.</div></div>
                <div class="ex-row"><div class="ex-en">Elephants live in Africa.</div><div class="ex-es">Los elefantes viven en África.</div></div>
            </div>
            <div class="tip-callout"><i data-lucide="lightbulb"></i><span>Señales de tiempo: <strong>always, usually, often, sometimes, never, every day, on Mondays</strong>.</span></div>`,
        exercises: [
            { type: 'choice', q: "I ___ every day at school.", opts: ["eat", "eats", "eating"], a: "eat" },
            { type: 'write', q: "Escribe el verbo correcto: Elephants ___ (live) in Africa.", a: "live" },
            { type: 'choice', q: "She ___ to music in the evenings.", opts: ["listen", "listens", "listening"], a: "listens" },
            { type: 'order', q: "Ordena la pregunta:", words: ["speak", "Does", "English?", "he"], a: "Does he speak English?" },
            { type: 'write', q: "Transforma a negativo: 'I like apples' → 'I ___ like apples'", a: "don't" },
            { type: 'choice', q: "My father ___ TV at night.", opts: ["watch", "watches", "watching"], a: "watches" },
            { type: 'order', q: "Ordena la negación:", words: ["work", "doesn't", "She", "here."], a: "She doesn't work here." },
            { type: 'write', q: "Completa: ___ they play tennis on Sundays?", a: "Do" },
            { type: 'choice', q: "It ___ a lot in winter.", opts: ["rain", "rains", "raining"], a: "rains" },
            { type: 'write', q: "Completa: He ___ (go) to the gym on Mondays.", a: "goes" },
            { type: 'order', q: "Ordena la frase:", words: ["usually", "I", "early.", "wake up"], a: "I usually wake up early." },
            { type: 'choice', q: "We ___ not like spicy food.", opts: ["does", "do", "are"], a: "do" },
            { type: 'write', q: "Escribe el verbo: The sun ___ (rise) in the east.", a: "rises" },
            { type: 'choice', q: "___ your brother drive a car?", opts: ["Do", "Does", "Is"], a: "Does" },
            { type: 'order', q: "Ordena la frase:", words: ["play", "They", "football", "weekends.", "on"], a: "They play football on weekends." }
        ]
    },
    present_cont: {
        id: 'present_cont', title: "Presente Continuo", icon: 'activity', color: '#805AD5',
        theory: `
            <h3>Presente Continuo — Acciones en Progreso</h3>
            <p>El presente continuo describe acciones que ocurren <strong>ahora mismo</strong> o en un período alrededor del presente. Estructura: <strong>sujeto + TO BE + verbo-ING</strong>.</p>
            <div class="theory-grid">
                <div class="t-box" style="border-color:#805AD5;background:#FAF5FF">
                    <strong style="color:#44337A">Afirmativo</strong>
                    <small>I <em>am</em> reading.<br>She <em>is</em> working.<br>They <em>are</em> sleeping.</small>
                </div>
                <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
                    <strong style="color:#9B2C2C">Negativo</strong>
                    <small>I am <em>not</em> reading.<br>She <em>isn't</em> working.<br>They <em>aren't</em> sleeping.</small>
                </div>
                <div class="t-box" style="border-color:#D69E2E;background:#FEFCBF">
                    <strong style="color:#744210">Regla del -ING</strong>
                    <small>run → run<strong>n</strong>ing (doble consonante)<br>write → writ<strong>ing</strong> (quitar -e)<br>study → study<strong>ing</strong></small>
                </div>
            </div>
            <div class="example-block">
                <div class="ex-row"><div class="ex-en">I am writing a letter right now.</div><div class="ex-es">Estoy escribiendo una carta ahora mismo.</div></div>
                <div class="ex-row"><div class="ex-en">Look! It is raining outside.</div><div class="ex-es">¡Mira! Está lloviendo fuera.</div></div>
            </div>
            <div class="tip-callout"><i data-lucide="lightbulb"></i><span>Señales de tiempo: <strong>now, right now, at the moment, look!, currently, today</strong>.</span></div>`,
        exercises: [
            { type: 'choice', q: "Look! The baby ___.", opts: ["sleeps", "is sleeping", "sleep"], a: "is sleeping" },
            { type: 'write', q: "Escribe el auxiliar: We ___ watching a film on TV.", a: "are" },
            { type: 'order', q: "Ordena la frase:", words: ["a", "I", "letter.", "am", "writing"], a: "I am writing a letter." },
            { type: 'choice', q: "She ___ for a job at the moment.", opts: ["is looking", "looks", "look"], a: "is looking" },
            { type: 'write', q: "Agrega ING al verbo (run): The dog is ___.", a: "running" },
            { type: 'order', q: "Ordena la frase:", words: ["not", "are", "listening.", "They"], a: "They are not listening." },
            { type: 'choice', q: "What ___ you doing right now?", opts: ["do", "are", "is"], a: "are" },
            { type: 'write', q: "Traduce al inglés: 'Estoy comiendo': I am ___.", a: "eating" },
            { type: 'order', q: "Ordena la pregunta:", words: ["he", "Is", "working?", "now"], a: "Is he working now?" },
            { type: 'choice', q: "The kids ___ playing in the garden.", opts: ["is", "are", "am"], a: "are" },
            { type: 'write', q: "Verbo+ING (study): He is ___ for his exam.", a: "studying" },
            { type: 'choice', q: "I ___ not talking to you.", opts: ["am", "is", "are"], a: "am" },
            { type: 'order', q: "Ordena la frase:", words: ["raining", "It", "is", "outside."], a: "It is raining outside." },
            { type: 'write', q: "Completa: Why are you ___ (cry)?", a: "crying" },
            { type: 'choice', q: "My mom ___ cooking dinner now.", opts: ["are", "is", "am"], a: "is" }
        ]
    },
    simple_vs_cont: {
        id: 'simple_vs_cont', title: "Simple vs Continuo", icon: 'git-merge', color: '#ED8936',
        theory: `
            <h3>¿Hábito o Este Momento?</h3>
            <p>La diferencia clave: el <strong>simple</strong> describe lo habitual; el <strong>continuo</strong> describe lo que pasa ahora.</p>
            <div class="theory-grid">
                <div class="t-box" style="border-color:#38B2AC;background:#E6FFFA">
                    <strong style="color:#234E52">Presente Simple → Hábito</strong>
                    <small><strong>usually, every day, always, sometimes</strong><br>"She <em>drinks</em> coffee every morning."</small>
                </div>
                <div class="t-box" style="border-color:#805AD5;background:#FAF5FF">
                    <strong style="color:#44337A">Presente Continuo → Ahora</strong>
                    <small><strong>now, right now, at the moment, look!</strong><br>"She <em>is drinking</em> coffee right now."</small>
                </div>
            </div>
            <div class="example-block">
                <div class="ex-row"><div class="ex-en">I usually <u>drive</u> to work.</div><div class="ex-es">Normalmente conduzco al trabajo. (hábito)</div></div>
                <div class="ex-row"><div class="ex-en">Today I <u>am taking</u> the bus.</div><div class="ex-es">Hoy estoy cogiendo el autobús. (excepción)</div></div>
            </div>
            <div class="tip-callout"><i data-lucide="lightbulb"></i><span>Verbos de estado (like, want, know, love, hate, need) <strong>NUNCA</strong> van en continuo: ✗ "I am knowing" → ✓ "I know".</span></div>`,
        exercises: [
            { type: 'choice', q: "I usually ___ coffee, but today I ___ tea.", opts: ["drink / am drinking", "am drinking / drink", "drinks / drinking"], a: "drink / am drinking" },
            { type: 'write', q: "Completa (ahora): Shh! I am ___ to the radio.", a: "listening" },
            { type: 'choice', q: "He always ___ his car on Sundays.", opts: ["is washing", "washes", "wash"], a: "washes" },
            { type: 'order', q: "Ordena la frase:", words: ["every", "I", "read", "day."], a: "I read every day." },
            { type: 'write', q: "Completa (hábito): She usually ___ in London.", a: "works" },
            { type: 'choice', q: "Look! It ___ outside.", opts: ["rains", "is raining", "rain"], a: "is raining" },
            { type: 'order', q: "Ordena la frase:", words: ["moment.", "reading", "He", "is", "at", "the"], a: "He is reading at the moment." },
            { type: 'choice', q: "They never ___ to the cinema.", opts: ["are going", "goes", "go"], a: "go" },
            { type: 'write', q: "Completa (ahora): They are ___ football right now.", a: "playing" },
            { type: 'choice', q: "She ___ her parents every weekend.", opts: ["visits", "is visiting", "visit"], a: "visits" },
            { type: 'order', q: "Ordena la frase:", words: ["now.", "working", "We", "are"], a: "We are working now." },
            { type: 'write', q: "Completa (hábito): He always ___ carefully.", a: "drives" },
            { type: 'choice', q: "Why ___ you wearing a coat? It's hot!", opts: ["do", "are", "is"], a: "are" },
            { type: 'write', q: "Completa (hábito): I usually ___ a sandwich for lunch.", a: "eat" },
            { type: 'order', q: "Ordena la frase:", words: ["singing", "is", "shower.", "She", "in", "the"], a: "She is singing in the shower." }
        ]
    }
};

// ============================================================
// READING TEXTS
// ============================================================
const readingTexts = [
    {
        id: 'school_day',
        title: "A Day at School",
        level: 'A1', levelColor: '#38B2AC',
        topic: 'Rutina diaria',
        questions: 5,
        desc: "Un estudiante describe su día escolar.",
        body: `My name is <span class="word-hl" data-tr="Tom (nombre propio)">Tom</span>. I am <span class="word-hl" data-tr="doce">twelve</span> years old. I go to school every day. My school is <span class="word-hl" data-tr="cerca de">near</span> my house. I walk to school <span class="word-hl" data-tr="por la mañana">in the morning</span>. My <span class="word-hl" data-tr="profesora">teacher</span> is Mrs Johnson. She is very kind. We <span class="word-hl" data-tr="estudiamos">study</span> English, Maths and Science. I like English because it is <span class="word-hl" data-tr="divertido">fun</span>. At <span class="word-hl" data-tr="hora del almuerzo">lunchtime</span>, I eat with my friends. After school, I do my <span class="word-hl" data-tr="deberes">homework</span>. I am a good student.`,
        qs: [
            { q: "How old is Tom?", opts: ["Ten", "Twelve", "Fifteen"], a: 1, exp: '"I am twelve years old."' },
            { q: "Where is the school?", opts: ["Far from his house", "Near his house", "In another city"], a: 1, exp: '"My school is near my house."' },
            { q: "What does Tom do after school?", opts: ["He watches TV", "He plays football", "He does his homework"], a: 2, exp: '"After school, I do my homework."' },
            { q: "What is the teacher\'s name?", opts: ["Mrs Smith", "Mrs Johnson", "Miss Brown"], a: 1, exp: '"My teacher is Mrs Johnson."' },
            { q: "Why does Tom like English?", opts: ["It is easy", "It is fun", "It is short"], a: 1, exp: '"I like English because it is fun."' }
        ]
    },
    {
        id: 'my_family',
        title: "My Family",
        level: 'A1', levelColor: '#805AD5',
        topic: 'Familia y relaciones',
        questions: 5,
        desc: "Una descripción de los miembros de una familia.",
        body: `This is my <span class="word-hl" data-tr="familia">family</span>. My <span class="word-hl" data-tr="padre">father</span> is Carlos. He is a <span class="word-hl" data-tr="médico">doctor</span>. My <span class="word-hl" data-tr="madre">mother</span> is Ana. She is a <span class="word-hl" data-tr="profesora">teacher</span>. I have one <span class="word-hl" data-tr="hermano">brother</span>. His name is Luis. He is <span class="word-hl" data-tr="más joven">younger</span> than me. We also have a <span class="word-hl" data-tr="perro">dog</span>. His name is Rex. My <span class="word-hl" data-tr="abuelos">grandparents</span> live <span class="word-hl" data-tr="cerca de nosotros">near us</span>. My grandfather is <span class="word-hl" data-tr="jubilado">retired</span>. My grandmother makes <span class="word-hl" data-tr="deliciosa">delicious</span> food. I love my family very much.`,
        qs: [
            { q: "What does the father do?", opts: ["He is a teacher", "He is a doctor", "He is a lawyer"], a: 1, exp: '"My father is Carlos. He is a doctor."' },
            { q: "What is the brother called?", opts: ["Carlos", "Rex", "Luis"], a: 2, exp: '"His name is Luis."' },
            { q: "Who makes delicious food?", opts: ["The mother", "The grandmother", "The sister"], a: 2, exp: '"My grandmother makes delicious food."' },
            { q: "Where do the grandparents live?", opts: ["Far away", "In another country", "Near them"], a: 2, exp: '"My grandparents live near us."' },
            { q: "What is the dog\'s name?", opts: ["Max", "Rex", "Bob"], a: 1, exp: '"His name is Rex."' }
        ]
    },
    {
        id: 'london',
        title: "London, a Big City",
        level: 'A2', levelColor: '#E53E3E',
        topic: 'Ciudades y lugares',
        questions: 5,
        desc: "Una breve descripción de la capital del Reino Unido.",
        body: `<span class="word-hl" data-tr="Londres">London</span> is the <span class="word-hl" data-tr="capital">capital</span> of the <span class="word-hl" data-tr="Reino Unido">United Kingdom</span>. It is a very big and <span class="word-hl" data-tr="diversa">diverse</span> city. The River <span class="word-hl" data-tr="Támesis">Thames</span> goes through the city. <span class="word-hl" data-tr="En la orilla norte">On the north bank</span>, you can find the Tower of London. <span class="word-hl" data-tr="Frente a la torre">Opposite the tower</span>, there is Tower Bridge. In the city <span class="word-hl" data-tr="centro">centre</span>, there is Buckingham <span class="word-hl" data-tr="palacio">Palace</span>. The King lives there. There are also many <span class="word-hl" data-tr="museos">museums</span> in the city. <span class="word-hl" data-tr="El fin de semana">At the weekend</span>, people visit parks and <span class="word-hl" data-tr="mercados">markets</span>. London is an <span class="word-hl" data-tr="asombrosa">amazing</span> city to visit.`,
        qs: [
            { q: "What river goes through London?", opts: ["The Seine", "The Thames", "The Rhine"], a: 1, exp: '"The River Thames goes through the city."' },
            { q: "Where is Tower Bridge?", opts: ["Near the Palace", "Opposite the Tower of London", "In the north"], a: 1, exp: '"Opposite the tower, there is Tower Bridge."' },
            { q: "Who lives in Buckingham Palace?", opts: ["The Prime Minister", "The Mayor", "The King"], a: 2, exp: '"The King lives there."' },
            { q: "What do people do at the weekend?", opts: ["They work", "They visit parks and markets", "They go to school"], a: 1, exp: '"At the weekend, people visit parks and markets."' },
            { q: "London is the capital of...", opts: ["England", "Scotland", "The United Kingdom"], a: 2, exp: '"London is the capital of the United Kingdom."' }
        ]
    },
    {
        id: 'weather',
        title: "The British Weather",
        level: 'A2', levelColor: '#D69E2E',
        topic: 'Clima y naturaleza',
        questions: 5,
        desc: "El famoso tiempo inglés y cómo afecta la vida diaria.",
        body: `People in Britain <span class="word-hl" data-tr="hablan">talk</span> about the <span class="word-hl" data-tr="tiempo (meteorológico)">weather</span> a lot. The weather in the UK is very <span class="word-hl" data-tr="cambiante">changeable</span>. In <span class="word-hl" data-tr="invierno">winter</span>, it is cold and it <span class="word-hl" data-tr="llueve">rains</span> a lot. In <span class="word-hl" data-tr="verano">summer</span>, it is sometimes warm and <span class="word-hl" data-tr="soleado">sunny</span>, but it can also <span class="word-hl" data-tr="llover">rain</span>. Many British people carry an <span class="word-hl" data-tr="paraguas">umbrella</span> every day, just in case. Spring is <span class="word-hl" data-tr="agradable">pleasant</span> with <span class="word-hl" data-tr="flores">flowers</span> everywhere. <span class="word-hl" data-tr="El otoño">Autumn</span> brings <span class="word-hl" data-tr="hojas rojas y naranjas">red and orange leaves</span>. The weather <span class="word-hl" data-tr="raramente">rarely</span> reaches extremes, which makes it <span class="word-hl" data-tr="confortable">comfortable</span> to live in.`,
        qs: [
            { q: "What do British people talk about a lot?", opts: ["Sports", "Food", "The weather"], a: 2, exp: '"People in Britain talk about the weather a lot."' },
            { q: "What is winter like in the UK?", opts: ["Hot and sunny", "Cold and rainy", "Warm and dry"], a: 1, exp: '"In winter, it is cold and it rains a lot."' },
            { q: "Why do many British people carry an umbrella?", opts: ["It is fashionable", "Just in case it rains", "It is required by law"], a: 1, exp: '"Many British people carry an umbrella every day, just in case."' },
            { q: "What does autumn bring?", opts: ["Snow", "Flowers", "Red and orange leaves"], a: 2, exp: '"Autumn brings red and orange leaves."' },
            { q: "What makes the UK comfortable to live in?", opts: ["The sunshine", "Extreme temperatures", "Weather rarely reaches extremes"], a: 2, exp: '"The weather rarely reaches extremes, which makes it comfortable to live in."' }
        ]
    }
];

// ============================================================
// WRITING EXERCISES
// ============================================================
const writingExercises = [
    {
        id: 'word_order_basic',
        title: "Ordena las palabras",
        type: 'order',
        typeLabel: 'Sintaxis',
        typeColor: '#3182CE',
        desc: "Forma oraciones correctas con las palabras dadas.",
        tasks: [
            { prompt: "Forma una frase con estas palabras:", words: ["is", "She", "a", "teacher"], answer: "She is a teacher", tip: "Sujeto + TO BE + artículo + profesión" },
            { prompt: "Forma una frase con estas palabras:", words: ["every", "I", "breakfast", "have", "day"], answer: "I have breakfast every day", tip: "Sujeto + verbo + objeto + tiempo" },
            { prompt: "Forma una frase con estas palabras:", words: ["are", "at", "They", "park", "the"], answer: "They are at the park", tip: "Sujeto + TO BE + preposición + artículo + lugar" },
            { prompt: "Forma una frase con estas palabras:", words: ["not", "does", "speak", "He", "Spanish"], answer: "He does not speak Spanish", tip: "Sujeto + does not + verbo en base" },
            { prompt: "Forma una frase con estas palabras:", words: ["reading", "now?", "you", "Are"], answer: "Are you reading now?", tip: "TO BE + sujeto + verbo-ING + tiempo?" },
        ]
    },
    {
        id: 'sentence_transform',
        title: "Transforma las frases",
        type: 'transform',
        typeLabel: 'Gramática',
        typeColor: '#805AD5',
        desc: "Convierte frases del simple al continuo y viceversa.",
        tasks: [
            { prompt: 'Escribe en presente continuo: "She reads a book."', answer: "She is reading a book", tip: "She + is + read+ing + objeto" },
            { prompt: 'Escribe en presente simple (hábito): "He is eating lunch every day."', answer: "He eats lunch every day", tip: "3ª persona singular: eat → eats" },
            { prompt: 'Escribe en negativo: "They play football."', answer: "They don't play football", tip: "They + don't + verbo en base" },
            { prompt: 'Escribe en interrogativo: "She speaks French."', answer: "Does she speak French?", tip: "Does + She + verbo en base + ?" },
            { prompt: 'Escribe en continuo: "We / study / English / now"', answer: "We are studying English now", tip: "We + are + study→studying + objeto + ahora" },
        ]
    },
    {
        id: 'free_writing',
        title: "Escritura libre guiada",
        type: 'free',
        typeLabel: 'Producción',
        typeColor: '#1D9E75',
        desc: "Escribe párrafos propios con apoyo de estructura y vocabulario.",
        tasks: [
            {
                prompt: 'Preséntate en inglés. Incluye: tu nombre, tu edad, de dónde eres y qué te gusta. Usa al menos 4 oraciones.',
                hint: 'My name is... · I am ... years old. · I am from... · I like/love...',
                minWords: 20,
                example: 'My name is Carlos. I am 22 years old. I am from Colombia. I like music and football.'
            },
            {
                prompt: 'Describe a un miembro de tu familia. ¿Cómo se llama? ¿Qué hace? ¿Cómo es?',
                hint: 'My [father/mother/sister...] is... · He/She works as a... · He/She is very...',
                minWords: 20,
                example: 'My mother is Ana. She is a nurse. She is kind and patient. She works at a hospital in the city.'
            },
            {
                prompt: 'Describe tu rutina diaria. ¿A qué hora te levantas? ¿Qué haces por la mañana?',
                hint: 'I get up at... · I have breakfast at... · I usually... every day.',
                minWords: 25,
                example: 'I get up at 7 o\'clock every day. I have breakfast at 7:30. I usually drink coffee and eat bread. I go to work at 8.'
            },
        ]
    }
];

// ============================================================
// VOCABULARY TOPICS
// ============================================================
const vocabTopics = [
    {
        id: 'colors',
        title: 'Los Colores',
        icon: '🎨',
        count: 12,
        words: [
            { en: 'black', es: 'negro', example: 'The cat is black.' },
            { en: 'white', es: 'blanco', example: 'Snow is white.' },
            { en: 'red', es: 'rojo', example: 'The apple is red.' },
            { en: 'blue', es: 'azul', example: 'The sky is blue.' },
            { en: 'green', es: 'verde', example: 'The grass is green.' },
            { en: 'yellow', es: 'amarillo', example: 'The sun is yellow.' },
            { en: 'orange', es: 'naranja', example: 'The fruit is orange.' },
            { en: 'purple', es: 'morado', example: 'The flower is purple.' },
            { en: 'pink', es: 'rosa', example: 'The shirt is pink.' },
            { en: 'brown', es: 'marrón', example: 'The dog is brown.' },
            { en: 'grey', es: 'gris', example: 'The sky is grey today.' },
            { en: 'navy', es: 'azul marino', example: 'He wears a navy suit.' }
        ]
    },
    {
        id: 'family',
        title: 'La Familia',
        icon: '👨‍👩‍👧',
        count: 16,
        words: [
            { en: 'father', es: 'padre', example: 'My father is a doctor.' },
            { en: 'mother', es: 'madre', example: 'My mother is a teacher.' },
            { en: 'brother', es: 'hermano', example: 'I have one brother.' },
            { en: 'sister', es: 'hermana', example: 'My sister is older than me.' },
            { en: 'son', es: 'hijo', example: 'They have two sons.' },
            { en: 'daughter', es: 'hija', example: 'Their daughter is a doctor.' },
            { en: 'grandfather', es: 'abuelo', example: 'My grandfather is retired.' },
            { en: 'grandmother', es: 'abuela', example: 'My grandmother cooks very well.' },
            { en: 'uncle', es: 'tío', example: 'My uncle lives in London.' },
            { en: 'aunt', es: 'tía', example: 'My aunt has three children.' },
            { en: 'cousin', es: 'primo/a', example: 'I play with my cousin.' },
            { en: 'husband', es: 'marido', example: 'Her husband is kind.' },
            { en: 'wife', es: 'esposa', example: 'His wife is a nurse.' },
            { en: 'nephew', es: 'sobrino', example: 'My nephew is five years old.' },
            { en: 'niece', es: 'sobrina', example: 'My niece loves dancing.' },
            { en: 'twins', es: 'gemelos', example: 'They are twins.' }
        ]
    },
    {
        id: 'people',
        title: 'Las Personas',
        icon: '👤',
        count: 12,
        words: [
            { en: 'baby', es: 'bebé', example: 'The baby is sleeping.' },
            { en: 'child', es: 'niño/a', example: 'The child is playing.' },
            { en: 'teenager', es: 'adolescente', example: 'She is a teenager.' },
            { en: 'adult', es: 'adulto', example: 'Adults pay full price.' },
            { en: 'woman', es: 'mujer', example: 'The woman is reading.' },
            { en: 'man', es: 'hombre', example: 'The man is working.' },
            { en: 'girl', es: 'chica', example: 'The girl has long hair.' },
            { en: 'boy', es: 'chico', example: 'The boy runs fast.' },
            { en: 'lady', es: 'señora', example: 'The lady is very elegant.' },
            { en: 'gentleman', es: 'caballero', example: 'He is a true gentleman.' },
            { en: 'youth', es: 'joven', example: 'The youth of today are creative.' },
            { en: 'elderly', es: 'anciano/a', example: 'The elderly man reads the newspaper.' }
        ]
    },
    {
        id: 'greetings',
        title: 'Saludos',
        icon: '👋',
        count: 12,
        words: [
            { en: 'Good morning', es: 'Buenos días', example: 'Good morning, how are you?' },
            { en: 'Good afternoon', es: 'Buenas tardes', example: 'Good afternoon, Mrs Smith.' },
            { en: 'Good night', es: 'Buenas noches', example: 'Good night, sleep well!' },
            { en: 'Goodbye', es: 'Adiós', example: 'Goodbye, see you tomorrow.' },
            { en: 'See you later', es: 'Hasta luego', example: 'See you later, Tom!' },
            { en: 'How are you?', es: '¿Cómo estás?', example: 'Hi! How are you?' },
            { en: 'Fine, thanks', es: 'Bien, gracias', example: 'Fine, thanks. And you?' },
            { en: 'Nice to meet you', es: 'Mucho gusto', example: 'Nice to meet you, I\'m Ana.' },
            { en: 'What\'s your name?', es: '¿Cómo te llamas?', example: 'What\'s your name?' },
            { en: 'My name is...', es: 'Me llamo...', example: 'My name is Carlos.' },
            { en: 'I\'m from...', es: 'Soy de...', example: 'I\'m from Colombia.' },
            { en: 'Best wishes', es: 'Mis mejores deseos', example: 'Best wishes to your family.' }
        ]
    },
    {
        id: 'numbers_vocab',
        title: 'Números',
        icon: '🔢',
        count: 12,
        words: [
            { en: 'one', es: '1', example: 'I have one dog.' },
            { en: 'five', es: '5', example: 'There are five people.' },
            { en: 'ten', es: '10', example: 'I am ten years old.' },
            { en: 'fifteen', es: '15', example: 'She is fifteen.' },
            { en: 'twenty', es: '20', example: 'I have twenty books.' },
            { en: 'thirty', es: '30', example: 'He is thirty years old.' },
            { en: 'fifty', es: '50', example: 'There are fifty students.' },
            { en: 'a hundred', es: '100', example: 'A hundred people came.' },
            { en: 'a thousand', es: '1,000', example: 'A thousand books.' },
            { en: 'first', es: '1º primero', example: 'She is first in class.' },
            { en: 'second', es: '2º segundo', example: 'He is in second place.' },
            { en: 'third', es: '3º tercero', example: 'This is the third time.' }
        ]
    }
];
