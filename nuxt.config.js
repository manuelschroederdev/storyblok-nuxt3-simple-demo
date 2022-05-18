import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    ['@storyblok/nuxt', { accessToken: 'NKTXbnJKkSyy1rYi68dXyQtt' }],
    '@nuxtjs/tailwindcss',
  ],
})
