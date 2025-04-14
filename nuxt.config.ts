// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura'

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
    "@primevue/nuxt-module",
    '@sidebase/nuxt-auth',
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

  nitro: {
    routeRules: {
      '/api/**': {
        proxy: {
          to: `${process.env.NUXT_PUBLIC_BASE_URL || 'http://localhost:8080'}/**`,
        },
      },
    },
  },

  runtimeConfig: {
    public: {
      baseUrl: '',
      origin: ''
    }
  },

  auth: {
    // กำหนด origin (Frontend URL) หากจำเป็น
    origin: process.env.NUXT_PUBLIC_ORIGIN, // เปลี่ยนเป็น URL Frontend ของคุณ
    originEnvKey: 'NUXT_PUBLIC_ORIGIN',
    baseURL: process.env.NUXT_PUBLIC_BASE_URL,

    provider: {
      type: 'local',
      
      // กำหนด endpoints ให้ตรงกับ backend
      endpoints: {
        signIn: { 
          path: '/users/login', 
          method: 'post' 
        },
        signOut: { 
          path: '/users/logout', 
          method: 'post' 
        },
        getSession: { 
          path: '/users/profile', 
          method: 'get' 
        }
      },

      // ตั้งค่า Token จาก response
      token: {
        signInResponseTokenPointer: '/access_token', // ดึงจาก "access_token" ใน response
        type: 'Bearer',
        headerName: 'Authorization', // ชื่อ header ที่ส่ง token
        maxAgeInSeconds: 3600, // 60 วิ
        cookieName: 'auth.token',
      },

      // ตั้งค่า Refresh Token
      refresh: {
        isEnabled: true, // เปิดใช้งาน refresh
        endpoint: {
          path: '/users/refresh_token', 
          method: 'post' 
        },
        refreshOnlyToken: false, // false = ถ้ามีการยิง refresh token จะเปลี่ยนทั้ง access token และ refresh token
        token: {
          maxAgeInSeconds: 60 * 60 * 24 * 30, // 30 วัน
          signInResponseRefreshTokenPointer: '/refresh_token', // ดึงจาก "refresh_token" ใน response
          refreshResponseTokenPointer: '/access_token', // ดึง token ใหม่จาก "access_token"
          refreshResponseRefreshTokenPointer: '/refresh_token',
          cookieName: 'auth.refresh-token', // ชื่อ cookie สำหรับ refresh token
          // cookieName: 'RefreshToken',
          refreshRequestTokenPointer: '/refresh_token', // ตอนยิง refresh token จะให้ยิง request body ชื่ออะไร
          headerName: 'RefreshToken',
        }
      },

      // กำหนดหน้า login
      pages: {
        login: '/sign-in' // หน้า login ของคุณ
      }
    }
  }
})