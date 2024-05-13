import type { Result } from '~/types/api/base-model'
import type {
  UpdateUserProfileRequest,
  UserProfile
} from '~/types/api/user-model'

enum Api {
  PROFILE = '/user/profile/:id',
  MYPROFILE = '/user/profile',
  MYPROFILE_AVATAR = '/user/profile/avatar'
}

const baseAPI = "https://api.cloudea.work/api"

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

export const putMyProfileApi = async (request: UpdateUserProfileRequest) => {
  
  const { data } = await useFetch<Result<UserProfile>>(Api.MYPROFILE, {
    baseURL: baseAPI,
    headers: {
      Authorization: `Bearer ${useUserStore().getToken()}`
    },
    body: request,
    method: 'PUT',
    ...responseHandler
  })
  return data
}

export const postMyProfileAvatarApi = async (avatar: File) => {
  const formData = new FormData()
  formData.append('file', avatar)
  const { data } = await useFetch<Result<UserProfile>>(Api.MYPROFILE_AVATAR, {
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
