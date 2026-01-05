// src/utils/loadSiteSettings.ts
import type { SiteSettings } from "../types/site";

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---([\s\S]*?)---([\s\S]*)$/);
  if (!match) throw new Error("Invalid frontmatter");

  const data: any = {};
  match[1]
    .trim()
    .split("\n")
    .forEach((line) => {
      const [key, ...rest] = line.split(":");
      data[key.trim()] = rest.join(":").trim();
    });

  // convert booleans
  //   if ("allowIndexing" in data) data.allowIndexing = data.allowIndexing === "true";
  //   if ("disallowAdmin" in data) data.disallowAdmin = data.disallowAdmin === "true";

  return data as SiteSettings;
}

export async function loadSiteSettings(): Promise<SiteSettings> {
  const files = import.meta.glob("/src/content/settings/*.md", { as: "raw" });
  const raw = await files["/src/content/settings/site.md"]();
  return parseFrontmatter(raw);
}
