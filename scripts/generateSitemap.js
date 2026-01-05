import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/* Required for __dirname in ESM */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = process.env.SITE_URL || "https://example-professor-site.com";

const routes = [
  { path: "/", priority: 1.0 },
  { path: "/research", priority: 0.9 },
  { path: "/publications", priority: 0.9 },
  { path: "/members", priority: 0.8 },
  { path: "/news", priority: 0.8 },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `
  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>
`;

const outputPath = path.join(process.cwd(), "public", "sitemap.xml");

fs.writeFileSync(outputPath, sitemap.trim());

console.log("✅ sitemap.xml generated");
