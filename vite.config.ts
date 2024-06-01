import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import * as path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environmentMatchGlobs: [['src/tests/components/**', 'jsdom']],
  },
});
