import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

export default defineConfig({
  output: "server",
  integrations: [tailwind(), react()],
  adapter: vercel(), // Asegúrate de que esto esté correctamente configurado
});
