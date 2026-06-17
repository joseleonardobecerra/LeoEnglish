// ============================================================
// data-listening-spaced.js — LeoEnglish v2.0
// Actividades de listening con repetición espaciada (SRS)
// Niveles A1 → C1 · Motor adaptativo · TTS (Web Speech API)
// Compatible con app.js v5.0 — expone window.listeningActivities
// ============================================================

(function () {
  'use strict';

  // ============================================================
  // BANCO DE ACTIVIDADES DE LISTENING (A1 → C1)
  // Cada actividad tiene:
  //   id, level, title, topic, accent, rate, pitch
  //   audioScript — texto que se sintetiza con TTS
  //   questions   — array de preguntas con type:'choice'|'write'
  //                 q, opts, a (índice correcto), exp (explicación)
  // ============================================================

  const listeningActivities = [

    // ── A1 ──────────────────────────────────────────────────────

    {
      id: 'listen_a1_intro',
      level: 'A1', title: 'My name is Sarah', topic: 'Introductions',
      accent: 'en-GB', rate: 0.82, pitch: 1.05,
      routeMeta: { level: 'A1', sequence: 1 },
      audioScript:
        'Hello. My name is Sarah. I am from London. I am twenty-two years old. ' +
        'I am a student. I study English at a university. ' +
        'I live in a small flat with two friends. I have a cat. Her name is Mia. ' +
        'I like music and films. I do not like sport very much. Nice to meet you!',
      questions: [
        { type:'choice', q:'Where is Sarah from?',
          opts:['New York','London','Paris','Madrid'], a:1,
          exp:'"I am from London." — primera frase del audio.' },
        { type:'choice', q:'How old is Sarah?',
          opts:['20','22','25','18'], a:1,
          exp:'"I am twenty-two years old."' },
        { type:'choice', q:'What is Sarah\'s cat called?',
          opts:['Luna','Mia','Ella','Lucy'], a:1,
          exp:'"Her name is Mia." — nombre de la gata.' },
        { type:'write',  q:'What does Sarah study? (one word)',
          a:'English',
          exp:'"I study English at a university."' },
        { type:'choice', q:'What does Sarah like?',
          opts:['Sport and food','Music and films','Reading and sport','Dancing and art'], a:1,
          exp:'"I like music and films."' }
      ]
    },

    {
      id: 'listen_a1_family',
      level: 'A1', title: 'Carlos talks about his family', topic: 'Family',
      accent: 'en-US', rate: 0.80, pitch: 1.0,
      routeMeta: { level: 'A1', sequence: 2 },
      audioScript:
        'Hi! My name is Carlos. I have a big family. ' +
        'I have a mother, a father, two brothers, and one sister. ' +
        'My mother is a teacher. My father is a doctor. ' +
        'My brothers are young. They are eight and ten years old. ' +
        'My sister is older than me. She is twenty-five. ' +
        'We live in a house. Our house has a garden. I love my family!',
      questions: [
        { type:'choice', q:'How many brothers does Carlos have?',
          opts:['One','Two','Three','Four'], a:1,
          exp:'"I have two brothers." — número de hermanos.' },
        { type:'choice', q:'What does Carlos\'s mother do?',
          opts:['Doctor','Nurse','Teacher','Engineer'], a:2,
          exp:'"My mother is a teacher."' },
        { type:'choice', q:'How old is his sister?',
          opts:['20','22','25','28'], a:2,
          exp:'"She is twenty-five."' },
        { type:'write',  q:'What does the house have? (one word)',
          a:'garden',
          exp:'"Our house has a garden."' }
      ]
    },

    {
      id: 'listen_a1_weather',
      level: 'A1', title: 'The weather today', topic: 'Weather & Daily Routine',
      accent: 'en-GB', rate: 0.82, pitch: 1.0,
      routeMeta: { level: 'A1', sequence: 3 },
      audioScript:
        'Good morning. Today is Monday the fifth of March. ' +
        'The weather in London is cold and cloudy. The temperature is eight degrees. ' +
        'It is raining in the morning, but the afternoon is dry. ' +
        'Tonight it will be very cold — about two degrees. ' +
        'Please wear a coat and take an umbrella if you go outside. ' +
        'Tomorrow will be sunny and warmer — about fifteen degrees. Have a nice day!',
      questions: [
        { type:'choice', q:'What is the morning weather like in London?',
          opts:['Sunny and warm','Cold and cloudy','Windy and dry','Hot and humid'], a:1,
          exp:'"The weather in London is cold and cloudy."' },
        { type:'choice', q:'What is the morning temperature?',
          opts:['2°','5°','8°','15°'], a:2,
          exp:'"The temperature is eight degrees."' },
        { type:'choice', q:'What should you take if you go outside?',
          opts:['Sunglasses','A hat','An umbrella','Sunscreen'], a:2,
          exp:'"Please take an umbrella if you go outside."' },
        { type:'write',  q:'What will the weather be like tomorrow? (one word)',
          a:'sunny',
          exp:'"Tomorrow will be sunny and warmer."' }
      ]
    },

    // ── A2 ──────────────────────────────────────────────────────

    {
      id: 'listen_a2_plans',
      level: 'A2', title: 'Weekend plans', topic: 'Free Time & Plans',
      accent: 'en-GB', rate: 0.84, pitch: 1.0,
      routeMeta: { level: 'A2', sequence: 1 },
      audioScript:
        'Hi Laura, it\'s James. Are you free this weekend? ' +
        'I\'m planning to go to the cinema on Saturday evening. ' +
        'There\'s a new action film at the Odeon — it starts at half past seven. ' +
        'After the film, we could go for pizza at Marco\'s restaurant. It\'s near the cinema. ' +
        'On Sunday, I\'m going to visit my grandmother in Oxford. ' +
        'Would you like to come on Saturday? Call me back when you can. Bye!',
      questions: [
        { type:'choice', q:'When does James want to go to the cinema?',
          opts:['Friday evening','Saturday afternoon','Saturday evening','Sunday morning'], a:2,
          exp:'"I\'m planning to go to the cinema on Saturday evening."' },
        { type:'choice', q:'What time does the film start?',
          opts:['7:00','7:15','7:30','8:00'], a:2,
          exp:'"It starts at half past seven." = 7:30.' },
        { type:'choice', q:'What does James suggest after the film?',
          opts:['Go home','Go for pizza','Go bowling','Go to a café'], a:1,
          exp:'"After the film, we could go for pizza."' },
        { type:'write',  q:'Where is James going on Sunday? (one word)',
          a:'Oxford',
          exp:'"I\'m going to visit my grandmother in Oxford."' },
        { type:'choice', q:'Where is Marco\'s restaurant?',
          opts:['In Oxford','Near the station','Near the cinema','In the city centre'], a:2,
          exp:'"It\'s near the cinema."' }
      ]
    },

    {
      id: 'listen_a2_shopping',
      level: 'A2', title: 'At the supermarket', topic: 'Shopping & Everyday Life',
      accent: 'en-US', rate: 0.83, pitch: 1.0,
      routeMeta: { level: 'A2', sequence: 2 },
      audioScript:
        'Welcome to FreshMart! Today we have some great offers. ' +
        'Milk is on sale — two litres for one pound fifty. ' +
        'Fresh oranges are three pounds a kilo. ' +
        'We also have a special offer on bread — buy two, get one free. ' +
        'Our bakery opens at seven in the morning and closes at eight in the evening. ' +
        'If you spend more than twenty pounds today, you get a five percent discount. ' +
        'Don\'t forget: we are open seven days a week. See you soon!',
      questions: [
        { type:'choice', q:'How much does two litres of milk cost?',
          opts:['£1.00','£1.50','£2.00','£2.50'], a:1,
          exp:'"Two litres for one pound fifty."' },
        { type:'choice', q:'What is the offer on bread?',
          opts:['50% off','Buy one get one free','Buy two get one free','Three for the price of two'], a:2,
          exp:'"Buy two, get one free."' },
        { type:'choice', q:'What time does the bakery close?',
          opts:['7pm','8pm','9pm','10pm'], a:1,
          exp:'"Closes at eight in the evening." = 8pm.' },
        { type:'write',  q:'How many days a week is the store open?',
          a:'seven',
          exp:'"We are open seven days a week."' }
      ]
    },

    {
      id: 'listen_a2_past',
      level: 'A2', title: 'My last holiday', topic: 'Travel & Past Events',
      accent: 'en-GB', rate: 0.83, pitch: 1.02,
      routeMeta: { level: 'A2', sequence: 3 },
      audioScript:
        'Last summer I went on holiday to Portugal with my family. ' +
        'We stayed in a hotel near the beach for ten days. ' +
        'The weather was beautiful — hot and sunny every day. ' +
        'We visited the capital city, Lisbon, and went sightseeing. ' +
        'I tried Portuguese food for the first time. The seafood was delicious! ' +
        'We also rented bikes and cycled along the coast. It was amazing. ' +
        'The only problem was that my bag got lost at the airport on the way home. ' +
        'But apart from that, it was the best holiday I\'ve ever had!',
      questions: [
        { type:'choice', q:'Where did the speaker go on holiday?',
          opts:['Spain','Italy','Portugal','France'], a:2,
          exp:'"I went on holiday to Portugal."' },
        { type:'choice', q:'How long did they stay?',
          opts:['7 days','10 days','14 days','3 weeks'], a:1,
          exp:'"We stayed... for ten days."' },
        { type:'choice', q:'What food did the speaker try for the first time?',
          opts:['Pasta','Pizza','Seafood','Tapas'], a:2,
          exp:'"I tried Portuguese food... The seafood was delicious."' },
        { type:'choice', q:'What problem happened on the way home?',
          opts:['Missed the flight','Lost a bag','Hotel was full','It rained'], a:1,
          exp:'"My bag got lost at the airport on the way home."' },
        { type:'write',  q:'What did they rent to travel along the coast? (one word)',
          a:'bikes',
          exp:'"We rented bikes and cycled along the coast."' }
      ]
    },

    // ── B1 ──────────────────────────────────────────────────────

    {
      id: 'listen_b1_work',
      level: 'B1', title: 'A job interview', topic: 'Work & Careers',
      accent: 'en-GB', rate: 0.86, pitch: 1.0,
      routeMeta: { level: 'B1', sequence: 1 },
      audioScript:
        'Interviewer: Good morning. Please take a seat. Could you tell me a bit about yourself? ' +
        'Candidate: Of course. My name is Ahmed. I graduated from Manchester University three years ago ' +
        'with a degree in Business Management. Since then I have been working at a logistics company ' +
        'as a project coordinator. I\'m very organised and I work well under pressure. ' +
        'Interviewer: Why do you want to leave your current job? ' +
        'Candidate: I feel I\'ve learnt a lot, but I\'m looking for a new challenge. ' +
        'This company has an excellent reputation for innovation, and I\'d love to be part of that. ' +
        'Interviewer: What would you say is your biggest weakness? ' +
        'Candidate: I sometimes take on too much work at once, but I\'ve been working on delegating better.',
      questions: [
        { type:'choice', q:'Where did Ahmed study?',
          opts:['Oxford University','Cambridge University','Manchester University','London University'], a:2,
          exp:'"I graduated from Manchester University."' },
        { type:'choice', q:'What is Ahmed\'s current job?',
          opts:['Sales manager','Project coordinator','Marketing director','HR officer'], a:1,
          exp:'"I have been working... as a project coordinator."' },
        { type:'choice', q:'Why does Ahmed want to leave his current job?',
          opts:['The salary is low','The company is moving','He wants a new challenge','He dislikes his manager'], a:2,
          exp:'"I\'m looking for a new challenge."' },
        { type:'choice', q:'What does Ahmed say is his weakness?',
          opts:['Poor time management','Taking on too much work','Difficulty with teamwork','Lack of confidence'], a:1,
          exp:'"I sometimes take on too much work at once."' },
        { type:'write',  q:'What is Ahmed improving? (one word from the transcript)',
          a:'delegating',
          exp:'"I\'ve been working on delegating better."' }
      ]
    },

    {
      id: 'listen_b1_environment',
      level: 'B1', title: 'Climate change: What can we do?', topic: 'Environment',
      accent: 'en-GB', rate: 0.85, pitch: 1.0,
      routeMeta: { level: 'B1', sequence: 2 },
      audioScript:
        'Scientists agree that climate change is one of the biggest challenges facing humanity today. ' +
        'The main cause is the burning of fossil fuels, which releases carbon dioxide into the atmosphere. ' +
        'As a result, global temperatures have risen by about one point two degrees since pre-industrial times. ' +
        'However, there is still time to act. Governments can introduce carbon taxes and invest in renewable energy. ' +
        'Individuals can also make a difference by reducing their carbon footprint. ' +
        'For example, choosing public transport over private cars, eating less meat, ' +
        'and reducing energy consumption at home can all help. ' +
        'The key message is: every action counts, and the time to act is now.',
      questions: [
        { type:'choice', q:'According to the audio, what is the main cause of climate change?',
          opts:['Deforestation','Burning fossil fuels','Industrial farming','Ocean pollution'], a:1,
          exp:'"The main cause is the burning of fossil fuels."' },
        { type:'choice', q:'By how much have global temperatures risen?',
          opts:['0.8°','1.0°','1.2°','1.5°'], a:2,
          exp:'"Global temperatures have risen by about one point two degrees."' },
        { type:'choice', q:'What can governments do according to the speaker?',
          opts:['Ban cars','Introduce carbon taxes','Close factories','Plant more trees'], a:1,
          exp:'"Governments can introduce carbon taxes."' },
        { type:'write',  q:'What should individuals choose instead of private cars? (two words)',
          a:'public transport',
          exp:'"Choosing public transport over private cars."' }
      ]
    },

    {
      id: 'listen_b1_technology',
      level: 'B1', title: 'Social media habits', topic: 'Technology & Society',
      accent: 'en-US', rate: 0.86, pitch: 1.0,
      routeMeta: { level: 'B1', sequence: 3 },
      audioScript:
        'A recent survey found that the average person spends over three hours a day on social media. ' +
        'Young people between sixteen and twenty-four years old spend the most time online — ' +
        'sometimes up to six hours per day. ' +
        'Researchers have found both positive and negative effects of this behaviour. ' +
        'On the positive side, social media helps people stay connected with friends and family, ' +
        'and it can be an excellent tool for learning and sharing information. ' +
        'On the negative side, excessive use has been linked to increased anxiety, ' +
        'poor sleep, and reduced productivity. ' +
        'Experts recommend taking regular digital breaks and setting time limits on apps ' +
        'to maintain a healthy balance between online and offline life.',
      questions: [
        { type:'choice', q:'How many hours per day does the average person spend on social media?',
          opts:['Over 1 hour','Over 2 hours','Over 3 hours','Over 5 hours'], a:2,
          exp:'"The average person spends over three hours a day."' },
        { type:'choice', q:'Which age group uses social media the most?',
          opts:['12–15','16–24','25–34','35–44'], a:1,
          exp:'"Young people between sixteen and twenty-four."' },
        { type:'choice', q:'What negative effect is mentioned related to sleep?',
          opts:['Nightmares','Sleeping too much','Poor sleep','Sleepwalking'], a:2,
          exp:'"Excessive use has been linked to... poor sleep."' },
        { type:'choice', q:'What do experts recommend?',
          opts:['Deleting all apps','Digital breaks and time limits','Never using social media','Only using social media for work'], a:1,
          exp:'"Experts recommend taking regular digital breaks and setting time limits."' }
      ]
    },

    // ── B2 ──────────────────────────────────────────────────────

    {
      id: 'listen_b2_globalisation',
      level: 'B2', title: 'Globalisation: pros and cons', topic: 'Global Issues',
      accent: 'en-GB', rate: 0.87, pitch: 1.0,
      routeMeta: { level: 'B2', sequence: 1 },
      audioScript:
        'Globalisation refers to the increasing interconnectedness of economies, cultures, and societies ' +
        'across the world. Proponents argue that it has lifted hundreds of millions of people out of poverty ' +
        'by creating new markets and job opportunities in developing nations. ' +
        'Furthermore, the free flow of information and technology has accelerated innovation ' +
        'and improved living standards globally. ' +
        'However, critics point out that the benefits have not been equally distributed. ' +
        'While multinational corporations have profited enormously, ' +
        'local businesses in smaller economies have often struggled to compete. ' +
        'There are also concerns about cultural homogenisation — the idea that local traditions ' +
        'and languages are being eroded as global brands and media dominate. ' +
        'The challenge for policymakers, therefore, is to harness the benefits of globalisation ' +
        'while protecting vulnerable communities and preserving cultural diversity.',
      questions: [
        { type:'choice', q:'What does the term "globalisation" refer to according to the audio?',
          opts:['Political union of nations','Increasing interconnectedness of economies and societies',
                'The spread of the English language','Global warming effects'], a:1,
          exp:'"Globalisation refers to the increasing interconnectedness of economies, cultures, and societies."' },
        { type:'choice', q:'What benefit do proponents of globalisation highlight?',
          opts:['Reducing population growth','Lifting people out of poverty',
                'Reducing immigration','Decreasing global trade'], a:1,
          exp:'"Lifted hundreds of millions of people out of poverty."' },
        { type:'choice', q:'What concern do critics raise about culture?',
          opts:['Loss of scientific knowledge','Cultural homogenisation and erosion of local traditions',
                'Decline of religion','Increased nationalism'], a:1,
          exp:'"Cultural homogenisation — local traditions and languages are being eroded."' },
        { type:'write',  q:'What have multinational corporations done, according to critics? (one word)',
          a:'profited',
          exp:'"While multinational corporations have profited enormously."' },
        { type:'choice', q:'What is the challenge for policymakers?',
          opts:['Stopping globalisation entirely','Taxing multinational companies',
                'Harnessing benefits while protecting communities and culture',
                'Promoting local languages only'], a:2,
          exp:'"To harness the benefits... while protecting vulnerable communities and preserving cultural diversity."' }
      ]
    },

    {
      id: 'listen_b2_neuroscience',
      level: 'B2', title: 'How the brain learns languages', topic: 'Science & Education',
      accent: 'en-US', rate: 0.88, pitch: 1.0,
      routeMeta: { level: 'B2', sequence: 2 },
      audioScript:
        'Recent advances in neuroscience have shed significant light on how the human brain acquires language. ' +
        'Research using brain imaging technology has shown that language learning activates multiple regions ' +
        'of the brain simultaneously, including Broca\'s area, which is associated with speech production, ' +
        'and Wernicke\'s area, which is linked to language comprehension. ' +
        'What is particularly fascinating is the concept of neuroplasticity — ' +
        'the brain\'s remarkable ability to reorganise itself by forming new neural connections ' +
        'in response to learning. Studies have demonstrated that bilingual individuals ' +
        'show greater grey matter density in language-related areas compared to monolinguals. ' +
        'Moreover, immersive experiences — such as living abroad or consuming media in the target language — ' +
        'significantly accelerate acquisition by creating what researchers call ' +
        '"emotionally charged memory traces", which are far more durable than those formed through rote memorisation.',
      questions: [
        { type:'choice', q:'What technology is mentioned as a research tool?',
          opts:['MRI scans','Brain imaging technology','EEG devices','Blood tests'], a:1,
          exp:'"Research using brain imaging technology."' },
        { type:'choice', q:'What is Broca\'s area associated with?',
          opts:['Memory formation','Language comprehension','Speech production','Emotional regulation'], a:2,
          exp:'"Broca\'s area, which is associated with speech production."' },
        { type:'choice', q:'What does "neuroplasticity" refer to?',
          opts:['The brain\'s size increase with age',
                'The brain\'s ability to reorganise itself through new neural connections',
                'The speed of language processing','The capacity for emotional intelligence'], a:1,
          exp:'"The brain\'s remarkable ability to reorganise itself by forming new neural connections."' },
        { type:'write',  q:'What do researchers call the memory traces formed through immersive experiences? (two key words)',
          a:'emotionally charged',
          exp:'"Emotionally charged memory traces."' }
      ]
    },

    // ── C1 ──────────────────────────────────────────────────────

    {
      id: 'listen_c1_ethics_ai',
      level: 'C1', title: 'The ethics of artificial intelligence', topic: 'Technology & Ethics',
      accent: 'en-GB', rate: 0.88, pitch: 1.0,
      routeMeta: { level: 'C1', sequence: 1 },
      audioScript:
        'The rapid proliferation of artificial intelligence systems across virtually every sector of society ' +
        'has ignited a profound and urgent ethical debate. Central to this discourse is the question of accountability: ' +
        'when an AI system causes harm — whether through a flawed medical diagnosis, ' +
        'a biased hiring algorithm, or an autonomous vehicle accident — ' +
        'who bears moral and legal responsibility? The developer? The deploying organisation? The AI itself? ' +
        'This ambiguity is further compounded by the opacity of so-called "black box" systems, ' +
        'whose decision-making processes are often inscrutable even to their creators. ' +
        'Philosophers and technologists alike argue that transparency and explainability ' +
        'must be treated as non-negotiable design principles. ' +
        'Beyond accountability, there is the thorny issue of algorithmic bias, ' +
        'whereby systems trained on historically skewed data perpetuate and even amplify societal inequalities. ' +
        'A compelling body of evidence has emerged documenting discriminatory outcomes ' +
        'in predictive policing, credit scoring, and facial recognition technologies. ' +
        'The consensus among ethicists is that addressing these challenges requires ' +
        'not merely technical fixes, but a fundamental reimagining of governance frameworks ' +
        'to ensure that AI development is guided by principles of fairness, accountability, and human dignity.',
      questions: [
        { type:'choice', q:'What is described as "central to the discourse" on AI ethics?',
          opts:['The speed of AI development',
                'The question of accountability when AI causes harm',
                'The cost of implementing AI systems',
                'The aesthetic design of AI interfaces'], a:1,
          exp:'"Central to this discourse is the question of accountability."' },
        { type:'choice', q:'What does "black box" refer to in this context?',
          opts:['Systems that operate only at night',
                'AI systems whose decision-making is opaque and inscrutable',
                'A type of secure data storage','AI systems used in aviation'], a:1,
          exp:'"The opacity of so-called \'black box\' systems, whose decision-making processes are inscrutable."' },
        { type:'choice', q:'What does "algorithmic bias" result from according to the speaker?',
          opts:['Intentional discrimination by programmers',
                'Systems trained on historically skewed data',
                'Cultural differences in AI deployment',
                'Insufficient computing power'], a:1,
          exp:'"Systems trained on historically skewed data perpetuate and even amplify societal inequalities."' },
        { type:'choice', q:'What do ethicists argue is needed to address these challenges?',
          opts:['Banning all AI development',
                'Only technical fixes to the systems',
                'A fundamental reimagining of governance frameworks',
                'Greater investment in AI research only'], a:2,
          exp:'"Not merely technical fixes, but a fundamental reimagining of governance frameworks."' },
        { type:'write',  q:'What three principles should guide AI development according to the speaker? (list them)',
          a:'fairness, accountability, and human dignity',
          exp:'"Guided by principles of fairness, accountability, and human dignity."' }
      ]
    },

    {
      id: 'listen_c1_economics',
      level: 'C1', title: 'Universal Basic Income debate', topic: 'Economics & Society',
      accent: 'en-US', rate: 0.87, pitch: 1.0,
      routeMeta: { level: 'C1', sequence: 2 },
      audioScript:
        'The concept of a Universal Basic Income, or UBI, has gained remarkable traction in recent years ' +
        'as automation threatens to displace large swathes of the workforce. ' +
        'Proponents contend that a guaranteed income floor would eradicate extreme poverty, ' +
        'reduce bureaucratic inefficiencies inherent in means-tested welfare programmes, ' +
        'and afford individuals the freedom to pursue education, entrepreneurship, or caregiving ' +
        'without the existential anxiety of destitution. ' +
        'Pilot programmes in Finland, Kenya, and Stockton, California, have yielded encouraging preliminary data, ' +
        'suggesting improvements in mental health, social cohesion, and even employment outcomes ' +
        '— as recipients felt sufficiently secure to take calculated risks in the labour market. ' +
        'Detractors, however, raise substantive concerns about fiscal sustainability, ' +
        'arguing that funding a truly universal scheme would necessitate either ' +
        'significant tax increases or substantial cuts to existing public services. ' +
        'There is also a philosophical objection rooted in the notion that unconditional income ' +
        'might undermine the intrinsic value of work and weaken the social contract.',
      questions: [
        { type:'choice', q:'Why has UBI gained traction recently according to the audio?',
          opts:['Due to rising immigration','Because automation threatens to displace workers',
                'Because of declining birth rates','Due to government budget surpluses'], a:1,
          exp:'"As automation threatens to displace large swathes of the workforce."' },
        { type:'choice', q:'What advantage is mentioned regarding welfare programmes?',
          opts:['They would be abolished entirely',
                'UBI would reduce bureaucratic inefficiencies in means-tested programmes',
                'They would be merged into one universal programme',
                'They would become entirely digital'], a:1,
          exp:'"Reduce bureaucratic inefficiencies inherent in means-tested welfare programmes."' },
        { type:'choice', q:'Which of the following is NOT a location where a UBI pilot was run?',
          opts:['Finland','Kenya','Germany','Stockton, California'], a:2,
          exp:'The audio mentions Finland, Kenya, and Stockton, California — NOT Germany.' },
        { type:'choice', q:'What philosophical concern do detractors raise?',
          opts:['UBI would encourage laziness among the young',
                'It might undermine the value of work and weaken the social contract',
                'It would favour wealthy citizens over poor ones',
                'It is incompatible with modern banking systems'], a:1,
          exp:'"Unconditional income might undermine the intrinsic value of work and weaken the social contract."' },
        { type:'write',  q:'What improvements did pilot programmes suggest in mental health and social life? (two words from the audio)',
          a:'social cohesion',
          exp:'"Suggesting improvements in mental health, social cohesion, and even employment outcomes."' }
      ]
    }

  ]; // end listeningActivities

  // ============================================================
  // EXPONER AL SCOPE GLOBAL
  // ============================================================
  window.listeningActivities = listeningActivities;

  // ── Etiqueta de debilidad para AdaptiveEngine ─────────────────
  window.getListeningWeaknessLabel = function (sourceId) {
    const act = listeningActivities.find(a => a.id === sourceId);
    return act ? `Listening: ${act.title}` : sourceId;
  };

  // ── Resolver ID (por si se pasa con alias) ────────────────────
  window.resolveListeningId = function (id) {
    return listeningActivities.find(a => a.id === id)?.id || id;
  };

  // ============================================================
  // SRS ENGINE PARA LISTENING
  // Mantiene un registro de cuándo cada actividad debe revisarse
  // Intervalos: 1d → 3d → 7d → 14d → 30d → 60d
  // ============================================================
  window.ListeningSRS = {

    INTERVALS: [1, 3, 7, 14, 30, 60], // días

    _getData() {
      const s = window.state;
      if (!s) return {};
      if (!s.listeningSpacedData) s.listeningSpacedData = {};
      return s.listeningSpacedData;
    },

    update(activityId, scorePercent) {
      const data = this._getData();
      const prev = data[activityId] || { interval: 0, nextReview: Date.now() };
      const newInterval = scorePercent >= 80
        ? Math.min(prev.interval + 1, this.INTERVALS.length - 1)
        : Math.max(prev.interval - 1, 0);

      data[activityId] = {
        interval:    newInterval,
        lastScore:   scorePercent,
        lastReview:  Date.now(),
        nextReview:  Date.now() + this.INTERVALS[newInterval] * 86400000
      };
      window.saveState?.();
    },

    getDue() {
      const data = this._getData();
      const now  = Date.now();
      return listeningActivities.filter(act => {
        const d = data[act.id];
        return !d || d.nextReview <= now;
      });
    },

    getStats() {
      const data  = this._getData();
      const now   = Date.now();
      const total = listeningActivities.length;
      const done  = Object.keys(data).length;
      const due   = listeningActivities.filter(a => {
        const d = data[a.id];
        return d && d.nextReview <= now;
      }).length;
      const mature = Object.values(data).filter(d => d.interval >= 4).length;
      return { total, done, due, mature };
    }
  };

  // ============================================================
  // RUTA DE APRENDIZAJE (para buildLearningRoute en app.js)
  // ============================================================
  window.listeningLearningPath = [
    { level: 'A1', activities: listeningActivities.filter(a => a.level === 'A1').map(a => a.id) },
    { level: 'A2', activities: listeningActivities.filter(a => a.level === 'A2').map(a => a.id) },
    { level: 'B1', activities: listeningActivities.filter(a => a.level === 'B1').map(a => a.id) },
    { level: 'B2', activities: listeningActivities.filter(a => a.level === 'B2').map(a => a.id) },
    { level: 'C1', activities: listeningActivities.filter(a => a.level === 'C1').map(a => a.id) }
  ];

  console.log('[LeoEnglish] data-listening-spaced.js cargado —',
    listeningActivities.length, 'actividades en', new Set(listeningActivities.map(a=>a.level)).size, 'niveles.');

})();
