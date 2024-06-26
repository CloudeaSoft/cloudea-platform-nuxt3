import type { SettingsStoreTemp } from '../types/settings'

export const useTempSettingStore = defineStore({
  id: 'tempSetting',
  persist: false,
  state: (): SettingsStoreTemp => ({
    showCloudeaIcon: false,
    showSettingPanel: false,
    showUserPanel: false,
    showSearchPanel: false,
    showAnnounce: false
  }),

  actions: {
    reset() {
      this.showCloudeaIcon = false
      this.showSettingPanel = false
      this.showUserPanel = false
      this.showSearchPanel = false
      this.showAnnounce = false
    }
  }
})
