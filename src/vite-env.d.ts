/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_POSTHOG_KEY: string;
  VITE_POSTHOG_HOST: string;
}

interface ImportMeta {
  /** Custom environment variables */
  readonly env: ImportMetaEnv;
}
