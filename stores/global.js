export const useGlobalStore = defineStore('global', {
  state: () => ({
    ui: {
      theme: 'dark',
      gradient: {
        loading: false,
      },
    },
    search: {
      query: '',
    },
  }),
  getters: {
    theme: state => state.ui.theme,
    query: state => state.search.query,
    gradientReady: state => !state.ui.gradient.loading,
  },
  actions: {
    setTheme(theme) {
      this.ui.theme = theme
    },
    updateQuery(query) {
      this.search.query = query
    },
    setGradientLoading(payload) {
      this.ui.gradient.loading = payload
    },
  },
})
