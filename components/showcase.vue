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
    class="rounded-box w-full bg-transparent mb-3 flex flex-col justify-center items-center"
  >
    <div
      class="flex justify-between items-center w-full p-3 pl-4 bg-base-100 border-b-[1.5px] border-base-200 rounded-box rounded-b-none"
    >
      <h1 class="m-0 text-base font-bold text-base-content">
        {{ props.title }}
      </h1>
      <tb-button label="</>" type="secondary" inner-class="btn-xs" />
    </div>
    <div
      class="bg-base-100 w-full rounded-box rounded-t-none flex justify-center items-center p-16"
    >
      <slot />
    </div>
  </div>
</template>
