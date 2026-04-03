import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ['src/**/*.ts'],
    }),
    {
      // Vite 7 intentionally skips minification for the ES lib format.
      // Using generateBundle (runs after all renderChunk hooks) ensures
      // the ES output is minified after Vite's own transforms complete.
      name: 'minify-es',
      enforce: 'post',
      async generateBundle(_options, bundle) {
        const { transform } = await import('esbuild');
        for (const chunk of Object.values(bundle)) {
          if (chunk.type === 'chunk' && chunk.fileName.endsWith('.js')) {
            const result = await transform(chunk.code, { minify: true });
            chunk.code = result.code;
          }
        }
      },
    },
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
        // Support both named and default exports
        exports: 'named',
      },
    },
    // Minify CJS and UMD; ES is handled by the minify-es plugin above
    // because Vite 7 skips minification for ES lib format by design
    minify: 'esbuild',
    // Clean output directory
    emptyOutDir: true,
  },
});
