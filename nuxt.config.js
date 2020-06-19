
export default {
    mode: 'universal',
    /*
  ** Headers of the page
  */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap' }

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
        'normalize.css/normalize.css',
        'assets/theme.css'
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
        '@nuxtjs/color-mode'
    ],
    /*
  ** Nuxt.js modules
  */
    modules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/svg'
    ],
    styleResources: {
        scss: [
            'assets/scss/custom.reset.scss'
        ]
    },
    /*
  ** Build configuration
  */
    build: {
    /*
    ** You can extend webpack config here
    */
        extend (config, ctx) {
        }
    },
    generate: {
        routes: function () {
            const fs = require('fs')
            const path = require('path')
            return fs.readdirSync('./assets/content/blog').map(file => {
                return {
                    route: `/blog/${path.parse(file).name}`, // Return the slug
                    payload: require(`./assets/content/blog/${file}`)
                }
            })
        }
    }
}
