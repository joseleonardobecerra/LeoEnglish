// data.js v4.0 — CURRÍCULO OFICIAL A1-A2 (Master Edition)
// Alineado al Marco Europeo de Referencia para las Lenguas (MCER)

// ============================================================
// MÓDULOS DE GRAMÁTICA (RUTA GUIADA)
// ============================================================
const modulesData = {

  // ==================== NIVEL A1 ==================== //

  to_be_pronouns: {
    id:'to_be_pronouns', title:'Welcome to English: "To Be" & Pronouns', icon:'users', color:'#D97706',
    theory:`
      <h3>Los pronombres en inglés</h3>
      <p>Los pronombres reemplazan a los sustantivos. En inglés hay varios tipos y cada uno tiene su función exacta en la oración.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#D97706;background:#FFFBEB">
          <strong style="color:#78350F">Sujeto — Subject pronouns</strong>
          <small>Hacen la acción. Van ANTES del verbo.<br>
          <b>I</b> · <b>you</b> · <b>he</b> · <b>she</b> · <b>it</b> · <b>we</b> · <b>they</b><br>
          "<u>She</u> is a doctor." / "<u>We</u> are friends."</small>
        </div>
        <div class="t-box" style="border-color:#2563EB;background:#EFF6FF">
          <strong style="color:#1E3A8A">Objeto — Object pronouns</strong>
          <small>Reciben la acción. Van DESPUÉS del verbo o preposición.<br>
          <b>me</b> · <b>you</b> · <b>him</b> · <b>her</b> · <b>it</b> · <b>us</b> · <b>them</b><br>
          "I love <u>her</u>." / "He helps <u>us</u>." / "Talk to <u>me</u>."</small>
        </div>
      </div>
      <h3 style="margin-top:20px">El verbo To Be</h3>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
          <strong style="color:#742A2A">TO BE — ser / estar</strong>
          <small>
            I <b>am</b> (I'm) · You <b>are</b> (You're) · He/She/It <b>is</b><br>
            We/You/They <b>are</b><br>
            <b>Neg:</b> isn't · aren't · am not<br>
            <b>Preg:</b> Are you...? / Is she...?
          </small>
        </div>
      </div>
      <div class="tip-callout"><i data-lucide="lightbulb"></i>
        <span><strong>IT:</strong> Para animales (sexo desconocido), objetos, tiempo meteorológico y frases impersonales. "It is raining." / "It is cold." / "It is ten o'clock."</span>
      </div>`,
    exercises:[
      {type:'choice',q:'___ is a teacher. She loves her job.',opts:['He','She','They'],a:'She',exp:'"She" para referirse a una mujer.'},
      {type:'choice',q:'Tom is my friend. I like ___ a lot.',opts:['him','her','them'],a:'him',exp:'"Him" = pronombre objeto masculino.'},
      {type:'choice',q:'___ is cold today. Bring a jacket!',opts:['He','She','It'],a:'It',exp:'"It" para el tiempo meteorológico.'},
      {type:'choice',q:'Give the book to ___, please. (a ella)',opts:['she','her','hers'],a:'her',exp:'"Her" = pronombre objeto femenino.'},
      {type:'write',q:'Completa: Tom and Mary are my neighbours. ___ are very kind.',a:'They',exp:'"They" para dos o más personas.'},
      {type:'write',q:'Completa: I don\'t know ___. Who is she? (a ella → objeto)',a:'her',exp:'"Her" = pronombre objeto femenino.'},
      {type:'write',q:'Completa: ___ raining outside. Close the window!',a:"It's",exp:'"It\'s" (It is) → impersonal meteorológico.'},
      {type:'order',q:'Ordena la frase:',words:['loves','He','her.'],a:'He loves her.',exp:'"He" = sujeto; "her" = objeto femenino.'},
      {type:'order',q:'Ordena la frase:',words:['told','She','story.','us','a'],a:'She told us a story.',exp:'"Us" = pronombre objeto de "we".'},
      {type:'choice',q:'Can you help ___? We need assistance.',opts:['we','our','us'],a:'us',exp:'"Us" = pronombre objeto de "we".'}
    ]
  },

  articles_dem: {
    id:'articles_dem', title:'Naming Things: Articles', icon:'type', color:'#7C3AED',
    theory:`
      <h3>Los artículos en inglés</h3>
      <p>En inglés hay dos tipos: el <strong>definido (the)</strong> y el <strong>indefinido (a/an)</strong>. Son obligatorios y su uso es diferente al español.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
          <strong style="color:#4C1D95">THE — artículo definido</strong>
          <small>Cuando hablamos de algo <em>específico</em>, ya conocido o único en el mundo.<br>
          "Close <u>the</u> door." (sabemos qué puerta) · "<u>The</u> sun rises in the east." (solo hay uno)<br>
          Con superlativo: "She is <u>the</u> best student."</small>
        </div>
        <div class="t-box" style="border-color:#2563EB;background:#EFF6FF">
          <strong style="color:#1E3A8A">A — antes de sonido consonante</strong>
          <small>Con sustantivos singulares contables no específicos.<br>
          a book · a car · a university (suena "yu") · a house · a European<br>
          "She is <u>a</u> doctor." (profesión) · "I need <u>a</u> pen."</small>
        </div>
        <div class="t-box" style="border-color:#059669;background:#ECFDF5">
          <strong style="color:#064E3B">AN — antes de sonido vocal</strong>
          <small>Cuando la siguiente palabra empieza por <em>sonido</em> vocal (a,e,i,o,u).<br>
          an apple · an hour (h muda) · an umbrella · an egg · an honest man<br>
          "He is <u>an</u> actor." · "It takes <u>an</u> hour."</small>
        </div>
      </div>
      <div class="tip-callout"><i data-lucide="alert-circle"></i>
        <span><strong>Sin artículo (zero article):</strong> nombres propios (Spain, Tom), meses (in January), comidas en general (I have <em>breakfast</em>), idiomas (She speaks English).</span>
      </div>`,
    exercises:[
      {type:'choice',q:'She wants to be ___ doctor when she grows up.',opts:['a','an','the'],a:'a',exp:'"Doctor" empieza por consonante → "a doctor".'},
      {type:'choice',q:'___ Eiffel Tower is in Paris.',opts:['A','An','The'],a:'The',exp:'Monumento único y conocido → "The Eiffel Tower".'},
      {type:'choice',q:'I have ___ umbrella in my bag.',opts:['a','an','the'],a:'an',exp:'"Umbrella" empieza por vocal (u) → "an umbrella".'},
      {type:'choice',q:'He is ___ honest man.',opts:['a','an','the'],a:'an',exp:'"Honest" tiene H muda, suena vocal ("onest") → "an honest man".'},
      {type:'choice',q:'We saw ___ elephant at the zoo.',opts:['a','an','the'],a:'an',exp:'"Elephant" empieza por vocal (e) → "an elephant".'},
      {type:'write',q:'Completa con "a", "an" o "the": ___ sun rises in the east.',a:'The',exp:'El sol es único → "The sun".'},
      {type:'write',q:'Complete: She is ___ actress. She works in Hollywood.',a:'an',exp:'"Actress" empieza por vocal → "an actress".'},
      {type:'order',q:'Ordena la frase:',words:['an','She','is','engineer.'],a:'She is an engineer.',exp:'"An" porque "engineer" empieza por sonido vocal (e).'},
      {type:'choice',q:'I usually have ___ breakfast at 7 o\'clock.',opts:['a','an','—(sin artículo)'],a:'—(sin artículo)',exp:'Las comidas en general no llevan artículo en inglés: "have breakfast".'},
      {type:'choice',q:'___ Pacific Ocean is the largest ocean in the world.',opts:['A','An','The'],a:'The',exp:'Océanos y mares llevan siempre "The".'}
    ]
  },

  possessives: {
    id:'possessives', title:'My World: Possessives', icon:'key', color:'#9F7AEA',
    theory:`
      <h3>Indicar propiedad o relación</h3>
      <p>Hay dos formas principales de decir que algo le pertenece a alguien.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#059669;background:#ECFDF5">
          <strong style="color:#064E3B">Posesivos adjetivos</strong>
          <small>Van ANTES del sustantivo. Indican pertenencia.<br>
          <b>my</b> · <b>your</b> · <b>his</b> · <b>her</b> · <b>its</b> · <b>our</b> · <b>their</b><br>
          "<u>My</u> book." / "<u>Their</u> house." / "<u>Her</u> car."</small>
        </div>
        <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
          <strong style="color:#4C1D95">Posesivos pronombres</strong>
          <small>Solos, SIN sustantivo detrás.<br>
          <b>mine</b> · <b>yours</b> · <b>his</b> · <b>hers</b> · <b>ours</b> · <b>theirs</b><br>
          "This book is <u>mine</u>." / "Is this bag <u>yours</u>?"</small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'This is my book. That one is ___.',opts:['your','yours','you'],a:'yours',exp:'"Yours" = pronombre posesivo, solo, sin sustantivo.'},
      {type:'choice',q:'My sister and I love ___ city.',opts:['our','ours','us'],a:'our',exp:'"Our" = adjetivo posesivo (antes del sustantivo "city").'},
      {type:'choice',q:'Those keys are not ___. They are mine.',opts:['your','you','yours'],a:'yours',exp:'"Yours" = pronombre posesivo (sin sustantivo).'},
      {type:'write',q:'Completa: This is ___ car. (de nosotros → adjetivo posesivo)',a:'our',exp:'"Our" = adjetivo posesivo de "we".'},
      {type:'write',q:'Completa: The children are doing ___ homework.',a:'their',exp:'"Their" = adjetivo posesivo de "they".'},
      {type:'order',q:'Ordena la frase:',words:['is','This','mine.','book'],a:'This book is mine.',exp:'"Mine" = pronombre posesivo de "I".'},
      {type:'choice',q:'I called Maria but ___ phone was off.',opts:['her','she','hers'],a:'her',exp:'"Her phone" = adjetivo posesivo + sustantivo.'},
      {type:'write',q:'A: "Is this your bag?" B: "Yes, it\'s ___."',a:'mine',exp:'"Mine" = el/la mío/a (pronombre posesivo).'},
      {type:'write',q:'A: "Whose book is this?" B: "It\'s ___." (de ella)',a:'hers',exp:'"Hers" = pronombre posesivo femenino (de she).'},
      {type:'order',q:'Ordena la frase:',words:['helped','me','She','homework.','with','my'],a:'She helped me with my homework.',exp:'"my homework" = adjetivo posesivo.'}
    ]
  },

  there_is_are: {
    id:'there_is_are', title:'Existence: There is / There are', icon:'box', color:'#ED8936',
    theory:`
      <h3>Describir lo que existe</h3>
      <p>En español usamos "Hay" para singular y plural. En inglés, diferenciamos si hablamos de una cosa (<strong>There is</strong>) o varias (<strong>There are</strong>).</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#ED8936;background:#FEFCBF">
          <strong style="color:#7B341E">Singular / Incontables (There is)</strong>
          <small>
            (+) <b>There is</b> a pen on the desk. (Hay un bolígrafo)<br>
            (-) <b>There isn't</b> any water. (No hay agua)<br>
            (?) <b>Is there</b> a bank near here?<br>
            <em>Contracción: There's</em>
          </small>
        </div>
        <div class="t-box" style="border-color:#3182CE;background:#EBF8FF">
          <strong style="color:#1A365D">Plural (There are)</strong>
          <small>
            (+) <b>There are</b> three cars.<br>
            (-) <b>There aren't</b> any students.<br>
            (?) <b>Are there</b> many apples?<br>
            <em>Nota: "There are" NO se puede contraer.</em>
          </small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'___ a laptop on the desk.',opts:['There is','There are','Is there'],a:'There is',exp:'Laptop es singular → There is.'},
      {type:'choice',q:'___ any apples in the fridge?',opts:['Is there','There are','Are there'],a:'Are there',exp:'Pregunta en plural → Are there?'},
      {type:'write',q:'Completa la negación plural: There ___ any dogs in the park.',a:"aren't",exp:'Plural negativo → There aren\'t.'},
      {type:'choice',q:'___ some water in the glass.',opts:['There is','There are','Are there'],a:'There is',exp:'El agua (water) es incontable, se trata como singular → There is.'},
      {type:'write',q:'Completa la pregunta: ___ there a supermarket near here?',a:'Is',exp:'Supermarket es singular → Is there...?'},
      {type:'order',q:'Ordena la frase:',words:['are','There','two','beds','room.','in the'],a:'There are two beds in the room.',exp:'Plural (two beds) → There are.'}
    ]
  },

  present_simple:{
    id:'present_simple', title:'Daily Life: Present Simple', icon:'sun', color:'#38B2AC',
    theory:`
      <h3>Presente Simple — Rutinas y Verdades</h3>
      <p>El <strong>presente simple</strong> describe hábitos, rutinas, verdades generales y situaciones permanentes. Es el tiempo más frecuente del inglés.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#38B2AC;background:#E6FFFA">
          <strong style="color:#1D4044">Afirmativo (+)</strong>
          <small>I/You/We/They + <b>verbo base</b><br>
          He/She/It + <b>verbo + S</b><br>
          "I <u>eat</u> breakfast." / "She <u>eats</u> breakfast."<br>
          "They <u>work</u> here." / "He <u>works</u> here."</small>
        </div>
        <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
          <strong style="color:#742A2A">Negativo (–)</strong>
          <small>I/You/We/They + <b>don't</b> + verbo base<br>
          He/She/It + <b>doesn't</b> + verbo base<br>
          "I <u>don't</u> like fish."<br>
          "She <u>doesn't</u> drive."</small>
        </div>
        <div class="t-box" style="border-color:#D97706;background:#FFFBEB">
          <strong style="color:#78350F">Interrogativo (?)</strong>
          <small><b>Do</b> + I/you/we/they + verbo base?<br>
          <b>Does</b> + he/she/it + verbo base?<br>
          "<u>Do</u> you play football?"<br>
          "<u>Does</u> he speak French?"</small>
        </div>
      </div>
      <div class="theory-grid" style="margin-top:12px">
        <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
          <strong style="color:#4C1D95">Reglas ortográficas (3ª persona +s)</strong>
          <small>
            Normal: +s → works, reads, likes, eats<br>
            -ch/-sh/-x/-s/-o: +es → watches, goes, fixes, washes<br>
            Vocal + y: +s → plays, says, enjoys<br>
            Consonante + y → ies: studies, flies, tries, carries<br>
            <b>Irregulares:</b> be→<b>is</b> · have→<b>has</b> · do→<b>does</b>
          </small>
        </div>
        <div class="t-box" style="border-color:#059669;background:#ECFDF5">
          <strong style="color:#064E3B">Adverbios de frecuencia</strong>
          <small>
            100% <b>always</b> → <b>usually</b> → <b>often</b> → <b>sometimes</b> → <b>rarely</b> → <b>never</b> 0%<br>
            Posición: entre sujeto y verbo principal.<br>
            "She <u>always</u> arrives on time."<br>
            "I <u>never</u> eat meat." / "He <u>often</u> travels."
          </small>
        </div>
      </div>
      <div class="tip-callout"><i data-lucide="lightbulb"></i>
        <span><strong>Señales de tiempo:</strong> always, usually, often, sometimes, rarely, never, every day/week/year, on Mondays, in the morning, at the weekend, once a week.</span>
      </div>`,
    exercises:[
      {type:'choice',q:'She ___ to music every evening.',opts:['listen','listens','is listening'],a:'listens',exp:'"She" (3ª persona) → listen + s = "listens". Hábito.'},
      {type:'choice',q:'I ___ coffee. I prefer tea.',opts:["don't like","doesn't like","am not liking"],a:"don't like",exp:'"I" → "don\'t" en negaciones. Presente simple.'},
      {type:'choice',q:'___ he speak French?',opts:['Do','Does','Is'],a:'Does',exp:'"He" (3ª persona) → "Does" en preguntas.'},
      {type:'choice',q:'My father ___ TV every night.',opts:['watch','watches','is watching'],a:'watches',exp:'"Father" (3ª persona) → watch+es = "watches".'},
      {type:'choice',q:'They ___ football on Saturdays.',opts:['plays','play','is playing'],a:'play',exp:'"They" → sin -s. Hábito semanal = presente simple.'},
      {type:'choice',q:'The sun ___ in the east and sets in the west.',opts:['rise','rises','is rising'],a:'rises',exp:'Verdad universal: "The sun rises". 3ª persona → +s.'},
      {type:'choice',q:'___ your parents live near here?',opts:['Do','Does','Are'],a:'Do',exp:'"Your parents" (They) → "Do" en preguntas.'},
      {type:'choice',q:'Water ___ at 100 degrees Celsius.',opts:['boil','boils','is boiling'],a:'boils',exp:'Verdad científica → presente simple. 3ª persona → boils.'},
      {type:'write',q:'Escribe el verbo: He ___ (study) English every day.',a:'studies',exp:'"study" → consonante+y → studies. 3ª persona.'},
      {type:'write',q:'Escribe el verbo: The bus ___ (leave) at 8:30.',a:'leaves',exp:'"leave" → 3ª persona → leaves.'},
      {type:'write',q:'Negativo: "She likes coffee." → "She ___ coffee."',a:"doesn't like",exp:'"She doesn\'t like" — negación 3ª persona.'},
      {type:'write',q:'Pregunta: "___ they live in Madrid?" (Do/Does)',a:'Do',exp:'"They" → "Do they live...?"'},
      {type:'write',q:'Escribe el verbo: He ___ (go) to the gym on Mondays.',a:'goes',exp:'"go" → 3ª persona → goes (go+es).'},
      {type:'write',q:'Negativo: "I like fish." → "I ___ fish."',a:"don't like",exp:'"I don\'t like" — negación 1ª persona.'},
      {type:'order',q:'Ordena la frase:',words:['usually','I','early.','wake up'],a:'I usually wake up early.',exp:'"Usually" va entre sujeto y verbo.'},
      {type:'order',q:'Ordena la negación:',words:["work","doesn't","She","here."],a:"She doesn't work here.",exp:'"She doesn\'t" + verbo base.'},
      {type:'order',q:'Ordena la pregunta:',words:['English?','speak','Does','she'],a:'Does she speak English?',exp:'Does + sujeto + verbo base.'},
      {type:'order',q:'Ordena la frase:',words:['play','They','football','weekends.','on'],a:'They play football on weekends.',exp:'Hábito semanal → presente simple.'},
      {type:'order',q:'Ordena la frase:',words:['never','He','meat.','eats'],a:'He never eats meat.',exp:'"Never" entre sujeto y verbo.'},
      {type:'choice',q:'How often ___ she go to the gym?',opts:['do','does','is'],a:'does',exp:'"She" (3ª persona) → "does" en preguntas.'},
    ]
  },

  present_cont:{
    id:'present_cont', title:'Right Now: Present Continuous', icon:'activity', color:'#805AD5',
    theory:`
      <h3>Presente Continuo — Acciones en progreso</h3>
      <p>El presente continuo describe acciones que ocurren <strong>ahora mismo</strong> o de forma temporal. Estructura: <strong>TO BE + verbo-ING</strong>.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#805AD5;background:#FAF5FF">
          <strong style="color:#4C1D95">Formas</strong>
          <small>
            Afirm: I <b>am</b> · He/She/It <b>is</b> · We/You/They <b>are</b> + -ING<br>
            Neg: I'm <b>not</b> · He <b>isn't</b> · They <b>aren't</b> + -ING<br>
            Preg: <b>Am</b> I · <b>Is</b> he · <b>Are</b> they + -ING?
          </small>
        </div>
        <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
          <strong style="color:#742A2A">Reglas del -ING</strong>
          <small>
            Normal: read→read<b>ing</b> · talk→talk<b>ing</b><br>
            -e muda: write→writ<b>ing</b> · come→com<b>ing</b><br>
            CVC corta: run→run<b>ning</b> · sit→sit<b>ting</b> · swim→swim<b>ming</b><br>
            -ie: lie→ly<b>ing</b> · die→dy<b>ing</b> · tie→ty<b>ing</b>
          </small>
        </div>
        <div class="t-box" style="border-color:#D97706;background:#FFFBEB">
          <strong style="color:#78350F">Usos del continuo</strong>
          <small>
            1. Ahora mismo: "Look! It <u>is raining</u>."<br>
            2. Período temporal: "I <u>am reading</u> a great book this week."<br>
            3. Cambios y tendencias: "Prices <u>are rising</u>."<br>
            4. Planes futuros: "I <u>am meeting</u> Tom tomorrow."
          </small>
        </div>
      </div>
      <h3 style="margin-top:20px">Simple vs. Continuo</h3>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#38B2AC;background:#E6FFFA">
          <strong style="color:#1D4044">SIMPLE → Hábito permanente</strong>
          <small>Señales: always, usually, every day, on Mondays, never<br>
          "She <u>drinks</u> coffee every morning." (hábito)<br>
          "Dogs <u>eat</u> meat." (verdad general)</small>
        </div>
        <div class="t-box" style="border-color:#805AD5;background:#FAF5FF">
          <strong style="color:#4C1D95">CONTINUO → Ahora / temporalmente</strong>
          <small>Señales: now, right now, at the moment, look!, today, this week<br>
          "She <u>is drinking</u> coffee right now." (este momento)<br>
          "I <u>am studying</u> hard this month." (temporalmente)</small>
        </div>
      </div>
      <div class="theory-grid" style="margin-top:12px">
        <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
          <strong style="color:#742A2A">⚠️ Verbos de estado (NUNCA en continuo)</strong>
          <small>
            <b>Sentidos:</b> see · hear · smell · taste · feel<br>
            <b>Emoción:</b> love · hate · like · want · need · prefer<br>
            <b>Mente:</b> know · think (opinar) · believe · understand · remember · forget<br>
            ✗ "I am knowing" → ✓ "I know"<br>
            ✗ "She is wanting" → ✓ "She wants"
          </small>
        </div>
      </div>
      <div class="example-block">
        <div class="ex-row"><div class="ex-en">I usually <u>drive</u> to work. / Today I <u>am taking</u> the bus.</div><div class="ex-es">Normalmente conduzco. / Hoy estoy cogiendo el autobús.</div></div>
        <div class="ex-row"><div class="ex-en">Look! It <u>is snowing</u>! But it rarely <u>snows</u> here.</div><div class="ex-es">¡Mira, está nevando! Pero raramente nieva aquí.</div></div>
      </div>
      <div class="tip-callout"><i data-lucide="lightbulb"></i>
        <span><strong>Truco:</strong> Si puedes añadir "right now" → usa continuo. Si puedes añadir "every day" → usa simple. "I <u>am reading</u> right now." / "I <u>read</u> every day."</span>
      </div>`,
    exercises:[
      {type:'choice',q:'Look! The baby ___.',opts:['sleeps','is sleeping','sleep'],a:'is sleeping',exp:'"Look!" → acción en este momento → continuo.'},
      {type:'choice',q:'She always ___ coffee in the morning.',opts:['is drinking','drinks','drink'],a:'drinks',exp:'"Always" → hábito → simple. "She drinks".'},
      {type:'choice',q:'I usually ___ coffee, but today I ___ tea.',opts:['drink / am drinking','am drinking / drink','drinks / drinking'],a:'drink / am drinking',exp:'"Usually" → simple. "Today" → continuo.'},
      {type:'choice',q:'He always ___ his car on Sundays.',opts:['is washing','washes','washing'],a:'washes',exp:'"Always" → hábito → presente simple.'},
      {type:'choice',q:'What ___ you doing right now?',opts:['do','are','is'],a:'are',exp:'"Right now" → continuo. "What are you doing?"'},
      {type:'choice',q:'The kids ___ playing in the garden at the moment.',opts:['is','are','am'],a:'are',exp:'"The kids" (ellos) → "are". Continuo con be + ING.'},
      {type:'choice',q:'I ___ not talking to you right now. I\'m busy.',opts:['am','is','are'],a:'am',exp:'"I" → "am". Continuo negativo: "I am not".'},
      {type:'choice',q:'They never ___ to the cinema. They prefer Netflix.',opts:['are going','goes','go'],a:'go',exp:'"Never" → hábito → simple. "They go".'},
      {type:'write',q:'Verbo+ING (run): The dog is ___.',a:'running',exp:'"run" → CVC (r-u-n) → doble consonante → running.'},
      {type:'write',q:'Verbo+ING (study): He is ___ for his exam.',a:'studying',exp:'"study" → termina en vocal+y → studying.'},
      {type:'write',q:'Verbo+ING (write): She is ___ a letter.',a:'writing',exp:'"write" → termina en -e muda → drop e → writing.'},
      {type:'write',q:'Completa (hábito, usually): She usually ___ (work) in London.',a:'works',exp:'Hábito con "usually" → simple. 3ª persona → works.'},
      {type:'write',q:'Completa (ahora): They ___ (play) football right now.',a:'are playing',exp:'"Right now" → continuo. They are playing.'},
      {type:'write',q:'Completa (hábito): He always ___ (drive) carefully.',a:'drives',exp:'"Always" → simple. 3ª persona → drives.'},
      {type:'order',q:'Ordena la frase:',words:['a','I','letter.','am','writing'],a:'I am writing a letter.',exp:'"I am + -ING" → presente continuo.'},
      {type:'order',q:'Ordena la frase:',words:['reading','He','is','moment.','the','at'],a:'He is reading at the moment.',exp:'"At the moment" → señal de continuo.'},
      {type:'order',q:'Ordena la frase:',words:['raining','It','is','outside.'],a:'It is raining outside.',exp:'"It is raining" → situación actual.'},
      {type:'order',q:'Ordena la frase:',words:['shower.','is','She','in','singing','the'],a:'She is singing in the shower.',exp:'"Is singing" → acción en progreso ahora.'},
      {type:'choice',q:'I ___ this music. It\'s great! (love)',opts:['am loving','loves','love'],a:'love',exp:'"Love" = verbo de estado → NUNCA en continuo → "I love".'},
      {type:'choice',q:'Look! It ___ outside! Quick, take an umbrella!',opts:['rains','rained','is raining'],a:'is raining',exp:'"Look!" → acción en este momento → continuo.'},
    ]
  },

  prepositions:{
    id:'prepositions', title:'Preposiciones (In, On, At)', icon:'target', color:'#3182CE',
    theory:`
      <h3>Preposiciones de tiempo y lugar</h3>
      <p><strong>ON, IN</strong> y <strong>AT</strong> son las preposiciones más usadas en inglés básico. Tienen reglas específicas según el tipo de tiempo o lugar.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#3182CE;background:#EBF8FF">
          <strong style="color:#1A365D">ON — días y superficies</strong>
          <small><b>Días:</b> on Monday · on 10th June · on Christmas Day<br>
          <b>Superficie:</b> on the table · on the first floor · on the wall<br>
          <b>Medios:</b> on TV · on the radio · on the internet · on the phone</small>
        </div>
        <div class="t-box" style="border-color:#38A169;background:#F0FFF4">
          <strong style="color:#1C4532">IN — períodos y espacios</strong>
          <small><b>Meses:</b> in June · in December<br>
          <b>Años / décadas:</b> in 1990 · in the 1980s<br>
          <b>Estaciones:</b> in summer · in winter · in spring<br>
          <b>Partes del día:</b> in the morning · in the afternoon · in the evening<br>
          <b>Lugares:</b> in London · in the box · in the room · in Spain</small>
        </div>
        <div class="t-box" style="border-color:#805AD5;background:#FAF5FF">
          <strong style="color:#322659">AT — puntos exactos</strong>
          <small><b>Horas:</b> at 7 o'clock · at midday · at midnight · at noon<br>
          <b>Lugares exactos:</b> at home · at school · at work · at the station<br>
          <b>Festividades:</b> at Christmas · at Easter · at New Year<br>
          <b>Fin de semana:</b> at the weekend (UK) / on the weekend (US)</small>
        </div>
      </div>
      <div class="example-block">
        <div class="ex-row"><div class="ex-en">I was born <u>in</u> 1998 <u>in</u> Bogotá.</div><div class="ex-es">Nací en 1998 en Bogotá.</div></div>
        <div class="ex-row"><div class="ex-en">We always go to church <u>on</u> Sundays.</div><div class="ex-es">Siempre vamos a la iglesia los domingos.</div></div>
        <div class="ex-row"><div class="ex-en">She gets up <u>at</u> 6 o'clock <u>in</u> the morning.</div><div class="ex-es">Se levanta a las 6 de la mañana.</div></div>
        <div class="ex-row"><div class="ex-en">The keys are <u>on</u> the table <u>next to</u> the door.</div><div class="ex-es">Las llaves están en la mesa al lado de la puerta.</div></div>
      </div>
      <div class="theory-grid" style="margin-top:16px">
        <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
          <strong style="color:#742A2A">Preposiciones de lugar (movimiento y posición)</strong>
          <small><b>next to</b> = al lado de · <b>behind</b> = detrás de<br>
          <b>in front of</b> = delante de · <b>between</b> = entre (dos cosas)<br>
          <b>opposite</b> = enfrente de · <b>near</b> = cerca de<br>
          <b>above</b> = encima de · <b>below</b> = debajo de<br>
          <b>into</b> = hacia dentro · <b>out of</b> = hacia fuera</small>
        </div>
      </div>
      <div class="tip-callout"><i data-lucide="lightbulb"></i>
        <span><strong>Truco AT→ON→IN:</strong> Piensa en círculos. AT = punto exacto (hora, lugar puntual). ON = superficie o día específico. IN = espacio grande (ciudad, mes, año, estación).</span>
      </div>`,
    exercises:[
      {type:'choice',q:'My flat is ___ the first floor.',opts:['in','on','at'],a:'on',exp:'Pisos de un edificio → ON. "On the first floor".'},
      {type:'choice',q:'We often go swimming ___ the summer.',opts:['on','in','at'],a:'in',exp:'Estaciones del año → IN. "In the summer".'},
      {type:'choice',q:'Peter goes to church ___ Christmas Day.',opts:['in','at','on'],a:'on',exp:'Día específico (Christmas Day) → ON.'},
      {type:'choice',q:'She gets up ___ 7 o\'clock every morning.',opts:['in','on','at'],a:'at',exp:'Horas exactas → AT. "At 7 o\'clock".'},
      {type:'choice',q:'I was born ___ 1998.',opts:['on','in','at'],a:'in',exp:'Años → IN. "In 1998".'},
      {type:'choice',q:'What time do you eat ___ the evening?',opts:['in','at','on'],a:'in',exp:'Partes del día → IN. "In the evening".'},
      {type:'choice',q:'They arrived ___ London yesterday.',opts:['in','at','on'],a:'in',exp:'Ciudades → IN. "In London".'},
      {type:'choice',q:'The party starts ___ midnight.',opts:['in','on','at'],a:'at',exp:'Medianoche es un punto exacto → AT.'},
      {type:'choice',q:'There is a nice picture ___ the wall.',opts:['in','on','at'],a:'on',exp:'Superficies → ON. "On the wall".'},
      {type:'choice',q:'The bank is ___ the chemist\'s and the post office.',opts:['next to','between','opposite'],a:'between',exp:'"Between" = entre dos elementos.'},
      {type:'write',q:'Completa: My birthday is ___ June.',a:'in',exp:'Meses → IN. "In June".'},
      {type:'write',q:'Completa: He is ___ home right now.',a:'at',exp:'"At home" es una expresión fija.'},
      {type:'write',q:'Completa: The keys are ___ the table.',a:'on',exp:'Superficie → ON. "On the table".'},
      {type:'write',q:'Completa: We met ___ Monday morning.',a:'on',exp:'Día de la semana → ON. "On Monday".'},
      {type:'write',q:'Completa: I will see you ___ the weekend.',a:'at',exp:'"At the weekend" (inglés británico).'},
      {type:'order',q:'Ordena la frase:',words:['in','My','is','birthday','June.'],a:'My birthday is in June.',exp:'Mes → IN.'},
      {type:'order',q:'Ordena la frase:',words:['at','are','We','home.'],a:'We are at home.',exp:'"At home" — lugar fijo y conocido.'},
      {type:'order',q:'Ordena la frase:',words:['the','lives','opposite','hotel','station.','The'],a:'The hotel is opposite the station.',exp:'"Opposite" = enfrente de.'},
      {type:'choice',q:'I have a meeting ___ Monday ___ 10 o\'clock.',opts:['on / at','in / at','at / on'],a:'on / at',exp:'Día → ON. Hora → AT.'},
      {type:'write',q:'Completa: She was born ___ the 5th of June ___ 1995.',a:'on in',exp:'Fecha con día → ON. Año → IN.'},
    ]
  },

  imperatives: {
    id:'imperatives', title:'Orders & Requests: Imperatives', icon:'megaphone', color:'#38B2AC',
    theory:`
      <h3>Dar órdenes, instrucciones o invitar</h3>
      <p>El imperativo es la forma más directa del inglés. <strong>No lleva sujeto (ni I, ni You).</strong></p>
      
      <div class="theory-grid">
        <div class="t-box" style="border-color:#38B2AC;background:#E6FFFA">
          <strong style="color:#1D4044">Afirmativo (+)</strong>
          <small>Usa el verbo base.<br>
          "<b>Open</b> the door." (Abre la puerta)<br>
          "<b>Listen</b> to me." (Escúchame)<br>
          "<b>Be</b> careful!" (Ten cuidado)</small>
        </div>
        <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
          <strong style="color:#742A2A">Negativo (-)</strong>
          <small>Siempre usa "Don't".<br>
          "<b>Don't open</b> the door." (No abras)<br>
          "<b>Don't be</b> late." (No llegues tarde)</small>
        </div>
      </div>
      <div class="tip-callout"><i data-lucide="coffee"></i>
        <span><strong>I'd like:</strong> Para pedir cosas educadamente no usamos el imperativo (no digas "Give me water"). Usamos <strong>"I'd like"</strong> (Me gustaría).<br>
        "<u>I'd like</u> a coffee, please."</span>
      </div>`,
    exercises:[
      {type:'choice',q:'___ the window, please. It is hot.',opts:['You open','Open','Opening'],a:'Open',exp:'Imperativo afirmativo: solo el verbo.'},
      {type:'choice',q:'___ touch that! It\'s hot!',opts:["Don't","Not","No"],a:"Don't",exp:'Imperativo negativo siempre usa "Don\'t".'},
      {type:'choice',q:'In a restaurant: "___ a table for two, please."',opts:['I want','Give me',"I'd like"],a:"I'd like",exp:'Para pedir educadamente usamos "I\'d like".'},
      {type:'choice',q:'___ quiet! The baby is sleeping.',opts:['Be','Are','Is'],a:'Be',exp:'Imperativo del verbo to be es "Be".'},
      {type:'write',q:'Completa la negación: ___ forget your keys!',a:"Don't",exp:'Imperativo negativo = Don\'t.'},
      {type:'order',q:'Ordena la instrucción:',words:['your','name','Write','here.'],a:'Write your name here.',exp:'Verbo (Write) al inicio.'},
      {type:'order',q:'Ordena la petición:',words:['water,','like','some',"I'd",'please.'],a:"I'd like some water, please.",exp:'I\'d like + cosa + please.'},
      {type:'write',q:'Traduce "Pásame la sal" (Pass): ___ me the salt.',a:'Pass',exp:'Solo el verbo en base.'},
      {type:'choice',q:'___ late for the meeting tomorrow.',opts:["Don't be","Be not","Not be"],a:"Don't be",exp:'"Don\'t" + "be".'},
      {type:'write',q:'Completa: ___ me! (¡Ayúdame!)',a:'Help',exp:'Verbo base.'}
    ]
  },

  can_could:{
    id:'can_could', title:'Verbos Modales: Can, Could', icon:'shield', color:'#553C9A',
    theory:`
      <h3>Verbos modales — Can, Could</h3>
      <p>Los <strong>verbos modales</strong> expresan habilidad o posibilidad. Son invariables y van seguidos siempre de <strong>verbo en base</strong>.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#553C9A;background:#F5F3FF">
          <strong style="color:#44337A">CAN — habilidad / permiso / posibilidad</strong>
          <small>
            Estructura: Sujeto + <b>can</b> + verbo base (nunca +s ni +to)<br>
            Neg: <b>can't / cannot</b> · Preg: <b>Can</b> + sujeto + verbo?<br>
            "She <u>can</u> speak three languages." (habilidad)<br>
            "<u>Can</u> I open the window?" (permiso)<br>
            "It <u>can</u> get very cold here." (posibilidad general)
          </small>
        </div>
        <div class="t-box" style="border-color:#3182CE;background:#EBF8FF">
          <strong style="color:#1A365D">COULD — pasado de can / petición educada</strong>
          <small>
            "When I was young, I <u>could</u> run very fast." (habilidad pasada)<br>
            "<u>Could</u> you help me, please?" (más educado que can)<br>
            "<u>Could</u> I have the menu, please?" (petición formal)
          </small>
        </div>
      </div>
      <div class="tip-callout"><i data-lucide="lightbulb"></i>
        <span><strong>Regla de oro:</strong> Los modales NUNCA llevan -s en 3ª persona y NUNCA van seguidos de "to". ✗ "She cans swim" → ✓ "She can swim". ✗ "He can to go" → ✓ "He can go".</span>
      </div>`,
    exercises:[
      {type:'choice',q:'She ___ speak English, Spanish and French.',opts:['can to','cans','can'],a:'can',exp:'Los modales no tienen -s: "she can" (no "cans"). Nunca +to.'},
      {type:'choice',q:'___ I use your phone? Mine is out of battery.',opts:['Could','Should','Must'],a:'Could',exp:'"Could I...?" — petición educada de permiso.'},
      {type:'choice',q:'When I was five, I ___ read already.',opts:['can','could','should'],a:'could',exp:'"Could" — habilidad en el pasado.'},
      {type:'choice',q:'Sorry, I ___ come to your party tomorrow. I have to work.',opts:['don\'t can',"can't",'could'],a:"can't",exp:'Negativo presente de can es can\'t.'},
      {type:'choice',q:'___ you help me carry these bags?',opts:['Should','Could','Must'],a:'Could',exp:'"Could you...?" — petición educada de ayuda.'},
      {type:'write',q:'Completa: I ___ swim very well. I love the pool.',a:'can',exp:'"Can" = habilidad presente.'},
      {type:'write',q:'Completa: She ___ drive yet. She\'s only 15.',a:"can't",exp:'"Can\'t" = no tiene la habilidad.'},
      {type:'write',q:'Petición educada: "___ you open the door for me, please?"',a:'Could',exp:'"Could you...?" — más educado que "Can you...?"'},
      {type:'write',q:'Completa: When I was a child, I ___ stay up late on weekends.',a:'could',exp:'"Could" = permiso o habilidad en el pasado.'},
      {type:'order',q:'Ordena la frase:',words:['play','He','piano.','can','the'],a:'He can play the piano.',exp:'"Can + verbo base". Sin -s en el verbo principal.'},
      {type:'order',q:'Ordena la pregunta:',words:['I','window?','open','Can','the'],a:'Can I open the window?',exp:'"Can + sujeto + verbo base?" — permiso.'},
      {type:'choice',q:'___ you speak louder, please? I can\'t hear you.',opts:['Should','Must','Could'],a:'Could',exp:'"Could you...?" — petición cortés y educada.'},
    ]
  },

  past_to_be: {
    id:'past_to_be', title:'The Past: Was / Were', icon:'clock', color:'#C05621',
    theory:`
      <h3>El Pasado del Verbo To Be</h3>
      <p>Para hablar de estados o ubicaciones en el pasado (fui, era, estuve, estaba).</p>
      
      <div class="theory-grid">
        <div class="t-box" style="border-color:#C05621;background:#FFF5EB">
          <strong style="color:#7B341E">I / He / She / It &rarr; WAS</strong>
          <small>
            (+) I <b>was</b> tired yesterday.<br>
            (-) She <b>wasn't</b> at home.<br>
            (?) <b>Was</b> it raining?
          </small>
        </div>
        <div class="t-box" style="border-color:#38A169;background:#F0FFF4">
          <strong style="color:#1C4532">You / We / They &rarr; WERE</strong>
          <small>
            (+) We <b>were</b> happy.<br>
            (-) They <b>weren't</b> ready.<br>
            (?) <b>Were</b> you at the party?
          </small>
        </div>
      </div>
      <div class="tip-callout"><i data-lucide="info"></i>
        <span><strong>Born:</strong> Para decir cuándo o dónde naciste, siempre usamos "was/were born".<br>
        "I <u>was born</u> in 1990." (No se dice "I born").</span>
      </div>`,
    exercises:[
      {type:'choice',q:'I ___ very tired last night.',opts:['were','was','am'],a:'was',exp:'Para "I", el pasado es "was".'},
      {type:'choice',q:'Where ___ you yesterday?',opts:['was','were','are'],a:'were',exp:'Para "You", siempre usamos "were".'},
      {type:'choice',q:'They ___ at school because it was Sunday.',opts:["wasn't","weren't","aren't"],a:"weren't",exp:'Negativo plural en pasado = weren\'t.'},
      {type:'choice',q:'I ___ born in Colombia.',opts:['was','am','were'],a:'was',exp:'"I was born".'},
      {type:'write',q:'Completa: The movie ___ very boring.',a:'was',exp:'The movie = It → was.'},
      {type:'write',q:'Completa: ___ she at the meeting?',a:'Was',exp:'Pregunta singular → Was.'},
      {type:'order',q:'Ordena:',words:['were','We','late','class.','for'],a:'We were late for class.',exp:'We + were + adjetivo.'},
      {type:'order',q:'Ordena:',words:['home','yesterday.','He',"wasn't",'at'],a:"He wasn't at home yesterday.",exp:'Negativo singular = wasn\'t.'},
      {type:'choice',q:'My parents ___ angry with me.',opts:['was','were','is'],a:'were',exp:'My parents = They → were.'},
      {type:'write',q:'Completa: What time ___ the party?',a:'was',exp:'The party = It → was.'}
    ]
  },

  past_simple:{
    id:'past_simple', title:'Pasado Simple', icon:'clock', color:'#C05621',
    theory:`
      <h3>Pasado Simple — Acciones terminadas</h3>
      <p>El <strong>pasado simple</strong> describe acciones que comenzaron y terminaron en el pasado. Es el tiempo narrativo por excelencia del inglés.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#C05621;background:#FFF5EB">
          <strong style="color:#7B341E">Verbos REGULARES → + ED</strong>
          <small>
            walk → walk<b>ed</b> · play → play<b>ed</b> · work → work<b>ed</b><br>
            live → liv<b>ed</b> (termina en -e, solo +d)<br>
            study → studi<b>ed</b> (consonante+y → ied)<br>
            stop → stop<b>ped</b> (CVC corta: doble consonante)<br>
            "I <u>worked</u> yesterday." / "She <u>played</u> tennis."
          </small>
        </div>
        <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
          <strong style="color:#742A2A">Verbos IRREGULARES — memorizar</strong>
          <small>
            go→<b>went</b> · have→<b>had</b> · see→<b>saw</b> · come→<b>came</b><br>
            get→<b>got</b> · make→<b>made</b> · take→<b>took</b> · give→<b>gave</b><br>
            say→<b>said</b> · know→<b>knew</b> · think→<b>thought</b> · buy→<b>bought</b><br>
            eat→<b>ate</b> · write→<b>wrote</b> · win→<b>won</b> · lose→<b>lost</b><br>
            be→<b>was/were</b> · do→<b>did</b> · read→<b>read</b> (pronunciación cambia)
          </small>
        </div>
        <div class="t-box" style="border-color:#3182CE;background:#EBF8FF">
          <strong style="color:#1A365D">Negativo e interrogativo</strong>
          <small>
            Negativo: Sujeto + <b>didn't</b> + verbo BASE<br>
            "She <u>didn't go</u> to school yesterday."<br>
            Pregunta: <b>Did</b> + sujeto + verbo BASE?<br>
            "<u>Did</u> you see the film?" — "Yes, I did. / No, I didn't."<br>
            ⚠️ Con did/didn't el verbo va en <b>base</b> (no -ed, no -s)
          </small>
        </div>
      </div>
      <div class="example-block">
        <div class="ex-row"><div class="ex-en">I <u>visited</u> my grandmother last Sunday.</div><div class="ex-es">Visité a mi abuela el domingo pasado.</div></div>
        <div class="ex-row"><div class="ex-en">She <u>didn't eat</u> breakfast this morning.</div><div class="ex-es">Ella no desayunó esta mañana.</div></div>
        <div class="ex-row"><div class="ex-en"><u>Did</u> they <u>go</u> to the party? — Yes, they did.</div><div class="ex-es">¿Fueron a la fiesta? — Sí, fueron.</div></div>
        <div class="ex-row"><div class="ex-en">He <u>was</u> tired so he <u>went</u> to bed early.</div><div class="ex-es">Estaba cansado así que se fue a la cama temprano.</div></div>
      </div>
      <div class="tip-callout"><i data-lucide="lightbulb"></i>
        <span><strong>Señales de tiempo:</strong> yesterday, last night/week/year/Monday, ago (two days ago), in 2010, this morning (si ya pasó), when I was young, once upon a time, in the end.</span>
      </div>`,
    exercises:[
      {type:'choice',q:'She ___ to London last year.',opts:['goes','went','go'],a:'went',exp:'"go" es irregular → went. "Last year" → pasado.'},
      {type:'choice',q:'I ___ breakfast this morning. I was late.',opts:["don't have","didn't have","hadn't"],a:"didn't have",exp:'Negativo pasado: "didn\'t + verbo base (have)".'},
      {type:'choice',q:'___ you see that film last night?',opts:['Do','Did','Were'],a:'Did',exp:'Pregunta pasado: "Did + sujeto + verbo base?"'},
      {type:'choice',q:'They ___ very happy when they heard the news.',opts:['are','were','was'],a:'were',exp:'"They" → "were" en pasado de TO BE.'},
      {type:'choice',q:'He ___ his keys yesterday morning.',opts:['looses','lost','lose'],a:'lost',exp:'"lose" es irregular → pasado: lost.'},
      {type:'choice',q:'We ___ a great holiday in Cartagena last summer.',opts:['have','had','has'],a:'had',exp:'"have" es irregular → pasado: had.'},
      {type:'choice',q:'She ___ not come to the party. She was ill.',opts:['did','didn\'t','doesn\'t'],a:"didn't",exp:'Negativo pasado: "didn\'t + verbo base (come)".'},
      {type:'choice',q:'___ he call you yesterday?',opts:['Does','Did','Was'],a:'Did',exp:'Pregunta pasado: "Did + sujeto + verbo base?"'},
      {type:'write',q:'Escribe el pasado: She ___ (study) for three hours last night.',a:'studied',exp:'"study" → consonante+y → studied.'},
      {type:'write',q:'Escribe el pasado: They ___ (go) to the beach last weekend.',a:'went',exp:'"go" es irregular → went.'},
      {type:'write',q:'Negativo: "He worked yesterday." → "He ___ yesterday."',a:"didn't work",exp:'"didn\'t + verbo base". Sin -ed en negaciones.'},
      {type:'write',q:'Pregunta: "___ she call you?" (Did/Does)',a:'Did',exp:'"Did she call?" — pregunta en pasado.'},
      {type:'write',q:'Escribe el pasado: I ___ (buy) a new phone two days ago.',a:'bought',exp:'"buy" es irregular → bought.'},
      {type:'write',q:'Escribe el pasado: We ___ (visit) our grandparents last Sunday.',a:'visited',exp:'"visit" es regular → visited.'},
      {type:'order',q:'Ordena la frase:',words:['to','yesterday.','walked','school','She'],a:'She walked to school yesterday.',exp:'"walked" → pasado regular. "Yesterday" al final.'},
      {type:'order',q:'Ordena la negación:',words:["didn't","He","last","work","Friday."],a:"He didn't work last Friday.",exp:'"didn\'t + verbo base". "Last Friday" al final.'},
      {type:'order',q:'Ordena la pregunta:',words:['you','Did','the','enjoy','party?'],a:'Did you enjoy the party?',exp:'"Did + sujeto + verbo base + ?"'},
      {type:'order',q:'Ordena la frase:',words:['the','They','won','match.'],a:'They won the match.',exp:'"win" es irregular → won.'},
      {type:'choice',q:'Last night I ___ a book and then ___ to sleep.',opts:['read / went','reads / go','read / go'],a:'read / went',exp:'"read" (pasado = read) + "go" → went. Ambos irregulares.'},
      {type:'write',q:'Completa: When I was young, I ___ (live) in a small village.',a:'lived',exp:'"live" → regular → lived. "When I was young" = pasado.'},
    ]
  },

  future_going_to:{
    id:'future_going_to', title:'Futuro: Going To', icon:'chevrons-right', color:'#2C7A7B',
    theory:`
      <h3>Planes e Intenciones</h3>
      <p>Usamos <strong>Be + Going To</strong> para hablar de cosas que ya hemos decidido hacer en el futuro, o cosas que es evidente que van a pasar.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#38B2AC;background:#E6FFFA">
          <strong style="color:#1D4044">Estructura</strong>
          <small>
            Sujeto + <b>am/is/are</b> + <b>going to</b> + verbo base.<br><br>
            (+) I <b>am going to</b> travel.<br>
            (-) She <b>isn't going to</b> work.<br>
            (?) <b>Are</b> they <b>going to</b> come?
          </small>
        </div>
        <div class="t-box" style="border-color:#3182CE;background:#EBF8FF">
          <strong style="color:#1A365D">Usos principales</strong>
          <small>
            <b>1. Planes previos:</b> "We are going to buy a house." (Ya lo hablamos).<br>
            <b>2. Evidencia:</b> "Look at those black clouds. It is going to rain." (Lo estoy viendo).
          </small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'I ___ visit Colombia next year. I have the tickets.',opts:['am going to','go to','will'],a:'am going to',exp:'Plan ya decidido (tengo los tickets) = am going to.'},
      {type:'choice',q:'Look at the sky! It ___.',opts:['is raining','is going to rain','rains'],a:'is going to rain',exp:'Evidencia visible (el cielo) de algo que va a pasar = is going to.'},
      {type:'choice',q:'___ you going to watch the match tonight?',opts:['Do','Are','Will'],a:'Are',exp:'Estructura de pregunta: Are + sujeto + going to.'},
      {type:'write',q:'Completa la negación: She ___ going to come to the party.',a:"isn't",exp:'is not = isn\'t.'},
      {type:'order',q:'Ordena:',words:["I'm","to","buy","a","going","car."],a:"I'm going to buy a car.",exp:'I\'m going to + verbo.'},
      {type:'order',q:'Ordena:',words:["They're","going","Spain.","to","visit"],a:"They're going to visit Spain.",exp:'They\'re going to + verbo.'},
      {type:'choice',q:'We ___ not going to sell our house.',opts:['are','do','is'],a:'are',exp:'We + are.'},
      {type:'write',q:'Completa: What are you ___ to do?',a:'going',exp:'are you going to...'},
      {type:'write',q:'Completa con To Be: He ___ going to study law.',a:'is',exp:'He is going to...'},
      {type:'choice',q:'My sister ___ have a baby! The doctor confirmed it.',opts:['will','is going to','goes to'],a:'is going to',exp:'Hecho confirmado/planeado = is going to.'}
    ]
  },

  // ==================== NIVEL A2 ==================== //

  comparisons: {
    id:'comparisons', title:'Advanced Comparisons', icon:'bar-chart', color:'#3182CE',
    theory:`
      <h3>Comparatives & Superlatives</h3>
      <p>Reglas A2 para comparar.</p>
      <div class="theory-grid">
        <div class="t-box">
          <strong>Comparativos (2 cosas)</strong>
          <small>Cortos: +er + than (taller than)<br>Largos: more + adj + than (more beautiful than)<br>Excep: better, worse, further.</small>
        </div>
        <div class="t-box">
          <strong>Superlativos (El más...)</strong>
          <small>Cortos: the + est (the tallest)<br>Largos: the most + adj (the most beautiful)<br>Excep: the best, the worst.</small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'My car is ___ than yours.',opts:['fast','faster','fastest'],a:'faster',exp:'Comparativo corto: +er.'},
      {type:'choice',q:'This is ___ movie I have ever seen.',opts:['the best','better','the goodest'],a:'the best',exp:'Superlativo irregular de good.'}
    ]
  },

  quantifiers: {
    id:'quantifiers', title:'Countables & Uncountables', icon:'pie-chart', color:'#3182CE',
    theory:`<h3>Quantifiers</h3><p>Módulo en desarrollo.</p>`,
    exercises:[ {type:'choice',q:'How ___ water do you need?',opts:['many','much','any'],a:'much',exp:'Water es incontable.'} ]
  },

  past_continuous: {
    id:'past_continuous', title:'Past in Progress', icon:'history', color:'#3182CE',
    theory:`<h3>Past Continuous</h3><p>Módulo en desarrollo.</p>`,
    exercises:[ {type:'choice',q:'I ___ watching TV when you called.',opts:['am','was','were'],a:'was',exp:'Past continuous.'} ]
  },

  present_perfect: {
    id:'present_perfect', title:'Life Experiences', icon:'star', color:'#3182CE',
    theory:`<h3>Present Perfect</h3><p>Módulo en desarrollo.</p>`,
    exercises:[ {type:'choice',q:'I have never ___ to Japan.',opts:['go','went','been'],a:'been',exp:'Participio pasado.'} ]
  },

  future_mixed: {
    id:'future_mixed', title:'Future Predictions & Offers', icon:'zap', color:'#3182CE',
    theory:`<h3>Will / Won't vs Present Continuous</h3><p>Módulo en desarrollo.</p>`,
    exercises:[ {type:'choice',q:'I think it ___ rain tomorrow.',opts:['is going to','will','is raining'],a:'will',exp:'Predicción.'} ]
  },

  modals_obligation: {
    id:'modals_obligation', title:'Obligations & Advice', icon:'shield-alert', color:'#3182CE',
    theory:`<h3>Have to, Must, Should</h3><p>Módulo en desarrollo.</p>`,
    exercises:[ {type:'choice',q:'You ___ wear a seatbelt.',opts:['must','should','can'],a:'must',exp:'Obligación.'} ]
  },

  conditionals: {
    id:'conditionals', title:'Conditions & Consequences', icon:'git-branch', color:'#3182CE',
    theory:`<h3>Zero and 1st Conditional</h3><p>Módulo en desarrollo.</p>`,
    exercises:[ {type:'choice',q:'If it rains, I ___ stay at home.',opts:['stay','will stay','staying'],a:'will stay',exp:'1st conditional.'} ]
  },

  phrasal_gerunds: {
    id:'phrasal_gerunds', title:'Native Speech', icon:'message-square', color:'#3182CE',
    theory:`<h3>Gerunds & Phrasal Verbs</h3><p>Módulo en desarrollo.</p>`,
    exercises:[ {type:'choice',q:'I look forward to ___ you.',opts:['see','seeing','saw'],a:'seeing',exp:'Gerundio después de preposición.'} ]
  },

  numbers:{
    id:'numbers', title:'Números, Plural y Fechas', icon:'hash', color:'#D69E2E',
    theory:`
      <h3>Números cardinales y ordinales</h3>
      <p>Los números en inglés tienen reglas propias. Dominarlos te permite hablar de fechas, edades, precios, direcciones y posiciones.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#D69E2E;background:#FEFCBF">
          <strong style="color:#78350F">Cardinales (contar)</strong>
          <small>
            1–12: memorizar (one, two...twelve)<br>
            13–19: + <b>teen</b> → thirteen, fourteen, <b>fifteen</b>, sixteen...<br>
            20–90: + <b>ty</b> → twenty, thirty, <b>forty</b> ⚠️, fifty...<br>
            100: a/one <b>hundred</b> · 1,000: a/one <b>thousand</b><br>
            1,000,000: a/one <b>million</b><br>
            Unir centenas: two hundred <b>and</b> fifty-five (312)
          </small>
        </div>
        <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
          <strong style="color:#4C1D95">Ordinales (posición)</strong>
          <small>
            1st <b>first</b> · 2nd <b>second</b> · 3rd <b>third</b><br>
            4th fourth · 5th <b>fifth</b> ⚠️ · 8th <b>eighth</b> ⚠️ · 9th <b>ninth</b> ⚠️<br>
            12th <b>twelfth</b> ⚠️ · 20th <b>twentieth</b> · 30th <b>thirtieth</b><br>
            21st twenty-<b>first</b> · 22nd twenty-<b>second</b> · 23rd twenty-<b>third</b>
          </small>
        </div>
      </div>
      <h3 style="margin-top:20px">Plural de los sustantivos</h3>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#059669;background:#ECFDF5">
          <strong style="color:#064E3B">Plurales regulares</strong>
          <small>
            Normal: + s → books, cars, tables, students<br>
            -ch/-sh/-x/-s/-o: + es → watches, boxes, buses, tomatoes<br>
            Consonante+y → ies: city→<b>cities</b>, party→<b>parties</b>, baby→<b>babies</b><br>
            -f/-fe → ves: wife→<b>wives</b>, leaf→<b>leaves</b>, knife→<b>knives</b>
          </small>
        </div>
        <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
          <strong style="color:#742A2A">Plurales irregulares — memorizar</strong>
          <small>
            man→<b>men</b> · woman→<b>women</b> · child→<b>children</b><br>
            person→<b>people</b> · tooth→<b>teeth</b> · foot→<b>feet</b><br>
            mouse→<b>mice</b> · goose→<b>geese</b> · ox→<b>oxen</b><br>
            Sin cambio: fish · sheep · deer · series · species
          </small>
        </div>
      </div>
      <div class="tip-callout"><i data-lucide="lightbulb"></i>
        <span><strong>Fechas:</strong> Se escriben "10th June" pero se dicen "the tenth of June". Años: 1990 = "nineteen ninety". 2000 = "two thousand". 2024 = "twenty twenty-four".</span>
      </div>`,
    exercises:[
      {type:'choice',q:'Selecciona el ordinal de 20:',opts:['twentieth','twentyth','twentith'],a:'twentieth',exp:'20th → twentieth. Las decenas: twenty→twentieth.'},
      {type:'choice',q:'El ordinal de 5 es:',opts:['fiveth','fifth','fifeth'],a:'fifth',exp:'"Fifth" — el 5 tiene forma irregular.'},
      {type:'choice',q:'El plural de "child" es:',opts:['childs','childrens','children'],a:'children',exp:'"Children" — plural completamente irregular de "child".'},
      {type:'choice',q:'80 se escribe:',opts:['eighteen','eighty','eigty'],a:'eighty',exp:'"Eighty" — la ortografía correcta de 80.'},
      {type:'choice',q:'El plural de "city" es:',opts:['citys','cities','cityes'],a:'cities',exp:'"city" → consonante+y → cities (y→ies).'},
      {type:'choice',q:'El plural de "wife" es:',opts:['wifes','wives','wife'],a:'wives',exp:'"wife" → -fe → ves → "wives".'},
      {type:'choice',q:'El número 1,000,000 se dice:',opts:['one million','one millions','a thousands'],a:'one million',exp:'"One million" — invariable, sin -s.'},
      {type:'choice',q:'El plural de "tooth" es:',opts:['tooths','toothes','teeth'],a:'teeth',exp:'"Teeth" — plural irregular de "tooth".'},
      {type:'write',q:'Escribe el número en inglés: 15',a:'fifteen',exp:'"Fifteen" — uno de los -teen irregulares.'},
      {type:'write',q:'Escribe el número en inglés: 40',a:'forty',exp:'"Forty" — SIN la "u" de four. ¡Excepción importante!'},
      {type:'write',q:'Escribe el ordinal de 12:',a:'twelfth',exp:'"Twelfth" — forma muy irregular, hay que memorizarla.'},
      {type:'write',q:'Escribe el número 100:',a:'one hundred',exp:'"One hundred" / "a hundred" — ambas son correctas.'},
      {type:'write',q:'Plural: one man → two ___',a:'men',exp:'"Men" — plural irregular de "man".'},
      {type:'write',q:'Plural: one mouse → three ___',a:'mice',exp:'"Mice" — plural irregular de "mouse".'},
      {type:'write',q:'Escribe el número 50:',a:'fifty',exp:'"Fifty" — cincuenta.'},
      {type:'order',q:'Forma el número 102:',words:['two','a','hundred','and'],a:'a hundred and two',exp:'102 = "a hundred and two". Usar "and" para unir.'},
      {type:'order',q:'Forma 2,500,000:',words:['million','two','hundred','five','thousand'],a:'two million five hundred thousand',exp:'2,500,000 = "two million five hundred thousand".'},
      {type:'order',q:'Forma el ordinal 21st:',words:['first','twenty-'],a:'twenty-first',exp:'21st = "twenty-first". Las unidades mantienen su ordinal.'},
      {type:'choice',q:'El plural de "sheep" es:',opts:['sheeps','sheepies','sheep'],a:'sheep',exp:'"Sheep" es invariable. Singular y plural son iguales.'},
      {type:'write',q:'Escribe en inglés: 312',a:'three hundred and twelve',exp:'"Three hundred and twelve" — centena + and + decena.'},
    ]
  },
};

// ============================================================
// READING TEXTS — 6 textos graduados A1-A2
// ============================================================
const readingTexts = [
  {
    id:'school_day', title:'A Day at School', level:'A1', levelColor:'#38B2AC',
    topic:'Rutina diaria', questions:6, desc:'Un estudiante describe su día escolar con vocabulario básico.',
    body:`My name is <span class="word-hl" data-tr="Tom (nombre)">Tom</span>. I am <span class="word-hl" data-tr="doce">twelve</span> years old and I <span class="word-hl" data-tr="voy / asisto">go</span> to <span class="word-hl" data-tr="escuela secundaria">secondary school</span>. My school is <span class="word-hl" data-tr="cerca de">near</span> my house, so I <span class="word-hl" data-tr="voy a pie / camino">walk</span> there every morning. The <span class="word-hl" data-tr="clases / lecciones">lessons</span> start at <span class="word-hl" data-tr="las ocho y cuarto">quarter past eight</span>. My favourite <span class="word-hl" data-tr="asignatura / materia">subject</span> is English because it is <span class="word-hl" data-tr="divertido">fun</span> and <span class="word-hl" data-tr="útil">useful</span>. My teacher, Mrs Johnson, is very <span class="word-hl" data-tr="amable / bondadosa">kind</span>. At <span class="word-hl" data-tr="la hora del almuerzo">lunchtime</span>, I eat with my <span class="word-hl" data-tr="compañeros de clase">classmates</span> in the <span class="word-hl" data-tr="cantina / comedor">canteen</span>. After school, I always do my <span class="word-hl" data-tr="deberes / tarea escolar">homework</span> before watching TV. I think I am a <span class="word-hl" data-tr="trabajador / dedicado">hardworking</span> student.`,
    qs:[
      {q:'How old is Tom?',opts:['Ten','Twelve','Fifteen','Eight'],a:1,exp:'"I am twelve years old."'},
      {q:'How does Tom get to school?',opts:['By bus','By car','He walks','By bike'],a:2,exp:'"I walk there every morning."'},
      {q:'What time do lessons start?',opts:['At eight','At quarter to eight','At quarter past eight','At half past eight'],a:2,exp:'"The lessons start at quarter past eight."'},
      {q:'Why does Tom like English?',opts:['It is easy','It is fun and useful','It is short','The teacher is strict'],a:1,exp:'"It is fun and useful."'},
      {q:'Where does Tom eat at lunchtime?',opts:['At home','In the classroom','In the park','In the canteen'],a:3,exp:'"I eat with my classmates in the canteen."'},
      {q:'What does Tom do after school first?',opts:['He watches TV','He plays football','He does his homework','He sleeps'],a:2,exp:'"I always do my homework before watching TV."'},
    ]
  },
  {
    id:'my_family', title:'My Family', level:'A1', levelColor:'#805AD5',
    topic:'Familia', questions:6, desc:'Descripción detallada de los miembros de una familia.',
    body:`Hello! My name is <span class="word-hl" data-tr="Sofía">Sofia</span>. I am going to tell you about my <span class="word-hl" data-tr="familia">family</span>. We are a <span class="word-hl" data-tr="familia grande">big family</span> — there are six people in my house. My <span class="word-hl" data-tr="padre">father</span>, Carlos, is an <span class="word-hl" data-tr="ingeniero">engineer</span>. He is <span class="word-hl" data-tr="alto y delgado">tall and slim</span>. My <span class="word-hl" data-tr="madre">mother</span>, Ana, <span class="word-hl" data-tr="trabaja como">works as</span> a nurse at the local <span class="word-hl" data-tr="hospital">hospital</span>. She is very <span class="word-hl" data-tr="cariñosa">caring</span>. I have two <span class="word-hl" data-tr="hermanos">brothers</span>: Luis, who is <span class="word-hl" data-tr="mayor que yo">older than me</span>, and Pablo, who is <span class="word-hl" data-tr="el más joven">the youngest</span>. My <span class="word-hl" data-tr="abuela">grandmother</span> also lives with us. She is <span class="word-hl" data-tr="jubilada">retired</span> but she is always very <span class="word-hl" data-tr="activa">active</span>. She makes <span class="word-hl" data-tr="deliciosa">delicious</span> food every Sunday. We are a very <span class="word-hl" data-tr="unida">close</span> family and we love spending time together.`,
    qs:[
      {q:'How many people are in Sofia\'s family?',opts:['Four','Five','Six','Seven'],a:2,exp:'"There are six people in my house."'},
      {q:'What is the father\'s job?',opts:['He is a doctor','He is an engineer','He is a teacher','He is a nurse'],a:1,exp:'"My father, Carlos, is an engineer."'},
      {q:'Where does the mother work?',opts:['At a school','At a supermarket','At the local hospital','At home'],a:2,exp:'"She works as a nurse at the local hospital."'},
      {q:'How many brothers does Sofia have?',opts:['One','Two','Three','None'],a:1,exp:'"I have two brothers: Luis and Pablo."'},
      {q:'Who is the youngest in the family?',opts:['Sofia','Luis','Pablo','The grandmother'],a:2,exp:'"Pablo, who is the youngest."'},
      {q:'What does the grandmother do on Sundays?',opts:['She watches TV','She sleeps','She makes delicious food','She goes for a walk'],a:2,exp:'"She makes delicious food every Sunday."'},
    ]
  },
  {
    id:'london', title:'Welcome to London', level:'A2', levelColor:'#E53E3E',
    topic:'Ciudades y turismo', questions:6, desc:'Guía turística de Londres con preposiciones y vocabulario de ciudad.',
    body:`<span class="word-hl" data-tr="Londres">London</span> is the <span class="word-hl" data-tr="capital">capital</span> of the United Kingdom and one of the most <span class="word-hl" data-tr="visitadas">visited</span> cities in the world. It has a <span class="word-hl" data-tr="población">population</span> of about nine million people. The River <span class="word-hl" data-tr="Támesis">Thames</span> runs through the <span class="word-hl" data-tr="corazón / centro">heart</span> of the city. <span class="word-hl" data-tr="En la orilla norte">On the north bank</span>, you can find the famous Tower of London. <span class="word-hl" data-tr="Justo enfrente">Opposite</span> it, there is <span class="word-hl" data-tr="el icónico">the iconic</span> Tower Bridge. <span class="word-hl" data-tr="En el centro">In the city centre</span>, Buckingham Palace is the official <span class="word-hl" data-tr="residencia">residence</span> of the King. There are also world-class <span class="word-hl" data-tr="museos">museums</span> like the British Museum, which are all <span class="word-hl" data-tr="de entrada gratuita">free to enter</span>. <span class="word-hl" data-tr="El transporte público">Public transport</span> in London is <span class="word-hl" data-tr="excelente">excellent</span>. The famous <span class="word-hl" data-tr="metro / subterráneo">Underground</span> (called "the Tube") <span class="word-hl" data-tr="conecta">connects</span> all <span class="word-hl" data-tr="zonas / partes">parts</span> of the city. <span class="word-hl" data-tr="El fin de semana">At the weekend</span>, locals love to visit the many <span class="word-hl" data-tr="parques y mercados">parks and markets</span>.`,
    qs:[
      {q:'What is the population of London?',opts:['Five million','Seven million','About nine million','Twelve million'],a:2,exp:'"It has a population of about nine million people."'},
      {q:'What river runs through London?',opts:['The Seine','The Rhine','The Thames','The Nile'],a:2,exp:'"The River Thames runs through the heart of the city."'},
      {q:'Where is Tower Bridge?',opts:['Near Buckingham Palace','Opposite the Tower of London','In the city centre','On the south bank'],a:1,exp:'"Opposite it, there is the iconic Tower Bridge."'},
      {q:'How much does it cost to enter the British Museum?',opts:['£10','£25','It\'s free','£5'],a:2,exp:'"Museums like the British Museum are all free to enter."'},
      {q:'What is the London Underground also called?',opts:['The Metro','The Tube','The Bus','The Train'],a:1,exp:'"The famous Underground (called \'the Tube\')"'},
      {q:'What do locals do at the weekend?',opts:['They go to museums','They visit parks and markets','They go shopping','They watch football'],a:1,exp:'"At the weekend, locals love to visit the many parks and markets."'},
    ]
  },
  {
    id:'british_weather', title:'The British Weather', level:'A2', levelColor:'#D69E2E',
    topic:'Tiempo atmosférico', questions:6, desc:'El famoso tiempo inglés: vocabulario y estructuras del clima.',
    body:`British people are <span class="word-hl" data-tr="famosos por">famous for</span> talking about the <span class="word-hl" data-tr="tiempo (meteorológico)">weather</span>. And there is a good reason for this — the weather in the UK is <span class="word-hl" data-tr="muy cambiante">very changeable</span>. You can have four <span class="word-hl" data-tr="estaciones del año">seasons</span> in one day! In <span class="word-hl" data-tr="invierno">winter</span>, it is <span class="word-hl" data-tr="frío">cold</span>, <span class="word-hl" data-tr="gris / nublado">grey</span> and it often <span class="word-hl" data-tr="llueve con fuerza">rains heavily</span>. <span class="word-hl" data-tr="Temperaturas bajo cero">Temperatures below zero</span> are <span class="word-hl" data-tr="comunes">common</span> in the north. <span class="word-hl" data-tr="La primavera">Spring</span> is <span class="word-hl" data-tr="suave y agradable">mild and pleasant</span>, with <span class="word-hl" data-tr="flores por todas partes">flowers everywhere</span>. <span class="word-hl" data-tr="El verano">Summer</span> is <span class="word-hl" data-tr="cálido pero corto">warm but short</span> — the <span class="word-hl" data-tr="temperatura media">average temperature</span> is only about 20 degrees. Many British people carry an <span class="word-hl" data-tr="paraguas">umbrella</span> every day, <span class="word-hl" data-tr="por si acaso">just in case</span>. <span class="word-hl" data-tr="El otoño">Autumn</span> brings <span class="word-hl" data-tr="hojas de colores">colourful leaves</span> and <span class="word-hl" data-tr="vientos fuertes">strong winds</span>. Despite the <span class="word-hl" data-tr="fama / reputación">reputation</span>, many people love the British weather because it is rarely <span class="word-hl" data-tr="extremo">extreme</span>.`,
    qs:[
      {q:'Why do British people often talk about the weather?',opts:['Because they are boring','Because the weather is very changeable','Because it is always sunny','Because they have nothing else to talk about'],a:1,exp:'"The weather in the UK is very changeable."'},
      {q:'What is winter like in northern parts of the UK?',opts:['Hot and sunny','Mild and pleasant','Cold with temperatures below zero','Windy and warm'],a:2,exp:'"Temperatures below zero are common in the north."'},
      {q:'What is the average summer temperature?',opts:['About 10 degrees','About 15 degrees','About 20 degrees','About 30 degrees'],a:2,exp:'"The average temperature is only about 20 degrees."'},
      {q:'Why do many people carry an umbrella every day?',opts:['It\'s fashionable','Just in case it rains','The law requires it','It is always raining'],a:1,exp:'"Many British people carry an umbrella every day, just in case."'},
      {q:'What does autumn bring?',opts:['Flowers and sunshine','Snow and ice','Colourful leaves and strong winds','Hot days and cool nights'],a:2,exp:'"Autumn brings colourful leaves and strong winds."'},
      {q:'Why do many people actually like British weather?',opts:['Because it is always warm','Because it is rarely extreme','Because it is always sunny','Because it snows a lot'],a:1,exp:'"Many people love the British weather because it is rarely extreme."'},
    ]
  },
  {
    id:'daily_routine', title:"Maria's Daily Routine", level:'A1', levelColor:'#059669',
    topic:'Rutina diaria', questions:6, desc:'Descripción detallada de una rutina usando presente simple y adverbios.',
    body:`My name is Maria and I am going to describe my <span class="word-hl" data-tr="rutina diaria">daily routine</span>. I <span class="word-hl" data-tr="me despierto">wake up</span> at <span class="word-hl" data-tr="las siete en punto">seven o'clock</span> every morning. First, I <span class="word-hl" data-tr="me ducho">have a shower</span> and then I <span class="word-hl" data-tr="me visto">get dressed</span>. I <span class="word-hl" data-tr="desayuno">have breakfast</span> at half past seven. I usually eat <span class="word-hl" data-tr="tostadas con mantequilla">toast and butter</span> and drink a cup of <span class="word-hl" data-tr="café negro">black coffee</span>. I leave the house at <span class="word-hl" data-tr="las ocho menos cuarto">quarter to eight</span> and I <span class="word-hl" data-tr="tomo el metro">take the underground</span> to work. I <span class="word-hl" data-tr="llego a">arrive at</span> my office at eight thirty. I work as an <span class="word-hl" data-tr="contable / contadora">accountant</span>. At <span class="word-hl" data-tr="mediodía">midday</span>, I have <span class="word-hl" data-tr="un descanso de una hora">a one-hour break</span>. I often go to a <span class="word-hl" data-tr="cafetería">café</span> near my office for <span class="word-hl" data-tr="el almuerzo">lunch</span>. I <span class="word-hl" data-tr="termino de trabajar">finish work</span> at five o'clock and I am usually home by <span class="word-hl" data-tr="las seis">six o'clock</span>. In the evening, I <span class="word-hl" data-tr="preparo la cena">cook dinner</span> and <span class="word-hl" data-tr="me relajo">relax</span>. I <span class="word-hl" data-tr="me acuesto / voy a la cama">go to bed</span> at about <span class="word-hl" data-tr="las once de la noche">eleven at night</span>.`,
    qs:[
      {q:'What time does Maria wake up?',opts:['At six o\'clock','At seven o\'clock','At half past seven','At quarter to eight'],a:1,exp:'"I wake up at seven o\'clock every morning."'},
      {q:'What does Maria usually have for breakfast?',opts:['Cereal and milk','Eggs and bacon','Toast and butter with coffee','Fruit and juice'],a:2,exp:'"I usually eat toast and butter and drink a cup of black coffee."'},
      {q:'How does Maria travel to work?',opts:['By car','By bus','On foot','She takes the underground'],a:3,exp:'"I take the underground to work."'},
      {q:'What is Maria\'s job?',opts:['She is a nurse','She is a teacher','She is an accountant','She is an engineer'],a:2,exp:'"I work as an accountant."'},
      {q:'How long is Maria\'s lunch break?',opts:['Thirty minutes','One hour','Two hours','Forty-five minutes'],a:1,exp:'"I have a one-hour break at midday."'},
      {q:'What time does Maria go to bed?',opts:['At nine o\'clock','At ten o\'clock','At about eleven at night','At midnight'],a:2,exp:'"I go to bed at about eleven at night."'},
    ]
  },
  {
    id:'shopping_day', title:'A Shopping Day', level:'A1', levelColor:'#D97706',
    topic:'Compras y dinero', questions:6, desc:'Ir de compras: vocabulario de tiendas, precios y cantidades.',
    body:`It is Saturday morning and <span class="word-hl" data-tr="Emma">Emma</span> wants to go <span class="word-hl" data-tr="de compras">shopping</span>. She <span class="word-hl" data-tr="hace una lista">makes a list</span> of things she needs to <span class="word-hl" data-tr="comprar">buy</span>. First, she goes to the <span class="word-hl" data-tr="panadería">baker's</span> and buys a <span class="word-hl" data-tr="hogaza de pan">loaf of bread</span> and some <span class="word-hl" data-tr="bollos / panecillos">rolls</span>. Then she goes to the <span class="word-hl" data-tr="supermercado">supermarket</span> to buy <span class="word-hl" data-tr="frutas y verduras">fruit and vegetables</span>. She <span class="word-hl" data-tr="elige / selecciona">chooses</span> some <span class="word-hl" data-tr="manzanas y naranjas">apples and oranges</span>. At the <span class="word-hl" data-tr="caja / mostrador">checkout</span>, the <span class="word-hl" data-tr="cajero/a">cashier</span> says: "That's <span class="word-hl" data-tr="doce euros con cincuenta">twelve euros fifty, please." Emma <span class="word-hl" data-tr="paga">pays</span> with a <span class="word-hl" data-tr="billete de veinte euros">twenty-euro note</span> and gets <span class="word-hl" data-tr="el cambio / la vuelta">change</span> back. After the supermarket, she goes to a <span class="word-hl" data-tr="tienda de ropa">clothes shop</span>. She tries on a <span class="word-hl" data-tr="vestido azul">blue dress</span> but it is too <span class="word-hl" data-tr="pequeño / estrecho">small</span>. She asks for a <span class="word-hl" data-tr="talla más grande">bigger size</span>. Finally, she goes home <span class="word-hl" data-tr="con bolsas llenas">with full bags</span> and a <span class="word-hl" data-tr="gran sonrisa">big smile</span>.`,
    qs:[
      {q:'What day does Emma go shopping?',opts:['Friday','Saturday','Sunday','Monday'],a:1,exp:'"It is Saturday morning and Emma wants to go shopping."'},
      {q:'What does Emma buy at the baker\'s?',opts:['Cakes and biscuits','A loaf of bread and some rolls','Croissants and butter','Sandwiches and soup'],a:1,exp:'"She buys a loaf of bread and some rolls."'},
      {q:'How much does Emma pay at the supermarket?',opts:['Ten euros','Twelve euros fifty','Twenty euros','Fifteen euros'],a:1,exp:'"That\'s twelve euros fifty, please."'},
      {q:'How does Emma pay?',opts:['By card','With coins','With a twenty-euro note','By phone'],a:2,exp:'"She pays with a twenty-euro note."'},
      {q:'Why doesn\'t Emma buy the blue dress?',opts:['It is too expensive','It is the wrong colour','It is too small','The shop is closed'],a:2,exp:'"She tries on a blue dress but it is too small."'},
      {q:'How does Emma feel at the end?',opts:['Tired and sad','Happy with a big smile','Hungry and thirsty','Angry and upset'],a:1,exp:'"She goes home with full bags and a big smile."'},
    ]
  },
  {
    id:'healthy_lifestyle', title:'A Healthy Lifestyle', level:'A2', levelColor:'#059669',
    topic:'Salud y hábitos', questions:6, desc:'Texto sobre hábitos saludables con vocabulario de salud y rutinas.',
    body:`More and more people are <span class="word-hl" data-tr="interesados en">interested in</span> living a <span class="word-hl" data-tr="estilo de vida saludable">healthy lifestyle</span>. But what does this really mean? <span class="word-hl" data-tr="En primer lugar">First of all</span>, it means eating a <span class="word-hl" data-tr="dieta equilibrada">balanced diet</span>. This includes plenty of <span class="word-hl" data-tr="frutas y verduras">fruit and vegetables</span>, <span class="word-hl" data-tr="cereales integrales">whole grains</span> and <span class="word-hl" data-tr="proteínas magras">lean proteins</span>. <span class="word-hl" data-tr="El azúcar y la grasa">Sugar and fat</span> should be <span class="word-hl" data-tr="limitados">limited</span>. <span class="word-hl" data-tr="En segundo lugar">Secondly</span>, <span class="word-hl" data-tr="hacer ejercicio regularmente">exercising regularly</span> is essential. <span class="word-hl" data-tr="Los expertos recomiendan">Experts recommend</span> at least thirty minutes of <span class="word-hl" data-tr="actividad física moderada">moderate physical activity</span> every day. This can be as simple as <span class="word-hl" data-tr="caminar a paso rápido">walking briskly</span>, <span class="word-hl" data-tr="nadar">swimming</span> or <span class="word-hl" data-tr="montar en bicicleta">cycling</span>. <span class="word-hl" data-tr="Dormir bien">Getting enough sleep</span> is also very important. Most adults need <span class="word-hl" data-tr="entre siete y ocho horas">between seven and eight hours</span> per night. <span class="word-hl" data-tr="Finalmente">Finally</span>, it is important to <span class="word-hl" data-tr="reducir el estrés">reduce stress</span>. <span class="word-hl" data-tr="Actividades como">Activities such as</span> reading, <span class="word-hl" data-tr="meditar">meditating</span> or spending time with <span class="word-hl" data-tr="los seres queridos">loved ones</span> can help. Small <span class="word-hl" data-tr="cambios">changes</span> in your daily <span class="word-hl" data-tr="hábitos">habits</span> can make a <span class="word-hl" data-tr="gran diferencia">big difference</span> to your <span class="word-hl" data-tr="bienestar">wellbeing</span>.`,
    qs:[
      {q:'What does a balanced diet include?',opts:['Only vegetables and water','Fruit, vegetables, whole grains and lean proteins','Fast food and snacks','Lots of sugar and fat'],a:1,exp:'"A balanced diet includes plenty of fruit and vegetables, whole grains and lean proteins."'},
      {q:'How much exercise do experts recommend every day?',opts:['Ten minutes','At least thirty minutes','One hour','Two hours'],a:1,exp:'"Experts recommend at least thirty minutes of moderate physical activity every day."'},
      {q:'Which of these is NOT mentioned as a form of exercise?',opts:['Walking briskly','Swimming','Cycling','Running'],a:3,exp:'Walking, swimming and cycling are mentioned. Running is not.'},
      {q:'How many hours of sleep do most adults need?',opts:['Five to six hours','Six to seven hours','Seven to eight hours','Eight to ten hours'],a:2,exp:'"Most adults need between seven and eight hours per night."'},
      {q:'Which activity can help reduce stress?',opts:['Eating fast food','Watching horror films','Meditating or spending time with loved ones','Working longer hours'],a:2,exp:'"Activities such as reading, meditating or spending time with loved ones can help."'},
      {q:'What can small changes in daily habits do?',opts:['Nothing significant','Make a big difference to your wellbeing','Make you very tired','Create more stress'],a:1,exp:'"Small changes in your daily habits can make a big difference to your wellbeing."'},
    ]
  },
  {
    id:'technology_life', title:'Technology in Our Lives', level:'A2', levelColor:'#3182CE',
    topic:'Tecnología y sociedad', questions:6, desc:'Cómo la tecnología cambia nuestra vida cotidiana. Vocabulario moderno A2.',
    body:`<span class="word-hl" data-tr="La tecnología">Technology</span> is <span class="word-hl" data-tr="cambiando">changing</span> the way we live, work and <span class="word-hl" data-tr="nos comunicamos">communicate</span>. Today, most people <span class="word-hl" data-tr="dependen de">depend on</span> their <span class="word-hl" data-tr="teléfonos inteligentes">smartphones</span> for almost everything — from <span class="word-hl" data-tr="hacer llamadas">making calls</span> to <span class="word-hl" data-tr="pedir comida">ordering food</span>. <span class="word-hl" data-tr="Internet">The internet</span> <span class="word-hl" data-tr="nos permite">allows us</span> to <span class="word-hl" data-tr="conectar">connect</span> with people all over the world in <span class="word-hl" data-tr="cuestión de segundos">seconds</span>. <span class="word-hl" data-tr="Las redes sociales">Social media</span> platforms like Instagram and TikTok are <span class="word-hl" data-tr="extremadamente populares">extremely popular</span>, <span class="word-hl" data-tr="especialmente entre">especially among</span> young people. However, technology also has some <span class="word-hl" data-tr="desventajas">disadvantages</span>. Many people spend too much time <span class="word-hl" data-tr="mirando pantallas">looking at screens</span> and not enough time <span class="word-hl" data-tr="interactuando cara a cara">interacting face-to-face</span>. This can <span class="word-hl" data-tr="afectar negativamente">negatively affect</span> <span class="word-hl" data-tr="relaciones">relationships</span> and <span class="word-hl" data-tr="salud mental">mental health</span>. <span class="word-hl" data-tr="Además">Moreover</span>, <span class="word-hl" data-tr="la privacidad en línea">online privacy</span> is a growing <span class="word-hl" data-tr="preocupación">concern</span>. <span class="word-hl" data-tr="A pesar de estos problemas">Despite these issues</span>, technology is <span class="word-hl" data-tr="innegablemente">undeniably</span> making our lives <span class="word-hl" data-tr="más fáciles y conectadas">easier and more connected</span> in many ways.`,
    qs:[
      {q:'What do most people use their smartphones for?',opts:['Only making calls','Almost everything, from calls to ordering food','Taking photos only','Listening to music only'],a:1,exp:'"Most people depend on their smartphones for almost everything."'},
      {q:'What does the internet allow us to do?',opts:['Watch television','Connect with people all over the world in seconds','Buy things only','Play video games'],a:1,exp:'"The internet allows us to connect with people all over the world in seconds."'},
      {q:'Who especially uses social media platforms?',opts:['Elderly people','Business people','Young people','Teachers'],a:2,exp:'"Especially among young people."'},
      {q:'What is a disadvantage of technology mentioned in the text?',opts:['It is too expensive','People spend too much time on screens and not enough face-to-face','The internet is too slow','Smartphones break easily'],a:1,exp:'"Many people spend too much time looking at screens and not enough time interacting face-to-face."'},
      {q:'What can too much screen time negatively affect?',opts:['Physical fitness only','Relationships and mental health','Academic performance only','Sleep patterns only'],a:1,exp:'"This can negatively affect relationships and mental health."'},
      {q:'What is the writer\'s overall conclusion about technology?',opts:['Technology is completely bad for us','Technology is making our lives easier and more connected','Technology should be banned','Technology is only useful for young people'],a:1,exp:'"Despite these issues, technology is undeniably making our lives easier and more connected."'},
    ]
  },
  {
    id:'colombian_festival', title:'A Colombian Festival', level:'A2', levelColor:'#7C3AED',
    topic:'Cultura y tradiciones', questions:6, desc:'Texto sobre cultura colombiana para conectar con el contexto del estudiante.',
    body:`Colombia is a <span class="word-hl" data-tr="vibrante / llena de vida">vibrant</span> country with many <span class="word-hl" data-tr="tradiciones únicas">unique traditions</span> and <span class="word-hl" data-tr="festivales">festivals</span>. One of the most <span class="word-hl" data-tr="famosos">famous</span> is the <span class="word-hl" data-tr="Carnaval de Barranquilla">Barranquilla Carnival</span>, which <span class="word-hl" data-tr="se celebra / tiene lugar">takes place</span> every year before <span class="word-hl" data-tr="la Cuaresma">Lent</span>. It is <span class="word-hl" data-tr="reconocido / declarado">recognised</span> by <span class="word-hl" data-tr="la UNESCO">UNESCO</span> as a <span class="word-hl" data-tr="Patrimonio de la Humanidad">World Heritage</span> event. During the carnival, thousands of people <span class="word-hl" data-tr="se disfrazan con">dress up in</span> <span class="word-hl" data-tr="coloridos disfraces">colourful costumes</span> and <span class="word-hl" data-tr="bailan por las calles">dance through the streets</span>. The <span class="word-hl" data-tr="música">music</span> is <span class="word-hl" data-tr="increíble">incredible</span> — you can hear <span class="word-hl" data-tr="cumbia, porro y mapalé">cumbia, porro and mapalé</span>. Local <span class="word-hl" data-tr="artesanos">artisans</span> make <span class="word-hl" data-tr="elaboradas máscaras">elaborate masks</span> and <span class="word-hl" data-tr="decoraciones">decorations</span>. <span class="word-hl" data-tr="La comida tradicional">Traditional food</span> like <span class="word-hl" data-tr="arepas y empanadas">arepas and empanadas</span> is <span class="word-hl" data-tr="vendida en puestos">sold at stalls</span> everywhere. The <span class="word-hl" data-tr="atmósfera / ambiente">atmosphere</span> is <span class="word-hl" data-tr="eléctrica / emocionante">electric</span> and <span class="word-hl" data-tr="todo el mundo participa">everybody joins in</span>. It is a <span class="word-hl" data-tr="poderoso recordatorio">powerful reminder</span> of Colombia's <span class="word-hl" data-tr="riqueza cultural">rich culture</span> and the <span class="word-hl" data-tr="espíritu alegre">joyful spirit</span> of its people.`,
    qs:[
      {q:'When does the Barranquilla Carnival take place?',opts:['After Easter','Before Lent every year','In summer','In December'],a:1,exp:'"It takes place every year before Lent."'},
      {q:'Who recognises the carnival as World Heritage?',opts:['The United Nations','The Colombian government','UNESCO','The European Union'],a:2,exp:'"It is recognised by UNESCO as a World Heritage event."'},
      {q:'What do people wear during the carnival?',opts:['Normal clothes','School uniforms','Colourful costumes','Business suits'],a:2,exp:'"Thousands of people dress up in colourful costumes."'},
      {q:'Which type of music can you hear?',opts:['Rock and jazz','Cumbia, porro and mapalé','Classical music','Hip-hop'],a:1,exp:'"You can hear cumbia, porro and mapalé."'},
      {q:'What food is sold at the carnival?',opts:['Pizza and pasta','Sushi and rice','Arepas and empanadas','Fish and chips'],a:2,exp:'"Traditional food like arepas and empanadas is sold at stalls."'},
      {q:'What does the carnival remind us of?',opts:['Colombia\'s history','Colombia\'s rich culture and joyful spirit','Colombia\'s economy','Colombia\'s geography'],a:1,exp:'"A powerful reminder of Colombia\'s rich culture and the joyful spirit of its people."'},
    ]
  },
];

// ============================================================
// WRITING EXERCISES
// ============================================================
const writingExercises = [
  {
    id:'word_order_1', title:'Sintaxis básica: frases afirmativas', type:'order',
    typeLabel:'Sintaxis', typeColor:'#3182CE',
    desc:'Ordena las palabras para construir oraciones afirmativas correctas.',
    tasks:[
      {prompt:'Forma una frase con estas palabras:',words:['is','She','a','teacher.'],answer:'She is a teacher.',tip:'Sujeto + TO BE + artículo + profesión.'},
      {prompt:'Forma una frase con estas palabras:',words:['every','I','breakfast','have','day.'],answer:'I have breakfast every day.',tip:'Sujeto + verbo + objeto + expresión de tiempo.'},
      {prompt:'Forma una frase con estas palabras:',words:['are','at','They','park.','the'],answer:'They are at the park.',tip:'Sujeto + TO BE + preposición + artículo + lugar.'},
      {prompt:'Forma una frase con estas palabras:',words:['usually','He','early.','gets','up'],answer:'He usually gets up early.',tip:'"Usually" va entre el sujeto y el verbo principal.'},
      {prompt:'Forma una frase con estas palabras:',words:['two','have','I','brothers.'],answer:'I have two brothers.',tip:'Sujeto + verbo + número + sustantivo.'},
      {prompt:'Ordena para formar una pregunta:',words:['name?','your','is','What'],answer:'What is your name?',tip:'WH-question + TO BE + sujeto + ?'},
      {prompt:'Forma la negación:',words:['not','speak','He','does','French.'],answer:'He does not speak French.',tip:'Sujeto + does not + verbo base (sin -s).'},
    ]
  },
  {
    id:'word_order_2', title:'Sintaxis media: preguntas y negaciones', type:'order',
    typeLabel:'Sintaxis', typeColor:'#3182CE',
    desc:'Construye preguntas y negaciones en presente simple y continuo.',
    tasks:[
      {prompt:'Forma la pregunta:',words:['English?','speak','Does','she'],answer:'Does she speak English?',tip:'Does + sujeto 3ª persona + verbo base + ?'},
      {prompt:'Forma la negación:',words:["work","doesn't","She","here."],answer:"She doesn't work here.",tip:'"doesn\'t" + verbo base sin -s.'},
      {prompt:'Forma la pregunta en continuo:',words:['reading?','you','Are','now'],answer:'Are you reading now?',tip:'TO BE + sujeto + verbo-ING + ?'},
      {prompt:'Forma la negación en continuo:',words:['not','are','listening.','They'],answer:'They are not listening.',tip:'"are not" + verbo-ING para negación continua.'},
      {prompt:'Forma la pregunta WH:',words:['live?','do','you','Where'],answer:'Where do you live?',tip:'WH-word + auxiliar + sujeto + verbo base.'},
      {prompt:'Ordena la frase con adverbio:',words:['never','He','meat.','eats'],answer:'He never eats meat.',tip:'"Never" va entre el sujeto y el verbo principal.'},
      {prompt:'Forma la pregunta con have:',words:['a','you','Do','have','dog?'],answer:'Do you have a dog?',tip:'"Do + you + have + objeto + ?" para preguntar con have.'},
    ]
  },
  {
    id:'transform_negatives', title:'Transforma al negativo', type:'transform',
    typeLabel:'Transformación', typeColor:'#805AD5',
    desc:'Convierte oraciones afirmativas en negaciones correctas.',
    tasks:[
      {prompt:'"I like coffee." → Escribe la negación completa.',answer:"I don't like coffee.",tip:'"I don\'t + verbo base." Para I/you/we/they.'},
      {prompt:'"She speaks German." → Escribe la negación.',answer:"She doesn't speak German.",tip:'"She doesn\'t + verbo base (sin -s)." 3ª persona.'},
      {prompt:'"They are playing football." → Negación del continuo.',answer:'They are not playing football.',tip:'"are + not + verbo-ING" → "aren\'t playing" o "are not playing".'},
      {prompt:'"He has a car." → Negación con have.',answer:"He doesn't have a car.",tip:'"He doesn\'t have" — en negaciones, "have" no cambia.'},
      {prompt:'"We live in Madrid." → Negación.',answer:"We don't live in Madrid.",tip:'"We don\'t + verbo base." Para we.'},
      {prompt:'"It is raining." → Negación del continuo.',answer:'It is not raining.',tip:'"It isn\'t raining" / "It is not raining".'},
    ]
  },
  {
    id:'transform_questions', title:'Transforma al interrogativo', type:'transform',
    typeLabel:'Transformación', typeColor:'#805AD5',
    desc:'Convierte afirmaciones en preguntas de sí/no correctas.',
    tasks:[
      {prompt:'"You speak English." → Haz la pregunta de sí/no.',answer:'Do you speak English?',tip:'"Do + you + verbo base + ?"'},
      {prompt:'"She works here." → Haz la pregunta.',answer:'Does she work here?',tip:'"Does + she + verbo base + ?" (sin -s en el verbo).'},
      {prompt:'"They are watching TV." → Haz la pregunta continua.',answer:'Are they watching TV?',tip:'"Are + they + verbo-ING + ?"'},
      {prompt:'"He has a bicycle." → Haz la pregunta.',answer:'Does he have a bicycle?',tip:'"Does he have...?" — auxiliar does + have.'},
      {prompt:'"She is a doctor." → Haz la pregunta con be.',answer:'Is she a doctor?',tip:'"Is + sujeto + complemento + ?"'},
      {prompt:'"You are studying right now." → Haz la pregunta continua.',answer:'Are you studying right now?',tip:'"Are + you + verbo-ING + ?"'},
    ]
  },
  {
    id:'transform_tenses', title:'Simple ↔ Continuo', type:'transform',
    typeLabel:'Transformación', typeColor:'#D97706',
    desc:'Transforma frases del presente simple al continuo y viceversa.',
    tasks:[
      {prompt:'"She reads a book." → Cambia al presente continuo (ahora mismo).',answer:'She is reading a book.',tip:'"She is + read+ing + objeto".'},
      {prompt:'"They are playing football." → Cambia al presente simple (hábito).',answer:'They play football.',tip:'"They + play" — sin auxiliar en presente simple.'},
      {prompt:'"He works in London." → Al continuo (temporalmente, esta semana).',answer:'He is working in London.',tip:'"He is + work+ing". Uso temporal del continuo.'},
      {prompt:'"We study English." → Al continuo (en este momento).',answer:'We are studying English.',tip:'"We are + study+ing". Recuerda: study+ing = studying.'},
      {prompt:'"She is cooking dinner." → Al simple (hábito habitual).',answer:'She cooks dinner.',tip:'"She cooks" — 3ª persona simple.'},
      {prompt:'"I eat breakfast at 7." → Al continuo (ahora mismo).',answer:'I am eating breakfast.',tip:'"I am + eat+ing". Acción en este momento.'},
    ]
  },
  {
    id:'free_writing_intro', title:'Preséntate en inglés', type:'free',
    typeLabel:'Escritura libre', typeColor:'#059669',
    desc:'Escribe un párrafo presentándote: nombre, edad, ciudad, ocupación y gustos.',
    tasks:[
      {
        prompt:'Escríbete: Preséntate con al menos 5 oraciones. Incluye tu nombre, edad, de dónde eres, qué estudias o trabajas, y qué te gusta hacer.',
        hint:"My name is... · I am ... years old. · I am from... / I live in... · I am a student / I work as a... · I like / I love... · I don't like...",
        minWords:25,
        example:"My name is Carlos. I am 20 years old. I am from Cúcuta, Colombia. I am a university student. I study Business Administration. I love music and football. I don't like getting up early!"
      },
      {
        prompt:'Describe tu día ideal. ¿Qué harías? ¿A dónde irías? ¿Con quién? Usa presente simple para describir el día perfectamente.',
        hint:'I wake up at... · I have... for breakfast. · I go to... · I spend time with... · In the evening, I...',
        minWords:30,
        example:"On my perfect day, I wake up at ten o'clock. I have a big breakfast with eggs and coffee. Then I go to the beach with my friends. We swim and play football. In the evening, we eat a delicious dinner at a restaurant. It is a perfect day!"
      },
    ]
  },
  {
    id:'free_writing_person', title:'Describe a una persona', type:'free',
    typeLabel:'Escritura libre', typeColor:'#059669',
    desc:'Describe a un familiar o amigo: apariencia, personalidad y profesión.',
    tasks:[
      {
        prompt:'Describe a un miembro de tu familia. Incluye: relación, nombre, edad, aspecto físico, personalidad y qué hace. Mínimo 5 oraciones.',
        hint:'My [mother/father/brother/sister...] is... · He/She has... hair and... eyes. · He/She is very... (kind, funny, intelligent). · He/She works as a...',
        minWords:35,
        example:"My mother is Ana. She is 45 years old. She has long dark hair and brown eyes. She is very kind and patient. She works as a nurse at the city hospital. She loves cooking and reading books. She is my favourite person in the world!"
      },
      {
        prompt:'Describe a tu mejor amigo/a. ¿Cómo es? ¿Qué hacen juntos? ¿Por qué es especial para ti?',
        hint:"My best friend is... · He/She is... years old. · We always... · He/She makes me... · I think he/she is...",
        minWords:30,
        example:"My best friend is David. He is 22 years old. He is tall and has short black hair. He is very funny and always makes me laugh. We usually play video games on weekends and sometimes we go to the cinema. He is a great friend because he always helps me."
      },
    ]
  },
  {
    id:'free_writing_routine', title:'Mi rutina diaria', type:'free',
    typeLabel:'Escritura libre', typeColor:'#059669',
    desc:'Describe tu rutina usando presente simple, adverbios de frecuencia y expresiones de tiempo.',
    tasks:[
      {
        prompt:'Escribe tu rutina de la mañana. Usa al menos 6 oraciones con adverbios de frecuencia (always, usually, sometimes, never) y expresiones de tiempo (at, in the morning, etc.).',
        hint:'I always / usually wake up at... · First, I... · Then I... · I sometimes... · I never... · I leave home at... · I arrive at...',
        minWords:40,
        example:"I always wake up at six thirty in the morning. First, I have a shower and get dressed. Then I have breakfast. I usually eat toast and drink coffee. I sometimes listen to music while I eat. I never skip breakfast because it is important. I leave home at seven thirty and take the bus to university."
      },
      {
        prompt:"Describe qué haces los fines de semana. ¿Son diferentes a tu rutina de lunes a viernes? Usa 'on Saturdays / on Sundays', 'at the weekend', 'in the morning' etc.",
        hint:"At the weekend, I usually... · On Saturdays, I... · On Sundays, I... · I sometimes go to... · I never... on weekends.",
        minWords:35,
        example:"My weekends are very different from my working days. On Saturdays, I usually wake up late at about ten o'clock. I sometimes go shopping with my mother in the afternoon. In the evening, I often meet my friends at a café and we talk for hours. On Sundays, I always stay at home and relax. I never work on Sundays!"
      },
    ]
  },
  {
    id:'word_order_3', title:'Sintaxis: pasado y futuro', type:'order',
    typeLabel:'Sintaxis', typeColor:'#C05621',
    desc:'Ordena palabras para construir frases en pasado simple y futuro.',
    tasks:[
      {prompt:'Forma la frase en pasado:',words:['to','yesterday.','walked','school','She'],answer:'She walked to school yesterday.',tip:'Pasado simple regular: walk → walked.'},
      {prompt:'Forma la pregunta en pasado:',words:['you','Did','the','enjoy','party?'],answer:'Did you enjoy the party?',tip:'"Did + sujeto + verbo base + ?" No -ed después de did.'},
      {prompt:'Forma la frase en pasado:',words:['the','They','last','won','cup','year.'],answer:'They won the cup last year.',tip:'"win" es irregular → won. "Last year" al final.'},
      {prompt:'Forma la frase en futuro (will):',words:["I'll",'buy','a','tomorrow.','ticket'],answer:"I'll buy a ticket tomorrow.",tip:'"I\'ll + verbo base + objeto + tiempo"'},
      {prompt:'Forma la frase (going to):',words:["She's",'to','study','going','medicine.'],answer:"She's going to study medicine.",tip:'"is going to + verbo base". Plan decidido.'},
      {prompt:'Forma la negación en pasado:',words:["didn't",'He','work','Friday.','last'],answer:"He didn't work last Friday.",tip:'"didn\'t + verbo base". Sin -ed después de didn\'t.'},
      {prompt:'Forma la pregunta con will:',words:['you','Will','help','me?'],answer:'Will you help me?',tip:'"Will + sujeto + verbo base + ?"'},
    ]
  },
  {
    id:'fill_gaps_mixed', title:'Completa los huecos (gramática mixta)', type:'transform',
    typeLabel:'Gramática mixta', typeColor:'#2C7A7B',
    desc:'Completa frases con el tiempo verbal, modal o forma gramaticalmente correcta.',
    tasks:[
      {prompt:'"She ___ (study) when I called her last night." → pasado continuo (was/were + ING)',answer:'was studying',tip:'"was + verbo-ING" = acción en progreso en el pasado cuando algo interrumpió.'},
      {prompt:'"You ___ eat more vegetables. They\'re good for you." → consejo (should/must)',answer:'should',tip:'"should + verbo base". Recomendación, no obligación.'},
      {prompt:'"I ___ very nervous before my exam yesterday." → pasado de TO BE',answer:'was',tip:'"I was" — pasado de TO BE con I.'},
      {prompt:'"They ___ to the cinema last Saturday." → pasado negativo (go)',answer:"didn't go",tip:'"didn\'t + verbo base". "go" no cambia.'},
      {prompt:'"___ you speak more slowly, please?" → petición muy educada',answer:'Could',tip:'"Could you...?" es más educado que "Can you...?"'},
      {prompt:'"She ___ to the doctor tomorrow. She booked it this morning." → futuro planificado (go)',answer:'is going to go',tip:'Cita ya reservada → plan decidido → going to.'},
    ]
  },
  {
    id:'free_writing_email', title:'Escribe un email informal', type:'free',
    typeLabel:'Escritura libre', typeColor:'#2C7A7B',
    desc:'Practica la escritura de un email informal en inglés a un amigo/a.',
    tasks:[
      {
        prompt:'Escribe un email informal a un amigo/a de habla inglesa. Cuéntale: cómo estás, qué hiciste el fin de semana pasado (pasado simple) y qué planes tienes para las próximas vacaciones (going to / will). Mínimo 40 palabras.',
        hint:"Hi [name]! How are you? / Last weekend, I... / I went to... / I saw... / Next holidays, I'm going to... / I'll... / I can't wait!",
        minWords:40,
        example:"Hi David!\n\nHow are you? I'm great, thanks!\n\nLast weekend was fantastic. I went to a concert in the city with my friends. We had a great time!\n\nFor the next holidays, I'm going to visit my grandparents in the countryside. I'll also try to learn to cook some new recipes. I can't wait!\n\nSee you soon!\nCarlos"
      },
      {
        prompt:'"What did you do yesterday?" Escribe tu respuesta detallada. Usa pasado simple con al menos 5 verbos diferentes (go, have, meet, study, watch, cook, etc.).',
        hint:'Yesterday, I woke up at... / Then I... / After that, I... / In the afternoon, I... / In the evening, I...',
        minWords:35,
        example:"Yesterday was a busy day! I woke up early at six o'clock. First, I had a shower and ate breakfast. Then I went to university and studied for three hours. After lunch, I met my friend Ana at a café. In the evening, I cooked dinner and watched a film. I went to bed at eleven. It was a great day!"
      },
    ]
  },
  {
    id:'free_writing_opinion', title:'Expresa tu opinión', type:'free',
    typeLabel:'Escritura libre', typeColor:'#553C9A',
    desc:'Expresa tu opinión sobre temas cotidianos usando estructuras de opinión en inglés.',
    tasks:[
      {
        prompt:'¿Crees que la tecnología es buena o mala para los jóvenes? Da tu opinión con al menos 3 argumentos. Usa: "I think / I believe / In my opinion / However / For example". Mínimo 45 palabras.',
        hint:'I think / I believe / In my opinion... · On the one hand... / On the other hand... · However... · For example... · In conclusion...',
        minWords:45,
        example:"In my opinion, technology is very useful for young people, but we need to use it carefully. On the one hand, the internet helps us study and learn new things. For example, I use YouTube to practise my English. On the other hand, some people spend too much time on social media. I think we should use technology for a limited time every day. In conclusion, technology is good if we use it wisely."
      },
      {
        prompt:'¿Cuál es tu deporte o actividad favorita? Descríbela y explica por qué te gusta. ¿Cuándo y dónde la practicas? Usa: can, should, love, always, usually. Mínimo 40 palabras.',
        hint:'My favourite sport/activity is... · I play/do/practise it... · I started... years ago. · I love it because... · It helps me to... · I usually play/do it...',
        minWords:40,
        example:"My favourite sport is football. I have played it since I was six years old. I usually play with my friends on Saturday afternoons at the park near my house. I love football because it is exciting and it keeps me fit. It also helps me make new friends. I think everyone should play a sport — it is great for your health!"
      },
    ]
  }
];

// ============================================================
// VOCABULARY TOPICS
// ============================================================
const vocabTopics = [
  {
    id:'colors', title:'Los Colores', icon:'🎨', count:14,
    words:[
      {en:'black',es:'negro/a',example:'The cat is black. / The sky is black at night.'},
      {en:'white',es:'blanco/a',example:'Snow is white. / She is wearing a white dress.'},
      {en:'red',es:'rojo/a',example:'The apple is red. / He drives a red car.'},
      {en:'blue',es:'azul',example:'The sky is blue. / She has blue eyes.'},
      {en:'green',es:'verde',example:'The grass is green. / I like green vegetables.'},
      {en:'yellow',es:'amarillo/a',example:'The sun is yellow. / He wears a yellow hat.'},
      {en:'orange',es:'naranja',example:'The fruit is orange. / She painted the wall orange.'},
      {en:'purple',es:'morado/a / violeta',example:'The flower is purple. / She likes purple clothes.'},
      {en:'pink',es:'rosa',example:'The sky is pink at sunset. / She has a pink bag.'},
      {en:'brown',es:'marrón / café',example:'The dog is brown. / He has brown hair.'},
      {en:'grey',es:'gris',example:'The sky is grey and cloudy today.'},
      {en:'navy',es:'azul marino',example:'He wears a navy blue suit to work.'},
      {en:'beige',es:'beige / crema',example:'The walls of the living room are beige.'},
      {en:'gold',es:'dorado/a',example:'She wears a beautiful gold necklace.'},
    ]
  },
  {
    id:'family', title:'La Familia', icon:'👨‍👩‍👧', count:20,
    words:[
      {en:'father',es:'padre',example:'My father is a doctor. He is 50 years old.'},
      {en:'mother',es:'madre',example:'My mother is a teacher. She loves reading.'},
      {en:'brother',es:'hermano',example:'I have one brother. His name is Luis.'},
      {en:'sister',es:'hermana',example:'My sister is older than me. She lives in Bogotá.'},
      {en:'son',es:'hijo',example:'They have two sons and one daughter.'},
      {en:'daughter',es:'hija',example:'Their daughter is studying medicine at university.'},
      {en:'grandfather',es:'abuelo',example:'My grandfather is 75 years old and retired.'},
      {en:'grandmother',es:'abuela',example:'My grandmother makes delicious arepas every Sunday.'},
      {en:'uncle',es:'tío',example:'My uncle lives in Canada. He visits us in summer.'},
      {en:'aunt',es:'tía',example:'My aunt has three children. They are lovely.'},
      {en:'cousin',es:'primo/a',example:'My cousin and I are the same age.'},
      {en:'husband',es:'esposo / marido',example:'Her husband is very kind and funny.'},
      {en:'wife',es:'esposa',example:'His wife is a lawyer. She works very hard.'},
      {en:'nephew',es:'sobrino',example:'My nephew is only three years old.'},
      {en:'niece',es:'sobrina',example:'My niece loves dancing and music.'},
      {en:'twins',es:'gemelos/as',example:'My cousins are twins. They look identical!'},
      {en:'parents',es:'padres',example:'My parents are from Cali, Colombia.'},
      {en:'grandparents',es:'abuelos',example:'My grandparents live near us in the same street.'},
      {en:'stepfather',es:'padrastro',example:'Her stepfather is very friendly and kind.'},
      {en:'stepmother',es:'madrastra',example:'His stepmother is a nurse at the hospital.'},
    ]
  },
  {
    id:'people', title:'Las Personas', icon:'👤', count:16,
    words:[
      {en:'baby',es:'bebé',example:'The baby is sleeping. She is only six months old.'},
      {en:'toddler',es:'niño/a pequeño/a (1-3 años)',example:'The toddler is learning to walk.'},
      {en:'child',es:'niño/a',example:'The child is playing in the park.'},
      {en:'teenager',es:'adolescente',example:'She is a teenager. She is fifteen years old.'},
      {en:'young person',es:'joven',example:'He is a young person full of energy and ideas.'},
      {en:'adult',es:'adulto/a',example:'Adults pay full price at the cinema.'},
      {en:'middle-aged',es:'de mediana edad',example:'He is middle-aged, about forty-five years old.'},
      {en:'elderly',es:'anciano/a / mayor',example:'The elderly man reads the newspaper every morning.'},
      {en:'woman',es:'mujer',example:'The woman in the red coat is my English teacher.'},
      {en:'man',es:'hombre',example:'The man at the door is waiting for you.'},
      {en:'girl',es:'chica / niña',example:'The girl has long blonde hair and blue eyes.'},
      {en:'boy',es:'chico / niño',example:'The boy runs very fast in the park.'},
      {en:'lady',es:'señora / dama',example:'The lady at reception is very helpful.'},
      {en:'gentleman',es:'caballero / señor',example:'The gentleman opened the door for her.'},
      {en:'person',es:'persona',example:'There is one person in the room.'},
      {en:'people',es:'personas / gente',example:'There are many people in the street today.'},
    ]
  },
  {
    id:'greetings', title:'Saludos y Presentaciones', icon:'👋', count:18,
    words:[
      {en:'Good morning',es:'Buenos días',example:'Good morning! How are you today?'},
      {en:'Good afternoon',es:'Buenas tardes',example:'Good afternoon, Mrs Smith. How are you?'},
      {en:'Good evening',es:'Buenas noches (al llegar)',example:'Good evening, ladies and gentlemen!'},
      {en:'Good night',es:'Buenas noches (al despedirse)',example:'Good night! Sleep well!'},
      {en:'Hello / Hi',es:'Hola',example:'"Hello!" / "Hi, how\'s it going?"'},
      {en:'Goodbye / Bye',es:'Adiós',example:'"Goodbye, see you tomorrow!"'},
      {en:'See you later',es:'Hasta luego',example:'"See you later, have a great day!"'},
      {en:'See you tomorrow',es:'Hasta mañana',example:'"See you tomorrow at school!"'},
      {en:'How are you?',es:'¿Cómo estás?',example:'"Hi Tom! How are you?" "Fine, thanks!"'},
      {en:'Fine, thanks',es:'Bien, gracias',example:'"How are you?" — "Fine, thanks. And you?"'},
      {en:'Not bad',es:'No me quejo / Bastante bien',example:'"How are you?" — "Not bad, thanks."'},
      {en:"What's your name?",es:'¿Cómo te llamas?',example:'"What\'s your name?" "My name is Ana."'},
      {en:'My name is...',es:'Me llamo... / Mi nombre es...',example:'"My name is Carlos. Nice to meet you!"'},
      {en:'Nice to meet you',es:'Mucho gusto / Encantado/a',example:'"Nice to meet you, Ana!" "Nice to meet you too!"'},
      {en:'Where are you from?',es:'¿De dónde eres?',example:'"Where are you from?" "I\'m from Colombia."'},
      {en:"I'm from...",es:'Soy de...',example:'"I\'m from Cúcuta, in the north of Colombia."'},
      {en:'How old are you?',es:'¿Cuántos años tienes?',example:'"How old are you?" "I\'m 22 years old."'},
      {en:'Best wishes',es:'Mis mejores deseos',example:'"Best wishes to your family!" "Thank you so much!"'},
    ]
  },
  {
    id:'numbers_vocab', title:'Números y Fechas', icon:'🔢', count:18,
    words:[
      {en:'one / first',es:'uno / primero',example:'"I have one dog." / "She is first in class."'},
      {en:'two / second',es:'dos / segundo',example:'"I need two tickets." / "He came second."'},
      {en:'three / third',es:'tres / tercero',example:'"There are three rooms." / "This is the third time."'},
      {en:'five / fifth',es:'cinco / quinto',example:'"I have five friends." / "She lives on the fifth floor."'},
      {en:'ten / tenth',es:'diez / décimo',example:'"There are ten students." / "Today is the tenth of March."'},
      {en:'twelve / twelfth',es:'doce / duodécimo',example:'"Twelve months in a year." / "December is the twelfth month."'},
      {en:'fifteen / fifteenth',es:'quince / decimoquinto',example:'"She is fifteen years old." / "On the fifteenth of June."'},
      {en:'twenty / twentieth',es:'veinte / vigésimo',example:'"I need twenty minutes." / "The twentieth century."'},
      {en:'thirty / thirtieth',es:'treinta / trigésimo',example:'"He is thirty years old." / "On the thirtieth of April."'},
      {en:'forty / fortieth',es:'cuarenta / cuadragésimo',example:'"There are forty students." ⚠️ forty (NO fourty!)'},
      {en:'fifty / fiftieth',es:'cincuenta / quincuagésimo',example:'"Fifty people attended." / "Her fiftieth birthday."'},
      {en:'a hundred',es:'cien / ciento',example:'"There are a hundred people in the room."'},
      {en:'a thousand',es:'mil',example:'"A thousand students study here."'},
      {en:'a million',es:'un millón',example:'"One million people live in this city."'},
      {en:'half',es:'medio/a / la mitad',example:'"Half past seven." / "I want half, please."'},
      {en:'quarter',es:'un cuarto',example:'"A quarter past eight." / "Quarter to nine."'},
      {en:'dozen',es:'docena',example:'"A dozen eggs, please." (= 12)'},
      {en:'couple',es:'un par / dos (aprox.)',example:'"I need a couple of minutes." (= 2 approximately)'},
    ]
  },
  {
    id:'jobs', title:'Profesiones y trabajos', icon:'💼', count:18,
    words:[
      {en:'doctor',es:'médico/a',example:'"She is a doctor. She works at the hospital."'},
      {en:'nurse',es:'enfermero/a',example:'"My aunt is a nurse. She works night shifts."'},
      {en:'teacher',es:'profesor/a / maestro/a',example:'"My father is a teacher. He teaches maths."'},
      {en:'engineer',es:'ingeniero/a',example:'"He is an engineer. He designs bridges."'},
      {en:'lawyer',es:'abogado/a',example:'"She is a lawyer and works at a big firm."'},
      {en:'police officer',es:'oficial de policía',example:'"The police officer helped the lost child."'},
      {en:'firefighter',es:'bombero/a',example:'"Firefighters are very brave people."'},
      {en:'chef',es:'chef / cocinero/a',example:'"He is a chef at a famous restaurant."'},
      {en:'journalist',es:'periodista',example:'"She is a journalist for a national newspaper."'},
      {en:'accountant',es:'contable / contador/a',example:'"He works as an accountant at a bank."'},
      {en:'architect',es:'arquitecto/a',example:'"She is an architect. She designs beautiful buildings."'},
      {en:'artist',es:'artista',example:'"He is an artist. He paints every day."'},
      {en:'musician',es:'músico/a',example:'"She is a musician. She plays the guitar."'},
      {en:'pilot',es:'piloto',example:'"He is a pilot and flies to Europe every week."'},
      {en:'farmer',es:'agricultor/a / granjero/a',example:'"My grandfather was a farmer. He had cows and chickens."'},
      {en:'student',es:'estudiante',example:'"I am a student. I study at university."'},
      {en:'businessman',es:'empresario/a',example:'"He is a successful businessman."'},
      {en:'receptionist',es:'recepcionista',example:'"The receptionist at the hotel was very helpful."'},
    ]
  },
  {
    id:'places', title:'Lugares de la ciudad', icon:'🏙️', count:18,
    words:[
      {en:'bank',es:'banco',example:'"The bank is on the corner of the street."'},
      {en:'hospital',es:'hospital',example:'"She works at the hospital near the park."'},
      {en:'school',es:'escuela / colegio',example:'"The school is next to the library."'},
      {en:'supermarket',es:'supermercado',example:'"We do the shopping at the supermarket on Saturdays."'},
      {en:"chemist's / pharmacy",es:'farmacia',example:'"I need to go to the chemist\'s for medicine."'},
      {en:'post office',es:'oficina de correos',example:'"I sent a letter at the post office yesterday."'},
      {en:'library',es:'biblioteca',example:'"I study at the library every afternoon after school."'},
      {en:'church',es:'iglesia',example:'"The church is opposite the town hall."'},
      {en:'park',es:'parque',example:'"We walk in the park on Sunday mornings."'},
      {en:'station',es:'estación (de tren/metro)',example:'"The station is behind the hotel."'},
      {en:'airport',es:'aeropuerto',example:'"Our flight leaves from the airport at noon."'},
      {en:'restaurant',es:'restaurante',example:'"We had dinner at a nice Italian restaurant."'},
      {en:'café',es:'cafetería',example:'"I meet my friends at the café on Friday evenings."'},
      {en:'cinema',es:'cine',example:'"We went to the cinema last Saturday night."'},
      {en:'museum',es:'museo',example:'"The museum is in the city centre and it\'s free."'},
      {en:'hotel',es:'hotel',example:'"The hotel is opposite the train station."'},
      {en:'market',es:'mercado',example:'"There is a big market in the square every Sunday."'},
      {en:'town hall',es:'ayuntamiento / alcaldía',example:'"The town hall is a beautiful old building in the centre."'},
    ]
  },
  {
    id:'adjectives', title:'Adjetivos esenciales', icon:'✨', count:20,
    words:[
      {en:'big / large',es:'grande',example:'"London is a big city." / "She has a large family."'},
      {en:'small / little',es:'pequeño/a',example:'"It\'s a small house but very cosy and comfortable."'},
      {en:'old',es:'viejo/a / antiguo/a / mayor',example:'"He is an old man." / "This is an old building."'},
      {en:'young',es:'joven',example:'"She is very young — only eighteen years old."'},
      {en:'new',es:'nuevo/a',example:'"I have a new computer. I love it!"'},
      {en:'good',es:'bueno/a',example:'"She is a good student. She works very hard."'},
      {en:'bad',es:'malo/a',example:'"The weather is very bad today. It\'s raining heavily."'},
      {en:'beautiful',es:'hermoso/a / precioso/a',example:'"She has a beautiful voice. Everyone loves hearing her sing."'},
      {en:'ugly',es:'feo/a',example:'"That old building is really ugly!"'},
      {en:'tall',es:'alto/a',example:'"He is very tall — almost two metres!"'},
      {en:'short',es:'bajo/a / corto/a',example:'"She is quite short, just like her mother."'},
      {en:'hot',es:'caliente / caluroso',example:'"It\'s very hot today! Let\'s go swimming."'},
      {en:'cold',es:'frío/a',example:'"The coffee is cold. Can you warm it up please?"'},
      {en:'expensive',es:'caro/a',example:'"This restaurant is too expensive for me."'},
      {en:'cheap',es:'barato/a',example:'"This market is cheap and has great fresh food."'},
      {en:'interesting',es:'interesante',example:'"The book is very interesting. I can\'t stop reading it."'},
      {en:'boring',es:'aburrido/a',example:'"The film was really boring. I almost fell asleep."'},
      {en:'kind',es:'amable / bondadoso/a',example:'"My teacher is very kind and always helps us."'},
      {en:'friendly',es:'amigable / simpático/a',example:'"The people in Colombia are very friendly and welcoming."'},
      {en:'hardworking',es:'trabajador/a / dedicado/a',example:'"She is hardworking and always finishes her tasks on time."'},
    ]
  },
  {
    id:'food_drink', title:'Comida y bebida', icon:'🍽️', count:20,
    words:[
      {en:'bread',es:'pan',example:'"I have toast and bread for breakfast every morning."'},
      {en:'rice',es:'arroz',example:'"Rice is very popular in Colombia and all of South America."'},
      {en:'chicken',es:'pollo',example:'"She cooks chicken with vegetables every Sunday."'},
      {en:'fish',es:'pescado',example:'"I love fish. We eat it at least twice a week."'},
      {en:'eggs',es:'huevos',example:'"I have scrambled eggs for breakfast on Saturdays."'},
      {en:'fruit',es:'fruta',example:'"I eat fruit every day to stay healthy."'},
      {en:'vegetables',es:'verduras / vegetales',example:'"The doctor says I should eat more vegetables."'},
      {en:'water',es:'agua',example:'"You should drink eight glasses of water a day."'},
      {en:'coffee',es:'café',example:'"I always drink a cup of black coffee in the morning."'},
      {en:'tea',es:'té',example:'"British people love drinking tea. They drink it all day!"'},
      {en:'milk',es:'leche',example:'"She adds milk to her coffee every morning."'},
      {en:'juice',es:'zumo / jugo',example:'"I drink orange juice every morning. It\'s delicious."'},
      {en:'soup',es:'sopa',example:'"We always eat hot soup when it\'s cold outside."'},
      {en:'salad',es:'ensalada',example:'"I eat a fresh salad for lunch every day."'},
      {en:'pasta',es:'pasta',example:'"Pasta is quick and easy to cook. I love it!"'},
      {en:'chocolate',es:'chocolate',example:'"I love dark chocolate. It\'s my favourite treat."'},
      {en:'sandwich',es:'sándwich / bocadillo',example:'"I have a cheese sandwich for lunch at work."'},
      {en:'cake',es:'pastel / torta',example:'"She made a delicious chocolate cake for my birthday."'},
      {en:'meat',es:'carne',example:'"He doesn\'t eat meat. He is a vegetarian."'},
      {en:'sugar',es:'azúcar',example:'"I don\'t put sugar in my coffee. I prefer it bitter."'},
    ]
  },
  {
    id:'body_health', title:'El cuerpo y la salud', icon:'🏥', count:20,
    words:[
      {en:'head',es:'cabeza',example:'"I have a terrible headache today."'},
      {en:'face',es:'cara / rostro',example:'"She has a beautiful face and kind eyes."'},
      {en:'eye',es:'ojo',example:'"She has green eyes. They are very beautiful."'},
      {en:'ear',es:'oreja / oído',example:'"I can\'t hear well. I have a problem with my ear."'},
      {en:'nose',es:'nariz',example:'"He has a cold. His nose is red."'},
      {en:'mouth',es:'boca',example:'"Open your mouth, please. The dentist needs to look inside."'},
      {en:'tooth / teeth',es:'diente / dientes',example:'"You should brush your teeth twice a day."'},
      {en:'neck',es:'cuello',example:'"My neck hurts after sitting at the computer all day."'},
      {en:'shoulder',es:'hombro',example:'"She carries her heavy bag on one shoulder."'},
      {en:'arm',es:'brazo',example:'"He broke his arm playing football last week."'},
      {en:'hand',es:'mano',example:'"She shook my hand when we met for the first time."'},
      {en:'leg',es:'pierna',example:'"My legs are sore after running this morning."'},
      {en:'foot / feet',es:'pie / pies',example:'"My feet hurt after walking all day."'},
      {en:'stomach',es:'estómago / barriga',example:'"I have a stomachache. I think I ate something bad."'},
      {en:'back',es:'espalda',example:'"She has back pain from sitting at her desk all day."'},
      {en:'headache',es:'dolor de cabeza',example:'"I have a terrible headache. I need some paracetamol."'},
      {en:'cold',es:'resfriado',example:'"I have a cold. I\'m sneezing and my nose is running."'},
      {en:'fever',es:'fiebre',example:'"The child has a high fever. We need to call the doctor."'},
      {en:'tired',es:'cansado/a',example:'"I\'m very tired. I only slept four hours last night."'},
      {en:'healthy',es:'sano/a / saludable',example:'"She is very healthy. She exercises every day and eats well."'},
    ]
  },
  {
    id:'transport_travel', title:'Transporte y viajes', icon:'✈️', count:18,
    words:[
      {en:'car',es:'coche / auto / carro',example:'"He drives his car to work every day."'},
      {en:'bus',es:'autobús / bus',example:'"I take the bus to school. It\'s cheaper than a taxi."'},
      {en:'train',es:'tren',example:'"The train to Bogotá leaves at eight o\'clock."'},
      {en:'plane / aeroplane',es:'avión',example:'"We took a plane to London. The flight was five hours."'},
      {en:'underground / metro / tube',es:'metro',example:'"The London Underground is called the Tube."'},
      {en:'taxi',es:'taxi',example:'"We took a taxi from the airport to the hotel."'},
      {en:'bicycle / bike',es:'bicicleta',example:'"She rides her bike to university every morning."'},
      {en:'motorbike',es:'motocicleta / moto',example:'"He has a red motorbike. He loves riding it."'},
      {en:'station',es:'estación',example:'"The bus station is next to the market in the city centre."'},
      {en:'airport',es:'aeropuerto',example:'"We arrived at the airport two hours before the flight."'},
      {en:'ticket',es:'billete / tiquete',example:'"I bought two return tickets for the train."'},
      {en:'passport',es:'pasaporte',example:'"Don\'t forget your passport. You can\'t travel without it."'},
      {en:'luggage / suitcase',es:'equipaje / maleta',example:'"My suitcase is very heavy. I packed too many clothes."'},
      {en:'hotel',es:'hotel',example:'"We stayed at a five-star hotel near the beach."'},
      {en:'journey / trip',es:'viaje / trayecto',example:'"The journey from Cúcuta to Bogotá takes about eight hours."'},
      {en:'on foot',es:'a pie / caminando',example:'"The supermarket is close. We can go on foot."'},
      {en:'arrive',es:'llegar',example:'"What time does the flight arrive in Madrid?"'},
      {en:'depart / leave',es:'salir / partir',example:'"The train departs from platform 3 at 10:15."'},
    ]
  },
];
