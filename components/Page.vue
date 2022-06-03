<template>
  <div v-editable="blok" class="font-[Roboto] px-4">
    <!-- <pre>
      {{ blok.body }}
    </pre> -->
    <component
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
