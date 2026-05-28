// data-grammar-c1.js v1.0 — LEOENGLISH · MÓDULOS DE GRAMÁTICA C1 (Advanced)
// Marco Común Europeo de Referencia (MCER) — Nivel C1
// Estructura idéntica a data-grammar-b2.js para integración transparente con app.js v5.0
// Requiere: data-grammar.js, data-grammar-b1.js y data-grammar-b2.js cargados antes
// Añadir en index.html: <script src="data-grammar-c1.js"></script> DESPUÉS de data-grammar-b2.js

// ============================================================
// MÓDULOS C1 — 10 temas del MCER Advanced
// ============================================================
// 1.  mixed_conditionals_c1  — Mixed & Inverted Conditionals (all types)
// 2.  nominalization         — Nominalization & Abstract Nouns
// 3.  fronting_focusing      — Fronting, Focusing & Topicalization
// 4.  advanced_modality      — Advanced Modality (degrees of certainty, distancing)
// 5.  ellipsis_substitution  — Ellipsis & Substitution
// 6.  register_shift         — Register Shift (formal ↔ informal)
// 7.  hedging_c1             — Hedging & Academic Language (C1)
// 8.  complex_noun_phrases   — Complex Noun Phrases & Postmodification
// 9.  advanced_connectors    — Advanced Connectors & Cohesion Devices
// 10. stylistic_inversion    — Stylistic Devices & Rhetorical Structures
// ============================================================

(function () {
  'use strict';

  const _stages   = typeof globalDidacticStages !== 'undefined' ? globalDidacticStages : [];
  const _method   = typeof globalMethodology    !== 'undefined' ? globalMethodology    : {};
  const _assess   = typeof globalAssessment     !== 'undefined' ? globalAssessment     : {};
  const _progress = typeof defaultProgression   !== 'undefined' ? defaultProgression   : {};

  const modulesDataC1 = {

    // ------------------------------------------------------------------ //
    //  1. MIXED & INVERTED CONDITIONALS — ALL TYPES                       //
    // ------------------------------------------------------------------ //
    mixed_conditionals_c1: {
      id: 'mixed_conditionals_c1', level: 'C1', title: 'Mixed & Inverted Conditionals', icon: 'git-branch', color: '#7C3AED',
      learningGoal: 'Dominar todos los tipos de condicionales mixtos e invertidos con matices de registro formal.',
      canDo: [
        'I can produce all mixed conditional types fluently.',
        'I can use inverted conditionals (Had/Were/Should) in formal contexts.',
        'I can use conditional structures with unless, but for, otherwise and provided.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Mixed & Inverted Conditionals — C1</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Condicionales mixtos — resumen</strong>
            <small>
              <b>Past → Present:</b> If + Past Perf, would + inf<br>
              "If I <b>had taken</b> that job, I <b>would be</b> in New York now."<br>
              <b>Present → Past:</b> If + Past Simple, would + have + p.p.<br>
              "If I <b>weren't</b> so shy, I <b>would have spoken</b> to her."<br>
              <b>General → Specific:</b> If + Past Simple, would + have + p.p.<br>
              "If gold <b>rusted</b>, it <b>would have lost</b> its value centuries ago."
            </small>
          </div>
          <div class="t-box" style="border-color:#DC2626;background:#FEF2F2">
            <strong style="color:#7F1D1D">Invertidos sin "if" (formal)</strong>
            <small>
              Had + subject + p.p. → third conditional<br>
              "<b>Had she known</b>, she would have called."<br>
              Were + subject + to + inf → second conditional<br>
              "<b>Were he to resign</b>, who would replace him?"<br>
              Should + subject + inf → first conditional (formal)<br>
              "<b>Should you need</b> help, call me."
            </small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Alternativas formales a "if"</strong>
            <small>
              <b>But for</b> + noun/gerund (= if it hadn't been for)<br>
              "<b>But for</b> your help, I would have failed."<br>
              <b>Otherwise / or else</b> (consecuencia negativa)<br>
              "Hurry up, <b>otherwise</b> we'll miss the train."<br>
              <b>Supposing / Imagine</b> + clause<br>
              "<b>Supposing</b> you lost your job — what then?"
            </small>
          </div>
        </div>`,
      exercises: [
        {type:'choice', q:'If I had taken that job, I ___ in New York now.',opts:['would be','would have been','was'],a:'would be',exp:'Mixed conditional: Past Perfect → presente → would + base verb.'},
        {type:'write', q:'Complete: If I ___ (not / be) so shy, I would have spoken to her at the party.',a:'weren\'t',exp:'Mixed: Present state → past consequence → if + Past Simple.'},
        {type:'choice', q:'___ she known about the problem, she would have fixed it immediately.',opts:['If','Had','Were'],a:'Had',exp:'Inversión de third conditional: Had + subject + p.p. (sin "if").'},
        {type:'write', q:'Complete: ___ he to resign, there would be a serious leadership crisis.',a:'Were',exp:'Were + subject + to + infinitive → formal second conditional invertido.'},
        {type:'choice', q:'But for your advice, I ___ the wrong decision.',opts:['would make','would have made','had made'],a:'would have made',exp:'"But for" = if it hadn\'t been for → third conditional consequence.'},
        {type:'order', q:'Ordena la frase:', words:['help,','for','passed.','But','your','never','I\'d','have'], a:'But for your help, I\'d never have passed.',exp:'"But for + noun" → past consequence: would never have passed.'},
        {type:'write', q:'Complete: ___ you need any further assistance, please do not hesitate to contact us.',a:'Should',exp:'"Should you need" → formal first conditional invertido.'},
        {type:'choice', q:'If gold rusted, it ___ its value centuries ago.',opts:['would lose','would have lost','lost'],a:'would have lost',exp:'General truth → past consequence: mixed conditional general → past.'},
        {type:'write', q:'Complete: She must have left early; ___, she would still be here.',a:'otherwise',exp:'"Otherwise" introduce la consecuencia negativa de una condición no cumplida.'},
        {type:'order', q:'Ordena la frase:', words:['the','accident,','been','he','for','But','survived.','wouldn\'t','have'], a:'But for the accident, he wouldn\'t have survived.',exp:'"But for" + noun → third conditional.'},
        {type:'choice', q:'Were the company ___ bankrupt, thousands would lose their jobs.',opts:['go','to go','going'],a:'to go',exp:'Were + subject + to + infinitive para second conditional formal.'},
        {type:'write', q:'Complete: ___ I been warned earlier, I could have avoided the whole mess.',a:'Had',exp:'Had + subject + p.p. → formal third conditional.'},
        {type:'choice', q:'If she ___ more confident, she would have applied for the promotion.',opts:['were','had been','is'],a:'had been',exp:'Third conditional: if + Past Perfect (had been).'},
        {type:'order', q:'Ordena la frase:', words:['need','Should','anything,','you','hesitate','don\'t','ask.','to'], a:'Should you need anything, don\'t hesitate to ask.',exp:'"Should you + verb" → formal first conditional invertido.'},
        {type:'write', q:'Rewrite without "if": "If you had arrived earlier, you would have met him." → ___ you arrived earlier, you would have met him.',a:'Had',exp:'Had + subject + p.p. → inversión de third conditional.'},
        {type:'choice', q:'Supposing you ___ the opportunity — would you take it?',opts:['have','had','would have'],a:'had',exp:'"Supposing + Past Simple" → second conditional hypothesis.'},
        {type:'write', q:'Complete: If it ___ (not / be) for the rain, the concert would have been perfect.',a:'hadn\'t been',exp:'"If it hadn\'t been for" = but for → third conditional.'},
        {type:'order', q:'Ordena la frase:', words:['invested','earlier,','Had','they','richer.','they\'d','be','much'], a:'Had they invested earlier, they\'d be much richer.',exp:'Mixed: Had + p.p. (past) → would be (present result).'},
        {type:'write', q:'Complete: You should call ahead, ___ the office might be closed.',a:'otherwise',exp:'"Otherwise" conecta advertencia con consecuencia negativa.'},
        {type:'choice', q:'But for the government\'s intervention, the bank ___.',opts:['would collapse','would have collapsed','had collapsed'],a:'would have collapsed',exp:'"But for" + noun phrase → would have + p.p. (third conditional).'}
      ],
      communicativeTask: {
        title: 'Turning points in history',
        instruction: 'Choose a historical event and write 8–10 sentences exploring how things might have been different using mixed and inverted conditionals. Use at least 3 inverted forms.',
        output: 'Written essay paragraph or academic presentation (2 minutes).'
      }
    },

    // ------------------------------------------------------------------ //
    //  2. NOMINALIZATION                                                   //
    // ------------------------------------------------------------------ //
    nominalization: {
      id: 'nominalization', level: 'C1', title: 'Nominalization & Abstract Nouns', icon: 'type', color: '#0891B2',
      learningGoal: 'Convertir verbos y adjetivos en sustantivos abstractos para producir un estilo más formal y denso.',
      canDo: [
        'I can nominalize verbs using suffixes (-tion, -ment, -ance, -al, -ure).',
        'I can nominalize adjectives using -ness, -ity, -ce.',
        'I can restructure sentences using nominalized forms in formal writing.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Nominalization — Sustantivación</h3>
        <p>La nominalización transforma verbos y adjetivos en sustantivos, creando un estilo más <strong>formal, denso y académico</strong>.</p>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#0891B2;background:#ECFEFF">
            <strong style="color:#164E63">Verbos → Sustantivos</strong>
            <small>
              <b>-tion / -sion:</b> decide → <b>decision</b>, produce → <b>production</b><br>
              <b>-ment:</b> develop → <b>development</b>, achieve → <b>achievement</b><br>
              <b>-ance / -ence:</b> perform → <b>performance</b>, exist → <b>existence</b><br>
              <b>-al:</b> propose → <b>proposal</b>, arrive → <b>arrival</b><br>
              <b>-ure:</b> fail → <b>failure</b>, expose → <b>exposure</b><br>
              <b>-ing:</b> understand → <b>understanding</b>
            </small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Adjetivos → Sustantivos</strong>
            <small>
              <b>-ness:</b> aware → <b>awareness</b>, dark → <b>darkness</b><br>
              <b>-ity / -ty:</b> able → <b>ability</b>, complex → <b>complexity</b><br>
              <b>-ce / -cy:</b> efficient → <b>efficiency</b>, urgent → <b>urgency</b><br>
              <b>-th:</b> strong → <b>strength</b>, wide → <b>width</b>
            </small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Registro: informal → formal</strong>
            <small>
              "We decided to expand." →<br>
              "The <b>decision to expand</b> was made."<br>
              "Prices increased significantly." →<br>
              "There was a significant <b>increase</b> in prices."<br>
              "They failed to deliver." →<br>
              "Their <b>failure to deliver</b> was noted."
            </small>
          </div>
        </div>`,
      exercises: [
        {type:'choice', q:'The company\'s ___ (decide) to merge surprised everyone.',opts:['decision','deciding','decided'],a:'decision',exp:'"decide" → "decision" (-sion). Sustantivo abstracto como sujeto.'},
        {type:'write', q:'Nominalize: "They achieved great results." → Their ___ were impressive.',a:'achievements',exp:'"achieve" → "achievement(s)" (-ment).'},
        {type:'choice', q:'There was a significant ___ (increase) in unemployment last quarter.',opts:['increase','increasing','increased'],a:'increase',exp:'Nominalización de verbo: "increase" funciona aquí como sustantivo.'},
        {type:'write', q:'Formalize: "Prices rose sharply." → There was a sharp ___ in prices.',a:'rise',exp:'"rise" como sustantivo: a sharp rise in prices.'},
        {type:'choice', q:'The ___ (fail) of the project was due to poor planning.',opts:['failure','failing','failed'],a:'failure',exp:'"fail" → "failure" (-ure). Sujeto nominalizado formal.'},
        {type:'order', q:'Ordena la frase:', words:['The','the','of','development','new','impressive.','vaccine','was'], a:'The development of the new vaccine was impressive.',exp:'"develop" → "development" como sujeto formal.'},
        {type:'write', q:'Nominalize: "He is aware of the risks." → His ___ of the risks is clear.',a:'awareness',exp:'"aware" → "awareness" (-ness). Sustantivo de adjetivo.'},
        {type:'choice', q:'We need to improve our ___ (efficient) in order to reduce costs.',opts:['efficiency','efficient','efficiencies'],a:'efficiency',exp:'"efficient" → "efficiency" (-cy). Sustantivo de adjetivo.'},
        {type:'write', q:'Formalize: "They proposed a new law." → Their ___ of a new law was debated.',a:'proposal',exp:'"propose" → "proposal" (-al).'},
        {type:'choice', q:'The ___ (perform) of the team exceeded all expectations.',opts:['performance','performing','performed'],a:'performance',exp:'"perform" → "performance" (-ance).'},
        {type:'order', q:'Ordena la frase:', words:['the','system','The','of','the','complexity','challenged','experts.'], a:'The complexity of the system challenged the experts.',exp:'"complex" → "complexity" (-ity) como sujeto formal.'},
        {type:'write', q:'Nominalize: "They arrived late." → Their ___ caused delays.',a:'arrival',exp:'"arrive" → "arrival" (-al) como sujeto.'},
        {type:'choice', q:'The government acknowledged the ___ (exist) of a serious problem.',opts:['existence','existing','existed'],a:'existence',exp:'"exist" → "existence" (-ence).'},
        {type:'write', q:'Formalize: "Scientists discovered that the drug was effective." → The ___ of the drug\'s effectiveness was confirmed.',a:'discovery',exp:'"discover" → "discovery" (-ery).'},
        {type:'order', q:'Ordena la frase:', words:['significant','in','a','There','reduction','was','emissions.'], a:'There was a significant reduction in emissions.',exp:'"reduce" → "reduction" en estructura existencial formal.'},
        {type:'choice', q:'Her ___ (strong) of character helped her overcome the crisis.',opts:['strength','strong','strengthen'],a:'strength',exp:'"strong" → "strength" (-th). Sustantivo de adjetivo irregular.'},
        {type:'write', q:'Nominalize: "The situation is urgent." → The ___ of the situation requires immediate action.',a:'urgency',exp:'"urgent" → "urgency" (-cy).'},
        {type:'choice', q:'The ___ (propose) was rejected by the board of directors.',opts:['proposal','proposition','proposing'],a:'proposal',exp:'"propose" → "proposal" (-al) para documento/sugerencia formal.'},
        {type:'write', q:'Formalize: "They exposed the corruption." → The ___ of corruption shocked the public.',a:'exposure',exp:'"expose" → "exposure" (-ure).'},
        {type:'order', q:'Ordena la frase:', words:['government\'s','The','implement','the','failure','to','policy','was','criticised.'], a:'The government\'s failure to implement the policy was criticised.',exp:'"fail" → "failure to + infinitive" como sujeto nominalizado.'}
      ],
      communicativeTask: {
        title: 'Academic abstract',
        instruction: 'Write a short academic abstract (8–10 sentences) about a topic of your choice. Nominalize at least 8 verbs or adjectives to create a formal, dense style.',
        output: 'Written abstract or formal presentation (2 minutes).'
      }
    },

    // ------------------------------------------------------------------ //
    //  3. FRONTING, FOCUSING & TOPICALIZATION                             //
    // ------------------------------------------------------------------ //
    fronting_focusing: {
      id: 'fronting_focusing', level: 'C1', title: 'Fronting, Focusing & Topicalization', icon: 'arrow-right', color: '#D97706',
      learningGoal: 'Manipular el orden de los elementos de la oración para lograr énfasis, cohesión y variedad estilística.',
      canDo: [
        'I can front objects, adverbials and complements for emphasis.',
        'I can use topicalization to establish discourse topics.',
        'I can use focusing adverbs (even, only, just, merely, particularly) for precision.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Fronting, Focusing & Topicalization</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#D97706;background:#FFFBEB">
            <strong style="color:#78350F">Fronting</strong>
            <small>
              Mover un elemento al inicio para darle peso informativo:<br>
              Object: "This offer, <b>I cannot refuse</b>."<br>
              Complement: "<b>Magnificent</b> was the view from the top."<br>
              Adverbial: "<b>Only after midnight</b> did the noise stop."<br>
              Infinitive: "<b>To understand this</b>, you need context."
            </small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Topicalization</strong>
            <small>
              Establece el tema del discurso al inicio:<br>
              "As for the budget, <b>that</b> is a separate matter."<br>
              "Regarding the proposal, <b>we</b> have serious reservations."<br>
              "When it comes to grammar, <b>accuracy</b> is essential."<br>
              "Speaking of which, <b>has anyone</b> seen the report?"
            </small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Focusing adverbs</strong>
            <small>
              <b>only</b> → restricción: "Only <b>she</b> knows the truth."<br>
              <b>even</b> → sorpresa/adición: "Even <b>experts</b> were confused."<br>
              <b>just / merely</b> → minimización: "It's <b>just</b> a formality."<br>
              <b>particularly / especially</b> → énfasis selectivo<br>
              <b>above all</b> → jerarquía máxima
            </small>
          </div>
        </div>`,
      exercises: [
        {type:'choice', q:'"This ___ I find completely unacceptable." (fronted object)',opts:['behavior','behavioral','behave'],a:'behavior',exp:'Fronting del objeto: This behavior, I find unacceptable. El verbo permanece sin inversión.'},
        {type:'write', q:'Front the adverbial: "The noise stopped only after midnight." → Only after midnight ___.',a:'did the noise stop',exp:'Fronting de adverbial negativo: Only after midnight + inversión did the noise stop.'},
        {type:'choice', q:'___ was the view from the mountain peak.',opts:['Magnificent','Magnificently','Magnify'],a:'Magnificent',exp:'Fronting de complemento adjetival: Magnificent was the view (inversión poética/formal).'},
        {type:'write', q:'Topicalize: "The budget is a separate issue." → As for the budget, ___.',a:'that is a separate issue',exp:'"As for + topic, that/it + predicate" → topicalization formal.'},
        {type:'choice', q:'___ experts were confused by the new regulations.',opts:['Just','Even','Only'],a:'Even',exp:'"Even" indica que algo es sorprendente o va más allá de lo esperado.'},
        {type:'order', q:'Ordena la frase:', words:['proposal,','reservations.','Regarding','we','serious','the','have'], a:'Regarding the proposal, we have serious reservations.',exp:'"Regarding + noun," → topicalization formal.'},
        {type:'write', q:'Complete: When it comes to ___, clarity is more important than complexity.',a:'writing',exp:'"When it comes to + noun/gerund" → topicalization de tema.'},
        {type:'choice', q:'To understand this phenomenon, ___ need years of study.',opts:['you','one','they'],a:'one',exp:'"To understand this... one needs" → fronting de infinitivo con sujeto impersonal formal.'},
        {type:'write', q:'Front the object: "She refused this offer." → This offer ___.',a:'she refused',exp:'Fronted object + subject + verb (sin inversión cuando no hay adverbial negativo).'},
        {type:'order', q:'Ordena la frase:', words:['the','speaking','report?','seen','which,','has','anyone','Of'], a:'Speaking of which, has anyone seen the report?',exp:'"Speaking of which" → topicalization conversacional/formal de enlace.'},
        {type:'choice', q:'It\'s ___ a formality — you don\'t need to worry about it.',opts:['even','only','merely'],a:'merely',exp:'"Merely" minimiza la importancia: es solo una formalidad (registro formal).'},
        {type:'write', q:'Complete: ___ all, what matters is the quality of the outcome.',a:'Above',exp:'"Above all" → focusing adverb de jerarquía máxima.'},
        {type:'choice', q:'___ did he win the race, but he also broke the world record.',opts:['Not only','Only','Even'],a:'Not only',exp:'"Not only... but also" con inversión para doble énfasis.'},
        {type:'order', q:'Ordena la frase:', words:['grammar,','comes','it','When','to','is','accuracy','essential.'], a:'When it comes to grammar, accuracy is essential.',exp:'"When it comes to + noun," → topicalization de tema.'},
        {type:'write', q:'Front the complement: "Her dedication was remarkable." → Remarkable ___.',a:'was her dedication',exp:'Fronting del complemento con inversión: Remarkable was + subject.'},
        {type:'choice', q:'___ she understood the problem did she offer a solution.',opts:['Only when','Even when','Just as'],a:'Only when',exp:'"Only when + clause + inversión" → doble restricción enfática.'},
        {type:'order', q:'Ordena la frase:', words:['particularly','This','relevant','is','in','contexts.','academic'], a:'This is particularly relevant in academic contexts.',exp:'"Particularly" como focusing adverb antes del adjetivo.'},
        {type:'write', q:'Topicalize: "She had strong reservations about the plan." → As for the plan, ___.',a:'she had strong reservations about it',exp:'"As for + topic, pronoun + rest" → topicalization.'},
        {type:'choice', q:'___ have I encountered such a complex case in my career.',opts:['Rarely','Even','Just'],a:'Rarely',exp:'"Rarely + inversión" → fronting de adverbial de frecuencia negativo.'},
        {type:'order', q:'Ordena la frase:', words:['offer,','This','not','I','can','accept.'], a:'This offer, I cannot accept.',exp:'Fronting del objeto directo sin inversión del verbo.'}
      ],
      communicativeTask: {
        title: 'Opinion column',
        instruction: 'Write a short opinion column (8–10 sentences) on a current issue. Use fronting, topicalization and focusing adverbs to vary your sentence structure and add rhetorical impact.',
        output: 'Written column or spoken editorial (2 minutes).'
      }
    },

    // ------------------------------------------------------------------ //
    //  4. ADVANCED MODALITY                                               //
    // ------------------------------------------------------------------ //
    advanced_modality: {
      id: 'advanced_modality', level: 'C1', title: 'Advanced Modality', icon: 'sliders', color: '#059669',
      learningGoal: 'Usar modales con precisión para expresar grados de certeza, distanciamiento epistémico y obligación matizada.',
      canDo: [
        'I can use modal verbs to express fine degrees of certainty and probability.',
        'I can use modal distancing to report and speculate without committing.',
        'I can use semi-modals (be bound to, be liable to, be supposed to) accurately.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Advanced Modality — Modalidad avanzada</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Grados de certeza (presente/futuro)</strong>
            <small>
              100%: <b>will</b> "She will be at home."<br>
              ~95%: <b>must</b> "She must be tired."<br>
              ~70%: <b>should / ought to</b> "She should be here by now."<br>
              ~50%: <b>may / might / could</b> "She may be stuck in traffic."<br>
              ~5%:  <b>can't / couldn't</b> "She can't be serious."
            </small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Distanciamiento epistémico</strong>
            <small>
              Para reportar sin comprometerse:<br>
              "Prices <b>would appear</b> to be rising." (formal)<br>
              "There <b>would seem</b> to be a problem." (cautela)<br>
              "This <b>might well</b> prove difficult." (concesión)<br>
              "It <b>could be argued</b> that..." (academic distancing)
            </small>
          </div>
          <div class="t-box" style="border-color:#DC2626;background:#FEF2F2">
            <strong style="color:#7F1D1D">Semi-modales (C1)</strong>
            <small>
              <b>be bound to</b> → casi seguro (positivo)<br>
              "She's <b>bound to</b> succeed." (= must/will definitely)<br>
              <b>be liable to</b> → tendencia/riesgo<br>
              "Prices are <b>liable to</b> fluctuate."<br>
              <b>be supposed to</b> → expectativa/obligación<br>
              "You're <b>supposed to</b> ask permission."<br>
              <b>be set to</b> → predicción inminente<br>
              "Rates are <b>set to</b> rise next month."
            </small>
          </div>
        </div>`,
      exercises: [
        {type:'choice', q:'She ___ be at home — the lights are on.',opts:['must','should','will'],a:'must',exp:'"Must" para deducción de ~95% basada en evidencia.'},
        {type:'choice', q:'Prices ___ well prove more resilient than expected.',opts:['might','would','should'],a:'might',exp:'"Might well" → posibilidad con matiz de concesión académica.'},
        {type:'write', q:'Complete: There ___ to be a serious flaw in the methodology.',a:'would seem',exp:'"Would seem to be" → distanciamiento epistémico formal.'},
        {type:'write', q:'Complete: She\'s ___ to make mistakes — she\'s new to the role.',a:'bound',exp:'"Be bound to" → casi certeza positiva/predictiva.'},
        {type:'choice', q:'The new policy ___ to create significant controversy.',opts:['is set','is bound','is supposed'],a:'is set',exp:'"Is set to" → predicción formal de evento inminente.'},
        {type:'order', q:'Ordena la frase:', words:['argued','that','could','the','It','be','overstated.','benefits','are'], a:'It could be argued that the benefits are overstated.',exp:'"It could be argued that" → distanciamiento académico.'},
        {type:'write', q:'Rephrase formally: "It seems that demand is falling." → Demand ___ to be falling.',a:'would appear',exp:'"Would appear to be" → distanciamiento epistémico formal.'},
        {type:'choice', q:'You\'re ___ to submit the report by Friday — it\'s company policy.',opts:['set','supposed','bound'],a:'supposed',exp:'"Be supposed to" → obligación basada en norma o expectativa.'},
        {type:'write', q:'Complete: The error ___ (could/might) have been avoided with better proofreading.',a:'could',exp:'"Could have been avoided" → posibilidad pasada no realizada.'},
        {type:'choice', q:'She ___ have known — she was in the meeting when it was discussed.',opts:['can\'t','shouldn\'t','wouldn\'t'],a:'can\'t',exp:'"Can\'t have known" → imposibilidad lógica en el pasado.'},
        {type:'order', q:'Ordena la frase:', words:['liable','fluctuate.','are','Prices','to'], a:'Prices are liable to fluctuate.',exp:'"Be liable to" → tendencia o riesgo predecible.'},
        {type:'write', q:'Complete: ___ could be argued that the policy has had limited effect.',a:'It',exp:'"It could be argued that" → estructura impersonal de distanciamiento.'},
        {type:'choice', q:'The situation ___ appear to be more complex than initially thought.',opts:['would','should','must'],a:'would',exp:'"Would appear to be" → distanciamiento formal, sin comprometerse.'},
        {type:'write', q:'Complete: He\'s ___ (bound/supposed/liable) to be promoted — his performance has been outstanding.',a:'bound',exp:'"Bound to" para certeza positiva basada en evidencia fuerte.'},
        {type:'order', q:'Ordena la frase:', words:['difficult','This','well','might','implement.','prove','to'], a:'This might well prove difficult to implement.',exp:'"Might well" → posibilidad con concesión leve.'},
        {type:'choice', q:'Rates ___ to rise sharply in the coming months.',opts:['are set','are bound','are liable'],a:'are set',exp:'"Are set to" → predicción basada en información actual o plan confirmado.'},
        {type:'write', q:'Complete: It ___ be that the data was misinterpreted.',a:'may well',exp:'"May well be that" → posibilidad razonada con matiz académico.'},
        {type:'choice', q:'They ___ have received our message — we sent it three days ago.',opts:['should','must','would'],a:'should',exp:'"Should have received" → expectativa lógica basada en tiempo transcurrido.'},
        {type:'write', q:'Complete: The results ___ (be liable) to vary depending on external conditions.',a:'are liable',exp:'"Are liable to vary" → tendencia con riesgo de variación.'},
        {type:'order', q:'Ordena la frase:', words:['well','could','There','be','that','argument','an','applies.','this'], a:'There could well be an argument that this applies.',exp:'"Could well be" → posibilidad razonada con distanciamiento.'}
      ],
      communicativeTask: {
        title: 'Risk assessment report',
        instruction: 'Write a short risk assessment report (8–10 sentences) about a project or decision. Use at least 5 different modal or semi-modal structures to express degrees of certainty and risk.',
        output: 'Written report or formal presentation (2 minutes).'
      }
    },

    // ------------------------------------------------------------------ //
    //  5. ELLIPSIS & SUBSTITUTION                                         //
    // ------------------------------------------------------------------ //
    ellipsis_substitution: {
      id: 'ellipsis_substitution', level: 'C1', title: 'Ellipsis & Substitution', icon: 'minus', color: '#DC2626',
      learningGoal: 'Evitar repetición innecesaria usando elipsis y formas de sustitución para lograr mayor cohesión.',
      canDo: [
        'I can use ellipsis to omit predictable elements without loss of clarity.',
        'I can use "so", "not", "do so", "one/ones" as substitutes.',
        'I can use auxiliaries alone to substitute full verb phrases.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Ellipsis & Substitution — Elipsis y sustitución</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#DC2626;background:#FEF2F2">
            <strong style="color:#7F1D1D">Ellipsis</strong>
            <small>
              Omisión de elementos predecibles:<br>
              "She can swim and [she can] dive."<br>
              "I wanted to go but couldn't [go]."<br>
              "He works harder than she [works]."<br>
              "Coming? — [Are you] coming?"<br>
              Verbal: "Take whichever [one] you like."
            </small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">So / Not (sustitución de cláusula)</strong>
            <small>
              "Will it rain?" — "I think <b>so</b>." (= I think it will rain)<br>
              "Is she coming?" — "I hope <b>so</b>."<br>
              Negativo: "I'm afraid <b>not</b>." (= I'm afraid it won't)<br>
              "I suppose <b>not</b>." · "Certainly <b>not</b>."
            </small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Do so / One / Auxiliaries</strong>
            <small>
              <b>do so</b> (formal): "Please sign here if you wish to <b>do so</b>."<br>
              <b>one / ones:</b> "I need a pen — any <b>one</b> will do." "These shoes fit better than the old <b>ones</b>."<br>
              <b>Auxiliary alone:</b> "She can sing and so <b>can</b> he."<br>
              "I didn't go but she <b>did</b>."
            </small>
          </div>
        </div>`,
      exercises: [
        {type:'choice', q:'"Will it rain?" — "I think ___." ',opts:['so','it','yes'],a:'so',exp:'"I think so" sustituye a "I think it will rain" → sustitución de cláusula con "so".'},
        {type:'write', q:'Complete: "Is she coming to the meeting?" "I hope ___."',a:'so',exp:'"Hope so" = hope she is coming → "so" sustituye la cláusula positiva.'},
        {type:'choice', q:'"Has the report been submitted?" — "I\'m afraid ___."',opts:['not','no','so not'],a:'not',exp:'"I\'m afraid not" → sustitución negativa de cláusula.'},
        {type:'write', q:'Reduce with ellipsis: "She can play piano and she can play guitar." → She can play piano and ___.',a:'guitar',exp:'Elipsis del auxiliar repetido: and [she can play] guitar.'},
        {type:'choice', q:'I wanted to apply for the job but didn\'t know ___.',opts:['how to do','how to','how'],a:'how to',exp:'"Didn\'t know how to [apply]" → elipsis del verbo principal con to.'},
        {type:'order', q:'Ordena la frase:', words:['sign','Please','you','wish','here','do','to','if','so.'], a:'Please sign here if you wish to do so.',exp:'"Do so" sustituye formalmente al infinitivo previo (to sign).'},
        {type:'write', q:'Use "one": "I need a pen. Any pen will do." → I need a pen. Any ___ will do.',a:'one',exp:'"One" sustituye al sustantivo contable singular previamente mencionado.'},
        {type:'choice', q:'She works harder than he ___.',opts:['does','do','is'],a:'does',exp:'Auxiliar solo sustituye al sintagma verbal: "than he [works]" → "than he does".'},
        {type:'write', q:'Complete: "These new headphones are much better than the old ___."',a:'ones',exp:'"Ones" sustituye a "headphones" (plural): the old ones.'},
        {type:'order', q:'Ordena la frase:', words:['she','I','and','didn\'t','did.','go','but'], a:'I didn\'t go but she did.',exp:'"Did" solo sustituye a "went" → sustitución con auxiliar enfático.'},
        {type:'choice', q:'"Can he drive?" — "I believe ___."',opts:['so','it','yes he'],a:'so',exp:'"I believe so" = I believe he can → "so" sustituye cláusula con modal.'},
        {type:'write', q:'Reduce: "She started laughing and he started laughing too." → She started laughing and he ___.',a:'did too',exp:'"Did too" → auxiliar para sustituir y confirmar la misma acción.'},
        {type:'choice', q:'Take whichever ___ you prefer — they\'re all the same price.',opts:['one','ones','thing'],a:'one',exp:'"Whichever one" → "one" sustituye al sustantivo singular genérico.'},
        {type:'write', q:'Complete with ellipsis: "She can run faster than most people ___."',a:'can',exp:'Elipsis del sintagma verbal: than most people [run] → than most people can.'},
        {type:'order', q:'Ordena la frase:', words:['so','can','She','he.','swim','and'], a:'She can swim and so can he.',exp:'"So + aux + subject" → inversión para acuerdo con afirmativo.'},
        {type:'choice', q:'"Will they finish on time?" — "I doubt ___."',opts:['it','so','not'],a:'so',exp:'"I doubt so" = I doubt they will → "so" en contexto dubitativo.'},
        {type:'write', q:'Complete: "I didn\'t enjoy the film, and neither ___ my sister."',a:'did',exp:'"Neither did + subject" → acuerdo negativo con auxiliar invertido.'},
        {type:'choice', q:'She said she would help and she ___.',opts:['did','does','had'],a:'did',exp:'"She did [help]" → auxiliar en pasado sustituye al sintagma verbal completo.'},
        {type:'write', q:'Complete with "so/not": "Do you think prices will fall?" — "The analysts seem to think ___."',a:'so',exp:'"Think so" → "so" sustituye "that prices will fall".'},
        {type:'order', q:'Ordena la frase:', words:['prefer','I\'d','ones.','the','leather','to','rather','cotton','the'], a:'I\'d rather prefer the leather ones to the cotton ones.',exp:'"Ones" sustituye al sustantivo para evitar repetición (leather ones / cotton ones).'}
      ],
      communicativeTask: {
        title: 'Natural conversation analysis',
        instruction: 'Write a natural dialogue (8–10 exchanges) between two colleagues discussing a project decision. Include at least 6 examples of ellipsis and substitution (so/not/do so/ones/auxiliaries).',
        output: 'Written dialogue or role-play (2 minutes).'
      }
    },

    // ------------------------------------------------------------------ //
    //  6. REGISTER SHIFT (FORMAL ↔ INFORMAL)                              //
    // ------------------------------------------------------------------ //
    register_shift: {
      id: 'register_shift', level: 'C1', title: 'Register Shift', icon: 'toggle-left', color: '#6366F1',
      learningGoal: 'Adaptar el registro lingüístico con precisión según el contexto, propósito y audiencia.',
      canDo: [
        'I can rewrite informal texts in a formal register and vice versa.',
        'I can identify register markers (vocabulary, syntax, pragmatics).',
        'I can adapt my language in professional, academic and social contexts.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Register Shift — Cambio de registro</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#6366F1;background:#EEF2FF">
            <strong style="color:#312E81">Marcadores de registro formal</strong>
            <small>
              <b>Vocabulario:</b> commence (start), endeavour (try), obtain (get), terminate (end), utilise (use), ascertain (find out), notify (tell)<br>
              <b>Sintaxis:</b> pasiva, nominalizaciones, oraciones complejas<br>
              <b>Sin contracciones:</b> do not, cannot, it is<br>
              <b>Impersonal:</b> It has been decided that / One must consider
            </small>
          </div>
          <div class="t-box" style="border-color:#D97706;background:#FFFBEB">
            <strong style="color:#78350F">Marcadores de registro informal</strong>
            <small>
              <b>Vocabulario:</b> get, do, put off, figure out, loads of, kind of, stuff<br>
              <b>Contracciones:</b> it's, don't, I'd, we've<br>
              <b>Frases cortas</b>, elipsis, preguntas directas<br>
              <b>Phrasal verbs:</b> put off, come up with, look into<br>
              <b>Fillers:</b> well, you know, I mean, like
            </small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Pares formal / informal</strong>
            <small>
              start → <b>commence</b><br>
              try → <b>endeavour / attempt</b><br>
              get → <b>obtain / acquire</b><br>
              end → <b>terminate / conclude</b><br>
              use → <b>utilise / employ</b><br>
              find out → <b>ascertain / establish</b><br>
              tell → <b>notify / inform</b><br>
              put off → <b>postpone / defer</b>
            </small>
          </div>
        </div>`,
      exercises: [
        {type:'choice', q:'Formal equivalent of "start": The meeting will ___ at 9am.',opts:['start','commence','begin'],a:'commence',exp:'"Commence" es el equivalente formal de "start" en contextos profesionales.'},
        {type:'write', q:'Formalize: "We need to find out what went wrong." → We need to ___ the cause of the failure.',a:'ascertain',exp:'"Ascertain" = find out → vocabulario formal de investigación.'},
        {type:'choice', q:'Informal equivalent of "terminate": We\'re going to ___ the contract.',opts:['end','terminate','cancel'],a:'end',exp:'"End" es la versión informal de "terminate".'},
        {type:'write', q:'Formalize: "Please tell us if anything changes." → Please ___ us of any changes.',a:'notify',exp:'"Notify" = tell (formal) → comunicación formal.'},
        {type:'choice', q:'Which is more formal: "I\'ll try to help" vs "___ to provide assistance"?',opts:['I\'ll endeavour','I will endeavour','endeavouring'],a:'I will endeavour',exp:'"I will endeavour" — sin contracción + vocabulario formal.'},
        {type:'order', q:'Ordena la frase formal:', words:['been','It','that','has','decided','postponed.','be','the','event','will'], a:'It has been decided that the event will be postponed.',exp:'Pasiva impersonal + nominalización → registro muy formal.'},
        {type:'write', q:'Informalize: "We are unable to accommodate your request at this time." → Sorry, we ___.',a:'can\'t help you right now',exp:'Versión informal directa sin pasiva ni vocabulario formal.'},
        {type:'choice', q:'Formal version of "put off": The board decided to ___ the decision.',opts:['put off','delay','defer'],a:'defer',exp:'"Defer" → registro formal para "postpone/put off".'},
        {type:'write', q:'Formalize: "We\'ve looked into the problem and figured out the cause." → We have ___ the problem and ___ the cause.',a:'investigated established',exp:'"Investigated" y "established" → léxico formal académico.'},
        {type:'order', q:'Ordena la frase:', words:['hereby','are','You','notified','that','contract','your','terminated.','has','been'], a:'You are hereby notified that your contract has been terminated.',exp:'Pasiva + "hereby" + léxico formal → registro legal.'},
        {type:'choice', q:'Which phrasing is appropriate for a formal email?',opts:['Get back to me soon','Please do not hesitate to contact me','Ping me when you can'],a:'Please do not hesitate to contact me',exp:'Fórmula epistolar formal estándar: please do not hesitate to.'},
        {type:'write', q:'Formalize: "We use this method a lot." → This method is widely ___.',a:'utilised',exp:'"Utilised" (pasiva) → formal. "Use a lot" → informal.'},
        {type:'choice', q:'Informal version of "We wish to draw your attention to": "We want to ___."',opts:['point out','highlight','flag'],a:'flag',exp:'"Flag" es el más informal/coloquial de los tres en contextos digitales.'},
        {type:'write', q:'Informalize: "Further to our previous correspondence, I am writing to enquire..." → I\'m following up ___.',a:'on our last conversation',exp:'Versión directa, con contracción y phrasal verb.'},
        {type:'order', q:'Ordena la frase formal:', words:['to','pleased','We','inform','are','you','that','approved.','your','application','has','been'], a:'We are pleased to inform you that your application has been approved.',exp:'Estructura formal de notificación positiva: We are pleased to inform you that.'},
        {type:'choice', q:'"Come up with a solution" → formal equivalent?',opts:['devise a solution','find a solution','work out a solution'],a:'devise a solution',exp:'"Devise" → formal equivalente de "come up with" para soluciones.'},
        {type:'write', q:'Formalize: "We got a lot of complaints." → We received a ___ number of complaints.',a:'significant',exp:'"Received" + "significant number" → formal frente a "got a lot".'},
        {type:'choice', q:'Which opener is appropriate for a formal complaint letter?',opts:['I\'m writing to complain about...','I want to moan about...','I am writing to express my dissatisfaction with...'],a:'I am writing to express my dissatisfaction with...',exp:'Sin contracción + vocabulario formal (dissatisfaction) → carta formal.'},
        {type:'write', q:'Formalize: "The company is trying to cut costs." → The company is ___ to reduce expenditure.',a:'endeavouring',exp:'"Endeavouring" (formal) + "expenditure" (formal) vs "trying" + "costs".'},
        {type:'order', q:'Ordena la frase informal:', words:['to','Can','asap?','get','you','me','back'], a:'Can you get back to me asap?',exp:'Registro informal: phrasal verb + contracción + acronym (asap).'}
      ],
      communicativeTask: {
        title: 'Two-version task',
        instruction: 'Write the same piece of information twice: once as an informal message to a friend, and once as a formal email to a manager or client. Compare vocabulary, syntax and tone.',
        output: 'Two written versions (4–5 sentences each) or spoken comparison (2 minutes).'
      }
    },

    // ------------------------------------------------------------------ //
    //  7. HEDGING & ACADEMIC LANGUAGE C1                                   //
    // ------------------------------------------------------------------ //
    hedging_c1: {
      id: 'hedging_c1', level: 'C1', title: 'Hedging & Academic Language', icon: 'shield', color: '#B45309',
      learningGoal: 'Usar lenguaje de atenuación y distanciamiento epistémico propio del discurso académico y profesional.',
      canDo: [
        'I can use hedging to qualify claims and avoid overgeneralisation.',
        'I can use reporting verbs with appropriate epistemic stance.',
        'I can construct cautious academic arguments with precision.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Hedging & Academic Language — C1</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#B45309;background:#FFFBEB">
            <strong style="color:#78350F">Hedging devices</strong>
            <small>
              <b>Modal verbs:</b> may, might, could, would<br>
              <b>Adverbs:</b> possibly, probably, generally, largely, typically<br>
              <b>Adjectives:</b> likely, possible, apparent, potential<br>
              <b>Verbs:</b> seem, appear, tend to, suggest<br>
              <b>Phrases:</b> to some extent, in many cases, in general
            </small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Reporting verbs con matiz</strong>
            <small>
              <b>Neutral:</b> state, report, note, describe<br>
              <b>Caution:</b> suggest, propose, indicate, imply<br>
              <b>Strong:</b> demonstrate, establish, confirm, prove<br>
              <b>Tentative:</b> speculate, hypothesise, conjecture<br>
              <b>Concede:</b> acknowledge, admit, recognise, accept
            </small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Estructuras académicas clave</strong>
            <small>
              "It <b>would appear</b> that..."<br>
              "The data <b>suggests</b> that..."<br>
              "This <b>may be</b> attributable to..."<br>
              "There is some evidence to <b>suggest</b>..."<br>
              "It <b>could be argued</b> that..."<br>
              "This <b>tends to</b> support the view that..."
            </small>
          </div>
        </div>`,
      exercises: [
        {type:'choice', q:'The results ___ that further research is needed.',opts:['prove','suggest','confirm'],a:'suggest',exp:'"Suggest" → hedging cauteloso; "prove" sería demasiado fuerte sin evidencia concluyente.'},
        {type:'write', q:'Hedge this claim: "Economic growth causes inequality." → Economic growth ___ contribute to inequality.',a:'may',exp:'"May contribute" → modal hedge que evita afirmación absoluta.'},
        {type:'choice', q:'This ___ be attributable to a lack of funding.',opts:['might','must','will'],a:'might',exp:'"Might be attributable to" → hedging con modal de baja certeza.'},
        {type:'write', q:'Complete: There is some evidence to ___ that the intervention was effective.',a:'suggest',exp:'"Evidence to suggest" → estructura hedging académica estándar.'},
        {type:'choice', q:'The findings ___ consistent with previous research in this field.',opts:['are largely','are completely','prove'],a:'are largely',exp:'"Largely consistent" → hedging adverbial que evita afirmación total.'},
        {type:'order', q:'Ordena la frase:', words:['argued','be','could','It','that','overstated.','the','risks','are'], a:'It could be argued that the risks are overstated.',exp:'"It could be argued that" → distanciamiento epistémico académico.'},
        {type:'write', q:'Complete: The data ___ (tend) to support the hypothesis, though more research is needed.',a:'tends',exp:'"Tends to support" → hedging con tendencia, sin afirmación rotunda.'},
        {type:'choice', q:'Researchers ___ that cognitive decline may begin earlier than previously thought.',opts:['speculate','prove','confirm'],a:'speculate',exp:'"Speculate" → verbo de reporte tentativo para hipótesis no confirmadas.'},
        {type:'write', q:'Complete: It ___ appear that the policy has had limited impact.',a:'would',exp:'"It would appear that" → distanciamiento máximo con "would appear".'},
        {type:'order', q:'Ordena la frase:', words:['possible','It','that','is','the','underestimated.','costs','were'], a:'It is possible that the costs were underestimated.',exp:'"It is possible that" → estructura hedging con adjetivo epistémico.'},
        {type:'choice', q:'The study ___ a strong correlation between diet and mental health.',opts:['indicates','proves','argues'],a:'indicates',exp:'"Indicates" → verbo de reporte cauteloso para correlaciones; "proves" sería muy fuerte.'},
        {type:'write', q:'Complete: This ___ be due to a number of factors, including seasonal variation.',a:'may',exp:'"May be due to" → hedging modal para causalidad.'},
        {type:'choice', q:'These results are ___ consistent with the theoretical framework proposed.',opts:['broadly','completely','absolutely'],a:'broadly',exp:'"Broadly consistent" → adverbio hedging que permite excepciones.'},
        {type:'write', q:'Complete: The authors ___ (acknowledge) that their sample size was limited.',a:'acknowledge',exp:'"Acknowledge" → verbo de concesión en discurso académico.'},
        {type:'order', q:'Ordena la frase:', words:['tends','This','support','to','view','the','that','applies.','principle','the'], a:'This tends to support the view that the principle applies.',exp:'"Tends to support the view that" → hedging académico complejo.'},
        {type:'choice', q:'___ cases, the treatment produced significant improvement.',opts:['In many','In all','Generally'],a:'In many',exp:'"In many cases" → restricción cuantitativa hedging; evita "always" o "all".'},
        {type:'write', q:'Complete: The evidence ___ (suggest) a causal link, but this remains to be confirmed.',a:'suggests',exp:'"Suggests a causal link" + concesión → hedging complejo.'},
        {type:'choice', q:'It ___ that the two phenomena are related.',opts:['would seem','must be','is clear'],a:'would seem',exp:'"Would seem" → distanciamiento epistémico máximo sin comprometerse.'},
        {type:'write', q:'Complete: To ___ extent, the results support the initial hypothesis.',a:'some',exp:'"To some extent" → hedging de grado.'},
        {type:'order', q:'Ordena la frase:', words:['evidence','There','to','is','some','suggest','effective.','the','that','approach','is'], a:'There is some evidence to suggest that the approach is effective.',exp:'"There is some evidence to suggest that" → estructura hedging académica completa.'}
      ],
      communicativeTask: {
        title: 'Research summary',
        instruction: 'Write a short research summary (8–10 sentences) on any topic you know well. Use at least 6 different hedging devices and vary your reporting verbs.',
        output: 'Written summary or conference-style presentation (2 minutes).'
      }
    },

    // ------------------------------------------------------------------ //
    //  8. COMPLEX NOUN PHRASES & POSTMODIFICATION                         //
    // ------------------------------------------------------------------ //
    complex_noun_phrases: {
      id: 'complex_noun_phrases', level: 'C1', title: 'Complex Noun Phrases', icon: 'layers', color: '#0891B2',
      learningGoal: 'Construir sintagmas nominales complejos con pre y posmodificación para un estilo denso y formal.',
      canDo: [
        'I can build complex noun phrases with multiple premodifiers.',
        'I can use postmodifying clauses (relative, participle, prepositional, infinitive).',
        'I can unpack complex noun phrases to check and clarify meaning.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Complex Noun Phrases — Sintagmas nominales complejos</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#0891B2;background:#ECFEFF">
            <strong style="color:#164E63">Premodificación</strong>
            <small>
              Determinante + (adverbio) + adjetivo(s) + sustantivo modificador + núcleo:<br>
              "a <b>rapidly expanding</b> tech start-up"<br>
              "the <b>long-awaited government</b> report"<br>
              "a <b>highly controversial</b> policy decision"<br>
              "the <b>latest peer-reviewed</b> research findings"
            </small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Posmodificación</strong>
            <small>
              <b>Prepositional phrase:</b> "the report <b>on climate change</b>"<br>
              <b>Relative clause:</b> "a solution <b>that works for everyone</b>"<br>
              <b>Participle clause:</b> "data <b>collected over ten years</b>"<br>
              <b>Infinitive:</b> "the decision <b>to proceed</b>"<br>
              <b>That-clause:</b> "evidence <b>that the policy failed</b>"
            </small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Densidad y desambiguación</strong>
            <small>
              Alta densidad nominal es típica del inglés técnico/académico:<br>
              "a <b>peer-reviewed longitudinal study of the long-term effects of early childhood intervention programmes</b>"<br>
              Para desempaquetar: identifica el núcleo (study) y los modificadores en capas.
            </small>
          </div>
        </div>`,
      exercises: [
        {type:'choice', q:'Which is a correctly built complex noun phrase?',opts:['a rapidly tech expanding start-up','a rapidly expanding tech start-up','a tech rapidly expanding start-up'],a:'a rapidly expanding tech start-up',exp:'Orden correcto: adverb + participle + noun modifier + head noun.'},
        {type:'write', q:'Add a prepositional postmodifier: "We need a solution ___." (for everyone)',a:'for everyone',exp:'"A solution for everyone" → posmodificación preposicional.'},
        {type:'choice', q:'The ___ report recommended immediate action.',opts:['long-awaited government','government long-awaited','awaited-long government'],a:'long-awaited government',exp:'Premodificación: compound adjective + noun modifier antes del núcleo.'},
        {type:'write', q:'Postmodify with a participle: "The data ___ (collect / over ten years) suggests a trend."',a:'collected over ten years',exp:'"Data collected over ten years" → participio pasado como posmodificador.'},
        {type:'choice', q:'Identify the head noun: "the latest peer-reviewed research findings from three continents"',opts:['research','findings','continents'],a:'findings',exp:'"Findings" es el núcleo; todo lo demás son modificadores pre y postpuestos.'},
        {type:'order', q:'Ordena el sintagma:', words:['controversial','highly','a','decision','policy'], a:'a highly controversial policy decision',exp:'Determinante + adverbio + adjetivo + modificador nominal + núcleo.'},
        {type:'write', q:'Postmodify with infinitive: "The decision ___ (proceed) shocked the board."',a:'to proceed',exp:'"The decision to proceed" → infinitivo como posmodificador nominal.'},
        {type:'choice', q:'Which sentence contains a correctly posmodified noun phrase?',opts:['evidence that the policy failed','evidence which the policy failed','evidence the policy that failed'],a:'evidence that the policy failed',exp:'"Evidence that + clause" → that-clause postmodifying un sustantivo abstracto.'},
        {type:'write', q:'Build: a noun phrase meaning "a study done recently on AI effects" → a ___.',a:'recently conducted study on the effects of AI',exp:'recently conducted (participio) + study (núcleo) + on the effects of AI (prep. phrase).'},
        {type:'order', q:'Ordena la frase:', words:['peer-reviewed','The','findings','longitudinal','confirmed','study\'s','hypothesis.','the'], a:'The longitudinal peer-reviewed study\'s findings confirmed the hypothesis.',exp:'Premodificación múltiple + genitivo como posmodificador del núcleo "findings".'},
        {type:'choice', q:'"A rapidly ___ market" — which adjective best completes this noun phrase?',opts:['growth','growing','grown'],a:'growing',exp:'"A rapidly growing market" → present participle como premodificador.'},
        {type:'write', q:'Unpack: "a long-term government-funded research initiative" → It is an initiative ___ (postmodify with two clauses).',a:'that is government-funded and aimed at long-term research',exp:'Desempaquetado: relative clauses para explicar los premodificadores.'},
        {type:'choice', q:'Which postmodifier type is used in "the proposal submitted last week"?',opts:['Relative clause','Past participle phrase','Prepositional phrase'],a:'Past participle phrase',exp:'"Submitted last week" → participio pasado como posmodificador reducido.'},
        {type:'write', q:'Premodify: "It is a report ___ (recent, comprehensive, market)."',a:'a recent comprehensive market report',exp:'Orden: opinion adj (recent) + descriptive adj (comprehensive) + noun modifier (market) + head.'},
        {type:'order', q:'Ordena el sintagma:', words:['newly','a','technology','developed','that','renewable','source','energy','saves'], a:'a newly developed renewable energy source that saves technology',exp:'Premodificación + relativa: newly developed + renewable energy source + that-clause.'},
        {type:'choice', q:'"The fact ___ climate is changing is undeniable."',opts:['that','which','what'],a:'that',exp:'"The fact that + clause" → that-clause posmodificando sustantivo abstracto "fact".'},
        {type:'write', q:'Complete: "a government-funded initiative ___ (aim) at reducing youth unemployment"',a:'aimed',exp:'"Aimed at reducing" → past participle phrase posmodificando "initiative".'},
        {type:'choice', q:'Which phrase is most typical of academic/technical English?',opts:['a lot of people saying no','a significant number of stakeholders expressing opposition','many people against'],a:'a significant number of stakeholders expressing opposition',exp:'Premodificación compleja + participio presente → densidad nominal académica.'},
        {type:'write', q:'Build a complex NP: describe a meeting that was held yesterday, chaired by the director, on budget cuts → a ___.',a:'budget-related meeting chaired by the director held yesterday',exp:'Premodificadores + participios como posmodificadores sucesivos.'},
        {type:'order', q:'Ordena la frase académica:', words:['The','factors','number','contributing','to','this','considerable','of','outcome','is','significant.'], a:'The considerable number of factors contributing to this outcome is significant.',exp:'NP complejo: considerable (premod) + number (núcleo) + of factors contributing to this outcome (postmod).'}
      ],
      communicativeTask: {
        title: 'Technical briefing',
        instruction: 'Write a short technical briefing (8–10 sentences) on a topic you know well (technology, science, business, etc.). Focus on building dense, complex noun phrases in every sentence.',
        output: 'Written briefing or professional presentation (2 minutes).'
      }
    },

    // ------------------------------------------------------------------ //
    //  9. ADVANCED CONNECTORS & COHESION DEVICES                          //
    // ------------------------------------------------------------------ //
    advanced_connectors: {
      id: 'advanced_connectors', level: 'C1', title: 'Advanced Connectors & Cohesion', icon: 'link-2', color: '#16A34A',
      learningGoal: 'Dominar conectores y mecanismos de cohesión complejos para producir textos de nivel C1 académico y profesional.',
      canDo: [
        'I can use a wide range of connectors for concession, condition, result and addition.',
        'I can use referencing, substitution and lexical chains for cohesion.',
        'I can structure extended arguments with signposting language.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Advanced Connectors & Cohesion — C1</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#16A34A;background:#F0FDF4">
            <strong style="color:#14532D">Concesión avanzada</strong>
            <small>
              <b>Whilst / Whereas</b> (contraste simultáneo)<br>
              "Whilst the results are promising, further study is needed."<br>
              <b>Even so / Be that as it may</b> (concesión fuerte)<br>
              "Be that as it may, the risks remain considerable."<br>
              <b>Granted (that) / Conceding that</b><br>
              "Granted that costs are high, the benefits outweigh them."
            </small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Cohesión léxica</strong>
            <small>
              <b>Cadena léxica:</b> sinónimos, hipónimos, antónimos en serie<br>
              "The study · the research · the investigation · the inquiry"<br>
              <b>Referencia endofórica:</b> this/these/such + noun<br>
              "Such findings support the hypothesis."<br>
              "This approach, however, has limitations."
            </small>
          </div>
          <div class="t-box" style="border-color:#DC2626;background:#FEF2F2">
            <strong style="color:#7F1D1D">Señalización discursiva</strong>
            <small>
              <b>Enumeración:</b> First and foremost · Subsequently · Finally<br>
              <b>Ejemplificación:</b> To illustrate · A case in point is · Notably<br>
              <b>Reformulación:</b> Put differently · To rephrase · In essence<br>
              <b>Conclusión:</b> On reflection · Taken together · In sum
            </small>
          </div>
        </div>`,
      exercises: [
        {type:'choice', q:'___ the results are promising, further research is required.',opts:['Although','Whilst','Despite'],a:'Whilst',exp:'"Whilst" conecta dos hechos simultáneos con contraste, más formal que "although".'},
        {type:'write', q:'Complete: ___ that as it may, the financial risks remain significant.',a:'Be',exp:'"Be that as it may" → concesión fuerte que acepta el punto pero no cede en la conclusión.'},
        {type:'choice', q:'___ that the deadline is tight, we should still aim for accuracy.',opts:['Granted','Despite','Even'],a:'Granted',exp:'"Granted that" → concede el punto del interlocutor antes de contrargumentar.'},
        {type:'write', q:'Complete: First and ___, we must address the safety concerns.',a:'foremost',exp:'"First and foremost" → señalización de prioridad máxima.'},
        {type:'choice', q:'Such ___ have significant implications for future policy.',opts:['findings','finding','found'],a:'findings',exp:'"Such findings" → referencia endofórica: "such + noun" retoma el contenido previo.'},
        {type:'order', q:'Ordena la frase:', words:['in','A','point','the','case','recent','is','outbreak.'], a:'A case in point is the recent outbreak.',exp:'"A case in point is" → ejemplificación formal.'},
        {type:'write', q:'Complete: ___ differently, the intervention failed to produce the expected outcomes.',a:'Put',exp:'"Put differently" → reformulación académica de lo anterior.'},
        {type:'choice', q:'___ together, these studies paint a troubling picture of urban inequality.',opts:['Taken','Put','All'],a:'Taken',exp:'"Taken together" → señalización de síntesis de evidencia múltiple.'},
        {type:'write', q:'Complete: This approach, ___, has several well-documented limitations.',a:'however',exp:'"However" con comas en posición media → contraste intercalado en el discurso.'},
        {type:'order', q:'Ordena la frase:', words:['reflection,','On','a','more','nuanced','required.','approach','is'], a:'On reflection, a more nuanced approach is required.',exp:'"On reflection" → señalización de reconsideración o conclusión meditada.'},
        {type:'choice', q:'To ___ the point: the current strategy is not working.',opts:['illustrate','rephrase','put'],a:'rephrase',exp:'"To rephrase the point" → señalización de reformulación directa.'},
        {type:'write', q:'Complete: ___ costs are rising, the quality of output has also improved.',a:'Whereas',exp:'"Whereas" contrasta dos hechos en la misma oración (formal).'},
        {type:'choice', q:'___, the policy has produced mixed results at best.',opts:['In sum','All in all','On balance'],a:'On balance',exp:'"On balance" → evaluación global con reconocimiento de pros y contras.'},
        {type:'write', q:'Complete: Subsequently, the team ___ (carry out) a series of follow-up experiments.',a:'carried out',exp:'"Subsequently" → señalización temporal de secuencia; carried out = conducted.'},
        {type:'order', q:'Ordena la frase:', words:['so,','even','challenges','remain','Even','considerable.'], a:'Even so, considerable challenges remain.',exp:'"Even so" → concesión que mantiene la posición crítica.'},
        {type:'choice', q:'___, we should consider the long-term consequences of this decision.',opts:['Above all','In essence','To illustrate'],a:'Above all',exp:'"Above all" → señalización de la prioridad más alta en la argumentación.'},
        {type:'write', q:'Complete: In ___, the data supports three key conclusions.',a:'essence',exp:'"In essence" → señalización de síntesis o simplificación de lo esencial.'},
        {type:'choice', q:'___ the intervention was costly, it yielded significant results.',opts:['Whilst','Granted','Whereas'],a:'Granted',exp:'"Granted the intervention was costly" → concede el contraargumento antes de la conclusión.'},
        {type:'write', q:'Complete: ___ (First and foremost) / To illustrate / Notably — Notably, the youngest participants showed the greatest improvement.',a:'Notably',exp:'"Notably" señala un hallazgo especialmente digno de atención en el argumento.'},
        {type:'order', q:'Ordena la frase:', words:['these','together,','Taken','a','paint','studies','of','picture','complexity.'], a:'Taken together, these studies paint a picture of complexity.',exp:'"Taken together" → síntesis de evidencia múltiple.'}
      ],
      communicativeTask: {
        title: 'Extended argument',
        instruction: 'Write an extended argumentative paragraph (10–12 sentences) on a topic of your choice. Include concessive connectors, signposting language, lexical chains and at least 2 endophoric references.',
        output: 'Written paragraph or academic debate contribution (2–3 minutes).'
      }
    },

    // ------------------------------------------------------------------ //
    //  10. STYLISTIC DEVICES & RHETORICAL STRUCTURES                       //
    // ------------------------------------------------------------------ //
    stylistic_inversion: {
      id: 'stylistic_inversion', level: 'C1', title: 'Stylistic Devices & Rhetorical Structures', icon: 'feather', color: '#DC2626',
      learningGoal: 'Usar recursos retóricos y estilísticos para producir textos persuasivos, literarios y formales de alto impacto.',
      canDo: [
        'I can use anaphora, antithesis, tricolon and rhetorical questions for persuasion.',
        'I can use apposition, parenthetical remarks and asyndeton for style.',
        'I can produce texts that demonstrate command of register, tone and rhetorical purpose.'
      ],
      stages: _stages, methodology: _method, assessment: _assess, progression: _progress,
      theory: `
        <h3>Stylistic Devices & Rhetorical Structures — C1</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#DC2626;background:#FEF2F2">
            <strong style="color:#7F1D1D">Recursos retóricos</strong>
            <small>
              <b>Anaphora:</b> repetición al inicio<br>
              "We shall fight on the beaches, <b>we shall fight</b> on the seas, <b>we shall fight</b> in the air."<br>
              <b>Tricolon:</b> tres elementos paralelos<br>
              "Life, liberty, and the pursuit of happiness."<br>
              <b>Antithesis:</b> contraste de ideas opuestas<br>
              "Ask not what your country can do for you — ask what <b>you</b> can do for your country."
            </small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Recursos estilísticos</strong>
            <small>
              <b>Rhetorical question:</b> pregunta sin respuesta esperada<br>
              "Is this the legacy we want to leave?"<br>
              <b>Apposition:</b> noun phrase que renombra otro<br>
              "Darwin, <b>the father of evolution</b>, changed science."<br>
              <b>Parenthetical remark:</b> comentario entre guiones/paréntesis<br>
              "The result — <b>as many predicted</b> — was catastrophic."
            </small>
          </div>
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong style="color:#064E3B">Otros recursos C1</strong>
            <small>
              <b>Asyndeton:</b> lista sin conjunciones<br>
              "We came, we saw, we conquered."<br>
              <b>Polysyndeton:</b> lista con muchas conjunciones<br>
              "And the rain and the wind and the cold never stopped."<br>
              <b>Litotes:</b> afirmación mediante negación del contrario<br>
              "It was <b>not without</b> difficulty that she succeeded."
            </small>
          </div>
        </div>`,
      exercises: [
        {type:'choice', q:'"We shall fight on the beaches, we shall fight on the seas, we shall fight in the air." This is an example of ___.',opts:['antithesis','anaphora','tricolon'],a:'anaphora',exp:'"Anaphora" es la repetición del mismo sintagma al inicio de cláusulas sucesivas.'},
        {type:'write', q:'Identify the device: "Life, liberty, and the pursuit of happiness." → ___.',a:'tricolon',exp:'"Tricolon" es la agrupación de tres elementos paralelos con valor retórico.'},
        {type:'choice', q:'"Ask not what your country can do for you — ask what you can do for your country." This is ___.',opts:['anaphora','antithesis','parenthetical remark'],a:'antithesis',exp:'"Antithesis" contrasta dos ideas opuestas en estructura paralela.'},
        {type:'write', q:'Write a rhetorical question about climate change: "___ ?"',a:'Is this the world we want to leave to our children',exp:'Pregunta retórica: no requiere respuesta, busca impacto emocional/reflexivo.'},
        {type:'choice', q:'"Darwin, the father of evolution, changed biology forever." The underlined phrase is ___.',opts:['antithesis','apposition','anaphora'],a:'apposition',exp:'"Apposition" es un sintagma nominal que renombra o identifica al anterior.'},
        {type:'order', q:'Ordena la frase con anadiplosis:', words:['brings','Fear','fear','brings','hatred,','hatred','war.'], a:'Fear brings fear, fear brings hatred, hatred brings war.',exp:'Anadiplosis: el elemento final de una cláusula se convierte en el inicial de la siguiente.'},
        {type:'write', q:'Complete the tricolon: "The plan was bold, it was ambitious, and it was ___."',a:'transformative',exp:'Tricolon: tres adjetivos paralelos en gradación ascendente.'},
        {type:'choice', q:'"The result — as many had predicted — was catastrophic." The dashes mark ___.',opts:['anaphora','parenthetical remark','litotes'],a:'parenthetical remark',exp:'"Parenthetical remark" es un comentario insertado entre guiones o paréntesis.'},
        {type:'write', q:'Rewrite using litotes: "It was very difficult." → It was ___ without difficulty.',a:'not',exp:'"Not without difficulty" = litotes: afirmación mediante la negación del contrario.'},
        {type:'choice', q:'"We came, we saw, we conquered." This list without conjunctions is called ___.',opts:['polysyndeton','asyndeton','tricolon'],a:'asyndeton',exp:'"Asyndeton" suprime conjunciones para dar ritmo rápido e impacto.'},
        {type:'order', q:'Ordena la frase retórica:', words:['legacy','the','Is','want','we','this','leave?','to'], a:'Is this the legacy we want to leave?',exp:'Pregunta retórica para movilizar al oyente emocionalmente.'},
        {type:'write', q:'Identify the device: "And the wind and the rain and the cold kept coming." → ___.',a:'polysyndeton',exp:'"Polysyndeton": repetición de conjunciones que da efecto acumulativo.'},
        {type:'choice', q:'"Not a single voice was raised in protest." This is an example of ___.',opts:['litotes','understatement','antithesis'],a:'litotes',exp:'"Not a single voice" es una litotes: énfasis por negación extrema.'},
        {type:'write', q:'Write a sentence using anaphora (repeat "We need" three times): ___.',a:'We need justice, we need equality, we need change',exp:'Anáfora: "We need" al inicio de cada unidad para efecto acumulativo.'},
        {type:'order', q:'Ordena la sentencia con antítesis:', words:['in','the','It','was','end','best','it','of','times,','the','worst','of','times.'], a:'It was the best of times, it was the worst of times.',exp:'"Best / worst of times" → antítesis clásica (Dickens).'},
        {type:'choice', q:'"The scientist — a Nobel laureate — gave a compelling keynote." The dashes introduce ___.',opts:['antithesis','apposition','asyndeton'],a:'apposition',exp:'Apposición parentética entre guiones: "a Nobel laureate" identifica al sujeto.'},
        {type:'write', q:'Complete with a parenthetical remark: "The new policy — ___ — will affect millions."',a:'as critics have warned',exp:'Comentario parentético que añade perspectiva o contraste sin interrumpir el flujo.'},
        {type:'choice', q:'"It was not an easy decision." This is an example of ___.',opts:['understatement','litotes','antithesis'],a:'litotes',exp:'"Not an easy decision" = litotes: la negación del opuesto como afirmación atenuada.'},
        {type:'write', q:'Identify the device: "Education is the most powerful weapon which you can use to change the world." — Mandela → ___.',a:'metaphor',exp:'"Education as a weapon" → metáfora que equipara dos conceptos para dar fuerza al argumento.'},
        {type:'order', q:'Ordena el tricolon:', words:['we','Together,','stronger.','united','and','build,','will','grow,','be'], a:'Together, we will build, grow, and be stronger.',exp:'Tricolon con paralelismo verbal: build / grow / be stronger.'}
      ],
      communicativeTask: {
        title: 'Persuasive speech',
        instruction: 'Write or deliver a short persuasive speech (10–12 sentences) on a topic you feel strongly about. Include at least 5 different rhetorical or stylistic devices from today\'s lesson. Label each one in brackets.',
        output: 'Written speech with annotations or recorded delivery (2–3 minutes).'
      }
    }

  }; // fin modulesDataC1


  // ============================================================
  // LEARNING PATH C1
  // ============================================================
  const grammarLearningPathC1 = [
    {
      level: 'C1',
      title: 'C1 · Advanced',
      description: 'Condicionales e inversión avanzados, nominalización, modalidad matizada, registro, cohesión compleja y recursos retóricos.',
      color: '#7C3AED',
      requiredScore: 80,
      homologationScore: 85,
      modules: [
        'mixed_conditionals_c1',
        'nominalization',
        'fronting_focusing',
        'advanced_modality',
        'ellipsis_substitution',
        'register_shift',
        'hedging_c1',
        'complex_noun_phrases',
        'advanced_connectors',
        'stylistic_inversion'
      ]
    }
  ];


  // ============================================================
  // MAPA DE COMPETENCIAS C1
  // ============================================================
  const grammarModuleCompetencyMapC1 = {
    mixed_conditionals_c1: {
      cefr: 'C1', skill: 'grammar', homologationGroup: 'c1_mixed_conditionals',
      diagnosticTags: ['mixed_conditionals', 'inverted_conditionals', 'but_for', 'otherwise', 'supposing'],
      weaknessLabel: 'Mixed & Inverted Conditionals (C1)',
      evidence: 'Usa todos los tipos de condicionales mixtos e invertidos con precisión formal.'
    },
    nominalization: {
      cefr: 'C1', skill: 'grammar', homologationGroup: 'c1_nominalization',
      diagnosticTags: ['nominalization', 'abstract_nouns', 'suffixes', 'formal_style'],
      weaknessLabel: 'Nominalización y sustantivos abstractos',
      evidence: 'Transforma verbos y adjetivos en sustantivos para producir estilo académico denso.'
    },
    fronting_focusing: {
      cefr: 'C1', skill: 'grammar', homologationGroup: 'c1_fronting',
      diagnosticTags: ['fronting', 'topicalization', 'focusing_adverbs', 'word_order_emphasis'],
      weaknessLabel: 'Fronting, focusing y topicalización',
      evidence: 'Manipula el orden oracional para énfasis, cohesión y variedad estilística.'
    },
    advanced_modality: {
      cefr: 'C1', skill: 'grammar', homologationGroup: 'c1_advanced_modality',
      diagnosticTags: ['advanced_modality', 'epistemic_distancing', 'semi_modals', 'degrees_of_certainty'],
      weaknessLabel: 'Modalidad avanzada y distanciamiento epistémico',
      evidence: 'Expresa grados finos de certeza y distanciamiento con modales y semi-modales.'
    },
    ellipsis_substitution: {
      cefr: 'C1', skill: 'grammar', homologationGroup: 'c1_ellipsis',
      diagnosticTags: ['ellipsis', 'substitution', 'so_not', 'do_so', 'ones_auxiliaries'],
      weaknessLabel: 'Elipsis y sustitución',
      evidence: 'Usa elipsis y formas de sustitución para cohesión y eficiencia comunicativa.'
    },
    register_shift: {
      cefr: 'C1', skill: 'grammar', homologationGroup: 'c1_register',
      diagnosticTags: ['register', 'formal_informal', 'vocabulary_shift', 'syntax_register'],
      weaknessLabel: 'Cambio de registro (formal ↔ informal)',
      evidence: 'Adapta vocabulario, sintaxis y tono según el contexto y propósito comunicativo.'
    },
    hedging_c1: {
      cefr: 'C1', skill: 'grammar', homologationGroup: 'c1_hedging',
      diagnosticTags: ['hedging_c1', 'academic_language', 'reporting_verbs', 'epistemic_stance'],
      weaknessLabel: 'Hedging y lenguaje académico (C1)',
      evidence: 'Cualifica afirmaciones con precisión epistémica usando modales, adverbios y verbos de reporte.'
    },
    complex_noun_phrases: {
      cefr: 'C1', skill: 'grammar', homologationGroup: 'c1_noun_phrases',
      diagnosticTags: ['complex_noun_phrases', 'premodification', 'postmodification', 'nominal_density'],
      weaknessLabel: 'Sintagmas nominales complejos',
      evidence: 'Construye y desempaqueta sintagmas nominales con pre y posmodificación múltiple.'
    },
    advanced_connectors: {
      cefr: 'C1', skill: 'grammar', homologationGroup: 'c1_advanced_connectors',
      diagnosticTags: ['advanced_connectors', 'cohesion', 'whilst_whereas', 'signposting', 'lexical_chains'],
      weaknessLabel: 'Conectores avanzados y cohesión',
      evidence: 'Estructura argumentos extendidos con señalización, concesión y cohesión léxica.'
    },
    stylistic_inversion: {
      cefr: 'C1', skill: 'grammar', homologationGroup: 'c1_stylistic_devices',
      diagnosticTags: ['stylistic_devices', 'rhetoric', 'anaphora', 'antithesis', 'tricolon', 'litotes'],
      weaknessLabel: 'Recursos estilísticos y retóricos',
      evidence: 'Produce textos persuasivos y literarios usando recursos retóricos con dominio pleno.'
    }
  };


  // ============================================================
  // PRERREQUISITOS C1
  // ============================================================
  const grammarPrerequisitesC1 = {
    mixed_conditionals_c1: ['third_conditional', 'inversion_b2'],
    nominalization:        ['discourse_markers_b2', 'advanced_passives'],
    fronting_focusing:     ['inversion_b2', 'cleft_sentences', 'emphasis_devices'],
    advanced_modality:     ['modal_perfects', 'discourse_markers_b2'],
    ellipsis_substitution: ['complex_questions', 'discourse_markers_b2'],
    register_shift:        ['discourse_markers_b2', 'nominalization'],
    hedging_c1:            ['discourse_markers_b2', 'advanced_modality'],
    complex_noun_phrases:  ['relative_clauses', 'participle_clauses', 'nominalization'],
    advanced_connectors:   ['connectors_b1', 'discourse_markers_b2', 'hedging_c1'],
    stylistic_inversion:   ['inversion_b2', 'fronting_focusing', 'advanced_connectors']
  };


  // ============================================================
  // ENRIQUECIMIENTO AUTOMÁTICO
  // ============================================================
  function getC1Sequence(moduleId) {
    const path = grammarLearningPathC1[0].modules;
    const idx  = path.indexOf(moduleId);
    return idx >= 0 ? 400 + idx : 999;
  }

  Object.keys(modulesDataC1).forEach(moduleId => {
    const mod  = modulesDataC1[moduleId];
    const meta = grammarModuleCompetencyMapC1[moduleId] || {};
    mod.id    = mod.id    || moduleId;
    mod.level = mod.level || 'C1';
    mod.skill = mod.skill || 'grammar';
    mod.routeMeta = {
      type: 'grammar', level: 'C1',
      sequence:          getC1Sequence(moduleId),
      requiredScore:     80,
      homologationScore: 85,
      prerequisites:     grammarPrerequisitesC1[moduleId] || [],
      estimatedMinutes:  50,
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
  // DIAGNÓSTICO GRAMATICAL C1
  // ============================================================
  const grammarDiagnosticBlueprintC1 = {
    id: 'grammar_diagnostic_c1',
    title: 'Diagnóstico de gramática C1',
    description: 'Evalúa competencias gramaticales avanzadas para homologar o reforzar a nivel C1.',
    levels: ['C1'],
    rules: { passScore: 80, homologationScore: 85, reinforcementThreshold: 75 },
    items: [
      { id:'dg_c1_01', level:'C1', mapsTo:['mixed_conditionals_c1'],
        type:'choice', q:'If I had taken that job, I ___ in New York now.',
        opts:['would be','would have been','was'], a:0,
        exp:'Mixed conditional: Past Perfect → present result → would + base verb.' },
      { id:'dg_c1_02', level:'C1', mapsTo:['mixed_conditionals_c1'],
        type:'choice', q:'___ she known about the problem, she would have fixed it.',
        opts:['If','Had','Were'], a:1,
        exp:'Inverted third conditional: Had + subject + p.p.' },
      { id:'dg_c1_03', level:'C1', mapsTo:['nominalization'],
        type:'choice', q:'The company\'s ___ to merge surprised everyone.',
        opts:['decision','deciding','decided'], a:0,
        exp:'"Decide" → "decision" (-sion). Nominalización formal.' },
      { id:'dg_c1_04', level:'C1', mapsTo:['nominalization'],
        type:'choice', q:'There was a significant ___ in unemployment last quarter.',
        opts:['increase','increasing','increased'], a:0,
        exp:'"increase" como sustantivo en estructura existencial formal.' },
      { id:'dg_c1_05', level:'C1', mapsTo:['fronting_focusing'],
        type:'choice', q:'___ did she pass, but she also broke the record.',
        opts:['Not only','Only','Even'], a:0,
        exp:'"Not only... but also" con inversión.' },
      { id:'dg_c1_06', level:'C1', mapsTo:['fronting_focusing'],
        type:'choice', q:'___ experts were confused by the new rules.',
        opts:['Just','Even','Only'], a:1,
        exp:'"Even" → extensión más allá de lo esperado.' },
      { id:'dg_c1_07', level:'C1', mapsTo:['advanced_modality'],
        type:'choice', q:'There ___ to be a serious flaw in the methodology.',
        opts:['would seem','should appear','must seem'], a:0,
        exp:'"Would seem to be" → distanciamiento epistémico formal.' },
      { id:'dg_c1_08', level:'C1', mapsTo:['advanced_modality'],
        type:'choice', q:'She\'s ___ to make mistakes — she\'s very experienced.',
        opts:['unlikely','bound','set'], a:1,
        exp:'"Bound to" → certeza positiva basada en evidencia fuerte.' },
      { id:'dg_c1_09', level:'C1', mapsTo:['ellipsis_substitution'],
        type:'choice', q:'"Will it rain?" — "I think ___."',
        opts:['so','it','yes'], a:0,
        exp:'"I think so" → sustitución de cláusula con "so".' },
      { id:'dg_c1_10', level:'C1', mapsTo:['ellipsis_substitution'],
        type:'choice', q:'She works harder than he ___.',
        opts:['does','do','is'], a:0,
        exp:'Auxiliar solo sustituye al sintagma verbal.' },
      { id:'dg_c1_11', level:'C1', mapsTo:['register_shift'],
        type:'choice', q:'Formal equivalent of "start": The meeting will ___ at 9am.',
        opts:['start','commence','begin'], a:1,
        exp:'"Commence" → registro formal de "start".' },
      { id:'dg_c1_12', level:'C1', mapsTo:['register_shift'],
        type:'choice', q:'Which is appropriate for a formal email?',
        opts:['Get back to me soon','Please do not hesitate to contact me','Ping me when you can'], a:1,
        exp:'Fórmula epistolar formal estándar.' },
      { id:'dg_c1_13', level:'C1', mapsTo:['hedging_c1'],
        type:'choice', q:'The results ___ that further research is needed.',
        opts:['prove','suggest','confirm'], a:1,
        exp:'"Suggest" → hedging cauteloso.' },
      { id:'dg_c1_14', level:'C1', mapsTo:['hedging_c1'],
        type:'choice', q:'The findings are ___ consistent with previous research.',
        opts:['largely','completely','absolutely'], a:0,
        exp:'"Largely consistent" → adverbio hedging.' },
      { id:'dg_c1_15', level:'C1', mapsTo:['complex_noun_phrases'],
        type:'choice', q:'Which is a correctly built complex NP?',
        opts:['a rapidly tech expanding start-up','a rapidly expanding tech start-up','a tech rapidly expanding start-up'], a:1,
        exp:'Orden: adverb + participle + noun modifier + head noun.' },
      { id:'dg_c1_16', level:'C1', mapsTo:['complex_noun_phrases'],
        type:'choice', q:'Identify the head noun: "the latest peer-reviewed research findings from three continents"',
        opts:['research','findings','continents'], a:1,
        exp:'"Findings" es el núcleo del sintagma nominal.' },
      { id:'dg_c1_17', level:'C1', mapsTo:['advanced_connectors'],
        type:'choice', q:'___ the results are promising, further research is required.',
        opts:['Although','Whilst','Despite'], a:1,
        exp:'"Whilst" → contraste simultáneo formal.' },
      { id:'dg_c1_18', level:'C1', mapsTo:['advanced_connectors'],
        type:'choice', q:'___ together, these studies paint a troubling picture.',
        opts:['Taken','Put','All'], a:0,
        exp:'"Taken together" → señalización de síntesis.' },
      { id:'dg_c1_19', level:'C1', mapsTo:['stylistic_inversion'],
        type:'choice', q:'"We came, we saw, we conquered." This is an example of ___.',
        opts:['polysyndeton','asyndeton','tricolon'], a:1,
        exp:'"Asyndeton": lista sin conjunciones para ritmo rápido.' },
      { id:'dg_c1_20', level:'C1', mapsTo:['stylistic_inversion'],
        type:'choice', q:'"Ask not what your country can do for you — ask what you can do for your country." This is ___.',
        opts:['anaphora','antithesis','parenthetical remark'], a:1,
        exp:'"Antithesis": contraste de ideas opuestas en estructura paralela.' }
    ]
  };


  // ============================================================
  // ALIASES
  // ============================================================
  const grammarIdAliasesC1 = {
    'c1_mixed_cond':     'mixed_conditionals_c1',
    'c1_nominal':        'nominalization',
    'c1_fronting':       'fronting_focusing',
    'c1_modality':       'advanced_modality',
    'c1_ellipsis':       'ellipsis_substitution',
    'c1_register':       'register_shift',
    'c1_hedging':        'hedging_c1',
    'c1_noun_phrases':   'complex_noun_phrases',
    'c1_connectors':     'advanced_connectors',
    'c1_stylistic':      'stylistic_inversion'
  };


  // ============================================================
  // CONFIGURACIÓN CENTRAL
  // ============================================================
  const grammarRouteConfigC1 = {
    type: 'grammar', source: 'modulesDataC1', version: '1.0',
    requiredScore: 80, homologationScore: 85, reinforcementThreshold: 75,
    path: grammarLearningPathC1, aliases: grammarIdAliasesC1,
    competencies: grammarModuleCompetencyMapC1,
    prerequisites: grammarPrerequisitesC1,
    diagnostic: grammarDiagnosticBlueprintC1
  };


  // ============================================================
  // EXPORTACIÓN — Navegador
  // ============================================================
  if (typeof window !== 'undefined') {
    if (window.modulesData) {
      Object.assign(window.modulesData, modulesDataC1);
    } else {
      window.modulesData = modulesDataC1;
    }

    if (Array.isArray(window.grammarLearningPath)) {
      const alreadyAdded = window.grammarLearningPath.some(l => l.level === 'C1');
      if (!alreadyAdded) window.grammarLearningPath.push(...grammarLearningPathC1);
    } else {
      window.grammarLearningPath = grammarLearningPathC1;
    }

    if (window.grammarModuleCompetencyMap) Object.assign(window.grammarModuleCompetencyMap, grammarModuleCompetencyMapC1);
    if (window.grammarPrerequisites)       Object.assign(window.grammarPrerequisites,       grammarPrerequisitesC1);
    if (window.grammarIdAliases)           Object.assign(window.grammarIdAliases,           grammarIdAliasesC1);

    window.grammarDiagnosticBlueprintC1 = grammarDiagnosticBlueprintC1;
    window.grammarRouteConfigC1         = grammarRouteConfigC1;
    window.modulesDataC1                = modulesDataC1;
    window.grammarLearningPathC1        = grammarLearningPathC1;
    window.grammarModuleCompetencyMapC1 = grammarModuleCompetencyMapC1;
    window.grammarPrerequisitesC1       = grammarPrerequisitesC1;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      modulesDataC1, grammarLearningPathC1, grammarIdAliasesC1,
      grammarModuleCompetencyMapC1, grammarPrerequisitesC1,
      grammarDiagnosticBlueprintC1, grammarRouteConfigC1
    };
  }

}()); // fin IIFE
