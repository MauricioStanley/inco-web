import { ubicacion } from "./institucion";

export const contacto = {
  telefono: "2270-2852",
  telefonoHref: "tel:+50322702852",
  whatsapp: "6266-4722",
  whatsappHref: "https://wa.me/50362664722",
  facebookHref: "https://www.facebook.com/share/1URUeQoYUC/?mibextid=wwXIfr",
  instagramHref: "https://www.instagram.com/institutonacionaldecomercio",
  // El sitio actual muestra un ícono de TikTok sin enlace. Se confirmó que
  // existe una cuenta pública "@inco.enco", pero no se enlaza aquí hasta que
  // el INCO confirme que es su cuenta oficial (regla de no inventar datos).
  tiktokHref: null as string | null,
  direccion: ubicacion.direccion,
  mapsEmbedSrc:
    "https://www.google.com/maps?q=" +
    encodeURIComponent(ubicacion.direccion) +
    "&output=embed",
};
