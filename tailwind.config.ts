import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        //Tono para temas oscuros

        // Gradiente 1: Atardecer oscuro
        "gradient-sunset":
          "linear-gradient(135deg, #232526 0%, #414345 50%, #633231 100%)",
        "gradient-sunset-invert":
          "linear-gradient(135deg, #232526 0%, #414345 50%, #633231 20%)",
      },
    },
  },
  plugins: [],
};
export default config;
