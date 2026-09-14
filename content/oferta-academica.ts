export interface Seccion {
  titulo: string;
  parrafos?: string[];
  lista?: string[];
}

export interface ProgramaAcademico {
  slug: string;
  nombre: string;
  resumen: string;
  duracion: string;
  imagenAlt: string;
  /** Foto real reutilizada del sitio oficial del INCO, cuando existe (ver PlaceholderImage). */
  imagenSrc?: string;
  secciones: Seccion[];
}

export const programasAcademicos: ProgramaAcademico[] = [
  {
    slug: "administrativo-contable",
    nombre: "Técnico Vocacional Administrativo Contable",
    resumen:
      "Forma competencias para diseñar, organizar y controlar información financiera y económica de las operaciones empresariales.",
    duracion: "3 años · Bachillerato Técnico Vocacional",
    imagenAlt: "Estudiantes de la especialidad Administrativo Contable en una feria de emprendimiento",
    imagenSrc: "/inco-photos/administrativo-contable.jpg",
    secciones: [
      {
        titulo: "Objetivo general",
        parrafos: [
          "Desarrollar competencias para diseñar, organizar y controlar información financiera y económica relacionada con las operaciones empresariales.",
          "Aplicando técnicas, herramientas, conocimiento e interpretación correcta de normas, procedimientos, políticas y leyes mercantiles, civiles y tributarias.",
        ],
      },
      {
        titulo: "Objetivos específicos",
        parrafos: [
          "Formar competencias técnicas, humano-sociales, académicas y emprendedoras en el alumnado para continuar estudios superiores.",
          "Formar competencias técnicas, humano-sociales, académicas y emprendedoras en el alumnado que le permitan incorporarse al mundo productivo como empleado o empleador.",
        ],
      },
      {
        titulo: "Puestos de trabajo",
        lista: [
          "Asistente contable",
          "Asistente administrativo",
          "Archivista",
          "Ejecutivo de venta",
          "Servicio al cliente",
          "Recepcionista",
          "Asistente de compras",
          "Impulsador de productos (displays)",
          "Cajero",
          "Planillero",
          "Asistente de recursos humanos",
        ],
      },
    ],
  },
  {
    slug: "desarrollo-de-software",
    nombre: "Técnico Vocacional en Desarrollo de Software",
    resumen:
      "Forma competencias para el análisis, diseño, implementación y seguimiento de aplicaciones de software empresariales.",
    duracion: "3 años · Bachillerato Técnico Vocacional",
    imagenAlt: "Estudiante de la especialidad de Desarrollo de Software presentando un proyecto",
    imagenSrc: "/inco-photos/desarrollo-de-software.jpg",
    secciones: [
      {
        titulo: "Objetivo general",
        parrafos: [
          "Desarrollar competencias para el análisis, diseño, implementación y seguimiento de aplicaciones de software empresariales genéricas y específicas, utilizando estándares de la industria del software y aplicando tecnología orientada a la web y dispositivos móviles.",
        ],
      },
      {
        titulo: "Objetivos específicos",
        parrafos: [
          "Formar competencias técnicas, humano-sociales, académicas y emprendedoras en el alumnado para continuar estudios superiores.",
          "Formar competencias técnicas, humano-sociales, académicas y emprendedoras en el alumnado que le permitan incorporarse al mundo productivo como empleado o empleador.",
        ],
      },
      {
        titulo: "Puestos de trabajo",
        lista: [
          "[INFORMACIÓN POR VERIFICAR: el sitio actual no detalla la lista completa de puestos de trabajo para esta especialidad — confirmar con el INCO antes de publicar]",
        ],
      },
    ],
  },
  {
    slug: "servicios-turisticos",
    nombre: "Técnico Productivo en Servicios Turísticos",
    resumen:
      "Forma competencias para gestionar e implementar actividades relacionadas con el mercado turístico, eventos y hostelería.",
    duracion: "3 años · Bachillerato Técnico Vocacional",
    imagenAlt: "Estudiantes de Servicios Turísticos en una práctica de gastronomía",
    imagenSrc: "/inco-photos/servicios-turisticos.jpg",
    secciones: [
      {
        titulo: "Objetivo general",
        parrafos: [
          "Desarrollar competencias para gestionar e implementar actividades relacionadas con mercado turístico, eventos y congresos, mecanismos de seguridad operacional, emprendedurismo, hostelería y gastronomía en las áreas de potencial turístico: sol y playa, cultura, eventos y congresos, volcanes, gastronomía y turismo rural y agroturismo, aplicando tecnologías de software y redes sociales en la gestión de empresas turísticas.",
        ],
      },
      {
        titulo: "Objetivos específicos",
        parrafos: [
          "Formar competencias técnicas, humano-sociales, académicas y emprendedoras en el alumnado para continuar estudios superiores.",
          "Formar competencias técnicas, humano-sociales, académicas y emprendedoras en el alumnado que le permitan incorporarse al mundo productivo como empleado o empleador.",
        ],
      },
      {
        titulo: "Puestos de trabajo",
        lista: [
          "[INFORMACIÓN POR VERIFICAR: el sitio actual no detalla la lista completa de puestos de trabajo para esta especialidad — confirmar con el INCO antes de publicar]",
        ],
      },
    ],
  },
  {
    slug: "bachillerato-general",
    nombre: "Bachillerato General",
    resumen:
      "Formación integral en materias fundamentales como Matemáticas, Lenguaje, Ciencias Naturales y Estudios Sociales.",
    duracion: "[INFORMACIÓN POR VERIFICAR: duración exacta en años — no confirmada en las fuentes revisadas]",
    imagenAlt: "Estudiantes de Bachillerato General en una actividad escolar",
    imagenSrc: "/inco-photos/bachillerato-general.jpg",
    secciones: [
      {
        titulo: "Enfoque",
        parrafos: [
          "Formación integral en materias fundamentales como Matemáticas, Lenguaje, Ciencias Naturales y Estudios Sociales.",
        ],
      },
      {
        titulo: "Objetivo general",
        parrafos: [
          "Desarrollar competencias para la vida y permitir el acceso a cualquier carrera de educación superior, a diferencia de los bachilleratos técnicos que tienen una duración de tres años.",
        ],
      },
      {
        titulo: "Objetivos específicos",
        parrafos: [
          "Formar competencias técnicas, humano-sociales, académicas y emprendedoras en el alumnado que le permitan continuar estudios superiores.",
        ],
      },
    ],
  },
  {
    slug: "modalidades-flexibles",
    nombre: "Modalidades Flexibles",
    resumen:
      "Servicio educativo gratuito para los niveles de media, dirigido a jóvenes y adultos en situación de sobre edad o vulnerabilidad.",
    duracion: "Variable según nivel a cursar",
    imagenAlt: "Estudiantes de Modalidades Flexibles en un aula",
    imagenSrc: "/inco-photos/modalidades-flexibles.jpg",
    secciones: [
      {
        titulo: "Descripción del servicio",
        parrafos: [
          "Servicio educativo gratuito para los niveles de media, buscado atender a personas jóvenes y adultas en situación de sobre edad y vulnerabilidad para que logren sus once años de escolaridad.",
        ],
      },
      {
        titulo: "Requisitos generales",
        lista: [
          "Poseer sobre edad.",
          "Presentar el certificado del grado anterior al que se solicita cursar.",
          "Presentar partida de nacimiento en original y reciente.",
          "Presentar fotocopia del DUI (para primero y segundo año de bachillerato).",
        ],
      },
    ],
  },
];
