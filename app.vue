<script setup>
const global = useGlobalStore()
</script>

<template>
  <Html :data-theme="global.getTheme">
    <Head><Title>Iconic</Title></Head>
    <div>
      <NuxtPage />
    </div>
  </Html>
</template>
