<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Templatåçe">
    <img src="assets/images/logo.svg" alt="Logo" width="80" height="80" />
  </a>

  <h3 align="center">Best-README-Template</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <!-- <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br /> -->
    <br />
    <a href="https://iconic.turtlelabs.co">Icons</a>
    &nbsp·&nbsp
    <a href="https://iconic.turtlelabs.co/api/icons">API</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Stack</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>
<br/>

<!-- ABOUT THE PROJECT -->

## About The Project

<img src="assets/images/screenshot.png" alt="Screenshot" />

Working with icons can be a whole thing. You have to find the right icon, download it, and then use it in your project. This is a pain. We want to make it easier for you to use icons in your projects. Iconic aims to make this process easier by providing a simple API to fetch SVGs and render them in your project.

### Built With

- [Expressjs](https://expressjs.com/en/4x/api.html)
- [EJS](https://ejs.co)
- [TailwindCSS](https://tailwindcss.com/docs)
- [DaisyUI](https://daisyui.com/components)

### Adding Icons

- Icons are stored in `./data/icons.js`. Insert an icon to the object using the following format:

```js
{
  name: 'icon_name',
  tags: ['tag1', 'tag2', 'tag3'],
  data: `<svg>...</svg>`,
},
```

<!-- USAGE EXAMPLES -->

## Usage

- You can use the API to fetch icons. The API is available at `https://iconicui.vercel.app/api/icons`. The API returns the following JSON:

```json
{
  "name": "icon_name",
  "tags": ["tag1", "tag2", "tag3"],
  "data": "<svg>...</svg>"
}
```

## Example Component (Nuxt)

```vue
<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "",
    requred: true,
  },
  color: {
    type: String,
    default: "",
  },
});

const { data: svg } = api.get(
  `http://iconicui.vercel.app/api/icons/${props.name}`
);
</script>

<template>
  <div
    v-html="svg"
    :style="`${props.color ? `color: ${props.color}` : ''}`"
  ></div>
</template>
```
