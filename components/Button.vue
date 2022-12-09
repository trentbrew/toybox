<script setup>
  const props = defineProps({
    class: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  })
</script>

<template>
  <NuxtLink v-if="props.to" to="/components">
    <button class="btn btn-primary flex gap-2">
      <span>{{ props.text }}</span>
    </button>
  </NuxtLink>
  <a v-if="props.href" :href="props.href">
    <button class="btn btn-primary flex gap-2">
      <span>{{ props.text }}</span>
      <Icon name="open" />
    </button>
  </a>
</template>
