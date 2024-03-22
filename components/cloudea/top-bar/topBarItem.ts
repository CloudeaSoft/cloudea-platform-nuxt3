interface topBarItem {
  index: number
  name: string
  router: string
}

// Be sure to include '/' here, or child routes may have issues!!!
export const topBarItemList: topBarItem[] = [
  { index: 1, name: 'home', router: '/' },
  { index: 2, name: 'forum', router: '/forum' },
  { index: 3, name: 'tool', router: '/tool' },
  { index: 4, name: 'book', router: '/book' },
  { index: 5, name: 'about', router: '/about' }
]
