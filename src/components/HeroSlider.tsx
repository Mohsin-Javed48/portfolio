"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, type PanInfo } from "framer-motion";
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

const TOTAL = slides.length;
// A clone of the last slide is prepended and a clone of the first slide is appended,
// so the track can slide seamlessly past either end for an infinite loop.
const track = [slides[TOTAL - 1], ...slides, slides[0]];

const SLIDE_WIDTH = 100; // % of the container — each slide fills the frame edge-to-edge, no neighbor peek
const CENTER_OFFSET = 50 - SLIDE_WIDTH / 2;
const AUTOPLAY_MS = 2000;
const TRANSITION_S = 0.6;
const EASE = [0.4, 0, 0.2, 1] as const;
const RESUME_DELAY_MS = 5000;
const SWIPE_OFFSET_THRESHOLD = 50;
const SWIPE_VELOCITY_THRESHOLD = 400;

export function HeroSlider() {
  // trackIndex is 1-based within the padded `track` array: 1 === real slide 0.
  const [trackIndex, setTrackIndex] = useState(1);
  const [instant, setInstant] = useState(false);
  const [paused, setPaused] = useState(false);
  const isAnimatingRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // useReducedMotion() briefly returns null before the media query resolves;
  // treat "undetermined" the same as "reduced" so autoplay never starts speculatively.
  const prefersReducedMotion = useReducedMotion() !== false;

  const activeIndex = ((trackIndex - 1) % TOTAL + TOTAL) % TOTAL;
  const current = slides[activeIndex];

  const pauseTemporarily = useCallback(() => {
    setPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setPaused(false), RESUME_DELAY_MS);
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const step = useCallback((delta: number) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setInstant(false);
    setTrackIndex((i) => i + delta);
  }, []);

  const goNext = useCallback(() => step(1), [step]);
  const goPrev = useCallback(() => step(-1), [step]);

  const goToSlide = useCallback((slideIndex: number) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setInstant(false);
    setTrackIndex(slideIndex + 1);
  }, []);

  // Autoplay: always moves forward, looping infinitely via the cloned track ends.
  // Runs regardless of reduced-motion — that preference only removes the slide
  // transition below (instant swap instead of an animated slide), not the
  // advancing itself, so autoplay can't get silently stuck off by a media query.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(goNext, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, goNext]);

  const handleAnimationComplete = () => {
    isAnimatingRef.current = false;
    if (trackIndex === track.length - 1) {
      // Sitting on the trailing clone of slide 0 — snap back to the real slide 0, unanimated.
      setInstant(true);
      setTrackIndex(1);
    } else if (trackIndex === 0) {
      // Sitting on the leading clone of the last slide — snap to the real last slide, unanimated.
      setInstant(true);
      setTrackIndex(TOTAL);
    }
  };

  const handlePanEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_OFFSET_THRESHOLD || info.velocity.x < -SWIPE_VELOCITY_THRESHOLD) {
      goNext();
    } else if (info.offset.x > SWIPE_OFFSET_THRESHOLD || info.velocity.x > SWIPE_VELOCITY_THRESHOLD) {
      goPrev();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      pauseTemporarily();
      goPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      pauseTemporarily();
      goNext();
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Project screenshots"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={pauseTemporarily}
      className="relative ml-auto w-full max-w-[1209px] min-w-0 outline-none"
    >
      <div className="glow overflow-hidden rounded-2xl border border-border bg-background-elevated shadow-lg">
        <div className="flex items-center gap-1.5 border-b border-border bg-background-secondary px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 truncate font-mono text-xs text-muted">{current.project}</span>
        </div>

        <div className="relative aspect-[16/10] w-full overflow-hidden bg-background-secondary">
          <motion.div
            className="flex h-full"
            animate={{ x: `${CENTER_OFFSET - trackIndex * SLIDE_WIDTH}%` }}
            transition={{ duration: instant || prefersReducedMotion ? 0 : TRANSITION_S, ease: EASE }}
            onAnimationComplete={handleAnimationComplete}
            onPanEnd={handlePanEnd}
          >
            {track.map((slide, i) => {
              const isPrev = i === trackIndex - 1;
              const isNext = i === trackIndex + 1;

              return (
                <div
                  key={`${slide.src}-${i}`}
                  style={{ width: `${SLIDE_WIDTH}%` }}
                  onClick={
                    isPrev
                      ? () => {
                          pauseTemporarily();
                          goPrev();
                        }
                      : isNext
                        ? () => {
                            pauseTemporarily();
                            goNext();
                          }
                        : undefined
                  }
                  className={`relative h-full w-full shrink-0 ${isPrev || isNext ? "cursor-pointer" : ""}`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.project}
                    fill
                    draggable={false}
                    sizes="(min-width: 1024px) 1209px, 100vw"
                    className="pointer-events-none select-none object-contain"
                    priority
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
        {slides.map((slide, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show ${slide.project} screenshot ${i + 1}`}
            aria-current={i === activeIndex}
            onClick={() => {
              pauseTemporarily();
              goToSlide(i);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? "w-6 bg-accent" : "w-1.5 bg-border hover:bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
