export interface PasoMatricula {
  numero: number;
  titulo: string;
  descripcion: string;
  nota?: string;
}

export const pasosMatricula: PasoMatricula[] = [
  {
    numero: 1,
    titulo: "Reserva tu matrícula",
    descripcion: "Regístrate en el formulario de pre-matrícula habilitado por la institución.",
    nota: "[INFORMACIÓN POR VERIFICAR: el sitio actual referencia un código QR para este formulario — se debe obtener del INCO el enlace oficial vigente antes de publicarlo aquí]",
  },
  {
    numero: 2,
    titulo: "Proceso de inducción",
    descripcion: "Asiste a la jornada de inducción para estudiantes de nuevo ingreso, donde se orienta sobre la vida institucional.",
  },
  {
    numero: 3,
    titulo: "Matrícula oficial",
    descripcion: "Presenta la documentación requerida según tu caso (nuevo ingreso, antiguo ingreso o modalidades flexibles) para completar tu matrícula.",
  },
];

export interface CasoMatricula {
  id: string;
  titulo: string;
  requisitos: string[];
}

export const requisitosPorCaso: CasoMatricula[] = [
  {
    id: "nuevo-ingreso",
    titulo: "Nuevo ingreso",
    requisitos: [
      "Certificado de 9° grado o boleta de notas con firma y sello (original y copia).",
      "Partida de nacimiento reciente (original y copia, máximo 3 meses de emisión).",
      "Constancia de conducta (original y copia).",
      "Cuatro fotografías de 3.5cm x 2.5cm, blanco y negro, en papel granulado (pueden tomarse en la institución).",
      "Hoja de inscripción con llenado completo y datos solicitados (letra legible y tinta azul).",
      "Dos fotocopias de DUI del responsable (y del estudiante si es mayor de edad) al 150%.",
    ],
  },
  {
    id: "antiguo-ingreso",
    titulo: "Antiguo ingreso",
    requisitos: [
      "Cuatro fotografías de 3.5cm x 2.5cm, blanco y negro, en papel granulado.",
      "Hoja de inscripción con llenado completo y legible.",
      "Fotocopia de DUI al 150%.",
    ],
  },
  {
    id: "segundo-ano-bachillerato",
    titulo: "Segundo año de bachillerato",
    requisitos: [
      "Cuatro fotografías de 3.5cm x 2.5cm, blanco y negro, en papel granulado (pueden tomarse en la institución).",
      "Boleta de notas SIGES de primer año de bachillerato con materias aprobadas (original y copia).",
      "Hoja de inscripción con llenado completo y datos solicitados (letra legible y tinta azul).",
      "Dos fotocopias de DUI y del responsable (y del estudiante si es mayor de edad) al 150%.",
    ],
  },
  {
    id: "modalidades-flexibles",
    titulo: "Modalidades flexibles",
    requisitos: [
      "Poseer sobre edad.",
      "Presentar el certificado del grado anterior al que se solicita cursar.",
      "Presentar partida de nacimiento en original y reciente.",
      "Presentar fotocopia del DUI (para primero y segundo año de bachillerato).",
    ],
  },
];

export const recepcionDocumentos = {
  titulo: "Para la recepción de documentos",
  puntos: [
    "El estudiante debe asistir acompañado por su padre, madre o responsable.",
  ],
};

export interface FaqItem {
  pregunta: string;
  respuesta: string;
}

export const faqs: FaqItem[] = [
  {
    pregunta: "¿La matrícula tiene algún costo?",
    respuesta:
      "[INFORMACIÓN POR VERIFICAR: el INCO es un centro educativo oficial (público); se debe confirmar directamente con la institución si el proceso de matrícula es gratuito antes de publicar una respuesta definitiva].",
  },
  {
    pregunta: "¿Qué documentos necesito si soy estudiante de nuevo ingreso?",
    respuesta:
      "Certificado de 9° grado o boleta de notas con firma y sello (original y copia), partida de nacimiento reciente, constancia de conducta, cuatro fotografías tamaño 3.5cm x 2.5cm, hoja de inscripción y dos fotocopias de DUI del responsable. Ver el detalle completo en la sección de Requisitos.",
  },
  {
    pregunta: "¿Qué son las Modalidades Flexibles?",
    respuesta:
      "Es un servicio educativo gratuito para los niveles de educación media, dirigido a jóvenes y adultos en situación de sobre edad o vulnerabilidad, para que puedan completar sus once años de escolaridad.",
  },
  {
    pregunta: "¿Dónde reservo mi cupo de pre-matrícula?",
    respuesta:
      "[INFORMACIÓN POR VERIFICAR: se debe confirmar con el INCO el enlace o canal oficial vigente para la pre-matrícula]. Mientras tanto, puedes contactar a la institución directamente por teléfono o WhatsApp — ver la página de Contacto.",
  },
];
