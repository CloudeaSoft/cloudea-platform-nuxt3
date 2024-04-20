<script setup lang="ts">
import { postMyProfileAvatarApi } from '~/api/user'

const { t } = useI18n()
const inputRef = ref<HTMLInputElement>()
const avatar = ref<File>()
const imageUrl = ref<string | undefined>('')
const showDragger = () => {
  return !imageUrl.value?.trim()
}

const setFile = async (file: File) => {
  if (!validateAvatarFile(file)) {
    return
  }
  const resizedFile = await resizeImage(file)
  const reader = new FileReader()
  reader.onload = (e) => {
    imageUrl.value = e.target?.result as string
  }
  avatar.value = resizedFile
  reader.readAsDataURL(resizedFile)
}

const handleSelectFile = () => {
  inputRef.value?.click()
}

const handleDropFile = (event: DragEvent) => {
  event.preventDefault()
  event.stopPropagation()

  const dataTransfer = event.dataTransfer
  if (dataTransfer && dataTransfer.files.length > 0) {
    const file = dataTransfer.files[0]
    setFile(file)
  }
}

const handleDragOver = (event: DragEvent) => {
  event.preventDefault()
  event.dataTransfer!.dropEffect = 'copy'
}

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement

  if (!input.files || !input.files[0]) {
    return
  }
  const file = input.files[0]

  setFile(file)
}

const handlePublishAvatar = async () => {
  if (avatar.value == null) {
    useMessage(t('account.avatar.message.nullAvatar'), 'warn')
    return
  }
  var response = await postMyProfileAvatarApi(avatar.value)
  if (!response.value?.Status) {
    useMessage(t('account.avatar.message.uploadFailed'), 'warn')
    return
  }
  var userProfile = response.value?.Data
  useUserStore().updateUserProfile(userProfile)
  handleCleanAvatar()
}

const handleCleanAvatar = () => {
  inputRef.value = undefined
  imageUrl.value = undefined
  avatar.value = undefined
}
</script>

<template>
  <div class="avatar-container">
    <div class="avatar-uploader">
      <input
        ref="inputRef"
        type="file"
        accept=".jpg, .jpeg, .png, .webp"
        hidden
        @change="handleFileChange"
      />
      <i
        class="avatar-uploader-icon"
        v-if="showDragger()"
        @drop="handleDropFile"
        @dragover="handleDragOver"
        @click="handleSelectFile"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          data-v-36fef47d=""
        >
          <path
            fill="currentColor"
            d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
          ></path>
        </svg>
      </i>
      <NuxtImg
        class="avatar-uploader-preview"
        :src="imageUrl"
        v-if="!showDragger()"
      />
    </div>
    <div class="uploader-button-list">
      <CloudeaForumButton
        @click="handlePublishAvatar"
        :disabled="showDragger()"
      >
        {{ $t('account.avatar.upload') }}
      </CloudeaForumButton>
      <CloudeaForumButton @click="handleCleanAvatar" :disabled="showDragger()">
        {{ $t('account.avatar.clean') }}
      </CloudeaForumButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.avatar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}

.avatar-uploader {
  font-size: 2rem;
  color: var(--cloudea-font-color-0);
  width: 178px;
  height: 178px;
  text-align: center;
  line-height: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;

  border: 1px dashed var(--cloudea-font-color-0);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: var(--cloudea-blue-5);
  }

  .avatar-uploader-icon {
    font-size: 2rem;
    color: var(--cloudea-font-color-0);
    width: 178px;
    height: 178px;
    text-align: center;

    line-height: 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    position: relative;
    fill: currentColor;

    svg {
      height: 1em;
      width: 1em;
    }
  }

  .avatar-uploader-preview {
    width: 178px;
    height: 178px;
    background-size: cover;
  }
}

.uploader-button-list {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px 30px;
}
</style>
