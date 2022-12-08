<script setup>
  const global = useGlobalStore()
</script>

<template>
  <Html :data-theme="global.theme">
    <Head>
      <Title>Toybox UI</Title>
    </Head>
    <NuxtLayout />
  </Html>
</template>
