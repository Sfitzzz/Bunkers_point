"use client";
import { Star } from "lucide-react";
import { useInView } from "@/lib/useInView";
import { REVIEWS } from "@/lib/data";

const AVATAR_COLORS: Record<string, string> = {
  A: "#E85D04", P: "#9D4EDD", R: "#2196F3",
  M: "#E91E63", Z: "#4CAF50", S: "#FF9800",
};

function ReviewCard({ review, delay }: { review: typeof REVIEWS[0]; delay: number }) {
  return (
    <div
      className="card-lift relative border border-bunker-border p-6 group"
      style={{
        background: "#111",
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Big quote mark */}
      <span className="absolute top-3 right-4 font-serif text-6xl text-bunker-amber/[0.07] leading-none select-none">
        "
      </span>

      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: review.stars }).map((_, i) => (
          <Star key={i} size={13} fill="#F5B700" color="#F5B700" />
        ))}
      </div>

      <p className="font-barlow text-bunker-text text-sm italic leading-[1.8] mb-5">
        "{review.text}"
      </p>

      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center font-bebas text-lg text-white flex-shrink-0"
          style={{ background: AVATAR_COLORS[review.avatar] || "#F5B700" }}
        >
          {review.avatar}
        </div>
        <div>
          <div className="font-condensed text-sm tracking-[0.08em] uppercase text-bunker-light">
            {review.name}
          </div>
          <div className="font-barlow text-[0.7rem] text-bunker-muted">{review.date}</div>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="reviews"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0c0a 0%, #090909 100%)" }}
    >
      {/* Right side accent */}
      <div className="absolute right-0 top-0 bottom-0 w-[3px] caution-stripe-sm opacity-30" />

      {/* Section header */}
      <div className="text-center mb-12 px-5">
        <p className="font-condensed text-xs tracking-[0.3em] uppercase text-bunker-amber mb-3">
          — Field Reports —
        </p>
        <h2
          className="font-bebas text-white leading-none"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)" }}
        >
          WALL OF FAME
          <br />
          <span className="text-bunker-amber" style={{ fontSize: "0.5em", letterSpacing: "0.06em" }}>
            WHAT OUR REGULARS SAY
          </span>
        </h2>

        {/* Overall rating */}
        <div className="inline-flex items-center gap-2 mt-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={18} fill="#F5B700" color="#F5B700" />
          ))}
          <span className="font-bebas text-bunker-amber text-2xl ml-1">5.0</span>
          <span className="font-condensed text-xs tracking-widest uppercase text-bunker-muted">
            · Google Reviews
          </span>
        </div>
      </div>

      {/* Reviews grid */}
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-6xl mx-auto px-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal ${inView ? "visible" : ""}`}
      >
        {REVIEWS.map((review, i) => (
          <ReviewCard key={review.name} review={review} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}
