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
    <div class="p-12 pt-[140px]">
      <NuxtPage />
    </div>
  </div>
</template>
