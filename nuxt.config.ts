// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura'
console.log(process.env.API_BASE_URL, 'API_BASE_URL')

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: ["@/assets/css/tailwind.css", "@/assets/css/main.css", "primeicons/primeicons.css"],

  ssr: false,
  devServer: { 
    host: process.env.NUXT_PUBLIC_TAURI_DEV_HOST || 'localhost'
  },

  plugins: [
  ],

  vite: {
    // Better support for Tauri CLI output
    clearScreen: false,
    // Enable environment variables
    // Additional environment variables can be found at
    // https://v2.tauri.app/reference/environment-variables/
    envPrefix: ['VITE_', 'TAURI_'],
    server: {
      // Tauri requires a consistent port
      strictPort: true,
    },
  },

  typescript: {
    tsConfig: {
      include: [
        'types/**/*',
        'composables/**/*'
      ],
      compilerOptions: {
        module: 'esnext',
      },
    },
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    "@primevue/nuxt-module"
  ],

  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  },

  

  postcss: {
    plugins: {
      "postcss-import": {},
      '@tailwindcss/postcss': {},
      // tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      baseUrl: '',
    }
  },
})