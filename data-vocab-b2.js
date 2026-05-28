// data-vocab-b2.js v1.0 — LEOENGLISH · VOCABULARIO B2 (Upper-Intermediate)
// Marco Común Europeo de Referencia (MCER) — Nivel B2
// Añadir en index.html DESPUÉS de data-vocab-b1.js y ANTES de app.js

(function () {
  'use strict';

  const vocabTopicsB2 = [

    {
      id: 'economy_business_b2',
      title: 'Economy & Business',
      icon: '📈',
      count: 20,
      level: 'B2',
      words: [
        { en: 'GDP (Gross Domestic Product)', es: 'PIB (Producto Interior Bruto)', example: 'The country\'s GDP grew by 3% last year.' },
        { en: 'inflation',       es: 'inflación',              example: 'High inflation reduces the purchasing power of consumers.' },
        { en: 'recession',       es: 'recesión',               example: 'The economy entered a recession after the financial crisis.' },
        { en: 'deficit',         es: 'déficit',                example: 'The government is trying to reduce the budget deficit.' },
        { en: 'surplus',         es: 'superávit / excedente',  example: 'A trade surplus means a country exports more than it imports.' },
        { en: 'interest rate',   es: 'tipo de interés',        example: 'The central bank raised interest rates to control inflation.' },
        { en: 'shareholder',     es: 'accionista',             example: 'Shareholders voted against the proposed merger.' },
        { en: 'merger',          es: 'fusión (empresarial)',   example: 'The merger created one of the largest banks in the region.' },
        { en: 'takeover',        es: 'adquisición / OPA',      example: 'The hostile takeover surprised the company\'s board.' },
        { en: 'start-up',        es: 'empresa emergente',      example: 'Tech start-ups are attracting significant investment.' },
        { en: 'venture capital',  es: 'capital riesgo',        example: 'The start-up secured venture capital funding of $5 million.' },
        { en: 'subsidy',         es: 'subvención',             example: 'Farmers receive government subsidies to keep food prices stable.' },
        { en: 'outsource',       es: 'externalizar / subcontratar', example: 'Many companies outsource their IT services to cut costs.' },
        { en: 'supply chain',    es: 'cadena de suministro',   example: 'COVID-19 severely disrupted global supply chains.' },
        { en: 'turnover',        es: 'facturación / rotación', example: 'The company has an annual turnover of €50 million.' },
        { en: 'bankruptcy',      es: 'quiebra / bancarrota',   example: 'The airline filed for bankruptcy after years of losses.' },
        { en: 'deregulation',    es: 'desregulación',          example: 'Deregulation of the energy market led to increased competition.' },
        { en: 'austerity',       es: 'austeridad',             example: 'Austerity measures were introduced to reduce public debt.' },
        { en: 'inequality',      es: 'desigualdad (económica)', example: 'Growing economic inequality is a major concern worldwide.' },
        { en: 'globalisation',   es: 'globalización',          example: 'Globalisation has increased trade but also cultural homogenisation.' }
      ]
    },

    {
      id: 'politics_governance_b2',
      title: 'Politics & Governance',
      icon: '🏛️',
      count: 20,
      level: 'B2',
      words: [
        { en: 'democracy',        es: 'democracia',             example: 'Democracy requires free and fair elections.' },
        { en: 'legislation',      es: 'legislación',            example: 'New legislation on data protection came into force this year.' },
        { en: 'referendum',       es: 'referéndum',             example: 'The country held a referendum on independence.' },
        { en: 'constituency',     es: 'circunscripción / distrito', example: 'Each MP represents a specific constituency.' },
        { en: 'lobby',            es: 'grupo de presión / lobby', example: 'The pharmaceutical lobby has significant influence over health policy.' },
        { en: 'coalition',        es: 'coalición',              example: 'No party won a majority, so a coalition government was formed.' },
        { en: 'corruption',       es: 'corrupción',             example: 'Corruption undermines public trust in institutions.' },
        { en: 'transparency',     es: 'transparencia',          example: 'Citizens demand greater transparency in government spending.' },
        { en: 'sovereignty',      es: 'soberanía',              example: 'The treaty was seen as a threat to national sovereignty.' },
        { en: 'sanctions',        es: 'sanciones',              example: 'Economic sanctions were imposed on the country.' },
        { en: 'diplomacy',        es: 'diplomacia',             example: 'Diplomacy is preferred over military action in most disputes.' },
        { en: 'treaty',           es: 'tratado',                example: 'The two countries signed a peace treaty ending decades of conflict.' },
        { en: 'veto',             es: 'veto',                   example: 'The UN Security Council member used its veto to block the resolution.' },
        { en: 'civil liberties',  es: 'libertades civiles',     example: 'The new law was criticised for restricting civil liberties.' },
        { en: 'populism',         es: 'populismo',              example: 'Populism has grown across Europe in recent years.' },
        { en: 'accountability',   es: 'rendición de cuentas',   example: 'Politicians must be held accountable for their decisions.' },
        { en: 'manifesto',        es: 'manifiesto / programa electoral', example: 'The party published its manifesto before the election.' },
        { en: 'opposition',       es: 'oposición',              example: 'The opposition strongly criticised the proposed budget cuts.' },
        { en: 'bureaucracy',      es: 'burocracia',             example: 'Excessive bureaucracy slows down business development.' },
        { en: 'geopolitics',      es: 'geopolítica',            example: 'The conflict has significant geopolitical implications.' }
      ]
    },

    {
      id: 'science_innovation_b2',
      title: 'Science & Innovation',
      icon: '🔬',
      count: 20,
      level: 'B2',
      words: [
        { en: 'hypothesis',       es: 'hipótesis',              example: 'The scientist formulated a hypothesis to explain the results.' },
        { en: 'methodology',      es: 'metodología',            example: 'The research methodology was clearly explained in the paper.' },
        { en: 'empirical',        es: 'empírico/a',             example: 'The claims must be supported by empirical evidence.' },
        { en: 'peer review',      es: 'revisión por pares',     example: 'All research submitted to the journal undergoes peer review.' },
        { en: 'breakthrough',     es: 'avance / descubrimiento', example: 'The discovery of CRISPR was a major scientific breakthrough.' },
        { en: 'genome',           es: 'genoma',                 example: 'Scientists successfully mapped the human genome in 2003.' },
        { en: 'quantum computing', es: 'computación cuántica',  example: 'Quantum computing could revolutionise data processing.' },
        { en: 'nanotechnology',   es: 'nanotecnología',         example: 'Nanotechnology is being used to develop new cancer treatments.' },
        { en: 'clinical trial',   es: 'ensayo clínico',         example: 'The new vaccine underwent extensive clinical trials.' },
        { en: 'placebo',          es: 'placebo',                example: 'In a clinical trial, the control group receives a placebo.' },
        { en: 'correlation',      es: 'correlación',            example: 'There is a strong correlation between education and income.' },
        { en: 'causation',        es: 'causalidad',             example: 'Correlation does not imply causation.' },
        { en: 'variable',         es: 'variable',               example: 'The experiment controlled for all independent variables.' },
        { en: 'innovation',       es: 'innovación',             example: 'Innovation drives economic growth and competitiveness.' },
        { en: 'patent',           es: 'patente',                example: 'The company applied for a patent on its new technology.' },
        { en: 'ethics',           es: 'ética',                  example: 'The ethics of genetic engineering are widely debated.' },
        { en: 'robotics',         es: 'robótica',               example: 'Robotics is transforming manufacturing and logistics.' },
        { en: 'simulation',       es: 'simulación',             example: 'Computer simulations are used to model climate change.' },
        { en: 'data analysis',    es: 'análisis de datos',      example: 'Data analysis revealed unexpected patterns in consumer behaviour.' },
        { en: 'open source',      es: 'código abierto',         example: 'The software was released as open source for public use.' }
      ]
    },

    {
      id: 'culture_arts_b2',
      title: 'Culture, Arts & Media',
      icon: '🎭',
      count: 20,
      level: 'B2',
      words: [
        { en: 'narrative',        es: 'narrativa / relato',     example: 'The film uses a non-linear narrative structure.' },
        { en: 'aesthetics',       es: 'estética',               example: 'The building\'s aesthetics divided public opinion sharply.' },
        { en: 'satire',           es: 'sátira',                 example: 'The novel uses satire to criticise political corruption.' },
        { en: 'censorship',       es: 'censura',                example: 'Censorship of the press is a sign of an authoritarian regime.' },
        { en: 'genre',            es: 'género (artístico/literario)', example: 'Science fiction is her favourite literary genre.' },
        { en: 'critique',         es: 'crítica / análisis',     example: 'The exhibition received a positive critique from art journalists.' },
        { en: 'heritage',         es: 'patrimonio',             example: 'Machu Picchu is a UNESCO World Heritage Site.' },
        { en: 'subculture',       es: 'subcultura',             example: 'Hip-hop began as an urban subculture in New York.' },
        { en: 'propaganda',       es: 'propaganda',             example: 'The government used propaganda to control public opinion.' },
        { en: 'adaptation',       es: 'adaptación',             example: 'The film is an adaptation of a classic nineteenth-century novel.' },
        { en: 'multimedia',       es: 'multimedia',             example: 'The exhibition combined multimedia installations with traditional art.' },
        { en: 'copyright',        es: 'derechos de autor',      example: 'The song was removed due to a copyright violation.' },
        { en: 'avant-garde',      es: 'vanguardia / vanguardista', example: 'The artist was known for her avant-garde approach to sculpture.' },
        { en: 'bias',             es: 'sesgo / parcialidad',    example: 'Media bias can influence public perception of events.' },
        { en: 'documentary',      es: 'documental',             example: 'The documentary explores the lives of migrant workers.' },
        { en: 'immersive',        es: 'inmersivo/a',            example: 'The immersive theatre experience put the audience inside the story.' },
        { en: 'icon',             es: 'icono / símbolo',        example: 'Frida Kahlo has become a cultural icon worldwide.' },
        { en: 'contemporary',     es: 'contemporáneo/a',        example: 'Contemporary art often challenges traditional definitions of beauty.' },
        { en: 'dialect',          es: 'dialecto',               example: 'The novel is written in a regional dialect that adds authenticity.' },
        { en: 'symbolism',        es: 'simbolismo',             example: 'The author uses symbolism to explore themes of loss and memory.' }
      ]
    },

    {
      id: 'psychology_behaviour_b2',
      title: 'Psychology & Behaviour',
      icon: '🧠',
      count: 20,
      level: 'B2',
      words: [
        { en: 'cognitive',        es: 'cognitivo/a',            example: 'Cognitive development in children is rapid during the first years.' },
        { en: 'perception',       es: 'percepción',             example: 'Our perception of risk is often distorted by media coverage.' },
        { en: 'motivation',       es: 'motivación',             example: 'Intrinsic motivation is more sustainable than external reward.' },
        { en: 'conformity',       es: 'conformidad / conformismo', example: 'Asch\'s experiment revealed the power of social conformity.' },
        { en: 'bias',             es: 'sesgo cognitivo',        example: 'Confirmation bias leads people to seek information that supports their existing beliefs.' },
        { en: 'subconscious',     es: 'subconsciente',          example: 'Many decisions are influenced by subconscious factors.' },
        { en: 'trauma',           es: 'trauma',                 example: 'Unresolved trauma can affect behaviour decades later.' },
        { en: 'conditioning',     es: 'condicionamiento',       example: 'Pavlov demonstrated classical conditioning with his famous experiment.' },
        { en: 'peer pressure',    es: 'presión de grupo',       example: 'Teenagers are particularly vulnerable to peer pressure.' },
        { en: 'self-esteem',      es: 'autoestima',             example: 'Low self-esteem can lead to anxiety and depression.' },
        { en: 'inhibition',       es: 'inhibición',             example: 'Social inhibition makes it hard to speak in large groups.' },
        { en: 'rationalise',      es: 'racionalizar',           example: 'People often rationalise poor decisions to avoid feeling guilty.' },
        { en: 'empathy',          es: 'empatía',                example: 'High empathy is associated with stronger social connections.' },
        { en: 'attachment',       es: 'apego',                  example: 'Bowlby\'s attachment theory revolutionised child psychology.' },
        { en: 'groupthink',       es: 'pensamiento grupal',     example: 'Groupthink led the team to make a catastrophically bad decision.' },
        { en: 'neuroplasticity',  es: 'neuroplasticidad',       example: 'Neuroplasticity allows the brain to adapt to new learning.' },
        { en: 'introspection',    es: 'introspección',          example: 'Regular introspection can improve self-awareness.' },
        { en: 'resilience',       es: 'resiliencia',            example: 'Resilience enables people to recover from adversity.' },
        { en: 'dissociation',     es: 'disociación',            example: 'Dissociation is a defence mechanism against overwhelming stress.' },
        { en: 'placebo effect',   es: 'efecto placebo',         example: 'The placebo effect shows how powerful the mind-body connection is.' }
      ]
    },

    {
      id: 'environment_policy_b2',
      title: 'Environment & Policy',
      icon: '🌍',
      count: 20,
      level: 'B2',
      words: [
        { en: 'emissions trading', es: 'comercio de emisiones', example: 'Emissions trading allows companies to buy and sell pollution permits.' },
        { en: 'net zero',          es: 'cero neto / neutralidad climática', example: 'The government has committed to reaching net zero by 2050.' },
        { en: 'carbon neutral',    es: 'neutro en carbono',     example: 'The company aims to be carbon neutral by 2030.' },
        { en: 'biodegradable',     es: 'biodegradable',         example: 'Packaging must be biodegradable to reduce landfill waste.' },
        { en: 'reforestation',     es: 'reforestación',         example: 'Reforestation programmes are essential to restore lost ecosystems.' },
        { en: 'carbon capture',    es: 'captura de carbono',    example: 'Carbon capture technology removes CO2 from the atmosphere.' },
        { en: 'circular economy',  es: 'economía circular',     example: 'A circular economy minimises waste by reusing materials.' },
        { en: 'climate pledge',    es: 'compromiso climático',  example: 'Countries made ambitious climate pledges at the summit.' },
        { en: 'soil degradation',  es: 'degradación del suelo', example: 'Soil degradation reduces agricultural productivity.' },
        { en: 'ocean acidification', es: 'acidificación oceánica', example: 'Ocean acidification is threatening coral reefs worldwide.' },
        { en: 'microplastics',     es: 'microplásticos',        example: 'Microplastics have been found in human blood and drinking water.' },
        { en: 'permafrost',        es: 'permafrost',            example: 'Melting permafrost releases methane, accelerating climate change.' },
        { en: 'tipping point',     es: 'punto de inflexión',    example: 'Scientists warn we are approaching a climate tipping point.' },
        { en: 'ecosystem services', es: 'servicios ecosistémicos', example: 'Wetlands provide vital ecosystem services including flood control.' },
        { en: 'green infrastructure', es: 'infraestructura verde', example: 'Urban green infrastructure improves air quality and wellbeing.' },
        { en: 'just transition',   es: 'transición justa',      example: 'A just transition ensures no community is left behind in moving to clean energy.' },
        { en: 'ecological footprint', es: 'huella ecológica',   example: 'Reducing your ecological footprint requires changes in diet and transport.' },
        { en: 'desertification',   es: 'desertificación',       example: 'Desertification threatens food security across the Sahel region.' },
        { en: 'environmental levy', es: 'impuesto medioambiental', example: 'An environmental levy on plastic bags reduced usage by 90%.' },
        { en: 'biodiversity loss', es: 'pérdida de biodiversidad', example: 'Biodiversity loss is occurring at an unprecedented rate.' }
      ]
    },

    {
      id: 'law_justice_b2',
      title: 'Law & Justice',
      icon: '⚖️',
      count: 20,
      level: 'B2',
      words: [
        { en: 'verdict',          es: 'veredicto',              example: 'The jury reached a verdict of not guilty after three days.' },
        { en: 'prosecution',      es: 'fiscalía / acusación',   example: 'The prosecution presented strong evidence against the defendant.' },
        { en: 'defence',          es: 'defensa',                example: 'The defence lawyer argued that her client was innocent.' },
        { en: 'sentence',         es: 'sentencia / condena',    example: 'The judge handed down a five-year sentence.' },
        { en: 'appeal',           es: 'recurso / apelación',    example: 'The defendant plans to appeal the conviction.' },
        { en: 'jurisdiction',     es: 'jurisdicción',           example: 'This case falls outside the court\'s jurisdiction.' },
        { en: 'liability',        es: 'responsabilidad legal',  example: 'The company denied liability for the accident.' },
        { en: 'precedent',        es: 'precedente',             example: 'The ruling set a legal precedent for future cases.' },
        { en: 'testimony',        es: 'testimonio',             example: 'Her testimony was crucial to the outcome of the trial.' },
        { en: 'acquittal',        es: 'absolución',             example: 'The acquittal surprised many legal experts.' },
        { en: 'due process',      es: 'garantías procesales / debido proceso', example: 'Every citizen is entitled to due process under the law.' },
        { en: 'intellectual property', es: 'propiedad intelectual', example: 'The company sued for infringement of intellectual property rights.' },
        { en: 'regulation',       es: 'normativa / reglamentación', example: 'Stricter regulation of the financial sector is needed.' },
        { en: 'injunction',       es: 'orden judicial / mandato cautelar', example: 'The court issued an injunction to stop the publication.' },
        { en: 'statute',          es: 'estatuto / ley',         example: 'The statute clearly prohibits this type of activity.' },
        { en: 'civil law',        es: 'derecho civil',          example: 'Disputes between individuals are typically handled under civil law.' },
        { en: 'criminal law',     es: 'derecho penal',          example: 'Murder and theft are offences under criminal law.' },
        { en: 'plaintiff',        es: 'demandante',             example: 'The plaintiff claimed damages of one million euros.' },
        { en: 'defendant',        es: 'demandado / acusado',    example: 'The defendant maintained his innocence throughout the trial.' },
        { en: 'deterrence',       es: 'efecto disuasorio',      example: 'Harsher sentences are intended as a deterrence against crime.' }
      ]
    },

    {
      id: 'academic_discourse_b2',
      title: 'Academic Discourse & Argument',
      icon: '📝',
      count: 20,
      level: 'B2',
      words: [
        { en: 'thesis',           es: 'tesis / argumento principal', example: 'The essay\'s thesis is clearly stated in the opening paragraph.' },
        { en: 'argument',         es: 'argumento',              example: 'Her argument was supported by strong empirical evidence.' },
        { en: 'counterargument',  es: 'contraargumento',        example: 'A good essay acknowledges and addresses the counterargument.' },
        { en: 'premise',          es: 'premisa',                example: 'The argument rests on the premise that all people are rational.' },
        { en: 'inference',        es: 'inferencia',             example: 'The inference drawn from the data was not fully supported.' },
        { en: 'implication',      es: 'implicación',            example: 'The findings have significant implications for public policy.' },
        { en: 'nuance',           es: 'matiz',                  example: 'The essay lacks nuance in its treatment of the topic.' },
        { en: 'rhetoric',         es: 'retórica',               example: 'Political rhetoric often replaces substance with emotion.' },
        { en: 'concede',          es: 'conceder / admitir',     example: 'She conceded that the opposing view had some merit.' },
        { en: 'rebut',            es: 'refutar',                example: 'The researcher effectively rebutted the criticism of his study.' },
        { en: 'substantiate',     es: 'fundamentar / respaldar', example: 'You must substantiate your claims with credible sources.' },
        { en: 'ambiguity',        es: 'ambigüedad',             example: 'The ambiguity of the law led to conflicting interpretations.' },
        { en: 'assertion',        es: 'afirmación / aseveración', example: 'The report\'s central assertion is that inequality is rising.' },
        { en: 'abstraction',      es: 'abstracción',            example: 'The concept of justice is a complex abstraction.' },
        { en: 'caveat',           es: 'advertencia / salvedad', example: 'I support the plan, with one important caveat.' },
        { en: 'qualify',          es: 'matizar / calificar',    example: 'The author qualifies her claim by acknowledging exceptions.' },
        { en: 'coherent',         es: 'coherente',              example: 'A coherent argument is logical and internally consistent.' },
        { en: 'critique',         es: 'crítica / análisis crítico', example: 'The academic offered a rigorous critique of the policy.' },
        { en: 'paradigm',         es: 'paradigma',              example: 'Kuhn argued that science progresses through paradigm shifts.' },
        { en: 'discourse',        es: 'discurso',               example: 'Academic discourse requires precision and intellectual honesty.' }
      ]
    }

  ]; // fin vocabTopicsB2


  // ============================================================
  // LEARNING PATH & COMPETENCY MAP B2
  // ============================================================
  const vocabLearningPathB2 = [
    {
      level: 'B2',
      title: 'B2 · Vocabulary Upper-Intermediate',
      color: '#DC2626',
      requiredScore: 75,
      topics: [
        'economy_business_b2',
        'politics_governance_b2',
        'science_innovation_b2',
        'culture_arts_b2',
        'psychology_behaviour_b2',
        'environment_policy_b2',
        'law_justice_b2',
        'academic_discourse_b2'
      ]
    }
  ];

  const vocabCompetencyMapB2 = {
    economy_business_b2:    { level: 'B2', skill: 'vocab', weaknessLabel: 'Vocabulario: Economía y negocios B2', homologationGroup: 'b2_vocab_economy', diagnosticTags: ['economy', 'business', 'b2_vocab'] },
    politics_governance_b2: { level: 'B2', skill: 'vocab', weaknessLabel: 'Vocabulario: Política y gobernanza', homologationGroup: 'b2_vocab_politics', diagnosticTags: ['politics', 'governance', 'b2_vocab'] },
    science_innovation_b2:  { level: 'B2', skill: 'vocab', weaknessLabel: 'Vocabulario: Ciencia e innovación', homologationGroup: 'b2_vocab_science', diagnosticTags: ['science', 'innovation', 'b2_vocab'] },
    culture_arts_b2:        { level: 'B2', skill: 'vocab', weaknessLabel: 'Vocabulario: Cultura y artes', homologationGroup: 'b2_vocab_culture', diagnosticTags: ['culture', 'arts', 'b2_vocab'] },
    psychology_behaviour_b2:{ level: 'B2', skill: 'vocab', weaknessLabel: 'Vocabulario: Psicología y comportamiento', homologationGroup: 'b2_vocab_psychology', diagnosticTags: ['psychology', 'behaviour', 'b2_vocab'] },
    environment_policy_b2:  { level: 'B2', skill: 'vocab', weaknessLabel: 'Vocabulario: Medioambiente y política', homologationGroup: 'b2_vocab_environment_b2', diagnosticTags: ['environment', 'policy', 'b2_vocab'] },
    law_justice_b2:         { level: 'B2', skill: 'vocab', weaknessLabel: 'Vocabulario: Derecho y justicia', homologationGroup: 'b2_vocab_law', diagnosticTags: ['law', 'justice', 'b2_vocab'] },
    academic_discourse_b2:  { level: 'B2', skill: 'vocab', weaknessLabel: 'Vocabulario: Discurso académico', homologationGroup: 'b2_vocab_academic', diagnosticTags: ['academic', 'discourse', 'b2_vocab'] }
  };

  const vocabDiagnosticBlueprintB2 = {
    id: 'vocab_diagnostic_b2', title: 'Diagnóstico de vocabulario B2', levels: ['B2'],
    rules: { passScore: 75, homologationScore: 80, reinforcementThreshold: 70 },
    items: [
      { id: 'vd_b2_01', level: 'B2', mapsTo: ['economy_business_b2'],
        type: 'choice', q: 'What is "austerity" in an economic context?',
        opts: ['Government spending increases', 'Policies to reduce public spending and debt', 'A type of trade agreement'], a: 1,
        exp: '"Austerity" = medidas de austeridad para reducir el gasto público.' },
      { id: 'vd_b2_02', level: 'B2', mapsTo: ['politics_governance_b2'],
        type: 'choice', q: 'What does "accountability" mean in politics?',
        opts: ['The right to vote', 'Being responsible for one\'s decisions and actions', 'A type of election system'], a: 1,
        exp: '"Accountability" = rendición de cuentas: responsabilidad por las decisiones.' },
      { id: 'vd_b2_03', level: 'B2', mapsTo: ['science_innovation_b2'],
        type: 'choice', q: 'What does "peer review" involve?',
        opts: ['Students marking each other\'s work', 'Experts evaluating research before publication', 'A government funding process'], a: 1,
        exp: '"Peer review" = revisión por pares expertos antes de publicar.' },
      { id: 'vd_b2_04', level: 'B2', mapsTo: ['psychology_behaviour_b2'],
        type: 'choice', q: 'What is "groupthink"?',
        opts: ['Creative brainstorming in teams', 'Poor decision-making caused by conformity pressure in groups', 'A therapy technique'], a: 1,
        exp: '"Groupthink" = pensamiento grupal: malas decisiones por presión de conformidad.' },
      { id: 'vd_b2_05', level: 'B2', mapsTo: ['environment_policy_b2'],
        type: 'choice', q: 'What does "net zero" mean?',
        opts: ['Producing no energy at all', 'Balancing carbon emissions with carbon removal', 'Using only nuclear energy'], a: 1,
        exp: '"Net zero" = equilibrio entre emisiones producidas y eliminadas.' },
      { id: 'vd_b2_06', level: 'B2', mapsTo: ['law_justice_b2'],
        type: 'choice', q: 'What is a "precedent" in law?',
        opts: ['A court fee', 'A past decision that guides future rulings', 'A type of evidence'], a: 1,
        exp: '"Precedent" = precedente: decisión previa que guía futuros fallos judiciales.' },
      { id: 'vd_b2_07', level: 'B2', mapsTo: ['academic_discourse_b2'],
        type: 'choice', q: 'What does it mean to "substantiate" a claim?',
        opts: ['To make it shorter', 'To support it with evidence', 'To contradict it'], a: 1,
        exp: '"Substantiate" = fundamentar: respaldar una afirmación con pruebas.' },
      { id: 'vd_b2_08', level: 'B2', mapsTo: ['culture_arts_b2'],
        type: 'choice', q: 'What is "satire"?',
        opts: ['A type of musical composition', 'A way of criticising something through humour or exaggeration', 'A painting technique'], a: 1,
        exp: '"Satire" = sátira: crítica mediante el humor o la exageración.' }
    ]
  };


  // ============================================================
  // EXPORTACIÓN — Navegador
  // ============================================================
  if (typeof window !== 'undefined') {
    if (Array.isArray(window.vocabTopics)) {
      const existingIds = window.vocabTopics.map(t => t.id);
      vocabTopicsB2.forEach(t => { if (!existingIds.includes(t.id)) window.vocabTopics.push(t); });
    } else { window.vocabTopics = vocabTopicsB2; }

    if (Array.isArray(window.vocabLearningPath)) {
      if (!window.vocabLearningPath.some(l => l.level === 'B2')) window.vocabLearningPath.push(...vocabLearningPathB2);
    } else { window.vocabLearningPath = vocabLearningPathB2; }

    if (window.vocabCompetencyMap) Object.assign(window.vocabCompetencyMap, vocabCompetencyMapB2);

    window.vocabDiagnosticBlueprintB2 = vocabDiagnosticBlueprintB2;
    window.vocabTopicsB2               = vocabTopicsB2;
    window.vocabLearningPathB2         = vocabLearningPathB2;
    window.vocabCompetencyMapB2        = vocabCompetencyMapB2;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { vocabTopicsB2, vocabLearningPathB2, vocabCompetencyMapB2, vocabDiagnosticBlueprintB2 };
  }

}()); // fin IIFE
