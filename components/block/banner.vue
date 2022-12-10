<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: 'Components',
    },
    subtitle: {
      type: String,
      default:
        'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
    },
  })
</script>

<template>
  <div class="hero bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">{{ props.title }}</h1>
        <p class="py-6">{{ props.subtitle }}</p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
</template>
