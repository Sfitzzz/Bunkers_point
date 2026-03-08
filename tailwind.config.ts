import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bunker: {
          black:   "#080808",
          dark:    "#0f0f0f",
          steel:   "#141414",
          plate:   "#1c1c1c",
          border:  "#252525",
          muted:   "#3a3a3a",
          text:    "#8a8a8a",
          light:   "#c8c8c8",
          amber:   "#F5B700",
          amber2:  "#E0A800",
          amber3:  "#CC9A00",
          glow:    "rgba(245,183,0,0.18)",
        },
      },
      fontFamily: {
        bebas:   ["var(--font-bebas)", "Impact", "sans-serif"],
        barlow:  ["var(--font-barlow)", "sans-serif"],
        condensed: ["var(--font-condensed)", "sans-serif"],
        hindi:   ["var(--font-hindi)", "sans-serif"],
      },
      animation: {
        "blink":       "blink 1.4s ease-in-out infinite",
        "pulse-glow":  "pulseGlow 2s ease-in-out infinite",
        "bounce-slow": "bounceSlow 2s ease-in-out infinite",
        "slide-up":    "slideUp 0.5s ease forwards",
        "fade-in":     "fadeIn 0.6s ease forwards",
        "stripe-move": "stripeMove 1.2s linear infinite",
      },
      keyframes: {
        blink:      { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.25" } },
        pulseGlow:  { "0%,100%": { boxShadow: "0 0 0 0 rgba(245,183,0,0.45)" }, "50%": { boxShadow: "0 0 0 10px rgba(245,183,0,0)" } },
        bounceSlow: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(9px)" } },
        slideUp:    { from: { opacity: "0", transform: "translateY(22px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        fadeIn:     { from: { opacity: "0" }, to: { opacity: "1" } },
        stripeMove: { from: { backgroundPosition: "0 0" }, to: { backgroundPosition: "48px 0" } },
      },
      backgroundImage: {
        "caution":      "repeating-linear-gradient(90deg, #F5B700 0px, #F5B700 24px, #0f0f0f 24px, #0f0f0f 48px)",
        "caution-dark": "repeating-linear-gradient(90deg, #F5B700 0px, #F5B700 16px, #141414 16px, #141414 32px)",
        "grid-lines":   "linear-gradient(rgba(245,183,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,183,0,0.04) 1px, transparent 1px)",
        "noise":        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
