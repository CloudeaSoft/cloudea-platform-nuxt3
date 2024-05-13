export interface SettingsStorePersist {
  systemPageTransparency: number
  systemFontFamily: string
  systemBackground: number
}

export interface SettingsStoreTemp {
  showCloudeaIcon: boolean
  showSettingPanel: boolean
  showUserPanel: boolean
  showSearchPanel: boolean
  showAnnounce: boolean
}

export const SETTINGS_CUSTOM_BACKGROUND_IMAGE_NAME = 'cloudea-custom-bg'
export const SETTINGS_DEFAULT_FONT_FAMILY = 'system-ui'
export const SETTINGS_DEFAULT_PAGE_TRANSPARENCY = 77
