export const validateAvatarFile = (file: File) => {
  if (file.type === 'image/jpeg' || file.type === 'image/png') {
    return true
  } else {
    useMessage('Invalid file type. Please select a JPEG or PNG image.', 'warn')
    return false
  }
}

export const resizeImage = (file: File): Promise<File> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = URL.createObjectURL(file)
    img.onload = () => {
      // 目标大小
      const targetSize = 512

      // 计算缩放比例
      const scaleFactor = Math.min(
        img.width / targetSize,
        img.height / targetSize
      )
      const scaledWidth = img.width / scaleFactor
      const scaledHeight = img.height / scaleFactor

      // 创建canvas元素和上下文
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      // 设置canvas的尺寸为缩放后的尺寸
      canvas.width = scaledWidth
      canvas.height = scaledHeight

      // 绘制缩放后的图片到canvas上
      ctx?.drawImage(img, 0, 0, scaledWidth, scaledHeight)

      // 裁剪canvas到目标尺寸
      const cropCanvas = document.createElement('canvas')
      const cropCtx = cropCanvas.getContext('2d')
      cropCanvas.width = targetSize
      cropCanvas.height = targetSize

      // 计算裁剪的起始位置（这里我们居中裁剪）
      const cropX = (scaledWidth - targetSize) / 2
      const cropY = (scaledHeight - targetSize) / 2

      // 裁剪图片并绘制到新的canvas上
      cropCtx?.drawImage(
        canvas,
        cropX,
        cropY,
        targetSize,
        targetSize,
        0,
        0,
        targetSize,
        targetSize
      )

      // 将裁剪后的canvas内容转换为Blob对象
      cropCanvas.toBlob(
        (blob) => {
          if (blob) {
            // 创建一个File对象
            const file = new File([blob], 'compressed-and-cropped-image.jpg', {
              type: 'image/jpeg'
            })
            // 解析Promise并返回File对象
            resolve(file)
          } else {
            // 解析Promise并返回null
            reject(new Error('Failed to convert canvas to Blob'))
          }
        },
        'image/jpeg',
        0.9
      ) // 0.9是JPEG的质量参数，可以根据需要调整
    }
    img.onerror = (error) => {
      // 如果图片加载失败，则拒绝Promise
      reject(error)
    }
  })
}
