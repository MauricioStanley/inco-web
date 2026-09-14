import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#1B5E3A", dark: "#0F3D26" },
        accent: { DEFAULT: "#F2B705", dark: "#B8850A", light: "#FFDD57" },
        ink: { DEFAULT: "#1A1A1A", soft: "#4A4A4A" },
        surface: { DEFAULT: "#FAF9F6", alt: "#FFFFFF" },
        border: "#E2DFD8",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        // Sombras teñidas con el verde institucional en vez de negro plano,
        // para que la profundidad se sienta parte de la marca.
        card: "0 1px 2px rgba(15,61,38,0.06), 0 8px 24px -12px rgba(15,61,38,0.18)",
        "card-hover": "0 4px 8px rgba(15,61,38,0.08), 0 20px 40px -14px rgba(15,61,38,0.32)",
        button: "0 8px 20px -8px rgba(27,94,58,0.45)",
        gold: "0 8px 20px -8px rgba(184,133,10,0.45)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scroll-cue": {
          "0%, 100%": { transform: "scaleY(0.35)", opacity: "0.35" },
          "50%": { transform: "scaleY(1)", opacity: "1" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out both",
        "fade-in": "fade-in 0.4s ease-out both",
        "scroll-cue": "scroll-cue 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
