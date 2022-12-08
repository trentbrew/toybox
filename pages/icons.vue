<script setup>
import api from '@/hooks/api'

const global = useGlobalStore()

const download = ref(null)

const state = reactive({
  downloading: false,
  blob: null,
  url: '',
  search: '',
})

const filtered = computed(() => {
  return state.search
    ? api
        .all()
        .filter(
          (icon) => icon.name.includes(state.search) || icon.tags.includes(state.search)
        )
    : api.all();
})

function downloadSVG(icon) {
  state.downloading = true
  const blob = new Blob([icon.data], { type: 'image/svg+xml' })
  const url = URL.createObjectURL(blob)
  state.url = url
  setTimeout(() => {
    state.downloading = false
    download.value.filter(item => item.id === icon.name)[0].click()
  }, 500)
}
</script>

<template>
  <div>

    <nav class="fixed navbar px-16 py-4 z-10 bg-transparent" style="border-bottom: 1px solid rgba(255,255,255,0.16) !important; backdrop-filter: blur(32px)">
      <div class="navbar-start w-auto">
        <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M36 0H0V36H7.2V21.6H14.4V36H36V0ZM7.2 7.2H14.4V14.4H7.2V7.2Z" fill="white"/>
          </svg>
        </NuxtLink>
      </div>
      <div class="w-full mx-6">
        <div class="input-group">
          <input v-model="state.search" type="text" aria-label="Search icons" placeholder="Search icons" class="input input-bordered rounded-box w-full bg-transparent active:outline-none" style="transition: 75ms" />
        </div>
      </div>
      <div class="navbar-end hidden lg:flex w-auto">
        <ul class="menu menu-horizontal">
          <li class="dropdown dropdown-bottom dropdown-end cursor-pointer">
            <label tabindex="0" class="flex items-center gap-3 cursor-pointer rounded-box"><Icon name="swatch" /><span>Theme</span></label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-300 rounded-md w-56">
              <li class="w-full <%= theme == 'black' ? 'font-bold opacity-100' : 'opacity-50' %>"><button @click="global.setTheme('black')">Black</button></li>
              <li class="w-full <%= theme == 'night' ? 'font-bold opacity-100' : 'opacity-50' %>"><button @click="global.setTheme('night')">Night</button></li>
              <li class="w-full <%= theme == 'coffee' ? 'font-bold opacity-100' : 'opacity-50' %>"><button @click="global.setTheme('coffee')">Coffee</button></li>
              <li class="w-full <%= theme == 'aqua' ? 'font-bold opacity-100' : 'opacity-50' %>"><button @click="global.setTheme('aqua')">Aqua</button></li>
            </ul>
          </li>
          <li>
            <a href="https://github.com/trentbrew/iconic" target="_blank" class="rounded-box">
              <Icon name="github" />
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <NuxtLink to="/api/icons" target="_blank" class="rounded-box">
              <Icon name="globe" />
              <span>API</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>

    <main class="w-full p-16">
      <ul class="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-20">
        <div v-for="(icon, index) in filtered" :key="index" aria-role="button" :aria-label="`Download ${icon.name}`">
          <li @click="downloadSVG(icon)" class="w-full flex justify-between items-center rounded-box p-4 border border-[rgba(255,255,255,0.2)] cursor-pointer hover:border-white group" style="transition: 75ms">
            <div class="left flex items-center gap-5">
              <div v-html="icon.data"></div>
              <span class="opacity-50 group-hover:opacity-100">{{ icon.name }}</span>
            </div>
            <div class="opacity-0 group-hover:opacity-100" style="transition: 75ms">
              <Icon v-if="!state.downloading" name="download" />
              <Icon v-else name="loading" class="loading" />
            </div>
          </li>
          <a :id="icon.name" ref="download" class="hidden" :download="icon.name" :href="state.url"></a>
        </div>
        <div v-if="!filtered.length" class="w-screen h-[100vh-80px] flexy justify-center items-center">
          <h1 class="text-lg">{{ 'no icons found (╥﹏╥)' }}</h1>
        </div>
      </ul>
    </main>

    <div class="w-full h-8 bg-white text-black text-sm flexx">
      <span>Developed with ♡ by&nbsp;</span><a href="https://trentbrew.com" target="_blank" class="font-bold">Trent Brew</a>
    </div>

  </div>
</template>
