import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/DevMinwoo-Jung/weather_with_clothes/tree/main/weather_with_clothes",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 50000,
  },
})
