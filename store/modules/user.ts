import type { UserProfile } from '~/types/api/user-model'
import type { UserStore } from '../types/user'

export const useUserStore = defineStore({
  id: 'User',
  persist: true,
  state: (): UserStore => ({
    id: '00000000-0000-0000-0000-000000000000',
    profile: {
      Id: '00000000-0000-0000-0000-000000000000',
      UserName: '',
      DisplayName: '',
      Signature: '',
      AvatarUrl: '',
      CoverImageUrl: '',
      Leaves: 0
    },
    token: '',
    role: 0
  }),
  actions: {
    getToken() {
      return this.token
    },
    setToken(token: string) {
      this.token = token
      return this
    },
    removeToken() {
      this.token = ''
    },
    isAuthorized() {
      return !!this.token.trim()
    },
    updateUserProfile(profile: UserProfile) {
      this.profile = profile
      return this
    }
  }
})
