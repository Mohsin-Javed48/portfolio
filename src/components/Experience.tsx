import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-28">
      <Container>
        <Reveal>
          <SectionHeading index="02" title="Experience" />
        </Reveal>

        <div className="relative border-l border-border pl-8">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1} className="relative pb-14 last:pb-0">
              <span className="glow absolute -left-[calc(2rem+5px)] top-1.5 h-3 w-3 rounded-full bg-accent" />

              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                {job.period}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-foreground">
                {job.role} <span className="text-muted">· {job.company}</span>
              </h3>

              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-muted">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
