import dayjs from 'dayjs'

export const hourDiff = (upvoteTime: number, hours: number) => {
  if (upvoteTime === 0 || upvoteTime === undefined) {
    return false
  }

  const currentTime = dayjs()

  const time = dayjs(upvoteTime)

  return currentTime.diff(time, 'hour') <= hours
}

export const getLocaleTime = (dateTimeOffsetString: string): string => {
  const locale = useCookie('cloudea-language').value
  switch (locale) {
    case 'zh-cn':
      return new Date(dateTimeOffsetString).toLocaleString()
    case 'en-us':
      return new Date(dateTimeOffsetString).toLocaleString()
    default:
      return new Date(dateTimeOffsetString).toLocaleString()
  }
}
