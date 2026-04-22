// data.js - BASE DE DATOS MASIVA Y MULTI-HABILIDAD

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
            { type: 'choice', q: "There were much people ___ his funeral.", opts: ["in", "at", "inside"], a: "at" },
            { type: 'write', q: "I have a meeting ___ the morning.", a: "in" },
            { type: 'choice', q: "They arrived ___ London yesterday.", opts: ["in", "at", "on"], a: "in" },
            { type: 'order', q: "Ordena la frase:", words: ["are", "We", "home.", "at"], a: "We are at home." },
            { type: 'write', q: "She was born ___ 1995.", a: "in" },
            { type: 'choice', q: "The party is ___ midnight.", opts: ["in", "on", "at"], a: "at" }
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
        id: 'verbs', title: "3. Verbos Base (Be, Have, Do)", icon: 'command', color: '#E53E3E',
        theory: `<h3>Be, Have, Do</h3>
                <p><b>Be:</b> am, is, are. <b>Have:</b> have, has. <b>Do:</b> do, does (3ra persona singular usa 's').</p>`,
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
        id: 'present_simple', title: "4. Presente Simple", icon: 'sun', color: '#38B2AC',
        theory: `<h3>Presente Simple (Rutinas y Hechos)</h3>
                <div class="t-box" style="border-color: #38B2AC; background: #E6FFFA; margin-top: 10px;">
                    <p>Se usa para hábitos. En afirmativo, agrega <b>-s</b> o <b>-es</b> a la 3ra persona (He, She, It).<br>
                    Para negar/preguntar usamos <b>don't / doesn't</b>.</p>
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
        id: 'present_cont', title: "5. Presente Continuo", icon: 'activity', color: '#805AD5',
        theory: `<h3>Presente Continuo (Acciones en Progreso)</h3>
                <div class="t-box" style="border-color: #805AD5; background: #FAF5FF; margin-top: 10px;">
                    <p>Se usa para cosas que suceden <b>AHORA</b>. Sintaxis: <b>Sujeto + TO BE + Verbo-ING</b>.</p>
                </div>`,
        exercises: [
            { type: 'choice', q: "Look! The baby ___.", opts: ["sleeps", "is sleeping", "sleep"], a: "is sleeping" },
            { type: 'write', q: "Escribe el auxiliar: We ___ watching a film on TV.", a: "are" },
            { type: 'order', q: "Ordena la frase:", words: ["a", "I", "letter.", "am", "writing"], a: "I am writing a letter." },
            { type: 'choice', q: "She ___ for a job at the moment.", opts: ["is looking", "looks", "look"], a: "is looking" },
            { type: 'write', q: "Agrega ING al verbo (run): The dog is ___", a: "running" },
            { type: 'order', q: "Ordena la frase:", words: ["not", "are", "listening.", "They"], a: "They are not listening." },
            { type: 'choice', q: "What ___ you doing right now?", opts: ["do", "are", "is"], a: "are" },
            { type: 'write', q: "Traduce 'Estoy comiendo': I am ___", a: "eating" },
            { type: 'order', q: "Ordena la pregunta:", words: ["he", "Is", "photocopying?", "doing"], a: "Is he doing photocopying?" },
            { type: 'choice', q: "The kids ___ playing in the garden.", opts: ["is", "are", "am"], a: "are" },
            { type: 'write', q: "Escribe el verbo+ING (study): He is ___ for his exam.", a: "studying" },
            { type: 'choice', q: "I ___ not talking to you.", opts: ["am", "is", "are"], a: "am" },
            { type: 'order', q: "Ordena la frase:", words: ["raining", "It", "is", "outside."], a: "It is raining outside." },
            { type: 'write', q: "Completa: Why are you ___ (cry)?", a: "crying" },
            { type: 'choice', q: "My mom ___ cooking dinner now.", opts: ["are", "is", "am"], a: "is" }
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
            { type: 'write', q: "Completa (Listen/Now): Shh! I am ___ to the radio.", a: "listening" },
            { type: 'choice', q: "He always ___ his car on Sundays.", opts: ["is washing", "washes", "wash"], a: "washes" },
            { type: 'order', q: "Ordena la frase:", words: ["every", "I", "read", "day."], a: "I read every day." },
            { type: 'write', q: "Completa (Work/Usually): She usually ___ in London.", a: "works" },
            { type: 'choice', q: "Look! It ___ outside.", opts: ["rains", "is raining", "rain"], a: "is raining" },
            { type: 'order', q: "Ordena la frase:", words: ["moment.", "reading", "He", "is", "at", "the"], a: "He is reading at the moment." },
            { type: 'choice', q: "They never ___ to the cinema.", opts: ["are going", "goes", "go"], a: "go" },
            { type: 'write', q: "Completa (Play/Now): They are ___ football right now.", a: "playing" },
            { type: 'choice', q: "She ___ (visit) her parents every weekend.", opts: ["visits", "is visiting", "visit"], a: "visits" },
            { type: 'order', q: "Ordena la frase:", words: ["now.", "working", "We", "are"], a: "We are working now." },
            { type: 'write', q: "Completa (Drive/Always): He always ___ carefully.", a: "drives" },
            { type: 'choice', q: "Why ___ you wearing a coat? It's hot!", opts: ["do", "are", "is"], a: "are" },
            { type: 'write', q: "Completa (Eat/Usually): I usually ___ a sandwich for lunch.", a: "eat" },
            { type: 'order', q: "Ordena la frase:", words: ["singing", "is", "shower.", "She", "in", "the"], a: "She is singing in the shower." }
        ]
    }
};