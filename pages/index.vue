<script setup></script>

<template>
  <main>
    <div
      class="hero bg-base-200 absolute top-[97px] left-0 h-[calc(100vh-97px)]"
    >
      <div class="hero-content text-center">
        <div class="max-w-md -mt-24">
          <h1 class="text-5xl font-bold">toybox</h1>
          <p class="py-6">
            A kit for building playful UIs for the web, built ontop of
            <a class="text-accent hover:underline" href="https://daisyui.com/"
              >DaisyUI</a
            >
            and powered by
            <a
              class="text-accent hover:underline"
              href="https://nuxt.com/docs/getting-started/introduction"
              >Nuxt</a
            >
          </p>
          <br />
          <NuxtLink to="/components">
            <button class="btn btn-primary">Get started</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>
