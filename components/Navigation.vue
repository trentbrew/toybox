<script setup>
const global = useGlobalStore()
const state = reactive({ search: '' })
watch(() => state.search, (val) => global.updateQuery(val))
</script>

<template>
  <nav class="fixed navbar px-16 py-4 z-10 bg-transparent" style="border-bottom: 1px solid rgba(255,255,255,0.16) !important; backdrop-filter: blur(32px)">
    <div class="navbar-start w-auto">
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M36 0H0V36H7.2V21.6H14.4V36H36V0ZM7.2 7.2H14.4V14.4H7.2V7.2Z" fill="white"/>
        </svg>
      </NuxtLink>
      <ul class="menu menu-horizontal">
        <li>
          <NuxtLink href="/components" target="_blank" class="rounded-box">
            <span>Components</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/icons" target="_blank" class="rounded-box">
            <span>Icons</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="w-full mr-6 flex justify-center">
      <label><Icon name="search" class="translate-x-12" /></label>
      <input v-model="state.search" type="text" aria-label="Search icons" placeholder="Search icons" class="input input-bordered input-lg pl-16 rounded-box w-full bg-transparent active:outline-none" style="transition: 75ms" />
    </div>
    <div class="navbar-end hidden lg:flex w-auto">
      <ul class="menu menu-horizontal">
        <li class="dropdown dropdown-bottom dropdown-end cursor-pointer">
          <label tabindex="0" class="flex items-center gap-3 cursor-pointer rounded-box">
            <Icon name="swatch" />
          </label>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-300 rounded-md w-56">
            <li :class="`w-full ${ global.theme == 'black' ? 'font-bold opacity-100' : 'opacity-50' } `"><button @click="global.setTheme('black')">Black</button></li>
            <li :class="`w-full ${ global.theme == 'night' ? 'font-bold opacity-100' : 'opacity-50' } `"><button @click="global.setTheme('night')">Night</button></li>
            <li :class="`w-full ${ global.theme == 'coffee' ? 'font-bold opacity-100' : 'opacity-50' } `"><button @click="global.setTheme('coffee')">Coffee</button></li>
            <li :class="`w-full ${ global.theme == 'aqua' ? 'font-bold opacity-100' : 'opacity-50' } `"><button @click="global.setTheme('aqua')">Aqua</button></li>
          </ul>
        </li>
        <li>
          <a href="https://github.com/trentbrew/toybox" target="_blank" class="rounded-box">
            <Icon name="github" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
