# LeoEnglish — Plataforma de aprendizaje de inglés MCER

Plataforma web de aprendizaje de inglés basada en el **Marco Común Europeo de Referencia (MCER)**,
con ruta de aprendizaje adaptativa, diagnóstico de nivel, homologación automática y expansión completa
de contenidos A1 → C1. Construida sobre Firebase (Auth + Firestore) y JavaScript vanilla.

---

## Estructura del repositorio

```
leoenglish/
│
├── index.html                      ← Punto de entrada. Contiene toda la UI (pantallas, modales,
│                                     overlays). Los <script> cargan los datos ANTES que app.js.
│
├── style.css                       ← Hoja de estilos principal. Tokens de diseño, dark mode,
│                                     componentes (cards, modales, feedback, progress, dots...).
│
├── firebase-config.js              ← Inicialización de Firebase (Auth, Firestore).
│                                     App Check listo para activar (ver comentarios dentro).
│                                     ⚠ Restringir la API key en Google Cloud Console.
│
├── app.js                          ← Lógica principal de la aplicación.
│                                     Ruta única, diagnóstico, homologación, XP, progreso,
│                                     renderizado de ejercicios (choice, write, order, fill,
│                                     free, dictation, error, transform), Firebase sync.
│
│   ── DATOS DE GRAMÁTICA ──────────────────────────────────────────────────
│
├── data-grammar.js                 ← Módulos de gramática A1 y A2 (original).
│                                     Incluye grammarLearningPath, competencyMap,
│                                     prerequisites, aliases y grammarDiagnosticBlueprint.
│
├── data-grammar-b1.js              ← Módulos de gramática B1 (10 módulos, 200 ejercicios).
│                                     Fusión automática con window.modulesData y grammarLearningPath.
│
├── data-grammar-b2.js              ← Módulos de gramática B2 (10 módulos, 200 ejercicios).
│
├── data-grammar-c1.js              ← Módulos de gramática C1 (10 módulos, 200 ejercicios).
│
│   ── DATOS DE READING & WRITING ──────────────────────────────────────────
│
├── data-reading-writing.js         ← Textos de reading y ejercicios de writing A1/A2 (original).
│                                     Incluye readingDiagnosticBlueprint, writingDiagnosticBlueprint,
│                                     diagnosticTest (main_placement_test_a1_a2).
│                                     ⚠ Contiene blueprints con guards y reconstrucción DOMContentLoaded.
│
├── data-reading-writing-b1.js      ← Reading (6 textos) + Writing (6 ejercicios) B1.
│
├── data-reading-writing-b2.js      ← Reading (6 textos) + Writing (6 ejercicios) B2.
│
├── data-reading-writing-c1.js      ← Reading (6 textos) + Writing (6 ejercicios) C1.
│
│   ── DATOS DE VOCABULARIO ────────────────────────────────────────────────
│
├── data-vocab.js                   ← Tópicos de vocabulario A1/A2 (original).
│
├── data-vocab-b1.js                ← 8 tópicos × 20 palabras B1 (160 palabras).
│
├── data-vocab-b2.js                ← 8 tópicos × 20 palabras B2 (160 palabras).
│
└── data-vocab-c1.js                ← 8 tópicos × 20 palabras C1 (160 palabras).
```

---

## Orden de carga de scripts (crítico)

Los archivos de datos deben cargarse en este orden exacto, **antes** de `app.js`:

```html
<!-- Gramática: A1/A2 → B1 → B2 → C1 -->
<script src="data-grammar.js"></script>
<script src="data-grammar-b1.js"></script>
<script src="data-grammar-b2.js"></script>
<script src="data-grammar-c1.js"></script>

<!-- Reading & Writing: A1/A2 → B1 → B2 → C1 -->
<script src="data-reading-writing.js"></script>
<script src="data-reading-writing-b1.js"></script>
<script src="data-reading-writing-b2.js"></script>
<script src="data-reading-writing-c1.js"></script>

<!-- Vocabulario: A1/A2 → B1 → B2 → C1 -->
<script src="data-vocab.js"></script>
<script src="data-vocab-b1.js"></script>
<script src="data-vocab-b2.js"></script>
<script src="data-vocab-c1.js"></script>

<!-- Lógica principal — SIEMPRE AL FINAL, type="module" -->
<script type="module" src="app.js"></script>
```

> **¿Por qué este orden?**
> Los archivos B1/B2/C1 fusionan sus datos en `window.modulesData`, `window.grammarLearningPath`,
> etc. mediante `Object.assign` y guards `alreadyAdded`. Si se cargan después de `app.js`,
> los datos no estarán disponibles cuando la app se inicialice.

---

## Contenido por nivel

### Gramática

| Archivo               | Nivel | Módulos | Ejercicios | Items diagnóstico |
|-----------------------|-------|---------|------------|-------------------|
| data-grammar.js       | A1/A2 | ~15     | ~300       | incluidos         |
| data-grammar-b1.js    | B1    | 10      | 200        | 20                |
| data-grammar-b2.js    | B2    | 10      | 200        | 20                |
| data-grammar-c1.js    | C1    | 10      | 200        | 20                |

**Módulos B1:** Past Perfect · Reported Speech · Passive Voice · Relative Clauses ·
Second Conditional · Wish/If only · Modal Perfects · Connectors · Gerunds vs Infinitives · Question Tags

**Módulos B2:** All Perfect Tenses · Third & Mixed Conditionals · Inversion · Cleft Sentences ·
Advanced Passives · Discourse Markers · Hypothetical Language · Participle Clauses ·
Emphasis Devices · Complex Questions

**Módulos C1:** Mixed & Inverted Conditionals · Nominalization · Fronting & Focusing ·
Advanced Modality · Ellipsis & Substitution · Register Shift · Hedging C1 ·
Complex Noun Phrases · Advanced Connectors · Stylistic Devices

### Reading & Writing

| Archivo                       | Nivel | Textos reading | Ejercicios writing |
|-------------------------------|-------|----------------|--------------------|
| data-reading-writing.js       | A1/A2 | incluidos      | incluidos          |
| data-reading-writing-b1.js    | B1    | 6 (7 preguntas c/u) | 6           |
| data-reading-writing-b2.js    | B2    | 6 (7 preguntas c/u) | 6           |
| data-reading-writing-c1.js    | C1    | 6 (7 preguntas c/u) | 6           |

**Tipos de ejercicio writing:** error correction · transform · order · free writing · dictation

### Vocabulario

| Archivo          | Nivel | Tópicos | Palabras |
|------------------|-------|---------|----------|
| data-vocab.js    | A1/A2 | incluidos | incluidas |
| data-vocab-b1.js | B1    | 8       | 160      |
| data-vocab-b2.js | B2    | 8       | 160      |
| data-vocab-c1.js | C1    | 8       | 160      |

**Tópicos B1:** Work · Environment · Health · Media & Technology · Education · Travel · Society · Emotions

**Tópicos B2:** Economy · Politics · Science · Culture & Arts · Psychology · Environment Policy · Law · Academic Discourse

**Tópicos C1:** Philosophy · Academic Writing · Power & Ideology · Linguistics · Ethics · Science & Society · Literature & Rhetoric · Advanced Economics

---

## Bugs corregidos en esta versión

| Archivo                    | Bug                                                       | Fix aplicado |
|----------------------------|-----------------------------------------------------------|--------------|
| app.js                     | `isChecking` compartido entre módulos al navegar rápido   | Reset en `showScreen` |
| app.js                     | `readingTimer` no cancelado al cambiar texto              | `clearTimeout` + snapshot en `openReading` |
| app.js                     | `drawOrderUI` botón Evaluar activo sin palabras           | Guard `Array.isArray` + `orderSel.length > 0` |
| app.js                     | `checkChoice` resaltado por `textContent` (fragile)       | Resaltado por índice en 3 funciones |
| app.js                     | `finishWriting` no encuentra UI para tipo `fill`          | Lookup dinámico por `currentWritingExercise.type` |
| app.js                     | `normalizeAnswer` no cubre todos los apóstrofes Unicode   | Pipeline unificado `\u2018\u2019\u02BC...` |
| app.js                     | Flash de contenido en móvil lento                         | `app-loader` spinner + ocultar en `onAuthStateChanged` |
| app.js                     | `speechSynthesis.speak()` silenciado en iOS               | `requestAnimationFrame` en dispositivos iOS |
| app.js                     | Homologación agresiva sobre actividades sin cobertura     | `coveredByDiagnostic` Set + guard de cobertura |
| data-reading-writing.js    | `grammarDiagnosticBlueprint` puede ser `undefined`        | Guards + reconstrucción en `DOMContentLoaded` |
| firebase-config.js         | API key sin restricción de dominio                        | App Check listo + instrucciones en comentarios |

---

## Activar Firebase App Check (recomendado antes del lanzamiento)

1. Ve a [Firebase Console](https://console.firebase.google.com) → tu proyecto → **App Check**
2. Registra tu app web con **reCAPTCHA v3** como proveedor
3. Registra tu dominio en [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
4. Copia tu **Site Key** y pégala en `firebase-config.js` donde dice `TU_RECAPTCHA_V3_SITE_KEY`
5. Descomenta el bloque `initializeAppCheck(...)` en `firebase-config.js`
6. En Firebase Console → App Check → activa **enforcement** para Auth y Firestore
7. Restricción adicional: en [Google Cloud Console](https://console.cloud.google.com) → APIs & Services → Credentials → restringe la API key a tu dominio

---

## Despliegue en Firebase Hosting

```bash
# Instalar Firebase CLI si no lo tienes
npm install -g firebase-tools

# Login y seleccionar proyecto
firebase login
firebase use english-leo

# Desplegar
firebase deploy --only hosting
```

Todos los archivos van en la raíz del directorio `public/` (o el que configures en `firebase.json`).

---

## Variables de entorno / seguridad

- La `apiKey` de Firebase es pública por diseño (es una clave de cliente), pero **debe restringirse** al dominio de producción desde Google Cloud Console.
- Los datos sensibles (datos de usuario) están protegidos por **Firestore Security Rules** — revisa que tus reglas sólo permitan leer/escribir al usuario autenticado sus propios datos.
- Activa **App Check** antes de ir a producción.

---

*LeoEnglish v5.0 — MCER A1 → C1 — Anthropic Claude*

---

## Actualización v5.1 — MCER + Business English + Gamificación

### Nuevos archivos

| Archivo | Descripción |
|---|---|
| `data-cefr-framework.js` | Framework MCER completo: descriptores Can-Do por nivel y destreza, escalas lingüísticas, perfiles de nivel, evidencias requeridas |
| `data-business-english.js` | 13 módulos Business English opcionales para B1/B2/C1 |

### Nuevas pantallas en la app

**Mi Portfolio MCER** (`showScreen('cefr-portfolio')`)
- Nivel actual con descriptor MCER oficial
- Mapa visual de niveles A1→C1 con progreso
- 4 destrezas con descriptores Can-Do y barra de avance
- 4 competencias lingüísticas (gramática, vocabulario, pronunciación, sociolingüística)
- Evidencias requeridas para completar el nivel con checklist
- Objetivos gramaticales del nivel actual
- Referencia MCER en cada sección

**Business English** (`showScreen('business-english')`)
- Desbloqueo progresivo por nivel completado
- B1: Emails, Meetings, Presentations, Negotiations, Reports, Vocabulary (6 módulos, 116 ejercicios)
- B2: Advanced Writing, Advanced Negotiations, Advanced Presentations, Finance Vocabulary (4 módulos)
- C1: Executive Communication, Strategic Writing, C1 Vocabulary (3 módulos)
- Integración con el sistema de XP y progreso existente

### Alineación MCER

Cada actividad de la plataforma está ahora mapeada a descriptores oficiales del MCER:

| Actividad | Competencias MCER cubiertas |
|---|---|
| Gramática | Expresión oral, escrita, interacción · Corrección gramatical |
| Reading | Comprensión lectora · Competencia léxica |
| Writing | Expresión escrita · Interacción escrita |
| Vocabulario | Competencia léxica · Todas las destrezas |
| Business English | Lengua con fines específicos (Cap. 4.1.2) · Interacción profesional |

### Escalas de evaluación por nivel (evidencias mínimas)

| Nivel | Gramática | Reading | Writing | Vocabulario | XP mínimo |
|---|---|---|---|---|---|
| A1 | 5 módulos ≥70% | 2 textos ≥65% | 2 ejerc. ≥65% | 3 tópicos ≥70% | 300 |
| A2 | 10 módulos ≥75% | 4 textos ≥70% | 4 ejerc. ≥70% | 5 tópicos ≥75% | 800 |
| B1 | 10 módulos ≥80% | 6 textos ≥75% | 6 ejerc. ≥75% | 8 tópicos ≥80% | 2000 |
| B2 | 10 módulos ≥80% | 6 textos ≥78% | 6 ejerc. ≥78% | 8 tópicos ≥80% | 4000 |
| C1 | 10 módulos ≥82% | 6 textos ≥80% | 6 ejerc. ≥80% | 8 tópicos ≥82% | 7000 |

### Orden final de scripts (completo)

```html
<script src="data-grammar.js"></script>
<script src="data-grammar-b1.js"></script>
<script src="data-grammar-b2.js"></script>
<script src="data-grammar-c1.js"></script>
<script src="data-reading-writing.js"></script>
<script src="data-reading-writing-b1.js"></script>
<script src="data-reading-writing-b2.js"></script>
<script src="data-reading-writing-c1.js"></script>
<script src="data-vocab.js"></script>
<script src="data-vocab-b1.js"></script>
<script src="data-vocab-b2.js"></script>
<script src="data-vocab-c1.js"></script>
<script src="data-cefr-framework.js"></script>
<script src="data-business-english.js"></script>
<script type="module" src="app.js"></script>
```
