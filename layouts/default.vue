<script setup>
  const global = useGlobalStore()
</script>

<template>
  <Navigation />
  <div>
    <Banner
      v-if="global.title || global.subtitle"
      :title="global.title"
      :subtitle="global.subtitle"
    />
    <div class="p-16 pt-[160px]">
      <NuxtPage />
    </div>
  </div>
</template>
