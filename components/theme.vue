<script setup>
  const global = useGlobalStore()

  const props = defineProps({
    name: {
      type: String,
      default: '',
      required: true,
    },
  })
</script>

<template>
  <li>
    <button
      @click="global.setTheme(props.name.toLowerCase())"
      class="flex justify-between items-center"
    >
      <span>{{ props.name }}</span>
      <div class="flex gap-1">
        <div class="dot bg-primary"></div>
        <div class="dot bg-secondary"></div>
        <div class="dot bg-accent"></div>
      </div>
    </button>
  </li>
</template>

<style scoped>
  .dot {
    @apply rounded-full w-2 h-2;
  }
</style>
