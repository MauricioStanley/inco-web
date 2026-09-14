import type { ProgramaAcademico } from "./oferta-academica";

type Slug = ProgramaAcademico["slug"];

export interface QuizOption {
  texto: string;
  /** Slug del programa que gana puntos con esta respuesta, o null si es neutral. */
  puntosPara: Slug | null;
  peso?: number;
}

export interface QuizPregunta {
  pregunta: string;
  opciones: QuizOption[];
}

/**
 * Quiz de afinidad, no de aptitud: agrupa intereses/gustos declarados contra
 * los 5 programas reales de `content/oferta-academica.ts`. La pregunta 4
 * pesa más fuerte a propósito — situación de vida (sobre edad, o querer
 * formación general) es un filtro más determinante que una preferencia de
 * materia favorita.
 */
export const quizPreguntas: QuizPregunta[] = [
  {
    pregunta: "¿Qué te divierte más en tu tiempo libre?",
    opciones: [
      { texto: "Resolver problemas en la computadora, apps o videojuegos", puntosPara: "desarrollo-de-software" },
      { texto: "Llevar cuentas claras, organizar gastos o un negocio", puntosPara: "administrativo-contable" },
      { texto: "Planear salidas, conocer lugares y culturas nuevas", puntosPara: "servicios-turisticos" },
      { texto: "Un poco de todo — todavía no me decido", puntosPara: "bachillerato-general" },
    ],
  },
  {
    pregunta: "En un trabajo en equipo, normalmente terminas...",
    opciones: [
      { texto: "Armando o programando la parte técnica", puntosPara: "desarrollo-de-software" },
      { texto: "Organizando el presupuesto y las tareas del grupo", puntosPara: "administrativo-contable" },
      { texto: "Coordinando la logística y animando al equipo", puntosPara: "servicios-turisticos" },
      { texto: "Ayudando donde haga falta, me adapto", puntosPara: "bachillerato-general" },
    ],
  },
  {
    pregunta: "¿Qué materia te llama más la atención?",
    opciones: [
      { texto: "Informática y tecnología", puntosPara: "desarrollo-de-software" },
      { texto: "Matemática aplicada y contabilidad", puntosPara: "administrativo-contable" },
      { texto: "Geografía, idiomas o historia", puntosPara: "servicios-turisticos" },
      { texto: "Todas por igual", puntosPara: "bachillerato-general" },
    ],
  },
  {
    pregunta: "¿Cuál describe mejor tu situación ahora mismo?",
    opciones: [
      {
        texto: "Estoy fuera de la edad típica o no pude continuar mis estudios a tiempo",
        puntosPara: "modalidades-flexibles",
        peso: 3,
      },
      { texto: "Quiero graduarme con un título técnico específico, no solo bachillerato general", puntosPara: null },
      { texto: "Prefiero una formación amplia que no me cierre puertas", puntosPara: "bachillerato-general", peso: 2 },
      { texto: "Aún no sé qué quiero — decido según mis gustos", puntosPara: null },
    ],
  },
];
