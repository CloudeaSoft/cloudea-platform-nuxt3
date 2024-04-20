<script setup lang="ts">
import ini from '@/utils/osuTool'

// 文件内容
const skin = ref(JSON.parse(localStorage.getItem('osu-skin')!) || null)

// 预览窗口开关
const dialogVisible = ref(false)

// 生成文件
const buildSkin = () => {
  const text = ini.stringify(skin.value)
  const filename = 'skin.ini'
  const blob = new Blob([text], { type: 'text/plain' })
  const href = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = href
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(href)
}

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

// 清除缓存
const clearSkin = () => {
  skin.value = null
  sectionOption.value = 'General'
  dialogVisible.value = false
}

// 选择的Section
const sectionOption = ref('General')

// 获取Section名字
const getSection = (section: number) => {
  return section.toString().match(/^Mania/)
    ? 'Mania ' + skin.value[section].Keys + 'K'
    : section
}
const getSectionSelected = () => {
  if (sectionOption.value) {
    return sectionOption.value.toString().match(/^Mania/)
      ? 'Mania ' + skin.value[sectionOption.value].Keys + 'K'
      : sectionOption.value
  }
}

// 检查是否是图片路径相关的条目
const imageSettingCheck = (option: string) => {
  var RegStr = /.*Image/
  return option.match(RegStr)
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
</script>

<template>
  <ToolCard>
    <template #header>
      <div>Osu皮肤设置</div>
    </template>
    <div class="skin-container">
      <ToolOsuUpload v-show="!skinFileExist" @change="getSkin" />
      <div class="skin-editor" v-show="skinFileExist">
        <div class="skin-editor__bar">
          <div class="skin-editor__bar-row">
            <button @click="dialogVisible = true">预览</button>
            <button @click="buildSkin">下载</button>
            <button @click="clearSkin">返回</button>
            <select v-model="sectionOption">
              <option
                v-for="(sectionV, section, index) in skin"
                :key="index"
                :value="section"
                :label="getSection(section).toString()"
              ></option>
            </select>
          </div>
          <div class="skin-editor__bar-row">
            <input placeholder="按下Ctrl+F以打开搜索框(Chorme)" disabled />
          </div>
        </div>
        <div v-if="skinFileExist">
          <div class="skin-editor-section-title">
            <span>{{ '[' + getSectionSelected() + ']' }}</span>
          </div>
          <ul class="skin-editor-section-body" label-width="150px">
            <li
              v-for="(itemV, item, index) in skin[sectionOption]"
              :key="index"
            >
              <div v-if="!imageSettingCheck(item.toString())" :label="item">
                <div class="skin-editor__item">
                  <div class="skin-editor__item-main">
                    <div class="skin-editor__item-name">
                      <span>{{ item }}</span>
                    </div>
                    <CloudeaFormInput
                      class="skin-editor__item-input"
                      v-model="skin[sectionOption][item]"
                      :disabled="item.toString() === 'Keys'"
                    />
                  </div>
                  <div class="skin-editor__item-comment">
                    <span class="skin-editor__item-comment-block" />
                    <span class="skin-editor__item-comment-default">
                      默认值:&nbsp;
                      {{
                        ini.getTrans(sectionOption, item.toString()).defaultVal
                      }}
                    </span>
                    <span class="skin-editor__item-comment-desc">
                      说明:&nbsp;
                      {{ ini.getTrans(sectionOption, item.toString()).profile }}
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <span class="skin-editor__tips"
              >注：图片素材相关条目已被隐藏，如有需要请自行修改文件</span
            >
          </ul>
        </div>
      </div>
      <div
        class="osuskin-watcher"
        title="Skin.ini文件预览"
        width="70%"
        center
        v-if="false"
      >
        <div height="500px">
          <div class="skin-text-area">
            {{ ini.stringify(skin) }}
          </div>
        </div>
        <div>
          <span class="dialog-footer">
            <button @click="dialogVisible = false">关闭</button>
          </span>
        </div>
      </div>
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

.skin-editor {
  width: 100%;
  background-color: var(--cloudea-white);
  min-height: 600px;
  padding: 20px 0;

  .skin-editor__bar {
    position: fixed;
    top: 100px;
    right: 40px;
    padding: 10px;
    border-radius: 10px;
    background-color: rgba(164, 211, 255, 0.8);
    opacity: 0.9;

    .skin-editor__bar-row {
      margin-top: 10px;
      display: flex;
      width: 100%;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        display: none;
      }

      & > * {
        height: 30px;
      }

      button {
        width: 50px;
        margin-right: 10px;
      }

      select {
        width: 100px;
      }

      input {
        width: 280px;
      }
    }
  }

  .skin-editor-section-title {
    font-size: 30px;
    font-weight: 700;
    padding-bottom: 30px;
    padding-left: 20px;
  }

  .skin-editor-section-body {
    padding-left: 40px;

    .mania-key {
      font-size: 20px;
      padding-bottom: 10px;
    }

    .skin-editor__item {
      margin-top: 10px;
      display: flex;
      flex-direction: column;

      .skin-editor__item-main,
      .skin-editor__item-comment {
        display: flex;
      }

      .skin-editor__item-main {
        .skin-editor__item-name {
          display: flex;
          width: 130px;
          justify-content: right;
          margin-right: 20px;
          align-items: center;
          font-size: 1.2rem;

          span {
            border-right: 4px solid var(--cloudea-blue-2);
            padding-right: 10px;
          }
        }

        .skin-editor__item-input {
          width: 200px;
        }
      }

      .skin-editor__item-comment {
        margin-top: 10px;

        .skin-editor__item-comment-block {
          display: inline-flex;
          width: 150px;
        }

        .skin-editor__item-comment-default {
          margin-right: 15px;
        }
      }
    }

    .skin-editor__tips {
      display: inline-block;
      margin-top: 30px;
    }
  }
}
</style>
