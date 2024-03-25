/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />
import dayjs from 'dayjs'

interface ImportMetaEnv {
  readonly VITE_API_BASE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $dayjs: typeof dayjs
  }
}
