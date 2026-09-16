# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Estudiantes que comparan bachilleratos, buscan requisitos o quieren iniciar su matrícula.
- Estudiantes actuales que buscan actividades y vida institucional.
- Madres, padres y responsables que necesitan información confiable, ubicación y canales oficiales de contacto.

Estos grupos se infieren de los tres accesos principales de la portada y de las rutas existentes; el orden de prioridad entre ellos sigue abierto.

## Product Purpose

Ser la puerta digital oficial del Instituto Nacional de Comercio (INCO): explicar su oferta académica, orientar el proceso de matrícula, mostrar la vida estudiantil y facilitar el contacto con la institución.

El sitio debe convertir interés en una siguiente acción clara —conocer un programa, revisar requisitos, llamar o escribir por WhatsApp— sin sacrificar confianza institucional.

## Positioning

El INCO combina formación media, especialidades técnicas y una identidad estudiantil visible en actividades como la Banda de Paz, las cachiporras y la danza. El sitio debe demostrar esa combinación con contenido e imágenes reales, no con promesas genéricas de educación.

## Operating Context

- Consulta rápida de programas y requisitos de matrícula.
- Decisión compartida entre estudiantes y responsables.
- Contacto directo por teléfono, WhatsApp, redes sociales y ubicación.
- Exploración institucional mediante historia, actividades y recorrido virtual.

## Capabilities and Constraints

- Aplicación existente en Next.js 16, React 19, Tailwind CSS 3 y Framer Motion.
- Rutas para institución, oferta académica, matrícula, vida estudiantil, contacto y recorrido virtual.
- El contenido marcado como `INFORMACIÓN POR VERIFICAR` no debe transformarse en una afirmación publicada.
- No se deben inventar testimonios, estadísticas, fechas históricas, costos, enlaces de prematrícula ni resultados académicos.
- La funcionalidad y el contenido institucional existente se preservan durante el rediseño.

## Brand Commitments

- Nombre: Instituto Nacional de Comercio.
- Siglas: INCO.
- Lema: “Cuna de campeones”.
- Identidad reconocible en verde institucional, dorado, escudo y león.
- El rediseño debe sentirse premium, excepcional y con una coreografía de movimiento inspirada en la claridad y el refinamiento de Apple, sin imitar literalmente su identidad.
- La dirección creativa fue delegada por el usuario con la instrucción: “simplemente sorpréndeme”.

## Evidence on Hand

- Fotografías reales del INCO en `public/inco-photos/` para programas académicos y actividades estudiantiles.
- Contenido institucional y datos de contacto en `content/`.
- Escudo y mascota integrados en el componente de navegación y el favicon.
- El repositorio declara explícitamente que aún no existen testimonios autorizados ni suficientes cifras institucionales verificadas para publicarlos.

## Product Principles

1. La evidencia real del INCO vale más que cualquier claim genérico.
2. Cada recorrido debe dejar una siguiente acción evidente y accesible.
3. La identidad estudiantil debe sentirse viva, contemporánea y orgullosa.
4. La sofisticación visual no puede ocultar requisitos, estados ni información por verificar.
5. El sitio debe conservar legibilidad, rendimiento y dignidad institucional en cualquier tamaño de pantalla.

## Accessibility & Inclusion

Preservar navegación por teclado, enlace para saltar al contenido, foco visible, texto alternativo, contraste suficiente y una experiencia completa con `prefers-reduced-motion` o `prefers-reduced-transparency`.
