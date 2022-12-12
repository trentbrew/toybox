<script setup>
  import { defineProps, computed, ref } from 'vue'

  const props = defineProps({
    name: {
      type: String,
      default: '',
      requred: true,
    },
    size: {
      type: [Number, String],
      default: 24,
    },
  })

  const svg = ref(null)

  const res = await fetch(
    `https://toybox.design/api/v1/icons/${props.name}?size=${props.size}`
  )

  res.json().then(data => {
    svg.value = data.svg
  })
</script>

<template>
  <div v-html="svg"></div>
</template>
