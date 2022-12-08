<script setup>
  const props = defineProps({
    text: {
      type: String,
      required: true,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    speed: {
      type: Number,
      default: 1,
    },
  })

  const length = computed(() => props.text.length + 'ch')
  const speed = computed(() => 0.5 * props.speed)
  const direction = computed(() => (props.reverse ? 1 : -1))
</script>

<template>
  <div class="ticker-container">
    <p :class="`font-mono ticker`">{{ props.text }}</p>
  </div>
</template>

<style scoped>
  .ticker {
    --length: v-bind(length);
    --speed: v-bind(speed);
    --direction: v-bind(direction);
    margin: 0px;
    padding: 0px;
    display: inline-flex;
    font-size: 3em;
    font-weight: bold;
    text-transform: uppercase;
    will-change: transform;
    animation: ticker 8s infinite linear;
    text-shadow: calc(var(--length)) 0 currentColor,
      calc((var(--length)) * 2) 0 currentColor;
  }

  .ticker-container {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  @keyframes ticker {
    to {
      transform: translateX(calc((var(--length)) * var(--direction)));
    }
  }
</style>
