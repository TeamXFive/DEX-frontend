// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// Configuração principal do Vite
export default defineConfig({
  plugins: [
    react(),  // Plugin do React
    svgr()    // Plugin para importar SVGs como componentes React
  ],
});

