import type { PageRequest, PageResponse, Result } from '~/types/api/base-model'
import type {
  CommentInfo,
  CreatePostRequest,
  ForumPost,
  ForumSection,
  GetPostInfoResponse
} from '~/types/api/forum-model'

enum Api {
  SECTION = '/forum/section',
  POST = '/forum/post',
  POST_INFO = '/forum/post/:id/info',
  REPLY = '/forum/reply',
  COMMENT = '/forum/comment'
}

const baseAPI = useRuntimeConfig().public.CLOUDEA_API

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

export const getPostApi = async (sectionId: string | undefined) => {
  const { data } = await useFetch<Result<PageResponse<ForumPost>>>(Api.POST, {
    baseURL: baseAPI,
    headers: {
      Authorization: `Bearer ${useUserStore().getToken()}`
    },
    params: {
      page: 1,
      limit: 50,
      sectionId
    },
    method: 'GET',
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

export const postPostInfoApi = async (id: string, request: PageRequest) => {
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

export const postReplyApi = async (id: string, content: string) => {
  const { data } = await useFetch<Result<string>>(Api.REPLY, {
    baseURL: baseAPI,
    headers: {
      Authorization: `Bearer ${useUserStore().getToken()}`
    },
    params: {
      id,
      content
    },
    method: 'POST',
    ...responseHandler
  })

  return data
}

export const postCommentApi = async (
  replyId: string,
  content: string,
  targetUserId: string | undefined = undefined
) => {
  const { data } = await useFetch<Result<string>>(Api.COMMENT, {
    baseURL: baseAPI,
    headers: {
      Authorization: `Bearer ${useUserStore().getToken()}`
    },
    params: {
      id: replyId,
      content,
      targetUserId
    },
    method: 'POST',
    ...responseHandler
  })

  return data
}

export const getCommentApi = async (replyId: string) => {
  const { data } = await useFetch<Result<PageResponse<CommentInfo>>>(Api.COMMENT, {
    baseURL: baseAPI,
    headers: {
      Authorization: `Bearer ${useUserStore().getToken()}`
    },
    params: {
      id: replyId,
      page: 1,
      limit: 15
    },
    method: 'GET',
    ...responseHandler
  })

  return data
}
