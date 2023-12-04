/// <reference types="vite/client" />

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
    readonly VITE_APP_NAME: string;
    readonly VITE_APP_BASENAME: string;
    readonly VITE_APP_VERSION: string;
}
