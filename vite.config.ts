/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from '@primevue/auto-import-resolver';

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        PrimeVueResolver()
      ]
    })
  ],
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
