// data-reading-writing-c1.js v1.0 — LEOENGLISH · READING & WRITING C1
// Marco Común Europeo de Referencia (MCER) — Nivel C1 (Advanced)
// Añadir en index.html DESPUÉS de data-reading-writing-b2.js y ANTES de app.js

(function () {
  'use strict';

  // ============================================================
  // READING TEXTS C1 — 6 textos con 7 preguntas cada uno
  // ============================================================
  const readingTextsC1 = [

    {
      id: 'philosophy_free_will_c1',
      title: 'Free Will and the Neuroscience of Choice',
      level: 'C1',
      levelColor: '#7C3AED',
      topic: 'Filosofía y neurociencia',
      questions: 7,
      desc: 'Texto filosófico-científico C1. Practica inferencia compleja, hedging C1, nominalización y vocabulario abstracto.',
      body: `The question of whether human beings possess genuine free will has occupied philosophers for millennia. What has changed in recent decades is the arrival of neuroscience as a participant in the debate — and its findings have proved deeply unsettling for those who wish to maintain that our choices are truly our own.<br><br>
In a series of now-celebrated experiments conducted in the 1980s, neuroscientist Benjamin Libet demonstrated that measurable brain activity — the so-called "readiness potential" — precedes by several hundred milliseconds the moment at which a subject reports becoming conscious of their intention to act. The implication would appear to be stark: the decision has, in some meaningful sense, already been made before we are aware of having made it.<br><br>
Critics of this interpretation have been swift to point out its limitations. The experiments involved trivial voluntary movements — the flicking of a wrist — and the leap from such micro-decisions to the complex, deliberative choices that characterise moral agency is considerable. Moreover, the reliability of introspective reports about the timing of conscious intentions has itself been called into question.<br><br>
What emerges from this debate is not a clean resolution but a richer understanding of the complexity involved. It may well be that "free will" — as popularly conceived — is a useful fiction, a narrative we construct to make sense of behaviour that is, at the neural level, far more mechanistic than we care to admit. Whether this realisation ought to change how we hold people morally responsible is perhaps the most pressing question of all.`,
      qs: [
        { type: 'choice', q: 'What did Libet\'s experiments appear to demonstrate?', opts: ['The brain has no role in voluntary movement', 'Brain activity precedes conscious awareness of intention to act', 'Consciousness is faster than neural activity'], a: 1, exp: '"readiness potential precedes... the moment at which a subject reports becoming conscious of their intention to act"' },
        { type: 'fill', q: 'The implication of Libet\'s findings would ___ to be stark: the decision has already been made before we are aware of it.', a: 'appear', exp: '"The implication would appear to be stark" — hedging with "would appear".' },
        { type: 'choice', q: 'What is the main criticism of Libet\'s experiments?', opts: ['They were not published', 'They involved trivial actions not representative of complex moral choices', 'They used animals not humans'], a: 1, exp: '"The experiments involved trivial voluntary movements... the leap to complex, deliberative choices... is considerable."' },
        { type: 'choice', q: 'What does "introspective reports" mean in this context?', opts: ['Data from brain scans', 'Participants\' own accounts of their mental experience', 'Independent scientific observations'], a: 1, exp: '"Introspective" refers to examining one\'s own conscious experience — here, reports about when one became aware of intending to act.' },
        { type: 'fill', q: '"Free will" may be a useful ___, a narrative we construct to make sense of behaviour.', a: 'fiction', exp: '"a useful fiction, a narrative we construct"' },
        { type: 'choice', q: 'What rhetorical device is used in "What emerges from this debate is not a clean resolution but a richer understanding"?', opts: ['Anaphora', 'Antithesis', 'Tricolon'], a: 1, exp: 'Antithesis: "not a clean resolution BUT a richer understanding" — two contrasting ideas in parallel structure.' },
        { type: 'choice', q: 'What does the author identify as the most important question raised by this debate?', opts: ['Whether free will exists at a neural level', 'Whether this changes how we hold people morally responsible', 'Whether Libet\'s methodology was sound'], a: 1, exp: '"Whether this realisation ought to change how we hold people morally responsible is perhaps the most pressing question of all."' }
      ],
      skillFocus: ['Philosophical text', 'Complex inference', 'Hedging C1', 'Abstract vocabulary', 'Rhetorical devices in context'],
      communicativeTask: 'Write a structured argument (10–12 sentences) on whether free will matters for moral responsibility. Use hedging throughout and include at least one antithesis and one wh-cleft.',
      portfolioEvidence: 'Philosophical argument — free will and responsibility'
    },

    {
      id: 'colonial_language_c1',
      title: 'Language, Power and the Colonial Legacy',
      level: 'C1',
      levelColor: '#B45309',
      topic: 'Lingüística y postcolonialismo',
      questions: 7,
      desc: 'Texto de análisis crítico C1 sobre lengua y poder. Practica lectura ideológica, nominalización y discurso académico.',
      body: `Language has never been a neutral instrument. The history of colonial expansion is, in no small part, a history of linguistic imposition — the systematic privileging of the coloniser's tongue over the languages of the colonised, with consequences that persist to the present day.<br><br>
Nowhere is this more apparent than in the enduring dominance of English as the global language of commerce, science and diplomacy. That English achieved this status not solely through the intrinsic qualities of the language itself, but through centuries of military, economic and cultural coercion, is a fact that its contemporary prestige tends to obscure. The naturalisation of English as a "neutral" medium of international communication is, it could be argued, itself an ideological act.<br><br>
This is not to suggest that individuals who learn English as an additional language are thereby complicit in perpetuating colonial hierarchies. The picture is considerably more nuanced. English has, for many, become a tool of empowerment — a means of accessing educational and economic opportunities otherwise closed to them. What is perhaps most striking is the speed with which formerly colonised communities have appropriated the language and made it their own: postcolonial literature in English, from Achebe to Díaz, represents some of the most vital writing of the past century.<br><br>
The question, then, is not whether to engage with English, but how to do so critically — to use the language while remaining aware of the histories it carries, and to insist that other languages be accorded equal dignity and institutional support.`,
      qs: [
        { type: 'choice', q: 'What is the author\'s main argument about language?', opts: ['Language is always politically neutral', 'Language reflects and perpetuates power relations', 'English is the best language for international use'], a: 1, exp: '"Language has never been a neutral instrument" — it reflects power; colonial expansion was partly linguistic imposition.' },
        { type: 'fill', q: 'English achieved its global status through centuries of military, economic and cultural ___.', a: 'coercion', exp: '"through centuries of military, economic and cultural coercion"' },
        { type: 'choice', q: 'What does "naturalisation" mean in this context?', opts: ['Being granted citizenship', 'Making something appear normal or inevitable', 'Translating a text into another language'], a: 1, exp: '"The naturalisation of English as a neutral medium" = making it seem natural/neutral when it is in fact historically contingent.' },
        { type: 'choice', q: 'What is the author\'s view on individuals who learn English?', opts: ['They are complicit in colonialism', 'The situation is more nuanced — English can also empower', 'They should refuse to use it'], a: 1, exp: '"This is not to suggest that individuals... are thereby complicit... The picture is considerably more nuanced."' },
        { type: 'fill', q: 'What rhetorical structure begins the third paragraph: "What is perhaps most striking is the speed with which..."?', a: 'wh-cleft', exp: '"What is perhaps most striking is..." — wh-cleft sentence for emphasis.' },
        { type: 'choice', q: 'What does the author mean by postcolonial writers having "appropriated" the language?', opts: ['They copied English literature', 'They took ownership of English and transformed it for their own purposes', 'They translated colonial texts'], a: 1, exp: '"appropriated the language and made it their own" — taking a tool imposed on them and reshaping it.' },
        { type: 'choice', q: 'What does the author ultimately recommend?', opts: ['Abandoning English entirely', 'Engaging with English critically while supporting other languages', 'Making English the only international language'], a: 1, exp: '"to use the language while remaining aware of the histories it carries, and to insist that other languages be accorded equal dignity"' }
      ],
      skillFocus: ['Critical reading', 'Ideological analysis', 'Nominalisation in context', 'Academic discourse', 'Author positioning'],
      communicativeTask: 'Write a critical analysis (10–12 sentences) of the relationship between language and power in your own context. Use nominalisations, hedging and at least one wh-cleft.',
      portfolioEvidence: 'Critical analysis — language and power'
    },

    {
      id: 'economic_inequality_c1',
      title: 'The Inequality Paradox',
      level: 'C1',
      levelColor: '#DC2626',
      topic: 'Economía y sociedad',
      questions: 7,
      desc: 'Ensayo argumentativo C1 sobre desigualdad. Practica análisis de estructura argumentativa compleja, concesión avanzada y cohesión léxica.',
      body: `It is a curious feature of contemporary discourse that economic inequality is simultaneously one of the most extensively documented and one of the least effectively addressed problems of our time. The data are unambiguous: by virtually every measure, the gap between the wealthiest and the poorest has widened dramatically over the past four decades in most advanced economies. Yet the political will to reverse this trend remains, to say the least, elusive.<br><br>
Part of the explanation lies in what might be called the "aspiration trap". Large segments of the population — including many who would materially benefit from redistributive policies — resist such measures on the grounds that they might one day achieve the kind of wealth that redistribution would constrain. This forward-looking identification with the interests of the rich, rather than with one's current economic position, is a remarkably durable feature of democratic politics in market societies.<br><br>
A further complication is the relationship between inequality and growth. The orthodox view held, for many decades, that some degree of inequality was a necessary incentive for innovation and risk-taking. This position has been substantially undermined by recent research suggesting that high levels of inequality are in fact correlated with lower social mobility, weaker aggregate demand and reduced investment in public goods — all of which tend to suppress long-term growth.<br><br>
What is perhaps most troubling is that the systems best placed to address inequality — taxation, education, healthcare — are themselves most vulnerable to capture by the very interests they are supposed to constrain. Whether democratic institutions retain sufficient independence to break this cycle is a question on which the future of egalitarian politics may well depend.`,
      qs: [
        { type: 'choice', q: 'What "curious feature" does the author identify in the opening paragraph?', opts: ['Inequality is declining globally', 'Inequality is well-documented but poorly addressed', 'Economists disagree about whether inequality has grown'], a: 1, exp: '"simultaneously one of the most extensively documented and one of the least effectively addressed problems"' },
        { type: 'fill', q: 'The author calls the tendency to resist redistribution the "___ trap".', a: 'aspiration', exp: '"what might be called the \'aspiration trap\'"' },
        { type: 'choice', q: 'What does "forward-looking identification with the interests of the rich" mean?', opts: ['Admiring wealthy people', 'Voting against one\'s current interests because of hopes of future wealth', 'Supporting tax cuts for the wealthy'], a: 1, exp: 'People resist redistribution because they identify with what they hope to become, not what they currently are.' },
        { type: 'choice', q: 'What has recent research suggested about high inequality and growth?', opts: ['High inequality accelerates growth', 'High inequality is correlated with weaker growth indicators', 'The relationship is irrelevant'], a: 1, exp: '"high levels of inequality are in fact correlated with lower social mobility, weaker aggregate demand and reduced investment in public goods"' },
        { type: 'fill', q: 'The orthodox view that inequality incentivises innovation has been substantially ___.', a: 'undermined', exp: '"This position has been substantially undermined by recent research."' },
        { type: 'choice', q: 'What does "capture" mean in "vulnerable to capture by the very interests they are supposed to constrain"?', opts: ['Being photographed', 'Being controlled or corrupted by those they should regulate', 'Being temporarily suspended'], a: 1, exp: '"Regulatory capture" — when institutions meant to regulate powerful interests are instead controlled by them.' },
        { type: 'choice', q: 'What cohesion device connects the four paragraphs?', opts: ['Repeated anaphora', 'A progressive argument: data → cause → complication → crisis', 'Question-and-answer format'], a: 1, exp: 'The essay builds an argument step by step: documenting the problem → explaining persistence → challenging orthodoxy → identifying the deeper crisis.' }
      ],
      skillFocus: ['Complex argument structure', 'Advanced concession', 'Lexical cohesion', 'Economic vocabulary C1', 'Signposting'],
      communicativeTask: 'Write a structured essay (12 sentences) arguing for or against a specific policy to address inequality. Use at least: one wh-cleft, one concession ("whilst / granted"), one nominalization and "it may well be that".',
      portfolioEvidence: 'Argumentative essay — economic inequality'
    },

    {
      id: 'literary_modernism_c1',
      title: 'Stream of Consciousness: Reading the Inner World',
      level: 'C1',
      levelColor: '#059669',
      topic: 'Literatura y crítica literaria',
      questions: 7,
      desc: 'Texto de crítica literaria C1. Practica análisis de estilo, dispositivos retóricos avanzados y vocabulario literario.',
      body: `When Virginia Woolf declared that the task of the novelist was to "examine for a moment an ordinary mind on an ordinary day", she was articulating not merely a personal aesthetic preference but a wholesale challenge to the conventions of Victorian fiction. The novel, she argued, had for too long concerned itself with the external machinery of plot — with marriages, inheritances and social manoeuvring — at the expense of the one thing that made human experience irreducibly singular: consciousness itself.<br><br>
The technique that emerged from this conviction — stream of consciousness — represented one of the most radical formal innovations in the history of the novel. Rather than filtering a character's inner life through the orderly conventions of reported speech, writers like Woolf, Joyce and Faulkner sought to replicate the actual texture of thought: its associative leaps, its unfinished sentences, its surprising juxtapositions of the mundane and the profound.<br><br>
What distinguishes the best stream-of-consciousness writing from mere incoherence is precisely the rigour with which the apparent disorder is constructed. Woolf's Mrs Dalloway, for instance, moves between multiple consciousnesses with a fluidity that is, on examination, extraordinarily controlled. The transitions — so seamless as to be almost invisible — are the product of meticulous craft, not of spontaneity.<br><br>
Whether stream of consciousness remains a viable technique for contemporary writers is a question worth raising. In an age saturated with fragmented, non-linear digital communication, the technique's original power to disorient and defamiliarise may have diminished. Yet the fundamental aspiration it embodies — to render the full complexity of a human mind in motion — remains as urgent as it has ever been.`,
      qs: [
        { type: 'choice', q: 'What was Woolf\'s critique of Victorian fiction?', opts: ['It was too focused on consciousness', 'It prioritised plot machinery over the inner life', 'It was too short and lacked complexity'], a: 1, exp: '"concerned itself with the external machinery of plot... at the expense of... consciousness itself"' },
        { type: 'fill', q: 'Stream of consciousness sought to replicate the actual ___ of thought, including associative leaps and unfinished sentences.', a: 'texture', exp: '"sought to replicate the actual texture of thought"' },
        { type: 'choice', q: 'What does the author argue distinguishes good stream-of-consciousness writing from "mere incoherence"?', opts: ['Its length and complexity', 'The rigour with which apparent disorder is constructed', 'The number of characters it includes'], a: 1, exp: '"What distinguishes the best stream-of-consciousness writing from mere incoherence is precisely the rigour with which the apparent disorder is constructed."' },
        { type: 'choice', q: 'Identify the rhetorical device in: "The transitions — so seamless as to be almost invisible — are the product of meticulous craft, not of spontaneity."', opts: ['Anaphora', 'Antithesis with parenthetical remark', 'Tricolon'], a: 1, exp: 'Antithesis ("craft, not spontaneity") + parenthetical remark (dashes) — two stylistic devices combined.' },
        { type: 'fill', q: 'Woolf\'s Mrs Dalloway moves between multiple ___ with extraordinary fluidity and control.', a: 'consciousnesses', exp: '"moves between multiple consciousnesses with a fluidity that is... extraordinarily controlled"' },
        { type: 'choice', q: 'What concern does the author raise about stream of consciousness for contemporary writers?', opts: ['It is too difficult to write', 'Its disorienting power may have diminished in an age of fragmented digital communication', 'Publishers no longer accept it'], a: 1, exp: '"In an age saturated with fragmented, non-linear digital communication, the technique\'s original power... may have diminished."' },
        { type: 'choice', q: 'What complex noun phrase opens the final sentence?', opts: ['"Whether stream of consciousness"', '"The fundamental aspiration it embodies"', '"An age saturated with fragmented communication"'], a: 1, exp: '"The fundamental aspiration it embodies" — complex NP: determiner + abstract noun + relative clause (postmodified).' }
      ],
      skillFocus: ['Literary criticism', 'Complex noun phrases in context', 'Stylistic analysis', 'Rhetorical devices C1'],
      communicativeTask: 'Write a critical analysis (10–12 sentences) of a literary technique used by a writer you have studied. Use complex noun phrases, at least one parenthetical remark and one antithesis.',
      portfolioEvidence: 'Literary criticism — modernist technique'
    },

    {
      id: 'ethics_technology_c1',
      title: 'Algorithmic Decision-Making and the Question of Justice',
      level: 'C1',
      levelColor: '#0891B2',
      topic: 'Ética y tecnología',
      questions: 7,
      desc: 'Texto de ética aplicada C1. Practica lectura de argumentos filosófico-técnicos, distanciamiento epistémico y vocabulario abstracto.',
      body: `When an algorithm denies someone a loan, determines that a prisoner should not be paroled, or flags a CV as unsuitable before a human recruiter has seen it, a fundamental question arises: who is accountable? The system? Its designers? The organisation that deployed it? The answer, more often than not, is disturbingly unclear.<br><br>
Proponents of algorithmic decision-making argue that it eliminates the cognitive biases — racial, gender-based, socio-economic — that inevitably distort human judgement. A well-trained model, the argument goes, makes decisions based purely on data. Yet this ostensibly neutral position conceals a deeper problem: the data on which these systems are trained is itself a product of historical human decisions, many of which were systematically unjust. Training an algorithm on historical hiring data, for instance, will tend to reproduce and amplify the very biases it was supposedly designed to eliminate.<br><br>
What is perhaps most troubling is the opacity of these systems. Unlike a human judge — whose reasoning, however flawed, can in principle be examined, challenged and appealed — a complex neural network is, in the blunt but accurate phrase of critics, a "black box". Its internal workings are, for all practical purposes, unintelligible even to its designers.<br><br>
This opacity has profound implications for justice. The right to understand the reasons for a decision that affects one's life is not merely a procedural nicety but a foundational principle of any system that claims to be fair. Reconciling the efficiency gains of algorithmic decision-making with this principle of explicability is among the most pressing legal and ethical challenges of the coming decades.`,
      qs: [
        { type: 'choice', q: 'What fundamental question does algorithmic decision-making raise, according to the author?', opts: ['Whether algorithms are faster than humans', 'Who is accountable when an algorithm makes a decision', 'Whether data is reliable'], a: 1, exp: '"a fundamental question arises: who is accountable? The system? Its designers? The organisation that deployed it?"' },
        { type: 'fill', q: 'Proponents argue that algorithms eliminate the ___ biases that distort human judgement.', a: 'cognitive', exp: '"it eliminates the cognitive biases... that inevitably distort human judgement"' },
        { type: 'choice', q: 'What is the "deeper problem" with using historical data to train algorithms?', opts: ['Historical data is too old to be useful', 'Historical data reflects past injustices, which the algorithm then reproduces', 'Algorithms cannot process large datasets'], a: 1, exp: '"the data on which these systems are trained is itself a product of historical human decisions, many of which were systematically unjust"' },
        { type: 'choice', q: 'What does "black box" mean in this context?', opts: ['A recording device', 'A system whose internal workings are opaque and unintelligible', 'A type of encrypted data storage'], a: 1, exp: '"a complex neural network is... a \'black box\'. Its internal workings are... unintelligible even to its designers."' },
        { type: 'fill', q: 'The right to understand reasons for a decision is described as a ___ principle of any fair system.', a: 'foundational', exp: '"a foundational principle of any system that claims to be fair"' },
        { type: 'choice', q: 'What ellipsis device is used in "The system? Its designers? The organisation that deployed it?"', opts: ['Polysyndeton', 'Asyndeton with rhetorical questions', 'Fronting'], a: 1, exp: 'Asyndeton (no conjunctions) + rhetorical questions — rapid-fire listing for rhetorical effect.' },
        { type: 'choice', q: 'What does "explicability" refer to in the final paragraph?', opts: ['The speed of algorithmic systems', 'The ability to explain and understand how a decision was reached', 'The legal framework governing AI'], a: 1, exp: '"the principle of explicability" = the right to have decisions explained — a legal concept in AI ethics.' }
      ],
      skillFocus: ['Applied ethics reading', 'Epistemic distancing C1', 'Abstract vocabulary', 'Rhetorical questions and asyndeton'],
      communicativeTask: 'Write a position paper (10–12 sentences) arguing for or against algorithmic decision-making in one specific context (hiring, sentencing, credit). Use hedging, at least one parenthetical remark and one complex noun phrase.',
      portfolioEvidence: 'Position paper — algorithmic justice'
    },

    {
      id: 'extended_metaphor_c1',
      title: 'Extract: Maps of the Unmappable',
      level: 'C1',
      levelColor: '#6366F1',
      topic: 'Prosa literaria avanzada',
      questions: 7,
      desc: 'Extracto de prosa literaria avanzada C1. Practica análisis de metáfora extendida, registro literario y recursos retóricos complejos.',
      body: `Grief, she had come to understand, was not a territory one crossed and left behind. It was more like a language — one that, once learned, restructured the way you perceived everything else. You did not stop speaking it; you simply became less aware that you were speaking it at all.<br><br>
In the weeks after her mother's death, Mira had moved through her familiar world as though it had been translated into a dialect she almost, but not quite, recognised. The coffee shop on the corner still smelled of ground beans and scalded milk. The walk to the tube was still seven minutes, four if she was late. But none of it meant what it had meant before. The objects of her life had been drained of their context, like words lifted from a sentence and left to stand alone, denuded of grammar.<br><br>
What surprised her — what she had not been warned about — was the exhaustion. Not the dramatic, cinematic exhaustion of weeping, but the low-grade, relentless fatigue of having to perform, moment to moment, the fiction that the world still cohered. Every conversation required simultaneous translation. Every smile was a minor act of will.<br><br>
She thought, sometimes, of the cartographers who had mapped unknown coastlines, sketching the edges of continents they could not see in their entirety. They had given names to inlets they would never return to, drawn borders around territories that remained, in every meaningful sense, unmapped. That was grief, she thought. You charted what you could. The rest remained terra incognita — present, pressing, and entirely beyond the reach of language.`,
      qs: [
        { type: 'choice', q: 'What extended metaphor does the author use to describe grief?', opts: ['Grief as a journey to be completed', 'Grief as a language that restructures perception', 'Grief as a disease to be cured'], a: 1, exp: '"Grief... was more like a language — one that, once learned, restructured the way you perceived everything else."' },
        { type: 'fill', q: 'Mira moved through her familiar world as though it had been ___ into a dialect she almost recognised.', a: 'translated', exp: '"as though it had been translated into a dialect she almost, but not quite, recognised"' },
        { type: 'choice', q: 'What does "denuded of grammar" mean in context?', opts: ['Written incorrectly', 'Stripped of the connections that give things meaning', 'Made simpler than before'], a: 1, exp: '"words lifted from a sentence and left to stand alone, denuded of grammar" — objects stripped of their relational meaning.' },
        { type: 'choice', q: 'What type of exhaustion surprised Mira?', opts: ['Physical exhaustion from not sleeping', 'The low-grade fatigue of performing normality', 'The exhaustion of intense weeping'], a: 1, exp: '"the low-grade, relentless fatigue of having to perform, moment to moment, the fiction that the world still cohered"' },
        { type: 'fill', q: 'Every smile was described as a minor act of ___.', a: 'will', exp: '"Every smile was a minor act of will."' },
        { type: 'choice', q: 'What is the significance of the cartographer image in paragraph 4?', opts: ['It introduces a new character', 'It extends the mapping metaphor to suggest grief is partly unmappable', 'It describes Mira\'s profession'], a: 1, exp: 'The cartographers mapped what they could but left much "unmapped" — like grief: some of it can be articulated, but much remains "terra incognita".' },
        { type: 'choice', q: 'What does "terra incognita" mean and what effect does it create?', opts: ['A scientific term for depression', 'Unknown territory — it creates a sense of the limits of language and mapping grief', 'A place Mira wants to visit'], a: 1, exp: '"Terra incognita" = unknown land (Latin) — it returns to the cartography metaphor and signals that grief ultimately exceeds language.' }
      ],
      skillFocus: ['Extended metaphor analysis', 'Literary prose C1', 'Rhetorical devices in fiction', 'Emotional register', 'Latin and classical references'],
      communicativeTask: 'Write a paragraph (8–10 sentences) using an extended metaphor of your own to describe an abstract experience (memory, time, hope, fear). Annotate each rhetorical device you use.',
      portfolioEvidence: 'Extended metaphor creative writing — annotated'
    }

  ]; // fin readingTextsC1


  // ============================================================
  // WRITING EXERCISES C1 — 6 ejercicios variados
  // ============================================================
  const writingExercisesC1 = [

    {
      id: 'error_correction_c1_advanced',
      title: 'Caza de errores: registro y estructuras C1',
      type: 'error',
      typeLabel: 'Corrección',
      typeColor: '#7C3AED',
      desc: 'Corrige errores sutiles de registro, nominalización, hedging y dispositivos retóricos en nivel C1.',
      tasks: [
        { wrong: 'The decide to expand was surprised everyone.', answer: 'The decision to expand surprised everyone.', tip: '"decide" → "decision" (nominalización). "Was surprised" incorrecto: el sujeto activo es "the decision".' },
        { wrong: 'It is certain that the results will improve.', answer: 'It would appear that the results may improve.', tip: 'C1 hedging: "it is certain" demasiado fuerte en contexto académico → "it would appear that" + modal.' },
        { wrong: 'The government commenced to reduce the deficit.', answer: 'The government commenced reducing the deficit.', tip: '"Commence" va seguido de gerundio, no de infinitivo.' },
        { wrong: 'Not only she won the award, but also broke the record.', answer: 'Not only did she win the award, but she also broke the record.', tip: '"Not only" + inversión: did she win. Y "she also" antes del segundo verbo.' },
        { wrong: 'What I need it is more time to think.', answer: 'What I need is more time to think.', tip: 'Wh-cleft: "What I need is + noun phrase". No se añade pronombre extra (it).' },
        { wrong: 'The failure of them to deliver was noted.', answer: 'Their failure to deliver was noted.', tip: 'Genitivo nominal: "their failure" (no "the failure of them") → registro más formal y natural.' }
      ],
      learningGoal: 'Identificar errores sutiles de registro, nominalización y estructuras C1.',
      portfolioEvidence: 'Error correction log C1'
    },

    {
      id: 'transform_c1_nominalization',
      title: 'Transformación: Nominalización y registro C1',
      type: 'transform',
      typeLabel: 'Transformación',
      typeColor: '#B45309',
      desc: 'Reescribe oraciones informales en registro académico usando nominalización y pasiva impersonal.',
      tasks: [
        { original: 'Scientists found out that the drug worked.', answer: 'The discovery that the drug was effective was confirmed.', tip: 'find out → discovery; worked → was effective; pasiva impersonal.' },
        { original: 'The government failed to act quickly.', answer: 'The government\'s failure to act swiftly was widely criticised.', tip: 'failed to act → failure to act (nominalización de verbo + infinitivo).' },
        { original: 'They showed that inequality was rising.', answer: 'Their findings demonstrated a significant rise in inequality.', tip: 'showed → demonstrated (formal); rising → rise (nominalización); "their findings" como sujeto.' },
        { original: 'We decided to cut costs.', answer: 'The decision to reduce expenditure was approved.', tip: 'decided → decision; cut costs → reduce expenditure (formal lexis); pasiva impersonal.' },
        { original: 'He developed a new method very quickly.', answer: 'The rapid development of a novel methodology was achieved.', tip: 'developed → development; new → novel; very quickly → rapid (premodificación).' },
        { original: 'People are becoming more aware of climate risks.', answer: 'There has been a significant increase in public awareness of climate-related risks.', tip: 'becoming more aware → increase in awareness (nominalización); pasiva existencial.' }
      ],
      learningGoal: 'Producir texto académico denso mediante nominalización sistemática y léxico formal.',
      portfolioEvidence: 'Nominalization transformation C1'
    },

    {
      id: 'order_c1_rhetorical',
      title: 'Ordena: Dispositivos retóricos C1',
      type: 'order',
      typeLabel: 'Ordenar',
      typeColor: '#059669',
      desc: 'Ordena palabras para construir frases con anáfora, antítesis, inversión y cleft sentences.',
      tasks: [
        { words: ['Not', 'did', 'only', 'she', 'pass,', 'distinction.', 'she', 'but', 'also', 'passed', 'with'], answer: 'Not only did she pass, but she also passed with distinction.', tip: '"Not only + did + subject + verb, but + subject + also + verb."' },
        { words: ['justice', 'What', 'is', 'not', 'mercy.', 'requires', 'always', 'this', 'situation'], answer: 'What this situation requires is not always mercy.', tip: 'Wh-cleft: What + subject + verb + is + not always + noun.' },
        { words: ['such', 'was', 'the', 'silence', 'that', 'no', 'one', 'dared', 'speak.'], answer: 'Such was the silence that no one dared speak.', tip: '"Such was + noun + that + clause" → fronting del complemento para efecto dramático.' },
        { words: ['We', 'fight.', 'shall', 'We', 'shall', 'prevail.', 'We', 'shall', 'never', 'surrender.'], answer: 'We shall fight. We shall prevail. We shall never surrender.', tip: 'Anáfora: repetición de "We shall" al inicio de cada cláusula para efecto acumulativo.' },
        { words: ['asked', 'not', 'country', 'your', 'Ask', 'what', 'can', 'do', 'for', 'you.'], answer: 'Ask not what your country can do for you.', tip: 'Inversión retórica: "Ask not" (imperativo + NOT invertido, estilo JFK).' },
        { words: ['Having', 'the', 'evidence,', 'reviewed', 'all', 'the', 'committee', 'its', 'verdict.', 'reached'], answer: 'Having reviewed all the evidence, the committee reached its verdict.', tip: '"Having + past participle" → perfect participle clause para secuencia.' }
      ],
      learningGoal: 'Construir estructuras retóricas y estilísticas C1 con precisión sintáctica.',
      portfolioEvidence: 'Rhetorical structure ordering C1'
    },

    {
      id: 'free_writing_c1_position_paper',
      title: 'Escritura libre: posición académica C1',
      type: 'free',
      typeLabel: 'Escritura libre',
      typeColor: '#DC2626',
      desc: 'Redacta un texto de posición académica sobre un tema filosófico, ético o social.',
      prompt: 'To what extent is it ethically justifiable to use artificial intelligence in judicial sentencing decisions? Write a well-structured position paper (12–15 sentences). Your text must include: hedging language throughout, at least one wh-cleft, one nominalisation, one inverted conditional or inversion structure, one concessive connector (whilst/granted/be that as it may), and a final sentence that poses a rhetorical question.',
      minWords: 120,
      checklist: [
        'I established my position clearly and with appropriate hedging.',
        'I used a wh-cleft to emphasise a key point.',
        'I nominalized at least one verb or adjective.',
        'I used an inversion or inverted conditional.',
        'I acknowledged a counter-argument with a concessive connector.',
        'I ended with a rhetorical question that opens up the debate.'
      ],
      modelAnswer: 'It would appear that the deployment of AI in judicial sentencing raises fundamental questions about the nature of justice itself. What concerns many legal scholars is not the technology per se, but the opacity of the decision-making process it entails. Were such systems to be adopted without robust accountability mechanisms, the implications for due process would be severe. Granted, algorithmic systems may reduce certain forms of human bias; their implementation of consistent criteria is, in principle, a significant advantage. Nevertheless, the naturalisation of opaque systems in contexts where liberty is at stake ought to be treated with the utmost scepticism. Not only does such a development risk encoding historical injustices in seemingly neutral code, but it also fundamentally undermines the right to understand and challenge the reasons for a decision. The failure to address this tension — between efficiency and explicability — is not merely a technical problem; it is a moral and political one. On balance, the case for algorithmic sentencing remains, at best, unproven. Whether any gains in consistency could ever outweigh the loss of human judgement in matters of such consequence is a question that democratic societies have not yet begun to answer honestly.',
      learningGoal: 'Producir un texto académico-argumentativo de nivel C1 integrando estructuras complejas con cohesión y registro apropiados.',
      portfolioEvidence: 'Position paper — AI and judicial justice C1'
    },

    {
      id: 'dictation_c1_literary',
      title: 'Dictado: Prosa literaria y retórica C1',
      type: 'dictation',
      typeLabel: 'Dictado',
      typeColor: '#0891B2',
      desc: 'Escucha y escribe frases con dispositivos retóricos, inversión y nominalización de nivel C1.',
      sentences: [
        { text: 'What distinguishes great writing from competent writing is not vocabulary but vision.', focus: 'Wh-cleft: What + subject + verb + is + not X but Y (antithesis).' },
        { text: 'Never before had the collapse of a single institution carried such systemic consequences.', focus: 'Never before + Past Perfect invertido + nominalización (collapse, consequences).' },
        { text: 'It could be argued that the naturalisation of inequality is itself a political act.', focus: 'Hedging C1: "It could be argued that" + nominalización (naturalisation).' },
        { text: 'Having established the theoretical framework, the authors turn to its empirical implications.', focus: 'Perfect participle clause: Having + p.p. + subject + verb.' },
        { text: 'Such was the complexity of the situation that no single explanation would suffice.', focus: 'Fronted complement: Such was + noun + that + clause.' },
        { text: 'The erosion of trust — gradual, persistent, and ultimately irreversible — transformed the institution.', focus: 'Nominalización (erosion) + parenthetical remark con tricolon adjetival.' }
      ],
      learningGoal: 'Reproducir con precisión estructuras retóricas, nominalizaciones e inversiones propias del nivel C1.',
      portfolioEvidence: 'Dictado de prosa literaria y retórica C1'
    },

    {
      id: 'transform_c1_register_rhetorical',
      title: 'Transformación: Registro y retórica C1',
      type: 'transform',
      typeLabel: 'Transformación',
      typeColor: '#6366F1',
      desc: 'Transforma textos aplicando cambio de registro, inversión, dispositivos retóricos y nominalización.',
      tasks: [
        { original: 'A lot of people are becoming more worried about privacy.', answer: 'There has been a marked increase in public concern regarding privacy.', tip: 'a lot of → marked (formal intensifier); becoming more worried → increase in concern (nominalización); about → regarding (formal prep).' },
        { original: 'We have never seen such a complete failure of leadership before.', answer: 'Never before have we witnessed such a complete failure of leadership.', tip: 'Never before + Present Perfect invertido: Never before have we witnessed.' },
        { original: 'The thing that worries me most is the speed of change.', answer: 'What concerns me most profoundly is the rate of change.', tip: 'The thing that → What (wh-cleft); worries → concerns; most → most profoundly; speed → rate (formal).' },
        { original: 'If new regulations had been introduced, the crisis could have been avoided.', answer: 'Had new regulations been introduced, the crisis could have been averted.', tip: 'Had + p.p. → inverted third conditional; avoided → averted (formal synonym).' },
        { original: 'Governments need to do more to protect the environment.', answer: 'The imperative for governments to take more decisive action on environmental protection cannot be overstated.', tip: 'need to do → imperative (nominalización); cannot be overstated → litotes para énfasis.' },
        { original: 'It was the data that proved the theory wrong — not the experiment.', answer: 'It was the data, and not the experimental procedure, that served to refute the theoretical framework.', tip: 'It-cleft expandida + nominalización (experimental procedure, theoretical framework) + served to (formal).' }
      ],
      learningGoal: 'Aplicar sistemáticamente transformaciones de registro, retórica y nominalización a nivel C1.',
      portfolioEvidence: 'Register and rhetoric transformation C1'
    }

  ]; // fin writingExercisesC1


  // ============================================================
  // LEARNING PATHS C1
  // ============================================================
  const readingLearningPathC1 = [
    {
      level: 'C1',
      title: 'C1 · Reading Advanced',
      color: '#7C3AED',
      requiredScore: 75,
      texts: [
        'philosophy_free_will_c1',
        'colonial_language_c1',
        'economic_inequality_c1',
        'literary_modernism_c1',
        'ethics_technology_c1',
        'extended_metaphor_c1'
      ]
    }
  ];

  const writingLearningPathC1 = [
    {
      level: 'C1',
      title: 'C1 · Writing Advanced',
      color: '#7C3AED',
      requiredScore: 75,
      exercises: [
        'error_correction_c1_advanced',
        'transform_c1_nominalization',
        'order_c1_rhetorical',
        'free_writing_c1_position_paper',
        'dictation_c1_literary',
        'transform_c1_register_rhetorical'
      ]
    }
  ];


  // ============================================================
  // COMPETENCY MAPS C1
  // ============================================================
  const readingCompetencyMapC1 = {
    philosophy_free_will_c1:  { level: 'C1', skill: 'reading', weaknessLabel: 'Reading: Philosophical text & hedging C1', homologationGroup: 'c1_reading_philosophy', diagnosticTags: ['hedging_c1', 'inference', 'philosophy'] },
    colonial_language_c1:     { level: 'C1', skill: 'reading', weaknessLabel: 'Reading: Critical analysis & nominalization', homologationGroup: 'c1_reading_critical', diagnosticTags: ['nominalization', 'academic_discourse', 'ideology'] },
    economic_inequality_c1:   { level: 'C1', skill: 'reading', weaknessLabel: 'Reading: Complex argument & cohesion C1', homologationGroup: 'c1_reading_argument', diagnosticTags: ['advanced_connectors', 'lexical_cohesion', 'economics'] },
    literary_modernism_c1:    { level: 'C1', skill: 'reading', weaknessLabel: 'Reading: Literary criticism & stylistic devices C1', homologationGroup: 'c1_reading_literary', diagnosticTags: ['stylistic_devices', 'complex_noun_phrases', 'literature'] },
    ethics_technology_c1:     { level: 'C1', skill: 'reading', weaknessLabel: 'Reading: Applied ethics & epistemic distancing', homologationGroup: 'c1_reading_ethics', diagnosticTags: ['hedging_c1', 'advanced_modality', 'technology_ethics'] },
    extended_metaphor_c1:     { level: 'C1', skill: 'reading', weaknessLabel: 'Reading: Extended metaphor & literary prose C1', homologationGroup: 'c1_reading_prose', diagnosticTags: ['stylistic_devices', 'rhetoric', 'fiction_c1'] }
  };

  const writingCompetencyMapC1 = {
    error_correction_c1_advanced:       { level: 'C1', skill: 'writing', weaknessLabel: 'Writing: Error correction C1', homologationGroup: 'c1_writing_error', diagnosticTags: ['nominalization', 'hedging_c1', 'inversion_b2'] },
    transform_c1_nominalization:        { level: 'C1', skill: 'writing', weaknessLabel: 'Writing: Nominalization & formal register C1', homologationGroup: 'c1_writing_nominal', diagnosticTags: ['nominalization', 'register_shift', 'advanced_passives'] },
    order_c1_rhetorical:                { level: 'C1', skill: 'writing', weaknessLabel: 'Writing: Rhetorical structure ordering C1', homologationGroup: 'c1_writing_rhetorical', diagnosticTags: ['stylistic_inversion', 'fronting_focusing', 'anaphora_antithesis'] },
    free_writing_c1_position_paper:     { level: 'C1', skill: 'writing', weaknessLabel: 'Writing: Academic position paper C1', homologationGroup: 'c1_writing_position', diagnosticTags: ['hedging_c1', 'advanced_connectors', 'mixed_conditionals_c1'] },
    dictation_c1_literary:              { level: 'C1', skill: 'writing', weaknessLabel: 'Writing: Literary prose dictation C1', homologationGroup: 'c1_writing_dictation', diagnosticTags: ['stylistic_inversion', 'complex_noun_phrases', 'nominalization'] },
    transform_c1_register_rhetorical:   { level: 'C1', skill: 'writing', weaknessLabel: 'Writing: Register & rhetoric transformation C1', homologationGroup: 'c1_writing_transform', diagnosticTags: ['register_shift', 'fronting_focusing', 'inversion_b2'] }
  };


  // ============================================================
  // DIAGNÓSTICOS C1
  // ============================================================
  const readingDiagnosticBlueprintC1 = {
    id: 'reading_diagnostic_c1', title: 'Diagnóstico de Reading C1', levels: ['C1'],
    rules: { passScore: 75, homologationScore: 80, reinforcementThreshold: 70 },
    items: [
      { id: 'rd_c1_01', level: 'C1', mapsTo: ['philosophy_free_will_c1'],
        type: 'choice', q: '"The implication would appear to be stark." What does "would appear" signal?',
        opts: ['Certainty', 'Hedging — avoiding a definitive claim', 'A future event'], a: 1,
        exp: '"Would appear" → epistemic distancing: presenting an implication without fully committing to it.' },
      { id: 'rd_c1_02', level: 'C1', mapsTo: ['colonial_language_c1'],
        type: 'choice', q: '"What is perhaps most striking is the speed with which communities have appropriated the language." What structure is this?',
        opts: ['It-cleft', 'Wh-cleft with hedging adverb', 'Fronted adverbial'], a: 1,
        exp: '"What is perhaps most striking is..." — wh-cleft + "perhaps" as hedging adverb.' },
      { id: 'rd_c1_03', level: 'C1', mapsTo: ['economic_inequality_c1'],
        type: 'choice', q: 'What cohesion device links paragraphs in "The Inequality Paradox"?',
        opts: ['Repeated synonyms only', 'Progressive argument structure with signposting', 'Anaphora across all paragraphs'], a: 1,
        exp: 'Each paragraph builds on the previous: data → explanation → complication → crisis. Signposting: "Part of the explanation", "A further complication", "What is perhaps most troubling".' },
      { id: 'rd_c1_04', level: 'C1', mapsTo: ['extended_metaphor_c1'],
        type: 'choice', q: 'What is the dominant extended metaphor in "Maps of the Unmappable"?',
        opts: ['Grief as a journey', 'Grief as a language and unmapped territory', 'Grief as a physical illness'], a: 1,
        exp: 'Two intertwined metaphors: grief as language (paragraph 1) and grief as unmapped territory (paragraph 4), unified by the idea of things that resist full articulation.' }
    ]
  };

  const writingDiagnosticBlueprintC1 = {
    id: 'writing_diagnostic_c1', title: 'Diagnóstico de Writing C1', levels: ['C1'],
    rules: { passScore: 75, homologationScore: 80, reinforcementThreshold: 70 },
    items: [
      { id: 'wd_c1_01', level: 'C1', mapsTo: ['transform_c1_nominalization'],
        type: 'choice', q: '"Scientists found out the drug worked." → Formal: ___',
        opts: ['The finding of the drug working was confirmed.', 'The discovery that the drug was effective was confirmed.', 'It was found the drug had worked effectively.'], a: 1,
        exp: '"find out" → "discovery"; "worked" → "was effective"; impersonal passive → registro académico.' },
      { id: 'wd_c1_02', level: 'C1', mapsTo: ['transform_c1_register_rhetorical'],
        type: 'choice', q: '"We have never seen such failure before." → Inversion: ___',
        opts: ['Never we have seen such failure before.', 'Never before have we witnessed such failure.', 'Before never have we seen such a failure.'], a: 1,
        exp: '"Never before + Present Perfect invertido: have we witnessed." + "failure" sin artículo para efecto retórico.' },
      { id: 'wd_c1_03', level: 'C1', mapsTo: ['order_c1_rhetorical'],
        type: 'choice', q: 'Which sentence uses anaphora correctly?',
        opts: ['We need justice. Also, equality. And change.', 'We need justice, we need equality, we need change.', 'What we need is justice, equality and change.'], a: 1,
        exp: '"We need... we need... we need..." — anaphora: misma estructura al inicio de cada elemento.' },
      { id: 'wd_c1_04', level: 'C1', mapsTo: ['error_correction_c1_advanced'],
        type: 'choice', q: 'Which is the correct C1 hedged version of "The policy will work."?',
        opts: ['The policy must work.', 'It would appear that the policy may prove effective.', 'It is obvious the policy works.'], a: 1,
        exp: '"It would appear that... may prove effective" — doble hedging: "would appear" + "may" + "prove effective" (formal).' }
    ]
  };


  // ============================================================
  // EXPORTACIÓN — Navegador
  // ============================================================
  if (typeof window !== 'undefined') {

    if (Array.isArray(window.readingExpansionTexts)) {
      const existingIds = window.readingExpansionTexts.map(t => t.id);
      readingTextsC1.forEach(t => { if (!existingIds.includes(t.id)) window.readingExpansionTexts.push(t); });
    } else { window.readingExpansionTexts = readingTextsC1; }

    if (Array.isArray(window.writingExpansionExercises)) {
      const existingIds = window.writingExpansionExercises.map(e => e.id);
      writingExercisesC1.forEach(e => { if (!existingIds.includes(e.id)) window.writingExpansionExercises.push(e); });
    } else { window.writingExpansionExercises = writingExercisesC1; }

    if (Array.isArray(window.readingLearningPath)) {
      if (!window.readingLearningPath.some(l => l.level === 'C1')) window.readingLearningPath.push(...readingLearningPathC1);
    } else { window.readingLearningPath = readingLearningPathC1; }

    if (Array.isArray(window.writingLearningPath)) {
      if (!window.writingLearningPath.some(l => l.level === 'C1')) window.writingLearningPath.push(...writingLearningPathC1);
    } else { window.writingLearningPath = writingLearningPathC1; }

    if (window.readingCompetencyMap) Object.assign(window.readingCompetencyMap, readingCompetencyMapC1);
    if (window.writingCompetencyMap) Object.assign(window.writingCompetencyMap, writingCompetencyMapC1);

    window.readingDiagnosticBlueprintC1 = readingDiagnosticBlueprintC1;
    window.writingDiagnosticBlueprintC1 = writingDiagnosticBlueprintC1;
    window.readingTextsC1               = readingTextsC1;
    window.writingExercisesC1           = writingExercisesC1;
    window.readingLearningPathC1        = readingLearningPathC1;
    window.writingLearningPathC1        = writingLearningPathC1;
    window.readingCompetencyMapC1       = readingCompetencyMapC1;
    window.writingCompetencyMapC1       = writingCompetencyMapC1;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      readingTextsC1, writingExercisesC1,
      readingLearningPathC1, writingLearningPathC1,
      readingCompetencyMapC1, writingCompetencyMapC1,
      readingDiagnosticBlueprintC1, writingDiagnosticBlueprintC1
    };
  }

}()); // fin IIFE
