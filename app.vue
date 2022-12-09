<script setup>
  const global = useGlobalStore()
  onMounted(() => {
    window.addEventListener('keydown', e => {
      if (e.key === '\\') window.open('/debug/bear', '_self')
    })
  })
</script>

<template>
  <Html :data-theme="global.theme">
    <Head>
      <Title>Toybox UI</Title>
    </Head>
    <NuxtLayout />
  </Html>
</template>
