import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import pages from 'vite-plugin-pages'
import compression from 'vite-plugin-compression2'
import progress from 'vite-plugin-progress'
import unoCSS from 'unocss/vite'
import { fileURLToPath, URL } from 'node:url'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'

export default defineConfig(() => {
  return {
    base: './',

    lintOnSave: false,

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

      jsx(),

      components({
        resolvers: [VarletUIResolver()]
      }),

      autoImport({
        imports: ['vue', 'vue-router', 'pinia', 'vue-i18n'],
        resolvers: [VarletUIResolver({ autoImport: true })],
        eslintrc: { enabled: true }
      }),

      pages(),

      compression({
        include: [/\.html$/, /\.css$/, /\.js$/, /\.ttf$/],
        skipIfLargerOrEqual: true
      }),

      progress(),

      unoCSS()
    ]
  }
})
