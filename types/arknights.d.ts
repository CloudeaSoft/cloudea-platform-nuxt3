export const channelList: Array<ChannelIdMeta> = [
  { channelId: 1, name: 'Hypergraph' },
  { channelId: 2, name: 'Bilibili' }
]

export interface ChannelIdMeta {
  channelId: ChannelId
  name: string
}

export enum ChannelId {
  Hypergraph = 1,
  Bilibili = 2
}
