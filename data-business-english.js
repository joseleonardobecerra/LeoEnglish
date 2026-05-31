// data-business-english.js v1.0 — LEOENGLISH · BUSINESS ENGLISH (opcional por nivel)
// Sección de inglés de negocios según el MCER — Capítulo 4.1.2 "Uso de la lengua con fines especiales"
// Se integra como módulos opcionales en cada nivel B1/B2/C1

(function () {
  'use strict';

  const businessModules = {

    // ================================================================== //
    //  BUSINESS ENGLISH B1 — 6 módulos opcionales                        //
    // ================================================================== //

    be_b1_emails: {
      id: 'be_b1_emails', level: 'B1', section: 'business',
      title: 'Business Emails B1', icon: 'mail', color: '#0891B2',
      cefrRef: 'MCER Cap. 4.4.3.2 — Interacción escrita B1 + Cap. 4.1.2 Lengua con fines específicos',
      learningGoal: 'Redactar emails profesionales claros con apertura, cuerpo y cierre formales apropiados.',
      canDo: [
        'I can write a clear professional email to request or provide information.',
        'I can open and close a business email correctly (formal/semi-formal).',
        'I can politely decline, apologise and reschedule in writing.'
      ],
      theory: `
        <h3>Business Emails — B1</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#0891B2;background:#ECFEFF">
            <strong style="color:#164E63">Estructura del email profesional</strong>
            <small>
              <b>Subject line:</b> breve y específico<br>
              "RE: Meeting Thursday 14 March"<br><br>
              <b>Opening:</b><br>
              Dear Mr/Ms + apellido (formal)<br>
              Dear + nombre (semi-formal)<br>
              Hi + nombre (informal/interno)<br><br>
              <b>Opening line:</b><br>
              "I am writing to enquire about..."<br>
              "Further to our conversation..."<br>
              "With reference to your email of..."
            </small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong style="color:#4C1D95">Frases clave por función</strong>
            <small>
              <b>Solicitar:</b> "Could you please send me...?"<br>
              <b>Informar:</b> "I am pleased to inform you that..."<br>
              <b>Disculparse:</b> "I apologise for any inconvenience."<br>
              <b>Confirmar:</b> "I am writing to confirm our meeting..."<br>
              <b>Adjuntar:</b> "Please find attached..."<br>
              <b>Cerrar:</b> "I look forward to hearing from you."<br>
              Yours sincerely (si sabes el nombre)<br>
              Yours faithfully (si no sabes el nombre)
            </small>
          </div>
        </div>`,
      exercises: [
        { type: 'choice', q: 'Which is the correct formal email opening when you know the recipient\'s name?', opts: ['Hey John,', 'Dear Mr Smith,', 'Hello there,'], a: 'Dear Mr Smith,', exp: '"Dear Mr/Ms + surname" is the standard formal opening.' },
        { type: 'write', q: 'Complete: I am writing ___ (enquire) about the position advertised on your website.', a: 'to enquire', exp: '"I am writing to + infinitive" is a standard formal email opener.' },
        { type: 'choice', q: 'Which phrase correctly attaches a document?', opts: ['I am sending you a file.', 'Please find attached the report.', 'Here is the document.'], a: 'Please find attached the report.', exp: '"Please find attached" is the standard formal phrase for attachments.' },
        { type: 'write', q: 'Complete: I ___ (apologise) for the delay in responding to your email.', a: 'apologise', exp: '"I apologise for" is the formal British spelling for apologies.' },
        { type: 'order', q: 'Order the email closing:', words: ['I', 'look', 'forward', 'to', 'hearing', 'from', 'you.'], a: 'I look forward to hearing from you.', exp: '"Look forward to + gerund" is the standard professional email closing.' },
        { type: 'choice', q: 'You don\'t know the recipient\'s name. Which closing is correct?', opts: ['Yours sincerely,', 'Yours faithfully,', 'Best regards,'], a: 'Yours faithfully,', exp: 'UK convention: "Yours faithfully" when you don\'t know the name; "Yours sincerely" when you do.' },
        { type: 'write', q: 'Complete the subject line for an email confirming a meeting: RE: ___ — Thursday 15 March, 10am', a: 'Meeting Confirmation', exp: 'Subject lines should be brief, specific and in title case.' },
        { type: 'choice', q: 'Which phrase politely requests a response by a deadline?', opts: ['Reply soon.', 'I would appreciate your response by Friday 20 March.', 'Get back to me.'], a: 'I would appreciate your response by Friday 20 March.', exp: '"I would appreciate" is polite and formal for deadline requests.' },
        { type: 'write', q: 'Complete: Further ___ our telephone conversation this morning, I am writing to confirm...', a: 'to', exp: '"Further to + noun phrase" refers back to previous communication.' },
        { type: 'order', q: 'Order this apology sentence:', words: ['We', 'apologise', 'for', 'any', 'inconvenience', 'caused.'], a: 'We apologise for any inconvenience caused.', exp: 'Standard formal apology formula in business correspondence.' },
        { type: 'choice', q: 'Which phrase correctly introduces the purpose of a formal email?', opts: ['I\'m emailing because...', 'I am writing with reference to your advertisement.', 'So, about the job...'], a: 'I am writing with reference to your advertisement.', exp: '"I am writing with reference to" is a standard formal email opener.' },
        { type: 'write', q: 'Complete: Please ___ (not hesitate) to contact me if you require any further information.', a: 'do not hesitate', exp: '"Please do not hesitate to contact me" is a standard formal closing offer.' },
        { type: 'choice', q: 'Which is the most appropriate subject line for a complaint?', opts: ['PROBLEM!!!', 'Complaint Regarding Invoice #4521', 'Issue'], a: 'Complaint Regarding Invoice #4521', exp: 'Specific subject lines including reference numbers are best practice.' },
        { type: 'write', q: 'Complete: I would like to ___ (reschedule) our meeting. Would Thursday 20 March be convenient?', a: 'reschedule', exp: '"Reschedule" is the formal term for changing a meeting time.' },
        { type: 'order', q: 'Order this request:', words: ['Could', 'you', 'please', 'send', 'me', 'the', 'updated', 'price', 'list?'], a: 'Could you please send me the updated price list?', exp: '"Could you please + verb" is the standard polite request formula.' },
        { type: 'choice', q: 'Which phrase correctly confirms receipt of an email?', opts: ['Got it.', 'Thank you for your email of 12 March regarding...', 'Yes, I read it.'], a: 'Thank you for your email of 12 March regarding...', exp: 'Formal acknowledgement references the date and subject of the email received.' },
        { type: 'write', q: 'Complete: I am ___ (please) to inform you that your application has been successful.', a: 'pleased', exp: '"I am pleased to inform you" is a standard formal phrase for good news.' },
        { type: 'choice', q: 'Which CC email practice is correct?', opts: ['CC everyone always', 'CC only those who need to be kept informed', 'Never CC anyone'], a: 'CC only those who need to be kept informed', exp: 'Professional practice: CC only relevant stakeholders to avoid inbox clutter.' },
        { type: 'write', q: 'Complete: We regret to ___ (inform) you that the event has been postponed.', a: 'inform', exp: '"We regret to inform you" is the formal phrase for delivering bad news.' },
        { type: 'order', q: 'Order the email:', words: ['Dear', 'Ms', 'Reyes,', 'I', 'writing', 'am', 'to', 'enquire', 'about', 'the', 'vacancy.'], a: 'Dear Ms Reyes, I am writing to enquire about the vacancy.', exp: 'Opening: salutation + formal purpose statement.' }
      ],
      communicativeTask: { title: 'Write a professional email', instruction: 'Write a complete professional email (opening, body, closing) responding to a job advertisement for a marketing position. Include: reference to the ad, your relevant experience, and a request for an interview.', output: 'Full professional email (120–150 words).' }
    },

    be_b1_meetings: {
      id: 'be_b1_meetings', level: 'B1', section: 'business',
      title: 'Meetings & Discussions B1', icon: 'users', color: '#059669',
      cefrRef: 'MCER Cap. 4.4.3.1 — Interacción oral B1 + Conversación formal',
      learningGoal: 'Participar en reuniones de trabajo usando frases para tomar la palabra, pedir aclaraciones y llegar a acuerdos.',
      canDo: ['I can follow the main points of meetings on familiar topics.', 'I can express my opinion and ask for clarification politely.', 'I can agree, disagree and make suggestions in a meeting context.'],
      theory: `
        <h3>Meetings & Discussions — B1</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#059669;background:#ECFDF5">
            <strong>Funciones clave en reuniones</strong>
            <small>
              <b>Tomar la palabra:</b> "Could I just add something here?"<br>
              <b>Pedir aclaración:</b> "Could you clarify what you mean by...?"<br>
              <b>Estar de acuerdo:</b> "That's a good point." / "I agree with..."<br>
              <b>Disentir:</b> "I'm not sure about that." / "I see it differently."<br>
              <b>Hacer propuestas:</b> "Why don't we...?" / "How about...?"<br>
              <b>Resumir:</b> "So, to summarise..." / "What we've agreed is..."
            </small>
          </div>
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong>Agenda típica de reunión</strong>
            <small>
              1. Opening: "Let's get started." / "Shall we begin?"<br>
              2. Minutes: "Does everyone agree with the minutes?"<br>
              3. Agenda items: "Moving on to the next point..."<br>
              4. AOB: "Any other business?"<br>
              5. Close: "I think that covers everything." / "Let's wrap up."
            </small>
          </div>
        </div>`,
      exercises: [
        { type: 'choice', q: 'How do you politely interrupt in a meeting?', opts: ['Wait, I want to speak.', 'Could I just add something here?', 'Stop, I have a point.'], a: 'Could I just add something here?', exp: '"Could I just add..." is the standard polite formula for taking the floor.' },
        { type: 'write', q: 'Complete: ___ we begin? I think everyone is here.', a: 'Shall', exp: '"Shall we begin?" is the standard meeting opener.' },
        { type: 'choice', q: 'How do you ask for clarification professionally?', opts: ['What do you mean?', 'Could you clarify what you mean by "restructuring"?', 'I don\'t understand.'], a: 'Could you clarify what you mean by "restructuring"?', exp: '"Could you clarify what you mean by + term" is the professional clarification formula.' },
        { type: 'write', q: 'Complete: Moving ___ to the next item on the agenda — quarterly results.', a: 'on', exp: '"Moving on to" transitions between agenda items.' },
        { type: 'order', q: 'Order the disagreement:', words: ['I', 'see', 'your', 'point,', 'but', 'I\'m', 'not', 'convinced', 'this', 'is', 'the', 'best', 'approach.'], a: 'I see your point, but I\'m not convinced this is the best approach.', exp: 'Polite disagreement: acknowledge + "but" + alternative view.' },
        { type: 'choice', q: 'How do you make a suggestion in a meeting?', opts: ['Do this.', 'Why don\'t we consider a phased rollout?', 'I suggest.'], a: 'Why don\'t we consider a phased rollout?', exp: '"Why don\'t we + verb?" is a collaborative, low-pressure suggestion formula.' },
        { type: 'write', q: 'Complete: So, to ___ what we\'ve discussed: we\'ll proceed with Option B.', a: 'summarise', exp: '"To summarise" signals the end of a discussion point.' },
        { type: 'choice', q: 'Which phrase best closes a meeting?', opts: ['OK that\'s it, bye.', 'I think that covers everything. Thank you all for attending.', 'We\'re done.'], a: 'I think that covers everything. Thank you all for attending.', exp: 'Professional meeting close: summary statement + thanks.' },
        { type: 'write', q: 'Complete: Does anyone have any ___ business before we close?', a: 'other', exp: '"Any other business" (AOB) is the standard agenda item for additional topics.' },
        { type: 'choice', q: 'How do you agree enthusiastically but professionally?', opts: ['Yes!!!', 'I think that\'s an excellent point.', 'True.'], a: 'I think that\'s an excellent point.', exp: '"I think that\'s an excellent point" agrees with appropriate professional warmth.' },
        { type: 'write', q: 'Complete: Could I just come back to the point about ___ (budget) for a moment?', a: 'the budget', exp: '"Could I just come back to..." returns to an earlier discussion point.' },
        { type: 'order', q: 'Order the action point:', words: ['So,', 'Maria', 'will', 'send', 'the', 'report', 'by', 'Friday', '5pm.'], a: 'So, Maria will send the report by Friday 5pm.', exp: 'Action points: person + will + task + deadline.' },
        { type: 'choice', q: 'Which phrase asks for others\' opinions?', opts: ['What do you all think about this proposal?', 'Tell me what you think.', 'Your opinions?'], a: 'What do you all think about this proposal?', exp: '"What do you all think about...?" is an inclusive, open question for group discussion.' },
        { type: 'write', q: 'Complete: What we\'ve ___ (agree) is to postpone the launch until Q3.', a: 'agreed', exp: '"What we\'ve agreed is..." summarises a decision.' },
        { type: 'choice', q: 'How do you politely say you ran out of time?', opts: ['We\'re late.', 'I\'m afraid we\'re running out of time on this item.', 'Time\'s up!'], a: 'I\'m afraid we\'re running out of time on this item.', exp: '"I\'m afraid we\'re running out of time" is polite and professional.' },
        { type: 'write', q: 'Complete: I\'d like to put forward a ___ (propose) that we increase the marketing budget by 10%.', a: 'proposal', exp: '"Put forward a proposal" is the formal meeting term for making a suggestion.' },
        { type: 'order', q: 'Order the agenda opener:', words: ['Let\'s', 'get', 'started.', 'The', 'first', 'item', 'on', 'the', 'agenda', 'is', 'the', 'Q3', 'results.'], a: 'Let\'s get started. The first item on the agenda is the Q3 results.', exp: 'Meeting opener + first agenda item.' },
        { type: 'choice', q: 'How do you defer a topic for later?', opts: ['Let\'s talk about this another time.', 'Perhaps we could table this for the next meeting.', 'Skip it.'], a: 'Perhaps we could table this for the next meeting.', exp: '"Table this for the next meeting" defers a topic politely and formally.' },
        { type: 'write', q: 'Complete: I\'m not ___ (convince) we have enough data to make this decision yet.', a: 'convinced', exp: '"I\'m not convinced" expresses polite but clear disagreement with a proposal.' },
        { type: 'order', q: 'Order the minute summary:', words: ['The', 'minutes', 'of', 'the', 'last', 'meeting', 'were', 'approved', 'without', 'amendment.'], a: 'The minutes of the last meeting were approved without amendment.', exp: 'Minutes approval is a standard agenda item at the start of meetings.' }
      ],
      communicativeTask: { title: 'Run a meeting', instruction: 'Write or role-play a 5-minute team meeting agenda with: opening, 2 agenda items (budget review + new project proposal), AOB and close. Include at least 3 different meeting functions.', output: 'Written meeting script or role-play.' }
    },

    be_b1_presentations: {
      id: 'be_b1_presentations', level: 'B1', section: 'business',
      title: 'Presentations B1', icon: 'presentation', color: '#D97706',
      cefrRef: 'MCER Cap. 4.4.1 — Expresión oral en público B1',
      learningGoal: 'Estructurar y entregar una presentación de negocios breve con apertura, desarrollo y cierre claros.',
      canDo: ['I can give a prepared presentation on a familiar business topic.', 'I can signal the structure of my presentation clearly.', 'I can handle straightforward questions after a presentation.'],
      theory: `
        <h3>Business Presentations — B1</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#D97706;background:#FFFBEB">
            <strong>Estructura de la presentación</strong>
            <small>
              <b>Opening:</b> "Good morning. My name is... and today I'm going to talk about..."<br>
              <b>Outline:</b> "I'll cover three main points: first..., then..., and finally..."<br>
              <b>Signposting:</b> "Moving on to..." / "As you can see from this slide..." / "To give you an example..."<br>
              <b>Conclusion:</b> "To sum up..." / "In conclusion..."<br>
              <b>Q&A:</b> "I'd now like to invite any questions."
            </small>
          </div>
        </div>`,
      exercises: [
        { type: 'choice', q: 'Which is the best presentation opening?', opts: ['Hi, I\'ll talk about sales.', 'Good morning everyone. I\'m going to present our Q3 sales results.', 'Let\'s start.'], a: 'Good morning everyone. I\'m going to present our Q3 sales results.', exp: 'Professional opening: greeting + topic statement.' },
        { type: 'write', q: 'Complete: I\'ll cover ___ main points: first, the market analysis; then, our strategy; and finally, the budget.', a: 'three', exp: 'Outlining three points gives structure and sets audience expectations.' },
        { type: 'order', q: 'Order the signpost:', words: ['Moving', 'on', 'to', 'my', 'second', 'point:', 'our', 'marketing', 'strategy.'], a: 'Moving on to my second point: our marketing strategy.', exp: '"Moving on to my second/third point" is the standard presentation signpost.' },
        { type: 'choice', q: 'How do you invite questions at the end?', opts: ['Questions?', 'I\'d now like to invite any questions you may have.', 'Ask me things.'], a: 'I\'d now like to invite any questions you may have.', exp: 'Formal Q&A invitation: "I\'d now like to invite any questions."' },
        { type: 'write', q: 'Complete: As you can ___ from this chart, sales increased by 15% in Q3.', a: 'see', exp: '"As you can see from this slide/chart" directs attention to visual data.' },
        { type: 'order', q: 'Order the conclusion:', words: ['To', 'sum', 'up,', 'we', 'recommend', 'expanding', 'into', 'three', 'new', 'markets', 'by', 'Q2.'], a: 'To sum up, we recommend expanding into three new markets by Q2.', exp: '"To sum up" signals the conclusion and recommendation.' },
        { type: 'choice', q: 'How do you handle a question you can\'t answer immediately?', opts: ['I don\'t know.', 'That\'s a great question. I\'ll get back to you on that after the meeting.', 'Skip.'], a: 'That\'s a great question. I\'ll get back to you on that after the meeting.', exp: 'Professional deferral: acknowledge + commit to follow up.' },
        { type: 'write', q: 'Complete: To give you an ___ (example), last year we reduced costs by 20% using this method.', a: 'example', exp: '"To give you an example" introduces a concrete illustration.' },
        { type: 'choice', q: 'Which phrase introduces a graph or chart?', opts: ['Look at this.', 'If you look at the graph on the right, you\'ll see a clear upward trend.', 'Here\'s data.'], a: 'If you look at the graph on the right, you\'ll see a clear upward trend.', exp: '"If you look at the graph/chart, you\'ll see" directs attention formally.' },
        { type: 'write', q: 'Complete: I\'d like to start by giving you some ___ (back) on the project.', a: 'background', exp: '"Background information" provides context before the main content.' },
        { type: 'order', q: 'Order the timing phrase:', words: ['I\'ll', 'try', 'to', 'keep', 'this', 'to', 'around', 'ten', 'minutes.'], a: 'I\'ll try to keep this to around ten minutes.', exp: 'Setting time expectations at the start is professional practice.' },
        { type: 'choice', q: 'How do you refer back to a previous point?', opts: ['Remember earlier?', 'As I mentioned earlier, the main challenge is the timeline.', 'Before, I said...'], a: 'As I mentioned earlier, the main challenge is the timeline.', exp: '"As I mentioned earlier" is a formal and fluent backward reference.' },
        { type: 'write', q: 'Complete: Let me hand ___ to my colleague Ana who will present the financial projections.', a: 'over', exp: '"Hand over to" transfers the floor to another speaker in a presentation.' },
        { type: 'choice', q: 'How do you clarify a point during a presentation?', opts: ['What I mean is...', 'In other words, the new system will replace the existing one entirely.', 'Let me repeat:'], a: 'In other words, the new system will replace the existing one entirely.', exp: '"In other words" reformulates a complex point simply and clearly.' },
        { type: 'order', q: 'Order the recommendation:', words: ['Based', 'on', 'these', 'findings,', 'we', 'recommend', 'investing', 'in', 'staff', 'training.'], a: 'Based on these findings, we recommend investing in staff training.', exp: '"Based on these findings, we recommend" is the standard recommendation formula.' },
        { type: 'write', q: 'Complete: Please feel free to ___ (interrupt) me if you have any questions during the presentation.', a: 'interrupt', exp: '"Feel free to interrupt" invites interaction during the presentation.' },
        { type: 'choice', q: 'Which is the most effective slide title?', opts: ['Info', 'Q3 Sales Results: 15% Growth vs Q2', 'Sales'], a: 'Q3 Sales Results: 15% Growth vs Q2', exp: 'Specific, data-rich slide titles communicate the key message at a glance.' },
        { type: 'write', q: 'Complete: ___ (conclude), I\'d like to thank you all for your time and attention.', a: 'To conclude', exp: '"To conclude" signals the end and leads into the closing thanks.' },
        { type: 'order', q: 'Order the agenda preview:', words: ['Today', 'I\'ll', 'be', 'covering:', 'the', 'market', 'overview,', 'our', 'strategy', 'and', 'next', 'steps.'], a: 'Today I\'ll be covering: the market overview, our strategy and next steps.', exp: 'Preview the agenda clearly at the start to orient your audience.' },
        { type: 'choice', q: 'How do you acknowledge a difficult question?', opts: ['Hard question.', 'That\'s a very pertinent question. The short answer is that it depends on the timeline.', 'Good.'], a: 'That\'s a very pertinent question. The short answer is that it depends on the timeline.', exp: '"That\'s a very pertinent question" acknowledges quality + provides a structured response.' }
      ],
      communicativeTask: { title: 'Deliver a mini-presentation', instruction: 'Prepare a 3-minute presentation about a business idea or product. Include: opening with agenda preview, 3 main points with signposting, a data reference and a conclusion with recommendations.', output: 'Written script or recorded presentation.' }
    },

    be_b1_negotiations: {
      id: 'be_b1_negotiations', level: 'B1', section: 'business',
      title: 'Negotiation Basics B1', icon: 'handshake', color: '#7C3AED',
      cefrRef: 'MCER Cap. 4.4.3 — Interacción oral B1 + Transacciones de bienes y servicios',
      learningGoal: 'Negociar condiciones básicas (precio, plazos, términos) de manera cortés y efectiva.',
      canDo: ['I can make and respond to offers and counteroffers.', 'I can express conditions, concessions and agreement.', 'I can politely decline and propose alternatives.'],
      theory: `
        <h3>Negotiation Language — B1</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#7C3AED;background:#F5F3FF">
            <strong>Frases de negociación</strong>
            <small>
              <b>Ofertas:</b> "We can offer you... at the price of..."<br>
              <b>Contraofertas:</b> "That's higher than we expected. Could you go to...?"<br>
              <b>Condiciones:</b> "Provided that... / As long as... / On condition that..."<br>
              <b>Concesiones:</b> "If you can agree to the timeline, we'll match the price."<br>
              <b>Acuerdo:</b> "I think we have a deal." / "Let's go ahead on that basis."<br>
              <b>Impasse:</b> "Let's agree to disagree on this point for now."
            </small>
          </div>
        </div>`,
      exercises: [
        { type: 'choice', q: 'How do you make an opening offer professionally?', opts: ['The price is $500.', 'We\'d like to propose an initial price of $500 per unit.', 'It costs $500.'], a: 'We\'d like to propose an initial price of $500 per unit.', exp: '"We\'d like to propose" is more collaborative and open to negotiation.' },
        { type: 'write', q: 'Complete: That\'s ___ than we expected. Could you consider a price closer to $400?', a: 'higher', exp: 'Countering with a specific figure after acknowledging the initial offer.' },
        { type: 'choice', q: 'Which conditional best expresses a negotiating condition?', opts: ['We want 30 days payment.', 'Provided you offer 30-day payment terms, we can accept the quantity.', 'Give us 30 days.'], a: 'Provided you offer 30-day payment terms, we can accept the quantity.', exp: '"Provided that" introduces a firm condition in formal negotiation.' },
        { type: 'write', q: 'Complete: If you can agree to the delivery date, we ___ (will/would) be prepared to increase the order.', a: 'would', exp: 'Second conditional in negotiation: "If you... we would..." for hypothetical concessions.' },
        { type: 'order', q: 'Order the concession:', words: ['We\'re', 'prepared', 'to', 'reduce', 'the', 'price', 'by', '5%', 'if', 'you', 'can', 'commit', 'to', 'a', 'two-year', 'contract.'], a: 'We\'re prepared to reduce the price by 5% if you can commit to a two-year contract.', exp: 'Concession formula: "We\'re prepared to + concession + if + condition."' },
        { type: 'choice', q: 'How do you signal agreement in a negotiation?', opts: ['OK fine.', 'I think we have a deal. Let\'s go ahead on that basis.', 'Done.'], a: 'I think we have a deal. Let\'s go ahead on that basis.', exp: '"I think we have a deal" signals positive agreement; "on that basis" confirms the agreed terms.' },
        { type: 'write', q: 'Complete: We\'re not in a position to ___ (go) below $380. That\'s our best price.', a: 'go', exp: '"We\'re not in a position to go below..." sets a firm bottom line diplomatically.' },
        { type: 'choice', q: 'How do you politely decline an offer without closing the door?', opts: ['No.', 'I\'m afraid that doesn\'t quite work for us, but perhaps we could explore other options.', 'That\'s wrong.'], a: 'I\'m afraid that doesn\'t quite work for us, but perhaps we could explore other options.', exp: '"I\'m afraid... but perhaps..." declines while keeping the negotiation open.' },
        { type: 'order', q: 'Order the closing summary:', words: ['So,', 'to', 'confirm:', '$420', 'per', 'unit,', '500', 'units,', 'delivery', 'in', '6', 'weeks.'], a: 'So, to confirm: $420 per unit, 500 units, delivery in 6 weeks.', exp: 'Summarising agreed terms at close prevents misunderstandings.' },
        { type: 'write', q: 'Complete: Could we ___ (split) the difference and settle on $410?', a: 'split', exp: '"Split the difference" is a common negotiation compromise formula.' },
        { type: 'choice', q: 'Which phrase introduces a final concession?', opts: ['Last offer.', 'This is our best and final offer: $400 with free shipping.', 'Take it or leave it.'], a: 'This is our best and final offer: $400 with free shipping.', exp: '"Best and final offer" signals there is no more room to move — a strong close.' },
        { type: 'write', q: 'Complete: We ___ (appreciate) your flexibility on this, and we look forward to a long-term partnership.', a: 'appreciate', exp: '"We appreciate your flexibility" is a positive, relationship-building statement in negotiation.' },
        { type: 'order', q: 'Order the counteroffer:', words: ['We', 'understand', 'your', 'constraints,', 'but', 'could', 'you', 'meet', 'us', 'halfway', 'at', '$450?'], a: 'We understand your constraints, but could you meet us halfway at $450?', exp: '"Meet us halfway" is a collaborative compromise proposal.' },
        { type: 'choice', q: 'What does "BATNA" stand for in negotiation?', opts: ['Best And Total Negotiation Agreement', 'Best Alternative To a Negotiated Agreement', 'Bottom-line Agreement Target Needs Analysis'], a: 'Best Alternative To a Negotiated Agreement', exp: 'BATNA is a key negotiation concept: knowing your best option if talks fail strengthens your position.' },
        { type: 'write', q: 'Complete: Let\'s ___ (agree) to disagree on the payment terms for now and revisit this next month.', a: 'agree', exp: '"Agree to disagree" acknowledges an impasse without damaging the relationship.' },
        { type: 'choice', q: 'Which phrase signals you need time to consider?', opts: ['I\'ll think about it.', 'We\'d need some time to review this internally before committing.', 'Wait.'], a: 'We\'d need some time to review this internally before committing.', exp: 'Buying time professionally: "We\'d need time to review internally." — avoids pressure decisions.' },
        { type: 'order', q: 'Order the leverage statement:', words: ['We\'re', 'currently', 'in', 'discussion', 'with', 'two', 'other', 'suppliers,', 'so', 'pricing', 'is', 'critical.'], a: 'We\'re currently in discussion with two other suppliers, so pricing is critical.', exp: 'Mentioning alternatives creates competitive pressure — a negotiation leverage tactic.' },
        { type: 'write', q: 'Complete: On ___ (condition) that you guarantee delivery by 30 June, we\'ll increase the order to 1000 units.', a: 'condition', exp: '"On condition that" is a formal conditional for negotiation terms.' },
        { type: 'choice', q: 'When should you put the agreement in writing?', opts: ['Never — verbal is fine', 'Always — confirm agreed terms in writing as soon as possible', 'Only for large deals'], a: 'Always — confirm agreed terms in writing as soon as possible', exp: 'Best practice: always confirm negotiated agreements in writing to avoid disputes.' },
        { type: 'order', q: 'Order the win-win close:', words: ['I', 'think', 'this', 'is', 'a', 'fair', 'deal', 'for', 'both', 'parties.', 'Shall', 'we', 'proceed?'], a: 'I think this is a fair deal for both parties. Shall we proceed?', exp: '"Fair deal for both parties" emphasises mutual benefit — the hallmark of a successful negotiation.' }
      ],
      communicativeTask: { title: 'Negotiate a contract', instruction: 'Role-play a negotiation for a software license: one party is the seller ($600/user/year), the other wants $450, 2-year commitment, free training. Reach a mutually acceptable deal. Use conditions, concessions and a formal close.', output: 'Written dialogue (10–12 exchanges) or role-play.' }
    },

    be_b1_reports: {
      id: 'be_b1_reports', level: 'B1', section: 'business',
      title: 'Business Reports B1', icon: 'file-text', color: '#DC2626',
      cefrRef: 'MCER Cap. 4.4.1.2 — Escritura creativa y funcional B1 + Informes y ensayos',
      learningGoal: 'Redactar informes de negocios sencillos con estructura clara: resumen ejecutivo, hallazgos y recomendaciones.',
      canDo: ['I can write a simple business report with clear structure.', 'I can summarise findings and make recommendations.', 'I can use appropriate formal language for reports.'],
      theory: `
        <h3>Business Reports — B1</h3>
        <div class="theory-grid">
          <div class="t-box" style="border-color:#DC2626;background:#FEF2F2">
            <strong>Estructura del informe</strong>
            <small>
              <b>Title / To / From / Date / Subject</b><br>
              <b>1. Introduction / Purpose</b><br>
              "The purpose of this report is to..."<br>
              <b>2. Findings</b><br>
              "The data shows... / It was found that..."<br>
              <b>3. Conclusions</b><br>
              "In conclusion, it is clear that..."<br>
              <b>4. Recommendations</b><br>
              "It is recommended that... / We suggest..."
            </small>
          </div>
        </div>`,
      exercises: [
        { type: 'choice', q: 'Which sentence correctly states the purpose of a report?', opts: ['This report is about sales.', 'The purpose of this report is to analyse Q3 sales performance and identify key trends.', 'Sales report.'], a: 'The purpose of this report is to analyse Q3 sales performance and identify key trends.', exp: '"The purpose of this report is to + verb" is the standard formal report opener.' },
        { type: 'write', q: 'Complete: The ___ (find) show a 15% increase in customer satisfaction since the new system was introduced.', a: 'findings', exp: '"The findings show/indicate" is the standard phrase for presenting research results.' },
        { type: 'choice', q: 'Which is the correct passive structure for presenting data?', opts: ['People found that costs dropped.', 'It was found that operating costs had decreased by 12%.', 'The finding is a 12% decrease.'], a: 'It was found that operating costs had decreased by 12%.', exp: '"It was found that" — impersonal passive is standard in formal reports.' },
        { type: 'order', q: 'Order the recommendation:', words: ['It', 'is', 'recommended', 'that', 'the', 'company', 'invest', 'in', 'staff', 'training', 'by', 'Q2.'], a: 'It is recommended that the company invest in staff training by Q2.', exp: '"It is recommended that + subject + base verb" — passive recommendation in formal reports.' },
        { type: 'write', q: 'Complete: ___ conclusion, the data strongly supports expanding into the Latin American market.', a: 'In', exp: '"In conclusion" signals the report\'s conclusion section.' },
        { type: 'choice', q: 'Which phrase introduces a finding from data?', opts: ['The chart shows a big increase.', 'The data indicates a significant upward trend in customer acquisition costs.', 'Costs went up.'], a: 'The data indicates a significant upward trend in customer acquisition costs.', exp: '"The data indicates/suggests" is formal and avoids overclaiming causation.' },
        { type: 'write', q: 'Complete: This report was ___ (commission) by the board to review current supplier contracts.', a: 'commissioned', exp: '"Commissioned by" states the authority behind the report.' },
        { type: 'order', q: 'Order the executive summary:', words: ['This', 'report', 'examines', 'staff', 'turnover', 'and', 'recommends', 'three', 'key', 'retention', 'strategies.'], a: 'This report examines staff turnover and recommends three key retention strategies.', exp: 'Executive summary: scope + key recommendation in one sentence.' },
        { type: 'choice', q: 'How do you introduce a graph in a report?', opts: ['Look at the graph.', 'As illustrated in Figure 1, sales declined sharply in Q2.', 'The graph.'], a: 'As illustrated in Figure 1, sales declined sharply in Q2.', exp: '"As illustrated in Figure X" is the standard academic/professional data reference.' },
        { type: 'write', q: 'Complete: Based on the above ___ (find), we recommend a review of current pricing strategy.', a: 'findings', exp: '"Based on the above findings" links the conclusion to the evidence.' },
        { type: 'choice', q: 'Which is the most formal way to make a suggestion?', opts: ['We think you should...', 'It is suggested that the board consider a phased approach.', 'Maybe try...'], a: 'It is suggested that the board consider a phased approach.', exp: '"It is suggested/recommended that + base verb" is the passive recommendation form.' },
        { type: 'write', q: 'Complete: The main ___ (object) of this report is to assess the feasibility of the proposed merger.', a: 'objective', exp: '"The main objective of this report" defines scope formally.' },
        { type: 'order', q: 'Order the limitation statement:', words: ['It', 'should', 'be', 'noted', 'that', 'this', 'report', 'is', 'based', 'on', 'data', 'from', 'Q1', 'only.'], a: 'It should be noted that this report is based on data from Q1 only.', exp: '"It should be noted that" signals a limitation or caveat.' },
        { type: 'choice', q: 'What goes in the "To / From / Date / Subject" header?', opts: ['Nothing — it\'s optional', 'The report\'s routing information — who it\'s for and from, when written and on what topic', 'Only the title'], a: 'The report\'s routing information — who it\'s for and from, when written and on what topic', exp: 'Business memo/report headers establish routing, date and subject for filing purposes.' },
        { type: 'write', q: 'Complete: Further ___ (investigate) is required before a final decision can be made.', a: 'investigation', exp: '"Further investigation/research is required" is a formal hedge for inconclusive findings.' },
        { type: 'order', q: 'Order the passive finding:', words: ['A', 'significant', 'drop', 'in', 'productivity', 'was', 'observed', 'during', 'the', 'implementation', 'phase.'], a: 'A significant drop in productivity was observed during the implementation phase.', exp: 'Past Simple Passive for objective finding: "was observed/recorded/found."' },
        { type: 'choice', q: 'When would you use bullet points in a business report?', opts: ['For all content', 'For lists of findings, recommendations or action points — not for narrative sections', 'Never'], a: 'For lists of findings, recommendations or action points — not for narrative sections', exp: 'Bullets aid clarity for lists; narrative sections should use prose for professional reports.' },
        { type: 'write', q: 'Complete: The ___ (attach) appendix contains the full survey data and methodology.', a: 'attached', exp: '"The attached appendix" references supporting documents.' },
        { type: 'choice', q: 'Which phrase signals a limitation in the data?', opts: ['The data is wrong.', 'It should be noted that the sample size was limited to 50 respondents.', 'Small sample.'], a: 'It should be noted that the sample size was limited to 50 respondents.', exp: '"It should be noted that" introduces caveats and limitations professionally.' },
        { type: 'order', q: 'Order the action plan item:', words: ['The', 'HR', 'department', 'will', 'implement', 'a', 'new', 'onboarding', 'programme', 'by', '30', 'June.'], a: 'The HR department will implement a new onboarding programme by 30 June.', exp: 'Action plan: responsible party + will + action + deadline.' }
      ],
      communicativeTask: { title: 'Write a business report', instruction: 'Write a short business report (200–250 words) on staff satisfaction at your company. Include: header (To/From/Date/Subject), Introduction, 3 Findings, Conclusions and 2 Recommendations.', output: 'Formal business report.' }
    },

    be_b1_vocab_business: {
      id: 'be_b1_vocab_business', level: 'B1', section: 'business',
      title: 'Business Vocabulary B1', icon: 'briefcase', color: '#6366F1',
      cefrRef: 'MCER Cap. 5.2.1.1 — Competencia léxica: lengua con fines específicos B1',
      learningGoal: 'Dominar el vocabulario esencial del mundo de los negocios: organización, finanzas, recursos humanos y operaciones.',
      canDo: ['I can use essential business vocabulary in context.', 'I can understand business texts using common terminology.', 'I can discuss basic financial and organizational concepts.'],
      words: [
        { en: 'agenda', es: 'orden del día / agenda', example: 'Can you send me the agenda for tomorrow\'s meeting?' },
        { en: 'minutes (meeting)', es: 'actas de reunión', example: 'The secretary took the minutes during the board meeting.' },
        { en: 'invoice', es: 'factura', example: 'Please send the invoice to our accounts department.' },
        { en: 'deadline', es: 'plazo / fecha límite', example: 'We need to meet the deadline or we\'ll lose the contract.' },
        { en: 'target', es: 'objetivo / meta', example: 'The sales team exceeded their quarterly target by 20%.' },
        { en: 'revenue', es: 'ingresos / facturación', example: 'Revenue grew by 15% compared to last year.' },
        { en: 'overheads', es: 'gastos generales / costes fijos', example: 'We need to reduce our overheads to improve the profit margin.' },
        { en: 'profit margin', es: 'margen de beneficio', example: 'Our profit margin has decreased due to rising material costs.' },
        { en: 'stakeholder', es: 'parte interesada / accionista', example: 'We need to consider the interests of all stakeholders.' },
        { en: 'KPI (Key Performance Indicator)', es: 'indicador clave de rendimiento', example: 'Customer satisfaction is one of our most important KPIs.' },
        { en: 'onboarding', es: 'incorporación / integración de nuevos empleados', example: 'The onboarding process takes three weeks for new hires.' },
        { en: 'outsource', es: 'externalizar / subcontratar', example: 'We decided to outsource our customer service to reduce costs.' },
        { en: 'bottom line', es: 'resultado final / beneficio neto', example: 'Cost-cutting measures improved our bottom line significantly.' },
        { en: 'benchmark', es: 'referencia / punto de comparación', example: 'We use industry benchmarks to evaluate our performance.' },
        { en: 'ROI (Return on Investment)', es: 'retorno de la inversión', example: 'The ROI on the marketing campaign was exceptionally high.' },
        { en: 'contingency plan', es: 'plan de contingencia', example: 'Always have a contingency plan in case the main strategy fails.' },
        { en: 'scope creep', es: 'expansión no controlada del alcance del proyecto', example: 'Scope creep delayed the project by three months.' },
        { en: 'cash flow', es: 'flujo de caja / tesorería', example: 'A healthy cash flow is essential for business survival.' },
        { en: 'procurement', es: 'adquisición / compras', example: 'The procurement department negotiates with all suppliers.' },
        { en: 'scalable', es: 'escalable', example: 'We need a scalable solution that grows with the company.' }
      ],
      exercises: [
        { type: 'choice', q: 'What is a "KPI"?', opts: ['A type of contract', 'A Key Performance Indicator used to measure success', 'A financial report'], a: 'A Key Performance Indicator used to measure success', exp: 'KPIs measure progress towards specific business objectives.' },
        { type: 'write', q: 'Complete: Our ___ (cash) flow was negative last quarter due to delayed client payments.', a: 'cash', exp: '"Cash flow" = the movement of money in and out of a business.' },
        { type: 'choice', q: 'What does "outsource" mean?', opts: ['Hire more staff internally', 'Contract an external company to do work', 'Export products abroad'], a: 'Contract an external company to do work', exp: '"Outsource" = hire an external provider for a function (e.g., IT, HR, logistics).' },
        { type: 'write', q: 'Complete: We missed the ___ (dead) for submitting the proposal, so we lost the bid.', a: 'deadline', exp: '"Deadline" = the final date by which something must be completed.' },
        { type: 'choice', q: 'What is the "bottom line" in business?', opts: ['The company\'s main product', 'The net profit after all costs', 'The lowest price offered'], a: 'The net profit after all costs', exp: '"Bottom line" refers to a company\'s net profit — literally the bottom line of a financial statement.' }
      ],
      communicativeTask: { title: 'Business vocabulary in context', instruction: 'Write 8 sentences about a fictional company\'s performance using at least 8 different words from today\'s list.', output: 'Business summary paragraph.' }
    }

  }; // fin businessModules


  // ================================================================== //
  //  BUSINESS ENGLISH B2 — 4 módulos adicionales                        //
  // ================================================================== //

  const businessModulesB2 = {

    be_b2_advanced_emails: {
      id: 'be_b2_advanced_emails', level: 'B2', section: 'business',
      title: 'Advanced Business Writing B2', icon: 'edit', color: '#0891B2',
      cefrRef: 'MCER Cap. 4.4.1.2 Escritura B2 + Cap. 4.4.3.2 Interacción escrita B2',
      learningGoal: 'Redactar correspondencia comercial compleja: propuestas, quejas formales, negociaciones escritas.',
      canDo: ['I can write complex business proposals and formal complaints.', 'I can adapt register precisely to context and purpose.', 'I can write persuasively while maintaining professionalism.'],
      exercises: [
        { type: 'choice', q: 'Which most effectively opens a formal complaint?', opts: ['I am writing to complain about your terrible service.', 'I am writing to express my dissatisfaction with the service received on 12 March.', 'Your service was bad.'], a: 'I am writing to express my dissatisfaction with the service received on 12 March.', exp: '"Express my dissatisfaction with" is formal; specifying the date adds precision.' },
        { type: 'write', q: 'Formalize: "We want to work with you." → We would ___ to explore the possibility of a long-term partnership.', a: 'welcome the opportunity', exp: '"We would welcome the opportunity to" is a formal and open collaborative opener.' },
        { type: 'choice', q: 'Which sentence best presents a business proposal?', opts: ['We have a great idea!', 'We are pleased to submit the attached proposal for your consideration.', 'Here is our plan.'], a: 'We are pleased to submit the attached proposal for your consideration.', exp: '"Submit for your consideration" is the standard formal phrase for presenting proposals.' },
        { type: 'order', q: 'Order the escalation:', words: ['As', 'this', 'matter', 'remains', 'unresolved,', 'we', 'are', 'now', 'compelled', 'to', 'seek', 'legal', 'advice.'], a: 'As this matter remains unresolved, we are now compelled to seek legal advice.', exp: 'Escalation formula: cause + "compelled to" + consequence.' },
        { type: 'write', q: 'Complete: We trust that you will give this matter your ___ attention.', a: 'urgent / immediate', exp: '"Urgent/immediate attention" signals priority without being aggressive.' },
        { type: 'choice', q: 'Which phrase makes a persuasive business case?', opts: ['You should do this.', 'The data strongly suggests that implementing this solution would yield a 30% reduction in costs.', 'This is a good idea.'], a: 'The data strongly suggests that implementing this solution would yield a 30% reduction in costs.', exp: 'Persuasion with data: "The data strongly suggests" + specific quantified outcome.' },
        { type: 'write', q: 'Complete: We would be grateful if you could ___ (look) into this matter as a matter of urgency.', a: 'look', exp: '"Look into" = investigate. "As a matter of urgency" = immediately.' },
        { type: 'order', q: 'Order the executive summary opener:', words: ['This', 'proposal', 'outlines', 'a', 'strategic', 'partnership', 'that', 'we', 'believe', 'will', 'deliver', 'significant', 'mutual', 'benefit.'], a: 'This proposal outlines a strategic partnership that we believe will deliver significant mutual benefit.', exp: 'Proposal opener: scope + hedged value claim ("we believe") + benefit.' },
        { type: 'choice', q: 'Which hedges a claim appropriately in a business proposal?', opts: ['This will definitely increase revenue.', 'We anticipate that this approach could increase revenue by up to 25%.', 'Revenue goes up.'], a: 'We anticipate that this approach could increase revenue by up to 25%.', exp: '"We anticipate... could... up to" — triple hedging avoids overclaiming while remaining compelling.' },
        { type: 'write', q: 'Complete: Should you require any further ___ (inform), please do not hesitate to contact us.', a: 'information', exp: '"Should you require further information" — formal conditional for offers of assistance.' }
      ],
      communicativeTask: { title: 'Write a business proposal', instruction: 'Write a one-page business proposal (250–300 words) pitching a new product or service to a potential client. Include: executive summary, value proposition, implementation timeline and pricing overview.', output: 'Formal business proposal.' }
    },

    be_b2_negotiations_advanced: {
      id: 'be_b2_negotiations_advanced', level: 'B2', section: 'business',
      title: 'Advanced Negotiation B2', icon: 'git-merge', color: '#7C3AED',
      cefrRef: 'MCER Cap. 4.4.3.1 Interacción oral B2 — Negociación formal',
      learningGoal: 'Negociar con fluidez en contextos de alta complejidad usando hipotéticos, condiciones y estrategias persuasivas.',
      canDo: ['I can negotiate complex contracts and partnerships with fluency.', 'I can use hypothetical language strategically in negotiations.', 'I can handle pressure, objections and impasse professionally.'],
      exercises: [
        { type: 'choice', q: 'Which uses hypothetical language most effectively in a negotiation?', opts: ['If we do this, it helps.', 'Were you to commit to a three-year contract, we would be prepared to offer a 15% discount.', 'Longer contract means discount.'], a: 'Were you to commit to a three-year contract, we would be prepared to offer a 15% discount.', exp: '"Were you to + verb" — inverted second conditional adds formality and conditionality.' },
        { type: 'write', q: 'Complete: I take your point, but I\'m afraid that\'s simply not something we\'re ___ to accommodate at this stage.', a: 'able / in a position', exp: '"We\'re not in a position to accommodate" declines formally without closing the door.' },
        { type: 'order', q: 'Order the anchoring move:', words: ['Our', 'standard', 'rate', 'for', 'this', 'package', 'is', '$50,000,', 'though', 'we\'re', 'open', 'to', 'discussing', 'flexibility.'], a: 'Our standard rate for this package is $50,000, though we\'re open to discussing flexibility.', exp: 'Anchoring: state your position firmly + signal openness to signal negotiating room.' },
        { type: 'choice', q: 'How do you handle an ultimatum professionally?', opts: ['Fine, whatever.', 'I appreciate your position. Could we explore whether a phased approach might address your concerns?', 'That\'s unacceptable.'], a: 'I appreciate your position. Could we explore whether a phased approach might address your concerns?', exp: 'Acknowledge + redirect with a creative alternative — never match aggression in formal negotiation.' },
        { type: 'write', q: 'Complete: Had we received the revised terms earlier, we ___ (be) in a stronger position to respond today.', a: 'would have been', exp: 'Third conditional in negotiation: "Had we... we would have been..." — explains constraint without blame.' }
      ],
      communicativeTask: { title: 'Complex negotiation simulation', instruction: 'Role-play a high-stakes contract negotiation: a media company wants exclusive rights for 5 years; the content creator wants 3 years maximum and 70% royalty. Reach a deal using inverted conditionals, concessions and a formal close.', output: 'Written script (15+ exchanges) or recorded role-play.' }
    },

    be_b2_presentations_advanced: {
      id: 'be_b2_presentations_advanced', level: 'B2', section: 'business',
      title: 'Advanced Presentations B2', icon: 'monitor', color: '#D97706',
      cefrRef: 'MCER Cap. 4.4.1 Expresión oral B2 — Hablar en público',
      learningGoal: 'Diseñar y entregar presentaciones persuasivas con argumentación compleja, datos y manejo de preguntas difíciles.',
      canDo: ['I can deliver a detailed, persuasive business presentation on complex topics.', 'I can handle hostile or complex questions confidently.', 'I can use emphasis devices and rhetorical techniques for impact.'],
      exercises: [
        { type: 'choice', q: 'Which uses emphasis most effectively for a key data point?', opts: ['Sales went up.', 'What these figures demonstrate — and this is critical — is a 40% surge in Q3 revenue.', 'Q3 was good.'], a: 'What these figures demonstrate — and this is critical — is a 40% surge in Q3 revenue.', exp: 'Wh-cleft + parenthetical remark ("and this is critical") + precise data — maximum emphasis.' },
        { type: 'write', q: 'Complete: Not only did we exceed our target, but we ___ (also) reduced operating costs by 12%.', a: 'also', exp: '"Not only did we... but we also..." — emphatic addition structure for double achievement.' },
        { type: 'order', q: 'Order the hostile question response:', words: ['That\'s', 'a', 'fair', 'challenge.', 'The', 'short', 'answer', 'is', 'yes,', 'and', 'here\'s', 'why', 'we\'re', 'confident', 'in', 'our', 'projections.'], a: 'That\'s a fair challenge. The short answer is yes, and here\'s why we\'re confident in our projections.', exp: 'Acknowledge the challenge + structured response — don\'t become defensive.' },
        { type: 'choice', q: 'Which storytelling opener is most effective for a business presentation?', opts: ['Today I\'ll talk about data.', 'Eighteen months ago, we faced a crisis. What happened next changed everything.', 'This is about our results.'], a: 'Eighteen months ago, we faced a crisis. What happened next changed everything.', exp: 'Narrative hook: specific time + problem + cliffhanger — creates immediate engagement.' },
        { type: 'write', q: 'Complete: The evidence, taken ___ (together), points compellingly to one conclusion: we must act now.', a: 'together', exp: '"Taken together" — cohesion device that synthesises multiple pieces of evidence.' }
      ],
      communicativeTask: { title: 'Persuasive business pitch', instruction: 'Prepare and deliver a 5-minute pitch for a new product or business idea to investors. Use: a narrative hook, wh-cleft for key insight, data with emphasis device, and a powerful call to action.', output: 'Written pitch script or recorded presentation.' }
    },

    be_b2_vocab_finance: {
      id: 'be_b2_vocab_finance', level: 'B2', section: 'business',
      title: 'Finance & Strategy Vocabulary B2', icon: 'trending-up', color: '#059669',
      cefrRef: 'MCER Cap. 5.2.1.1 — Competencia léxica: lengua con fines específicos B2',
      learningGoal: 'Dominar el vocabulario de finanzas, estrategia corporativa y gestión del riesgo a nivel B2.',
      canDo: ['I can discuss financial performance and strategy in detail.', 'I can understand and use financial vocabulary in reports and meetings.'],
      words: [
        { en: 'due diligence', es: 'diligencia debida', example: 'We\'re conducting due diligence before finalising the acquisition.' },
        { en: 'leverage', es: 'apalancamiento / influencia', example: 'The company is highly leveraged, with a debt-to-equity ratio of 3:1.' },
        { en: 'write-off', es: 'saneamiento / baja contable', example: 'The bad debt was written off after three years of failed recovery.' },
        { en: 'equity stake', es: 'participación accionarial', example: 'The investor acquired a 25% equity stake in the start-up.' },
        { en: 'IPO (Initial Public Offering)', es: 'oferta pública de venta / salida a bolsa', example: 'The company\'s IPO raised $500 million.' },
        { en: 'EBITDA', es: 'beneficio antes de intereses, impuestos, depreciación y amortización', example: 'EBITDA is a key metric for comparing companies across industries.' },
        { en: 'hedging (financial)', es: 'cobertura / protección frente a riesgos', example: 'The airline uses hedging to protect against oil price volatility.' },
        { en: 'liquidity ratio', es: 'ratio de liquidez', example: 'A liquidity ratio below 1 signals potential cash flow problems.' },
        { en: 'yield', es: 'rendimiento / rentabilidad', example: 'The bond yield increased as interest rates rose.' },
        { en: 'burn rate', es: 'tasa de quema / velocidad de consumo de capital', example: 'The start-up has a burn rate of $200,000 per month.' },
        { en: 'pivot', es: 'pivotar / cambio de modelo de negocio', example: 'The company pivoted from B2C to B2B after the first year.' },
        { en: 'scalability', es: 'escalabilidad', example: 'Investors are attracted by the product\'s scalability.' },
        { en: 'supply-side / demand-side', es: 'oferta / demanda', example: 'The policy targets supply-side constraints rather than demand.' },
        { en: 'market penetration', es: 'penetración de mercado', example: 'Our market penetration in Southeast Asia is still below 5%.' },
        { en: 'gross margin', es: 'margen bruto', example: 'A gross margin above 60% is exceptional in software.' },
        { en: 'equity financing', es: 'financiación mediante capital', example: 'We chose equity financing over debt to avoid interest payments.' },
        { en: 'covenant (financial)', es: 'cláusula restrictiva / convenio financiero', example: 'The loan agreement includes several financial covenants.' },
        { en: 'amortisation', es: 'amortización', example: 'Goodwill amortisation reduces reported profits over time.' },
        { en: 'risk appetite', es: 'apetito de riesgo', example: 'The board has a low risk appetite given current market conditions.' },
        { en: 'synergy', es: 'sinergia', example: 'The merger was justified by anticipated cost synergies of $50m.' }
      ],
      exercises: [
        { type: 'choice', q: 'What is "due diligence" in business?', opts: ['A type of tax return', 'The investigation conducted before a major business decision', 'A financial penalty'], a: 'The investigation conducted before a major business decision', exp: '"Due diligence" = thorough investigation before acquisition, investment or partnership.' },
        { type: 'write', q: 'Complete: A high ___ (burn) rate means the company is spending cash faster than it\'s generating it.', a: 'burn', exp: '"Burn rate" is how quickly a start-up uses its cash reserves.' },
        { type: 'choice', q: 'What does "leverage" mean in a financial context?', opts: ['Using debt to increase potential returns', 'Selling company assets', 'Reducing staff costs'], a: 'Using debt to increase potential returns', exp: '"Financial leverage" = using borrowed capital to amplify potential returns (and risks).' },
        { type: 'write', q: 'Complete: The anticipated cost ___ (synergy) from the merger were estimated at $30 million.', a: 'synergies', exp: '"Synergies" in M&A = cost savings or revenue benefits from combining two companies.' },
        { type: 'choice', q: 'What is a company\'s "risk appetite"?', opts: ['The amount of food the company buys', 'The level of risk the company is willing to accept', 'A health and safety requirement'], a: 'The level of risk the company is willing to accept', exp: '"Risk appetite" = the degree of risk an organisation is willing to take to achieve its objectives.' }
      ],
      communicativeTask: { title: 'Financial briefing', instruction: 'Write a short financial briefing (200 words) summarising a company\'s Q3 performance using at least 8 words from today\'s list. Include: revenue, EBITDA, cash flow, key risks and outlook.', output: 'Written financial summary.' }
    }

  };


  // ================================================================== //
  //  BUSINESS ENGLISH C1 — 3 módulos opcionales avanzados               //
  // ================================================================== //

  const businessModulesC1 = {

    be_c1_executive_communication: {
      id: 'be_c1_executive_communication', level: 'C1', section: 'business',
      title: 'Executive Communication C1', icon: 'mic', color: '#7C3AED',
      cefrRef: 'MCER Cap. 4.4.1 C1 + Cap. 4.4.3 Conversación formal avanzada',
      learningGoal: 'Comunicarse con eficacia a nivel ejecutivo: tableros de dirección, discursos de liderazgo, gestión de crisis.',
      canDo: ['I can present and defend complex strategies to senior leadership.', 'I can manage crisis communication with clarity and authority.', 'I can use rhetorical devices to inspire and persuade at executive level.'],
      exercises: [
        { type: 'choice', q: 'Which opens a board presentation with maximum authority?', opts: ['Hi, thanks for being here.', 'What I want to address today — and I believe this is the defining strategic question of the year — is how we maintain growth in a contracting market.', 'Today I\'ll talk about growth.'], a: 'What I want to address today — and I believe this is the defining strategic question of the year — is how we maintain growth in a contracting market.', exp: 'Wh-cleft + parenthetical emphasis + specific strategic framing — maximum executive gravitas.' },
        { type: 'write', q: 'Complete: The evidence, taken together, ___ compellingly to one conclusion: we cannot afford to delay.', a: 'points', exp: '"Points compellingly to one conclusion" — synthesis + emphasis drives the recommendation.' },
        { type: 'order', q: 'Order the crisis statement:', words: ['We', 'are', 'aware', 'of', 'the', 'issue,', 'we', 'take', 'it', 'extremely', 'seriously,', 'and', 'we', 'are', 'acting', 'decisively.'], a: 'We are aware of the issue, we take it extremely seriously, and we are acting decisively.', exp: 'Crisis communication tricolon: aware + serious + decisive action — calm authority.' },
        { type: 'choice', q: 'Which rhetorical device creates maximum impact in a leadership speech?', opts: ['Listing facts repeatedly', 'Using anaphora: "We will build. We will innovate. We will lead."', 'Using very long sentences'], a: 'Using anaphora: "We will build. We will innovate. We will lead."', exp: 'Anaphora creates rhythm and emotional momentum — fundamental to inspirational leadership communication.' },
        { type: 'write', q: 'Complete: Not only have we delivered on our commitments this year, but we have ___ outperformed every comparable benchmark in the sector.', a: 'consistently', exp: '"Not only... but we have consistently outperformed" — emphatic addition + evidence of sustained performance.' }
      ],
      communicativeTask: { title: 'CEO keynote speech', instruction: 'Write a 3-minute CEO keynote speech for an annual company meeting. Include: an opening hook, the company\'s narrative, 3 strategic priorities for the year, a rhetorical question, anaphora and a closing call to action.', output: 'Written speech with annotated rhetorical devices.' }
    },

    be_c1_strategic_writing: {
      id: 'be_c1_strategic_writing', level: 'C1', section: 'business',
      title: 'Strategic Business Writing C1', icon: 'file-check', color: '#DC2626',
      cefrRef: 'MCER Cap. 4.4.1.2 Escritura C1 — Producción de textos complejos',
      learningGoal: 'Redactar documentos estratégicos de alto nivel: white papers, estrategias corporativas y análisis de mercado.',
      canDo: ['I can produce complex, well-structured strategic documents.', 'I can integrate evidence, argument and hedging in extended writing.', 'I can adapt register and style precisely for executive audiences.'],
      exercises: [
        { type: 'choice', q: 'Which sentence best hedges a strategic prediction?', opts: ['This will definitely happen.', 'It would appear that market conditions are converging in a way that could accelerate adoption by up to 40%.', 'It might happen.'], a: 'It would appear that market conditions are converging in a way that could accelerate adoption by up to 40%.', exp: '"It would appear that... could... up to" — three levels of hedging appropriate for strategic documents.' },
        { type: 'write', q: 'Nominalize: "The company failed to adapt." → The company\'s ___ to adapt to market conditions proved costly.', a: 'failure', exp: '"Failure to adapt" — nominalization creates formal density; "proved costly" avoids direct accusation.' },
        { type: 'order', q: 'Order the executive recommendation:', words: ['On', 'the', 'basis', 'of', 'the', 'foregoing', 'analysis,', 'it', 'is', 'recommended', 'that', 'the', 'board', 'approve', 'the', 'proposed', 'restructuring.'], a: 'On the basis of the foregoing analysis, it is recommended that the board approve the proposed restructuring.', exp: '"On the basis of the foregoing analysis, it is recommended that..." — highest register recommendation formula.' },
        { type: 'choice', q: 'Which signals a significant caveat in a strategic document?', opts: ['But there\'s a problem.', 'It should be noted, however, that these projections are contingent upon stable macroeconomic conditions.', 'This might not work.'], a: 'It should be noted, however, that these projections are contingent upon stable macroeconomic conditions.', exp: '"It should be noted... contingent upon" — formal caveat that protects the document\'s credibility.' },
        { type: 'write', q: 'Complete: The ___ (erode) of market share in the EMEA region represents the most pressing strategic challenge facing the business.', a: 'erosion', exp: '"Erosion of market share" — nominalization + "represents the most pressing" creates formal analytical density.' }
      ],
      communicativeTask: { title: 'Write a strategy memo', instruction: 'Write a one-page strategic memo (300 words) to the board recommending entering a new market. Include: situation analysis, strategic rationale, risks and mitigations, and a formal recommendation. Use nominalization, hedging and at least one parenthetical remark.', output: 'Formal strategic memo.' }
    },

    be_c1_vocab_advanced: {
      id: 'be_c1_vocab_advanced', level: 'C1', section: 'business',
      title: 'Advanced Business Vocabulary C1', icon: 'zap', color: '#6366F1',
      cefrRef: 'MCER Cap. 5.2.1.1 — Competencia léxica C1: lengua con fines específicos avanzados',
      learningGoal: 'Dominar vocabulario de nivel ejecutivo para estrategia, liderazgo, M&A y comunicación corporativa.',
      canDo: ['I can use sophisticated business vocabulary with precision and naturalness.', 'I can understand and produce executive-level written and oral communication.'],
      words: [
        { en: 'fiduciary duty', es: 'deber fiduciario', example: 'Board members have a fiduciary duty to act in shareholders\' best interests.' },
        { en: 'disruptive innovation', es: 'innovación disruptiva', example: 'Uber is a classic example of disruptive innovation in the transport sector.' },
        { en: 'value proposition', es: 'propuesta de valor', example: 'Our value proposition is uniquely differentiated by our proprietary technology.' },
        { en: 'strategic alignment', es: 'alineación estratégica', example: 'All initiatives must demonstrate strategic alignment with the five-year plan.' },
        { en: 'corporate governance', es: 'gobierno corporativo', example: 'Strong corporate governance protects investors and builds long-term trust.' },
        { en: 'paradigm shift', es: 'cambio de paradigma (empresarial)', example: 'Remote work represents a paradigm shift in how we define the workplace.' },
        { en: 'stakeholder management', es: 'gestión de las partes interesadas', example: 'Effective stakeholder management is critical during periods of organisational change.' },
        { en: 'operational excellence', es: 'excelencia operativa', example: 'We\'re committed to operational excellence across all business units.' },
        { en: 'blue ocean strategy', es: 'estrategia del océano azul', example: 'Rather than compete in overcrowded markets, we\'re pursuing a blue ocean strategy.' },
        { en: 'change management', es: 'gestión del cambio', example: 'The restructuring required a comprehensive change management programme.' },
        { en: 'intellectual capital', es: 'capital intelectual', example: 'Our greatest asset is not our infrastructure but our intellectual capital.' },
        { en: 'organic growth', es: 'crecimiento orgánico', example: 'We achieved 20% organic growth without any acquisitions.' },
        { en: 'cross-functional', es: 'multifuncional / transversal', example: 'A cross-functional team was assembled to drive the digital transformation.' },
        { en: 'C-suite', es: 'alta dirección / equipo directivo', example: 'The proposal was approved at C-suite level.' },
        { en: 'deliverable', es: 'entregable', example: 'Each phase of the project has clearly defined deliverables and timelines.' },
        { en: 'bandwidth (figurative)', es: 'capacidad / disponibilidad (metafórico)', example: 'I don\'t have the bandwidth to take on another project right now.' },
        { en: 'pivot (strategic)', es: 'cambio estratégico radical', example: 'The company made a strategic pivot from hardware to software as a service.' },
        { en: 'ecosystem (business)', es: 'ecosistema (empresarial)', example: 'Apple has built a powerful ecosystem that makes switching costs extremely high.' },
        { en: 'headwinds / tailwinds', es: 'vientos en contra / de cola', example: 'The business faces significant headwinds from rising inflation and supply chain disruptions.' },
        { en: 'runway (start-up)', es: 'tiempo de vida / autonomía financiera', example: 'With current burn rate, the start-up has 18 months of runway.' }
      ],
      exercises: [
        { type: 'choice', q: 'What is a "value proposition"?', opts: ['The price of a product', 'The unique benefit a company offers to its customers', 'A financial valuation'], a: 'The unique benefit a company offers to its customers', exp: '"Value proposition" = the unique combination of benefits that makes a company\'s offering attractive.' },
        { type: 'write', q: 'Complete: The company faces significant ___ from rising energy costs and geopolitical uncertainty.', a: 'headwinds', exp: '"Headwinds" = external forces that slow or obstruct business performance.' },
        { type: 'choice', q: 'What does "C-suite" refer to?', opts: ['Customer service department', 'The highest level of executive management (CEO, CFO, COO, etc.)', 'A type of corporate software'], a: 'The highest level of executive management (CEO, CFO, COO, etc.)', exp: '"C-suite" refers to executives with "Chief" in their title — the top decision-makers.' },
        { type: 'write', q: 'Complete: With a monthly burn rate of $150k, the start-up has approximately 12 months of ___ left.', a: 'runway', exp: '"Runway" = how long a company can operate before running out of cash.' },
        { type: 'choice', q: 'What is "organic growth"?', opts: ['Growth from agriculture-related businesses', 'Growth achieved internally without acquisitions or mergers', 'Environmentally sustainable growth'], a: 'Growth achieved internally without acquisitions or mergers', exp: '"Organic growth" = growth from existing operations — not from buying other companies.' }
      ],
      communicativeTask: { title: 'Executive vocabulary in use', instruction: 'Write a 10-sentence executive summary of a company\'s annual strategy using at least 10 words from today\'s list. Include: market position, key challenges (headwinds), strategic priorities and outlook.', output: 'Executive summary paragraph.' }
    }

  };


  // ============================================================
  // LEARNING PATHS BUSINESS ENGLISH
  // ============================================================
  const businessLearningPaths = {
    B1: {
      level: 'B1', title: 'Business English B1', optional: true,
      color: '#0891B2', icon: '💼',
      description: 'Comunicación profesional esencial: emails, reuniones, presentaciones y negociación básica.',
      cefrRef: 'MCER Cap. 4.1.2 — Uso de la lengua con fines específicos (ámbito laboral)',
      modules: ['be_b1_emails','be_b1_meetings','be_b1_presentations','be_b1_negotiations','be_b1_reports','be_b1_vocab_business']
    },
    B2: {
      level: 'B2', title: 'Business English B2', optional: true,
      color: '#7C3AED', icon: '📈',
      description: 'Comunicación corporativa avanzada: propuestas, negociaciones complejas y presentaciones persuasivas.',
      cefrRef: 'MCER Cap. 4.1.2 — Uso de la lengua con fines específicos B2',
      modules: ['be_b2_advanced_emails','be_b2_negotiations_advanced','be_b2_presentations_advanced','be_b2_vocab_finance']
    },
    C1: {
      level: 'C1', title: 'Business English C1', optional: true,
      color: '#DC2626', icon: '🏆',
      description: 'Comunicación ejecutiva de alto nivel: estrategia, liderazgo, crisis y escritura corporativa.',
      cefrRef: 'MCER Cap. 4.1.2 — Uso de la lengua con fines específicos C1',
      modules: ['be_c1_executive_communication','be_c1_strategic_writing','be_c1_vocab_advanced']
    }
  };

  const allBusinessModules = { ...businessModules, ...businessModulesB2, ...businessModulesC1 };


  // ============================================================
  // EXPORTACIÓN
  // ============================================================
  if (typeof window !== 'undefined') {
    window.businessModules = allBusinessModules;
    window.businessLearningPaths = businessLearningPaths;

    // Registrar en el sistema principal de vocabulario los topics de business vocab
    if (Array.isArray(window.vocabTopics)) {
      ['be_b1_vocab_business','be_b2_vocab_finance','be_c1_vocab_advanced'].forEach(id => {
        const mod = allBusinessModules[id];
        if (mod && mod.words && !window.vocabTopics.find(t => t.id === id)) {
          window.vocabTopics.push({ id: mod.id, title: mod.title, icon: '💼', count: mod.words.length, level: mod.level, section: 'business', words: mod.words });
        }
      });
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { allBusinessModules, businessLearningPaths };
  }

}());
