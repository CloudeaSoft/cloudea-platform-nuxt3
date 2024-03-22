import type { PageRequest, Result } from '~/types/api/base-model'
import type { GetPostInfoResponse } from '~/types/api/forum-model'

enum Api {
  POST = 'api/forum/post',
  POST_INFO = 'api/Forum/PostInfo/'
}

export const postInfoPostApi = async (id: string, request: PageRequest) => {
  const response: Result<GetPostInfoResponse> = await http.post(
    Api.POST_INFO + id,
    {
      params: {
        request: request
      }
    }
  )
  return response
}
