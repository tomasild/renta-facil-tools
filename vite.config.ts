import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';

export default defineConfig(({ command, mode }) => ({
  // DEV: '/', BUILD: '/renta-facil-tools/'
  base: command === 'serve' ? '/' : '/renta-facil-tools/',
  server: {
    host: '0.0.0.0', // Cambia '::' a '0.0.0.0' para permitir conexiones externas
    port: 8080,
  },
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    sourcemap: true, // Activa la generación de sourcemaps para debugging
    emptyOutDir: true,
  },
  plugins: [
    react(),
    // Taggea componentes solo en dev
    command === 'serve' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}));