// GitHub Pages sirve el repo en /<nombre-del-repo>/, no en la raíz del
// dominio — basePath/assetPrefix solo se activan cuando el workflow de
// deploy pone NEXT_PUBLIC_BASE_PATH, para no romper `npm run dev` en local.
// (Mismo valor que usa `lib/basePath.ts` para los <img src="..."> sueltos.)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export 100% estático: el sitio no tiene backend propio (ver decisión de
  // arquitectura de la Fase 6), así que no necesita el servidor Node de
  // `next start` — GitHub Pages solo sirve archivos.
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
