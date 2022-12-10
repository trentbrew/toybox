<script setup>
  import { Gradient } from 'whatamesh'

  onMounted(() => {
    const gradient = new Gradient()
    gradient.initGradient('#gradient-canvas')
  })
</script>

<style scoped>
  #gradient-canvas {
    width: 100vw;
    height: 100vh;
    filter: blur(24px);
    transform: scale(2);
    --gradient-color-1: hsl(var(--p));
    --gradient-color-2: hsl(var(--s));
    --gradient-color-3: hsl(var(--a));
    --gradient-color-4: hsl(var(--n));
  }

  #gradient-canvas3 {
    border-radius: 18px;
  }
</style>

<template>
  <canvas id="gradient-canvas"></canvas>
</template>
