<br />
<div align="center">
  <h1>Toybox</h1>
  <p align="center">
    <a href="https://toybox.design">Components</a>
    &nbsp·&nbsp
    <a href="https://toybox.design/icons">Icons</a>
    &nbsp·&nbsp
    <a href="https://toybox.design/api/v1/icons">API</a>
  </p>
</div>

## About

Toybox is a collection of components and icons for quickly building playful UIs for the web. Toybox is built with [Nuxt](https://nuxt.com/docs/getting-started/introduction) and [TailwindCSS](https://tailwindcss.com/docs).

## Icons

- You can use the API to fetch icons. The API is available at [toybox.design/api/v1/icons](https://toybox.design/api/v1/icons). The API returns the following JSON:

```json
{
  "name": "icon_name",
  "tags": ["tag1", "tag2", "tag3"],
  "svg": "<svg>...</svg>"
}
```

## Example Icon Component (Nuxt)

```vue
<script setup>
  const props = defineProps({
    name: {
      type: String,
      default: '',
      requred: true,
    },
    color: {
      type: String,
      default: '',
    },
  })

  const { data: icon } = await http.get(
    `http://iconicui.vercel.app/api/icons/${props.name}`
  )
</script>

<template>
  <div
    v-html="icon.svg"
    :style="`${props.color ? `color: ${props.color}` : ''}`"
  ></div>
</template>
```
