import type {Config} from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1080px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        // foreground: "var(--foreground)",
        border: "hsl(var(--border))",
        green: "hsl(var(--green))",
        gray: "hsl(var(--gray))",
        "primary-white": "hsl(var(--primary-white))",
        "primary-black": "hsl(var(--primary-black))",
        "secondary-black": "hsl(var(--secondary-black))",
      },

      height: {
        navbar: "var(--navbar-height)",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
