import { type SettingsStorePersist } from '../types/settings.d'
import {
  SETTINGS_CUSTOM_BACKGROUND_IMAGE_NAME,
  SETTINGS_DEFAULT_FONT_FAMILY,
  SETTINGS_DEFAULT_PAGE_TRANSPARENCY
} from '../types/settings.d'

export const useSettingStore = defineStore({
  id: 'Settings',
  persist: true,
  state: (): SettingsStorePersist => ({
    systemPageTransparency: SETTINGS_DEFAULT_PAGE_TRANSPARENCY,
    systemFontFamily: SETTINGS_DEFAULT_FONT_FAMILY,
    systemBackground: 0
  }),
  actions: {
    // Set font style
    setFontFamily(font: string) {
      this.systemFontFamily = font
      document.documentElement.style.setProperty('--font-family', font)
    },
    // Set page alpha
    setPageTransparency(trans: number, mode: 'dark' | 'light') {
      this.systemPageTransparency = trans
      if (mode === 'light') {
        document.documentElement.style.setProperty(
          '--cloudea-trans-white-5',
          `rgba(255, 255, 255, ${trans / 100})`
        )
      } else {
        document.documentElement.style.setProperty(
          '--cloudea-trans-white-5',
          `rgba(15, 37, 61, ${trans / 100})`
        )
      }
    },
    // Set system bg
    async setSystemBackground(imgIndex: number) {
      this.systemBackground = imgIndex
      await deleteImage(SETTINGS_CUSTOM_BACKGROUND_IMAGE_NAME)
    },
    // Set custom bg
    async setCustomBackgroundImage(file: File) {
      await saveImage(file, SETTINGS_CUSTOM_BACKGROUND_IMAGE_NAME)
      this.systemBackground = -1
    },
    // Get current bg
    async getCurrentBackground() {
      const backgroundImageBlobData = await getImage(
        SETTINGS_CUSTOM_BACKGROUND_IMAGE_NAME
      )
      if (this.systemBackground === 0) {
        return 'none'
      }
      if (this.systemBackground === -1 && backgroundImageBlobData) {
        return URL.createObjectURL(backgroundImageBlobData)
      }
      return `/bg/pc-${this.systemBackground}.webp`
    },
    getCurrentBackgroundIndex() {
      return this.systemBackground
    },
    // Reset to default
    async setSettingsDefault() {
      this.$reset()
      this.setFontFamily(SETTINGS_DEFAULT_FONT_FAMILY)
      await deleteImage(SETTINGS_CUSTOM_BACKGROUND_IMAGE_NAME)
    }
  }
})
