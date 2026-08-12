/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#080d18",
          900: "#0a1120",
          850: "#0d1526",
          800: "#101b30",
          700: "#16233d",
          600: "#1c2d4a",
        },
        cyan: {
          accent: "#3bc7f0",
        },
        blue: {
          accent: "#2f6fed",
        },
        paper: "#f2f4f7",
        stamp: "#d13b3b",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #2f6fed 0%, #3bc7f0 100%)",
        "hero-wave": "linear-gradient(90deg, #2f6fed 0%, #3bc7f0 60%, #6fe0ff 100%)",
      },
      boxShadow: {
        card: "0 1px 2px 0 rgba(16, 24, 40, 0.06)",
        polaroid: "0 30px 60px -15px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
