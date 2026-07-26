import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/lib/data";

const links = [
  {
    label: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    icon: Phone,
  },
  {
    label: "github.com/Mohsin-Javed48",
    href: profile.github,
    icon: GithubIcon,
  },
  {
    label: "linkedin.com/in/mohsin-javed",
    href: profile.linkedin,
    icon: LinkedinIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-28">
      <Container>
        <Reveal>
          <SectionHeading index="05" title="Contact" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            I&apos;m currently open to new opportunities and interesting
            projects. Whether you have a question or just want to say hi,
            reach out directly through any of the channels below.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 grid gap-4 sm:grid-cols-2">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 rounded-lg border border-border bg-background-elevated p-5 transition-colors hover:border-accent/40 hover:text-accent"
            >
              <Icon className="text-accent" size={20} />
              <span className="font-mono text-sm text-foreground">{label}</span>
            </a>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
