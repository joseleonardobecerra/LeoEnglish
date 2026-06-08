// ============================================================
// data-exercises-expanded.js — LeoEnglish v9.0
// EXPANSIÓN DE EJERCICIOS: los 3 problemas reales
//
// PROBLEMA 1: Reading 80% literal → añadimos inferencia real
// PROBLEMA 2: Vocab sin producción → añadimos fill/collocations
// PROBLEMA 3: Grammar B2/C1 75% choice → más transform/error
//
// Todos los niveles A1→C1 simultáneamente.
// ============================================================

(function () {
  'use strict';

  // ============================================================
  // BLOQUE 1 — READING CON INFERENCIA REAL
  // Textos nuevos por nivel. Preguntas: propósito, tono,
  // vocabulario en contexto, inferencia, evaluación crítica.
  // ============================================================

  const readingExpanded = {

    // ── A1 — Textos cortos, inferencia básica ──────────────
    a1: [
      {
        id: 'read_a1_signs', level: 'A1', title: 'Signs & Notices',
        text: `Notice 1: "STAFF ONLY — No entry without badge."
Notice 2: "Wet floor — please take care."
Notice 3: "This machine is out of order. Sorry for the inconvenience."
Notice 4: "All customers must wear a face covering."`,
        questions: [
          { type:'choice', q:'A cleaner is mopping the floor. Which notice is most relevant?',
            opts:['Notice 1','Notice 2','Notice 3','Notice 4'], a:1,
            exp:'Wet floor = slippery after mopping. Inference: connect cause and relevant warning.' },
          { type:'choice', q:'A customer arrives without a mask. What should they do?',
            opts:['Leave immediately','Find a member of staff','Put on a face covering','Use the machine'], a:2,
            exp:'"Must wear" = obligation. They need to comply, not leave.' },
          { type:'choice', q:'What does "out of order" mean?',
            opts:['Working perfectly','Not functioning','Very dirty','Too expensive'], a:1,
            exp:'Vocabulary in context: out of order = not working. Cannot be deduced from Spanish.' },
          { type:'write', q:'Who is Notice 1 for? Write one word.',
            a:'staff', exp:'"STAFF ONLY" — the notice addresses employees, not the public.' },
          { type:'choice', q:'What is the PURPOSE of all four notices?',
            opts:['To entertain customers','To give information and instructions','To advertise products','To welcome visitors'], a:1,
            exp:'Purpose = function of the text type. Signs inform and instruct — not one specific fact.' }
        ]
      },
      {
        id: 'read_a1_email_invite', level: 'A1', title: 'A Party Invitation',
        text: `Hi Laura!
I'm having a birthday party on Saturday 14th June at 7 pm. It's a surprise for my sister — please don't tell her! The party is at my house, 23 Green Street. Can you bring something to eat or drink? Let me know if you can come by Thursday.
See you soon!
Maria`,
        questions: [
          { type:'choice', q:'Why must Laura NOT tell Maria\'s sister?',
            opts:['Because she doesn\'t know her','Because it is a surprise party','Because the sister is not invited','Because Maria is shy'], a:1,
            exp:'Inference: "surprise for my sister" + "don\'t tell her" = the party is secret from the sister.' },
          { type:'choice', q:'What does Maria want Laura to bring?',
            opts:['A birthday card','A present','Food or drink','Decorations'], a:2,
            exp:'Direct reading but requires connecting "bring something to eat or drink".' },
          { type:'write', q:'What is the deadline for Laura to reply? Complete: By ___',
            a:'Thursday', exp:'"Let me know if you can come by Thursday" — deadline for RSVP.' },
          { type:'choice', q:'Maria writes this email to...',
            opts:['complain about something','invite a friend to a party','ask for directions','describe her sister'], a:1,
            exp:'Purpose of the text: invitation. Not just "what time" but WHY was it written.' },
          { type:'choice', q:'How does Maria feel about the party?',
            opts:['Nervous and worried','Excited and friendly','Bored and tired','Angry at her sister'], a:1,
            exp:'Tone inference: "Hi!" + "See you soon!" = positive, friendly tone. Not stated explicitly.' }
        ]
      }
    ],

    // ── A2 — Textos medianos, idea principal, vocabulario ──
    a2: [
      {
        id: 'read_a2_social_media', level: 'A2', title: 'Social Media & Young People',
        text: `More and more young people spend hours every day on social media. Studies show that teenagers check their phones up to 150 times a day. While social media helps people stay connected with friends, experts warn that spending too much time online can affect sleep, school performance, and mental health.

Some schools have introduced "phone-free" zones at lunchtime. Teachers say students talk more, eat better, and feel less stressed when phones are away. Not everyone agrees, however. Many teenagers argue that social media is how they communicate, and banning phones feels unfair.`,
        questions: [
          { type:'choice', q:'What is the MAIN IDEA of this text?',
            opts:['Social media is always bad for young people','Schools should ban all phones forever','Social media has both benefits and problems for young people','Teenagers use phones 150 times a day'], a:2,
            exp:'The main idea covers the whole text — not one detail. Both sides are presented.' },
          { type:'choice', q:'What does "phone-free zones" suggest about the schools?',
            opts:['They are banning phones permanently','They are trying a limited approach to reduce phone use','They have broken all the students\' phones','They only allow phones at lunchtime'], a:1,
            exp:'Inference: "zone" = limited area, "introduced" = new policy. Not a total ban.' },
          { type:'choice', q:'The word "warn" (paragraph 1) suggests the experts are...',
            opts:['celebrating a good thing','expressing happiness','advising about a potential danger','explaining a scientific discovery'], a:2,
            exp:'Vocabulary in context: warn = alert someone about a risk. Semantic inference.' },
          { type:'choice', q:'What is the teenagers\' argument AGAINST "phone-free" zones?',
            opts:['They need phones for school work','Social media is how they communicate','Phones help them sleep better','They want to call their parents'], a:1,
            exp:'Text evidence + paraphrase: "social media is how they communicate, and banning phones feels unfair".' },
          { type:'choice', q:'The writer\'s tone in this text is...',
            opts:['Clearly against social media','Strongly in favour of phones','Balanced — presenting both sides','Angry at teenagers'], a:2,
            exp:'Tone/stance: two paragraphs present opposite views without clear editorial position.' }
        ]
      }
    ],

    // ── B1 — Textos reales, propósito, implicación ─────────
    b1: [
      {
        id: 'read_b1_gig_economy_new', level: 'B1', title: 'The Gig Economy: Freedom or Trap?',
        text: `The so-called "gig economy" refers to a labour market where workers are hired for short-term tasks rather than permanent positions. Ride-sharing drivers, food delivery couriers, and freelance designers are all examples. Proponents argue that gig work offers unmatched flexibility — workers choose their own hours and work for multiple employers simultaneously.

Critics, however, point to the hidden costs: no sick pay, no pension contributions, no employment rights. When a delivery driver is injured, there is no safety net. A study by the TUC found that gig workers earn, on average, 40% less per hour than equivalent employees when unpaid waiting time is included.

The debate ultimately centres on a question the gig economy deliberately avoids answering: who bears the risk?`,
        questions: [
          { type:'choice', q:'What does the phrase "hidden costs" (paragraph 2) imply?',
            opts:['The costs are kept secret by employers','There are disadvantages that are not immediately obvious','The costs are paid in cash','Workers hide their earnings'], a:1,
            exp:'"Hidden" = not visible at first. Implication: the real downsides of gig work are not advertised.' },
          { type:'choice', q:'What is the writer\'s purpose in mentioning the injured delivery driver?',
            opts:['To show delivery is a dangerous job','To give a human example of the lack of worker protection','To argue that cyclists should wear helmets','To praise the gig economy\'s flexibility'], a:1,
            exp:'Rhetorical purpose: the specific example makes the abstract argument about "no safety net" concrete.' },
          { type:'choice', q:'What does the final question ("who bears the risk?") suggest?',
            opts:['The writer doesn\'t know the answer','The gig economy creates risk for everyone equally','The risk falls on workers, not companies','This is a question for economists to answer'], a:2,
            exp:'The rhetorical question implies the answer: workers bear the risk while companies avoid it.' },
          { type:'choice', q:'The TUC study is mentioned to...',
            opts:['support the proponents\' view','provide evidence for the critics\' argument','disprove the idea that gig workers are paid fairly','explain what the TUC is'], a:1,
            exp:'Evidence function: statistics serve the critical argument in paragraph 2.' },
          { type:'choice', q:'Which word best describes the writer\'s overall stance?',
            opts:['Neutral and objective','Sympathetic to gig workers','Hostile to all employers','Enthusiastic about flexibility'], a:1,
            exp:'The writer presents both sides but the final rhetorical question and word choice ("hidden costs", "deliberately avoids") reveal a critical lean.' },
          { type:'write', q:'According to the TUC study, gig workers earn ___ % less per hour than equivalent employees.',
            a:'40', exp:'Specific data retrieval: "40% less per hour when unpaid waiting time is included".' },
          { type:'choice', q:'What does "simultaneously" (paragraph 1) mean?',
            opts:['One after another','At the same time','Very quickly','In a different place'], a:1,
            exp:'Vocabulary in context: work for multiple employers simultaneously = at the same time.' }
        ]
      },
      {
        id: 'read_b1_habit_science', level: 'B1', title: 'The Science of Habits',
        text: `Habits are not a sign of weakness. They are the brain's way of saving energy. When we perform an action repeatedly, the brain begins to automate it — moving the behaviour from conscious decision-making to unconscious routine. This process, called "chunking", frees up mental resources for more demanding tasks.

The habit loop, popularised by journalist Charles Duhigg, consists of three stages: a cue (a trigger that starts the behaviour), a routine (the behaviour itself), and a reward (the positive outcome that reinforces the loop). Understanding this loop is the key to changing unwanted habits or building new ones.

Research shows that it takes, on average, 66 days — not the commonly cited 21 — to form a new habit. The duration depends heavily on the complexity of the behaviour and individual differences.`,
        questions: [
          { type:'choice', q:'According to the text, why does the brain form habits?',
            opts:['Because humans are lazy','To save mental energy for harder tasks','Because it cannot make conscious decisions','To help people relax'], a:1,
            exp:'Inference chain: automation → frees up mental resources → for more demanding tasks.' },
          { type:'choice', q:'What does the writer mean by "the commonly cited 21" (final paragraph)?',
            opts:['21 habits is the ideal number','Most people wrongly believe habits take 21 days to form','Duhigg suggested 21 days in his book','21 days is the correct scientific figure'], a:1,
            exp:'Contrast: "not the commonly cited 21" implies 21 days is a popular myth, contradicted by research.' },
          { type:'choice', q:'What is the function of the "reward" stage in the habit loop?',
            opts:['To start the habit','To make the behaviour automatic','To reinforce the loop and encourage repetition','To stop the habit forming'], a:2,
            exp:'Text evidence: "the positive outcome that reinforces the loop" — reinforcement function.' },
          { type:'write', q:'The process of moving behaviour from conscious to unconscious is called ___.',
            a:'chunking', exp:'Specific term from paragraph 1: "This process, called \'chunking\'".' },
          { type:'choice', q:'The phrase "not a sign of weakness" (first sentence) suggests...',
            opts:['habits are difficult to form','some people have a negative view of habits that the writer challenges','habits are unhealthy','the writer approves of all habits'], a:1,
            exp:'Discourse function: the writer anticipates and challenges a misconception in the opening.' }
        ]
      }
    ],

    // ── B2 — Textos complejos, evaluación crítica ──────────
    b2: [
      {
        id: 'read_b2_ai_creativity', level: 'B2', title: 'Can AI Be Truly Creative?',
        text: `The question of whether artificial intelligence can be "creative" hinges on what we mean by creativity itself. If creativity means producing outputs that are novel, surprising, and aesthetically pleasing to a human audience, then AI systems demonstrably meet this criterion — they compose music, generate paintings, and write poetry that humans frequently cannot distinguish from human-produced work.

However, this view confounds creativity with its product. Human creativity is inextricably bound to subjective experience, intentionality, and the struggle of expression. When a poet writes about grief, they draw on lived experience; when an AI generates a poem on the same theme, it is, at best, performing a sophisticated statistical interpolation across millions of human texts.

The philosophical stakes are higher than they appear. If we accept that AI is creative, we implicitly redefine creativity as an observable output — stripping it of its connection to consciousness and experience. This has consequences not only for how we value art, but for how we understand what it means to be human.`,
        questions: [
          { type:'choice', q:'What does "hinges on" (paragraph 1) mean in this context?',
            opts:['is unrelated to','depends entirely on','is in conflict with','provides evidence for'], a:1,
            exp:'Vocabulary in context: "hinges on" = depends on. The answer cannot be found without understanding the metaphor.' },
          { type:'choice', q:'The writer argues that defining creativity by its output is flawed because...',
            opts:['AI produces bad art','it ignores the role of consciousness and lived experience','humans cannot tell AI art from human art','creativity has no clear definition'], a:1,
            exp:'Paragraph 2 argument: confounding creativity with its product strips it of intentionality and experience.' },
          { type:'choice', q:'What does "statistical interpolation" (paragraph 2) imply about AI creativity?',
            opts:['AI is better than humans at statistics','AI creativity is genuine but different','AI output is pattern-based recombination, not true creative thought','AI cannot produce anything novel'], a:2,
            exp:'Implied critique: the phrase reduces AI output to mathematical recombination — not origination.' },
          { type:'choice', q:'What is the writer\'s PRIMARY concern in the final paragraph?',
            opts:['The economic impact on artists','The philosophical implications for our understanding of humanity','Whether AI art should be legal','The quality of AI-generated poetry'], a:1,
            exp:'The final paragraph escalates from art to identity: "what it means to be human" is the ultimate stake.' },
          { type:'choice', q:'Which best describes the writer\'s stance?',
            opts:['AI is definitely creative and humans should accept this','AI is not creative and its outputs are worthless','AI produces creative-seeming outputs, but this challenges how we define creativity itself','The debate is irrelevant and will resolve itself'], a:2,
            exp:'Nuanced stance: the writer acknowledges AI\'s outputs while questioning the redefinition of creativity.' },
          { type:'choice', q:'The word "implicitly" (paragraph 3) suggests that...',
            opts:['the redefinition is stated clearly in the text','people are aware they are redefining creativity','the redefinition happens without people necessarily realising it','the redefinition is wrong'], a:2,
            exp:'Implicitly = without explicitly saying so. The writer warns of an unnoticed conceptual shift.' },
          { type:'write', q:'According to paragraph 2, what is the key difference between human and AI creative expression?',
            a:'Human creativity draws on lived experience and intentionality while AI performs statistical interpolation across existing texts.',
            exp:'Synthesis question requiring paraphrase of both contrasted ideas in paragraph 2.' }
        ]
      }
    ],

    // ── C1 — Textos académicos, retórica, evaluación de argumento
    c1: [
      {
        id: 'read_c1_language_power', level: 'C1', title: 'Language as an Instrument of Power',
        text: `The relationship between language and power is not merely analogical — it is constitutive. Language does not simply reflect social hierarchies; it actively produces and reproduces them. The decision to elevate certain dialects as "standard" while relegating others to the status of "substandard" is never a neutral linguistic judgement but a political act, encoding class, ethnicity, and geography into the very architecture of what counts as educated speech.

Nowhere is this more apparent than in institutional settings. Judicial proceedings, medical consultations, and academic discourse all operate through linguistic registers that systematically advantage those who acquired them through cultural capital rather than formal instruction alone. Pierre Bourdieu termed this "symbolic violence": a form of domination that is all the more effective for being misrecognised as natural or inevitable.

To resist this, some linguists argue, requires not merely celebrating linguistic diversity in the abstract, but actively deconstructing the mechanisms by which certain forms of speech are legitimised. The challenge, however, is formidable: any intervention in linguistic norms risks both essentialising the communities it seeks to empower and inadvertently reinforcing the hierarchies it opposes.`,
        questions: [
          { type:'choice', q:'What does the writer mean by calling the relationship between language and power "constitutive"?',
            opts:['Language describes power relationships that already exist','Language actively creates and maintains power relationships','Language is a part of the constitution of a country','Language and power are unrelated'], a:1,
            exp:'"Constitutive" = forming/creating. The writer contrasts this with merely "reflecting" — language produces hierarchy, not just mirrors it.' },
          { type:'choice', q:'What is the rhetorical function of the phrase "never a neutral linguistic judgement"?',
            opts:['To define what a neutral judgement is','To challenge the assumption that standard language is objective','To praise the work of linguists','To argue that all dialects are equal'], a:1,
            exp:'Rhetorical move: pre-emptively refutes the counterargument that standardisation is apolitical.' },
          { type:'choice', q:'According to the text, what makes "symbolic violence" particularly effective?',
            opts:['It uses physical force','It is recognised and challenged openly','It is misrecognised as natural rather than as a form of domination','It operates only in judicial settings'], a:2,
            exp:'Key phrase: "all the more effective for being misrecognised as natural or inevitable." Power hides itself.' },
          { type:'choice', q:'What tension does the final paragraph identify?',
            opts:['Linguists disagree about the definition of symbolic violence','Interventions in language risk both essentialising communities and reinforcing hierarchies','It is impossible to change language norms','Bourdieu\'s theory has been disproved'], a:1,
            exp:'The paradox: celebrating diversity may inadvertently essentialize; reforming norms may reinforce the logic of norms.' },
          { type:'choice', q:'The word "formidable" (final paragraph) suggests the writer believes the challenge of linguistic resistance is...',
            opts:['impossible','easy with the right tools','significant and not easily overcome','overstated by linguists'], a:2,
            exp:'Formidable = very large/difficult — the writer acknowledges the resistance without dismissing it.' },
          { type:'choice', q:'Which of the following best describes the writer\'s overall argument?',
            opts:['Standard language should be abolished','Language is a neutral tool for communication','Language is a site of political power, and resisting that power is both necessary and deeply complex','Bourdieu\'s theory explains all language inequalities'], a:2,
            exp:'Full synthesis: language as power + resistance is necessary + resistance is paradoxically difficult.' },
          { type:'write', q:'In your own words, explain what Bourdieu meant by "symbolic violence" as described in the text.',
            a:'A form of domination exercised through language that is accepted as natural rather than recognised as a power structure.',
            exp:'Requires paraphrase + compression of the concept — not direct quotation.' }
        ]
      }
    ]
  };

  // ============================================================
  // BLOQUE 2 — VOCAB: EJERCICIOS DE PRODUCCIÓN ACTIVA
  // Cada tópico recibe 6 ejercicios propios:
  // fill-in-blank contextual · collocation · error detection
  // · word family · register · sentence completion
  // ============================================================

  const vocabProductionExercises = {

    // ── A1: Daily Routines ──────────────────────────────────
    daily_routines_a1: [
      { type:'fill', q:'I ___ up at 7 am. Then I ___ a shower before breakfast.',
        blanks:['wake','have'], exp:'wake up = levantarse de la cama. have a shower = ducharse (not "take a shower" in British English).' },
      { type:'choice', q:'Which collocation is WRONG?',
        opts:['have breakfast','do breakfast','cook dinner','skip lunch'], a:1,
        exp:'"Do breakfast" is not natural English. The correct collocation is HAVE breakfast.' },
      { type:'write', q:'Complete the sentence naturally: "I ___ (not/have) time for breakfast on Mondays. I ___ (rush) to work."',
        a:"don't have / rush", exp:'Present simple negative + present simple for routine.' },
      { type:'choice', q:'"She always ___ social media before bed." Which word fits best?',
        opts:['makes','does','checks','runs'], a:2,
        exp:'Collocation: CHECK social media. Not "make" or "do" or "run".' },
      { type:'fill', q:'He ___ work at 5 pm and then ___ to the gym.',
        blanks:['finishes','goes'], exp:'finish work (not "end work"). go to the gym (movement verb).' },
      { type:'choice', q:'Which sentence uses "rush" correctly?',
        opts:['I rush my breakfast every morning.','I am rush to work.','I always rush in the morning.','I rush have a shower.'], a:2,
        exp:'Rush = to hurry. "I always rush in the morning" is grammatically correct.' }
    ],

    // ── A1: Emotions ────────────────────────────────────────
    emotions_a1: [
      { type:'choice', q:'"She was ___ because she failed the test." Which word is NOT appropriate?',
        opts:['disappointed','devastated','embarrassed','confident'], a:3,
        exp:'Confident = positive feeling. The other options all match the context of failure/negative outcome.' },
      { type:'fill', q:'I feel ___ about my presentation tomorrow. I\'m not sure I\'m ready.',
        blanks:['nervous'], exp:'Nervous + about = anxiety about a specific future event. Correct preposition.' },
      { type:'write', q:'Use the word "relieved" correctly in a sentence about an exam result.',
        a:'I was relieved when I found out I had passed the exam.', exp:'Relieved + when + positive outcome. "Relief" after tension resolves.' },
      { type:'choice', q:'What is the difference between "lonely" and "alone"?',
        opts:['"Lonely" means physically by yourself; "alone" means sad','They mean exactly the same thing','"Alone" is physical; "lonely" is emotional — you can be alone without feeling lonely','Both describe negative feelings only'], a:2,
        exp:'Critical distinction: alone = physical state (no people nearby). Lonely = emotional state (feeling of isolation). You can be alone and happy, or in a crowd and lonely.' },
      { type:'fill', q:'He was ___ of his daughter for winning the competition.',
        blanks:['proud'], exp:'Proud OF (not "proud about" or "proud for"). Fixed preposition collocation.' },
      { type:'choice', q:'Which sentence is CORRECT?',
        opts:['I am very boring today.','I am very bored today.','I feel bore today.','I am boredom today.'], a:1,
        exp:'"Bored" describes the person\'s feeling. "Boring" describes the thing that causes the feeling (a boring film, not a boring person — unless they are dull).' }
    ],

    // ── B1: Work & Professional Life ────────────────────────
    work_employment_b1: [
      { type:'fill', q:'She ___ for three jobs last week and already has two ___ scheduled.',
        blanks:['applied','interviews'], exp:'Apply FOR a job. Interview = the meeting — countable noun.' },
      { type:'choice', q:'Which collocation is CORRECT?',
        opts:['do a deadline','meet a deadline','take a deadline','give a deadline'], a:1,
        exp:'MEET a deadline = complete work on time. You can also MISS a deadline (fail to meet it).' },
      { type:'write', q:'Transform: "Many workers now work from home." Use the word "remote" in a different structure.',
        a:'Remote working has become increasingly common.', exp:'Nominalisation: "remote working" as subject. Restructuring avoids repetition.' },
      { type:'choice', q:'"My workload has increased since my colleague left." What does "workload" mean?',
        opts:['The weight of a work bag','The amount of work someone has to do','A type of truck used at work','The salary someone earns'], a:1,
        exp:'Workload = total amount of work. Increase in workload = more to do, not physically heavier.' },
      { type:'fill', q:'I have a meeting with a ___ tomorrow. We need to discuss their project.',
        blanks:['client'], exp:'Client = external person/company that buys your services. Colleague = someone you work with internally.' },
      { type:'choice', q:'"She handed in her ___." Which word means she officially left the company?',
        opts:['CV','notice / resignation','contract','feedback'], a:1,
        exp:'Hand in your notice/resignation = formal act of leaving a job. CV = document; contract = agreement.' },
      { type:'write', q:'Error correction: "She was do redundant when the company closed her department."',
        a:'She was MADE redundant when the company closed her department.', exp:'Fixed phrase: BE MADE redundant (not "be done redundant").' }
    ],

    // ── B1: Environment ─────────────────────────────────────
    environment_b1: [
      { type:'choice', q:'"The company has pledged to ___ its carbon footprint by 50% by 2030."',
        opts:['increase','reduce','make','create'], a:1,
        exp:'Reduce your carbon footprint = lower your environmental impact. Increase = wrong direction.' },
      { type:'fill', q:'Deforestation destroys the natural ___ of many animals, leaving them nowhere to live.',
        blanks:['habitat'], exp:'Habitat = the natural environment where an animal lives. Not "house" or "home".' },
      { type:'write', q:'Rewrite using "despite": "There was heavy rain. The protesters continued their demonstration."',
        a:'Despite the heavy rain, the protesters continued their demonstration.',
        exp:'Despite + noun phrase (not clause). "Despite the heavy rain" not "despite it was raining".' },
      { type:'choice', q:'Which word means "to become gradually used to something new"?',
        opts:['sustainable','renewable','adapt','emit'], a:2,
        exp:'Adapt = to change/adjust to a new situation. Key word in climate change discourse.' },
      { type:'fill', q:'We need to ___ from fossil fuels and ___ in renewable energy.',
        blanks:['move away','invest'], exp:'Move away from + verb phrase. Invest IN + noun.' },
      { type:'choice', q:'What is the difference between "pollution" and "emissions"?',
        opts:['They mean exactly the same thing','Pollution is the harmful result; emissions are the gases/substances released that cause it','Emissions are visible; pollution is not','Pollution only refers to water'], a:1,
        exp:'Technical distinction: emissions = what is released (CO2, etc.); pollution = the broader harmful contamination of environment.' }
    ],

    // ── B2: Critical Thinking ───────────────────────────────
    critical_thinking_b2: [
      { type:'fill', q:'The researcher was careful to ___ that the study\'s findings were preliminary.',
        blanks:['acknowledge'], exp:'Acknowledge = formally recognise/admit. Academic register: "acknowledge limitations".' },
      { type:'choice', q:'Which sentence hedges the claim most effectively for academic writing?',
        opts:['Social media causes depression in teenagers.','There is conclusive proof that social media causes depression.','Research suggests that social media may be associated with increased rates of depression among teenagers.','Everyone knows social media is bad for mental health.'], a:2,
        exp:'"Research suggests" + "may be" + "associated with" = three hedging devices. The others are overstatements.' },
      { type:'write', q:'Transform using nominalisation: "Scientists decided to investigate the phenomenon." →\n"The scientists\' ___ of the phenomenon was thorough."',
        a:'investigation', exp:'Decide → decision; investigate → investigation. Nominalisation creates formal academic style.' },
      { type:'choice', q:'"That argument rests on a false ___." Which word completes this?',
        opts:['argument','assumption','evidence','claim'], a:1,
        exp:'Assumption = unstated belief treated as true. Arguments "rest on" assumptions. Fixed collocation.' },
      { type:'fill', q:'The report provides strong ___ that the policy has failed. The ___ are difficult to ignore.',
        blanks:['evidence','implications'], exp:'Evidence (uncountable) + strong. Implications = consequences (countable plural).' },
      { type:'choice', q:'What does "nuanced" mean?',
        opts:['Simple and clear','Taking account of subtle differences and complexity','Strongly in favour of one position','Based on statistical data'], a:1,
        exp:'Nuanced = showing awareness of complexity. "A nuanced argument" considers multiple perspectives and qualifications.' }
    ],

    // ── C1: Rhetoric & Persuasion ────────────────────────────
    rhetoric_persuasion_c1: [
      { type:'fill', q:'The politician\'s speech was full of empty ___. It sounded impressive but contained no concrete proposals.',
        blanks:['rhetoric'], exp:'Empty rhetoric = persuasive language with no substance. Collocates: powerful, empty, political rhetoric.' },
      { type:'write', q:'Rewrite more formally using "pervasive": "Social media\'s influence is everywhere now."',
        a:"Social media's pervasive influence is now impossible to ignore.", exp:'Pervasive = present everywhere. More formal + precise than "everywhere".' },
      { type:'choice', q:'"The data is preliminary; ___, firm conclusions would be premature."',
        opts:['as a result','therefore','as such','however'], a:2,
        exp:'"As such" = in consequence of this (logical/formal). "Therefore" also works but "as such" is more C1-appropriate here.' },
      { type:'choice', q:'What does "ostensibly" mean?',
        opts:['Clearly and openly','Apparently, but perhaps not actually','Certainly and without doubt','In a complicated way'], a:1,
        exp:'Ostensibly = apparently/seemingly (implies hidden reality may differ). "Ostensibly designed to help the poor" suggests it may not.' },
      { type:'fill', q:'The scandal acted as a ___ for major reform. Without it, nothing would have changed.',
        blanks:['catalyst'], exp:'Catalyst = trigger that causes a reaction. "Act as a catalyst FOR change" — fixed collocation.' },
      { type:'write', q:'Use "unprecedented" in a sentence about a recent global event.',
        a:'The COVID-19 pandemic caused unprecedented disruption to global supply chains.',
        exp:'Unprecedented = never seen before. High-frequency in formal/journalistic contexts.' },
      { type:'choice', q:'"The situation remains ___." Which C1 word means "unpredictable and likely to change suddenly"?',
        opts:['tangible','volatile','pragmatic','pervasive'], a:1,
        exp:'Volatile = liable to change rapidly. "Volatile markets", "volatile political situation". From chemistry metaphor.' }
    ]
  };

  // ============================================================
  // BLOQUE 3 — GRAMÁTICA B2/C1: MÁS TRANSFORM + ERROR
  // Reemplazar choice por producción activa
  // ============================================================

  const grammarProductionB2 = {
    id: 'grammar_production_b2', level: 'B2',
    title: 'B2 Grammar: Transform & Error Correction',
    icon: 'edit', color: '#7C3AED',
    theory: `<h3>Producción activa: transforma y corrige</h3>
    <p>A partir de B2, los exámenes reales (Cambridge B2 First) priorizan la transformación de oraciones y la corrección de errores sobre la selección múltiple. Estos ejercicios entrenan esa habilidad.</p>`,
    exercises: [
      // TRANSFORM exercises
      { type:'write', q:'TRANSFORM: Use "wish" + past perfect.\n"I didn\'t save her number." →\n"I wish I ___."',
        a:'had saved her number', exp:'Wish + past perfect = regret about past action.' },
      { type:'write', q:'TRANSFORM: Make passive.\n"They have cancelled all flights." →\n"All flights ___."',
        a:'have been cancelled', exp:'Present perfect passive: have/has been + past participle.' },
      { type:'write', q:'TRANSFORM: Use "despite".\n"She was exhausted. She finished the race." →',
        a:'Despite being exhausted, she finished the race.', exp:'Despite + gerund (not despite + clause).' },
      { type:'write', q:'TRANSFORM: Reported speech.\n"I will call you tomorrow," he said. →\n"He said he ___ the next day."',
        a:'would call me', exp:'Will → would. Tomorrow → the next day. Pronouns shift: you → me.' },
      { type:'write', q:'TRANSFORM: Use "not only...but also".\n"She speaks French. She also speaks Mandarin." →',
        a:'Not only does she speak French but she also speaks Mandarin.', exp:'Inversion after "Not only": does she (not "she does").' },
      { type:'write', q:'TRANSFORM: Use "had something done".\n"A stylist cut her hair before the event." →\n"She ___ before the event."',
        a:'had her hair cut', exp:'Causative: had + object + past participle. She didn\'t cut it herself.' },
      { type:'write', q:'TRANSFORM: Conditional inversion.\n"If he had arrived earlier, he would have seen her." →\n"___ he arrived earlier, he would have seen her."',
        a:'Had', exp:'Formal inversion: Had + subject + pp (remove "if").' },
      // ERROR CORRECTION
      { type:'error', q:'Find and correct ALL errors (there may be 1 or 2):\n"She suggested to go to the cinema, but I insisted that we should stayed home."',
        a:'suggested going (not "to go") / should stay (not "stayed")', exp:'Suggest + gerund (not infinitive). Should + base form (not past).' },
      { type:'error', q:'Correct the error:\n"Despite of the rain, the match continued."',
        a:'Despite the rain (remove "of")', exp:'"Despite" does NOT take "of". In spite OF is the preposition. "Despite" stands alone.' },
      { type:'error', q:'Correct the error:\n"The data shows that less people are voting now."',
        a:'"fewer" people (not "less")', exp:'People is countable: FEWER people. Less is for uncountable nouns (less water, less time).' },
      { type:'error', q:'Correct the error:\n"He was made to felt unwelcome by his colleagues."',
        a:'"feel" (not "felt")', exp:'Make someone feel: passive "was made to feel" — to + base form, never past form.' },
      { type:'error', q:'Find the error:\n"I wish I would have studied harder at school."',
        a:'"had studied" (not "would have studied")', exp:'Wish + past perfect (NOT wish + would have). Common mistake.' },
      { type:'error', q:'Correct:\n"Not only she finished first, but she also broke the record."',
        a:'"Not only DID she finish" (not "she finished")', exp:'Inversion required after "Not only" at start of sentence.' }
    ]
  };

  const grammarProductionC1 = {
    id: 'grammar_production_c1', level: 'C1',
    title: 'C1 Grammar: Advanced Production',
    icon: 'feather', color: '#0D9488',
    theory: `<h3>C1: producción sin red de seguridad</h3>
    <p>En C1 no hay opciones. Cada ejercicio exige que generes la forma correcta desde cero, como en Cambridge C1 Advanced Paper 1 Use of English.</p>`,
    exercises: [
      { type:'write', q:'WORD FORMATION: Complete with correct form of DECIDE.\n"The board\'s ___ to cut funding caused widespread protest."',
        a:'decision', exp:'Decision (n) = the choice made. "The board\'s decision" uses possessive + nominalisation.' },
      { type:'write', q:'WORD FORMATION: Complete with correct form of INVESTIGATE.\n"The ___ into the company\'s finances took two years."',
        a:'investigation', exp:'Investigation = the process/action of investigating. Countable noun here.' },
      { type:'write', q:'TRANSFORM (inversion):\n"I have never met such a generous person." →\n"Never ___ such a generous person."',
        a:'have I met', exp:'Inversion after negative adverbial: Never + auxiliary + subject + verb.' },
      { type:'write', q:'TRANSFORM (cleft):\n"Her voice won the audience over." →\n"It was ___ that won the audience over."',
        a:'her voice', exp:'Cleft: It was + emphasised element + that + rest of clause.' },
      { type:'write', q:'TRANSFORM (mixed conditional):\n"I didn\'t study medicine. I\'m not a doctor now." →\n"If I ___, I ___ a doctor now."',
        a:'had studied medicine / would be', exp:'Past condition (had + pp) → present result (would + base). Mixed conditional.' },
      { type:'write', q:'OPEN CLOZE: Choose ONE word.\n"The policy is ___ designed to help the poor, yet it primarily benefits corporations."',
        a:'ostensibly', exp:'Ostensibly = apparently but perhaps not actually. C1 hedging vocabulary.' },
      { type:'error', q:'C1 ERROR CORRECTION: Find all errors (1-3):\n"Rarely the government has taken such decisive action, and seldom has public opinion been so unanimous in its support."',
        a:'"Rarely HAS the government taken" (inversion after rarely)', exp:'Inversion required after rarely/seldom/never/hardly. The second clause "seldom has" is correct.' },
      { type:'error', q:'Correct:\n"The research would seem suggesting that early intervention is more effective."',
        a:'"would seem TO suggest" (not "suggesting")', exp:'Seem + to + infinitive. Not "seem + gerund".' },
      { type:'error', q:'Correct:\n"What surprised me was the complete of silence in the room."',
        a:'"complete silence" (no "of" — not a nominalisation here)', exp:'Complete silence = adjective + noun. "Completeness of the silence" would need different structure.' },
      { type:'write', q:'REGISTER SHIFT — Make formal:\n"A lot of people think the law is unfair."',
        a:'A considerable number of people regard the legislation as inequitable.', exp:'Formal register: "considerable number", "regard as", "legislation" (not "law"), "inequitable".' },
      { type:'write', q:'PARAPHRASE using "despite the fact that":\n"Although the results were inconclusive, the team published their findings."',
        a:'Despite the fact that the results were inconclusive, the team published their findings.', exp:'"Despite the fact that" + clause (unlike "despite" + noun/gerund).' },
      { type:'write', q:'SYNTHESIS: Combine into ONE sentence using a participle clause:\n"She had studied for months. She approached the exam with confidence."',
        a:'Having studied for months, she approached the exam with confidence.',
        exp:'Having + past participle = completed action before the main clause. Formal/literary style.' }
    ]
  };

  // ============================================================
  // INTEGRACIÓN — fusionar todo con datos existentes
  // ============================================================

  function mergeAll() {

    // ── 1. Reading: añadir textos con inferencia a los niveles
    if (window.readingTexts || window.readingData) {
      const rData = window.readingTexts || window.readingData;
      Object.entries(readingExpanded).forEach(([level, texts]) => {
        texts.forEach(text => {
          if (!rData[level]) rData[level] = [];
          const exists = rData[level].some(t => t.id === text.id);
          if (!exists) rData[level].push(text);
        });
      });
    }

    // Exponer como global para acceso directo
    window.readingExpandedTexts = readingExpanded;

    // ── 2. Vocab: añadir ejercicios de producción a los tópicos
    if (window.vocabTopics && Array.isArray(window.vocabTopics)) {
      window.vocabTopics.forEach(topic => {
        const exercises = vocabProductionExercises[topic.id];
        if (exercises && !topic.productionExercises) {
          topic.productionExercises = exercises;
        }
      });
    }
    window.vocabProductionExercises = vocabProductionExercises;

    // ── 3. Grammar: registrar módulos de producción B2/C1
    if (window.modulesData) {
      if (!window.modulesData[grammarProductionB2.id])
        window.modulesData[grammarProductionB2.id] = grammarProductionB2;
      if (!window.modulesData[grammarProductionC1.id])
        window.modulesData[grammarProductionC1.id] = grammarProductionC1;
    } else {
      window.modulesData = {
        [grammarProductionB2.id]: grammarProductionB2,
        [grammarProductionC1.id]: grammarProductionC1
      };
    }

    // Añadir a learning path
    if (window.grammarLearningPath) {
      ['b2','c1'].forEach(lvl => {
        const mod = lvl === 'b2' ? grammarProductionB2 : grammarProductionC1;
        if (!window.grammarLearningPath[lvl])
          window.grammarLearningPath[lvl] = [];
        const exists = window.grammarLearningPath[lvl].some(m => m.id === mod.id);
        if (!exists)
          window.grammarLearningPath[lvl].push({ id: mod.id, title: mod.title, level: mod.level, type: 'grammar' });
      });
    }

    console.log('[LeoEnglish] Exercises expanded:',
      `Reading: ${Object.values(readingExpanded).flat().length} new texts`,
      `| Vocab production: ${Object.keys(vocabProductionExercises).length} topics`,
      `| Grammar production: 2 new modules (B2+C1)`
    );
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mergeAll);
  } else {
    mergeAll();
  }

})();
