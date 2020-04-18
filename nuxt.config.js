
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Goodvibe Coaching',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Cormorant+Garamond|Dancing+Script&display=swap' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' }
    ],
    script: [
      { src: '/js/jquery.min.js', body: true },
      { src: '/js/jquery.dropotron.min.js', body: true },
      { src: '/js/jquery.poptrox.min.js', body: true },
      { src: '/js/breakpoints.min.js', body: true },
      { src: '/js/browser.min.js', body: true },
      { src: '/js/utils.js', body: true },
      { src: '/js/stuff.js', body: true, defer: true },
      { src: 'https://assets.calendly.com/assets/external/widget.js', body: true, defer: true  }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/normalise.scss',
    '@/assets/css/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) { }
  }
};
