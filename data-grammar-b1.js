// data-grammar-b1.js v1.0 — LEOENGLISH · MÓDULOS DE GRAMÁTICA B1 (Intermediate)
// Marco Común Europeo de Referencia (MCER) — Nivel B1
// Estructura idéntica a data-grammar.js (A1/A2) para integración transparente con app.js v5.0
// Requiere: data-grammar.js cargado antes (hereda globalDidacticStages, globalMethodology, etc.)
// Añadir en index.html: <script src="data-grammar-b1.js" type="module"></script> ANTES de app.js

// ============================================================
// MÓDULOS B1 — 10 temas del MCER Intermediate
// ============================================================
// 1.  past_perfect          — Past Perfect Simple
// 2.  reported_speech       — Reported Speech (say / tell)
// 3.  passive_b1            — Passive Voice (Present & Past)
// 4.  relative_clauses      — Relative Clauses (who / which / that / where)
// 5.  second_conditional    — Second Conditional
// 6.  wish_if_only          — Wish / If only (present & past)
// 7.  modal_perfects        — Modal Perfects (should have / could have / must have)
// 8.  connectors_b1         — Connectors & Discourse Markers
// 9.  gerunds_infinitives   — Gerunds vs Infinitives (advanced)
// 10. question_tags         — Question Tags
// ============================================================

(function () {
  'use strict';

  // ---- Reutiliza constantes pedagógicas de data-grammar.js si están disponibles ----
  const _stages    = typeof globalDidacticStages !== 'undefined' ? globalDidacticStages : [];
  const _method    = typeof globalMethodology    !== 'undefined' ? globalMethodology    : {};
  const _assess    = typeof globalAssessment     !== 'undefined' ? globalAssessment     : {};
  const _progress  = typeof defaultProgression   !== 'undefined' ? defaultProgression   : {};

  // ============================================================
  // BASE DE DATOS DE MÓDULOS B1
  // ============================================================
  const modulesDataB1 = {

    // ------------------------------------------------------------------ //
    //  1. PAST PERFECT SIMPLE                                             //
    // ------------------------------------------------------------------ //
    past_perfect: {
      id: 'past_perfect', level: 'B1', title: 'Past Perfect Simple', icon: 'history', color: '#7C3AED',
      learningGoal: 'Expresar una acción pasada que ocurrió ANTES que otra acción también pasada.',
      canDo: [
        'I can use had + past participle to talk about earlier past events.',
        'I can contrast Past Simple and Past Perfect in the same sentence.',
        'I can use time expressions: before, after, when, by the time, already, just, never.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Past Perfect Simple</h3>
        <p>El <strong>Past Perfect</strong> sitúa una acción en el pasado <em>anterior</em> a otro momento también pasado. Es la «línea de tiempo dentro del pasado».</p>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Estructura</strong>
            <small>
              <b>+</b> Subject + <b>had</b> + past participle<br>
              <b>−</b> Subject + <b>had not (hadn't)</b> + past participle<br>
              <b>?</b> <b>Had</b> + subject + past participle?<br><br>
              I <b>had eaten</b> before she arrived.<br>
              She <b>hadn't studied</b> when the test started.<br>
              <b>Had</b> they <b>left</b> by 8 o'clock?
            </small>
          </div>
          <div class="t-box" style="border-color:#2563EB;background:#EFF6FF">
            <strong style="color:#1E3A8A">Marcadores temporales clave</strong>
            <small>
              <b>already</b> — acción completada antes de lo esperado<br>
              <b>just</b> — recién completada<br>
              <b>never</b> — experiencia negativa hasta ese momento<br>
              <b>by the time</b> — para cuando<br>
              <b>before / after / when / as soon as</b>
            </small>
          </div>
        </div>
        <div class="example-block">
          <div class="ex-row"><div class="ex-en">When I arrived, the film <u>had already started</u>.</div><div class="ex-es">Cuando llegué, la película ya había empezado.</div></div>
          <div class="ex-row"><div class="ex-en">She <u>had never seen</u> snow before she moved to Canada.</div><div class="ex-es">Nunca había visto nieve antes de mudarse a Canadá.</div></div>
          <div class="ex-row"><div class="ex-en">By the time he called, I <u>had left</u>.</div><div class="ex-es">Para cuando llamó, yo ya me había ido.</div></div>
        </div>
        <div class="tip-callout"><i data-lucide="alert-circle"></i>
          <span><strong>Past Simple vs Past Perfect:</strong> "She left when he arrived" (dos acciones simultáneas) vs "She had left when he arrived" (ella se fue ANTES de que él llegara).</span>
        </div>`,
      exercises: [
        {type:'choice', q:'When we got to the station, the train ___ already ___.',opts:['had / left','has / left','did / leave'],a:'had / left',exp:'Acción anterior al momento pasado → had + past participle.'},
        {type:'choice', q:'She ___ never ___ sushi before she visited Japan.',opts:['had / eaten','has / eaten','did / eat'],a:'had / eaten',exp:'Experiencia negativa hasta ese punto pasado → had never eaten.'},
        {type:'choice', q:'By the time I woke up, my flatmates ___ already ___ breakfast.',opts:['had / made','have / made','made'],a:'had / made',exp:'"By the time" con pasado → Past Perfect.'},
        {type:'choice', q:'He felt sick because he ___ too much at the party.',opts:['had eaten','ate','has eaten'],a:'had eaten',exp:'La causa (comer demasiado) ocurrió ANTES que el efecto (sentirse mal).'},
        {type:'write', q:'Complete: I was tired because I ___ (not sleep) well the night before.',a:'hadn\'t slept',exp:'Forma negativa del Past Perfect: hadn\'t + past participle.'},
        {type:'write', q:'Complete: ___ you ___ (ever / visit) London before 2020?',a:'Had you ever visited',exp:'Pregunta en Past Perfect: Had + subject + ever + past participle.'},
        {type:'write', q:'Complete: By the time she called me, I ___ (already / finish) the report.',a:'had already finished',exp:'"Already" refuerza que la acción fue anterior: had already finished.'},
        {type:'write', q:'Complete: They realised they ___ (leave) their keys inside.',a:'had left',exp:'Acción pasada anterior al momento de darse cuenta.'},
        {type:'order', q:'Ordena la frase:', words:['got','home','she','When','her','had','partner','I','when','already','arrived.'], a:'When she got home, her partner had already arrived.',exp:'When + Past Simple, Past Perfect para la acción anterior.'},
        {type:'order', q:'Ordena la frase:', words:['never','had','spoken','to','I','a','before.','foreigner'], a:'I had never spoken to a foreigner before.',exp:'Had never + past participle para experiencia negativa previa.'},
        {type:'choice', q:'___ she ___ (finish) her homework before dinner?',opts:['Had / finished','Did / finish','Has / finished'],a:'Had / finished',exp:'Pregunta Past Perfect: Had + subject + past participle.'},
        {type:'choice', q:'I didn\'t recognise him because he ___ his hair.',opts:['had cut','has cut','cut'],a:'had cut',exp:'El corte de pelo ocurrió ANTES de que yo no lo reconociera.'},
        {type:'write', q:'Rewrite using Past Perfect: "First she cooked. Then he arrived." → When he arrived, she ___.',a:'had already cooked',exp:'La cocción fue anterior a la llegada → had already cooked.'},
        {type:'write', q:'Complete: The house was a mess. The children ___ (play) all afternoon.',a:'had been playing',exp:'Past Perfect Continuous para duración previa (acción en progreso antes del resultado).'},
        {type:'choice', q:'After they ___ the film, they went for a walk.',opts:['had watched','watched','have watched'],a:'had watched',exp:'"After" + Past Perfect indica la secuencia: primero vieron, luego caminaron.'},
        {type:'order', q:'Ordena la frase:', words:['left','had','office','the','she','Before','locked','the','door.'], a:'Before she left, she had locked the door.',exp:'Before + Past Simple, Past Perfect para la acción previa.'},
        {type:'write', q:'Complete: He was nervous at the interview because he ___ (prepare) enough.',a:'hadn\'t prepared',exp:'No había preparado lo suficiente → hadn\'t prepared.'},
        {type:'choice', q:'It was the most beautiful sunset I ___ ever ___.',opts:['had / seen','have / seen','did / see'],a:'had / seen',exp:'Superlativo + experiencia en el pasado → Past Perfect con ever.'},
        {type:'write', q:'Complete: Just as I arrived, the teacher ___ (just / start) explaining.',a:'had just started',exp:'"Just" en Past Perfect indica acción recién completada justo antes.'},
        {type:'order', q:'Ordena la frase:', words:['time','told','they','By','the','already','us,','had','decided.'], a:'By the time they told us, we had already decided.',exp:'"By the time" + Past Simple → Past Perfect para la acción previa.'}
      ],
      communicativeTask: {
        title: 'A day everything went wrong',
        instruction: 'Write a short paragraph (6–8 sentences) about a day when things went wrong because something had (or hadn\'t) happened before. Use Past Perfect at least 4 times.',
        output: 'Paragraph or 90-second audio recording.'
      }
    },

    // ------------------------------------------------------------------ //
    //  2. REPORTED SPEECH                                                 //
    // ------------------------------------------------------------------ //
    reported_speech: {
      id: 'reported_speech', level: 'B1', title: 'Reported Speech', icon: 'message-square', color: '#0891B2',
      learningGoal: 'Reportar lo que alguien dijo o preguntó usando los cambios de tiempo verbal y pronombres correctos.',
      canDo: [
        'I can report statements using say and tell with backshift.',
        'I can report yes/no and wh- questions.',
        'I can change pronouns, time expressions and place references correctly.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Reported Speech (Estilo indirecto)</h3>
        <p>Cuando reportamos lo que alguien dijo, normalmente retrocedemos el tiempo verbal (<em>backshift</em>) y cambiamos pronombres y expresiones de tiempo.</p>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#0891B2;background:#ECFEFF">
            <strong style="color:#164E63">Backshift (retroceso verbal)</strong>
            <small>
              Present Simple → <b>Past Simple</b><br>
              Present Continuous → <b>Past Continuous</b><br>
              Past Simple → <b>Past Perfect</b><br>
              Will → <b>Would</b> · Can → <b>Could</b><br>
              Must → <b>Had to</b> · May → <b>Might</b>
            </small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Say vs Tell</strong>
            <small>
              <b>say</b> — sin objeto de persona inmediato<br>
              She <b>said</b> (that) she was tired.<br><br>
              <b>tell</b> — SIEMPRE con objeto de persona<br>
              She <b>told me</b> (that) she was tired.<br><br>
              ⚠ She said me... ✗ | She told... ✗
            </small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Cambios de expresiones</strong>
            <small>
              now → <b>then</b> · today → <b>that day</b><br>
              yesterday → <b>the day before</b><br>
              tomorrow → <b>the next day</b><br>
              here → <b>there</b> · this → <b>that</b><br>
              ago → <b>before / previously</b>
            </small>
          </div>
        </div>
        <div class="example-block">
          <div class="ex-row"><div class="ex-en">Direct: "I am working now." → Reported: She said she <u>was working</u> then.</div></div>
          <div class="ex-row"><div class="ex-en">Direct: "Will you help me?" → Reported: He asked if I <u>would help</u> him.</div></div>
          <div class="ex-row"><div class="ex-en">Direct: "Where do you live?" → Reported: She asked where I <u>lived</u>.</div></div>
        </div>`,
      exercises: [
        {type:'choice', q:'"I live in Madrid." → She said she ___ in Madrid.',opts:['lives','lived','had lived'],a:'lived',exp:'Present Simple → Past Simple en reported speech.'},
        {type:'choice', q:'"I will call you tomorrow." → He told me he ___ call me the next day.',opts:['will','would','could'],a:'would',exp:'Will → Would en reported speech.'},
        {type:'choice', q:'She ___ me that she was tired.',opts:['said','told','spoke'],a:'told',exp:'"Tell" siempre lleva objeto de persona: told me.'},
        {type:'choice', q:'"Are you coming to the party?" → He asked ___ I was coming.',opts:['that','if','what'],a:'if',exp:'Yes/No questions en reported speech usan "if/whether".'},
        {type:'write', q:'Report: "I can\'t swim," she said. → She said she ___ swim.',a:'couldn\'t',exp:'Can → Could en backshift negativo.'},
        {type:'write', q:'Report: "We have just arrived," they said. → They said they ___ just ___.',a:'had just arrived',exp:'Present Perfect → Past Perfect en reported speech.'},
        {type:'write', q:'Report: "Where did you go?" he asked. → He asked where I ___.',a:'had gone',exp:'Past Simple → Past Perfect para wh- questions.'},
        {type:'write', q:'Report: "Don\'t touch that!" → She told me ___ touch that.',a:'not to',exp:'Imperative negativo en reported speech: told me not to + infinitive.'},
        {type:'order', q:'Ordena la frase:', words:['was','she','She','said','tired.'], a:'She said she was tired.',exp:'say + (that) + reported clause en Past Simple.'},
        {type:'order', q:'Ordena la frase:', words:['if','asked','come.','he','He','me','could','I'], a:'He asked me if I could come.',exp:'Yes/No question reportada: asked me if + subject + could.'},
        {type:'choice', q:'"I was studying all night." → She said she ___ all night.',opts:['was studying','had been studying','studied'],a:'had been studying',exp:'Past Continuous → Past Perfect Continuous en reported speech.'},
        {type:'choice', q:'"This is my house." → He said ___ was his house.',opts:['this','that','it'],a:'that',exp:'"This" cambia a "that" en reported speech.'},
        {type:'write', q:'Report: "You must wear a tie," the boss said. → The boss said I ___ wear a tie.',a:'had to',exp:'Must → Had to en reported speech.'},
        {type:'write', q:'Report: "I\'ll finish it today," she said. → She said she ___ finish it ___ day.',a:'would that',exp:'Will → Would. Today → that day.'},
        {type:'choice', q:'"Where are you going?" → She asked me where I ___.',opts:['am going','was going','went'],a:'was going',exp:'Present Continuous → Past Continuous en wh- question reportada.'},
        {type:'order', q:'Ordena la frase:', words:['told','had','us','Teacher','the','homework','do','to','our.'], a:'The teacher told us to do our homework.',exp:'Tell + object + to + infinitive para imperativos reportados.'},
        {type:'write', q:'Report: "It may rain tomorrow," the forecaster said. → The forecaster said it ___ rain the next day.',a:'might',exp:'May → Might. Tomorrow → the next day.'},
        {type:'choice', q:'He said he ___ never been to New York.',opts:['has','had','have'],a:'had',exp:'Present Perfect → Past Perfect: had never been.'},
        {type:'write', q:'Report: "I don\'t understand the exercise," the student said. → The student said he ___ the exercise.',a:'didn\'t understand',exp:'Present Simple negativo → Past Simple negativo.'},
        {type:'order', q:'Ordena la frase:', words:['had','She','forgotten','she','said','her','umbrella.'], a:'She said she had forgotten her umbrella.',exp:'Past Simple → Past Perfect: had forgotten.'}
      ],
      communicativeTask: {
        title: 'Breaking news report',
        instruction: 'Choose a recent event and write a short news report (5–6 sentences) using reported speech to quote what people said about it.',
        output: 'Written news paragraph or spoken report (1 minute).'
      }
    },

    // ------------------------------------------------------------------ //
    //  3. PASSIVE VOICE B1                                                //
    // ------------------------------------------------------------------ //
    passive_b1: {
      id: 'passive_b1', level: 'B1', title: 'Passive Voice (Present & Past)', icon: 'refresh-cw', color: '#059669',
      learningGoal: 'Construir oraciones pasivas en presente y pasado simple para enfocar en el objeto o resultado.',
      canDo: [
        'I can form passive sentences in Present Simple and Past Simple.',
        'I can use "by" to introduce the agent when relevant.',
        'I can choose between active and passive according to context and focus.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Passive Voice — Voz Pasiva</h3>
        <p>La voz pasiva desplaza el foco de <em>quién hace</em> la acción al <em>objeto o resultado</em>. Es muy frecuente en textos formales, científicos y periodísticos.</p>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Presente Simple Pasivo</strong>
            <small>
              am / is / are + past participle<br>
              "English <b>is spoken</b> all over the world."<br>
              "The reports <b>are sent</b> every Monday."<br>
              "I <b>am not invited</b> to the meeting."
            </small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Pasado Simple Pasivo</strong>
            <small>
              was / were + past participle<br>
              "The Eiffel Tower <b>was built</b> in 1889."<br>
              "The windows <b>were broken</b> by the storm."<br>
              "She <b>wasn't told</b> about the meeting."
            </small>
          </div>
          <div class="t-box" style="border-color:#2563EB;background:#EFF6FF">
            <strong style="color:#1E3A8A">¿Cuándo usar pasiva?</strong>
            <small>
              • El agente es desconocido: "My car <b>was stolen</b>."<br>
              • El agente no importa: "Rice <b>is grown</b> in Asia."<br>
              • El agente es obvio o formal: "He <b>was arrested</b>."<br>
              • Con <b>by</b> si el agente importa: "...written <b>by</b> Cervantes."
            </small>
          </div>
        </div>
        <div class="example-block">
          <div class="ex-row"><div class="ex-en">Active: Shakespeare <u>wrote</u> Hamlet. → Passive: Hamlet <u>was written</u> by Shakespeare.</div></div>
          <div class="ex-row"><div class="ex-en">Active: They clean the office daily. → Passive: The office <u>is cleaned</u> daily.</div></div>
        </div>`,
      exercises: [
        {type:'choice', q:'The Eiffel Tower ___ in 1889.',opts:['is built','was built','built'],a:'was built',exp:'Hecho histórico en pasado → Past Simple Passive: was built.'},
        {type:'choice', q:'English ___ all over the world.',opts:['speaks','is spoken','was spoken'],a:'is spoken',exp:'Verdad general presente → Present Simple Passive: is spoken.'},
        {type:'write', q:'Rewrite: "They make iPhones in China." → iPhones ___ in China.',a:'are made',exp:'Present Simple Passive: are + made.'},
        {type:'write', q:'Rewrite: "Someone stole my bike yesterday." → My bike ___ yesterday.',a:'was stolen',exp:'Past Simple Passive: was + stolen.'},
        {type:'choice', q:'The results ___ (announce) tomorrow at the ceremony.',opts:['will announced','will be announced','are announced'],a:'will be announced',exp:'Future Passive: will be + past participle.'},
        {type:'write', q:'Complete: The letter ___ (not / sign) by the director yet.',a:'was not signed',exp:'Past Simple Passive negativo: was not + past participle.'},
        {type:'order', q:'Ordena la frase:', words:['The','report','sent','was','Monday.','every'], a:'The report was sent every Monday.',exp:'Past Simple Passive: was + past participle.'},
        {type:'order', q:'Ordena la frase:', words:['grown','is','Colombia.','in','Coffee'], a:'Coffee is grown in Colombia.',exp:'Present Simple Passive: is + grown.'},
        {type:'choice', q:'A new hospital ___ built in our city next year.',opts:['is','are','will be'],a:'will be',exp:'Future Passive con "next year": will be + past participle.'},
        {type:'write', q:'Complete: Three suspects ___ (arrest) last night by the police.',a:'were arrested',exp:'Past Simple Passive: were + arrested.'},
        {type:'choice', q:'"Did anyone invite her to the party?" "No, she ___ invited."',opts:['wasn\'t','isn\'t','won\'t be'],a:'wasn\'t',exp:'Respuesta en pasado → Past Simple Passive negativo: wasn\'t invited.'},
        {type:'write', q:'Rewrite: "They don\'t allow pets in the hotel." → Pets ___ in the hotel.',a:'are not allowed',exp:'Present Simple Passive negativo: are not + allowed.'},
        {type:'choice', q:'The windows ___ broken by the storm last night.',opts:['are','were','was'],a:'were',exp:'"Windows" es plural → were + broken.'},
        {type:'write', q:'Complete: The package ___ (deliver) to the wrong address last week.',a:'was delivered',exp:'Past Simple Passive: was + delivered.'},
        {type:'order', q:'Ordena la frase:', words:['Shakespeare.','written','was','by','Hamlet'], a:'Hamlet was written by Shakespeare.',exp:'Past Passive con agente "by Shakespeare".'},
        {type:'choice', q:'Spanish ___ by more than 500 million people.',opts:['speaks','is spoken','was spoken'],a:'is spoken',exp:'Dato presente y general → Present Simple Passive.'},
        {type:'write', q:'Rewrite: "Scientists discovered the virus in 2019." → The virus ___ in 2019.',a:'was discovered',exp:'Past Simple Passive: was + discovered.'},
        {type:'write', q:'Complete: These cars ___ (not / manufacture) in Europe.',a:'are not manufactured',exp:'Present Simple Passive negativo con manufactura.'},
        {type:'choice', q:'The project ___ completed before the deadline.',opts:['was','were','is'],a:'was',exp:'"The project" es singular → was + completed.'},
        {type:'order', q:'Ordena la frase:', words:['trained','by','were','the','soldiers','officers.','experienced'], a:'The soldiers were trained by experienced officers.',exp:'Past Passive con agente: were trained by + agente.'}
      ],
      communicativeTask: {
        title: 'How things are made',
        instruction: 'Choose a product (chocolate, coffee, cars, etc.) and write 6–8 sentences explaining how it is produced and where. Use passive voice throughout.',
        output: 'Written paragraph or short presentation (90 seconds).'
      }
    },

    // ------------------------------------------------------------------ //
    //  4. RELATIVE CLAUSES                                                //
    // ------------------------------------------------------------------ //
    relative_clauses: {
      id: 'relative_clauses', level: 'B1', title: 'Relative Clauses', icon: 'link', color: '#DC2626',
      learningGoal: 'Usar oraciones de relativo para definir, identificar y añadir información sobre personas, cosas y lugares.',
      canDo: [
        'I can use who, which, that, where and whose in defining relative clauses.',
        'I can omit the relative pronoun when it is the object of the clause.',
        'I can add extra information with non-defining clauses using commas.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Relative Clauses — Oraciones de relativo</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#DC2626;background:#FEF2F2">
            <strong style="color:#7F1D1D">Pronombres relativos</strong>
            <small>
              <b>who / that</b> — personas<br>
              <b>which / that</b> — cosas y animales<br>
              <b>where</b> — lugares<br>
              <b>when</b> — tiempo<br>
              <b>whose</b> — posesión (de quien)
            </small>
          </div>
          <div class="t-box" style="border-color:#2563EB;background:#EFF6FF">
            <strong style="color:#1E3A8A">Defining (sin comas)</strong>
            <small>
              Identifica al sustantivo. Sin ella, la frase no tiene sentido completo.<br>
              "The woman <b>who</b> lives next door is a nurse."<br>
              "The book <b>that</b> I bought was expensive."<br>
              Se puede omitir el relativo si es objeto:<br>
              "The film (that) I watched was great."
            </small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Non-defining (con comas)</strong>
            <small>
              Añade información extra. No se puede omitir el relativo ni usar "that".<br>
              "My sister, <b>who</b> lives in London, is a doctor."<br>
              "The Eiffel Tower, <b>which</b> was built in 1889, is in Paris."
            </small>
          </div>
        </div>
        <div class="tip-callout"><i data-lucide="alert-circle"></i>
          <span><strong>Omisión del relativo:</strong> Solo en defining clauses cuando el pronombre es objeto: "The man (that) I met yesterday." — pero NO cuando es sujeto: "The man who/that phoned me." (no omitible)</span>
        </div>`,
      exercises: [
        {type:'choice', q:'The woman ___ lives next door is a nurse.',opts:['which','who','whose'],a:'who',exp:'"Woman" es persona → who.'},
        {type:'choice', q:'The book ___ I bought last week was very interesting.',opts:['who','which','whose'],a:'which',exp:'"Book" es cosa → which (también válido "that" aquí).'},
        {type:'choice', q:'That\'s the restaurant ___ we had our first date.',opts:['which','when','where'],a:'where',exp:'Lugar → where.'},
        {type:'write', q:'Join: "I have a friend. Her father is famous." → I have a friend ___ father is famous.',a:'whose',exp:'"Whose" indica posesión: a friend whose father.'},
        {type:'write', q:'Join: "The man phoned me. He was very rude." → The man ___ phoned me was very rude.',a:'who',exp:'El relativo es sujeto de "phoned" → who, no omitible.'},
        {type:'choice', q:'The day ___ we met was unforgettable.',opts:['when','where','which'],a:'when',exp:'Referencia temporal → when.'},
        {type:'write', q:'Complete: Picasso, ___ was born in Spain, is one of the most famous painters.',a:'who',exp:'Non-defining clause: persona + comas → who.'},
        {type:'write', q:'Complete: The laptop ___ I ordered online arrived damaged.',a:'that',exp:'Cosa en defining clause → that/which.'},
        {type:'order', q:'Ordena la frase:', words:['The','who','doctor','me','treated','very','was','kind.'], a:'The doctor who treated me was very kind.',exp:'Defining clause con sujeto relativo "who".'},
        {type:'order', q:'Ordena la frase:', words:['The','built','bridge','was','which','1990,','in','is','iconic.'], a:'The bridge, which was built in 1990, is iconic.',exp:'Non-defining clause con comas y "which".'},
        {type:'choice', q:'She is the person ___ car was stolen yesterday.',opts:['who','which','whose'],a:'whose',exp:'Posesión → whose.'},
        {type:'write', q:'Join using "where": "Madrid is a city. I grew up there." → Madrid is a city ___.',a:'where I grew up',exp:'"Where" reemplaza "there" en el lugar.'},
        {type:'choice', q:'The film ___ we saw last night was amazing.',opts:['who','which','whose'],a:'which',exp:'"Film" es cosa → which (relativo omitible aquí).'},
        {type:'write', q:'Complete (non-defining): "The Andes, ___ run through South America, are very high."',a:'which',exp:'Non-defining clause para cosa → which con comas.'},
        {type:'choice', q:'Can you pass me the book ___ is on the table?',opts:['which','where','whose'],a:'which',exp:'"Book" es cosa y el relativo es sujeto → which.'},
        {type:'order', q:'Ordena la frase:', words:['I','met','yesterday','The','knew','she','man','already.'], a:'The man I met yesterday she already knew.',exp:'El relativo se omite porque es objeto: The man (that) I met.'},
        {type:'write', q:'Join: "I know a girl. Her sister is a pop star." → I know a girl ___.',a:'whose sister is a pop star',exp:'"Whose" para posesión.'},
        {type:'choice', q:'2008 was the year ___ the financial crisis started.',opts:['when','where','which'],a:'when',exp:'Referencia temporal (año) → when.'},
        {type:'write', q:'Complete: The company, ___ headquarters are in New York, employs 5,000 people.',a:'whose',exp:'Non-defining clause con posesión → whose.'},
        {type:'order', q:'Ordena la frase:', words:['who','people','others','help','are','admirable.','Those'], a:'Those who help others are admirable.',exp:'"Those who" → referencia genérica a personas con defining clause.'}
      ],
      communicativeTask: {
        title: 'Describe your world',
        instruction: 'Write 8 sentences about people, places and things that are important to you. Use a different relative pronoun (who, which, where, when, whose) in each one.',
        output: 'Written paragraph or recorded description (90 seconds).'
      }
    },

    // ------------------------------------------------------------------ //
    //  5. SECOND CONDITIONAL                                              //
    // ------------------------------------------------------------------ //
    second_conditional: {
      id: 'second_conditional', level: 'B1', title: 'Second Conditional', icon: 'git-branch', color: '#D97706',
      learningGoal: 'Hablar de situaciones hipotéticas, imaginarias o contrarias a la realidad presente.',
      canDo: [
        'I can form the second conditional: If + Past Simple, would + infinitive.',
        'I can use could and might instead of would for possibility.',
        'I can distinguish first conditional (real) from second conditional (hypothetical).'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Second Conditional — Hipótesis en el presente</h3>
        <p>El <strong>Second Conditional</strong> habla de situaciones que <em>no son reales ahora</em>, o que son muy poco probables.</p>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#D97706;background:#FFFBEB">
            <strong style="color:#78350F">Estructura</strong>
            <small>
              <b>If + Past Simple, would + base verb</b><br>
              "If I <b>had</b> a car, I <b>would drive</b> to work."<br>
              "If she <b>knew</b> the answer, she <b>would tell</b> us."<br><br>
              Con "could / might":<br>
              "If I were rich, I <b>could travel</b> the world."<br>
              "If it <b>stopped</b> raining, we <b>might go</b> out."
            </small>
          </div>
          <div class="t-box" style="border-color:#2563EB;background:#EFF6FF">
            <strong style="color:#1E3A8A">Were para todos los sujetos</strong>
            <small>
              En condicionales formales o subjuntivo:<br>
              "If I <b>were</b> you, I would study more."<br>
              "If he <b>were</b> here, he would help."<br>
              (Was también es aceptado en informal)
            </small>
          </div>
        </div>
        <div class="example-block">
          <div class="ex-row"><div class="ex-en">1st: "If it <u>rains</u>, I <u>will</u> stay home." (probable)</div><div class="ex-es">Si llueve, me quedaré en casa.</div></div>
          <div class="ex-row"><div class="ex-en">2nd: "If it <u>rained</u>, I <u>would</u> stay home." (hipotético)</div><div class="ex-es">Si lloviera, me quedaría en casa.</div></div>
        </div>`,
      exercises: [
        {type:'choice', q:'If I ___ a million dollars, I would travel the world.',opts:['have','had','would have'],a:'had',exp:'Second conditional: if + Past Simple (had).'},
        {type:'choice', q:'If she ___ harder, she would pass the exam.',opts:['studies','studied','would study'],a:'studied',exp:'If-clause: Past Simple (studied), no "would" en esta parte.'},
        {type:'write', q:'Complete: If I were you, I ___ (talk) to her immediately.',a:'would talk',exp:'"If I were you" → would + base verb.'},
        {type:'write', q:'Complete: What ___ you do if you ___ the lottery?',a:'would won',exp:'Would + do / Past Simple won.'},
        {type:'choice', q:'If he ___ the truth, he would be in trouble.',opts:['tells','told','would tell'],a:'told',exp:'If-clause usa Past Simple: told.'},
        {type:'order', q:'Ordena la frase:', words:['a','I','would','had','buy','bigger','If','I','house.'], a:'If I had a bigger house, I would buy it.',exp:'If + Past Simple, would + infinitive.'},
        {type:'write', q:'Complete: If it ___ (not / be) so cold, we ___ (go) for a walk.',a:'weren\'t would go',exp:'If + weren\'t (negativo), would + go.'},
        {type:'choice', q:'She would feel better if she ___ more sleep.',opts:['gets','got','would get'],a:'got',exp:'If-clause: Past Simple (got).'},
        {type:'write', q:'Complete: If I ___ (speak) Chinese, I could work in Beijing.',a:'spoke',exp:'If + Past Simple: spoke.'},
        {type:'choice', q:'If I were a bird, I ___ fly to the sea.',opts:['will','would','could'],a:'would',exp:'Second conditional: would + fly.'},
        {type:'order', q:'Ordena la frase:', words:['you','I','were','quit','If','my','I','job.'], a:'If I were you, I would quit my job.',exp:'"If I were you" → would + base verb.'},
        {type:'write', q:'Complete: I ___ (call) the police if I ___ (see) someone stealing.',a:'would call saw',exp:'Would + call / If + saw (Past Simple).'},
        {type:'choice', q:'If they ___ the project, they could win the contract.',opts:['finish','finished','would finish'],a:'finished',exp:'If-clause: Past Simple. Could indica posibilidad.'},
        {type:'write', q:'Write a second conditional: imagine you have wings → If I ___...',a:'had wings I would fly anywhere',exp:'If I had wings, I would fly anywhere. (respuesta libre)'},
        {type:'choice', q:'What would you do if you ___ your job?',opts:['lose','lost','would lose'],a:'lost',exp:'If-clause de second conditional: Past Simple (lost).'},
        {type:'order', q:'Ordena la frase:', words:['could','we','stayed','If','might','home.','it','rain,'], a:'If it stayed home, we might rain.',exp:'If + Past Simple, might + verb (posibilidad en second conditional).'},
        {type:'write', q:'Complete: If there ___ (be) no pollution, cities ___ (be) much healthier.',a:'were would be',exp:'If + were / would + be.'},
        {type:'choice', q:'If I lived closer, I ___ walk to work every day.',opts:['will','would','might'],a:'would',exp:'"Would" es la respuesta estándar del second conditional.'},
        {type:'write', q:'Complete: She ___ (not / be) so tired if she ___ (work) fewer hours.',a:'wouldn\'t be worked',exp:'Wouldn\'t + be / if + worked.'},
        {type:'order', q:'Ordena la frase:', words:['had','more','could','free','I','If','travel.','time,','I'], a:'If I had more free time, I could travel.',exp:'Could indica posibilidad en second conditional.'}
      ],
      communicativeTask: {
        title: 'My dream life',
        instruction: 'Write 8 sentences about what you would do if your life were different (different job, city, superpower, etc.). Use second conditional throughout.',
        output: 'Written paragraph or 90-second speaking task.'
      }
    },

    // ------------------------------------------------------------------ //
    //  6. WISH / IF ONLY                                                  //
    // ------------------------------------------------------------------ //
    wish_if_only: {
      id: 'wish_if_only', level: 'B1', title: 'Wish / If only', icon: 'star', color: '#7C3AED',
      learningGoal: 'Expresar deseos, arrepentimientos y quejas sobre el presente y el pasado.',
      canDo: [
        'I can use wish + Past Simple to express present wishes.',
        'I can use wish + Past Perfect to express regrets about the past.',
        'I can use "if only" to express stronger emotions.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Wish / If only — Deseos y arrepentimientos</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Wish + Past Simple (presente)</strong>
            <small>
              Algo no es real ahora y lo deseamos diferente:<br>
              "I wish I <b>spoke</b> French." (pero no hablo)<br>
              "She wishes she <b>were</b> taller." (pero no lo es)<br>
              "I wish I <b>didn't have</b> to work Saturdays."
            </small>
          </div>
          <div class="t-box" style="border-color:#DC2626;background:#FEF2F2">
            <strong style="color:#7F1D1D">Wish + Past Perfect (pasado)</strong>
            <small>
              Arrepentimiento sobre algo que ya ocurrió:<br>
              "I wish I <b>had studied</b> harder." (pero no estudié)<br>
              "She wishes she <b>hadn't said</b> that." (pero lo dijo)<br>
              "I wish I <b>had listened</b> to you."
            </small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">If only — más énfasis emocional</strong>
            <small>
              Misma estructura que wish, más intensidad:<br>
              "If only I <b>were</b> richer!"<br>
              "If only she <b>had told</b> me the truth."<br>
              "If only it <b>would stop</b> raining!"
            </small>
          </div>
        </div>
        <div class="tip-callout"><i data-lucide="alert-circle"></i>
          <span><strong>Wish + would:</strong> Para quejas sobre comportamiento que no cambia: "I wish he <b>would stop</b> shouting." (pero sigue gritando)</span>
        </div>`,
      exercises: [
        {type:'choice', q:'I wish I ___ speak Japanese.',opts:['can','could','would'],a:'could',exp:'Wish + Past Simple: could (= deseo presente de poder).'},
        {type:'choice', q:'She wishes she ___ to the party. It was great!',opts:['went','had gone','would go'],a:'had gone',exp:'Arrepentimiento pasado: wish + Past Perfect (had gone).'},
        {type:'write', q:'Complete: I wish it ___ (not / rain) right now. I want to go out.',a:'weren\'t raining',exp:'Wish + Past Continuous para deseo sobre el momento presente.'},
        {type:'write', q:'Complete: If only I ___ (study) harder for the exam!',a:'had studied',exp:'If only + Past Perfect para arrepentimiento.'},
        {type:'choice', q:'I wish he ___ stop talking so loudly in the library.',opts:['will','would','could'],a:'would',exp:'Wish + would = queja sobre comportamiento que no cambia.'},
        {type:'order', q:'Ordena la frase:', words:['I','taller.','wish','were','I'], a:'I wish I were taller.',exp:'Wish + Past Simple (were para ser): deseo presente.'},
        {type:'write', q:'Complete: She wishes she ___ (not / say) those words to her friend.',a:'hadn\'t said',exp:'Wish + Past Perfect negativo: hadn\'t + past participle.'},
        {type:'choice', q:'If only I ___ a better job! I\'m so tired of this one.',opts:['have','had','would have'],a:'had',exp:'If only + Past Simple para deseo presente sobre situación.'},
        {type:'write', q:'Complete: I wish the neighbours ___ (stop) making noise at night.',a:'would stop',exp:'Wish + would = queja / deseo de cambio en comportamiento ajeno.'},
        {type:'order', q:'Ordena la frase:', words:['hadn\'t','I','wish','so','much','spent','I','money.'], a:'I wish I hadn\'t spent so much money.',exp:'Wish + Past Perfect negativo: hadn\'t + spent.'},
        {type:'choice', q:'He wishes he ___ a doctor instead of a lawyer.',opts:['becomes','became','had become'],a:'had become',exp:'Arrepentimiento sobre decisión pasada → wish + had become.'},
        {type:'write', q:'Complete: If only we ___ (know) the answer then!',a:'had known',exp:'If only + Past Perfect para lamentar ignorancia pasada.'},
        {type:'choice', q:'I wish I ___ so nervous before presentations.',opts:['am not','wasn\'t','wouldn\'t be'],a:'wasn\'t',exp:'Wish + Past Simple para estado presente que se desea diferente.'},
        {type:'write', q:'Complete the sentence about a regret: "If only I ___"',a:'had listened to my parents',exp:'Respuesta libre con wish + Past Perfect.'},
        {type:'order', q:'Ordena la frase:', words:['If','she','only','me','told','had','truth.','the'], a:'If only she had told me the truth.',exp:'If only + Past Perfect: had told.'},
        {type:'choice', q:'I wish you ___ argue with me all the time.',opts:['won\'t','wouldn\'t','didn\'t'],a:'wouldn\'t',exp:'Wish + wouldn\'t = queja de comportamiento repetido.'},
        {type:'write', q:'Complete: My parents wish they ___ (move) to the countryside years ago.',a:'had moved',exp:'Wish + Past Perfect: had moved (arrepentimiento pasado).'},
        {type:'choice', q:'She wishes she ___ more time to travel.',opts:['has','had','would have'],a:'had',exp:'Wish + Past Simple para deseo presente.'},
        {type:'write', q:'Complete: If only it ___ (be) warmer today! I\'d love to sit outside.',a:'were',exp:'If only + Past Simple (were) para deseo sobre clima actual.'},
        {type:'order', q:'Ordena la frase:', words:['wish','he','I','so','weren\'t','busy','always.'], a:'I wish he weren\'t always so busy.',exp:'Wish + Past Simple negativo: weren\'t.'}
      ],
      communicativeTask: {
        title: 'Regrets and wishes',
        instruction: 'Write 8 sentences using wish or if only: 4 about your present life and 4 about past decisions. Share your real feelings.',
        output: 'Written paragraph or personal reflection audio (90 seconds).'
      }
    },

    // ------------------------------------------------------------------ //
    //  7. MODAL PERFECTS                                                  //
    // ------------------------------------------------------------------ //
    modal_perfects: {
      id: 'modal_perfects', level: 'B1', title: 'Modal Perfects', icon: 'alert-triangle', color: '#B45309',
      learningGoal: 'Usar should have, could have y must have para hablar de certeza, posibilidad y arrepentimiento en el pasado.',
      canDo: [
        'I can use must have to express certainty about the past.',
        'I can use should have / shouldn\'t have to express regret or criticism.',
        'I can use could have / couldn\'t have to express past possibility.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Modal Perfects — Modales en pasado</h3>
        <p>Modal + <strong>have</strong> + past participle. Se usan para deducción, posibilidad y arrepentimiento sobre el pasado.</p>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#B45309;background:#FFFBEB">
            <strong style="color:#78350F">Must have</strong>
            <small>
              Deducción segura / lógica en el pasado:<br>
              "She isn't here. She <b>must have left</b> already."<br>
              "They look tired. They <b>must have worked</b> all night."
            </small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Should have / Shouldn't have</strong>
            <small>
              Arrepentimiento o crítica sobre el pasado:<br>
              "I <b>should have studied</b> more." (pero no lo hice)<br>
              "You <b>shouldn't have said</b> that." (fue un error)
            </small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Could have / Couldn't have</strong>
            <small>
              Posibilidad no realizada / imposibilidad:<br>
              "I <b>could have won</b> but I was too nervous."<br>
              "She <b>couldn't have done</b> it alone — it was too heavy."
            </small>
          </div>
        </div>
        <div class="example-block">
          <div class="ex-row"><div class="ex-en">The keys aren't here. I <u>must have left</u> them at the office.</div><div class="ex-es">Debo haberlos dejado en la oficina. (deducción lógica)</div></div>
          <div class="ex-row"><div class="ex-en">You <u>should have called</u> me. I was worried.</div><div class="ex-es">Deberías haberme llamado.</div></div>
        </div>`,
      exercises: [
        {type:'choice', q:'She isn\'t here. She ___ already left.',opts:['must have','should have','could have'],a:'must have',exp:'Deducción lógica en el pasado: must have + left.'},
        {type:'choice', q:'You ___ told me you were coming! I would have cooked dinner.',opts:['must have','should have','couldn\'t have'],a:'should have',exp:'Reproche / arrepentimiento: should have told.'},
        {type:'write', q:'Complete: He looks exhausted. He ___ (work) all weekend.',a:'must have worked',exp:'Deducción: must have + worked.'},
        {type:'write', q:'Complete: I ___ (not / eat) so much cake. I feel sick.',a:'shouldn\'t have eaten',exp:'Arrepentimiento: shouldn\'t have + eaten.'},
        {type:'choice', q:'She ___ finished the project alone — it was far too complex.',opts:['must have','couldn\'t have','should have'],a:'couldn\'t have',exp:'Imposibilidad lógica en el pasado: couldn\'t have.'},
        {type:'order', q:'Ordena la frase:', words:['passed','She','if','studied.','could','have','she','had'], a:'She could have passed if she had studied.',exp:'Could have + past participle para posibilidad no realizada.'},
        {type:'write', q:'Complete: You ___ (wear) a coat. It\'s freezing outside! (advice / criticism)',a:'should have worn',exp:'Consejo-arrepentimiento: should have + worn.'},
        {type:'choice', q:'They arrived very late. The traffic ___ terrible.',opts:['must have been','should have been','could have been'],a:'must have been',exp:'Deducción: must have been.'},
        {type:'write', q:'Complete: I ___ (call) you but I lost my phone.',a:'could have called',exp:'Posibilidad no realizada: could have + called.'},
        {type:'order', q:'Ordena la frase:', words:['have','told','truth.','should','You','the'], a:'You should have told the truth.',exp:'Reproche: should have + past participle.'},
        {type:'choice', q:'He knew the answer. He ___ helped you if you had asked.',opts:['must have','could have','should have'],a:'could have',exp:'Posibilidad disponible pero no aprovechada: could have.'},
        {type:'write', q:'Complete: The presentation ___ (be) better if we had prepared more.',a:'could have been',exp:'Posibilidad no aprovechada: could have been.'},
        {type:'choice', q:'She never makes mistakes. She ___ misunderstood the question.',opts:['must have','couldn\'t have','should have'],a:'couldn\'t have',exp:'Imposibilidad: couldn\'t have misunderstood.'},
        {type:'write', q:'Complete: He didn\'t bring an umbrella. He ___ (check) the forecast.',a:'should have checked',exp:'Arrepentimiento/crítica: should have + checked.'},
        {type:'order', q:'Ordena la frase:', words:['been','very','must','She','have','surprised.'], a:'She must have been very surprised.',exp:'Deducción: must have been + adjective.'},
        {type:'choice', q:'I can\'t find my wallet. I ___ it at the restaurant.',opts:['must have left','should have left','could leave'],a:'must have left',exp:'Deducción en pasado: must have left.'},
        {type:'write', q:'Complete: They ___ (win) the match — they were the best team!',a:'should have won',exp:'Expectativa no cumplida: should have won.'},
        {type:'choice', q:'She ___ slept through the alarm. She\'s always late.',opts:['must have','could have','should have'],a:'must have',exp:'Deducción lógica de un hecho observado.'},
        {type:'write', q:'Complete: I was at home all evening. I ___ (be) at the party.',a:'couldn\'t have been',exp:'Imposibilidad: couldn\'t have been (coartada).'},
        {type:'order', q:'Ordena la frase:', words:['taken','I','the','should','earlier','have','bus.'], a:'I should have taken the bus earlier.',exp:'Arrepentimiento: should have + taken.'}
      ],
      communicativeTask: {
        title: 'Crimes and mysteries',
        instruction: 'Read or invent a short mystery. Write 8 sentences using must have, could have and couldn\'t have to deduce what happened.',
        output: 'Written detective analysis or spoken deductions (90 seconds).'
      }
    },

    // ------------------------------------------------------------------ //
    //  8. CONNECTORS & DISCOURSE MARKERS B1                               //
    // ------------------------------------------------------------------ //
    connectors_b1: {
      id: 'connectors_b1', level: 'B1', title: 'Connectors & Discourse Markers', icon: 'git-merge', color: '#0891B2',
      learningGoal: 'Conectar ideas con cohesión usando contraste, causa-efecto, adición, concesión y consecuencia.',
      canDo: [
        'I can use however, although, despite, in spite of, nevertheless to express contrast.',
        'I can use therefore, as a result, consequently for cause and effect.',
        'I can use furthermore, in addition, moreover to add information.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Connectors & Discourse Markers — B1</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#0891B2;background:#ECFEFF">
            <strong style="color:#164E63">Contraste / Concesión</strong>
            <small>
              <b>although / even though</b> + clause<br>
              "Although it rained, we enjoyed the trip."<br>
              <b>however / nevertheless</b> (inicio de oración)<br>
              "It rained. However, we enjoyed it."<br>
              <b>despite / in spite of</b> + noun / -ing<br>
              "Despite the rain, we had fun."
            </small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Causa y resultado</strong>
            <small>
              <b>because / since / as</b> + clause<br>
              "She left early because she was tired."<br>
              <b>therefore / as a result / consequently</b><br>
              "He didn't study. As a result, he failed."<br>
              <b>due to / owing to</b> + noun<br>
              "Due to the storm, the flight was cancelled."
            </small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Adición</strong>
            <small>
              <b>furthermore / moreover / in addition</b><br>
              "The hotel was expensive. Furthermore, the service was poor."<br>
              <b>not only… but also</b><br>
              "She speaks not only French but also Arabic."
            </small>
          </div>
        </div>
        <div class="tip-callout"><i data-lucide="alert-circle"></i>
          <span><strong>Despite / In spite of</strong> van seguidos de noun o -ing, NO de clause: "Despite <em>being tired</em>" ✓ · "Despite <em>she was tired</em>" ✗</span>
        </div>`,
      exercises: [
        {type:'choice', q:'___ it was raining heavily, the match continued.',opts:['Despite','Although','However'],a:'Although',exp:'"Although" introduce una cláusula completa (it was raining).'},
        {type:'choice', q:'The project was expensive. ___, the board approved it.',opts:['Although','Despite','Nevertheless'],a:'Nevertheless',exp:'"Nevertheless" conecta dos oraciones independientes indicando contraste.'},
        {type:'write', q:'Join: "She was tired. She finished the report." → ___ being tired, she finished the report.',a:'Despite',exp:'"Despite" + gerund para contraste.'},
        {type:'write', q:'Complete: He didn\'t prepare for the interview. ___, he got the job.',a:'Nevertheless',exp:'"Nevertheless" = a pesar de eso → contraste entre oraciones.'},
        {type:'choice', q:'___ the bad weather, we had a great time.',opts:['Although','In spite of','However'],a:'In spite of',exp:'"In spite of" + noun phrase (the bad weather).'},
        {type:'order', q:'Ordena la frase:', words:['result,','failed.','didn\'t','study.','he','a','he','As','He'], a:'He didn\'t study. As a result, he failed.',exp:'"As a result" introduce consecuencia entre dos oraciones.'},
        {type:'write', q:'Complete: The price has increased ___ rising production costs.',a:'due to',exp:'"Due to" + noun phrase para causa formal.'},
        {type:'choice', q:'She works hard. ___, she deserves the promotion.',opts:['Despite','Therefore','Although'],a:'Therefore',exp:'"Therefore" = por lo tanto → consecuencia lógica.'},
        {type:'write', q:'Join with "not only... but also": "He speaks French. He speaks Arabic." → He speaks ___.',a:'not only French but also Arabic',exp:'"Not only... but also" para doble adición.'},
        {type:'order', q:'Ordena la frase:', words:['Moreover,','is','this','healthy.','it','cheap','and'], a:'Moreover, it is cheap and healthy.',exp:'"Moreover" añade información adicional de refuerzo.'},
        {type:'choice', q:'___ the long queue, she waited patiently.',opts:['Although','Despite','However'],a:'Despite',exp:'"Despite" + noun phrase (the long queue).'},
        {type:'write', q:'Complete: Traffic was terrible; ___, I arrived on time.',a:'however',exp:'"However" introduce contraste entre dos oraciones independientes.'},
        {type:'choice', q:'He failed the test ___ studying for months.',opts:['although','despite','however'],a:'despite',exp:'"Despite" + gerund (studying).'},
        {type:'write', q:'Complete: The new medicine is effective. ___, it has some side effects.',a:'However',exp:'"However" para contraste después de punto.'},
        {type:'order', q:'Ordena la frase:', words:['addition,','the','In','plan','saves','time.','new'], a:'In addition, the new plan saves time.',exp:'"In addition" para añadir información relevante.'},
        {type:'choice', q:'___ to the high demand, the prices have risen significantly.',opts:['Although','Due','Despite'],a:'Due',exp:'"Due to" + noun = causa formal de un resultado.'},
        {type:'write', q:'Complete: She is qualified for the job. ___, she has years of experience.',a:'Furthermore',exp:'"Furthermore" refuerza con información adicional.'},
        {type:'choice', q:'He was offered a promotion. ___, he turned it down.',opts:['Moreover','Consequently','Nevertheless'],a:'Nevertheless',exp:'"Nevertheless" = a pesar de ello → contraste inesperado.'},
        {type:'write', q:'Complete: ___ even though it was expensive, they bought the house.',a:'Even though',exp:'"Even though" = a pesar de que + cláusula completa.'},
        {type:'order', q:'Ordena la frase:', words:['study.','Consequently,','failed','didn\'t','he','he','the','test.'], a:'He didn\'t study. Consequently, he failed the test.',exp:'"Consequently" indica resultado directo de la causa.'}
      ],
      communicativeTask: {
        title: 'For and against essay',
        instruction: 'Write a short essay (8–10 sentences) about a controversial topic (social media, remote work, etc.). Use at least 6 different connectors from today\'s lesson.',
        output: 'Written essay or structured speech (2 minutes).'
      }
    },

    // ------------------------------------------------------------------ //
    //  9. GERUNDS VS INFINITIVES (ADVANCED)                               //
    // ------------------------------------------------------------------ //
    gerunds_infinitives: {
      id: 'gerunds_infinitives', level: 'B1', title: 'Gerunds vs Infinitives', icon: 'type', color: '#16A34A',
      learningGoal: 'Elegir entre gerundio e infinitivo después de verbos, adjetivos y expresiones comunes.',
      canDo: [
        'I can use gerunds after verbs like enjoy, avoid, suggest, consider.',
        'I can use infinitives after verbs like want, decide, agree, manage, hope.',
        'I can recognize verbs that change meaning with gerund vs infinitive (stop, remember, try).'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Gerunds vs Infinitives — Nivel B1</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#16A34A;background:#F0FDF4">
            <strong style="color:#14532D">Verbos + Gerundio (-ing)</strong>
            <small>
              enjoy · avoid · consider · suggest · mind · finish · deny · admit · keep · imagine · miss · can't stand<br>
              "I <b>enjoy swimming</b>." · "She <b>admitted stealing</b> it."<br>
              "He <b>suggested going</b> to the cinema."
            </small>
          </div>
          <div class="t-box" style="border-color:#2563EB;background:#EFF6FF">
            <strong style="color:#1E3A8A">Verbos + Infinitivo (to + V)</strong>
            <small>
              want · need · decide · agree · manage · hope · expect · plan · offer · refuse · fail · afford · learn<br>
              "She <b>wants to leave</b>." · "He <b>managed to open</b> it."<br>
              "They <b>refused to sign</b> the contract."
            </small>
          </div>
          <div class="t-box" style="border-color:#DC2626;background:#FEF2F2">
            <strong style="color:#7F1D1D">Verbos que cambian de significado</strong>
            <small>
              <b>stop + -ing</b>: dejar de hacer algo<br>
              <b>stop + to inf.</b>: parar para hacer otra cosa<br>
              <b>remember + -ing</b>: recordar haber hecho<br>
              <b>remember + to inf.</b>: acordarse de hacer<br>
              <b>try + -ing</b>: intentar como experimento<br>
              <b>try + to inf.</b>: intentar (con dificultad)
            </small>
          </div>
        </div>`,
      exercises: [
        {type:'choice', q:'I enjoy ___ to the beach on weekends.',opts:['go','going','to go'],a:'going',exp:'"Enjoy" siempre va seguido de gerundio.'},
        {type:'choice', q:'She decided ___ a new job.',opts:['finding','to find','find'],a:'to find',exp:'"Decide" va seguido de infinitivo.'},
        {type:'write', q:'Complete: He admitted ___ (steal) the money.',a:'stealing',exp:'"Admit" + gerundio: stealing.'},
        {type:'write', q:'Complete: They managed ___ (open) the door without a key.',a:'to open',exp:'"Manage" + infinitivo: to open.'},
        {type:'choice', q:'Please stop ___ — I\'m trying to concentrate!',opts:['to talk','talking','talk'],a:'talking',exp:'"Stop + -ing" = dejar de hacer algo (talking).'},
        {type:'order', q:'Ordena la frase:', words:['going','She','the','avoided','party.','to'], a:'She avoided going to the party.',exp:'"Avoid" + gerundio.'},
        {type:'write', q:'Complete: Do you remember ___ (meet) her at the conference?',a:'meeting',exp:'"Remember + -ing" = recordar un hecho pasado.'},
        {type:'write', q:'Complete: Remember ___ (turn off) the lights before you leave!',a:'to turn off',exp:'"Remember + to inf." = acordarse de hacer algo en el futuro.'},
        {type:'choice', q:'She can\'t afford ___ a new car right now.',opts:['buying','buy','to buy'],a:'to buy',exp:'"Afford" + infinitivo: to buy.'},
        {type:'choice', q:'He suggested ___ a picnic in the park.',opts:['to have','have','having'],a:'having',exp:'"Suggest" + gerundio: having.'},
        {type:'write', q:'Complete: I tried ___ (explain) but she didn\'t understand.',a:'to explain',exp:'"Try + to inf." = intentar con dificultad.'},
        {type:'write', q:'Complete: Have you considered ___ (move) to another city?',a:'moving',exp:'"Consider" + gerundio: moving.'},
        {type:'choice', q:'She refused ___ the contract without reading it.',opts:['signing','sign','to sign'],a:'to sign',exp:'"Refuse" + infinitivo: to sign.'},
        {type:'order', q:'Ordena la frase:', words:['to','He','open','managed','window.','the'], a:'He managed to open the window.',exp:'"Manage" + infinitivo.'},
        {type:'choice', q:'They kept ___ even though it was getting late.',opts:['to talk','talking','talk'],a:'talking',exp:'"Keep" + gerundio = seguir haciendo algo.'},
        {type:'write', q:'Complete: I don\'t mind ___ (wait) if you need more time.',a:'waiting',exp:'"Mind" + gerundio: waiting.'},
        {type:'choice', q:'She stopped ___ at the shop to buy some water.',opts:['to stop','stopping','to buy'],a:'to buy',exp:'"Stop + to inf." = parar PARA hacer otra cosa.'},
        {type:'write', q:'Complete: He denied ___ (break) the window.',a:'breaking',exp:'"Deny" + gerundio: breaking.'},
        {type:'choice', q:'We agreed ___ the meeting until Friday.',opts:['postponing','postpone','to postpone'],a:'to postpone',exp:'"Agree" + infinitivo: to postpone.'},
        {type:'order', q:'Ordena la frase:', words:['imagine','Can','living','in','you','Paris?'], a:'Can you imagine living in Paris?',exp:'"Imagine" + gerundio: living.'}
      ],
      communicativeTask: {
        title: 'My learning goals',
        instruction: 'Write 8 sentences about your English learning goals and habits using verbs from today (want to, enjoy, avoid, hope to, consider, manage to, etc.).',
        output: 'Written personal plan or 90-second speaking task.'
      }
    },

    // ------------------------------------------------------------------ //
    //  10. QUESTION TAGS                                                  //
    // ------------------------------------------------------------------ //
    question_tags: {
      id: 'question_tags', level: 'B1', title: 'Question Tags', icon: 'help-circle', color: '#6366F1',
      learningGoal: 'Formar question tags correctas para confirmar información, buscar acuerdo o expresar sorpresa.',
      canDo: [
        'I can form affirmative and negative question tags.',
        'I can use question tags with all tenses and modal verbs.',
        'I can use rising and falling intonation to convey different meanings.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Question Tags — Coletillas interrogativas</h3>
        <p>Las question tags son mini-preguntas al final de una frase para confirmar o pedir acuerdo.</p>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#6366F1;background:#EEF2FF">
            <strong style="color:#312E81">Regla básica</strong>
            <small>
              Oración afirmativa → tag negativa<br>
              "It's cold, <b>isn't it</b>?"<br>
              Oración negativa → tag afirmativa<br>
              "You don't like it, <b>do you</b>?"<br><br>
              La tag usa el <b>mismo auxiliar</b> de la oración.<br>
              Si no hay auxiliar, se usa <b>do/does/did</b>.
            </small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Ejemplos por tiempo</strong>
            <small>
              Present Simple: "She works here, <b>doesn't she</b>?"<br>
              Past Simple: "You went home, <b>didn't you</b>?"<br>
              Present Perfect: "They've finished, <b>haven't they</b>?"<br>
              Will: "It will rain, <b>won't it</b>?"<br>
              Can: "She can swim, <b>can't she</b>?"<br>
              Must: "You must go, <b>mustn't you</b>?"
            </small>
          </div>
        </div>
        <div class="tip-callout"><i data-lucide="alert-circle"></i>
          <span><strong>Casos especiales:</strong> "I am right, <b>aren't I</b>?" (no "amn't I") · "Let's go, <b>shall we</b>?" · "Don't do that, <b>will you</b>?"</span>
        </div>`,
      exercises: [
        {type:'choice', q:'It\'s a beautiful day, ___ it?',opts:['is','isn\'t','wasn\'t'],a:'isn\'t',exp:'Frase afirmativa → tag negativa con el mismo auxiliar "is".'},
        {type:'choice', q:'They don\'t speak French, ___ they?',opts:['do','don\'t','did'],a:'do',exp:'Frase negativa → tag afirmativa: "do they".'},
        {type:'write', q:'Complete: She works at the hospital, ___ she?',a:'doesn\'t',exp:'Present Simple afirmativo → tag negativa: doesn\'t she.'},
        {type:'write', q:'Complete: You haven\'t eaten yet, ___ you?',a:'have',exp:'Present Perfect negativo → tag afirmativa: have you.'},
        {type:'choice', q:'He can swim, ___ he?',opts:['can','can\'t','couldn\'t'],a:'can\'t',exp:'Afirmativo con "can" → tag negativa: can\'t he.'},
        {type:'write', q:'Complete: They went to Paris last year, ___ they?',a:'didn\'t',exp:'Past Simple afirmativo → tag negativa: didn\'t they.'},
        {type:'order', q:'Ordena la frase:', words:['isn\'t','beautiful,','it?','It\'s'], a:'It\'s beautiful, isn\'t it?',exp:'Afirmativo (is) → tag negativa (isn\'t it).'},
        {type:'choice', q:'You\'ll be there, ___ you?',opts:['will','won\'t','wouldn\'t'],a:'won\'t',exp:'"Will" afirmativo → tag negativa: won\'t you.'},
        {type:'write', q:'Complete: Let\'s go for a walk, ___ we?',a:'shall',exp:'"Let\'s" siempre lleva la tag "shall we".'},
        {type:'write', q:'Complete: I am right, ___ I?',a:'aren\'t',exp:'Especial: "I am" → tag "aren\'t I" (no "amn\'t I").'},
        {type:'choice', q:'She hasn\'t called yet, ___ she?',opts:['has','hasn\'t','hadn\'t'],a:'has',exp:'Negativo con "hasn\'t" → tag afirmativa: has she.'},
        {type:'order', q:'Ordena la frase:', words:['didn\'t','to','school,','she','She','go','did','she?'], a:'She didn\'t go to school, did she?',exp:'Negativo (didn\'t) → tag afirmativa (did she).'},
        {type:'write', q:'Complete: You must leave now, ___ you?',a:'mustn\'t',exp:'"Must" afirmativo → tag negativa: mustn\'t you.'},
        {type:'choice', q:'They\'ve already finished, ___ they?',opts:['have','haven\'t','had'],a:'haven\'t',exp:'Present Perfect afirmativo → tag negativa: haven\'t they.'},
        {type:'write', q:'Complete: Nobody called, ___ they?',a:'did',exp:'"Nobody" es negativo → tag afirmativa: did they.'},
        {type:'order', q:'Ordena la frase:', words:['you?','won\'t','come,','You\'ll'], a:'You\'ll come, won\'t you?',exp:'"Will" afirmativo → tag: won\'t you.'},
        {type:'choice', q:'Don\'t touch that, ___ you?',opts:['do','will','won\'t'],a:'will',exp:'Imperativo negativo → tag "will you".'},
        {type:'write', q:'Complete: It was a great concert, ___ it?',a:'wasn\'t',exp:'Past Simple afirmativo (was) → tag negativa: wasn\'t it.'},
        {type:'choice', q:'Everyone enjoyed the party, ___ they?',opts:['did','didn\'t','don\'t'],a:'didn\'t',exp:'"Everyone" se trata como afirmativo → tag negativa: didn\'t they.'},
        {type:'order', q:'Ordena la frase:', words:['speak','She','can\'t','can','she?','Spanish,'], a:'She can speak Spanish, can\'t she?',exp:'"Can" afirmativo → tag negativa: can\'t she.'}
      ],
      communicativeTask: {
        title: 'Getting to know you',
        instruction: 'Have a conversation or write 10 exchanges using question tags to confirm information about a classmate, friend or character. Try to use 5 different tenses.',
        output: 'Dialogue (written or recorded, 2 minutes).'
      }
    }

  }; // fin modulesDataB1


  // ============================================================
  // LEARNING PATH B1
  // ============================================================
  const grammarLearningPathB1 = [
    {
      level: 'B1',
      title: 'B1 · Intermediate',
      description: 'Narración en pasado avanzado, hipótesis, voz pasiva, discurso reportado, cohesión y modales complejos.',
      color: '#7C3AED',
      requiredScore: 80,
      homologationScore: 85,
      modules: [
        'past_perfect',
        'reported_speech',
        'passive_b1',
        'relative_clauses',
        'second_conditional',
        'wish_if_only',
        'modal_perfects',
        'connectors_b1',
        'gerunds_infinitives',
        'question_tags'
      ]
    }
  ];


  // ============================================================
  // MAPA DE COMPETENCIAS B1
  // ============================================================
  const grammarModuleCompetencyMapB1 = {
    past_perfect: {
      cefr: 'B1', skill: 'grammar',
      homologationGroup: 'b1_past_perfect',
      diagnosticTags: ['past_perfect', 'had_done', 'sequence_of_events', 'by_the_time', 'already'],
      weaknessLabel: 'Past Perfect Simple',
      evidence: 'Narra eventos pasados diferenciando cuál ocurrió primero usando had + past participle.'
    },
    reported_speech: {
      cefr: 'B1', skill: 'grammar',
      homologationGroup: 'b1_reported_speech',
      diagnosticTags: ['reported_speech', 'backshift', 'say_tell', 'reported_questions', 'time_expressions'],
      weaknessLabel: 'Reported Speech (say / tell)',
      evidence: 'Reporta declaraciones y preguntas aplicando backshift y cambios pronominales correctamente.'
    },
    passive_b1: {
      cefr: 'B1', skill: 'grammar',
      homologationGroup: 'b1_passive_voice',
      diagnosticTags: ['passive_voice', 'is_are_was_were_done', 'by_agent', 'active_to_passive'],
      weaknessLabel: 'Voz Pasiva (Present & Past Simple)',
      evidence: 'Construye oraciones pasivas en presente y pasado y elige activa/pasiva según el contexto.'
    },
    relative_clauses: {
      cefr: 'B1', skill: 'grammar',
      homologationGroup: 'b1_relative_clauses',
      diagnosticTags: ['relative_clauses', 'who_which_that_where_whose', 'defining_non_defining', 'omission'],
      weaknessLabel: 'Oraciones de relativo',
      evidence: 'Usa who/which/that/where/whose en defining y non-defining clauses correctamente.'
    },
    second_conditional: {
      cefr: 'B1', skill: 'grammar',
      homologationGroup: 'b1_second_conditional',
      diagnosticTags: ['second_conditional', 'if_past_simple_would', 'hypothetical', 'were'],
      weaknessLabel: 'Second Conditional',
      evidence: 'Expresa situaciones hipotéticas presentes con if + Past Simple + would.'
    },
    wish_if_only: {
      cefr: 'B1', skill: 'grammar',
      homologationGroup: 'b1_wish_if_only',
      diagnosticTags: ['wish', 'if_only', 'wish_past_simple', 'wish_past_perfect', 'wish_would'],
      weaknessLabel: 'Wish / If only',
      evidence: 'Expresa deseos presentes y arrepentimientos pasados con wish y if only.'
    },
    modal_perfects: {
      cefr: 'B1', skill: 'grammar',
      homologationGroup: 'b1_modal_perfects',
      diagnosticTags: ['modal_perfects', 'must_have', 'should_have', 'could_have', 'deduction_regret'],
      weaknessLabel: 'Modales perfectos (must have / should have / could have)',
      evidence: 'Deduce, critica y especula sobre el pasado con modal + have + past participle.'
    },
    connectors_b1: {
      cefr: 'B1', skill: 'grammar',
      homologationGroup: 'b1_connectors',
      diagnosticTags: ['connectors', 'although_despite', 'however_nevertheless', 'therefore_consequently', 'furthermore'],
      weaknessLabel: 'Conectores y marcadores del discurso B1',
      evidence: 'Conecta ideas con contraste, causa-efecto y adición en textos cohesivos.'
    },
    gerunds_infinitives: {
      cefr: 'B1', skill: 'grammar',
      homologationGroup: 'b1_gerunds_infinitives',
      diagnosticTags: ['gerunds', 'infinitives', 'verb_patterns', 'stop_remember_try', 'enjoy_want_decide'],
      weaknessLabel: 'Gerundios vs Infinitivos',
      evidence: 'Elige gerundio o infinitivo según el verbo principal y reconoce los que cambian de significado.'
    },
    question_tags: {
      cefr: 'B1', skill: 'grammar',
      homologationGroup: 'b1_question_tags',
      diagnosticTags: ['question_tags', 'auxiliary_tags', 'positive_negative_tags', 'special_tags'],
      weaknessLabel: 'Question Tags',
      evidence: 'Forma question tags correctas con todos los tiempos y auxiliares.'
    }
  };


  // ============================================================
  // PRERREQUISITOS B1
  // ============================================================
  const grammarPrerequisitesB1 = {
    past_perfect:        ['past_simple'],
    reported_speech:     ['past_simple', 'present_simple'],
    passive_b1:          ['past_simple', 'present_simple'],
    relative_clauses:    ['pronouns', 'present_simple'],
    second_conditional:  ['conditionals', 'past_simple'],
    wish_if_only:        ['second_conditional'],
    modal_perfects:      ['can_could', 'modals_obligation', 'past_perfect'],
    connectors_b1:       ['conditionals', 'phrasal_gerunds'],
    gerunds_infinitives: ['phrasal_gerunds', 'likes_gerunds'],
    question_tags:       ['verbs', 'present_simple', 'past_simple']
  };


  // ============================================================
  // ENRIQUECIMIENTO AUTOMÁTICO (igual que en data-grammar.js)
  // ============================================================
  function inferB1Level() { return 'B1'; }

  function getB1Sequence(moduleId) {
    const path = grammarLearningPathB1[0].modules;
    const idx  = path.indexOf(moduleId);
    return idx >= 0 ? 200 + idx : 999; // offset 200 para ir después de A1/A2
  }

  Object.keys(modulesDataB1).forEach(moduleId => {
    const mod  = modulesDataB1[moduleId];
    const meta = grammarModuleCompetencyMapB1[moduleId] || {};

    mod.id    = mod.id    || moduleId;
    mod.level = mod.level || 'B1';
    mod.skill = mod.skill || 'grammar';

    mod.routeMeta = {
      type:               'grammar',
      level:              'B1',
      sequence:           getB1Sequence(moduleId),
      requiredScore:      80,
      homologationScore:  85,
      prerequisites:      grammarPrerequisitesB1[moduleId] || [],
      estimatedMinutes:   mod.estimatedMinutes || (
        Array.isArray(mod.exercises) && mod.exercises.length >= 18 ? 40 : 30
      ),
      isRequired: true
    };

    mod.homologation = {
      canHomologate:           true,
      group:                   meta.homologationGroup || moduleId,
      minimumDiagnosticScore:  85,
      weaknessLabel:           meta.weaknessLabel || mod.title,
      evidence:                meta.evidence || mod.learningGoal || `Dominio del módulo ${mod.title}.`
    };

    mod.diagnosticTags  = meta.diagnosticTags  || [moduleId];
    mod.weaknessLabel   = meta.weaknessLabel   || mod.title;
    mod.cefrDescriptor  = mod.cefrDescriptor   || meta.evidence || mod.learningGoal || '';
  });


  // ============================================================
  // DIAGNÓSTICO GRAMATICAL B1
  // ============================================================
  const grammarDiagnosticBlueprintB1 = {
    id:          'grammar_diagnostic_b1',
    title:       'Diagnóstico de gramática B1',
    description: 'Evalúa competencias gramaticales de nivel intermedio para homologar o reforzar.',
    levels:      ['B1'],
    rules: {
      passScore:              80,
      homologationScore:      85,
      reinforcementThreshold: 75
    },
    items: [
      // past_perfect
      { id:'dg_b1_01', level:'B1', mapsTo:['past_perfect'],
        type:'choice', q:'When I arrived, the film ___ already started.',
        opts:['has','had','did'], a:1,
        exp:'Past Perfect: had + past participle para acción anterior en el pasado.' },
      { id:'dg_b1_02', level:'B1', mapsTo:['past_perfect'],
        type:'choice', q:'She ___ never seen snow before she moved to Canada.',
        opts:['has','have','had'], a:2,
        exp:'Past Perfect con "never": had never seen.' },
      // reported_speech
      { id:'dg_b1_03', level:'B1', mapsTo:['reported_speech'],
        type:'choice', q:'"I am tired." → She said she ___ tired.',
        opts:['is','was','has been'], a:1,
        exp:'Backshift: Present Simple → Past Simple en reported speech.' },
      { id:'dg_b1_04', level:'B1', mapsTo:['reported_speech'],
        type:'choice', q:'She ___ me she would call later.',
        opts:['said','told','spoke'], a:1,
        exp:'"Tell" siempre lleva objeto de persona: told me.' },
      // passive_b1
      { id:'dg_b1_05', level:'B1', mapsTo:['passive_b1'],
        type:'choice', q:'The Eiffel Tower ___ in 1889.',
        opts:['is built','was built','built'], a:1,
        exp:'Past Simple Passive: was + past participle.' },
      { id:'dg_b1_06', level:'B1', mapsTo:['passive_b1'],
        type:'choice', q:'English ___ all over the world.',
        opts:['speaks','is spoken','was spoken'], a:1,
        exp:'Present Simple Passive para verdad general.' },
      // relative_clauses
      { id:'dg_b1_07', level:'B1', mapsTo:['relative_clauses'],
        type:'choice', q:'The woman ___ lives next door is a nurse.',
        opts:['which','who','whose'], a:1,
        exp:'"Who" para personas en defining relative clause.' },
      { id:'dg_b1_08', level:'B1', mapsTo:['relative_clauses'],
        type:'choice', q:'That\'s the city ___ I was born.',
        opts:['which','when','where'], a:2,
        exp:'"Where" para lugar.' },
      // second_conditional
      { id:'dg_b1_09', level:'B1', mapsTo:['second_conditional'],
        type:'choice', q:'If I had more time, I ___ travel more.',
        opts:['will','would','can'], a:1,
        exp:'Second conditional: if + Past Simple, would + infinitive.' },
      { id:'dg_b1_10', level:'B1', mapsTo:['second_conditional'],
        type:'choice', q:'She would feel better if she ___ more sleep.',
        opts:['gets','got','would get'], a:1,
        exp:'If-clause: Past Simple (got).' },
      // wish_if_only
      { id:'dg_b1_11', level:'B1', mapsTo:['wish_if_only'],
        type:'choice', q:'I wish I ___ speak Japanese.',
        opts:['can','could','would'], a:1,
        exp:'Wish + Past Simple: could para deseo presente.' },
      { id:'dg_b1_12', level:'B1', mapsTo:['wish_if_only'],
        type:'choice', q:'She wishes she ___ to the party. It was great!',
        opts:['went','had gone','would go'], a:1,
        exp:'Arrepentimiento pasado: wish + Past Perfect (had gone).' },
      // modal_perfects
      { id:'dg_b1_13', level:'B1', mapsTo:['modal_perfects'],
        type:'choice', q:'She isn\'t here. She ___ already left.',
        opts:['must have','should have','could have'], a:0,
        exp:'Deducción lógica en el pasado: must have.' },
      { id:'dg_b1_14', level:'B1', mapsTo:['modal_perfects'],
        type:'choice', q:'You ___ told me! I would have helped you.',
        opts:['must have','should have','couldn\'t have'], a:1,
        exp:'Reproche / arrepentimiento: should have.' },
      // connectors_b1
      { id:'dg_b1_15', level:'B1', mapsTo:['connectors_b1'],
        type:'choice', q:'___ it was raining, we enjoyed the trip.',
        opts:['Despite','Although','However'], a:1,
        exp:'"Although" + cláusula completa para contraste.' },
      { id:'dg_b1_16', level:'B1', mapsTo:['connectors_b1'],
        type:'choice', q:'He didn\'t study. ___, he failed the test.',
        opts:['Although','Therefore','Despite'], a:1,
        exp:'"Therefore" indica consecuencia lógica.' },
      // gerunds_infinitives
      { id:'dg_b1_17', level:'B1', mapsTo:['gerunds_infinitives'],
        type:'choice', q:'I enjoy ___ to the beach.',
        opts:['go','going','to go'], a:1,
        exp:'"Enjoy" + gerundio.' },
      { id:'dg_b1_18', level:'B1', mapsTo:['gerunds_infinitives'],
        type:'choice', q:'She decided ___ a new job.',
        opts:['finding','to find','find'], a:1,
        exp:'"Decide" + infinitivo.' },
      // question_tags
      { id:'dg_b1_19', level:'B1', mapsTo:['question_tags'],
        type:'choice', q:'It\'s a beautiful day, ___ it?',
        opts:['is','isn\'t','wasn\'t'], a:1,
        exp:'Afirmativo → tag negativa: isn\'t it.' },
      { id:'dg_b1_20', level:'B1', mapsTo:['question_tags'],
        type:'choice', q:'They don\'t speak French, ___ they?',
        opts:['do','don\'t','did'], a:0,
        exp:'Negativo → tag afirmativa: do they.' }
    ]
  };


  // ============================================================
  // ALIASES (para resolución de IDs)
  // ============================================================
  const grammarIdAliasesB1 = {
    'b1_past_perfect':        'past_perfect',
    'b1_reported_speech':     'reported_speech',
    'b1_passive':             'passive_b1',
    'b1_relative':            'relative_clauses',
    'b1_second_cond':         'second_conditional',
    'b1_wish':                'wish_if_only',
    'b1_modals':              'modal_perfects',
    'b1_connectors':          'connectors_b1',
    'b1_gerunds':             'gerunds_infinitives',
    'b1_question_tags':       'question_tags'
  };


  // ============================================================
  // CONFIGURACIÓN CENTRAL
  // ============================================================
  const grammarRouteConfigB1 = {
    type:                   'grammar',
    source:                 'modulesDataB1',
    version:                '1.0',
    requiredScore:          80,
    homologationScore:      85,
    reinforcementThreshold: 75,
    path:                   grammarLearningPathB1,
    aliases:                grammarIdAliasesB1,
    competencies:           grammarModuleCompetencyMapB1,
    prerequisites:          grammarPrerequisitesB1,
    diagnostic:             grammarDiagnosticBlueprintB1
  };


  // ============================================================
  // EXPORTACIÓN — Navegador
  // ============================================================
  if (typeof window !== 'undefined') {
    // Fusionar módulos B1 en el objeto global modulesData (A1/A2)
    // para que app.js los encuentre sin cambios en getModulesData().
    if (window.modulesData) {
      Object.assign(window.modulesData, modulesDataB1);
    } else {
      window.modulesData = modulesDataB1;
    }

    // Extender la ruta de aprendizaje global
    if (Array.isArray(window.grammarLearningPath)) {
      const alreadyAdded = window.grammarLearningPath.some(l => l.level === 'B1');
      if (!alreadyAdded) {
        window.grammarLearningPath.push(...grammarLearningPathB1);
      }
    } else {
      window.grammarLearningPath = grammarLearningPathB1;
    }

    // Fusionar competency map y prerequisites
    if (window.grammarModuleCompetencyMap) {
      Object.assign(window.grammarModuleCompetencyMap, grammarModuleCompetencyMapB1);
    }
    if (window.grammarPrerequisites) {
      Object.assign(window.grammarPrerequisites, grammarPrerequisitesB1);
    }
    if (window.grammarIdAliases) {
      Object.assign(window.grammarIdAliases, grammarIdAliasesB1);
    }

    // Exponer blueprint B1 (data-reading-writing.js lo recoge en DOMContentLoaded)
    window.grammarDiagnosticBlueprintB1 = grammarDiagnosticBlueprintB1;
    window.grammarRouteConfigB1         = grammarRouteConfigB1;
    window.modulesDataB1                = modulesDataB1;
    window.grammarLearningPathB1        = grammarLearningPathB1;
    window.grammarModuleCompetencyMapB1 = grammarModuleCompetencyMapB1;
    window.grammarPrerequisitesB1       = grammarPrerequisitesB1;
  }

  // Exportación Node.js (tests)
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      modulesDataB1,
      grammarLearningPathB1,
      grammarIdAliasesB1,
      grammarModuleCompetencyMapB1,
      grammarPrerequisitesB1,
      grammarDiagnosticBlueprintB1,
      grammarRouteConfigB1
    };
  }

}()); // fin IIFE
