import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/weather_with_clothes",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 50000,
    outDir: 'dist',
  },
})
