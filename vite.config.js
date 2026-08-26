import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Netlify sirve el sitio en la raiz del dominio; GitHub Pages lo sirve en /PortFolio/.
  base: mode === 'gh-pages' ? '/PortFolio/' : '/',
  // ------------------------------------------------------------------
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))