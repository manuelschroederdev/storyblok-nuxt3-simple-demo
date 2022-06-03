import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  components: {
    global: true,
    dirs: ['~/components'],
  },
  modules: [
    ['@storyblok/nuxt', { accessToken: 'NKTXbnJKkSyy1rYi68dXyQtt' }],
    '@nuxtjs/tailwindcss',
  ],
})
