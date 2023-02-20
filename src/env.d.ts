import 'vite/client'

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_APP_ENV: string
    readonly VITE_APP_PRODUCTION: boolean
    readonly VITE_APP_BASE_URL: string
    // more env variables...
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
