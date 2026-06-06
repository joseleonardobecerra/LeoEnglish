// ============================================================
// data-diagnostic-enhanced.js  — LeoEnglish v6.0
// Diagnóstico mejorado: inferencia, escucha simulada, A1→C1
// SIN respuestas literales en el enunciado.
// ============================================================

(function () {
  'use strict';

  // ── Utilidad: mezcla Fisher-Yates ──────────────────────────
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ============================================================
  // GRAMÁTICA A1 — 20 items (inferencia real, no copia literal)
  // ============================================================
  const grammarA1 = [
    {
      id: 'dg_a1_articles_1', level: 'A1', skill: 'grammar',
      mapsTo: ['articles'], tags: ['articles', 'a_an'],
      q: 'Mark wants to become ___ architect when he grows up.',
      opts: ['a', 'an', 'the', '—'],
      a: 1,
      exp: '"Architect" empieza con vocal: an architect.'
    },
    {
      id: 'dg_a1_articles_2', level: 'A1', skill: 'grammar',
      mapsTo: ['articles'], tags: ['articles', 'the'],
      q: 'Could you pass ___ salt, please?',
      opts: ['a', 'an', 'the', '—'],
      a: 2,
      exp: 'Objeto específico y único en contexto: the salt.'
    },
    {
      id: 'dg_a1_pronouns_1', level: 'A1', skill: 'grammar',
      mapsTo: ['pronouns'], tags: ['object_pronouns'],
      q: 'My sister called last night. I haven\'t spoken to ___ yet.',
      opts: ['she', 'her', 'hers', 'herself'],
      a: 1,
      exp: 'Después de preposición "to": object pronoun "her".'
    },
    {
      id: 'dg_a1_pronouns_2', level: 'A1', skill: 'grammar',
      mapsTo: ['pronouns'], tags: ['possessive'],
      q: 'That coat is not mine. I think it\'s ___.',
      opts: ['her', 'she', 'hers', 'herself'],
      a: 2,
      exp: 'Pronombre posesivo independiente: hers (sin sustantivo).'
    },
    {
      id: 'dg_a1_to_be_1', level: 'A1', skill: 'grammar',
      mapsTo: ['verbs'], tags: ['to_be', 'questions'],
      q: '___ your parents from Italy?',
      opts: ['Is', 'Are', 'Am', 'Do'],
      a: 1,
      exp: 'Sujeto plural "your parents": Are.'
    },
    {
      id: 'dg_a1_present_simple_1', level: 'A1', skill: 'grammar',
      mapsTo: ['present_simple'], tags: ['third_person_s'],
      q: 'My neighbour ___ his dog every evening, rain or shine.',
      opts: ['walk', 'walks', 'is walking', 'walked'],
      a: 1,
      exp: 'Hábito + 3ª persona: walks.'
    },
    {
      id: 'dg_a1_present_cont_1', level: 'A1', skill: 'grammar',
      mapsTo: ['present_cont'], tags: ['present_continuous'],
      q: 'Shh! The baby ___. Don\'t make noise.',
      opts: ['sleeps', 'sleep', 'is sleeping', 'slept'],
      a: 2,
      exp: 'Acción en este momento: is sleeping.'
    },
    {
      id: 'dg_a1_there_is_1', level: 'A1', skill: 'grammar',
      mapsTo: ['there_is_are'], tags: ['there_is_are'],
      q: '___ a lot of people at the party last night.',
      opts: ['There is', 'There was', 'There are', 'There were'],
      a: 3,
      exp: '"Last night" indica pasado + plural: there were.'
    },
    {
      id: 'dg_a1_frequency_1', level: 'A1', skill: 'grammar',
      mapsTo: ['frequency_adverbs'], tags: ['adverb_position'],
      q: 'She is ___ on time. She arrives before everyone.',
      opts: ['always', 'never', 'rarely', 'sometimes'],
      a: 0,
      exp: 'Llega antes que todos: always (siempre).'
    },
    {
      id: 'dg_a1_modal_can_1', level: 'A1', skill: 'grammar',
      mapsTo: ['can_could'], tags: ['can_ability'],
      q: 'I tried the crossword but ___ finish it. It was too hard.',
      opts: ['can\'t', 'couldn\'t', 'mustn\'t', 'needn\'t'],
      a: 1,
      exp: 'Incapacidad en pasado: couldn\'t.'
    },
    {
      id: 'dg_a1_modal_must_1', level: 'A1', skill: 'grammar',
      mapsTo: ['modal_verbs_a1'], tags: ['must_obligation'],
      q: 'You ___ forget to bring your passport tomorrow.',
      opts: ['must', 'mustn\'t', 'needn\'t', 'should'],
      a: 1,
      exp: 'Prohibición / necesidad de NO hacer: mustn\'t.'
    },
    {
      id: 'dg_a1_past_simple_1', level: 'A1', skill: 'grammar',
      mapsTo: ['past_simple'], tags: ['irregular_verbs'],
      q: 'We ___ the news and immediately called our parents.',
      opts: ['hear', 'heard', 'was hearing', 'hears'],
      a: 1,
      exp: 'Verbo irregular "hear" → heard.'
    },
    {
      id: 'dg_a1_past_to_be_1', level: 'A1', skill: 'grammar',
      mapsTo: ['past_to_be'], tags: ['was_were'],
      q: 'Neither of them ___ ready when the taxi arrived.',
      opts: ['was', 'were', 'is', 'are'],
      a: 0,
      exp: '"Neither of them" se trata como singular: was.'
    },
    {
      id: 'dg_a1_future_will_1', level: 'A1', skill: 'grammar',
      mapsTo: ['future_will'], tags: ['will_spontaneous'],
      q: 'The phone is ringing. Don\'t worry — I ___ get it.',
      opts: ['am going to', 'will', 'going to', 'shall I'],
      a: 1,
      exp: 'Decisión espontánea: will.'
    },
    {
      id: 'dg_a1_going_to_1', level: 'A1', skill: 'grammar',
      mapsTo: ['future_going_to'], tags: ['going_to_plans'],
      q: 'We\'ve already bought the tickets. We ___ see the new Bond film tonight.',
      opts: ['will', 'are going to', 'going to', 'shall'],
      a: 1,
      exp: 'Plan decidido de antemano: are going to.'
    },
    {
      id: 'dg_a1_gerund_1', level: 'A1', skill: 'grammar',
      mapsTo: ['likes_gerunds'], tags: ['verb_ing'],
      q: 'He can\'t stand ___ in queues for hours.',
      opts: ['wait', 'waits', 'waiting', 'to waited'],
      a: 2,
      exp: 'Can\'t stand + gerund (-ing).'
    },
    {
      id: 'dg_a1_prepositions_1', level: 'A1', skill: 'grammar',
      mapsTo: ['prepositions'], tags: ['time_prepositions'],
      q: 'The meeting starts ___ Monday morning ___ 9 o\'clock.',
      opts: ['on / at', 'in / at', 'at / on', 'on / in'],
      a: 0,
      exp: 'Days of the week: on. Specific time: at.'
    },
    {
      id: 'dg_a1_questions_1', level: 'A1', skill: 'grammar',
      mapsTo: ['questions_a1'], tags: ['question_formation'],
      q: '___ does this train go? I need to get to Central Station.',
      opts: ['What', 'Where', 'Who', 'Which'],
      a: 1,
      exp: 'Se pregunta por destino/lugar: Where.'
    },
    {
      id: 'dg_a1_present_perfect_1', level: 'A1', skill: 'grammar',
      mapsTo: ['present_perfect'], tags: ['ever_never'],
      q: '___ you ever tried sushi?',
      opts: ['Do', 'Did', 'Have', 'Are'],
      a: 2,
      exp: 'Experiencia de vida: Have you ever...?'
    },
    {
      id: 'dg_a1_imperatives_1', level: 'A1', skill: 'grammar',
      mapsTo: ['imperatives'], tags: ['imperatives'],
      q: 'The sign says: "___ the grass." It means you cannot walk on it.',
      opts: ['Don\'t walk on', 'Not walking on', 'No walk on', 'Don\'t to walk on'],
      a: 0,
      exp: 'Imperativo negativo: Don\'t + verb base.'
    }
  ];

  // ============================================================
  // GRAMÁTICA A2 — 20 items
  // ============================================================
  const grammarA2 = [
    {
      id: 'dg_a2_comparatives_1', level: 'A2', skill: 'grammar',
      mapsTo: ['comparisons'], tags: ['comparatives'],
      q: 'The second exam was much ___ I expected.',
      opts: ['difficult than', 'more difficult than', 'difficulter than', 'most difficult than'],
      a: 1,
      exp: 'Adjetivo de 3+ sílabas: more difficult than.'
    },
    {
      id: 'dg_a2_comparatives_2', level: 'A2', skill: 'grammar',
      mapsTo: ['comparisons'], tags: ['superlatives'],
      q: 'K2 is ___ mountain in the world after Everest.',
      opts: ['the more tall', 'tallest', 'the second tallest', 'most tall'],
      a: 2,
      exp: 'Posición ordinal: the second tallest.'
    },
    {
      id: 'dg_a2_quantifiers_1', level: 'A2', skill: 'grammar',
      mapsTo: ['quantifiers'], tags: ['few_little'],
      q: 'There\'s ___ hope left after the team lost 5–0.',
      opts: ['few', 'a few', 'little', 'a little'],
      a: 2,
      exp: '"Hope" es incontable + negativo: little.'
    },
    {
      id: 'dg_a2_past_continuous_1', level: 'A2', skill: 'grammar',
      mapsTo: ['past_continuous'], tags: ['interrupted_action'],
      q: 'She ___ dinner when the lights went out.',
      opts: ['cooked', 'was cooking', 'has cooked', 'cooks'],
      a: 1,
      exp: 'Acción en progreso interrumpida: was cooking.'
    },
    {
      id: 'dg_a2_present_perfect_2', level: 'A2', skill: 'grammar',
      mapsTo: ['present_perfect'], tags: ['for_since'],
      q: 'They haven\'t seen each other ___ they finished university.',
      opts: ['for', 'since', 'during', 'ago'],
      a: 1,
      exp: 'Punto de inicio en el tiempo: since.'
    },
    {
      id: 'dg_a2_first_conditional_1', level: 'A2', skill: 'grammar',
      mapsTo: ['conditionals_a2'], tags: ['first_conditional'],
      q: 'If it ___ tonight, the match will be postponed.',
      opts: ['will snow', 'snows', 'snowed', 'is snowing'],
      a: 1,
      exp: 'En cláusula "if" del 1er condicional: presente simple.'
    },
    {
      id: 'dg_a2_first_conditional_2', level: 'A2', skill: 'grammar',
      mapsTo: ['conditionals_a2'], tags: ['unless'],
      q: '___ you hurry up, we\'ll miss the train.',
      opts: ['If', 'Unless', 'Until', 'When'],
      a: 1,
      exp: 'Unless = if not: Unless you hurry up.'
    },
    {
      id: 'dg_a2_modal_should_1', level: 'A2', skill: 'grammar',
      mapsTo: ['modal_verbs_a2'], tags: ['should_advice'],
      q: 'You look exhausted. You ___ take a few days off.',
      opts: ['must', 'should', 'have to', 'shall'],
      a: 1,
      exp: 'Consejo suave: should.'
    },
    {
      id: 'dg_a2_modal_have_to_1', level: 'A2', skill: 'grammar',
      mapsTo: ['modal_verbs_a2'], tags: ['have_to_obligation'],
      q: 'She ___ work last Saturday because a colleague called in sick.',
      opts: ['must', 'had to', 'has to', 'should'],
      a: 1,
      exp: 'Obligación pasada: had to.'
    },
    {
      id: 'dg_a2_gerund_inf_1', level: 'A2', skill: 'grammar',
      mapsTo: ['gerund_inf_a2'], tags: ['verb_gerund_inf'],
      q: 'I decided ___ the job offer, even though it was well-paid.',
      opts: ['refusing', 'to refuse', 'refuse', 'refused'],
      a: 1,
      exp: 'Decide + infinitive: decided to refuse.'
    },
    {
      id: 'dg_a2_gerund_inf_2', level: 'A2', skill: 'grammar',
      mapsTo: ['gerund_inf_a2'], tags: ['verb_gerund'],
      q: 'He suggested ___ to a different restaurant.',
      opts: ['to go', 'going', 'go', 'went'],
      a: 1,
      exp: 'Suggest + gerund: suggested going.'
    },
    {
      id: 'dg_a2_past_simple_irreg_1', level: 'A2', skill: 'grammar',
      mapsTo: ['past_simple'], tags: ['irregular_verbs'],
      q: 'Last winter, we ___ two weeks skiing in Austria.',
      opts: ['spend', 'spent', 'spended', 'has spent'],
      a: 1,
      exp: 'Spend → spent (irregular).'
    },
    {
      id: 'dg_a2_future_mixed_1', level: 'A2', skill: 'grammar',
      mapsTo: ['future_mixed'], tags: ['future_forms'],
      q: 'The conference ___ at 9 am. Don\'t be late.',
      opts: ['will start', 'is going to start', 'starts', 'started'],
      a: 2,
      exp: 'Horario fijo/schedule: present simple con valor de futuro.'
    },
    {
      id: 'dg_a2_passive_intro_1', level: 'A2', skill: 'grammar',
      mapsTo: ['passive_a2'], tags: ['passive_voice'],
      q: 'These shoes ___ in Italy. The label says "Made in Italy".',
      opts: ['made', 'are made', 'make', 'were making'],
      a: 1,
      exp: 'Pasiva presente simple: are made.'
    },
    {
      id: 'dg_a2_relative_1', level: 'A2', skill: 'grammar',
      mapsTo: ['relative_clauses_a2'], tags: ['relative_pronouns'],
      q: 'The doctor ___ treated me was incredibly patient.',
      opts: ['which', 'who', 'whose', 'what'],
      a: 1,
      exp: 'Pronombre relativo para persona: who.'
    },
    {
      id: 'dg_a2_wish_1', level: 'A2', skill: 'grammar',
      mapsTo: ['conditionals_a2'], tags: ['wish'],
      q: 'I wish I ___ play the piano. It looks so elegant.',
      opts: ['can', 'could', 'would', 'will'],
      a: 1,
      exp: 'Wish + past simple para deseo presente: could.'
    },
    {
      id: 'dg_a2_question_tags_1', level: 'A2', skill: 'grammar',
      mapsTo: ['questions_a2'], tags: ['question_tags'],
      q: 'She has finished the report, ___?',
      opts: ['hasn\'t she', 'didn\'t she', 'won\'t she', 'isn\'t she'],
      a: 0,
      exp: 'Has → hasn\'t she? (misma auxiliar, negativa).'
    },
    {
      id: 'dg_a2_prepositions_time_1', level: 'A2', skill: 'grammar',
      mapsTo: ['prepositions'], tags: ['time_prepositions'],
      q: 'I usually read ___ night, just before I fall asleep.',
      opts: ['in', 'on', 'at', 'during'],
      a: 2,
      exp: 'Parte del día como expresión fija: at night.'
    },
    {
      id: 'dg_a2_reflexive_1', level: 'A2', skill: 'grammar',
      mapsTo: ['pronouns'], tags: ['reflexive_pronouns'],
      q: 'The children made the sandwiches ___. Nobody helped them.',
      opts: ['theirselves', 'themselves', 'them', 'theirs'],
      a: 1,
      exp: 'Pronombre reflexivo plural: themselves.'
    },
    {
      id: 'dg_a2_conjunctions_1', level: 'A2', skill: 'grammar',
      mapsTo: ['conjunctions_a2'], tags: ['while_when'],
      q: 'She bumped into her ex-boyfriend ___ she was travelling abroad.',
      opts: ['during', 'for', 'while', 'until'],
      a: 2,
      exp: 'Acción paralela en el pasado: while + past continuous.'
    }
  ];

  // ============================================================
  // READING A1 — inferencia, idea principal, vocabulario en contexto
  // ============================================================
  const readingA1 = [
    {
      id: 'dr_a1_inference_1', level: 'A1', skill: 'reading',
      mapsTo: ['school_day'], tags: ['inference', 'daily_routine'],
      q: 'Text: "Every day, Jake puts on his uniform, picks up his bag, and joins his classmates at 8 am." What is Jake most likely doing in the morning?',
      opts: ['Going to work', 'Going to school', 'Going to a sports club', 'Going shopping'],
      a: 1,
      exp: 'Uniform + classmates + 8 am → school routine. The word "school" is not in the text.'
    },
    {
      id: 'dr_a1_main_idea_1', level: 'A1', skill: 'reading',
      mapsTo: ['my_family'], tags: ['main_idea', 'family'],
      q: 'Text: "My mum cooks every day. My dad does the cleaning. My sister helps with the shopping. We all share the tasks at home." What is the main idea?',
      opts: ['The family loves cooking', 'The family eats together every day', 'Everyone in the family has a role at home', 'The sister does all the work'],
      a: 2,
      exp: 'The text describes shared responsibilities, not a specific person or activity.'
    },
    {
      id: 'dr_a1_vocabulary_1', level: 'A1', skill: 'reading',
      mapsTo: ['vocabulary_a1'], tags: ['vocabulary_in_context'],
      q: 'Text: "The shop assistant was very helpful. She smiled and found exactly what I was looking for." The word \'helpful\' means:',
      opts: ['Rude and unhelpful', 'Ready to assist others', 'Tired and bored', 'Quiet and shy'],
      a: 1,
      exp: 'Helpful = willing to assist. Inferred from "smiled and found exactly what I needed".'
    },
    {
      id: 'dr_a1_tone_1', level: 'A1', skill: 'reading',
      mapsTo: ['daily_routines_a1'], tags: ['author_tone'],
      q: 'Text: "I absolutely love Mondays! I see my best friends at school and we always laugh a lot." How does the writer feel about Mondays?',
      opts: ['Nervous', 'Bored', 'Happy', 'Tired'],
      a: 2,
      exp: '"Absolutely love" and "laugh a lot" signal happiness, not a literal answer given.'
    },
    {
      id: 'dr_a1_detail_1', level: 'A1', skill: 'reading',
      mapsTo: ['food_a1'], tags: ['specific_detail'],
      q: 'Menu text: "Burger £5.50 · Pizza £7.00 · Salad £4.00 · Pasta £6.50". Anna has £6 and wants something warm. What can she order?',
      opts: ['Pizza', 'Burger', 'Salad', 'Pasta'],
      a: 1,
      exp: 'Burger £5.50 is the only warm option under £6. Requires two-step reasoning.'
    },
    {
      id: 'dr_a1_negative_detail_1', level: 'A1', skill: 'reading',
      mapsTo: ['places_a1'], tags: ['negative_detail'],
      q: 'Notice: "The library is open Monday to Friday, 9–6. It is CLOSED at weekends." A student wants to go on Saturday. Can she go?',
      opts: ['Yes, in the morning', 'Yes, in the afternoon', 'No, it\'s closed', 'Only with a card'],
      a: 2,
      exp: 'The notice explicitly says CLOSED at weekends. Requires reading the negative detail.'
    }
  ];

  // ============================================================
  // READING A2 — inferencia más compleja
  // ============================================================
  const readingA2 = [
    {
      id: 'dr_a2_inference_1', level: 'A2', skill: 'reading',
      mapsTo: ['london'], tags: ['inference', 'travel'],
      q: 'Text: "Visitors queue for hours outside the gallery. Inside, they walk in silence, eyes wide. Some take photographs; others just stare." Why do people queue for hours?',
      opts: ['Because entry is free on that day', 'Because the gallery is very popular', 'Because the queue moves slowly', 'Because they are lost'],
      a: 1,
      exp: 'Long queues + silence + wide eyes = the place is highly valued. Not stated explicitly.'
    },
    {
      id: 'dr_a2_main_idea_2', level: 'A2', skill: 'reading',
      mapsTo: ['british_weather'], tags: ['main_idea'],
      q: 'Text: "In Britain, you can experience all four seasons in a single day. Pack layers, an umbrella, and sunscreen — whatever the forecast says." What is the writer\'s main advice?',
      opts: ['Check the weather forecast every hour', 'Buy British-made clothing', 'Be prepared for all types of weather', 'Stay indoors if it rains'],
      a: 2,
      exp: 'The list (layers, umbrella, sunscreen) implies preparation for everything — inference needed.'
    },
    {
      id: 'dr_a2_vocabulary_2', level: 'A2', skill: 'reading',
      mapsTo: ['healthy_lifestyle'], tags: ['vocabulary_in_context'],
      q: 'Text: "Regular exercise doesn\'t mean running marathons. A brisk 30-minute walk counts." The word \'brisk\' most likely means:',
      opts: ['Slow and relaxing', 'Fast and energetic', 'Short and easy', 'Long and difficult'],
      a: 1,
      exp: 'Contrast with "marathons" and "counts" as exercise → brisk = energetic pace.'
    },
    {
      id: 'dr_a2_purpose_1', level: 'A2', skill: 'reading',
      mapsTo: ['technology_life'], tags: ['purpose', 'writer_aim'],
      q: 'Text: "Studies show teenagers spend an average of 7 hours per day on screens. Doctors warn this affects sleep, attention, and social skills." What is the writer\'s purpose?',
      opts: ['To entertain readers with funny statistics', 'To warn about the negative effects of screen overuse', 'To explain how to use screens safely', 'To promote new technology for teenagers'],
      a: 1,
      exp: '"Warn" is a key word but purpose requires understanding the overall message.'
    },
    {
      id: 'dr_a2_contrast_1', level: 'A2', skill: 'reading',
      mapsTo: ['work_a2'], tags: ['contrast', 'inference'],
      q: 'Text: "City life offers excitement, career opportunities, and cultural diversity. Village life, on the other hand, offers peace, fresh air, and community spirit." A person who values their career would probably prefer:',
      opts: ['Village life', 'City life', 'Both equally', 'Neither'],
      a: 1,
      exp: '"Career opportunities" is linked to the city — requires matching personal value to text.'
    }
  ];

  // ============================================================
  // ESCUCHA SIMULADA A1 — audio describible por transcripción
  // ============================================================
  const listeningA1 = [
    {
      id: 'dl_a1_listen_1', level: 'A1', skill: 'listening',
      mapsTo: ['daily_routine_a1'], tags: ['listening_for_specific_info'],
      audioType: 'simulated',
      q: '🎧 Listen to the recording:\n\n"Hi Anna! It\'s Ben. I can\'t make it to football practice on Thursday. My bus is at half past five and the session starts at six. Sorry!"\n\nWhy can\'t Ben go to practice?',
      opts: ['He is ill', 'He has another appointment', 'His transport leaves before practice starts', 'He forgot about it'],
      a: 2,
      exp: 'The bus is at 5:30, practice at 6 → his bus leaves before he can get there. Inference needed.'
    },
    {
      id: 'dl_a1_listen_2', level: 'A1', skill: 'listening',
      mapsTo: ['shopping_a1'], tags: ['listening_numbers'],
      audioType: 'simulated',
      q: '🎧 Shop conversation:\n\nCustomer: "How much is this jacket?"\nShop assistant: "It was sixty pounds, but it\'s now thirty percent off."\nCustomer: "Great, I\'ll take it."\n\nHow much does the customer pay?',
      opts: ['£18', '£30', '£42', '£60'],
      a: 2,
      exp: '30% off £60 = £18 discount. £60 − £18 = £42. Requires mental arithmetic, not literal answer.'
    },
    {
      id: 'dl_a1_listen_3', level: 'A1', skill: 'listening',
      mapsTo: ['places_a1'], tags: ['listening_directions'],
      audioType: 'simulated',
      q: '🎧 Directions:\n\n"Go straight on, then turn left at the traffic lights. The post office is opposite the bank, next to the café."\n\nWhere exactly is the post office?',
      opts: ['Behind the bank', 'Next to the bank', 'Between the bank and the café', 'In front of the café, across from the bank'],
      a: 3,
      exp: '"Opposite the bank, next to the café" = in front of the bank and beside the café.'
    },
    {
      id: 'dl_a1_listen_4', level: 'A1', skill: 'listening',
      mapsTo: ['food_a1'], tags: ['listening_opinion'],
      audioType: 'simulated',
      q: '🎧 Restaurant conversation:\n\nServer: "Did you enjoy your meal?"\nGuest: "The pasta was lovely, but honestly the dessert was a bit disappointing."\n\nWhat did the guest think overall?',
      opts: ['Everything was perfect', 'The meal was partly good, partly not', 'The dessert was the best part', 'The pasta was too spicy'],
      a: 1,
      exp: '"Lovely" (positive) + "disappointing" (negative) = mixed opinion. Not a literal direct answer.'
    },
    {
      id: 'dl_a1_listen_5', level: 'A1', skill: 'listening',
      mapsTo: ['school_day'], tags: ['listening_future_plans'],
      audioType: 'simulated',
      q: '🎧 Two students talking:\n\n"Are you going to the library after school?"\n"I was planning to, but I just remembered I promised Mum I\'d cook dinner tonight."\n\nWhat will the student do after school?',
      opts: ['Go to the library', 'Meet a friend', 'Cook dinner at home', 'Study at a café'],
      a: 2,
      exp: 'The student changes plans because of a promise to their mum. Requires following a change of mind.'
    }
  ];

  // ============================================================
  // ESCUCHA SIMULADA A2
  // ============================================================
  const listeningA2 = [
    {
      id: 'dl_a2_listen_1', level: 'A2', skill: 'listening',
      mapsTo: ['work_a2'], tags: ['listening_for_gist'],
      audioType: 'simulated',
      q: '🎧 Radio advert:\n\n"Tired of your 9-to-5? At FlexWork Academy, we train you for remote jobs in just 8 weeks. No experience needed. Join 5,000 graduates who now work from home."\n\nWhat is the advert trying to do?',
      opts: ['Describe the problems of working from home', 'Sell a training course for remote workers', 'Warn people about internet scams', 'Report news about unemployment'],
      a: 1,
      exp: 'Persuasive language + "train you" + "join" = selling a course. Purpose, not literal content.'
    },
    {
      id: 'dl_a2_listen_2', level: 'A2', skill: 'listening',
      mapsTo: ['travel_a2'], tags: ['listening_details'],
      audioType: 'simulated',
      q: '🎧 Airport announcement:\n\n"Passengers for flight BA214 to New York, your gate has changed from 14 to 22B. Boarding begins in fifteen minutes. Please make your way there now."\n\nWhat should passengers do immediately?',
      opts: ['Check in at the desk', 'Wait at gate 14', 'Go to gate 22B now', 'Board the plane in 15 minutes at gate 14'],
      a: 2,
      exp: '"Make your way there now" = go to the new gate immediately. Combining two pieces of info.'
    },
    {
      id: 'dl_a2_listen_3', level: 'A2', skill: 'listening',
      mapsTo: ['relationships_a2'], tags: ['listening_attitude'],
      audioType: 'simulated',
      q: '🎧 Conversation between friends:\n\nA: "Did you see Daniel at the party?"\nB: "Yes, but I didn\'t feel like talking to him after what happened last week."\nA: "Fair enough."\n\nHow does speaker B feel about Daniel?',
      opts: ['Excited to see him', 'Indifferent', 'Uncomfortable or upset', 'Grateful'],
      a: 2,
      exp: '"Didn\'t feel like talking" after a conflict suggests negative feelings. No explicit emotion stated.'
    },
    {
      id: 'dl_a2_listen_4', level: 'A2', skill: 'listening',
      mapsTo: ['health_a2'], tags: ['listening_instructions'],
      audioType: 'simulated',
      q: '🎧 Doctor speaking:\n\n"Take one tablet three times a day with food. Avoid alcohol completely while on this medication. If you feel dizzy, stop and call us."\n\nHow many tablets should the patient take in two days?',
      opts: ['3', '4', '6', '9'],
      a: 2,
      exp: '3 times/day × 2 days = 6. Requires simple multiplication, not a literal answer.'
    },
    {
      id: 'dl_a2_listen_5', level: 'A2', skill: 'listening',
      mapsTo: ['environment_a2'], tags: ['listening_main_point'],
      audioType: 'simulated',
      q: '🎧 Podcast extract:\n\n"Scientists agree: the planet is getting warmer. But the real question is not whether it\'s happening — it\'s what we choose to do about it."\n\nWhat is the speaker\'s main point?',
      opts: ['Climate change is not proven', 'The planet is not actually warming', 'Action is more important than debating the facts', 'Scientists disagree about climate change'],
      a: 2,
      exp: '"The real question is what we choose to do" = call to action. Requires identifying the speaker\'s emphasis.'
    }
  ];

  // ============================================================
  // WRITING DIAGNÓSTICO A1–A2 (mejorado, no tan obvio)
  // ============================================================
  const writingDiagnostic = [
    {
      id: 'dw_a1_error_1', level: 'A1', skill: 'writing',
      mapsTo: ['error_correction_a1'], tags: ['error_correction'],
      q: 'Spot the error: "She don\'t like spicy food."',
      opts: ['"don\'t" should be "doesn\'t"', '"like" should be "likes"', '"spicy" should be "spicily"', 'No error'],
      a: 0,
      exp: '3rd person singular: doesn\'t (not don\'t).'
    },
    {
      id: 'dw_a1_transform_1', level: 'A1', skill: 'writing',
      mapsTo: ['transform_tenses'], tags: ['tense_transformation'],
      q: 'Rewrite in the negative: "I have got a car." → "I ___."',
      opts: ['haven\'t got a car', 'don\'t have got a car', 'haven\'t a car', 'not have got a car'],
      a: 0,
      exp: 'Have got negative: haven\'t got.'
    },
    {
      id: 'dw_a1_word_order_1', level: 'A1', skill: 'writing',
      mapsTo: ['word_order_a1'], tags: ['word_order'],
      q: 'Which sentence has the correct adverb position?\n"I go to the gym / often / three times a week."',
      opts: ['I go often to the gym three times a week.', 'I often go to the gym three times a week.', 'Often I go to the gym three times a week.', 'I go to the gym three times often a week.'],
      a: 1,
      exp: 'Adverbs of frequency go before the main verb (after subject).'
    },
    {
      id: 'dw_a2_error_1', level: 'A2', skill: 'writing',
      mapsTo: ['error_correction_a2'], tags: ['error_correction', 'past_simple'],
      q: 'Find and correct the mistake: "They didn\'t enjoyed the concert."',
      opts: ['Change "enjoyed" to "enjoy"', 'Change "didn\'t" to "don\'t"', 'Change "the" to "a"', 'No mistake'],
      a: 0,
      exp: 'After auxiliary "didn\'t": base form enjoy, not enjoyed.'
    },
    {
      id: 'dw_a2_transform_2', level: 'A2', skill: 'writing',
      mapsTo: ['passive_a2'], tags: ['passive_voice'],
      q: 'Rewrite in the passive: "They built this bridge in 1920." → "This bridge ___ in 1920."',
      opts: ['was built', 'is built', 'were built', 'built'],
      a: 0,
      exp: 'Passive simple past: was built (singular subject).'
    },
    {
      id: 'dw_a2_connector_1', level: 'A2', skill: 'writing',
      mapsTo: ['free_writing_a2'], tags: ['connectors'],
      q: 'Choose the best connector: "She studied hard. ___, she passed all her exams."',
      opts: ['However', 'Although', 'As a result', 'Despite'],
      a: 2,
      exp: 'Cause → effect (positive): As a result.'
    },
    {
      id: 'dw_a2_register_1', level: 'A2', skill: 'writing',
      mapsTo: ['free_writing_email'], tags: ['register', 'formal_informal'],
      q: 'You are writing a formal complaint to a company. Choose the most appropriate opening:',
      opts: ['Hey there! Just wanted to say…', 'I am writing to express my dissatisfaction with…', 'OMG I can\'t believe what happened…', 'So basically what happened was…'],
      a: 1,
      exp: 'Formal register: "I am writing to express…" is appropriate for a complaint.'
    }
  ];

  // ============================================================
  // GRAMÁTICA B1 — 20 items
  // ============================================================
  const grammarB1 = [
    {
      id: 'dg_b1_passive_1', level: 'B1', skill: 'grammar',
      mapsTo: ['passive_b1'], tags: ['passive_present_perfect'],
      q: 'The bridge ___ three times in the last century.',
      opts: ['has rebuilt', 'has been rebuilt', 'was rebuilt', 'rebuilt'],
      a: 1,
      exp: 'Presente perfecto pasiva: has been rebuilt.'
    },
    {
      id: 'dg_b1_reported_1', level: 'B1', skill: 'grammar',
      mapsTo: ['reported_speech_b1'], tags: ['reported_speech'],
      q: '"I\'m tired," she said. → She said that she ___.',
      opts: ['is tired', 'was tired', 'were tired', 'has been tired'],
      a: 1,
      exp: 'Backshift en reported speech: am → was.'
    },
    {
      id: 'dg_b1_second_conditional_1', level: 'B1', skill: 'grammar',
      mapsTo: ['conditionals_b1'], tags: ['second_conditional'],
      q: 'If I ___ you, I would take that job offer.',
      opts: ['am', 'was', 'were', 'would be'],
      a: 2,
      exp: '2nd conditional: If I were you (formal/hypothetical).'
    },
    {
      id: 'dg_b1_third_conditional_1', level: 'B1', skill: 'grammar',
      mapsTo: ['conditionals_b1'], tags: ['third_conditional'],
      q: 'If they ___ harder, they would have won the championship.',
      opts: ['trained', 'had trained', 'would train', 'have trained'],
      a: 1,
      exp: '3rd conditional if-clause: had + past participle.'
    },
    {
      id: 'dg_b1_past_perfect_1', level: 'B1', skill: 'grammar',
      mapsTo: ['past_perfect_b1'], tags: ['past_perfect'],
      q: 'By the time the ambulance arrived, the patient ___ consciousness.',
      opts: ['lost', 'has lost', 'had lost', 'was losing'],
      a: 2,
      exp: 'Acción anterior a otra en el pasado: had lost.'
    },
    {
      id: 'dg_b1_used_to_1', level: 'B1', skill: 'grammar',
      mapsTo: ['used_to_b1'], tags: ['used_to'],
      q: 'My grandmother ___ walk five kilometres to school every day.',
      opts: ['was used to', 'used to', 'is used to', 'got used to'],
      a: 1,
      exp: 'Hábito pasado que ya no ocurre: used to.'
    },
    {
      id: 'dg_b1_modal_must_deduction_1', level: 'B1', skill: 'grammar',
      mapsTo: ['modal_b1'], tags: ['must_deduction'],
      q: 'He knows every line of that film. He ___ seen it dozens of times.',
      opts: ['can\'t have', 'must have', 'should have', 'might not have'],
      a: 1,
      exp: 'Deducción positiva fuerte en el pasado: must have seen.'
    },
    {
      id: 'dg_b1_modal_cant_1', level: 'B1', skill: 'grammar',
      mapsTo: ['modal_b1'], tags: ['cant_deduction'],
      q: 'She\'s only 14. She ___ be the company director.',
      opts: ['mustn\'t', 'can\'t', 'shouldn\'t', 'needn\'t'],
      a: 1,
      exp: 'Imposibilidad lógica: can\'t.'
    },
    {
      id: 'dg_b1_present_perfect_prog_1', level: 'B1', skill: 'grammar',
      mapsTo: ['present_perfect_prog_b1'], tags: ['present_perfect_progressive'],
      q: 'You look exhausted. How long ___ working on that project?',
      opts: ['did you work', 'have you been working', 'are you working', 'were you working'],
      a: 1,
      exp: 'Actividad continua hasta el presente: have you been working?'
    },
    {
      id: 'dg_b1_relative_defining_1', level: 'B1', skill: 'grammar',
      mapsTo: ['relative_clauses_b1'], tags: ['relative_clauses'],
      q: 'The film ___ we watched last night had an unexpected ending.',
      opts: ['who', 'which', 'whose', 'whom'],
      a: 1,
      exp: 'Cláusula de relativo para cosa: which/that.'
    },
    {
      id: 'dg_b1_gerund_inf_stop_1', level: 'B1', skill: 'grammar',
      mapsTo: ['gerund_inf_b1'], tags: ['stop_gerund_inf'],
      q: 'She stopped ___ sugar altogether after the doctor\'s advice.',
      opts: ['eat', 'to eat', 'eating', 'eaten'],
      a: 2,
      exp: 'Stop + gerund = cease the activity. Stop + inf = in order to.'
    },
    {
      id: 'dg_b1_connectors_1', level: 'B1', skill: 'grammar',
      mapsTo: ['connectors_b1'], tags: ['discourse_markers'],
      q: 'The project was underfunded; ___, the team delivered exceptional results.',
      opts: ['therefore', 'nevertheless', 'furthermore', 'as a result'],
      a: 1,
      exp: 'Contraste concesivo: nevertheless (sin embargo).'
    },
    {
      id: 'dg_b1_adjectives_ed_ing_1', level: 'B1', skill: 'grammar',
      mapsTo: ['adjectives_b1'], tags: ['ed_ing_adjectives'],
      q: 'The documentary was absolutely ___. I couldn\'t stop watching.',
      opts: ['fascinated', 'fascinating', 'fascinate', 'fascination'],
      a: 1,
      exp: 'Cosa que causa la sensación: fascinating. (bored/boring pattern)'
    },
    {
      id: 'dg_b1_passive_modal_1', level: 'B1', skill: 'grammar',
      mapsTo: ['passive_b1'], tags: ['modal_passive'],
      q: 'Applications ___ by 31 May. Late submissions won\'t be considered.',
      opts: ['must submit', 'must be submitted', 'should submit', 'have submitted'],
      a: 1,
      exp: 'Pasiva modal: must be submitted.'
    },
    {
      id: 'dg_b1_might_probability_1', level: 'B1', skill: 'grammar',
      mapsTo: ['modal_b1'], tags: ['might_probability'],
      q: 'Take an umbrella. It ___ rain this afternoon.',
      opts: ['will', 'must', 'might', 'shall'],
      a: 2,
      exp: 'Probabilidad: might (posible pero no seguro).'
    },
    {
      id: 'dg_b1_wish_regret_1', level: 'B1', skill: 'grammar',
      mapsTo: ['conditionals_b1'], tags: ['wish_regret'],
      q: 'I ___ I had started learning Chinese earlier. It\'s so hard now.',
      opts: ['wish', 'hope', 'want', 'would like'],
      a: 0,
      exp: 'Arrepentimiento pasado: I wish + past perfect.'
    },
    {
      id: 'dg_b1_future_progressive_1', level: 'B1', skill: 'grammar',
      mapsTo: ['future_b1'], tags: ['future_progressive'],
      q: 'This time tomorrow, I ___ on a beach in Portugal.',
      opts: ['will sit', 'will be sitting', 'am sitting', 'sat'],
      a: 1,
      exp: 'Acción en progreso en un momento futuro: will be sitting.'
    },
    {
      id: 'dg_b1_reported_question_1', level: 'B1', skill: 'grammar',
      mapsTo: ['reported_speech_b1'], tags: ['reported_questions'],
      q: '"Where do you live?" he asked. → He asked me where I ___.',
      opts: ['live', 'lived', 'do live', 'did live'],
      a: 1,
      exp: 'Reported question: backshift del presente → pasado.'
    },
    {
      id: 'dg_b1_ought_to_1', level: 'B1', skill: 'grammar',
      mapsTo: ['modal_b1'], tags: ['ought_to'],
      q: 'You ___ to call her. She\'s been waiting for news all day.',
      opts: ['ought', 'should', 'shall', 'would'],
      a: 0,
      exp: 'Ought to = moral obligation (sinónimo de should).'
    },
    {
      id: 'dg_b1_question_tags_complex_1', level: 'B1', skill: 'grammar',
      mapsTo: ['questions_b1'], tags: ['complex_question_tags'],
      q: 'Let\'s go for a walk, ___?',
      opts: ['don\'t we', 'shall we', 'will we', 'won\'t we'],
      a: 1,
      exp: '"Let\'s" → shall we? (fixed expression).'
    }
  ];

  // ============================================================
  // ESCUCHA B1
  // ============================================================
  const listeningB1 = [
    {
      id: 'dl_b1_listen_1', level: 'B1', skill: 'listening',
      mapsTo: ['environment_b1'], tags: ['listening_attitude'],
      audioType: 'simulated',
      q: '🎧 Radio interview:\n\nHost: "Do you think electric cars will solve the pollution problem?"\nExpert: "They\'re certainly part of the solution, but if the electricity still comes from coal power plants, we\'re just moving the pollution elsewhere."\n\nWhat is the expert\'s view on electric cars?',
      opts: ['They are the complete solution', 'They make no difference at all', 'They help, but their impact depends on the energy source', 'They are worse than petrol cars'],
      a: 2,
      exp: '"Part of the solution" + "if electricity comes from coal" = conditional benefit. Complex inference.'
    },
    {
      id: 'dl_b1_listen_2', level: 'B1', skill: 'listening',
      mapsTo: ['work_b1'], tags: ['listening_implication'],
      audioType: 'simulated',
      q: '🎧 Job interview extract:\n\nInterviewer: "Where do you see yourself in five years?"\nCandidate: "Honestly? In your seat."\n\nWhat does the candidate imply?',
      opts: ['They want the interviewer\'s exact chair', 'They are ambitious and want to be in a senior role', 'They are joking and not serious', 'They want to work in the same office'],
      a: 1,
      exp: '"Your seat" = the interviewer\'s managerial position. Idiomatic implication.'
    },
    {
      id: 'dl_b1_listen_3', level: 'B1', skill: 'listening',
      mapsTo: ['relationships_b1'], tags: ['listening_implicit_meaning'],
      audioType: 'simulated',
      q: '🎧 Two colleagues talking:\n\nA: "Did you hear Marco got promoted?"\nB: "Oh… good for him." (said slowly, with a pause)\n\nHow does B most likely feel?',
      opts: ['Genuinely happy for Marco', 'Surprised but indifferent', 'Possibly jealous or disappointed', 'Confused about the news'],
      a: 2,
      exp: 'Slow delivery + pause = insincerity. Tone and paralinguistic cues imply negative emotion.'
    }
  ];

  // ============================================================
  // GRAMÁTICA B2 — 15 items
  // ============================================================
  const grammarB2 = [
    {
      id: 'dg_b2_mixed_conditional_1', level: 'B2', skill: 'grammar',
      mapsTo: ['conditionals_b2'], tags: ['mixed_conditional'],
      q: 'If I had studied medicine, I ___ a doctor now.',
      opts: ['would be', 'will be', 'would have been', 'was'],
      a: 0,
      exp: 'Mixed conditional: pasado hipotético → resultado presente: would + infinitive.'
    },
    {
      id: 'dg_b2_inversion_1', level: 'B2', skill: 'grammar',
      mapsTo: ['inversion_b2'], tags: ['inversion'],
      q: '___ had I arrived at the office than my phone rang.',
      opts: ['No sooner', 'Hardly', 'Scarcely', 'Barely'],
      a: 0,
      exp: 'No sooner...than: No sooner had I arrived than... (inversión con hardly/scarcely también válida).'
    },
    {
      id: 'dg_b2_cleft_1', level: 'B2', skill: 'grammar',
      mapsTo: ['cleft_b2'], tags: ['cleft_sentences'],
      q: '___ his arrogance that made people dislike him, not his ability.',
      opts: ['It was', 'There was', 'What was', 'That was'],
      a: 0,
      exp: 'Cleft sentence con "it": It was + noun phrase + that.'
    },
    {
      id: 'dg_b2_future_perfect_1', level: 'B2', skill: 'grammar',
      mapsTo: ['future_b2'], tags: ['future_perfect'],
      q: 'By the time you read this, I ___ the country.',
      opts: ['will leave', 'am leaving', 'will have left', 'have left'],
      a: 2,
      exp: 'Futuro perfecto: acción completada antes de un punto futuro: will have left.'
    },
    {
      id: 'dg_b2_passive_complex_1', level: 'B2', skill: 'grammar',
      mapsTo: ['passive_b2'], tags: ['complex_passive'],
      q: 'The new policy ___ by the board before it takes effect.',
      opts: ['must approve', 'must be approving', 'must be approved', 'must have approved'],
      a: 2,
      exp: 'Pasiva modal: must be approved.'
    },
    {
      id: 'dg_b2_would_habit_1', level: 'B2', skill: 'grammar',
      mapsTo: ['modal_b2'], tags: ['would_past_habit'],
      q: 'Every Sunday, my grandfather ___ take us fishing at the river.',
      opts: ['used to', 'would', 'was used to', 'got used to'],
      a: 1,
      exp: '"Would" para hábito pasado con contexto temporal claro (every Sunday).'
    },
    {
      id: 'dg_b2_participle_clause_1', level: 'B2', skill: 'grammar',
      mapsTo: ['participle_b2'], tags: ['participle_clause'],
      q: '___ by the noise, she put in her earplugs and carried on working.',
      opts: ['Disturbed', 'Disturbing', 'Having disturbed', 'To disturb'],
      a: 0,
      exp: 'Participio pasado (pasiva) para la razón: Disturbed by the noise.'
    },
    {
      id: 'dg_b2_discourse_markers_1', level: 'B2', skill: 'grammar',
      mapsTo: ['discourse_b2'], tags: ['discourse_markers'],
      q: 'The project was a success. ___, the team was praised by the CEO.',
      opts: ['In spite of this', 'Consequently', 'Nevertheless', 'On the contrary'],
      a: 1,
      exp: 'Causa → efecto positivo: Consequently.'
    },
    {
      id: 'dg_b2_should_have_1', level: 'B2', skill: 'grammar',
      mapsTo: ['modal_b2'], tags: ['should_have'],
      q: 'You ___ told me earlier. I could have helped.',
      opts: ['should', 'should have', 'ought', 'must have'],
      a: 1,
      exp: 'Crítica sobre acción pasada: should have + past participle.'
    },
    {
      id: 'dg_b2_had_something_done_1', level: 'B2', skill: 'grammar',
      mapsTo: ['causative_b2'], tags: ['have_something_done'],
      q: 'She ___ her flat painted before she moved in.',
      opts: ['had painted', 'had her flat paint', 'had her flat painted', 'has painted'],
      a: 2,
      exp: 'Causative have: had + object + past participle.'
    },
    {
      id: 'dg_b2_relative_non_defining_1', level: 'B2', skill: 'grammar',
      mapsTo: ['relative_b2'], tags: ['non_defining_relative'],
      q: 'My sister, ___ lives in Rome, is visiting us next month.',
      opts: ['that', 'who', 'which', 'whose'],
      a: 1,
      exp: 'Cláusula no restrictiva con persona: who (no "that").'
    },
    {
      id: 'dg_b2_wish_regret_past_1', level: 'B2', skill: 'grammar',
      mapsTo: ['conditionals_b2'], tags: ['wish_past_regret'],
      q: 'I wish I ___ so much money on that car. It broke down after a month.',
      opts: ['didn\'t spend', 'hadn\'t spent', 'wouldn\'t spend', 'won\'t spend'],
      a: 1,
      exp: 'Arrepentimiento sobre el pasado: wish + past perfect.'
    },
    {
      id: 'dg_b2_get_used_to_1', level: 'B2', skill: 'grammar',
      mapsTo: ['used_to_b2'], tags: ['get_used_to'],
      q: 'Living alone was hard at first, but she eventually ___ it.',
      opts: ['used to', 'got used to', 'was used to', 'would get used'],
      a: 1,
      exp: 'Proceso de adaptación: got used to (became accustomed).'
    },
    {
      id: 'dg_b2_emphasis_1', level: 'B2', skill: 'grammar',
      mapsTo: ['emphasis_b2'], tags: ['emphatic_structures'],
      q: 'I do ___ you would stop interrupting me while I\'m speaking.',
      opts: ['hope', 'wish', 'want', 'suggest'],
      a: 0,
      exp: '"Do hope" = emphatic form (do + base verb for emphasis).'
    },
    {
      id: 'dg_b2_complex_question_1', level: 'B2', skill: 'grammar',
      mapsTo: ['questions_b2'], tags: ['indirect_questions'],
      q: 'Could you tell me where ___ the nearest pharmacy?',
      opts: ['is', 'was', 'there is', 'I can find'],
      a: 3,
      exp: 'Pregunta indirecta: orden de oración declarativa: where I can find.'
    }
  ];

  // ============================================================
  // GRAMÁTICA C1 — 10 items
  // ============================================================
  const grammarC1 = [
    {
      id: 'dg_c1_inversion_neg_1', level: 'C1', skill: 'grammar',
      mapsTo: ['inversion_c1'], tags: ['negative_adverbials'],
      q: '___ have I witnessed such breathtaking teamwork in all my years of coaching.',
      opts: ['Rarely', 'Rarely I', 'I rarely', 'Rarely did I'],
      a: 0,
      exp: 'Inversión con adverbial negativo: Rarely + aux + subject + verb.'
    },
    {
      id: 'dg_c1_modal_past_1', level: 'C1', skill: 'grammar',
      mapsTo: ['modal_c1'], tags: ['modal_past_speculation'],
      q: 'The window was open and the jewels were gone. Someone ___ in during the night.',
      opts: ['must break', 'could have broken', 'should have broken', 'might break'],
      a: 1,
      exp: 'Especulación sobre pasado: could have broken (más tentativamente que must have).'
    },
    {
      id: 'dg_c1_nominalization_1', level: 'C1', skill: 'grammar',
      mapsTo: ['nominalization_c1'], tags: ['nominalization'],
      q: 'The ___ of the old theatre was a controversial decision.',
      opts: ['demolish', 'demolishing', 'demolition', 'demolished'],
      a: 2,
      exp: 'Nominalización: demolition (no "demolishing" en contexto formal académico).'
    },
    {
      id: 'dg_c1_fronting_1', level: 'C1', skill: 'grammar',
      mapsTo: ['fronting_c1'], tags: ['fronting_focusing'],
      q: '___ I had not expected: the board\'s complete silence.',
      opts: ['This', 'What', 'That', 'Which'],
      a: 1,
      exp: 'Fronting con "what" para énfasis: What I had not expected: ...'
    },
    {
      id: 'dg_c1_ellipsis_1', level: 'C1', skill: 'grammar',
      mapsTo: ['ellipsis_c1'], tags: ['ellipsis'],
      q: 'A: "Are you going to submit the report today?" B: "I hope ___."',
      opts: ['to', 'so', 'it', 'that'],
      a: 1,
      exp: 'Ellipsis con "hope so" (substitution to avoid repetition).'
    },
    {
      id: 'dg_c1_mixed_cond_1', level: 'C1', skill: 'grammar',
      mapsTo: ['conditionals_c1'], tags: ['mixed_conditional_c1'],
      q: 'If she ___ the surgery, she would be able to walk normally now.',
      opts: ['had undergone', 'underwent', 'has undergone', 'undergoes'],
      a: 0,
      exp: 'Condicional mixto: causa pasada (had undergone) → resultado presente.'
    },
    {
      id: 'dg_c1_hedging_1', level: 'C1', skill: 'grammar',
      mapsTo: ['hedging_c1'], tags: ['academic_hedging'],
      q: 'The results ___ suggest a link between diet and cognitive decline.',
      opts: ['possibly', 'would seem to', 'appears', 'maybe'],
      a: 1,
      exp: '"Would seem to" is the most formal hedging device in academic writing.'
    },
    {
      id: 'dg_c1_complex_nouns_1', level: 'C1', skill: 'grammar',
      mapsTo: ['complex_nouns_c1'], tags: ['complex_noun_phrases'],
      q: 'Choose the most natural complex noun phrase:',
      opts: ['A very complicated and difficult situation of great urgency', 'An urgent and complex situation', 'A situation that is urgent and complex in its nature', 'A complex, high-stakes, time-sensitive situation'],
      a: 3,
      exp: 'C1: compact pre-modification preferred in formal writing: complex, high-stakes, time-sensitive.'
    },
    {
      id: 'dg_c1_stylistic_1', level: 'C1', skill: 'grammar',
      mapsTo: ['stylistic_c1'], tags: ['register_shift'],
      q: 'Formal equivalent of "We need to think about this more carefully":',
      opts: ['We have to think about this.', 'Further consideration of this matter is warranted.', 'We should think about it more.', 'More thinking is needed here.'],
      a: 1,
      exp: 'C1 formal: nominalisation + passive voice = "consideration is warranted".'
    },
    {
      id: 'dg_c1_advanced_connector_1', level: 'C1', skill: 'grammar',
      mapsTo: ['connectors_c1'], tags: ['advanced_connectors'],
      q: 'The data is inconclusive; ___, it would be premature to draw firm conclusions.',
      opts: ['in addition', 'as such', 'despite this', 'for instance'],
      a: 1,
      exp: '"As such" = por lo tanto / en consecuencia (lógico, formal).'
    }
  ];

  // ============================================================
  // ESCUCHA B2
  // ============================================================
  const listeningB2 = [
    {
      id: 'dl_b2_listen_1', level: 'B2', skill: 'listening',
      mapsTo: ['society_b2'], tags: ['listening_implicit'],
      audioType: 'simulated',
      q: '🎧 TED-style talk extract:\n\n"We celebrate the founders, the disruptors, the lone geniuses. But behind every \'overnight success\', there are years of quiet, unglamorous effort by teams of people whose names we never learn."\n\nWhat is the speaker questioning?',
      opts: ['Whether successful people are genuinely talented', 'The myth of the solitary genius and individual success', 'Why teams are more effective than individuals', 'Whether hard work is more important than talent'],
      a: 1,
      exp: '"We celebrate the lone genius" but it\'s the team → critiques the narrative, not just praising teams.'
    },
    {
      id: 'dl_b2_listen_2', level: 'B2', skill: 'listening',
      mapsTo: ['media_b2'], tags: ['listening_bias'],
      audioType: 'simulated',
      q: '🎧 News commentary:\n\n"Of course, the government\'s economic figures look impressive on paper. But one must ask: impressive for whom?"\n\nWhat technique is the speaker using?',
      opts: ['Reporting facts objectively', 'Questioning whose interests the data serves', 'Praising the government\'s economic record', 'Explaining how the figures were calculated'],
      a: 1,
      exp: '"For whom?" = critical questioning of perspective/bias. Requires recognising rhetorical technique.'
    },
    {
      id: 'dl_b2_listen_3', level: 'B2', skill: 'listening',
      mapsTo: ['psychology_b2'], tags: ['listening_argument'],
      audioType: 'simulated',
      q: '🎧 Podcast extract:\n\n"Social media companies argue they just provide a platform — they don\'t create the content. But if a pub owner lets fights happen every night and does nothing, are they really innocent?"\n\nWhat is the speaker doing?',
      opts: ['Defending social media companies', 'Using an analogy to argue for greater platform responsibility', 'Explaining how pub owners are regulated', 'Saying that violence online is inevitable'],
      a: 1,
      exp: 'The pub analogy = rhetorical comparison arguing platforms bear responsibility. Inference + analogy.'
    }
  ];

  // ============================================================
  // READING B1
  // ============================================================
  const readingB1 = [
    {
      id: 'dr_b1_inference_1', level: 'B1', skill: 'reading',
      mapsTo: ['environment_b1'], tags: ['inference', 'writer_attitude'],
      q: 'Text: "Plastic straws have been banned in several countries. Critics call this a \'gesture politics\' — a feel-good measure that distracts from the real problem." What does the phrase "gesture politics" suggest?',
      opts: ['The policy is extremely effective', 'The policy is symbolic but may not address the core issue', 'Politicians support the ban enthusiastically', 'The critics want more plastic straws'],
      a: 1,
      exp: '"Gesture" + "feel-good" + "distracts" = superficial action. Requires understanding critical register.'
    },
    {
      id: 'dr_b1_vocabulary_1', level: 'B1', skill: 'reading',
      mapsTo: ['work_b1'], tags: ['vocabulary_in_context'],
      q: 'Text: "The CEO\'s remarks were met with a lukewarm response from investors — polite applause, but no real enthusiasm." What does "lukewarm" mean here?',
      opts: ['Hot and enthusiastic', 'Neither very positive nor very negative', 'Cold and hostile', 'Warm and supportive'],
      a: 1,
      exp: '"Polite but no enthusiasm" contextualises lukewarm = mildly positive at best.'
    },
    {
      id: 'dr_b1_main_idea_1', level: 'B1', skill: 'reading',
      mapsTo: ['health_b1'], tags: ['main_idea'],
      q: 'Text (3 paragraphs about sleep): Para 1: Sleep affects concentration. Para 2: Poor sleep links to obesity. Para 3: Sleep patterns vary by culture. What is the best title?',
      opts: ['Why culture affects sleep', 'The dangers of obesity', 'The wide-ranging effects of sleep on human life', 'Why you should sleep eight hours'],
      a: 2,
      exp: 'The three paragraphs cover different aspects of sleep → umbrella theme needed.'
    }
  ];

  // ============================================================
  // READING B2
  // ============================================================
  const readingB2 = [
    {
      id: 'dr_b2_writer_purpose_1', level: 'B2', skill: 'reading',
      mapsTo: ['media_b2'], tags: ['writer_purpose'],
      q: 'Review extract: "The novel delivers exactly what its cover promises: a thriller that thrills, a mystery that genuinely mystifies. Whether that\'s enough for you depends on what you\'re hungry for." What is the reviewer\'s overall tone?',
      opts: ['Unambiguously positive', 'Harshly critical', 'Balanced — acknowledging strengths with a caveat', 'Confused and uncertain'],
      a: 2,
      exp: 'Praising + "whether that\'s enough depends" = conditional praise. Nuanced balanced tone.'
    },
    {
      id: 'dr_b2_implication_1', level: 'B2', skill: 'reading',
      mapsTo: ['ethics_b2'], tags: ['implication'],
      q: 'Academic text: "Studies consistently show that wealthier neighbourhoods have more green spaces, better schools, and lower crime. Whether this reflects policy choices or economic inevitability is a question policymakers prefer not to answer." What does the writer imply?',
      opts: ['Policymakers are doing their best to solve inequality', 'The disparities are caused by bad luck', 'Policymakers may be deliberately avoiding responsibility for inequality', 'The data about neighbourhoods is unreliable'],
      a: 2,
      exp: '"Prefer not to answer" = evasion. Implies political will is lacking, not incapacity.'
    }
  ];

  // ============================================================
  // ENSAMBLADO FINAL — integrar en diagnosticTest global
  // ============================================================

  function buildEnhancedDiagnostic() {
    const enhanced = {
      id: 'enhanced_placement_test_a1_c1',
      title: 'Diagnóstico integral A1–C1',
      version: '6.0',
      sections: [
        {
          id: 'grammar',
          title: 'Gramática',
          items: shuffle([
            ...grammarA1,
            ...grammarA2,
            ...grammarB1,
            ...grammarB2,
            ...grammarC1
          ])
        },
        {
          id: 'reading',
          title: 'Comprensión lectora',
          items: shuffle([
            ...readingA1,
            ...readingA2,
            ...readingB1,
            ...readingB2
          ])
        },
        {
          id: 'listening',
          title: 'Comprensión auditiva',
          items: shuffle([
            ...listeningA1,
            ...listeningA2,
            ...listeningB1,
            ...listeningB2
          ])
        },
        {
          id: 'writing',
          title: 'Escritura',
          items: shuffle([...writingDiagnostic])
        }
      ]
    };

    // Exportar al scope global para que app.js lo use
    window.enhancedDiagnosticTest = enhanced;

    // Compatibilidad: enriquecer el diagnosticTest existente
    if (window.diagnosticTest && window.diagnosticTest.sections) {
      // Reemplazar secciones existentes con las mejoradas
      window.diagnosticTest.sections.forEach(section => {
        const enhanced_section = enhanced.sections.find(s => s.id === section.id);
        if (enhanced_section) {
          // Mergear: poner los mejorados primero, luego los originales no duplicados
          const existingIds = new Set(enhanced_section.items.map(i => i.id));
          const origOnly = section.items.filter(i => !existingIds.has(i.id));
          section.items = [...enhanced_section.items, ...origOnly];
        }
      });

      // Añadir sección de listening si no existe
      if (!window.diagnosticTest.sections.find(s => s.id === 'listening')) {
        window.diagnosticTest.sections.push(
          enhanced.sections.find(s => s.id === 'listening')
        );
      }

      console.log('[LeoEnglish] Diagnóstico enriquecido: ',
        window.diagnosticTest.sections.map(s => `${s.title}: ${s.items.length} items`).join(' | ')
      );
    } else {
      // Fallback: crear diagnosticTest desde cero
      window.diagnosticTest = {
        id: enhanced.id,
        sections: enhanced.sections
      };
    }
  }

  // Ejecutar al cargar o cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildEnhancedDiagnostic);
  } else {
    buildEnhancedDiagnostic();
  }

})();
