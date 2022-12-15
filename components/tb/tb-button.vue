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

  const btnClass = computed(() => (props.type ? `btn-${props.type}` : ''))

  const iconClass = computed(() =>
    props.type ? `text-${props.type}-content` : ''
  )
</script>

<template>
  <NuxtLink
    :to="props.to || props.href"
    :target="props.newtab ? '_blank' : '_self'"
  >
    <button class="btn rounded flex gap-3 min-w-max" :class="btnClass">
      <span>{{ props.label }}</span>
      <tb-icon
        v-if="props.icon || props.newtab"
        :style="`color: var(hsl(var(--${props.type[0]}c)));`"
        :name="props.icon ? props.icon : props.newtab ? 'open' : 'star_active'"
        size="18"
      />
    </button>
  </NuxtLink>
</template>
