<script setup>
  const props = defineProps({
    data: {
      type: String,
      default: '',
      required: true,
    },
  })

  function copyCode() {
    console.log('copied code')
    navigator.clipboard.writeText(props.data)
  }
</script>

<template>
  <div class="mockup-code w-full">
    <tb-button @click="copyCode" icon="copy" class="absolute right-0 top-1">
    </tb-button>
    <pre><code>{{ props.data }}</code></pre>
  </div>
</template>
