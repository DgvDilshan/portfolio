import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  // Avoid hardcoding a subpath; Vercel root deployments should use '/'.
  base: mode === 'production' ? '/' : '/',
  build: {
    outDir: 'build',
    chunkSizeWarningLimit: 1000,
  },
}))
