"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type Slide = {
  src: string;
  project: string;
};

const slides: Slide[] = [
  { src: "/hero-slider/nutricloud-1-start-page.png", project: "Nutricloudfr — State Benefits Portal" },
  { src: "/hero-slider/nutricloud-3-begin-page.png", project: "Nutricloudfr — State Benefits Portal" },
  { src: "/hero-slider/nutricloud-4-summary-page.png", project: "Nutricloudfr — State Benefits Portal" },
  { src: "/hero-slider/fulfillment-1-dashboard.png", project: "Fulfillment Order Management System" },
  { src: "/hero-slider/fulfillment-2-batches.png", project: "Fulfillment Order Management System" },
  { src: "/hero-slider/fulfillment-3-orders.png", project: "Fulfillment Order Management System" },
  { src: "/hero-slider/xpos-3-menu.png", project: "Unified POS" },
  { src: "/hero-slider/xpos-4-products.png", project: "Unified POS" },
  { src: "/hero-slider/xpos-5-dashboard.png", project: "Unified POS" },
];

const INTERVAL_MS = 3200;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused]);

  const current = slides[index];

  return (
    <div
      className="relative mx-auto w-full max-w-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="glow overflow-hidden rounded-2xl border border-border bg-background-elevated shadow-lg">
        <div className="flex items-center gap-1.5 border-b border-border bg-background-secondary px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 truncate font-mono text-xs text-muted">
            {current.project}
          </span>
        </div>

        <div className="relative aspect-[16/10] w-full bg-background-secondary">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Image
                src={current.src}
                alt={current.project}
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover object-top"
                priority={index === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
        {slides.map((slide, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show ${slide.project} screenshot ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-accent" : "w-1.5 bg-border hover:bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
