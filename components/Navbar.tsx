"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "@/lib/data";

const NAV_LINKS = [
  { label: "About",    href: "#about" },
  { label: "Menu",     href: "#menu" },
  { label: "Reviews",  href: "#reviews" },
  { label: "Location", href: "#location" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-bunker-black/95 backdrop-blur-md border-b border-bunker-amber/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-16">

        {/* ── Logo ── */}
        <a href="#hero" className="flex flex-col leading-none group" aria-label="The Bunkers Point Home">
          <span className="font-bebas text-xl tracking-[0.12em] text-bunker-amber group-hover:text-white transition-colors duration-200">
            THE BUNKERS POINT
          </span>
          <span className="font-hindi text-[0.6rem] text-bunker-muted tracking-wider">
            थे बंकर्स पॉइंट
          </span>
        </a>

        {/* ── Desktop Links ── */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-condensed text-sm tracking-[0.12em] uppercase text-bunker-text hover:text-bunker-amber transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href={`tel:${SITE.phone}`}
            className="clip-skew-sm bg-bunker-amber text-bunker-black px-4 py-2 font-condensed font-bold text-sm tracking-[0.1em] uppercase hover:bg-bunker-amber2 transition-colors duration-200 flex items-center gap-1.5"
          >
            <Phone size={14} /> Call Now
          </a>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden text-bunker-amber p-1"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      {menuOpen && (
        <div className="md:hidden bg-bunker-steel border-t-2 border-bunker-amber px-5 py-5 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-condensed text-lg tracking-[0.1em] uppercase text-bunker-light border-b border-bunker-border pb-3 hover:text-bunker-amber transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href={`tel:${SITE.phone}`}
            className="bg-bunker-amber text-bunker-black text-center py-3 font-condensed font-bold text-base tracking-[0.12em] uppercase"
          >
            📞 Call Now
          </a>
        </div>
      )}
    </nav>
  );
}
