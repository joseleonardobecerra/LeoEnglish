// data-reading-writing.js
// Contiene todos los textos de comprensión (Reading) y ejercicios de escritura (Writing)

const readingTexts = [
  {
    id:'school_day', title:'A Day at School', level:'A1', levelColor:'#38B2AC',
    topic:'Rutina diaria', questions:6, desc:'Un estudiante describe su día escolar con vocabulario básico.',
    body:`My name is <span class="word-hl" data-tr="Tom (nombre)">Tom</span>. I am <span class="word-hl" data-tr="doce">twelve</span> years old and I <span class="word-hl" data-tr="voy / asisto">go</span> to <span class="word-hl" data-tr="escuela secundaria">secondary school</span>. My school is <span class="word-hl" data-tr="cerca de">near</span> my house, so I <span class="word-hl" data-tr="voy a pie / camino">walk</span> there every morning. The <span class="word-hl" data-tr="clases / lecciones">lessons</span> start at <span class="word-hl" data-tr="las ocho y cuarto">quarter past eight</span>. My favourite <span class="word-hl" data-tr="asignatura / materia">subject</span> is English because it is <span class="word-hl" data-tr="divertido">fun</span> and <span class="word-hl" data-tr="útil">useful</span>. My teacher, Mrs Johnson, is very <span class="word-hl" data-tr="amable / bondadosa">kind</span>. At <span class="word-hl" data-tr="la hora del almuerzo">lunchtime</span>, I eat with my <span class="word-hl" data-tr="compañeros de clase">classmates</span> in the <span class="word-hl" data-tr="cantina / comedor">canteen</span>. After school, I always do my <span class="word-hl" data-tr="deberes / tarea escolar">homework</span> before watching TV. I think I am a <span class="word-hl" data-tr="trabajador / dedicado">hardworking</span> student.`,
    qs:[
      {q:'How old is Tom?',opts:['Ten','Twelve','Fifteen','Eight'],a:1,exp:'"I am twelve years old."'},
      {q:'How does Tom get to school?',opts:['By bus','By car','He walks','By bike'],a:2,exp:'"I walk there every morning."'},
      {q:'What time do lessons start?',opts:['At eight','At quarter to eight','At quarter past eight','At half past eight'],a:2,exp:'"The lessons start at quarter past eight."'},
      {q:'Why does Tom like English?',opts:['It is easy','It is fun and useful','It is short','The teacher is strict'],a:1,exp:'"It is fun and useful."'},
      {q:'Where does Tom eat at lunchtime?',opts:['At home','In the classroom','In the park','In the canteen'],a:3,exp:'"I eat with my classmates in the canteen."'},
      {q:'What does Tom do after school first?',opts:['He watches TV','He plays football','He does his homework','He sleeps'],a:2,exp:'"I always do my homework before watching TV."'},
    ]
  },
  {
    id:'my_family', title:'My Family', level:'A1', levelColor:'#805AD5',
    topic:'Familia', questions:6, desc:'Descripción detallada de los miembros de una familia.',
    body:`Hello! My name is <span class="word-hl" data-tr="Sofía">Sofia</span>. I am going to tell you about my <span class="word-hl" data-tr="familia">family</span>. We are a <span class="word-hl" data-tr="familia grande">big family</span> — there are six people in my house. My <span class="word-hl" data-tr="padre">father</span>, Carlos, is an <span class="word-hl" data-tr="ingeniero">engineer</span>. He is <span class="word-hl" data-tr="alto y delgado">tall and slim</span>. My <span class="word-hl" data-tr="madre">mother</span>, Ana, <span class="word-hl" data-tr="trabaja como">works as</span> a nurse at the local <span class="word-hl" data-tr="hospital">hospital</span>. She is very <span class="word-hl" data-tr="cariñosa">caring</span>. I have two <span class="word-hl" data-tr="hermanos">brothers</span>: Luis, who is <span class="word-hl" data-tr="mayor que yo">older than me</span>, and Pablo, who is <span class="word-hl" data-tr="el más joven">the youngest</span>. My <span class="word-hl" data-tr="abuela">grandmother</span> also lives with us. She is <span class="word-hl" data-tr="jubilada">retired</span> but she is always very <span class="word-hl" data-tr="activa">active</span>. She makes <span class="word-hl" data-tr="deliciosa">delicious</span> food every Sunday. We are a very <span class="word-hl" data-tr="unida">close</span> family and we love spending time together.`,
    qs:[
      {q:'How many people are in Sofia\'s family?',opts:['Four','Five','Six','Seven'],a:2,exp:'"There are six people in my house."'},
      {q:'What is the father\'s job?',opts:['He is a doctor','He is an engineer','He is a teacher','He is a nurse'],a:1,exp:'"My father, Carlos, is an engineer."'},
      {q:'Where does the mother work?',opts:['At a school','At a supermarket','At the local hospital','At home'],a:2,exp:'"She works as a nurse at the local hospital."'},
      {q:'How many brothers does Sofia have?',opts:['One','Two','Three','None'],a:1,exp:'"I have two brothers: Luis and Pablo."'},
      {q:'Who is the youngest in the family?',opts:['Sofia','Luis','Pablo','The grandmother'],a:2,exp:'"Pablo, who is the youngest."'},
      {q:'What does the grandmother do on Sundays?',opts:['She watches TV','She sleeps','She makes delicious food','She goes for a walk'],a:2,exp:'"She makes delicious food every Sunday."'},
    ]
  },
  {
    id:'london', title:'Welcome to London', level:'A2', levelColor:'#E53E3E',
    topic:'Ciudades y turismo', questions:6, desc:'Guía turística de Londres con preposiciones y vocabulario de ciudad.',
    body:`<span class="word-hl" data-tr="Londres">London</span> is the <span class="word-hl" data-tr="capital">capital</span> of the United Kingdom and one of the most <span class="word-hl" data-tr="visitadas">visited</span> cities in the world. It has a <span class="word-hl" data-tr="población">population</span> of about nine million people. The River <span class="word-hl" data-tr="Támesis">Thames</span> runs through the <span class="word-hl" data-tr="corazón / centro">heart</span> of the city. <span class="word-hl" data-tr="En la orilla norte">On the north bank</span>, you can find the famous Tower of London. <span class="word-hl" data-tr="Justo enfrente">Opposite</span> it, there is <span class="word-hl" data-tr="el icónico">the iconic</span> Tower Bridge. <span class="word-hl" data-tr="En el centro">In the city centre</span>, Buckingham Palace is the official <span class="word-hl" data-tr="residencia">residence</span> of the King. There are also world-class <span class="word-hl" data-tr="museos">museums</span> like the British Museum, which are all <span class="word-hl" data-tr="de entrada gratuita">free to enter</span>. <span class="word-hl" data-tr="El transporte público">Public transport</span> in London is <span class="word-hl" data-tr="excelente">excellent</span>. The famous <span class="word-hl" data-tr="metro / subterráneo">Underground</span> (called "the Tube") <span class="word-hl" data-tr="conecta">connects</span> all <span class="word-hl" data-tr="zonas / partes">parts</span> of the city. <span class="word-hl" data-tr="El fin de semana">At the weekend</span>, locals love to visit the many <span class="word-hl" data-tr="parques y mercados">parks and markets</span>.`,
    qs:[
      {q:'What is the population of London?',opts:['Five million','Seven million','About nine million','Twelve million'],a:2,exp:'"It has a population of about nine million people."'},
      {q:'What river runs through London?',opts:['The Seine','The Rhine','The Thames','The Nile'],a:2,exp:'"The River Thames runs through the heart of the city."'},
      {q:'Where is Tower Bridge?',opts:['Near Buckingham Palace','Opposite the Tower of London','In the city centre','On the south bank'],a:1,exp:'"Opposite it, there is the iconic Tower Bridge."'},
      {q:'How much does it cost to enter the British Museum?',opts:['£10','£25','It\'s free','£5'],a:2,exp:'"Museums like the British Museum are all free to enter."'},
      {q:'What is the London Underground also called?',opts:['The Metro','The Tube','The Bus','The Train'],a:1,exp:'"The famous Underground (called \'the Tube\')"'},
      {q:'What do locals do at the weekend?',opts:['They go to museums','They visit parks and markets','They go shopping','They watch football'],a:1,exp:'"At the weekend, locals love to visit the many parks and markets."'},
    ]
  },
  {
    id:'british_weather', title:'The British Weather', level:'A2', levelColor:'#D69E2E',
    topic:'Tiempo atmosférico', questions:6, desc:'El famoso tiempo inglés: vocabulario y estructuras del clima.',
    body:`British people are <span class="word-hl" data-tr="famosos por">famous for</span> talking about the <span class="word-hl" data-tr="tiempo (meteorológico)">weather</span>. And there is a good reason for this — the weather in the UK is <span class="word-hl" data-tr="muy cambiante">very changeable</span>. You can have four <span class="word-hl" data-tr="estaciones del año">seasons</span> in one day! In <span class="word-hl" data-tr="invierno">winter</span>, it is <span class="word-hl" data-tr="frío">cold</span>, <span class="word-hl" data-tr="gris / nublado">grey</span> and it often <span class="word-hl" data-tr="llueve con fuerza">rains heavily</span>. <span class="word-hl" data-tr="Temperaturas bajo cero">Temperatures below zero</span> are <span class="word-hl" data-tr="comunes">common</span> in the north. <span class="word-hl" data-tr="La primavera">Spring</span> is <span class="word-hl" data-tr="suave y agradable">mild and pleasant</span>, with <span class="word-hl" data-tr="flores por todas partes">flowers everywhere</span>. <span class="word-hl" data-tr="El verano">Summer</span> is <span class="word-hl" data-tr="cálido pero corto">warm but short</span> — the <span class="word-hl" data-tr="temperatura media">average temperature</span> is only about 20 degrees. Many British people carry an <span class="word-hl" data-tr="paraguas">umbrella</span> every day, <span class="word-hl" data-tr="por si acaso">just in case</span>. <span class="word-hl" data-tr="El otoño">Autumn</span> brings <span class="word-hl" data-tr="hojas de colores">colourful leaves</span> and <span class="word-hl" data-tr="vientos fuertes">strong winds</span>. Despite the <span class="word-hl" data-tr="fama / reputación">reputation</span>, many people love the British weather because it is rarely <span class="word-hl" data-tr="extremo">extreme</span>.`,
    qs:[
      {q:'Why do British people often talk about the weather?',opts:['Because they are boring','Because the weather is very changeable','Because it is always sunny','Because they have nothing else to talk about'],a:1,exp:'"The weather in the UK is very changeable."'},
      {q:'What is winter like in northern parts of the UK?',opts:['Hot and sunny','Mild and pleasant','Cold with temperatures below zero','Windy and warm'],a:2,exp:'"Temperatures below zero are common in the north."'},
      {q:'What is the average summer temperature?',opts:['About 10 degrees','About 15 degrees','About 20 degrees','About 30 degrees'],a:2,exp:'"The average temperature is only about 20 degrees."'},
      {q:'Why do many people carry an umbrella every day?',opts:['It\'s fashionable','Just in case it rains','The law requires it','It is always raining'],a:1,exp:'"Many British people carry an umbrella every day, just in case."'},
      {q:'What does autumn bring?',opts:['Flowers and sunshine','Snow and ice','Colourful leaves and strong winds','Hot days and cool nights'],a:2,exp:'"Autumn brings colourful leaves and strong winds."'},
      {q:'Why do many people actually like British weather?',opts:['Because it is always warm','Because it is rarely extreme','Because it is always sunny','Because it snows a lot'],a:1,exp:'"Many people love the British weather because it is rarely extreme."'},
    ]
  },
  {
    id:'daily_routine', title:"Maria's Daily Routine", level:'A1', levelColor:'#059669',
    topic:'Rutina diaria', questions:6, desc:'Descripción detallada de una rutina usando presente simple y adverbios.',
    body:`My name is Maria and I am going to describe my <span class="word-hl" data-tr="rutina diaria">daily routine</span>. I <span class="word-hl" data-tr="me despierto">wake up</span> at <span class="word-hl" data-tr="las siete en punto">seven o'clock</span> every morning. First, I <span class="word-hl" data-tr="me ducho">have a shower</span> and then I <span class="word-hl" data-tr="me visto">get dressed</span>. I <span class="word-hl" data-tr="desayuno">have breakfast</span> at half past seven. I usually eat <span class="word-hl" data-tr="tostadas con mantequilla">toast and butter</span> and drink a cup of <span class="word-hl" data-tr="café negro">black coffee</span>. I leave the house at <span class="word-hl" data-tr="las ocho menos cuarto">quarter to eight</span> and I <span class="word-hl" data-tr="tomo el metro">take the underground</span> to work. I <span class="word-hl" data-tr="llego a">arrive at</span> my office at eight thirty. I work as an <span class="word-hl" data-tr="contable / contadora">accountant</span>. At <span class="word-hl" data-tr="mediodía">midday</span>, I have <span class="word-hl" data-tr="un descanso de una hora">a one-hour break</span>. I often go to a <span class="word-hl" data-tr="cafetería">café</span> near my office for <span class="word-hl" data-tr="el almuerzo">lunch</span>. I <span class="word-hl" data-tr="termino de trabajar">finish work</span> at five o'clock and I am usually home by <span class="word-hl" data-tr="las seis">six o'clock</span>. In the evening, I <span class="word-hl" data-tr="preparo la cena">cook dinner</span> and <span class="word-hl" data-tr="me relajo">relax</span>. I <span class="word-hl" data-tr="me acuesto / voy a la cama">go to bed</span> at about <span class="word-hl" data-tr="las once de la noche">eleven at night</span>.`,
    qs:[
      {q:'What time does Maria wake up?',opts:['At six o\'clock','At seven o\'clock','At half past seven','At quarter to eight'],a:1,exp:'"I wake up at seven o\'clock every morning."'},
      {q:'What does Maria usually have for breakfast?',opts:['Cereal and milk','Eggs and bacon','Toast and butter with coffee','Fruit and juice'],a:2,exp:'"I usually eat toast and butter and drink a cup of black coffee."'},
      {q:'How does Maria travel to work?',opts:['By car','By bus','On foot','She takes the underground'],a:3,exp:'"I take the underground to work."'},
      {q:'What is Maria\'s job?',opts:['She is a nurse','She is a teacher','She is an accountant','She is an engineer'],a:2,exp:'"I work as an accountant."'},
      {q:'How long is Maria\'s lunch break?',opts:['Thirty minutes','One hour','Two hours','Forty-five minutes'],a:1,exp:'"I have a one-hour break at midday."'},
      {q:'What time does Maria go to bed?',opts:['At nine o\'clock','At ten o\'clock','At about eleven at night','At midnight'],a:2,exp:'"I go to bed at about eleven at night."'},
    ]
  },
  {
    id:'shopping_day', title:'A Shopping Day', level:'A1', levelColor:'#D97706',
    topic:'Compras y dinero', questions:6, desc:'Ir de compras: vocabulario de tiendas, precios y cantidades.',
    body:`It is Saturday morning and <span class="word-hl" data-tr="Emma">Emma</span> wants to go <span class="word-hl" data-tr="de compras">shopping</span>. She <span class="word-hl" data-tr="hace una lista">makes a list</span> of things she needs to <span class="word-hl" data-tr="comprar">buy</span>. First, she goes to the <span class="word-hl" data-tr="panadería">baker's</span> and buys a <span class="word-hl" data-tr="hogaza de pan">loaf of bread</span> and some <span class="word-hl" data-tr="bollos / panecillos">rolls</span>. Then she goes to the <span class="word-hl" data-tr="supermercado">supermarket</span> to buy <span class="word-hl" data-tr="frutas y verduras">fruit and vegetables</span>. She <span class="word-hl" data-tr="elige / selecciona">chooses</span> some <span class="word-hl" data-tr="manzanas y naranjas">apples and oranges</span>. At the <span class="word-hl" data-tr="caja / mostrador">checkout</span>, the <span class="word-hl" data-tr="cajero/a">cashier</span> says: "That's <span class="word-hl" data-tr="doce euros con cincuenta">twelve euros fifty, please." Emma <span class="word-hl" data-tr="paga">pays</span> with a <span class="word-hl" data-tr="billete de veinte euros">twenty-euro note</span> and gets <span class="word-hl" data-tr="el cambio / la vuelta">change</span> back. After the supermarket, she goes to a <span class="word-hl" data-tr="tienda de ropa">clothes shop</span>. She tries on a <span class="word-hl" data-tr="vestido azul">blue dress</span> but it is too <span class="word-hl" data-tr="pequeño / estrecho">small</span>. She asks for a <span class="word-hl" data-tr="talla más grande">bigger size</span>. Finally, she goes home <span class="word-hl" data-tr="con bolsas llenas">with full bags</span> and a <span class="word-hl" data-tr="gran sonrisa">big smile</span>.`,
    qs:[
      {q:'What day does Emma go shopping?',opts:['Friday','Saturday','Sunday','Monday'],a:1,exp:'"It is Saturday morning and Emma wants to go shopping."'},
      {q:'What does Emma buy at the baker\'s?',opts:['Cakes and biscuits','A loaf of bread and some rolls','Croissants and butter','Sandwiches and soup'],a:1,exp:'"She buys a loaf of bread and some rolls."'},
      {q:'How much does Emma pay at the supermarket?',opts:['Ten euros','Twelve euros fifty','Twenty euros','Fifteen euros'],a:1,exp:'"That\'s twelve euros fifty, please."'},
      {q:'How does Emma pay?',opts:['By card','With coins','With a twenty-euro note','By phone'],a:2,exp:'"She pays with a twenty-euro note."'},
      {q:'Why doesn\'t Emma buy the blue dress?',opts:['It is too expensive','It is the wrong colour','It is too small','The shop is closed'],a:2,exp:'"She tries on a blue dress but it is too small."'},
      {q:'How does Emma feel at the end?',opts:['Tired and sad','Happy with a big smile','Hungry and thirsty','Angry and upset'],a:1,exp:'"She goes home with full bags and a big smile."'},
    ]
  },
  {
    id:'healthy_lifestyle', title:'A Healthy Lifestyle', level:'A2', levelColor:'#059669',
    topic:'Salud y hábitos', questions:6, desc:'Texto sobre hábitos saludables con vocabulario de salud y rutinas.',
    body:`More and more people are <span class="word-hl" data-tr="interesados en">interested in</span> living a <span class="word-hl" data-tr="estilo de vida saludable">healthy lifestyle</span>. But what does this really mean? <span class="word-hl" data-tr="En primer lugar">First of all</span>, it means eating a <span class="word-hl" data-tr="dieta equilibrada">balanced diet</span>. This includes plenty of <span class="word-hl" data-tr="frutas y verduras">fruit and vegetables</span>, <span class="word-hl" data-tr="cereales integrales">whole grains</span> and <span class="word-hl" data-tr="proteínas magras">lean proteins</span>. <span class="word-hl" data-tr="El azúcar y la grasa">Sugar and fat</span> should be <span class="word-hl" data-tr="limitados">limited</span>. <span class="word-hl" data-tr="En segundo lugar">Secondly</span>, <span class="word-hl" data-tr="hacer ejercicio regularmente">exercising regularly</span> is essential. <span class="word-hl" data-tr="Los expertos recomiendan">Experts recommend</span> at least thirty minutes of <span class="word-hl" data-tr="actividad física moderada">moderate physical activity</span> every day. This can be as simple as <span class="word-hl" data-tr="caminar a paso rápido">walking briskly</span>, <span class="word-hl" data-tr="nadar">swimming</span> or <span class="word-hl" data-tr="montar en bicicleta">cycling</span>. <span class="word-hl" data-tr="Dormir bien">Getting enough sleep</span> is also very important. Most adults need <span class="word-hl" data-tr="entre siete y ocho horas">between seven and eight hours</span> per night. <span class="word-hl" data-tr="Finalmente">Finally</span>, it is important to <span class="word-hl" data-tr="reducir el estrés">reduce stress</span>. <span class="word-hl" data-tr="Actividades como">Activities such as</span> reading, <span class="word-hl" data-tr="meditar">meditating</span> or spending time with <span class="word-hl" data-tr="los seres queridos">loved ones</span> can help. Small <span class="word-hl" data-tr="cambios">changes</span> in your daily <span class="word-hl" data-tr="hábitos">habits</span> can make a <span class="word-hl" data-tr="gran diferencia">big difference</span> to your <span class="word-hl" data-tr="bienestar">wellbeing</span>.`,
    qs:[
      {q:'What does a balanced diet include?',opts:['Only vegetables and water','Fruit, vegetables, whole grains and lean proteins','Fast food and snacks','Lots of sugar and fat'],a:1,exp:'"A balanced diet includes plenty of fruit and vegetables, whole grains and lean proteins."'},
      {q:'How much exercise do experts recommend every day?',opts:['Ten minutes','At least thirty minutes','One hour','Two hours'],a:1,exp:'"Experts recommend at least thirty minutes of moderate physical activity every day."'},
      {q:'Which of these is NOT mentioned as a form of exercise?',opts:['Walking briskly','Swimming','Cycling','Running'],a:3,exp:'Walking, swimming and cycling are mentioned. Running is not.'},
      {q:'How many hours of sleep do most adults need?',opts:['Five to six hours','Six to seven hours','Seven to eight hours','Eight to ten hours'],a:2,exp:'"Most adults need between seven and eight hours per night."'},
      {q:'Which activity can help reduce stress?',opts:['Eating fast food','Watching horror films','Meditating or spending time with loved ones','Working longer hours'],a:2,exp:'"Activities such as reading, meditating or spending time with loved ones can help."'},
      {q:'What can small changes in daily habits do?',opts:['Nothing significant','Make a big difference to your wellbeing','Make you very tired','Create more stress'],a:1,exp:'"Small changes in your daily habits can make a big difference to your wellbeing."'},
    ]
  },
  {
    id:'technology_life', title:'Technology in Our Lives', level:'A2', levelColor:'#3182CE',
    topic:'Tecnología y sociedad', questions:6, desc:'Cómo la tecnología cambia nuestra vida cotidiana. Vocabulario moderno A2.',
    body:`<span class="word-hl" data-tr="La tecnología">Technology</span> is <span class="word-hl" data-tr="cambiando">changing</span> the way we live, work and <span class="word-hl" data-tr="nos comunicamos">communicate</span>. Today, most people <span class="word-hl" data-tr="dependen de">depend on</span> their <span class="word-hl" data-tr="teléfonos inteligentes">smartphones</span> for almost everything — from <span class="word-hl" data-tr="hacer llamadas">making calls</span> to <span class="word-hl" data-tr="pedir comida">ordering food</span>. <span class="word-hl" data-tr="Internet">The internet</span> <span class="word-hl" data-tr="nos permite">allows us</span> to <span class="word-hl" data-tr="conectar">connect</span> with people all over the world in <span class="word-hl" data-tr="cuestión de segundos">seconds</span>. <span class="word-hl" data-tr="Las redes sociales">Social media</span> platforms like Instagram and TikTok are <span class="word-hl" data-tr="extremadamente populares">extremely popular</span>, <span class="word-hl" data-tr="especialmente entre">especially among</span> young people. However, technology also has some <span class="word-hl" data-tr="desventajas">disadvantages</span>. Many people spend too much time <span class="word-hl" data-tr="mirando pantallas">looking at screens</span> and not enough time <span class="word-hl" data-tr="interactuando cara a cara">interacting face-to-face</span>. This can <span class="word-hl" data-tr="afectar negativamente">negatively affect</span> <span class="word-hl" data-tr="relaciones">relationships</span> and <span class="word-hl" data-tr="salud mental">mental health</span>. <span class="word-hl" data-tr="Además">Moreover</span>, <span class="word-hl" data-tr="la privacidad en línea">online privacy</span> is a growing <span class="word-hl" data-tr="preocupación">concern</span>. <span class="word-hl" data-tr="A pesar de estos problemas">Despite these issues</span>, technology is <span class="word-hl" data-tr="innegablemente">undeniably</span> making our lives <span class="word-hl" data-tr="más fáciles y conectadas">easier and more connected</span> in many ways.`,
    qs:[
      {q:'What do most people use their smartphones for?',opts:['Only making calls','Almost everything, from calls to ordering food','Taking photos only','Listening to music only'],a:1,exp:'"Most people depend on their smartphones for almost everything."'},
      {q:'What does the internet allow us to do?',opts:['Watch television','Connect with people all over the world in seconds','Buy things only','Play video games'],a:1,exp:'"The internet allows us to connect with people all over the world in seconds."'},
      {q:'Who especially uses social media platforms?',opts:['Elderly people','Business people','Young people','Teachers'],a:2,exp:'"Especially among young people."'},
      {q:'What is a disadvantage of technology mentioned in the text?',opts:['It is too expensive','People spend too much time on screens and not enough face-to-face','The internet is too slow','Smartphones break easily'],a:1,exp:'"Many people spend too much time looking at screens and not enough time interacting face-to-face."'},
      {q:'What can too much screen time negatively affect?',opts:['Physical fitness only','Relationships and mental health','Academic performance only','Sleep patterns only'],a:1,exp:'"This can negatively affect relationships and mental health."'},
      {q:'What is the writer\'s overall conclusion about technology?',opts:['Technology is completely bad for us','Technology is making our lives easier and more connected','Technology should be banned','Technology is only useful for young people'],a:1,exp:'"Despite these issues, technology is undeniably making our lives easier and more connected."'},
    ]
  },
  {
    id:'colombian_festival', title:'A Colombian Festival', level:'A2', levelColor:'#7C3AED',
    topic:'Cultura y tradiciones', questions:6, desc:'Texto sobre cultura colombiana para conectar con el contexto del estudiante.',
    body:`Colombia is a <span class="word-hl" data-tr="vibrante / llena de vida">vibrant</span> country with many <span class="word-hl" data-tr="tradiciones únicas">unique traditions</span> and <span class="word-hl" data-tr="festivales">festivals</span>. One of the most <span class="word-hl" data-tr="famosos">famous</span> is the <span class="word-hl" data-tr="Carnaval de Barranquilla">Barranquilla Carnival</span>, which <span class="word-hl" data-tr="se celebra / tiene lugar">takes place</span> every year before <span class="word-hl" data-tr="la Cuaresma">Lent</span>. It is <span class="word-hl" data-tr="reconocido / declarado">recognised</span> by <span class="word-hl" data-tr="la UNESCO">UNESCO</span> as a <span class="word-hl" data-tr="Patrimonio de la Humanidad">World Heritage</span> event. During the carnival, thousands of people <span class="word-hl" data-tr="se disfrazan con">dress up in</span> <span class="word-hl" data-tr="coloridos disfraces">colourful costumes</span> and <span class="word-hl" data-tr="bailan por las calles">dance through the streets</span>. The <span class="word-hl" data-tr="música">music</span> is <span class="word-hl" data-tr="increíble">incredible</span> — you can hear <span class="word-hl" data-tr="cumbia, porro y mapalé">cumbia, porro and mapalé</span>. Local <span class="word-hl" data-tr="artesanos">artisans</span> make <span class="word-hl" data-tr="elaboradas máscaras">elaborate masks</span> and <span class="word-hl" data-tr="decoraciones">decorations</span>. <span class="word-hl" data-tr="La comida tradicional">Traditional food</span> like <span class="word-hl" data-tr="arepas y empanadas">arepas and empanadas</span> is <span class="word-hl" data-tr="vendida en puestos">sold at stalls</span> everywhere. The <span class="word-hl" data-tr="atmósfera / ambiente">atmosphere</span> is <span class="word-hl" data-tr="eléctrica / emocionante">electric</span> and <span class="word-hl" data-tr="todo el mundo participa">everybody joins in</span>. It is a <span class="word-hl" data-tr="poderoso recordatorio">powerful reminder</span> of Colombia's <span class="word-hl" data-tr="riqueza cultural">rich culture</span> and the <span class="word-hl" data-tr="espíritu alegre">joyful spirit</span> of its people.`,
    qs:[
      {q:'When does the Barranquilla Carnival take place?',opts:['After Easter','Before Lent every year','In summer','In December'],a:1,exp:'"It takes place every year before Lent."'},
      {q:'Who recognises the carnival as World Heritage?',opts:['The United Nations','The Colombian government','UNESCO','The European Union'],a:2,exp:'"It is recognised by UNESCO as a World Heritage event."'},
      {q:'What do people wear during the carnival?',opts:['Normal clothes','School uniforms','Colourful costumes','Business suits'],a:2,exp:'"Thousands of people dress up in colourful costumes."'},
      {q:'Which type of music can you hear?',opts:['Rock and jazz','Cumbia, porro and mapalé','Classical music','Hip-hop'],a:1,exp:'"You can hear cumbia, porro and mapalé."'},
      {q:'What food is sold at the carnival?',opts:['Pizza and pasta','Sushi and rice','Arepas and empanadas','Fish and chips'],a:2,exp:'"Traditional food like arepas and empanadas is sold at stalls."'},
      {q:'What does the carnival remind us of?',opts:['Colombia\'s history','Colombia\'s rich culture and joyful spirit','Colombia\'s economy','Colombia\'s geography'],a:1,exp:'"A powerful reminder of Colombia\'s rich culture and the joyful spirit of its people."'},
    ]
  },
];

const writingExercises = [
  {
    id:'word_order_1', title:'Sintaxis básica: frases afirmativas', type:'order',
    typeLabel:'Sintaxis', typeColor:'#3182CE',
    desc:'Ordena las palabras para construir oraciones afirmativas correctas.',
    tasks:[
      {prompt:'Forma una frase con estas palabras:',words:['is','She','a','teacher.'],answer:'She is a teacher.',tip:'Sujeto + TO BE + artículo + profesión.'},
      {prompt:'Forma una frase con estas palabras:',words:['every','I','breakfast','have','day.'],answer:'I have breakfast every day.',tip:'Sujeto + verbo + objeto + expresión de tiempo.'},
      {prompt:'Forma una frase con estas palabras:',words:['are','at','They','park.','the'],answer:'They are at the park.',tip:'Sujeto + TO BE + preposición + artículo + lugar.'},
      {prompt:'Forma una frase con estas palabras:',words:['usually','He','early.','gets','up'],answer:'He usually gets up early.',tip:'"Usually" va entre el sujeto y el verbo principal.'},
      {prompt:'Forma una frase con estas palabras:',words:['two','have','I','brothers.'],answer:'I have two brothers.',tip:'Sujeto + verbo + número + sustantivo.'},
      {prompt:'Ordena para formar una pregunta:',words:['name?','your','is','What'],answer:'What is your name?',tip:'WH-question + TO BE + sujeto + ?'},
      {prompt:'Forma la negación:',words:['not','speak','He','does','French.'],answer:'He does not speak French.',tip:'Sujeto + does not + verbo base (sin -s).'},
    ]
  },
  {
    id:'word_order_2', title:'Sintaxis media: preguntas y negaciones', type:'order',
    typeLabel:'Sintaxis', typeColor:'#3182CE',
    desc:'Construye preguntas y negaciones en presente simple y continuo.',
    tasks:[
      {prompt:'Forma la pregunta:',words:['English?','speak','Does','she'],answer:'Does she speak English?',tip:'Does + sujeto 3ª persona + verbo base + ?'},
      {prompt:'Forma la negación:',words:["work","doesn't","She","here."],answer:"She doesn't work here.",tip:'"doesn\'t" + verbo base sin -s.'},
      {prompt:'Forma la pregunta en continuo:',words:['reading?','you','Are','now'],answer:'Are you reading now?',tip:'TO BE + sujeto + verbo-ING + ?'},
      {prompt:'Forma la negación en continuo:',words:['not','are','listening.','They'],answer:'They are not listening.',tip:'"are not" + verbo-ING para negación continua.'},
      {prompt:'Forma la pregunta WH:',words:['live?','do','you','Where'],answer:'Where do you live?',tip:'WH-word + auxiliar + sujeto + verbo base.'},
      {prompt:'Ordena la frase con adverbio:',words:['never','He','meat.','eats'],answer:'He never eats meat.',tip:'"Never" va entre el sujeto y el verbo principal.'},
      {prompt:'Forma la pregunta con have:',words:['a','you','Do','have','dog?'],answer:'Do you have a dog?',tip:'"Do + you + have + objeto + ?" para preguntar con have.'},
    ]
  },
  {
    id:'transform_negatives', title:'Transforma al negativo', type:'transform',
    typeLabel:'Transformación', typeColor:'#805AD5',
    desc:'Convierte oraciones afirmativas en negaciones correctas.',
    tasks:[
      {prompt:'"I like coffee." → Escribe la negación completa.',answer:"I don't like coffee.",tip:'"I don\'t + verbo base." Para I/you/we/they.'},
      {prompt:'"She speaks German." → Escribe la negación.',answer:"She doesn't speak German.",tip:'"She doesn\'t + verbo base (sin -s)." 3ª persona.'},
      {prompt:'"They are playing football." → Negación del continuo.',answer:'They are not playing football.',tip:'"are + not + verbo-ING" → "aren\'t playing" o "are not playing".'},
      {prompt:'"He has a car." → Negación con have.',answer:"He doesn't have a car.",tip:'"He doesn\'t have" — en negaciones, "have" no cambia.'},
      {prompt:'"We live in Madrid." → Negación.',answer:"We don't live in Madrid.",tip:'"We don\'t + verbo base." Para we.'},
      {prompt:'"It is raining." → Negación del continuo.',answer:'It is not raining.',tip:'"It isn\'t raining" / "It is not raining".'},
    ]
  },
  {
    id:'transform_questions', title:'Transforma al interrogativo', type:'transform',
    typeLabel:'Transformación', typeColor:'#805AD5',
    desc:'Convierte afirmaciones en preguntas de sí/no correctas.',
    tasks:[
      {prompt:'"You speak English." → Haz la pregunta de sí/no.',answer:'Do you speak English?',tip:'"Do + you + verbo base + ?"'},
      {prompt:'"She works here." → Haz la pregunta.',answer:'Does she work here?',tip:'"Does + she + verbo base + ?" (sin -s en el verbo).'},
      {prompt:'"They are watching TV." → Haz la pregunta continua.',answer:'Are they watching TV?',tip:'"Are + they + verbo-ING + ?"'},
      {prompt:'"He has a bicycle." → Haz la pregunta.',answer:'Does he have a bicycle?',tip:'"Does he have...?" — auxiliar does + have.'},
      {prompt:'"She is a doctor." → Haz la pregunta con be.',answer:'Is she a doctor?',tip:'"Is + sujeto + complemento + ?"'},
      {prompt:'"You are studying right now." → Haz la pregunta continua.',answer:'Are you studying right now?',tip:'"Are + you + verbo-ING + ?"'},
    ]
  },
  {
    id:'transform_tenses', title:'Simple ↔ Continuo', type:'transform',
    typeLabel:'Transformación', typeColor:'#D97706',
    desc:'Transforma frases del presente simple al continuo y viceversa.',
    tasks:[
      {prompt:'"She reads a book." → Cambia al presente continuo (ahora mismo).',answer:'She is reading a book.',tip:'"She is + read+ing + objeto".'},
      {prompt:'"They are playing football." → Cambia al presente simple (hábito).',answer:'They play football.',tip:'"They + play" — sin auxiliar en presente simple.'},
      {prompt:'"He works in London." → Al continuo (temporalmente, esta semana).',answer:'He is working in London.',tip:'"He is + work+ing". Uso temporal del continuo.'},
      {prompt:'"We study English." → Al continuo (en este momento).',answer:'We are studying English.',tip:'"We are + study+ing". Recuerda: study+ing = studying.'},
      {prompt:'"She is cooking dinner." → Al simple (hábito habitual).',answer:'She cooks dinner.',tip:'"She cooks" — 3ª persona simple.'},
      {prompt:'"I eat breakfast at 7." → Al continuo (ahora mismo).',answer:'I am eating breakfast.',tip:'"I am + eat+ing". Acción en este momento.'},
    ]
  },
  {
    id:'free_writing_intro', title:'Preséntate en inglés', type:'free',
    typeLabel:'Escritura libre', typeColor:'#059669',
    desc:'Escribe un párrafo presentándote: nombre, edad, ciudad, ocupación y gustos.',
    tasks:[
      {
        prompt:'Escríbete: Preséntate con al menos 5 oraciones. Incluye tu nombre, edad, de dónde eres, qué estudias o trabajas, y qué te gusta hacer.',
        hint:"My name is... · I am ... years old. · I am from... / I live in... · I am a student / I work as a... · I like / I love... · I don't like...",
        minWords:25,
        example:"My name is Carlos. I am 20 years old. I am from Cúcuta, Colombia. I am a university student. I study Business Administration. I love music and football. I don't like getting up early!"
      },
      {
        prompt:'Describe tu día ideal. ¿Qué harías? ¿A dónde irías? ¿Con quién? Usa presente simple para describir el día perfectamente.',
        hint:'I wake up at... · I have... for breakfast. · I go to... · I spend time with... · In the evening, I...',
        minWords:30,
        example:"On my perfect day, I wake up at ten o'clock. I have a big breakfast with eggs and coffee. Then I go to the beach with my friends. We swim and play football. In the evening, we eat a delicious dinner at a restaurant. It is a perfect day!"
      },
    ]
  },
  {
    id:'free_writing_person', title:'Describe a una persona', type:'free',
    typeLabel:'Escritura libre', typeColor:'#059669',
    desc:'Describe a un familiar o amigo: apariencia, personalidad y profesión.',
    tasks:[
      {
        prompt:'Describe a un miembro de tu familia. Incluye: relación, nombre, edad, aspecto físico, personalidad y qué hace. Mínimo 5 oraciones.',
        hint:'My [mother/father/brother/sister...] is... · He/She has... hair and... eyes. · He/She is very... (kind, funny, intelligent). · He/She works as a...',
        minWords:35,
        example:"My mother is Ana. She is 45 years old. She has long dark hair and brown eyes. She is very kind and patient. She works as a nurse at the city hospital. She loves cooking and reading books. She is my favourite person in the world!"
      },
      {
        prompt:'Describe a tu mejor amigo/a. ¿Cómo es? ¿Qué hacen juntos? ¿Por qué es especial para ti?',
        hint:"My best friend is... · He/She is... years old. · We always... · He/She makes me... · I think he/she is...",
        minWords:30,
        example:"My best friend is David. He is 22 years old. He is tall and has short black hair. He is very funny and always makes me laugh. We usually play video games on weekends and sometimes we go to the cinema. He is a great friend because he always helps me."
      },
    ]
  },
  {
    id:'free_writing_routine', title:'Mi rutina diaria', type:'free',
    typeLabel:'Escritura libre', typeColor:'#059669',
    desc:'Describe tu rutina usando presente simple, adverbios de frecuencia y expresiones de tiempo.',
    tasks:[
      {
        prompt:'Escribe tu rutina de la mañana. Usa al menos 6 oraciones con adverbios de frecuencia (always, usually, sometimes, never) y expresiones de tiempo (at, in the morning, etc.).',
        hint:'I always / usually wake up at... · First, I... · Then I... · I sometimes... · I never... · I leave home at... · I arrive at...',
        minWords:40,
        example:"I always wake up at six thirty in the morning. First, I have a shower and get dressed. Then I have breakfast. I usually eat toast and drink coffee. I sometimes listen to music while I eat. I never skip breakfast because it is important. I leave home at seven thirty and take the bus to university."
      },
      {
        prompt:"Describe qué haces los fines de semana. ¿Son diferentes a tu rutina de lunes a viernes? Usa 'on Saturdays / on Sundays', 'at the weekend', 'in the morning' etc.",
        hint:"At the weekend, I usually... · On Saturdays, I... · On Sundays, I... · I sometimes go to... · I never... on weekends.",
        minWords:35,
        example:"My weekends are very different from my working days. On Saturdays, I usually wake up late at about ten o'clock. I sometimes go shopping with my mother in the afternoon. In the evening, I often meet my friends at a café and we talk for hours. On Sundays, I always stay at home and relax. I never work on Sundays!"
      },
    ]
  },
  {
    id:'word_order_3', title:'Sintaxis: pasado y futuro', type:'order',
    typeLabel:'Sintaxis', typeColor:'#C05621',
    desc:'Ordena palabras para construir frases en pasado simple y futuro.',
    tasks:[
      {prompt:'Forma la frase en pasado:',words:['to','yesterday.','walked','school','She'],answer:'She walked to school yesterday.',tip:'Pasado simple regular: walk → walked.'},
      {prompt:'Forma la pregunta en pasado:',words:['you','Did','the','enjoy','party?'],answer:'Did you enjoy the party?',tip:'"Did + sujeto + verbo base + ?" No -ed después de did.'},
      {prompt:'Forma la frase en pasado:',words:['the','They','last','won','cup','year.'],answer:'They won the cup last year.',tip:'"win" es irregular → won. "Last year" al final.'},
      {prompt:'Forma la frase en futuro (will):',words:["I'll",'buy','a','tomorrow.','ticket'],answer:"I'll buy a ticket tomorrow.",tip:'"I\'ll + verbo base + objeto + tiempo"'},
      {prompt:'Forma la frase (going to):',words:["She's",'to','study','going','medicine.'],answer:"She's going to study medicine.",tip:'"is going to + verbo base". Plan decidido.'},
      {prompt:'Forma la negación en pasado:',words:["didn't",'He','work','Friday.','last'],answer:"He didn't work last Friday.",tip:'"didn\'t + verbo base". Sin -ed después de didn\'t.'},
      {prompt:'Forma la pregunta con will:',words:['you','Will','help','me?'],answer:'Will you help me?',tip:'"Will + sujeto + verbo base + ?"'},
    ]
  },
  {
    id:'fill_gaps_mixed', title:'Completa los huecos (gramática mixta)', type:'transform',
    typeLabel:'Gramática mixta', typeColor:'#2C7A7B',
    desc:'Completa frases con el tiempo verbal, modal o forma gramaticalmente correcta.',
    tasks:[
      {prompt:'"She ___ (study) when I called her last night." → pasado continuo (was/were + ING)',answer:'was studying',tip:'"was + verbo-ING" = acción en progreso en el pasado cuando algo interrumpió.'},
      {prompt:'"You ___ eat more vegetables. They\'re good for you." → consejo (should/must)',answer:'should',tip:'"should + verbo base". Recomendación, no obligación.'},
      {prompt:'"I ___ very nervous before my exam yesterday." → pasado de TO BE',answer:'was',tip:'"I was" — pasado de TO BE con I.'},
      {prompt:'"They ___ to the cinema last Saturday." → pasado negativo (go)',answer:"didn't go",tip:'"didn\'t + verbo base". "go" no cambia.'},
      {prompt:'"___ you speak more slowly, please?" → petición muy educada',answer:'Could',tip:'"Could you...?" es más educado que "Can you...?"'},
      {prompt:'"She ___ to the doctor tomorrow. She booked it this morning." → futuro planificado (go)',answer:'is going to go',tip:'Cita ya reservada → plan decidido → going to.'},
    ]
  },
  {
    id:'free_writing_email', title:'Escribe un email informal', type:'free',
    typeLabel:'Escritura libre', typeColor:'#2C7A7B',
    desc:'Practica la escritura de un email informal en inglés a un amigo/a.',
    tasks:[
      {
        prompt:'Escribe un email informal a un amigo/a de habla inglesa. Cuéntale: cómo estás, qué hiciste el fin de semana pasado (pasado simple) y qué planes tienes para las próximas vacaciones (going to / will). Mínimo 40 palabras.',
        hint:"Hi [name]! How are you? / Last weekend, I... / I went to... / I saw... / Next holidays, I'm going to... / I'll... / I can't wait!",
        minWords:40,
        example:"Hi David!\n\nHow are you? I'm great, thanks!\n\nLast weekend was fantastic. I went to a concert in the city with my friends. We had a great time!\n\nFor the next holidays, I'm going to visit my grandparents in the countryside. I'll also try to learn to cook some new recipes. I can't wait!\n\nSee you soon!\nCarlos"
      },
      {
        prompt:'"What did you do yesterday?" Escribe tu respuesta detallada. Usa pasado simple con al menos 5 verbos diferentes (go, have, meet, study, watch, cook, etc.).',
        hint:'Yesterday, I woke up at... / Then I... / After that, I... / In the afternoon, I... / In the evening, I...',
        minWords:35,
        example:"Yesterday was a busy day! I woke up early at six o'clock. First, I had a shower and ate breakfast. Then I went to university and studied for three hours. After lunch, I met my friend Ana at a café. In the evening, I cooked dinner and watched a film. I went to bed at eleven. It was a great day!"
      },
    ]
  },
  {
    id:'free_writing_opinion', title:'Expresa tu opinión', type:'free',
    typeLabel:'Escritura libre', typeColor:'#553C9A',
    desc:'Expresa tu opinión sobre temas cotidianos usando estructuras de opinión en inglés.',
    tasks:[
      {
        prompt:'¿Crees que la tecnología es buena o mala para los jóvenes? Da tu opinión con al menos 3 argumentos. Usa: "I think / I believe / In my opinion / However / For example". Mínimo 45 palabras.',
        hint:'I think / I believe / In my opinion... · On the one hand... / On the other hand... · However... · For example... · In conclusion...',
        minWords:45,
        example:"In my opinion, technology is very useful for young people, but we need to use it carefully. On the one hand, the internet helps us study and learn new things. For example, I use YouTube to practise my English. On the other hand, some people spend too much time on social media. I think we should use technology for a limited time every day. In conclusion, technology is good if we use it wisely."
      },
      {
        prompt:'¿Cuál es tu deporte o actividad favorita? Descríbela y explica por qué te gusta. ¿Cuándo y dónde la practicas? Usa: can, should, love, always, usually. Mínimo 40 palabras.',
        hint:'My favourite sport/activity is... · I play/do/practise it... · I started... years ago. · I love it because... · It helps me to... · I usually play/do it...',
        minWords:40,
        example:"My favourite sport is football. I have played it since I was six years old. I usually play with my friends on Saturday afternoons at the park near my house. I love football because it is exciting and it keeps me fit. It also helps me make new friends. I think everyone should play a sport — it is great for your health!"
      },
    ]
  }
];