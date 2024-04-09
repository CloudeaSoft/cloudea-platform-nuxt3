import type { PageRequest, PageResponse, Result } from '~/types/api/base-model'
import type {
  CreatePostRequest,
  ForumPost,
  ForumSection,
  GetPostInfoResponse
} from '~/types/api/forum-model'

enum Api {
  SECTION = '/forum/section',
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

export const postPostApi = async (request: CreatePostRequest) => {
  const { data } = await useFetch<Result<string>>(Api.POST, {
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

export const getPostApi = async () => {
  const { data } = await useFetch<Result<PageResponse<ForumPost>>>(Api.POST, {
    baseURL: baseAPI,
    headers: {
      Authorization: `Bearer ${useUserStore().getToken()}`
    },
    params: {
      page: 1,
      limit: 15
    },
    method: 'GET',
    ...responseHandler
  })
  return data
}

export const getSectionApi = async () => {
  const { data } = await useFetch<Result<PageResponse<ForumSection>>>(
    Api.SECTION,
    {
      baseURL: baseAPI,
      headers: {
        Authorization: `Bearer ${useUserStore().getToken()}`
      },
      params: {
        page: 1,
        limit: 15
      },
      method: 'GET',
      ...responseHandler
    }
  )
  return data
}
