import type { PageRequest, Result } from '~/types/api/base-model'
import type { GetPostInfoResponse } from '~/types/api/forum-model'

enum Api {
  POST = '/forum/post',
  POST_INFO = '/Forum/PostInfo/'
}

const Authorization = `Bearer ${useUserStore().getToken()}`
const baseURL = useRuntimeConfig().public.CLOUDEA_API

export const postInfoPostApi = async (id: string, request: PageRequest) => {
  const { data } = await useFetch<Result<GetPostInfoResponse>>(
    Api.POST + '/' + id + '/info',
    {
      baseURL,
      headers: {
        Authorization
      },
      body: request,
      watch: false,
      method: 'POST',
      ...responseHandler
    }
  )
  return data
}

export const postPostApi = async (request: object) => {
  const { data } = await useFetch<Result<GetPostInfoResponse>>(Api.POST, {
    baseURL,
    headers: {
      Authorization
    },
    body: request,
    watch: false,
    method: 'POST',
    ...responseHandler
  })
  return data
}
