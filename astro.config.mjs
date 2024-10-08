import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
    viewTransitions: true,
  },
  integrations: [tailwind(), svelte(), react(),]
});