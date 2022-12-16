<script setup>
  import { defineProps, computed, ref } from 'vue'

  const props = defineProps({
    innerClass: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'neutral',
    },
    size: {
      type: String,
      default: 'md',
    },
    to: {
      type: String,
      default: '',
    },
    newtab: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: null,
    },
  })

  const btnColor = computed(() => (props.type ? ` btn-${props.type}` : ''))
</script>

<template>
  <NuxtLink
    :to="props.to || props.href"
    :target="props.newtab ? '_blank' : '_self'"
  >
    <button
      :class="props.innerClass + btnColor"
      class="btn flex gap-3 min-w-max"
    >
      <span>{{ props.label }}</span>
      <tb-icon
        class="text-inherit"
        v-if="props.icon || props.newtab"
        :name="props.icon ? props.icon : props.newtab ? 'open' : 'star_active'"
        size="18"
      />
    </button>
  </NuxtLink>
</template>
