<script setup>
  const route = useRoute()
  const global = useGlobalStore()

  const state = reactive({
    search: '',
    scroll: 0,
  })

  const themes = computed(() => global.themes)

  function handleScroll(e) {
    state.scroll = e.value
  }

  watch(
    () => state.search,
    val => {
      global.updateQuery(val)
    }
  )
</script>

<template>
  <nav
    v-scroll="handleScroll"
    class="fixed navbar px-6 py-4 z-10"
    :class="`backdrop-blur-xl bg-base-100 border-base-200 ${
      state.scroll > 0 ? 'border-b-[1.5px]' : 'border-b-0'
    }`"
  >
    <div class="navbar-start w-auto">
      <!-- <a href="https://trentbrew.com" target="_blank"> -->
      <Logo />
      <!-- </a> -->
    </div>
    <div class="w-full mr-6 flex justify-center !duration-300">
      <label>
        <tb-icon
          name="search"
          class="translate-x-[46px] text-base-content !duration-150"
        />
      </label>
      <input
        @input="
          e => {
            state.search = e.target.value
          }
        "
        :value="global.query"
        type="text"
        aria-label="Search icon"
        :placeholder="
          route.path == '/'
            ? 'Search components'
            : route.path == '/icons'
            ? 'Search icons'
            : ''
        "
        class="input input-lg pl-16 text-[16px] rounded-box w-full bg-base-200 focus:!outline-none text-base-content"
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
            <li v-for="(theme, index) in themes" :key="index">
              <ThemePicker :theme="theme" :themes="themes" :index="index" />
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
