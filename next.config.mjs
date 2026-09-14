// GitHub Pages sirve el repo en /<nombre-del-repo>/, no en la raíz del
// dominio — basePath/assetPrefix solo se activan en ese build (variable de
// entorno puesta por el workflow de deploy) para no romper `npm run dev`.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "inco-web";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export 100% estático: el sitio no tiene backend propio (ver decisión de
  // arquitectura de la Fase 6), así que no necesita el servidor Node de
  // `next start` — GitHub Pages solo sirve archivos.
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
