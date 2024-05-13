import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import vueRouter from 'unplugin-vue-router/vite'
import icon from '@varlet/unplugin-icon-builder/vite'
import unoCSS from 'unocss/vite'
import { fileURLToPath, URL } from 'node:url'
import { VarletImportResolver } from '@varlet/import-resolver'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  server: {
    host: '0.0.0.0',
    port: 10087
  },

  build: {
    target: ['ios12']
  },

  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          img: ['src'],
          video: ['src'],
          audio: ['src'],
          'var-image': ['src'],
          'var-avatar': ['src'],
          'var-card': ['src'],
          'var-app-bar': ['image']
        }
      }
    }),

    vueRouter({
      exclude: ['**/components/**', '**/use/**']
    }),

    jsx(),

    icon({ dir: 'src/assets/icons' }),

    components({
      resolvers: [VarletImportResolver()]
    }),

    autoImport({
      imports: ['vue', 'vue-router', 'pinia', 'vue-i18n'],
      resolvers: [VarletImportResolver({ autoImport: true })],
      eslintrc: { enabled: true }
    }),

    unoCSS()
  ]
})
