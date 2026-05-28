// data-vocab-b1.js v1.0 — LEOENGLISH · VOCABULARIO B1 (Intermediate)
// Marco Común Europeo de Referencia (MCER) — Nivel B1
// Estructura idéntica a data-vocab.js para integración transparente con app.js v5.0
// Añadir en index.html DESPUÉS de data-vocab.js y ANTES de app.js

(function () {
  'use strict';

  // ============================================================
  // TEMAS DE VOCABULARIO B1 — 8 tópicos temáticos MCER
  // ============================================================
  const vocabTopicsB1 = [

    {
      id: 'work_employment_b1',
      title: 'Work & Employment',
      icon: '💼',
      count: 20,
      level: 'B1',
      words: [
        { en: 'apply for a job',       es: 'solicitar un trabajo',      example: 'She decided to apply for a job at the local hospital.' },
        { en: 'job interview',         es: 'entrevista de trabajo',     example: 'He was very nervous before his job interview.' },
        { en: 'CV / résumé',           es: 'currículum vitae',          example: 'Make sure your CV is up to date before applying.' },
        { en: 'salary',                es: 'salario / sueldo',          example: 'The salary for this position is negotiable.' },
        { en: 'promotion',             es: 'ascenso / promoción',       example: 'She worked hard and finally got a promotion.' },
        { en: 'full-time / part-time', es: 'tiempo completo / parcial', example: 'He works part-time while studying at university.' },
        { en: 'deadline',              es: 'fecha límite / plazo',      example: 'The deadline for the report is next Friday.' },
        { en: 'colleague',             es: 'colega / compañero de trabajo', example: 'My colleagues are very supportive and friendly.' },
        { en: 'resign',                es: 'renunciar / dimitir',       example: 'She resigned from her job after ten years.' },
        { en: 'recruit',               es: 'reclutar / contratar',      example: 'The company is recruiting new staff this month.' },
        { en: 'remote work',           es: 'trabajo remoto / desde casa', example: 'Remote work has become very common since 2020.' },
        { en: 'commute',               es: 'desplazarse al trabajo',    example: 'She commutes two hours every day by train.' },
        { en: 'overtime',              es: 'horas extra',               example: 'He worked overtime to finish the project on time.' },
        { en: 'skills',                es: 'habilidades / destrezas',   example: 'Good communication skills are essential in this job.' },
        { en: 'experience',            es: 'experiencia',               example: 'They require at least two years of experience.' },
        { en: 'employer',              es: 'empleador / empresa',       example: 'My employer provides health insurance for all staff.' },
        { en: 'employee',              es: 'empleado/a',                example: 'Every employee receives a bonus in December.' },
        { en: 'self-employed',         es: 'autónomo/a / independiente', example: 'She is self-employed and works as a freelance designer.' },
        { en: 'unemployed',            es: 'desempleado/a',             example: 'He has been unemployed for six months.' },
        { en: 'benefits',              es: 'beneficios / prestaciones', example: 'The job offers good benefits, including paid holidays.' }
      ]
    },

    {
      id: 'environment_b1',
      title: 'Environment & Nature',
      icon: '🌿',
      count: 20,
      level: 'B1',
      words: [
        { en: 'climate change',       es: 'cambio climático',          example: 'Climate change is one of the biggest challenges of our time.' },
        { en: 'global warming',       es: 'calentamiento global',      example: 'Global warming is causing ice caps to melt.' },
        { en: 'pollution',            es: 'contaminación',             example: 'Air pollution in the city has increased significantly.' },
        { en: 'carbon emissions',     es: 'emisiones de carbono',      example: 'We need to reduce carbon emissions to protect the planet.' },
        { en: 'renewable energy',     es: 'energía renovable',         example: 'Solar panels are a form of renewable energy.' },
        { en: 'recycle',              es: 'reciclar',                  example: 'It is important to recycle paper, glass and plastic.' },
        { en: 'sustainable',          es: 'sostenible',                example: 'We need more sustainable ways of producing food.' },
        { en: 'deforestation',        es: 'deforestación',             example: 'Deforestation destroys habitats for thousands of animals.' },
        { en: 'drought',              es: 'sequía',                    example: 'The region has suffered a severe drought this summer.' },
        { en: 'flood',                es: 'inundación',                example: 'Heavy rain caused severe floods in the valley.' },
        { en: 'endangered species',   es: 'especie en peligro',        example: 'The jaguar is an endangered species in South America.' },
        { en: 'waste',                es: 'residuos / basura',         example: 'We produce too much plastic waste every year.' },
        { en: 'ecosystem',            es: 'ecosistema',                example: 'The coral reef is a fragile and complex ecosystem.' },
        { en: 'fossil fuels',         es: 'combustibles fósiles',      example: 'Fossil fuels like coal and oil cause pollution.' },
        { en: 'greenhouse effect',    es: 'efecto invernadero',        example: 'The greenhouse effect traps heat in the atmosphere.' },
        { en: 'conservation',         es: 'conservación',              example: 'Conservation efforts have helped save some species.' },
        { en: 'biodiversity',         es: 'biodiversidad',             example: 'Protecting forests is essential for biodiversity.' },
        { en: 'natural disaster',     es: 'desastre natural',          example: 'Earthquakes and floods are examples of natural disasters.' },
        { en: 'habitat',              es: 'hábitat',                   example: 'Urbanisation is destroying the natural habitat of many animals.' },
        { en: 'carbon footprint',     es: 'huella de carbono',         example: 'You can reduce your carbon footprint by using public transport.' }
      ]
    },

    {
      id: 'health_wellbeing_b1',
      title: 'Health & Wellbeing',
      icon: '❤️',
      count: 20,
      level: 'B1',
      words: [
        { en: 'symptom',          es: 'síntoma',                  example: 'A high fever is a common symptom of flu.' },
        { en: 'treatment',        es: 'tratamiento',              example: 'The doctor recommended a new treatment for her condition.' },
        { en: 'prescription',     es: 'receta médica',            example: 'You need a prescription to buy this medicine.' },
        { en: 'surgery',          es: 'cirugía / operación',      example: 'He had heart surgery last year and is recovering well.' },
        { en: 'allergy',          es: 'alergia',                  example: 'She has a severe allergy to peanuts.' },
        { en: 'diet',             es: 'dieta / alimentación',     example: 'A balanced diet is essential for good health.' },
        { en: 'mental health',    es: 'salud mental',             example: 'Looking after your mental health is just as important as physical health.' },
        { en: 'stress',           es: 'estrés',                   example: 'Too much stress can affect both mind and body.' },
        { en: 'vaccination',      es: 'vacunación',               example: 'Vaccination has eliminated many dangerous diseases.' },
        { en: 'obesity',          es: 'obesidad',                 example: 'Obesity is a growing health problem worldwide.' },
        { en: 'exercise',         es: 'ejercicio físico',         example: 'Regular exercise reduces the risk of heart disease.' },
        { en: 'well-being',       es: 'bienestar',                example: 'Good sleep is fundamental to overall well-being.' },
        { en: 'immune system',    es: 'sistema inmunológico',     example: 'Vitamin C can help strengthen your immune system.' },
        { en: 'chronic',          es: 'crónico/a',                example: 'He suffers from chronic back pain.' },
        { en: 'recovery',         es: 'recuperación',             example: 'Her recovery after the operation was remarkably fast.' },
        { en: 'GP / doctor',      es: 'médico de cabecera',       example: 'I have an appointment with my GP next Tuesday.' },
        { en: 'painkiller',       es: 'analgésico / calmante',    example: 'The doctor prescribed painkillers for the headache.' },
        { en: 'epidemic',         es: 'epidemia',                 example: 'The flu epidemic affected millions of people.' },
        { en: 'prevention',       es: 'prevención',               example: 'Prevention is always better than cure.' },
        { en: 'blood pressure',   es: 'presión arterial',         example: 'High blood pressure is a risk factor for heart disease.' }
      ]
    },

    {
      id: 'media_technology_b1',
      title: 'Media & Technology',
      icon: '📱',
      count: 20,
      level: 'B1',
      words: [
        { en: 'social media',        es: 'redes sociales',           example: 'Social media has changed the way we communicate.' },
        { en: 'streaming',           es: 'transmisión en línea',     example: 'Streaming services have replaced traditional TV for many people.' },
        { en: 'artificial intelligence', es: 'inteligencia artificial', example: 'Artificial intelligence is transforming many industries.' },
        { en: 'algorithm',           es: 'algoritmo',                example: 'The algorithm recommends videos based on your viewing history.' },
        { en: 'cybercrime',          es: 'ciberdelincuencia',        example: 'Cybercrime is a growing threat to businesses worldwide.' },
        { en: 'digital literacy',    es: 'alfabetización digital',   example: 'Digital literacy is an essential skill in the modern world.' },
        { en: 'misinformation',      es: 'desinformación',           example: 'Misinformation spreads rapidly on social media.' },
        { en: 'privacy',             es: 'privacidad',               example: 'Online privacy is a major concern for many users.' },
        { en: 'bandwidth',           es: 'ancho de banda',           example: 'Video calls require a lot of bandwidth.' },
        { en: 'cloud storage',       es: 'almacenamiento en la nube', example: 'I back up all my photos to cloud storage.' },
        { en: 'update',              es: 'actualización',            example: 'Make sure you install the latest software update.' },
        { en: 'app',                 es: 'aplicación / app',         example: 'There is an app for almost everything these days.' },
        { en: 'broadband',           es: 'banda ancha / internet',   example: 'Fast broadband is essential for remote work.' },
        { en: 'screen time',         es: 'tiempo de pantalla',       example: 'Excessive screen time can affect sleep quality.' },
        { en: 'virtual reality',     es: 'realidad virtual',         example: 'Virtual reality is being used in education and training.' },
        { en: 'data',                es: 'datos',                    example: 'Companies collect vast amounts of personal data.' },
        { en: 'hack',                es: 'hackear / piratear',       example: 'The company\'s database was hacked last year.' },
        { en: 'download / upload',   es: 'descargar / subir',        example: 'Download the file and upload it to the platform.' },
        { en: 'influencer',          es: 'influencer / creador de contenido', example: 'She became an influencer with millions of followers.' },
        { en: 'fake news',           es: 'noticias falsas',          example: 'It is important to verify information before sharing fake news.' }
      ]
    },

    {
      id: 'education_learning_b1',
      title: 'Education & Learning',
      icon: '📚',
      count: 20,
      level: 'B1',
      words: [
        { en: 'degree',              es: 'título universitario / grado', example: 'She has a degree in economics from a top university.' },
        { en: 'scholarship',         es: 'beca',                      example: 'He won a scholarship to study in the UK.' },
        { en: 'curriculum',          es: 'currículo / plan de estudios', example: 'The school has a modern curriculum focused on critical thinking.' },
        { en: 'compulsory',          es: 'obligatorio/a',             example: 'Education is compulsory until the age of 16.' },
        { en: 'optional',            es: 'optativo/a / opcional',     example: 'Art is an optional subject in the final year.' },
        { en: 'tutor',               es: 'tutor/a',                   example: 'My tutor helped me improve my essay writing.' },
        { en: 'assignment',          es: 'tarea / trabajo escolar',   example: 'The assignment is due next Monday.' },
        { en: 'semester',            es: 'semestre',                  example: 'The course is divided into two semesters.' },
        { en: 'graduate',            es: 'graduarse / licenciarse',   example: 'She graduated from university with top marks.' },
        { en: 'dropout',             es: 'abandono escolar',          example: 'The school has programmes to reduce the dropout rate.' },
        { en: 'literacy',            es: 'alfabetización / lectoescritura', example: 'Adult literacy programmes have helped thousands of people.' },
        { en: 'numeracy',            es: 'competencia matemática',    example: 'Good numeracy skills are important in everyday life.' },
        { en: 'distance learning',   es: 'educación a distancia',     example: 'Distance learning makes education accessible to everyone.' },
        { en: 'academic',            es: 'académico/a',               example: 'She had an excellent academic record throughout school.' },
        { en: 'research',            es: 'investigación',             example: 'He conducted research into climate change for his thesis.' },
        { en: 'peer',                es: 'compañero/a / par',         example: 'Learning with peers can be more motivating than studying alone.' },
        { en: 'pass / fail',         es: 'aprobar / suspender',       example: 'You need at least 60% to pass the exam.' },
        { en: 'revision',            es: 'repaso / revisión',         example: 'Good revision the night before helps you remember more.' },
        { en: 'plagiarism',          es: 'plagio',                    example: 'Plagiarism is a serious offence in academic writing.' },
        { en: 'critical thinking',   es: 'pensamiento crítico',       example: 'Critical thinking is a skill valued in all subjects.' }
      ]
    },

    {
      id: 'travel_tourism_b1',
      title: 'Travel & Tourism',
      icon: '✈️',
      count: 20,
      level: 'B1',
      words: [
        { en: 'destination',         es: 'destino',                   example: 'Colombia is becoming a popular tourist destination.' },
        { en: 'itinerary',           es: 'itinerario',                example: 'She planned a detailed itinerary for the two-week trip.' },
        { en: 'accommodation',       es: 'alojamiento / hospedaje',   example: 'We booked accommodation near the city centre.' },
        { en: 'check in / check out', es: 'registrarse / hacer check-out', example: 'Check-in is at 3pm and check-out is at noon.' },
        { en: 'currency',            es: 'moneda / divisa',           example: 'Make sure you exchange your currency before travelling.' },
        { en: 'customs',             es: 'aduana',                    example: 'We had to declare the goods at customs.' },
        { en: 'jet lag',             es: 'jet lag / cambio horario',  example: 'After flying to Japan, she suffered from severe jet lag.' },
        { en: 'sightseeing',         es: 'turismo / visitar lugares', example: 'We spent the afternoon sightseeing in the old city.' },
        { en: 'guided tour',         es: 'visita guiada',             example: 'The guided tour of the palace lasted two hours.' },
        { en: 'backpacker',          es: 'mochilero/a',               example: 'As a backpacker, he travelled through South America on a budget.' },
        { en: 'souvenir',            es: 'recuerdo / souvenir',       example: 'She bought souvenirs for all her friends and family.' },
        { en: 'off the beaten track', es: 'fuera de los circuitos turísticos', example: 'They preferred off-the-beaten-track destinations.' },
        { en: 'peak season',         es: 'temporada alta',            example: 'Hotels are much more expensive during peak season.' },
        { en: 'travel insurance',    es: 'seguro de viaje',           example: 'Always take out travel insurance before going abroad.' },
        { en: 'delay',               es: 'retraso / demora',          example: 'The flight was delayed by three hours due to bad weather.' },
        { en: 'layover',             es: 'escala / parada',           example: 'There was a six-hour layover in Madrid before the connecting flight.' },
        { en: 'sea / air / road trip', es: 'viaje en barco/avión/carretera', example: 'They did a road trip through Patagonia in a campervan.' },
        { en: 'passport control',    es: 'control de pasaportes',     example: 'The queue at passport control took over an hour.' },
        { en: 'budget travel',       es: 'viaje económico / mochilero', example: 'Budget travel is easier now with many hostel apps available.' },
        { en: 'culture shock',       es: 'choque cultural',           example: 'She experienced culture shock when she first moved to Japan.' }
      ]
    },

    {
      id: 'society_issues_b1',
      title: 'Society & Social Issues',
      icon: '🤝',
      count: 20,
      level: 'B1',
      words: [
        { en: 'inequality',          es: 'desigualdad',               example: 'Social inequality is a major issue in many countries.' },
        { en: 'poverty',             es: 'pobreza',                   example: 'Millions of people live in extreme poverty worldwide.' },
        { en: 'discrimination',      es: 'discriminación',            example: 'Discrimination based on race or gender is illegal.' },
        { en: 'diversity',           es: 'diversidad',                example: 'Diversity in the workplace leads to more creative solutions.' },
        { en: 'human rights',        es: 'derechos humanos',          example: 'Every person deserves to have their human rights respected.' },
        { en: 'immigration',         es: 'inmigración',               example: 'Immigration has enriched the culture of many countries.' },
        { en: 'refugee',             es: 'refugiado/a',               example: 'Thousands of refugees fled the conflict and sought safety abroad.' },
        { en: 'gender equality',     es: 'igualdad de género',        example: 'Gender equality is a fundamental principle of modern democracies.' },
        { en: 'volunteer',           es: 'voluntario/a',              example: 'She volunteers at a local food bank every Saturday.' },
        { en: 'charity',             es: 'organización benéfica',     example: 'He donates money to several charities every year.' },
        { en: 'awareness',           es: 'conciencia / sensibilización', example: 'The campaign raised awareness about mental health.' },
        { en: 'campaign',            es: 'campaña',                   example: 'They launched a campaign to reduce plastic use.' },
        { en: 'homelessness',        es: 'falta de hogar / indigencia', example: 'Homelessness is a growing problem in many cities.' },
        { en: 'integration',         es: 'integración',               example: 'Social integration helps newcomers adapt to their new country.' },
        { en: 'prejudice',           es: 'prejuicio',                 example: 'Prejudice can prevent people from reaching their potential.' },
        { en: 'stereotype',          es: 'estereotipo',               example: 'We should challenge harmful stereotypes in the media.' },
        { en: 'community',           es: 'comunidad',                 example: 'The local community organised a clean-up of the river.' },
        { en: 'protest',             es: 'protesta / manifestación',  example: 'Thousands of people took part in a protest against the new law.' },
        { en: 'empathy',             es: 'empatía',                   example: 'Empathy is the ability to understand others\' feelings.' },
        { en: 'solidarity',          es: 'solidaridad',               example: 'International solidarity is essential during humanitarian crises.' }
      ]
    },

    {
      id: 'emotions_personality_b1',
      title: 'Emotions & Personality',
      icon: '😊',
      count: 20,
      level: 'B1',
      words: [
        { en: 'anxious',             es: 'ansioso/a',                 example: 'She felt anxious before the exam.' },
        { en: 'overwhelmed',         es: 'abrumado/a',                example: 'He felt overwhelmed by the amount of work.' },
        { en: 'relieved',            es: 'aliviado/a',                example: 'She was relieved when the results came out.' },
        { en: 'confident',           es: 'seguro/a de sí mismo',      example: 'A confident speaker makes a strong impression.' },
        { en: 'frustrated',          es: 'frustrado/a',               example: 'He felt frustrated when no one listened to his ideas.' },
        { en: 'jealous',             es: 'celoso/a / envidioso/a',    example: 'She was jealous of her colleague\'s promotion.' },
        { en: 'proud',               es: 'orgulloso/a',               example: 'Her parents were proud of her achievements.' },
        { en: 'lonely',              es: 'solitario/a / solo/a',      example: 'Moving to a new city can make you feel lonely at first.' },
        { en: 'optimistic',          es: 'optimista',                 example: 'Despite the difficulties, she remained optimistic.' },
        { en: 'pessimistic',         es: 'pesimista',                 example: 'A pessimistic attitude can stop you from achieving your goals.' },
        { en: 'empathetic',          es: 'empático/a',                example: 'A good teacher is empathetic and understands students\' needs.' },
        { en: 'stubborn',            es: 'terco/a / obstinado/a',     example: 'He was too stubborn to admit he was wrong.' },
        { en: 'ambitious',           es: 'ambicioso/a',               example: 'She is ambitious and wants to become CEO one day.' },
        { en: 'compassionate',       es: 'compasivo/a',               example: 'Doctors need to be compassionate as well as skilled.' },
        { en: 'impulsive',           es: 'impulsivo/a',               example: 'He made an impulsive decision he later regretted.' },
        { en: 'resilient',           es: 'resiliente',                example: 'Resilient people recover quickly from setbacks.' },
        { en: 'self-aware',          es: 'consciente de uno mismo',   example: 'Being self-aware helps you improve your weaknesses.' },
        { en: 'mood',                es: 'estado de ánimo',           example: 'Her mood changed completely after the good news.' },
        { en: 'grief',               es: 'duelo / pena profunda',     example: 'She experienced deep grief after losing her father.' },
        { en: 'enthusiasm',          es: 'entusiasmo',                example: 'He approached every task with great enthusiasm.' }
      ]
    }

  ]; // fin vocabTopicsB1


  // ============================================================
  // LEARNING PATH VOCABULARIO B1
  // ============================================================
  const vocabLearningPathB1 = [
    {
      level: 'B1',
      title: 'B1 · Vocabulary Intermediate',
      color: '#7C3AED',
      requiredScore: 75,
      topics: [
        'work_employment_b1',
        'environment_b1',
        'health_wellbeing_b1',
        'media_technology_b1',
        'education_learning_b1',
        'travel_tourism_b1',
        'society_issues_b1',
        'emotions_personality_b1'
      ]
    }
  ];


  // ============================================================
  // COMPETENCY MAP VOCABULARIO B1
  // ============================================================
  const vocabCompetencyMapB1 = {
    work_employment_b1:     { level: 'B1', skill: 'vocab', weaknessLabel: 'Vocabulario: Trabajo y empleo', homologationGroup: 'b1_vocab_work', diagnosticTags: ['work', 'employment', 'b1_vocab'] },
    environment_b1:         { level: 'B1', skill: 'vocab', weaknessLabel: 'Vocabulario: Medioambiente', homologationGroup: 'b1_vocab_environment', diagnosticTags: ['environment', 'nature', 'b1_vocab'] },
    health_wellbeing_b1:    { level: 'B1', skill: 'vocab', weaknessLabel: 'Vocabulario: Salud y bienestar', homologationGroup: 'b1_vocab_health', diagnosticTags: ['health', 'wellbeing', 'b1_vocab'] },
    media_technology_b1:    { level: 'B1', skill: 'vocab', weaknessLabel: 'Vocabulario: Tecnología y medios', homologationGroup: 'b1_vocab_tech', diagnosticTags: ['technology', 'media', 'b1_vocab'] },
    education_learning_b1:  { level: 'B1', skill: 'vocab', weaknessLabel: 'Vocabulario: Educación', homologationGroup: 'b1_vocab_education', diagnosticTags: ['education', 'learning', 'b1_vocab'] },
    travel_tourism_b1:      { level: 'B1', skill: 'vocab', weaknessLabel: 'Vocabulario: Viajes y turismo', homologationGroup: 'b1_vocab_travel', diagnosticTags: ['travel', 'tourism', 'b1_vocab'] },
    society_issues_b1:      { level: 'B1', skill: 'vocab', weaknessLabel: 'Vocabulario: Sociedad y problemas sociales', homologationGroup: 'b1_vocab_society', diagnosticTags: ['society', 'social_issues', 'b1_vocab'] },
    emotions_personality_b1:{ level: 'B1', skill: 'vocab', weaknessLabel: 'Vocabulario: Emociones y personalidad', homologationGroup: 'b1_vocab_emotions', diagnosticTags: ['emotions', 'personality', 'b1_vocab'] }
  };


  // ============================================================
  // DIAGNÓSTICO DE VOCABULARIO B1
  // ============================================================
  const vocabDiagnosticBlueprintB1 = {
    id: 'vocab_diagnostic_b1',
    title: 'Diagnóstico de vocabulario B1',
    levels: ['B1'],
    rules: { passScore: 75, homologationScore: 80, reinforcementThreshold: 70 },
    items: [
      { id: 'vd_b1_01', level: 'B1', mapsTo: ['work_employment_b1'],
        type: 'choice', q: 'What does "commute" mean?',
        opts: ['To resign from a job', 'To travel regularly to work', 'To earn a salary'], a: 1,
        exp: '"Commute" = desplazarse al trabajo regularmente.' },
      { id: 'vd_b1_02', level: 'B1', mapsTo: ['environment_b1'],
        type: 'choice', q: 'What is a "carbon footprint"?',
        opts: ['A type of fossil fuel', 'The total greenhouse gases a person produces', 'A renewable energy source'], a: 1,
        exp: '"Carbon footprint" = huella de carbono: total de emisiones producidas.' },
      { id: 'vd_b1_03', level: 'B1', mapsTo: ['health_wellbeing_b1'],
        type: 'choice', q: 'What does "chronic" mean in a medical context?',
        opts: ['Sudden and severe', 'Long-lasting and persistent', 'Easily curable'], a: 1,
        exp: '"Chronic" = crónico: que persiste durante largo tiempo.' },
      { id: 'vd_b1_04', level: 'B1', mapsTo: ['media_technology_b1'],
        type: 'choice', q: 'What is "misinformation"?',
        opts: ['Correct data about technology', 'False or inaccurate information', 'A type of internet connection'], a: 1,
        exp: '"Misinformation" = información falsa o imprecisa.' },
      { id: 'vd_b1_05', level: 'B1', mapsTo: ['society_issues_b1'],
        type: 'choice', q: 'What does "solidarity" mean?',
        opts: ['Discrimination against a group', 'Support and unity among people', 'A form of protest'], a: 1,
        exp: '"Solidarity" = solidaridad: apoyo mutuo entre personas.' },
      { id: 'vd_b1_06', level: 'B1', mapsTo: ['emotions_personality_b1'],
        type: 'choice', q: 'If someone is "resilient", they ___.',
        opts: ['Give up easily when things go wrong', 'Recover quickly from difficulties', 'Feel anxious about the future'], a: 1,
        exp: '"Resilient" = resiliente: capaz de recuperarse de dificultades.' },
      { id: 'vd_b1_07', level: 'B1', mapsTo: ['travel_tourism_b1'],
        type: 'choice', q: 'What is a "layover"?',
        opts: ['A long holiday abroad', 'A stop between connecting flights', 'A type of hotel room'], a: 1,
        exp: '"Layover" = escala: parada entre vuelos de conexión.' },
      { id: 'vd_b1_08', level: 'B1', mapsTo: ['education_learning_b1'],
        type: 'choice', q: 'What is "plagiarism"?',
        opts: ['A type of university exam', 'Copying someone else\'s work and presenting it as your own', 'A form of distance learning'], a: 1,
        exp: '"Plagiarism" = plagio: presentar el trabajo de otro como propio.' }
    ]
  };


  // ============================================================
  // EXPORTACIÓN — Navegador
  // ============================================================
  if (typeof window !== 'undefined') {

    // Fusionar temas en el array global
    if (Array.isArray(window.vocabTopics)) {
      const existingIds = window.vocabTopics.map(t => t.id);
      vocabTopicsB1.forEach(t => { if (!existingIds.includes(t.id)) window.vocabTopics.push(t); });
    } else {
      window.vocabTopics = vocabTopicsB1;
    }

    // Fusionar learning path
    if (Array.isArray(window.vocabLearningPath)) {
      const alreadyAdded = window.vocabLearningPath.some(l => l.level === 'B1');
      if (!alreadyAdded) window.vocabLearningPath.push(...vocabLearningPathB1);
    } else {
      window.vocabLearningPath = vocabLearningPathB1;
    }

    // Fusionar competency map
    if (window.vocabCompetencyMap) Object.assign(window.vocabCompetencyMap, vocabCompetencyMapB1);

    // Exponer globals
    window.vocabDiagnosticBlueprintB1 = vocabDiagnosticBlueprintB1;
    window.vocabTopicsB1               = vocabTopicsB1;
    window.vocabLearningPathB1         = vocabLearningPathB1;
    window.vocabCompetencyMapB1        = vocabCompetencyMapB1;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      vocabTopicsB1, vocabLearningPathB1,
      vocabCompetencyMapB1, vocabDiagnosticBlueprintB1
    };
  }

}()); // fin IIFE
