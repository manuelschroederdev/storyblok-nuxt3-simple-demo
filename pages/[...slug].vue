<script setup>
const { slug } = useRoute().params

// in your project, you will not need to add "part-2"
const story = await useStoryblok(slug ? 'part-2/' + slug : 'part-2/home', {
  version: 'draft',
})
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
