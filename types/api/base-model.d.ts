export interface PageResponse<T> {
  Total: number;
  Rows: T[];
}

export interface PageRequest {
  PageIndex: number;
  PageSize: number;
}

export interface PageResponse<T = any> {
  Total: number;
  reply: T[];
}

export interface Error {
  Code: string;
  Message: string;
}

export interface Result<T = any> {
  Status: boolean;
  Error: Error;
  Data: T;
}
