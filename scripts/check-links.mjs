// Rastreador simple de enlaces internos para pruebas de humo (Fase 10).
// Visita cada ruta conocida del sitio, extrae sus enlaces <a href="..."> y
// verifica que cada ruta interna responda 200. No requiere dependencias
// nuevas (usa fetch nativo de Node).

const BASE = "http://localhost:3000";

const rutasConocidas = [
  "/",
  "/institucion",
  "/institucion/historia",
  "/institucion/ubicacion",
  "/oferta-academica",
  "/oferta-academica/administrativo-contable",
  "/oferta-academica/desarrollo-de-software",
  "/oferta-academica/servicios-turisticos",
  "/oferta-academica/bachillerato-general",
  "/oferta-academica/modalidades-flexibles",
  "/matricula",
  "/matricula/requisitos",
  "/matricula/faq",
  "/vida-estudiantil",
  "/vida-estudiantil/banda-de-paz",
  "/vida-estudiantil/cachiporras",
  "/vida-estudiantil/deportes",
  "/vida-estudiantil/danza-folclorica",
  "/vida-estudiantil/danza-moderna",
  "/contacto",
];

const visitedInternal = new Set();
const externalLinks = new Set();
const broken = [];

function extractHrefs(html) {
  const hrefs = [];
  const re = /href="([^"]+)"/g;
  let m;
  while ((m = re.exec(html))) hrefs.push(m[1]);
  return hrefs;
}

async function checkRoute(path) {
  const url = BASE + path;
  const res = await fetch(url);
  if (!res.ok) {
    broken.push({ path, status: res.status, foundOn: "ruta conocida" });
    return null;
  }
  return res.text();
}

for (const ruta of rutasConocidas) {
  const html = await checkRoute(ruta);
  if (!html) continue;
  visitedInternal.add(ruta);

  for (const href of extractHrefs(html)) {
    if (href.startsWith("http://") || href.startsWith("https://")) {
      if (!href.includes("localhost")) externalLinks.add(href);
      continue;
    }
    if (href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("#")) continue;
    const clean = href.split("#")[0].split("?")[0];
    if (!clean || visitedInternal.has(clean) || rutasConocidas.includes(clean)) continue;

    const res = await fetch(BASE + clean);
    if (!res.ok) {
      broken.push({ path: clean, status: res.status, foundOn: ruta });
    }
    visitedInternal.add(clean);
  }
}

// Ruta inexistente debe devolver 404 (verifica app/not-found.tsx)
const notFoundCheck = await fetch(BASE + "/esta-ruta-no-existe-123");

console.log("=== Rutas internas visitadas:", visitedInternal.size, "===");
console.log("=== Enlaces externos encontrados ===");
for (const link of externalLinks) console.log(" -", link);
console.log("=== Página 404 para ruta inexistente ===");
console.log(" status:", notFoundCheck.status, notFoundCheck.status === 404 ? "OK" : "‼ ESPERADO 404");
console.log("=== Enlaces internos rotos ===");
if (broken.length === 0) {
  console.log(" Ninguno. ✅");
} else {
  for (const b of broken) console.log(` ‼ ${b.path} -> ${b.status} (encontrado en ${b.foundOn})`);
}
