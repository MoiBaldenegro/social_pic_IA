import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "server",
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  adapter: cloudflare(),
  vite: {
    ssr: {
      external: ["node:crypto", "node:process", "node:buffer"],
      build: {
        minify: false,
      },
    },
  },
});
