import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  plugins: [react()],
  resolve: {
    alias: {
      react: 'react',
      'react-dom': 'react-dom',
    },
  },
})
