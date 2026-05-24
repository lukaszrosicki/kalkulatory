// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://lukaszrosicki.github.io',
  base: '/kalkulatory/',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsDir: '_astro'
    }
  }
});