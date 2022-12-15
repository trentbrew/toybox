<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: 'title',
    },
  })
</script>

<template>
  <div
    class="rounded-box w-full bg-transparent p-2 flex flex-col justify-center items-center"
  >
    <div class="flex justify-between items-center w-full pl-3">
      <h1 class="m-0 text-base font-bold text-base-content">
        {{ props.title }}
      </h1>
      <tb-button
        text="</>"
        inner-class="btn-xs btn-primary rounded-full w-max"
      />
    </div>
    <div
      class="bg-base-100 w-full rounded-box flex justify-center items-center mt-2 p-16"
    >
      <slot />
    </div>
  </div>
</template>
