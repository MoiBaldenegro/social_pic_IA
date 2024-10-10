import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel"; // O el adaptador que necesites

export default defineConfig({
  output: "server",
  integrations: [tailwind(), react()],
  adapter: vercel(), // Asegúrate de que el adaptador esté instalado
  vite: {
    ssr: {
      noExternal: ["astro-i18next"],
    },
  },
});
