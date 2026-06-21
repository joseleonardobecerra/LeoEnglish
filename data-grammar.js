// data-grammar.js v5.0 — MÓDULOS DE GRAMÁTICA A1 y A2 (Pedagogical Edition Full)
// Contiene la teoría, el 100% de los ejercicios y toda la capa instruccional y heutagógica.

// ============================================================
// CONSTANTES PEDAGÓGICAS GLOBALES
// ============================================================
const globalDidacticStages = [
  { name: '1. Activación', description: 'Actividad breve para activar vocabulario, experiencias previas o intuición gramatical.' },
  { name: '2. Input significativo', description: 'El estudiante recibe ejemplos reales antes de estudiar la regla.' },
  { name: '3. Noticing / Descubrimiento', description: 'El estudiante identifica patrones gramaticales con guía.' },
  { name: '4. Práctica controlada', description: 'Ejercicios cerrados para fijar forma, orden y precisión.' },
  { name: '5. Práctica semiguiada', description: 'El estudiante usa la estructura con apoyo parcial.' },
  { name: '6. Producción comunicativa', description: 'Uso auténtico del idioma para resolver una tarea.' },
  { name: '7. Transferencia', description: 'Aplicación del tema a la vida personal del estudiante.' },
  { name: '8. Reflexión heutagógica', description: 'El estudiante decide cómo mejorar y evidencia su proceso.' },
  { name: '9. Revisión espaciada', description: 'Repaso acumulativo de temas anteriores.' }
];

const globalMethodology = {
  approach: 'Communicative, active learning and heutagogical reflection',
  sequence: ['Activation', 'Input', 'Guided discovery', 'Controlled practice', 'Semi-guided practice', 'Communicative production', 'Reflection', 'Spaced review']
};

const globalAssessment = {
  formative: ['Completion of grammar exercises', 'Participation in communicative task', 'Self-correction of mistakes'],
  evidence: ['Written sentence production', 'Short audio or speaking task', 'Personalized examples']
};

const defaultProgression = {
  missionName: 'Describe your world',
  unlockCondition: 'Complete 80% of exercises and submit one communicative task.',
  badge: 'Grammar Explorer Badge',
  finalEvidence: 'Short personal description using the target grammar.'
};

// ============================================================
// BASE DE DATOS DE MÓDULOS
// ============================================================
const modulesData = {

  // ==================== NIVEL A1 (FUNDAMENTOS) ==================== //

  articles: {
    id:'articles', level:'A1', title:'Artículos: A, An, The', icon:'type', color:'#7C3AED',
    learningGoal:'Usar a, an y the para identificar personas, objetos y lugares en contextos cotidianos.',
    canDo:['Puedo usar a/an con sustantivos singulares contables.','Puedo usar the cuando algo es específico.','Sé identificar cuándo no se necesita artículo.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
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
      // BUG-FIX NEW-8: antes era type:'write' con a:'The The' — imposible de escribir
      // en un solo input. Convertido a type:'choice' con las dos opciones correctas.
      {type:'choice',
       q:'Which sentence is correct?',
       opts:[
         'The Amazon is the longest river in South America.',
         'An Amazon is a longest river in South America.',
         'Amazon is longest river in South America.',
         'The Amazon is a longest river in South America.'
       ],
       a:0,
       exp:'Nombres de ríos llevan "The" → "The Amazon". Superlativo → "the longest river".'}
    ],
    communicativeTask:{
      title:'My personal objects',
      instruction:'Take a photo of five objects and describe them using a/an/the.',
      output:'Short paragraph or 1-minute audio.'
    }
  },

  adjectives_demo:{
    id:'adjectives_demo', level:'A1', title:'Adjetivos Comunes y Demostrativos', icon:'sparkles', color:'#9333EA',
    learningGoal:'Describir personas, objetos y lugares usando adjetivos básicos y demostrativos.',
    canDo:['Puedo describir objetos con adjetivos básicos.','Puedo usar this, that, these y those.','Puedo describir personas y lugares en frases simples.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
    theory:`
      <h3>Adjetivos y demostrativos</h3>
      <p>Los adjetivos describen personas, objetos y lugares. En inglés normalmente van <strong>antes del sustantivo</strong>.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#9333EA;background:#F5F3FF">
          <strong style="color:#581C87">Adjetivos comunes</strong>
          <small>big, small, old, new, good, bad, beautiful, ugly, fast, slow, happy, sad.<br>
          A <b>new</b> phone. / A <b>beautiful</b> city.</small>
        </div>
        <div class="t-box" style="border-color:#2563EB;background:#EFF6FF">
          <strong style="color:#1E3A8A">Demostrativos</strong>
          <small><b>This</b> = este/esta, singular y cerca.<br>
          <b>That</b> = ese/esa/aquel/aquella, singular y lejos.<br>
          <b>These</b> = estos/estas, plural y cerca.<br>
          <b>Those</b> = esos/esas/aquellos/aquellas, plural y lejos.</small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'___ book is new. (near)',opts:['This','That','Those'],a:'This',exp:'This = singular y cerca.'},
      {type:'choice',q:'___ shoes are beautiful. (far)',opts:['This','These','Those'],a:'Those',exp:'Those = plural y lejos.'},
      {type:'choice',q:'Choose the correct order:',opts:['a car red','a red car','red a car'],a:'a red car',exp:'El adjetivo va antes del sustantivo.'},
      {type:'choice',q:'___ is my friend Ana. She is very kind.',opts:['These','This','Those'],a:'This',exp:'This se usa para presentar a una persona cercana.'},
      {type:'write',q:'Complete: This is a ___ house. (grande)',a:'big',exp:'Big = grande. A big house.'},
      {type:'write',q:'Complete: Those are ___ cars. (viejos)',a:'old',exp:'Old = viejo/s. El adjetivo no cambia en plural.'},
      {type:'order',q:'Ordena la frase:',words:['is','This','phone.','new','a'],a:'This is a new phone.',exp:'This + is + a + adjective + noun.'},
      {type:'order',q:'Ordena la frase:',words:['are','Those','beautiful','flowers.'],a:'Those are beautiful flowers.',exp:'Those + are + adjective + plural noun.'}
    ],
    communicativeTask:{
      title:'My objects around me',
      instruction:'Choose five objects near you and describe them using this, that, these or those.',
      output:'5 written sentences or a 1-minute audio.'
    }
  },

  prepositions:{
    id:'prepositions', level:'A1', title:'Preposiciones (In, On, At)', icon:'target', color:'#3182CE',
    learningGoal:'Indicar el tiempo y la ubicación exacta de eventos y objetos.',
    canDo:['Puedo usar in, on, at para indicar tiempo.','Puedo usar in, on, at para indicar lugar.','Puedo describir dónde están las cosas.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
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
    ],
    communicativeTask:{
      title:'My Schedule',
      instruction:'Write a short schedule of your week using IN, ON, and AT.',
      output:'A short written schedule.'
    }
  },

  pronouns:{
    id:'pronouns', level:'A1', title:'Pronombres Personales', icon:'users', color:'#D97706',
    learningGoal:'Reemplazar sustantivos correctamente para evitar repeticiones.',
    canDo:['Puedo usar pronombres de sujeto.','Puedo usar pronombres de objeto.','Puedo expresar posesión.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
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
    ],
    communicativeTask:{
      title:'Family Introduction',
      instruction:'Introduce two members of your family using subject, object, and possessive pronouns.',
      output:'Written paragraph.'
    }
  },

  verbs:{
    id:'verbs', level:'A1', title:'Verbos: Be, Have, Do', icon:'command', color:'#E53E3E',
    learningGoal:'Dominar los tres verbos auxiliares y principales fundamentales del inglés.',
    canDo:['Puedo usar el verbo To Be.','Puedo expresar posesión con Have.','Puedo usar Do como auxiliar.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
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
    ],
    communicativeTask:{
      title:'Fact File',
      instruction:'Write 5 facts about yourself using Be, Have, and Do.',
      output:'Fact file.'
    }
  },

  present_simple:{
    id:'present_simple', level:'A1', title:'Presente Simple', icon:'sun', color:'#38B2AC',
    learningGoal:'Describir hábitos, rutinas, verdades generales y situaciones permanentes.',
    canDo:['Puedo hablar de mi rutina diaria.','Puedo formar frases negativas.','Puedo hacer preguntas básicas en presente.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
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
    ],
    communicativeTask:{
      title:'A Day in the Life',
      instruction:'Describe a normal day in your life using present simple.',
      output:'Written paragraph.'
    }
  },

  frequency_adverbs:{
    id:'frequency_adverbs', level:'A1', title:'Adverbios de Frecuencia', icon:'repeat', color:'#0D9488',
    learningGoal:'Hablar de rutinas indicando con qué frecuencia ocurren.',
    canDo:['Puedo decir con qué frecuencia hago algo.','Puedo usar always, usually, often, sometimes y never.','Puedo preguntar sobre frecuencia con How often.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
    theory:`
      <h3>Adverbios de frecuencia</h3>
      <p>Los usamos para decir qué tan seguido hacemos algo.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#0D9488;background:#ECFDF5">
          <strong style="color:#064E3B">Orden normal</strong>
          <small>Sujeto + adverbio + verbo principal.<br>
          I <b>always</b> study at night.<br>
          She <b>usually</b> gets up early.</small>
        </div>
        <div class="t-box" style="border-color:#F97316;background:#FFF7ED">
          <strong style="color:#7C2D12">Con el verbo to be</strong>
          <small>Sujeto + be + adverbio.<br>
          He is <b>always</b> happy.<br>
          They are <b>sometimes</b> late.</small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'I ___ drink coffee in the morning. I drink it every day.',opts:['never','always','sometimes'],a:'always',exp:'Every day indica always.'},
      {type:'choice',q:'She ___ late. She is very punctual.',opts:['never is','is never','never'],a:'is never',exp:'Con to be, el adverbio va después: is never.'},
      {type:'choice',q:'___ do you exercise?',opts:['How much','How often','How many'],a:'How often',exp:'How often pregunta frecuencia.'},
      {type:'write',q:'Complete: He ___ plays football on Sundays. (usualmente)',a:'usually',exp:'Usually = usualmente.'},
      {type:'write',q:'Complete: They are ___ tired after work. (a veces)',a:'sometimes',exp:'Con be: are sometimes tired.'},
      {type:'order',q:'Ordena:',words:['always','I','breakfast.','eat'],a:'I always eat breakfast.',exp:'Adverbio entre sujeto y verbo principal.'},
      {type:'order',q:'Ordena:',words:['often','She','to','goes','the gym.'],a:'She often goes to the gym.',exp:'She + often + goes.'},
      {type:'choice',q:'My brother ___ watches TV. He does not like it.',opts:['always','never','usually'],a:'never',exp:'Does not like it indica never.'}
    ],
    communicativeTask:{
      title:'My routine survey',
      instruction:'Ask three classmates how often they do five activities.',
      output:'Mini report using always, usually, often, sometimes and never.'
    }
  },

  present_cont:{
    id:'present_cont', level:'A1', title:'Presente Continuo', icon:'activity', color:'#805AD5',
    learningGoal:'Describir acciones que están ocurriendo en el momento de hablar.',
    canDo:['Puedo describir acciones que ocurren ahora mismo.','Puedo usar la forma -ing correctamente.','Puedo contrastar acciones actuales con rutinas.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
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
    ],
    communicativeTask:{
      title:'Picture Description',
      instruction:'Find a busy street photo online and describe what 5 people are doing right now.',
      output:'Written description or audio recording.'
    }
  },

  simple_vs_cont:{
    id:'simple_vs_cont', level:'A1', title:'Simple vs Continuo', icon:'git-merge', color:'#ED8936',
    learningGoal:'Diferenciar entre hábitos (presente simple) y acciones en progreso (presente continuo).',
    canDo:['Puedo elegir entre el simple y el continuo.','Sé identificar palabras clave como always y right now.','Conozco qué verbos son verbos de estado.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
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
    ],
    communicativeTask:{
      title:'Contrast your life',
      instruction:'Write 3 things you usually do, and 3 things you are doing right now or temporarily this week.',
      output:'6 written sentences.'
    }
  },

  there_is_are:{
    id:'there_is_are', level:'A1', title:'There is / There are', icon:'home', color:'#2563EB',
    learningGoal:'Describir la existencia de personas, lugares y objetos en un espacio.',
    canDo:['Puedo decir qué hay en un lugar.','Puedo describir mi habitación o ciudad.','Puedo preguntar si algo existe en un lugar.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
    theory:`
      <h3>There is / There are</h3>
      <p>Usamos estas estructuras para decir que algo existe o está en un lugar.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#2563EB;background:#EFF6FF">
          <strong style="color:#1E3A8A">Singular</strong>
          <small>There <b>is</b> a bed in my room.<br>
          There <b>isn't</b> a TV.<br>
          <b>Is there</b> a bathroom?</small>
        </div>
        <div class="t-box" style="border-color:#16A34A;background:#F0FDF4">
          <strong style="color:#166534">Plural</strong>
          <small>There <b>are</b> two chairs.<br>
          There <b>aren't</b> any windows.<br>
          <b>Are there</b> any restaurants?</small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'There ___ a sofa in the living room.',opts:['is','are','am'],a:'is',exp:'A sofa = singular.'},
      {type:'choice',q:'There ___ three books on the table.',opts:['is','are','am'],a:'are',exp:'Three books = plural.'},
      {type:'choice',q:'___ there a bank near here?',opts:['Are','Is','Do'],a:'Is',exp:'A bank = singular.'},
      {type:'choice',q:'There ___ any students in the classroom.',opts:['isn’t','aren’t','am not'],a:'aren’t',exp:'Students = plural.'},
      {type:'write',q:'Complete: There ___ a supermarket in my neighborhood.',a:'is',exp:'A supermarket = singular.'},
      {type:'write',q:'Complete: There ___ two bedrooms in my apartment.',a:'are',exp:'Two bedrooms = plural.'},
      {type:'order',q:'Ordena:',words:['a','There','park','is','near','my house.'],a:'There is a park near my house.',exp:'There is + singular noun.'},
      {type:'order',q:'Ordena:',words:['Are','any','there','restaurants','here?','near'],a:'Are there any restaurants near here?',exp:'Are there any + plural noun?'}
    ],
    communicativeTask:{
      title:'Describe your room',
      instruction:'Write or record eight sentences about your room using there is / there are.',
      output:'Room description.'
    }
  },

  questions_a1:{
    id:'questions_a1', level:'A1', title:'Preguntas Básicas en Inglés', icon:'circle-help', color:'#F59E0B',
    learningGoal:'Formular preguntas simples para obtener información personal y cotidiana.',
    canDo:['Puedo hacer preguntas de sí/no.','Puedo hacer preguntas con wh-.','Puedo responder preguntas básicas sobre mí mismo.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
    theory:`
      <h3>Preguntas en inglés A1</h3>
      <p>En inglés el orden de las preguntas cambia según el verbo auxiliar.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#F59E0B;background:#FFFBEB">
          <strong style="color:#92400E">Con TO BE</strong>
          <small>Are you Colombian?<br>Is she your sister?<br>Where are they?</small>
        </div>
        <div class="t-box" style="border-color:#2563EB;background:#EFF6FF">
          <strong style="color:#1E3A8A">Con DO / DOES</strong>
          <small>Do you like music?<br>Does he work here?<br>Where do you live?</small>
        </div>
        <div class="t-box" style="border-color:#DC2626;background:#FEF2F2">
          <strong style="color:#7F1D1D">Con DID</strong>
          <small>Did you study yesterday?<br>Where did she go?</small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'___ you from Colombia?',opts:['Do','Are','Is'],a:'Are',exp:'Con to be: Are you...?'},
      {type:'choice',q:'___ she live in Bogotá?',opts:['Do','Does','Is'],a:'Does',exp:'She usa does en presente simple.'},
      {type:'choice',q:'Where ___ you work?',opts:['do','does','are'],a:'do',exp:'Where do you work?'},
      {type:'choice',q:'___ did you go yesterday?',opts:['What','Where','Who'],a:'Where',exp:'Where pregunta lugar.'},
      {type:'write',q:'Complete: ___ is your name?',a:'What',exp:'What is your name?'},
      {type:'write',q:'Complete: ___ old are you?',a:'How',exp:'How old = qué edad.'},
      {type:'order',q:'Ordena:',words:['you','Do','English?','speak'],a:'Do you speak English?',exp:'Do + you + verb base.'},
      {type:'order',q:'Ordena:',words:['does','Where','she','live?'],a:'Where does she live?',exp:'Wh + does + subject + verb base.'}
    ],
    communicativeTask:{
      title:'Interview a classmate',
      instruction:'Ask a classmate ten A1 questions and write their answers.',
      output:'Short interview profile.'
    }
  },

  imperatives:{
    id:'imperatives', level:'A1', title:'Imperativos', icon:'megaphone', color:'#DC2626',
    learningGoal:'Dar instrucciones, órdenes y recomendaciones simples.',
    canDo:['Puedo dar instrucciones simples.','I can use don’t for negative commands.','Puedo entender instrucciones de clase.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
    theory:`
      <h3>Imperativos</h3>
      <p>El imperativo usa el verbo base sin sujeto. Sirve para instrucciones, órdenes, consejos y señales.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#16A34A;background:#F0FDF4">
          <strong style="color:#166534">Positivo</strong>
          <small>Open the door.<br>Listen carefully.<br>Write your name.</small>
        </div>
        <div class="t-box" style="border-color:#DC2626;background:#FEF2F2">
          <strong style="color:#7F1D1D">Negativo</strong>
          <small>Don’t run.<br>Don’t touch that.<br>Don’t be late.</small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'___ the window, please. It is hot.',opts:['Open','Opens','Opening'],a:'Open',exp:'Imperativo = verbo base.'},
      {type:'choice',q:'___ use your phone in class.',opts:['No','Don’t','Doesn’t'],a:'Don’t',exp:'Imperativo negativo = Don’t + verbo base.'},
      {type:'choice',q:'Choose the correct instruction:',opts:['Don’t be late','Doesn’t be late','Not be late'],a:'Don’t be late',exp:'Con be también usamos Don’t.'},
      {type:'write',q:'Complete: ___ carefully. (escucha)',a:'Listen',exp:'Listen carefully.'},
      {type:'write',q:'Complete: ___ touch the screen.',a:"Don't",exp:'Don’t touch = no toques.'},
      {type:'order',q:'Ordena:',words:['your','Write','name.'],a:'Write your name.',exp:'Verbo base + complemento.'},
      {type:'order',q:'Ordena:',words:["Don't",'the','door.','close'],a:"Don't close the door.",exp:'Don’t + verbo base.'}
    ],
    communicativeTask:{
      title:'Classroom rules',
      instruction:'Create five classroom rules using imperatives.',
      output:'Poster or short list.'
    }
  },

  likes_gerunds:{
    id:'likes_gerunds', level:'A1', title:'Like, Love, Hate + ING', icon:'heart', color:'#E11D48',
    learningGoal:'Expresar gustos y preferencias sobre actividades y hobbies.',
    canDo:['Puedo hablar de actividades que me gustan.','Puedo decir qué me encanta y qué detesto hacer.','Puedo preguntar a otros sobre sus pasatiempos.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
    theory:`
      <h3>Like / Love / Hate + ING</h3>
      <p>Después de verbos que expresan gusto o desagrado, la siguiente actividad normalmente lleva <strong>-ing</strong>.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#E11D48;background:#FFF1F2">
          <strong style="color:#881337">Estructura</strong>
          <small>I like <b>reading</b>.<br>
          She loves <b>dancing</b>.<br>
          They hate <b>waiting</b>.</small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'I like ___ music.',opts:['listen','listening to','listens'],a:'listening to',exp:'Like + verb-ing. Listen requiere to.'},
      {type:'choice',q:'She loves ___ in the morning.',opts:['run','running','runs'],a:'running',exp:'Love + verb-ing.'},
      {type:'choice',q:'They hate ___ early.',opts:['getting up','get up','gets up'],a:'getting up',exp:'Hate + verb-ing.'},
      {type:'write',q:'Complete: He likes ___ soccer. (play)',a:'playing',exp:'Like + playing.'},
      {type:'write',q:'Complete: I love ___ books. (read)',a:'reading',exp:'Love + reading.'},
      {type:'order',q:'Ordena:',words:['likes','She','movies.','watching'],a:'She likes watching movies.',exp:'Likes + watching.'},
      {type:'order',q:'Ordena:',words:['hate','I','waiting.'],a:'I hate waiting.',exp:'Hate + ing.'}
    ],
    communicativeTask:{
      title:'Things I love and hate',
      instruction:'Create a short post about three activities you love, two you like and one you hate.',
      output:'Social media style post.'
    }
  },

  numbers:{
    id:'numbers', level:'A1', title:'Números, Plural y Fechas', icon:'hash', color:'#D69E2E',
    learningGoal:'Usar correctamente cantidades, números ordinales y formas en plural.',
    canDo:['Puedo contar números grandes.','Puedo usar números ordinales para fechas.','Puedo formar plurales regulares e irregulares.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
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
    ],
    communicativeTask:{
      title:'Important dates',
      instruction:'Write down 3 important dates in your family (birthdays, anniversaries) using ordinal numbers.',
      output:'Written list.'
    }
  },

  past_to_be:{
    id:'past_to_be', level:'A1', title:'Pasado de To Be', icon:'clock-3', color:'#92400E',
    learningGoal:'Hablar de estados, lugares y situaciones en el pasado usando Was y Were.',
    canDo:['Puedo usar was y were.','Puedo decir dónde estaba ayer.','Puedo hacer preguntas simples sobre el pasado.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
    theory:`
      <h3>Was / Were</h3>
      <p>Es el pasado del verbo <strong>to be</strong>.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#92400E;background:#FFFBEB">
          <strong style="color:#78350F">Formas</strong>
          <small>I/he/she/it <b>was</b>.<br>
          You/we/they <b>were</b>.<br>
          I <b>wasn't</b> tired.<br>
          They <b>weren't</b> at home.</small>
        </div>
        <div class="t-box" style="border-color:#2563EB;background:#EFF6FF">
          <strong style="color:#1E3A8A">Preguntas</strong>
          <small>Was she happy?<br>
          Were they at school?<br>
          Where were you yesterday?</small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'I ___ at home yesterday.',opts:['was','were','am'],a:'was',exp:'I usa was en pasado.'},
      {type:'choice',q:'They ___ very happy last night.',opts:['was','were','are'],a:'were',exp:'They usa were.'},
      {type:'choice',q:'___ she at school yesterday?',opts:['Was','Were','Is'],a:'Was',exp:'She usa was.'},
      {type:'choice',q:'We ___ tired after the trip.',opts:['was','were','is'],a:'were',exp:'We usa were.'},
      {type:'write',q:'Complete: He ___ born in 2005.',a:'was',exp:'He was born.'},
      {type:'write',q:'Complete: You ___ not in class yesterday.',a:'were',exp:'You were not / weren’t.'},
      {type:'order',q:'Ordena:',words:['was','She','yesterday.','sick'],a:'She was sick yesterday.',exp:'She + was + adjective.'},
      {type:'order',q:'Ordena:',words:['Were','at','you','home?'],a:'Were you at home?',exp:'Were + you + complement?'}
    ],
    communicativeTask:{
      title:'A special day',
      instruction:'Write six sentences about where you were and how you felt on a special day in the past.',
      output:'Short paragraph.'
    }
  },

  past_simple:{
    id:'past_simple', level:'A1', title:'Pasado Simple', icon:'clock', color:'#C05621',
    learningGoal:'Narrar eventos y acciones que ya finalizaron en el pasado.',
    canDo:['Puedo usar verbos regulares con -ed.','Puedo usar los verbos irregulares más comunes.','Puedo formar negativas y preguntas con did.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
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
    ],
    communicativeTask:{
      title:'My last weekend',
      instruction:'Write a paragraph describing what you did last weekend.',
      output:'Written paragraph.'
    }
  },

  future_going_to: {
    id: 'future_going_to', level: 'A1', title: 'Future: Going To', icon: 'map', color: '#0EA5E9',
    learningGoal: 'Describir planes futuros y predicciones basadas en evidencia visual.',
    canDo: ['Puedo hablar de mis planes futuros.', 'Puedo predecir algo que veo que va a suceder.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
    theory: `
      <h3>Planes e Intenciones</h3>
      <p>Usamos <strong>Be + Going To</strong> para hablar de cosas que ya hemos decidido hacer, o predicciones evidentes.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#0EA5E9;background:#F0F9FF">
          <strong style="color:#0369A1">Estructura</strong>
          <small>
            Sujeto + <b>am/is/are</b> + <b>going to</b> + verbo base.<br>
            (+) I <b>am going to</b> travel.<br>
            (-) She <b>isn't going to</b> work.
          </small>
        </div>
      </div>`,
    exercises: [
      {type:'choice',q:'I ___ visit Colombia next year. I have the tickets.',opts:['am going to','go to','will'],a:'am going to',exp:'Plan ya decidido = am going to.'},
      {type:'choice',q:'Look at the sky! It ___.',opts:['is raining','is going to rain','rains'],a:'is going to rain',exp:'Evidencia visible (nubes) = is going to rain.'},
      {type:'write',q:'Completa la negación: She ___ going to come to the party.',a:"isn't",exp:'is not = isn\'t.'},
      {type:'order',q:'Ordena:',words:["They're","going","Spain.","to","visit"],a:"They're going to visit Spain.",exp:'They\'re going to + verbo.'}
    ],
    communicativeTask: {
      title: 'Next vacation',
      instruction: 'Talk about your plans for your next holiday.',
      output: 'Short written plan.'
    }
  },

  future_will:{
    id:'future_will', level:'A1', title:'Futuro: Will y Going To', icon:'chevrons-right', color:'#2C7A7B',
    learningGoal:'Expresar decisiones espontáneas, promesas y predicciones generales.',
    canDo:['Puedo tomar decisiones espontáneas.','Puedo hacer promesas.','Puedo predecir el futuro con "I think".'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
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
    ],
    communicativeTask:{
      title:'Promises',
      instruction:'Make 3 promises to a friend using will/won\'t.',
      output:'Three sentences.'
    }
  },

  can_could:{
    id:'can_could', level:'A1', title:'Verbos Modales: Can, Could', icon:'shield', color:'#553C9A',
    learningGoal:'Expresar habilidad y hacer peticiones educadas.',
    canDo:['Puedo hablar de mis habilidades.','Puedo hablar de habilidades pasadas.','Puedo pedir algo de forma cortés.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
    theory:`
      <h3>Verbos modales — Can, Could</h3>
      <p>Los modales expresan habilidad o posibilidad. <strong>Nunca llevan -S y siempre van con verbo base (sin 'to').</strong></p>
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
    ],
    communicativeTask:{
      title:'Secret talents',
      instruction:'Share 2 things you can do well, and 1 thing you couldn\'t do when you were a child.',
      output:'Three sentences.'
    }
  },

  id_like_food:{
    id:'id_like_food', level:'A1', title:'Pedir comida (I’d Like)', icon:'utensils', color:'#EA580C',
    learningGoal:'Pedir comida o productos en un entorno de servicio de manera cortés.',
    canDo:['Puedo pedir comida de forma cortés.','I can use I’d like.','Puedo preguntar por precios y cantidades.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
    theory:`
      <h3>I’d like</h3>
      <p><strong>I’d like</strong> (I would like) significa “me gustaría” o “quisiera”. Es la forma más cortés para pedir en inglés.</p>
      <div class="theory-grid">
        <div class="t-box" style="border-color:#EA580C;background:#FFF7ED">
          <strong style="color:#7C2D12">Estructura</strong>
          <small>I’d like a coffee, please.<br>
          I’d like some water.<br>
          Would you like a sandwich?</small>
        </div>
      </div>`,
    exercises:[
      {type:'choice',q:'I ___ a coffee, please.',opts:['like','would like','am like'],a:'would like',exp:'Would like = quisiera.'},
      {type:'choice',q:'___ you like a sandwich?',opts:['Do','Would','Are'],a:'Would',exp:'Would you like...? = ¿Te gustaría...?'},
      {type:'choice',q:'I’d like ___ water, please.',opts:['a','some','many'],a:'some',exp:'Water es incontable. Usamos some.'},
      {type:'write',q:'Complete: I’d like ___ apple, please.',a:'an',exp:'Apple empieza por sonido vocal.'},
      {type:'write',q:'Complete: I ___ like a glass of water.',a:'would',exp:'I would like = I’d like.'},
      {type:'order',q:'Ordena:',words:['like','I’d','coffee,','a','please.'],a:'I’d like a coffee, please.',exp:'I’d like + noun + please.'},
      {type:'order',q:'Ordena:',words:['you','Would','tea?','like','some'],a:'Would you like some tea?',exp:'Pregunta cortés con would.'}
    ],
    communicativeTask:{
      title:'Restaurant role play',
      instruction:'Create a short dialogue between a waiter and a customer ordering lunch.',
      output:'Written dialogue.'
    }
  },

  // ==================== NIVEL A2 (EXPLORADOR AVANZADO) ==================== //

  comparisons: {
    id:'comparisons', level:'A2', title:'Advanced Comparisons', icon:'bar-chart', color:'#3182CE',
    learningGoal:'Comparar y contrastar múltiples sujetos y situaciones usando adjetivos.',
    canDo:['I can use comparative adjectives.','I can use superlative adjectives.','I can use irregular forms properly.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
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
    ],
    communicativeTask:{
      title:'Compare your world',
      instruction:'Compare two cities you know well. Use 3 comparatives and 1 superlative.',
      output:'Written comparison paragraph.'
    }
  },

  quantifiers: {
    id:'quantifiers', level:'A2', title:'Countables & Quantifiers', icon:'pie-chart', color:'#38A169',
    learningGoal:'Definir cantidades con precisión dependiendo de si el sustantivo es contable o no.',
    canDo:['I can use many/much correctly.','I can use some/any.','I can ask for quantities.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
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
    ],
    communicativeTask:{
      title:'Fridge Inventory',
      instruction:'Describe what you have and don\'t have in your fridge right now using quantifiers.',
      output:'Short inventory list.'
    }
  },

  past_continuous: {
    id:'past_continuous', level:'A2', title:'Past Continuous', icon:'history', color:'#805AD5',
    learningGoal:'Narrar historias y describir acciones interrumpidas en el pasado.',
    canDo:['I can use was/were + ing.','I can use WHEN for interruptions.','I can use WHILE for simultaneous actions.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
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
    ],
    communicativeTask:{
      title:'The Interruption',
      instruction:'Tell a short story about a time you were doing something important and got interrupted.',
      output:'Narrative paragraph.'
    }
  },

  present_perfect: {
    id:'present_perfect', level:'A2', title:'Life Experiences (Present Perfect)', icon:'star', color:'#D69E2E',
    learningGoal:'Hablar de experiencias de vida conectando el pasado con el presente.',
    canDo:['I can talk about my experiences.','I can use ever and never.','I can use just, already and yet.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
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
    ],
    communicativeTask:{
      title:'Bucket List Check',
      instruction:'Write 2 things you have already done in your life, and 2 things you haven\'t done yet.',
      output:'4 sentences using Present Perfect.'
    }
  },

  future_mixed: {
    id:'future_mixed', level:'A2', title:'Future Mixed: Will vs Cont', icon:'zap', color:'#3182CE',
    learningGoal:'Dominar la diferencia entre predicciones, planes y citas agendadas.',
    canDo:['I can use Present Continuous for fixed arrangements.','I can use Will for promises and predictions.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
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
    ],
    communicativeTask:{
      title:'Weekend Agenda',
      instruction:'Share your 100% confirmed plans for this weekend using Present Continuous.',
      output:'A short agenda paragraph.'
    }
  },

  modals_obligation: {
    id:'modals_obligation', level:'A2', title:'Obligations & Advice', icon:'shield-alert', color:'#C05621',
    learningGoal:'Aconsejar, establecer reglas y hablar de obligaciones estrictas y opcionales.',
    canDo:['I can give advice with should.','I can express obligation with must and have to.','I can express lack of obligation.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
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
    ],
    communicativeTask:{
      title:'Advice Column',
      instruction:'Write a response giving 3 pieces of advice to someone who wants to learn English fast.',
      output:'A short advice message.'
    }
  },

  conditionals: {
    id:'conditionals', level:'A2', title:'Conditions & Consequences', icon:'git-branch', color:'#805AD5',
    learningGoal:'Expresar causa y consecuencia, desde hechos científicos hasta posibilidades futuras.',
    canDo:['I can talk about facts using Zero Conditional.','I can predict outcomes using First Conditional.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
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
    ],
    communicativeTask:{
      title:'Chain Reaction',
      instruction:'Write a chain of 3 First Conditional sentences (If X happens, Y will happen. If Y happens, Z will happen).',
      output:'Written conditional chain.'
    }
  },

  phrasal_gerunds: {
    id:'phrasal_gerunds', level:'A2', title:'Native Speech: Gerunds', icon:'message-square', color:'#E53E3E',
    learningGoal:'Usar gerundios naturalmente después de preposiciones y como sujetos.',
    canDo:['I can use verb+ing after prepositions.','I can use gerunds as the subject of a sentence.'],
    stages: globalDidacticStages, methodology: globalMethodology, assessment: globalAssessment, progression: defaultProgression,
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
    ],
    communicativeTask:{
      title:'Skills and Hobbies',
      instruction:'Write 3 sentences about what you are good AT, bad AT, and what you enjoy DOING.',
      output:'Personalized gerund sentences.'
    }
  }

};
// ============================================================
// LEOENGLISH — GRAMMAR ROUTE + DIAGNOSTIC BRIDGE v5.1
// Pegar al FINAL de data-grammar.js
// No borra ni reemplaza módulos. Solo agrega metadatos para ruta,
// diagnóstico, homologación y refuerzos.
// ============================================================


// ------------------------------------------------------------
// 1. ALIAS DE COMPATIBILIDAD
// ------------------------------------------------------------
// Algunos nombres antiguos del app.js no coinciden con los IDs reales
// del data-grammar.js v5.0. Estos alias evitan romper la ruta.

const grammarIdAliases = {
  to_be_pronouns: 'verbs',
  articles_dem: 'articles',
  possessives: 'pronouns',
  future_going_to_plans: 'future_going_to',
  future_will_going_to: 'future_will',
  present_continuous: 'present_cont',
  adverbs_frequency: 'frequency_adverbs',
  like_love_hate_ing: 'likes_gerunds',
  questions: 'questions_a1',
  basic_questions: 'questions_a1',
  be_have_do: 'verbs',
  basic_modals: 'can_could',
  comparatives: 'comparisons',
  how_much_many: 'quantifiers'
};

function resolveGrammarId(id) {
  if (modulesData[id]) return id;
  if (grammarIdAliases[id] && modulesData[grammarIdAliases[id]]) {
    return grammarIdAliases[id];
  }
  return id;
}


// ------------------------------------------------------------
// 2. RUTA OFICIAL DE GRAMÁTICA
// ------------------------------------------------------------
// Esta ruta usa los IDs reales que existen en tu modulesData.

const grammarLearningPath = [
  {
    level: 'A1',
    title: 'A1 · Foundations',
    description: 'Bases esenciales para comunicarse en inglés cotidiano.',
    color: '#1D9E75',
    requiredScore: 80,
    homologationScore: 85,
    modules: [
      'articles',
      'adjectives_demo',
      'pronouns',
      'verbs',
      'present_simple',
      'frequency_adverbs',
      'present_cont',
      'simple_vs_cont',
      'there_is_are',
      'questions_a1',
      'prepositions',
      'imperatives',
      'likes_gerunds',
      'numbers',
      'can_could',
      'id_like_food',
      'past_to_be',
      'past_simple',
      'future_going_to',
      'future_will'
    ]
  },
  {
    level: 'A2',
    title: 'A2 · Expansion',
    description: 'Consolidación de comparación, cuantificadores, narración, experiencias, obligación y condicionales.',
    color: '#3182CE',
    requiredScore: 80,
    homologationScore: 85,
    modules: [
      'comparisons',
      'quantifiers',
      'past_continuous',
      'present_perfect',
      'future_mixed',
      'modals_obligation',
      'conditionals',
      'phrasal_gerunds'
    ]
  }
];


// ------------------------------------------------------------
// 3. MAPA DE COMPETENCIAS PARA HOMOLOGACIÓN
// ------------------------------------------------------------
// Cada módulo queda conectado con competencias, diagnóstico y refuerzos.

const grammarModuleCompetencyMap = {
  articles: {
    cefr: 'A1',
    skill: 'grammar',
    homologationGroup: 'a1_articles',
    diagnosticTags: ['articles', 'a_an_the', 'specific_unspecific', 'countable_singular'],
    weaknessLabel: 'Artículos a, an y the',
    evidence: 'Usa correctamente a/an/the en frases sobre objetos, profesiones y lugares.'
  },

  adjectives_demo: {
    cefr: 'A1',
    skill: 'grammar',
    homologationGroup: 'a1_adjectives_demonstratives',
    diagnosticTags: ['adjectives', 'demonstratives', 'this_that_these_those', 'noun_order'],
    weaknessLabel: 'Adjetivos y demostrativos',
    evidence: 'Describe personas, objetos y lugares usando adjetivos antes del sustantivo.'
  },

  pronouns: {
    cefr: 'A1',
    skill: 'grammar',
    homologationGroup: 'a1_pronouns_possessives',
    diagnosticTags: ['pronouns', 'subject_pronouns', 'object_pronouns', 'possessive_adjectives', 'possessive_pronouns'],
    weaknessLabel: 'Pronombres y posesivos',
    evidence: 'Usa pronombres personales, objetos y posesivos sin confundir función.'
  },

  verbs: {
    cefr: 'A1',
    skill: 'grammar',
    homologationGroup: 'a1_be_have_do',
    diagnosticTags: ['to_be', 'have_has', 'do_does', 'questions_negatives'],
    weaknessLabel: 'Verbos base: be, have y do',
    evidence: 'Forma frases afirmativas, negativas y preguntas con be, have y do.'
  },

  present_simple: {
    cefr: 'A1',
    skill: 'grammar',
    homologationGroup: 'a1_present_simple',
    diagnosticTags: ['present_simple', 'routines', 'third_person_s', 'do_does', 'negative_present'],
    weaknessLabel: 'Presente simple',
    evidence: 'Habla de rutinas y hábitos usando presente simple.'
  },

  frequency_adverbs: {
    cefr: 'A1',
    skill: 'grammar',
    homologationGroup: 'a1_frequency_adverbs',
    diagnosticTags: ['frequency_adverbs', 'always_usually_often_sometimes_never', 'word_order'],
    weaknessLabel: 'Adverbios de frecuencia',
    evidence: 'Expresa frecuencia y ubica correctamente los adverbios en la oración.'
  },

  present_cont: {
    cefr: 'A1',
    skill: 'grammar',
    homologationGroup: 'a1_present_continuous',
    diagnosticTags: ['present_continuous', 'be_ing', 'actions_now', 'ing_spelling'],
    weaknessLabel: 'Presente continuo',
    evidence: 'Describe acciones que están ocurriendo ahora usando be + ing.'
  },

  simple_vs_cont: {
    cefr: 'A1',
    skill: 'grammar',
    homologationGroup: 'a1_simple_vs_continuous',
    diagnosticTags: ['present_simple_vs_continuous', 'state_verbs', 'now_vs_habit'],
    weaknessLabel: 'Presente simple vs continuo',
    evidence: 'Diferencia hábitos de acciones en progreso.'
  },

  there_is_are: {
    cefr: 'A1',
    skill: 'grammar',
    homologationGroup: 'a1_there_is_are',
    diagnosticTags: ['there_is_are', 'singular_plural', 'existence', 'places'],
    weaknessLabel: 'There is / There are',
    evidence: 'Describe la existencia de objetos o lugares usando singular y plural.'
  },

  questions_a1: {
    cefr: 'A1',
    skill: 'grammar',
    homologationGroup: 'a1_questions',
    diagnosticTags: ['questions', 'wh_questions', 'yes_no_questions', 'be_do_does_did'],
    weaknessLabel: 'Preguntas básicas',
    evidence: 'Formula preguntas básicas con be, do, does, did y wh-words.'
  },

  prepositions: {
    cefr: 'A1',
    skill: 'grammar',
    homologationGroup: 'a1_prepositions',
    diagnosticTags: ['prepositions', 'in_on_at', 'place_prepositions', 'time_prepositions'],
    weaknessLabel: 'Preposiciones de tiempo y lugar',
    evidence: 'Usa in, on, at y preposiciones de lugar en contextos cotidianos.'
  },

  imperatives: {
    cefr: 'A1',
    skill: 'grammar',
    homologationGroup: 'a1_imperatives',
    diagnosticTags: ['imperatives', 'commands', 'instructions', 'dont'],
    weaknessLabel: 'Imperativos',
    evidence: 'Da instrucciones y reglas con imperativos positivos y negativos.'
  },

  likes_gerunds: {
    cefr: 'A1',
    skill: 'grammar',
    homologationGroup: 'a1_likes_gerunds',
    diagnosticTags: ['like_love_hate_ing', 'gerunds_basic', 'preferences'],
    weaknessLabel: 'Like, love, hate + ing',
    evidence: 'Expresa gustos y preferencias usando verbo + ing.'
  },

  numbers: {
    cefr: 'A1',
    skill: 'grammar',
    homologationGroup: 'a1_numbers_plurals_dates',
    diagnosticTags: ['numbers', 'ordinals', 'plurals', 'dates'],
    weaknessLabel: 'Números, fechas y plurales',
    evidence: 'Usa números, ordinales y plurales regulares e irregulares.'
  },

  can_could: {
    cefr: 'A1',
    skill: 'grammar',
    homologationGroup: 'a1_can_could',
    diagnosticTags: ['can_cant', 'could_couldnt', 'abilities', 'permission'],
    weaknessLabel: 'Can, can’t, could y couldn’t',
    evidence: 'Habla de habilidades presentes y pasadas usando modales básicos.'
  },

  id_like_food: {
    cefr: 'A1',
    skill: 'grammar',
    homologationGroup: 'a1_id_like_food',
    diagnosticTags: ['id_like', 'would_like', 'polite_requests', 'food_orders'],
    weaknessLabel: 'I’d like y pedidos corteses',
    evidence: 'Pide comida o productos usando I’d like y would you like.'
  },

  past_to_be: {
    cefr: 'A1',
    skill: 'grammar',
    homologationGroup: 'a1_past_to_be',
    diagnosticTags: ['was_were', 'past_to_be', 'past_states', 'past_places'],
    weaknessLabel: 'Pasado de to be',
    evidence: 'Habla de estados y lugares en el pasado usando was y were.'
  },

  past_simple: {
    cefr: 'A1',
    skill: 'grammar',
    homologationGroup: 'a1_past_simple',
    diagnosticTags: ['past_simple', 'regular_verbs', 'irregular_verbs', 'did_questions', 'didnt'],
    weaknessLabel: 'Pasado simple',
    evidence: 'Narra acciones pasadas usando verbos regulares, irregulares y did.'
  },

  future_going_to: {
    cefr: 'A1',
    skill: 'grammar',
    homologationGroup: 'a1_going_to',
    diagnosticTags: ['going_to', 'future_plans', 'intentions', 'evidence_future'],
    weaknessLabel: 'Going to para planes',
    evidence: 'Habla de planes e intenciones futuras usando be going to.'
  },

  future_will: {
    cefr: 'A1',
    skill: 'grammar',
    homologationGroup: 'a1_will_going_to',
    diagnosticTags: ['will', 'going_to', 'future_predictions', 'spontaneous_decisions'],
    weaknessLabel: 'Will y Going To',
    evidence: 'Diferencia decisiones espontáneas, predicciones y planes futuros.'
  },

  comparisons: {
    cefr: 'A2',
    skill: 'grammar',
    homologationGroup: 'a2_comparisons',
    diagnosticTags: ['comparatives', 'superlatives', 'than', 'the_most', 'er_est'],
    weaknessLabel: 'Comparativos y superlativos',
    evidence: 'Compara personas, lugares y objetos usando comparativos y superlativos.'
  },

  quantifiers: {
    cefr: 'A2',
    skill: 'grammar',
    homologationGroup: 'a2_quantifiers',
    diagnosticTags: ['quantifiers', 'some_any', 'much_many', 'a_few_a_little', 'countable_uncountable'],
    weaknessLabel: 'Cuantificadores',
    evidence: 'Usa cuantificadores con sustantivos contables e incontables.'
  },

  past_continuous: {
    cefr: 'A2',
    skill: 'grammar',
    homologationGroup: 'a2_past_continuous',
    diagnosticTags: ['past_continuous', 'was_were_ing', 'when_while', 'interrupted_actions'],
    weaknessLabel: 'Past Continuous',
    evidence: 'Narra acciones en progreso en el pasado y acciones interrumpidas.'
  },

  present_perfect: {
    cefr: 'A2',
    skill: 'grammar',
    homologationGroup: 'a2_present_perfect',
    diagnosticTags: ['present_perfect', 'have_has_participle', 'ever_never', 'already_yet_just'],
    weaknessLabel: 'Present Perfect',
    evidence: 'Habla de experiencias de vida y acciones conectadas con el presente.'
  },

  future_mixed: {
    cefr: 'A2',
    skill: 'grammar',
    homologationGroup: 'a2_future_mixed',
    diagnosticTags: ['future_forms', 'will', 'going_to', 'present_continuous_future', 'arrangements'],
    weaknessLabel: 'Futuros mixtos',
    evidence: 'Diferencia predicciones, planes y acuerdos futuros.'
  },

  modals_obligation: {
    cefr: 'A2',
    skill: 'grammar',
    homologationGroup: 'a2_modals_obligation',
    diagnosticTags: ['must', 'have_to', 'dont_have_to', 'mustnt', 'should', 'obligation_advice'],
    weaknessLabel: 'Modales de obligación y consejo',
    evidence: 'Expresa obligación, prohibición, ausencia de obligación y consejo.'
  },

  conditionals: {
    cefr: 'A2',
    skill: 'grammar',
    homologationGroup: 'a2_conditionals',
    diagnosticTags: ['zero_conditional', 'first_conditional', 'if_present_will', 'facts_consequences'],
    weaknessLabel: 'Condicionales cero y primero',
    evidence: 'Expresa hechos generales y consecuencias futuras usando if.'
  },

  phrasal_gerunds: {
    cefr: 'A2',
    skill: 'grammar',
    homologationGroup: 'a2_gerunds',
    diagnosticTags: ['gerunds', 'after_prepositions', 'gerund_subject', 'enjoy_finish_look_forward_to'],
    weaknessLabel: 'Gerundios en uso natural',
    evidence: 'Usa gerundios después de preposiciones, como sujeto y después de verbos frecuentes.'
  }
};


// ------------------------------------------------------------
// 4. PRERREQUISITOS PARA BLOQUEO INTELIGENTE
// ------------------------------------------------------------

const grammarPrerequisites = {
  articles: [],
  adjectives_demo: ['articles'],
  pronouns: ['adjectives_demo'],
  verbs: ['pronouns'],
  present_simple: ['verbs'],
  frequency_adverbs: ['present_simple'],
  present_cont: ['verbs'],
  simple_vs_cont: ['present_simple', 'present_cont'],
  there_is_are: ['articles', 'verbs'],
  questions_a1: ['verbs', 'present_simple'],
  prepositions: ['there_is_are'],
  imperatives: ['verbs'],
  likes_gerunds: ['present_simple'],
  numbers: ['articles'],
  can_could: ['verbs'],
  id_like_food: ['articles', 'quantifiers'],
  past_to_be: ['verbs'],
  past_simple: ['past_to_be'],
  future_going_to: ['verbs'],
  future_will: ['future_going_to'],

  comparisons: ['adjectives_demo'],
  quantifiers: ['articles', 'there_is_are'],
  past_continuous: ['past_simple', 'present_cont'],
  present_perfect: ['past_simple'],
  future_mixed: ['future_will', 'future_going_to'],
  modals_obligation: ['can_could'],
  conditionals: ['present_simple', 'future_will'],
  phrasal_gerunds: ['likes_gerunds', 'prepositions']
};


// ------------------------------------------------------------
// 5. ENRIQUECIMIENTO AUTOMÁTICO DE CADA MÓDULO
// ------------------------------------------------------------

function inferGrammarLevelFromPath(moduleId) {
  const found = grammarLearningPath.find(level => level.modules.includes(moduleId));
  return found ? found.level : 'A1';
}

function getGrammarSequence(moduleId) {
  let counter = 0;

  for (const level of grammarLearningPath) {
    for (const id of level.modules) {
      counter++;
      if (id === moduleId) return counter;
    }
  }

  return 999;
}

Object.keys(modulesData).forEach(moduleId => {
  const mod = modulesData[moduleId];
  const meta = grammarModuleCompetencyMap[moduleId] || {};

  mod.id = mod.id || moduleId;
  mod.level = mod.level || meta.cefr || inferGrammarLevelFromPath(moduleId);
  mod.skill = mod.skill || 'grammar';

  mod.routeMeta = {
    type: 'grammar',
    level: mod.level,
    sequence: getGrammarSequence(moduleId),
    requiredScore: 80,
    homologationScore: 85,
    prerequisites: grammarPrerequisites[moduleId] || [],
    estimatedMinutes: mod.estimatedMinutes || (
      Array.isArray(mod.exercises) && mod.exercises.length >= 15 ? 35 : 25
    ),
    isRequired: true
  };

  mod.homologation = {
    canHomologate: true,
    group: meta.homologationGroup || moduleId,
    minimumDiagnosticScore: 85,
    weaknessLabel: meta.weaknessLabel || mod.title,
    evidence: meta.evidence || mod.learningGoal || `Dominio del módulo ${mod.title}.`
  };

  mod.diagnosticTags = meta.diagnosticTags || [moduleId];
  mod.weaknessLabel = meta.weaknessLabel || mod.title;
  mod.cefrDescriptor = mod.cefrDescriptor || meta.evidence || mod.learningGoal || '';
});


// ------------------------------------------------------------
// 6. DIAGNÓSTICO BASE DE GRAMÁTICA
// ------------------------------------------------------------
// Esta estructura puede alimentar data-diagnostic.js o el motor interno del app.js.

const grammarDiagnosticBlueprint = {
  id: 'grammar_diagnostic_a1_a2',
  title: 'Diagnóstico de gramática A1–A2',
  description: 'Evalúa competencias gramaticales y permite homologar módulos dominados.',
  levels: ['A1', 'A2'],
  rules: {
    passScore: 80,
    homologationScore: 85,
    reinforcementThreshold: 75
  },
  items: [
    {
      id: 'diag_articles_1',
      level: 'A1',
      skill: 'grammar',
      mapsTo: ['articles'],
      tags: ['articles', 'a_an_the'],
      q: 'She is ___ doctor.',
      opts: ['a', 'an', 'the'],
      a: 0,
      exp: 'Doctor empieza por sonido consonante: a doctor.'
    },
    {
      id: 'diag_adjectives_1',
      level: 'A1',
      skill: 'grammar',
      mapsTo: ['adjectives_demo'],
      tags: ['adjectives', 'word_order'],
      q: 'Choose the correct sentence.',
      opts: ['A red car', 'A car red', 'Red a car'],
      a: 0,
      exp: 'En inglés el adjetivo normalmente va antes del sustantivo.'
    },
    {
      id: 'diag_pronouns_1',
      level: 'A1',
      skill: 'grammar',
      mapsTo: ['pronouns'],
      tags: ['pronouns', 'object_pronouns'],
      q: 'Tom is my friend. I like ___.',
      opts: ['he', 'him', 'his'],
      a: 1,
      exp: 'Después del verbo usamos pronombre objeto: him.'
    },
    {
      id: 'diag_verbs_1',
      level: 'A1',
      skill: 'grammar',
      mapsTo: ['verbs'],
      tags: ['to_be'],
      q: 'They ___ at home.',
      opts: ['am', 'is', 'are'],
      a: 2,
      exp: 'They usa are.'
    },
    {
      id: 'diag_present_simple_1',
      level: 'A1',
      skill: 'grammar',
      mapsTo: ['present_simple'],
      tags: ['present_simple', 'third_person_s'],
      q: 'She ___ English every day.',
      opts: ['study', 'studies', 'studying'],
      a: 1,
      exp: 'She usa verbo con -s/-es: studies.'
    },
    {
      id: 'diag_frequency_1',
      level: 'A1',
      skill: 'grammar',
      mapsTo: ['frequency_adverbs'],
      tags: ['frequency_adverbs'],
      q: 'He ___ late. He is very punctual.',
      opts: ['is never', 'never is', 'never'],
      a: 0,
      exp: 'Con to be, el adverbio va después: is never.'
    },
    {
      id: 'diag_present_cont_1',
      level: 'A1',
      skill: 'grammar',
      mapsTo: ['present_cont'],
      tags: ['present_continuous'],
      q: 'Look! It ___.',
      opts: ['rains', 'is raining', 'rain'],
      a: 1,
      exp: 'Look indica acción ocurriendo ahora: is raining.'
    },
    {
      id: 'diag_there_is_are_1',
      level: 'A1',
      skill: 'grammar',
      mapsTo: ['there_is_are'],
      tags: ['there_is_are'],
      q: 'There ___ two chairs in the room.',
      opts: ['is', 'are', 'am'],
      a: 1,
      exp: 'Two chairs es plural: there are.'
    },
    {
      id: 'diag_questions_1',
      level: 'A1',
      skill: 'grammar',
      mapsTo: ['questions_a1'],
      tags: ['questions', 'do_does'],
      q: 'Where ___ you live?',
      opts: ['do', 'does', 'are'],
      a: 0,
      exp: 'Where do you live?'
    },
    {
      id: 'diag_prepositions_1',
      level: 'A1',
      skill: 'grammar',
      mapsTo: ['prepositions'],
      tags: ['in_on_at'],
      q: 'My birthday is ___ June.',
      opts: ['on', 'in', 'at'],
      a: 1,
      exp: 'Los meses usan in.'
    },
    {
      id: 'diag_imperatives_1',
      level: 'A1',
      skill: 'grammar',
      mapsTo: ['imperatives'],
      tags: ['imperatives'],
      q: '___ the door, please.',
      opts: ['Open', 'Opens', 'Opening'],
      a: 0,
      exp: 'El imperativo usa verbo base.'
    },
    {
      id: 'diag_likes_1',
      level: 'A1',
      skill: 'grammar',
      mapsTo: ['likes_gerunds'],
      tags: ['like_love_hate_ing'],
      q: 'I like ___ music.',
      opts: ['listen', 'listening to', 'listens'],
      a: 1,
      exp: 'Like + verb-ing.'
    },
    {
      id: 'diag_can_1',
      level: 'A1',
      skill: 'grammar',
      mapsTo: ['can_could'],
      tags: ['can_cant'],
      q: 'She can ___ English.',
      opts: ['speaks', 'speak', 'speaking'],
      a: 1,
      exp: 'Después de can usamos verbo base.'
    },
    {
      id: 'diag_past_to_be_1',
      level: 'A1',
      skill: 'grammar',
      mapsTo: ['past_to_be'],
      tags: ['was_were'],
      q: 'I ___ at home yesterday.',
      opts: ['was', 'were', 'am'],
      a: 0,
      exp: 'I usa was en pasado.'
    },
    {
      id: 'diag_past_simple_1',
      level: 'A1',
      skill: 'grammar',
      mapsTo: ['past_simple'],
      tags: ['past_simple'],
      q: 'Yesterday, I ___ a movie.',
      opts: ['watch', 'watched', 'watching'],
      a: 1,
      exp: 'Yesterday indica pasado simple.'
    },
    {
      id: 'diag_going_to_1',
      level: 'A1',
      skill: 'grammar',
      mapsTo: ['future_going_to'],
      tags: ['going_to'],
      q: 'I am going ___ my grandmother tomorrow.',
      opts: ['visit', 'to visit', 'visiting'],
      a: 1,
      exp: 'Be going to + verbo base.'
    },

    {
      id: 'diag_comparisons_1',
      level: 'A2',
      skill: 'grammar',
      mapsTo: ['comparisons'],
      tags: ['comparatives'],
      q: 'This book is ___ than that book.',
      opts: ['interesting', 'more interesting', 'most interesting'],
      a: 1,
      exp: 'Adjetivo largo: more interesting than.'
    },
    {
      id: 'diag_quantifiers_1',
      level: 'A2',
      skill: 'grammar',
      mapsTo: ['quantifiers'],
      tags: ['quantifiers', 'much_many'],
      q: 'I don’t have ___ money.',
      opts: ['many', 'much', 'a few'],
      a: 1,
      exp: 'Money es incontable: much money.'
    },
    {
      id: 'diag_past_continuous_1',
      level: 'A2',
      skill: 'grammar',
      mapsTo: ['past_continuous'],
      tags: ['past_continuous'],
      q: 'I ___ TV when you called.',
      opts: ['was watching', 'watched', 'am watching'],
      a: 0,
      exp: 'Acción en progreso en el pasado: was watching.'
    },
    {
      id: 'diag_present_perfect_1',
      level: 'A2',
      skill: 'grammar',
      mapsTo: ['present_perfect'],
      tags: ['present_perfect'],
      q: 'She has ___ to London.',
      opts: ['go', 'went', 'been'],
      a: 2,
      exp: 'Para experiencias usamos has been.'
    },
    {
      id: 'diag_future_mixed_1',
      level: 'A2',
      skill: 'grammar',
      mapsTo: ['future_mixed'],
      tags: ['future_forms'],
      q: 'We ___ meeting Ana tomorrow at 6.',
      opts: ['are', 'will', 'going'],
      a: 0,
      exp: 'Present continuous para acuerdos futuros: are meeting.'
    },
    {
      id: 'diag_modals_obligation_1',
      level: 'A2',
      skill: 'grammar',
      mapsTo: ['modals_obligation'],
      tags: ['must', 'have_to'],
      q: 'You ___ wear a helmet on a motorcycle.',
      opts: ['must', 'can', 'would'],
      a: 0,
      exp: 'Obligación fuerte/legal: must.'
    },
    {
      id: 'diag_conditionals_1',
      level: 'A2',
      skill: 'grammar',
      mapsTo: ['conditionals'],
      tags: ['first_conditional'],
      q: 'If it rains, I ___ at home.',
      opts: ['stay', 'will stay', 'stayed'],
      a: 1,
      exp: 'First conditional: If + present, will + verb.'
    },
    {
      id: 'diag_gerunds_1',
      level: 'A2',
      skill: 'grammar',
      mapsTo: ['phrasal_gerunds'],
      tags: ['gerunds_after_prepositions'],
      q: 'Thank you for ___ me.',
      opts: ['help', 'helping', 'to help'],
      a: 1,
      exp: 'Después de preposición for usamos gerundio.'
    }
  ]
};


// ------------------------------------------------------------
// 7. UTILIDADES PARA LA APP
// ------------------------------------------------------------

function getGrammarModule(moduleId) {
  const resolved = resolveGrammarId(moduleId);
  return modulesData[resolved] || null;
}

function getGrammarModulesByLevel(level) {
  return grammarLearningPath
    .find(path => path.level === level)
    ?.modules
    .map(id => modulesData[id])
    .filter(Boolean) || [];
}

function getGrammarWeaknessLabel(moduleId) {
  const resolved = resolveGrammarId(moduleId);
  return modulesData[resolved]?.weaknessLabel || moduleId;
}

function getGrammarHomologationGroup(moduleId) {
  const resolved = resolveGrammarId(moduleId);
  return modulesData[resolved]?.homologation?.group || resolved;
}

function getGrammarDiagnosticItemsByLevel(level) {
  return grammarDiagnosticBlueprint.items.filter(item => item.level === level);
}

function getGrammarReinforcementModulesFromDiagnostic(diagnosticAnswers) {
  const result = {};

  diagnosticAnswers.forEach(answer => {
    const item = answer.item;
    const ok = answer.ok;

    if (!item || ok) return;

    (item.mapsTo || []).forEach(moduleId => {
      const resolved = resolveGrammarId(moduleId);

      result[resolved] = {
        moduleId: resolved,
        title: modulesData[resolved]?.title || resolved,
        level: modulesData[resolved]?.level || item.level,
        weaknessLabel: getGrammarWeaknessLabel(resolved),
        reason: item.exp || 'Necesita refuerzo según el diagnóstico.'
      };
    });
  });

  return Object.values(result);
}


// ------------------------------------------------------------
// 8. CONFIGURACIÓN CENTRAL PARA LA RUTA ÚNICA
// ------------------------------------------------------------

const grammarRouteConfig = {
  type: 'grammar',
  source: 'modulesData',
  version: '5.1',
  requiredScore: 80,
  homologationScore: 85,
  reinforcementThreshold: 75,
  path: grammarLearningPath,
  aliases: grammarIdAliases,
  competencies: grammarModuleCompetencyMap,
  prerequisites: grammarPrerequisites,
  diagnostic: grammarDiagnosticBlueprint
};


// ------------------------------------------------------------
// 9. EXPORTACIÓN PARA NAVEGADOR Y NODE
// ------------------------------------------------------------

if (typeof window !== 'undefined') {
  window.modulesData = modulesData;
  window.grammarLearningPath = grammarLearningPath;
  window.grammarIdAliases = grammarIdAliases;
  window.grammarModuleCompetencyMap = grammarModuleCompetencyMap;
  window.grammarPrerequisites = grammarPrerequisites;
  window.grammarDiagnosticBlueprint = grammarDiagnosticBlueprint;
  window.grammarRouteConfig = grammarRouteConfig;

  window.resolveGrammarId = resolveGrammarId;
  window.getGrammarModule = getGrammarModule;
  window.getGrammarModulesByLevel = getGrammarModulesByLevel;
  window.getGrammarWeaknessLabel = getGrammarWeaknessLabel;
  window.getGrammarHomologationGroup = getGrammarHomologationGroup;
  window.getGrammarDiagnosticItemsByLevel = getGrammarDiagnosticItemsByLevel;
  window.getGrammarReinforcementModulesFromDiagnostic = getGrammarReinforcementModulesFromDiagnostic;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    modulesData,
    grammarLearningPath,
    grammarIdAliases,
    grammarModuleCompetencyMap,
    grammarPrerequisites,
    grammarDiagnosticBlueprint,
    grammarRouteConfig,
    resolveGrammarId,
    getGrammarModule,
    getGrammarModulesByLevel,
    getGrammarWeaknessLabel,
    getGrammarHomologationGroup,
    getGrammarDiagnosticItemsByLevel,
    getGrammarReinforcementModulesFromDiagnostic
  };
}
