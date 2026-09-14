import type { Metadata } from "next";

/**
 * Construye metadata de página incluyendo Open Graph, para que compartir un
 * enlace (WhatsApp, Facebook — los canales reales del INCO) muestre el
 * título y la descripción específicos de esa página, no el genérico del
 * sitio.
 */
export function pageMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: { title, description },
  };
}
