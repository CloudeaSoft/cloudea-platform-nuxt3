<script setup lang="ts">
import { postPostApi } from '~/api'

import { MilkdownProvider } from '@milkdown/vue'
import { ProsemirrorAdapterProvider } from '@prosemirror-adapter/vue'

const postSection = ref('')

const postTitle = ref('')

const postContent = ref('')

const milkdownFocused = ref<boolean>()

const handlePost = async () => {
  if (!postTitle.value || !postTitle.value.trim()) {
    useMessage('Empty Title', 'warn')
    return
  }
  if (!postContent.value || !postContent.value.trim()) {
    useMessage('Empty Content', 'warn')
    return
  }
  var createRes = await postPostApi({
    SectionId: postSection.value,
    Title: postTitle.value,
    Content: postContent.value
  })
  if (!createRes.value?.Status) {
    useMessage('', 'error')
    return
  }
  if (!createRes.value.Data.trim()) {
    useMessage('', 'error')
    return
  }
  resetEditorContent()
  useMessage('', 'success')
  navigateTo(`/forum/posts/${createRes.value.Data}`)
}

const handleSave = (editorValue: string) => {
  postContent.value = editorValue
}

const handleFocus = () => {
  milkdownFocused.value = true
}

const handleBlur = () => {
  milkdownFocused.value = false
}

const resetEditorContent = () => {
  postTitle.value = ''
}
</script>

<template>
  <form class="topic-editor">
    <div class="editor-main">
      <div class="section-area">
        <ForumEditPostSectionSelector v-model="postSection" />
      </div>
      <div class="title-area">
        <CloudeaFormInput
          v-model="postTitle"
          placeholder="在此输入标题"
          :label-placeholder="false"
          full-border
        />
      </div>
      <div :class="['text-area', milkdownFocused ? 'active' : '']">
        <MilkdownProvider>
          <ProsemirrorAdapterProvider>
            <CloudeaMilkdownEditor
              @save="handleSave"
              @focus="handleFocus"
              @blur="handleBlur"
              v-model:editor-value="postContent"
            ></CloudeaMilkdownEditor>
          </ProsemirrorAdapterProvider>
        </MilkdownProvider>
      </div>
      <div class="label-area">标签区域</div>
      <div class="setting-area">额外设置区域</div>
    </div>
    <div class="editor-footer">
      <div class="editor-submit" @click.prevent="handlePost">发布帖子</div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.topic-editor {
  display: flex;
  opacity: 0.95;

  .editor-main {
    flex: 1;
    overflow: hidden;

    .section-area {
      height: 50px;
      background-color: var(--cloudea-trans-blue-1);
      text-align: center;
      box-shadow: 0px 2px 3px 1px;
    }

    .title-area {
      margin-top: 5px;
      padding: 0 20px;
      height: 50px;

      .title-text {
        display: flex;
      }

      .title-input {
        height: 50px;
        width: 100%;
        border: 0;
      }
    }

    .text-area {
      height: 500px;
      width: calc(100% - 40px);
      background-color: var(--cloudea-white);
      margin: 20px 20px 0;
      border: 2px solid var(--cloudea-trans-blue-1);
      padding: 10px;
      transition: border 0.6s;
      overflow: hidden;

      &.active {
        border: 2px solid var(--cloudea-blue-5);
      }
    }
    .label-area {
      margin-top: 20px;
      height: 50px;
      background-color: black;
      color: #fff;
      text-align: center;
      line-height: 50px;
      font-size: 2rem;
      font-weight: 700;
    }

    .setting-area {
      height: 50px;
      background-color: #fff;
      color: black;
      text-align: center;
      line-height: 50px;
      font-size: 2rem;
      font-weight: 700;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .editor-footer {
    width: 50px;
    height: 100%;
    border-radius: 0px 10px 10px 0;
    overflow: hidden;

    .editor-submit {
      height: 100%;
      width: 100%;
      cursor: pointer;
      background-color: var(--cloudea-blue-5);
      color: var(--cloudea-white);
      font-size: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background 0.3s;

      &:hover {
        background-color: var(--cloudea-trans-blue-2);
        color: var(--cloudea-white);
      }
    }
  }
}
</style>
