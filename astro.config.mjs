import i18n from "astro-i18n";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://feernandooff.com",
  integrations: [i18n(), mdx(), sitemap(), svelte(), tailwind()],
  vite: {
    ssr: {
      noExternal: ["three", "troika-three-text"]
    }
  }
});