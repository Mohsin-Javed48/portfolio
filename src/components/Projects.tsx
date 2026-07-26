import { ExternalLink, FolderGit2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="bg-background-secondary py-28">
      <Container>
        <Reveal>
          <SectionHeading index="03" title="Projects" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={(i % 2) * 0.1}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background-elevated shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent/30 hover:shadow-md"
            >
              {/* Image slot — replace with next/image once project screenshots are available */}
              <div className="flex h-40 items-center justify-center border-b border-border bg-grid bg-background">
                <FolderGit2 className="text-muted/50" size={36} />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.name}
                    </h3>
                    <p className="mt-0.5 font-mono text-xs text-accent">
                      {project.tagline}
                    </p>
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} live site`}
                      className="shrink-0 text-muted transition-colors hover:text-accent"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                <p className="mt-2 font-mono text-xs text-muted">{project.period}</p>

                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-background-secondary px-2.5 py-1 font-mono text-[11px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
