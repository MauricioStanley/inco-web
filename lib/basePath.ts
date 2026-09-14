/**
 * GitHub Pages sirve este sitio en /inco-web/, no en la raíz del dominio.
 * Next.js reescribe automáticamente las rutas de `next/link` y `next/image`
 * con `basePath`, pero NO toca strings sueltos como `src="/inco-photos/..."`
 * en un `<img>` normal — hay que prefijarlos a mano con esto.
 * `NEXT_PUBLIC_*` para que el valor quede embebido también en el bundle del
 * navegador (no solo en el server/build), ya que varios de estos usos viven
 * en Client Components.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  return path.startsWith("/") ? `${BASE_PATH}${path}` : path;
}
