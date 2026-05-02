// data-vocab.js
// Contiene todos los temas de vocabulario interactivo

const vocabTopics = [
  {
    id:'colors', title:'Los Colores', icon:'🎨', count:14,
    words:[
      {en:'black',es:'negro/a',example:'The cat is black. / The sky is black at night.'},
      {en:'white',es:'blanco/a',example:'Snow is white. / She is wearing a white dress.'},
      {en:'red',es:'rojo/a',example:'The apple is red. / He drives a red car.'},
      {en:'blue',es:'azul',example:'The sky is blue. / She has blue eyes.'},
      {en:'green',es:'verde',example:'The grass is green. / I like green vegetables.'},
      {en:'yellow',es:'amarillo/a',example:'The sun is yellow. / He wears a yellow hat.'},
      {en:'orange',es:'naranja',example:'The fruit is orange. / She painted the wall orange.'},
      {en:'purple',es:'morado/a / violeta',example:'The flower is purple. / She likes purple clothes.'},
      {en:'pink',es:'rosa',example:'The sky is pink at sunset. / She has a pink bag.'},
      {en:'brown',es:'marrón / café',example:'The dog is brown. / He has brown hair.'},
      {en:'grey',es:'gris',example:'The sky is grey and cloudy today.'},
      {en:'navy',es:'azul marino',example:'He wears a navy blue suit to work.'},
      {en:'beige',es:'beige / crema',example:'The walls of the living room are beige.'},
      {en:'gold',es:'dorado/a',example:'She wears a beautiful gold necklace.'},
    ]
  },
  {
    id:'family', title:'La Familia', icon:'👨‍👩‍👧', count:20,
    words:[
      {en:'father',es:'padre',example:'My father is a doctor. He is 50 years old.'},
      {en:'mother',es:'madre',example:'My mother is a teacher. She loves reading.'},
      {en:'brother',es:'hermano',example:'I have one brother. His name is Luis.'},
      {en:'sister',es:'hermana',example:'My sister is older than me. She lives in Bogotá.'},
      {en:'son',es:'hijo',example:'They have two sons and one daughter.'},
      {en:'daughter',es:'hija',example:'Their daughter is studying medicine at university.'},
      {en:'grandfather',es:'abuelo',example:'My grandfather is 75 years old and retired.'},
      {en:'grandmother',es:'abuela',example:'My grandmother makes delicious arepas every Sunday.'},
      {en:'uncle',es:'tío',example:'My uncle lives in Canada. He visits us in summer.'},
      {en:'aunt',es:'tía',example:'My aunt has three children. They are lovely.'},
      {en:'cousin',es:'primo/a',example:'My cousin and I are the same age.'},
      {en:'husband',es:'esposo / marido',example:'Her husband is very kind and funny.'},
      {en:'wife',es:'esposa',example:'His wife is a lawyer. She works very hard.'},
      {en:'nephew',es:'sobrino',example:'My nephew is only three years old.'},
      {en:'niece',es:'sobrina',example:'My niece loves dancing and music.'},
      {en:'twins',es:'gemelos/as',example:'My cousins are twins. They look identical!'},
      {en:'parents',es:'padres',example:'My parents are from Cali, Colombia.'},
      {en:'grandparents',es:'abuelos',example:'My grandparents live near us in the same street.'},
      {en:'stepfather',es:'padrastro',example:'Her stepfather is very friendly and kind.'},
      {en:'stepmother',es:'madrastra',example:'His stepmother is a nurse at the hospital.'},
    ]
  },
  {
    id:'people', title:'Las Personas', icon:'👤', count:16,
    words:[
      {en:'baby',es:'bebé',example:'The baby is sleeping. She is only six months old.'},
      {en:'toddler',es:'niño/a pequeño/a (1-3 años)',example:'The toddler is learning to walk.'},
      {en:'child',es:'niño/a',example:'The child is playing in the park.'},
      {en:'teenager',es:'adolescente',example:'She is a teenager. She is fifteen years old.'},
      {en:'young person',es:'joven',example:'He is a young person full of energy and ideas.'},
      {en:'adult',es:'adulto/a',example:'Adults pay full price at the cinema.'},
      {en:'middle-aged',es:'de mediana edad',example:'He is middle-aged, about forty-five years old.'},
      {en:'elderly',es:'anciano/a / mayor',example:'The elderly man reads the newspaper every morning.'},
      {en:'woman',es:'mujer',example:'The woman in the red coat is my English teacher.'},
      {en:'man',es:'hombre',example:'The man at the door is waiting for you.'},
      {en:'girl',es:'chica / niña',example:'The girl has long blonde hair and blue eyes.'},
      {en:'boy',es:'chico / niño',example:'The boy runs very fast in the park.'},
      {en:'lady',es:'señora / dama',example:'The lady at reception is very helpful.'},
      {en:'gentleman',es:'caballero / señor',example:'The gentleman opened the door for her.'},
      {en:'person',es:'persona',example:'There is one person in the room.'},
      {en:'people',es:'personas / gente',example:'There are many people in the street today.'},
    ]
  },
  {
    id:'greetings', title:'Saludos y Presentaciones', icon:'👋', count:18,
    words:[
      {en:'Good morning',es:'Buenos días',example:'Good morning! How are you today?'},
      {en:'Good afternoon',es:'Buenas tardes',example:'Good afternoon, Mrs Smith. How are you?'},
      {en:'Good evening',es:'Buenas noches (al llegar)',example:'Good evening, ladies and gentlemen!'},
      {en:'Good night',es:'Buenas noches (al despedirse)',example:'Good night! Sleep well!'},
      {en:'Hello / Hi',es:'Hola',example:'"Hello!" / "Hi, how\'s it going?"'},
      {en:'Goodbye / Bye',es:'Adiós',example:'"Goodbye, see you tomorrow!"'},
      {en:'See you later',es:'Hasta luego',example:'"See you later, have a great day!"'},
      {en:'See you tomorrow',es:'Hasta mañana',example:'"See you tomorrow at school!"'},
      {en:'How are you?',es:'¿Cómo estás?',example:'"Hi Tom! How are you?" "Fine, thanks!"'},
      {en:'Fine, thanks',es:'Bien, gracias',example:'"How are you?" — "Fine, thanks. And you?"'},
      {en:'Not bad',es:'No me quejo / Bastante bien',example:'"How are you?" — "Not bad, thanks."'},
      {en:"What's your name?",es:'¿Cómo te llamas?',example:'"What\'s your name?" "My name is Ana."'},
      {en:'My name is...',es:'Me llamo... / Mi nombre es...',example:'"My name is Carlos. Nice to meet you!"'},
      {en:'Nice to meet you',es:'Mucho gusto / Encantado/a',example:'"Nice to meet you, Ana!" "Nice to meet you too!"'},
      {en:'Where are you from?',es:'¿De dónde eres?',example:'"Where are you from?" "I\'m from Colombia."'},
      {en:"I'm from...",es:'Soy de...',example:'"I\'m from Cúcuta, in the north of Colombia."'},
      {en:'How old are you?',es:'¿Cuántos años tienes?',example:'"How old are you?" "I\'m 22 years old."'},
      {en:'Best wishes',es:'Mis mejores deseos',example:'"Best wishes to your family!" "Thank you so much!"'},
    ]
  },
  {
    id:'numbers_vocab', title:'Números y Fechas', icon:'🔢', count:18,
    words:[
      {en:'one / first',es:'uno / primero',example:'"I have one dog." / "She is first in class."'},
      {en:'two / second',es:'dos / segundo',example:'"I need two tickets." / "He came second."'},
      {en:'three / third',es:'tres / tercero',example:'"There are three rooms." / "This is the third time."'},
      {en:'five / fifth',es:'cinco / quinto',example:'"I have five friends." / "She lives on the fifth floor."'},
      {en:'ten / tenth',es:'diez / décimo',example:'"There are ten students." / "Today is the tenth of March."'},
      {en:'twelve / twelfth',es:'doce / duodécimo',example:'"Twelve months in a year." / "December is the twelfth month."'},
      {en:'fifteen / fifteenth',es:'quince / decimoquinto',example:'"She is fifteen years old." / "On the fifteenth of June."'},
      {en:'twenty / twentieth',es:'veinte / vigésimo',example:'"I need twenty minutes." / "The twentieth century."'},
      {en:'thirty / thirtieth',es:'treinta / trigésimo',example:'"He is thirty years old." / "On the thirtieth of April."'},
      {en:'forty / fortieth',es:'cuarenta / cuadragésimo',example:'"There are forty students." ⚠️ forty (NO fourty!)'},
      {en:'fifty / fiftieth',es:'cincuenta / quincuagésimo',example:'"Fifty people attended." / "Her fiftieth birthday."'},
      {en:'a hundred',es:'cien / ciento',example:'"There are a hundred people in the room."'},
      {en:'a thousand',es:'mil',example:'"A thousand students study here."'},
      {en:'a million',es:'un millón',example:'"One million people live in this city."'},
      {en:'half',es:'medio/a / la mitad',example:'"Half past seven." / "I want half, please."'},
      {en:'quarter',es:'un cuarto',example:'"A quarter past eight." / "Quarter to nine."'},
      {en:'dozen',es:'docena',example:'"A dozen eggs, please." (= 12)'},
      {en:'couple',es:'un par / dos (aprox.)',example:'"I need a couple of minutes." (= 2 approximately)'},
    ]
  },
  {
    id:'jobs', title:'Profesiones y trabajos', icon:'💼', count:18,
    words:[
      {en:'doctor',es:'médico/a',example:'"She is a doctor. She works at the hospital."'},
      {en:'nurse',es:'enfermero/a',example:'"My aunt is a nurse. She works night shifts."'},
      {en:'teacher',es:'profesor/a / maestro/a',example:'"My father is a teacher. He teaches maths."'},
      {en:'engineer',es:'ingeniero/a',example:'"He is an engineer. He designs bridges."'},
      {en:'lawyer',es:'abogado/a',example:'"She is a lawyer and works at a big firm."'},
      {en:'police officer',es:'oficial de policía',example:'"The police officer helped the lost child."'},
      {en:'firefighter',es:'bombero/a',example:'"Firefighters are very brave people."'},
      {en:'chef',es:'chef / cocinero/a',example:'"He is a chef at a famous restaurant."'},
      {en:'journalist',es:'periodista',example:'"She is a journalist for a national newspaper."'},
      {en:'accountant',es:'contable / contador/a',example:'"He works as an accountant at a bank."'},
      {en:'architect',es:'arquitecto/a',example:'"She is an architect. She designs beautiful buildings."'},
      {en:'artist',es:'artista',example:'"He is an artist. He paints every day."'},
      {en:'musician',es:'músico/a',example:'"She is a musician. She plays the guitar."'},
      {en:'pilot',es:'piloto',example:'"He is a pilot and flies to Europe every week."'},
      {en:'farmer',es:'agricultor/a / granjero/a',example:'"My grandfather was a farmer. He had cows and chickens."'},
      {en:'student',es:'estudiante',example:'"I am a student. I study at university."'},
      {en:'businessman',es:'empresario/a',example:'"He is a successful businessman."'},
      {en:'receptionist',es:'recepcionista',example:'"The receptionist at the hotel was very helpful."'},
    ]
  },
  {
    id:'places', title:'Lugares de la ciudad', icon:'🏙️', count:18,
    words:[
      {en:'bank',es:'banco',example:'"The bank is on the corner of the street."'},
      {en:'hospital',es:'hospital',example:'"She works at the hospital near the park."'},
      {en:'school',es:'escuela / colegio',example:'"The school is next to the library."'},
      {en:'supermarket',es:'supermercado',example:'"We do the shopping at the supermarket on Saturdays."'},
      {en:"chemist's / pharmacy",es:'farmacia',example:'"I need to go to the chemist\'s for medicine."'},
      {en:'post office',es:'oficina de correos',example:'"I sent a letter at the post office yesterday."'},
      {en:'library',es:'biblioteca',example:'"I study at the library every afternoon after school."'},
      {en:'church',es:'iglesia',example:'"The church is opposite the town hall."'},
      {en:'park',es:'parque',example:'"We walk in the park on Sunday mornings."'},
      {en:'station',es:'estación (de tren/metro)',example:'"The station is behind the hotel."'},
      {en:'airport',es:'aeropuerto',example:'"Our flight leaves from the airport at noon."'},
      {en:'restaurant',es:'restaurante',example:'"We had dinner at a nice Italian restaurant."'},
      {en:'café',es:'cafetería',example:'"I meet my friends at the café on Friday evenings."'},
      {en:'cinema',es:'cine',example:'"We went to the cinema last Saturday night."'},
      {en:'museum',es:'museo',example:'"The museum is in the city centre and it\'s free."'},
      {en:'hotel',es:'hotel',example:'"The hotel is opposite the train station."'},
      {en:'market',es:'mercado',example:'"There is a big market in the square every Sunday."'},
      {en:'town hall',es:'ayuntamiento / alcaldía',example:'"The town hall is a beautiful old building in the centre."'},
    ]
  },
  {
    id:'adjectives', title:'Adjetivos esenciales', icon:'✨', count:20,
    words:[
      {en:'big / large',es:'grande',example:'"London is a big city." / "She has a large family."'},
      {en:'small / little',es:'pequeño/a',example:'"It\'s a small house but very cosy and comfortable."'},
      {en:'old',es:'viejo/a / antiguo/a / mayor',example:'"He is an old man." / "This is an old building."'},
      {en:'young',es:'joven',example:'"She is very young — only eighteen years old."'},
      {en:'new',es:'nuevo/a',example:'"I have a new computer. I love it!"'},
      {en:'good',es:'bueno/a',example:'"She is a good student. She works very hard."'},
      {en:'bad',es:'malo/a',example:'"The weather is very bad today. It\'s raining heavily."'},
      {en:'beautiful',es:'hermoso/a / precioso/a',example:'"She has a beautiful voice. Everyone loves hearing her sing."'},
      {en:'ugly',es:'feo/a',example:'"That old building is really ugly!"'},
      {en:'tall',es:'alto/a',example:'"He is very tall — almost two metres!"'},
      {en:'short',es:'bajo/a / corto/a',example:'"She is quite short, just like her mother."'},
      {en:'hot',es:'caliente / caluroso',example:'"It\'s very hot today! Let\'s go swimming."'},
      {en:'cold',es:'frío/a',example:'"The coffee is cold. Can you warm it up please?"'},
      {en:'expensive',es:'caro/a',example:'"This restaurant is too expensive for me."'},
      {en:'cheap',es:'barato/a',example:'"This market is cheap and has great fresh food."'},
      {en:'interesting',es:'interesante',example:'"The book is very interesting. I can\'t stop reading it."'},
      {en:'boring',es:'aburrido/a',example:'"The film was really boring. I almost fell asleep."'},
      {en:'kind',es:'amable / bondadoso/a',example:'"My teacher is very kind and always helps us."'},
      {en:'friendly',es:'amigable / simpático/a',example:'"The people in Colombia are very friendly and welcoming."'},
      {en:'hardworking',es:'trabajador/a / dedicado/a',example:'"She is hardworking and always finishes her tasks on time."'},
    ]
  },
  {
    id:'food_drink', title:'Comida y bebida', icon:'🍽️', count:20,
    words:[
      {en:'bread',es:'pan',example:'"I have toast and bread for breakfast every morning."'},
      {en:'rice',es:'arroz',example:'"Rice is very popular in Colombia and all of South America."'},
      {en:'chicken',es:'pollo',example:'"She cooks chicken with vegetables every Sunday."'},
      {en:'fish',es:'pescado',example:'"I love fish. We eat it at least twice a week."'},
      {en:'eggs',es:'huevos',example:'"I have scrambled eggs for breakfast on Saturdays."'},
      {en:'fruit',es:'fruta',example:'"I eat fruit every day to stay healthy."'},
      {en:'vegetables',es:'verduras / vegetales',example:'"The doctor says I should eat more vegetables."'},
      {en:'water',es:'agua',example:'"You should drink eight glasses of water a day."'},
      {en:'coffee',es:'café',example:'"I always drink a cup of black coffee in the morning."'},
      {en:'tea',es:'té',example:'"British people love drinking tea. They drink it all day!"'},
      {en:'milk',es:'leche',example:'"She adds milk to her coffee every morning."'},
      {en:'juice',es:'zumo / jugo',example:'"I drink orange juice every morning. It\'s delicious."'},
      {en:'soup',es:'sopa',example:'"We always eat hot soup when it\'s cold outside."'},
      {en:'salad',es:'ensalada',example:'"I eat a fresh salad for lunch every day."'},
      {en:'pasta',es:'pasta',example:'"Pasta is quick and easy to cook. I love it!"'},
      {en:'chocolate',es:'chocolate',example:'"I love dark chocolate. It\'s my favourite treat."'},
      {en:'sandwich',es:'sándwich / bocadillo',example:'"I have a cheese sandwich for lunch at work."'},
      {en:'cake',es:'pastel / torta',example:'"She made a delicious chocolate cake for my birthday."'},
      {en:'meat',es:'carne',example:'"He doesn\'t eat meat. He is a vegetarian."'},
      {en:'sugar',es:'azúcar',example:'"I don\'t put sugar in my coffee. I prefer it bitter."'},
    ]
  },
  {
    id:'body_health', title:'El cuerpo y la salud', icon:'🏥', count:20,
    words:[
      {en:'head',es:'cabeza',example:'"I have a terrible headache today."'},
      {en:'face',es:'cara / rostro',example:'"She has a beautiful face and kind eyes."'},
      {en:'eye',es:'ojo',example:'"She has green eyes. They are very beautiful."'},
      {en:'ear',es:'oreja / oído',example:'"I can\'t hear well. I have a problem with my ear."'},
      {en:'nose',es:'nariz',example:'"He has a cold. His nose is red."'},
      {en:'mouth',es:'boca',example:'"Open your mouth, please. The dentist needs to look inside."'},
      {en:'tooth / teeth',es:'diente / dientes',example:'"You should brush your teeth twice a day."'},
      {en:'neck',es:'cuello',example:'"My neck hurts after sitting at the computer all day."'},
      {en:'shoulder',es:'hombro',example:'"She carries her heavy bag on one shoulder."'},
      {en:'arm',es:'brazo',example:'"He broke his arm playing football last week."'},
      {en:'hand',es:'mano',example:'"She shook my hand when we met for the first time."'},
      {en:'leg',es:'pierna',example:'"My legs are sore after running this morning."'},
      {en:'foot / feet',es:'pie / pies',example:'"My feet hurt after walking all day."'},
      {en:'stomach',es:'estómago / barriga',example:'"I have a stomachache. I think I ate something bad."'},
      {en:'back',es:'espalda',example:'"She has back pain from sitting at her desk all day."'},
      {en:'headache',es:'dolor de cabeza',example:'"I have a terrible headache. I need some paracetamol."'},
      {en:'cold',es:'resfriado',example:'"I have a cold. I\'m sneezing and my nose is running."'},
      {en:'fever',es:'fiebre',example:'"The child has a high fever. We need to call the doctor."'},
      {en:'tired',es:'cansado/a',example:'"I\'m very tired. I only slept four hours last night."'},
      {en:'healthy',es:'sano/a / saludable',example:'"She is very healthy. She exercises every day and eats well."'},
    ]
  },
  {
    id:'transport_travel', title:'Transporte y viajes', icon:'✈️', count:18,
    words:[
      {en:'car',es:'coche / auto / carro',example:'"He drives his car to work every day."'},
      {en:'bus',es:'autobús / bus',example:'"I take the bus to school. It\'s cheaper than a taxi."'},
      {en:'train',es:'tren',example:'"The train to Bogotá leaves at eight o\'clock."'},
      {en:'plane / aeroplane',es:'avión',example:'"We took a plane to London. The flight was five hours."'},
      {en:'underground / metro / tube',es:'metro',example:'"The London Underground is called the Tube."'},
      {en:'taxi',es:'taxi',example:'"We took a taxi from the airport to the hotel."'},
      {en:'bicycle / bike',es:'bicicleta',example:'"She rides her bike to university every morning."'},
      {en:'motorbike',es:'motocicleta / moto',example:'"He has a red motorbike. He loves riding it."'},
      {en:'station',es:'estación',example:'"The bus station is next to the market in the city centre."'},
      {en:'airport',es:'aeropuerto',example:'"We arrived at the airport two hours before the flight."'},
      {en:'ticket',es:'billete / tiquete',example:'"I bought two return tickets for the train."'},
      {en:'passport',es:'pasaporte',example:'"Don\'t forget your passport. You can\'t travel without it."'},
      {en:'luggage / suitcase',es:'equipaje / maleta',example:'"My suitcase is very heavy. I packed too many clothes."'},
      {en:'hotel',es:'hotel',example:'"We stayed at a five-star hotel near the beach."'},
      {en:'journey / trip',es:'viaje / trayecto',example:'"The journey from Cúcuta to Bogotá takes about eight hours."'},
      {en:'on foot',es:'a pie / caminando',example:'"The supermarket is close. We can go on foot."'},
      {en:'arrive',es:'llegar',example:'"What time does the flight arrive in Madrid?"'},
      {en:'depart / leave',es:'salir / partir',example:'"The train departs from platform 3 at 10:15."'},
    ]
  },
];
// =====================================================
// EXPANSIÓN INSTRUCCIONAL A1 PARA data-vocab.js
// Metodologías activas + enfoque heutagógico + práctica virtual
// =====================================================

// -----------------------------------------------------
// 1. ETAPAS DIDÁCTICAS PARA CADA TEMA DE VOCABULARIO
// -----------------------------------------------------

const vocabA1DidacticStages = [
  {
    id: 'activate',
    name: '1. Activación',
    purpose: 'Activar conocimientos previos y conectar el vocabulario con la vida real del estudiante.',
    teacherAction: 'Presenta imágenes, preguntas rápidas o situaciones cotidianas.',
    studentAction: 'Reconoce palabras conocidas, predice significados y relaciona el tema con su contexto.',
    examples: [
      'Look and say',
      'What can you see?',
      'Choose the words you know',
      'Match picture and word'
    ]
  },
  {
    id: 'input',
    name: '2. Input contextualizado',
    purpose: 'Presentar el vocabulario dentro de frases, imágenes, audios o microdiálogos.',
    teacherAction: 'Muestra el vocabulario con ejemplo, traducción y pronunciación.',
    studentAction: 'Escucha, repite, observa patrones y reconoce significado.',
    examples: [
      'Mini dialogue',
      'Image labeling',
      'Audio repetition',
      'Vocabulary in context'
    ]
  },
  {
    id: 'notice',
    name: '3. Descubrimiento guiado',
    purpose: 'Ayudar al estudiante a notar cómo se usa la palabra en una frase real.',
    teacherAction: 'Guía preguntas sobre uso, categoría y estructura gramatical.',
    studentAction: 'Clasifica palabras, identifica ejemplos y deduce usos.',
    examples: [
      'Is it a noun, verb or adjective?',
      'Can you use it with a/an?',
      'Is it countable or uncountable?',
      'Find the word in the sentence'
    ]
  },
  {
    id: 'controlled_practice',
    name: '4. Práctica controlada',
    purpose: 'Fijar significado, escritura y reconocimiento.',
    teacherAction: 'Propone ejercicios cerrados de selección, escritura y emparejamiento.',
    studentAction: 'Resuelve actividades con retroalimentación inmediata.',
    examples: [
      'Multiple choice',
      'Write the word',
      'Translate the word',
      'Complete the sentence'
    ]
  },
  {
    id: 'semi_guided_practice',
    name: '5. Práctica semiguiada',
    purpose: 'Usar el vocabulario con apoyo parcial.',
    teacherAction: 'Da modelos, estructuras y palabras clave.',
    studentAction: 'Construye frases simples, diálogos cortos o descripciones.',
    examples: [
      'Use 5 words in sentences',
      'Describe a picture',
      'Complete a dialogue',
      'Ask and answer'
    ]
  },
  {
    id: 'communicative_use',
    name: '6. Uso comunicativo',
    purpose: 'Usar el vocabulario para resolver una tarea real.',
    teacherAction: 'Plantea una misión comunicativa.',
    studentAction: 'Produce un audio, texto, video, póster o diálogo.',
    examples: [
      'Role play',
      'Short presentation',
      'Digital poster',
      'Mini interview',
      'Personal profile'
    ]
  },
  {
    id: 'portfolio',
    name: '7. Evidencia de portafolio',
    purpose: 'Convertir el aprendizaje en una evidencia visible y evaluable.',
    teacherAction: 'Define criterios claros de entrega.',
    studentAction: 'Crea una evidencia personal usando el vocabulario aprendido.',
    examples: [
      'My family tree',
      'My room description',
      'My daily routine',
      'My restaurant dialogue',
      'My city map'
    ]
  },
  {
    id: 'reflection',
    name: '8. Reflexión heutagógica',
    purpose: 'Desarrollar autonomía, conciencia de errores y estrategias personales.',
    teacherAction: 'Propone preguntas de reflexión.',
    studentAction: 'Identifica palabras difíciles, estrategias de repaso y usos reales.',
    examples: [
      'Which words are useful for me?',
      'Which words are difficult?',
      'How can I remember them?',
      'Where can I use them?'
    ]
  },
  {
    id: 'spaced_review',
    name: '9. Revisión espaciada',
    purpose: 'Evitar el olvido y reforzar memoria a largo plazo.',
    teacherAction: 'Programa repasos acumulativos.',
    studentAction: 'Recupera palabras en días posteriores usando distintos formatos.',
    examples: [
      'Day 1 repetition',
      'Day 3 sentences',
      'Day 7 quiz',
      'Day 14 speaking challenge'
    ]
  }
];

// -----------------------------------------------------
// 2. NUEVOS TEMAS DE VOCABULARIO A1
// -----------------------------------------------------

const vocabExpansionTopics = [
  {
    id: 'classroom_objects',
    title: 'Objetos del aula',
    icon: '🎒',
    level: 'A1',
    communicativeGoal: 'Nombrar objetos del aula y pedirlos de manera básica.',
    grammarLinks: ['articles', 'there_is_are', 'demonstratives', 'imperatives'],
    words: [
      { en: 'book', es: 'libro', example: 'This is my English book.' },
      { en: 'notebook', es: 'cuaderno', example: 'Open your notebook and write the date.' },
      { en: 'pen', es: 'bolígrafo / lapicero', example: 'Can I borrow a pen, please?' },
      { en: 'pencil', es: 'lápiz', example: 'Use a pencil to draw the picture.' },
      { en: 'eraser / rubber', es: 'borrador', example: 'I need an eraser.' },
      { en: 'ruler', es: 'regla', example: 'The ruler is on the desk.' },
      { en: 'desk', es: 'escritorio / pupitre', example: 'There is a book on my desk.' },
      { en: 'chair', es: 'silla', example: 'Please sit on the chair.' },
      { en: 'board / whiteboard', es: 'tablero / pizarra', example: 'The teacher writes on the board.' },
      { en: 'marker', es: 'marcador', example: 'The marker is blue.' },
      { en: 'projector', es: 'proyector', example: 'The projector is in front of the class.' },
      { en: 'screen', es: 'pantalla', example: 'Look at the screen and repeat.' },
      { en: 'backpack / schoolbag', es: 'morral / mochila', example: 'My backpack is very heavy.' },
      { en: 'folder', es: 'carpeta', example: 'Put the worksheet in your folder.' },
      { en: 'paper', es: 'papel', example: 'I need a piece of paper.' },
      { en: 'worksheet', es: 'guía / hoja de trabajo', example: 'Complete the worksheet in pairs.' },
      { en: 'dictionary', es: 'diccionario', example: 'Use a dictionary to check the word.' },
      { en: 'computer', es: 'computador / computadora', example: 'There are computers in the classroom.' },
      { en: 'tablet', es: 'tableta', example: 'She uses a tablet for online classes.' },
      { en: 'headphones', es: 'audífonos', example: 'Use headphones for the listening activity.' },
      { en: 'clock', es: 'reloj', example: 'The clock is above the board.' },
      { en: 'door', es: 'puerta', example: 'Close the door, please.' },
      { en: 'window', es: 'ventana', example: 'Open the window. It is hot.' },
      { en: 'bin / trash can', es: 'caneca / papelera', example: 'Throw the paper in the bin.' }
    ]
  },

  {
    id: 'home_furniture',
    title: 'Casa, habitaciones y muebles',
    icon: '🏠',
    level: 'A1',
    communicativeGoal: 'Describir la casa, sus habitaciones y objetos principales.',
    grammarLinks: ['there_is_are', 'prepositions_place', 'adjectives', 'possessives'],
    words: [
      { en: 'house', es: 'casa', example: 'My house is small but comfortable.' },
      { en: 'apartment / flat', es: 'apartamento', example: 'She lives in an apartment near the park.' },
      { en: 'room', es: 'habitación / cuarto', example: 'There is a bed in my room.' },
      { en: 'bedroom', es: 'dormitorio', example: 'My bedroom is upstairs.' },
      { en: 'bathroom', es: 'baño', example: 'The bathroom is next to the bedroom.' },
      { en: 'kitchen', es: 'cocina', example: 'My mother is cooking in the kitchen.' },
      { en: 'living room', es: 'sala', example: 'There is a sofa in the living room.' },
      { en: 'dining room', es: 'comedor', example: 'We eat dinner in the dining room.' },
      { en: 'garage', es: 'garaje', example: 'The car is in the garage.' },
      { en: 'garden', es: 'jardín', example: 'The children are playing in the garden.' },
      { en: 'balcony', es: 'balcón', example: 'There are two chairs on the balcony.' },
      { en: 'sofa / couch', es: 'sofá', example: 'The sofa is very comfortable.' },
      { en: 'bed', es: 'cama', example: 'My bed is next to the window.' },
      { en: 'table', es: 'mesa', example: 'The keys are on the table.' },
      { en: 'chair', es: 'silla', example: 'There are four chairs in the dining room.' },
      { en: 'wardrobe / closet', es: 'armario / clóset', example: 'My clothes are in the wardrobe.' },
      { en: 'mirror', es: 'espejo', example: 'There is a mirror in the bathroom.' },
      { en: 'lamp', es: 'lámpara', example: 'The lamp is on the desk.' },
      { en: 'fridge / refrigerator', es: 'nevera / refrigerador', example: 'The milk is in the fridge.' },
      { en: 'stove / cooker', es: 'estufa', example: 'The stove is in the kitchen.' },
      { en: 'sink', es: 'lavaplatos / lavamanos', example: 'The sink is next to the stove.' },
      { en: 'shower', es: 'ducha', example: 'I take a shower every morning.' },
      { en: 'toilet', es: 'inodoro / baño', example: 'The toilet is in the bathroom.' },
      { en: 'floor', es: 'piso / suelo', example: 'The bag is on the floor.' },
      { en: 'wall', es: 'pared', example: 'There is a picture on the wall.' },
      { en: 'roof', es: 'techo', example: 'The roof is red.' }
    ]
  },

  {
    id: 'daily_routines',
    title: 'Rutinas diarias',
    icon: '⏰',
    level: 'A1',
    communicativeGoal: 'Hablar de hábitos y actividades diarias.',
    grammarLinks: ['present_simple', 'frequency_adverbs', 'time_prepositions'],
    words: [
      { en: 'wake up', es: 'despertarse', example: 'I wake up at six o’clock.' },
      { en: 'get up', es: 'levantarse', example: 'She gets up early every day.' },
      { en: 'take a shower', es: 'ducharse', example: 'I take a shower in the morning.' },
      { en: 'brush my teeth', es: 'cepillarme los dientes', example: 'I brush my teeth after breakfast.' },
      { en: 'get dressed', es: 'vestirse', example: 'He gets dressed quickly.' },
      { en: 'have breakfast', es: 'desayunar', example: 'We have breakfast at 7:00.' },
      { en: 'go to school', es: 'ir al colegio', example: 'They go to school by bus.' },
      { en: 'go to work', es: 'ir al trabajo', example: 'My father goes to work at eight.' },
      { en: 'study', es: 'estudiar', example: 'I study English every day.' },
      { en: 'work', es: 'trabajar', example: 'She works in a hospital.' },
      { en: 'have lunch', es: 'almorzar', example: 'I have lunch at noon.' },
      { en: 'go home', es: 'ir a casa', example: 'We go home in the afternoon.' },
      { en: 'do homework', es: 'hacer tarea', example: 'He does homework after school.' },
      { en: 'watch TV', es: 'ver televisión', example: 'They watch TV at night.' },
      { en: 'cook dinner', es: 'preparar la cena', example: 'My mother cooks dinner.' },
      { en: 'have dinner', es: 'cenar', example: 'We have dinner at seven.' },
      { en: 'read', es: 'leer', example: 'I read before sleeping.' },
      { en: 'listen to music', es: 'escuchar música', example: 'She listens to music every evening.' },
      { en: 'go to bed', es: 'irse a la cama', example: 'I go to bed at ten.' },
      { en: 'sleep', es: 'dormir', example: 'The baby sleeps a lot.' }
    ]
  },

  {
    id: 'hobbies_free_time',
    title: 'Hobbies y tiempo libre',
    icon: '🎮',
    level: 'A1',
    communicativeGoal: 'Expresar gustos, preferencias y actividades de tiempo libre.',
    grammarLinks: ['like_ing', 'present_simple', 'can_cant'],
    words: [
      { en: 'reading', es: 'leer / lectura', example: 'I like reading books.' },
      { en: 'dancing', es: 'bailar', example: 'She loves dancing salsa.' },
      { en: 'singing', es: 'cantar', example: 'He likes singing in the shower.' },
      { en: 'playing football', es: 'jugar fútbol', example: 'They love playing football.' },
      { en: 'playing video games', es: 'jugar videojuegos', example: 'I like playing video games.' },
      { en: 'watching movies', es: 'ver películas', example: 'We enjoy watching movies.' },
      { en: 'listening to music', es: 'escuchar música', example: 'She likes listening to music.' },
      { en: 'cooking', es: 'cocinar', example: 'My father loves cooking.' },
      { en: 'drawing', es: 'dibujar', example: 'The child likes drawing animals.' },
      { en: 'painting', es: 'pintar', example: 'She loves painting flowers.' },
      { en: 'swimming', es: 'nadar', example: 'I like swimming in the pool.' },
      { en: 'running', es: 'correr', example: 'He likes running in the park.' },
      { en: 'cycling', es: 'montar bicicleta', example: 'We enjoy cycling on Sundays.' },
      { en: 'shopping', es: 'ir de compras', example: 'My sister loves shopping.' },
      { en: 'traveling', es: 'viajar', example: 'They like traveling by plane.' },
      { en: 'taking photos', es: 'tomar fotos', example: 'I love taking photos.' },
      { en: 'going out', es: 'salir', example: 'We like going out on Fridays.' },
      { en: 'staying at home', es: 'quedarse en casa', example: 'I like staying at home.' }
    ]
  },

  {
    id: 'clothes_accessories',
    title: 'Ropa y accesorios',
    icon: '👕',
    level: 'A1',
    communicativeGoal: 'Describir ropa, colores y lo que alguien lleva puesto.',
    grammarLinks: ['present_continuous', 'adjectives', 'colors'],
    words: [
      { en: 'shirt', es: 'camisa', example: 'He is wearing a white shirt.' },
      { en: 'T-shirt', es: 'camiseta', example: 'I like your blue T-shirt.' },
      { en: 'jeans', es: 'jeans / pantalón de mezclilla', example: 'She is wearing jeans.' },
      { en: 'trousers / pants', es: 'pantalones', example: 'His pants are black.' },
      { en: 'dress', es: 'vestido', example: 'She has a beautiful red dress.' },
      { en: 'skirt', es: 'falda', example: 'The skirt is short.' },
      { en: 'jacket', es: 'chaqueta', example: 'Take a jacket. It is cold.' },
      { en: 'coat', es: 'abrigo', example: 'He wears a coat in winter.' },
      { en: 'sweater / jumper', es: 'suéter', example: 'My sweater is green.' },
      { en: 'shoes', es: 'zapatos', example: 'These shoes are new.' },
      { en: 'trainers / sneakers', es: 'tenis / zapatillas', example: 'I wear sneakers to school.' },
      { en: 'socks', es: 'medias / calcetines', example: 'My socks are white.' },
      { en: 'hat', es: 'sombrero / gorra', example: 'He is wearing a hat.' },
      { en: 'cap', es: 'gorra', example: 'The cap is blue.' },
      { en: 'bag', es: 'bolso / maleta', example: 'Her bag is very big.' },
      { en: 'watch', es: 'reloj de pulsera', example: 'This watch is expensive.' },
      { en: 'glasses', es: 'gafas / lentes', example: 'He wears glasses.' },
      { en: 'uniform', es: 'uniforme', example: 'Students wear a uniform.' }
    ]
  },

  {
    id: 'weather_seasons',
    title: 'Clima y estaciones',
    icon: '🌦️',
    level: 'A1',
    communicativeGoal: 'Hablar del clima y describir estaciones del año.',
    grammarLinks: ['to_be', 'present_continuous', 'adjectives'],
    words: [
      { en: 'sunny', es: 'soleado', example: 'It is sunny today.' },
      { en: 'rainy', es: 'lluvioso', example: 'It is a rainy day.' },
      { en: 'cloudy', es: 'nublado', example: 'The sky is cloudy.' },
      { en: 'windy', es: 'ventoso', example: 'It is windy outside.' },
      { en: 'stormy', es: 'tormentoso', example: 'It is stormy tonight.' },
      { en: 'hot', es: 'caluroso', example: 'It is very hot in summer.' },
      { en: 'cold', es: 'frío', example: 'It is cold in the morning.' },
      { en: 'warm', es: 'cálido', example: 'The weather is warm.' },
      { en: 'cool', es: 'fresco', example: 'It is cool in the evening.' },
      { en: 'dry', es: 'seco', example: 'The weather is dry.' },
      { en: 'wet', es: 'húmedo / mojado', example: 'My clothes are wet.' },
      { en: 'spring', es: 'primavera', example: 'Flowers grow in spring.' },
      { en: 'summer', es: 'verano', example: 'We go to the beach in summer.' },
      { en: 'autumn / fall', es: 'otoño', example: 'Leaves fall in autumn.' },
      { en: 'winter', es: 'invierno', example: 'It is cold in winter.' },
      { en: 'weather', es: 'clima', example: 'What is the weather like?' },
      { en: 'temperature', es: 'temperatura', example: 'The temperature is high today.' },
      { en: 'umbrella', es: 'sombrilla / paraguas', example: 'Take an umbrella. It is raining.' }
    ]
  },

  {
    id: 'time_calendar',
    title: 'Tiempo, calendario y horarios',
    icon: '📅',
    level: 'A1',
    communicativeGoal: 'Hablar de días, meses, horas y horarios básicos.',
    grammarLinks: ['prepositions_time', 'present_simple', 'questions_a1'],
    words: [
      { en: 'Monday', es: 'lunes', example: 'I study English on Monday.' },
      { en: 'Tuesday', es: 'martes', example: 'We have class on Tuesday.' },
      { en: 'Wednesday', es: 'miércoles', example: 'She works on Wednesday.' },
      { en: 'Thursday', es: 'jueves', example: 'The meeting is on Thursday.' },
      { en: 'Friday', es: 'viernes', example: 'I go out on Friday.' },
      { en: 'Saturday', es: 'sábado', example: 'We play football on Saturday.' },
      { en: 'Sunday', es: 'domingo', example: 'I rest on Sunday.' },
      { en: 'morning', es: 'mañana', example: 'I drink coffee in the morning.' },
      { en: 'afternoon', es: 'tarde', example: 'She studies in the afternoon.' },
      { en: 'evening', es: 'noche / tarde-noche', example: 'We watch TV in the evening.' },
      { en: 'night', es: 'noche', example: 'I sleep at night.' },
      { en: 'today', es: 'hoy', example: 'Today is Monday.' },
      { en: 'tomorrow', es: 'mañana', example: 'Tomorrow is Tuesday.' },
      { en: 'yesterday', es: 'ayer', example: 'Yesterday was Sunday.' },
      { en: 'week', es: 'semana', example: 'There are seven days in a week.' },
      { en: 'month', es: 'mes', example: 'My birthday is next month.' },
      { en: 'year', es: 'año', example: 'A year has twelve months.' },
      { en: 'o’clock', es: 'en punto', example: 'Class starts at seven o’clock.' },
      { en: 'half past', es: 'y media', example: 'It is half past eight.' },
      { en: 'quarter past', es: 'y cuarto', example: 'It is quarter past nine.' },
      { en: 'quarter to', es: 'menos cuarto', example: 'It is quarter to ten.' }
    ]
  },

  {
    id: 'emotions_feelings',
    title: 'Emociones y estados de ánimo',
    icon: '😊',
    level: 'A1',
    communicativeGoal: 'Expresar cómo se siente una persona.',
    grammarLinks: ['to_be', 'adjectives', 'intensifiers'],
    words: [
      { en: 'happy', es: 'feliz', example: 'I am happy today.' },
      { en: 'sad', es: 'triste', example: 'She is sad.' },
      { en: 'angry', es: 'enojado', example: 'He is angry.' },
      { en: 'tired', es: 'cansado', example: 'They are tired after work.' },
      { en: 'hungry', es: 'con hambre', example: 'I am hungry.' },
      { en: 'thirsty', es: 'con sed', example: 'We are thirsty.' },
      { en: 'sleepy', es: 'con sueño', example: 'The baby is sleepy.' },
      { en: 'excited', es: 'emocionado', example: 'She is excited about the trip.' },
      { en: 'nervous', es: 'nervioso', example: 'I am nervous before exams.' },
      { en: 'scared / afraid', es: 'asustado', example: 'The child is scared.' },
      { en: 'bored', es: 'aburrido', example: 'He is bored in class.' },
      { en: 'worried', es: 'preocupado', example: 'My mother is worried.' },
      { en: 'calm', es: 'tranquilo', example: 'The room is calm.' },
      { en: 'proud', es: 'orgulloso', example: 'I am proud of my work.' },
      { en: 'confused', es: 'confundido', example: 'I am confused. Can you explain?' }
    ]
  },

  {
    id: 'common_verbs',
    title: 'Verbos comunes A1',
    icon: '⚡',
    level: 'A1',
    communicativeGoal: 'Usar verbos frecuentes para crear frases básicas.',
    grammarLinks: ['present_simple', 'past_simple', 'imperatives', 'questions_a1'],
    words: [
      { en: 'be', es: 'ser / estar', example: 'I am a student.' },
      { en: 'have', es: 'tener', example: 'I have a brother.' },
      { en: 'do', es: 'hacer', example: 'I do my homework.' },
      { en: 'go', es: 'ir', example: 'We go to school.' },
      { en: 'come', es: 'venir', example: 'Come here, please.' },
      { en: 'make', es: 'hacer / preparar', example: 'She makes breakfast.' },
      { en: 'take', es: 'tomar / llevar', example: 'Take your book.' },
      { en: 'get', es: 'obtener / llegar / ponerse', example: 'I get up early.' },
      { en: 'give', es: 'dar', example: 'Give me the pen, please.' },
      { en: 'see', es: 'ver', example: 'I see a dog.' },
      { en: 'look', es: 'mirar', example: 'Look at the board.' },
      { en: 'listen', es: 'escuchar', example: 'Listen to the audio.' },
      { en: 'speak', es: 'hablar', example: 'Do you speak English?' },
      { en: 'read', es: 'leer', example: 'Read the text.' },
      { en: 'write', es: 'escribir', example: 'Write your name.' },
      { en: 'eat', es: 'comer', example: 'I eat fruit every day.' },
      { en: 'drink', es: 'beber', example: 'Drink water.' },
      { en: 'buy', es: 'comprar', example: 'I buy bread.' },
      { en: 'want', es: 'querer', example: 'I want a coffee.' },
      { en: 'need', es: 'necesitar', example: 'I need help.' },
      { en: 'like', es: 'gustar', example: 'I like music.' },
      { en: 'love', es: 'amar / encantar', example: 'She loves dancing.' },
      { en: 'hate', es: 'odiar', example: 'They hate waiting.' },
      { en: 'play', es: 'jugar / tocar', example: 'He plays football.' }
    ]
  },

  {
    id: 'school_subjects',
    title: 'Materias y vida escolar',
    icon: '📚',
    level: 'A1',
    communicativeGoal: 'Hablar de materias, actividades escolares y preferencias académicas.',
    grammarLinks: ['present_simple', 'like_ing', 'questions_a1'],
    words: [
      { en: 'English', es: 'inglés', example: 'English is my favorite subject.' },
      { en: 'Spanish', es: 'español', example: 'We study Spanish at school.' },
      { en: 'maths / math', es: 'matemáticas', example: 'Math is difficult for me.' },
      { en: 'science', es: 'ciencias', example: 'Science is interesting.' },
      { en: 'history', es: 'historia', example: 'I like history.' },
      { en: 'geography', es: 'geografía', example: 'Geography is about places.' },
      { en: 'art', es: 'arte', example: 'She loves art.' },
      { en: 'music', es: 'música', example: 'Music class is fun.' },
      { en: 'physical education / PE', es: 'educación física', example: 'We have PE on Friday.' },
      { en: 'technology', es: 'tecnología', example: 'Technology is useful.' },
      { en: 'exam', es: 'examen', example: 'We have an exam tomorrow.' },
      { en: 'homework', es: 'tarea', example: 'I do my homework at night.' },
      { en: 'lesson', es: 'clase / lección', example: 'The lesson starts at eight.' },
      { en: 'classmate', es: 'compañero de clase', example: 'Ana is my classmate.' },
      { en: 'teacher', es: 'profesor', example: 'My teacher is kind.' },
      { en: 'student', es: 'estudiante', example: 'I am a student.' }
    ]
  },

  {
    id: 'countries_nationalities',
    title: 'Países y nacionalidades',
    icon: '🌎',
    level: 'A1',
    communicativeGoal: 'Decir de dónde es una persona y cuál es su nacionalidad.',
    grammarLinks: ['to_be', 'questions_a1', 'personal_information'],
    words: [
      { en: 'Colombia / Colombian', es: 'Colombia / colombiano', example: 'I am Colombian.' },
      { en: 'Brazil / Brazilian', es: 'Brasil / brasileño', example: 'She is Brazilian.' },
      { en: 'Mexico / Mexican', es: 'México / mexicano', example: 'He is Mexican.' },
      { en: 'Spain / Spanish', es: 'España / español', example: 'They are Spanish.' },
      { en: 'France / French', es: 'Francia / francés', example: 'She is French.' },
      { en: 'Italy / Italian', es: 'Italia / italiano', example: 'He is Italian.' },
      { en: 'Germany / German', es: 'Alemania / alemán', example: 'My friend is German.' },
      { en: 'England / English', es: 'Inglaterra / inglés', example: 'He is English.' },
      { en: 'United States / American', es: 'Estados Unidos / estadounidense', example: 'She is American.' },
      { en: 'Canada / Canadian', es: 'Canadá / canadiense', example: 'They are Canadian.' },
      { en: 'Argentina / Argentinian', es: 'Argentina / argentino', example: 'He is Argentinian.' },
      { en: 'Peru / Peruvian', es: 'Perú / peruano', example: 'She is Peruvian.' }
    ]
  },

  {
    id: 'shopping_money',
    title: 'Compras y dinero',
    icon: '🛒',
    level: 'A1',
    communicativeGoal: 'Comprar productos, preguntar precios y hablar de cantidades básicas.',
    grammarLinks: ['how_much_many', 'id_like', 'this_that', 'numbers'],
    words: [
      { en: 'shop / store', es: 'tienda', example: 'The shop is open.' },
      { en: 'market', es: 'mercado', example: 'We buy fruit at the market.' },
      { en: 'supermarket', es: 'supermercado', example: 'The supermarket is near my house.' },
      { en: 'money', es: 'dinero', example: 'I need money.' },
      { en: 'cash', es: 'efectivo', example: 'Do you pay in cash?' },
      { en: 'card', es: 'tarjeta', example: 'Can I pay by card?' },
      { en: 'price', es: 'precio', example: 'What is the price?' },
      { en: 'expensive', es: 'caro', example: 'This phone is expensive.' },
      { en: 'cheap', es: 'barato', example: 'This shirt is cheap.' },
      { en: 'buy', es: 'comprar', example: 'I want to buy a jacket.' },
      { en: 'sell', es: 'vender', example: 'They sell bread.' },
      { en: 'pay', es: 'pagar', example: 'I pay with cash.' },
      { en: 'customer', es: 'cliente', example: 'The customer is happy.' },
      { en: 'cashier', es: 'cajero', example: 'The cashier is friendly.' },
      { en: 'receipt', es: 'recibo / factura', example: 'Can I have the receipt?' },
      { en: 'change', es: 'cambio / vueltas', example: 'Here is your change.' }
    ]
  },

  {
    id: 'restaurant_phrases',
    title: 'Restaurante y pedidos',
    icon: '🍔',
    level: 'A1',
    communicativeGoal: 'Pedir comida y bebida de forma cortés.',
    grammarLinks: ['id_like', 'countables_uncountables', 'how_much_many'],
    words: [
      { en: 'menu', es: 'menú / carta', example: 'Can I see the menu, please?' },
      { en: 'waiter', es: 'mesero', example: 'The waiter is very kind.' },
      { en: 'waitress', es: 'mesera', example: 'The waitress brings the coffee.' },
      { en: 'table', es: 'mesa', example: 'A table for two, please.' },
      { en: 'order', es: 'pedido / pedir', example: 'Are you ready to order?' },
      { en: 'starter', es: 'entrada', example: 'I would like a starter.' },
      { en: 'main course', es: 'plato fuerte', example: 'Chicken is my main course.' },
      { en: 'dessert', es: 'postre', example: 'I want dessert.' },
      { en: 'drink', es: 'bebida', example: 'What drink would you like?' },
      { en: 'bill / check', es: 'cuenta', example: 'Can I have the bill, please?' },
      { en: 'I’d like...', es: 'quisiera...', example: 'I’d like a coffee, please.' },
      { en: 'Anything else?', es: '¿Algo más?', example: 'Anything else? No, thank you.' },
      { en: 'Here you are', es: 'aquí tiene', example: 'Here you are. Thank you.' },
      { en: 'Enjoy your meal', es: 'buen provecho', example: 'Enjoy your meal!' }
    ]
  },

  {
    id: 'directions_city',
    title: 'Direcciones y ubicación',
    icon: '🗺️',
    level: 'A1',
    communicativeGoal: 'Dar y seguir direcciones simples en la ciudad.',
    grammarLinks: ['prepositions_place', 'imperatives', 'there_is_are'],
    words: [
      { en: 'left', es: 'izquierda', example: 'Turn left at the corner.' },
      { en: 'right', es: 'derecha', example: 'Turn right after the bank.' },
      { en: 'straight ahead', es: 'derecho / todo recto', example: 'Go straight ahead.' },
      { en: 'corner', es: 'esquina', example: 'The shop is on the corner.' },
      { en: 'street', es: 'calle', example: 'This street is very busy.' },
      { en: 'road', es: 'carretera / vía', example: 'The road is long.' },
      { en: 'traffic light', es: 'semáforo', example: 'Stop at the traffic light.' },
      { en: 'crossing', es: 'cruce', example: 'Use the crossing.' },
      { en: 'near', es: 'cerca de', example: 'The bank is near the park.' },
      { en: 'next to', es: 'al lado de', example: 'The school is next to the library.' },
      { en: 'opposite', es: 'frente a', example: 'The hotel is opposite the station.' },
      { en: 'between', es: 'entre', example: 'The bank is between the café and the shop.' },
      { en: 'behind', es: 'detrás de', example: 'The car is behind the house.' },
      { en: 'in front of', es: 'delante de', example: 'The bus stop is in front of the school.' }
    ]
  },

  {
    id: 'animals_nature',
    title: 'Animales y naturaleza',
    icon: '🐶',
    level: 'A1',
    communicativeGoal: 'Nombrar animales, elementos naturales y describirlos.',
    grammarLinks: ['there_is_are', 'adjectives', 'can_cant', 'comparatives'],
    words: [
      { en: 'dog', es: 'perro', example: 'The dog is friendly.' },
      { en: 'cat', es: 'gato', example: 'My cat is sleeping.' },
      { en: 'bird', es: 'pájaro / ave', example: 'The bird can fly.' },
      { en: 'fish', es: 'pez / pescado', example: 'The fish is in the water.' },
      { en: 'horse', es: 'caballo', example: 'The horse runs fast.' },
      { en: 'cow', es: 'vaca', example: 'The cow is on the farm.' },
      { en: 'pig', es: 'cerdo', example: 'The pig is pink.' },
      { en: 'chicken', es: 'gallina / pollo', example: 'The chicken is small.' },
      { en: 'lion', es: 'león', example: 'The lion is strong.' },
      { en: 'elephant', es: 'elefante', example: 'An elephant is very big.' },
      { en: 'tree', es: 'árbol', example: 'There is a tree in the park.' },
      { en: 'flower', es: 'flor', example: 'The flower is beautiful.' },
      { en: 'river', es: 'río', example: 'The river is long.' },
      { en: 'mountain', es: 'montaña', example: 'The mountain is high.' },
      { en: 'beach', es: 'playa', example: 'We go to the beach in summer.' },
      { en: 'forest', es: 'bosque', example: 'There are many trees in the forest.' }
    ]
  },

  {
    id: 'technology_basic',
    title: 'Tecnología básica',
    icon: '💻',
    level: 'A1',
    communicativeGoal: 'Nombrar objetos tecnológicos y hablar de su uso básico.',
    grammarLinks: ['can_cant', 'present_simple', 'imperatives'],
    words: [
      { en: 'phone / cellphone', es: 'celular / teléfono', example: 'I use my phone every day.' },
      { en: 'computer', es: 'computador', example: 'The computer is new.' },
      { en: 'laptop', es: 'portátil', example: 'She has a laptop.' },
      { en: 'tablet', es: 'tableta', example: 'The tablet is on the table.' },
      { en: 'charger', es: 'cargador', example: 'Where is my charger?' },
      { en: 'battery', es: 'batería', example: 'My battery is low.' },
      { en: 'screen', es: 'pantalla', example: 'The screen is big.' },
      { en: 'keyboard', es: 'teclado', example: 'The keyboard is black.' },
      { en: 'mouse', es: 'mouse / ratón', example: 'Use the mouse to click.' },
      { en: 'camera', es: 'cámara', example: 'The camera is very good.' },
      { en: 'photo', es: 'foto', example: 'Take a photo.' },
      { en: 'video', es: 'video', example: 'Watch the video.' },
      { en: 'email', es: 'correo electrónico', example: 'Send me an email.' },
      { en: 'password', es: 'contraseña', example: 'Write your password.' },
      { en: 'internet', es: 'internet', example: 'The internet is slow.' },
      { en: 'website', es: 'sitio web', example: 'Open the website.' }
    ]
  },

  {
    id: 'personal_information',
    title: 'Información personal',
    icon: '🪪',
    level: 'A1',
    communicativeGoal: 'Dar y pedir información personal básica.',
    grammarLinks: ['to_be', 'questions_a1', 'possessive_adjectives'],
    words: [
      { en: 'name', es: 'nombre', example: 'My name is Ana.' },
      { en: 'surname / last name', es: 'apellido', example: 'What is your last name?' },
      { en: 'age', es: 'edad', example: 'What is your age?' },
      { en: 'address', es: 'dirección', example: 'My address is 25 Green Street.' },
      { en: 'phone number', es: 'número de teléfono', example: 'What is your phone number?' },
      { en: 'email address', es: 'correo electrónico', example: 'My email address is simple.' },
      { en: 'city', es: 'ciudad', example: 'I live in Cúcuta.' },
      { en: 'country', es: 'país', example: 'Colombia is my country.' },
      { en: 'nationality', es: 'nacionalidad', example: 'My nationality is Colombian.' },
      { en: 'birthday', es: 'cumpleaños', example: 'My birthday is in May.' },
      { en: 'single', es: 'soltero', example: 'He is single.' },
      { en: 'married', es: 'casado', example: 'She is married.' },
      { en: 'student ID', es: 'carné estudiantil', example: 'Show your student ID.' },
      { en: 'signature', es: 'firma', example: 'Write your signature here.' }
    ]
  },

  {
    id: 'sports_basic',
    title: 'Deportes básicos',
    icon: '⚽',
    level: 'A1',
    communicativeGoal: 'Hablar de deportes, habilidades y preferencias.',
    grammarLinks: ['can_cant', 'like_ing', 'present_simple'],
    words: [
      { en: 'football / soccer', es: 'fútbol', example: 'I play football on Sundays.' },
      { en: 'basketball', es: 'baloncesto', example: 'She likes basketball.' },
      { en: 'volleyball', es: 'voleibol', example: 'We play volleyball at school.' },
      { en: 'tennis', es: 'tenis', example: 'He plays tennis very well.' },
      { en: 'baseball', es: 'béisbol', example: 'They watch baseball on TV.' },
      { en: 'swimming', es: 'natación', example: 'Swimming is good exercise.' },
      { en: 'running', es: 'correr', example: 'Running is my favorite sport.' },
      { en: 'cycling', es: 'ciclismo', example: 'Cycling is fun.' },
      { en: 'boxing', es: 'boxeo', example: 'Boxing is difficult.' },
      { en: 'gymnastics', es: 'gimnasia', example: 'Gymnastics is beautiful.' },
      { en: 'team', es: 'equipo', example: 'My team is very good.' },
      { en: 'player', es: 'jugador', example: 'He is a football player.' },
      { en: 'coach', es: 'entrenador', example: 'The coach is strict.' },
      { en: 'match / game', es: 'partido / juego', example: 'The match starts at five.' },
      { en: 'win', es: 'ganar', example: 'We want to win.' },
      { en: 'lose', es: 'perder', example: 'They do not like to lose.' }
    ]
  }
];

// -----------------------------------------------------
// 3. MEJORAS PARA LOS TEMAS EXISTENTES
// -----------------------------------------------------

const vocabTopicEnhancements = {
  colors: {
    level: 'A1',
    communicativeGoal: 'Describir objetos, ropa, animales y lugares usando colores.',
    grammarLinks: ['adjectives', 'demonstratives', 'to_be'],
    mission: 'Describe five objects around you using color + noun.',
    portfolioEvidence: 'Photo description: My colorful world.'
  },
  family: {
    level: 'A1',
    communicativeGoal: 'Presentar miembros de la familia y hablar de relaciones básicas.',
    grammarLinks: ['possessive_adjectives', 'possessive_s', 'to_be'],
    mission: 'Create and present a simple family tree.',
    portfolioEvidence: 'Family tree with five short descriptions.'
  },
  people: {
    level: 'A1',
    communicativeGoal: 'Describir personas por edad, género y rol básico.',
    grammarLinks: ['pronouns', 'to_be', 'adjectives'],
    mission: 'Describe people in a picture using there is / there are.',
    portfolioEvidence: 'Picture description: People around me.'
  },
  greetings: {
    level: 'A1',
    communicativeGoal: 'Saludar, presentarse y responder información personal básica.',
    grammarLinks: ['to_be', 'questions_a1', 'personal_pronouns'],
    mission: 'Record a 45-second self-introduction.',
    portfolioEvidence: 'Audio: Hello, my name is...'
  },
  numbers_vocab: {
    level: 'A1',
    communicativeGoal: 'Usar números cardinales y ordinales para fechas, edades, precios y cantidades.',
    grammarLinks: ['numbers', 'dates', 'how_many'],
    mission: 'Create a birthday and phone number mini-survey.',
    portfolioEvidence: 'Class survey with numbers and dates.'
  },
  jobs: {
    level: 'A1',
    communicativeGoal: 'Hablar de profesiones y lugares de trabajo.',
    grammarLinks: ['articles', 'to_be', 'present_simple'],
    mission: 'Interview someone about their job.',
    portfolioEvidence: 'Short profile: His / Her job.'
  },
  places: {
    level: 'A1',
    communicativeGoal: 'Nombrar lugares de la ciudad y ubicarlos con preposiciones.',
    grammarLinks: ['there_is_are', 'prepositions_place', 'directions'],
    mission: 'Draw a map of your neighborhood and describe it.',
    portfolioEvidence: 'Map: Places in my neighborhood.'
  },
  adjectives: {
    level: 'A1',
    communicativeGoal: 'Describir personas, objetos, comidas y lugares con adjetivos esenciales.',
    grammarLinks: ['adjectives', 'intensifiers', 'comparatives'],
    mission: 'Create a mini ranking using adjectives.',
    portfolioEvidence: 'My top 5 places / things.'
  },
  food_drink: {
    level: 'A1',
    communicativeGoal: 'Hablar de comida, bebida, gustos y pedidos básicos.',
    grammarLinks: ['id_like', 'how_much_many', 'like_ing'],
    mission: 'Design a simple restaurant menu.',
    portfolioEvidence: 'Menu + restaurant dialogue.'
  },
  body_health: {
    level: 'A1',
    communicativeGoal: 'Nombrar partes del cuerpo y expresar problemas de salud básicos.',
    grammarLinks: ['have_has', 'to_be', 'imperatives'],
    mission: 'Create a basic health dialogue.',
    portfolioEvidence: 'Doctor-patient mini role play.'
  },
  transport_travel: {
    level: 'A1',
    communicativeGoal: 'Hablar de transporte, viajes y movimientos básicos.',
    grammarLinks: ['present_simple', 'past_simple', 'going_to'],
    mission: 'Plan a short trip using transport vocabulary.',
    portfolioEvidence: 'Travel plan: My next trip.'
  }
};

// -----------------------------------------------------
// 4. FUNCIONES PARA CREAR PRÁCTICA AUTOMÁTICA
// -----------------------------------------------------

function createVocabPractice(topic) {
  const words = topic.words || [];

  const first = words[0] || {
    en: 'word',
    es: 'palabra',
    example: 'Example.'
  };

  const second = words[1] || first;
  const third = words[2] || first;
  const fourth = words[3] || first;
  const last = words[words.length - 1] || first;

  return [
    {
      type: 'recognition',
      title: 'Reconocimiento rápido',
      instruction: `Lee 10 palabras del tema "${topic.title}" y di su significado en español sin mirar la traducción.`,
      target: 'Comprensión léxica inmediata'
    },
    {
      type: 'choice',
      q: `¿Qué significa "${first.en}"?`,
      opts: [first.es, second.es, third.es].filter((v, i, arr) => arr.indexOf(v) === i),
      a: first.es,
      exp: `"${first.en}" significa "${first.es}". Ejemplo: ${first.example}`
    },
    {
      type: 'write',
      q: `Escribe en inglés: ${second.es}`,
      a: second.en,
      exp: `La palabra correcta es "${second.en}". Ejemplo: ${second.example}`
    },
    {
      type: 'sentence',
      title: 'Frase personal',
      instruction: `Crea una frase personal usando "${third.en}".`,
      model: third.example,
      target: 'Producción escrita A1'
    },
    {
      type: 'speaking',
      title: 'Reto oral de 30 segundos',
      instruction: `Graba un audio usando mínimo 5 palabras de "${topic.title}".`,
      target: 'Fluidez inicial y pronunciación'
    },
    {
      type: 'context',
      title: 'Uso en contexto',
      instruction: `Crea un mini diálogo donde aparezcan "${fourth.en}" y "${last.en}".`,
      model: `A: What is this? B: It is ${fourth.en}.`,
      target: 'Transferencia comunicativa'
    }
  ];
}

function createVocabCommunicativeTask(topic) {
  const sampleWords = (topic.words || [])
    .slice(0, 6)
    .map(word => word.en)
    .join(', ');

  return {
    title: `Mission: Use ${topic.title} in real life`,
    instruction: `Usa al menos 6 palabras del tema en una producción real. Palabras sugeridas: ${sampleWords}.`,
    options: [
      'Audio de 45 segundos',
      'Mini diálogo de 8 líneas',
      'Póster digital con imágenes y frases',
      'Video corto tipo presentación',
      'Entrada de portafolio personal'
    ],
    successCriteria: [
      'Usa mínimo 6 palabras del tema.',
      'Incluye al menos 3 frases completas en inglés.',
      'Conecta el vocabulario con una estructura gramatical A1.',
      'Incluye una reflexión corta sobre las palabras más difíciles.'
    ]
  };
}

function createVocabSelfAssessment(topic) {
  return [
    `Puedo reconocer palabras básicas del tema: ${topic.title}.`,
    'Puedo pronunciar varias palabras de forma comprensible.',
    'Puedo usar el vocabulario en frases simples.',
    'Puedo relacionar este vocabulario con mi vida diaria.',
    'Puedo elegir 5 palabras difíciles y crear una estrategia para repasarlas.'
  ];
}

function createVocabMicroProject(topic) {
  return {
    title: `Portfolio evidence: ${topic.title}`,
    product: 'Digital portfolio entry',
    steps: [
      'Selecciona 8 palabras del tema.',
      'Escribe una frase personal con cada palabra.',
      'Agrega una imagen, dibujo, ícono o audio para reforzar memoria.',
      'Graba una lectura corta de tus frases.',
      'Marca 3 palabras que necesitas repasar.'
    ],
    heutagogicalReflection: [
      'Which words are useful for my real life?',
      'Which words are difficult to pronounce?',
      'How can I remember these words next week?',
      'Where can I use this vocabulary outside class?'
    ]
  };
}

// -----------------------------------------------------
// 5. FUNCIÓN PRINCIPAL DE ENRIQUECIMIENTO
// -----------------------------------------------------

function enrichVocabTopic(topic) {
  const enhancement = vocabTopicEnhancements[topic.id] || {};

  topic.level = topic.level || enhancement.level || 'A1';
  topic.count = Array.isArray(topic.words) ? topic.words.length : topic.count || 0;

  topic.communicativeGoal =
    topic.communicativeGoal ||
    enhancement.communicativeGoal ||
    `Usar el vocabulario de ${topic.title} en situaciones comunicativas básicas.`;

  topic.grammarLinks =
    topic.grammarLinks ||
    enhancement.grammarLinks ||
    ['to_be', 'present_simple', 'questions_a1'];

  topic.learningOutcomes =
    topic.learningOutcomes || [
      `I can recognize basic words from ${topic.title}.`,
      `I can use words from ${topic.title} in simple A1 sentences.`,
      `I can connect ${topic.title} vocabulary with my personal context.`
    ];

  topic.stages = topic.stages || vocabA1DidacticStages;
  topic.practice = topic.practice || createVocabPractice(topic);
  topic.communicativeTask = topic.communicativeTask || createVocabCommunicativeTask(topic);

  topic.mission =
    topic.mission ||
    enhancement.mission ||
    topic.communicativeTask.instruction;

  topic.portfolioEvidence =
    topic.portfolioEvidence ||
    enhancement.portfolioEvidence ||
    `Vocabulary portfolio evidence for ${topic.title}.`;

  topic.selfAssessment = topic.selfAssessment || createVocabSelfAssessment(topic);
  topic.microProject = topic.microProject || createVocabMicroProject(topic);

  topic.virtualActivities =
    topic.virtualActivities || [
      'Flashcards con imagen + audio',
      'Quiz de reconocimiento inglés-español',
      'Dictado visual con 8 palabras',
      'Audio corto usando 5 palabras',
      'Mini reto de conversación en parejas',
      'Entrada de portafolio digital'
    ];

  topic.spacedReview =
    topic.spacedReview || [
      { day: 'Day 1', task: 'Reconocer y repetir las palabras nuevas.' },
      { day: 'Day 3', task: 'Crear frases personales con 5 palabras.' },
      { day: 'Day 7', task: 'Responder un quiz mixto con temas anteriores.' },
      { day: 'Day 14', task: 'Usar el vocabulario en una tarea oral o escrita.' }
    ];

  return topic;
}

// -----------------------------------------------------
// 6. RUTA DE APRENDIZAJE A1
// -----------------------------------------------------

const vocabA1LearningPath = [
  {
    unit: 1,
    name: 'Identity and Basic Communication',
    topics: ['greetings', 'personal_information', 'countries_nationalities', 'numbers_vocab'],
    finalTask: 'Create a personal profile and introduce yourself.'
  },
  {
    unit: 2,
    name: 'People and Family',
    topics: ['family', 'people', 'emotions_feelings'],
    finalTask: 'Present your family and describe people.'
  },
  {
    unit: 3,
    name: 'My Classroom and My Home',
    topics: ['classroom_objects', 'home_furniture', 'colors'],
    finalTask: 'Describe your classroom or bedroom.'
  },
  {
    unit: 4,
    name: 'Daily Life',
    topics: ['daily_routines', 'time_calendar', 'common_verbs'],
    finalTask: 'Create and present your daily routine.'
  },
  {
    unit: 5,
    name: 'Likes and Free Time',
    topics: ['hobbies_free_time', 'sports_basic', 'clothes_accessories'],
    finalTask: 'Create a post about your hobbies and what you are wearing.'
  },
  {
    unit: 6,
    name: 'Food and Shopping',
    topics: ['food_drink', 'restaurant_phrases', 'shopping_money'],
    finalTask: 'Perform a restaurant or shop role play.'
  },
  {
    unit: 7,
    name: 'Places, Travel and Nature',
    topics: ['places', 'transport_travel', 'weather_seasons', 'animals_nature', 'directions_city'],
    finalTask: 'Plan a simple weekend trip and describe the weather and places.'
  },
  {
    unit: 8,
    name: 'Health and Emotions',
    topics: ['body_health', 'emotions_feelings'],
    finalTask: 'Create a short health or emotions dialogue.'
  }
];

// -----------------------------------------------------
// 7. METODOLOGÍA GENERAL
// -----------------------------------------------------

const vocabMethodology = {
  approach: 'Active, communicative, virtual and heutagogical vocabulary learning for A1 English.',
  principles: [
    'Vocabulary is learned in context, not as isolated translation.',
    'Every topic connects words with A1 grammar structures.',
    'Students create personal evidence for a digital portfolio.',
    'Repetition is spaced and multimodal: visual, oral, written and interactive.',
    'Learners choose words that are relevant to their own life and goals.'
  ],
  recommendedDigitalTools: [
    'flashcards',
    'audio recorder',
    'interactive quizzes',
    'image labeling',
    'Padlet or Canva boards',
    'short video tasks',
    'digital portfolio'
  ],
  sessionFlow: [
    'activate',
    'input',
    'notice',
    'practice',
    'use',
    'produce',
    'reflect',
    'review'
  ]
};

// -----------------------------------------------------
// 8. RÚBRICA DE EVALUACIÓN
// -----------------------------------------------------

const vocabAssessmentRubric = {
  criteria: [
    {
      name: 'Recognition',
      excellent: 'Recognizes and translates most words quickly.',
      developing: 'Recognizes frequent words with support.',
      needsWork: 'Needs repeated exposure to identify basic words.'
    },
    {
      name: 'Pronunciation',
      excellent: 'Pronounces words clearly enough for A1 communication.',
      developing: 'Pronunciation is understandable with some hesitation.',
      needsWork: 'Pronunciation often blocks understanding.'
    },
    {
      name: 'Sentence use',
      excellent: 'Uses vocabulary in simple accurate sentences.',
      developing: 'Uses words in short phrases with some errors.',
      needsWork: 'Uses isolated words but struggles to form sentences.'
    },
    {
      name: 'Communication',
      excellent: 'Uses vocabulary to complete a real task or interaction.',
      developing: 'Completes the task with teacher or peer support.',
      needsWork: 'Needs models to communicate using the vocabulary.'
    },
    {
      name: 'Autonomy',
      excellent: 'Creates personal examples and reviews difficult words independently.',
      developing: 'Reviews words when guided.',
      needsWork: 'Does not yet use independent vocabulary strategies.'
    }
  ]
};

// -----------------------------------------------------
// 9. INTEGRACIÓN FINAL CON TU BASE ACTUAL
// -----------------------------------------------------

// Evita duplicados si el archivo se carga más de una vez.
const existingVocabIds = new Set(vocabTopics.map(topic => topic.id));

vocabExpansionTopics.forEach(topic => {
  if (!existingVocabIds.has(topic.id)) {
    vocabTopics.push(topic);
    existingVocabIds.add(topic.id);
  }
});

// Enriquece todos los temas: los originales y los nuevos.
vocabTopics.forEach(enrichVocabTopic);

// -----------------------------------------------------
// 10. PROGRAMA GENERAL A1
// -----------------------------------------------------

const vocabA1Program = {
  level: 'A1',
  name: 'A1 Vocabulary Builder - Active and Heutagogical Path',
  description:
    'Programa de vocabulario A1 orientado a comunicación real, práctica virtual, portafolio digital y autonomía del estudiante.',
  totalTopics: vocabTopics.length,
  totalWords: vocabTopics.reduce((sum, topic) => {
    return sum + (Array.isArray(topic.words) ? topic.words.length : 0);
  }, 0),
  methodology: vocabMethodology,
  learningPath: vocabA1LearningPath,
  assessmentRubric: vocabAssessmentRubric,
  portfolioFinalProject: {
    title: 'My A1 World in English',
    description:
      'El estudiante crea un portafolio digital integrando identidad, familia, casa, ciudad, rutina, gustos, comida, salud, viajes y planes básicos.',
    requiredEvidence: [
      'Personal profile',
      'Family tree',
      'My room or classroom description',
      'Daily routine',
      'Likes and hobbies post',
      'Restaurant or shopping dialogue',
      'Neighborhood map',
      'Health or emotions dialogue',
      'Final 3-minute oral presentation'
    ],
    finalPresentationStructure: [
      'Hello, my name is...',
      'I am from...',
      'This is my family.',
      'There is / There are in my room or city.',
      'I usually...',
      'I like / love / hate...',
      'I can...',
      'I would like...',
      'I am going to...',
      'Thank you.'
    ]
  }
};

// -----------------------------------------------------
// 11. COMPATIBILIDAD NAVEGADOR Y NODE
// -----------------------------------------------------

if (typeof window !== 'undefined') {
  window.vocabTopics = vocabTopics;
  window.vocabA1Program = vocabA1Program;
  window.vocabA1LearningPath = vocabA1LearningPath;
  window.vocabA1DidacticStages = vocabA1DidacticStages;
  window.vocabMethodology = vocabMethodology;
  window.vocabAssessmentRubric = vocabAssessmentRubric;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    vocabTopics,
    vocabA1Program,
    vocabA1LearningPath,
    vocabA1DidacticStages,
    vocabMethodology,
    vocabAssessmentRubric,
    vocabExpansionTopics
  };
}
