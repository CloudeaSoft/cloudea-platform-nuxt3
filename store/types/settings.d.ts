import type { MessageStatus } from '~/types/utils/message'

interface PageName {
  index: number
  topic: number
  edit: number
  pool: number
  bylaw: number
  technique: number
}

export interface SettingsStorePersist {
  systemPageTransparency: number
  systemFontFamily: string
  systemBackground: number
}

export interface SettingsStoreTemp {
  showHamburger: boolean
  showPanel: boolean
  showUserPanel: boolean

  showMessageBox: boolean
  messageStatus: MessageStatus
}

export const SETTINGS_CUSTOM_BACKGROUND_IMAGE_NAME = 'cloudea-custom-bg'
export const SETTINGS_DEFAULT_FONT_FAMILY = 'system-ui'
export const SETTINGS_DEFAULT_PAGE_TRANSPARENCY = 77