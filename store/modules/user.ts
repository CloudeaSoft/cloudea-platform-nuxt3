import type { UserStore } from '../types/user'

export const useUserStore = defineStore({
  id: 'User',
  persist: true,
  state: (): UserStore => ({
    id: '00000000-0000-0000-0000-000000000000',
    name: '',
    displayName: '',
    signature: '',
    avatarUrl: '',
    coverImageUrl: '',
    leaves: 0,
    createdOnUtc: '',
    token: '',
    role: 0
  }),
  actions: {
    getToken() {
      return this.token
    },
    setToken(token: string) {
      this.token = token
    },
    removeToken() {
      this.token = ''
    },
    isAuthorized() {
      return !!this.token.trim()
    },
    setUserProfile(){
      
    }
  }
})
