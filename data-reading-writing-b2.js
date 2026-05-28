// data-reading-writing-b2.js v1.0 — LEOENGLISH · READING & WRITING B2
// Marco Común Europeo de Referencia (MCER) — Nivel B2 (Upper-Intermediate)
// Estructura idéntica a data-reading-writing-b1.js
// Añadir en index.html DESPUÉS de data-reading-writing-b1.js y ANTES de app.js

(function () {
  'use strict';

  // ============================================================
  // READING TEXTS B2 — 6 textos con 7 preguntas cada uno
  // ============================================================
  const readingTextsB2 = [

    {
      id: 'gig_economy_b2',
      title: 'The Gig Economy: Freedom or Exploitation?',
      level: 'B2',
      levelColor: '#DC2626',
      topic: 'Trabajo y economía',
      questions: 7,
      desc: 'Artículo de análisis B2 sobre la economía gig. Practica lectura crítica, voz pasiva avanzada y conectores B2.',
      body: `The so-called "gig economy" — a labour market characterised by short-term contracts and freelance work — has expanded dramatically over the past decade. Platforms such as Uber, Deliveroo and Airbnb have been instrumental in driving this shift, offering workers what appears to be unparalleled flexibility. Yet, beneath this appealing surface lies a far more complex reality.<br><br>
Proponents argue that gig work offers individuals the freedom to set their own hours, choose their clients and pursue multiple income streams simultaneously. For students, caregivers and those with disabilities, this flexibility can be genuinely life-changing. Not only does it allow people to balance work with personal commitments, but it also opens up opportunities that traditional employment structures would not.<br><br>
Critics, however, contend that this "freedom" comes at a considerable cost. Gig workers are rarely entitled to the benefits afforded to permanent employees: no sick pay, no pension contributions, no redundancy protection. Furthermore, the algorithms that govern these platforms can unpredictably reduce workers' earnings or even remove them from the platform entirely without warning or appeal.<br><br>
It could be argued that the gig economy represents the latest chapter in a long history of labour market deregulation — one that benefits corporations far more than the individuals it purports to empower. Whether governments will intervene meaningfully remains to be seen.`,
      qs: [
        { type: 'choice', q: 'What is the main purpose of the article?', opts: ['To promote gig economy platforms', 'To present both sides of the gig economy debate', 'To explain how to become a gig worker'], a: 1, exp: 'The article presents arguments for and against the gig economy.' },
        { type: 'fill', q: 'The gig economy is characterised by short-term contracts and ___ work.', a: 'freelance', exp: '"a labour market characterised by short-term contracts and freelance work"' },
        { type: 'choice', q: 'According to the text, what is one genuine benefit of gig work?', opts: ['High salaries', 'Flexibility for students and caregivers', 'Job security'], a: 1, exp: '"For students, caregivers and those with disabilities, this flexibility can be genuinely life-changing."' },
        { type: 'choice', q: 'What does "Not only does it allow... but it also" express?', opts: ['Contrast', 'Cause', 'Addition and emphasis'], a: 2, exp: '"Not only... but also" adds a second point with emphasis — it is an additive structure with inversion.' },
        { type: 'fill', q: 'Gig workers are rarely entitled to sick pay, pension contributions or ___ protection.', a: 'redundancy', exp: '"no redundancy protection"' },
        { type: 'choice', q: 'What risk do algorithms pose to gig workers, according to the text?', opts: ['They set too high a minimum wage', 'They can reduce earnings or remove workers without warning', 'They control working hours strictly'], a: 1, exp: '"algorithms... can unpredictably reduce workers\' earnings or even remove them from the platform entirely"' },
        { type: 'choice', q: 'What does the author imply in the final paragraph?', opts: ['Governments have already solved the problem', 'It is unclear whether governments will take effective action', 'Corporations are fully accountable for workers\' rights'], a: 1, exp: '"Whether governments will intervene meaningfully remains to be seen."' }
      ],
      skillFocus: ['Critical reading', 'Complex argument', 'Advanced passives', 'Discourse markers B2'],
      communicativeTask: 'Write a balanced essay (10 sentences) on the gig economy. Use "not only... but also", "it could be argued that" and at least two other B2 connectors.',
      portfolioEvidence: 'Balanced argument essay — gig economy'
    },

    {
      id: 'neuroscience_reading_b2',
      title: 'How the Brain Learns Languages',
      level: 'B2',
      levelColor: '#7C3AED',
      topic: 'Ciencia y neurología',
      questions: 7,
      desc: 'Texto académico B2 sobre neurociencia del lenguaje. Practica lectura de textos científicos, hedging y vocabulario técnico.',
      body: `Language acquisition has long fascinated scientists and educators alike. Recent advances in neuroimaging technology have made it possible to observe, in real time, the areas of the brain activated during language learning and use. What has emerged from this research is a picture of extraordinary complexity.<br><br>
It would appear that the left hemisphere of the brain plays a dominant role in language processing for the majority of right-handed individuals, though this generalisation has important exceptions. Broca's area, located in the frontal lobe, is primarily associated with language production, whilst Wernicke's area, situated in the temporal lobe, is linked to comprehension. Damage to either region — as occurs in certain types of stroke — tends to produce markedly different linguistic impairments.<br><br>
What is perhaps most striking is the brain's neuroplasticity — its capacity to reorganise itself in response to learning and experience. Studies suggest that people who learn a second language in early childhood develop stronger neural connections between the two languages than those who acquire a second language later in life. However, adult learners who engage consistently and meaningfully with a new language can still achieve remarkable levels of proficiency, suggesting that neuroplasticity does not decline entirely with age.<br><br>
These findings have profound implications for language teaching. Rather than treating grammar and vocabulary as isolated components, educators are increasingly encouraged to present language in rich, contextualised and emotionally engaging ways — approaches that appear to activate a broader network of neural pathways and thereby consolidate learning more effectively.`,
      qs: [
        { type: 'choice', q: 'What has recent neuroimaging technology allowed scientists to do?', opts: ['Create new languages', 'Observe brain activity during language learning in real time', 'Predict who will learn languages fastest'], a: 1, exp: '"made it possible to observe, in real time, the areas of the brain activated during language learning"' },
        { type: 'fill', q: 'Broca\'s area is associated with language ___, whilst Wernicke\'s area is linked to comprehension.', a: 'production', exp: '"Broca\'s area... is primarily associated with language production"' },
        { type: 'choice', q: 'What does "neuroplasticity" refer to in the text?', opts: ['The size of the brain', 'The brain\'s ability to reorganise in response to learning', 'The speed of language processing'], a: 1, exp: '"neuroplasticity — its capacity to reorganise itself in response to learning and experience"' },
        { type: 'choice', q: 'True or False: According to the text, adults can never reach high proficiency in a second language.', opts: ['True', 'False'], a: 1, exp: '"adult learners... can still achieve remarkable levels of proficiency"' },
        { type: 'fill', q: 'Children who learn a second language early develop stronger ___ connections.', a: 'neural', exp: '"develop stronger neural connections between the two languages"' },
        { type: 'choice', q: 'What hedging language does the author use in paragraph 2?', opts: ['"It would appear that"', '"It is certain that"', '"There is no doubt that"'], a: 0, exp: '"It would appear that the left hemisphere..." — hedging to avoid absolute claims.' },
        { type: 'choice', q: 'What teaching approach does the text recommend?', opts: ['Drilling grammar rules repeatedly', 'Presenting language in contextualised and emotionally engaging ways', 'Focusing exclusively on vocabulary'], a: 1, exp: '"present language in rich, contextualised and emotionally engaging ways"' }
      ],
      skillFocus: ['Academic reading', 'Hedging language', 'Cause and effect', 'Scientific vocabulary'],
      communicativeTask: 'Write a short summary (8 sentences) of the article\'s main findings. Use hedging language: "it would appear that", "studies suggest that", "it could be argued that".',
      portfolioEvidence: 'Academic summary — neuroscience of language'
    },

    {
      id: 'urban_design_b2',
      title: 'Designing Cities for People',
      level: 'B2',
      levelColor: '#059669',
      topic: 'Urbanismo y sociedad',
      questions: 7,
      desc: 'Artículo de opinión B2 sobre diseño urbano. Practica lectura de argumentos complejos, cleft sentences y vocabulario urbano.',
      body: `For much of the twentieth century, cities were designed primarily around the car. Wide motorways cut through neighbourhoods, shopping centres moved to the urban periphery, and pedestrians were reduced to an afterthought. It is only in recent decades that urban planners have begun to question this orthodoxy and ask: what would a city designed truly for people look like?<br><br>
The answer, it turns out, is surprisingly straightforward. Cities that prioritise walkability — where essential services, parks and public spaces are within a fifteen-minute walk of any resident — consistently rank among the most liveable in the world. Copenhagen, Vienna and Singapore have all invested heavily in cycling infrastructure, green space and public transport, with measurable improvements in both physical health and community cohesion.<br><br>
What these cities share is not merely good infrastructure, but a political will to challenge the primacy of private car ownership. In Copenhagen, for instance, it was the decision to make cycling not just possible but genuinely comfortable and safe that transformed it into a world-renowned cycling city. Not only did this reduce traffic congestion, but it also significantly cut carbon emissions and improved air quality.<br><br>
Critics argue that such transformations are only possible in wealthy, compact, culturally homogeneous cities — and that replicating them in sprawling, diverse and under-resourced urban centres presents far greater challenges. This is a fair point. Yet it does not follow that nothing can be done. Even incremental changes — a new cycle lane, a car-free weekend, a community garden — can begin to shift the culture of a city and the expectations of its citizens.`,
      qs: [
        { type: 'choice', q: 'How were cities primarily designed for much of the 20th century?', opts: ['Around parks and public spaces', 'Around the car', 'Around pedestrian zones'], a: 1, exp: '"cities were designed primarily around the car"' },
        { type: 'fill', q: 'Cities that prioritise ___ rank among the most liveable in the world.', a: 'walkability', exp: '"Cities that prioritise walkability"' },
        { type: 'choice', q: 'What did Copenhagen\'s cycling investment achieve, according to the text?', opts: ['It increased car ownership', 'It reduced congestion, emissions and improved air quality', 'It made public transport unnecessary'], a: 1, exp: '"Not only did this reduce traffic congestion, but it also significantly cut carbon emissions and improved air quality."' },
        { type: 'choice', q: 'Identify the cleft sentence in paragraph 3.', opts: ['"Cities that prioritise walkability..."', '"What these cities share is not merely good infrastructure"', '"Critics argue that such transformations..."'], a: 1, exp: '"What these cities share is..." — a wh-cleft sentence emphasising the shared quality.' },
        { type: 'fill', q: 'Critics argue that such transformations are only possible in wealthy, compact, culturally ___ cities.', a: 'homogeneous', exp: '"culturally homogeneous cities"' },
        { type: 'choice', q: 'How does the author respond to the critics\' argument?', opts: ['By fully agreeing with them', 'By dismissing it entirely', 'By acknowledging it but arguing incremental change is still possible'], a: 2, exp: '"This is a fair point. Yet it does not follow that nothing can be done."' },
        { type: 'choice', q: 'What is the author\'s overall stance?', opts: ['Car-free cities are impossible', 'Cities can and should be redesigned around people, even gradually', 'Only wealthy cities can improve urban design'], a: 1, exp: 'The author supports people-centred urban design and argues even small changes matter.' }
      ],
      skillFocus: ['Complex argument reading', 'Cleft sentences in context', 'Urban vocabulary', 'Author stance and tone'],
      communicativeTask: 'Write a short opinion text (8–10 sentences) about urban transport in your city. Use a wh-cleft sentence and at least one "not only... but also" structure.',
      portfolioEvidence: 'Opinion text — urban design'
    },

    {
      id: 'psychology_conformity_b2',
      title: 'Why Do We Conform?',
      level: 'B2',
      levelColor: '#D97706',
      topic: 'Psicología social',
      questions: 7,
      desc: 'Texto de divulgación psicológica B2. Practica inferencia, vocabulario académico e hipotéticos.',
      body: `In 1951, the social psychologist Solomon Asch conducted a now-famous experiment. Participants were shown a line of a given length and asked to identify which of three comparison lines matched it. The answer was obvious — yet when confederates of the experimenter deliberately chose the wrong answer, a significant proportion of participants conformed to the group's incorrect judgement, even when they privately knew it to be wrong.<br><br>
Asch's findings laid the groundwork for decades of research into social conformity. What they revealed was not that people are simply foolish or gullible, but that the desire to belong and avoid social disapproval is a deeply powerful human motivator. Were the social cost of disagreement to be removed, most participants would have chosen correctly.<br><br>
This insight has profound implications. In the workplace, conformity pressure can suppress innovation: employees who fear ridicule or marginalisation are unlikely to voice unconventional ideas, even when those ideas might be genuinely valuable. In politics, it contributes to the phenomenon of "groupthink", whereby teams of highly intelligent people arrive at disastrously poor decisions because dissent feels too socially costly.<br><br>
Understanding why we conform is the first step towards building environments in which independent thinking is not merely tolerated but actively encouraged. Organisations that have successfully done so — that is to say, those that reward constructive challenge as much as consensus — consistently outperform those that do not.`,
      qs: [
        { type: 'choice', q: 'What did Asch\'s experiment reveal about the participants who gave wrong answers?', opts: ['They were unintelligent', 'They feared social disapproval more than being wrong', 'They were unable to see the correct answer'], a: 1, exp: '"the desire to belong and avoid social disapproval is a deeply powerful human motivator"' },
        { type: 'fill', q: 'When confederates chose the wrong answer, many participants ___ to the group\'s incorrect judgement.', a: 'conformed', exp: '"a significant proportion of participants conformed to the group\'s incorrect judgement"' },
        { type: 'choice', q: 'Identify the inverted conditional in paragraph 2.', opts: ['"What they revealed was..."', '"Were the social cost of disagreement to be removed..."', '"most participants would have chosen correctly"'], a: 1, exp: '"Were the social cost... to be removed" — inverted second conditional: Were + subject + to + infinitive.' },
        { type: 'choice', q: 'What is "groupthink", as described in the text?', opts: ['A form of creative brainstorming', 'Poor decisions made by intelligent people due to conformity pressure', 'A method for improving teamwork'], a: 1, exp: '"groupthink, whereby teams of highly intelligent people arrive at disastrously poor decisions"' },
        { type: 'fill', q: 'In the workplace, conformity pressure can ___ innovation.', a: 'suppress', exp: '"conformity pressure can suppress innovation"' },
        { type: 'choice', q: 'What does "that is to say" signal in the final paragraph?', opts: ['A contrast', 'A reformulation or clarification', 'A new argument'], a: 1, exp: '"that is to say" = in other words — it introduces a clarification or restatement.' },
        { type: 'choice', q: 'What do organisations that reward constructive challenge do better?', opts: ['They avoid all forms of conflict', 'They consistently outperform those that prioritise consensus only', 'They hire more staff'], a: 1, exp: '"consistently outperform those that do not [reward constructive challenge]"' }
      ],
      skillFocus: ['Academic inference', 'Inverted conditionals in context', 'Psychology vocabulary', 'Discourse markers B2'],
      communicativeTask: 'Write 8–10 sentences about a situation where you (or someone you know) conformed to group pressure. Use past perfect, an inverted conditional and at least one B2 discourse marker.',
      portfolioEvidence: 'Reflective paragraph — social conformity'
    },

    {
      id: 'future_of_work_b2',
      title: 'Automation and the Future of Work',
      level: 'B2',
      levelColor: '#0891B2',
      topic: 'Tecnología y futuro',
      questions: 7,
      desc: 'Artículo de prospectiva B2 sobre automatización. Practica lectura de textos predictivos, modales avanzados y vocabulario económico.',
      body: `The debate over automation and its impact on employment is not new. Since the Industrial Revolution, each wave of technological change has provoked anxiety about mass unemployment — and each time, new jobs have eventually emerged to replace those lost. Whether this historical pattern will hold in the age of artificial intelligence, however, is far from certain.<br><br>
What distinguishes contemporary AI from previous technologies is its capacity for cognitive work. Earlier machines replaced human muscle; today's algorithms are increasingly capable of replacing human judgement in areas once considered immune: legal research, medical diagnosis, financial analysis, even creative writing. The range of tasks that machines cannot perform is narrowing rapidly.<br><br>
Optimists point out that automation typically raises productivity and reduces costs, generating wealth that — in theory — could be redistributed to fund new forms of work, education and social welfare. Moreover, history suggests that humans consistently find new needs to meet and new forms of value to create. Pessimists counter that the speed and scale of this technological transition may be unprecedented, leaving insufficient time for labour markets and education systems to adapt.<br><br>
What seems clear is that the jobs most at risk are those involving routine, predictable tasks — regardless of whether those tasks are manual or cognitive. Those least at risk involve creativity, empathy and complex interpersonal interaction: precisely the qualities that remain stubbornly difficult to automate. Whether this is reassuring or deeply troubling depends, perhaps, on where you currently work.`,
      qs: [
        { type: 'choice', q: 'What historical pattern does the author refer to in paragraph 1?', opts: ['Technology always causes permanent unemployment', 'New jobs have always emerged after each wave of automation', 'AI is identical to previous technologies'], a: 1, exp: '"each time, new jobs have eventually emerged to replace those lost"' },
        { type: 'fill', q: 'Contemporary AI is distinctive because it can replace human ___ in areas once considered immune.', a: 'judgement', exp: '"today\'s algorithms are increasingly capable of replacing human judgement"' },
        { type: 'choice', q: 'What is the optimists\' argument about automation?', opts: ['It will eliminate all jobs', 'It raises productivity and could generate wealth for redistribution', 'It only affects manual workers'], a: 1, exp: '"automation typically raises productivity and reduces costs, generating wealth that — in theory — could be redistributed"' },
        { type: 'choice', q: 'What do pessimists argue?', opts: ['Automation is slow and manageable', 'The speed of change may be unprecedented, leaving no time to adapt', 'Education systems are already prepared'], a: 1, exp: '"the speed and scale of this technological transition may be unprecedented, leaving insufficient time... to adapt"' },
        { type: 'fill', q: 'Jobs most at risk involve routine and ___ tasks.', a: 'predictable', exp: '"jobs most at risk are those involving routine, predictable tasks"' },
        { type: 'choice', q: 'Which modal structure does the author use to hedge the optimists\' claim?', opts: ['"could be redistributed — in theory"', '"will be redistributed"', '"must be redistributed"'], a: 0, exp: '"could be redistributed — in theory" — "could" and "in theory" both hedge the claim.' },
        { type: 'choice', q: 'What qualities does the author say are hardest to automate?', opts: ['Speed and accuracy', 'Creativity, empathy and complex interpersonal interaction', 'Data processing and analysis'], a: 1, exp: '"creativity, empathy and complex interpersonal interaction: precisely the qualities that remain stubbornly difficult to automate"' }
      ],
      skillFocus: ['Predictive text reading', 'Advanced modals in context', 'Economic vocabulary', 'Hedging and stance'],
      communicativeTask: 'Write a short prediction text (8–10 sentences) about how your profession or a profession you know will change due to automation. Use at least 3 modal or semi-modal structures.',
      portfolioEvidence: 'Predictive writing — automation and work'
    },

    {
      id: 'literary_extract_b2',
      title: 'Extract: The Quiet Between Words',
      level: 'B2',
      levelColor: '#6366F1',
      topic: 'Texto literario',
      questions: 7,
      desc: 'Extracto literario B2. Practica análisis de recursos estilísticos, inferencia de carácter y vocabulario narrativo avanzado.',
      body: `The letter had been sitting on the kitchen table for three days. Elena had not opened it, though she knew perfectly well who had sent it and why. She had developed, over years of carefully maintained distance, a talent for not doing things.<br><br>
The morning light came through the window at a low angle, illuminating the dust on the windowsill and the corner of the envelope that curled upward, as if trying to draw her attention. Elena poured herself a second cup of coffee and sat down facing the wall.<br><br>
It was not that she was afraid — or so she told herself. Rather, she understood, in the particular way one understands things one has spent considerable time avoiding, that opening the letter would require her to be a different kind of person than she currently was. It would require honesty. It would require change. It would, above all, require her to stop.<br><br>
She took a long sip of coffee. Outside, a child laughed in the street — a sound so sudden and complete that it startled her. She looked at the envelope. She looked at the wall. Then, slowly, with the deliberateness of someone performing a ritual, she reached across the table.`,
      qs: [
        { type: 'choice', q: 'Why has Elena not opened the letter for three days?', opts: ['She has forgotten about it', 'She deliberately avoids doing things that require her to change', 'She does not know who sent it'], a: 1, exp: '"She had developed... a talent for not doing things" and "opening the letter would require her to be a different kind of person"' },
        { type: 'fill', q: 'Elena had developed a talent for not ___ things over years of carefully maintained distance.', a: 'doing', exp: '"a talent for not doing things"' },
        { type: 'choice', q: 'What literary device is used in "the corner of the envelope that curled upward, as if trying to draw her attention"?', opts: ['Anaphora', 'Personification', 'Antithesis'], a: 1, exp: 'The envelope is given a human-like intention ("as if trying to draw her attention") — personification.' },
        { type: 'choice', q: 'What would opening the letter require, according to Elena\'s thoughts?', opts: ['Money and time', 'Honesty, change and stopping', 'A reply to someone'], a: 1, exp: '"It would require honesty. It would require change. It would, above all, require her to stop."' },
        { type: 'choice', q: 'What rhetorical device is used in "It would require honesty. It would require change. It would require her to stop."?', opts: ['Litotes', 'Anaphora', 'Cleft sentence'], a: 1, exp: 'Anaphora: the repetition of "It would require" at the start of three consecutive clauses for emphasis.' },
        { type: 'fill', q: 'The child\'s laugh was so sudden and complete that it ___ her.', a: 'startled', exp: '"a sound so sudden and complete that it startled her"' },
        { type: 'choice', q: 'What does "with the deliberateness of someone performing a ritual" suggest about Elena\'s action?', opts: ['She is acting carelessly', 'The action is slow, conscious and significant', 'She is rushing to open the letter'], a: 1, exp: '"deliberateness" implies careful, intentional, meaningful action — not impulsive.' }
      ],
      skillFocus: ['Literary analysis', 'Stylistic devices in context', 'Character inference', 'Narrative vocabulary'],
      communicativeTask: 'Write the next paragraph of the story (6–8 sentences): what does Elena find in the letter? Use at least one anaphora, one participle clause and one piece of descriptive language.',
      portfolioEvidence: 'Creative writing continuation — literary extract'
    }

  ]; // fin readingTextsB2


  // ============================================================
  // WRITING EXERCISES B2 — 6 ejercicios variados
  // ============================================================
  const writingExercisesB2 = [

    {
      id: 'error_correction_b2_advanced',
      title: 'Caza de errores: gramática avanzada B2',
      type: 'error',
      typeLabel: 'Corrección',
      typeColor: '#DC2626',
      desc: 'Corrige errores de inversión, conditionals mixtos, cleft sentences y pasiva avanzada.',
      tasks: [
        { wrong: 'Never I have seen such a beautiful landscape.', answer: 'Never have I seen such a beautiful landscape.', tip: '"Never" al inicio requiere inversión sujeto-auxiliar: Never have I seen.' },
        { wrong: 'If I had more confidence, I would have applied for the job.', answer: 'If I had more confidence, I would apply for the job.', tip: 'Mixed conditional (presente → resultado presente): if + Past Simple, would + base verb.' },
        { wrong: 'It was him who he told me the news.', answer: 'It was he who told me the news.', tip: 'It-cleft: It was + focused element + who/that + clause (sin pronombre extra).' },
        { wrong: 'The report has been already submitted.', answer: 'The report has already been submitted.', tip: '"Already" va entre "has been" y el participio: has already been submitted.' },
        { wrong: 'She suggested to go to the cinema.', answer: 'She suggested going to the cinema.', tip: '"Suggest" va seguido de gerundio, no de infinitivo.' },
        { wrong: 'Had she known, she will have helped.', answer: 'Had she known, she would have helped.', tip: 'Inverted third conditional: Had + p.p. → would have + p.p. (no "will").' }
      ],
      learningGoal: 'Identificar y corregir errores de estructuras gramaticales B2.',
      portfolioEvidence: 'Error correction log B2'
    },

    {
      id: 'transform_b2_inversion',
      title: 'Transformación: Inversión B2',
      type: 'transform',
      typeLabel: 'Transformación',
      typeColor: '#7C3AED',
      desc: 'Reescribe oraciones usando inversión con adverbiales negativos y condicionales formales.',
      tasks: [
        { original: 'I had never felt so nervous before.', answer: 'Never had I felt so nervous before.', tip: 'Never + Past Perfect invertido: Never had I felt.' },
        { original: 'She not only won the prize but also broke the record.', answer: 'Not only did she win the prize, but she also broke the record.', tip: 'Not only + did + subject + verb (Present/Past Simple invertido).' },
        { original: 'If you should need any help, call me.', answer: 'Should you need any help, call me.', tip: 'Should + subject → inversión condicional formal.' },
        { original: 'I had barely sat down when the phone rang.', answer: 'Barely had I sat down when the phone rang.', tip: 'Barely + Past Perfect invertido: Barely had I.' },
        { original: 'If he had studied harder, he would have passed.', answer: 'Had he studied harder, he would have passed.', tip: 'Had + subject + p.p. → inversión de third conditional (sin "if").' },
        { original: 'She was so tired that she fell asleep immediately.', answer: 'So tired was she that she fell asleep immediately.', tip: 'So + adjective + inversión: So tired was she.' }
      ],
      learningGoal: 'Producir inversiones con adverbiales negativos y condicionales formales con precisión.',
      portfolioEvidence: 'Inversion transformation exercises B2'
    },

    {
      id: 'order_b2_cleft',
      title: 'Ordena: Cleft Sentences B2',
      type: 'order',
      typeLabel: 'Ordenar',
      typeColor: '#059669',
      desc: 'Ordena palabras para formar it-clefts y wh-clefts correctos.',
      tasks: [
        { words: ['was', 'It', 'Shakespeare', 'Hamlet.', 'wrote', 'who'], answer: 'It was Shakespeare who wrote Hamlet.', tip: 'It-cleft: It was + focused element + who + clause.' },
        { words: ['What', 'need', 'is', 'a', 'holiday.', 'long', 'I'], answer: 'What I need is a long holiday.', tip: 'Wh-cleft: What + subject + verb + is + focused element.' },
        { words: ['was', 'It', 'in', 'Paris', 'they', 'that', 'met.', 'first'], answer: 'It was in Paris that they first met.', tip: 'It-cleft emphasising place: It was + place + that + clause.' },
        { words: ['surprised', 'What', 'me', 'his', 'was', 'reaction.'], answer: 'What surprised me was his reaction.', tip: 'Wh-cleft as subject: What surprised me was + noun phrase.' },
        { words: ['want', 'All', 'peace', 'I', 'is', 'quiet.', 'and'], answer: 'All I want is peace and quiet.', tip: '"All I want is" → restrictive cleft: only this one thing.' },
        { words: ['resigned', 'The', 'why', 'reason', 'underpaid.', 'she', 'was', 'she', 'was'], answer: 'The reason why she resigned was she was underpaid.', tip: '"The reason why... was that/she..." → causal cleft structure.' }
      ],
      learningGoal: 'Construir it-clefts y wh-clefts correctamente para enfatizar información.',
      portfolioEvidence: 'Cleft sentence ordering exercises B2'
    },

    {
      id: 'free_writing_b2_argument',
      title: 'Escritura libre: ensayo argumentativo B2',
      type: 'free',
      typeLabel: 'Escritura libre',
      typeColor: '#B45309',
      desc: 'Escribe un ensayo argumentativo formal sobre un tema de actualidad.',
      prompt: 'To what extent do you agree that social media does more harm than good? Write a well-structured argument (10–12 sentences). Use: "it could be argued that", "not only... but also", "admittedly", "on balance", and at least one cleft sentence or inversion.',
      minWords: 100,
      checklist: [
        'I stated my position clearly in the opening sentence.',
        'I used "it could be argued that" at least once.',
        'I included a concession with "admittedly" or "granted".',
        'I used "not only... but also" or another emphasis structure.',
        'I wrote a balanced conclusion with "on balance".'
      ],
      modelAnswer: 'It could be argued that social media does considerably more harm than good, particularly for younger users. Not only does it expose teenagers to unrealistic standards of beauty and success, but it also creates an environment in which cyberbullying can thrive unchecked. What is particularly concerning is the addictive design of these platforms — designed, as they are, to maximise engagement rather than wellbeing. Admittedly, social media has democratised information and given marginalised communities a powerful voice. Furthermore, during periods of isolation, such as the COVID-19 pandemic, it provided a vital means of connection. Nevertheless, these benefits do not, in my view, outweigh the documented psychological harms. On balance, I believe that stricter regulation of social media platforms — particularly regarding data collection from minors — is both necessary and long overdue.',
      learningGoal: 'Producir un ensayo argumentativo formal con estructuras B2 integradas.',
      portfolioEvidence: 'Argumentative essay B2 — social media'
    },

    {
      id: 'dictation_b2_complex',
      title: 'Dictado: Estructuras complejas B2',
      type: 'dictation',
      typeLabel: 'Dictado',
      typeColor: '#0891B2',
      desc: 'Escucha y escribe oraciones con inversión, cleft sentences y pasiva avanzada.',
      sentences: [
        { text: 'Not only did she win the competition, but she also broke the record.', focus: 'Not only + inversión con did.' },
        { text: 'It was the algorithm that decided which workers were removed from the platform.', focus: 'It-cleft: It was + noun phrase + that + clause.' },
        { text: 'Had they invested earlier, they would be considerably richer now.', focus: 'Inverted third conditional + mixed result (would be = present).' },
        { text: 'The report has already been submitted to the board of directors.', focus: 'Present Perfect Passive con already en posición correcta.' },
        { text: 'What the research suggests is that neuroplasticity does not decline entirely with age.', focus: 'Wh-cleft: What + subject + verb + is + that-clause.' },
        { text: 'So concerned were the residents that they organised a formal petition.', focus: 'So + adjective + inversión: So concerned were they.' }
      ],
      learningGoal: 'Reconocer y reproducir estructuras complejas B2 con precisión ortográfica y sintáctica.',
      portfolioEvidence: 'Dictado de estructuras complejas B2'
    },

    {
      id: 'transform_b2_emphasis',
      title: 'Transformación: Énfasis y reformulación B2',
      type: 'transform',
      typeLabel: 'Transformación',
      typeColor: '#6366F1',
      desc: 'Reformula oraciones usando cleft sentences, do-emphático, so/such y nominalizaciones.',
      tasks: [
        { original: 'The noise bothered me most.', answer: 'What bothered me most was the noise.', tip: 'Wh-cleft: What + subject + verb + was + focused element.' },
        { original: 'I really did warn you about this.', answer: 'I did warn you about this.', tip: '"Did + base verb" para énfasis afirmativo en pasado.' },
        { original: 'The concert was so amazing that we didn\'t want to leave.', answer: 'It was such an amazing concert that we didn\'t want to leave.', tip: '"Such a/an + adjective + noun" equivale a "so + adjective".' },
        { original: 'They decided to expand the company.', answer: 'The decision to expand the company was made.', tip: 'Nominalización + pasiva: "decided" → "the decision... was made".' },
        { original: 'I particularly enjoy the evening sessions.', answer: 'It is the evening sessions that I particularly enjoy.', tip: 'It-cleft enfatizando el objeto: It is + object + that + subject + verb.' },
        { original: 'Prices have risen significantly.', answer: 'There has been a significant rise in prices.', tip: '"rise" como sustantivo en estructura existencial: There has been a rise in.' }
      ],
      learningGoal: 'Reformular oraciones usando recursos de énfasis y nominalización característicos del nivel B2.',
      portfolioEvidence: 'Emphasis and reformulation exercises B2'
    }

  ]; // fin writingExercisesB2


  // ============================================================
  // LEARNING PATHS B2
  // ============================================================
  const readingLearningPathB2 = [
    {
      level: 'B2',
      title: 'B2 · Reading Upper-Intermediate',
      color: '#DC2626',
      requiredScore: 75,
      texts: [
        'gig_economy_b2',
        'neuroscience_reading_b2',
        'urban_design_b2',
        'psychology_conformity_b2',
        'future_of_work_b2',
        'literary_extract_b2'
      ]
    }
  ];

  const writingLearningPathB2 = [
    {
      level: 'B2',
      title: 'B2 · Writing Upper-Intermediate',
      color: '#DC2626',
      requiredScore: 75,
      exercises: [
        'error_correction_b2_advanced',
        'transform_b2_inversion',
        'order_b2_cleft',
        'free_writing_b2_argument',
        'dictation_b2_complex',
        'transform_b2_emphasis'
      ]
    }
  ];


  // ============================================================
  // COMPETENCY MAPS B2
  // ============================================================
  const readingCompetencyMapB2 = {
    gig_economy_b2:          { level: 'B2', skill: 'reading', weaknessLabel: 'Reading: Complex argument & discourse markers B2', homologationGroup: 'b2_reading_argument', diagnosticTags: ['discourse_markers_b2', 'advanced_passives', 'economy'] },
    neuroscience_reading_b2: { level: 'B2', skill: 'reading', weaknessLabel: 'Reading: Academic text & hedging', homologationGroup: 'b2_reading_academic', diagnosticTags: ['hedging', 'academic', 'science'] },
    urban_design_b2:         { level: 'B2', skill: 'reading', weaknessLabel: 'Reading: Opinion text & cleft sentences', homologationGroup: 'b2_reading_opinion', diagnosticTags: ['cleft_sentences', 'inversion_b2', 'urban'] },
    psychology_conformity_b2:{ level: 'B2', skill: 'reading', weaknessLabel: 'Reading: Inference & inverted conditionals', homologationGroup: 'b2_reading_inference', diagnosticTags: ['inversion_b2', 'hypothetical_language', 'psychology'] },
    future_of_work_b2:       { level: 'B2', skill: 'reading', weaknessLabel: 'Reading: Predictive text & advanced modals', homologationGroup: 'b2_reading_predictive', diagnosticTags: ['advanced_modality', 'hedging', 'technology'] },
    literary_extract_b2:     { level: 'B2', skill: 'reading', weaknessLabel: 'Reading: Literary analysis & stylistic devices', homologationGroup: 'b2_reading_literary', diagnosticTags: ['stylistic_devices', 'inference', 'fiction'] }
  };

  const writingCompetencyMapB2 = {
    error_correction_b2_advanced: { level: 'B2', skill: 'writing', weaknessLabel: 'Writing: Error correction advanced B2', homologationGroup: 'b2_writing_error', diagnosticTags: ['inversion_b2', 'third_conditional', 'cleft_sentences'] },
    transform_b2_inversion:       { level: 'B2', skill: 'writing', weaknessLabel: 'Writing: Inversion transformation B2', homologationGroup: 'b2_writing_inversion', diagnosticTags: ['inversion_b2'] },
    order_b2_cleft:               { level: 'B2', skill: 'writing', weaknessLabel: 'Writing: Cleft sentence ordering B2', homologationGroup: 'b2_writing_cleft', diagnosticTags: ['cleft_sentences'] },
    free_writing_b2_argument:     { level: 'B2', skill: 'writing', weaknessLabel: 'Writing: Argumentative essay B2', homologationGroup: 'b2_writing_essay', diagnosticTags: ['discourse_markers_b2', 'hedging', 'emphasis_devices'] },
    dictation_b2_complex:         { level: 'B2', skill: 'writing', weaknessLabel: 'Writing: Complex structures dictation B2', homologationGroup: 'b2_writing_dictation', diagnosticTags: ['inversion_b2', 'cleft_sentences', 'advanced_passives'] },
    transform_b2_emphasis:        { level: 'B2', skill: 'writing', weaknessLabel: 'Writing: Emphasis and nominalization B2', homologationGroup: 'b2_writing_emphasis', diagnosticTags: ['emphasis_devices', 'nominalization', 'cleft_sentences'] }
  };


  // ============================================================
  // DIAGNÓSTICOS B2
  // ============================================================
  const readingDiagnosticBlueprintB2 = {
    id: 'reading_diagnostic_b2', title: 'Diagnóstico de Reading B2', levels: ['B2'],
    rules: { passScore: 75, homologationScore: 80, reinforcementThreshold: 70 },
    items: [
      { id: 'rd_b2_01', level: 'B2', mapsTo: ['gig_economy_b2'],
        type: 'choice', q: '"Not only does it allow people to balance work, but it also opens opportunities." What structure is this?',
        opts: ['Cleft sentence', 'Inversion with addition', 'Reported speech'], a: 1,
        exp: '"Not only... but also" con inversión → énfasis y adición simultánea.' },
      { id: 'rd_b2_02', level: 'B2', mapsTo: ['neuroscience_reading_b2'],
        type: 'choice', q: '"It would appear that..." — what function does this phrase serve?',
        opts: ['It confirms a fact', 'It hedges a claim to avoid being too absolute', 'It introduces a contrast'], a: 1,
        exp: '"It would appear that" → distanciamiento epistémico / hedging académico.' },
      { id: 'rd_b2_03', level: 'B2', mapsTo: ['urban_design_b2'],
        type: 'choice', q: '"What these cities share is not merely good infrastructure, but a political will." What type of sentence is this?',
        opts: ['It-cleft', 'Wh-cleft', 'Reported speech'], a: 1,
        exp: '"What + subject + verb + is" → wh-cleft (pseudo-cleft).' },
      { id: 'rd_b2_04', level: 'B2', mapsTo: ['psychology_conformity_b2'],
        type: 'choice', q: '"Were the social cost of disagreement to be removed..." — what structure is this?',
        opts: ['Third conditional', 'Inverted second conditional', 'Past Perfect passive'], a: 1,
        exp: '"Were + subject + to + infinitive" → formal inverted second conditional.' }
    ]
  };

  const writingDiagnosticBlueprintB2 = {
    id: 'writing_diagnostic_b2', title: 'Diagnóstico de Writing B2', levels: ['B2'],
    rules: { passScore: 75, homologationScore: 80, reinforcementThreshold: 70 },
    items: [
      { id: 'wd_b2_01', level: 'B2', mapsTo: ['transform_b2_inversion'],
        type: 'choice', q: '"I had never seen such a view." → Inversion: ___',
        opts: ['Never I had seen such a view.', 'Never had I seen such a view.', 'Had never I seen such a view.'], a: 1,
        exp: 'Never + Past Perfect invertido: Never had I seen.' },
      { id: 'wd_b2_02', level: 'B2', mapsTo: ['order_b2_cleft'],
        type: 'choice', q: '"The noise bothered me most." → Cleft: ___',
        opts: ['It was the noise what bothered me most.', 'What bothered me most was the noise.', 'The noise is what most bothered me.'], a: 1,
        exp: 'Wh-cleft: What + subject + verb + was + noun phrase.' },
      { id: 'wd_b2_03', level: 'B2', mapsTo: ['transform_b2_emphasis'],
        type: 'choice', q: '"They decided to expand." → Nominalization + passive: ___',
        opts: ['They made the decision to expand.', 'The decision to expand was made.', 'A decision was decided to expand.'], a: 1,
        exp: 'Nominalización "decision" + pasiva "was made" → registro formal.' },
      { id: 'wd_b2_04', level: 'B2', mapsTo: ['error_correction_b2_advanced'],
        type: 'choice', q: 'Which sentence is correct?',
        opts: ['Never I have seen such talent.', 'Never have I seen such talent.', 'Never I had seen such talent.'], a: 1,
        exp: '"Never" al inicio + inversión: Never have I seen (Present Perfect).' }
    ]
  };


  // ============================================================
  // EXPORTACIÓN — Navegador
  // ============================================================
  if (typeof window !== 'undefined') {

    if (Array.isArray(window.readingExpansionTexts)) {
      const existingIds = window.readingExpansionTexts.map(t => t.id);
      readingTextsB2.forEach(t => { if (!existingIds.includes(t.id)) window.readingExpansionTexts.push(t); });
    } else { window.readingExpansionTexts = readingTextsB2; }

    if (Array.isArray(window.writingExpansionExercises)) {
      const existingIds = window.writingExpansionExercises.map(e => e.id);
      writingExercisesB2.forEach(e => { if (!existingIds.includes(e.id)) window.writingExpansionExercises.push(e); });
    } else { window.writingExpansionExercises = writingExercisesB2; }

    if (Array.isArray(window.readingLearningPath)) {
      if (!window.readingLearningPath.some(l => l.level === 'B2')) window.readingLearningPath.push(...readingLearningPathB2);
    } else { window.readingLearningPath = readingLearningPathB2; }

    if (Array.isArray(window.writingLearningPath)) {
      if (!window.writingLearningPath.some(l => l.level === 'B2')) window.writingLearningPath.push(...writingLearningPathB2);
    } else { window.writingLearningPath = writingLearningPathB2; }

    if (window.readingCompetencyMap) Object.assign(window.readingCompetencyMap, readingCompetencyMapB2);
    if (window.writingCompetencyMap) Object.assign(window.writingCompetencyMap, writingCompetencyMapB2);

    window.readingDiagnosticBlueprintB2 = readingDiagnosticBlueprintB2;
    window.writingDiagnosticBlueprintB2 = writingDiagnosticBlueprintB2;
    window.readingTextsB2               = readingTextsB2;
    window.writingExercisesB2           = writingExercisesB2;
    window.readingLearningPathB2        = readingLearningPathB2;
    window.writingLearningPathB2        = writingLearningPathB2;
    window.readingCompetencyMapB2       = readingCompetencyMapB2;
    window.writingCompetencyMapB2       = writingCompetencyMapB2;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      readingTextsB2, writingExercisesB2,
      readingLearningPathB2, writingLearningPathB2,
      readingCompetencyMapB2, writingCompetencyMapB2,
      readingDiagnosticBlueprintB2, writingDiagnosticBlueprintB2
    };
  }

}()); // fin IIFE
