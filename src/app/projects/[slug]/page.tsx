import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Briefcase, ExternalLink, FolderGit2 } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/lib/data";

const detailProjects = projects.filter((p) => p.hasDetailPage !== false);

export function generateStaticParams() {
  return detailProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = detailProjects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.name} — Mohsin Javed`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = detailProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const hasLiveUrl = project.liveUrl && project.liveUrl !== "#";

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24">
        <Container className="py-16">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <div className="mt-8 flex flex-wrap items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {project.name}
              </h1>
              <p className="mt-2 font-mono text-sm text-accent">{project.tagline}</p>
              <p className="mt-1 font-mono text-xs text-muted">{project.period}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {hasLiveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-mono text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-md"
                >
                  <ExternalLink size={16} />
                  Live Site
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 font-mono text-sm text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-sm"
                >
                  <GithubIcon size={16} />
                  GitHub Repo
                </a>
              )}
            </div>
          </div>

          {project.credit && (
            <p className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-background-secondary px-2.5 py-1 text-[11px] text-muted">
              <Briefcase size={12} className="text-accent" />
              {project.credit}
            </p>
          )}

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

          {project.images && project.images.length > 0 ? (
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {project.images.map((src) => (
                <div
                  key={src}
                  className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-background-secondary shadow-sm"
                >
                  <Image
                    src={src}
                    alt={`${project.name} screenshot`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-10 flex h-48 items-center justify-center rounded-2xl border border-border bg-grid bg-background-secondary">
              <FolderGit2 className="text-muted/50" size={40} />
            </div>
          )}

          <div className="mt-12 max-w-3xl">
            <h2 className="text-xl font-semibold text-foreground">Overview</h2>
            <ul className="mt-5 space-y-3">
              {project.points.map((point) => (
                <li key={point} className="flex gap-3 text-muted">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
