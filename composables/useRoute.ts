export const useRouteName = () => {
  const route = useRoute();
  // Calculate i18 route name
  const routeNmae = computed(() => {
    route.name?.toString().replace(/___[a-z]{2}-[a-z]{2}$/, "");
  });
  return routeNmae;
};

export const useRouteFullPath = () => {
  const route = useRoute();
  const fullPath = computed(() => {
    route.fullPath.replace(/^\/[a-z]{2}-[a-z]{2}\//, "/");
  });
  return fullPath;
};
