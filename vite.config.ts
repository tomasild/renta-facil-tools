import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';


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

