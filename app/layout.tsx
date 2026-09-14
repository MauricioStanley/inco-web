import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/motion/MotionProvider";
import FloatingActions from "@/components/FloatingActions";
import { identidad } from "@/content/institucion";
import { contacto } from "@/content/contacto";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
/**
 * Serif editorial para títulos (antes Sora, una sans). Newsreader tiene eje
 * óptico (`opsz`) — el navegador ajusta el trazo automáticamente entre texto
 * y tamaños grandes de display, así que no hace falta una familia aparte
 * para el H1 del Hero.
 */
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-heading",
});

// TODO: reemplazar por el dominio definitivo una vez el INCO lo confirme (mismo valor que en sitemap.ts/robots.ts).
const BASE_URL = "https://www.inco.edu.sv";
const DESCRIPCION_SITIO =
  "Sitio oficial del Instituto Nacional de Comercio (INCO), San Jacinto, San Salvador. Oferta académica, proceso de matrícula, vida estudiantil y contacto.";

// viewport-fit=cover habilita env(safe-area-inset-*) en CSS — necesario para
// que el navbar translúcido no quede tapado por el notch/Dynamic Island en
// iPhones con pantalla de borde a borde (ver `.glass-nav` en globals.css).
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Instituto Nacional de Comercio (INCO)",
    template: "%s | INCO",
  },
  description: DESCRIPCION_SITIO,
  openGraph: {
    type: "website",
    locale: "es_SV",
    siteName: "Instituto Nacional de Comercio (INCO)",
    title: "Instituto Nacional de Comercio (INCO)",
    description: DESCRIPCION_SITIO,
  },
};

/**
 * Datos estructurados (Schema.org) con solo información verificada en la
 * Fase 2. Deliberadamente NO incluye foundingDate (fecha de fundación en
 * disputa entre fuentes, sin confirmar) ni TikTok en sameAs (cuenta no
 * confirmada como oficial por el INCO).
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: identidad.nombre,
  alternateName: identidad.siglas,
  url: BASE_URL,
  telephone: "+503-2270-2852",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Final Calle Campos, Avenida Barberena",
    addressLocality: "San Jacinto, San Salvador",
    addressCountry: "SV",
  },
  sameAs: [contacto.facebookHref, contacto.instagramHref],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="relative flex min-h-screen flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div aria-hidden="true" className="grain-overlay" />
        <a
          href="#contenido-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
        >
          Saltar al contenido principal
        </a>
        <MotionProvider>
          <Navbar />
          <main id="contenido-principal" className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingActions />
        </MotionProvider>
      </body>
    </html>
  );
}
