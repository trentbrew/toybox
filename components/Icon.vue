<script setup>
  import api from '@/hooks/api'

  const props = defineProps({
    name: {
      type: String,
      default: '',
      requred: true,
    },
    class: {
      type: String,
      default: '',
    },
  })

  const { data: svg } = api.icons.get(props.name)
</script>

<template>
  <div :class="props.class" v-html="svg"></div>
</template>
