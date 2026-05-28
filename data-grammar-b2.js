// data-grammar-b2.js v1.0 — LEOENGLISH · MÓDULOS DE GRAMÁTICA B2 (Upper-Intermediate)
// Marco Común Europeo de Referencia (MCER) — Nivel B2
// Estructura idéntica a data-grammar-b1.js para integración transparente con app.js v5.0
// Requiere: data-grammar.js y data-grammar-b1.js cargados antes
// Añadir en index.html: <script src="data-grammar-b2.js"></script> DESPUÉS de data-grammar-b1.js

// ============================================================
// MÓDULOS B2 — 10 temas del MCER Upper-Intermediate
// ============================================================
// 1.  perfect_tenses_b2     — All Perfect Tenses (review + Present Perfect Continuous)
// 2.  third_conditional     — Third Conditional & Mixed Conditionals
// 3.  inversion_b2          — Inversion (Never have I / Not only / Hardly)
// 4.  cleft_sentences       — Cleft Sentences (It is… that / What I need is…)
// 5.  advanced_passives     — Advanced Passives (Perfect, Continuous, Modal)
// 6.  discourse_markers_b2  — Discourse Markers B2 (hedging, stance, cohesion)
// 7.  hypothetical_language — Hypothetical Language (It's time / I'd rather / Suppose)
// 8.  participle_clauses    — Participle Clauses (Having done / Knowing this…)
// 9.  emphasis_devices      — Emphasis Devices (do/does/did, so/such, what a…)
// 10. complex_questions     — Complex Question Forms (indirect, negative, embedded)
// ============================================================

(function () {
  'use strict';

  const _stages   = typeof globalDidacticStages !== 'undefined' ? globalDidacticStages : [];
  const _method   = typeof globalMethodology    !== 'undefined' ? globalMethodology    : {};
  const _assess   = typeof globalAssessment     !== 'undefined' ? globalAssessment     : {};
  const _progress = typeof defaultProgression   !== 'undefined' ? defaultProgression   : {};

  // ============================================================
  // BASE DE DATOS DE MÓDULOS B2
  // ============================================================
  const modulesDataB2 = {

    // ------------------------------------------------------------------ //
    //  1. ALL PERFECT TENSES (B2 REVIEW + PRES. PERFECT CONTINUOUS)      //
    // ------------------------------------------------------------------ //
    perfect_tenses_b2: {
      id: 'perfect_tenses_b2', level: 'B2', title: 'All Perfect Tenses', icon: 'layers', color: '#0891B2',
      learningGoal: 'Dominar todos los tiempos perfectos y elegir el correcto según el contexto.',
      canDo: [
        'I can use Present Perfect Simple vs Continuous to contrast completion and duration.',
        'I can use Past Perfect Continuous for ongoing actions before a past moment.',
        'I can use Future Perfect to talk about completion before a future point.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>All Perfect Tenses — Panorama completo</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#0891B2;background:#ECFEFF">
            <strong style="color:#164E63">Present Perfect Simple vs Continuous</strong>
            <small>
              <b>Simple</b> → resultado / cantidad / estados:<br>
              "I <b>have written</b> three emails." (resultado)<br>
              "She <b>has known</b> him for years." (estado)<br><br>
              <b>Continuous</b> → duración / actividad en progreso:<br>
              "I <b>have been writing</b> since 9am." (duración)<br>
              "You look tired — <b>have you been running</b>?"
            </small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Past Perfect Continuous</strong>
            <small>
              had been + -ing → duración de acción antes de un momento pasado:<br>
              "She was exhausted because she <b>had been working</b> all day."<br>
              "It <b>had been raining</b> for hours when we arrived."
            </small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Future Perfect (Simple & Continuous)</strong>
            <small>
              <b>will have + p.p.</b> → completado antes de un punto futuro:<br>
              "By 2030, she <b>will have graduated</b>."<br>
              <b>will have been + -ing</b> → duración hasta ese punto:<br>
              "By June, I <b>will have been studying</b> here for two years."
            </small>
          </div>
        </div>
        <div class="tip-callout"><i data-lucide="alert-circle"></i>
          <span><strong>Verbos de estado</strong> (know, like, believe, have, contain) no se usan en continuous: "I have known her" ✓ · "I have been knowing her" ✗</span>
        </div>`,
      exercises: [
        {type:'choice', q:'I ___ three emails this morning. (resultado)',opts:['have written','have been writing','had written'],a:'have written',exp:'Resultado concreto (tres emails) → Present Perfect Simple.'},
        {type:'choice', q:'You look tired. ___ you ___ running?',opts:['Have / been','Did / run','Had / been'],a:'Have / been',exp:'Evidencia presente de actividad reciente → Present Perfect Continuous.'},
        {type:'write', q:'Complete: She was exhausted because she ___ (work) all day.',a:'had been working',exp:'Duración hasta momento pasado → Past Perfect Continuous.'},
        {type:'write', q:'Complete: By this time tomorrow, I ___ (finish) the report.',a:'will have finished',exp:'Completado antes de punto futuro → Future Perfect Simple.'},
        {type:'choice', q:'He ___ here for ten years next June.',opts:['will have worked','will be working','has worked'],a:'will have worked',exp:'Duración acumulada hasta punto futuro → Future Perfect.'},
        {type:'choice', q:'I ___ three coffees today — no more!',opts:['have been drinking','have drunk','had drunk'],a:'have drunk',exp:'Cantidad concreta hoy → Present Perfect Simple.'},
        {type:'write', q:'Complete: It ___ (rain) for hours before the storm finally stopped.',a:'had been raining',exp:'Duración en el pasado antes de otro evento → Past Perfect Continuous.'},
        {type:'write', q:'Complete: By 2030, scientists ___ (discover) a cure for many diseases.',a:'will have discovered',exp:'Future Perfect para logro antes de punto futuro.'},
        {type:'choice', q:'She looks exhausted. She ___ all night.',opts:['has been studying','has studied','had studied'],a:'has been studying',exp:'Evidencia presente de duración reciente → Present Perfect Continuous.'},
        {type:'order', q:'Ordena la frase:', words:['been','they','long','have','How','waiting?'], a:'How long have they been waiting?',exp:'Pregunta con Present Perfect Continuous: How long have + subject + been + -ing?'},
        {type:'choice', q:'I ___ him for years — we were at school together.',opts:['have known','have been knowing','had known'],a:'have known',exp:'Estado → nunca en continuous: have known.'},
        {type:'write', q:'Complete: She had ___ (work) at the firm for 20 years before she retired.',a:'been working',exp:'Past Perfect Continuous: had been + -ing.'},
        {type:'choice', q:'By the time you read this, I ___ already ___.',opts:['will have / left','will / leave','am / leaving'],a:'will have / left',exp:'Future Perfect para acción completada antes de punto futuro.'},
        {type:'write', q:'Complete: They ___ (live) here for six months. (duración hasta ahora)',a:'have been living',exp:'Duración hasta el presente sin resultado → Present Perfect Continuous.'},
        {type:'choice', q:'She ___ the dishes — they\'re drying on the rack.',opts:['has been washing','has washed','had washed'],a:'has washed',exp:'Resultado visible ahora → Present Perfect Simple.'},
        {type:'order', q:'Ordena la frase:', words:['will','By','graduated.','she','have','June,'], a:'By June, she will have graduated.',exp:'Future Perfect: will have + past participle.'},
        {type:'write', q:'Complete: He was covered in paint because he ___ (paint) all morning.',a:'had been painting',exp:'Causa con duración antes de momento pasado → Past Perfect Continuous.'},
        {type:'choice', q:'How many books ___ you ___ this year?',opts:['have / read','have / been reading','did / read'],a:'have / read',exp:'Cantidad (how many) → Present Perfect Simple.'},
        {type:'write', q:'Complete: By next month, I ___ (study) English for three years.',a:'will have been studying',exp:'Future Perfect Continuous para duración acumulada hasta punto futuro.'},
        {type:'order', q:'Ordena la frase:', words:['had','They','been','hours','for','arguing','arrived.','when','we'], a:'They had been arguing for hours when we arrived.',exp:'Past Perfect Continuous: had been + -ing + for + period.'}
      ],
      communicativeTask: {
        title: 'Milestones and progress',
        instruction: 'Write 8 sentences about your life goals using all four perfect tenses: what you have done, have been doing, will have done and will have been doing by a specific future date.',
        output: 'Written paragraph or structured speech (2 minutes).'
      }
    },

    // ------------------------------------------------------------------ //
    //  2. THIRD CONDITIONAL & MIXED CONDITIONALS                          //
    // ------------------------------------------------------------------ //
    third_conditional: {
      id: 'third_conditional', level: 'B2', title: 'Third & Mixed Conditionals', icon: 'git-branch', color: '#DC2626',
      learningGoal: 'Expresar arrepentimientos sobre el pasado y mezclar tiempos en condicionales complejos.',
      canDo: [
        'I can form the third conditional to talk about unreal past situations.',
        'I can use mixed conditionals to link past and present consequences.',
        'I can use unless, provided that, as long as and other conditional linkers.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Third & Mixed Conditionals</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#DC2626;background:#FEF2F2">
            <strong style="color:#7F1D1D">Third Conditional</strong>
            <small>
              Situación irreal en el pasado:<br>
              <b>If + Past Perfect, would/could/might + have + p.p.</b><br>
              "If I <b>had studied</b>, I <b>would have passed</b>."<br>
              "If she <b>hadn't missed</b> the train, she <b>could have arrived</b> on time."
            </small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Mixed Conditionals</strong>
            <small>
              Mezclan pasado y presente:<br>
              <b>Past → Present effect:</b><br>
              "If I <b>had studied</b> medicine, I <b>would be</b> a doctor now."<br>
              <b>Present → Past effect:</b><br>
              "If I <b>weren't</b> so lazy, I <b>would have finished</b> by now."
            </small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Conditional linkers</strong>
            <small>
              <b>unless</b> = if not: "Unless you hurry, you'll be late."<br>
              <b>provided / providing (that)</b> = if: "You can go provided you finish."<br>
              <b>as long as</b> = while the condition holds<br>
              <b>on condition that</b> = formal if<br>
              <b>supposing / suppose</b> = what if
            </small>
          </div>
        </div>`,
      exercises: [
        {type:'choice', q:'If I had known, I ___ you.',opts:['would tell','would have told','had told'],a:'would have told',exp:'Third conditional: would have + past participle.'},
        {type:'choice', q:'She ___ the job if she had applied earlier.',opts:['would get','would have got','had got'],a:'would have got',exp:'Resultado pasado irreal → would have got.'},
        {type:'write', q:'Complete: If he ___ (not / miss) the bus, he ___ (arrive) on time.',a:'hadn\'t missed would have arrived',exp:'Third conditional: if + Past Perfect, would have + p.p.'},
        {type:'write', q:'Complete (mixed): If I had studied medicine, I ___ (be) a doctor now.',a:'would be',exp:'Mixed conditional: pasado → efecto presente → would + base verb.'},
        {type:'choice', q:'If I ___ so tired, I would have joined you last night.',opts:['weren\'t','hadn\'t been','wasn\'t'],a:'hadn\'t been',exp:'Mixed conditional: presente → efecto pasado → if + Past Perfect.'},
        {type:'order', q:'Ordena la frase:', words:['studied,','she','passed','had','If','have','would','the','she','exam.'], a:'If she had studied, she would have passed the exam.',exp:'Third conditional completo.'},
        {type:'write', q:'Complete: ___ you study, you will pass. (= if you don\'t study)',a:'Unless',exp:'"Unless" = if not → condición negativa.'},
        {type:'choice', q:'You can borrow my car ___ you drive carefully.',opts:['unless','provided that','supposing'],a:'provided that',exp:'"Provided that" = on the condition that.'},
        {type:'write', q:'Complete: If I ___ (be) more confident, I ___ (apply) for the promotion last year.',a:'were would have applied',exp:'Mixed: presente hipotético → consecuencia pasada irreal.'},
        {type:'choice', q:'___ she had listened, she wouldn\'t be in this mess now.',opts:['Providing','If','Unless'],a:'If',exp:'Mixed conditional con "If + Past Perfect → wouldn\'t + be" (presente).'},
        {type:'order', q:'Ordena la frase:', words:['might','come','Supposing','what','it','rained,','we','do?'], a:'Supposing it rained, what might we do?',exp:'"Supposing" introduce hipótesis como "what if".'},
        {type:'write', q:'Complete: She could ___ (become) a great pianist if she ___ (practise) more.',a:'have become had practised',exp:'Third conditional: could have become / if + had practised.'},
        {type:'choice', q:'I\'ll help you ___ you promise to return the favour.',opts:['unless','as long as','supposing'],a:'as long as',exp:'"As long as" = mientras se cumpla la condición.'},
        {type:'write', q:'Complete: If the weather ___ (be) better yesterday, we ___ (go) to the beach.',a:'had been would have gone',exp:'Third conditional completo.'},
        {type:'choice', q:'If you ___ harder, you would have got better results.',opts:['worked','had worked','have worked'],a:'had worked',exp:'Third conditional: if + Past Perfect.'},
        {type:'order', q:'Ordena la frase:', words:['now,','rich','been','If','would','I\'d','I\'d','be','saved.','have'], a:'If I\'d saved, I\'d be rich now.',exp:'Mixed conditional: pasado (had saved) → resultado presente (would be rich).'},
        {type:'write', q:'Complete: He wouldn\'t be ill now if he ___ (eat) better last year.',a:'had eaten',exp:'Mixed conditional: presente resultado → pasado causa (had eaten).'},
        {type:'choice', q:'___ that you had told me, I could have helped.',opts:['Supposing','On condition','Had'],a:'Had',exp:'Inversión en third conditional: Had you told me → formal, sin "if".'},
        {type:'write', q:'Complete: I\'ll sign the contract ___ they include the bonus clause.',a:'on condition that',exp:'"On condition that" = only if → condición formal.'},
        {type:'order', q:'Ordena la frase:', words:['have','could','she','hadn\'t','If','she','been','distracted,','won.'], a:'If she hadn\'t been distracted, she could have won.',exp:'Third conditional con "could have".'}
      ],
      communicativeTask: {
        title: 'The road not taken',
        instruction: 'Think of a decision that changed your life. Write 8 sentences using third and mixed conditionals to explore what might have happened differently.',
        output: 'Written reflection or recorded monologue (2 minutes).'
      }
    },

    // ------------------------------------------------------------------ //
    //  3. INVERSION B2                                                    //
    // ------------------------------------------------------------------ //
    inversion_b2: {
      id: 'inversion_b2', level: 'B2', title: 'Inversion', icon: 'arrow-up-down', color: '#7C3AED',
      learningGoal: 'Usar la inversión sujeto-auxiliar para dar énfasis formal y retórico en contextos escritos y orales.',
      canDo: [
        'I can invert subject and auxiliary after negative adverbials (Never, Rarely, Not only).',
        'I can use inversion in conditionals (Had I known / Were I to go).',
        'I can recognize and produce inverted structures in formal writing.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Inversion — Inversión sujeto-auxiliar</h3>
        <p>La inversión se usa en inglés formal para dar <strong>énfasis</strong> y en estructuras condicionales avanzadas.</p>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Adverbiales negativos → inversión</strong>
            <small>
              <b>Never / Rarely / Seldom</b> + aux + subject<br>
              "Never <b>have I seen</b> such courage."<br>
              <b>Not only</b> + aux + sub + <b>but also</b><br>
              "Not only <b>did she win</b>, but she also broke the record."<br>
              <b>Hardly / Scarcely / No sooner</b><br>
              "Hardly <b>had I arrived</b> when it started to rain."
            </small>
          </div>
          <div class="t-box" style="border-color:#DC2626;background:#FEF2F2">
            <strong style="color:#7F1D1D">Otras inversiones</strong>
            <small>
              <b>Only when / Only if / Only then</b><br>
              "Only then <b>did I realise</b> my mistake."<br>
              <b>Under no circumstances</b><br>
              "Under no circumstances <b>should you</b> open that door."<br>
              <b>So + adj</b><br>
              "So tired <b>was she</b> that she fell asleep immediately."
            </small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Inversión en condicionales</strong>
            <small>
              Reemplaza "if" en registros formales:<br>
              "If I had known" → "<b>Had I known</b>"<br>
              "If I were" → "<b>Were I to</b>"<br>
              "If it should happen" → "<b>Should it happen</b>"
            </small>
          </div>
        </div>`,
      exercises: [
        {type:'choice', q:'Never ___ such a beautiful landscape.',opts:['I have seen','have I seen','I saw'],a:'have I seen',exp:'Never + inversión: have I seen.'},
        {type:'choice', q:'Not only ___ the match, but she also broke the world record.',opts:['she won','did she win','she did win'],a:'did she win',exp:'Not only + did + subject + verb.'},
        {type:'write', q:'Rewrite: "I had hardly arrived when the phone rang." → Hardly ___.',a:'had I arrived when the phone rang',exp:'Hardly + Past Perfect invertido: Hardly had I arrived.'},
        {type:'write', q:'Rewrite formal: "If I had known, I would have helped." → ___ I known, I would have helped.',a:'Had',exp:'Inversión condicional: Had I known (sin "if").'},
        {type:'choice', q:'___ circumstances should you give out your password.',opts:['Under all','Under no','On no'],a:'Under no',exp:'"Under no circumstances" → inversión con should.'},
        {type:'order', q:'Ordena la frase:', words:['Seldom','such','do','dedication.','we','witness'], a:'Seldom do we witness such dedication.',exp:'Seldom + do + subject + verb.'},
        {type:'write', q:'Rewrite: "She was so tired that she fell asleep." → So tired ___.',a:'was she that she fell asleep',exp:'So + adjective + inversión: was she.'},
        {type:'choice', q:'No sooner ___ than it started to rain.',opts:['I had left','had I left','did I leave'],a:'had I left',exp:'No sooner + Past Perfect invertido: had I left.'},
        {type:'write', q:'Rewrite formal: "If it should happen again, call me." → ___ it happen again, call me.',a:'Should',exp:'Should + subject → inversión condicional formal.'},
        {type:'order', q:'Ordena la frase:', words:['did','Not','she','only','but','pass,','distinction.','with','also'], a:'Not only did she pass, but also with distinction.',exp:'Not only + did + subject + verb + but also.'},
        {type:'choice', q:'Only then ___ the extent of the damage.',opts:['we realised','did we realise','we did realise'],a:'did we realise',exp:'Only then + did + subject + verb.'},
        {type:'write', q:'Rewrite: "If she were to resign, who would replace her?" → ___ she to resign, who would replace her?',a:'Were',exp:'Were + subject + to → inversión condicional de were.'},
        {type:'choice', q:'Hardly ___ started when the fire alarm went off.',opts:['had the meeting','the meeting had','the meeting'],a:'had the meeting',exp:'Hardly + Past Perfect: had the meeting started.'},
        {type:'order', q:'Ordena la frase:', words:['I','Rarely','people','such','have','met','generous.'], a:'Rarely have I met such generous people.',exp:'Rarely + Present Perfect: have I met.'},
        {type:'write', q:'Rewrite: "We will under no circumstances accept this offer." → Under no circumstances ___.',a:'will we accept this offer',exp:'Under no circumstances + will + subject + verb.'},
        {type:'choice', q:'So ___ was the news that everyone fell silent.',opts:['shocking','shocked','shock'],a:'shocking',exp:'So + adjective → inversión: So shocking was the news.'},
        {type:'order', q:'Ordena la frase:', words:['only','when','did','Only','the','truth','she','confess.','learn'], a:'Only when she learned the truth did she confess.',exp:'Only when + clause + did + subject + verb.'},
        {type:'write', q:'Rewrite: "I had scarcely sat down when the doorbell rang." → Scarcely ___.',a:'had I sat down when the doorbell rang',exp:'Scarcely + Past Perfect invertido: had I sat down.'},
        {type:'choice', q:'Not until she arrived ___ that everything was fine.',opts:['we knew','did we know','we did know'],a:'did we know',exp:'Not until + clause + inversión: did we know.'},
        {type:'order', q:'Ordena la frase:', words:['circumstances','give','Under','should','no','up.','you'], a:'Under no circumstances should you give up.',exp:'Under no circumstances + should + subject + verb.'}
      ],
      communicativeTask: {
        title: 'Formal speech or editorial',
        instruction: 'Write a short formal text (8–10 sentences: a speech, opinion column or letter to the editor) using at least 5 different inversion structures.',
        output: 'Written formal text or recorded speech (2 minutes).'
      }
    },

    // ------------------------------------------------------------------ //
    //  4. CLEFT SENTENCES                                                 //
    // ------------------------------------------------------------------ //
    cleft_sentences: {
      id: 'cleft_sentences', level: 'B2', title: 'Cleft Sentences', icon: 'scissors', color: '#B45309',
      learningGoal: 'Usar oraciones hendidas para enfocar y enfatizar una parte específica de la información.',
      canDo: [
        'I can use "It is/was… that/who" to emphasize subject, object or adverb.',
        'I can use "What… is/was" to emphasize the predicate.',
        'I can use "The reason why / The thing that" cleft structures.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Cleft Sentences — Oraciones hendidas</h3>
        <p>Las cleft sentences dividen una oración simple en dos para <strong>destacar</strong> un elemento.</p>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#B45309;background:#FFFBEB">
            <strong style="color:#78350F">It-clefts</strong>
            <small>
              <b>It is/was + focused element + that/who + rest</b><br>
              Normal: "Shakespeare wrote Hamlet."<br>
              Cleft: "<b>It was Shakespeare</b> who wrote Hamlet." (enfoque: quién)<br>
              Cleft: "<b>It was Hamlet</b> that Shakespeare wrote." (enfoque: qué)<br>
              Cleft: "<b>It was in London</b> that they met." (enfoque: dónde)
            </small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Wh-clefts (pseudo-clefts)</strong>
            <small>
              <b>What + subject + verb + is/was + focused element</b><br>
              "What I need is a long holiday."<br>
              "What surprised me was his reaction."<br>
              "What she did was (to) apologise immediately."
            </small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Other clefts</strong>
            <small>
              <b>The reason (why)… is that</b><br>
              "The reason I called is that I need help."<br>
              <b>The thing that… is</b><br>
              "The thing that worries me is the deadline."<br>
              <b>All + subject + verb + is</b><br>
              "All I want is peace and quiet."
            </small>
          </div>
        </div>`,
      exercises: [
        {type:'choice', q:'___ Shakespeare who wrote Hamlet.',opts:['It is','It was','There was'],a:'It was',exp:'It-cleft en pasado: It was + elemento destacado + who.'},
        {type:'write', q:'Make a cleft: "I need a holiday." → What ___.',a:'What I need is a holiday',exp:'Wh-cleft: What + subject + verb + is + focused element.'},
        {type:'choice', q:'It was ___ that they first met.',opts:['Paris','in Paris','at Paris'],a:'in Paris',exp:'Cuando se enfatiza lugar, se mantiene la preposición: in Paris.'},
        {type:'write', q:'Cleft emphasizing "her attitude": "Her attitude surprised me." → What ___.',a:'What surprised me was her attitude',exp:'Wh-cleft: What surprised me was her attitude.'},
        {type:'order', q:'Ordena la frase:', words:['was','It','phone','my','lost.','I','that'], a:'It was my phone that I lost.',exp:'It-cleft: It was + objeto + that + rest.'},
        {type:'choice', q:'All ___ is your signature on this document.',opts:['I need','that needs','needs'],a:'I need',exp:'"All I need is" → restricción enfática: solo eso necesito.'},
        {type:'write', q:'Complete: ___ reason I left early was that I felt ill.',a:'The',exp:'"The reason (why)… is/was that" → cleft de causa.'},
        {type:'write', q:'Make a cleft focusing on "yesterday": "I saw him yesterday." → It was ___.',a:'It was yesterday that I saw him',exp:'It-cleft: It was yesterday (tiempo) that I saw him.'},
        {type:'choice', q:'What she did ___ apologise immediately.',opts:['is','was','were'],a:'was',exp:'Wh-cleft en pasado: What she did was apologise.'},
        {type:'order', q:'Ordena la frase:', words:['thing','worries','deadline.','The','me','the','that','is'], a:'The thing that worries me is the deadline.',exp:'"The thing that… is" → cleft de objeto.'},
        {type:'write', q:'Complete: It ___ my brother ___ told me the news, not my parents.',a:'was who',exp:'It was + sujeto + who + rest → énfasis en la persona.'},
        {type:'choice', q:'What I enjoy most ___ reading in the evening.',opts:['is','are','was'],a:'is',exp:'Wh-cleft: What I enjoy most is (presente).'},
        {type:'order', q:'Ordena la frase:', words:['want','quiet.','is','All','I','peace','and'], a:'All I want is peace and quiet.',exp:'"All I want is" → énfasis restrictivo.'},
        {type:'write', q:'Make a cleft: "He loves cooking." → What ___.',a:'What he loves is cooking',exp:'Wh-cleft: What he loves is cooking.'},
        {type:'choice', q:'It was ___ year ___ everything changed for us.',opts:['that / that','that / which','the / that'],a:'that / that',exp:'It was + year → "that" introduce tanto el sustantivo como la cláusula.'},
        {type:'write', q:'Complete: ___ thing that bothers me about the plan is the cost.',a:'The',exp:'"The thing that… is" → énfasis sobre lo que molesta.'},
        {type:'order', q:'Ordena la frase:', words:['need','rest.','What','is','I','a','good'], a:'What I need is a good rest.',exp:'Wh-cleft: What I need is + noun phrase.'},
        {type:'choice', q:'___ was in 2010 that they launched the project.',opts:['There','This','It'],a:'It',exp:'It-cleft: It was in + año + that.'},
        {type:'write', q:'Complete: The reason ___ she resigned ___ she was underpaid.',a:'why was that',exp:'"The reason why… was that" → estructura causal cleft.'},
        {type:'order', q:'Ordena la frase:', words:['said','What','shocked','he','was','everyone.'], a:'What he said shocked everyone.',exp:'Wh-cleft como sujeto de la oración principal.'}
      ],
      communicativeTask: {
        title: 'News headline analysis',
        instruction: 'Choose a recent news story and rewrite 8 sentences using different cleft structures to emphasize key information (who, what, when, where, why).',
        output: 'Written analysis or presentation (2 minutes).'
      }
    },

    // ------------------------------------------------------------------ //
    //  5. ADVANCED PASSIVES                                               //
    // ------------------------------------------------------------------ //
    advanced_passives: {
      id: 'advanced_passives', level: 'B2', title: 'Advanced Passives', icon: 'refresh-cw', color: '#059669',
      learningGoal: 'Construir pasivas con tiempos perfectos, continuos y modales en contextos formales.',
      canDo: [
        'I can form passive with Present Perfect, Past Perfect and Continuous tenses.',
        'I can use modal passives (must be done, should have been told).',
        'I can use impersonal passive with reporting verbs (It is said that / He is thought to be).'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Advanced Passives — Voz pasiva avanzada</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Pasiva con tiempos compuestos</strong>
            <small>
              Pres. Perf.: <b>has/have been + p.p.</b><br>
              "The report <b>has been submitted</b>."<br>
              Past Perf.: <b>had been + p.p.</b><br>
              "The letter <b>had been sent</b> before she arrived."<br>
              Continuous: <b>is/was being + p.p.</b><br>
              "The road <b>is being repaired</b>."
            </small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Pasiva con modales</strong>
            <small>
              Modal + be + p.p. (presente)<br>
              "This <b>must be done</b> immediately."<br>
              Modal + have been + p.p. (pasado)<br>
              "She <b>should have been told</b>."<br>
              "It <b>could have been avoided</b>."
            </small>
          </div>
          <div class="t-box" style="border-color:#DC2626;background:#FEF2F2">
            <strong style="color:#7F1D1D">Pasiva impersonal</strong>
            <small>
              <b>It is/was + p.p. + that</b><br>
              "It <b>is believed</b> that prices will rise."<br>
              <b>Subject + is/was + p.p. + to inf.</b><br>
              "Prices <b>are expected to rise</b>."<br>
              "He <b>is said to be</b> very talented."
            </small>
          </div>
        </div>`,
      exercises: [
        {type:'choice', q:'The report ___ already ___ to the board.',opts:['has / been sent','is / being sent','was / sent'],a:'has / been sent',exp:'Present Perfect Passive: has been + past participle.'},
        {type:'write', q:'Complete: The road ___ (repair) at the moment. Please use the detour.',a:'is being repaired',exp:'Present Continuous Passive: is being + past participle.'},
        {type:'choice', q:'The letter ___ before she arrived.',opts:['had been sent','has been sent','was being sent'],a:'had been sent',exp:'Past Perfect Passive: had been + past participle.'},
        {type:'write', q:'Complete: This form ___ (must / complete) before the deadline.',a:'must be completed',exp:'Modal Passive: must be + past participle.'},
        {type:'choice', q:'It is believed ___ the economy will improve next year.',opts:['what','that','which'],a:'that',exp:'Impersonal passive: It is believed that + clause.'},
        {type:'write', q:'Rewrite: "People say he is very talented." → He ___ to be very talented.',a:'is said',exp:'Personal impersonal passive: He is said to be + adjective.'},
        {type:'order', q:'Ordena la frase:', words:['been','repaired','had','The','car','before','race.','the'], a:'The car had been repaired before the race.',exp:'Past Perfect Passive: had been + past participle.'},
        {type:'write', q:'Complete: She ___ (should / tell) about the meeting in advance.',a:'should have been told',exp:'Modal perfect passive: should have been + past participle.'},
        {type:'choice', q:'The new bridge ___ currently ___ by the city council.',opts:['is / being built','has / been built','was / being built'],a:'is / being built',exp:'Present Continuous Passive para acción en progreso ahora.'},
        {type:'write', q:'Complete: It ___ (expect) that sales will increase by 10%.',a:'is expected',exp:'Impersonal passive: It is expected that.'},
        {type:'choice', q:'The mistake ___ avoided if they had checked the data.',opts:['could be','could have been','should be'],a:'could have been',exp:'Modal perfect passive: could have been + past participle.'},
        {type:'order', q:'Ordena la frase:', words:['reported','are','increase.','Prices','to'], a:'Prices are reported to increase.',exp:'Personal impersonal passive: subject + are reported to + infinitive.'},
        {type:'write', q:'Complete: Three suspects ___ (arrest) by the police while the investigation ___ (carry out).',a:'were arrested was being carried out',exp:'Past Simple Passive + Past Continuous Passive.'},
        {type:'choice', q:'The candidates will ___ informed of the results by Friday.',opts:['be','been','being'],a:'be',exp:'Future Passive: will be + past participle.'},
        {type:'write', q:'Rewrite: "Experts think the painting is genuine." → The painting ___ to be genuine.',a:'is thought',exp:'Personal impersonal passive: is thought to be.'},
        {type:'order', q:'Ordena la frase:', words:['being','house','The','repainted.','is'], a:'The house is being repainted.',exp:'Present Continuous Passive: is being + past participle.'},
        {type:'write', q:'Complete: The documents ___ (not / sign) yet. We\'re waiting.',a:'haven\'t been signed',exp:'Present Perfect Passive negativo: haven\'t been + past participle.'},
        {type:'choice', q:'It ___ reported that the CEO has resigned.',opts:['is','was','has'],a:'is',exp:'Impersonal passive con "report": It is reported that.'},
        {type:'write', q:'Complete: All decisions ___ (must / approve) by the committee.',a:'must be approved',exp:'Modal Passive: must be + past participle.'},
        {type:'order', q:'Ordena la frase:', words:['been','has','The','project','delayed','again.'], a:'The project has been delayed again.',exp:'Present Perfect Passive: has been + past participle.'}
      ],
      communicativeTask: {
        title: 'Press release',
        instruction: 'Write a formal press release (8–10 sentences) about a fictional company announcement. Use at least 5 different passive structures (including modal and impersonal passives).',
        output: 'Written press release or formal presentation (2 minutes).'
      }
    },

    // ------------------------------------------------------------------ //
    //  6. DISCOURSE MARKERS B2                                            //
    // ------------------------------------------------------------------ //
    discourse_markers_b2: {
      id: 'discourse_markers_b2', level: 'B2', title: 'Discourse Markers B2', icon: 'align-left', color: '#6366F1',
      learningGoal: 'Usar marcadores del discurso para expresar posición, matizar, reformular y estructurar argumentos.',
      canDo: [
        'I can use hedging language to express uncertainty or caution.',
        'I can use stance markers to signal my attitude towards information.',
        'I can structure complex arguments with advanced connectors.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Discourse Markers B2 — Marcadores avanzados</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#6366F1;background:#EEF2FF">
            <strong style="color:#312E81">Hedging (atenuación)</strong>
            <small>
              Para mostrar incertidumbre o cautela académica:<br>
              <b>It seems / appears that</b> · <b>It is likely/unlikely that</b><br>
              <b>tend to</b> · <b>in general</b> · <b>broadly speaking</b><br>
              <b>to some extent</b> · <b>arguably</b> · <b>apparently</b><br>
              "It <b>would seem</b> that prices are rising."
            </small>
          </div>
          <div class="t-box" style="border-color:#DC2626;background:#FEF2F2">
            <strong style="color:#7F1D1D">Marcadores de posición / actitud</strong>
            <small>
              <b>Admittedly</b> — concedo este punto<br>
              <b>Surprisingly / Interestingly / Notably</b><br>
              <b>In fairness</b> · <b>To be fair</b><br>
              <b>What is more</b> · <b>Above all</b><br>
              <b>As a matter of fact</b> · <b>In reality</b>
            </small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Reformulación y resumen</strong>
            <small>
              <b>In other words / That is to say</b><br>
              <b>To put it differently / Simply put</b><br>
              <b>In short / To sum up / All in all</b><br>
              <b>With this in mind / Given this</b><br>
              <b>On balance / Broadly speaking</b>
            </small>
          </div>
        </div>`,
      exercises: [
        {type:'choice', q:'___ speaking, the plan has more advantages than disadvantages.',opts:['Broad','Broadly','Broadly speaking'],a:'Broadly speaking',exp:'"Broadly speaking" como marcador introductorio de generalización.'},
        {type:'choice', q:'The results were poor. ___, the team showed great resilience.',opts:['Admittedly','In other words','Simply put'],a:'Admittedly',exp:'"Admittedly" concede un punto antes de contrargumentar.'},
        {type:'write', q:'Complete: ___ to say, the project was a complete failure.',a:'That is',exp:'"That is to say" = es decir → reformulación.'},
        {type:'write', q:'Complete: It ___ that the economy is slowly recovering.',a:'would seem',exp:'"It would seem that" → hedging formal.'},
        {type:'choice', q:'The data is unclear. ___, more research is needed.',opts:['Above all','With this in mind','In short'],a:'With this in mind',exp:'"With this in mind" conecta conclusión con lo anteriormente dicho.'},
        {type:'order', q:'Ordena la frase:', words:['speaking,','are','Broadly','correct.','results','the'], a:'Broadly speaking, the results are correct.',exp:'"Broadly speaking" → generalización con cautela.'},
        {type:'write', q:'Complete: ___ all, the most important factor is trust.',a:'Above',exp:'"Above all" → el factor más importante de todos.'},
        {type:'choice', q:'The proposal has merits. ___, it has several flaws.',opts:['In fairness','What is more','Notably'],a:'In fairness',exp:'"In fairness" introduce punto justo/objetivo que contradice el anterior.'},
        {type:'write', q:'Reformulate: "The plan will not work." → In other ___.',a:'words the plan is doomed to fail',exp:'"In other words" para reformular de forma directa.'},
        {type:'order', q:'Ordena la frase:', words:['all','balance,','On','outweigh','the','the','benefits','risks.'], a:'On balance, the benefits outweigh the risks.',exp:'"On balance" para evaluación global.'},
        {type:'choice', q:'___, very few students passed the exam.',opts:['Arguably','Notably','Interestingly'],a:'Interestingly',exp:'"Interestingly" señala un dato que llama la atención.'},
        {type:'write', q:'Complete: ___ extent, her argument is convincing.',a:'To some',exp:'"To some extent" → parcialmente de acuerdo → hedging.'},
        {type:'choice', q:'The cost is high. ___, the quality justifies the price.',opts:['To be fair','In short','Apparently'],a:'To be fair',exp:'"To be fair" introduce punto objetivo en medio de un argumento.'},
        {type:'write', q:'Complete: ___ put, the company is losing money.',a:'Simply',exp:'"Simply put" → simplificación directa de algo complejo.'},
        {type:'order', q:'Ordena la frase:', words:['in','As','fact,','are','matter','a','of','wrong.','you'], a:'As a matter of fact, you are wrong.',exp:'"As a matter of fact" → corrección de algo erróneo.'},
        {type:'choice', q:'Prices tend ___ rise in winter.',opts:['to','that','of'],a:'to',exp:'"Tend to" → generalización habitual: prices tend to rise.'},
        {type:'write', q:'Complete: ___, the experiment proved our hypothesis correct.',a:'Notably',exp:'"Notably" señala un resultado digno de atención.'},
        {type:'choice', q:'___ all, it was a successful project despite the challenges.',opts:['All in','In all','All at'],a:'All in',exp:'"All in all" → evaluación final global.'},
        {type:'write', q:'Complete: It is ___ that interest rates will increase again.',a:'likely',exp:'"It is likely that" → predicción con cautela.'},
        {type:'order', q:'Ordena la frase:', words:['mind,','in','With','carefully.','this','proceed'], a:'With this in mind, proceed carefully.',exp:'"With this in mind" → conclusión práctica de lo anterior.'}
      ],
      communicativeTask: {
        title: 'Academic essay paragraph',
        instruction: 'Write a well-structured paragraph (8–10 sentences) on a topic of your choice. Include hedging language, stance markers and at least 3 reformulation devices.',
        output: 'Written paragraph or structured monologue (2 minutes).'
      }
    },

    // ------------------------------------------------------------------ //
    //  7. HYPOTHETICAL LANGUAGE                                           //
    // ------------------------------------------------------------------ //
    hypothetical_language: {
      id: 'hypothetical_language', level: 'B2', title: 'Hypothetical Language', icon: 'help-circle', color: '#D97706',
      learningGoal: 'Usar estructuras hipotéticas avanzadas para expresar preferencias, sugerencias y conjeturas.',
      canDo: [
        'I can use "It\'s time / It\'s high time" with Past Simple.',
        'I can use "I\'d rather / I\'d sooner / I\'d prefer" for preferences.',
        'I can use "Suppose / Imagine / What if" for hypothetical scenarios.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Hypothetical Language — Lenguaje hipotético avanzado</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#D97706;background:#FFFBEB">
            <strong style="color:#78350F">It's time / It's high time</strong>
            <small>
              + Past Simple → algo que debería pasar ya:<br>
              "It's time you <b>went</b> to bed." (deberías ir)<br>
              "It's high time we <b>made</b> a decision."<br>
              + to + infinitive → en general:<br>
              "It's time <b>to leave</b>."
            </small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">I'd rather / I'd sooner / I'd prefer</strong>
            <small>
              <b>I'd rather + base verb</b> (mismo sujeto)<br>
              "I'd rather <b>stay</b> home tonight."<br>
              <b>I'd rather + subject + Past Simple</b> (otro sujeto)<br>
              "I'd rather you <b>didn't call</b> after 10pm."<br>
              <b>I'd prefer + to inf. / noun</b><br>
              "I'd prefer <b>to wait</b>."
            </small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Suppose / Imagine / What if</strong>
            <small>
              + Past Simple (hipótesis presente):<br>
              "Suppose you <b>won</b> the lottery — what would you do?"<br>
              + Past Perfect (hipótesis pasada):<br>
              "What if she <b>had known</b>? Would she have told us?"
            </small>
          </div>
        </div>
        <div class="tip-callout"><i data-lucide="alert-circle"></i>
          <span><strong>I'd sooner</strong> funciona igual que I'd rather: "I'd sooner <b>walk</b> than take the bus."</span>
        </div>`,
      exercises: [
        {type:'choice', q:'It\'s time you ___ to bed — it\'s midnight!',opts:['go','went','will go'],a:'went',exp:'"It\'s time + subject + Past Simple" → algo que debería pasar ya.'},
        {type:'choice', q:'I\'d rather ___ at home tonight, if you don\'t mind.',opts:['stay','stayed','to stay'],a:'stay',exp:'"I\'d rather + base verb" (mismo sujeto).'},
        {type:'write', q:'Complete: I\'d rather you ___ (not / call) me before 9am.',a:'didn\'t call',exp:'"I\'d rather + subject + Past Simple" (otro sujeto → negativo).'},
        {type:'write', q:'Complete: It\'s high time the government ___ (take) action on climate change.',a:'took',exp:'"It\'s high time + Past Simple" para urgencia.'},
        {type:'choice', q:'Suppose you ___ a million dollars — what would you do first?',opts:['win','won','had won'],a:'won',exp:'"Suppose + Past Simple" para hipótesis presente.'},
        {type:'order', q:'Ordena la frase:', words:['you','I\'d','didn\'t','rather','smoke','here.'], a:'I\'d rather you didn\'t smoke here.',exp:'"I\'d rather + subject + Past Simple" para preferencia sobre otra persona.'},
        {type:'write', q:'Complete: What if she ___ (know) the truth earlier? Would things be different?',a:'had known',exp:'"What if + Past Perfect" para hipótesis pasada.'},
        {type:'choice', q:'I\'d prefer ___ the meeting until next week.',opts:['postpone','postponing','to postpone'],a:'to postpone',exp:'"I\'d prefer + to + infinitive".'},
        {type:'write', q:'Complete: ___ he had accepted the offer, he would be rich by now.',a:'Suppose',exp:'"Suppose + Past Perfect" para hipótesis pasada con consecuencia presente.'},
        {type:'order', q:'Ordena la frase:', words:['she','It\'s','made','high','time','a','decision.'], a:'It\'s high time she made a decision.',exp:'"It\'s high time + subject + Past Simple".'},
        {type:'choice', q:'I\'d sooner ___ than work with him again.',opts:['resign','resigned','to resign'],a:'resign',exp:'"I\'d sooner + base verb" (mismo sujeto, misma regla que I\'d rather).'},
        {type:'write', q:'Complete: Imagine ___ (live) in the 18th century. What would be different?',a:'living',exp:'"Imagine + -ing" para invitar a visualizar hipótesis.'},
        {type:'choice', q:'It\'s time ___ a decision — we can\'t wait any longer.',opts:['make','to make','making'],a:'to make',exp:'"It\'s time + to + infinitive" (sin sujeto explícito).'},
        {type:'order', q:'Ordena la frase:', words:['I\'d','coffee','rather','tea.','have','than'], a:'I\'d rather have coffee than tea.',exp:'"I\'d rather + verb + than + verb".'},
        {type:'write', q:'Complete: I\'d rather ___ (she / not / know) about this yet.',a:'she didn\'t know',exp:'"I\'d rather + subject + Past Simple negativo".'},
        {type:'choice', q:'What if we ___ the deadline tomorrow instead of Friday?',opts:['move','moved','had moved'],a:'moved',exp:'"What if + Past Simple" → sugerencia hipotética presente.'},
        {type:'write', q:'Complete: It\'s about time you ___ (apologise) to her.',a:'apologised',exp:'"It\'s about time + Past Simple" → urgencia ligeramente más suave que "high time".'},
        {type:'order', q:'Ordena la frase:', words:['prefer','early.','I\'d','to','leave'], a:'I\'d prefer to leave early.',exp:'"I\'d prefer + to + infinitive".'},
        {type:'choice', q:'Suppose ___ you could go back in time — where would you go?',opts:['that','what','if'],a:'that',exp:'"Suppose that + Past Simple" para hipótesis más formal.'},
        {type:'write', q:'Complete: I\'d sooner ___ (walk) than take a taxi — it\'s not far.',a:'walk',exp:'"I\'d sooner + base verb" sin "to".'}
      ],
      communicativeTask: {
        title: 'The perfect world debate',
        instruction: 'Write 8–10 sentences about what you would change in the world or in your life. Use at least 4 different hypothetical structures from today\'s lesson.',
        output: 'Written paragraph or debate speech (2 minutes).'
      }
    },

    // ------------------------------------------------------------------ //
    //  8. PARTICIPLE CLAUSES                                              //
    // ------------------------------------------------------------------ //
    participle_clauses: {
      id: 'participle_clauses', level: 'B2', title: 'Participle Clauses', icon: 'feather', color: '#0891B2',
      learningGoal: 'Usar cláusulas de participio para condensar información y mejorar la fluidez del texto.',
      canDo: [
        'I can use present participle clauses to replace time, reason and result clauses.',
        'I can use past participle clauses to express passive meaning concisely.',
        'I can use perfect participle clauses (having done) for sequences.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Participle Clauses — Cláusulas de participio</h3>
        <p>Condensan cláusulas subordinadas en estructuras más breves y formales.</p>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#0891B2;background:#ECFEFF">
            <strong style="color:#164E63">Present Participle (-ing)</strong>
            <small>
              Reemplaza: time / reason / result clauses<br>
              "Knowing the answer, she raised her hand." (= because she knew)<br>
              "Entering the room, he saw a stranger." (= when he entered)<br>
              "She slipped, falling to the ground." (= and fell)
            </small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Past Participle (p.p.)</strong>
            <small>
              Sentido pasivo condensado:<br>
              "Built in 1889, the tower is iconic." (= which was built)<br>
              "Seen from above, the city looks beautiful." (= when it is seen)<br>
              "Written in haste, the report had many errors."
            </small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Perfect Participle (having + p.p.)</strong>
            <small>
              Acción completada ANTES que la principal:<br>
              "<b>Having finished</b> her work, she left the office."<br>
              "<b>Having been told</b> the news, he sat down quietly."<br>
              "Not having slept, he was exhausted."
            </small>
          </div>
        </div>
        <div class="tip-callout"><i data-lucide="alert-circle"></i>
          <span><strong>Cuidado:</strong> El sujeto del participio y el de la oración principal deben ser el mismo: "Walking home, it started to rain." ✗ (el sujeto de rain no puede ser el mismo que el de walk)</span>
        </div>`,
      exercises: [
        {type:'choice', q:'___ the answer, she raised her hand immediately.',opts:['Knowing','Known','Having know'],a:'Knowing',exp:'Present participle para cause: porque sabía la respuesta.'},
        {type:'write', q:'Rewrite: "Because he was tired, he went to bed early." → ___ tired, he went to bed early.',a:'Being',exp:'"Being tired" = present participle para razón.'},
        {type:'choice', q:'___ in 1889, the Eiffel Tower is one of the most famous landmarks.',opts:['Building','Built','Having built'],a:'Built',exp:'Past participle para pasiva condensada: Built in 1889.'},
        {type:'write', q:'Rewrite: "After she had finished her work, she left." → ___ her work, she left.',a:'Having finished',exp:'"Having finished" = perfect participle para secuencia.'},
        {type:'choice', q:'___ from above, the city looks completely different.',opts:['Seeing','Seen','Having seen'],a:'Seen',exp:'Past participle pasivo: Seen from above (= when seen).'},
        {type:'order', q:'Ordena la frase:', words:['Having','finished','she','the','project,','a','took','break.'], a:'Having finished the project, she took a break.',exp:'Perfect participle: acción completada antes de la principal.'},
        {type:'write', q:'Rewrite: "When he entered the room, he saw a stranger." → ___ the room, he saw a stranger.',a:'Entering',exp:'"Entering" = present participle para cláusula temporal.'},
        {type:'choice', q:'___ all the evidence, the jury reached a verdict.',opts:['Considered','Considering','Having considered'],a:'Having considered',exp:'"Having considered" → acción completada antes del veredicto.'},
        {type:'write', q:'Rewrite: "Written in a hurry, the report contained many errors." → The report, ___ in a hurry, contained many errors.',a:'written',exp:'Past participle en posición media: the report, written in a hurry.'},
        {type:'order', q:'Ordena la frase:', words:['Not','he','slept,','having','was','exhausted.'], a:'Not having slept, he was exhausted.',exp:'Perfect participle negativo: Not having + past participle.'},
        {type:'choice', q:'___ the bad news, she burst into tears.',opts:['Hearing','Heard','Having hear'],a:'Hearing',exp:'"Hearing" = present participle para acción inmediata (cuando oyó).'},
        {type:'write', q:'Complete: ___ (train) for months, she was ready for the marathon.',a:'Having trained',exp:'Perfect participle para preparación previa: Having trained.'},
        {type:'choice', q:'The package, ___ to the wrong address, arrived three days late.',opts:['sending','sent','having sent'],a:'sent',exp:'Past participle pasivo dentro de oración: sent to the wrong address.'},
        {type:'order', q:'Ordena la frase:', words:['slipped','on','the','ice,','Stepping','he','his','broke','ankle.'], a:'Stepping on the ice, he broke his ankle.',exp:'Present participle para causa-resultado: al pisar el hielo.'},
        {type:'write', q:'Rewrite: "Because she had never been to Paris before, she was excited." → Never ___ to Paris, she was excited.',a:'having been',exp:'"Never having been" → perfect participle negativo.'},
        {type:'choice', q:'___ about the delay, the passengers grew increasingly frustrated.',opts:['Not knowing','Unknown','Not known'],a:'Not knowing',exp:'"Not knowing" = present participle negativo para causa.'},
        {type:'write', q:'Complete: ___ (see) the danger, they ran in the opposite direction.',a:'Seeing',exp:'"Seeing" = present participle: al ver el peligro.'},
        {type:'order', q:'Ordena la frase:', words:['translated','into','Being','thirty','languages,','worldwide.','it\'s','known'], a:'Being translated into thirty languages, it\'s known worldwide.',exp:'"Being translated" = present participle pasivo.'},
        {type:'choice', q:'___ the problem early, they managed to fix it before the deadline.',opts:['Identifying','Identified','Having identified'],a:'Having identified',exp:'"Having identified" → acción completada que permite la siguiente.'},
        {type:'write', q:'Rewrite: "As it was painted white, the room looked bigger." → ___ white, the room looked bigger.',a:'Painted',exp:'Past participle pasivo al inicio: Painted white (= having been painted).'}
      ],
      communicativeTask: {
        title: 'Travel writing',
        instruction: 'Write a travel journal entry of 8–10 sentences about a real or imagined trip. Use present, past and perfect participle clauses to make your writing more vivid and concise.',
        output: 'Written journal entry or spoken narrative (2 minutes).'
      }
    },

    // ------------------------------------------------------------------ //
    //  9. EMPHASIS DEVICES                                                //
    // ------------------------------------------------------------------ //
    emphasis_devices: {
      id: 'emphasis_devices', level: 'B2', title: 'Emphasis Devices', icon: 'zap', color: '#DC2626',
      learningGoal: 'Usar recursos de énfasis para reforzar, intensificar y dar fuerza expresiva al discurso.',
      canDo: [
        'I can use do/does/did for emphatic affirmation.',
        'I can use so/such and what/what a for exclamation.',
        'I can use repetition, fronting and all-clefts for emphasis.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Emphasis Devices — Recursos de énfasis</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#DC2626;background:#FEF2F2">
            <strong style="color:#7F1D1D">Do / Does / Did emphático</strong>
            <small>
              Añade énfasis a afirmaciones:<br>
              "I <b>do</b> like coffee!" (sí me gusta, de verdad)<br>
              "She <b>does</b> work hard." (trabaja muchísimo)<br>
              "He <b>did</b> apologise — I heard him."<br>
              También para contradecir: "You never help." → "I <b>did</b> help!"
            </small>
          </div>
          <div class="t-box" style="border-color:#D97706;background:#FFFBEB">
            <strong style="color:#78350F">So / Such / What a</strong>
            <small>
              <b>so + adjective/adverb:</b> "It was <b>so</b> hot!"<br>
              <b>such (a) + (adj) noun:</b> "It was <b>such a</b> hot day!"<br>
              <b>What (a) + (adj) noun:</b> "What <b>a</b> beautiful view!"<br>
              <b>What + uncountable / plural:</b> "What <b>lovely</b> music!"
            </small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Fronting y énfasis posicional</strong>
            <small>
              Mover elemento al inicio para destacarlo:<br>
              "This <b>I cannot accept.</b>" (énfasis en "this")<br>
              "Never have I seen such bravery." (inversión)<br>
              "Slowly, she opened the door." (modo al inicio)<br>
              <b>Repeat for emphasis:</b> "I waited and waited and waited."
            </small>
          </div>
        </div>`,
      exercises: [
        {type:'choice', q:'I ___ enjoy classical music, even though people assume I don\'t.',opts:['do','am','have'],a:'do',exp:'"Do + base verb" para énfasis afirmativo en presente.'},
        {type:'choice', q:'It was ___ a lovely concert that we didn\'t want to leave.',opts:['so','such','what'],a:'such',exp:'"Such a + adjective + noun": such a lovely concert.'},
        {type:'write', q:'Complete: She ___ (did/does/do) tell you the truth — I was there!',a:'did',exp:'"Did + base verb" para énfasis en pasado o para contradecir.'},
        {type:'write', q:'Complete: What ___ beautiful painting! Where did you buy it?',a:'a',exp:'"What a + adjective + noun!" para exclamación.'},
        {type:'choice', q:'The weather was ___ bad that we cancelled the trip.',opts:['such','so','what'],a:'so',exp:'"So + adjective" → intensificación: so bad.'},
        {type:'order', q:'Ordena la frase:', words:['love','do','her','I','cooking.','Italian'], a:'I do love her Italian cooking.',exp:'"Do + base verb" para énfasis afirmativo.'},
        {type:'write', q:'Rewrite with fronting: "I cannot believe this." → This ___.',a:'I cannot believe',exp:'Fronting del objeto: "This I cannot believe." → énfasis en "this".'},
        {type:'choice', q:'What ___ noise! How can anyone concentrate here?',opts:['a','an','—'],a:'—',exp:'"What + uncountable noun" → sin artículo: What noise!'},
        {type:'write', q:'Complete: He does ___ (work) very long hours. I don\'t know how he manages.',a:'work',exp:'"Does + base verb" para énfasis en tercera persona presente.'},
        {type:'order', q:'Ordena la frase:', words:['such','was','exciting','It','day!','an'], a:'It was such an exciting day!',exp:'"Such an + adjective + noun" para exclamación.'},
        {type:'choice', q:'___ a talented musician she is! She should turn professional.',opts:['So','Such','What'],a:'What',exp:'"What a + adjective + noun!" para exclamación sobre persona.'},
        {type:'write', q:'Complete: I ___ (tell) you it was a bad idea! Why didn\'t you listen?',a:'did tell',exp:'"Did tell" → énfasis en pasado para contradecir / recordar advertencia.'},
        {type:'order', q:'Ordena la frase:', words:['so','spoke','softly','She','that','hear','I','could','hardly','her.'], a:'She spoke so softly that I could hardly hear her.',exp:'"So + adverb + that" → consecuencia de la intensidad.'},
        {type:'write', q:'Emphasize with fronting: "We will never forget this moment." → Never ___.',a:'will we forget this moment',exp:'"Never + inversion" → énfasis negativo máximo.'},
        {type:'choice', q:'She ___ warn them. They just refused to listen.',opts:['did','does','has'],a:'did',exp:'"Did warn" → énfasis para defender que sí ocurrió.'},
        {type:'write', q:'Complete: It was ___ (such/so) terrible weather that the event was cancelled.',a:'such',exp:'"Such + noun phrase": such terrible weather.'},
        {type:'order', q:'Ordena la frase:', words:['waited','and','We','waited','waited.','and'], a:'We waited and waited and waited.',exp:'Repetición para énfasis: and waited and waited.'},
        {type:'choice', q:'This ___ I find completely unacceptable.',opts:['is','situation','behaviour'],a:'behaviour',exp:'Fronting del objeto: "This behaviour I find unacceptable." (énfasis en el objeto).'},
        {type:'write', q:'Complete: What ___ performance! The audience gave a standing ovation.',a:'a',exp:'"What a + noun!" → exclamación singular contable.'},
        {type:'order', q:'Ordena la frase:', words:['the','Slowly,','opened','she','envelope.'], a:'Slowly, she opened the envelope.',exp:'Fronting del adverbio: Slowly al inicio para énfasis dramático.'}
      ],
      communicativeTask: {
        title: 'Passionate review',
        instruction: 'Write a passionate review (8–10 sentences) of a film, book, restaurant or experience you feel strongly about. Use at least 5 different emphasis devices.',
        output: 'Written review or spoken recommendation (2 minutes).'
      }
    },

    // ------------------------------------------------------------------ //
    //  10. COMPLEX QUESTION FORMS                                         //
    // ------------------------------------------------------------------ //
    complex_questions: {
      id: 'complex_questions', level: 'B2', title: 'Complex Question Forms', icon: 'help-circle', color: '#16A34A',
      learningGoal: 'Formar preguntas indirectas, negativas y embebidas con precision y registro adecuado.',
      canDo: [
        'I can form indirect questions using if/whether and wh-words.',
        'I can form negative questions for emphasis, surprise or confirmation.',
        'I can use embedded questions in statements and other questions.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Complex Question Forms</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#16A34A;background:#F0FDF4">
            <strong style="color:#14532D">Indirect Questions</strong>
            <small>
              Mas formales / educadas. El orden es de oracion afirmativa (sin inversion):<br>
              Direct: "Where does he live?"<br>
              Indirect: "Could you tell me <b>where he lives</b>?"<br>
              Direct: "Is she coming?"<br>
              Indirect: "Do you know <b>if/whether she is coming</b>?"
            </small>
          </div>
          <div class="t-box" style="border-color:#DC2626;background:#FEF2F2">
            <strong style="color:#7F1D1D">Negative Questions</strong>
            <small>
              Para enfasis, sorpresa o buscar confirmacion:<br>
              "<b>Didn't</b> you get my message?"<br>
              "<b>Isn't</b> this the place we met?"<br>
              "<b>Haven't</b> you finished yet?"<br>
              "<b>Wouldn't</b> it be better to call first?"
            </small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Embedded Questions</strong>
            <small>
              Dentro de otras frases u oraciones:<br>
              "I wonder <b>what she meant</b> by that."<br>
              "The question is <b>whether we can afford it</b>."<br>
              "What I don't understand is <b>why he left</b>."<br>
              "Tell me <b>how you managed</b> to do it."
            </small>
          </div>
        </div>
        <div class="tip-callout"><i data-lucide="alert-circle"></i>
          <span><strong>No inversion en preguntas indirectas:</strong> "Could you tell me where <em>is</em> he?" - incorrecto - "...where <em>he is</em>?" correcto</span>
        </div>`,
      exercises: [
        {type:'choice', q:'Could you tell me where ___ the nearest bank?',opts:['is','the nearest bank is','does the nearest bank'],a:'the nearest bank is',exp:'Pregunta indirecta: orden afirmativo -> where + sujeto + verbo.'},
        {type:'write', q:'Make indirect: "What time does the film start?" -> Do you know ___?',a:'what time the film starts',exp:'Sin inversion ni auxiliar do: what time the film starts.'},
        {type:'choice', q:'___ you get my email? I sent it an hour ago.',opts:["Didn't","Weren't","Hadn't"],a:"Didn't",exp:'"Didn\'t you...?" -> pregunta negativa para enfasis / sorpresa.'},
        {type:'write', q:'Make indirect: "Is she coming to the party?" -> Do you know ___?',a:'if/whether she is coming to the party',exp:'Yes/No pregunta indirecta: if/whether + sujeto + verbo.'},
        {type:'choice', q:'I wonder ___ she meant by that remark.',opts:['that','what','if that'],a:'what',exp:'"I wonder what" -> pregunta embebida en oracion afirmativa.'},
        {type:'order', q:'Ordena la frase:', words:['tell','Can','where','left?','he','you','me'], a:'Can you tell me where he left?',exp:'Pregunta indirecta: Can you tell me + where + sujeto + verbo.'},
        {type:'write', q:'Complete: The question is ___ we can trust him.',a:'whether',exp:'"The question is whether" -> embedded question formal.'},
        {type:'choice', q:'___ it be better to wait until tomorrow before deciding?',opts:["Isn't","Wouldn't","Doesn't"],a:"Wouldn't",exp:'"Wouldn\'t it be better to...?" -> pregunta negativa para sugerencia educada.'},
        {type:'write', q:'Make indirect: "Why did she resign?" -> Nobody knows ___.',a:'why she resigned',exp:'Embedded question: why + sujeto + Past Simple (sin inversion).'},
        {type:'order', q:'Ordena la frase:', words:["don't","understand","why","late.","he's","What","I","always"], a:"What I don't understand is why he's always late.",exp:'Cleft + embedded question: What I don\'t understand is why...'},
        {type:'choice', q:'Could you explain ___ this machine works?',opts:['that how','how','how does'],a:'how',exp:'"Could you explain how + subject + verb?" -> sin do-inversion.'},
        {type:'write', q:'Complete: ___ you finished the report yet? I need it for the meeting.',a:"Haven't",exp:'"Haven\'t you...?" -> pregunta negativa de sorpresa o impaciencia.'},
        {type:'order', q:'Ordena la frase:', words:['know','you','whether','Do','open?','the','is','shop'], a:'Do you know whether the shop is open?',exp:'"Do you know whether + sujeto + verbo?" -> pregunta indirecta.'},
        {type:'write', q:'Embed this question: "Where is the conference room?" -> Could you tell me ___?',a:'where the conference room is',exp:'Indirect question: where + sujeto + verbo (sin inversion).'},
        {type:'choice', q:"I'd like to know ___ she managed to finish so quickly.",opts:['that how','how','how did'],a:'how',exp:'"I\'d like to know how + subject + verb" -> embedded, sin inversion.'},
        {type:'order', q:'Ordena la frase:', words:['you','Has','already','anyone','told','the','about','meeting?'], a:'Has anyone already told you about the meeting?',exp:'Pregunta con "anyone" + orden correcto de auxiliar.'},
        {type:'write', q:'Make negative question for surprise: "You remembered to book the tickets?" -> ___?',a:"Didn't you remember to book the tickets",exp:'"Didn\'t you...?" para expresar sorpresa ante omision.'},
        {type:'write', q:'Complete: Tell me ___ you have been doing all afternoon.',a:'what',exp:'"Tell me what + subject + verb" -> pregunta embebida tras imperativo.'},
        {type:'choice', q:"___ this the restaurant ___ opened last week?",opts:["Isn't / that","Isn't / which","Is / that"],a:"Isn't / which",exp:'"Isn\'t this...?" + relative clause con "which" para confirmacion.'},
        {type:'order', q:'Ordena la frase:', words:['I','what','wonder','will','happen','next.'], a:'I wonder what will happen next.',exp:'"I wonder what + will + verb" -> especulacion con embedded question.'}
      ],
      communicativeTask: {
        title: 'Interview simulation',
        instruction: 'Write a formal interview (8-10 exchanges) using indirect questions, embedded questions and negative questions. One person is the interviewer, the other the candidate.',
        output: 'Written dialogue or role-play recording (2 minutes each).'
      }
    }

  }; // fin modulesDataB2


  // ============================================================
  // LEARNING PATH B2
  // ============================================================
  const grammarLearningPathB2 = [
    {
      level: 'B2',
      title: 'B2 - Upper-Intermediate',
      description: 'Perfectos avanzados, condicionales mixtos, inversion, enfasis, pasiva compleja, lenguaje hipotetico y formas de pregunta complejas.',
      color: '#DC2626',
      requiredScore: 80,
      homologationScore: 85,
      modules: [
        'perfect_tenses_b2',
        'third_conditional',
        'inversion_b2',
        'cleft_sentences',
        'advanced_passives',
        'discourse_markers_b2',
        'hypothetical_language',
        'participle_clauses',
        'emphasis_devices',
        'complex_questions'
      ]
    }
  ];


  // ============================================================
  // MAPA DE COMPETENCIAS B2
  // ============================================================
  const grammarModuleCompetencyMapB2 = {
    perfect_tenses_b2: {
      cefr: 'B2', skill: 'grammar',
      homologationGroup: 'b2_perfect_tenses',
      diagnosticTags: ['perfect_tenses', 'pres_perfect_continuous', 'past_perfect_continuous', 'future_perfect'],
      weaknessLabel: 'Todos los tiempos perfectos',
      evidence: 'Elige el tiempo perfecto correcto distinguiendo resultado, duracion y punto de referencia temporal.'
    },
    third_conditional: {
      cefr: 'B2', skill: 'grammar',
      homologationGroup: 'b2_third_mixed_conditional',
      diagnosticTags: ['third_conditional', 'mixed_conditionals', 'unless', 'provided_that', 'as_long_as'],
      weaknessLabel: 'Third Conditional & Mixed Conditionals',
      evidence: 'Forma el third conditional y mezcla tiempos en conditionals complejos con fluidez.'
    },
    inversion_b2: {
      cefr: 'B2', skill: 'grammar',
      homologationGroup: 'b2_inversion',
      diagnosticTags: ['inversion', 'never_rarely_seldom', 'not_only', 'hardly_scarcely', 'conditional_inversion'],
      weaknessLabel: 'Inversion sujeto-auxiliar',
      evidence: 'Produce inversiones enfaticas y condicionales sin if en contextos formales.'
    },
    cleft_sentences: {
      cefr: 'B2', skill: 'grammar',
      homologationGroup: 'b2_cleft_sentences',
      diagnosticTags: ['cleft_sentences', 'it_cleft', 'wh_cleft', 'all_cleft', 'the_reason_why'],
      weaknessLabel: 'Oraciones hendidas (cleft sentences)',
      evidence: 'Usa it-clefts y wh-clefts para enfocar informacion especifica con precision.'
    },
    advanced_passives: {
      cefr: 'B2', skill: 'grammar',
      homologationGroup: 'b2_advanced_passives',
      diagnosticTags: ['advanced_passive', 'perfect_passive', 'modal_passive', 'impersonal_passive', 'continuous_passive'],
      weaknessLabel: 'Pasiva avanzada (perfectos, modales, impersonal)',
      evidence: 'Construye pasivas complejas con perfectos, modales y estructuras impersonales.'
    },
    discourse_markers_b2: {
      cefr: 'B2', skill: 'grammar',
      homologationGroup: 'b2_discourse_markers',
      diagnosticTags: ['discourse_markers_b2', 'hedging', 'stance_markers', 'reformulation', 'admittedly'],
      weaknessLabel: 'Marcadores del discurso B2',
      evidence: 'Usa marcadores avanzados para matizar, conceder y estructurar argumentos complejos.'
    },
    hypothetical_language: {
      cefr: 'B2', skill: 'grammar',
      homologationGroup: 'b2_hypothetical',
      diagnosticTags: ['its_time', 'id_rather', 'id_sooner', 'suppose_imagine', 'what_if'],
      weaknessLabel: 'Lenguaje hipotetico avanzado',
      evidence: 'Expresa preferencias, urgencia y conjeturas con estructuras hipoteticas precisas.'
    },
    participle_clauses: {
      cefr: 'B2', skill: 'grammar',
      homologationGroup: 'b2_participle_clauses',
      diagnosticTags: ['participle_clauses', 'present_participle', 'past_participle_clause', 'perfect_participle', 'having_done'],
      weaknessLabel: 'Clausulas de participio',
      evidence: 'Condensa oraciones subordinadas en clausulas de participio presentes, pasadas y perfectas.'
    },
    emphasis_devices: {
      cefr: 'B2', skill: 'grammar',
      homologationGroup: 'b2_emphasis',
      diagnosticTags: ['emphasis', 'do_does_did_emphatic', 'so_such', 'what_exclamation', 'fronting'],
      weaknessLabel: 'Recursos de enfasis',
      evidence: 'Intensifica el discurso con do enfatico, so/such, exclamaciones y fronting.'
    },
    complex_questions: {
      cefr: 'B2', skill: 'grammar',
      homologationGroup: 'b2_complex_questions',
      diagnosticTags: ['indirect_questions', 'negative_questions', 'embedded_questions', 'whether_if'],
      weaknessLabel: 'Formas de pregunta complejas',
      evidence: 'Forma preguntas indirectas, negativas y embebidas con orden sintactico correcto.'
    }
  };


  // ============================================================
  // PRERREQUISITOS B2
  // ============================================================
  const grammarPrerequisitesB2 = {
    perfect_tenses_b2:    ['present_perfect', 'past_perfect', 'past_continuous'],
    third_conditional:    ['second_conditional', 'wish_if_only'],
    inversion_b2:         ['past_perfect', 'modal_perfects', 'question_tags'],
    cleft_sentences:      ['relative_clauses', 'reported_speech'],
    advanced_passives:    ['passive_b1', 'modal_perfects', 'perfect_tenses_b2'],
    discourse_markers_b2: ['connectors_b1', 'reported_speech'],
    hypothetical_language:['wish_if_only', 'second_conditional'],
    participle_clauses:   ['passive_b1', 'past_perfect', 'gerunds_infinitives'],
    emphasis_devices:     ['inversion_b2', 'cleft_sentences'],
    complex_questions:    ['reported_speech', 'question_tags']
  };


  // ============================================================
  // ENRIQUECIMIENTO AUTOMATICO
  // ============================================================
  function getB2Sequence(moduleId) {
    const path = grammarLearningPathB2[0].modules;
    const idx  = path.indexOf(moduleId);
    return idx >= 0 ? 300 + idx : 999;
  }

  Object.keys(modulesDataB2).forEach(moduleId => {
    const mod  = modulesDataB2[moduleId];
    const meta = grammarModuleCompetencyMapB2[moduleId] || {};

    mod.id    = mod.id    || moduleId;
    mod.level = mod.level || 'B2';
    mod.skill = mod.skill || 'grammar';

    mod.routeMeta = {
      type: 'grammar', level: 'B2',
      sequence:          getB2Sequence(moduleId),
      requiredScore:     80,
      homologationScore: 85,
      prerequisites:     grammarPrerequisitesB2[moduleId] || [],
      estimatedMinutes:  Array.isArray(mod.exercises) && mod.exercises.length >= 18 ? 45 : 35,
      isRequired: true
    };

    mod.homologation = {
      canHomologate: true,
      group: meta.homologationGroup || moduleId,
      minimumDiagnosticScore: 85,
      weaknessLabel: meta.weaknessLabel || mod.title,
      evidence: meta.evidence || mod.learningGoal || ''
    };

    mod.diagnosticTags = meta.diagnosticTags || [moduleId];
    mod.weaknessLabel  = meta.weaknessLabel  || mod.title;
    mod.cefrDescriptor = meta.evidence || mod.learningGoal || '';
  });


  // ============================================================
  // DIAGNOSTICO GRAMATICAL B2
  // ============================================================
  const grammarDiagnosticBlueprintB2 = {
    id: 'grammar_diagnostic_b2',
    title: 'Diagnostico de gramatica B2',
    description: 'Evalua competencias gramaticales de nivel upper-intermediate para homologar o reforzar.',
    levels: ['B2'],
    rules: { passScore: 80, homologationScore: 85, reinforcementThreshold: 75 },
    items: [
      { id:'dg_b2_01', level:'B2', mapsTo:['perfect_tenses_b2'],
        type:'choice', q:'You look tired. ___ you ___ running?',
        opts:['Have / been','Did / run','Had / been'], a:0,
        exp:'Evidencia presente de actividad reciente -> Present Perfect Continuous.' },
      { id:'dg_b2_02', level:'B2', mapsTo:['perfect_tenses_b2'],
        type:'choice', q:'By next June, I ___ here for two years.',
        opts:['will have worked','will be working','have worked'], a:0,
        exp:'Duracion acumulada hasta punto futuro -> Future Perfect.' },
      { id:'dg_b2_03', level:'B2', mapsTo:['third_conditional'],
        type:'choice', q:'If I had known, I ___ you.',
        opts:['would tell','would have told','had told'], a:1,
        exp:'Third conditional: would have + past participle.' },
      { id:'dg_b2_04', level:'B2', mapsTo:['third_conditional'],
        type:'choice', q:'If I ___ so tired, I would have joined you last night.',
        opts:["weren't","hadn't been","wasn't"], a:1,
        exp:'Mixed conditional: presente -> efecto pasado -> if + Past Perfect.' },
      { id:'dg_b2_05', level:'B2', mapsTo:['inversion_b2'],
        type:'choice', q:'Never ___ such a beautiful landscape.',
        opts:['I have seen','have I seen','I saw'], a:1,
        exp:'Never + inversion: have I seen.' },
      { id:'dg_b2_06', level:'B2', mapsTo:['inversion_b2'],
        type:'choice', q:'Not only ___ the match, but she also broke the record.',
        opts:['she won','did she win','she did win'], a:1,
        exp:'Not only + did + subject + verb.' },
      { id:'dg_b2_07', level:'B2', mapsTo:['cleft_sentences'],
        type:'choice', q:'___ Shakespeare who wrote Hamlet.',
        opts:['It is','It was','There was'], a:1,
        exp:'It-cleft en pasado: It was + elemento + who.' },
      { id:'dg_b2_08', level:'B2', mapsTo:['cleft_sentences'],
        type:'choice', q:'What I need ___ a long holiday.',
        opts:['am','is','are'], a:1,
        exp:'Wh-cleft: What I need is + noun phrase.' },
      { id:'dg_b2_09', level:'B2', mapsTo:['advanced_passives'],
        type:'choice', q:'The report ___ already ___ to the board.',
        opts:['has / been sent','is / being sent','was / sent'], a:0,
        exp:'Present Perfect Passive: has been + past participle.' },
      { id:'dg_b2_10', level:'B2', mapsTo:['advanced_passives'],
        type:'choice', q:'It ___ believed that prices will rise.',
        opts:['is','was','has'], a:0,
        exp:'Impersonal passive: It is believed that.' },
      { id:'dg_b2_11', level:'B2', mapsTo:['discourse_markers_b2'],
        type:'choice', q:'___ speaking, the plan has more advantages than disadvantages.',
        opts:['Broad','Broadly','Broadly speaking'], a:2,
        exp:'"Broadly speaking" como marcador de generalizacion.' },
      { id:'dg_b2_12', level:'B2', mapsTo:['discourse_markers_b2'],
        type:'choice', q:'The results were poor. ___, the team showed great resilience.',
        opts:['Admittedly','In other words','Simply put'], a:0,
        exp:'"Admittedly" concede un punto antes de contrargumentar.' },
      { id:'dg_b2_13', level:'B2', mapsTo:['hypothetical_language'],
        type:'choice', q:"It's time you ___ to bed.",
        opts:['go','went','will go'], a:1,
        exp:'"It\'s time + subject + Past Simple".' },
      { id:'dg_b2_14', level:'B2', mapsTo:['hypothetical_language'],
        type:'choice', q:"I'd rather ___ at home tonight.",
        opts:['stay','stayed','to stay'], a:0,
        exp:'"I\'d rather + base verb" (mismo sujeto).' },
      { id:'dg_b2_15', level:'B2', mapsTo:['participle_clauses'],
        type:'choice', q:'___ in 1889, the Eiffel Tower is iconic.',
        opts:['Building','Built','Having built'], a:1,
        exp:'Past participle para pasiva condensada.' },
      { id:'dg_b2_16', level:'B2', mapsTo:['participle_clauses'],
        type:'choice', q:'___ all the evidence, the jury reached a verdict.',
        opts:['Considered','Considering','Having considered'], a:2,
        exp:'"Having considered" -> accion completada antes del veredicto.' },
      { id:'dg_b2_17', level:'B2', mapsTo:['emphasis_devices'],
        type:'choice', q:'I ___ enjoy classical music, even though people assume I do not.',
        opts:['do','am','have'], a:0,
        exp:'"Do + base verb" para enfasis afirmativo.' },
      { id:'dg_b2_18', level:'B2', mapsTo:['emphasis_devices'],
        type:'choice', q:'It was ___ a lovely concert that we did not want to leave.',
        opts:['so','such','what'], a:1,
        exp:'"Such a + adjective + noun".' },
      { id:'dg_b2_19', level:'B2', mapsTo:['complex_questions'],
        type:'choice', q:'Could you tell me where ___ the nearest bank?',
        opts:['is','the nearest bank is','does the nearest bank'], a:1,
        exp:'Indirect question: orden afirmativo (sin inversion).' },
      { id:'dg_b2_20', level:'B2', mapsTo:['complex_questions'],
        type:'choice', q:'___ you get my email? I sent it an hour ago.',
        opts:["Didn't","Weren't","Hadn't"], a:0,
        exp:'"Didn\'t you...?" -> pregunta negativa para enfasis/sorpresa.' }
    ]
  };


  // ============================================================
  // ALIASES
  // ============================================================
  const grammarIdAliasesB2 = {
    'b2_perfect_tenses': 'perfect_tenses_b2',
    'b2_third_cond':     'third_conditional',
    'b2_inversion':      'inversion_b2',
    'b2_cleft':          'cleft_sentences',
    'b2_adv_passive':    'advanced_passives',
    'b2_discourse':      'discourse_markers_b2',
    'b2_hypothetical':   'hypothetical_language',
    'b2_participle':     'participle_clauses',
    'b2_emphasis':       'emphasis_devices',
    'b2_complex_q':      'complex_questions'
  };


  // ============================================================
  // CONFIGURACION CENTRAL
  // ============================================================
  const grammarRouteConfigB2 = {
    type: 'grammar', source: 'modulesDataB2', version: '1.0',
    requiredScore: 80, homologationScore: 85, reinforcementThreshold: 75,
    path: grammarLearningPathB2, aliases: grammarIdAliasesB2,
    competencies: grammarModuleCompetencyMapB2,
    prerequisites: grammarPrerequisitesB2,
    diagnostic: grammarDiagnosticBlueprintB2
  };


  // ============================================================
  // EXPORTACION — Navegador
  // ============================================================
  if (typeof window !== 'undefined') {
    if (window.modulesData) {
      Object.assign(window.modulesData, modulesDataB2);
    } else {
      window.modulesData = modulesDataB2;
    }

    if (Array.isArray(window.grammarLearningPath)) {
      const alreadyAdded = window.grammarLearningPath.some(l => l.level === 'B2');
      if (!alreadyAdded) window.grammarLearningPath.push(...grammarLearningPathB2);
    } else {
      window.grammarLearningPath = grammarLearningPathB2;
    }

    if (window.grammarModuleCompetencyMap) Object.assign(window.grammarModuleCompetencyMap, grammarModuleCompetencyMapB2);
    if (window.grammarPrerequisites)       Object.assign(window.grammarPrerequisites,       grammarPrerequisitesB2);
    if (window.grammarIdAliases)           Object.assign(window.grammarIdAliases,           grammarIdAliasesB2);

    window.grammarDiagnosticBlueprintB2 = grammarDiagnosticBlueprintB2;
    window.grammarRouteConfigB2         = grammarRouteConfigB2;
    window.modulesDataB2                = modulesDataB2;
    window.grammarLearningPathB2        = grammarLearningPathB2;
    window.grammarModuleCompetencyMapB2 = grammarModuleCompetencyMapB2;
    window.grammarPrerequisitesB2       = grammarPrerequisitesB2;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      modulesDataB2, grammarLearningPathB2, grammarIdAliasesB2,
      grammarModuleCompetencyMapB2, grammarPrerequisitesB2,
      grammarDiagnosticBlueprintB2, grammarRouteConfigB2
    };
  }

}()); // fin IIFE
