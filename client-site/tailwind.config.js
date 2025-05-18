/** @type {import('tailwindcss').Config} */
import animatePlugin from "tailwindcss-animate";
import scrollbar from "tailwind-scrollbar";

export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this based on your file structure
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        bgBlack: "#000000",
        bgPrimary: "#f0ece1",
        bgBlue: "rgb(36, 58, 72)",
        bgSecondary: "#333333",
        bgSidebarsBg: "#4a4e42",
        bgTabActiveColor: "#f2dca7",
        bgTableHeader: "#E4E4E4",
        bgYellowColor: "#ffcc2f",
        bgHoverYellowColor: "#f1b910",
        bgModalColor: "#EEEEEE",
        bgRed: "#FF0000",
        bgMatchedColor: "#3b5160",
        textTableHeader: "#243A48",
        textHeadingColor: "#243a48",
        textBlueColor: "#2789ce",
        textRedColor: "#DC3545",
        textGreenColor: "#198754",
        borderTableColor: "#7e97a7",
        borderYellowColor: "#cb8009",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        // 		 backgroundImage: {
        //     'gradient-white-to-light': 'linear-gradient(180deg, #ffffff, #eeeeee)',
        //   }
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  // plugins: [animatePlugin],
  plugins: [animatePlugin, scrollbar],
};
