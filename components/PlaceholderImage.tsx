import { withBasePath } from "@/lib/basePath";

interface PlaceholderImageProps {
  alt: string;
  className?: string;
  ratio?: "video" | "square" | "wide";
  /** Aplica un ligero zoom cuando el contenedor padre tiene la clase `group` en hover. */
  zoomOnGroupHover?: boolean;
  /**
   * Foto real, sacada del sitio/redes oficiales del INCO (ver `content/*`).
   * Cuando se provee, se usa en vez de la foto de banco genérica — sigue sin
   * ser el archivo final en alta resolución que debe entregar el INCO, así
   * que se marca como "Foto: sitio oficial del INCO", no como definitiva.
   */
  src?: string;
}

const ratioClass: Record<NonNullable<PlaceholderImageProps["ratio"]>, string> = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
};

/** Hash simple y estable para que cada `alt` siempre saque la misma foto de referencia. */
function seedFrom(text: string) {
  let hash = 0;
  for (let i = 0; i < text.length; i++) hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  return hash % 1000;
}

/**
 * PROTOTIPO VISUAL: mientras se confirma el material fotográfico oficial en
 * alta resolución, esta casilla muestra:
 * 1. Una foto real del INCO (`src`) reutilizada de su propio sitio/redes
 *    públicas, cuando existe para ese ambiente/actividad — con crédito
 *    visible de que viene de ahí, no es el archivo original en alta res.
 * 2. Si no hay foto real disponible todavía, una foto de banco genérico
 *    (picsum.photos) claramente marcada como "no oficial", solo para poder
 *    juzgar el layout/ritmo visual completo de la página.
 */
export default function PlaceholderImage({
  alt,
  className = "",
  ratio = "video",
  zoomOnGroupHover = false,
  src,
}: PlaceholderImageProps) {
  const seed = seedFrom(alt);
  const imgSrc = src ? withBasePath(src) : `https://picsum.photos/seed/${seed}/1200/800`;
  return (
    <div className={`${ratioClass[ratio]} ${className} relative overflow-hidden rounded-xl`}>
      <img
        src={imgSrc}
        alt={alt}
        className={`h-full w-full object-cover ${
          zoomOnGroupHover ? "transition-transform duration-500 ease-out group-hover:scale-[1.04]" : ""
        }`}
        loading="lazy"
      />
      <span className="absolute bottom-2 left-2 rounded-md bg-ink/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
        {src ? "Foto: sitio oficial del INCO" : "Imagen de referencia — no oficial"}
      </span>
    </div>
  );
}
