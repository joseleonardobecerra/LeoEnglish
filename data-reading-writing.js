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
// =====================================================
// EXPANSIÓN INSTRUCCIONAL A1/A2 PARA READING & WRITING
// Mantiene la base original y agrega nuevos textos,
// ejercicios, etapas, evaluación, portafolio y metodología.
// =====================================================


// -----------------------------------------------------
// 1. ETAPAS DIDÁCTICAS PARA READING & WRITING
// -----------------------------------------------------

const readingWritingDidacticStages = [
  {
    id:'pre_reading',
    name:'1. Pre-reading / Activación',
    purpose:'Activar vocabulario, contexto y predicciones antes de leer.',
    teacherAction:'Presenta imágenes, palabras clave, preguntas guía o una situación inicial.',
    studentAction:'Predice el tema, reconoce palabras conocidas y conecta el texto con su vida.',
    examples:[
      'Look at the title and predict',
      'Choose 5 words you know',
      'What do you think the text is about?',
      'Match pictures with keywords'
    ]
  },
  {
    id:'first_reading',
    name:'2. First Reading / Comprensión global',
    purpose:'Comprender la idea general sin detenerse en cada palabra.',
    teacherAction:'Da una pregunta global antes de leer.',
    studentAction:'Lee para identificar tema, personajes, lugar, tiempo e intención.',
    examples:[
      'Who is the text about?',
      'Where does it happen?',
      'What is the main idea?',
      'Choose the best title'
    ]
  },
  {
    id:'focused_reading',
    name:'3. Focused Reading / Comprensión específica',
    purpose:'Buscar información puntual dentro del texto.',
    teacherAction:'Propone preguntas de selección, verdadero/falso o completar espacios.',
    studentAction:'Relee, ubica evidencia y responde con precisión.',
    examples:[
      'True or False',
      'Fill in the blank',
      'Find the sentence',
      'Answer comprehension questions'
    ]
  },
  {
    id:'language_noticing',
    name:'4. Language Noticing',
    purpose:'Observar vocabulario, conectores, estructuras gramaticales y patrones del texto.',
    teacherAction:'Guía el análisis de frases útiles, tiempos verbales y expresiones.',
    studentAction:'Subraya estructuras, traduce palabras clave y clasifica ejemplos.',
    examples:[
      'Underline all present simple verbs',
      'Find time expressions',
      'Find adjectives',
      'Find phrases you can reuse'
    ]
  },
  {
    id:'guided_writing',
    name:'5. Guided Writing',
    purpose:'Usar el texto como modelo para producir escritura controlada.',
    teacherAction:'Entrega plantillas, frases guía o modelos incompletos.',
    studentAction:'Escribe frases o párrafos breves siguiendo una estructura.',
    examples:[
      'Complete the paragraph',
      'Transform the text',
      'Write about yourself using the model',
      'Use 5 phrases from the text'
    ]
  },
  {
    id:'accuracy_practice',
    name:'6. Accuracy Practice',
    purpose:'Mejorar precisión gramatical, puntuación, ortografía y sintaxis.',
    teacherAction:'Propone ejercicios de corrección de errores, dictado o transformación.',
    studentAction:'Corrige, reescribe, compara y justifica sus cambios.',
    examples:[
      'Error correction',
      'Dictation',
      'Sentence transformation',
      'Word order'
    ]
  },
  {
    id:'communicative_output',
    name:'7. Communicative Output',
    purpose:'Crear un producto escrito u oral con sentido real.',
    teacherAction:'Plantea una tarea comunicativa conectada con el tema.',
    studentAction:'Produce un texto, audio, diálogo, correo, publicación o presentación.',
    examples:[
      'Write a personal routine',
      'Write an email',
      'Describe your family',
      'Create a travel plan'
    ]
  },
  {
    id:'portfolio',
    name:'8. Portfolio Evidence',
    purpose:'Guardar evidencia del aprendizaje en un portafolio digital.',
    teacherAction:'Define criterios claros de entrega.',
    studentAction:'Entrega una producción final revisada y reflexionada.',
    examples:[
      'Final paragraph',
      'Corrected version',
      'Audio reading',
      'Digital poster',
      'Personal text'
    ]
  },
  {
    id:'reflection',
    name:'9. Reflexión heutagógica',
    purpose:'Desarrollar autonomía, metacognición y conciencia de mejora.',
    teacherAction:'Formula preguntas de reflexión.',
    studentAction:'Identifica errores, estrategias y próximos pasos.',
    examples:[
      'What did I understand?',
      'What words are useful for me?',
      'What mistakes did I correct?',
      'How will I improve my next text?'
    ]
  }
];


// -----------------------------------------------------
// 2. NUEVOS TEXTOS DE READING
// Compatibles con choice y fill.
// True/False se trabaja como choice con opts ['True','False'].
// -----------------------------------------------------

const readingExpansionTexts = [
  {
    id:'my_room_a1',
    title:'My Bedroom',
    level:'A1',
    levelColor:'#2563EB',
    topic:'Casa y objetos',
    questions:7,
    desc:'Texto A1 para practicar there is/are, preposiciones y vocabulario de la casa.',
    body:`My bedroom is small, but I like it very much. There is a <span class="word-hl" data-tr="cama">bed</span> next to the window. There is a small <span class="word-hl" data-tr="escritorio">desk</span> under the window, and my computer is on the desk. There are two <span class="word-hl" data-tr="sillas">chairs</span> in my room. My school books are in a blue <span class="word-hl" data-tr="morral / mochila">backpack</span>. There is a poster of my favourite singer on the wall. My clothes are in the <span class="word-hl" data-tr="armario / clóset">wardrobe</span>. I always keep my room clean because I study there every afternoon.`,
    qs:[
      {type:'choice', q:'True or False: The bedroom is very big.', opts:['True','False'], a:1, exp:'The text says: "My bedroom is small."'},
      {type:'choice', q:'Where is the bed?', opts:['Next to the window','Under the desk','Behind the door'], a:0, exp:'"There is a bed next to the window."'},
      {type:'fill', q:'The computer is on the ___.', a:'desk', exp:'The text says the computer is on the desk.'},
      {type:'choice', q:'How many chairs are there?', opts:['One','Two','Three'], a:1, exp:'"There are two chairs in my room."'},
      {type:'fill', q:'The school books are in a blue ___.', a:'backpack', exp:'The school books are in a blue backpack.'},
      {type:'choice', q:'True or False: There is a poster on the wall.', opts:['True','False'], a:0, exp:'There is a poster of the favourite singer on the wall.'},
      {type:'choice', q:'Why does the writer keep the room clean?', opts:['Because they sleep there','Because they study there','Because it is very big'], a:1, exp:'"I study there every afternoon."'}
    ],
    skillFocus:['Reading for detail','Prepositions of place','There is / There are'],
    communicativeTask:'Describe your bedroom using there is, there are and prepositions.',
    portfolioEvidence:'My bedroom description'
  },

  {
    id:'my_best_friend_a1',
    title:'My Best Friend',
    level:'A1',
    levelColor:'#9333EA',
    topic:'Personas y descripciones',
    questions:7,
    desc:'Texto A1 para describir personas con to be, have/has y adjetivos.',
    body:`My best friend is Daniel. He is thirteen years old and he is from Colombia. He is tall and friendly. He has short black hair and brown eyes. Daniel likes playing football and listening to music. He can play the guitar, but he cannot sing very well. At school, he is very good at English and science. We usually do our homework together after class. Daniel is a good friend because he is kind and funny.`,
    qs:[
      {type:'choice', q:'How old is Daniel?', opts:['Twelve','Thirteen','Fourteen'], a:1, exp:'The text says Daniel is thirteen years old.'},
      {type:'choice', q:'True or False: Daniel is from Colombia.', opts:['True','False'], a:0, exp:'"He is from Colombia."'},
      {type:'fill', q:'Daniel has short black ___ and brown eyes.', a:'hair', exp:'The text says he has short black hair.'},
      {type:'choice', q:'What sport does Daniel like?', opts:['Basketball','Football','Tennis'], a:1, exp:'Daniel likes playing football.'},
      {type:'choice', q:'What instrument can Daniel play?', opts:['The piano','The guitar','The violin'], a:1, exp:'"He can play the guitar."'},
      {type:'choice', q:'True or False: Daniel can sing very well.', opts:['True','False'], a:1, exp:'The text says he cannot sing very well.'},
      {type:'fill', q:'Daniel is a good friend because he is kind and ___.', a:'funny', exp:'The text says he is kind and funny.'}
    ],
    skillFocus:['Reading for specific information','Adjectives','Can / Can’t'],
    communicativeTask:'Write about your best friend using age, appearance, likes and abilities.',
    portfolioEvidence:'My best friend paragraph'
  },

  {
    id:'at_the_restaurant_a1',
    title:'At the Restaurant',
    level:'A1',
    levelColor:'#EA580C',
    topic:'Comida y pedidos',
    questions:7,
    desc:'Diálogo A1 para practicar I’d like, comida y solicitudes corteses.',
    body:`Waiter: Good afternoon. Are you ready to order?<br>
Customer: Yes, please. I’d like a chicken sandwich and a glass of orange juice.<br>
Waiter: Would you like a salad with your sandwich?<br>
Customer: No, thank you. I’d like some chips, please.<br>
Waiter: Anything else?<br>
Customer: Yes, I’d like a small chocolate cake.<br>
Waiter: Of course. That is twelve dollars fifty.<br>
Customer: Here you are.<br>
Waiter: Thank you. Enjoy your meal!`,
    qs:[
      {type:'choice', q:'Where does the dialogue happen?', opts:['At school','At a restaurant','At a hospital'], a:1, exp:'The waiter and customer are ordering food.'},
      {type:'fill', q:'The customer would like a chicken ___.', a:'sandwich', exp:'The customer says: "I’d like a chicken sandwich."'},
      {type:'choice', q:'What drink does the customer order?', opts:['Water','Tea','Orange juice'], a:2, exp:'The customer orders orange juice.'},
      {type:'choice', q:'True or False: The customer wants a salad.', opts:['True','False'], a:1, exp:'The customer says: "No, thank you."'},
      {type:'fill', q:'The customer would like some ___ with the sandwich.', a:'chips', exp:'The customer asks for chips.'},
      {type:'choice', q:'What dessert does the customer want?', opts:['Ice cream','Chocolate cake','Fruit'], a:1, exp:'A small chocolate cake.'},
      {type:'choice', q:'How much is the food?', opts:['Ten dollars','Twelve dollars fifty','Twenty dollars'], a:1, exp:'"That is twelve dollars fifty."'}
    ],
    skillFocus:['Dialogue reading','I’d like','Food vocabulary'],
    communicativeTask:'Create your own restaurant dialogue.',
    portfolioEvidence:'Restaurant role-play script'
  },

  {
    id:'weekend_plans_a1',
    title:'Weekend Plans',
    level:'A1',
    levelColor:'#0D9488',
    topic:'Planes futuros',
    questions:7,
    desc:'Texto A1 para practicar going to y expresiones de futuro.',
    body:`This weekend, Laura is going to visit her grandparents. On Saturday morning, she is going to take the bus to their town. Her grandmother is going to cook lunch, and her grandfather is going to show her old family photos. In the afternoon, Laura and her cousins are going to play in the park. On Sunday, they are going to have breakfast together and then Laura is going to come back home. She is very excited because she loves spending time with her family.`,
    qs:[
      {type:'choice', q:'Who is Laura going to visit?', opts:['Her teacher','Her grandparents','Her friends'], a:1, exp:'Laura is going to visit her grandparents.'},
      {type:'choice', q:'True or False: Laura is going to travel by train.', opts:['True','False'], a:1, exp:'She is going to take the bus.'},
      {type:'fill', q:'Her grandmother is going to cook ___.', a:'lunch', exp:'The text says her grandmother is going to cook lunch.'},
      {type:'choice', q:'What is her grandfather going to show her?', opts:['New books','Old family photos','A new car'], a:1, exp:'Old family photos.'},
      {type:'fill', q:'Laura and her cousins are going to play in the ___.', a:'park', exp:'They are going to play in the park.'},
      {type:'choice', q:'When is Laura going to come back home?', opts:['On Friday','On Saturday','On Sunday'], a:2, exp:'On Sunday she is going to come back home.'},
      {type:'choice', q:'How does Laura feel?', opts:['Bored','Excited','Angry'], a:1, exp:'She is very excited.'}
    ],
    skillFocus:['Going to','Family vocabulary','Future plans'],
    communicativeTask:'Write your weekend plans using going to.',
    portfolioEvidence:'My weekend plans'
  },

  {
    id:'yesterday_at_home_a1',
    title:'Yesterday at Home',
    level:'A1',
    levelColor:'#C05621',
    topic:'Pasado simple',
    questions:7,
    desc:'Texto A1 para practicar pasado simple y pasado de to be.',
    body:`Yesterday was a quiet day. I was at home with my family. In the morning, I cleaned my room and helped my mother in the kitchen. We cooked rice, chicken and salad for lunch. In the afternoon, my brother watched a movie, and I studied English for one hour. Later, we played cards in the living room. At night, I called my grandmother and then I went to bed early. It was a simple but nice day.`,
    qs:[
      {type:'choice', q:'True or False: Yesterday was a busy and noisy day.', opts:['True','False'], a:1, exp:'The text says it was a quiet day.'},
      {type:'choice', q:'Where was the writer yesterday?', opts:['At school','At home','At the park'], a:1, exp:'"I was at home with my family."'},
      {type:'fill', q:'In the morning, the writer cleaned their ___.', a:'room', exp:'"I cleaned my room."'},
      {type:'choice', q:'What did they cook for lunch?', opts:['Rice, chicken and salad','Fish and chips','Soup and bread'], a:0, exp:'They cooked rice, chicken and salad.'},
      {type:'choice', q:'What did the brother do?', opts:['He studied English','He watched a movie','He called grandmother'], a:1, exp:'The brother watched a movie.'},
      {type:'fill', q:'At night, the writer called their ___.', a:'grandmother', exp:'The writer called their grandmother.'},
      {type:'choice', q:'How was the day?', opts:['Simple but nice','Terrible','Very expensive'], a:0, exp:'"It was a simple but nice day."'}
    ],
    skillFocus:['Past simple','Was / Were','Daily activities'],
    communicativeTask:'Write about your day yesterday using past simple.',
    portfolioEvidence:'Yesterday paragraph'
  },

  {
    id:'school_rules_a1',
    title:'School Rules',
    level:'A1',
    levelColor:'#DC2626',
    topic:'Instrucciones y reglas',
    questions:7,
    desc:'Texto A1 para trabajar imperativos, can/can’t y reglas escolares.',
    body:`Every school has rules. At my school, students must arrive on time. We can use our phones only during the break. In class, we must listen to the teacher and raise our hand before speaking. We must not run in the corridors because it is dangerous. We can play football in the playground, but we cannot play inside the classroom. We must keep the classroom clean and respect our classmates. These rules help us learn and stay safe.`,
    qs:[
      {type:'choice', q:'True or False: Students can arrive late.', opts:['True','False'], a:1, exp:'Students must arrive on time.'},
      {type:'choice', q:'When can students use their phones?', opts:['In every class','Only during the break','At night'], a:1, exp:'Only during the break.'},
      {type:'fill', q:'Students must raise their ___ before speaking.', a:'hand', exp:'They must raise their hand.'},
      {type:'choice', q:'Why must students not run in the corridors?', opts:['Because it is boring','Because it is dangerous','Because it is expensive'], a:1, exp:'It is dangerous.'},
      {type:'choice', q:'Where can students play football?', opts:['In the playground','Inside the classroom','In the library'], a:0, exp:'They can play football in the playground.'},
      {type:'fill', q:'Students must keep the classroom ___.', a:'clean', exp:'They must keep the classroom clean.'},
      {type:'choice', q:'What do the rules help students do?', opts:['Learn and stay safe','Sleep more','Buy food'], a:0, exp:'The rules help students learn and stay safe.'}
    ],
    skillFocus:['Imperatives','Can / Can’t','School vocabulary'],
    communicativeTask:'Create five rules for your classroom.',
    portfolioEvidence:'Classroom rules poster'
  }
];


// -----------------------------------------------------
// 3. NUEVOS EJERCICIOS DE WRITING
// Compatibles con: order, transform, free, error, dictation.
// -----------------------------------------------------

const writingExpansionExercises = [
  {
    id:'error_correction_a1_present',
    title:'Caza de errores: presente simple',
    type:'error',
    typeLabel:'Corrección',
    typeColor:'#E53E3E',
    desc:'Corrige errores frecuentes en presente simple, to be y adverbios de frecuencia.',
    tasks:[
      {
        wrong:'She go to school every day.',
        answer:'She goes to school every day.',
        tip:'En presente simple, he/she/it agrega -s o -es al verbo.'
      },
      {
        wrong:'He are my brother.',
        answer:'He is my brother.',
        tip:'Con he usamos is, no are.'
      },
      {
        wrong:'I no like coffee.',
        answer:"I don't like coffee.",
        tip:'La negación en presente simple usa don’t / doesn’t.'
      },
      {
        wrong:'Does she likes music?',
        answer:'Does she like music?',
        tip:'Después de does, el verbo va en forma base.'
      },
      {
        wrong:'They is at home.',
        answer:'They are at home.',
        tip:'Con they usamos are.'
      },
      {
        wrong:'He usually is late.',
        answer:'He is usually late.',
        tip:'Con el verbo to be, el adverbio de frecuencia va después del verbo.'
      }
    ],
    learningGoal:'Reconocer y corregir errores A1 de estructura básica.',
    portfolioEvidence:'Lista personal de errores corregidos'
  },

  {
    id:'error_correction_a1_mixed',
    title:'Caza de errores: A1 mixto',
    type:'error',
    typeLabel:'Corrección',
    typeColor:'#C05621',
    desc:'Corrige errores de pasado, futuro, modales, comparativos y there is/are.',
    tasks:[
      {
        wrong:'Yesterday I go to the cinema.',
        answer:'Yesterday I went to the cinema.',
        tip:'Yesterday indica pasado simple.'
      },
      {
        wrong:'She can speaks English.',
        answer:'She can speak English.',
        tip:'Después de can usamos verbo base.'
      },
      {
        wrong:'There is two chairs in the room.',
        answer:'There are two chairs in the room.',
        tip:'Two chairs es plural, por eso usamos there are.'
      },
      {
        wrong:'I am going visit my aunt.',
        answer:'I am going to visit my aunt.',
        tip:'La estructura es be going to + verbo base.'
      },
      {
        wrong:'This house is more big than that house.',
        answer:'This house is bigger than that house.',
        tip:'Big es adjetivo corto: bigger than.'
      },
      {
        wrong:'Did you watched TV last night?',
        answer:'Did you watch TV last night?',
        tip:'Después de did, el verbo va en forma base.'
      }
    ],
    learningGoal:'Integrar estructuras A1 y detectar errores comunes.',
    portfolioEvidence:'A1 correction challenge'
  },

  {
    id:'dictation_a1_routines',
    title:'Dictado A1: rutinas',
    type:'dictation',
    typeLabel:'Dictado',
    typeColor:'#805AD5',
    desc:'Escucha y escribe frases sobre rutinas, horarios y hábitos.',
    tasks:[
      {
        audio:'I wake up at six o’clock every morning.',
        answer:'I wake up at six o’clock every morning.',
        tip:'Recuerda escribir o’clock correctamente.'
      },
      {
        audio:'She usually has breakfast at home.',
        answer:'She usually has breakfast at home.',
        tip:'Usually va antes del verbo principal.'
      },
      {
        audio:'They go to school by bus.',
        answer:'They go to school by bus.',
        tip:'By bus no lleva artículo.'
      },
      {
        audio:'He does his homework after lunch.',
        answer:'He does his homework after lunch.',
        tip:'He does, no he do.'
      },
      {
        audio:'We watch TV in the evening.',
        answer:'We watch TV in the evening.',
        tip:'Partes del día: in the evening.'
      }
    ],
    learningGoal:'Fortalecer escucha, ortografía y estructura de frases A1.',
    portfolioEvidence:'Dictation score and corrected sentences'
  },

  {
    id:'dictation_a1_restaurant',
    title:'Dictado A1: restaurante',
    type:'dictation',
    typeLabel:'Dictado',
    typeColor:'#9333EA',
    desc:'Escucha y escribe frases útiles para pedir comida.',
    tasks:[
      {
        audio:'I would like a chicken sandwich, please.',
        answer:'I would like a chicken sandwich, please.',
        tip:'Would like es una forma cortés.'
      },
      {
        audio:'Can I have the menu, please?',
        answer:'Can I have the menu, please?',
        tip:'Pregunta cortés con Can I have...?'
      },
      {
        audio:'Would you like some orange juice?',
        answer:'Would you like some orange juice?',
        tip:'Some se usa en ofrecimientos.'
      },
      {
        audio:'The bill is twelve dollars fifty.',
        answer:'The bill is twelve dollars fifty.',
        tip:'Bill significa cuenta.'
      },
      {
        audio:'Enjoy your meal.',
        answer:'Enjoy your meal.',
        tip:'Expresión común en restaurantes.'
      }
    ],
    learningGoal:'Practicar frases funcionales de restaurante.',
    portfolioEvidence:'Restaurant dictation practice'
  },

  {
    id:'free_writing_my_profile',
    title:'Writing guiado: My Profile',
    type:'free',
    typeLabel:'Producción',
    typeColor:'#059669',
    desc:'Escribe un perfil personal usando información básica A1.',
    tasks:[
      {
        prompt:'Write a short personal profile. Include your name, age, city, nationality, family and hobbies.',
        hint:'Usa: My name is..., I am..., I live in..., I like...',
        example:'My name is Ana. I am 13 years old. I live in Cúcuta. I am Colombian. I have one brother. I like music and football.',
        minWords:45
      },
      {
        prompt:'Write a short introduction for a new English class.',
        hint:'Incluye saludo, nombre, lugar de origen y algo que te gusta.',
        example:'Hello! My name is David. I am from Colombia. I am a student. I like playing video games and listening to music.',
        minWords:35
      }
    ],
    learningGoal:'Producir textos breves de presentación personal.',
    portfolioEvidence:'Personal profile paragraph'
  },

  {
    id:'free_writing_my_routine',
    title:'Writing guiado: My Daily Routine',
    type:'free',
    typeLabel:'Producción',
    typeColor:'#0D9488',
    desc:'Escribe una rutina diaria usando presente simple y adverbios de frecuencia.',
    tasks:[
      {
        prompt:'Write about your daily routine from morning to night.',
        hint:'Usa: wake up, have breakfast, go to school/work, have lunch, do homework, go to bed.',
        example:'I wake up at six o’clock. I usually have breakfast at home. I go to school by bus. In the afternoon, I do my homework.',
        minWords:60
      },
      {
        prompt:'Write about your weekend routine.',
        hint:'Usa always, usually, sometimes y never.',
        example:'On Saturdays, I usually wake up late. I sometimes play football with my friends. I never go to school on Sundays.',
        minWords:50
      }
    ],
    learningGoal:'Escribir rutinas con orden temporal y frecuencia.',
    portfolioEvidence:'My daily routine paragraph'
  },

  {
    id:'free_writing_last_weekend',
    title:'Writing guiado: Last Weekend',
    type:'free',
    typeLabel:'Producción',
    typeColor:'#C05621',
    desc:'Escribe sobre actividades pasadas usando pasado simple.',
    tasks:[
      {
        prompt:'Write about what you did last weekend.',
        hint:'Usa: went, watched, played, visited, studied, ate, called.',
        example:'Last weekend, I visited my grandmother. We cooked lunch together. In the afternoon, I watched a movie and played cards.',
        minWords:55
      },
      {
        prompt:'Write about a special day in the past.',
        hint:'Usa was/were y verbos en pasado.',
        example:'It was my birthday. I was very happy. My family cooked dinner and we listened to music.',
        minWords:50
      }
    ],
    learningGoal:'Narrar eventos simples del pasado.',
    portfolioEvidence:'Past experience paragraph'
  },

  {
    id:'transform_a1_integrated',
    title:'Transformación A1 integrada',
    type:'transform',
    typeLabel:'Transformación',
    typeColor:'#3182CE',
    desc:'Transforma oraciones entre afirmativo, negativo, pregunta, pasado y futuro.',
    tasks:[
      {
        prompt:'"She likes pizza." → Cambia a negativo.',
        answer:"She doesn't like pizza.",
        tip:'She usa doesn’t + verbo base.'
      },
      {
        prompt:'"They are playing football." → Cambia a pregunta.',
        answer:'Are they playing football?',
        tip:'En presente continuo, el verbo be va antes del sujeto.'
      },
      {
        prompt:'"I go to school every day." → Cambia a pasado con yesterday.',
        answer:'I went to school yesterday.',
        tip:'Go en pasado es went.'
      },
      {
        prompt:'"He can swim." → Cambia a negativo.',
        answer:"He can't swim.",
        tip:'Can negativo es can’t.'
      },
      {
        prompt:'"We visit our cousins." → Cambia a futuro con going to.',
        answer:'We are going to visit our cousins.',
        tip:'We are going to + verbo base.'
      },
      {
        prompt:'"There is a book on the table." → Cambia a plural.',
        answer:'There are books on the table.',
        tip:'Plural: there are books.'
      }
    ],
    learningGoal:'Conectar varias estructuras A1 en una práctica de transformación.',
    portfolioEvidence:'Integrated grammar transformation'
  },

  {
    id:'word_order_a1_questions',
    title:'Ordena preguntas A1',
    type:'order',
    typeLabel:'Sintaxis',
    typeColor:'#2563EB',
    desc:'Ordena palabras para formar preguntas básicas correctas.',
    tasks:[
      {
        prompt:'Forma una pregunta:',
        words:['your','What','name?','is'],
        answer:'What is your name?',
        tip:'Wh-question + be + subject.'
      },
      {
        prompt:'Forma una pregunta:',
        words:['you','Where','live?','do'],
        answer:'Where do you live?',
        tip:'Where + do + subject + verb base.'
      },
      {
        prompt:'Forma una pregunta:',
        words:['she','Does','English?','speak'],
        answer:'Does she speak English?',
        tip:'Does + she + verbo base.'
      },
      {
        prompt:'Forma una pregunta:',
        words:['doing','are','What','you','now?'],
        answer:'What are you doing now?',
        tip:'Presente continuo: What + are + subject + verb-ing.'
      },
      {
        prompt:'Forma una pregunta:',
        words:['you','Did','TV','watch','yesterday?'],
        answer:'Did you watch TV yesterday?',
        tip:'Did + subject + verb base.'
      },
      {
        prompt:'Forma una pregunta:',
        words:['going','you','What','to','are','do?'],
        answer:'What are you going to do?',
        tip:'What + be + subject + going to + verb.'
      }
    ],
    learningGoal:'Automatizar el orden de preguntas A1.',
    portfolioEvidence:'A1 question builder'
  }
];


// -----------------------------------------------------
// 4. ENRIQUECIMIENTO DE TEXTOS EXISTENTES
// -----------------------------------------------------

const readingTextEnhancements = {
  school_day:{
    learningGoal:'Comprender una rutina escolar usando presente simple, horarios y vocabulario académico.',
    beforeReading:[
      'What time do you start school?',
      'How do you go to school?',
      'What is your favourite subject?'
    ],
    afterReadingTask:'Write five sentences about your school day.',
    portfolioEvidence:'My school day paragraph'
  },
  my_family:{
    learningGoal:'Comprender una descripción familiar usando possessives, jobs and adjectives.',
    beforeReading:[
      'How many people are there in your family?',
      'Who lives with you?',
      'What jobs do people in your family have?'
    ],
    afterReadingTask:'Create a family tree and describe three people.',
    portfolioEvidence:'My family tree'
  },
  daily_routine:{
    learningGoal:'Comprender una rutina diaria con horarios, verbos comunes y adverbios de frecuencia.',
    beforeReading:[
      'What time do you wake up?',
      'What do you usually eat for breakfast?',
      'What do you do in the evening?'
    ],
    afterReadingTask:'Write your routine using first, then, after that and finally.',
    portfolioEvidence:'My daily routine'
  },
  shopping_day:{
    learningGoal:'Comprender una situación de compras con precios, tiendas y cantidades.',
    beforeReading:[
      'Where do you usually go shopping?',
      'Do you prefer paying by cash or card?',
      'What clothes do you like buying?'
    ],
    afterReadingTask:'Create a shopping dialogue with prices.',
    portfolioEvidence:'Shopping role play'
  },
  london:{
    learningGoal:'Comprender una descripción turística usando lugares de ciudad y preposiciones.',
    beforeReading:[
      'What famous cities do you know?',
      'What places can tourists visit?',
      'What is your favourite city?'
    ],
    afterReadingTask:'Write a short tourist description of your city.',
    portfolioEvidence:'My city guide'
  },
  british_weather:{
    learningGoal:'Comprender un texto sobre clima, estaciones y descripciones.',
    beforeReading:[
      'What is the weather like today?',
      'Do you like rainy days?',
      'What is your favourite season?'
    ],
    afterReadingTask:'Write a weather report for your city.',
    portfolioEvidence:'Weather report'
  },
  healthy_lifestyle:{
    learningGoal:'Comprender recomendaciones sobre hábitos saludables y estilo de vida.',
    beforeReading:[
      'What healthy habits do you have?',
      'How often do you exercise?',
      'How many hours do you sleep?'
    ],
    afterReadingTask:'Write five healthy lifestyle tips.',
    portfolioEvidence:'Healthy habits checklist'
  },
  technology_life:{
    learningGoal:'Comprender ideas principales sobre tecnología y vida diaria.',
    beforeReading:[
      'How often do you use your phone?',
      'What apps do you use every day?',
      'Is technology good or bad for students?'
    ],
    afterReadingTask:'Write a short opinion about technology.',
    portfolioEvidence:'Technology opinion paragraph'
  },
  colombian_festival:{
    learningGoal:'Comprender un texto cultural sobre tradiciones colombianas.',
    beforeReading:[
      'What festivals do you know in Colombia?',
      'What food do people eat at festivals?',
      'Do you like dancing?'
    ],
    afterReadingTask:'Describe a local festival or celebration.',
    portfolioEvidence:'My local festival'
  }
};


// -----------------------------------------------------
// 5. FUNCIONES DE ENRIQUECIMIENTO
// -----------------------------------------------------

function enrichReadingText(text) {
  const enhancement = readingTextEnhancements[text.id] || {};

  text.questions = Array.isArray(text.qs) ? text.qs.length : text.questions || 0;

  if (!text.learningGoal) {
    text.learningGoal =
      enhancement.learningGoal ||
      `Comprender un texto de nivel ${text.level} sobre ${text.topic} e identificar información general y específica.`;
  }

  if (!text.beforeReading) {
    text.beforeReading = enhancement.beforeReading || [
      'Look at the title. What do you think the text is about?',
      'Choose five words you know.',
      'Predict one thing that will appear in the text.'
    ];
  }

  if (!text.skillFocus) {
    text.skillFocus = [
      'Reading for gist',
      'Reading for detail',
      'Vocabulary in context'
    ];
  }

  if (!text.afterReadingTask) {
    text.afterReadingTask =
      enhancement.afterReadingTask ||
      'Write a short personal response connected to the text.';
  }

  if (!text.communicativeTask) {
    text.communicativeTask =
      'Use the text as a model and create a short personal production.';
  }

  if (!text.portfolioEvidence) {
    text.portfolioEvidence =
      enhancement.portfolioEvidence ||
      `Portfolio evidence based on ${text.title}.`;
  }

  if (!text.selfAssessment) {
    text.selfAssessment = [
      'I can understand the general idea of the text.',
      'I can find specific information in the text.',
      'I can identify useful words and expressions.',
      'I can answer comprehension questions.',
      'I can write a short response connected to the topic.'
    ];
  }

  if (!text.stages) {
    text.stages = readingWritingDidacticStages;
  }

  return text;
}

function enrichWritingExercise(exercise) {
  if (!exercise.learningGoal) {
    exercise.learningGoal = `Desarrollar escritura A1/A2 mediante ejercicios de tipo ${exercise.type}.`;
  }

  if (!exercise.canDo) {
    exercise.canDo = [
      'I can understand the writing task.',
      'I can use simple English structures.',
      'I can correct or improve my written production.'
    ];
  }

  if (!exercise.stages) {
    exercise.stages = readingWritingDidacticStages;
  }

  if (!exercise.successCriteria) {
    exercise.successCriteria = [
      'Complete the task carefully.',
      'Use correct word order.',
      'Check grammar and spelling.',
      'Review feedback and correct mistakes.'
    ];
  }

  if (!exercise.selfAssessment) {
    exercise.selfAssessment = [
      'Puedo completar el ejercicio con apoyo.',
      'Puedo reconocer mis errores frecuentes.',
      'Puedo corregir y mejorar mi escritura.',
      'Puedo usar esta estructura en una producción personal.'
    ];
  }

  if (!exercise.portfolioEvidence) {
    exercise.portfolioEvidence = `Writing evidence: ${exercise.title}`;
  }

  return exercise;
}


// -----------------------------------------------------
// 6. INTEGRACIÓN NO DESTRUCTIVA
// -----------------------------------------------------

const existingReadingIds = new Set(readingTexts.map(item => item.id));

readingExpansionTexts.forEach(item => {
  if (!existingReadingIds.has(item.id)) {
    readingTexts.push(item);
    existingReadingIds.add(item.id);
  }
});

const existingWritingIds = new Set(writingExercises.map(item => item.id));

writingExpansionExercises.forEach(item => {
  if (!existingWritingIds.has(item.id)) {
    writingExercises.push(item);
    existingWritingIds.add(item.id);
  }
});

readingTexts.forEach(enrichReadingText);
writingExercises.forEach(enrichWritingExercise);


// -----------------------------------------------------
// 7. PROGRAMA GENERAL DE READING & WRITING
// -----------------------------------------------------

const readingWritingProgram = {
  levelRange:'A1-A2',
  name:'Reading & Writing Lab',
  description:'Laboratorio de comprensión lectora y escritura basado en metodologías activas, práctica virtual, retroalimentación inmediata y portafolio digital.',
  approach:'Communicative reading and writing + active learning + heutagogical reflection',
  totalReadings:readingTexts.length,
  totalWritingExercises:writingExercises.length,
  coreSkills:[
    'Reading for gist',
    'Reading for specific information',
    'Vocabulary in context',
    'Sentence accuracy',
    'Paragraph writing',
    'Error correction',
    'Dictation',
    'Guided production',
    'Personal reflection'
  ],
  mechanics:[
    'Multiple choice',
    'True / False',
    'Fill in the blanks',
    'Word order',
    'Sentence transformation',
    'Error correction',
    'Dictation',
    'Free writing'
  ],
  learningPath:[
    {
      unit:1,
      title:'Identity and School Life',
      readings:['school_day','my_family','my_best_friend_a1'],
      writings:['free_writing_my_profile','word_order_a1_questions'],
      finalEvidence:'Personal profile + school day paragraph'
    },
    {
      unit:2,
      title:'Home, Family and Descriptions',
      readings:['my_room_a1','my_family'],
      writings:['error_correction_a1_present','free_writing_my_profile'],
      finalEvidence:'My bedroom and family description'
    },
    {
      unit:3,
      title:'Daily Routines and Habits',
      readings:['daily_routine','school_day'],
      writings:['dictation_a1_routines','free_writing_my_routine'],
      finalEvidence:'My daily routine paragraph'
    },
    {
      unit:4,
      title:'Food, Restaurants and Shopping',
      readings:['at_the_restaurant_a1','shopping_day'],
      writings:['dictation_a1_restaurant','transform_a1_integrated'],
      finalEvidence:'Restaurant dialogue + shopping role play'
    },
    {
      unit:5,
      title:'Rules, Abilities and Classroom Life',
      readings:['school_rules_a1'],
      writings:['error_correction_a1_mixed','word_order_a1_questions'],
      finalEvidence:'Classroom rules poster'
    },
    {
      unit:6,
      title:'Past and Future',
      readings:['yesterday_at_home_a1','weekend_plans_a1'],
      writings:['free_writing_last_weekend','transform_a1_integrated'],
      finalEvidence:'Past weekend paragraph + future plans paragraph'
    },
    {
      unit:7,
      title:'Culture, Travel and Wider World',
      readings:['london','british_weather','colombian_festival'],
      writings:['free_writing_last_weekend','error_correction_a1_mixed'],
      finalEvidence:'My city or festival description'
    }
  ],
  portfolioFinalProject:{
    title:'My Reading & Writing Portfolio',
    description:'El estudiante reúne sus mejores evidencias de lectura y escritura, corrige errores y presenta su progreso.',
    requiredEvidence:[
      'Personal profile',
      'My family or best friend paragraph',
      'My bedroom description',
      'My daily routine',
      'Restaurant dialogue',
      'School rules poster',
      'Last weekend paragraph',
      'Weekend plans paragraph',
      'Final self-assessment'
    ],
    finalReflection:[
      'What text was easiest for me?',
      'What text was most difficult?',
      'What grammar mistakes did I correct?',
      'What new words can I use now?',
      'What will I improve in my next writing task?'
    ]
  },
  assessmentRubric:[
    {
      criterion:'Reading comprehension',
      excellent:'Understands main ideas and specific details with high accuracy.',
      satisfactory:'Understands the main idea and most details.',
      developing:'Needs support to identify details and evidence.'
    },
    {
      criterion:'Vocabulary use',
      excellent:'Uses new vocabulary accurately in personal sentences.',
      satisfactory:'Uses some vocabulary with minor errors.',
      developing:'Recognizes words but struggles to use them.'
    },
    {
      criterion:'Writing accuracy',
      excellent:'Produces clear A1/A2 sentences with good word order and few errors.',
      satisfactory:'Communicates ideas with some grammar or spelling errors.',
      developing:'Needs models to organize sentences.'
    },
    {
      criterion:'Revision and correction',
      excellent:'Identifies, corrects and explains frequent errors.',
      satisfactory:'Corrects errors with feedback.',
      developing:'Needs guided support to revise.'
    },
    {
      criterion:'Autonomy',
      excellent:'Uses strategies, reflects on progress and improves independently.',
      satisfactory:'Reflects when prompted.',
      developing:'Needs constant guidance to monitor progress.'
    }
  ]
};


// -----------------------------------------------------
// 8. COMPATIBILIDAD NAVEGADOR Y NODE
// -----------------------------------------------------

if (typeof window !== 'undefined') {
  window.readingTexts = readingTexts;
  window.writingExercises = writingExercises;
  window.readingWritingProgram = readingWritingProgram;
  window.readingWritingDidacticStages = readingWritingDidacticStages;
  window.readingExpansionTexts = readingExpansionTexts;
  window.writingExpansionExercises = writingExpansionExercises;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    readingTexts,
    writingExercises,
    readingWritingProgram,
    readingWritingDidacticStages,
    readingExpansionTexts,
    writingExpansionExercises
  };
}
// ============================================================
// LEOENGLISH — READING & WRITING ROUTE BRIDGE v5.1
// Pegar al FINAL de data-reading-writing.js
// Mantiene readingTexts y writingExercises juntos,
// pero los separa lógicamente para ruta, diagnóstico,
// homologación y refuerzos.
// ============================================================

(function leoReadingWritingRouteBridgeV51() {

  if (typeof readingTexts === 'undefined') {
    console.warn('readingTexts no está definido.');
    return;
  }

  if (typeof writingExercises === 'undefined') {
    console.warn('writingExercises no está definido.');
    return;
  }


  // ------------------------------------------------------------
  // 1. CONFIGURACIÓN GENERAL
  // ------------------------------------------------------------

  const literacyRouteRules = {
    requiredScore: 80,
    homologationScore: 85,
    reinforcementThreshold: 75
  };

  const literacyMethodology = {
    approach: 'Active reading and writing + communicative production + heutagogical reflection',
    sequence: [
      'Activation',
      'Input',
      'Comprehension',
      'Language noticing',
      'Controlled practice',
      'Guided production',
      'Revision',
      'Portfolio evidence',
      'Reflection'
    ]
  };

  const literacyAssessment = {
    reading: [
      'Comprensión global',
      'Comprensión específica',
      'Uso de evidencia textual',
      'Vocabulario en contexto',
      'Transferencia del texto a una producción personal'
    ],
    writing: [
      'Claridad del mensaje',
      'Precisión gramatical',
      'Orden sintáctico',
      'Vocabulario pertinente',
      'Revisión y corrección'
    ]
  };


  // ------------------------------------------------------------
  // 2. RUTA OFICIAL DE READING
  // ------------------------------------------------------------

  const readingLearningPath = [
    {
      level: 'A1',
      title: 'A1 · Reading Foundations',
      description: 'Textos breves sobre identidad, familia, rutinas, casa, comida, reglas y pasado simple.',
      color: '#3182CE',
      requiredScore: 80,
      homologationScore: 85,
      texts: [
        'school_day',
        'my_family',
        'daily_routine',
        'shopping_day',
        'my_room_a1',
        'my_best_friend_a1',
        'at_the_restaurant_a1',
        'weekend_plans_a1',
        'yesterday_at_home_a1',
        'school_rules_a1'
      ]
    },
    {
      level: 'A2',
      title: 'A2 · Reading Expansion',
      description: 'Textos más extensos sobre ciudad, clima, salud, tecnología y cultura.',
      color: '#805AD5',
      requiredScore: 80,
      homologationScore: 85,
      texts: [
        'london',
        'british_weather',
        'healthy_lifestyle',
        'technology_life',
        'colombian_festival'
      ]
    }
  ];


  // ------------------------------------------------------------
  // 3. RUTA OFICIAL DE WRITING
  // ------------------------------------------------------------

  const writingLearningPath = [
    {
      level: 'A1',
      title: 'A1 · Writing Foundations',
      description: 'Frases básicas, preguntas, negaciones, presentación personal, rutinas, dictado y corrección.',
      color: '#D85A30',
      requiredScore: 80,
      homologationScore: 85,
      exercises: [
        'word_order_1',
        'word_order_2',
        'transform_negatives',
        'transform_questions',
        'transform_tenses',
        'free_writing_intro',
        'free_writing_person',
        'free_writing_routine',
        'free_writing_my_profile',
        'word_order_a1_questions',
        'dictation_a1_routines',
        'free_writing_my_routine',
        'dictation_a1_restaurant',
        'free_writing_last_weekend',
        'error_correction_a1_present',
        'transform_a1_integrated'
      ]
    },
    {
      level: 'A2',
      title: 'A2 · Writing Expansion',
      description: 'Pasado, futuro, email informal, opinión, corrección mixta y producción más extensa.',
      color: '#9333EA',
      requiredScore: 80,
      homologationScore: 85,
      exercises: [
        'word_order_3',
        'fill_gaps_mixed',
        'free_writing_email',
        'free_writing_opinion',
        'error_correction_a1_mixed'
      ]
    }
  ];


  // ------------------------------------------------------------
  // 4. MAPA DE COMPETENCIAS DE READING
  // ------------------------------------------------------------

  const readingCompetencyMap = {
    school_day: {
      cefr: 'A1',
      skill: 'reading',
      homologationGroup: 'a1_reading_routines_school',
      diagnosticTags: ['routine', 'school', 'present_simple', 'time'],
      weaknessLabel: 'Reading: rutina escolar',
      evidence: 'Comprende textos breves sobre rutinas escolares, horarios y acciones cotidianas.'
    },

    my_family: {
      cefr: 'A1',
      skill: 'reading',
      homologationGroup: 'a1_reading_family',
      diagnosticTags: ['family', 'description', 'jobs', 'possessives'],
      weaknessLabel: 'Reading: familia y descripciones',
      evidence: 'Comprende descripciones familiares, profesiones y relaciones personales.'
    },

    daily_routine: {
      cefr: 'A1',
      skill: 'reading',
      homologationGroup: 'a1_reading_daily_routine',
      diagnosticTags: ['daily_routine', 'frequency', 'time_expressions'],
      weaknessLabel: 'Reading: rutina diaria',
      evidence: 'Identifica secuencias de rutina, horarios y hábitos.'
    },

    shopping_day: {
      cefr: 'A1',
      skill: 'reading',
      homologationGroup: 'a1_reading_shopping',
      diagnosticTags: ['shopping', 'prices', 'clothes', 'money'],
      weaknessLabel: 'Reading: compras y dinero',
      evidence: 'Comprende situaciones de compras, precios, cantidades y productos.'
    },

    my_room_a1: {
      cefr: 'A1',
      skill: 'reading',
      homologationGroup: 'a1_reading_home',
      diagnosticTags: ['home', 'there_is_are', 'prepositions_place'],
      weaknessLabel: 'Reading: casa y objetos',
      evidence: 'Comprende descripciones de espacios usando there is/are y preposiciones.'
    },

    my_best_friend_a1: {
      cefr: 'A1',
      skill: 'reading',
      homologationGroup: 'a1_reading_people',
      diagnosticTags: ['people_description', 'can_cant', 'likes'],
      weaknessLabel: 'Reading: descripción de personas',
      evidence: 'Comprende descripciones de apariencia, gustos y habilidades.'
    },

    at_the_restaurant_a1: {
      cefr: 'A1',
      skill: 'reading',
      homologationGroup: 'a1_reading_restaurant',
      diagnosticTags: ['restaurant', 'food', 'id_like', 'polite_requests'],
      weaknessLabel: 'Reading: restaurante y pedidos',
      evidence: 'Comprende diálogos básicos para pedir comida de forma cortés.'
    },

    weekend_plans_a1: {
      cefr: 'A1',
      skill: 'reading',
      homologationGroup: 'a1_reading_future_plans',
      diagnosticTags: ['going_to', 'future_plans', 'family'],
      weaknessLabel: 'Reading: planes futuros',
      evidence: 'Comprende textos breves sobre planes futuros con going to.'
    },

    yesterday_at_home_a1: {
      cefr: 'A1',
      skill: 'reading',
      homologationGroup: 'a1_reading_past_simple',
      diagnosticTags: ['past_simple', 'was_were', 'daily_activities_past'],
      weaknessLabel: 'Reading: pasado simple',
      evidence: 'Comprende narraciones simples sobre actividades pasadas.'
    },

    school_rules_a1: {
      cefr: 'A1',
      skill: 'reading',
      homologationGroup: 'a1_reading_rules',
      diagnosticTags: ['rules', 'imperatives', 'can_cant', 'must'],
      weaknessLabel: 'Reading: reglas e instrucciones',
      evidence: 'Comprende reglas escolares, instrucciones y prohibiciones básicas.'
    },

    london: {
      cefr: 'A2',
      skill: 'reading',
      homologationGroup: 'a2_reading_city_tourism',
      diagnosticTags: ['city', 'tourism', 'places', 'prepositions'],
      weaknessLabel: 'Reading: ciudad y turismo',
      evidence: 'Comprende descripciones turísticas y datos específicos sobre una ciudad.'
    },

    british_weather: {
      cefr: 'A2',
      skill: 'reading',
      homologationGroup: 'a2_reading_weather',
      diagnosticTags: ['weather', 'seasons', 'climate', 'descriptions'],
      weaknessLabel: 'Reading: clima y estaciones',
      evidence: 'Comprende textos descriptivos sobre clima, estaciones y hábitos culturales.'
    },

    healthy_lifestyle: {
      cefr: 'A2',
      skill: 'reading',
      homologationGroup: 'a2_reading_health',
      diagnosticTags: ['health', 'habits', 'advice', 'lifestyle'],
      weaknessLabel: 'Reading: hábitos saludables',
      evidence: 'Comprende recomendaciones y detalles sobre estilo de vida saludable.'
    },

    technology_life: {
      cefr: 'A2',
      skill: 'reading',
      homologationGroup: 'a2_reading_technology',
      diagnosticTags: ['technology', 'advantages', 'disadvantages', 'opinion'],
      weaknessLabel: 'Reading: tecnología y sociedad',
      evidence: 'Comprende ideas principales y argumentos sobre tecnología.'
    },

    colombian_festival: {
      cefr: 'A2',
      skill: 'reading',
      homologationGroup: 'a2_reading_culture',
      diagnosticTags: ['culture', 'festival', 'traditions', 'colombia'],
      weaknessLabel: 'Reading: cultura y tradiciones',
      evidence: 'Comprende textos culturales con información específica y vocabulario descriptivo.'
    }
  };


  // ------------------------------------------------------------
  // 5. MAPA DE COMPETENCIAS DE WRITING
  // ------------------------------------------------------------

  const writingCompetencyMap = {
    word_order_1: {
      cefr: 'A1',
      skill: 'writing',
      homologationGroup: 'a1_writing_basic_syntax',
      diagnosticTags: ['word_order', 'affirmative_sentences', 'to_be'],
      weaknessLabel: 'Writing: sintaxis afirmativa básica',
      evidence: 'Construye oraciones afirmativas con orden correcto.'
    },

    word_order_2: {
      cefr: 'A1',
      skill: 'writing',
      homologationGroup: 'a1_writing_questions_negatives',
      diagnosticTags: ['questions', 'negatives', 'present_simple', 'present_continuous'],
      weaknessLabel: 'Writing: preguntas y negaciones',
      evidence: 'Construye preguntas y negaciones básicas.'
    },

    transform_negatives: {
      cefr: 'A1',
      skill: 'writing',
      homologationGroup: 'a1_writing_negatives',
      diagnosticTags: ['negative_sentences', 'dont_doesnt', 'be_negative'],
      weaknessLabel: 'Writing: transformación a negativo',
      evidence: 'Transforma frases afirmativas a negativas.'
    },

    transform_questions: {
      cefr: 'A1',
      skill: 'writing',
      homologationGroup: 'a1_writing_questions',
      diagnosticTags: ['yes_no_questions', 'do_does', 'be_questions'],
      weaknessLabel: 'Writing: transformación a pregunta',
      evidence: 'Transforma afirmaciones en preguntas de sí/no.'
    },

    transform_tenses: {
      cefr: 'A1',
      skill: 'writing',
      homologationGroup: 'a1_writing_simple_continuous',
      diagnosticTags: ['present_simple', 'present_continuous', 'tense_transform'],
      weaknessLabel: 'Writing: presente simple vs continuo',
      evidence: 'Transforma frases entre presente simple y continuo.'
    },

    free_writing_intro: {
      cefr: 'A1',
      skill: 'writing',
      homologationGroup: 'a1_writing_introduction',
      diagnosticTags: ['personal_profile', 'introduction', 'basic_sentences'],
      weaknessLabel: 'Writing: presentación personal',
      evidence: 'Escribe una presentación personal breve y clara.'
    },

    free_writing_person: {
      cefr: 'A1',
      skill: 'writing',
      homologationGroup: 'a1_writing_people_description',
      diagnosticTags: ['describe_people', 'family', 'adjectives'],
      weaknessLabel: 'Writing: descripción de personas',
      evidence: 'Describe una persona usando apariencia, personalidad y profesión.'
    },

    free_writing_routine: {
      cefr: 'A1',
      skill: 'writing',
      homologationGroup: 'a1_writing_routine',
      diagnosticTags: ['daily_routine', 'frequency_adverbs', 'time_expressions'],
      weaknessLabel: 'Writing: rutina diaria',
      evidence: 'Escribe una rutina con orden temporal y adverbios de frecuencia.'
    },

    word_order_3: {
      cefr: 'A2',
      skill: 'writing',
      homologationGroup: 'a2_writing_past_future_syntax',
      diagnosticTags: ['past_simple', 'future', 'will', 'going_to'],
      weaknessLabel: 'Writing: sintaxis de pasado y futuro',
      evidence: 'Construye frases en pasado y futuro con orden correcto.'
    },

    fill_gaps_mixed: {
      cefr: 'A2',
      skill: 'writing',
      homologationGroup: 'a2_writing_mixed_grammar',
      diagnosticTags: ['mixed_grammar', 'past_continuous', 'modals', 'future'],
      weaknessLabel: 'Writing: gramática mixta',
      evidence: 'Completa frases con tiempos verbales y modales correctos.'
    },

    free_writing_email: {
      cefr: 'A2',
      skill: 'writing',
      homologationGroup: 'a2_writing_informal_email',
      diagnosticTags: ['email', 'past_simple', 'future_plans', 'informal_writing'],
      weaknessLabel: 'Writing: email informal',
      evidence: 'Escribe un email informal con pasado y planes futuros.'
    },

    free_writing_opinion: {
      cefr: 'A2',
      skill: 'writing',
      homologationGroup: 'a2_writing_opinion',
      diagnosticTags: ['opinion', 'arguments', 'connectors', 'technology'],
      weaknessLabel: 'Writing: opinión y argumentos',
      evidence: 'Expresa una opinión básica con conectores y argumentos simples.'
    },

    error_correction_a1_present: {
      cefr: 'A1',
      skill: 'writing',
      homologationGroup: 'a1_writing_error_correction_present',
      diagnosticTags: ['error_correction', 'present_simple', 'to_be', 'frequency'],
      weaknessLabel: 'Writing: corrección de errores A1',
      evidence: 'Detecta y corrige errores frecuentes de presente simple y to be.'
    },

    error_correction_a1_mixed: {
      cefr: 'A2',
      skill: 'writing',
      homologationGroup: 'a2_writing_error_correction_mixed',
      diagnosticTags: ['error_correction', 'mixed_a1_a2', 'past', 'modals', 'comparatives'],
      weaknessLabel: 'Writing: corrección mixta',
      evidence: 'Corrige errores integrados de gramática A1/A2.'
    },

    dictation_a1_routines: {
      cefr: 'A1',
      skill: 'writing',
      homologationGroup: 'a1_writing_dictation_routines',
      diagnosticTags: ['dictation', 'routines', 'spelling', 'listening_writing'],
      weaknessLabel: 'Writing: dictado de rutinas',
      evidence: 'Escribe frases escuchadas sobre rutinas con buena ortografía.'
    },

    dictation_a1_restaurant: {
      cefr: 'A1',
      skill: 'writing',
      homologationGroup: 'a1_writing_dictation_restaurant',
      diagnosticTags: ['dictation', 'restaurant', 'id_like', 'polite_requests'],
      weaknessLabel: 'Writing: dictado de restaurante',
      evidence: 'Escribe frases funcionales de restaurante a partir de audio.'
    },

    free_writing_my_profile: {
      cefr: 'A1',
      skill: 'writing',
      homologationGroup: 'a1_writing_personal_profile',
      diagnosticTags: ['personal_profile', 'identity', 'basic_info'],
      weaknessLabel: 'Writing: perfil personal',
      evidence: 'Escribe un perfil personal breve con información básica.'
    },

    free_writing_my_routine: {
      cefr: 'A1',
      skill: 'writing',
      homologationGroup: 'a1_writing_daily_routine',
      diagnosticTags: ['daily_routine', 'present_simple', 'frequency'],
      weaknessLabel: 'Writing: rutina personal',
      evidence: 'Escribe una rutina diaria usando presente simple.'
    },

    free_writing_last_weekend: {
      cefr: 'A1',
      skill: 'writing',
      homologationGroup: 'a1_writing_past_weekend',
      diagnosticTags: ['past_simple', 'weekend', 'narration'],
      weaknessLabel: 'Writing: narración en pasado',
      evidence: 'Escribe un párrafo breve sobre actividades pasadas.'
    },

    transform_a1_integrated: {
      cefr: 'A1',
      skill: 'writing',
      homologationGroup: 'a1_writing_integrated_transform',
      diagnosticTags: ['sentence_transformation', 'mixed_a1', 'negative', 'question', 'past', 'future'],
      weaknessLabel: 'Writing: transformación integrada A1',
      evidence: 'Transforma oraciones entre afirmativo, negativo, pregunta, pasado y futuro.'
    },

    word_order_a1_questions: {
      cefr: 'A1',
      skill: 'writing',
      homologationGroup: 'a1_writing_question_order',
      diagnosticTags: ['word_order', 'questions', 'wh_questions'],
      weaknessLabel: 'Writing: orden de preguntas',
      evidence: 'Ordena palabras para formar preguntas A1 correctamente.'
    }
  };


  // ------------------------------------------------------------
  // 6. FUNCIONES DE SOPORTE
  // ------------------------------------------------------------

  function findReadingPathLevel(id) {
    const path = readingLearningPath.find(level => level.texts.includes(id));
    return path ? path.level : null;
  }

  function findWritingPathLevel(id) {
    const path = writingLearningPath.find(level => level.exercises.includes(id));
    return path ? path.level : null;
  }

  function getReadingSequence(id) {
    let counter = 0;

    for (const level of readingLearningPath) {
      for (const textId of level.texts) {
        counter++;
        if (textId === id) return counter;
      }
    }

    return 999;
  }

  function getWritingSequence(id) {
    let counter = 0;

    for (const level of writingLearningPath) {
      for (const exId of level.exercises) {
        counter++;
        if (exId === id) return counter;
      }
    }

    return 999;
  }

  function getReadingText(id) {
    return readingTexts.find(text => text.id === id) || null;
  }

  function getWritingExercise(id) {
    return writingExercises.find(ex => ex.id === id) || null;
  }

  function getReadingWeaknessLabel(id) {
    return readingCompetencyMap[id]?.weaknessLabel || getReadingText(id)?.title || id;
  }

  function getWritingWeaknessLabel(id) {
    return writingCompetencyMap[id]?.weaknessLabel || getWritingExercise(id)?.title || id;
  }


  // ------------------------------------------------------------
  // 7. ENRIQUECIMIENTO AUTOMÁTICO DE READING
  // ------------------------------------------------------------

  readingTexts.forEach(text => {
    const meta = readingCompetencyMap[text.id] || {};
    const inferredLevel = meta.cefr || text.level || findReadingPathLevel(text.id) || 'A1';

    text.id = text.id;
    text.level = text.level || inferredLevel;
    text.skill = 'reading';
    text.sourceType = 'reading';

    text.routeMeta = {
      type: 'reading',
      level: inferredLevel,
      sequence: getReadingSequence(text.id),
      requiredScore: literacyRouteRules.requiredScore,
      homologationScore: literacyRouteRules.homologationScore,
      estimatedMinutes: text.estimatedMinutes || 18,
      isRequired: true
    };

    text.homologation = {
      canHomologate: true,
      group: meta.homologationGroup || text.id,
      minimumDiagnosticScore: literacyRouteRules.homologationScore,
      weaknessLabel: meta.weaknessLabel || text.title,
      evidence: meta.evidence || text.desc || `Comprensión lectora del texto ${text.title}.`
    };

    text.diagnosticTags = meta.diagnosticTags || [text.topic || text.id];
    text.weaknessLabel = meta.weaknessLabel || text.title;
    text.methodology = text.methodology || literacyMethodology;
    text.assessmentCriteria = text.assessmentCriteria || literacyAssessment.reading;

    if (!text.selfAssessment) {
      text.selfAssessment = [
        'I can understand the general idea of the text.',
        'I can find specific information in the text.',
        'I can identify useful vocabulary.',
        'I can answer comprehension questions with evidence.',
        'I can connect the text with my own life.'
      ];
    }
  });


  // ------------------------------------------------------------
  // 8. ENRIQUECIMIENTO AUTOMÁTICO DE WRITING
  // ------------------------------------------------------------

  writingExercises.forEach(exercise => {
    const meta = writingCompetencyMap[exercise.id] || {};
    const inferredLevel = meta.cefr || exercise.level || findWritingPathLevel(exercise.id) || 'A1';

    exercise.id = exercise.id;
    exercise.level = exercise.level || inferredLevel;
    exercise.skill = 'writing';
    exercise.sourceType = 'writing';

    exercise.routeMeta = {
      type: 'writing',
      level: inferredLevel,
      sequence: getWritingSequence(exercise.id),
      requiredScore: literacyRouteRules.requiredScore,
      homologationScore: literacyRouteRules.homologationScore,
      estimatedMinutes: exercise.estimatedMinutes || 20,
      isRequired: true
    };

    exercise.homologation = {
      canHomologate: true,
      group: meta.homologationGroup || exercise.id,
      minimumDiagnosticScore: literacyRouteRules.homologationScore,
      weaknessLabel: meta.weaknessLabel || exercise.title,
      evidence: meta.evidence || exercise.desc || `Producción escrita del ejercicio ${exercise.title}.`
    };

    exercise.diagnosticTags = meta.diagnosticTags || [exercise.type || exercise.id];
    exercise.weaknessLabel = meta.weaknessLabel || exercise.title;
    exercise.methodology = exercise.methodology || literacyMethodology;
    exercise.assessmentCriteria = exercise.assessmentCriteria || literacyAssessment.writing;

    if (!exercise.selfAssessment) {
      exercise.selfAssessment = [
        'Puedo entender la consigna de escritura.',
        'Puedo organizar una frase o párrafo en inglés.',
        'Puedo revisar errores básicos.',
        'Puedo mejorar mi producción después de recibir feedback.'
      ];
    }
  });


  // ------------------------------------------------------------
  // 9. DIAGNÓSTICO DE READING
  // ------------------------------------------------------------

  const readingDiagnosticBlueprint = {
    id: 'reading_diagnostic_a1_a2',
    title: 'Diagnóstico de Reading A1–A2',
    description: 'Evalúa comprensión lectora global y específica.',
    levels: ['A1', 'A2'],
    rules: literacyRouteRules,
    items: [
      {
        id: 'diag_reading_a1_school_1',
        level: 'A1',
        skill: 'reading',
        mapsTo: ['school_day'],
        tags: ['routine', 'school', 'specific_information'],
        q: 'Mini text: Tom walks to school every morning because his school is near his house. How does Tom get to school?',
        opts: ['By bus', 'By car', 'He walks', 'By train'],
        a: 2,
        exp: 'The text says he walks to school every morning.'
      },
      {
        id: 'diag_reading_a1_family_1',
        level: 'A1',
        skill: 'reading',
        mapsTo: ['my_family'],
        tags: ['family', 'jobs', 'detail'],
        q: 'Mini text: Sofia’s father is an engineer and her mother works as a nurse. What is her father’s job?',
        opts: ['Doctor', 'Engineer', 'Teacher', 'Nurse'],
        a: 1,
        exp: 'Her father is an engineer.'
      },
      {
        id: 'diag_reading_a1_room_1',
        level: 'A1',
        skill: 'reading',
        mapsTo: ['my_room_a1'],
        tags: ['home', 'prepositions', 'there_is_are'],
        q: 'Mini text: There is a bed next to the window. Where is the bed?',
        opts: ['Under the desk', 'Next to the window', 'Behind the door', 'In the wardrobe'],
        a: 1,
        exp: 'The bed is next to the window.'
      },
      {
        id: 'diag_reading_a1_restaurant_1',
        level: 'A1',
        skill: 'reading',
        mapsTo: ['at_the_restaurant_a1'],
        tags: ['restaurant', 'id_like', 'food'],
        q: 'Mini dialogue: Customer: I’d like a chicken sandwich and a glass of orange juice. What drink does the customer order?',
        opts: ['Water', 'Tea', 'Orange juice', 'Coffee'],
        a: 2,
        exp: 'The customer orders orange juice.'
      },
      {
        id: 'diag_reading_a1_past_1',
        level: 'A1',
        skill: 'reading',
        mapsTo: ['yesterday_at_home_a1'],
        tags: ['past_simple', 'details'],
        q: 'Mini text: Yesterday, I cleaned my room and helped my mother in the kitchen. What did the person clean?',
        opts: ['The kitchen', 'The bathroom', 'The room', 'The garden'],
        a: 2,
        exp: 'The text says: I cleaned my room.'
      },
      {
        id: 'diag_reading_a2_london_1',
        level: 'A2',
        skill: 'reading',
        mapsTo: ['london'],
        tags: ['city', 'tourism', 'specific_information'],
        q: 'Mini text: The River Thames runs through the heart of London. What river runs through London?',
        opts: ['The Seine', 'The Thames', 'The Nile', 'The Rhine'],
        a: 1,
        exp: 'The River Thames runs through London.'
      },
      {
        id: 'diag_reading_a2_weather_1',
        level: 'A2',
        skill: 'reading',
        mapsTo: ['british_weather'],
        tags: ['weather', 'main_idea'],
        q: 'Mini text: The weather in the UK is very changeable. Why do British people often talk about the weather?',
        opts: ['Because it is always sunny', 'Because it is very changeable', 'Because it never rains', 'Because it is always hot'],
        a: 1,
        exp: 'The text says the weather is very changeable.'
      },
      {
        id: 'diag_reading_a2_health_1',
        level: 'A2',
        skill: 'reading',
        mapsTo: ['healthy_lifestyle'],
        tags: ['health', 'recommendations'],
        q: 'Mini text: Experts recommend at least thirty minutes of moderate physical activity every day. How much exercise do experts recommend?',
        opts: ['Ten minutes', 'At least thirty minutes', 'Two hours', 'Five minutes'],
        a: 1,
        exp: 'Experts recommend at least thirty minutes.'
      },
      {
        id: 'diag_reading_a2_tech_1',
        level: 'A2',
        skill: 'reading',
        mapsTo: ['technology_life'],
        tags: ['technology', 'advantages_disadvantages'],
        q: 'Mini text: Many people spend too much time looking at screens and not enough time interacting face-to-face. What is one disadvantage of technology?',
        opts: ['It helps people study', 'It connects people', 'People spend too much time on screens', 'It makes life easier'],
        a: 2,
        exp: 'The disadvantage mentioned is too much screen time.'
      }
    ]
  };


  // ------------------------------------------------------------
  // 10. DIAGNÓSTICO DE WRITING
  // ------------------------------------------------------------

  const writingDiagnosticBlueprint = {
    id: 'writing_diagnostic_a1_a2',
    title: 'Diagnóstico de Writing A1–A2',
    description: 'Evalúa sintaxis, transformación, corrección y producción escrita controlada.',
    levels: ['A1', 'A2'],
    rules: literacyRouteRules,
    items: [
      {
        id: 'diag_writing_a1_order_1',
        level: 'A1',
        skill: 'writing',
        mapsTo: ['word_order_1'],
        tags: ['word_order', 'affirmative'],
        q: 'Choose the correct sentence.',
        opts: ['She is a teacher.', 'She a teacher is.', 'Is she a teacher.'],
        a: 0,
        exp: 'Correct order: subject + be + article + noun.'
      },
      {
        id: 'diag_writing_a1_question_1',
        level: 'A1',
        skill: 'writing',
        mapsTo: ['word_order_a1_questions', 'transform_questions'],
        tags: ['questions', 'word_order'],
        q: 'Choose the correct question.',
        opts: ['Where you live?', 'Where do you live?', 'Where does you live?'],
        a: 1,
        exp: 'Correct question: Where do you live?'
      },
      {
        id: 'diag_writing_a1_negative_1',
        level: 'A1',
        skill: 'writing',
        mapsTo: ['transform_negatives', 'error_correction_a1_present'],
        tags: ['negative', 'present_simple'],
        q: 'Choose the correct negative sentence.',
        opts: ['She no likes coffee.', 'She doesn’t like coffee.', 'She doesn’t likes coffee.'],
        a: 1,
        exp: 'With she: doesn’t + base verb.'
      },
      {
        id: 'diag_writing_a1_continuous_1',
        level: 'A1',
        skill: 'writing',
        mapsTo: ['transform_tenses'],
        tags: ['present_continuous'],
        q: 'Transform: “She reads a book.” → now. Choose the correct answer.',
        opts: ['She is reading a book.', 'She reading a book.', 'She readsing a book.'],
        a: 0,
        exp: 'Present continuous: she is reading.'
      },
      {
        id: 'diag_writing_a1_profile_1',
        level: 'A1',
        skill: 'writing',
        mapsTo: ['free_writing_intro', 'free_writing_my_profile'],
        tags: ['personal_profile'],
        q: 'Choose the best sentence for a personal profile.',
        opts: ['My name Ana.', 'My name is Ana.', 'Name is my Ana.'],
        a: 1,
        exp: 'Correct structure: My name is Ana.'
      },
      {
        id: 'diag_writing_a1_dictation_proxy_1',
        level: 'A1',
        skill: 'writing',
        mapsTo: ['dictation_a1_routines'],
        tags: ['dictation', 'spelling'],
        q: 'Choose the correctly written sentence.',
        opts: ['I wake up at six o’clock every morning.', 'I wake at six every morning up.', 'I waking up at six o’clock.'],
        a: 0,
        exp: 'The sentence has correct order and spelling.'
      },
      {
        id: 'diag_writing_a2_past_future_1',
        level: 'A2',
        skill: 'writing',
        mapsTo: ['word_order_3', 'free_writing_email'],
        tags: ['past_simple', 'future'],
        q: 'Choose the correct sentence.',
        opts: ['Did you enjoyed the party?', 'Did you enjoy the party?', 'You did enjoy the party?'],
        a: 1,
        exp: 'After did, use the base verb: enjoy.'
      },
      {
        id: 'diag_writing_a2_mixed_1',
        level: 'A2',
        skill: 'writing',
        mapsTo: ['fill_gaps_mixed', 'error_correction_a1_mixed'],
        tags: ['mixed_grammar', 'past_continuous'],
        q: 'Choose the correct completion: “I ___ TV when you called.”',
        opts: ['watched', 'was watching', 'am watching'],
        a: 1,
        exp: 'Past continuous: was watching.'
      },
      {
        id: 'diag_writing_a2_email_1',
        level: 'A2',
        skill: 'writing',
        mapsTo: ['free_writing_email'],
        tags: ['email', 'informal_writing'],
        q: 'Choose the best opening for an informal email.',
        opts: ['Dear Sir or Madam,', 'Hi David!', 'To whom it may concern,'],
        a: 1,
        exp: 'Hi David! is appropriate for an informal email.'
      },
      {
        id: 'diag_writing_a2_opinion_1',
        level: 'A2',
        skill: 'writing',
        mapsTo: ['free_writing_opinion'],
        tags: ['opinion', 'connectors'],
        q: 'Choose the best phrase to introduce an opinion.',
        opts: ['Yesterday I went...', 'In my opinion...', 'There is a table...'],
        a: 1,
        exp: 'In my opinion is used to express an opinion.'
      }
    ]
  };


  // ------------------------------------------------------------
  // 11. CONFIGURACIONES CENTRALES
  // ------------------------------------------------------------

  const readingRouteConfig = {
    type: 'reading',
    source: 'readingTexts',
    version: '5.1',
    rules: literacyRouteRules,
    path: readingLearningPath,
    competencies: readingCompetencyMap,
    diagnostic: readingDiagnosticBlueprint
  };

  const writingRouteConfig = {
    type: 'writing',
    source: 'writingExercises',
    version: '5.1',
    rules: literacyRouteRules,
    path: writingLearningPath,
    competencies: writingCompetencyMap,
    diagnostic: writingDiagnosticBlueprint
  };

  const literacyRouteConfig = {
    version: '5.1',
    methodology: literacyMethodology,
    assessment: literacyAssessment,
    reading: readingRouteConfig,
    writing: writingRouteConfig
  };


  // ------------------------------------------------------------
  // 12. DIAGNÓSTICO GLOBAL A1–A2
  // ------------------------------------------------------------
  // El app.js v4 usa diagnosticTest si existe.
  // Aquí componemos Grammar + Reading + Writing.

  const grammarItems =
    typeof grammarDiagnosticBlueprint !== 'undefined'
      ? grammarDiagnosticBlueprint.items || []
      : [];

  var diagnosticTest = {
    id: 'main_placement_test_a1_a2',
    title: 'Prueba diagnóstica integral A1–A2',
    description: 'Evalúa gramática, reading y writing para ubicar, homologar y asignar refuerzos.',
    levels: ['A1', 'A2'],
    rules: {
      passScore: 80,
      homologationScore: 85,
      reinforcementThreshold: 75
    },
    sections: [
      {
        id: 'grammar',
        title: 'Grammar',
        weight: 0.5,
        items: grammarItems
      },
      {
        id: 'reading',
        title: 'Reading',
        weight: 0.25,
        items: readingDiagnosticBlueprint.items
      },
      {
        id: 'writing',
        title: 'Writing',
        weight: 0.25,
        items: writingDiagnosticBlueprint.items
      }
    ]
  };


  // ------------------------------------------------------------
  // 13. UTILIDADES GLOBALES
  // ------------------------------------------------------------

  function getReadingTextsByLevel(level) {
    return readingTexts.filter(text => text.level === level);
  }

  function getWritingExercisesByLevel(level) {
    return writingExercises.filter(ex => ex.level === level);
  }

  function getLiteracyWeaknessLabel(type, id) {
    if (type === 'reading') return getReadingWeaknessLabel(id);
    if (type === 'writing') return getWritingWeaknessLabel(id);
    return id;
  }

  function getReadingDiagnosticItemsByLevel(level) {
    return readingDiagnosticBlueprint.items.filter(item => item.level === level);
  }

  function getWritingDiagnosticItemsByLevel(level) {
    return writingDiagnosticBlueprint.items.filter(item => item.level === level);
  }


  // ------------------------------------------------------------
  // 14. EXPORTACIÓN PARA NAVEGADOR
  // ------------------------------------------------------------

  if (typeof window !== 'undefined') {
    window.readingTexts = readingTexts;
    window.writingExercises = writingExercises;

    window.readingLearningPath = readingLearningPath;
    window.writingLearningPath = writingLearningPath;

    window.readingCompetencyMap = readingCompetencyMap;
    window.writingCompetencyMap = writingCompetencyMap;

    window.readingDiagnosticBlueprint = readingDiagnosticBlueprint;
    window.writingDiagnosticBlueprint = writingDiagnosticBlueprint;

    window.readingRouteConfig = readingRouteConfig;
    window.writingRouteConfig = writingRouteConfig;
    window.literacyRouteConfig = literacyRouteConfig;

    window.diagnosticTest = diagnosticTest;

    window.getReadingText = getReadingText;
    window.getWritingExercise = getWritingExercise;
    window.getReadingTextsByLevel = getReadingTextsByLevel;
    window.getWritingExercisesByLevel = getWritingExercisesByLevel;
    window.getReadingWeaknessLabel = getReadingWeaknessLabel;
    window.getWritingWeaknessLabel = getWritingWeaknessLabel;
    window.getLiteracyWeaknessLabel = getLiteracyWeaknessLabel;
    window.getReadingDiagnosticItemsByLevel = getReadingDiagnosticItemsByLevel;
    window.getWritingDiagnosticItemsByLevel = getWritingDiagnosticItemsByLevel;
  }


  // ------------------------------------------------------------
  // 15. EXPORTACIÓN PARA NODE
  // ------------------------------------------------------------

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      readingTexts,
      writingExercises,
      readingLearningPath,
      writingLearningPath,
      readingCompetencyMap,
      writingCompetencyMap,
      readingDiagnosticBlueprint,
      writingDiagnosticBlueprint,
      readingRouteConfig,
      writingRouteConfig,
      literacyRouteConfig,
      diagnosticTest
    };
  }

})();
