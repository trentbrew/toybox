<script setup>
  import { Gradient } from '@/lib/gradient'

  const global = useGlobalStore()

  const state = reactive({
    ready: false,
  })

  function runGradient() {
    const gradient = new Gradient()
    gradient.initGradient('#gradient-canvas')
    setTimeout(() => {
      state.ready = true
    }, 4000)
  }

  onMounted(() => {
    runGradient()
  })

  watch(
    () => global.theme,
    () => {
      state.ready = false
      runGradient()
    }
  )
</script>

<style scoped>
  #gradient-canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    transform: scale(1.8);
    filter: blur(12px);
    transition: opacity 3s cubic-bezier(0.45, 0, 0.55, 1) !important;
    --gradient-color-1: hsl(var(--p));
    --gradient-color-2: hsl(var(--s));
    --gradient-color-3: hsl(var(--b1));
    --gradient-color-4: hsl(var(--b1));
  }
</style>

<template>
  <canvas
    :style="!state.ready ? 'opacity: 0' : 'opacity: 0.16'"
    id="gradient-canvas"
  ></canvas>
</template>
