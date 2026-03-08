"use client";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { useInView } from "@/lib/useInView";
import { SITE } from "@/lib/data";

function InfoBlock({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-bunker-border p-5 bg-bunker-steel">
      <div className="flex gap-3 items-start">
        <span className="text-bunker-amber mt-0.5 flex-shrink-0">{icon}</span>
        <div>
          <p className="font-condensed text-[0.65rem] tracking-[0.22em] uppercase text-bunker-muted mb-1">
            {label}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function LocationSection() {
  const { ref: leftRef,  inView: leftIn  } = useInView();
  const { ref: rightRef, inView: rightIn } = useInView();

  return (
    <section
      id="location"
      className="relative py-24"
      style={{ background: "#090909" }}
    >
      {/* Section header */}
      <div className="text-center mb-12 px-5">
        <p className="font-condensed text-xs tracking-[0.3em] uppercase text-bunker-amber mb-3">
          — Command Centre —
        </p>
        <h2
          className="font-bebas text-white leading-none"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)" }}
        >
          FIND THE BUNKER
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-6">

        {/* ── Map ── */}
        <div
          ref={leftRef as React.RefObject<HTMLDivElement>}
          className={`relative border border-bunker-border overflow-hidden reveal-left ${leftIn ? "visible" : ""}`}
          style={{ minHeight: 340 }}
        >
          {/* Caution top stripe */}
          <div className="absolute top-0 left-0 right-0 h-[3px] caution-stripe-sm z-10" />

          <iframe
            title="The Bunkers Point on Google Maps"
            src={SITE.address.embedUrl}
            width="100%"
            height="100%"
            className="absolute inset-0 w-full h-full"
            style={{ border: "none", filter: "grayscale(85%) contrast(1.1) brightness(0.82)" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Overlay badge */}
          <div className="absolute bottom-3 left-3 z-10 clip-skew-sm bg-bunker-amber text-bunker-black font-condensed font-bold text-xs tracking-widest uppercase px-3 py-1.5">
            📍 We Are Here
          </div>
        </div>

        {/* ── Info ── */}
        <div
          ref={rightRef as React.RefObject<HTMLDivElement>}
          className={`flex flex-col gap-3 reveal-right ${rightIn ? "visible" : ""}`}
        >
          {/* Address */}
          <InfoBlock icon={<MapPin size={19} />} label="Address">
            <p className="font-barlow text-bunker-light text-sm leading-[1.8]">
              {SITE.address.line1},<br />
              {SITE.address.line2},<br />
              {SITE.address.line3}
            </p>
          </InfoBlock>

          {/* Hours */}
          <InfoBlock icon={<Clock size={19} />} label="Opening Hours">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-blink flex-shrink-0" />
              <span className="font-bebas text-bunker-amber text-2xl tracking-wide">
                OPEN 24 HOURS
              </span>
            </div>
            <p className="font-barlow text-xs text-bunker-muted mt-0.5">
              Every day · No holidays · No last call · Ever.
            </p>
          </InfoBlock>

          {/* Phone */}
          <InfoBlock icon={<Phone size={19} />} label="Call Us">
            <a
              href={`tel:${SITE.phone}`}
              className="font-bebas text-bunker-amber text-2xl tracking-wide hover:text-white transition-colors"
            >
              {SITE.phone}
            </a>
          </InfoBlock>

          {/* Price range */}
          <InfoBlock icon={<span className="text-base">💰</span>} label="Price Range">
            <p className="font-bebas text-bunker-amber text-2xl tracking-wide">{SITE.priceRange}</p>
            <p className="font-barlow text-xs text-bunker-muted mt-0.5">
              Affordable for everyone · Students welcome
            </p>
          </InfoBlock>

          {/* CTA */}
          <a
            href={SITE.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="clip-skew bg-bunker-amber text-bunker-black py-4 font-condensed font-bold text-sm tracking-[0.15em] uppercase flex items-center justify-center gap-2 hover:bg-bunker-amber2 transition-colors duration-200 mt-1"
            style={{ boxShadow: "0 4px 24px rgba(245,183,0,0.3)" }}
          >
            <Navigation size={17} /> Get Directions on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
