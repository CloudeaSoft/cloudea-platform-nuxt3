<script setup lang="ts">
import ini from '~/utils/osu-tool'

const skin = defineModel<any>()
// 选择的Section
const sectionOption = ref('General')
// 预览窗口开关
const previewVisible = ref(true)

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

// 清除缓存
const clearSkin = () => {
  skin.value = null
  sectionOption.value = 'General'
}

const showPreview = () => {
  previewVisible.value = !previewVisible.value
}

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
</script>

<template>
  <div class="skin-editor">
    <div class="skin-editor__bar">
      <div class="skin-editor__bar-row">
        <button
          :class="['preview', previewVisible ? 'active' : '']"
          @click="showPreview"
        >
          {{ $t('tool.osu.skin.editor.preview') }}
        </button>
        <button @click="buildSkin">
          {{ $t('tool.osu.skin.editor.download') }}
        </button>
        <button @click="clearSkin">
          {{ $t('tool.osu.skin.editor.clear') }}
        </button>
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
    <div v-if="skinFileExist" v-show="!previewVisible">
      <div class="skin-editor-section-title">
        <span>{{ '[' + getSectionSelected() + ']' }}</span>
      </div>
      <ul class="skin-editor-section-body" label-width="150px">
        <li v-for="(itemV, item, index) in skin[sectionOption]" :key="index">
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
                  {{ $t('tool.osu.skin.editor.defaultValue') }}:&nbsp;
                  {{ ini.getTrans(sectionOption, item.toString()).defaultVal }}
                </span>
                <span class="skin-editor__item-comment-desc">
                  {{ $t('tool.osu.skin.editor.description') }}:&nbsp;
                  {{ ini.getTrans(sectionOption, item.toString()).profile }}
                </span>
              </div>
            </div>
          </div>
        </li>
        <span class="skin-editor__tips">
          {{ $t('tool.osu.skin.editor.tips') }}
        </span>
      </ul>
    </div>
    <div
      class="skin-editor__preview"
      title="Skin.ini文件预览"
      v-show="previewVisible"
    >
      <div class="text-area">
        {{ ini.stringify(skin) }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
    z-index: 1;

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
        cursor: pointer;
        width: 70px;
        margin-right: 10px;

        border-radius: 5px;
        border: 1px solid var(--cloudea-blue-5);
        background-color: var(--cloudea-white);
        color: var(--cloudea-black);

        &:hover {
          background-color: var(--cloudea-blue-5);
          color: var(--cloudea-white);
        }

        &:disabled {
          border: 1px solid var(--cloudea-gray-4);
          background-color: var(--cloudea-white);
          color: var(--cloudea-gray-4);
          cursor: not-allowed;
        }
      }

      select {
        width: 100px;
        border-radius: 5px;
        border: 1px solid var(--cloudea-blue-5);
        background-color: var(--cloudea-white);
        color: var(--cloudea-black);
      }

      input {
        width: 280px;
      }

      .preview {
        &.active {
          background-color: var(--cloudea-red-0);
          border: 1px solid var(--cloudea-red-4);
          color: var(--cloudea-red-4);

          &:hover {
            background-color: var(--cloudea-red-4);
            color: var(--cloudea-red-0);
          }
        }
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

  .skin-editor__preview {
    padding: 10px 30px;

    .text-area {
      white-space: pre-wrap;
      font-size: 1.2rem;
    }
  }
}
</style>
