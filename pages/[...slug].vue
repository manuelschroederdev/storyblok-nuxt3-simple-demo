<script setup>
const { slug } = useRoute().params

// in your project, you will not need to add "part-4"
const story = await useStoryblok(slug ? 'part-4/' + slug : 'part-4/home', {
  version: 'draft',
})
</script>

<template>
  <Page v-if="story" :blok="story.content" />
</template>
