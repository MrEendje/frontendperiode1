import { defineConfig } from 'vite';

export default defineConfig({
  // Relatieve paden, zodat de build ook werkt als je hem in een submap
  // (bv. GitHub Pages) zet.
  base: './',
  server: {
    open: true,
    port: 5173
  },
  build: {
    outDir: 'dist'
  }
});
