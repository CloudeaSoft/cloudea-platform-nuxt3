import { type ForumStorePersist } from '../types/forum.d'

export const useForumStore = defineStore({
  id: 'Forum',
  persist: true,
  state: (): ForumStorePersist => ({
    postSection: '',
    postTitle: '',
    postContent: ''
  }),
  actions: {
    setPostSection(section: string) {
      this.postSection = section
      return this
    }
  }
})
