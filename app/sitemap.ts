import type { MetadataRoute } from "next";
import { programasAcademicos } from "@/content/oferta-academica";
import { actividades } from "@/content/actividades";

// Requerido por `output: "export"` — sitemap.xml se genera una vez en build,
// no por request (no hay servidor Node en GitHub Pages).
export const dynamic = "force-static";

// TODO: reemplazar por el dominio definitivo una vez el INCO lo confirme.
const BASE_URL = "https://www.inco.edu.sv";

export default function sitemap(): MetadataRoute.Sitemap {
  const rutasFijas = [
    "",
    "/institucion",
    "/institucion/historia",
    "/institucion/ubicacion",
    "/oferta-academica",
    "/matricula",
    "/matricula/requisitos",
    "/matricula/faq",
    "/vida-estudiantil",
    "/contacto",
  ];

  const rutasProgramas = programasAcademicos.map((p) => `/oferta-academica/${p.slug}`);
  const rutasActividades = actividades.map((a) => `/vida-estudiantil/${a.slug}`);

  return [...rutasFijas, ...rutasProgramas, ...rutasActividades].map((ruta) => ({
    url: `${BASE_URL}${ruta}`,
    lastModified: new Date(),
  }));
}
