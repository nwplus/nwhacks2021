import pkg from './package'
import { meta } from './plugins/meta'

// Handles production env variables when building (These can be public)
const envVars = process.env.DEPLOY_ENV === 'GH_PAGES' || process.env.DEPLOY_ENV === 'PRODUCTION'
  ? {
    env: {
      NUXT_ENV_FIREBASE_API_KEY: 'AIzaSyDGa7alU0NhfBATSQ6CalkY4Za9wWPrM7o',
      NUXT_ENV_FIREBASE_AUTH_DOMAIN: 'nwplus-ubc.firebaseapp.com',
      NUXT_ENV_FIREBASE_DATABASE_URL: 'https://nwplus-ubc.firebaseio.com',
      NUXT_ENV_FIREBASE_PROJECT_ID: 'nwplus-ubc',
      NUXT_ENV_FIREBASE_STORAGE_BUCKET: 'nwplus-ubc.appspot.com',
      NUXT_ENV_FIREBASE_MESSAGING_SENDER_ID: '306881258768',
      NUXT_ENV_FIREBASE_APP_ID: '1:306881258768:web:bc922148732abee79f7195',
      mailingListUrl: 'https://us-central1-nwplus-ubc-dev.cloudfunctions.net/addToMailingList'
    }
  }
  : {
    env: {
      mailingListUrl: 'https://us-central1-nwplus-ubc-dev.cloudfunctions.net/addToMailingList'
    }
  }

export default {
  ...envVars,
  mode: 'spa',
  /*
   ** Headers of the page
   */
  hooks: {
    'generate:page': (page) => {
      page.html = meta(page)
    }
  },

  head: {
    title: 'nwHacks 2021',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/firebase.js'
  ],

  /*
   ** Cache static resources for better performance.
   */
  render: {
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 1
    }
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ],
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/svg-sprite',
    'nuxt-buefy',
    '@nuxtjs/toast',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-172083124-1',
        dev: false
      }
    ],
    ['vue-scrollto/nuxt', { offset: -80 }],
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['scss/lhd.scss']
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
