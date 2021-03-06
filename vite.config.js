import { build, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  server: {
    port: 2736
  },
  preview: {
    port: 8080
  },
  build: {
    outDir: './dist',
  },
  base: '/React18/',
  plugins: [react()]
})