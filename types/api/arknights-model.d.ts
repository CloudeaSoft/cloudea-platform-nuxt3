export interface GachaHistory {
  list: GachaItem[] // 使用 TypeScript 数组替换 List[]
}

interface GachaItem {
  ts: number
  pool: string
  chars: Char[]
}

interface Char {
  name: string
  rarity: number
  isNew: boolean
}

export interface PoolInfo {
  name: string
  total: number
  stars: RarityInfo[]
  notSixStarCounter: number
  sixStarList: SixInfo[]
  sixAvg: number
}

export interface RarityInfo {
  value: number
  name: '3星' | '4星' | '5星' | '6星'
  labelLine: { show: boolean }
  label: { show: boolean }
}

export interface SixInfo {
  name: string
  count: number
}
