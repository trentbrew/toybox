<script setup>
  const emit = defineEmits(['update:modelValue'])

  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: true,
    },
    innerClass: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
  })

  function handleToggle(e) {
    emit('update:modelValue', e.target.checked)
  }
</script>

<template>
  <div class="form-control w-full">
    <label class="cursor-pointer label w-full">
      <span v-if="props.label" class="label-text">{{ props.label }}</span>
      <input
        type="checkbox"
        class="toggle"
        :class="props.innerClass"
        @change="handleToggle"
      />
    </label>
  </div>
</template>
