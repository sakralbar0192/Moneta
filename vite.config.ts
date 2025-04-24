/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      components: '/src/components',
      utils: '/src/utils',
    }
  },
  test: {
    setupFiles: './vitest.setup.ts',
    workspace: [ 
      { 
        extends: true, 
        test: { 
          environment: 'jsdom', 
        }, 
      }, 
    ], 
  },
})
