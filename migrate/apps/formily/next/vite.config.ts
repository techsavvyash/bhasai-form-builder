import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import MonacoEditorPlugin from 'vite-plugin-monaco-editor'
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import'

function resolveLessModules() {
  return {
    name: 'resolve-less-modules',
    enforce: 'pre',
    transform(code, id) {
      if (
        id.endsWith('.less') ||
        id.endsWith('.scss') ||
        id.endsWith('.sass')
      ) {
        return code.replace(/~([^'"]+)/g, (match, p1) => {
          return path.posix.join('node_modules', p1)
        })
      }
    },
  }
}

export default defineConfig({
  plugins: [
    resolveLessModules(),
    react(),
    MonacoEditorPlugin({
      languageWorkers: ['editorWorkerService', 'typescript'],
    }),
    createStyleImportPlugin({
      resolves: [AntdResolve()],
    }),
  ],
  root: 'playground',
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'node_modules'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: '127.0.0.1',
    open: true,
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})
