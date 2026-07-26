import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-2 px-6 text-center font-mono text-xs text-muted sm:px-8">
        <p>
          <span className="text-accent">$</span> echo &quot;Built by {profile.name}&quot;
        </p>
        <p>Designed &amp; built with Next.js, TypeScript &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}
