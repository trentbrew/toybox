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
  <nav class="fixed navbar pr-4 py-4 z-10 bg-base-100/80 backdrop-blur-lg">
    <div class="navbar-start w-auto">
      <NuxtLink
        id="logo"
        to="/"
        class="btn btn-ghost hover:bg-transparent hover:opacity-50"
      >
        <img src="../assets/images/logo.png" class="w-10 h-10" />
      </NuxtLink>
      <ul class="menu menu-horizontal min-w-fit">
        <li>
          <NuxtLink href="/components" class="rounded-box">
            <span>Components</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/icons" class="rounded-box">
            <span>Icons</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="w-full ml-8 mr-6 flex justify-center">
      <label
        class="duration-150"
        :class="route.path !== '/icons' && 'opacity-0'"
      >
        <Icon name="search" class="opacity-30 translate-x-[46px]" />
      </label>
      <input
        v-model="state.search"
        type="text"
        aria-label="Search icons"
        class="input input-lg pl-16 rounded-box w-full bg-base-300 focus:!outline-none text-white"
        :class="
          route.path !== '/icons' && 'pointer-events-none opacity-0 scale-90'
        "
      />
    </div>
    <div class="navbar-end hidden lg:flex w-auto">
      <ul class="menu menu-horizontal">
        <li class="dropdown dropdown-bottom dropdown-end cursor-pointer">
          <label
            tabindex="0"
            class="flex items-center gap-1 cursor-pointer pr-2 hover:bg-transparent"
          >
            <Icon name="swatch" />
            <Icon name="dropdown" class="opacity-50" />
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-56"
          >
            <li
              :class="`w-full ${
                global.theme == 'dark' ? 'font-bold opacity-100' : 'opacity-50'
              } `"
            >
              <button @click="global.setTheme('dark')">Dark</button>
            </li>
            <li
              :class="`w-full ${
                global.theme == 'night' ? 'font-bold opacity-100' : 'opacity-50'
              } `"
            >
              <button @click="global.setTheme('night')">Night</button>
            </li>
            <li
              :class="`w-full ${
                global.theme == 'black' ? 'font-bold opacity-100' : 'opacity-50'
              } `"
            >
              <button @click="global.setTheme('black')">Black</button>
            </li>
            <li
              :class="`w-full ${
                global.theme == 'coffee'
                  ? 'font-bold opacity-100'
                  : 'opacity-50'
              } `"
            >
              <button @click="global.setTheme('coffee')">Coffee</button>
            </li>
            <li
              :class="`w-full ${
                global.theme == 'aqua' ? 'font-bold opacity-100' : 'opacity-50'
              } `"
            >
              <button @click="global.setTheme('aqua')">Aqua</button>
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
            <Icon name="github" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
  #logo {
    @apply bg-transparent;
  }
  li,
  li a {
    @apply text-neutral-content/40 rounded active:bg-base-200;
  }
  .router-link-exact-active {
    @apply !text-neutral-content bg-transparent;
  }
</style>
