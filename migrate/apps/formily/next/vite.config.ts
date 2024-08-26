import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  root: 'playground', // Vite will look for index.html here
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
