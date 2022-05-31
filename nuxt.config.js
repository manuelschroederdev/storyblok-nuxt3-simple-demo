import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    ['@storyblok/nuxt', { accessToken: 'OurklwV5XsDJTIE1NJaD2wtt' }],
    '@nuxtjs/tailwindcss',
  ],
})
