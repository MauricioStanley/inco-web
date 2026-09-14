export interface Actividad {
  slug: string;
  nombre: string;
  resumen: string;
  imagenAlt: string;
  /** Foto real reutilizada del sitio oficial del INCO, cuando existe (ver PlaceholderImage). */
  imagenSrc?: string;
  objetivoGeneral?: string;
  objetivosEspecificos?: string[];
  notaVerificacion?: string;
}

export const actividades: Actividad[] = [
  {
    slug: "banda-de-paz",
    nombre: "Banda de Paz",
    resumen: "Una banda marcial histórica del INCO, con más de una generación de estudiantes formados en ella.",
    imagenAlt: "Estudiantes de la Banda de Paz del INCO desfilando",
    imagenSrc: "/inco-photos/banda-de-paz.jpg",
    objetivoGeneral:
      "Incentivar el sentido de pertenencia de la comunidad educativa mediante la organización e implementación de una banda marcial como un espacio de formación integral y crecimiento personal para los estudiantes.",
    objetivosEspecificos: [
      "Introducir al estudiante en un proceso de conocimiento musical básico desde la lúdica y la gramática musical, con la ayuda de instrumentos de percusión, instrumentos de viento, expresión corporal y desarrollo de grupo en la banda de paz.",
      "Generar espacios de aprovechamiento del tiempo libre, logrando la integración familiar y social en torno a la banda.",
    ],
  },
  {
    slug: "cachiporras",
    nombre: "Cachiporras",
    resumen: "Grupo de cachiporras del INCO, presente en desfiles y actos institucionales.",
    imagenAlt: "Grupo de Cachiporras del INCO en un desfile",
    imagenSrc: "/inco-photos/cachiporras.jpg",
    notaVerificacion:
      "[INFORMACIÓN POR VERIFICAR: el sitio actual no detalla el objetivo general ni específico de esta actividad — confirmar con el INCO antes de publicar el contenido completo]",
  },
  {
    slug: "deportes",
    nombre: "Deportes",
    resumen: "Programa deportivo estudiantil del INCO.",
    imagenAlt: "Estudiantes del INCO practicando deporte",
    notaVerificacion:
      "[INFORMACIÓN POR VERIFICAR: el sitio actual no detalla el objetivo general ni específico, ni las disciplinas ofrecidas — confirmar con el INCO antes de publicar el contenido completo]",
  },
  {
    slug: "danza-folclorica",
    nombre: "Danza Folclórica",
    resumen: "Grupo de danza folclórica del INCO, parte de la vida cultural estudiantil.",
    imagenAlt: "Grupo de Danza Folclórica del INCO en presentación",
    imagenSrc: "/inco-photos/danza-folclorica.jpg",
    notaVerificacion:
      "[INFORMACIÓN POR VERIFICAR: el sitio actual no detalla el objetivo general ni específico de esta actividad — confirmar con el INCO antes de publicar el contenido completo]",
  },
  {
    slug: "danza-moderna",
    nombre: "Danza Moderna",
    resumen: "Grupo de danza moderna del INCO, parte de la vida cultural estudiantil.",
    imagenAlt: "Grupo de Danza Moderna del INCO en presentación",
    notaVerificacion:
      "[INFORMACIÓN POR VERIFICAR: el sitio actual no detalla el objetivo general ni específico de esta actividad — confirmar con el INCO antes de publicar el contenido completo]",
  },
];
