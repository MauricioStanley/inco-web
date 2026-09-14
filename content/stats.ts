export interface CifraInstitucional {
  valor: number;
  sufijo?: string;
  etiqueta: string;
}

/**
 * Cifras institucionales para la sección "El INCO en números" (home).
 * Solo se listan aquí las que ya están VERIFICADAS — nada se inventa ni se
 * estima. "Programas académicos" sale directo de `oferta-academica.ts`
 * (son 5 programas reales, ya publicados).
 *
 * Años operando, estudiantes activos y egresados totales siguen pendientes
 * de que la dirección del INCO los confirme (ver pendiente A.1 — la fecha
 * de fundación tiene 3 versiones sin conciliar — y el pendiente E.1 en la
 * lista enviada). `StatsSection` no se muestra hasta tener al menos 2
 * cifras reales que valga la pena mostrar juntas — con una sola cifra
 * suelta no hay "números" que contar, solo un dato aislado.
 */
export const cifrasInstitucionales: CifraInstitucional[] = [
  { valor: 5, etiqueta: "Programas académicos" },
];
