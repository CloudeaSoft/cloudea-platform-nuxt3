<script setup lang="ts">
import { postPostApi } from '~/api'

import { MilkdownProvider } from '@milkdown/vue'
import { ProsemirrorAdapterProvider } from '@prosemirror-adapter/vue'

const postTitle = ref('')

const postContent = ref(`\`\`\`javascript
console.log(\'Hello World!\')
\`\`\``)

const handlePost = async () => {
  await postPostApi({})
}

const handleSave = (editorValue: string) => {
  console.log(editorValue)
}
</script>

<template>
  <form class="topic-editor">
    <div class="editor-main">
      <div class="section-area">主题区域</div>
      <div class="title-area">
        <CloudeaFormInput
          v-model="postTitle"
          placeholder="在此输入标题"
          :label-placeholder="false"
          full-border
        />
      </div>
      <div class="text-area">
        <MilkdownProvider>
          <ProsemirrorAdapterProvider>
            <CloudeaMilkdownEditor
              @save="handleSave"
              v-model:editor-value="postContent"
            />
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
    background-color: #fff;

    .section-area {
      height: 50px;
      background-color: black;
      color: #fff;
      text-align: center;
      line-height: 50px;
      font-size: 2rem;
      font-weight: 700;
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
      min-height: 400px;
      width: calc(100% - 40px);
      background-color: #fff;
      margin: 20px 20px 0;
      border: 2px solid var(--cloudea-trans-blue-1);
      padding: 10px;
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
