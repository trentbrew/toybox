<script setup>
import api from '@/hooks/api'

const global = useGlobalStore()

const state = reactive({
  downloading: false,
  blob: null,
  url: '',
  search: '',
})

const filtered = computed(() => {
  return state.search
    ? api.icons.get().filter((icon) => icon.name.includes(state.search) || icon.tags.includes(state.search))
    : api.icons.get()
})

const download = ref(null)

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

watch(() => global.query, (val) => {
  state.search = val
})
</script>

<template>
  <div>
    <main class="w-full p-16">
      <ul class="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-20">
        <div v-for="(icon, index) in filtered" :key="index" aria-role="button" :aria-label="`Download ${icon.name}`">
          <li @click="downloadSVG(icon)" class="w-full flex justify-between items-center rounded-box p-4 border border-[rgba(255,255,255,0.2)] cursor-pointer hover:border-white group" style="transition: 0ms">
            <div class="left flex items-center gap-5">
              <div v-html="icon.data"></div>
              <span class="opacity-50 group-hover:opacity-100">{{ icon.name }}</span>
            </div>
            <div class="opacity-0 group-hover:opacity-100" style="transition: 0ms">
              <Icon v-if="!state.downloading" name="download" />
              <Icon v-else name="loading" class="loading" />
            </div>
          </li>
          <a :id="icon.name" ref="download" class="hidden" :download="icon.name" :href="state.url"></a>
        </div>
      </ul>
      <div v-if="!filtered.length" class="w-full h-[calc(100vh-300px)] flexx">
        <h3 class="flexy gap-3 text-lg w-full text-center">
          <span class="text-3xl">{{ '(╥﹏╥)' }}</span>
          <span class="text-base opacity-50">No icons found</span>
        </h3>
      </div>
    </main>
    <div v-if="filtered.length" class="w-full h-8 bg-white text-black text-sm flexx">
      <span>Developed with ♡ by&nbsp;</span><a href="https://trentbrew.com" target="_blank" class="font-bold">Trent Brew</a>
    </div>
  </div>
</template>
