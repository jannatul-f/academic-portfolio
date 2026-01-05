import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = process.env.SITE_URL || "https://example-professor-site.com";

const robots = `
User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

const outputPath = path.join(__dirname, "..", "public", "robots.txt");

fs.writeFileSync(outputPath, robots.trim());
console.log("✅ robots.txt generated");
