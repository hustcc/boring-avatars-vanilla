import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  // BASE_URL env var can be set to override the default base path
  // Default is '/boring-avatars-vanilla/' for GitHub Pages deployment
  base: process.env.BASE_URL || '/boring-avatars-vanilla/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      'boring-avatars-vanilla': resolve(__dirname, '../src/index.ts'),
    },
  },
});
