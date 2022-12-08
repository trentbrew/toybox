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
  <nav class="fixed navbar pr-4 py-4 z-10 bg-neutral/75 backdrop-blur-xl">
    <div class="navbar-start w-auto">
      <NuxtLink
        id="logo"
        to="/"
        class="btn btn-ghost hover:bg-transparent hover:opacity-50"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="text-neutral-content"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M300 0C134.315 0 0 134.315 0 300C0 465.685 134.315 600 300 600C465.685 600 600 465.685 600 300C600 134.315 465.685 0 300 0ZM173.201 201.8V321.8C173.201 335 176.997 354.356 188.97 370.986C201.678 388.636 222.683 401.8 253.201 401.8V361.8C235.72 361.8 226.724 354.964 221.432 347.614C215.406 339.244 213.201 328.599 213.201 321.8V281.8H285.2V241.8H213.201V201.8H173.201ZM293.201 321.8V201.8H333.201V321.8C333.201 328.599 335.406 339.244 341.432 347.614C346.724 354.964 355.72 361.8 373.201 361.8C390.683 361.8 399.678 354.964 404.97 347.614C410.997 339.244 413.201 328.599 413.201 321.8C413.201 315 410.997 304.356 404.97 295.986C399.678 288.636 390.683 281.8 373.201 281.8H341.201V241.8H373.201C403.72 241.8 424.724 254.964 437.432 272.614C449.406 289.244 453.201 308.599 453.201 321.8C453.201 335 449.406 354.356 437.432 370.986C424.724 388.636 403.72 401.8 373.201 401.8C342.683 401.8 321.678 388.636 308.97 370.986C296.997 354.356 293.201 335 293.201 321.8Z"
            fill="currentColor"
          />
        </svg>
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
        class="input input-lg pl-16 rounded-box w-full bg-base-200 focus:!outline-none text-base-content"
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
            class="flex items-center gap-1 cursor-pointer pr-2 hover:bg-transparent !rounded-box"
          >
            <Icon name="swatch" class="text-neutral-content" />
            <Icon name="dropdown" class="opacity-50 text-neutral-content" />
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-56"
          >
            <li>
              <button @click="global.setTheme('dark')">Dark</button>
            </li>
            <li>
              <button @click="global.setTheme('night')">Night</button>
            </li>
            <li>
              <button @click="global.setTheme('black')">Black</button>
            </li>
            <li>
              <button @click="global.setTheme('coffee')">Coffee</button>
            </li>
            <li>
              <button @click="global.setTheme('aqua')">Aqua</button>
            </li>
            <li>
              <button @click="global.setTheme('lofi')">Lofi</button>
            </li>
            <li>
              <button @click="global.setTheme('cupcake')">Cupcake</button>
            </li>
            <li>
              <button @click="global.setTheme('emerald')">Emerald</button>
            </li>
            <li>
              <button @click="global.setTheme('retro')">Retro</button>
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
            <Icon name="github" class="text-neutral-content" />
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
  #components-link a,
  #icons-link a {
    @apply text-neutral-content/40 rounded active:bg-transparent;
  }
  .router-link-exact-active {
    @apply !text-neutral-content bg-transparent;
  }
</style>
