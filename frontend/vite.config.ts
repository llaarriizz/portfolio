import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages serves project sites from /<repo>/, so use that as the base
  // when building in CI. Local dev keeps serving from the root.
  base: process.env.GITHUB_ACTIONS ? '/portfolio/' : '/',
  plugins: [react(), tailwindcss()],
})
