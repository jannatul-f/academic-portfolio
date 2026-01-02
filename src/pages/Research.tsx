import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import type {
    ResearchOverview,
    ResearchProject,
} from "../types/research";
import { loadResearchOverview } from "../utils/loadResearchOverview";
import { loadResearchProjects } from "../utils/loadResearchProjects";
import ImageSlider from "../components/ImageSlider";

export default function Research() {
  const [overview, setOverview] = useState<ResearchOverview | null>(null);
  const [projects, setProjects] = useState<ResearchProject[]>([]);

  useEffect(() => {
    loadResearchOverview().then(setOverview);
    loadResearchProjects().then(setProjects);
  }, []);

  if (!overview) return null;

  return (
    <main>
        <h1>This is a research page</h1>
      {/* Section 1 — Overview */}
      <section>
        <ImageSlider images={overview.images} interval={5000} />


        <ReactMarkdown>{overview.body}</ReactMarkdown>
      </section>

      {/* Section 2 — Projects */}
      <section>
        <h2>Research Projects</h2>

        {projects.map((p, i) => (
          <article key={i}>
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <ReactMarkdown>{p.body}</ReactMarkdown>

            {p.links?.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noreferrer"
              >
                {l.label}
              </a>
            ))}
          </article>
        ))}
      </section>
    </main>
  );
}
