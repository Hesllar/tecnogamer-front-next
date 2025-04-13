import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/products/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        //Tono para temas oscuros

        // Gradiente 1: Atardecer oscuro
        "gradient-sunset":
          "linear-gradient(135deg, #232526 0%, #414345 50%, #633231 100%)",
        "gradient-sunset-custom_1":
          "linear-gradient(135deg, #414345 50%, #633231 50%)",
        "gradient-sunset-custom_2":
          "linear-gradient(135deg, #633231 50%, #414345 50%)",
        "gradient-cyan-via-green":
          "linear-gradient(135deg, #06b6d4 0%, #4ade80 50%, #ffffff 100%);",
        "gradient-cyan-via-green_custom_1":
          "linear-gradient(135deg, #ffffff 0%, #4ade80 50%, #06b6d4 80%);",
        "gradient-cyan-via-green_custom_2":
          "linear-gradient(135deg, #ffffff 0%, #06b6d4 60%, #4ade80 50%);",
      },
    },
  },
  plugins: [],
};
export default config;
