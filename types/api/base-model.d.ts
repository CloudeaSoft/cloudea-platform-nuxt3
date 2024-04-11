export interface PageResponse<T> {
  Total: number
  Rows: T[]
}

export interface PageRequest {
  PageIndex: number
  PageSize: number
}

export interface Error {
  Code: string
  Message: string
}

export interface Result<T = any> {
  Status: boolean
  Error: Error
  Data: T
}

export const GUID_EMPTY = '00000000-0000-0000-0000-000000000000'
