// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: 'https://lukaszrosicki.github.io',
  base: '/kalkulatory/',
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Wymuszamy, by zasoby lądowały w jednym, sztywnym katalogu
      assetsDir: '_astro',
    }
  }
});