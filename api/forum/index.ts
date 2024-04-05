import type { PageRequest, Result } from '~/types/api/base-model'
import type { GetPostInfoResponse } from '~/types/api/forum-model'

enum Api {
  POST = '/forum/post',
  POST_INFO = '/post/:id/info'
}

const baseAPI = useRuntimeConfig().public.CLOUDEA_API

export const postInfoPostApi = async (id: string, request: PageRequest) => {
  const fullUrl = `${baseAPI}${Api.POST_INFO.replace(':id', id)}`
  const { data } = await useFetch<Result<GetPostInfoResponse>>(fullUrl, {
    baseURL: baseAPI,
    headers: {
      Authorization: `Bearer ${useUserStore().getToken()}`
    },
    body: request,
    method: 'POST',
    ...responseHandler
  })
  return data
}

export const postPostApi = async (request: object) => {
  const { data } = await useFetch<Result<GetPostInfoResponse>>(Api.POST, {
    baseURL: baseAPI,
    headers: {
      Authorization: `Bearer ${useUserStore().getToken()}`
    },
    body: request,
    watch: false,
    method: 'POST',
    ...responseHandler
  })
  return data
}
