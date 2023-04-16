// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['@nuxtjs/supabase'],
    app: {
        head: {
            title: 'GKGames',
            script: [
                {
                    src: 'https://kit.fontawesome.com/9828d37bfe.js',
                    crossorigin: 'anonymous'
                }
            ],
        },
    },
})
