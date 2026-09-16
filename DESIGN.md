---
name: "Instituto Nacional de Comercio"
description: "Future Lab institucional: evidencia estudiantil real, precisión óptica y orgullo INCO."
colors:
  primary: "#176244"
  primary-dark: "#06271D"
  brass: "#C6A046"
  brass-dark: "#927126"
  brass-light: "#E7D08D"
  carbon-ink: "#101714"
  ink-soft: "#4E5D56"
  mineral-white: "#F9F9F7"
  mineral-alt: "#F1F3EF"
  etched-border: "#D9DED8"
  footer-green: "#041F17"
  pure-white: "#FFFFFF"
typography:
  display:
    fontFamily: "Bodoni Moda, Baskerville, serif"
    fontSize: "clamp(3.7rem, 7.6vw, 7rem)"
    fontWeight: 600
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bodoni Moda, Baskerville, serif"
    fontSize: "clamp(2.8rem, 5.5vw, 5.25rem)"
    fontWeight: 600
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Bodoni Moda, Baskerville, serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  action:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "normal"
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "0.18em"
rounded:
  focus: "0.35rem"
  plaque: "1.1rem"
  panorama: "1.5rem"
  lens: "2rem"
  full: "999px"
spacing:
  2xs: "0.5rem"
  xs: "0.75rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "3rem"
  section-sm: "6rem"
  section-md: "7rem"
  section-lg: "9rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.pure-white}"
    typography: "{typography.action}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.5rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.pure-white}"
    typography: "{typography.action}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.5rem"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.primary-dark}"
    typography: "{typography.action}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.5rem"
    height: "48px"
  button-ghost:
    backgroundColor: "rgba(255, 255, 255, 0.04)"
    textColor: "{colors.pure-white}"
    typography: "{typography.action}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.5rem"
    height: "48px"
  text-link:
    textColor: "{colors.primary-dark}"
    typography: "{typography.action}"
    padding: "0.45rem 0"
  nav-satin:
    backgroundColor: "color-mix(in srgb, #F9F9F7 78%, transparent)"
    textColor: "{colors.primary-dark}"
    padding: "0 2.5rem"
    height: "76px"
  program-plaque:
    backgroundColor: "rgba(6, 39, 29, 0.76)"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.plaque}"
    padding: "1rem 1.25rem"
  guided-path-row:
    backgroundColor: "{colors.mineral-white}"
    textColor: "{colors.primary-dark}"
    padding: "1.75rem 0"
  contact-panel:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.lens}"
    padding: "4rem"
---

# Design System: Instituto Nacional de Comercio

## Overview

**Creative North Star: "El Laboratorio Óptico Institucional"**

INCO se presenta como una institución de precisión construida con evidencia real de sus estudiantes. El sistema combina la disciplina de un laboratorio futuro con el orgullo de una institución pública: blanco mineral, verde botella, tinta carbón y latón contenido forman un entorno luminoso donde la fotografía documental es la prueba, no el adorno.

La interfaz evita el repertorio escolar genérico de hero promocional y cuadrícula de tarjetas. En su lugar usa grandes lentes fotográficas, secuencias editoriales, reglas grabadas, controles de vidrio satinado y una jerarquía tipográfica monumental. La densidad es serena y la sofisticación siempre deja visibles la información, los estados y la siguiente acción.

**Key Characteristics:**

- Evidencia estudiantil real a escala protagonista.
- Jerarquía editorial monumental con soporte sans limpio.
- Blanco mineral, verde botella, tinta carbón y latón usado con moderación.
- Reglas finas y secuencias abiertas en lugar de rejillas de tarjetas repetidas.
- Profundidad óptica mediante recorte, desenfoque, superposición y vidrio satinado.
- Movimiento continuo, sobrio e interrumpible que conserva una experiencia estática completa.

## Colors

La paleta se siente mineral e institucional: los verdes cargan autoridad, el latón firma momentos selectos y los neutros cálidos mantienen la luz.

### Primary

- **Verde Botella INCO** (`primary`): acción principal, títulos activos, énfasis académico y controles circulares.
- **Verde Cámara Oscura** (`primary-dark`): campos inmersivos, texto de máxima autoridad y fondos que sostienen fotografía.

### Secondary

- **Latón Ceremonial** (`brass`): acentos breves, barridos de luz y botones secundarios.
- **Latón Grabado** (`brass-dark`): subrayados activos, puntos de separación y detalles finos sobre fondos claros.
- **Latón Iluminado** (`brass-light`): etiquetas y datos sobre campos verdes u oscuros.

### Neutral

- **Tinta Carbón** (`carbon-ink`): texto principal sobre superficies claras.
- **Tinta Suave** (`ink-soft`): párrafos, explicaciones y metadatos secundarios.
- **Blanco Mineral** (`mineral-white`): terreno base luminoso y fondo predominante.
- **Mineral Alterno** (`mineral-alt`): cambio tonal entre capítulos sin introducir otra tarjeta.
- **Regla Grabada** (`etched-border`): divisores finos y límites de baja intensidad.
- **Verde de Archivo** (`footer-green`): cierre institucional y pie de página.
- **Blanco Óptico** (`pure-white`): texto y destellos sobre superficies oscuras.

### Named Rules

**The Restrained Brass Rule.** El latón señala jerarquía o ceremonia; nunca domina un capítulo completo ni compite con la fotografía.

**The Mineral Ground Rule.** Las superficies claras parten del blanco mineral; el blanco puro se reserva para contraste sobre verde y para reflejos ópticos.

## Typography

**Display Font:** Bodoni Moda (con Baskerville y serif como respaldo)  
**Body Font:** Manrope (con Arial y sans-serif como respaldo)  
**Label Font:** Manrope

**Character:** Bodoni Moda aporta autoridad editorial, silueta memorable y orgullo institucional. Manrope mantiene navegación, acciones y explicaciones precisas, contemporáneas y fáciles de escanear.

### Hierarchy

- **Display:** reservado para el lema y momentos de identidad; tamaño fluido, peso seminegrita, interlineado muy compacto y tracking negativo.
- **Headline:** títulos de capítulo amplios, de dos o tres líneas como máximo, con respiración generosa alrededor.
- **Title:** nombres de programas, rutas y subtítulos editoriales; mantiene autoridad sin competir con los titulares.
- **Body:** Manrope en tamaño base o amplio, interlineado relajado y medidas de lectura contenidas, normalmente entre 34rem y 68ch.
- **Action:** Manrope en negrita para botones y enlaces decisivos; la claridad precede a la ornamentación.
- **Label:** Manrope en mayúsculas, espaciado amplio y tamaño pequeño para categorías, datos y señales de navegación.

### Named Rules

**The Monument and Instrument Rule.** Bodoni habla como monumento; Manrope funciona como instrumento. No intercambiar sus responsabilidades.

**The Tight Display Rule.** Los grandes titulares usan líneas compactas y tracking negativo; nunca se convierten en bloques estrechos de muchas líneas.

## Layout

El sistema alterna dos escalas: un contenedor de contenido de 1280px para capítulos editoriales y una carcasa de 1440px para navegación, hero y grandes lentes fotográficas. Los márgenes laterales parten de 24px y crecen en pantallas amplias; las secciones principales usan un ritmo vertical de 96px, 112px y 144px según el breakpoint.

La composición de escritorio favorece divisiones asimétricas cercanas a 52/48, 1.04/0.96 y 0.82/1.18. El móvil colapsa a una secuencia vertical donde el mensaje precede a la evidencia fotográfica, las acciones siguen siendo alcanzables y las filas editoriales sustituyen cualquier cuadrícula comprimida. Los puntos de cambio dominantes son 640px, 1024px y 1280px.

Las fotografías pueden llegar al borde de su carcasa y usar proporciones 4:3, 5:4 o panorámicas nativas. El espacio negativo es estructural: separa capítulos, sostiene titulares monumentales y hace que las reglas finas sean legibles.

**The Sequence Over Grid Rule.** Cuando varias opciones compiten por atención, usar una secuencia editorial con reglas y un foco fotográfico compartido antes que una cuadrícula de tarjetas equivalentes.

## Elevation & Depth

La profundidad es híbrida y escasa. Las superficies editoriales permanecen planas; las sombras verdes y cálidas aparecen en controles, lentes fotográficas, placas translúcidas y paneles de cierre. El sistema crea distancia principalmente mediante recorte, gradientes, desenfoque, superposición y `backdrop-filter`, no apilando rectángulos blancos flotantes.

### Shadow Vocabulary

- **Card Ambient:** doble sombra verde, corta y difusa, para superficies fotográficas contenidas.
- **Card Hover:** una extensión más alta y profunda de la sombra ambiental para interacción real.
- **Button Lift:** sombra compacta bajo controles primarios; aumenta cuando el control se eleva 2px.
- **Brass Glow:** sombra cálida y contenida para acciones secundarias en latón.
- **Satin Navigation:** borde inferior interior y una sombra exterior apenas visible sólo después del scroll.
- **Optical Plaque:** sombra verde densa bajo placas translúcidas sobre fotografía.

### Named Rules

**The Flat Until Optical Rule.** Una superficie permanece plana salvo que represente una lente, un control accionable o una capa de vidrio sobre evidencia fotográfica.

**The Green Shadow Rule.** La profundidad se tiñe con el verde oscuro institucional; se evitan sombras negras genéricas y halos decorativos.

## Shapes

La forma general es de gran escala y bajo artificio. Los campos y franjas pueden ser rectos o llegar al borde; las fotografías contenidas usan curvas amplias de 24px a 32px; las placas ópticas usan 17.6px; los controles táctiles y botones son cápsulas completas. Los divisores son líneas de un píxel con verde a baja opacidad.

Los círculos se reservan para flechas, iconos sociales y control móvil. El foco visible combina un contorno mineral con un anillo verde y un radio pequeño, de modo que la accesibilidad se percibe como parte del instrumento y no como una excepción.

**The Scale Determines Radius Rule.** Las superficies grandes reciben curvas amplias o ningún radio; los controles pequeños usan cápsulas sólo cuando mejoran la ergonomía.

## Components

### Buttons

Los botones se sienten precisos y táctiles, con una elevación breve y sin rebote ornamental.

- **Shape:** cápsula completa, altura mínima de 48px y padding horizontal cómodo.
- **Primary:** Verde Botella INCO con texto blanco, sombra compacta y barrido de luz sutil en la acción principal del hero.
- **Secondary:** Latón Ceremonial con texto Verde Cámara Oscura para acciones de contacto o apoyo.
- **Ghost:** vidrio oscuro translúcido con borde blanco tenue para acciones que viven sobre campos verdes.
- **Hover / Focus:** elevación de 2px, transición al verde profundo y foco visible de alto contraste; al presionar, vuelve al plano y se comprime ligeramente.

### Text Links

Los enlaces editoriales usan peso fuerte y una regla de latón que parte corta y se extiende al pasar el puntero. Nunca imitan un segundo botón principal.

### Cards / Containers

Las tarjetas genéricas no son el patrón base. Las fotografías protagonistas usan lentes amplias con radios de 24px a 32px, gradientes de legibilidad y sombras verdes; los paneles oscuros de cierre usan el mismo radio amplio. Los grupos de opciones se organizan con divisores tintados y padding vertical, no con cajas independientes.

### Navigation

La navegación es una barra fina de vidrio satinado de 76px con escudo, palabra INCO, descriptor institucional y un único CTA de matrícula. Los enlaces de escritorio son compactos; el activo se identifica con una regla de latón. En móvil, el menú se convierte en una hoja mineral con filas amplias, divisores verdes y acción principal al final.

### Program Plaques

Las placas sobre fotografía usan Verde Cámara Oscura translúcido, borde blanco delicado, desenfoque de fondo y una sombra óptica profunda. La etiqueta superior es pequeña, mayúscula y espaciada; el dato clave en latón iluminado queda separado del nombre del programa.

### Academic Path Rows

Cada ruta académica es una fila editorial con título Bodoni, resumen Manrope y un control circular al final. Hover y foco activan simultáneamente el título, la imagen compartida y la flecha; esa coordinación reemplaza una colección de tarjetas aisladas.

### Contact Panel

El cierre de conversión es un campo Verde Cámara Oscura de gran radio con gradientes ambientales contenidos. Mantiene un titular monumental a la izquierda y acciones de llamada o WhatsApp a la derecha, sin añadir testimonios, cifras ni adornos que compitan con el siguiente paso.

## Do's and Don'ts

### Do:

- **Do** hacer que la fotografía real de estudiantes sea la evidencia protagonista de cada capítulo importante.
- **Do** usar reglas verdes finas, cambios tonales y espacio negativo para organizar opciones relacionadas.
- **Do** reservar el latón para estados activos, datos selectos, subrayados y acciones secundarias.
- **Do** mantener una siguiente acción evidente y un foco visible de alto contraste en cualquier tamaño de pantalla.
- **Do** reducir el movimiento y la transparencia a una composición estática completa cuando el sistema lo solicite.

### Don't:

- **Don't** volver al hero institucional genérico seguido por una cuadrícula de tarjetas equivalentes.
- **Don't** encerrar cada bloque de contenido en una tarjeta blanca flotante con sombra gris.
- **Don't** usar fotografía de stock, claims inventados o adornos abstractos cuando existe evidencia real del INCO.
- **Don't** convertir el latón en un fondo dominante ni usar múltiples acentos saturados en una misma vista.
- **Don't** usar Bodoni para texto funcional pequeño ni Manrope para reemplazar la voz monumental de los grandes titulares.
