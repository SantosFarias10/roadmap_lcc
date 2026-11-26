/// <reference types="vitest/config" />
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages sirve el sitio en https://<usuario>.github.io/roadmap_lcc/
  base: '/roadmap_lcc/',
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'node',
  },
})
