<script setup>
  const global = useGlobalStore()

  const props = defineProps({
    themes: Array,
    index: Number,
    name: {
      type: String,
      default: '',
      required: true,
    },
    label: {
      type: String,
      default: null,
    },
  })

  const theme = computed(() => props.name.toLowerCase())
  const active = computed(() => theme == global.theme)
  const top = computed(() => props.index == 0)
  const bottom = computed(() => props.index == props.themes.length - 1)
</script>

<template>
  <button
    :data-theme="theme"
    @click="global.setTheme(theme)"
    class="flex justify-between items-center group hover:bg-base-200"
    :class="
      top
        ? '!rounded-t-lg !rounded-b-none'
        : bottom
        ? '!rounded-b-lg !rounded-t-none'
        : '!rounded-none'
    "
  >
    <span class="text-base-content">
      {{ props.label || props.name }}
    </span>
    <div class="flex gap-1 p-1 rounded-full duration-75">
      <div class="dot border-primary-content/25 bg-primary"></div>
      <div class="dot border-secondary-content/25 bg-secondary"></div>
      <div class="dot border-accent-content/25 bg-accent"></div>
    </div>
  </button>
</template>

<style scoped>
  .dot {
    @apply rounded w-2 h-2 border-[1px];
  }
</style>
