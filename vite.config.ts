import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/lib.ts'),
      formats: ['es'],
      fileName: 'oa',
      cssFileName: 'style',
    },
    rolldownOptions: {
      // Provided by the consuming app, so they aren't bundled into dist
      external: [/^react($|\/)/, /^react-dom($|\/)/, /^react-bootstrap($|\/)/],
    },
  },
})
