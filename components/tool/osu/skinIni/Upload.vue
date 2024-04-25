<script setup lang="ts">
const emits = defineEmits<{
  change: [file: File]
}>()

const inputRef = ref<HTMLInputElement>()
const dragover = ref<boolean>()
const model = defineModel<File>()

const handleSelectFile = () => {
  inputRef.value?.click()
}

const isIniFile = (file: File): boolean => {
  const extension = file.name.split('.').pop()?.toLowerCase()
  return extension === 'ini'
}

const setFile = async (file: File) => {
  if (!isIniFile(file)) {
    useMessage('', 'warn')
    return
  }
  model.value = file
  emits('change', file)
}

const onDrop = (event: DragEvent) => {
  dragover.value = false

  const dataTransfer = event.dataTransfer
  if (dataTransfer && dataTransfer.files.length > 0) {
    const file = dataTransfer.files[0]
    setFile(file)
  }
}

const onDragOver = (event: DragEvent) => {
  dragover.value = true
  event.dataTransfer!.dropEffect = 'copy'
}

const onDragLeave = () => {
  dragover.value = false
}

const onInputChange = (event: Event) => {
  const input = event.target as HTMLInputElement

  if (!input.files || !input.files[0]) {
    return
  }
  const file = input.files[0]

  setFile(file)
}

const onClickFile = () => {
  if (model.value) emits('change', model.value)
}
</script>

<template>
  <div class="skin-upload">
    <div
      :class="['skin-upload-dragger', dragover ? 'is-dragover' : '']"
      @drop.prevent="onDrop"
      @dragover.prevent="onDragOver"
      @dragleave.prevent="onDragLeave"
      @click="handleSelectFile"
    >
      <Icon class="icon-upload" name="uiw:cloud-upload" />
      <div class="skin-upload__text">
        {{ $t('tool.osu.skin.upload.drag') }}
        <em>{{ $t('tool.osu.skin.upload.click') }} </em>
      </div>
    </div>
    <input
      ref="inputRef"
      type="file"
      class="skin-upload-input"
      accept=".ini"
      @change="onInputChange"
    />
    <div class="skin-upload__tip">{{ $t('tool.osu.skin.upload.tips') }}</div>
    <div class="skin-upload__item" v-if="model" @click="onClickFile">
      <div class="skin-upload__item-info">
        <a class="skin-upload__item-name">
          <Icon name="lucide:file-text" />
          <span class="skin-upload__item-file-name">{{ model.name }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skin-upload {
  outline: none;

  --skin-upload-dragger-padding-horizontal: 40px;
  --skin-upload-dragger-padding-vertical: 10px;

  .skin-upload-dragger {
    padding: var(--skin-upload-dragger-padding-horizontal)
      var(--skin-upload-dragger-padding-vertical);
    border: 1px dashed var(--cloudea-gray-4);
    border-radius: 6px;
    text-align: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &:hover {
      border-color: var(--cloudea-blue-2);
    }

    &.is-dragover {
      background-color: var(--cloudea-trans-blue-1);
      border: 2px dashed var(--cloudea-blue-5);
    }

    .icon-upload {
      font-size: 67px;
      color: var(--cloudea-gray-4);
      margin-bottom: 16px;
      line-height: 50px;
    }

    .skin-upload__text {
      color: var(--cloudea-font-color-2);
      font-size: 14px;
      text-align: center;

      em {
        color: var(--cloudea-blue-2);
        font-style: normal;
      }
    }
  }

  .skin-upload-input {
    display: none;
  }

  .skin-upload__tip {
    color: var(--cloudea-font-color-2);
    margin-top: 7px;
  }

  .skin-upload__item {
    transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
    font-size: 14px;
    color: var(--el-text-color-regular);
    margin: 10px 0 0;
    margin-bottom: 5px;
    position: relative;
    box-sizing: border-box;
    border-radius: 4px;
    width: 100%;
    cursor: pointer;

    &:hover {
      background: var(--cloudea-gray-4);
    }

    .skin-upload__item-info {
      display: inline-flex;
      justify-content: center;
      flex-direction: column;
      width: calc(100% - 30px);
      margin-left: 4px;

      .skin-upload__item-name {
        color: var(--el-text-color-regular);
        display: inline-flex;
        text-align: center;
        align-items: center;
        padding: 0 4px;
        transition: color var(--el-transition-duration);
        font-size: var(--el-font-size-base);

        svg {
          margin-right: 6px;
          color: var(--el-text-color-secondary);
          height: 1em;
          width: 1em;
          line-height: 1em;
        }

        .skin-upload__item-file-name {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
