import { SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      className="relative border-t border-bunker-border py-8 text-center overflow-hidden"
      style={{ background: "#040404" }}
    >
      {/* Top caution stripe */}
      <div className="absolute top-0 left-0 right-0 h-[3px] caution-stripe-sm opacity-50" />

      <div className="font-bebas text-bunker-amber text-2xl tracking-[0.12em] mb-1">
        {SITE.name.toUpperCase()}
      </div>
      <div className="font-hindi text-bunker-muted text-xs mb-3 tracking-wide">
        {SITE.nameHindi}
      </div>
      <p className="font-condensed text-bunker-muted text-[0.7rem] tracking-[0.18em] uppercase">
        Kolar Road, Bhopal &nbsp;·&nbsp; Open 24/7 &nbsp;·&nbsp; © {new Date().getFullYear()} The Bunkers Point
      </p>
    </footer>
  );
}
