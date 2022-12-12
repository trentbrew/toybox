<script setup>
  const props = defineProps({
    text: {
      type: String,
      default: 'click me',
    },
    to: {
      type: String,
      default: '#',
      required: true,
    },
  })
</script>

<template>
  <nuxt-link :to="props.to">
    <button class="btn btn-primary">{{ props.text }}</button>
  </nuxt-link>
</template>
