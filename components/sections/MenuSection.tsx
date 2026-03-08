"use client";
import { useState } from "react";
import { useInView } from "@/lib/useInView";
import { MENU, type MenuCategory } from "@/lib/data";

function MenuCard({ item, delay }: { item: MenuCategory["items"][0]; delay: number }) {
  return (
    <div
      className="card-lift relative border border-bunker-border p-5 group"
      style={{
        background: "linear-gradient(135deg, #151515, #111)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Top amber bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-bunker-amber to-transparent" />

      {/* Tag badge */}
      {item.tag && (
        <span className="absolute top-3 right-3 clip-skew-sm bg-bunker-amber text-bunker-black font-condensed font-bold text-[0.6rem] tracking-widest uppercase px-2 py-0.5">
          {item.tag}
        </span>
      )}

      <h4 className="font-bebas text-white text-lg tracking-wide mb-1 group-hover:text-bunker-amber transition-colors">
        {item.name}
      </h4>
      <p className="font-barlow text-bunker-text text-xs leading-relaxed mb-4">
        {item.desc}
      </p>
      <div className="font-bebas text-bunker-amber text-2xl tracking-wide">{item.price}</div>
    </div>
  );
}

export default function MenuSection() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView();

  return (
    <section
      id="menu"
      className="relative py-24"
      style={{ background: "#090909" }}
    >
      {/* Section header */}
      <div className="text-center mb-10 px-5">
        <p className="font-condensed text-xs tracking-[0.3em] uppercase text-bunker-amber mb-3">
          — Field Rations —
        </p>
        <h2
          className="font-bebas text-white leading-none"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)" }}
        >
          THE SUPPLY DEPOT
          <br />
          <span className="text-bunker-amber" style={{ fontSize: "0.55em", letterSpacing: "0.06em" }}>
            MENU HIGHLIGHTS
          </span>
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 px-5">
        {MENU.map((cat, i) => (
          <button
            key={cat.id}
            onClick={() => setActive(i)}
            className={`clip-skew-sm font-condensed font-bold text-sm tracking-[0.1em] uppercase px-5 py-2.5 transition-all duration-200 ${
              active === i
                ? "bg-bunker-amber text-bunker-black"
                : "border border-bunker-border text-bunker-text hover:border-bunker-amber/40 hover:text-bunker-light"
            }`}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-6xl mx-auto px-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal ${inView ? "visible" : ""}`}
      >
        {MENU[active].items.map((item, i) => (
          <MenuCard key={item.name} item={item} delay={i * 60} />
        ))}
      </div>

      {/* Price callout */}
      <div className="text-center mt-10 px-5">
        <div className="inline-flex items-center gap-3 border border-bunker-amber/25 bg-bunker-amber/[0.06] px-6 py-3 font-condensed text-sm tracking-[0.15em] uppercase text-bunker-amber">
          💰 Full meals under ₹200 &nbsp;·&nbsp; Chai from ₹15 &nbsp;·&nbsp; Coffee from ₹80
        </div>
      </div>
    </section>
  );
}
