/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REACT_APP_MID_FORECAST_KEY: string
  readonly VITE_REACT_APP_KAKAO_ADMIN_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}