// ============================================================
// data-grammar-expanded.js  — LeoEnglish v7.0
// EXPANSIÓN PEDAGÓGICA A1 → C1
// Principios: Input hipótesis (Krashen) · Noticing (Schmidt)
// · Output forzado (Swain) · Carga cognitiva óptima (Sweller)
// · Spaced repetition · Interleaving · Emotional anchoring
// Cada módulo: +12 ejercicios nuevos con variedad de tipos,
// teoría extendida con analogías, y tareas comunicativas reales.
// ============================================================

(function () {
  'use strict';

  const _stages   = typeof globalDidacticStages !== 'undefined' ? globalDidacticStages : [];
  const _method   = typeof globalMethodology    !== 'undefined' ? globalMethodology    : {};
  const _assess   = typeof globalAssessment     !== 'undefined' ? globalAssessment     : {};
  const _progress = typeof defaultProgression   !== 'undefined' ? defaultProgression   : {};

  // ============================================================
  // A1 — EXPANSIONES
  // ============================================================

  const expansionsA1 = {

    // ── A1 Artículos: 12 ejercicios nuevos ──────────────────
    articles_extra: {
      id: 'articles_extra', level: 'A1', title: 'Artículos: Práctica avanzada', icon: 'type', color: '#7C3AED',
      learningGoal: 'Dominar a/an/the/∅ en contextos narrativos y cotidianos reales.',
      canDo: [
        'I can choose the right article in a short story.',
        'I can explain WHY I used a specific article.',
        'I can spot zero-article contexts (general nouns, languages, meals).'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>🧠 ¿Por qué los artículos son difíciles?</h3>
        <p>El español tiene artículos, pero el inglés tiene reglas distintas. El error más común es poner artículo donde no va (<em>"I love the music"</em> ≠ <em>"I love music"</em>).</p>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Regla mental: ¿"lo conoces"?</strong>
            <small>Si tú y tu interlocutor saben <em>exactamente</em> de qué hablan → <b>the</b>.<br>
            Si es la primera mención o uno genérico → <b>a / an</b>.<br>
            Si es una categoría completa (incontable o plural) → <b>∅</b>.</small>
          </div>
          <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
            <strong style="color:#742A2A">Zero article: los 5 casos</strong>
            <small>1. Idiomas: <em>She speaks Spanish.</em><br>
            2. Comidas generales: <em>I hate breakfast.</em><br>
            3. Deportes: <em>He plays football.</em><br>
            4. Nombres propios: <em>She lives in Paris.</em><br>
            5. Sustantivos incontables/plurales genéricos: <em>Money is power. Dogs are loyal.</em></small>
          </div>
        </div>
        <div class="example-block">
          <div class="ex-row"><div class="ex-en">I want to be <u>a</u> pilot. (first mention, one of many)</div><div class="ex-es">Quiero ser piloto.</div></div>
          <div class="ex-row"><div class="ex-en"><u>The</u> pilot greeted us warmly. (specific pilot we know)</div><div class="ex-es">El piloto nos saludó cálidamente.</div></div>
          <div class="ex-row"><div class="ex-en">∅ Pilots often work irregular hours. (pilots in general)</div><div class="ex-es">Los pilotos trabajan horarios irregulares.</div></div>
        </div>
        <div class="tip-callout"><i data-lucide="zap"></i>
          <span><strong>Truco neuroeducativo:</strong> Imagina que hablas con alguien. Si puedes señalarlo con el dedo y ambos lo ven → <strong>the</strong>. Si nadie sabe cuál → <strong>a/an</strong>. Si es una idea general → <strong>sin artículo</strong>.</span>
        </div>`,
      exercises: [
        { type:'choice', q:'I usually read ___ newspaper in the morning.',
          opts:['a','an','the','—'], a:'the',
          exp:'Asumimos que lees TU periódico habitual → the newspaper.' },
        { type:'choice', q:'She plays ___ violin in a professional orchestra.',
          opts:['a','the','an','—'], a:'the',
          exp:'Instrumentos musicales llevan "the": the violin, the guitar.' },
        { type:'choice', q:'My sister loves ___ Italian food. She cooks it every week.',
          opts:['a','the','—','an'], a:'—',
          exp:'Sustantivo incontable genérico (food en general) → zero article.' },
        { type:'choice', q:'___ Mount Everest is ___ highest mountain in the world.',
          opts:['The / the','— / the','The / a','— / a'], a:'— / the',
          exp:'Nombres propios de montañas → sin artículo. Superlativo → the.' },
        { type:'write', q:'Complete: He has been in hospital for ___ week.',
          a:'a', exp:'Período de tiempo singular contable → a week.' },
        { type:'write', q:'Complete: She went to ___ school by bus.',
          a:'', exp:'Zero article con school (institución como función): go to school.' },
        { type:'write', q:'Complete: This is ___ most beautiful city I have ever seen.',
          a:'the', exp:'Superlativo → siempre "the most..."' },
        { type:'order', q:'Ordena:', words:['an','had','I','argument','terrible.'],
          a:'I had a terrible argument.', exp:'Indefinite article + adjective + noun.' },
        { type:'order', q:'Ordena:', words:['piano','She','plays','the','brilliantly.'],
          a:'She plays the piano brilliantly.', exp:'Instrumentos musicales → the piano.' },
        { type:'choice', q:'We went to ___ cinema last night. The film was great.',
          opts:['a','the','an','—'], a:'the',
          exp:'Cinema como lugar específico (el cine, el que conocemos) → the.' },
        { type:'choice', q:'___ life is full of surprises.',
          opts:['A','The','An','—'], a:'—',
          exp:'Concepto abstracto en sentido general → zero article.' },
        { type:'write', q:'Complete: ___ Amazon is ___ longest river in South America.',
          a:'The The', exp:'Ríos → The Amazon. Superlativo → the longest.' }
      ],
      communicativeTask: {
        title: 'Tell me about your city',
        instruction: 'Write 5 sentences about your city using a, an, the and zero article. Example: "I live in ___ Cúcuta. It has ___ university and ___ river called..."',
        output: 'Written paragraph (5-8 sentences).'
      }
    },

    // ── A1 Present Simple: vida real ────────────────────────
    present_simple_extra: {
      id: 'present_simple_extra', level: 'A1', title: 'Present Simple: hábitos reales', icon: 'clock', color: '#2563EB',
      learningGoal: 'Hablar de rutinas, hechos permanentes y opiniones usando el presente simple.',
      canDo: [
        'I can describe my daily routine in detail.',
        'I can use the third person -s correctly every time.',
        'I can form questions and negatives without mistakes.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Present Simple — La "fotografía" de tu vida</h3>
        <p>Usamos el presente simple para hablar de <strong>lo que siempre ocurre</strong>: rutinas, hábitos, opiniones, y hechos científicos. No es "ahora mismo" sino "generalmente".</p>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#2563EB;background:#EFF6FF">
            <strong style="color:#1E3A8A">Estructura</strong>
            <small><b>I / You / We / They:</b> base form → I work. They eat.<br>
            <b>He / She / It:</b> + <b>s / es / ies</b> → He works. She watches. It flies.<br>
            <b>Negativa:</b> don't / doesn't + base → I don't like. She doesn't know.<br>
            <b>Pregunta:</b> Do / Does + subject + base? → Do you like? Does she know?</small>
          </div>
          <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
            <strong style="color:#742A2A">⚠️ La -s del terror</strong>
            <small>El error más común en inglés A1. He/She/It SIEMPRE llevan -s:<br>
            He <b>works</b> ✓ — He <b>work</b> ✗<br>
            She <b>has</b> (no "haves") · He <b>does</b> (no "dos")<br>
            It <b>flies</b> (consonante + y → ies)<br>
            She <b>watches</b> (ch/sh/x/ss → es)</small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Marcadores temporales</strong>
            <small>always · usually · often · sometimes · rarely · never<br>
            every day / week / morning<br>
            on Mondays · at the weekend · in the morning<br>
            Position: before main verb → She <b>always</b> drinks coffee.</small>
          </div>
        </div>
        <div class="tip-callout"><i data-lucide="brain"></i>
          <span><strong>Analogía mental:</strong> El presente simple es como tu <em>perfil de Instagram</em> — no lo que haces ahora mismo, sino lo que describe quién eres y cómo vives normalmente.</span>
        </div>`,
      exercises: [
        { type:'choice', q:'"My dog ___ at 6 am every morning." Which is correct?',
          opts:['wake up','wakes up','waking up','is wake up'], a:'wakes up',
          exp:'He/She/It + -s. Dog es tercera persona → wakes up.' },
        { type:'choice', q:'"She ___ classical music." Choose the correct negative.',
          opts:['don\'t like','doesn\'t likes','doesn\'t like','not likes'], a:'doesn\'t like',
          exp:'Doesn\'t + base form (no extra -s): doesn\'t like.' },
        { type:'write', q:'Form a question: (she / study / every night)?',
          a:'Does she study every night?', exp:'Does + she + base form: Does she study?' },
        { type:'write', q:'Make negative: "He drives to work." →',
          a:'He doesn\'t drive to work.', exp:'He + doesn\'t + base form (no drives).' },
        { type:'order', q:'Ordena:', words:['usually','I','coffee','have','breakfast.','for'],
          a:'I usually have coffee for breakfast.', exp:'Adverbio de frecuencia → antes del verbo principal.' },
        { type:'order', q:'Ordena:', words:['she','Does','English?','speak'],
          a:'Does she speak English?', exp:'Questions: Does + subject + base verb.' },
        { type:'choice', q:'Water ___ at 100°C.',
          opts:['boil','boils','is boiling','boiled'], a:'boils',
          exp:'Hecho científico permanente → present simple. Water (it) → boils.' },
        { type:'write', q:'Complete: The train ___ (leave) at 8:15 every morning.',
          a:'leaves', exp:'Horario fijo = fact → present simple. It → leaves.' },
        { type:'choice', q:'"___ your parents live near you?" — "No, they ___."',
          opts:['Do / don\'t','Does / doesn\'t','Are / aren\'t','Do / doesn\'t'], a:'Do / don\'t',
          exp:'Your parents = they → Do...? / they don\'t.' },
        { type:'write', q:'My sister ___ (not/watch) TV in the evenings. She reads.',
          a:'doesn\'t watch', exp:'Doesn\'t + base form.' },
        { type:'order', q:'Ordena:', words:['never','Mark','meat.','red','eats'],
          a:'Mark never eats red meat.', exp:'Never va antes del verbo principal.' },
        { type:'choice', q:'Which sentence is WRONG?',
          opts:['He cooks dinner every day.','She don\'t like fish.','They work hard.'], a:'She don\'t like fish.',
          exp:'She → doesn\'t like (not don\'t).' }
      ],
      communicativeTask: {
        title: 'My typical weekday',
        instruction: 'Write 8 sentences describing your typical Tuesday. Use: always, usually, never, sometimes. Include at least 3 sentences about someone else (he/she).',
        output: 'Written paragraph or voice note.'
      }
    },

    // ── A1 Present Continuous ───────────────────────────────
    present_continuous_extra: {
      id: 'present_continuous_extra', level: 'A1', title: 'Present Continuous: ahora mismo', icon: 'activity', color: '#059669',
      learningGoal: 'Describir acciones en progreso ahora y planes futuros inmediatos.',
      canDo: [
        'I can describe what is happening right now.',
        'I can contrast present simple (habits) and present continuous (now).',
        'I can use present continuous for future arrangements.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Present Continuous — La "transmisión en vivo"</h3>
        <p>Si el presente simple es tu perfil de Instagram, el presente continuo es tu <strong>story en vivo</strong>: lo que está pasando ahora mismo o está en proceso.</p>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Estructura</strong>
            <small>Subject + <b>am/is/are</b> + verb<b>-ing</b><br>
            I <b>am working</b>. She <b>is cooking</b>. They <b>are playing</b>.<br>
            Neg: She <b>isn't sleeping</b>. We <b>aren't waiting</b>.<br>
            Q: <b>Is</b> she sleeping? <b>Are</b> they coming?</small>
          </div>
          <div class="t-box" style="border-color:#D97706;background:#FFFBEB">
            <strong style="color:#92400E">Spelling -ing</strong>
            <small><b>run → runn</b>ing (CVC: doble consonante)<br>
            <b>make → mak</b>ing (e muda: se elimina la e)<br>
            <b>play → play</b>ing (vocal antes de y: sin cambio)<br>
            <b>lie → ly</b>ing (ie → y + ing)</small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">⚠️ Verbos que NO usan -ing</strong>
            <small>Verbos de estado (stative verbs): <br>
            know · like · love · hate · want · need · believe · understand · remember<br>
            ✗ I am knowing her. ✓ I know her.</small>
          </div>
        </div>
        <div class="tip-callout"><i data-lucide="eye"></i>
          <span><strong>Test mental:</strong> ¿Puedes "ver" la acción ahora mismo, en este segundo? → Present Continuous. ¿Es una rutina o hábito? → Present Simple.</span>
        </div>`,
      exercises: [
        { type:'choice', q:'"Look! She ___ in the pool!" What\'s happening right now?',
          opts:['swims','is swimming','swim','was swimming'], a:'is swimming',
          exp:'Look! = señal de ahora mismo → is swimming.' },
        { type:'write', q:'Make it continuous: "He runs." → "He ___ right now."',
          a:'is running', exp:'He is running: CVC → doubling: run → running.' },
        { type:'choice', q:'"I ___ what you mean." Choose the stative verb form.',
          opts:['am understanding','understand','is understanding','understands'], a:'understand',
          exp:'Understand es estativo → no -ing form: I understand.' },
        { type:'order', q:'Ordena:', words:['the','Why','crying?','baby','is'],
          a:'Why is the baby crying?', exp:'Question: Why + is + subject + -ing?' },
        { type:'choice', q:'"They ___ dinner at 7 tonight." (plan already made)',
          opts:['have','are having','will have','had'], a:'are having',
          exp:'Present continuous para plan futuro ya acordado.' },
        { type:'write', q:'Make negative: "She is listening to music." →',
          a:'She isn\'t listening to music.', exp:'isn\'t + verb-ing.' },
        { type:'choice', q:'Which sentence is about a habit (NOT happening now)?',
          opts:['She is cooking pasta.','He is sleeping.','They play tennis on Sundays.'], a:'They play tennis on Sundays.',
          exp:'On Sundays = routine → present simple.' },
        { type:'write', q:'Complete: I can\'t talk now. I ___ (have) a meeting.',
          a:'am having', exp:'Now → continuous. Have (in meeting context) = active verb.' },
        { type:'order', q:'Ordena:', words:['are','tonight.','We','meeting','friends'],
          a:'We are meeting friends tonight.', exp:'Future plan: are + -ing + time expression.' },
        { type:'choice', q:'"Please be quiet! The children ___." ',
          opts:['sleep','are sleeping','sleeping','sleeps'], a:'are sleeping',
          exp:'Be quiet → they\'re asleep right now → are sleeping.' },
        { type:'write', q:'Spelling: sit → sit___ (add -ing)',
          a:'sitting', exp:'CVC pattern: sit → sitting (double the t).' },
        { type:'choice', q:'"She ___ he is lying." (mental process)',
          opts:['is thinking','thinks','thought','think'], a:'thinks',
          exp:'Think (mental state/opinion) → stative → present simple.' }
      ],
      communicativeTask: {
        title: 'What is everyone doing?',
        instruction: 'Look around you right now or imagine your family at 8 pm. Write 6 sentences: 3 with present continuous (now) and 3 with present simple (habits).',
        output: 'Written paragraph.'
      }
    }
  };

  // ============================================================
  // A2 — EXPANSIONES
  // ============================================================

  const expansionsA2 = {

    // ── A2 Past Simple: narrativa real ──────────────────────
    past_simple_extra: {
      id: 'past_simple_extra', level: 'A2', title: 'Past Simple: cuenta tu historia', icon: 'book-open', color: '#DC2626',
      learningGoal: 'Narrar eventos pasados con claridad, incluyendo verbos irregulares clave.',
      canDo: [
        'I can tell a story using past simple.',
        'I can use at least 20 common irregular verbs correctly.',
        'I can use time expressions to sequence events.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Past Simple — Tu máquina del tiempo</h3>
        <p>El pasado simple narra acciones <strong>terminadas</strong> en el pasado. Tiene un momento específico o implícito. Es el tiempo narrativo por excelencia en inglés.</p>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#DC2626;background:#FFF5F5">
            <strong style="color:#7F1D1D">Verbos regulares: +ed</strong>
            <small>work → work<b>ed</b> · play → play<b>ed</b><br>
            live → liv<b>ed</b> (e muda: solo +d)<br>
            study → studi<b>ed</b> (consonante + y → ied)<br>
            stop → stopp<b>ed</b> (CVC: doble consonante)</small>
          </div>
          <div class="t-box" style="border-color:#D97706;background:#FFFBEB">
            <strong style="color:#92400E">Irregulares esenciales</strong>
            <small>go → <b>went</b> · come → <b>came</b> · see → <b>saw</b><br>
            take → <b>took</b> · get → <b>got</b> · give → <b>gave</b><br>
            buy → <b>bought</b> · think → <b>thought</b> · bring → <b>brought</b><br>
            say → <b>said</b> · make → <b>made</b> · know → <b>knew</b><br>
            tell → <b>told</b> · find → <b>found</b> · lose → <b>lost</b></small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Negativas y preguntas</strong>
            <small><b>Neg:</b> Subject + <b>didn't</b> + base form<br>
            She didn't come. (not "didn't came")<br>
            <b>Q:</b> <b>Did</b> + subject + base form?<br>
            Did you see her? (not "Did you saw?")</small>
          </div>
        </div>
        <div class="example-block">
          <div class="ex-row"><div class="ex-en">Yesterday, I <b>woke</b> up late, <b>had</b> a quick breakfast and <b>ran</b> to the bus stop.</div><div class="ex-es">Ayer me desperté tarde, tomé un desayuno rápido y corrí a la parada de bus.</div></div>
          <div class="ex-row"><div class="ex-en">I <b>didn't catch</b> the bus, so I <b>called</b> a taxi.</div><div class="ex-es">No cogí el bus, así que llamé un taxi.</div></div>
        </div>
        <div class="tip-callout"><i data-lucide="zap"></i>
          <span><strong>Regla de oro:</strong> En negativas y preguntas, el auxiliar <b>did/didn't</b> lleva TODA la carga del pasado. El verbo principal siempre vuelve a su forma base. ✗ "didn't went" ✓ "didn't go".</span>
        </div>`,
      exercises: [
        { type:'choice', q:'Last week she ___ her driving test and passed.',
          opts:['takes','took','has taken','take'], a:'took',
          exp:'Last week = completed past → past simple. Take → took (irregular).' },
        { type:'write', q:'Make negative: "They won the championship." →',
          a:'They didn\'t win the championship.', exp:'didn\'t + base form: didn\'t win.' },
        { type:'write', q:'Form a question: "(you / see / the match)?" →',
          a:'Did you see the match?', exp:'Did + subject + base form.' },
        { type:'order', q:'Ordena la historia:', words:['left','She','bag','her','home.','at'],
          a:'She left her bag at home.', exp:'Leave → left (irregular).' },
        { type:'choice', q:'"I ___ to bed very late because I ___ a great film."',
          opts:['went / was watching','go / watch','went / watched','goes / watches'], a:'went / watched',
          exp:'Two completed past actions → both past simple.' },
        { type:'write', q:'Give past form: "buy" → She ___ a new laptop yesterday.',
          a:'bought', exp:'Buy → bought (irregular verb).' },
        { type:'choice', q:'Which verb is IRREGULAR in the past?',
          opts:['walk','talk','think','work'], a:'think',
          exp:'Think → thought (irregular). Walk/talk/work are regular (-ed).' },
        { type:'write', q:'Complete: When I ___ (be) a child, I ___ (love) swimming.',
          a:'was loved', exp:'Be → was (I). Love → loved (regular). Note: two separate verbs.' },
        { type:'order', q:'Ordena:', words:['told','she','the','me','truth.'],
          a:'She told me the truth.', exp:'Tell → told (irregular). Indirect object before direct.' },
        { type:'choice', q:'"___ you enjoy the concert last night?"',
          opts:['Did','Do','Were','Have'], a:'Did',
          exp:'Past simple question: Did + subject + base form.' },
        { type:'write', q:'Write a negative: "He understood the question." →',
          a:'He didn\'t understand the question.', exp:'didn\'t + base form: didn\'t understand.' },
        { type:'choice', q:'She ___ her keys, so she ___ through the window.',
          opts:['lost / climbed','lose / climb','lost / was climbing','loses / climbs'], a:'lost / climbed',
          exp:'Sequence of past events → both past simple.' }
      ],
      communicativeTask: {
        title: 'Tell me about a memorable day',
        instruction: 'Write 8-10 sentences about a memorable day in your life. Use at least 5 irregular verbs. Start with: "Last [year/month], I..."',
        output: 'Written narrative or 2-minute audio recording.'
      }
    },

    // ── A2 Comparatives & Superlatives ──────────────────────
    comparatives_extra: {
      id: 'comparatives_extra', level: 'A2', title: 'Comparativos y superlativos: compara tu mundo', icon: 'bar-chart-2', color: '#7C3AED',
      learningGoal: 'Comparar personas, lugares y objetos con precisión usando todas las formas comparativas.',
      canDo: [
        'I can compare two things using -er/more and than.',
        'I can use superlatives -est/most correctly.',
        'I can use as...as and not as...as for equality/inequality.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Comparativos y Superlativos</h3>
        <p>Comparar en inglés tiene una lógica clara: el número de sílabas determina si usas <strong>-er/-est</strong> o <strong>more/most</strong>.</p>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">1 sílaba → -er / -est</strong>
            <small>tall → tall<b>er</b> / the tall<b>est</b><br>
            big → bigg<b>er</b> / the bigg<b>est</b> (CVC)<br>
            nice → nic<b>er</b> / the nic<b>est</b> (e muda)</small>
          </div>
          <div class="t-box" style="border-color:#2563EB;background:#EFF6FF">
            <strong style="color:#1E3A8A">3+ sílabas → more / most</strong>
            <small>beautiful → <b>more</b> beautiful / <b>the most</b> beautiful<br>
            expensive → <b>more</b> expensive / <b>the most</b> expensive<br>
            interesting → <b>more</b> interesting / <b>the most</b> interesting</small>
          </div>
          <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
            <strong style="color:#742A2A">2 sílabas: depende</strong>
            <small>Si termina en <b>-y</b>: happy → happi<b>er</b> / happi<b>est</b><br>
            Otros: clever → <b>more</b> clever O clever<b>er</b> (ambos válidos)<br>
            tired → <b>more</b> tired (adjetivos con -ed: siempre more)</small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Irregulares</strong>
            <small>good → <b>better</b> / <b>the best</b><br>
            bad → <b>worse</b> / <b>the worst</b><br>
            far → <b>further/farther</b> / <b>the furthest/farthest</b><br>
            little → <b>less</b> / <b>the least</b></small>
          </div>
        </div>
        <div class="tip-callout"><i data-lucide="brain"></i>
          <span><strong>As...as:</strong> My sister is <em>as tall as</em> me. (igual) · He isn't <em>as fast as</em> his brother. (no tan rápido como) · Esta estructura NO cambia el adjetivo.</span>
        </div>`,
      exercises: [
        { type:'choice', q:'This exam was ___ I expected.',
          opts:['more harder than','harder than','more hard than','hardest than'], a:'harder than',
          exp:'1 sílaba (hard): harder + than. No "more" con -er.' },
        { type:'write', q:'Complete: The Sahara is ___ (hot) desert in the world.',
          a:'the hottest', exp:'1 sílaba + CVC: hot → hottest. Superlative → the hottest.' },
        { type:'choice', q:'My new phone is ___ my old one.',
          opts:['more expensive that','expensiver than','more expensive than','the most expensive'], a:'more expensive than',
          exp:'3 sílabas: more expensive + than.' },
        { type:'write', q:'Complete using as...as: She is ___ her twin sister. (tall)',
          a:'as tall as', exp:'Equality: as + adjective + as → as tall as.' },
        { type:'order', q:'Ordena:', words:['best','the','This','I\'ve','film','ever','is','seen.'],
          a:'This is the best film I\'ve ever seen.', exp:'Superlative: the best. + present perfect for experience.' },
        { type:'choice', q:'The weather today is ___ yesterday.',
          opts:['worse than','more bad than','worst than','badder than'], a:'worse than',
          exp:'Bad → worse (irregular comparative). Never "more bad".' },
        { type:'write', q:'Complete: Learning Spanish is ___ (easy) than learning Chinese.',
          a:'easier', exp:'easy → easier (y → ier). Comparative: easier than.' },
        { type:'choice', q:'"She\'s ___ experienced candidate." Which is correct?',
          opts:['the most','the more','the most of','most'], a:'the most',
          exp:'Superlative with 3+ syllables: the most experienced.' },
        { type:'choice', q:'"This coffee is not ___ the one I had in Rome."',
          opts:['as good as','so good than','better as','as better as'], a:'as good as',
          exp:'Negative equality: not as good as.' },
        { type:'write', q:'Make a comparison: Your bag is heavier. My bag is lighter. →\n"My bag is ___ yours."',
          a:'lighter than', exp:'Comparative + than: lighter than yours.' },
        { type:'order', q:'Ordena:', words:['is','older','brother','My','me.','than'],
          a:'My brother is older than me.', exp:'Comparative structure: subject + be + adj-er + than.' },
        { type:'choice', q:'Which sentence is CORRECT?',
          opts:['She is more tall than him.','She is taller than him.','She is tallest than him.'], a:'She is taller than him.',
          exp:'1 sílaba: taller (not more tall). Comparative, not superlative.' }
      ],
      communicativeTask: {
        title: 'My city vs another city',
        instruction: 'Compare your city with another city you know or have heard about. Write 6 comparisons using: bigger, more..., as...as, the best, the worst, etc.',
        output: 'Written paragraph or infographic-style list.'
      }
    }
  };

  // ============================================================
  // B1 — EXPANSIONES
  // ============================================================

  const expansionsB1 = {

    // ── B1 Passive Voice ────────────────────────────────────
    passive_extra: {
      id: 'passive_extra', level: 'B1', title: 'Passive Voice: enfoca lo importante', icon: 'refresh-cw', color: '#0891B2',
      learningGoal: 'Usar la voz pasiva para enfocar el objeto o cuando el agente es desconocido.',
      canDo: [
        'I can transform active sentences into passive across 4 tenses.',
        'I can explain WHY passive is used (focus, formality, unknown agent).',
        'I can use "by" to include the agent when relevant.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Voz Pasiva — Cambia el foco</h3>
        <p>La voz pasiva no es difícil — es una herramienta de enfoque. En lugar de decir quién hace algo, dices qué <strong>le pasa</strong> a algo o alguien.</p>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#0891B2;background:#ECFEFF">
            <strong style="color:#164E63">Fórmula universal</strong>
            <small>BE (en el tiempo correcto) + <b>past participle</b><br>
            Present: is/are + pp → It <b>is made</b> in Japan.<br>
            Past: was/were + pp → It <b>was built</b> in 1900.<br>
            Present Perfect: has/have been + pp → It <b>has been repaired</b>.<br>
            Future: will be + pp → It <b>will be delivered</b> tomorrow.</small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">¿Cuándo usar pasiva?</strong>
            <small>1. El agente es desconocido: <em>My car was stolen.</em><br>
            2. El agente es obvio/irrelevante: <em>He was arrested.</em><br>
            3. Contexto formal/científico: <em>The samples were analysed.</em><br>
            4. Para enfocar el objeto: <em>The Mona Lisa was painted by Da Vinci.</em></small>
          </div>
        </div>
        <div class="example-block">
          <div class="ex-row"><div class="ex-en">Active: Shakespeare <b>wrote</b> Hamlet.</div><div class="ex-es">Activa: Shakespeare escribió Hamlet.</div></div>
          <div class="ex-row"><div class="ex-en">Passive: Hamlet <b>was written</b> by Shakespeare.</div><div class="ex-es">Pasiva: Hamlet fue escrito por Shakespeare.</div></div>
          <div class="ex-row"><div class="ex-en">Active: They have cancelled the concert.</div><div class="ex-es">Activa: Han cancelado el concierto.</div></div>
          <div class="ex-row"><div class="ex-en">Passive: The concert <b>has been cancelled</b>.</div><div class="ex-es">Pasiva: El concierto ha sido cancelado.</div></div>
        </div>
        <div class="tip-callout"><i data-lucide="zap"></i>
          <span><strong>Test de pasiva:</strong> ¿El sujeto RECIBE la acción? → Pasiva. ¿El sujeto HACE la acción? → Activa.</span>
        </div>`,
      exercises: [
        { type:'write', q:'Change to passive: "They make Tesla cars in the USA." →\n"Tesla cars ___ in the USA."',
          a:'are made', exp:'Present simple passive: are + made.' },
        { type:'write', q:'Change to passive: "They built this bridge in 1902." →\n"This bridge ___ in 1902."',
          a:'was built', exp:'Past simple passive: was + built (irregular pp).' },
        { type:'choice', q:'"The results ___ before Friday." (future passive)',
          opts:['will announce','will be announced','are announced','are going to announce'], a:'will be announced',
          exp:'Future passive: will be + past participle.' },
        { type:'choice', q:'"My phone ___. I can\'t find it anywhere." (past, unknown agent)',
          opts:['has stolen','was stolen','stole','is stolen'], a:'was stolen',
          exp:'Unknown thief + completed past → was stolen.' },
        { type:'write', q:'Present perfect passive: "Someone has repaired the road." →\n"The road ___."',
          a:'has been repaired', exp:'Present perfect passive: has been + past participle.' },
        { type:'order', q:'Ordena:', words:['by','was','painted','The','Picasso.','mural'],
          a:'The mural was painted by Picasso.', exp:'Passive + by + agent: was painted by Picasso.' },
        { type:'choice', q:'Why is passive used here? "The President was elected last November."',
          opts:['Because we don\'t know who voted','To focus on the President, not the voters','Because it\'s wrong grammar','To make it informal'], a:'To focus on the President, not the voters',
          exp:'Focus shift: passive puts the President as topic, not millions of voters.' },
        { type:'write', q:'Make passive: "The company will launch a new product." →\n"A new product ___."',
          a:'will be launched', exp:'Future passive: will be + launched.' },
        { type:'choice', q:'"English ___ all over the world."',
          opts:['speaks','is spoken','was spoken','spoke'], a:'is spoken',
          exp:'Present simple passive for general fact: is spoken.' },
        { type:'order', q:'Ordena:', words:['the','Three','workers','injured','were','in','accident.'],
          a:'Three workers were injured in the accident.', exp:'Past passive: were + injured.' },
        { type:'write', q:'Complete: This novel ___ (translate) into 40 languages.',
          a:'has been translated', exp:'Present perfect passive: has been translated.' },
        { type:'choice', q:'"The homework ___ by all students yesterday."',
          opts:['finished','was finished','has been finished','is finished'], a:'was finished',
          exp:'Yesterday → past simple passive: was finished.' }
      ],
      communicativeTask: {
        title: 'Things made in your country',
        instruction: 'Write 6 passive sentences about things related to your country or city. Use different tenses. Example: "Coffee is grown in Colombia." / "The cathedral was built in..."',
        output: 'Written paragraph or research presentation.'
      }
    },

    // ── B1 Reported Speech ──────────────────────────────────
    reported_speech_extra: {
      id: 'reported_speech_extra', level: 'B1', title: 'Reported Speech: lo que dijeron', icon: 'message-circle', color: '#0D9488',
      learningGoal: 'Reportar lo que alguien dijo con backshift correcto y pronombres ajustados.',
      canDo: [
        'I can report statements, questions and commands.',
        'I can apply tense backshift correctly.',
        'I can change pronouns and time expressions in reported speech.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Reported Speech — Cuenta lo que dijeron</h3>
        <p>Cuando contamos lo que alguien dijo, el tiempo verbal <strong>retrocede un paso</strong> (backshift). Es como dar un paso atrás en el tiempo.</p>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#0D9488;background:#F0FDFA">
            <strong style="color:#134E4A">Backshift: los cambios</strong>
            <small>Present simple → <b>Past simple</b><br>
            "I work here." → She said she <b>worked</b> there.<br>
            Present cont. → <b>Past continuous</b><br>
            "I'm studying." → He said he <b>was studying</b>.<br>
            Past simple → <b>Past perfect</b><br>
            "I went." → She said she <b>had gone</b>.<br>
            Will → <b>Would</b> · Can → <b>Could</b> · May → <b>Might</b></small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Cambios de referencia</strong>
            <small>I → he/she · my → his/her · we → they<br>
            here → there · now → then<br>
            today → that day · yesterday → the day before<br>
            tomorrow → the next day · this → that</small>
          </div>
          <div class="t-box" style="border-color:#E53E3E;background:#FFF5F5">
            <strong style="color:#742A2A">Preguntas y órdenes</strong>
            <small><b>Questions:</b> She asked (me) <b>if/whether</b> + statement order<br>
            "Are you ok?" → She asked <b>if I was ok</b>.<br>
            <b>Orders:</b> told + object + <b>to + infinitive</b><br>
            "Close the door." → He told me <b>to close</b> the door.</small>
          </div>
        </div>
        <div class="tip-callout"><i data-lucide="brain"></i>
          <span><strong>Analogía:</strong> Imagina que el reported speech es un periódico del día siguiente. "I am leaving" (directo) se convierte en "She said she <em>was leaving</em>" (una versión del pasado).</span>
        </div>`,
      exercises: [
        { type:'write', q:'"I love chocolate." → She said (that) she ___ chocolate.',
          a:'loved', exp:'Present simple → past simple in reported speech.' },
        { type:'write', q:'"We are watching TV." → They said they ___ TV.',
          a:'were watching', exp:'Present continuous → past continuous.' },
        { type:'choice', q:'"I will call you tomorrow." → He said he ___ call me the next day.',
          opts:['will','would','could','should'], a:'would',
          exp:'Will → would in reported speech.' },
        { type:'order', q:'Report this: "I can swim 2km." He told me he ___ 2km.',
          words:['swim','could','he','told','me'], a:'He told me he could swim.',
          exp:'Can → could. Say → told + object.' },
        { type:'write', q:'"Did you finish the report?" → She asked me ___ the report.',
          a:'if I had finished', exp:'Past simple → past perfect. Yes/No question → if + statement.' },
        { type:'choice', q:'"Come here immediately!" → He told her ___ immediately.',
          opts:['come','to come','coming','came'], a:'to come',
          exp:'Commands: tell + object + to + infinitive.' },
        { type:'write', q:'"I went to London last year." → He said he ___ to London the year before.',
          a:'had gone', exp:'Past simple → past perfect in reported speech.' },
        { type:'choice', q:'"Where do you live?" → She asked me where I ___.',
          opts:['live','lived','do live','was living'], a:'lived',
          exp:'Present simple → past simple. Wh-question: where + statement order.' },
        { type:'order', q:'Ordena el reported speech:', words:['was','that','He','said','tired.','he'],
          a:'He said that he was tired.', exp:'Said + (that) + subject + past verb.' },
        { type:'write', q:'"Don\'t make noise!" → She told us ___ noise.',
          a:'not to make', exp:'Negative command: told + object + not to + infinitive.' },
        { type:'choice', q:'"I may be late." → She said she ___ be late.',
          opts:['may','might','could','would'], a:'might',
          exp:'May → might in reported speech.' },
        { type:'write', q:'"Are you coming to the party?" → He asked her ___ to the party.',
          a:'if she was coming', exp:'Present continuous question → if + was coming.' }
      ],
      communicativeTask: {
        title: 'The gossip game',
        instruction: 'Choose 3 things a famous person (or your favourite character) might have said recently. Report them using: "He/She said that...", "He/She told an interviewer that...", "He/She announced that..."',
        output: 'Written paragraph (gossip column style).'
      }
    }
  };

  // ============================================================
  // B2 — EXPANSIONES
  // ============================================================

  const expansionsB2 = {

    // ── B2 Advanced Conditionals ────────────────────────────
    conditionals_advanced: {
      id: 'conditionals_advanced', level: 'B2', title: 'Condicionales: domina todos los tipos', icon: 'git-branch', color: '#7C3AED',
      learningGoal: 'Usar los 4 condicionales + mixed conditional con fluidez y precisión.',
      canDo: [
        'I can use 0, 1st, 2nd and 3rd conditionals confidently.',
        'I can construct mixed conditionals linking past and present.',
        'I can use wish, if only and I\'d rather for hypothetical situations.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Los Condicionales — Árbol de decisiones del idioma</h3>
        <p>Los condicionales expresan relaciones de causa y efecto. La clave es entender <strong>qué tan real o probable</strong> es la situación.</p>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#2563EB;background:#EFF6FF">
            <strong style="color:#1E3A8A">0 — Siempre verdadero</strong>
            <small>If + present simple, present simple<br>
            <em>If you heat water to 100°C, it boils.</em><br>
            Usa: leyes naturales, hechos, instrucciones</small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">1st — Probable futuro</strong>
            <small>If + present simple, will + base<br>
            <em>If it rains tomorrow, I'll stay home.</em><br>
            Usa: predicciones reales, advertencias, promesas</small>
          </div>
          <div class="t-box" style="border-color:#D97706;background:#FFFBEB">
            <strong style="color:#92400E">2nd — Hipotético presente</strong>
            <small>If + past simple, would + base<br>
            <em>If I won the lottery, I would travel the world.</em><br>
            NB: If I <b>were</b> you... (were, not was, en lenguaje formal)</small>
          </div>
          <div class="t-box" style="border-color:#DC2626;background:#FFF5F5">
            <strong style="color:#7F1D1D">3rd — Pasado irreal</strong>
            <small>If + past perfect, would have + pp<br>
            <em>If I had studied harder, I would have passed.</em><br>
            Usa: arrepentimientos, situaciones pasadas imaginarias</small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Mixed — Cruce temporal</strong>
            <small>Pasado irreal → consecuencia presente:<br>
            If + past perfect, would + base<br>
            <em>If I had studied medicine, I would be a doctor now.</em></small>
          </div>
        </div>
        <div class="tip-callout"><i data-lucide="brain"></i>
          <span><strong>Regla mental:</strong> El número del condicional indica CUÁN LEJOS estás de la realidad. 0 = 100% real. 1st = bastante probable. 2nd = imaginario presente. 3rd = pasado ya cerrado.</span>
        </div>`,
      exercises: [
        { type:'choice', q:'"If I ___ you, I would apologise immediately." (advice)',
          opts:['am','was','were','had been'], a:'were',
          exp:'2nd conditional: If I were you (were = subjunctive for advice).' },
        { type:'write', q:'3rd conditional: "I didn\'t prepare well. I failed the exam." →\n"If I ___, I ___ the exam."',
          a:'had prepared would have passed', exp:'If + past perfect, would have + past participle.' },
        { type:'choice', q:'"If she ___ harder last year, she ___ the promotion now."',
          opts:['worked / would get','had worked / would have got','had worked / would get','worked / got'], a:'had worked / would get',
          exp:'Mixed conditional: past perfect condition → present result.' },
        { type:'choice', q:'Which expresses a REAL future possibility?',
          opts:['If I had more time, I would exercise more.','If I have time tomorrow, I\'ll call you.','If I were rich, I would buy a yacht.'], a:'If I have time tomorrow, I\'ll call you.',
          exp:'1st conditional = real, likely future situation.' },
        { type:'write', q:'Complete 0 conditional: If you ___ (freeze) water, it ___ (become) ice.',
          a:'freeze becomes', exp:'Zero conditional: both verbs present simple.' },
        { type:'order', q:'Ordena:', words:['would','not','I','so','much','miss','If','home,','be','far.','weren\'t'],
          a:'If I weren\'t so far from home, I would not miss it so much.', exp:'2nd conditional: weren\'t (negative).' },
        { type:'choice', q:'"I wish I ___ speak Japanese fluently." (present desire)',
          opts:['can','could','would','will'], a:'could',
          exp:'Wish + past simple for present/future desires: wish I could.' },
        { type:'write', q:'Express regret: "I didn\'t save her number." → I wish I ___.',
          a:'had saved her number', exp:'Wish + past perfect for past regrets.' },
        { type:'choice', q:'"She would have got the job if she ___ more experienced."',
          opts:['is','was','were','had been'], a:'had been',
          exp:'3rd conditional: if-clause → past perfect (had been).' },
        { type:'write', q:'Mixed conditional: "He didn\'t study medicine." →\n"If he ___, he ___ a surgeon now."',
          a:'had studied would be', exp:'Past condition (had studied) → present result (would be).' },
        { type:'choice', q:'"___ you had been there, you would have loved it."',
          opts:['If only','Had','Unless','Although'], a:'Had',
          exp:'Inverted 3rd conditional: Had + subject + pp (formal/literary).' },
        { type:'write', q:'I\'d rather you ___ (not/smoke) in the car.',
          a:'didn\'t smoke', exp:'I\'d rather + subject + past simple for preferences.' }
      ],
      communicativeTask: {
        title: 'What would you change?',
        instruction: 'Write 5 conditional sentences about your own life: 2 using the 2nd conditional (current hypotheticals), 2 using the 3rd conditional (past regrets/alternatives), and 1 mixed conditional.',
        output: 'Reflective paragraph or discussion post.'
      }
    },

    // ── B2 Discourse Markers ────────────────────────────────
    discourse_markers_extra: {
      id: 'discourse_markers_extra', level: 'B2', title: 'Discourse Markers: conecta con fluidez', icon: 'link', color: '#0891B2',
      learningGoal: 'Usar marcadores del discurso para crear textos cohesivos y argumentos convincentes.',
      canDo: [
        'I can use addition, contrast, cause and concession markers accurately.',
        'I can recognise the tone each marker creates (formal vs informal).',
        'I can write a structured argument using discourse markers.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Discourse Markers — El pegamento del idioma</h3>
        <p>Los marcadores del discurso son palabras o frases que conectan ideas, señalan cambios de dirección y dan coherencia a un texto. Separan a un escritor/hablante B2 de uno B1.</p>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Adición</strong>
            <small>Furthermore · Moreover · In addition · What is more · Besides<br>
            <em>The food was excellent. <b>Furthermore</b>, the service was impeccable.</em></small>
          </div>
          <div class="t-box" style="border-color:#DC2626;background:#FFF5F5">
            <strong style="color:#7F1D1D">Contraste</strong>
            <small>However · Nevertheless · On the other hand · In contrast · Whereas<br>
            <em>The plan seemed perfect. <b>However</b>, it had one fatal flaw.</em></small>
          </div>
          <div class="t-box" style="border-color:#D97706;background:#FFFBEB">
            <strong style="color:#92400E">Causa y efecto</strong>
            <small>Therefore · Consequently · As a result · Hence · Thus<br>
            <em>Sales dropped by 20%. <b>Consequently</b>, the CEO resigned.</em></small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Concesión</strong>
            <small>Although · Even though · Despite · In spite of · Admittedly<br>
            <em><b>Despite</b> the rain, the festival was a success.</em><br>
            NB: Despite/In spite of + noun/gerund (not clause)</small>
          </div>
        </div>
        <div class="tip-callout"><i data-lucide="brain"></i>
          <span><strong>Selector mental:</strong> Are you adding more of the same? → Furthermore. Changing direction? → However. Showing a surprise result? → Nevertheless. Explaining why? → Therefore.</span>
        </div>`,
      exercises: [
        { type:'choice', q:'"The economy is growing. ___, unemployment remains high."',
          opts:['Therefore','Furthermore','Nevertheless','Besides'], a:'Nevertheless',
          exp:'Surprising contrast (growing economy but high unemployment) → Nevertheless.' },
        { type:'write', q:'Join with "despite": "It was raining. We had a great time." →\n"___ the rain, ___."',
          a:'Despite the rain, we had a great time.', exp:'Despite + noun/gerund (not clause).' },
        { type:'choice', q:'"She trained for months. ___, she won the gold medal."',
          opts:['However','As a result','Despite','Whereas'], a:'As a result',
          exp:'Cause (training) → effect (winning) → As a result.' },
        { type:'write', q:'Choose correctly: "Although/Despite ___ being tired, she finished the race."',
          a:'Despite', exp:'Despite + gerund (being). Although + clause (she was tired).' },
        { type:'order', q:'Ordena:', words:['the','Furthermore,','proposal','our','strengthens','data','argument.'],
          a:'Furthermore, the data strengthens our argument.', exp:'Furthermore: adds supporting point.' },
        { type:'choice', q:'"City life is exciting. ___, village life is peaceful."',
          opts:['Therefore','On the other hand','Furthermore','As a result'], a:'On the other hand',
          exp:'Two contrasting viewpoints → On the other hand.' },
        { type:'write', q:'Complete: The product was overpriced. ___, consumers stopped buying it.',
          a:'Consequently', exp:'Cause → effect: Consequently (formal).' },
        { type:'choice', q:'"___ his lack of experience, he handled the crisis brilliantly."',
          opts:['Although','Despite','Even though','Whereas'], a:'Despite',
          exp:'Despite + noun phrase (lack of experience).' },
        { type:'write', q:'Add a formal marker: "The research is incomplete. ___, the conclusions are premature."',
          a:'Therefore', exp:'Logic conclusion: Therefore (consequently).' },
        { type:'choice', q:'"She works long hours; ___, she earns very little."',
          opts:['moreover','as a result','however','therefore'], a:'however',
          exp:'Contradiction/contrast: works hard BUT earns little → however.' },
        { type:'order', q:'Ordena:', words:['of','spite','finish','was','In','late,','she','able','in','to','time.'],
          a:'In spite of being late, she was able to finish in time.', exp:'In spite of + gerund.' },
        { type:'choice', q:'Which is WRONG? "___his hard work, he failed the exam."',
          opts:['Despite','In spite of','Although','Notwithstanding'], a:'Although',
          exp:'Although needs a full clause: Although he worked hard... (not + noun).' }
      ],
      communicativeTask: {
        title: 'Write a short opinion essay',
        instruction: 'Choose a topic (social media, remote work, or climate change). Write 3 paragraphs (150-200 words). Use at least 6 different discourse markers from today\'s lesson.',
        output: 'Essay — to be self-evaluated against a checklist.'
      }
    }
  };

  // ============================================================
  // C1 — EXPANSIONES
  // ============================================================

  const expansionsC1 = {

    // ── C1 Inversion & Emphasis ─────────────────────────────
    inversion_emphasis: {
      id: 'inversion_emphasis', level: 'C1', title: 'Inversion & Emphasis: habla como un nativo', icon: 'trending-up', color: '#B45309',
      learningGoal: 'Usar inversión con adverbiales negativos y estructuras enfáticas para lograr impacto retórico.',
      canDo: [
        'I can invert subject/auxiliary after negative adverbials.',
        'I can use cleft sentences for emphasis.',
        'I can identify inversion in formal writing and speech.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Inversión y Énfasis — El nivel C1</h3>
        <p>La inversión es una característica del inglés avanzado: mover el auxiliar delante del sujeto para crear <strong>énfasis dramático o formal</strong>. Común en discursos, artículos académicos y literatura.</p>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#B45309;background:#FFFBEB">
            <strong style="color:#78350F">Adverbiales negativos → inversión</strong>
            <small>Never/Rarely/Seldom/Hardly/Scarcely/Barely + aux + subject + verb<br>
            <b>Never</b> had I seen such courage.<br>
            <b>Rarely</b> does she complain.<br>
            <b>Hardly</b> had we started when it rained.</small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">No sooner / Not only</strong>
            <small><b>No sooner</b> had he arrived <b>than</b> the trouble started.<br>
            <b>Not only</b> was she talented, <b>but</b> she was also humble.<br>
            <b>Not until</b> I read the report <b>did</b> I understand.</small>
          </div>
          <div class="t-box" style="border-color:#0891B2;background:#ECFEFF">
            <strong style="color:#164E63">Cleft sentences</strong>
            <small><b>It + be + emphasised element + that/who</b><br>
            <em>It was <b>her voice</b> that won the audience over.</em><br>
            <em>It was <b>in Paris</b> that they first met.</em><br>
            <b>What-clauses:</b> <em>What surprised me was his calmness.</em></small>
          </div>
        </div>
        <div class="tip-callout"><i data-lucide="mic"></i>
          <span><strong>Para el examen C1:</strong> Usa inversión en el primer párrafo de un ensayo o al inicio de una conclusión para impresionar al examiner. "Rarely has a generation faced such complex challenges."</span>
        </div>`,
      exercises: [
        { type:'write', q:'Rewrite with inversion: "I have never met such a generous person." →\n"Never ___."',
          a:'Never have I met such a generous person.', exp:'Never + have + I + past participle.' },
        { type:'choice', q:'"___ had she closed the door when the phone rang."',
          opts:['Hardly','Barely','No sooner','Rarely'], a:'Hardly',
          exp:'Hardly had + subject + pp (Barely also correct; No sooner needs "than").' },
        { type:'write', q:'Rewrite using "Not only": "She speaks French. She also speaks Mandarin." →',
          a:'Not only does she speak French but she also speaks Mandarin.', exp:'Not only + auxiliary + subject + verb...' },
        { type:'choice', q:'"___ have so many people had access to information." (modern world)',
          opts:['Never before','Never','Rarely','Seldom before'], a:'Never before',
          exp:'Never before + have + so many people + past participle.' },
        { type:'write', q:'Make a cleft sentence to emphasise "the music": "The music made the film special." →\n"It was ___ that ___."',
          a:'It was the music that made the film special.', exp:'It + was + emphasised element + that + rest.' },
        { type:'order', q:'Ordena:', words:['arrived','sooner','had','we','No','started.','it','than'],
          a:'No sooner had we arrived than it started.', exp:'No sooner + had + subject + pp + than...' },
        { type:'choice', q:'"What ___ was the complete silence in the room."',
          opts:['struck me','did strike me','I struck','had struck'], a:'struck me',
          exp:'What-cleft: What struck me = what + past verb (no inversion after what).' },
        { type:'write', q:'Transform: "We only understood the risk after the accident." →\n"Not until ___ did we ___."',
          a:'Not until after the accident did we understand the risk.', exp:'Not until + time clause + did + subject + base verb.' },
        { type:'choice', q:'"___ does he take a day off, even when he\'s ill."',
          opts:['Never','Rarely','Hardly','No sooner'], a:'Rarely',
          exp:'Rarely = almost never → inversion: Rarely does he...' },
        { type:'write', q:'Cleft for emphasis on "yesterday": "I met her yesterday." →\n"It was ___ that ___."',
          a:'It was yesterday that I met her.', exp:'It + was + yesterday + that + I met her.' },
        { type:'choice', q:'"Not only ___ the project over budget, it was also three months late."',
          opts:['was','is','has been','had'], a:'was',
          exp:'Not only + was (inversion: aux before subject). Past because completed.' },
        { type:'write', q:'Write your own inversion sentence using "Seldom":',
          a:'(open answer)', exp:'Seldom + do/does/did + subject + base form.' }
      ],
      communicativeTask: {
        title: 'Write a TED-style opening',
        instruction: 'Write the opening paragraph of a 2-minute talk on any topic. Use: 1 inversion, 1 cleft sentence, and 1 "Not only...but also" structure. The goal is to grab the audience in 3 sentences.',
        output: 'Written draft (then practise saying it aloud).'
      }
    },

    // ── C1 Academic Register & Hedging ──────────────────────
    academic_register: {
      id: 'academic_register', level: 'C1', title: 'Academic Register & Hedging', icon: 'book-marked', color: '#0D9488',
      learningGoal: 'Escribir y hablar en registro académico/formal usando hedging y nominalización.',
      canDo: [
        'I can use hedging language to qualify claims appropriately.',
        'I can transform informal language into academic register.',
        'I can nominalise verbs and adjectives for formal writing.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Registro Académico — El idioma de las ideas</h3>
        <p>El inglés académico tiene tres características principales: <strong>precisión</strong> (no exagerar), <strong>distancia</strong> (objetividad) y <strong>densidad</strong> (información compacta).</p>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#0D9488;background:#F0FDFA">
            <strong style="color:#134E4A">Hedging — Suavizar afirmaciones</strong>
            <small>Evita sonar absoluto. Usa:<br>
            <b>seems to / appears to / tends to</b><br>
            <b>is likely to / would seem to</b><br>
            <b>It could be argued that / There is evidence to suggest</b><br>
            ✗ "This proves..." ✓ "This suggests..."</small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Nominalización</strong>
            <small>Convierte verbos en sustantivos para mayor densidad:<br>
            decide → <b>decision</b><br>
            investigate → <b>investigation</b><br>
            develop → <b>development</b><br>
            ✗ "They decided to..." ✓ "The <b>decision</b> to..."</small>
          </div>
          <div class="t-box" style="border-color:#DC2626;background:#FFF5F5">
            <strong style="color:#7F1D1D">Formal vs Informal</strong>
            <small>✗ kids / ✓ children<br>
            ✗ a lot of / ✓ a considerable number of<br>
            ✗ shows / ✓ demonstrates / indicates<br>
            ✗ think / ✓ argue / contend / maintain<br>
            ✗ help / ✓ facilitate / assist</small>
          </div>
        </div>
        <div class="tip-callout"><i data-lucide="pen-line"></i>
          <span><strong>Regla C1:</strong> Nunca escribas "This proves that X causes Y" en un ensayo. En su lugar: "The evidence <b>suggests</b> a possible link between X and Y." La certeza absoluta suena poco académica.</span>
        </div>`,
      exercises: [
        { type:'write', q:'Nominalise: "They investigated the causes." →\n"The ___ of the causes was thorough."',
          a:'investigation', exp:'Investigate → investigation (nominalisation).' },
        { type:'choice', q:'Which hedging device is most appropriate in academic writing?',
          opts:['"This definitely proves that..."','"It would appear that..."','"Obviously, this shows..."','\"It is 100% clear that...\"'], a:'"It would appear that..."',
          exp:'"Would appear" = epistemic modal + appear: both hedging. Avoids overstatement.' },
        { type:'write', q:'Make formal: "A lot of kids have problems with reading." →\n"A ___ number of ___ experience ___ reading."',
          a:'considerable children difficulties with', exp:'formal vocabulary replacements.' },
        { type:'choice', q:'"The ___ of new technology has transformed communication."',
          opts:['developing','development','develop','developed'], a:'development',
          exp:'Nominalisation: develop → development (noun for formal subject).' },
        { type:'write', q:'Soften: "Social media causes depression." →\n"There is evidence to ___ that social media ___ contribute to depression."',
          a:'suggest may', exp:'Evidence to suggest + may (double hedging).' },
        { type:'choice', q:'Which is the most FORMAL alternative to "help"?',
          opts:['assist with','aid in','facilitate','support'], a:'facilitate',
          exp:'Facilitate = make easier/possible; most formal/academic of the options.' },
        { type:'write', q:'Nominalise: "The government decided to cut taxes." →\n"The government\'s ___ to cut taxes was controversial."',
          a:'decision', exp:'Decide → decision (possessive + nominalisation).' },
        { type:'choice', q:'"The data ___ a correlation between stress and illness."',
          opts:['shows','indicates','tells','says'], a:'indicates',
          exp:'Indicate is more precise and formal than "show" or "tell" in academic writing.' },
        { type:'write', q:'Write a hedged version of: "Eating sugar makes children hyperactive." →',
          a:'There is some evidence to suggest that excessive sugar intake may be associated with increased activity levels in children.', exp:'Key hedges: some evidence, may be, associated with (not "causes").' },
        { type:'choice', q:'"___ the findings are preliminary, they suggest a promising direction."',
          opts:['Although','Despite','In spite','Because'], a:'Although',
          exp:'Although + clause (with full subject + verb). Despite + noun.' },
        { type:'write', q:'Replace informal "a lot of changes": "The ___ experienced by the industry were significant."',
          a:'changes', exp:'Nominalise/rephrase. "Changes experienced by" = more formal syntactic structure.' },
        { type:'choice', q:'Which sentence is most appropriate for an academic essay conclusion?',
          opts:['To wrap things up, this shows the idea works.','In conclusion, the evidence suggests that further research is warranted.','So basically, everything we said proves our point.','This essay has definitely proved everything.'], a:'In conclusion, the evidence suggests that further research is warranted.',
          exp:'Formal connective + hedged language + academic vocabulary.' }
      ],
      communicativeTask: {
        title: 'Rewrite for academic publication',
        instruction: 'Take one of your previous writing tasks and rewrite it in academic register. Use: 3 hedging devices, 3 nominalisations, and formal vocabulary throughout. Target: 150 words.',
        output: 'Revised essay extract with self-annotation of changes.'
      }
    }
  };

  // ============================================================
  // INTEGRACIÓN — Fusionar con window.modulesData
  // ============================================================
  function mergeModules() {
    const allExpansions = {
      ...expansionsA1,
      ...expansionsA2,
      ...expansionsB1,
      ...expansionsB2,
      ...expansionsC1
    };

    if (typeof window.modulesData !== 'undefined') {
      Object.assign(window.modulesData, allExpansions);
    } else {
      window.modulesData = allExpansions;
    }

    // BUG-FIX 7: grammarLearningPath es un ARRAY [{level:'A1', modules:[...]}, ...]
    // no un objeto indexado por clave. Antes se usaba grammarLearningPath['a1'],
    // que devuelve undefined en un array → TypeError silencioso, módulos nunca añadidos.
    if (Array.isArray(window.grammarLearningPath)) {
      Object.entries(allExpansions).forEach(([id, mod]) => {
        const levelBlock = window.grammarLearningPath.find(
          b => b.level?.toUpperCase() === mod.level?.toUpperCase()
        );
        if (!levelBlock) return;
        const modules = levelBlock.modules || levelBlock.activities || [];
        const alreadyAdded = modules.some(m => m.id === id);
        if (!alreadyAdded) {
          modules.push({ id, title: mod.title, level: mod.level, type: 'grammar' });
        }
      });
    }

    console.log('[LeoEnglish] Grammar expanded: ' + Object.keys(allExpansions).length + ' new modules loaded.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mergeModules);
  } else {
    mergeModules();
  }

})();
