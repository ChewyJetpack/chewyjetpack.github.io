export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'emilsmith',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/icons.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@aceforth/nuxt-optimized-images',
    '@nuxt/content',
    '@nuxtjs/markdownit',
    'nuxt-clipboard2',
    '@nuxtjs/style-resources',
    '@nuxt/image'
  ],

  optimizedImages: {
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
    pngquant: false,
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3,
    },
    svgo: {
      // enable/disable svgo plugins here
    },
    webp: {
      preset: 'default',
      quality: 75,
    },
  },

  styleResources: {
    scss: [
      '~/scss/vars.scss',
      '~/scss/global.scss',
    ]
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true
  },

  content: {
    // Options
  },

  // generate: {
  //   routes: function() {
  //     const fs = require('fs');
  //     const path = require('path');
  //     //const collections = ['posts', 'projects', '_tags'];
  //     return fs.readdirSync('./content/posts').map(file => {
  //       return {
  //         route: `/posts/${path.parse(file).name}`, // Return the slug
  //         payload: require(`./content/posts/${file}`),
  //       };
  //     });
  //   },
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
