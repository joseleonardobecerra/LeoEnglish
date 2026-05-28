// data-reading-writing-b1.js v1.0 — LEOENGLISH · READING & WRITING B1
// Marco Común Europeo de Referencia (MCER) — Nivel B1 (Intermediate)
// Estructura idéntica a data-reading-writing.js para integración transparente con app.js v5.0
// Añadir en index.html DESPUÉS de data-reading-writing.js y ANTES de app.js

(function () {
  'use strict';

  // ============================================================
  // READING TEXTS B1 — 6 textos con 7 preguntas cada uno
  // ============================================================
  const readingTextsB1 = [

    {
      id: 'job_interview_b1',
      title: 'The Job Interview',
      level: 'B1',
      levelColor: '#7C3AED',
      topic: 'Trabajo y profesiones',
      questions: 7,
      desc: 'Texto B1 sobre una entrevista de trabajo. Practica vocabulario laboral, Past Perfect y reported speech.',
      body: `Last Monday, Carmen had the most important job interview of her life. She had applied for a position as a marketing coordinator at a well-known company three weeks earlier. The night before, she had prepared carefully — she had researched the company, chosen her clothes and practised answering common interview questions.<br><br>
The interview lasted forty-five minutes. The manager asked her about her previous experience, her strengths and her plans for the future. Carmen answered confidently, though she admitted she had never managed a team before. At the end, the manager told her they would contact her within a week.<br><br>
Two days later, Carmen received a call. She had got the job. She was so happy that she called her mother immediately. She said it was the best day of her life.`,
      qs: [
        { type: 'choice', q: 'What position had Carmen applied for?', opts: ['Sales assistant', 'Marketing coordinator', 'Project manager'], a: 1, exp: 'The text says she applied for "a position as a marketing coordinator".' },
        { type: 'choice', q: 'How long before the interview had she sent her application?', opts: ['One week', 'Two weeks', 'Three weeks'], a: 2, exp: '"She had applied... three weeks earlier."' },
        { type: 'fill', q: 'The night before, Carmen had researched the company and practised answering ___ questions.', a: 'interview', exp: 'She practised answering common interview questions.' },
        { type: 'choice', q: 'What did Carmen admit she had never done?', opts: ['Applied for a job', 'Managed a team', 'Worked in marketing'], a: 1, exp: 'She admitted she had never managed a team before.' },
        { type: 'choice', q: 'True or False: The manager said they would call her the same day.', opts: ['True', 'False'], a: 1, exp: 'The manager said they would contact her within a week.' },
        { type: 'fill', q: 'Carmen received a call ___ days after the interview.', a: 'two', exp: '"Two days later, Carmen received a call."' },
        { type: 'choice', q: 'How did Carmen react to the news?', opts: ['She was relieved but not very happy', 'She called her mother immediately', 'She went back to the company'], a: 1, exp: 'She was so happy that she called her mother immediately.' }
      ],
      skillFocus: ['Reading for detail', 'Past Perfect', 'Reported speech', 'Workplace vocabulary'],
      communicativeTask: 'Write about a time you prepared for something important. Use Past Perfect to describe your preparation.',
      portfolioEvidence: 'Job interview preparation narrative'
    },

    {
      id: 'environment_article_b1',
      title: 'Small Changes, Big Impact',
      level: 'B1',
      levelColor: '#059669',
      topic: 'Medioambiente',
      questions: 7,
      desc: 'Artículo de opinión B1 sobre hábitos sostenibles. Practica lectura crítica, conectores y vocabulario medioambiental.',
      body: `Every year, millions of tonnes of plastic end up in the ocean. Although governments are introducing new laws to reduce plastic waste, many experts believe that individual habits are just as important as political action. In fact, small everyday changes can make a significant difference.<br><br>
For example, bringing a reusable bag to the supermarket might seem like a minor gesture, but if everyone did it, billions of plastic bags would be saved annually. Similarly, choosing public transport over private cars not only reduces carbon emissions but also helps to ease traffic congestion in cities.<br><br>
However, it would be unfair to place all the responsibility on individuals. Large corporations produce the majority of industrial waste, and they must be held accountable. Governments need to impose stricter regulations and offer incentives for businesses that adopt sustainable practices.<br><br>
In short, protecting the environment requires action at every level — from individual choices to international policy. The question is not whether we can afford to act, but whether we can afford not to.`,
      qs: [
        { type: 'choice', q: 'What does the article say about individual habits?', opts: ['They are less important than political action', 'They are just as important as political action', 'They have no effect on the environment'], a: 1, exp: '"individual habits are just as important as political action"' },
        { type: 'fill', q: 'Bringing a reusable bag could save ___ of plastic bags annually if everyone did it.', a: 'billions', exp: '"billions of plastic bags would be saved annually"' },
        { type: 'choice', q: 'According to the article, what is another benefit of using public transport?', opts: ['It is cheaper', 'It reduces carbon emissions and eases traffic', 'It is faster'], a: 1, exp: '"reduces carbon emissions but also helps to ease traffic congestion"' },
        { type: 'choice', q: 'True or False: The article says individuals alone are responsible for the problem.', opts: ['True', 'False'], a: 1, exp: '"it would be unfair to place all the responsibility on individuals"' },
        { type: 'fill', q: 'Large ___ produce the majority of industrial waste.', a: 'corporations', exp: '"Large corporations produce the majority of industrial waste"' },
        { type: 'choice', q: 'What does the author suggest governments should do?', opts: ['Ban all plastic immediately', 'Impose stricter regulations and offer incentives', 'Leave businesses to decide for themselves'], a: 1, exp: '"Governments need to impose stricter regulations and offer incentives"' },
        { type: 'choice', q: 'What is the main message of the final paragraph?', opts: ['Only governments can save the planet', 'Action is needed at every level', 'We cannot afford to protect the environment'], a: 1, exp: '"protecting the environment requires action at every level"' }
      ],
      skillFocus: ['Reading for main idea', 'Opinion texts', 'Connectors', 'Environmental vocabulary'],
      communicativeTask: 'Write a short opinion paragraph (6–8 sentences) about one change you think would most help the environment. Use connectors from the text.',
      portfolioEvidence: 'Environmental opinion paragraph'
    },

    {
      id: 'travel_blog_b1',
      title: 'A Weekend in Cartagena',
      level: 'B1',
      levelColor: '#D97706',
      topic: 'Viajes y turismo',
      questions: 7,
      desc: 'Blog de viaje B1. Practica descripción de lugares, pasado simple y vocabulario de turismo.',
      body: `I had always wanted to visit Cartagena, and last month I finally got the chance. I took an early morning flight from Bogotá and arrived in the city just before midday. The heat hit me immediately — it was nothing like the cool mountain air I was used to.<br><br>
I spent the first afternoon exploring the walled city. The colourful colonial buildings, the cobblestone streets and the sound of cumbia music everywhere made it feel like stepping into a different century. I stopped at a small café and tried the local fried fish — absolutely delicious.<br><br>
On Saturday, I took a boat trip to the Rosario Islands. The water was a deep turquoise colour and incredibly clear. I went snorkelling for the first time and saw dozens of tropical fish and coral. It was unforgettable.<br><br>
By Sunday evening, I was exhausted but completely in love with the city. If you ever get the chance to visit Cartagena, don't hesitate — it is one of the most beautiful places in Colombia.`,
      qs: [
        { type: 'choice', q: 'How did the writer travel to Cartagena?', opts: ['By bus', 'By plane', 'By train'], a: 1, exp: '"I took an early morning flight from Bogotá"' },
        { type: 'fill', q: 'The writer described the buildings as colourful and ___.', a: 'colonial', exp: '"The colourful colonial buildings"' },
        { type: 'choice', q: 'What did the writer eat at the café?', opts: ['Arepas', 'Chocolate', 'Fried fish'], a: 2, exp: '"I tried the local fried fish"' },
        { type: 'choice', q: 'True or False: The writer had been snorkelling many times before.', opts: ['True', 'False'], a: 1, exp: '"I went snorkelling for the first time"' },
        { type: 'fill', q: 'The water at the Rosario Islands was a deep ___ colour.', a: 'turquoise', exp: '"The water was a deep turquoise colour"' },
        { type: 'choice', q: 'How did the writer feel by Sunday evening?', opts: ['Bored and disappointed', 'Exhausted but happy', 'Ill and tired'], a: 1, exp: '"I was exhausted but completely in love with the city"' },
        { type: 'choice', q: 'What does the writer recommend at the end?', opts: ['Not to visit in summer', 'To visit if you get the chance', 'To avoid the boat trips'], a: 1, exp: '"If you ever get the chance to visit Cartagena, don\'t hesitate"' }
      ],
      skillFocus: ['Reading a blog', 'Past Simple & Perfect', 'Travel vocabulary', 'Descriptive language'],
      communicativeTask: 'Write a short travel blog entry (6–8 sentences) about a place you have visited or would like to visit.',
      portfolioEvidence: 'Travel blog entry'
    },

    {
      id: 'health_article_b1',
      title: 'Why Sleep Matters',
      level: 'B1',
      levelColor: '#DC2626',
      topic: 'Salud y bienestar',
      questions: 7,
      desc: 'Artículo informativo B1 sobre el sueño. Practica lectura de textos científicos, voz pasiva y vocabulario de salud.',
      body: `It is often said that we spend about a third of our lives asleep. Yet, despite the amount of time we dedicate to it, sleep is still misunderstood by many people. Recent research has shown that sleep is not simply a period of rest — it is an essential process during which the body repairs itself and the brain processes information.<br><br>
Adults are generally recommended to sleep between seven and nine hours per night. However, a large proportion of people regularly sleep fewer than six hours, often due to stress, excessive screen time or irregular working hours. This sleep deprivation has been linked to a range of health problems, including obesity, heart disease and depression.<br><br>
Fortunately, good sleep habits can be learned. Experts suggest going to bed at the same time every night, avoiding caffeine in the evening and keeping the bedroom dark and cool. It is also advised to put phones and tablets away at least an hour before sleeping, as the blue light they emit interferes with melatonin production.<br><br>
The message is clear: if you want to feel better, think more clearly and live longer, prioritising sleep is one of the simplest and most effective things you can do.`,
      qs: [
        { type: 'choice', q: 'According to the text, what happens during sleep?', opts: ['Nothing important', 'The body repairs itself and the brain processes information', 'Only the brain rests'], a: 1, exp: '"the body repairs itself and the brain processes information"' },
        { type: 'fill', q: 'Adults are recommended to sleep between seven and ___ hours per night.', a: 'nine', exp: '"between seven and nine hours per night"' },
        { type: 'choice', q: 'What are three causes of sleep deprivation mentioned in the text?', opts: ['Stress, exercise and diet', 'Stress, excessive screen time and irregular hours', 'Noise, cold and hunger'], a: 1, exp: '"due to stress, excessive screen time or irregular working hours"' },
        { type: 'choice', q: 'True or False: Sleep deprivation has been linked to depression.', opts: ['True', 'False'], a: 0, exp: '"has been linked to a range of health problems, including... depression"' },
        { type: 'fill', q: 'Experts suggest going to bed at the same time every ___.', a: 'night', exp: '"going to bed at the same time every night"' },
        { type: 'choice', q: 'Why should phones be put away before sleeping?', opts: ['They make noise', 'Blue light interferes with melatonin production', 'They use too much electricity'], a: 1, exp: '"the blue light they emit interferes with melatonin production"' },
        { type: 'choice', q: 'What is the overall message of the article?', opts: ['Sleep is a waste of time', 'Prioritising sleep has many health benefits', 'Only children need lots of sleep'], a: 1, exp: '"prioritising sleep is one of the simplest and most effective things you can do"' }
      ],
      skillFocus: ['Reading for information', 'Passive voice', 'Health vocabulary', 'Cause and effect'],
      communicativeTask: 'Write 6–8 sentences about your sleep habits and what you could do to improve them.',
      portfolioEvidence: 'Health and wellbeing reflection'
    },

    {
      id: 'social_media_debate_b1',
      title: 'Is Social Media Good for Us?',
      level: 'B1',
      levelColor: '#0891B2',
      topic: 'Tecnología y redes sociales',
      questions: 7,
      desc: 'Texto de debate B1 sobre redes sociales. Practica argumentación, conectores y vocabulario digital.',
      body: `Social media has transformed the way we communicate, share information and connect with others. For many people, platforms like Instagram, TikTok and WhatsApp are an essential part of daily life. But is this transformation entirely positive?<br><br>
On the one hand, social media allows people to stay in touch with friends and family regardless of distance. It also gives ordinary people a voice — anyone can share their opinions, stories and creative work with a global audience. During emergencies, it has proved to be a powerful tool for spreading vital information quickly.<br><br>
On the other hand, excessive use of social media has been associated with anxiety, loneliness and low self-esteem, particularly among teenagers. Studies suggest that comparing oneself constantly to idealised images online can be damaging to mental health. Furthermore, the spread of misinformation on these platforms is a growing concern.<br><br>
In conclusion, social media is neither inherently good nor bad — it depends on how we use it. Developing digital literacy and setting healthy boundaries with technology are skills that have become as important as any traditional academic subject.`,
      qs: [
        { type: 'choice', q: 'According to the text, what is one positive aspect of social media?', opts: ['It replaces face-to-face communication', 'It allows people to stay in touch regardless of distance', 'It solves mental health problems'], a: 1, exp: '"allows people to stay in touch with friends and family regardless of distance"' },
        { type: 'choice', q: 'True or False: The author says social media is always harmful.', opts: ['True', 'False'], a: 1, exp: '"social media is neither inherently good nor bad"' },
        { type: 'fill', q: 'Comparing oneself to idealised images online can be damaging to ___ health.', a: 'mental', exp: '"can be damaging to mental health"' },
        { type: 'choice', q: 'What negative effect is mentioned regarding teenagers?', opts: ['They spend too much money', 'They develop anxiety and low self-esteem', 'They stop studying'], a: 1, exp: '"associated with anxiety, loneliness and low self-esteem, particularly among teenagers"' },
        { type: 'fill', q: 'The spread of ___ on social media is described as a growing concern.', a: 'misinformation', exp: '"the spread of misinformation on these platforms is a growing concern"' },
        { type: 'choice', q: 'What does the author conclude about social media?', opts: ['It should be banned', 'It depends on how we use it', 'It is only useful for young people'], a: 1, exp: '"it depends on how we use it"' },
        { type: 'choice', q: 'What skill does the author consider essential today?', opts: ['Programming', 'Digital literacy', 'Speed reading'], a: 1, exp: '"Developing digital literacy... skills that have become as important as any traditional academic subject"' }
      ],
      skillFocus: ['Reading a debate text', 'Connectors of contrast', 'Digital vocabulary', 'Critical thinking'],
      communicativeTask: 'Write a short paragraph (6–8 sentences) giving your opinion on social media. Use "on the one hand / on the other hand" and at least two connectors from the text.',
      portfolioEvidence: 'Social media opinion essay'
    },

    {
      id: 'short_story_b1',
      title: 'The Last Train',
      level: 'B1',
      levelColor: '#6366F1',
      topic: 'Narrativa ficción',
      questions: 7,
      desc: 'Cuento corto B1. Practica lectura de ficción, inferencia, pasado narrativo y vocabulario emocional.',
      body: `It was nearly midnight when David realised he had missed the last train. He stood on the empty platform, staring at the departures board, which showed nothing but a blinking red light where the 23:47 to Glasgow should have been.<br><br>
He had been so absorbed in his book at the café that he had completely lost track of time. His phone battery was dead, and his wallet contained just enough money for a taxi — if he could find one at this hour.<br><br>
As he walked towards the exit, a woman about his mother's age approached him. "Excuse me," she said, "did you miss the last train too?" He nodded, feeling slightly embarrassed. "There's a night bus that leaves at half past midnight," she continued. "It's slow, but it goes all the way to Glasgow."<br><br>
An hour later, David was sitting on the nearly empty bus, still reading his book. He looked up at the dark motorway and smiled. Sometimes, he thought, missing the train is not the end of the world. Sometimes it is the beginning of a story.`,
      qs: [
        { type: 'choice', q: 'Why had David missed the last train?', opts: ['He fell asleep', 'He was too absorbed in his book', 'His car broke down'], a: 1, exp: '"He had been so absorbed in his book at the café that he had completely lost track of time."' },
        { type: 'choice', q: 'True or False: David had plenty of money for a taxi.', opts: ['True', 'False'], a: 1, exp: '"his wallet contained just enough money for a taxi"' },
        { type: 'fill', q: 'David\'s phone battery was ___.', a: 'dead', exp: '"His phone battery was dead"' },
        { type: 'choice', q: 'Who helped David find a solution?', opts: ['A station guard', 'A woman near the exit', 'His mother'], a: 1, exp: '"a woman about his mother\'s age approached him"' },
        { type: 'fill', q: 'The night bus leaves at half past ___.', a: 'midnight', exp: '"There\'s a night bus that leaves at half past midnight"' },
        { type: 'choice', q: 'How does David feel at the end of the story?', opts: ['Angry and frustrated', 'Calm and philosophical', 'Worried and scared'], a: 1, exp: 'He smiled and thought: "Sometimes, missing the train is not the end of the world."' },
        { type: 'choice', q: 'What is the main theme of the story?', opts: ['The importance of being punctual', 'Unexpected situations can lead to positive experiences', 'Night buses are unreliable'], a: 1, exp: '"Sometimes it is the beginning of a story" — the unexpected has value.' }
      ],
      skillFocus: ['Reading fiction', 'Inference', 'Past Perfect narrative', 'Emotional vocabulary'],
      communicativeTask: 'Write the continuation of David\'s story (6–8 sentences). What happened on the bus?',
      portfolioEvidence: 'Creative writing continuation'
    }

  ]; // fin readingTextsB1


  // ============================================================
  // WRITING EXERCISES B1 — 6 ejercicios variados
  // ============================================================
  const writingExercisesB1 = [

    {
      id: 'error_correction_b1_tenses',
      title: 'Caza de errores: tiempos verbales B1',
      type: 'error',
      typeLabel: 'Corrección',
      typeColor: '#7C3AED',
      desc: 'Corrige errores frecuentes de Past Perfect, reported speech y voz pasiva en nivel B1.',
      tasks: [
        { wrong: 'When I arrived, she already left.', answer: 'When I arrived, she had already left.', tip: 'Para una acción que ocurrió ANTES de otro momento pasado → Past Perfect (had + p.p.).' },
        { wrong: 'He said me that he was tired.', answer: 'He told me that he was tired.', tip: '"Tell" siempre va seguido de objeto de persona: told me (no said me).' },
        { wrong: 'The letter was wrote by my teacher.', answer: 'The letter was written by my teacher.', tip: 'Voz pasiva: was + past participle. "Written" es el participio de "write" (irregular).' },
        { wrong: 'She said that she will help me.', answer: 'She said that she would help me.', tip: 'Reported speech: "will" retrocede a "would" (backshift).' },
        { wrong: 'If I had a car, I would have driven to work.', answer: 'If I had a car, I would drive to work.', tip: 'Second conditional (hipótesis presente): if + Past Simple, would + base verb.' },
        { wrong: 'He has been knowing her for years.', answer: 'He has known her for years.', tip: 'Los verbos de estado (know, like, believe) no se usan en continuous: has known.' }
      ],
      learningGoal: 'Reconocer y corregir errores frecuentes de gramática B1.',
      portfolioEvidence: 'Lista personal de errores B1 corregidos'
    },

    {
      id: 'transform_b1_passive',
      title: 'Transformación: Activa → Pasiva',
      type: 'transform',
      typeLabel: 'Transformación',
      typeColor: '#059669',
      desc: 'Transforma oraciones de voz activa a voz pasiva en presente y pasado simple.',
      tasks: [
        { original: 'Shakespeare wrote Hamlet.', answer: 'Hamlet was written by Shakespeare.', tip: 'Past Simple Passive: was/were + past participle + by + agent.' },
        { original: 'They deliver the post every morning.', answer: 'The post is delivered every morning.', tip: 'Present Simple Passive: is/are + past participle.' },
        { original: 'Someone stole my laptop yesterday.', answer: 'My laptop was stolen yesterday.', tip: 'Agent (someone) es desconocido → pasiva sin "by".' },
        { original: 'The company employs 500 people.', answer: '500 people are employed by the company.', tip: 'El objeto se convierte en sujeto de la pasiva.' },
        { original: 'Picasso painted Guernica in 1937.', answer: 'Guernica was painted by Picasso in 1937.', tip: 'Past Simple Passive: was + painted + by + agent.' },
        { original: 'They speak English in many countries.', answer: 'English is spoken in many countries.', tip: 'Agent genérico (they) se omite en la pasiva.' }
      ],
      learningGoal: 'Producir oraciones pasivas en presente y pasado con y sin agente.',
      portfolioEvidence: 'Ejercicio de transformación activa-pasiva'
    },

    {
      id: 'order_b1_reported',
      title: 'Ordena: Reported Speech',
      type: 'order',
      typeLabel: 'Ordenar',
      typeColor: '#D97706',
      desc: 'Ordena las palabras para formar oraciones de estilo indirecto correctas.',
      tasks: [
        { words: ['She', 'said', 'she', 'was', 'tired.'], answer: 'She said she was tired.', tip: '"Say" + (that) + reported clause. Present Simple → Past Simple.' },
        { words: ['He', 'told', 'me', 'he', 'would', 'call', 'later.'], answer: 'He told me he would call later.', tip: '"Tell" + person + (that) + reported clause. Will → Would.' },
        { words: ['She', 'asked', 'where', 'I', 'lived.'], answer: 'She asked where I lived.', tip: 'Wh- question reportada: asked + wh-word + subject + verb (sin inversión).' },
        { words: ['They', 'said', 'they', 'had', 'already', 'finished.'], answer: 'They said they had already finished.', tip: 'Present Perfect → Past Perfect en reported speech.' },
        { words: ['He', 'asked', 'if', 'I', 'could', 'help', 'him.'], answer: 'He asked if I could help him.', tip: 'Yes/No question reportada: asked + if + subject + auxiliary + verb.' },
        { words: ['The', 'teacher', 'told', 'us', 'to', 'be', 'quiet.'], answer: 'The teacher told us to be quiet.', tip: 'Imperativo reportado: told + object + to + infinitive.' }
      ],
      learningGoal: 'Formar oraciones de reported speech con backshift y cambios pronominales.',
      portfolioEvidence: 'Práctica de reported speech'
    },

    {
      id: 'free_writing_b1_opinion',
      title: 'Escritura libre: texto de opinión',
      type: 'free',
      typeLabel: 'Escritura libre',
      typeColor: '#DC2626',
      desc: 'Escribe un párrafo de opinión sobre un tema de actualidad.',
      prompt: 'Do you think working from home is better than working in an office? Write 6–8 sentences giving your opinion. Use connectors such as: firstly, however, on the other hand, in conclusion.',
      minWords: 60,
      checklist: [
        'I stated my opinion clearly in the first sentence.',
        'I used at least two connectors.',
        'I gave reasons to support my opinion.',
        'I mentioned a possible counter-argument.',
        'I wrote a concluding sentence.'
      ],
      modelAnswer: 'In my opinion, working from home has significant advantages. Firstly, it saves time and money on commuting. It also allows people to manage their own schedule more flexibly. However, some people find it difficult to separate work from personal life. On the other hand, for those with families, working from home can make life much easier. In conclusion, I believe a hybrid model — some days at home, some in the office — is the ideal solution for most workers.',
      learningGoal: 'Producir un texto argumentativo estructurado con conectores B1.',
      portfolioEvidence: 'Opinion paragraph on work-life balance'
    },

    {
      id: 'dictation_b1_conditionals',
      title: 'Dictado: Condicionales B1',
      type: 'dictation',
      typeLabel: 'Dictado',
      typeColor: '#0891B2',
      desc: 'Escucha y escribe oraciones con first y second conditional.',
      sentences: [
        { text: 'If it rains tomorrow, we will stay at home.', focus: 'First conditional: if + Present Simple, will + base verb.' },
        { text: 'If I had more free time, I would travel more.', focus: 'Second conditional: if + Past Simple, would + base verb.' },
        { text: 'Unless you study, you won\'t pass the exam.', focus: 'Unless = if not. Same structure as first conditional.' },
        { text: 'She would feel better if she slept more.', focus: 'Second conditional: if-clause can come second.' },
        { text: 'If I were you, I would speak to the manager.', focus: '"If I were you" → advice with second conditional.' },
        { text: 'Provided that you finish early, we can go out.', focus: '"Provided that" = if, as a formal conditional linker.' }
      ],
      learningGoal: 'Reconocer y escribir estructuras condicionales de primer y segundo tipo con precisión.',
      portfolioEvidence: 'Dictado de condicionales'
    },

    {
      id: 'transform_b1_wish',
      title: 'Transformación: Wish / If only',
      type: 'transform',
      typeLabel: 'Transformación',
      typeColor: '#6366F1',
      desc: 'Transforma oraciones de realidad presente y pasado a deseos con wish / if only.',
      tasks: [
        { original: 'I don\'t speak French. (wish)', answer: 'I wish I spoke French.', tip: '"Wish + Past Simple" para deseos presentes sobre situaciones reales.' },
        { original: 'She didn\'t study for the exam. (if only)', answer: 'If only she had studied for the exam.', tip: '"If only + Past Perfect" para arrepentimientos pasados.' },
        { original: 'He works on Saturdays. (wish)', answer: 'I wish he didn\'t work on Saturdays.', tip: '"Wish + subject + Past Simple" para deseos sobre el comportamiento de otros.' },
        { original: 'I can\'t drive. (wish)', answer: 'I wish I could drive.', tip: '"Wish + could" para deseos sobre habilidades presentes.' },
        { original: 'We missed the concert. (if only)', answer: 'If only we hadn\'t missed the concert.', tip: '"If only + Past Perfect negativo" para arrepentimientos.' },
        { original: 'It rains every day. (wish)', answer: 'I wish it didn\'t rain every day.', tip: '"Wish + Past Simple negativo" para situaciones que queremos cambiar.' }
      ],
      learningGoal: 'Expresar deseos y arrepentimientos con wish y if only con estructura correcta.',
      portfolioEvidence: 'Transformaciones con wish e if only'
    }

  ]; // fin writingExercisesB1


  // ============================================================
  // LEARNING PATHS B1
  // ============================================================
  const readingLearningPathB1 = [
    {
      level: 'B1',
      title: 'B1 · Reading Intermediate',
      color: '#7C3AED',
      requiredScore: 75,
      texts: [
        'job_interview_b1',
        'environment_article_b1',
        'travel_blog_b1',
        'health_article_b1',
        'social_media_debate_b1',
        'short_story_b1'
      ]
    }
  ];

  const writingLearningPathB1 = [
    {
      level: 'B1',
      title: 'B1 · Writing Intermediate',
      color: '#7C3AED',
      requiredScore: 75,
      exercises: [
        'error_correction_b1_tenses',
        'transform_b1_passive',
        'order_b1_reported',
        'free_writing_b1_opinion',
        'dictation_b1_conditionals',
        'transform_b1_wish'
      ]
    }
  ];


  // ============================================================
  // COMPETENCY MAPS B1
  // ============================================================
  const readingCompetencyMapB1 = {
    job_interview_b1:       { level: 'B1', skill: 'reading', weaknessLabel: 'Reading: Job interview & Past Perfect', homologationGroup: 'b1_reading_narrative', diagnosticTags: ['past_perfect', 'reported_speech', 'workplace'] },
    environment_article_b1: { level: 'B1', skill: 'reading', weaknessLabel: 'Reading: Opinion article & connectors', homologationGroup: 'b1_reading_opinion', diagnosticTags: ['connectors_b1', 'opinion_text', 'environment'] },
    travel_blog_b1:         { level: 'B1', skill: 'reading', weaknessLabel: 'Reading: Travel blog & descriptive past', homologationGroup: 'b1_reading_blog', diagnosticTags: ['past_simple', 'past_perfect', 'travel'] },
    health_article_b1:      { level: 'B1', skill: 'reading', weaknessLabel: 'Reading: Informative article & passive', homologationGroup: 'b1_reading_info', diagnosticTags: ['passive_b1', 'health', 'cause_effect'] },
    social_media_debate_b1: { level: 'B1', skill: 'reading', weaknessLabel: 'Reading: Debate text & critical thinking', homologationGroup: 'b1_reading_debate', diagnosticTags: ['connectors_b1', 'debate', 'digital'] },
    short_story_b1:         { level: 'B1', skill: 'reading', weaknessLabel: 'Reading: Fiction & inference', homologationGroup: 'b1_reading_fiction', diagnosticTags: ['past_perfect', 'inference', 'fiction'] }
  };

  const writingCompetencyMapB1 = {
    error_correction_b1_tenses: { level: 'B1', skill: 'writing', weaknessLabel: 'Writing: Error correction B1 tenses', homologationGroup: 'b1_writing_error', diagnosticTags: ['past_perfect', 'reported_speech', 'passive_b1'] },
    transform_b1_passive:       { level: 'B1', skill: 'writing', weaknessLabel: 'Writing: Active to passive transformation', homologationGroup: 'b1_writing_passive', diagnosticTags: ['passive_b1'] },
    order_b1_reported:          { level: 'B1', skill: 'writing', weaknessLabel: 'Writing: Reported speech ordering', homologationGroup: 'b1_writing_reported', diagnosticTags: ['reported_speech'] },
    free_writing_b1_opinion:    { level: 'B1', skill: 'writing', weaknessLabel: 'Writing: Opinion paragraph B1', homologationGroup: 'b1_writing_opinion', diagnosticTags: ['connectors_b1', 'opinion'] },
    dictation_b1_conditionals:  { level: 'B1', skill: 'writing', weaknessLabel: 'Writing: Conditional dictation B1', homologationGroup: 'b1_writing_dictation', diagnosticTags: ['second_conditional', 'wish_if_only'] },
    transform_b1_wish:          { level: 'B1', skill: 'writing', weaknessLabel: 'Writing: Wish / If only transformation', homologationGroup: 'b1_writing_wish', diagnosticTags: ['wish_if_only'] }
  };


  // ============================================================
  // DIAGNÓSTICO READING & WRITING B1
  // ============================================================
  const readingDiagnosticBlueprintB1 = {
    id: 'reading_diagnostic_b1',
    title: 'Diagnóstico de Reading B1',
    levels: ['B1'],
    rules: { passScore: 75, homologationScore: 80, reinforcementThreshold: 70 },
    items: [
      { id: 'rd_b1_01', level: 'B1', mapsTo: ['job_interview_b1'],
        type: 'choice', q: 'Reading: "She had applied three weeks earlier." What tense is "had applied"?',
        opts: ['Present Perfect', 'Past Perfect', 'Past Simple'], a: 1,
        exp: 'Past Perfect: had + past participle para acción anterior en el pasado.' },
      { id: 'rd_b1_02', level: 'B1', mapsTo: ['environment_article_b1'],
        type: 'choice', q: 'Reading: "Not only does it reduce emissions, but it also eases congestion." What function does "not only... but also" serve?',
        opts: ['Contrast', 'Addition', 'Cause'], a: 1,
        exp: '"Not only... but also" expresa adición y doble énfasis.' },
      { id: 'rd_b1_03', level: 'B1', mapsTo: ['health_article_b1'],
        type: 'choice', q: 'Reading: "Adults are recommended to sleep seven to nine hours." What voice is this?',
        opts: ['Active', 'Passive', 'Reported'], a: 1,
        exp: '"Are recommended to" → Present Simple Passive con verbo de consejo.' },
      { id: 'rd_b1_04', level: 'B1', mapsTo: ['social_media_debate_b1'],
        type: 'choice', q: 'Reading: "Social media is neither inherently good nor bad." What does "inherently" mean?',
        opts: ['Sometimes', 'By its very nature', 'Officially'], a: 1,
        exp: '"Inherently" = por su propia naturaleza, esencialmente.' }
    ]
  };

  const writingDiagnosticBlueprintB1 = {
    id: 'writing_diagnostic_b1',
    title: 'Diagnóstico de Writing B1',
    levels: ['B1'],
    rules: { passScore: 75, homologationScore: 80, reinforcementThreshold: 70 },
    items: [
      { id: 'wd_b1_01', level: 'B1', mapsTo: ['transform_b1_passive'],
        type: 'choice', q: 'Writing: "Shakespeare wrote Hamlet." → Passive: "Hamlet ___ by Shakespeare."',
        opts: ['is written', 'was written', 'has been written'], a: 1,
        exp: 'Past Simple Passive: was + past participle.' },
      { id: 'wd_b1_02', level: 'B1', mapsTo: ['order_b1_reported'],
        type: 'choice', q: 'Writing: "She said she ___ call later." Which word completes the reported speech correctly?',
        opts: ['will', 'would', 'could'], a: 1,
        exp: 'Reported speech backshift: will → would.' },
      { id: 'wd_b1_03', level: 'B1', mapsTo: ['transform_b1_wish'],
        type: 'choice', q: 'Writing: "I don\'t speak French." → "I wish I ___ French."',
        opts: ['speak', 'spoke', 'had spoken'], a: 1,
        exp: 'Wish + Past Simple para deseos presentes.' },
      { id: 'wd_b1_04', level: 'B1', mapsTo: ['error_correction_b1_tenses'],
        type: 'choice', q: 'Writing: Which sentence is correct?',
        opts: ['When I arrived, she already left.', 'When I arrived, she had already left.', 'When I arrived, she has already left.'], a: 1,
        exp: 'Acción anterior en el pasado → Past Perfect: had already left.' }
    ]
  };


  // ============================================================
  // EXPORTACIÓN — Navegador
  // ============================================================
  if (typeof window !== 'undefined') {

    // Fusionar textos y ejercicios en los arrays globales
    if (Array.isArray(window.readingExpansionTexts)) {
      const existingIds = window.readingExpansionTexts.map(t => t.id);
      readingTextsB1.forEach(t => { if (!existingIds.includes(t.id)) window.readingExpansionTexts.push(t); });
    } else {
      window.readingExpansionTexts = readingTextsB1;
    }

    if (Array.isArray(window.writingExpansionExercises)) {
      const existingIds = window.writingExpansionExercises.map(e => e.id);
      writingExercisesB1.forEach(e => { if (!existingIds.includes(e.id)) window.writingExpansionExercises.push(e); });
    } else {
      window.writingExpansionExercises = writingExercisesB1;
    }

    // Fusionar learning paths
    if (Array.isArray(window.readingLearningPath)) {
      const alreadyAdded = window.readingLearningPath.some(l => l.level === 'B1');
      if (!alreadyAdded) window.readingLearningPath.push(...readingLearningPathB1);
    } else {
      window.readingLearningPath = readingLearningPathB1;
    }

    if (Array.isArray(window.writingLearningPath)) {
      const alreadyAdded = window.writingLearningPath.some(l => l.level === 'B1');
      if (!alreadyAdded) window.writingLearningPath.push(...writingLearningPathB1);
    } else {
      window.writingLearningPath = writingLearningPathB1;
    }

    // Fusionar competency maps
    if (window.readingCompetencyMap)  Object.assign(window.readingCompetencyMap,  readingCompetencyMapB1);
    if (window.writingCompetencyMap)  Object.assign(window.writingCompetencyMap,  writingCompetencyMapB1);

    // Exponer blueprints diagnósticos B1
    window.readingDiagnosticBlueprintB1  = readingDiagnosticBlueprintB1;
    window.writingDiagnosticBlueprintB1  = writingDiagnosticBlueprintB1;
    window.readingTextsB1                = readingTextsB1;
    window.writingExercisesB1            = writingExercisesB1;
    window.readingLearningPathB1         = readingLearningPathB1;
    window.writingLearningPathB1         = writingLearningPathB1;
    window.readingCompetencyMapB1        = readingCompetencyMapB1;
    window.writingCompetencyMapB1        = writingCompetencyMapB1;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      readingTextsB1, writingExercisesB1,
      readingLearningPathB1, writingLearningPathB1,
      readingCompetencyMapB1, writingCompetencyMapB1,
      readingDiagnosticBlueprintB1, writingDiagnosticBlueprintB1
    };
  }

}()); // fin IIFE
