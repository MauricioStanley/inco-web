export const identidad = {
  nombre: "Instituto Nacional de Comercio",
  siglas: "INCO",
  lema: "Cuna de campeones",
};

/**
 * Video corto de bienvenida (30-60s, del director o de estudiantes reales —
 * ver pendiente D.2 en la lista enviada a la dirección). `null` mientras no
 * lo tengamos: `WelcomeVideo` no se renderiza con `src` vacío.
 */
export const videoBienvenidaSrc: string | null = null;

export const mision =
  "Formar bachilleres integrales con altos principios morales, destrezas y habilidades técnicas que les permitan integrarse a la sociedad y desempeñarse eficientemente en el campo laboral, académico y emprendedor, a través de un equipo docente especializado, competente y actualizado. Así mismo, crear dentro de la institución un ambiente agradable de aprendizaje y convivencia social.";

export const vision =
  "Ser, en educación media, la institución rectora en el área comercial con el Bachillerato Técnico Vocacional Administrativo Contable, Desarrollo de Software, Servicios Turísticos, Bachillerato General y Bachillerato en Modalidades Flexibles. Bachilleres con capacidad competitiva al mundo empresarial y emprendedor, orientados además para elegir una carrera de educación superior que les permita lograr el éxito personal y profesional.";

/**
 * La fecha de fundación tiene dos versiones no conciliadas encontradas durante
 * la investigación (Fase 2): 1955 como ENCO / renombrado INCO en 1997 (fuente:
 * sitio institucional anterior del INCO, con cita de decreto) frente a 1975
 * (fuente: directorios de terceros, sin respaldo). No se publica una cifra
 * definitiva hasta que el INCO la confirme.
 */
export const historia = {
  confirmada: false,
  notaVerificacion:
    "Estamos confirmando con la dirección del INCO los datos exactos de fundación y evolución histórica de la institución. Esta sección se completará con la información oficial verificada.",
  hallazgosPreliminares: [
    "Una fuente institucional previa del INCO indica que fue creado como Escuela Nacional de Comercio (ENCO) en 1955, y que adoptó el nombre de Instituto Nacional de Comercio (INCO) en 1997.",
    "Otras fuentes de directorios educativos indican el año 1975 como fecha de creación.",
  ],
};

export const ubicacion = {
  direccion: "Final Calle Campos, Avenida Barberena, San Jacinto, San Salvador, El Salvador",
  referencia: "Barrio San Jacinto, San Salvador",
};
