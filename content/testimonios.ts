export interface Testimonio {
  nombre: string;
  /** Slug de `oferta-academica.ts`, para enlazar el testimonio a su programa. */
  programaSlug: string;
  cita: string;
}

/**
 * VACÍO A PROPÓSITO. Un testimonio con nombre real de un estudiante requiere
 * autorización explícita (del estudiante, o de su madre/padre/tutor si es
 * menor de edad — ver pendiente F.1 en la lista enviada a la dirección).
 * Hasta que el INCO confirme esa autorización y comparta las citas reales,
 * este arreglo se queda vacío — `TestimonialsSection` no se renderiza si
 * está vacío, así que no hay ningún hueco visible en el sitio mientras tanto.
 */
export const testimonios: Testimonio[] = [];
