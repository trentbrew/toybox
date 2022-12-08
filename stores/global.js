export const useGlobalStore = defineStore('global', {
  state: () => ({
    ui: {
      theme: 'lofi',
    },
    search: {
      query: '',
    },
  }),
  getters: {
    theme: state => state.ui.theme,
    query: state => state.search.query,
  },
  actions: {
    setTheme(theme) {
      this.ui.theme = theme
    },
    updateQuery(query) {
      console.log('updateQuery: ', query)
      this.search.query = query
    },
  },
})
