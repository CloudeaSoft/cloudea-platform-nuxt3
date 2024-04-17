import en from '@/language/en-us.json'
import zh from '@/language/zh-cn.json'

export default defineNuxtRouteMiddleware((to, from) => {
  const { token } = useUserStore()

  const locale = useCookie('cloudea-language').value

  const message =
    locale === 'zh-cn'
      ? zh.warn.middleware.auth.loginRequirement.body.static
      : en.warn.middleware.auth.loginRequirement.body.static

  console.log(zh)
  const nuxt = useNuxtApp()

  if (!token || !token.trim()) {
    useMessage(message, 'warn', 5000)
    return navigateTo(nuxt.$localePath('/login'))
  }
})
