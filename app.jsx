import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Edit3, Target, Award, User, LayoutDashboard, 
  CheckCircle, XCircle, ArrowRight, Zap, Star, BarChart, FileText, Flame, BookType, MessageSquare
} from 'lucide-react';

// --- DATOS Y CONTENIDO ---
const initialUserData = {
  name: "Estudiante",
  level: 1,
  xp: 0,
  streak: 1, // Nueva métrica: Racha diaria
  scores: {
    prepositions: 0,
    numbers: 0,
    sentences: 0,
    verbs: 0,
    vocabulary: 0,
    reading: 0
  }
};

const modulesData = {
  prepositions: {
    title: "1. Las Preposiciones",
    icon: <Target className="w-6 h-6" />,
    theory: (
      <div className="space-y-4 text-gray-700">
        <h3 className="text-xl font-bold text-indigo-700 border-b pb-2">Preposiciones de Tiempo y Lugar</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-800 text-lg">ON (Sobre / Días)</h4>
            <p className="text-sm mt-2"><b>Usos:</b> Días de la semana, fechas concretas, superficies.</p>
            <ul className="text-sm list-disc pl-5 mt-2 text-gray-600">
              <li><i>On Sunday</i> (el domingo)</li>
              <li><i>On 10th June</i> (el 10 de junio)</li>
              <li><i>On the first floor</i> (en la 1ra planta)</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow-sm border-l-4 border-green-500">
            <h4 className="font-bold text-green-800 text-lg">IN (Dentro / Meses)</h4>
            <p className="text-sm mt-2"><b>Usos:</b> Meses, años, estaciones, ciudades, periodos.</p>
            <ul className="text-sm list-disc pl-5 mt-2 text-gray-600">
              <li><i>In Brighton</i> (en Brighton)</li>
              <li><i>In the summer</i> (en verano)</li>
              <li><i>In 1990</i> (en 1990)</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-800 text-lg">AT (A / Horas exactas)</h4>
            <p className="text-sm mt-2"><b>Usos:</b> Horas, festivos, lugares específicos.</p>
            <ul className="text-sm list-disc pl-5 mt-2 text-gray-600">
              <li><i>At 7 o'clock</i> (a las 7 en punto)</li>
              <li><i>At Christmas</i> (en Navidad)</li>
              <li><i>At home</i> (en casa)</li>
            </ul>
          </div>
        </div>
        <div className="bg-[#FAEEDA] p-4 rounded-lg border border-[#FAC775] mt-4 text-[#633806]">
          <h4 className="font-bold flex items-center gap-2"><Zap className="w-4 h-4"/> Truco Rápido</h4>
          <p className="text-sm mt-1">Recuerda: <b>AT</b> (punto exacto), <b>ON</b> (superficie o día específico), <b>IN</b> (área grande o periodo).</p>
        </div>
      </div>
    ),
    practiceType: 'quiz',
    practice: [
      { q: "My flat is ___ the first floor.", options: ["in", "on", "at"], answer: "on" },
      { q: "I usually get up ___ 7 o'clock.", options: ["in", "on", "at"], answer: "at" },
      { q: "I live ___ Brighton.", options: ["in", "on", "at"], answer: "in" },
      { q: "I was born ___ 1998.", options: ["in", "on", "at"], answer: "in" }
    ],
    evaluate: [
      { q: "There were much people ___ his funeral.", options: ["in", "at", "inside"], answer: "at" },
      { q: "My flat is ___ the first floor.", options: ["in", "on", "at"], answer: "on" },
      { q: "We often go swimming ___ the summer.", options: ["on", "in", "at"], answer: "in" },
      { q: "My birthday is ___ 10th June.", options: ["on", "in", "at"], answer: "on" },
      { q: "Peter and Susan always go to church ___ Christmas day.", options: ["in", "at", "on"], answer: "on" },
      { q: "I have seen your advertisement ___ the News.", options: ["in", "at", "inside"], answer: "in" },
      { q: "What time do you eat ___ the evening?", options: ["in", "at", "on"], answer: "in" },
      { q: "He goes every evening ___ night clubs.", options: ["to", "at", "in"], answer: "to" }
    ]
  },
  numbers: {
    title: "2. Números Cardinales y Ordinales",
    icon: <BarChart className="w-6 h-6" />,
    theory: (
      <div className="space-y-4 text-gray-700">
        <h3 className="text-xl font-bold text-indigo-700 border-b pb-2">Los Números en Inglés</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
            <h4 className="font-bold text-indigo-600 mb-2">Cardinales</h4>
            <p className="text-sm">Del 13 al 19 terminan en <b>-een</b>.</p>
            <p className="text-xs text-gray-500 mb-2">Ej: thirteen, fourteen, fifteen...</p>
            <p className="text-sm">Las decenas terminan en <b>-ty</b>.</p>
            <p className="text-xs text-gray-500 mb-2">Ej: twenty, thirty, forty...</p>
            <div className="bg-gray-50 p-2 rounded text-sm font-mono mt-3">
              102: a hundred and two<br/>
              312: three hundred and twelve<br/>
              2,500: two thousand five hundred
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
            <h4 className="font-bold text-indigo-600 mb-2">Ordinales</h4>
            <p className="text-sm">Excepciones principales:</p>
            <ul className="text-sm list-disc pl-5 mb-2 font-bold">
              <li>1st (first)</li>
              <li>2nd (second)</li>
              <li>3rd (third)</li>
            </ul>
            <p className="text-sm">Del cuarto en adelante terminan en <b>-th</b>.</p>
            <p className="text-xs text-gray-500 mb-2">Ej: fourth, fifth, twentieth...</p>
            <div className="bg-gray-50 p-2 rounded text-sm font-mono mt-3">
              21st: twenty-first<br/>
              22nd: twenty-second
            </div>
          </div>
        </div>
      </div>
    ),
    practiceType: 'quiz',
    practice: [
      { q: "¿Cómo se escribe 14?", options: ["fourten", "fourteen", "forty"], answer: "fourteen" },
      { q: "¿Cómo se escribe 3rd?", options: ["thirth", "three", "third"], answer: "third" },
      { q: "102 es...", options: ["one hundred and two", "one hundred two", "a hundred two"], answer: "one hundred and two" }
    ],
    evaluate: [
      { q: "Selecciona el ordinal de 20:", options: ["twentieth", "twentyth", "twentith"], answer: "twentieth" },
      { q: "El número 3.333 se escribe:", options: ["three thousand three hundred and thirty-three", "three thousand and three hundred thirty-three", "three thousands three hundreds thirty-three"], answer: "three thousand three hundred and thirty-three" },
      { q: "Primero, segundo y tercero son:", options: ["first, second, third", "oneth, twoth, threeth", "first, secund, tirth"], answer: "first, second, third" },
      { q: "80 se escribe:", options: ["eighteen", "eighty", "eigty"], answer: "eighty" },
      { q: "El ordinal de 12 es:", options: ["twelfth", "twelveth", "twelve"], answer: "twelfth" },
      { q: "15 se escribe:", options: ["fifteen", "fiveteen", "fifty"], answer: "fifteen" }
    ]
  },
  verbs: {
    title: "3. Verbos: Be, Have, Do",
    icon: <BookOpen className="w-6 h-6" />,
    theory: (
      <div className="space-y-4 text-gray-700">
        <h3 className="text-xl font-bold text-indigo-700 border-b pb-2">Conjugación Básica (Presente Simple)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-red-50 p-5 rounded-xl shadow-sm border border-red-100">
            <h4 className="font-bold text-red-800 text-lg mb-3 flex items-center gap-2"><User className="w-5 h-5"/> TO BE (Ser/Estar)</h4>
            <ul className="text-sm space-y-2">
              <li className="flex justify-between"><span>I</span> <b>am</b></li>
              <li className="flex justify-between"><span>You / We / They</span> <b>are</b></li>
              <li className="flex justify-between"><span>He / She / It</span> <b>is</b></li>
            </ul>
          </div>
          <div className="bg-blue-50 p-5 rounded-xl shadow-sm border border-blue-100">
            <h4 className="font-bold text-blue-800 text-lg mb-3 flex items-center gap-2"><BookType className="w-5 h-5"/> TO HAVE (Tener)</h4>
            <ul className="text-sm space-y-2">
              <li className="flex justify-between"><span>I / You / We / They</span> <b>have</b></li>
              <li className="flex justify-between"><span>He / She / It</span> <b>has</b></li>
            </ul>
          </div>
          <div className="bg-green-50 p-5 rounded-xl shadow-sm border border-green-100">
            <h4 className="font-bold text-green-800 text-lg mb-3 flex items-center gap-2"><Zap className="w-5 h-5"/> TO DO (Hacer)</h4>
            <ul className="text-sm space-y-2">
              <li className="flex justify-between"><span>I / You / We / They</span> <b>do</b></li>
              <li className="flex justify-between"><span>He / She / It</span> <b>does</b></li>
            </ul>
          </div>
        </div>
      </div>
    ),
    practiceType: 'quiz',
    practice: [
      { q: "She ___ a doctor.", options: ["am", "is", "are"], answer: "is" },
      { q: "They ___ a new car.", options: ["has", "have", "are"], answer: "have" },
      { q: "He ___ his homework every day.", options: ["do", "does", "is"], answer: "does" }
    ],
    evaluate: [
      { q: "We ___ tired today.", options: ["am", "is", "are"], answer: "are" },
      { q: "It ___ cold outside.", options: ["am", "is", "are"], answer: "is" },
      { q: "I ___ a beautiful house.", options: ["have", "has", "do"], answer: "have" },
      { q: "Susan ___ a baby.", options: ["have", "has", "is"], answer: "has" },
      { q: "You ___ a great job.", options: ["do", "does", "are"], answer: "do" },
      { q: "He ___ his homework every day.", options: ["does", "do", "is"], answer: "does" },
      { q: "They ___ at the cinema.", options: ["are", "is", "am"], answer: "are" },
      { q: "I ___ ill.", options: ["am", "is", "are"], answer: "am" }
    ]
  },
  vocabulary: {
    title: "4. Vocabulario y Expresiones",
    icon: <Star className="w-6 h-6" />,
    theory: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-indigo-700 border-b pb-2">Tarjetas de Vocabulario (Flashcards)</h3>
        <p className="text-sm text-gray-500 mb-4">Haz clic en las tarjetas para descubrir su significado en español.</p>
        <Flashcards 
          words={[
            { en: "Black", es: "Negro", category: "Colores" }, { en: "Blue", es: "Azul", category: "Colores" },
            { en: "Red", es: "Rojo", category: "Colores" }, { en: "Yellow", es: "Amarillo", category: "Colores" },
            { en: "Boy / Girl", es: "Chico / Chica", category: "Personas" }, { en: "Man / Woman", es: "Hombre / Mujer", category: "Personas" },
            { en: "Husband / Wife", es: "Esposo / Esposa", category: "Familia" }, { en: "Twins", es: "Gemelos", category: "Familia" },
            { en: "Good morning", es: "Buenos días", category: "Saludos" }, { en: "See you later", es: "Hasta luego", category: "Saludos" },
          ]}
        />
      </div>
    ),
    practiceType: 'match',
    practice: [
      { en: 'Grey', es: 'Gris' }, { en: 'Purple', es: 'Morado' },
      { en: 'Aunt', es: 'Tía' }, { en: 'Nephew', es: 'Sobrino' },
      { en: 'Toddler', es: 'Niño pequeño' }, { en: 'Teenager', es: 'Adolescente' }
    ],
    evaluate: [
      { q: "El color 'Gris' en inglés es:", options: ["Grey", "Green", "Brown"], answer: "Grey" },
      { q: "Un 'Toddler' es:", options: ["Un adolescente", "Un adulto", "Un niño que empieza a andar"], answer: "Un niño que empieza a andar" },
      { q: "El color 'Amarillo' es:", options: ["Orange", "Yellow", "Purple"], answer: "Yellow" },
      { q: "¿Cómo se dice 'Adolescente'?", options: ["Grown-up", "Teenager", "Baby"], answer: "Teenager" },
      { q: "¿Cómo se dice 'Sobrino'?", options: ["Nephew", "Niece", "Uncle"], answer: "Nephew" },
      { q: "¿Qué es una 'Aunt'?", options: ["Tía", "Abuela", "Prima"], answer: "Tía" },
      { q: "Si digo 'Twins', me refiero a:", options: ["Gemelos", "Primos", "Nietos"], answer: "Gemelos" },
      { q: "El color 'Morado/Violeta' es:", options: ["Purple", "Pink", "Orange"], answer: "Purple" }
    ]
  },
  reading: {
    title: "5. Comprensión Lectora (Reading)",
    icon: <FileText className="w-6 h-6" />,
    theory: (
      <div className="space-y-4 text-gray-700">
        <h3 className="text-xl font-bold text-indigo-700 border-b pb-2">Read the following texts</h3>
        <p className="text-sm text-gray-500 mb-2">Pasa el mouse (o toca) sobre las <span className="bg-indigo-100 text-indigo-800 px-1 rounded">palabras resaltadas</span> para ver su significado.</p>
        
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h4 className="font-bold text-lg text-indigo-900 mb-3">Text 1: My Family</h4>
          <InteractiveText content="My name is [Tom|nombre]. I am [twelve|doce] years old. I go to school every day. My school is [near|cerca] my house. I walk to school [in the morning|por la mañana]. My teacher is [Mrs|señora] Johnson. We study English and Science. [At lunchtime|a la hora del almuerzo], I eat with my friends." />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mt-4">
          <h4 className="font-bold text-lg text-indigo-900 mb-3">Text 2: Peter's Life</h4>
          <InteractiveText content="Hello! My name is Peter. I am a doctor. I live in Brighton with my [family|familia]. My [wife|esposa] is Susan. She is a journalist. We have two children: a boy and a girl. Our boy is a [teenager|adolescente] and our girl is a [toddler|niño pequeño]. Our house is [on the corner|en la esquina] of Portland Street. It has a blue door. We usually go to the park [at weekends|los fines de semana]." />
        </div>
      </div>
    ),
    practiceType: 'quiz',
    practice: [
      { q: "How old is Tom? (Text 1)", options: ["Ten", "Twelve", "Fifteen"], answer: "Twelve" },
      { q: "Where is Tom's school? (Text 1)", options: ["Far from his house", "Near his house", "In another city"], answer: "Near his house" }
    ],
    evaluate: [
      { q: "Where does Peter live? (¿Dónde vive Peter?)", options: ["In Brighton", "In London", "On Portland Street"], answer: "In Brighton" },
      { q: "What is Susan's job? (¿Cuál es el trabajo de Susan?)", options: ["She is a journalist", "She is a doctor", "She is a teacher"], answer: "She is a journalist" },
      { q: "How many children do they have? (¿Cuántos hijos tienen?)", options: ["Two", "Three", "One"], answer: "Two" },
      { q: "Where is their house? (¿Dónde está su casa?)", options: ["On the corner", "Next to the park", "Behind the school"], answer: "On the corner" },
      { q: "What color is the door of the house? (¿De qué color es la puerta?)", options: ["Blue", "Black", "Navy"], answer: "Blue" },
      { q: "When do they go to the park? (¿Cuándo van al parque?)", options: ["At weekends", "In the summer", "On Sunday"], answer: "At weekends" }
    ]
  },
  sentences: {
    title: "6. Construcción y Redacción (Writing)",
    icon: <Edit3 className="w-6 h-6" />,
    theory: (
      <div className="space-y-4 text-gray-700">
        <h3 className="text-xl font-bold text-indigo-700 border-b pb-2">Estructura de la Oración</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-xl shadow border border-gray-200">
            <h4 className="font-bold text-indigo-600 mb-2">Presente Simple</h4>
            <p className="text-sm mb-3">Cosas que suceden repetidamente o verdades generales.</p>
            <div className="bg-gray-100 p-2 rounded font-mono text-xs text-center border border-gray-200">Sujeto + Verbo + (Complemento)</div>
            <p className="text-sm mt-3 text-gray-600 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Elephants live in Africa.</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow border border-gray-200">
            <h4 className="font-bold text-indigo-600 mb-2">Presente Continuo</h4>
            <p className="text-sm mb-3">Cosas que están pasando en este exacto momento.</p>
            <div className="bg-gray-100 p-2 rounded font-mono text-xs text-center border border-gray-200">Sujeto + TO BE + Verbo-ING</div>
            <p className="text-sm mt-3 text-gray-600 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> I am writing a letter.</p>
          </div>
        </div>
      </div>
    ),
    practiceType: 'guided-writing',
    practice: [
      { prompt: 'Escribe en inglés: "Ella es una doctora."', words: ['She', 'is', 'a', 'doctor', 'teacher'], answer: 'She is a doctor', tip: 'Sujeto + verbo to be + artículo + profesión' },
      { prompt: 'Transforma al presente continuo: "I read a book." (Yo leo un libro)', words: ['I', 'am', 'reading', 'a', 'book', 'read'], answer: 'I am reading a book', tip: 'I + am + read+ing + objeto' }
    ],
    evaluateType: 'word-order',
    evaluate: [
      { words: ["I", "a", "writing", "am", "letter."], answer: "I am writing a letter." },
      { words: ["live", "Elephants", "Africa.", "in"], answer: "Elephants live in Africa." },
      { words: ["doing", "He", "is", "some", "photocopying."], answer: "He is doing some photocopying." },
      { words: ["eat", "every", "school.", "at", "I", "day"], answer: "I eat every day at school." },
      { words: ["are", "Houses", "expensive."], answer: "Houses are expensive." },
      { words: ["see", "We", "you", "September.", "in"], answer: "We see you in September." },
      { words: ["the", "She", "best.", "is"], answer: "She is the best." }
    ]
  }
};

// --- COMPONENTES PRINCIPALES ---

export default function App() {
  const [user, setUser] = useState(initialUserData);
  const [currentView, setCurrentView] = useState('dashboard');
  const [showToast, setShowToast] = useState({ show: false, msg: "", type: "success" });

  const addXp = (amount) => {
    setUser(prev => {
      let newXp = prev.xp + amount;
      let newLevel = prev.level;
      if (newXp >= newLevel * 100) {
        newLevel++;
        triggerToast(`¡Subiste al Nivel ${newLevel}! 🎉`, "success");
      }
      return { ...prev, xp: newXp, level: newLevel };
    });
  };

  const updateScore = (moduleKey, score) => {
    setUser(prev => ({
      ...prev,
      scores: { ...prev.scores, [moduleKey]: score }
    }));
    triggerToast(`Módulo completado. +50 XP`, "success");
    addXp(50);
  };

  const triggerToast = (msg, type) => {
    setShowToast({ show: true, msg, type });
    setTimeout(() => setShowToast({ show: false, msg: "", type: "success" }), 3000);
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-800 overflow-hidden">
      
      {/* Toast Notification */}
      {showToast.show && (
        <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white font-bold transition-all transform flex items-center gap-2 ${showToast.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
          {showToast.type === 'success' ? <CheckCircle className="w-5 h-5"/> : <XCircle className="w-5 h-5"/>}
          {showToast.msg}
        </div>
      )}

      {/* Sidebar Navigation */}
      <nav className="w-64 bg-gradient-to-b from-[#3C3489] to-[#2B2566] text-white p-6 shadow-xl flex flex-col z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
            <BookOpen className="w-6 h-6 text-indigo-100" />
          </div>
          <h1 className="text-xl font-bold tracking-wider leading-tight">Edu<br/>English</h1>
        </div>

        <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl mb-6 backdrop-blur-sm border border-white/10">
           <Flame className="w-6 h-6 text-orange-400 fill-current" />
           <div>
             <div className="text-xs text-indigo-200 uppercase font-bold">Racha Actual</div>
             <div className="font-bold text-lg">{user.streak} Días</div>
           </div>
        </div>

        <div className="space-y-2 flex-grow overflow-y-auto pr-2 custom-scrollbar">
          <SidebarBtn 
            icon={<LayoutDashboard />} 
            text="Tablero General" 
            active={currentView === 'dashboard'} 
            onClick={() => setCurrentView('dashboard')} 
          />
          <div className="text-xs uppercase text-indigo-300 font-bold mt-6 mb-3 tracking-widest px-2">Mis Módulos</div>
          
          {Object.entries(modulesData).map(([key, data]) => (
            <SidebarBtn 
              key={key}
              icon={data.icon} 
              text={data.title} 
              active={currentView === key} 
              onClick={() => setCurrentView(key)} 
            />
          ))}
        </div>

        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 mt-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-500 rounded-full p-1.5"><User className="w-4 h-4" /></div>
              <p className="text-sm font-bold">{user.name}</p>
            </div>
            <p className="text-xs bg-indigo-500/50 px-2 py-1 rounded-md font-bold">Nv. {user.level}</p>
          </div>
          <div className="w-full bg-black/30 rounded-full h-2.5 mb-1 mt-3">
            <div className="bg-gradient-to-r from-[#1D9E75] to-emerald-400 h-2.5 rounded-full transition-all duration-500" style={{ width: `${(user.xp % (user.level * 100)) / (user.level) }%` }}></div>
          </div>
          <p className="text-right text-xs text-indigo-200 font-medium">{user.xp} XP Totales</p>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-6 md:p-10 relative bg-[#F8F9FA]">
        {currentView === 'dashboard' ? (
          <Dashboard user={user} modulesData={modulesData} />
        ) : (
          <ModuleContainer 
            moduleKey={currentView} 
            moduleData={modulesData[currentView]} 
            addXp={addXp} 
            updateScore={updateScore}
          />
        )}
      </main>
    </div>
  );
}

// --- SUB-COMPONENTES Y HERRAMIENTAS ---

function SidebarBtn({ icon, text, active, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 text-left
      ${active ? 'bg-white/20 text-white shadow-inner border border-white/10 font-bold' : 'text-indigo-200 hover:bg-white/10 hover:text-white font-medium'}`}
    >
      {React.cloneElement(icon, { className: "w-5 h-5" })}
      <span className="text-sm flex-1 leading-tight">{text}</span>
    </button>
  );
}

// Interactivo: Texto con tooltips
function InteractiveText({ content }) {
  const parts = content.split(/\[([^|]+)\|([^\]]+)\]/g);
  const elements = [];
  
  for (let i = 0; i < parts.length; i += 3) {
    elements.push(<span key={i}>{parts[i]}</span>);
    if (i + 1 < parts.length) {
      elements.push(
        <span key={i+1} className="group relative inline-block bg-indigo-100 text-[#3C3489] font-medium px-1.5 mx-0.5 rounded cursor-pointer border-b-2 border-indigo-300 hover:bg-indigo-200 transition-colors">
          {parts[i+1]}
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs font-bold px-3 py-1.5 rounded-md whitespace-nowrap z-10 shadow-lg after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-gray-800">
            {parts[i+2]}
          </span>
        </span>
      );
    }
  }
  return <div className="text-[15px] leading-relaxed text-gray-700">{elements}</div>;
}

// Interactivo: Flashcards
function Flashcards({ words }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {words.map((w, i) => (
        <Flashcard key={i} {...w} />
      ))}
    </div>
  );
}

function Flashcard({ en, es, category }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div 
      onClick={() => setFlipped(!flipped)} 
      className={`relative w-full h-28 cursor-pointer rounded-xl shadow-sm border transition-all duration-300 flex flex-col items-center justify-center p-4 text-center
        ${flipped ? 'bg-[#3C3489] border-[#3C3489] text-white scale-105 shadow-md' : 'bg-white border-gray-200 text-gray-800 hover:border-indigo-400 hover:bg-indigo-50'}`}
    >
      <span className={`text-[10px] uppercase font-bold tracking-widest absolute top-2 ${flipped ? 'text-indigo-200' : 'text-gray-400'}`}>{category}</span>
      <span className="font-extrabold text-lg mt-2">{flipped ? es : en}</span>
    </div>
  );
}

// Interactivo: Match Game
function MatchGame({ pairs, onComplete, addXp }) {
  const [leftItems, setLeftItems] = useState([]);
  const [rightItems, setRightItems] = useState([]);
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);
  const [matched, setMatched] = useState([]);
  const [errorIds, setErrorIds] = useState([]);

  useEffect(() => {
    setLeftItems(pairs.map((p, i) => ({ id: `l-${i}`, text: p.en, pairId: i })).sort(() => Math.random() - 0.5));
    setRightItems(pairs.map((p, i) => ({ id: `r-${i}`, text: p.es, pairId: i })).sort(() => Math.random() - 0.5));
  }, [pairs]);

  useEffect(() => {
    if (selectedLeft && selectedRight) {
      if (selectedLeft.pairId === selectedRight.pairId) {
        // Match!
        setMatched(prev => [...prev, selectedLeft.pairId]);
        setSelectedLeft(null);
        setSelectedRight(null);
        addXp(5);
        if (matched.length + 1 === pairs.length) {
          setTimeout(onComplete, 1000);
        }
      } else {
        // Error
        setErrorIds([selectedLeft.id, selectedRight.id]);
        setTimeout(() => {
          setErrorIds([]);
          setSelectedLeft(null);
          setSelectedRight(null);
        }, 800);
      }
    }
  }, [selectedLeft, selectedRight, matched.length, pairs.length, onComplete, addXp]);

  const getClass = (item, isLeft) => {
    if (matched.includes(item.pairId)) return "bg-[#EAF3DE] border-[#3B6D11] text-[#27500A] cursor-default opacity-60";
    if (errorIds.includes(item.id)) return "bg-[#FCEBEB] border-[#A32D2D] text-[#791F1F]";
    const isSelected = isLeft ? selectedLeft?.id === item.id : selectedRight?.id === item.id;
    if (isSelected) return "bg-[#EEEDFE] border-[#3C3489] text-[#3C3489] font-bold shadow-inner";
    return "bg-white border-gray-200 text-gray-700 hover:border-indigo-400 hover:bg-gray-50";
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-2xl border border-gray-200">
      <h3 className="text-xl font-bold text-center text-gray-800 mb-2">Conecta las Palabras</h3>
      <p className="text-center text-sm text-gray-500 mb-6">Selecciona una palabra en inglés y su traducción en español.</p>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-3">
          {leftItems.map(item => (
            <button 
              key={item.id}
              disabled={matched.includes(item.pairId)}
              onClick={() => setSelectedLeft(item)}
              className={`w-full p-4 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${getClass(item, true)}`}
            >
              {item.text}
            </button>
          ))}
        </div>
        <div className="space-y-3">
          {rightItems.map(item => (
            <button 
              key={item.id}
              disabled={matched.includes(item.pairId)}
              onClick={() => setSelectedRight(item)}
              className={`w-full p-4 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${getClass(item, false)}`}
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>
      {matched.length === pairs.length && (
         <div className="mt-6 bg-green-100 text-green-800 p-4 rounded-xl font-bold flex items-center justify-center gap-2 animate-fadeIn">
           <Award className="w-6 h-6"/> ¡Juego Completado!
         </div>
      )}
    </div>
  );
}

// Interactivo: Guided Writing con Word Bank
function GuidedWriting({ questions, addXp, onNext }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState(null);

  const q = questions[currentIndex];

  const handleCheck = () => {
    const isCorrect = text.toLowerCase().trim() === q.answer.toLowerCase();
    if (isCorrect) {
      setFeedback('correct');
      addXp(15);
    } else {
      setFeedback('incorrect');
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setText("");
      setFeedback(null);
    } else {
      onNext();
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
       <div className="mb-6 border-l-4 border-[#D85A30] pl-4">
        <h3 className="text-xl font-bold text-gray-800">Práctica de Redacción</h3>
        <p className="text-gray-500 text-sm">Ejercicio {currentIndex + 1} de {questions.length}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <p className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-indigo-500"/> {q.prompt}
        </p>

        {q.words && (
          <div className="flex flex-wrap gap-2 mb-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
            <span className="text-xs font-bold text-gray-400 w-full mb-1 uppercase">Banco de palabras (clic para añadir):</span>
            {q.words.map((w, i) => (
              <button 
                key={i} 
                onClick={() => setText(prev => (prev + (prev ? " " : "") + w).trim())}
                className="bg-white border border-gray-300 px-3 py-1.5 rounded-md text-sm font-medium hover:border-indigo-500 hover:text-indigo-600 transition-colors shadow-sm"
              >
                {w}
              </button>
            ))}
          </div>
        )}

        <textarea 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe aquí tu respuesta..."
          className="w-full min-h-[100px] p-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 text-lg transition-colors resize-none"
        />

        <div className="bg-[#FAEEDA] border border-[#FAC775] text-[#633806] p-3 rounded-lg text-sm mt-4">
          💡 <b>Pista:</b> {q.tip}
        </div>

        {feedback && (
          <div className={`mt-4 p-4 rounded-xl font-bold flex items-center gap-2 ${feedback === 'correct' ? 'bg-[#EAF3DE] text-[#27500A] border border-[#C0DD97]' : 'bg-[#FCEBEB] text-[#791F1F] border border-[#F7C1C1]'}`}>
            {feedback === 'correct' ? <><CheckCircle className="w-5 h-5"/> ¡Correcto! +15 XP</> : <><XCircle className="w-5 h-5"/> Casi. Revisa la estructura y vuelve a intentarlo.</>}
          </div>
        )}

        <div className="mt-6 flex justify-end">
           {!feedback || feedback === 'incorrect' ? (
             <button onClick={handleCheck} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-bold">Comprobar Respuesta</button>
           ) : (
             <button onClick={nextQuestion} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2">Siguiente <ArrowRight className="w-4 h-4"/></button>
           )}
        </div>
      </div>
    </div>
  );
}


function Dashboard({ user, modulesData }) {
  const totalEvaluations = Object.keys(modulesData).length;
  const completed = Object.values(user.scores).filter(s => s > 0).length;
  const progressPercent = Math.round((completed / totalEvaluations) * 100) || 0;

  // Integración según Framework de 4 Habilidades:
  const grammarScore = Math.round(((user.scores.prepositions || 0) + (user.scores.verbs || 0)) / 2) || 0;
  const vocabScore = Math.round(((user.scores.vocabulary || 0) + (user.scores.numbers || 0)) / 2) || 0;
  const readingScore = user.scores.reading || 0;
  const writingScore = user.scores.sentences || 0;

  const getFeedback = () => {
    let strengths = [];
    let weaknesses = [];
    
    if(grammarScore > 80) strengths.push("Gramática (Verbos y Preposiciones)");
    else if(grammarScore > 0 && grammarScore <= 50) weaknesses.push("Reglas de Gramática (Revisa IN/ON/AT)");

    if(writingScore > 80) strengths.push("Estructura de oraciones (Writing)");
    else if(writingScore > 0 && writingScore <= 50) weaknesses.push("Orden de las palabras en oraciones");

    if(readingScore > 80) strengths.push("Comprensión Lectora (Reading)");
    else if(readingScore > 0 && readingScore <= 50) weaknesses.push("Identificación de detalles en textos");

    if(completed === 0) return "¡Bienvenido! Comienza con los primeros módulos para evaluar tu nivel inicial y construir tu racha diaria.";
    
    let msg = `¡Llevas un progreso del ${progressPercent}% en los módulos!\n`;
    if(strengths.length > 0) msg += `🌟 Excelente dominio en: ${strengths.join(', ')}.\n`;
    if(weaknesses.length > 0) msg += `🎯 Debemos reforzar: ${weaknesses.join(', ')}. Te sugiero repasar la teoría.`;
    if(strengths.length === 0 && weaknesses.length === 0) msg += `¡Vas por buen camino! Sigue completando módulos para obtener más feedback detallado.`;
    
    return msg;
  };

  return (
    <div className="max-w-6xl mx-auto animate-fadeIn">
      <header className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Tu Tablero de Progreso</h2>
        <p className="text-gray-500 mt-1">Sigue tu rendimiento y recomendaciones personalizadas por habilidad.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Main Stats Card */}
        <div className="col-span-1 lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full blur-3xl -mr-10 -mt-10 opacity-70 pointer-events-none"></div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-700 mb-6 flex items-center gap-2">
              <Award className="text-yellow-500 w-6 h-6" /> Resumen de Habilidades (Marco Europeo)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <StatBar label="Grammar (Gramática)" percent={grammarScore} color="bg-[#534AB7]" />
              <StatBar label="Vocabulary (Vocabulario)" percent={vocabScore} color="bg-[#1D9E75]" />
              <StatBar label="Reading (Lectura)" percent={readingScore} color="bg-[#378ADD]" />
              <StatBar label="Writing (Escritura)" percent={writingScore} color="bg-[#D85A30]" />
            </div>
          </div>
          
          <div className="mt-10 bg-gray-50 rounded-xl p-5 border border-gray-100">
            <h4 className="font-bold text-sm text-gray-600 mb-3 uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-500"/> Progreso Total del Curso
            </h4>
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-gray-200 rounded-full h-4">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-4 rounded-full transition-all duration-1000" style={{ width: `${progressPercent}%` }}></div>
              </div>
              <span className="font-bold text-lg text-indigo-800">{progressPercent}%</span>
            </div>
          </div>
        </div>

        {/* Feedback Card */}
        <div className="bg-gradient-to-br from-[#3C3489] to-[#2B2566] rounded-2xl shadow-lg p-6 text-white relative">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <User className="text-indigo-200 w-5 h-5" /> Feedback del Profesor
          </h3>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 text-[15px] leading-relaxed shadow-inner">
            {getFeedback().split('\n').map((line, i) => <p key={i} className="mb-3 last:mb-0">{line}</p>)}
          </div>
          <div className="mt-8 flex items-end justify-between">
            <div>
              <p className="text-xs text-indigo-300 uppercase font-bold tracking-widest mb-1">Rango Actual</p>
              <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                {user.level < 2 ? 'Explorador Novato' : user.level < 4 ? 'Aprendiz Ágil' : 'Erudito'}
              </p>
            </div>
            <Award className="w-10 h-10 text-yellow-400 opacity-80"/>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-4">Detalle de Módulos</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(modulesData).map(([key, data]) => (
          <div key={key} className={`bg-white p-5 rounded-xl shadow-sm border flex items-center gap-4 transition-all ${user.scores[key] ? 'border-green-200' : 'border-gray-200'}`}>
            <div className={`p-3 rounded-xl shadow-sm ${user.scores[key] ? 'bg-[#EAF3DE] text-[#3B6D11]' : 'bg-[#EEEDFE] text-[#3C3489]'}`}>
              {user.scores[key] ? <CheckCircle className="w-6 h-6" /> : data.icon}
            </div>
            <div>
              <p className="text-[15px] font-bold text-gray-800">{data.title}</p>
              <p className={`text-sm font-bold mt-0.5 ${user.scores[key] ? 'text-[#3B6D11]' : 'text-gray-400'}`}>
                {user.scores[key] ? `Completado: ${user.scores[key]}%` : 'Pendiente'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatBar({ label, percent, color }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="font-bold text-gray-700">{label}</span>
        <span className="text-gray-500 font-bold">{percent}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div className={`${color} h-3 rounded-full transition-all duration-700 ease-out`} style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}

function ModuleContainer({ moduleKey, moduleData, addXp, updateScore }) {
  const [activeTab, setActiveTab] = useState('theory');

  useEffect(() => { setActiveTab('theory'); }, [moduleKey]);

  return (
    <div className="max-w-4xl mx-auto animate-fadeIn">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-200 text-indigo-700">
          {moduleData.icon}
        </div>
        <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">{moduleData.title}</h2>
      </div>

      {/* Tabs Navigation */}
      <div className="flex bg-white rounded-xl shadow-sm border border-gray-200 p-1.5 mb-6">
        <TabBtn label="1. Conceptualizar" active={activeTab === 'theory'} onClick={() => setActiveTab('theory')} />
        {moduleData.practice && <TabBtn label="2. Practicar" active={activeTab === 'practice'} onClick={() => setActiveTab('practice')} />}
        <TabBtn label="3. Evaluar" active={activeTab === 'evaluate'} onClick={() => setActiveTab('evaluate')} />
      </div>

      {/* Tab Content Areas */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 min-h-[450px]">
        {activeTab === 'theory' && (
          <div className="animate-fadeIn">
            {moduleData.theory}
            <div className="mt-10 flex justify-end border-t pt-6">
              {moduleData.practice ? (
                <button onClick={() => setActiveTab('practice')} className="bg-[#534AB7] hover:bg-indigo-800 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-md flex items-center gap-2">
                  Pasar a la Práctica <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button onClick={() => setActiveTab('evaluate')} className="bg-[#534AB7] hover:bg-indigo-800 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-md flex items-center gap-2">
                  Ir a Evaluación <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        )}

        {activeTab === 'practice' && moduleData.practice && (
           moduleData.practiceType === 'match' ? 
             <MatchGame pairs={moduleData.practice} addXp={addXp} onComplete={() => setActiveTab('evaluate')} />
           : moduleData.practiceType === 'guided-writing' ?
             <GuidedWriting questions={moduleData.practice} addXp={addXp} onNext={() => setActiveTab('evaluate')} />
           :
             <PracticeTab questions={moduleData.practice} addXp={addXp} onNext={() => setActiveTab('evaluate')} />
        )}

        {activeTab === 'evaluate' && (
           moduleData.evaluateType === 'word-order' ? 
             <WordOrderExercise questions={moduleData.evaluate} onFinish={(score) => updateScore(moduleKey, score)} />
           :
             <EvaluateTab questions={moduleData.evaluate} onFinish={(score) => updateScore(moduleKey, score)} />
        )}
      </div>
    </div>
  );
}

function TabBtn({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-3.5 text-sm font-bold rounded-lg transition-all duration-200
        ${active ? 'bg-[#EEEDFE] text-[#3C3489] shadow-sm border border-indigo-100' : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'}`}
    >
      {label}
    </button>
  );
}

function PracticeTab({ questions, addXp, onNext }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const q = questions[currentIndex];

  const handleSelect = (option) => {
    if (selected !== null) return;
    setSelected(option);
    if (option === q.answer) {
      setFeedback('correct');
      addXp(5);
    } else {
      setFeedback('incorrect');
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(curr => curr + 1);
      setSelected(null);
      setFeedback(null);
    } else {
      onNext();
    }
  };

  return (
    <div className="animate-fadeIn max-w-2xl mx-auto py-8">
      <div className="mb-8 border-l-4 border-indigo-400 pl-4">
        <span className="text-sm font-bold text-indigo-500 uppercase tracking-widest">Pregunta {currentIndex + 1} de {questions.length}</span>
        <h3 className="text-2xl font-bold text-gray-800 mt-2">{q.q}</h3>
      </div>

      <div className="space-y-3">
        {q.options.map((opt, i) => {
          let stateClass = "bg-white border-gray-300 text-gray-700 hover:border-indigo-400 hover:bg-indigo-50";
          if (selected === opt) {
            stateClass = feedback === 'correct' 
              ? "bg-[#EAF3DE] border-[#3B6D11] text-[#27500A] shadow-inner" 
              : "bg-[#FCEBEB] border-[#A32D2D] text-[#791F1F] shadow-inner";
          } else if (selected !== null && opt === q.answer) {
             stateClass = "bg-green-50 border-green-300 text-green-700 opacity-70"; 
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(opt)}
              className={`w-full p-4 rounded-xl border-2 font-bold text-lg transition-all duration-200 text-left pl-6 ${stateClass}`}
            >
              <span className="inline-block w-8 text-gray-400 font-normal">{String.fromCharCode(65 + i)}.</span> {opt}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className="mt-8 pt-6 border-t animate-fadeIn flex items-center justify-between">
          <div className={`font-bold flex items-center gap-2 ${feedback === 'correct' ? 'text-green-600' : 'text-red-500'}`}>
            {feedback === 'correct' ? <><CheckCircle /> ¡Correcto! +5 XP</> : <><XCircle /> Respuesta incorrecta.</>}
          </div>
          <button 
            onClick={handleNext}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-bold transition-colors inline-flex items-center gap-2 shadow-md"
          >
            {currentIndex < questions.length - 1 ? 'Siguiente' : 'Ir a Evaluación'} <ArrowRight className="w-5 h-5"/>
          </button>
        </div>
      )}
    </div>
  );
}

function EvaluateTab({ questions, onFinish }) {
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (qIndex, option) => {
    if (isFinished) return;
    setAnswers(prev => ({ ...prev, [qIndex]: option }));
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) correct++;
    });
    const finalScore = Math.round((correct / questions.length) * 100);
    setScore(finalScore);
    setIsFinished(true);
    onFinish(finalScore);
  };

  if (isFinished) {
    return (
      <div className="text-center py-12 animate-fadeIn bg-gray-50 rounded-2xl border border-gray-200">
        <div className="w-24 h-24 mx-auto bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
          <Award className="w-12 h-12" />
        </div>
        <h3 className="text-3xl font-extrabold text-gray-800 mb-2">¡Evaluación Finalizada!</h3>
        <p className="text-gray-600 text-lg mb-6">Tu puntuación es:</p>
        <div className="text-6xl font-black text-indigo-600 mb-8 drop-shadow-sm">{score}%</div>
        <p className="text-gray-600 font-medium max-w-md mx-auto bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          {score >= 80 ? '¡Excelente trabajo! Has dominado este tema a la perfección.' : 
           score >= 50 ? 'Buen esfuerzo, pero te sugiero repasar la teoría para afianzar conceptos.' : 
           'Necesitas seguir practicando. ¡No te rindas, repasa y vuelve a intentarlo!'}
        </p>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn max-w-3xl mx-auto py-4">
      <div className="mb-8 border-l-4 border-indigo-500 pl-4 bg-indigo-50 py-3 pr-4 rounded-r-xl">
        <h3 className="text-xl font-bold text-indigo-900">Evaluación Continua</h3>
        <p className="text-indigo-700 text-sm mt-1">Responde todas las preguntas para calcular tu puntaje final. Esta evaluación te dará XP adicional.</p>
      </div>

      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h4 className="text-lg font-bold text-gray-800 mb-4">{i + 1}. {q.q}</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {q.options.map((opt, j) => (
                <button
                  key={j}
                  onClick={() => handleSelect(i, opt)}
                  className={`p-3.5 rounded-xl border-2 text-sm font-bold transition-all text-center
                    ${answers[i] === opt 
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-md' 
                      : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-indigo-400 hover:bg-white'}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center border-t border-gray-200 pt-8">
        <button 
          onClick={calculateScore}
          disabled={Object.keys(answers).length < questions.length}
          className={`px-10 py-4 rounded-xl font-extrabold text-lg transition-all shadow-lg
            ${Object.keys(answers).length < questions.length 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-[#1D9E75] hover:bg-emerald-600 text-white hover:scale-105'}`}
        >
          Finalizar y Enviar Respuestas
        </button>
        {Object.keys(answers).length < questions.length && (
          <p className="text-sm font-medium text-orange-500 mt-4 flex items-center justify-center gap-2">
             <Star className="w-4 h-4"/> Por favor, responde todas las preguntas para continuar.
          </p>
        )}
      </div>
    </div>
  );
}

// Componente Especial: Ordenar Frases
function WordOrderExercise({ questions, onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState([]);
  const [availableWords, setAvailableWords] = useState([]);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (questions[currentIndex]) {
      const shuffled = [...questions[currentIndex].words].sort(() => Math.random() - 0.5);
      setAvailableWords(shuffled);
      setSelectedWords([]);
    }
  }, [currentIndex, questions]);

  const selectWord = (word, index) => {
    setSelectedWords([...selectedWords, word]);
    const newAvailable = [...availableWords];
    newAvailable.splice(index, 1);
    setAvailableWords(newAvailable);
  };

  const removeWord = (word, index) => {
    const newSelected = [...selectedWords];
    newSelected.splice(index, 1);
    setSelectedWords(newSelected);
    setAvailableWords([...availableWords, word]);
  };

  const checkSentence = () => {
    const userSentence = selectedWords.join(" ");
    const isCorrect = userSentence === questions[currentIndex].answer;
    
    const currentNewScore = isCorrect ? score + 1 : score;
    if (isCorrect) setScore(currentNewScore);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
    } else {
      const finalScore = Math.round((currentNewScore / questions.length) * 100);
      setIsFinished(true);
      onFinish(finalScore);
    }
  };

  if (isFinished) {
    return (
      <div className="text-center py-12 animate-fadeIn bg-gray-50 rounded-2xl border border-gray-200">
        <div className="w-24 h-24 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
          <Award className="w-12 h-12" />
        </div>
        <h3 className="text-3xl font-extrabold text-gray-800 mb-2">¡Práctica Finalizada!</h3>
        <p className="text-gray-600 text-lg mb-6">Puntuación de estructuración (Writing):</p>
        <div className="text-6xl font-black text-green-600 mb-8">{Math.round((score / questions.length) * 100)}%</div>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn max-w-2xl mx-auto py-8 text-center">
      <div className="mb-6 flex justify-between items-center bg-indigo-50 p-4 rounded-xl border border-indigo-100">
         <h3 className="text-xl font-bold text-indigo-900">Ordena las Palabras</h3>
         <span className="text-sm font-bold bg-white px-3 py-1 rounded-full text-indigo-600 shadow-sm">Frase {currentIndex + 1} de {questions.length}</span>
      </div>
      
      <p className="text-gray-600 mb-8">Haz clic en las palabras de abajo para formar la frase correcta en inglés.</p>

      {/* Zona de Construcción */}
      <div className="min-h-[100px] bg-white shadow-inner border-2 border-dashed border-gray-300 rounded-2xl p-6 flex flex-wrap gap-2 justify-center items-center mb-8">
        {selectedWords.length === 0 && <span className="text-gray-400 font-medium">La frase aparecerá aquí...</span>}
        {selectedWords.map((word, i) => (
          <button 
            key={i} 
            onClick={() => removeWord(word, i)}
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-bold shadow-md hover:bg-red-500 hover:scale-105 transition-all"
          >
            {word}
          </button>
        ))}
      </div>

      {/* Palabras Disponibles */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {availableWords.map((word, i) => (
          <button 
            key={i}
            onClick={() => selectWord(word, i)}
            className="bg-white border-2 border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg font-bold shadow-sm hover:border-indigo-400 hover:text-indigo-600 hover:-translate-y-1 transition-all"
          >
            {word}
          </button>
        ))}
      </div>

      <button 
        onClick={checkSentence}
        disabled={availableWords.length > 0}
        className={`px-10 py-4 rounded-xl font-extrabold transition-all flex items-center justify-center mx-auto gap-2 text-lg shadow-lg
          ${availableWords.length > 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none' : 'bg-green-500 hover:bg-green-600 text-white hover:scale-105'}`}
      >
        <CheckCircle className="w-6 h-6"/> {currentIndex < questions.length - 1 ? 'Evaluar y Siguiente' : 'Finalizar Ejercicio'}
      </button>
    </div>
  );
}