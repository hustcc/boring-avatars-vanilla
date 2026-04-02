import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
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
