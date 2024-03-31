export default defineNuxtRouteMiddleware((to, from) => {
  const { token } = useUserStore()

  const locale = useCookie('cloudea-language').value
  const message =
    locale === 'zh-cn'
      ? '您需要登录以继续操作'
      : 'You need to login to continue your operation'

  const nuxt = useNuxtApp()

  if (!token || token == '') {
    useMessage(message, 'warn', 5000)
    return navigateTo(nuxt.$localePath('/login'))
  }
  console.log('123')
})
