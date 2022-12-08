<script setup>
import api from '@/hooks/api'

const props = defineProps({
  name: {
    type: String,
    default: "",
    requred: true,
  },
  color: {
    type: String,
    default: "gray",
  },
});

const { data:svg } = api.icons.get(props.name)
</script>

<template>
  <div
    v-html="svg"
    :style="`
      color: ${props.color};
    `"
  ></div>
</template>
