// 工具方法 - 反转数组（替代toReversed()，以保证页面兼容性）
export const reverseArr = (arr: any[]) => {
  var newArr = []
  for (let index = arr.length - 1; index >= 0; index--) {
    newArr.push(arr[index])
  }
  return newArr
}
