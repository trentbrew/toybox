<script setup>
  const props = defineProps({
    innerClass: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '',
    },
    newtab: {
      type: Boolean,
      default: false,
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
  <NuxtLink
    :to="props.to || props.href"
    :target="props.newtab ? '_blank' : '_self'"
  >
    <button class="btn rounded flex gap-2" :class="props.innerClass">
      <span>{{ props.text }}</span>
      <Icon
        v-if="props.icon || props.newtab"
        :name="props.icon ? props.icon : props.newtab ? 'open' : 'star_active'"
        size="18"
      />
    </button>
  </NuxtLink>
</template>
