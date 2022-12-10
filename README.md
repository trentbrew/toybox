<br />
<div align="center">

  <a href="https://codepen.io/tbrew1023/pen/oNyOZbm">
    <img src="https://user-images.githubusercontent.com/32501733/206873215-81bab10f-e181-4fd9-916a-131fcbf6e217.png" width="100" height="100" />
  </a>

  <h1>Toybox</h1>
  <p align="center">
    <a href="https://toybox.design">Components</a>
    &nbsp·&nbsp
    <a href="https://toybox.design/icons">Icons</a>
    &nbsp·&nbsp
    <a href="https://toybox.design/api/v1/icons">API</a>
  </p>
</div>
<br />

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
  })

  const { data: icon } = await http.get(
    `http://toybox.design/api/v1/icons/${props.name}`
  )
</script>

<template>
  <div v-html="icon.svg"></div>
</template>
```
