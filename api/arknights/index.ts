import type { GachaHistory } from '~/types/api/arknights-model'
import type { Result } from '~/types/api/base-model'

enum Api {
  GACHA = '/arknights/gacha'
}

const baseAPI = useRuntimeConfig().public.CLOUDEA_API

export const gachaGetApi = async (token: string, channelId: number) => {
  const { data } = await useFetch<Result<GachaHistory>>(Api.GACHA, {
    baseURL: baseAPI,
    method: 'POST',
    params: {
      token,
      channelId
    },
    ...responseHandler
  })
  return data
}
