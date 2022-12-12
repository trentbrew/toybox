<script setup>
  const global = useGlobalStore()

  const props = defineProps({
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
</script>

<template>
  <li>
    <button
      @click="global.setTheme(props.name.toLowerCase())"
      class="flex justify-between items-center"
    >
      <span>{{ props.label || props.name }}</span>
      <div class="flex gap-1">
        <div
          :data-theme="props.name"
          class="dot border-primary-content/25 bg-primary"
        ></div>
        <div
          :data-theme="props.name"
          class="dot border-secondary-content/25 bg-secondary"
        ></div>
        <div
          :data-theme="props.name"
          class="dot border-accent-content/25 bg-accent"
        ></div>
      </div>
    </button>
  </li>
</template>

<style scoped>
  .dot {
    @apply rounded w-2 h-2 border-[1px];
  }
</style>
