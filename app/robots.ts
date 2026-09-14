import type { MetadataRoute } from "next";

// Requerido por `output: "export"` — robots.txt se genera una vez en build.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.inco.edu.sv/sitemap.xml",
  };
}
