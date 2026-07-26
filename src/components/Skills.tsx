import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { skills, education } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-28">
      <Container>
        <Reveal>
          <SectionHeading index="04" title="Skills" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal
              key={group.category}
              delay={(i % 3) * 0.08}
              className="rounded-lg border border-border bg-background-elevated p-6"
            >
              <h3 className="font-mono text-sm text-accent">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 rounded-lg border border-border bg-background-elevated p-6">
          <h3 className="font-mono text-sm text-accent">Education</h3>
          <div className="mt-4 space-y-5">
            {education.map((entry) => (
              <div key={entry.school} className="border-l-2 border-border pl-4">
                <p className="text-foreground">{entry.degree}</p>
                <p className="mt-1 text-sm text-muted">
                  {entry.school}
                  {entry.period ? ` · ${entry.period}` : ""}
                </p>
                {entry.detail && (
                  <p className="mt-1 text-sm text-muted">{entry.detail}</p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
