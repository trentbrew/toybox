<script setup>
  const global = useGlobalStore()
  const route = useRoute()

  const state = reactive({
    search: '',
  })

  watch(
    () => state.search,
    val => global.updateQuery(val)
  )
</script>

<template>
  <nav
    class="fixed navbar px-6 py-4 z-10 bg-base-100 border-b-2 border-base-content/10 backdrop-blur-xl"
  >
    <div class="navbar-start w-auto">
      <NuxtLink id="logo" to="/" class="mr-3 active:scale-95">
        <Logo />
      </NuxtLink>
      <ul class="menu menu-horizontal min-w-fit">
        <li id="components-link">
          <NuxtLink href="/components" class="rounded-box">
            <span>Components</span>
          </NuxtLink>
        </li>
        <li id="icons-link">
          <NuxtLink to="/icons" class="rounded-box">
            <span>Icons</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div
      class="w-full ml-8 mr-6 flex justify-center !duration-300"
      :class="route.path !== '/icons' && 'pointer-events-none opacity-0'"
    >
      <label>
        <Icon
          name="search"
          class="translate-x-[46px] text-base-content !duration-150"
          :class="route.path !== '/icons' && 'translate-x-[64px] opacity-0'"
        />
      </label>
      <input
        v-model="state.search"
        type="text"
        aria-label="Search icon"
        class="input input-lg pl-16 rounded-box w-full bg-base-300 focus:!outline-none text-base-content"
        :class="route.path !== '/icons' && 'scale-95'"
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
            <Icon name="swatch" class="text-base-content" />
            <Icon name="dropdown" class="text-base-content" />
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-56"
          >
            <li>
              <button @click="global.setTheme('cupcake')">Cupcake</button>
            </li>
            <li>
              <button @click="global.setTheme('dark')">Dark</button>
            </li>
            <li>
              <button @click="global.setTheme('lofi')">Lofi</button>
            </li>
            <li>
              <button @click="global.setTheme('night')">Night</button>
            </li>
            <li>
              <button @click="global.setTheme('aqua')">Aqua</button>
            </li>
            <li>
              <button @click="global.setTheme('coffee')">Coffee</button>
            </li>
            <li>
              <button @click="global.setTheme('emerald')">Emerald</button>
            </li>
            <li>
              <button @click="global.setTheme('retro')">Retro</button>
            </li>
            <li>
              <button @click="global.setTheme('black')">Black</button>
            </li>
          </ul>
        </li>
        <li>
          <a
            id="github-link"
            href="https://github.com/trentbrew/toybox"
            target="_blank"
            class="!rounded-box pl-4"
          >
            <Icon name="github" class="text-base-content" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
  #logo {
    transition: 300ms !important;
  }
  li a,
  li label {
    @apply text-base-content rounded active:bg-base-200;
  }
  li a:active {
    @apply scale-95;
  }
  a.router-link-exact-active {
    @apply !text-primary bg-transparent;
  }
</style>
