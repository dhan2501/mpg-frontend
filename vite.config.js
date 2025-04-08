import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../staticfiles/frontend/dev', // Make sure this path is correct
    emptyOutDir: true,
  },
  base: '/',
})
