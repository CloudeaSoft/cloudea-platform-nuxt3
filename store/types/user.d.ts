import type { UserProfile } from '~/types/api/user-model'

export interface UserStore {
  id: string
  profile?: UserProfile
  token: string
  role: number
}
