/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: any;
  readonly VITE_API_ACESS_TOKEN: any;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}