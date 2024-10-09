import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import astroI18next from "astro-i18next";

export default defineConfig({
  output: "server",
  integrations: [tailwind(), react(), astroI18next()],
});
