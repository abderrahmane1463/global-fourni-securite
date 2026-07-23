import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: "#050505",
        graphite: "#111111",
        ash: "#A1A1AA",
        blood: {
          DEFAULT: "#E10600",
          bright: "#FF1A0D",
          deep: "#8B0300",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        body: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(225, 6, 0, 0.55)",
        "glow-sm": "0 0 20px -6px rgba(225, 6, 0, 0.5)",
        "glow-lg": "0 0 90px -10px rgba(225, 6, 0, 0.6)",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.7" },
          "80%, 100%": { transform: "scale(2.2)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out both",
        "scan-line": "scan-line 4s linear infinite",
        marquee: "marquee 32s linear infinite",
        "pulse-ring": "pulse-ring 2.6s cubic-bezier(0.16,1,0.3,1) infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [
    // Site defaults to the dark brand theme; `light:` overrides apply when
    // <html data-theme="light">, mirroring Tailwind's own dark: ergonomics.
    plugin(({ addVariant }) => {
      addVariant("light", '[data-theme="light"] &');
    }),
  ],
};

export default config;
