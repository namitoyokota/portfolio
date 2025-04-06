/// <reference types="vite/client" />

interface ImportMetaEnv {}

interface ImportMeta {
  /** Custom environment variables */
  readonly env: ImportMetaEnv;
}
