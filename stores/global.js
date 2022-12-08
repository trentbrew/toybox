export const useGlobalStore = defineStore('global', {
  state: () => ({
    ui_theme: 'black',
  }),
  getters: {
    theme: (state) => state.ui_theme,
  },
  actions: {
    setTheme(theme) {
      this.ui_theme = theme
    },
  }
})
