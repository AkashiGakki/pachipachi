import { appDescription } from './constants/index'

const isDev = process.env.NODE_ENV === 'development'

const apiBaseUrl = 'http://localhost:3001'
// const apiBaseUrl = 'https://pachipachi-proxy.vercel.app'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image-edge',
    '@nuxtjs/i18n',
  ],

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
  },

  routeRules: {
    '/**': isDev ? {} : { cache: { swr: true, maxAge: 120, staleMaxAge: 60, headersOnly: true } },
  },

  runtimeConfig: {
    public: {
      apiBaseUrl,
    },
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  devtools: {
    enabled: true,
  },

  image: {
    provider: 'proxy',
    providers: {
      proxy: {
        provider: 'ipx',
        options: {
          baseURL: `${apiBaseUrl}/ipx`,
        },
      },
    },
  },

  i18n: {
    detectBrowserLanguage: {
      useCookie: false,
      fallbackLocale: 'en',
    },
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        file: 'en.json',
      },
      {
        code: 'zh-CN',
        file: 'zh-CN.json',
      },
    ],
    lazy: true,
    langDir: 'internationalization',
    defaultLocale: 'en',
  },
})
