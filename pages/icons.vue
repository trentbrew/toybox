<script setup>
  import api from '@/hooks/api'

  const global = useGlobalStore()

  const state = reactive({
    downloading: false,
    blob: null,
    url: '',
    search: '',
    filtered: [],
  })

  async function getFilteredIcons() {
    return state.search
      ? await api.icons
          .get()
          .filter(
            icon =>
              icon.name.includes(state.search) ||
              icon.tags.includes(state.search)
          )
      : await api.icons.get()
  }

  onMounted(() => {
    getFilteredIcons().then(data => {
      state.filtered = data
    })
  })

  const download = ref(null)

  function downloadSVG(icon) {
    state.downloading = true
    const blob = new Blob([icon.svg], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    state.url = url
    setTimeout(() => {
      state.downloading = false
      download.value.filter(item => item.id === icon.name)[0].click()
    }, 500)
  }

  watch(
    () => global.query,
    val => {
      state.search = val
      getFilteredIcons().then(data => {
        state.filtered = data
      })
    }
  )
</script>

<template>
  <main>
    <ul class="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
      <div
        v-for="(icon, index) in state.filtered"
        :key="index"
        aria-role="button"
        :aria-label="`Download ${icon.name}`"
      >
        <li
          @click="downloadSVG(icon)"
          class="w-full flex justify-between items-center rounded-box p-6 bg-base-100 hover:scale-[1.02] cursor-pointer group !duration-150 active:scale-[1.01] active:bg-base-100 active:shadow-sm"
        >
          <div class="left flex items-center gap-3">
            <div v-html="icon.svg" class="text-base-content"></div>
            <span class="opacity-50 group-hover:opacity-100">{{
              icon.name
            }}</span>
          </div>
          <div
            class="opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 !duration-75 w-6 h-6 flex justify-center items-cenmter"
          >
            <tb-icon
              v-if="!state.downloading"
              name="download"
              class="text-secondary"
            />
            <tb-loader v-else type="3" size="24" class="text-secondary" />
          </div>
        </li>
        <a
          :id="icon.name"
          ref="download"
          class="hidden"
          :download="icon.name"
          :href="state.url"
        ></a>
      </div>
    </ul>
    <div
      v-if="!state.filtered.length"
      class="w-full h-[calc(100vh-300px)] flex justify-center items-center"
    >
      <h3
        class="flex flex-col justify-center items-center gap-3 text-lg w-full text-center"
      >
        <span class="text-3xl">{{ '(╥﹏╥)' }}</span>
        <span class="text-base opacity-50">No icons found</span>
      </h3>
    </div>
  </main>
</template>
