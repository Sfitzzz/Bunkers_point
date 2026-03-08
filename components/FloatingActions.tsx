"use client";
import { Phone, Navigation } from "lucide-react";
import { SITE } from "@/lib/data";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3">
      {/* Call */}
      <a
        href={`tel:${SITE.phone}`}
        aria-label="Call Now"
        className="w-13 h-13 rounded-full bg-bunker-amber flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        style={{
          width: 52, height: 52,
          boxShadow: "0 4px 22px rgba(245,183,0,0.55)",
        }}
      >
        <Phone size={22} color="#0a0a0a" />
      </a>

      {/* Navigate */}
      <a
        href={SITE.address.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Navigate to The Bunkers Point"
        className="rounded-full border-2 border-bunker-amber bg-bunker-steel flex items-center justify-center hover:scale-110 transition-transform duration-200"
        style={{
          width: 52, height: 52,
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        }}
      >
        <Navigation size={20} color="#F5B700" />
      </a>
    </div>
  );
}
