export const useGlobalStore = defineStore('global', {
  state: () => ({
    ui: {
      themes: {
        active: {
          name: 'emerald',
          type: 'light',
        },
        all: [
          {
            name: 'emerald',
            type: 'light',
          },
          {
            name: 'cmyk',
            type: 'light',
          },
          {
            name: 'pastel',
            type: 'light',
          },
          {
            name: 'wireframe',
            type: 'light',
          },
          {
            name: 'winter',
            type: 'light',
          },
          {
            name: 'autumn',
            type: 'light',
          },
          {
            name: 'valentine',
            type: 'light',
          },
          {
            name: 'retro',
            type: 'light',
          },
          {
            name: 'aqua',
            type: 'dark',
          },
          {
            name: 'night',
            type: 'dark',
          },
          {
            name: 'dark',
            type: 'dark',
          },
          {
            name: 'coffee',
            type: 'dark',
          },
          {
            name: 'business',
            type: 'dark',
          },
          {
            name: 'forest',
            type: 'dark',
          },
          {
            name: 'black',
            type: 'dark',
          },
        ],
      },
      gradient: {
        loading: false,
      },
    },
    search: {
      query: '',
    },
  }),
  getters: {
    theme: state => state.ui.themes.active,
    themes: state => state.ui.themes.all,
    query: state => state.search.query,
    gradientReady: state => !state.ui.gradient.loading,
  },
  actions: {
    setTheme(theme) {
      this.ui.themes.active = theme
    },
    updateQuery(query) {
      this.search.query = query
    },
    setGradientLoading(payload) {
      this.ui.gradient.loading = payload
    },
  },
})
