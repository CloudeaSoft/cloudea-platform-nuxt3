import type { Result } from '~/types/api/base-model'
import type { LoginType, ResetPasswordRequest } from '~/types/api/user-model.d'

enum Api {
  VERCODE = '/identity/verificationcode',
  REGISTER_TOKEN = '/identity/registertoken',
  USER = '/identity/user',
  SESSION = '/identity/session',
  PASSWORD = '/identity/user/password'
}

const baseAPI = useRuntimeConfig().public.CLOUDEA_API

export const vercodePostApi = async (
  email: string,
  codeType: 1 | 2 | 3 | 4
) => {
  const { data } = await useFetch<string>(Api.VERCODE, {
    baseURL: baseAPI,
    method: 'POST',
    query: {
      email,
      codeType
    }
  })
  return data
}

export const registerTokenPostApi = async (email: string, verCode: string) => {
  const { data } = await useFetch<Result<string>>(Api.REGISTER_TOKEN, {
    baseURL: baseAPI,
    method: 'POST',
    query: {
      email,
      verCode
    }
  })
  return data
}

export const userPostApi = async (
  token: string,
  username: string,
  email: string,
  password: string
) => {
  const { data } = await useFetch<Result<string>>(Api.USER, {
    baseURL: baseAPI,
    method: 'POST',
    body: {
      RegisterToken: token,
      UserName: username,
      Email: email,
      Password: password
    }
  })
  return data
}

export const sessionPostApi = async (
  usernameOrEmail: string,
  password: string,
  loginType: LoginType
) => {
  const { data } = await useFetch<Result<string>>(Api.SESSION, {
    baseURL: baseAPI,
    method: 'POST',
    body: {
      UserName: usernameOrEmail,
      Email: usernameOrEmail,
      Vercode: '123456',
      Password: password,
      LoginType: loginType
    }
  })
  return data
}

export const passwordPostApi = async (request: ResetPasswordRequest) => {
  const { data } = await useFetch<Result<string>>(Api.PASSWORD, {
    baseURL: baseAPI,
    method: 'POST',
    body: request,
    ...responseHandler
  })
  return data
}
