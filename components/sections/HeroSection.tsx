"use client";
import { useState, useEffect } from "react";
import { Navigation, Coffee, ChevronDown } from "lucide-react";
import { SITE } from "@/lib/data";

const ROTATING_LINES = [
  "Where Night Owls Belong.",
  "Open When The City Sleeps.",
  "Your 24/7 Bunker.",
  "Coffee Never Sleeps Here.",
];

export default function HeroSection() {
  const [lineIdx, setLineIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setLineIdx((i) => (i + 1) % ROTATING_LINES.length);
        setVisible(true);
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay"
      style={{
        background: "linear-gradient(160deg, #060606 0%, #111214 45%, #0c0b08 100%)",
      }}
    >
      {/* ── Caution stripe top & bottom ── */}
      <div className="absolute top-0 left-0 right-0 h-[6px] caution-stripe z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-[6px] caution-stripe z-10" />

      {/* ── Grid overlay ── */}
      <div className="absolute inset-0 grid-overlay opacity-100 pointer-events-none" />

      {/* ── Amber radial glow ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "18%", left: "50%", transform: "translateX(-50%)",
          width: "700px", height: "500px",
          background: "radial-gradient(ellipse, rgba(245,183,0,0.065) 0%, transparent 70%)",
        }}
      />

      {/* ── Decorative corner accents ── */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-bunker-amber/30 pointer-events-none" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-bunker-amber/30 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-bunker-amber/30 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-bunker-amber/30 pointer-events-none" />

      {/* ── Main Content ── */}
      <div className="relative z-10 text-center px-5 pt-20 pb-10 max-w-5xl mx-auto">

        {/* Open 24/7 badge */}
        <div className="inline-flex items-center gap-2 bg-bunker-amber text-bunker-black px-4 py-1.5 font-condensed font-bold text-xs tracking-[0.25em] uppercase mb-5 clip-skew animate-pulse-glow">
          <span className="w-2 h-2 rounded-full bg-bunker-black animate-blink inline-block" />
          ⚡ OPEN 24 HOURS · 7 DAYS A WEEK
        </div>

        {/* Hindi name */}
        <p className="font-hindi text-bunker-muted tracking-[0.15em] text-sm md:text-base mb-2">
          {SITE.nameHindi}
        </p>

        {/* Title */}
        <h1
          className="font-bebas leading-none tracking-[0.02em] text-white mb-2"
          style={{ fontSize: "clamp(3.5rem, 13vw, 9.5rem)", textShadow: "0 0 100px rgba(245,183,0,0.12)" }}
        >
          THE BUNKERS
          <br />
          <span className="text-bunker-amber" style={{ textShadow: "0 0 50px rgba(245,183,0,0.45)" }}>
            POINT
          </span>
        </h1>

        {/* Rotating line */}
        <div
          className="font-condensed uppercase tracking-[0.14em] text-bunker-text mb-3 h-8 flex items-center justify-center overflow-hidden"
          style={{ fontSize: "clamp(0.9rem, 2.8vw, 1.35rem)" }}
        >
          <span
            style={{
              display: "inline-block",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(14px)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
            }}
          >
            {ROTATING_LINES[lineIdx]}
          </span>
        </div>

        {/* Tagline */}
        <p className="font-barlow text-bunker-text leading-relaxed max-w-xl mx-auto mb-8 text-sm md:text-base">
          Kolar Road's most unique café experience. Great coffee, honest chai, real company — any hour, any mood.{" "}
          <span className="text-bunker-amber font-semibold">{SITE.priceRange}</span>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={SITE.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="clip-skew bg-bunker-amber text-bunker-black px-7 py-3 font-condensed font-bold text-sm tracking-[0.12em] uppercase flex items-center gap-2 hover:bg-bunker-amber2 transition-colors duration-200"
            style={{ boxShadow: "0 4px 28px rgba(245,183,0,0.38)" }}
          >
            <Navigation size={17} /> Get Directions
          </a>
          <a
            href="#menu"
            className="clip-skew border-2 border-bunker-amber text-bunker-amber px-7 py-3 font-condensed font-bold text-sm tracking-[0.12em] uppercase flex items-center gap-2 hover:bg-bunker-amber hover:text-bunker-black transition-all duration-200"
          >
            <Coffee size={17} /> View Menu
          </a>
        </div>

        {/* Service pills */}
        <div className="flex flex-wrap gap-2 justify-center mt-6">
          {SITE.services.map((s) => (
            <span
              key={s}
              className="font-condensed text-xs tracking-[0.12em] uppercase text-bunker-muted border border-bunker-border px-3 py-1"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="mt-12 flex flex-col items-center gap-1 text-bunker-muted">
          <span className="font-condensed text-[0.65rem] tracking-[0.25em] uppercase">Scroll</span>
          <ChevronDown size={20} className="animate-bounce-slow" />
        </div>
      </div>
    </section>
  );
}
