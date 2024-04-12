export const getLocaleTime = (dateTimeOffsetString: string): string => {
  const locale = useCookie('cloudea-language').value
  switch (locale) {
    case 'zh-cn':
      return new Date(dateTimeOffsetString).toLocaleString('zh-CN')
    case 'en-us':
      return new Date(dateTimeOffsetString).toLocaleString('en-US')
    default:
      return new Date(dateTimeOffsetString).toLocaleString('zh-CN')
  }
}
