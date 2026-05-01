// data-grammar.js v4.0 — MÓDULOS DE GRAMÁTICA A1 y A2
// Contiene exclusivamente la teoría y los ejercicios de gramática.

const modulesData = {

  // ==================== NIVEL A1 (FUNDAMENTOS) ==================== //

  articles: {
    id:'articles', title:'Artículos: A, An, The', icon:'type', color:'#7C3AED',
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
      <div class="example-block">
        <div class="ex-row"><div class="ex-en">I saw <u>a</u> dog in the park.</div><div class="ex-es">Vi un perro en el parque. (primera mención)</div></div>
        <div class="ex-row"><div class="ex-en"><u>The</u> dog was very friendly.</div><div class="ex-es">El perro era muy amistoso. (ya lo mencionamos)</div></div>
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
      {type:'write',q:'Complete: I need ___ new computer for my work.',a:'a',exp:'"Computer" empieza por consonante → "a computer".'},
      {type:'write',q:'Complete: Can you open ___ window, please? It is hot in here.',a:'the',exp:'Ventana específica ya conocida → "the window".'},
      {type:'write',q:'Complete: He is ___ university student. (pista: suena "yu")',a:'a',exp:'"University" suena como "yu" (consonante) → "a university student".'},
      {type:'order',q:'Ordena la frase:',words:['an','She','is','engineer.'],a:'She is an engineer.',exp:'"An" porque "engineer" empieza por sonido vocal (e).'},
      {type:'order',q:'Ordena la frase:',words:['the','is','Where','station?'],a:'Where is the station?',exp:'"The station" → lugar específico ya conocido.'},
      {type:'order',q:'Ordena la frase:',words:['hour','an','takes','It'],a:'It takes an hour.',exp:'"An" porque "hour" empieza por sonido vocal (la h no suena).'},
      {type:'order',q:'Ordena la frase:',words:['Nile','The','longest','is','the','river.'],a:'The Nile is the longest river.',exp:'Ríos → "The". Superlativo → "the longest".'},
      {type:'choice',q:'I usually have ___ breakfast at 7 o\'clock.',opts:['a','an','—(sin artículo)'],a:'—(sin artículo)',exp:'Las comidas en general no llevan artículo en inglés: "have breakfast".'},
      {type:'choice',q:'___ Pacific Ocean is the largest ocean in the world.',opts:['A','An','The'],a:'The',exp:'Océanos y mares llevan siempre "The".'},
      {type:'write',q:'Complete: I met ___ interesting person at the party last night.',a:'an',exp:'"Interesting" empieza por vocal → "an interesting person".'},
      {type:'order',q:'Ordena la frase:',words:['best','She','the','student','is','in','class.'],a:'She is the best student in class.',exp:'Superlativo → siempre lleva "the best".'},
      {type:'choice',q:'My sister is ___ nurse. She works at ___ hospital.',opts:['a / a','an / a','a / an'],a:'a / a',exp:'"Nurse" → consonante → "a nurse". "Hospital" → consonante → "a hospital".'},
      {type:'write',q:'Complete: ___ Amazon is ___ longest river in South America.',a:'The The',exp:'Ríos → "The Amazon". Superlativo → "the longest river".'}
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
          <b>Superficie:</b> on the table · on the wall<br>
          <b>Medios:</b> on TV · on the radio · on the internet</small>
        </div>
        <div class="t-box" style="border-color:#38A169;background:#F0FFF4">
          <strong style="color:#1C4532">IN — períodos y espacios</strong>
          <small><b>Meses y Años:</b> in June · in 1990<br>
          <b>Partes del día:</b> in the morning · in the afternoon<br>
          <b>Lugares:</b> in London · in the box</small>
        </div>
        <div class="t-box" style="border-color:#805AD5;background:#FAF5FF">
          <strong style="color:#322659">AT — puntos exactos</strong>
          <small><b>Horas:</b> at 7 o'clock · at midnight<br>
          <b>Lugares exactos:</b> at home · at school<br>
          <b>Fin de semana:</b> at the weekend</small>
        </div>
      </div>
      <div class="theory-grid" style="margin-top:16px">
        <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
          <strong style="color:#742A2A">Preposiciones de lugar</strong>
          <small><b>next to</b> = al lado de · <b>behind</b> = detrás de<br>
          <b>in front of</b> = delante de · <b>between</b> = entre</small>
        </div>
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
      {type:'write',q:'Completa: She was born ___ the 5th of June ___ 1995.',a:'on in',exp:'Fecha con día → ON. Año → IN.'}
    ]
  },

  pronouns:{
    id:'pronouns', title:'Pronombres Personales', icon:'users', color:'#D97706',
    theory:`
      <h3>Los pronombres en inglés</h3>
      <p>Reemplazan a los sustantivos. Cada uno tiene su función exacta.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#D97706;background:#FFFBEB">
          <strong style="color:#78350F">Sujeto (Hacen la acción)</strong>
          <small><b>I, you, he, she, it, we, they</b><br>
          "<u>She</u> is a doctor."</small>
        </div>
        <div class="t-box" style="border-color:#2563EB;background:#EFF6FF">
          <strong style="color:#1E3A8A">Objeto (Reciben la acción)</strong>
          <small><b>me, you, him, her, it, us, them</b><br>
          "Call <u>him</u>." / "Tell <u>us</u>."</small>
        </div>
        <div class="t-box" style="border-color:#059669;background:#ECFDF5">
          <strong style="color:#064E3B">Posesivos Adjetivos (Antes de la cosa)</strong>
          <small><b>my, your, his, her, its, our, their</b><br>
          "<u>My</u> car." / "<u>Their</u> house."</small>
        </div>
        <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
          <strong style="color:#4C1D95">Posesivos Pronombres (Solos)</strong>
          <small><b>mine, yours, his, hers, ours, theirs</b><br>
          "This is <u>mine</u>."</small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'___ is a teacher. She loves her job.',opts:['He','She','They'],a:'She',exp:'"She" para referirse a una mujer.'},
      {type:'choice',q:'This is my book. That one is ___.',opts:['your','yours','you'],a:'yours',exp:'"Yours" = pronombre posesivo, solo, sin sustantivo.'},
      {type:'choice',q:'Tom is my friend. I like ___ a lot.',opts:['him','her','them'],a:'him',exp:'"Him" = pronombre objeto masculino.'},
      {type:'choice',q:'___ is cold today. Bring a jacket!',opts:['He','She','It'],a:'It',exp:'"It" para el tiempo meteorológico.'},
      {type:'choice',q:'My sister and I love ___ city.',opts:['our','ours','us'],a:'our',exp:'"Our" = adjetivo posesivo (antes del sustantivo "city").'},
      {type:'choice',q:'Give the book to ___, please. (a ella)',opts:['she','her','hers'],a:'her',exp:'"Her" = pronombre objeto femenino.'},
      {type:'choice',q:'Those keys are not ___. They are mine.',opts:['your','you','yours'],a:'yours',exp:'"Yours" = pronombre posesivo (sin sustantivo).'},
      {type:'write',q:'Completa: Tom and Mary are my neighbours. ___ are very kind.',a:'They',exp:'"They" para dos o más personas.'},
      {type:'write',q:'Completa: This is ___ car. (de nosotros → adjetivo posesivo)',a:'our',exp:'"Our" = adjetivo posesivo de "we".'},
      {type:'write',q:'Completa: I don\'t know ___. Who is she? (a ella → objeto)',a:'her',exp:'"Her" = pronombre objeto femenino.'},
      {type:'write',q:'Completa: ___ raining outside. Close the window!',a:"It's",exp:'"It\'s" (It is) → impersonal meteorológico.'},
      {type:'write',q:'Completa: The children are doing ___ homework.',a:'their',exp:'"Their" = adjetivo posesivo de "they".'},
      {type:'order',q:'Ordena la frase:',words:['loves','He','her.'],a:'He loves her.',exp:'"He" = sujeto; "her" = objeto femenino.'},
      {type:'order',q:'Ordena la frase:',words:['is','This','mine.','book'],a:'This book is mine.',exp:'"Mine" = pronombre posesivo de "I".'},
      {type:'order',q:'Ordena la frase:',words:['told','She','story.','us','a'],a:'She told us a story.',exp:'"Us" = pronombre objeto de "we".'},
      {type:'choice',q:'Can you help ___? We need assistance.',opts:['we','our','us'],a:'us',exp:'"Us" = pronombre objeto de "we".'},
      {type:'choice',q:'I called Maria but ___ phone was off.',opts:['her','she','hers'],a:'her',exp:'"Her phone" = adjetivo posesivo + sustantivo.'},
      {type:'write',q:'A: "Is this your bag?" B: "Yes, it\'s ___."',a:'mine',exp:'"Mine" = el/la mío/a (pronombre posesivo).'},
      {type:'write',q:'A: "Whose book is this?" B: "It\'s ___." (de ella)',a:'hers',exp:'"Hers" = pronombre posesivo femenino (de she).'},
      {type:'order',q:'Ordena la frase:',words:['helped','me','She','homework.','with','my'],a:'She helped me with my homework.',exp:'"Me" = objeto; "my homework" = adjetivo posesivo.'}
    ]
  },

  verbs:{
    id:'verbs', title:'Verbos: Be, Have, Do', icon:'command', color:'#E53E3E',
    theory:`
      <h3>Los tres verbos fundamentales</h3>
      <p>Son irregulares y también actúan como <strong>auxiliares</strong> para formar preguntas y negaciones.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
          <strong style="color:#742A2A">TO BE — ser / estar</strong>
          <small>
            I <b>am</b> · You/We/They <b>are</b> · He/She/It <b>is</b><br>
            <b>Neg:</b> am not · aren't · isn't<br>
            <b>Preg:</b> Are you...? / Is she...?
          </small>
        </div>
        <div class="t-box" style="border-color:#38A169;background:#F0FFF4">
          <strong style="color:#1C4532">TO HAVE — tener</strong>
          <small>
            I/You/We/They <b>have</b> · He/She/It <b>has</b><br>
            <b>Neg:</b> don't have · doesn't have<br>
            <b>Preg:</b> Do you have...? / Does she have...?
          </small>
        </div>
        <div class="t-box" style="border-color:#3182CE;background:#EBF8FF">
          <strong style="color:#1A365D">TO DO — hacer / auxiliar</strong>
          <small>
            I/You/We/They <b>do</b> · He/She/It <b>does</b><br>
            <b>Neg:</b> don't · doesn't<br>
            "What do you do?" = ¿A qué te dedicas?
          </small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'We ___ tired after the long walk.',opts:['am','is','are'],a:'are',exp:'"We" → "are". Sujeto plural.'},
      {type:'choice',q:'___ she a doctor?',opts:['Is','Are','Am'],a:'Is',exp:'He/She/It → "Is" en preguntas.'},
      {type:'choice',q:'I ___ a beautiful house in the country.',opts:['have','has','do'],a:'have',exp:'"I" → "have". Solo He/She/It usan "has".'},
      {type:'choice',q:'He ___ his homework every single day.',opts:['do','does','is'],a:'does',exp:'"He" → "does" (auxiliar do en 3ª persona).'},
      {type:'choice',q:'They ___ at the cinema right now.',opts:['is','am','are'],a:'are',exp:'"They" → "are".'},
      {type:'choice',q:'___ you speak Spanish? — Yes, I do.',opts:['Is','Are','Do'],a:'Do',exp:'"Do" para preguntas con I/You/We/They.'},
      {type:'choice',q:'She ___ not like cold weather at all.',opts:['do','does','is'],a:'does',exp:'"She doesn\'t" — "does" en negaciones con 3ª persona.'},
      {type:'choice',q:'My parents ___ a small café near the park.',opts:['have','has','is'],a:'have',exp:'"My parents" (ellos) → "have".'},
      {type:'write',q:'Completa: It ___ very cold outside today.',a:'is',exp:'"It is cold" — "it" para describir el tiempo.'},
      {type:'write',q:'Completa: They ___ not at home. Where are they?',a:'are',exp:'"They are not" / "They aren\'t".'},
      {type:'write',q:'Completa: ___ he have a dog?',a:'Does',exp:'"Does he have?" — pregunta con 3ª persona singular.'},
      {type:'write',q:'Completa en negativo: She ___ like spicy food.',a:"doesn't",exp:'"She doesn\'t" = she does not.'},
      {type:'write',q:'Completa: I ___ a terrible headache.',a:'have',exp:'"I have a headache" — tener con I → have.'},
      {type:'write',q:'Completa: ___ they happy about the news?',a:'Are',exp:'"Are they happy?" — pregunta con They.'},
      {type:'order',q:'Ordena la frase:',words:['not','am','ill.','I'],a:'I am not ill.',exp:'"I am not" — negación de to be con I.'},
      {type:'order',q:'Ordena la frase:',words:['has','a','She','baby.'],a:'She has a baby.',exp:'"She has" — 3ª persona de to have.'},
      {type:'order',q:'Ordena la pregunta:',words:['you','a','Do','bicycle?','have'],a:'Do you have a bicycle?',exp:'"Do you have?" — pregunta con you + have.'},
      {type:'order',q:'Ordena la frase:',words:['not','He','does','work.'],a:'He does not work.',exp:'"He does not" — negación 3ª persona.'},
      {type:'order',q:'Ordena la frase:',words:['two','We','have','cats.'],a:'We have two cats.',exp:'"We have" — primera persona plural.'},
      {type:'choice',q:'What ___ you do for a living?',opts:['is','do','are'],a:'do',exp:'"What do you do?" — pregunta habitual sobre profesión.'}
    ]
  },

  present_simple:{
    id:'present_simple', title:'Presente Simple', icon:'sun', color:'#38B2AC',
    theory:`
      <h3>Presente Simple — Rutinas y Verdades</h3>
      <p>Describe hábitos, rutinas, verdades generales y situaciones permanentes.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#38B2AC;background:#E6FFFA">
          <strong style="color:#1D4044">Afirmativo (+)</strong>
          <small>I/You/We/They + <b>verbo base</b><br>
          He/She/It + <b>verbo + S</b><br>
          "I <u>eat</u> breakfast." / "She <u>eats</u> breakfast."</small>
        </div>
        <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
          <strong style="color:#742A2A">Negativo (–)</strong>
          <small>I/You/We/They + <b>don't</b> + verbo base<br>
          He/She/It + <b>doesn't</b> + verbo base<br>
          "She <u>doesn't</u> drive."</small>
        </div>
      </div>
      <div class="theory-grid" style="margin-top:12px">
        <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
          <strong style="color:#4C1D95">Reglas ortográficas (3ª persona +s)</strong>
          <small>
            Normal: +s → works, reads<br>
            -ch/-sh/-x/-s/-o: +es → watches, goes, washes<br>
            Consonante + y → ies: studies, flies<br>
            <b>Irregulares:</b> have→<b>has</b>
          </small>
        </div>
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
      {type:'choice',q:'How often ___ she go to the gym?',opts:['do','does','is'],a:'does',exp:'"She" (3ª persona) → "does" en preguntas.'}
    ]
  },

  present_cont:{
    id:'present_cont', title:'Presente Continuo', icon:'activity', color:'#805AD5',
    theory:`
      <h3>Acciones en progreso</h3>
      <p>Describe acciones que ocurren <strong>ahora mismo</strong>. Estructura: <strong>TO BE + verbo-ING</strong>.</p>
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
            Normal: read→read<b>ing</b><br>
            -e muda: write→writ<b>ing</b><br>
            CVC corta: run→run<b>ning</b>, swim→swim<b>ming</b>
          </small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'Look! The baby ___.',opts:['sleeps','is sleeping','sleep'],a:'is sleeping',exp:'"Look!" → acción en este momento → continuo.'},
      {type:'choice',q:'What ___ you doing right now?',opts:['do','are','is'],a:'are',exp:'"Right now" → continuo. "What are you doing?"'},
      {type:'choice',q:'The kids ___ playing in the garden at the moment.',opts:['is','are','am'],a:'are',exp:'"The kids" (ellos) → "are". Continuo con be + ING.'},
      {type:'choice',q:'I ___ not talking to you right now. I\'m busy.',opts:['am','is','are'],a:'am',exp:'"I" → "am". Continuo negativo: "I am not".'},
      {type:'write',q:'Verbo+ING (run): The dog is ___.',a:'running',exp:'"run" → CVC (r-u-n) → doble consonante → running.'},
      {type:'write',q:'Verbo+ING (study): He is ___ for his exam.',a:'studying',exp:'"study" → termina en vocal+y → studying.'},
      {type:'write',q:'Verbo+ING (write): She is ___ a letter.',a:'writing',exp:'"write" → termina en -e muda → drop e → writing.'},
      {type:'write',q:'Completa (ahora): They ___ (play) football right now.',a:'are playing',exp:'"Right now" → continuo. They are playing.'},
      {type:'order',q:'Ordena la frase:',words:['a','I','letter.','am','writing'],a:'I am writing a letter.',exp:'"I am + -ING" → presente continuo.'},
      {type:'order',q:'Ordena la frase:',words:['reading','He','is','moment.','the','at'],a:'He is reading at the moment.',exp:'"At the moment" → señal de continuo.'},
      {type:'order',q:'Ordena la frase:',words:['raining','It','is','outside.'],a:'It is raining outside.',exp:'"It is raining" → situación actual.'},
      {type:'order',q:'Ordena la frase:',words:['shower.','is','She','in','singing','the'],a:'She is singing in the shower.',exp:'"Is singing" → acción en progreso ahora.'},
      {type:'choice',q:'Look! It ___ outside! Quick, take an umbrella!',opts:['rains','rained','is raining'],a:'is raining',exp:'"Look!" → acción en este momento → continuo.'},
      {type:'write',q:'Completa: We ___ (watch) TV at the moment.',a:'are watching',exp:'We are watching.'}
    ]
  },

  simple_vs_cont:{
    id:'simple_vs_cont', title:'Simple vs Continuo (Práctica)', icon:'git-merge', color:'#ED8936',
    theory:`
      <h3>¿Hábito o este momento?</h3>
      <p>Repaso para dominar la diferencia entre el presente simple y el continuo.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#38B2AC;background:#E6FFFA">
          <strong style="color:#1D4044">SIMPLE → Hábito / Verdad</strong>
          <small>
            Señales: <b>always, usually, every day, never</b><br>
            "She <u>drinks</u> coffee every morning."
          </small>
        </div>
        <div class="t-box" style="border-color:#805AD5;background:#FAF5FF">
          <strong style="color:#4C1D95">CONTINUO → Ahora</strong>
          <small>
            Señales: <b>now, right now, at the moment, look!</b><br>
            "Look! It <u>is raining</u>!"
          </small>
        </div>
      </div>
      <div class="tip-callout"><i data-lucide="alert-triangle"></i>
        <span><strong>Verbos de Estado:</strong> Verbos como love, hate, like, want, know, understand NUNCA van en continuo. "I love it" (no "I am loving it").</span>
      </div>`,
    exercises:[
      {type:'choice',q:'I usually ___ coffee, but today I ___ tea.',opts:['drink / am drinking','am drinking / drink','drinks / is drinking'],a:'drink / am drinking',exp:'"Usually" → simple. "Today" (excepción) → continuo.'},
      {type:'write',q:'Completa (ahora): Shh! I ___ (listen) to the radio.',a:'am listening',exp:'"Shh!" indica ahora → continuo.'},
      {type:'choice',q:'He always ___ his car on Sundays.',opts:['is washing','washes','washing'],a:'washes',exp:'"Always" → hábito semanal → simple.'},
      {type:'order',q:'Ordena la frase:',words:['every','I','read','day.'],a:'I read every day.',exp:'"Every day" → hábito → simple.'},
      {type:'write',q:'Completa (hábito): She usually ___ (work) in London.',a:'works',exp:'"Usually" → hábito → simple. 3ª persona → works.'},
      {type:'choice',q:'Look! It ___ outside.',opts:['rains','is raining','rain'],a:'is raining',exp:'"Look!" → acción visible ahora → continuo.'},
      {type:'order',q:'Ordena la frase:',words:['moment.','reading','He','is','at','the'],a:'He is reading at the moment.',exp:'"At the moment" → señal de continuo.'},
      {type:'choice',q:'They never ___ to the cinema.',opts:['are going','goes','go'],a:'go',exp:'"Never" → hábito → simple.'},
      {type:'write',q:'Completa (ahora): They ___ (play) football right now.',a:'are playing',exp:'"Right now" → continuo.'},
      {type:'choice',q:'I ___ this song. It\'s amazing! (love)',opts:['am loving','loves','love'],a:'love',exp:'"Love" es verbo de estado → NUNCA en continuo.'},
      {type:'write',q:'Completa (hábito): I usually ___ (eat) a sandwich for lunch.',a:'eat',exp:'"Usually" → hábito → simple.'},
      {type:'choice',q:'A: "What ___ you do?" B: "I\'m a teacher."',opts:['do','are','does'],a:'do',exp:'"What do you do?" = profesión (simple).'}
    ]
  },

  numbers:{
    id:'numbers', title:'Números, Plural y Fechas', icon:'hash', color:'#D69E2E',
    theory:`
      <h3>Números cardinales y ordinales</h3>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#D69E2E;background:#FEFCBF">
          <strong style="color:#78350F">Cardinales (contar)</strong>
          <small>
            13–19: + <b>teen</b> → thirteen, <b>fifteen</b>, sixteen...<br>
            20–90: + <b>ty</b> → twenty, <b>forty</b> ⚠️, fifty...<br>
            100: a <b>hundred</b> · 1,000: a <b>thousand</b>
          </small>
        </div>
        <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
          <strong style="color:#4C1D95">Ordinales (posición y fechas)</strong>
          <small>
            1st <b>first</b> · 2nd <b>second</b> · 3rd <b>third</b><br>
            4th fourth · 5th <b>fifth</b> ⚠️ · 12th <b>twelfth</b> ⚠️<br>
            21st twenty-<b>first</b>
          </small>
        </div>
      </div>
      <h3 style="margin-top:20px">Plural de los sustantivos</h3>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#059669;background:#ECFDF5">
          <strong style="color:#064E3B">Plurales regulares</strong>
          <small>
            Normal: + s → books, cars<br>
            -ch/-sh/-x/-s/-o: + es → watches, tomatoes<br>
            Consonante+y → ies: city→<b>cities</b><br>
            -f/-fe → ves: wife→<b>wives</b>
          </small>
        </div>
        <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
          <strong style="color:#742A2A">Plurales irregulares</strong>
          <small>
            man→<b>men</b> · woman→<b>women</b> · child→<b>children</b><br>
            person→<b>people</b> · tooth→<b>teeth</b> · foot→<b>feet</b><br>
            mouse→<b>mice</b>
          </small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'Selecciona el ordinal de 20:',opts:['twentieth','twentyth','twentith'],a:'twentieth',exp:'20th → twentieth.'},
      {type:'choice',q:'El ordinal de 5 es:',opts:['fiveth','fifth','fifeth'],a:'fifth',exp:'"Fifth" — el 5 tiene forma irregular.'},
      {type:'choice',q:'El plural de "child" es:',opts:['childs','childrens','children'],a:'children',exp:'"Children" — plural completamente irregular de "child".'},
      {type:'choice',q:'80 se escribe:',opts:['eighteen','eighty','eigty'],a:'eighty',exp:'"Eighty" — la ortografía correcta de 80.'},
      {type:'choice',q:'El plural de "city" es:',opts:['citys','cities','cityes'],a:'cities',exp:'"city" → consonante+y → cities (y→ies).'},
      {type:'choice',q:'El plural de "wife" es:',opts:['wifes','wives','wife'],a:'wives',exp:'"wife" → -fe → ves → "wives".'},
      {type:'choice',q:'El plural de "tooth" es:',opts:['tooths','toothes','teeth'],a:'teeth',exp:'"Teeth" — plural irregular de "tooth".'},
      {type:'write',q:'Escribe el número en inglés: 15',a:'fifteen',exp:'"Fifteen" — uno de los -teen irregulares.'},
      {type:'write',q:'Escribe el número en inglés: 40',a:'forty',exp:'"Forty" — SIN la "u" de four. ¡Excepción importante!'},
      {type:'write',q:'Escribe el ordinal de 12:',a:'twelfth',exp:'"Twelfth" — forma muy irregular.'},
      {type:'write',q:'Plural: one man → two ___',a:'men',exp:'"Men" — plural irregular de "man".'},
      {type:'write',q:'Plural: one mouse → three ___',a:'mice',exp:'"Mice" — plural irregular de "mouse".'},
      {type:'order',q:'Forma el número 102:',words:['two','a','hundred','and'],a:'a hundred and two',exp:'102 = "a hundred and two".'},
      {type:'order',q:'Forma el ordinal 21st:',words:['first','twenty-'],a:'twenty-first',exp:'21st = "twenty-first".'},
      {type:'choice',q:'El plural de "sheep" es:',opts:['sheeps','sheepies','sheep'],a:'sheep',exp:'"Sheep" es invariable. Singular y plural son iguales.'}
    ]
  },

  past_simple:{
    id:'past_simple', title:'Pasado Simple', icon:'clock', color:'#C05621',
    theory:`
      <h3>Pasado Simple — Acciones terminadas</h3>
      <p>Describe acciones que comenzaron y terminaron en el pasado.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#C05621;background:#FFF5EB">
          <strong style="color:#7B341E">Verbos REGULARES → + ED</strong>
          <small>
            walk → walk<b>ed</b> · play → play<b>ed</b><br>
            live → liv<b>ed</b> (termina en -e, solo +d)<br>
            study → studi<b>ed</b> (consonante+y → ied)<br>
            stop → stop<b>ped</b> (CVC corta: doble consonante)
          </small>
        </div>
        <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
          <strong style="color:#742A2A">Verbos IRREGULARES — memorizar</strong>
          <small>
            go→<b>went</b> · have→<b>had</b> · see→<b>saw</b><br>
            get→<b>got</b> · make→<b>made</b> · take→<b>took</b><br>
            buy→<b>bought</b> · eat→<b>ate</b>
          </small>
        </div>
        <div class="t-box" style="border-color:#3182CE;background:#EBF8FF">
          <strong style="color:#1A365D">Negativo e interrogativo</strong>
          <small>
            Negativo: Sujeto + <b>didn't</b> + verbo BASE<br>
            "She <u>didn't go</u> to school yesterday."<br>
            Pregunta: <b>Did</b> + sujeto + verbo BASE?<br>
            "<u>Did</u> you see the film?"<br>
            ⚠️ Con did/didn't el verbo va en <b>base</b>.
          </small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'She ___ to London last year.',opts:['goes','went','go'],a:'went',exp:'"go" es irregular → went. "Last year" → pasado.'},
      {type:'choice',q:'I ___ breakfast this morning. I was late.',opts:["don't have","didn't have","hadn't"],a:"didn't have",exp:'Negativo pasado: "didn\'t + verbo base (have)".'},
      {type:'choice',q:'___ you see that film last night?',opts:['Do','Did','Were'],a:'Did',exp:'Pregunta pasado: "Did + sujeto + verbo base?"'},
      {type:'choice',q:'He ___ his keys yesterday morning.',opts:['looses','lost','lose'],a:'lost',exp:'"lose" es irregular → pasado: lost.'},
      {type:'choice',q:'We ___ a great holiday in Cartagena last summer.',opts:['have','had','has'],a:'had',exp:'"have" es irregular → pasado: had.'},
      {type:'choice',q:'She ___ not come to the party. She was ill.',opts:['did','didn\'t','doesn\'t'],a:"didn't",exp:'Negativo pasado: "didn\'t + verbo base (come)".'},
      {type:'write',q:'Escribe el pasado: She ___ (study) for three hours last night.',a:'studied',exp:'"study" → consonante+y → studied.'},
      {type:'write',q:'Escribe el pasado: They ___ (go) to the beach last weekend.',a:'went',exp:'"go" es irregular → went.'},
      {type:'write',q:'Negativo: "He worked yesterday." → "He ___ yesterday."',a:"didn't work",exp:'"didn\'t + verbo base". Sin -ed en negaciones.'},
      {type:'write',q:'Pregunta: "___ she call you?" (Did/Does)',a:'Did',exp:'"Did she call?" — pregunta en pasado.'},
      {type:'write',q:'Escribe el pasado: I ___ (buy) a new phone two days ago.',a:'bought',exp:'"buy" es irregular → bought.'},
      {type:'order',q:'Ordena la frase:',words:['to','yesterday.','walked','school','She'],a:'She walked to school yesterday.',exp:'"walked" → pasado regular.'},
      {type:'order',q:'Ordena la negación:',words:["didn't","He","last","work","Friday."],a:"He didn't work last Friday.",exp:'"didn\'t + verbo base".'},
      {type:'order',q:'Ordena la pregunta:',words:['you','Did','the','enjoy','party?'],a:'Did you enjoy the party?',exp:'"Did + sujeto + verbo base + ?"'},
      {type:'choice',q:'They ___ the match yesterday.',opts:['win','won','wined'],a:'won',exp:'"win" es irregular → won.'}
    ]
  },

  future_will:{
    id:'future_will', title:'Futuro: Will y Going To', icon:'chevrons-right', color:'#2C7A7B',
    theory:`
      <h3>Hablar del futuro en inglés</h3>
      <p>Hay dos formas principales: <strong>WILL</strong> y <strong>BE GOING TO</strong>.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#2C7A7B;background:#E6FFFA">
          <strong style="color:#1D4044">WILL — decisiones espontáneas / predicciones</strong>
          <small>
            Sujeto + <b>will</b> + verbo base (I<b>'ll</b>, <b>won't</b>)<br>
            1. Decisión en el momento: "I'll answer the phone."<br>
            2. Predicción general: "I think it will rain."<br>
            3. Promesas: "I'll help you."
          </small>
        </div>
        <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
          <strong style="color:#4C1D95">BE GOING TO — planes / evidencia</strong>
          <small>
            Sujeto + <b>am/is/are going to</b> + verbo base<br>
            1. Plan previo: "I'm going to study medicine." (ya decidido)<br>
            2. Evidencia visible: "Look at the clouds! It's going to rain!"
          </small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'A: "We have no milk." B: "Don\'t worry, I ___ buy some."',opts:['am going to','will','am'],a:'will',exp:'Decisión espontánea en el momento → will.'},
      {type:'choice',q:'She ___ study medicine next year. She already enrolled.',opts:['will','is going to','goes to'],a:'is going to',exp:'Plan decidido con antelación → going to.'},
      {type:'choice',q:'Look at those clouds! It ___ rain!',opts:['will','is going to','goes to'],a:'is going to',exp:'Evidencia visible (nubes) → going to.'},
      {type:'choice',q:'I think Barcelona ___ win the match tonight.',opts:['is going to','goes','will'],a:'will',exp:'Predicción general sin evidencia inmediata → will.'},
      {type:'choice',q:'___ you help me with this, please?',opts:['Are you going to','Will','Do'],a:'Will',exp:'Petición / oferta → will.'},
      {type:'choice',q:'"The phone is ringing!" → "I ___ answer it!"',opts:['am going to','will','am'],a:'will',exp:'Decisión espontánea, en ese momento → will.'},
      {type:'choice',q:'They ___ get married in June. They just announced it.',opts:['will','are going to','do'],a:'are going to',exp:'Plan anunciado y decidido → are going to.'},
      {type:'write',q:'Decisión espontánea: A: "I\'m cold." B: "I ___ close the window."',a:"I'll close",exp:'"I\'ll close" — decisión tomada ahora mismo.'},
      {type:'write',q:'Plan decidido: She ___ (study) French next semester.',a:'is going to study',exp:'Plan previo → "is going to study".'},
      {type:'write',q:'Negación de will: "He will come." → "He ___ come."',a:"won't",exp:'"will not" → won\'t.'},
      {type:'write',q:'Promesa: "I promise I ___ call you tomorrow."',a:"I'll",exp:'"I\'ll call" — promesa → will.'},
      {type:'order',q:'Ordena la frase:',words:["I'm","to","buy","a","going","car."],a:"I'm going to buy a car.",exp:'Plan decidido.'},
      {type:'order',q:'Ordena la frase:',words:["won't","He","the","forget","password."],a:"He won't forget the password.",exp:'Negación de will.'},
      {type:'order',q:'Ordena la pregunta:',words:['you','Will','help','me?'],a:'Will you help me?',exp:'Petición.'},
      {type:'choice',q:'A: "There\'s someone at the door." B: "I ___ go."',opts:['am going to','will','go'],a:'will',exp:'Decisión espontánea → will.'}
    ]
  },

  can_could:{
    id:'can_could', title:'Verbos Modales: Can, Could', icon:'shield', color:'#553C9A',
    theory:`
      <h3>Verbos modales — Can, Could</h3>
      <p>Los modales expresan habilidad o posibilidad. <strong>Nunca llevan -S y siempre van con verbo base.</strong></p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#553C9A;background:#F5F3FF">
          <strong style="color:#44337A">CAN (Presente)</strong>
          <small>Habilidad: "I <b>can</b> swim."<br>
          Posibilidad: "It <b>can</b> be dangerous."<br>
          Permiso: "<b>Can</b> I go?"<br>
          Negativo: <b>can't</b></small>
        </div>
        <div class="t-box" style="border-color:#3182CE;background:#EBF8FF">
          <strong style="color:#1A365D">COULD (Pasado y Cortesía)</strong>
          <small>Habilidad pasada: "I <b>could</b> run fast."<br>
          Petición educada: "<b>Could</b> you help me, please?"<br>
          Negativo: <b>couldn't</b></small>
        </div>
      </div>
      <div class="tip-callout"><i data-lucide="lightbulb"></i>
        <span><strong>Regla de oro:</strong> Los modales NUNCA llevan -s en 3ª persona y NUNCA van seguidos de "to". ✗ "She cans swim" → ✓ "She can swim".</span>
      </div>`,
    exercises:[
      {type:'choice',q:'She ___ speak English, Spanish and French.',opts:['can to','cans','can'],a:'can',exp:'Los modales no tienen -s. Nunca +to.'},
      {type:'choice',q:'___ I use your phone? Mine is out of battery.',opts:['Could','Should','Must'],a:'Could',exp:'"Could I...?" — petición educada de permiso.'},
      {type:'choice',q:'When I was five, I ___ read already.',opts:['can','could','should'],a:'could',exp:'"Could" — habilidad en el pasado.'},
      {type:'choice',q:'Sorry, I ___ come to your party tomorrow. I have to work.',opts:['don\'t can',"can't",'could'],a:"can't",exp:'Negativo presente de can es can\'t.'},
      {type:'choice',q:'___ you help me carry these bags?',opts:['Should','Could','Must'],a:'Could',exp:'"Could you...?" — petición educada de ayuda.'},
      {type:'write',q:'Completa: I ___ swim very well. I love the pool.',a:'can',exp:'"Can" = habilidad presente.'},
      {type:'write',q:'Completa: She ___ drive yet. She\'s only 15.',a:"can't",exp:'"Can\'t" = no tiene la habilidad.'},
      {type:'write',q:'Petición educada: "___ you open the door for me, please?"',a:'Could',exp:'"Could you...?" — más educado que "Can you...?"'},
      {type:'write',q:'Completa: When I was a child, I ___ stay up late on weekends.',a:'could',exp:'"Could" = permiso o habilidad en el pasado.'},
      {type:'order',q:'Ordena la frase:',words:['play','He','piano.','can','the'],a:'He can play the piano.',exp:'Sujeto + modal + verbo base.'},
      {type:'order',q:'Ordena la pregunta:',words:['I','window?','open','Can','the'],a:'Can I open the window?',exp:'Modal + sujeto + verbo.'},
      {type:'choice',q:'___ you speak louder, please? I can\'t hear you.',opts:['Should','Must','Could'],a:'Could',exp:'"Could you...?" — petición cortés y educada.'}
    ]
  },

  // ==================== NIVEL A2 (EXPLORADOR AVANZADO) ==================== //

  comparisons: {
    id:'comparisons', title:'Advanced Comparisons', icon:'bar-chart', color:'#3182CE',
    theory:`
      <h3>Comparatives & Superlatives</h3>
      <p>Usamos comparativos para comparar dos cosas, y superlativos para destacar una cosa entre un grupo.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#3182CE;background:#EBF8FF">
          <strong style="color:#1A365D">Comparativos (2 cosas) + than</strong>
          <small>
            <b>Cortos (1 sílaba):</b> +er &rarr; tall<b>er</b>, fast<b>er</b>.<br>
            Si termina en CVC: + doble consonante &rarr; bi<b>gger</b>.<br>
            Si termina en Y: +ier &rarr; happ<b>ier</b>.<br>
            <b>Largos (2+ sílabas):</b> more + adj &rarr; <b>more</b> beautiful.<br>
            "My car is <u>faster than</u> yours."
          </small>
        </div>
        <div class="t-box" style="border-color:#805AD5;background:#FAF5FF">
          <strong style="color:#4C1D95">Superlativos (El más...) + the</strong>
          <small>
            <b>Cortos:</b> the + est &rarr; <b>the</b> tall<b>est</b>.<br>
            <b>Largos:</b> the most + adj &rarr; <b>the most</b> beautiful.<br>
            "Mount Everest is <u>the highest</u> mountain."
          </small>
        </div>
      </div>
      <div class="theory-grid" style="margin-top:12px">
        <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
          <strong style="color:#742A2A">Irregulares (¡Memorizar!)</strong>
          <small>
            Good &rarr; better (than) &rarr; the best<br>
            Bad &rarr; worse (than) &rarr; the worst<br>
            Far &rarr; further (than) &rarr; the furthest
          </small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'My car is ___ than yours.',opts:['fast','faster','fastest'],a:'faster',exp:'Adjetivo corto (fast) en comparativo: +er.'},
      {type:'choice',q:'This is ___ movie I have ever seen.',opts:['the best','better','the goodest'],a:'the best',exp:'Superlativo irregular de good es "the best".'},
      {type:'choice',q:'Superman is ___ than a speeding bullet.',opts:['more fast','faster','the fastest'],a:'faster',exp:'Comparando dos cosas (Superman vs bullet) con adjetivo corto.'},
      {type:'choice',q:'Today the weather is ___ than yesterday.',opts:['badder','worse','worst'],a:'worse',exp:'Comparativo irregular de bad es "worse".'},
      {type:'choice',q:'She is ___ intelligent student in the class.',opts:['the most','more','most'],a:'the most',exp:'Superlativo de adjetivo largo.'},
      {type:'write',q:'Escribe el comparativo de "big": An elephant is ___ than a dog.',a:'bigger',exp:'big (CVC) → bigger (doble g).'},
      {type:'write',q:'Escribe el comparativo de "happy": I am ___ now than before.',a:'happier',exp:'happy (termina en y) → happier.'},
      {type:'order',q:'Ordena la frase:',words:['the','highest','Everest','is','mountain.'],a:'Everest is the highest mountain.',exp:'Superlativo: the highest.'},
      {type:'order',q:'Ordena la frase:',words:['more','English','is','Chinese.','than','important'],a:'English is more important than Chinese.',exp:'more + adjetivo largo + than.'},
      {type:'choice',q:'My son is 10 and my daughter is 7. My son is ___ than my daughter.',opts:['older','more old','oldest'],a:'older',exp:'old → older.'}
    ]
  },

  quantifiers: {
    id:'quantifiers', title:'Countables & Quantifiers', icon:'pie-chart', color:'#38A169',
    theory:`
      <h3>Contables vs Incontables</h3>
      <p>Saber si algo se puede contar (1 manzana, 2 manzanas) o no (el agua, el dinero) cambia las palabras que usamos para describir su cantidad.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#38A169;background:#F0FFF4">
          <strong style="color:#1C4532">Sustantivos Contables</strong>
          <small>
            Tienen singular y plural: apple/apples, car/cars.<br>
            Usamos: <b>many</b> (muchos), <b>a few</b> (unos pocos).<br>
            "How <b>many</b> children do you have?"
          </small>
        </div>
        <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
          <strong style="color:#742A2A">Sustantivos Incontables</strong>
          <small>
            No tienen plural: water, money, time, information.<br>
            Usamos: <b>much</b> (mucho), <b>a little</b> (un poco).<br>
            "We don't have <b>much</b> time."
          </small>
        </div>
      </div>
      <h3 style="margin-top:20px">Some vs Any (Algún / Algo de)</h3>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#D97706;background:#FFFBEB">
          <strong style="color:#78350F">SOME (Afirmativas)</strong>
          <small>"I have <b>some</b> money." / "There are <b>some</b> apples."</small>
        </div>
        <div class="t-box" style="border-color:#3182CE;background:#EBF8FF">
          <strong style="color:#1A365D">ANY (Negativas y Preguntas)</strong>
          <small>"I don't have <b>any</b> money." / "Are there <b>any</b> apples?"</small>
        </div>
      </div>
      <div class="tip-callout"><i data-lucide="check"></i>
        <span><strong>A lot of:</strong> Sirve para todo (contable e incontable) en frases afirmativas. "A lot of friends", "A lot of water".</span>
      </div>`,
    exercises:[
      {type:'choice',q:'How ___ water do you need?',opts:['many','much','any'],a:'much',exp:'Water es incontable → How much.'},
      {type:'choice',q:'How ___ children do you have?',opts:['much','many','some'],a:'many',exp:'Children (niños) es contable plural → How many.'},
      {type:'choice',q:'I don\'t have ___ free time this week.',opts:['many','some','any'],a:'any',exp:'Frase negativa → any.'},
      {type:'choice',q:'Can I have ___ coffee, please?',opts:['any','some','many'],a:'some',exp:'En peticiones educadas (ofertas/solicitudes) usamos "some" aunque sea pregunta.'},
      {type:'choice',q:'There are only ___ apples left in the fridge.',opts:['a little','a few','much'],a:'a few',exp:'Apples es contable → a few (unas pocas).'},
      {type:'write',q:'Completa: I need ___ information about the course. (algo de, frase afirmativa)',a:'some',exp:'Afirmativa → some.'},
      {type:'write',q:'Completa: We don\'t have ___ milk. (nada de, frase negativa)',a:'any',exp:'Negativa → any.'},
      {type:'order',q:'Ordena la pregunta:',words:['friends','How','many','do','have?','you'],a:'How many friends do you have?',exp:'How many + contable plural.'},
      {type:'order',q:'Ordena la frase:',words:['has','a','money.','lot of','He'],a:'He has a lot of money.',exp:'A lot of funciona perfecto para incontables en afirmativo.'},
      {type:'choice',q:'I speak ___ Spanish. Just the basics.',opts:['a few','a little','many'],a:'a little',exp:'El idioma/conocimiento es incontable → a little (un poco).'}
    ]
  },

  past_continuous: {
    id:'past_continuous', title:'Past Continuous', icon:'history', color:'#805AD5',
    theory:`
      <h3>Acciones en progreso en el pasado</h3>
      <p>El pasado continuo se usa para describir una acción que estaba ocurriendo en un momento específico del pasado. Frecuentemente se interrumpe por otra acción en pasado simple.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#805AD5;background:#FAF5FF">
          <strong style="color:#4C1D95">Estructura (Was/Were + ING)</strong>
          <small>
            (+) I <b>was watching</b> TV.<br>
            (-) They <b>weren't listening</b>.<br>
            (?) <b>Were</b> you <b>sleeping</b>?
          </small>
        </div>
        <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
          <strong style="color:#742A2A">Past Cont. vs Past Simple (When / While)</strong>
          <small>
            <b>When (cuando):</b> Seguido de Past Simple (la interrupción).<br>
            "I was sleeping <u>when</u> the phone <u>rang</u>."<br><br>
            <b>While (mientras):</b> Seguido de Past Continuous (la acción larga).<br>
            "<u>While</u> I was sleeping, the phone rang."
          </small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'I ___ watching a Formula 1 race when the phone rang.',opts:['am','was','were'],a:'was',exp:'"I" usa "was". Estaba viendo.'},
      {type:'choice',q:'What ___ you doing at 8 PM yesterday?',opts:['were','was','are'],a:'were',exp:'"You" usa "were". Acción en progreso en momento exacto.'},
      {type:'choice',q:'While we ___ dinner, the lights went out.',opts:['were eating','ate','eating'],a:'were eating',exp:'"While" + pasado continuo (acción larga).'},
      {type:'choice',q:'I was walking in the park ___ I saw my friend.',opts:['while','when','so'],a:'when',exp:'"when" introduce la interrupción en pasado simple (saw).'},
      {type:'write',q:'Completa: She ___ (study) when her mother arrived.',a:'was studying',exp:'Acción en progreso → was + studying.'},
      {type:'write',q:'Completa: They ___ (not sleep). They were playing video games.',a:"weren't sleeping",exp:'Plural negativo → weren\'t sleeping.'},
      {type:'order',q:'Ordena la frase:',words:['was','when','showering','I','arrived.','he'],a:'I was showering when he arrived.',exp:'Acción larga (was showering) + when + interrupción (arrived).'},
      {type:'order',q:'Ordena la pregunta:',words:['crying?','was','the','baby','Why'],a:'Why was the baby crying?',exp:'Wh-word + was/were + sujeto + ING.'},
      {type:'choice',q:'It ___ raining heavily all night.',opts:['were','is','was'],a:'was',exp:'"It" usa "was".'},
      {type:'write',q:'Completa con pasado simple (interrupción): We were talking when the boss ___ (enter) the room.',a:'entered',exp:'La interrupción va en pasado simple (entered).'}
    ]
  },

  present_perfect: {
    id:'present_perfect', title:'Life Experiences (Present Perfect)', icon:'star', color:'#D69E2E',
    theory:`
      <h3>Experiencias de Vida</h3>
      <p>El Present Perfect conecta el pasado con el presente. Lo usamos para hablar de experiencias de vida cuando <strong>NO importa cuándo</strong> ocurrieron, sino el hecho de que ocurrieron.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#D69E2E;background:#FEFCBF">
          <strong style="color:#78350F">Estructura: Have/Has + Participio Pasado (V3)</strong>
          <small>
            (+) I <b>have visited</b> London. / She <b>has seen</b> that movie.<br>
            (-) We <b>haven't finished</b>. / He <b>hasn't called</b>.<br>
            (?) <b>Have</b> you <b>eaten</b> sushi?
          </small>
        </div>
      </div>
      <h3 style="margin-top:20px">Palabras Clave (Señales)</h3>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#38B2AC;background:#E6FFFA">
          <strong style="color:#1D4044">Ever / Never</strong>
          <small>
            <b>Ever:</b> ¿Alguna vez? (en preguntas). "Have you <u>ever</u> been to Paris?"<br>
            <b>Never:</b> Nunca (experiencia 0). "I have <u>never</u> eaten sushi."
          </small>
        </div>
        <div class="t-box" style="border-color:#3182CE;background:#EBF8FF">
          <strong style="color:#1A365D">Just / Already / Yet</strong>
          <small>
            <b>Just:</b> Justo ahora / recién. "I have <u>just</u> arrived."<br>
            <b>Already:</b> Ya (antes de lo esperado). "I have <u>already</u> finished."<br>
            <b>Yet:</b> Todavía / aún (al final en - y ?). "I haven't eaten <u>yet</u>."
          </small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'I have never ___ to Japan.',opts:['go','went','been'],a:'been',exp:'Participio de "go" para experiencias es "been" (estado).'},
      {type:'choice',q:'___ you ever eaten Mexican food?',opts:['Has','Have','Did'],a:'Have',exp:'"You" usa "Have". Have you ever...?'},
      {type:'choice',q:'She ___ just finished her homework.',opts:['have','has','did'],a:'has',exp:'"She" usa "has".'},
      {type:'choice',q:'I haven\'t seen that movie ___.',opts:['already','just','yet'],a:'yet',exp:'"Yet" va al final de frases negativas y preguntas.'},
      {type:'choice',q:'A: "Do you want to watch The Matrix?" B: "No, thanks. I have ___ seen it."',opts:['yet','already','ever'],a:'already',exp:'"Already" significa "ya" (ya la he visto).'},
      {type:'write',q:'Completa el participio (V3): I have ___ (know) him for 10 years.',a:'known',exp:'Participio de know es known.'},
      {type:'write',q:'Completa la negación: We ___ (not) finished the project yet.',a:"haven't",exp:'have not = haven\'t.'},
      {type:'order',q:'Ordena la frase:',words:['has','never','He','flown','a plane.','in'],a:'He has never flown in a plane.',exp:'Sujeto + has + never + participio.'},
      {type:'order',q:'Ordena la pregunta:',words:['Have','ever','you','met','person?','a famous'],a:'Have you ever met a famous person?',exp:'Have + sujeto + ever + participio.'},
      {type:'choice',q:'I ___ my keys. I can\'t find them now!',opts:['lost','have lost','losed'],a:'have lost',exp:'Acción pasada con impacto en el presente → Present Perfect.'}
    ]
  },

  future_mixed: {
    id:'future_mixed', title:'Future Mixed: Will vs Cont', icon:'zap', color:'#3182CE',
    theory:`
      <h3>El Futuro Definitivo</h3>
      <p>Ya vimos "Will" (decisiones rápidas) y "Going to" (planes). Ahora añadimos el <strong>Present Continuous para el futuro</strong>.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#38A169;background:#F0FFF4">
          <strong style="color:#1C4532">Present Continuous (Arreglos fijos)</strong>
          <small>
            Se usa para citas y planes 100% confirmados en agenda con fecha/hora.<br>
            "I <b>am meeting</b> the dentist at 5 PM." (Cita confirmada)<br>
            "We <b>are flying</b> to Madrid tomorrow." (Tickets comprados)
          </small>
        </div>
        <div class="t-box" style="border-color:#2C7A7B;background:#E6FFFA">
          <strong style="color:#1D4044">Will (Predicciones / Promesas)</strong>
          <small>
            "I think cars <b>will fly</b> in 2050." (Predicción sin evidencia).<br>
            "I <b>will always love</b> you." (Promesa).
          </small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'I think it ___ rain tomorrow.',opts:['is going to','will','is raining'],a:'will',exp:'Predicción sin evidencia sólida ("I think") usa will.'},
      {type:'choice',q:'I can\'t see you tonight. I ___ dinner with my parents.',opts:['will have','am having','have'],a:'am having',exp:'Plan fijo / cita agendada = Present Continuous.'},
      {type:'choice',q:'A: "This bag is heavy." B: "I ___ carry it for you."',opts:['am carrying','will','am going to'],a:'will',exp:'Ofrecimiento espontáneo = will.'},
      {type:'choice',q:'We ___ to Paris on Friday. Here are the tickets!',opts:['will fly','are flying','fly'],a:'are flying',exp:'Arreglo 100% confirmado (tengo los tickets) = Present Continuous.'},
      {type:'write',q:'Completa: In 2050, robots ___ (do) our chores.',a:'will do',exp:'Predicción lejana → will.'},
      {type:'order',q:'Ordena la cita:',words:['seeing','I','am','tomorrow.','the doctor'],a:'I am seeing the doctor tomorrow.',exp:'Present Continuous para citas agendadas.'},
      {type:'order',q:'Ordena la promesa:',words:['will','tell','never','I','secret.','your'],a:'I will never tell your secret.',exp:'Promesa → will never.'},
      {type:'choice',q:'What time ___ you meeting David tomorrow?',opts:['do','will','are'],a:'are',exp:'Pregunta en Present Continuous para planes futuros.'}
    ]
  },

  modals_obligation: {
    id:'modals_obligation', title:'Obligations & Advice', icon:'shield-alert', color:'#C05621',
    theory:`
      <h3>Must, Have To, Should</h3>
      <p>Modales para dar consejos o expresar obligaciones.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#C05621;background:#FFF5EB">
          <strong style="color:#7B341E">Must vs Have To (Obligación)</strong>
          <small>
            <b>Must:</b> Obligación interna / regla general. "I <u>must</u> study."<br>
            <b>Have to:</b> Obligación externa (ley/jefe). "I <u>have to</u> wear a uniform."
          </small>
        </div>
        <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
          <strong style="color:#742A2A">Mustn't vs Don't have to (CUIDADO)</strong>
          <small>
            <b>Mustn't:</b> PROHIBICIÓN estricta. "You <u>mustn't</u> smoke here."<br>
            <b>Don't have to:</b> Ausencia de obligación (es opcional). "You <u>don't have to</u> come if you are tired."
          </small>
        </div>
        <div class="t-box" style="border-color:#38A169;background:#F0FFF4">
          <strong style="color:#1C4532">Should (Consejo)</strong>
          <small>
            "You look sick. You <u>should</u> see a doctor." (Deberías).
          </small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'You ___ wear a seatbelt when driving. It\'s the law.',opts:['must','should','can'],a:'must',exp:'Obligación legal/estricta = must / have to.'},
      {type:'choice',q:'You ___ touch that wire! It\'s dangerous!',opts:["don't have to","mustn't","shouldn't"],a:"mustn't",exp:'Prohibición absoluta = mustn\'t.'},
      {type:'choice',q:'Tomorrow is Sunday. I ___ wake up early.',opts:["mustn't","don't have to","shouldn't"],a:"don't have to",exp:'No es necesario (es opcional) = don\'t have to.'},
      {type:'choice',q:'You have a terrible cough. You ___ stop smoking.',opts:['should','have to','can'],a:'should',exp:'Es una fuerte recomendación/consejo = should.'},
      {type:'write',q:'Completa: We ___ to wear a uniform at my school. (obligación externa)',a:'have',exp:'have to.'},
      {type:'order',q:'Ordena la frase:',words:['must','I','remember','to','my mom.','call'],a:'I must remember to call my mom.',exp:'Obligación interna = must.'},
      {type:'order',q:'Ordena el consejo:',words:['should','You','more','water.','drink'],a:'You should drink more water.',exp:'Consejo = should.'},
      {type:'choice',q:'The entrance is free. You ___ pay anything.',opts:["mustn't","don't have to","couldn't"],a:"don't have to",exp:'No es necesario pagar.'}
    ]
  },

  conditionals: {
    id:'conditionals', title:'Conditions & Consequences', icon:'git-branch', color:'#805AD5',
    theory:`
      <h3>Zero & First Conditional</h3>
      <p>Usamos condicionales para hablar de una condición ("Si pasa esto...") y su resultado ("...entonces pasará esto").</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#805AD5;background:#FAF5FF">
          <strong style="color:#4C1D95">Zero Conditional (Hechos / Verdades)</strong>
          <small>
            Estructura: <b>If + Present Simple, Present Simple</b>.<br>
            "If you heat water to 100°C, it boils." (Siempre ocurre).
          </small>
        </div>
        <div class="t-box" style="border-color:#38B2AC;background:#E6FFFA">
          <strong style="color:#1D4044">First Conditional (Posible futuro)</strong>
          <small>
            Estructura: <b>If + Present Simple, WILL + verbo base</b>.<br>
            "If I study hard, I will pass the exam." (Es muy probable que ocurra).<br>
            "If it rains, we will stay at home."
          </small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'If it rains, I ___ stay at home.',opts:['stay','will stay','staying'],a:'will stay',exp:'First conditional: If + present, WILL + verbo.'},
      {type:'choice',q:'If you mix blue and yellow, you ___ green.',opts:['will get','get','got'],a:'get',exp:'Zero conditional (un hecho científico): If + present, present.'},
      {type:'choice',q:'I will call you if I ___ time.',opts:['have','will have','had'],a:'have',exp:'La parte del "if" va en presente simple (if I have).'},
      {type:'choice',q:'If she ___ early, we will catch the bus.',opts:['arrives','arrive','will arrive'],a:'arrives',exp:'Parte del "if" en presente simple. She → arrives (+s).'},
      {type:'write',q:'Completa (First Cond): If they play well, they ___ (win) the match.',a:'will win',exp:'Resultado futuro = will win.'},
      {type:'order',q:'Ordena la frase:',words:['If','I','will','I','tired,','sleep.','am'],a:'If I am tired, I will sleep.',exp:'If + present, will + verbo.'},
      {type:'order',q:'Ordena la frase:',words:['will','you','ask','If','you','help','her,','she'],a:'If you ask her, she will help you.',exp:'Condición primero, luego resultado.'},
      {type:'choice',q:'If water ___ 0 degrees, it freezes.',opts:['reaches','will reach','reach'],a:'reaches',exp:'Hecho científico (Zero Cond) → presente (reaches).'}
    ]
  },

  phrasal_gerunds: {
    id:'phrasal_gerunds', title:'Native Speech: Gerunds', icon:'message-square', color:'#E53E3E',
    theory:`
      <h3>Gerundios (-ING) en contextos nativos</h3>
      <p>En inglés, no solo usamos el -ING para el Presente Continuo. Es vital para hablar de forma natural.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
          <strong style="color:#742A2A">1. Después de Preposiciones</strong>
          <small>
            Si un verbo va después de una preposición (in, on, at, about, for, of), SIEMPRE lleva -ING.<br>
            "I am good <b>at playing</b> tennis." (Soy bueno jugando...)<br>
            "Thank you <b>for coming</b>." (Gracias por venir).
          </small>
        </div>
        <div class="t-box" style="border-color:#D97706;background:#FFFBEB">
          <strong style="color:#78350F">2. Como sujeto de la oración</strong>
          <small>
            "<b>Smoking</b> is bad for you." (Fumar es malo).<br>
            "<b>Learning</b> English is fun." (Aprender inglés es divertido).
          </small>
        </div>
        <div class="t-box" style="border-color:#38A169;background:#F0FFF4">
          <strong style="color:#1C4532">3. Después de verbos específicos</strong>
          <small>
            Verbos como enjoy, mind, suggest, stop, finish, look forward to.<br>
            "I enjoy <b>reading</b>."<br>
            "I look forward to <b>seeing</b> you." (¡Clásico error nativo evitado!).
          </small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'I look forward to ___ you tomorrow.',opts:['see','seeing','saw'],a:'seeing',exp:'"Look forward to" es una frase preposicional, el verbo que sigue DEBE ir con -ING.'},
      {type:'choice',q:'Thank you for ___ me with my homework.',opts:['help','helping','to help'],a:'helping',exp:'Después de la preposición "for", el verbo va con -ING.'},
      {type:'choice',q:'My daughter is very good at ___ pictures.',opts:['draw','to draw','drawing'],a:'drawing',exp:'Después de la preposición "at", usamos gerundio.'},
      {type:'choice',q:'___ English is very important for my career.',opts:['Learn','Learning','Learned'],a:'Learning',exp:'Cuando una acción es el sujeto de la frase, usamos el gerundio (Learning).'},
      {type:'write',q:'Completa: He finished ___ (eat) and left the table.',a:'eating',exp:'Después del verbo "finish", usamos gerundio (-ING).'},
      {type:'write',q:'Completa: Are you interested in ___ (buy) a new car?',a:'buying',exp:'Después de la preposición "in", usamos gerundio.'},
      {type:'order',q:'Ordena la frase:',words:['bad','Smoking','for','is','health.','your'],a:'Smoking is bad for your health.',exp:'Gerundio como sujeto.'},
      {type:'order',q:'Ordena la frase:',words:['reading','enjoys','at','She','night.'],a:'She enjoys reading at night.',exp:'Enjoy + gerundio.'}
    ]
  }

};