import type { PageRequest, PageResponse, Result } from '~/types/api/base-model'
import type {
  CommentInfo,
  CreatePostRequest,
  ForumPostLike,
  ForumSection,
  PostInfo,
  ReplyInfo
} from '~/types/api/forum-model'

enum Api {
  SECTION = '/forum/section',
  POST = '/forum/post',
  POST_INFO = '/forum/post/:id',
  REPLY = '/forum/reply',
  COMMENT = '/forum/comment',
  POST_LIKE = '/forum/post/:id/like',
  POST_DISLIKE = '/forum/post/:id/dislike',
  POST_FAVORITE = '/forum/post/:id/favorite',
  SEARCH = '/forum/search',
  RECOMMEND = '/forum/recommend',
  USER_HISTORY = '/forum/user/history',
  USER_LIKE = '/forum/user/likes',
  USER_FAVORITE = '/forum/user/favorites'
}

const baseAPI = 'https://api.cloudea.work/api'

export const getSectionApi = async () => {
  const data = await $fetch<Result<PageResponse<ForumSection>>>(Api.SECTION, {
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

export const getPostApi = async (
  sectionId: string | undefined,
  request: PageRequest
) => {
  const { data } = await useFetch<Result<PageResponse<PostInfo>>>(Api.POST, {
    baseURL: baseAPI,
    headers: {
      Authorization: `Bearer ${useUserStore().getToken()}`
    },
    params: {
      page: request.PageIndex,
      limit: request.PageSize,
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

export const postPostInfoApi = async (id: string) => {
  const fullUrl = `${baseAPI}${Api.POST_INFO.replace(':id', id)}`
  const { data } = await useFetch<Result<PostInfo>>(fullUrl, {
    baseURL: baseAPI,
    headers: {
      Authorization: `Bearer ${useUserStore().getToken()}`
    },
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

export const getReplyApi = async (postId: string, request: PageRequest) => {
  const { data } = await useFetch<Result<PageResponse<ReplyInfo>>>(Api.REPLY, {
    baseURL: baseAPI,
    headers: {
      Authorization: `Bearer ${useUserStore().getToken()}`
    },
    params: {
      postId,
      page: request.PageIndex,
      limit: request.PageSize
    },
    method: 'GET',
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

export const getCommentApi = async (replyId: string, request: PageRequest) => {
  const { data } = await useFetch<Result<PageResponse<CommentInfo>>>(
    Api.COMMENT,
    {
      baseURL: baseAPI,
      headers: {
        Authorization: `Bearer ${useUserStore().getToken()}`
      },
      params: {
        id: replyId,
        page: request.PageIndex,
        limit: request.PageSize
      },
      method: 'GET',
      ...responseHandler
    }
  )

  return data
}

export const postPostLikeApi = async (id: string) => {
  const { data } = await useFetch<Result<string>>(
    Api.POST_LIKE.replace(':id', id),
    {
      baseURL: baseAPI,
      headers: {
        Authorization: `Bearer ${useUserStore().getToken()}`
      },
      method: 'POST',
      ...responseHandler
    }
  )

  return data
}

export const getPostLikeApi = async (id: string) => {
  const { data } = await useFetch<Result<ForumPostLike>>(
    Api.POST_LIKE.replace(':id', id),
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

export const deletePostLikeApi = async (id: string) => {
  const { data } = await useFetch<Result<ForumPostLike>>(
    Api.POST_LIKE.replace(':id', id),
    {
      baseURL: baseAPI,
      headers: {
        Authorization: `Bearer ${useUserStore().getToken()}`
      },
      method: 'DELETE',
      ...responseHandler
    }
  )

  return data
}

export const postPostFavoriteApi = async (id: string) => {
  const { data } = await useFetch<Result<string>>(
    Api.POST_FAVORITE.replace(':id', id),
    {
      baseURL: baseAPI,
      headers: {
        Authorization: `Bearer ${useUserStore().getToken()}`
      },
      method: 'POST',
      ...responseHandler
    }
  )

  return data
}

export const getPostFavoriteApi = async (id: string) => {
  const { data } = await useFetch<Result<ForumPostLike>>(
    Api.POST_FAVORITE.replace(':id', id),
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

export const deletePostFavoriteApi = async (id: string) => {
  const { data } = await useFetch<Result<ForumPostLike>>(
    Api.POST_FAVORITE.replace(':id', id),
    {
      baseURL: baseAPI,
      headers: {
        Authorization: `Bearer ${useUserStore().getToken()}`
      },
      method: 'DELETE',
      ...responseHandler
    }
  )

  return data
}

export const getSearchApi = async (query: string, page: number) => {
  const { data } = await useFetch<Result<PageResponse<PostInfo>>>(Api.SEARCH, {
    baseURL: baseAPI,
    headers: {
      Authorization: `Bearer ${useUserStore().getToken()}`
    },
    query: {
      query,
      page
    },
    method: 'GET',
    ...responseHandler
  })
  return data
}

export const getRecommendApi = async () => {
  const data = await $fetch<Result<PostInfo[]>>(Api.RECOMMEND, {
    baseURL: baseAPI,
    headers: {
      Authorization: `Bearer ${useUserStore().getToken()}`
    },
    method: 'GET',
    ...responseHandler
  })
  return data
}

export const getUserHistoryApi = async (request: PageRequest) => {
  const { data } = await useFetch<Result<PageResponse<PostInfo>>>(
    Api.USER_HISTORY,
    {
      baseURL: baseAPI,
      headers: {
        Authorization: `Bearer ${useUserStore().getToken()}`
      },
      params: {
        page: request.PageIndex,
        limit: request.PageSize
      },
      method: 'GET',
      ...responseHandler
    }
  )
  return data
}

export const getUserLikeApi = async (request: PageRequest) => {
  const { data } = await useFetch<Result<PageResponse<PostInfo>>>(
    Api.USER_LIKE,
    {
      baseURL: baseAPI,
      headers: {
        Authorization: `Bearer ${useUserStore().getToken()}`
      },
      params: {
        page: request.PageIndex,
        limit: request.PageSize
      },
      method: 'GET',
      ...responseHandler
    }
  )
  return data
}

export const getUserFavoriteApi = async (request: PageRequest) => {
  const { data } = await useFetch<Result<PageResponse<PostInfo>>>(
    Api.USER_FAVORITE,
    {
      baseURL: baseAPI,
      headers: {
        Authorization: `Bearer ${useUserStore().getToken()}`
      },
      params: {
        page: request.PageIndex,
        limit: request.PageSize
      },
      method: 'GET',
      ...responseHandler
    }
  )
  return data
}
