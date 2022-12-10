<script setup>
  const props = defineProps({
    src: {
      type: String,
      default: '',
      required: true,
    },
  })
</script>

<template>
  <div
    :style="`
      background-image: url('${props.src}');
    `"
  ></div>
</template>
