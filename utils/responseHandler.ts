import type { FetchContext, FetchResponse } from 'ofetch'

interface ResponseMap {
  blob: Blob
  text: string
  arrayBuffer: ArrayBuffer
  stream: ReadableStream<Uint8Array>
}
type ResponseType = keyof ResponseMap | 'json'

type OnResponseContext = FetchContext<any, ResponseType> & {
  response: FetchResponse<ResponseType>
}
type OnResponseErrorContext<R extends ResponseType = 'json'> = FetchContext & {
  response: FetchResponse<R>
}

export const onResponse = (context: OnResponseContext) => {
  switch (context.response.status) {
    case 401:
      useMessage('登录信息已过期，请重新登陆', 'error', 3000)
      useUserStore().removeToken()
      break
    case 404:
      break
    default:
      break
  }
}

const onResponseError = (context: OnResponseErrorContext) => {}

export const responseHandler = { onResponse, onResponseError }
