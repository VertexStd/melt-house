/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F7EFE1",
          soft: "#FBF6EC",
          deep: "#EDE2CC"
        },
        espresso: {
          DEFAULT: "#2C1A10",
          light: "#3E2417",
          soft: "#4A2E1E"
        },
        caramel: {
          DEFAULT: "#C1793B",
          light: "#D89A5D",
          pale: "#E9C79A"
        },
        burgundy: {
          DEFAULT: "#6E2432",
          light: "#8A3444"
        },
        brass: {
          DEFAULT: "#B98A46",
          light: "#D4AD73"
        }
      },
      fontFamily: {
        display: ["Cormorant Garamond", "ui-serif", "Georgia", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        eyebrow: "0.12em",
        widest2: "0.14em",
        widest3: "0.22em"
      },
      lineHeight: {
        display: "1.08",
        prose: "1.75"
      },
      maxWidth: {
        content: "1400px",
        prose: "42rem"
      },
      spacing: {
        section: "7rem",
        "section-lg": "9rem"
      },
      borderRadius: {
        image: "0.5rem"
      },
      transitionTimingFunction: {
        melt: "cubic-bezier(0.22, 1, 0.36, 1)"
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")"
      },
      keyframes: {
        drip: {
          "0%": { transform: "translateY(-6px)", opacity: "0" },
          "60%": { opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        drip: "drip 0.6s cubic-bezier(0.22,1,0.36,1) both",
        marquee: "marquee 34s linear infinite",
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
