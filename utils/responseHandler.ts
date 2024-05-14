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

const handleStatus = (status: number) => {
  switch (status) {
    case 200:
      console.log('200 Request successful', 'success', 3000)
      break
    case 201:
      console.log('201 Resource created', 'success', 3000)
      break
    case 204:
      console.log('204 No content', 'info', 3000)
      break
    case 301:
      console.log('301 Moved Permanently', 'info', 3000)
      break
    case 304:
      console.log('304 Not Modified', 'info', 3000)
      break
    case 400:
      console.log('400 Bad Request', 'error', 3000)
      break
    case 401:
      console.log('401 Unauthorized', 'error', 3000)
      useUserStore().removeToken()
      break
    case 403:
      console.log('403 Forbidden', 'error', 3000)
      break
    case 404:
      console.log('404 Not Found', 'error', 3000)
      break
    case 409:
      console.log('409 Conflict', 'error', 3000)
      useUserStore().$reset()
      navigateTo(useNuxtApp().$localePath('/login'))
      break
    case 500:
      console.log('500 Internal Server Error', 'error', 3000)
      break
    case 502:
      console.log('502 Bad Gateway', 'error', 3000)
      break
    case 503:
      console.log('Service Unavailable', 'error', 3000)
      break
    case 504:
      console.log('Gateway Timeout', 'error', 3000)
      break
    default:
      console.log('Unknown Server Error', 'error', 3000)
      break
  }
}

export const onResponse = (context: OnResponseContext) => {
  // handleStatus(context.response.status)
}

const onResponseError = (context: OnResponseErrorContext) => {
  if (context.response.status === 409) {
    useUserStore().$reset()
    navigateTo(useNuxtApp().$localePath('/login'))
  }
}

export const responseHandler = { onResponse, onResponseError }
