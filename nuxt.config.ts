export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  ssr: true,
  router: {
    options: {
      hashMode: false
    }
  },
  devtools: {
    enabled: true
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    'nuxt-typed-router',
    '@vite-pwa/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'nuxt-lodash',
    '@nuxt/image',
    '@vueuse/nuxt'
  ],
  runtimeConfig: {
    public: {
      CLOUDEA_URL: process.env.CLOUDEA_URL,
      CLOUDEA_API: process.env.CLOUDEA_API
    }
  },
  imports: {
    dirs: ['./composables', './utils', './store/**/*.ts']
  },

  // Development configuration
  css: ['@/assets/css/index.scss'],
  piniaPersistedstate: {
    cookieOptions: {
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'strict'
    }
  },
  i18n: {
    langDir: './language',
    locales: [
      {
        code: 'zh-cn',
        iso: 'zh-cn',
        file: 'zh-cn.json'
      },
      {
        code: 'en-us',
        iso: 'en-us',
        file: 'en-us.json'
      }
    ],
    baseUrl: process.env.CLOUDEA_URL,
    defaultLocale: 'zh-cn',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'cloudea-language',
      redirectOn: 'root'
    }
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__CLOUDEA_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: 'cloudea-',
    classSuffix: '-mode',
    storageKey: 'cloudea-color-mode'
  },
  pwa: {
    registerType: 'autoUpdate',
    disable: process.env.NODE_ENV === 'development',
    manifest: {
      name: 'Cloudea Platform',
      short_name: 'Cloudea',
      theme_color: '#218bff',
      icons: undefined
    },
    strategies: 'generateSW',
    workbox: {
      globPatterns: ['**/*.{js,css,png,webp,svg,ico}'],
      navigateFallback: null
    },
    client: {
      installPrompt: true
    },
    injectRegister: 'auto'
    // devOptions: {
    //   enabled: true,
    //   suppressWarnings: true,
    //   navigateFallbackAllowlist: [/^\/$/],
    //   type: 'module'
    // }
  }
})
