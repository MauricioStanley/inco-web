import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#176244", dark: "#06271D" },
        accent: { DEFAULT: "#C6A046", dark: "#927126", light: "#E7D08D" },
        ink: { DEFAULT: "#101714", soft: "#4E5D56" },
        surface: { DEFAULT: "#F9F9F7", alt: "#F1F3EF" },
        border: "#D9DED8",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Baskerville", "serif"],
        body: ["var(--font-body)", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        card: "0 2px 6px rgba(6,39,29,0.06), 0 22px 52px -34px rgba(6,39,29,0.38)",
        "card-hover": "0 10px 24px rgba(6,39,29,0.10), 0 34px 72px -38px rgba(6,39,29,0.52)",
        button: "0 14px 30px -16px rgba(6,39,29,0.72)",
        gold: "0 12px 28px -16px rgba(146,113,38,0.52)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(18px)", filter: "blur(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)", filter: "blur(0px)" },
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
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 0.4s ease-out both",
        "scroll-cue": "scroll-cue 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
