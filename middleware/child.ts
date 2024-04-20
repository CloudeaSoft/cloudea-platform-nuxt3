export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to)
  const lastMatchedRoute = to.matched[to.matched.length - 1]
  console.log(lastMatchedRoute)
  const hasChildRoute =
    lastMatchedRoute &&
    lastMatchedRoute.children &&
    lastMatchedRoute.children.length > 0
  console.log(hasChildRoute)
  if (hasChildRoute) {
    return navigateTo('/tool/empty')
  }
})
