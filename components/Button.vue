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
    icon: {
      type: String,
      default: null,
    },
  })
</script>

<template>
  <NuxtLink v-if="props.to" to="/components">
    <button class="btn rounded flex gap-2" :class="props.class">
      <span>{{ props.text }}</span>
      <Icon v-if="props.icon" :name="props.icon" size="18" />
    </button>
  </NuxtLink>
  <a v-if="props.href" :href="props.href">
    <button class="btn rounded flex gap-2" :class="props.class">
      <span>{{ props.text }}</span>
      <Icon v-if="props.icon" :name="props.icon" size="18" />
    </button>
  </a>
</template>
