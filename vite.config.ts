import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: false,
    cors: true,
    fs: {
      allow: ['/vercel/share/v0-project'],
    },
  },
  preview: {
    port: 4173,
    host: '0.0.0.0',
    strictPort: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['lucide-react', 'framer-motion'],
    esbuildOptions: {
      target: 'esnext',
      supported: {
        bigint: true,
      },
    },
  },
});
