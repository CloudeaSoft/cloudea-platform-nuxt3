import type { Result } from '~/types/api/base-model'
import type { UserProfile } from '~/types/api/user-model'

enum Api {
  PROFILE = '/user/profile/:id',
  MYPROFILE = '/user/profile/mine',
  PROFILE_AVATAR = '/user/profile/avatar'
}

const baseAPI = useRuntimeConfig().public.CLOUDEA_API

export const getMyProfileApi = async () => {
  const { data } = await useFetch<Result<UserProfile>>(Api.MYPROFILE, {
    baseURL: baseAPI,
    headers: {
      Authorization: `Bearer ${useUserStore().getToken()}`
    },
    method: 'GET',
    ...responseHandler
  })
  return data
}

export const getProfileApi = async (id: string) => {
  const { data } = await useFetch<Result<UserProfile>>(
    Api.PROFILE.replace(':id', id),
    {
      baseURL: baseAPI,
      headers: {
        Authorization: `Bearer ${useUserStore().getToken()}`
      },
      method: 'GET',
      ...responseHandler
    }
  )
  return data
}

export const postProfileAvatarApi = async (avatar: File) => {
  const formData = new FormData()
  formData.append('file', avatar)
  const { data } = await useFetch<Result<UserProfile>>(Api.PROFILE_AVATAR, {
    baseURL: baseAPI,
    headers: {
      Authorization: `Bearer ${useUserStore().getToken()}`
    },
    body: formData,
    method: 'POST',
    ...responseHandler
  })
  return data
}
