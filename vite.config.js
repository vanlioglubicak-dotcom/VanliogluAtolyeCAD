import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
export default defineConfig({
  plugins: [react()],
  build: { outDir: 'dist-renderer' },
  resolve: { alias: { '@': path.resolve(__dirname, 'renderer/src') } },
  server: { port: 5173 }
});
