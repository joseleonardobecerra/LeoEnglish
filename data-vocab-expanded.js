// ============================================================
// data-vocab-expanded.js  — LeoEnglish v7.0
// VOCABULARIO EXPANDIDO A1 → C1
// Técnicas: contextual anchoring · word families · collocations
// · chunking · emotional hooks · spaced retrieval
// ============================================================

(function () {
  'use strict';

  // ============================================================
  // A1 — VOCABULARIO EXPANDIDO
  // ============================================================
  const vocabExpA1 = [
    {
      id: 'daily_routines_a1', title: 'Daily Routines — Tu día en inglés', icon: '🌅', count: 20,
      level: 'A1',
      teachingNote: 'Anchor each word with a personal action. Say it while doing it.',
      words: [
        { en: 'wake up',      es: 'despertarse',       example: 'I wake up at 6:30 every morning. My alarm is very loud.',
          chunk: 'wake up early / late', family: 'wake (v) · awake (adj) · awakening (n)' },
        { en: 'get up',       es: 'levantarse',         example: 'I wake up at 6:30 but I don\'t get up until 7.',
          chunk: 'get up immediately / slowly', family: 'get (v) — phrasal: get up, get dressed, get ready' },
        { en: 'have a shower', es: 'ducharse',          example: 'I always have a shower before breakfast.',
          chunk: 'have a quick / hot / cold shower', family: 'shower (n/v)' },
        { en: 'get dressed',  es: 'vestirse',           example: 'I get dressed in 5 minutes. I always choose my clothes the night before.',
          chunk: 'get dressed quickly / smartly', family: 'dress (v) · dressed (adj) · dressing (n)' },
        { en: 'have breakfast', es: 'desayunar',        example: 'I have breakfast at 7. I eat eggs and toast.',
          chunk: 'have a big / light / quick breakfast', family: 'breakfast (n) — related: lunch, dinner, snack' },
        { en: 'commute',      es: 'ir al trabajo/escuela', example: 'I commute by bus. It takes 40 minutes.',
          chunk: 'commute to work / school · long / short commute', family: 'commute (v/n) · commuter (n)' },
        { en: 'start work',   es: 'empezar a trabajar', example: 'I start work at 8 o\'clock. My office opens at 7:30.',
          chunk: 'start work on time / late', family: 'start = begin · work (v/n) · workplace (n)' },
        { en: 'take a break', es: 'tomar un descanso',  example: 'I take a break at 10:30. I have coffee and a biscuit.',
          chunk: 'take a short / 15-minute break', family: 'break (n/v) · break time (n)' },
        { en: 'have lunch',   es: 'almorzar',           example: 'I have lunch at 1 pm. I usually eat at my desk.',
          chunk: 'have a working lunch / light lunch', family: 'lunch (n/v) · lunchtime (n)' },
        { en: 'finish work',  es: 'terminar el trabajo', example: 'I finish work at 5. Then I go to the gym.',
          chunk: 'finish work early / on time / late', family: 'finish = complete · working hours (n)' },
        { en: 'do exercise',  es: 'hacer ejercicio',    example: 'I do exercise three times a week. I love running.',
          chunk: 'do regular / light / intense exercise', family: 'exercise (n/v) · fit (adj) · fitness (n)' },
        { en: 'cook dinner',  es: 'preparar la cena',   example: 'I cook dinner at 7. I enjoy trying new recipes.',
          chunk: 'cook a simple / elaborate dinner', family: 'cook (v/n) · cooking (n) · chef (n)' },
        { en: 'watch TV',     es: 'ver televisión',     example: 'I watch TV for an hour after dinner. I like documentaries.',
          chunk: 'watch TV late / binge-watch', family: 'watch (v/n) · TV show / series / channel' },
        { en: 'check social media', es: 'revisar las redes sociales', example: 'I check social media before bed. I try to limit it to 20 minutes.',
          chunk: 'check social media constantly / occasionally', family: 'social media = Instagram, TikTok, X, etc.' },
        { en: 'read',         es: 'leer',               example: 'I read for 30 minutes before sleeping. I prefer novels.',
          chunk: 'read a book / article / novel', family: 'read (v) · reader (n) · reading (n)' },
        { en: 'go to bed',    es: 'irse a dormir',      example: 'I go to bed at 11. I need 8 hours of sleep.',
          chunk: 'go to bed early / late', family: 'bed (n) · bedroom (n) · sleep (v/n)' },
        { en: 'set an alarm', es: 'poner la alarma',    example: 'I set an alarm for 6:30 every night.',
          chunk: 'set an alarm for... · forget to set an alarm', family: 'alarm (n) · alarm clock (n)' },
        { en: 'rush',         es: 'ir con prisa',       example: 'I always rush in the morning. I\'m never on time.',
          chunk: 'rush to work / rush hour (hora punta)', family: 'rush (v/n) · in a rush (adj phrase)' },
        { en: 'skip',         es: 'saltarse',           example: 'I sometimes skip breakfast when I\'m late.',
          chunk: 'skip breakfast / a class / a meal', family: 'skip (v) — context: to skip = to miss/omit' },
        { en: 'relax',        es: 'relajarse',          example: 'I relax in the evenings. I listen to music or take a bath.',
          chunk: 'relax at home / fully relax', family: 'relax (v) · relaxing (adj) · relaxation (n)' }
      ]
    },

    {
      id: 'emotions_a1', title: 'Emotions & Feelings — Cómo me siento', icon: '💭', count: 18,
      level: 'A1',
      teachingNote: 'Link each word to a real memory. Emotions anchor vocabulary in long-term memory.',
      words: [
        { en: 'happy',       es: 'feliz / contento',   example: 'I feel happy when I spend time with my family.',
          chunk: 'feel happy about · make someone happy', family: 'happy (adj) · happiness (n) · happily (adv)' },
        { en: 'sad',         es: 'triste',             example: 'She felt sad when her dog died.',
          chunk: 'feel deeply sad · sad news', family: 'sad (adj) · sadness (n) · sadly (adv)' },
        { en: 'angry',       es: 'enfadado / enojado', example: 'He gets angry when people are late.',
          chunk: 'get angry at someone · angry about something', family: 'angry (adj) · anger (n) · angrily (adv)' },
        { en: 'scared',      es: 'asustado',           example: 'She is scared of spiders. She screams when she sees one.',
          chunk: 'scared of + noun/gerund', family: 'scared (adj) · scare (v) · scary (adj) · fear (n)' },
        { en: 'excited',     es: 'emocionado',         example: 'I am excited about my holidays. I leave on Friday!',
          chunk: 'excited about · get excited', family: 'excited (adj) · exciting (adj) · excitement (n)' },
        { en: 'bored',       es: 'aburrido',           example: 'I feel bored when I have nothing to do.',
          chunk: 'bored of/with doing something', family: 'bored (adj) · boring (adj) · boredom (n)' },
        { en: 'tired',       es: 'cansado',            example: 'I am very tired. I worked 12 hours today.',
          chunk: 'tired of doing something (= fed up)', family: 'tired (adj) · tiring (adj) · tiredness (n)' },
        { en: 'nervous',     es: 'nervioso',           example: 'I always feel nervous before an exam.',
          chunk: 'nervous about · get nervous', family: 'nervous (adj) · nervousness (n) · nervously (adv)' },
        { en: 'surprised',   es: 'sorprendido',        example: 'I was surprised when they gave me the prize.',
          chunk: 'surprised by/at', family: 'surprised (adj) · surprising (adj) · surprise (n/v)' },
        { en: 'proud',       es: 'orgulloso',          example: 'She is proud of her son. He graduated with honours.',
          chunk: 'proud of · take pride in', family: 'proud (adj) · pride (n) · proudly (adv)' },
        { en: 'worried',     es: 'preocupado',         example: 'I am worried about my exam results.',
          chunk: 'worried about · don\'t worry about', family: 'worried (adj) · worrying (adj) · worry (v/n)' },
        { en: 'confident',   es: 'seguro de sí mismo', example: 'She is confident in her English. She speaks without hesitation.',
          chunk: 'feel confident about · lack confidence', family: 'confident (adj) · confidence (n)' },
        { en: 'lonely',      es: 'solitario',          example: 'He felt lonely after moving to a new city.',
          chunk: 'feel lonely · lonely life', family: 'lonely (adj) · loneliness (n) — cf: alone ≠ lonely' },
        { en: 'calm',        es: 'tranquilo / sereno',  example: 'She always stays calm under pressure.',
          chunk: 'stay/keep calm · calm down', family: 'calm (adj/v/n) · calmly (adv) · calmness (n)' },
        { en: 'disappointed', es: 'decepcionado',      example: 'I was disappointed with my grade. I expected better.',
          chunk: 'disappointed with/about/in', family: 'disappointed (adj) · disappointing (adj) · disappointment (n)' },
        { en: 'grateful',    es: 'agradecido',         example: 'I am grateful for my family\'s support.',
          chunk: 'grateful for · feel grateful', family: 'grateful (adj) · gratitude (n) · thankful (adj)' },
        { en: 'embarrassed', es: 'avergonzado',        example: 'I was embarrassed when I forgot my speech.',
          chunk: 'feel embarrassed about', family: 'embarrassed (adj) · embarrassing (adj) · embarrassment (n)' },
        { en: 'relieved',    es: 'aliviado',           example: 'I was relieved when I passed the test.',
          chunk: 'feel relieved that... · what a relief!', family: 'relieved (adj) · relief (n) · relieve (v)' }
      ]
    }
  ];

  // ============================================================
  // B1 — VOCABULARIO EXPANDIDO
  // ============================================================
  const vocabExpB1 = [
    {
      id: 'work_professional_b1', title: 'Work & Professional Life B1', icon: '💼', count: 22,
      level: 'B1',
      teachingNote: 'Learn collocations, not isolated words. "Make a decision" not "do a decision".',
      words: [
        { en: 'apply for a job',    es: 'solicitar un trabajo',   example: 'I applied for three jobs this week. I have two interviews.',
          chunk: 'apply for a job/position/role', family: 'apply (v) · applicant (n) · application (n)' },
        { en: 'cv / résumé',        es: 'currículum vitae',       example: 'I updated my CV before applying. Make it one page.',
          chunk: 'write/update/tailor your CV', family: 'CV (n) · cover letter (n) · portfolio (n)' },
        { en: 'job interview',      es: 'entrevista de trabajo',  example: 'My job interview is on Thursday at 10 am.',
          chunk: 'attend/pass/fail a job interview', family: 'interview (n/v) · interviewer · interviewee' },
        { en: 'salary',             es: 'salario',                example: 'My salary is good, but the hours are long.',
          chunk: 'earn a salary · negotiate a salary · salary increase', family: 'salary (n) · wages (n pl) · pay (n/v)' },
        { en: 'promotion',          es: 'ascenso / promoción',    example: 'She got a promotion last month. She is now a manager.',
          chunk: 'get/earn/deserve a promotion', family: 'promotion (n) · promote (v) · promoted (adj)' },
        { en: 'deadline',           es: 'plazo / fecha límite',   example: 'The deadline for the report is Friday 5 pm.',
          chunk: 'meet/miss/extend a deadline', family: 'deadline (n) · on time (adv) · overdue (adj)' },
        { en: 'colleague',          es: 'compañero de trabajo',   example: 'My colleagues are very supportive. We work well as a team.',
          chunk: 'a close/trusted colleague', family: 'colleague (n) · co-worker (n) · team member (n)' },
        { en: 'resign',             es: 'dimitir / renunciar',    example: 'She resigned last week. She found a better position.',
          chunk: 'resign from a job/position', family: 'resign (v) · resignation (n) · resign letter (n)' },
        { en: 'redundant',          es: 'despedido (por reducción)', example: 'He was made redundant when the company downsized.',
          chunk: 'be made redundant · face redundancy', family: 'redundant (adj) · redundancy (n) — cf: fired (for misconduct)' },
        { en: 'overtime',           es: 'horas extra',            example: 'I worked overtime three days this week.',
          chunk: 'work/do overtime · be paid for overtime', family: 'overtime (n/adv) — related: work-life balance' },
        { en: 'remote work',        es: 'trabajo remoto / teletrabajo', example: 'I have been working remotely for two years. I love the flexibility.',
          chunk: 'work remotely · remote working arrangement', family: 'remote (adj) · flexible (adj) · home office (n)' },
        { en: 'meeting',            es: 'reunión',                example: 'I have four meetings today. My calendar is full.',
          chunk: 'attend/chair/schedule a meeting', family: 'meeting (n) · meet (v) · agenda (n) · minutes (n)' },
        { en: 'target',             es: 'objetivo / meta',        example: 'Our sales target this quarter is £50,000.',
          chunk: 'meet/set/miss a target', family: 'target (n/v) · goal (n) · aim (n/v) · objective (n)' },
        { en: 'feedback',           es: 'retroalimentación',      example: 'My manager gave me useful feedback on my presentation.',
          chunk: 'give/receive/act on feedback', family: 'feedback (n, uncountable) · constructive/positive feedback' },
        { en: 'teamwork',           es: 'trabajo en equipo',      example: 'Good teamwork is essential in our department.',
          chunk: 'encourage/value teamwork', family: 'teamwork (n) · team player (n) · collaborate (v)' },
        { en: 'workload',           es: 'carga de trabajo',       example: 'My workload has increased since my colleague left.',
          chunk: 'heavy/manageable workload · reduce your workload', family: 'workload (n) · overworked (adj) · burnout (n)' },
        { en: 'client',             es: 'cliente',                example: 'We have a meeting with our biggest client tomorrow.',
          chunk: 'deal with/manage/attract clients', family: 'client (n) · customer (n) · client-facing (adj)' },
        { en: 'contract',           es: 'contrato',               example: 'I signed a one-year contract with the company.',
          chunk: 'sign/renew/terminate a contract', family: 'contract (n) · contractual (adj) · terms and conditions' },
        { en: 'commission',         es: 'comisión',               example: 'Sales staff earn a commission on each deal they close.',
          chunk: 'earn/pay commission · commission-based', family: 'commission (n/v) · bonus (n)' },
        { en: 'flexible hours',     es: 'horario flexible',       example: 'I have flexible hours. I can start between 7 and 10.',
          chunk: 'work flexible hours · flexitime', family: 'flexible (adj) · flexibility (n) · rigid (adj) opposite' },
        { en: 'sick leave',         es: 'baja por enfermedad',    example: 'She is on sick leave this week. She has the flu.',
          chunk: 'take sick leave · be on sick leave', family: 'sick leave (n) · annual leave (n) · parental leave (n)' },
        { en: 'networking',         es: 'creación de contactos profesionales', example: 'Networking is essential for career growth. Go to industry events.',
          chunk: 'professional networking · networking event/opportunity', family: 'network (v/n) · connections (n pl)' }
      ]
    },

    {
      id: 'environment_b1', title: 'Environment & Sustainability B1', icon: '🌿', count: 20,
      level: 'B1',
      teachingNote: 'These are high-frequency topics in B1/B2 exams and real-world conversations.',
      words: [
        { en: 'climate change',   es: 'cambio climático',        example: 'Climate change is the most urgent issue of our time.',
          chunk: 'tackle/address/deny climate change', family: 'climate (n) · change (n/v) · climatic (adj)' },
        { en: 'carbon footprint', es: 'huella de carbono',       example: 'I try to reduce my carbon footprint by cycling to work.',
          chunk: 'reduce/calculate your carbon footprint', family: 'carbon (n) · footprint (n) · emissions (n pl)' },
        { en: 'renewable energy', es: 'energía renovable',       example: 'Solar and wind power are examples of renewable energy.',
          chunk: 'switch to/invest in renewable energy', family: 'renewable (adj) · energy (n) · sustainable (adj)' },
        { en: 'recycle',          es: 'reciclar',                example: 'We recycle paper, plastic and glass at home.',
          chunk: 'recycle waste / recycling bin', family: 'recycle (v) · recycling (n) · recyclable (adj)' },
        { en: 'deforestation',    es: 'deforestación',           example: 'Deforestation in the Amazon is destroying biodiversity.',
          chunk: 'halt/prevent deforestation', family: 'deforestation (n) · deforest (v) · forest (n) · reforestation (n)' },
        { en: 'pollution',        es: 'contaminación',           example: 'Air pollution in big cities causes serious health problems.',
          chunk: 'air/water/noise pollution · reduce pollution', family: 'pollution (n) · pollute (v) · pollutant (n) · polluted (adj)' },
        { en: 'endangered species', es: 'especie en peligro',    example: 'Tigers are an endangered species. There are fewer than 4,000 left.',
          chunk: 'protect/save an endangered species', family: 'endangered (adj) · endanger (v) · species (n, same pl)' },
        { en: 'global warming',   es: 'calentamiento global',    example: 'Global warming is raising sea levels.',
          chunk: 'combat/contribute to global warming', family: 'global (adj) · warming (n) · greenhouse effect (n)' },
        { en: 'sustainable',      es: 'sostenible',              example: 'We need sustainable farming to feed the future population.',
          chunk: 'sustainable development/farming/fashion', family: 'sustainable (adj) · sustainability (n) · sustain (v)' },
        { en: 'flood',            es: 'inundación',              example: 'There were severe floods in Germany last summer.',
          chunk: 'flash flood · flood damage · flood a city', family: 'flood (n/v) · flooding (n) · flood risk (n)' },
        { en: 'drought',          es: 'sequía',                  example: 'A severe drought hit the region. Crops failed.',
          chunk: 'severe/prolonged drought', family: 'drought (n) · dry (adj) · water shortage (n)' },
        { en: 'biodiversity',     es: 'biodiversidad',           example: 'Protecting biodiversity means protecting all life on Earth.',
          chunk: 'protect/threaten biodiversity', family: 'biodiversity (n) · diverse (adj) · ecosystem (n)' },
        { en: 'fossil fuels',     es: 'combustibles fósiles',    example: 'We need to move away from fossil fuels like oil and coal.',
          chunk: 'burn/rely on/phase out fossil fuels', family: 'fossil fuel (n) · coal (n) · oil (n) · gas (n)' },
        { en: 'habitat',          es: 'hábitat',                 example: 'Deforestation destroys the natural habitat of many animals.',
          chunk: 'natural/protected habitat · habitat loss', family: 'habitat (n) · natural environment (n)' },
        { en: 'emissions',        es: 'emisiones',               example: 'Carbon emissions need to drop by 50% by 2030.',
          chunk: 'reduce/cut emissions · zero emissions', family: 'emissions (n pl) · emit (v) · emission (n, one)' },
        { en: 'conservation',     es: 'conservación',            example: 'Wildlife conservation protects animals from extinction.',
          chunk: 'wildlife/environmental conservation', family: 'conservation (n) · conserve (v) · conservationist (n)' },
        { en: 'organic',          es: 'ecológico / orgánico',    example: 'I try to buy organic food. It\'s better for the environment.',
          chunk: 'organic food/farming/products', family: 'organic (adj) · organically (adv)' },
        { en: 'waste',            es: 'residuos / desechos',     example: 'We produce too much plastic waste.',
          chunk: 'reduce waste · food waste · toxic waste', family: 'waste (n/v) · wasteful (adj) · wastewater (n)' },
        { en: 'ecosystem',        es: 'ecosistema',              example: 'Coral reefs are one of the most complex ecosystems on Earth.',
          chunk: 'protect/damage an ecosystem', family: 'ecosystem (n) · ecology (n) · ecological (adj)' },
        { en: 'carbon neutral',   es: 'carbono neutro',          example: 'The company aims to be carbon neutral by 2030.',
          chunk: 'become carbon neutral · carbon neutral goal', family: 'carbon neutral (adj) · net zero (n)' }
      ]
    }
  ];

  // ============================================================
  // B2 — VOCABULARIO EXPANDIDO
  // ============================================================
  const vocabExpB2 = [
    {
      id: 'critical_thinking_b2', title: 'Critical Thinking & Argumentation B2', icon: '🧠', count: 20,
      level: 'B2',
      teachingNote: 'These words are essential for essays, debates, and professional communication.',
      words: [
        { en: 'argue',         es: 'argumentar / sostener',  example: 'Some economists argue that inflation is the biggest economic threat.',
          chunk: 'argue that... · argue for/against', family: 'argue (v) · argument (n) · arguable (adj) · arguably (adv)' },
        { en: 'claim',         es: 'afirmar / sostener',     example: 'The study claims that social media reduces attention spans.',
          chunk: 'claim that... · make a claim', family: 'claim (v/n) · counterclaim (n)' },
        { en: 'evidence',      es: 'evidencia / prueba',     example: 'There is strong evidence that exercise reduces stress.',
          chunk: 'provide/present/lack evidence', family: 'evidence (n, uncountable) · evident (adj) · evidently (adv)' },
        { en: 'assumption',    es: 'suposición / supuesto',  example: 'That argument rests on a false assumption.',
          chunk: 'make/challenge/question an assumption', family: 'assumption (n) · assume (v) · assumed (adj)' },
        { en: 'bias',          es: 'sesgo / parcialidad',    example: 'The study showed confirmation bias among participants.',
          chunk: 'cognitive/cultural/media bias · biased towards', family: 'bias (n) · biased (adj) · unbiased (adj)' },
        { en: 'perspective',   es: 'perspectiva / punto de vista', example: 'From a sociological perspective, inequality is a structural issue.',
          chunk: 'from the perspective of... · different perspectives', family: 'perspective (n) · perspective-taking (n)' },
        { en: 'counterargument', es: 'contraargumento',      example: 'A strong counterargument is that technology also creates jobs.',
          chunk: 'present/address a counterargument', family: 'counterargument (n) · counter (v) · rebut (v)' },
        { en: 'controversial', es: 'polémico / controvertido', example: 'Capital punishment is a highly controversial topic.',
          chunk: 'highly controversial · controversial issue/decision', family: 'controversial (adj) · controversy (n) · debate (n)' },
        { en: 'implication',   es: 'implicación / consecuencia', example: 'The policy has serious implications for education funding.',
          chunk: 'have implications for... · wider implications', family: 'implication (n) · imply (v) · implied (adj)' },
        { en: 'objective',     es: 'objetivo / imparcial',   example: 'A good journalist must remain objective and report facts.',
          chunk: 'remain/stay objective · objective analysis', family: 'objective (adj/n) · objectivity (n) · subjective (adj) opposite' },
        { en: 'acknowledge',   es: 'reconocer / admitir',    example: 'He acknowledged that his first plan had failed.',
          chunk: 'acknowledge that... · acknowledge a problem/mistake', family: 'acknowledge (v) · acknowledgement (n)' },
        { en: 'generalization', es: 'generalización',        example: 'That is a dangerous generalization. Not all teenagers behave that way.',
          chunk: 'make/avoid a generalization · overgeneralize', family: 'generalization (n) · generalize (v) · general (adj)' },
        { en: 'credible',      es: 'creíble / fiable',       example: 'The report is based on credible, peer-reviewed sources.',
          chunk: 'credible source/evidence', family: 'credible (adj) · credibility (n) · incredible (adj)' },
        { en: 'justify',       es: 'justificar',             example: 'Can you justify spending £2 million on this project?',
          chunk: 'justify a decision/choice · hard to justify', family: 'justify (v) · justification (n) · justified (adj)' },
        { en: 'nuance',        es: 'matiz',                  example: 'The issue is complex and requires nuance, not a simple yes/no.',
          chunk: 'add nuance · a nuanced argument', family: 'nuance (n) · nuanced (adj)' },
        { en: 'evaluate',      es: 'evaluar',                example: 'We need to evaluate the long-term effects of this policy.',
          chunk: 'evaluate evidence/options/results', family: 'evaluate (v) · evaluation (n) · evaluative (adj)' },
        { en: 'contradiction', es: 'contradicción',          example: 'There is a contradiction between his actions and his values.',
          chunk: 'apparent/direct contradiction · contain a contradiction', family: 'contradiction (n) · contradict (v) · contradictory (adj)' },
        { en: 'convince',      es: 'convencer',              example: 'He failed to convince the board with his argument.',
          chunk: 'convince someone of/that... · hard to convince', family: 'convince (v) · convincing (adj) · conviction (n)' },
        { en: 'abstract',      es: 'abstracto',              example: 'Justice is an abstract concept that means different things to different cultures.',
          chunk: 'abstract concept/idea · abstract thinking', family: 'abstract (adj/n) · abstraction (n) · concrete (adj) opposite' },
        { en: 'inference',     es: 'inferencia / deducción', example: 'From his body language, I made the inference that he was nervous.',
          chunk: 'draw an inference · make an inference from', family: 'inference (n) · infer (v) · inferred (adj)' }
      ]
    }
  ];

  // ============================================================
  // C1 — VOCABULARIO EXPANDIDO
  // ============================================================
  const vocabExpC1 = [
    {
      id: 'rhetoric_persuasion_c1', title: 'Rhetoric & Persuasion C1', icon: '🎯', count: 20,
      level: 'C1',
      teachingNote: 'C1 vocabulary is about precision and register. One word choice can change the entire tone of a text.',
      words: [
        { en: 'rhetoric',      es: 'retórica',               example: 'His speech was full of powerful rhetoric, but lacked concrete proposals.',
          chunk: 'empty rhetoric · powerful/political rhetoric', family: 'rhetoric (n) · rhetorical (adj) · rhetorician (n)' },
        { en: 'discourse',     es: 'discurso / debate social', example: 'The public discourse on immigration has become increasingly polarised.',
          chunk: 'public/political/academic discourse', family: 'discourse (n) · discourse analysis (n)' },
        { en: 'pervasive',     es: 'omnipresente / extendido', example: 'Social media\'s pervasive influence on young people is concerning.',
          chunk: 'pervasive influence/attitude/culture', family: 'pervasive (adj) · pervasiveness (n) · pervade (v)' },
        { en: 'nuanced',       es: 'matizado / con matices',  example: 'The report offers a nuanced analysis of the situation.',
          chunk: 'nuanced understanding/argument/approach', family: 'nuanced (adj) · nuance (n)' },
        { en: 'dichotomy',     es: 'dicotomía',              example: 'There is a false dichotomy between economic growth and environmental protection.',
          chunk: 'false/sharp dichotomy · the dichotomy between X and Y', family: 'dichotomy (n) · dichotomous (adj)' },
        { en: 'pragmatic',     es: 'pragmático',             example: 'We need a pragmatic approach, not ideological dogma.',
          chunk: 'pragmatic solution/approach/decision', family: 'pragmatic (adj) · pragmatism (n) · pragmatist (n)' },
        { en: 'entrenched',    es: 'arraigado / enquistado',  example: 'Racial inequality is entrenched in many institutional systems.',
          chunk: 'deeply entrenched views/attitudes/inequality', family: 'entrenched (adj) · entrench (v) · entrenched position (n)' },
        { en: 'relentless',    es: 'implacable / incesante',  example: 'The relentless pressure of modern work is causing a mental health crisis.',
          chunk: 'relentless pressure/pursuit/criticism', family: 'relentless (adj) · relentlessly (adv) · relentlessness (n)' },
        { en: 'ostensibly',    es: 'aparentemente / en apariencia', example: 'The policy is ostensibly designed to help the poor, but benefits the wealthy.',
          chunk: 'ostensibly designed/intended to...', family: 'ostensibly (adv) · ostensible (adj) · apparent (adj) similar' },
        { en: 'paradox',       es: 'paradoja',               example: 'The poverty paradox: the poorest communities spend the most on lottery tickets.',
          chunk: 'the paradox of... · present a paradox', family: 'paradox (n) · paradoxical (adj) · paradoxically (adv)' },
        { en: 'scrutinise',    es: 'escudriñar / examinar detenidamente', example: 'The media must scrutinise government decisions rigorously.',
          chunk: 'scrutinise evidence/data/accounts', family: 'scrutinise (v) · scrutiny (n) · under scrutiny (phrase)' },
        { en: 'disparate',     es: 'dispar / heterogéneo',   example: 'The policy affects disparate groups in very different ways.',
          chunk: 'disparate groups/outcomes/views', family: 'disparate (adj) · disparity (n) · disparately (adv)' },
        { en: 'mandate',       es: 'mandato / encargo',      example: 'The newly elected government has a clear mandate for change.',
          chunk: 'have a mandate to · democratic mandate', family: 'mandate (n/v) · mandatory (adj) · obligatory (adj) similar' },
        { en: 'unprecedented', es: 'sin precedentes',        example: 'The pandemic caused unprecedented disruption to global supply chains.',
          chunk: 'unprecedented scale/challenge/circumstances', family: 'unprecedented (adj) · precedent (n) · precedented (adj, rare)' },
        { en: 'mitigate',      es: 'mitigar / reducir',      example: 'These measures aim to mitigate the worst effects of climate change.',
          chunk: 'mitigate risk/damage/effects', family: 'mitigate (v) · mitigation (n) · mitigating (adj) — mitigating circumstances' },
        { en: 'proliferate',   es: 'proliferar',             example: 'Misinformation has proliferated on social media platforms.',
          chunk: 'proliferate rapidly/wildly', family: 'proliferate (v) · proliferation (n) — nuclear proliferation' },
        { en: 'ambiguous',     es: 'ambiguo',                example: 'The legal text is deliberately ambiguous, allowing multiple interpretations.',
          chunk: 'morally/deliberately ambiguous · an ambiguous statement', family: 'ambiguous (adj) · ambiguity (n) · unambiguous (adj)' },
        { en: 'catalyst',      es: 'catalizador',            example: 'The financial crisis was a catalyst for major regulatory reform.',
          chunk: 'act as a catalyst for... · a catalyst for change', family: 'catalyst (n) · catalyse (v) · trigger (n) similar' },
        { en: 'tangible',      es: 'tangible / concreto',    example: 'We need tangible results, not just promises.',
          chunk: 'tangible results/benefits/evidence', family: 'tangible (adj) · tangibly (adv) · intangible (adj) opposite' },
        { en: 'volatile',      es: 'volátil / inestable',    example: 'The political situation remains volatile after the elections.',
          chunk: 'volatile market/situation/relationship', family: 'volatile (adj) · volatility (n) · volatilely (adv)' }
      ]
    }
  ];

  // ============================================================
  // INTEGRACIÓN — fusionar en window.vocabTopics
  // ============================================================
  function mergeVocab() {
    const allNew = [...vocabExpA1, ...vocabExpB1, ...vocabExpB2, ...vocabExpC1];

    if (typeof window.vocabTopics !== 'undefined' && Array.isArray(window.vocabTopics)) {
      const existingIds = new Set(window.vocabTopics.map(t => t.id));
      allNew.forEach(topic => {
        if (!existingIds.has(topic.id)) {
          window.vocabTopics.push(topic);
        }
      });
    } else {
      window.vocabTopics = allNew;
    }

    console.log('[LeoEnglish] Vocab expanded: ' + allNew.length + ' new topics loaded.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mergeVocab);
  } else {
    mergeVocab();
  }

})();
