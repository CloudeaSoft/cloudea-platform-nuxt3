<script setup lang="ts">
import ini from '~/utils/osu-tool'

// 文件内容
const skin = ref<any>()

// 选择文件
const getSkin = (file: File) => {
  const reader = new FileReader()
  reader.onload = function () {
    if (reader.result) {
      //分析文件
      skin.value = ini.parse(reader.result.toString())
    }
  }
  reader.readAsText(file)
}

const onFileChange = (file: File): void => {
  getSkin(file)
}

const skinFileExist = computed(() => {
  return !!skin.value
})

// 本地缓存
watch(
  skin,
  (value, oldValue) => {
    localStorage.setItem('osu-skin', JSON.stringify(value))
  },
  { deep: true, immediate: false }
)

onMounted(() => {
  skin.value = JSON.parse(localStorage.getItem('osu-skin')!)
})
</script>

<template>
  <ToolCard>
    <template #header>
      <div>{{ $t('tool.osu.skin.title') }}</div>
    </template>
    <div class="skin-container">
      <ToolOsuSkinIniUpload v-show="!skinFileExist" @change="onFileChange" />
      <ToolOsuSkinIniEditor v-show="skinFileExist" v-model="skin" />
    </div>
  </ToolCard>
</template>

<style lang="scss" scoped>
.skin-text-area {
  white-space: pre-wrap;
}

.skin-container {
  height: 500px;
  position: relative;
  overflow-y: scroll;
}
</style>
