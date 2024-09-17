import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        veronica: {
          DEFAULT: "#9333ea",
          100: "#1d0534",
          200: "#3b0b67",
          300: "#58109b",
          400: "#7516cf",
          500: "#9333ea",
          600: "#a85dee",
          700: "#bd85f2",
          800: "#d3aef6",
          900: "#e9d6fb",
        },
        azure: {
          DEFAULT: "#3b82f6",
          100: "#03183a",
          200: "#063075",
          300: "#0848af",
          400: "#0b60ea",
          500: "#3b82f6",
          600: "#639cf8",
          700: "#8ab5f9",
          800: "#b1cefb",
          900: "#d8e6fd",
        },
        rich_black: {
          DEFAULT: "#020817",
          100: "#000205",
          200: "#010309",
          300: "#01050e",
          400: "#020613",
          500: "#020817",
          600: "#0a2771",
          700: "#1246ca",
          800: "#4d7bef",
          900: "#a6bdf7",
        },
        jonquil: {
          DEFAULT: "#facc15",
          100: "#352b01",
          200: "#6a5502",
          300: "#9f8003",
          400: "#d4aa04",
          500: "#facc15",
          600: "#fbd643",
          700: "#fce172",
          800: "#fdeba1",
          900: "#fef5d0",
        },
        seasalt: {
          DEFAULT: "#f8fafc",
          100: "#1e3246",
          200: "#3c648c",
          300: "#6c96c0",
          400: "#b2c8de",
          500: "#f8fafc",
          600: "#f9fbfd",
          700: "#fbfcfd",
          800: "#fcfdfe",
          900: "#fefefe",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 8s infinite",
        gradient: "gradient 8s linear infinite",
        move: "move 5s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
} satisfies Config;

export default config;
