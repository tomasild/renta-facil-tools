import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';

<<<<<<< HEAD
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
=======
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  return {
    base: isProduction ? "/renta-facil-tools/" : "./", // Ajustado al nombre del repositorio proporcionado
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(
      Boolean
    ),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: 'docs', // Cambiado de 'dist' a 'docs'
      assetsDir: 'assets', // Asegura que los assets se coloquen en una subcarpeta 'assets' dentro de 'docs'
      emptyOutDir: true, // Limpia el directorio de salida antes de construir
    },
  };
});
>>>>>>> acc961cbb6b97eb8f668219e64727fca610c728c
