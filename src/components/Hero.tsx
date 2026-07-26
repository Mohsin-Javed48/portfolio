"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="bg-grid relative flex min-h-screen flex-col justify-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-accent-2/20 blur-[140px]" />

      <Container className="relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 font-mono text-sm text-accent"
        >
          <span className="text-accent-2">$</span> whoami
          <span className="cursor-blink">_</span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-xl font-medium text-gradient sm:text-2xl"
        >
          {profile.title} · {profile.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          Building full-stack web applications with{" "}
          {profile.taglineWords.map((w, i) => (
            <span key={w}>
              <span className="font-mono text-foreground">{w}</span>
              {i < profile.taglineWords.length - 1 ? ", " : ""}
            </span>
          ))}
          — shipping production features for order management, point-of-sale,
          and government benefits platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="glow rounded-md bg-accent px-6 py-3 font-mono text-sm font-medium text-[#04121a] transition-transform hover:scale-[1.02]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-border px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent"
          >
            Get in Touch
          </a>

          <div className="ml-2 flex items-center gap-4 text-muted">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-accent"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-accent"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="transition-colors hover:text-accent"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </Container>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
