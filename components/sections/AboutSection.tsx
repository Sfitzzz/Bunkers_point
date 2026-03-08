"use client";
import { useInView } from "@/lib/useInView";
import { SITE, FEATURES } from "@/lib/data";

const STATS = [
  { value: "24/7",  label: "Open" },
  { value: "₹200",  label: "Max Budget" },
  { value: "100%",  label: "Vibes" },
  { value: "1",     label: "Kolar Rd" },
];

export default function AboutSection() {
  const { ref: leftRef, inView: leftIn } = useInView();
  const { ref: rightRef, inView: rightIn } = useInView();

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0c0a 0%, #101010 100%)" }}
    >
      {/* Subtle side accent */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] caution-stripe-sm opacity-30" />

      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: Visual card ── */}
          <div
            ref={leftRef as React.RefObject<HTMLDivElement>}
            className={`reveal-left ${leftIn ? "visible" : ""}`}
          >
            <div
              className="relative border border-bunker-border p-8"
              style={{ background: "linear-gradient(135deg, #161616, #0f0f0f)" }}
            >
              {/* Top caution stripe */}
              <div className="absolute top-0 left-0 right-0 h-[3px] caution-stripe-sm" />

              <div className="text-5xl mb-4">🏗️</div>

              <h3
                className="font-bebas text-bunker-amber leading-none mb-5"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
              >
                ENTER A<br />DIFFERENT<br />WORLD
              </h3>

              {/* Features list */}
              <ul className="flex flex-col gap-3 mb-6">
                {FEATURES.map((f) => (
                  <li key={f.title} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">{f.emoji}</span>
                    <div>
                      <span className="font-condensed text-sm tracking-widest uppercase text-bunker-light">
                        {f.title}
                      </span>
                      <p className="font-barlow text-xs text-bunker-text leading-relaxed mt-0.5">
                        {f.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-2 border-t border-bunker-border pt-5">
                {STATS.map(({ value, label }) => (
                  <div
                    key={label}
                    className="text-center bg-bunker-amber/[0.07] border border-bunker-amber/20 py-2 px-1"
                  >
                    <div className="font-bebas text-bunker-amber text-xl leading-none">{value}</div>
                    <div className="font-condensed text-[0.55rem] tracking-widest uppercase text-bunker-muted mt-0.5">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Copy ── */}
          <div
            ref={rightRef as React.RefObject<HTMLDivElement>}
            className={`reveal-right ${rightIn ? "visible" : ""}`}
          >
            <p className="font-condensed text-xs tracking-[0.3em] uppercase text-bunker-amber mb-3">
              — About The Bunkers Point
            </p>

            <h2
              className="font-bebas text-white leading-none mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
            >
              THE BEST<br />HANGOUT CAFE<br />
              <span className="text-bunker-amber">IN KOLAR.</span>
            </h2>

            <p className="font-barlow text-bunker-text leading-[1.9] mb-5 text-[0.95rem]">
              Step through our blast doors and leave the ordinary behind.{" "}
              <strong className="text-bunker-light">The Bunkers Point</strong> is not
              just a café — it's a subterranean world of raw concrete walls, steel-mesh
              ceilings, and warm amber light cutting through the industrial grit.
            </p>

            <p className="font-barlow text-bunker-text leading-[1.9] mb-7 text-[0.95rem]">
              Born on Kolar Road, Bhopal, we built a haven for{" "}
              <strong className="text-bunker-light">
                students, night-workers, dreamers & wanderers
              </strong>{" "}
              — anyone who needs great coffee and better company at any hour. No dress
              code. No judgment. Just you, your crew, and the best chai in MP.
            </p>

            {/* Highlight badge */}
            <div className="inline-flex items-center gap-3 border border-bunker-amber/25 bg-bunker-amber/[0.06] px-4 py-3 mb-7">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-blink flex-shrink-0" />
              <span className="font-condensed text-sm tracking-[0.15em] uppercase text-bunker-amber">
                Open Right Now · {SITE.hours}
              </span>
            </div>

            {/* Services */}
            <div className="flex flex-wrap gap-4">
              {[["🍽️", "Dine-In"], ["📦", "Takeaway"], ["🌙", "Late-Night Vibes"]].map(([emoji, label]) => (
                <div
                  key={label}
                  className="flex items-center gap-2 font-condensed text-sm tracking-[0.1em] uppercase text-bunker-light"
                >
                  <span className="text-base">{emoji}</span>
                  {label}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
