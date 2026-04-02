import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  base: '/boring-avatars-vanilla/',
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
