import type { GachaHistory } from '~/types/api/arknights-model'
import type { Result } from '~/types/api/base-model'

enum Api {
  GACHA = '/arknights/gacha'
}

const baseAPI = "https://api.cloudea.work/api"

export const gachaGetApi = async (token: string, channelId: number) => {
  const { data } = await useFetch<Result<GachaHistory>>(Api.GACHA, {
    baseURL: baseAPI,
    method: 'GET',
    params: {
      token,
      channelId
    },
    ...responseHandler
  })
  return data
}
