import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ['src/**/*.ts'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'BoringAvatars',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => {
        if (format === 'es') return 'index.js';
        if (format === 'cjs') return 'index.cjs';
        return 'index.umd.js';
      },
    },
    rollupOptions: {
      // No external dependencies - this is a vanilla library
      external: [],
      output: {
        // Provide global variables for UMD build
        globals: {},
      },
    },
    // Clean output directory
    emptyOutDir: true,
  },
});
