import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { profile, quickFacts } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-28">
      <Container>
        <Reveal>
          <SectionHeading index="01" title="About" />
        </Reveal>

        <div className="grid gap-12 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-2">
            <dl className="space-y-5 rounded-lg border border-border bg-background-elevated p-6">
              {quickFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-xs uppercase tracking-wider text-accent">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
