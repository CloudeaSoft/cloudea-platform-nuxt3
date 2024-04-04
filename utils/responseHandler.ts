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
      useMessage('Request successful', 'success', 3000)
      break
    case 201:
      useMessage('Resource created', 'success', 3000)
      break
    case 204:
      useMessage('No content', 'info', 3000)
      break
    case 301:
      useMessage('Moved Permanently', 'info', 3000)
      break
    case 304:
      useMessage('Not Modified', 'info', 3000)
      break
    case 400:
      useMessage('Bad Request', 'error', 3000)
      break
    case 401:
      useMessage('Unauthorized', 'error', 3000)
      useUserStore().removeToken()
      break
    case 403:
      useMessage('Forbidden', 'error', 3000)
      break
    case 404:
      useMessage('404 Not Found', 'error', 3000)
      break
    case 409:
      useMessage('Conflict', 'error', 3000)
      break
    case 500:
      useMessage('Internal Server Error', 'error', 3000)
      break
    case 502:
      useMessage('Bad Gateway', 'error', 3000)
      break
    case 503:
      useMessage('Service Unavailable', 'error', 3000)
      break
    case 504:
      useMessage('Gateway Timeout', 'error', 3000)
      break
    default:
      useMessage('Unknown Server Error', 'error', 3000)
      break
  }
}

export const onResponse = (context: OnResponseContext) => {
  handleStatus(context.response.status)
}

const onResponseError = (context: OnResponseErrorContext) => {
  console.error('Response error:', context.response)
}

export const responseHandler = { onResponse, onResponseError }
