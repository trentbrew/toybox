<script setup>
  const route = useRoute()
  const global = useGlobalStore()

  const state = reactive({
    search: '',
    scroll: 0,
  })

  function handleScroll(e) {
    state.scroll = e.value
  }

  watch(
    () => state.search,
    val => global.updateQuery(val)
  )
</script>

<template>
  <nav
    v-scroll="handleScroll"
    class="fixed navbar px-6 py-4 z-10"
    :class="
      route.path !== '/'
        ? `backdrop-blur-xl bg-base-100 border-base-200 ${
            state.scroll > 0 ? 'border-b-[2px]' : 'border-b-0'
          }`
        : 'border-b-0'
    "
  >
    <div class="navbar-start w-auto">
      <NuxtLink id="logo" to="/" class="mr-3 active:scale-95">
        <Logo />
      </NuxtLink>
      <ul class="menu menu-horizontal min-w-fit">
        <li id="icons-link">
          <NuxtLink to="/icons" class="rounded-box">
            <span>Icons</span>
          </NuxtLink>
        </li>
        <li id="components-link">
          <NuxtLink href="/components" class="rounded-box">
            <span>Components</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div
      class="w-full mr-6 flex justify-center !duration-300"
      :class="route.path === '/' && 'pointer-events-none opacity-0'"
    >
      <label>
        <tb-icon
          name="search"
          class="translate-x-[46px] text-base-content !duration-150"
        />
      </label>
      <input
        v-model="state.search"
        type="text"
        aria-label="Search icon"
        class="input input-lg pl-16 rounded-box w-full bg-base-200 focus:!outline-none text-base-content"
        :class="route.path === '/' && 'scale-95'"
      />
    </div>
    <div class="navbar-end hidden lg:flex w-auto">
      <ul class="menu menu-horizontal">
        <li
          class="dropdown dropdown-bottom dropdown-end cursor-pointer !rounded-box"
        >
          <label
            tabindex="0"
            class="flex items-center gap-1 cursor-pointer pr-2 !rounded-box"
          >
            <tb-icon name="swatch" class="text-base-content" />
            <tb-icon name="dropdown" class="text-base-content" />
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-80"
          >
            <Theme name="dark" label="galaxy" />
            <Theme name="cmyk" label="light" />
            <Theme name="business" label="dark" />
            <Theme name="pastel" />
            <Theme name="emerald" />
            <Theme name="autumn" />
            <Theme name="winter" />
            <Theme name="wireframe" />
            <Theme name="retro" />
            <Theme name="valentine" />
            <Theme name="lemonade" />
            <Theme name="aqua" />
            <Theme name="coffee" />
            <Theme name="forest" />
            <Theme name="night" />
            <Theme name="black" />
          </ul>
        </li>
        <li>
          <a
            id="github-link"
            href="https://github.com/trentbrew/toybox"
            target="_blank"
            class="!rounded-box pl-4"
          >
            <tb-icon name="github" class="text-base-content" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
  #logo {
    @apply !duration-300;
  }
  li a,
  li label {
    @apply text-base-content/50 rounded active:bg-base-200;
  }
  li a:active {
    @apply scale-95;
  }
  a.router-link-exact-active {
    @apply !text-base-content bg-transparent;
  }
</style>
