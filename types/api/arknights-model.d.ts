export interface GachaHistory {
    list: List[] // 使用 TypeScript 数组替换 List[]
  }
  
  interface List {
    ts: number
    pool: string
    chars: Char[]
  }
  
  interface Char {
    name: string
    rarity: number
    isNew: boolean
  }
  