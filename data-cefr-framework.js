// data-cefr-framework.js v1.0 — LEOENGLISH
// Marco Común Europeo de Referencia (MCER/CEFR)
// Descriptores oficiales extraídos del documento del Consejo de Europa
// Mapea COMPETENCIAS → DESTREZAS → DESCRIPTORES por nivel → EVIDENCIAS en la plataforma

(function () {
  'use strict';

  // ============================================================
  // ESTRUCTURA MCER COMPLETA
  // ============================================================
  // Basada en: "Marco común europeo de referencia para las lenguas:
  // aprendizaje, enseñanza, evaluación" — Consejo de Europa
  //
  // 6 COMPETENCIAS COMUNICATIVAS:
  //   1. Comprensión auditiva (Listening)
  //   2. Comprensión lectora (Reading)
  //   3. Expresión oral (Speaking)
  //   4. Expresión escrita (Writing)
  //   5. Interacción oral (Spoken Interaction)
  //   6. Interacción escrita (Written Interaction)
  //
  // + 4 COMPETENCIAS LINGÜÍSTICAS:
  //   7. Corrección gramatical
  //   8. Riqueza léxica
  //   9. Dominio de la pronunciación
  //  10. Competencia sociolingüística
  // ============================================================

  const cefrFramework = {

    meta: {
      source: 'Marco Común Europeo de Referencia para las Lenguas — Consejo de Europa',
      levels: ['A1','A2','B1','B2','C1','C2'],
      skills: ['listening','reading','speaking','writing','interaction_oral','interaction_written'],
      linguisticCompetencies: ['grammar','vocabulary','pronunciation','sociolinguistic']
    },

    // ------------------------------------------------------------------ //
    //  DESCRIPTORES CAN-DO POR DESTREZA Y NIVEL                          //
    //  Fuente: Cuadros 1,2,3 del MCER (págs. 30-33) + cap. 4 (págs.47-101)
    // ------------------------------------------------------------------ //

    descriptors: {

      // ---- 1. COMPRENSIÓN AUDITIVA ----
      listening: {
        A1: {
          global: 'Reconoce palabras y expresiones muy básicas que se usan habitualmente, relativas a mí mismo, a mi familia y a mi entorno inmediato cuando se habla despacio y con claridad.',
          canDo: [
            'Comprendo palabras aisladas y frases muy cortas y sencillas.',
            'Identifico el tema de una conversación si se habla muy despacio y con claridad.',
            'Entiendo instrucciones sencillas si van acompañadas de gestos o si me las repiten.'
          ],
          platformEvidence: ['grammar_exercises_a1', 'dictation_a1'],
          cefrRef: 'Cap. 4.4.2.1 — Comprensión auditiva en general'
        },
        A2: {
          global: 'Comprendo frases y el vocabulario más habitual sobre temas de interés personal. Capto la idea principal de avisos breves, claros y sencillos.',
          canDo: [
            'Comprendo lo suficiente para poder enfrentarme a necesidades concretas siempre que la pronunciación sea clara.',
            'Entiendo frases relacionadas con mi familia, compras, lugar de residencia y empleo.',
            'Capto la idea principal de mensajes breves y claros.',
            'Comprendo anuncios y mensajes breves, sencillos y claros.'
          ],
          platformEvidence: ['grammar_exercises_a2', 'dictation_a2', 'vocab_a2'],
          cefrRef: 'Cuadro 2 MCER — Nivel A2'
        },
        B1: {
          global: 'Comprendo las ideas principales cuando el discurso es claro y normal y se tratan asuntos cotidianos del trabajo, la escuela o el tiempo libre.',
          canDo: [
            'Comprendo las ideas principales de muchos programas de radio o televisión cuando la articulación es relativamente lenta y clara.',
            'Entiendo discursos claros y estándar sobre asuntos conocidos del trabajo, la escuela o el tiempo libre.',
            'Comprendo conferencias o charlas sobre temas de mi especialidad si la presentación es clara y estructurada.',
            'Capto los puntos principales de noticias de radio/TV sobre temas actuales.'
          ],
          platformEvidence: ['reading_texts_b1', 'dictation_b1_conditionals', 'grammar_b1_modules'],
          cefrRef: 'Cap. 4.4.2.1 — Comprensión auditiva B1 + Cuadro 2'
        },
        B2: {
          global: 'Comprendo discursos y conferencias extensas, e incluso sigo líneas argumentales complejas siempre que el tema sea relativamente conocido.',
          canDo: [
            'Comprendo casi todas las noticias de televisión y programas sobre temas actuales.',
            'Entiendo la mayoría de las películas en un nivel de lengua estándar.',
            'Comprendo conferencias e informes con argumentos complejos sobre temas de mi especialidad.',
            'Sigo líneas argumentales complejas en discursos extensos.'
          ],
          platformEvidence: ['reading_texts_b2', 'dictation_b2_complex', 'grammar_b2_modules'],
          cefrRef: 'Cuadro 2 MCER — Nivel B2 + Cap. 4.4.2.1'
        },
        C1: {
          global: 'Comprendo discursos extensos incluso cuando no están estructurados con claridad. Reconozco expresiones idiomáticas y cambios de registro.',
          canDo: [
            'Comprendo sin mucho esfuerzo los programas de televisión y las películas.',
            'Reconozco una amplia gama de expresiones idiomáticas y coloquiales.',
            'Aprecio cambios de registro en el habla.',
            'Sigo discursos extensos aunque las relaciones estén solo implícitas.'
          ],
          platformEvidence: ['reading_texts_c1', 'dictation_c1_literary', 'grammar_c1_modules'],
          cefrRef: 'Cuadro 2 MCER — Nivel C1'
        }
      },

      // ---- 2. COMPRENSIÓN LECTORA ----
      reading: {
        A1: {
          global: 'Comprendo palabras y nombres conocidos y frases muy sencillas en letreros, carteles y catálogos.',
          canDo: [
            'Leo y entiendo letreros, instrucciones y frases muy cortas.',
            'Comprendo mi nombre, números y palabras clave en textos muy simples.',
            'Entiendo formularios sencillos con información personal.'
          ],
          platformEvidence: ['vocab_topics_a1', 'reading_a1'],
          cefrRef: 'Cuadro 2 MCER — Nivel A1'
        },
        A2: {
          global: 'Leo textos muy breves y sencillos. Encuentro información específica en escritos cotidianos como anuncios, prospectos, menús y horarios.',
          canDo: [
            'Comprendo textos breves y sencillos en el trabajo o en la vida cotidiana.',
            'Leo anuncios, menús, horarios y carteles.',
            'Entiendo cartas personales breves y sencillas.',
            'Comprendo instrucciones básicas sobre aparatos de uso frecuente.'
          ],
          platformEvidence: ['vocab_topics_a2', 'reading_a2'],
          cefrRef: 'Cuadro 2 MCER — Nivel A2 + Cap. 4.4.2.2'
        },
        B1: {
          global: 'Comprendo textos redactados en lengua habitual y cotidiana o relacionada con el trabajo. Entiendo la descripción de acontecimientos, sentimientos y deseos en cartas personales.',
          canDo: [
            'Leo artículos e informes sobre temas actuales donde los autores adoptan posturas concretas.',
            'Comprendo cartas personales con descripción de sentimientos y deseos.',
            'Entiendo instrucciones sencillas escritas con claridad.',
            'Leo y entiendo los puntos principales de textos auténticos sobre asuntos cotidianos.'
          ],
          platformEvidence: ['reading_texts_b1', 'writing_exercises_b1'],
          cefrRef: 'Cuadro 2 MCER — Nivel B1'
        },
        B2: {
          global: 'Leo artículos e informes relativos a problemas contemporáneos. Comprendo prosa literaria contemporánea.',
          canDo: [
            'Leo y comprendo artículos especializados fuera de mi área si puedo usar el diccionario.',
            'Comprendo la prosa literaria contemporánea.',
            'Busco con rapidez en textos extensos y complejos para localizar detalles relevantes.',
            'Leo correspondencia relativa a mi especialidad captando fácilmente el sentido.'
          ],
          platformEvidence: ['reading_texts_b2', 'writing_exercises_b2'],
          cefrRef: 'Cuadro 2 MCER — Nivel B2'
        },
        C1: {
          global: 'Comprendo textos largos y complejos de carácter literario o basados en hechos, apreciando distinciones de estilo. Comprendo artículos especializados e instrucciones técnicas largas.',
          canDo: [
            'Leo e interpreto textos abstractos estructuralmente complejos.',
            'Aprecio distinciones de estilo en textos literarios y especializados.',
            'Comprendo artículos técnicos fuera de mi especialidad.',
            'Interpreto información implícita en textos complejos.'
          ],
          platformEvidence: ['reading_texts_c1', 'writing_exercises_c1'],
          cefrRef: 'Cuadro 2 MCER — Nivel C1'
        }
      },

      // ---- 3. EXPRESIÓN ORAL ----
      speaking: {
        A1: {
          global: 'Utilizo expresiones y frases sencillas para describir mi lugar de residencia y las personas que conozco.',
          canDo: [
            'Me presento y presento a otras personas.',
            'Formulo y contesto preguntas sobre detalles personales.',
            'Hablo sobre mí mismo usando frases memorizadas.',
            'Leo un comunicado breve y preparado.'
          ],
          platformEvidence: ['grammar_a1', 'vocab_a1'],
          cefrRef: 'Cuadro 2 MCER + Cap. 4.4.1 Hablar en público A1'
        },
        A2: {
          global: 'Utilizo una serie de expresiones y frases para describir con términos sencillos a mi familia y otras personas, mis condiciones de vida y mi trabajo.',
          canDo: [
            'Hago presentaciones breves y ensayadas sobre temas cotidianos.',
            'Puedo responder a preguntas breves y sencillas.',
            'Describo mi familia, condiciones de vida, estudios o trabajo.',
            'Expreso necesidades inmediatas usando frases sencillas.'
          ],
          platformEvidence: ['grammar_a2', 'vocab_a2'],
          cefrRef: 'Cap. 4.4.1 Hablar en público A2'
        },
        B1: {
          global: 'Sé enlazar frases de forma sencilla con el fin de describir experiencias, hechos, mis sueños, esperanzas y ambiciones.',
          canDo: [
            'Hago una descripción sencilla de temas de interés presentándolos como una secuencia.',
            'Expongo un punto de vista de forma clara con razonable fluidez.',
            'Realizo una presentación breve y preparada sobre temas de mi especialidad.',
            'Respondo a preguntas complementarias con cierta dificultad si se habla rápido.'
          ],
          platformEvidence: ['grammar_b1_modules', 'writing_free_b1'],
          cefrRef: 'Cap. 4.4.1 Hablar en público B1 + Cuadro 2'
        },
        B2: {
          global: 'Hago descripciones claras y detalladas sobre una amplia serie de asuntos relacionados con mi especialidad, ampliando y defendiendo mis ideas con aspectos complementarios.',
          canDo: [
            'Realizo descripciones y presentaciones claras y sistemáticamente desarrolladas.',
            'Resalto adecuadamente aspectos significativos y detalles relevantes.',
            'Defiendo un punto de vista sobre temas generales con argumentos y ejemplos.',
            'Evalúo ventajas y desventajas de distintos puntos de vista.'
          ],
          platformEvidence: ['grammar_b2_modules', 'writing_free_b2'],
          cefrRef: 'Cap. 4.4.1 Expresión oral en general B2'
        },
        C1: {
          global: 'Realizo descripciones y presentaciones claras y detalladas sobre temas complejos, integrando otros temas, desarrollando ideas concretas y terminando con una conclusión adecuada.',
          canDo: [
            'Selecciono del repertorio lingüístico la frase más apropiada para iniciar mis comentarios.',
            'Produzco un discurso claro, fluido y bien estructurado.',
            'Controlo estructuras organizativas, conectores y mecanismos de cohesión.',
            'Formulo ideas y opiniones con precisión adaptándome al oyente.'
          ],
          platformEvidence: ['grammar_c1_modules', 'writing_free_c1'],
          cefrRef: 'Cap. 4.4.1 Expresión oral en general C1'
        }
      },

      // ---- 4. EXPRESIÓN ESCRITA ----
      writing: {
        A1: {
          global: 'Soy capaz de escribir una postal corta y sencilla, por ejemplo para enviar felicitaciones. Sé rellenar formularios con datos personales.',
          canDo: [
            'Relleno formularios con datos personales (nombre, dirección, nacionalidad).',
            'Escribo postales y notas muy cortas y sencillas.',
            'Copio palabras y frases aisladas.'
          ],
          platformEvidence: ['writing_a1', 'vocab_a1'],
          cefrRef: 'Cuadro 2 MCER — Nivel A1 Escritura'
        },
        A2: {
          global: 'Soy capaz de escribir notas y mensajes breves y sencillos. Escribo una carta personal muy sencilla, de agradecimiento, por ejemplo.',
          canDo: [
            'Escribo notas y mensajes breves sobre necesidades inmediatas.',
            'Redacto cartas personales muy sencillas de agradecimiento.',
            'Describo brevemente mi entorno, personas que conozco y condiciones de vida.'
          ],
          platformEvidence: ['writing_a2', 'error_correction_a2'],
          cefrRef: 'Cuadro 2 MCER — Nivel A2 Escritura'
        },
        B1: {
          global: 'Soy capaz de escribir textos sencillos y cohesionados sobre temas que me son conocidos o que son de interés personal.',
          canDo: [
            'Escribo relaciones de experiencias describiendo sentimientos y reacciones.',
            'Produzco cartas personales con descripción de sentimientos y deseos.',
            'Escribo una reseña de una película, libro u obra de teatro.',
            'Redacto textos cohesionados simples usando conectores habituales.'
          ],
          platformEvidence: ['writing_exercises_b1', 'free_writing_b1'],
          cefrRef: 'Cap. 4.4.1.2 Escritura creativa B1 + Cuadro 2'
        },
        B2: {
          global: 'Soy capaz de escribir textos claros y detallados sobre una amplia gama de temas relacionados con mi especialidad.',
          canDo: [
            'Escribo ensayos o informes transmitiendo información o argumentos con claridad.',
            'Elaboro textos claros y detallados sobre temas de mi especialidad.',
            'Escribo descripciones claras de hechos reales o imaginarios.',
            'Redacto la relación entre ideas, siguiendo normas establecidas del género elegido.'
          ],
          platformEvidence: ['writing_exercises_b2', 'free_writing_b2'],
          cefrRef: 'Cap. 4.4.1.2 Escritura creativa B2'
        },
        C1: {
          global: 'Soy capaz de expresarme en textos bien estructurados y con cierta extensión, exponiendo puntos de vista con cierto detalle.',
          canDo: [
            'Escribo descripciones y textos imaginarios de forma clara, detallada y bien estructurada.',
            'Uso un estilo convincente, personal y natural apropiado para los lectores.',
            'Produzco textos claros y fluidos en un estilo apropiado.',
            'Sintetizo información y argumentos procedentes de varias fuentes.'
          ],
          platformEvidence: ['writing_exercises_c1', 'free_writing_c1'],
          cefrRef: 'Cap. 4.4.1.2 Escritura creativa C1'
        }
      },

      // ---- 5. INTERACCIÓN ORAL ----
      interaction_oral: {
        A1: {
          global: 'Puedo participar en una conversación de forma sencilla siempre que la otra persona esté dispuesta a repetir lo que ha dicho o a decirlo con otras palabras, a una velocidad más lenta, y me ayude a formular lo que intento decir.',
          canDo: [
            'Establezco contacto social: saludos, despedidas, presentaciones y agradecimientos.',
            'Planteo y contesto preguntas sobre detalles personales.',
            'Interactúo de forma sencilla si el interlocutor me ayuda.'
          ],
          platformEvidence: ['grammar_a1', 'vocab_a1'],
          cefrRef: 'Cap. 4.4.3 Interacción oral en general A1'
        },
        A2: {
          global: 'Puedo comunicarme en tareas sencillas y habituales que requieren un intercambio sencillo y directo de información sobre actividades y asuntos cotidianos.',
          canDo: [
            'Participo en conversaciones con razonable comodidad en situaciones estructuradas.',
            'Intercambio información sobre temas cotidianos predecibles.',
            'Me desenvuelvo en intercambios sencillos y habituales sin mucho esfuerzo.',
            'Planteo y contesto preguntas e intercambio ideas sobre temas conocidos.'
          ],
          platformEvidence: ['grammar_a2', 'vocab_a2'],
          cefrRef: 'Cap. 4.4.3 Interacción oral en general A2'
        },
        B1: {
          global: 'Sé desenvolverme en casi todas las situaciones que se me presentan cuando viajo donde se habla esa lengua. Puedo participar espontáneamente en una conversación sobre temas cotidianos.',
          canDo: [
            'Inicio, mantengo y termino conversaciones de manera adecuada, aunque no siempre con elegancia.',
            'Expreso y respondo a sentimientos como sorpresa, felicidad, tristeza e interés.',
            'Colaboro en debates sobre temas cotidianos confirmando mi comprensión.',
            'Abordo de forma improvisada conversaciones sobre asuntos cotidianos.'
          ],
          platformEvidence: ['grammar_b1_modules', 'writing_free_b1'],
          cefrRef: 'Cap. 4.4.3 Interacción oral B1'
        },
        B2: {
          global: 'Puedo participar en una conversación con cierta fluidez y espontaneidad, lo que posibilita la comunicación normal con hablantes nativos.',
          canDo: [
            'Me relaciono con hablantes nativos con naturalidad y fluidez.',
            'Participo activamente en debates informales evaluando alternativas y planteando hipótesis.',
            'Tomo el turno de palabra de forma eficaz y lo mantengo con habilidad.',
            'Especulo sobre causas, consecuencias y situaciones hipotéticas.'
          ],
          platformEvidence: ['grammar_b2_modules', 'writing_free_b2'],
          cefrRef: 'Cap. 4.4.3 Conversación formal y reuniones de trabajo B2'
        },
        C1: {
          global: 'Me expreso con fluidez y espontaneidad sin tener que buscar de una manera muy obvia las expresiones adecuadas.',
          canDo: [
            'Argumento mi postura formalmente con argumentos persuasivos y respondo a preguntas complejas.',
            'Sigo el ritmo de un debate con facilidad, incluso sobre temas abstractos y complejos.',
            'Selecciono la frase más apropiada para tomar o mantener la palabra con fluidez.',
            'Produzco un discurso claro, fluido y bien estructurado con control de cohesión.'
          ],
          platformEvidence: ['grammar_c1_modules', 'writing_free_c1'],
          cefrRef: 'Cap. 4.4.3 Conversación formal C1'
        }
      },

      // ---- 6. INTERACCIÓN ESCRITA ----
      interaction_written: {
        A1: { global: 'Sé cómo solicitar y ofrecer información sobre detalles personales por escrito.', canDo: ['Escribo formularios básicos con información personal.','Intercambio detalles personales en notas muy breves.'], platformEvidence: ['writing_a1'], cefrRef: 'Cap. 4.4.3.2 Interacción escrita A1' },
        A2: { global: 'Escribo notas breves y sencillas sobre temas relativos a áreas de necesidad inmediata.', canDo: ['Escribo notas y mensajes breves.','Respondo por escrito a preguntas sencillas sobre hechos.'], platformEvidence: ['writing_a2'], cefrRef: 'Cap. 4.4.3.2 Interacción escrita A2' },
        B1: { global: 'Transmito información e ideas sobre temas concretos, compruebo información y pregunto sobre problemas con razonable precisión.', canDo: ['Escribo cartas y notas personales pidiendo o transmitiendo información sencilla.','Redacto correos electrónicos con información y preguntas claras.'], platformEvidence: ['writing_exercises_b1'], cefrRef: 'Cap. 4.4.3.2 Interacción escrita B1' },
        B2: { global: 'Expreso noticias y puntos de vista con eficacia cuando escribo y establezco una relación con los puntos de vista de otras personas.', canDo: ['Escribo con eficacia sobre asuntos complejos relacionándome con el destinatario.','Redacto correos y cartas formales con claridad y precisión.'], platformEvidence: ['writing_exercises_b2'], cefrRef: 'Cap. 4.4.3.2 Interacción escrita B2' },
        C1: { global: 'Me expreso con claridad y precisión y me relaciono con el destinatario con flexibilidad y eficacia.', canDo: ['Escribo correspondencia clara y precisa con uso flexible de la lengua.','Incluyo usos de carácter emocional, alusivo o humorístico.'], platformEvidence: ['writing_exercises_c1'], cefrRef: 'Cap. 4.4.3.2 Interacción escrita C1' }
      }
    },


    // ------------------------------------------------------------------ //
    //  COMPETENCIAS LINGÜÍSTICAS                                          //
    //  Fuente: Cap. 5 MCER — Escalas ilustrativas (págs. 125-131)        //
    // ------------------------------------------------------------------ //

    linguisticScales: {

      grammar: {
        label: 'Corrección gramatical',
        cefrRef: 'Cap. 5.2.1.2 + Cuadro 3 MCER',
        descriptors: {
          A1: 'Muestra solo un control limitado de unas pocas estructuras gramaticales sencillas y de modelos de oraciones dentro de un repertorio memorizado.',
          A2: 'Utiliza algunas estructuras sencillas correctamente, pero todavía comete errores básicos sistemáticamente.',
          B1: 'Se comunica con razonable corrección en situaciones habituales; el control gramatical es bueno aunque con influencia evidente de la lengua materna.',
          B2: 'Buen control gramatical; puede cometer deslices esporádicos y errores no sistemáticos pero son escasos y a menudo los corrige.',
          C1: 'Mantiene un alto grado de corrección gramatical de modo consistente; los errores son escasos y apenas se notan.',
          C2: 'Mantiene un control gramatical consistente sobre un repertorio lingüístico complejo incluso cuando su atención se centra en otras actividades.'
        }
      },

      vocabulary: {
        label: 'Riqueza de vocabulario',
        cefrRef: 'Cap. 5.2.1.1 — Competencia léxica',
        descriptors: {
          A1: 'Tiene un repertorio básico de palabras y frases aisladas relativas a situaciones concretas.',
          A2: 'Tiene vocabulario suficiente para llevar a cabo transacciones cotidianas con temas y situaciones conocidas.',
          B1: 'Tiene suficiente vocabulario para expresarse con algún circunloquio sobre la mayoría de los temas pertinentes de su vida diaria.',
          B2: 'Dispone de un amplio vocabulario sobre asuntos relativos a su especialidad y temas generales.',
          C1: 'Tiene un buen dominio de un amplio repertorio léxico que le permite superar con soltura sus deficiencias mediante circunloquios.',
          C2: 'Tiene un buen dominio de un repertorio léxico muy amplio, incluidas expresiones idiomáticas y coloquiales.'
        }
      },

      pronunciation: {
        label: 'Dominio de la pronunciación',
        cefrRef: 'Cap. 5.2.1.4 — Competencia fonológica',
        descriptors: {
          A1: 'La pronunciación de un repertorio muy limitado de palabras y frases aprendidas puede ser comprendida con cierto esfuerzo por un hablante nativo.',
          A2: 'La pronunciación es generalmente bastante clara para ser comprendida pese a un evidente acento extranjero.',
          B1: 'La pronunciación es claramente inteligible aunque a veces resulte evidente el acento extranjero.',
          B2: 'Ha adquirido una pronunciación y una entonación claras y naturales.',
          C1: 'Varía la entonación y coloca el énfasis de la oración correctamente para expresar matices sutiles de significado.',
          C2: 'Como C1 — control total con plena naturalidad.'
        }
      },

      sociolinguistic: {
        label: 'Competencia sociolingüística',
        cefrRef: 'Cap. 5.2.2 — Competencia sociolingüística',
        descriptors: {
          A1: 'Establece relaciones sociales básicas mediante expresiones de cortesía sencillas y memorizadas.',
          A2: 'Utiliza las formas habituales de saludar y dirigirse a los demás amablemente.',
          B1: 'Reconoce la mayoría de las formas lingüísticas más importantes de lengua coloquial y estándar.',
          B2: 'Se expresa con convicción, claridad y amabilidad en un registro formal o informal apropiado.',
          C1: 'Reconoce una amplia gama de expresiones idiomáticas y coloquiales y aprecia cambios de registro.',
          C2: 'Tiene buen dominio de expresiones idiomáticas y coloquiales con plena conciencia del nivel connotativo.'
        }
      }
    },


    // ------------------------------------------------------------------ //
    //  PERFILES DE NIVEL — ¿Qué se espera al completar cada nivel?       //
    // ------------------------------------------------------------------ //

    levelProfiles: {
      A1: {
        title: 'A1 — Acceso',
        cefrLabel: 'Usuario básico — nivel inicial',
        globalDescriptor: 'Es capaz de comprender y utilizar expresiones cotidianas de uso muy frecuente, así como frases sencillas destinadas a satisfacer necesidades inmediatas.',
        communicativeGoal: 'Puede presentarse a sí mismo y a otros e intercambiar información personal básica.',
        typicalTasks: ['Saludos y presentaciones','Números, precios y horarios','Identificación personal','Instrucciones básicas'],
        grammarTargets: ['Present Simple (to be, have)','Articles','Basic pronouns','Numbers 1-100','Common adjectives'],
        vocabSize: '~500 palabras receptivas',
        cefrRef: 'MCER p. 36 — Nivel A1 Acceso'
      },
      A2: {
        title: 'A2 — Plataforma',
        cefrLabel: 'Usuario básico — nivel elemental',
        globalDescriptor: 'Es capaz de comprender frases y expresiones de uso frecuente relacionadas con áreas de experiencia especialmente relevantes (información básica sobre sí mismo y su familia, compras, lugares de interés, ocupaciones, etc.).',
        communicativeGoal: 'Puede comunicarse en tareas sencillas y cotidianas que requieren intercambios de información directa.',
        typicalTasks: ['Compras y transacciones','Pedir y dar información','Describir entorno inmediato','Interacción social básica'],
        grammarTargets: ['Past Simple','Comparatives','Can/Could','Going to (future)','Frequency adverbs'],
        vocabSize: '~1000 palabras receptivas',
        cefrRef: 'MCER p. 36 — Nivel A2 Plataforma'
      },
      B1: {
        title: 'B1 — Umbral',
        cefrLabel: 'Usuario independiente — nivel intermedio',
        globalDescriptor: 'Es capaz de comprender los puntos principales de textos claros y en lengua estándar sobre cuestiones cotidianas o de su trabajo. Puede desenvolverse en la mayor parte de las situaciones que pueden surgir durante un viaje.',
        communicativeGoal: 'Puede producir textos sencillos y coherentes sobre temas que le son familiares o en los que tiene un interés personal.',
        typicalTasks: ['Narrar experiencias','Expresar opiniones y deseos','Describir planes y sueños','Interactuar en viajes'],
        grammarTargets: ['Past Perfect','Reported Speech','Passive Voice','Relative Clauses','Second Conditional','Wish/If only','Modal Perfects'],
        vocabSize: '~2500 palabras receptivas',
        cefrRef: 'MCER p. 37 — Nivel B1 Umbral'
      },
      B2: {
        title: 'B2 — Avanzado',
        cefrLabel: 'Usuario independiente — nivel avanzado',
        globalDescriptor: 'Es capaz de entender las ideas principales de textos complejos que traten de temas tanto concretos como abstractos. Puede relacionarse con hablantes nativos con cierto grado de fluidez y naturalidad.',
        communicativeGoal: 'Puede producir textos claros y detallados sobre una amplia gama de temas, defendiendo un punto de vista con argumentos y ejemplos.',
        typicalTasks: ['Debates y argumentación','Escritura académica','Análisis de textos complejos','Negociación y persuasión'],
        grammarTargets: ['All Perfect Tenses','Third/Mixed Conditionals','Inversion','Cleft Sentences','Advanced Passives','Discourse Markers','Hypothetical Language'],
        vocabSize: '~5000 palabras receptivas',
        cefrRef: 'MCER p. 37 — Nivel B2 Avanzado'
      },
      C1: {
        title: 'C1 — Dominio operativo eficaz',
        cefrLabel: 'Usuario competente — nivel avanzado alto',
        globalDescriptor: 'Es capaz de comprender una amplia variedad de textos extensos y con cierto nivel de exigencia, así como reconocer en ellos sentidos implícitos. Se expresa de forma fluida y espontánea sin esfuerzo aparente.',
        communicativeGoal: 'Puede usar el idioma de forma flexible y eficaz para fines sociales, académicos y profesionales.',
        typicalTasks: ['Análisis crítico de textos','Escritura académica y profesional','Presentaciones formales','Negociación compleja'],
        grammarTargets: ['Mixed/Inverted Conditionals','Nominalization','Fronting/Focusing','Advanced Modality','Ellipsis/Substitution','Register Shift','Hedging C1','Complex Noun Phrases','Advanced Connectors','Stylistic Devices'],
        vocabSize: '~8000 palabras receptivas',
        cefrRef: 'MCER p. 37 — Nivel C1 Dominio operativo eficaz'
      }
    },


    // ------------------------------------------------------------------ //
    //  MAPEO: ACTIVIDAD DE PLATAFORMA → COMPETENCIA MCER                 //
    // ------------------------------------------------------------------ //

    activityMapping: {
      grammar:  { skillsCovered: ['speaking','writing','interaction_oral','interaction_written'], linguisticFocus: ['grammar'], cefrLabel: 'Competencia gramatical' },
      reading:  { skillsCovered: ['reading'], linguisticFocus: ['vocabulary','sociolinguistic'], cefrLabel: 'Comprensión lectora' },
      writing:  { skillsCovered: ['writing','interaction_written'], linguisticFocus: ['grammar','vocabulary'], cefrLabel: 'Expresión escrita / Interacción escrita' },
      vocab:    { skillsCovered: ['speaking','reading','writing'], linguisticFocus: ['vocabulary'], cefrLabel: 'Competencia léxica' },
      business: { skillsCovered: ['speaking','writing','interaction_oral','interaction_written'], linguisticFocus: ['vocabulary','sociolinguistic'], cefrLabel: 'Lengua con fines específicos — ámbito profesional' }
    },


    // ------------------------------------------------------------------ //
    //  EVIDENCIAS POR NIVEL — qué necesita completar cada estudiante     //
    // ------------------------------------------------------------------ //

    evidenceRequirements: {
      A1: { grammar: { modules: 5, minScore: 70 }, reading: { texts: 2, minScore: 65 }, writing: { exercises: 2, minScore: 65 }, vocab: { topics: 3, minScore: 70 }, totalXP: 300 },
      A2: { grammar: { modules: 10, minScore: 75 }, reading: { texts: 4, minScore: 70 }, writing: { exercises: 4, minScore: 70 }, vocab: { topics: 5, minScore: 75 }, totalXP: 800 },
      B1: { grammar: { modules: 10, minScore: 80 }, reading: { texts: 6, minScore: 75 }, writing: { exercises: 6, minScore: 75 }, vocab: { topics: 8, minScore: 80 }, totalXP: 2000 },
      B2: { grammar: { modules: 10, minScore: 80 }, reading: { texts: 6, minScore: 78 }, writing: { exercises: 6, minScore: 78 }, vocab: { topics: 8, minScore: 80 }, totalXP: 4000 },
      C1: { grammar: { modules: 10, minScore: 82 }, reading: { texts: 6, minScore: 80 }, writing: { exercises: 6, minScore: 80 }, vocab: { topics: 8, minScore: 82 }, totalXP: 7000 }
    }

  };


  // ============================================================
  // EXPORTACIÓN
  // ============================================================
  if (typeof window !== 'undefined') {
    window.cefrFramework = cefrFramework;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cefrFramework };
  }

}());
