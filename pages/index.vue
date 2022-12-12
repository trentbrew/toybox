<script setup>
  const global = useGlobalStore()
</script>

<template>
  <main class="hero absolute top-0 left-0 h-screen overflow-hidden">
    <EffectGradientMesh />
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">toybox</h1>
        <p class="py-6">
          A kit for building playful UIs for the web, built ontop of
          <a
            class="text-primary hover:underline font-bold"
            href="https://daisyui.com/"
            >DaisyUI</a
          >
          and powered by
          <a
            class="text-primary hover:underline font-bold"
            href="https://nuxt.com/docs/getting-started/introduction"
            >Nuxt</a
          >
        </p>
        <br />
        <div class="flex gap-4 justify-center">
          <tb-button
            type="animated"
            to="https://github.com/trentbrew/toybox#readme"
            newtab
            text="Get started"
            inner-class="bg-primary"
          />
        </div>
      </div>
    </div>
  </main>
</template>
