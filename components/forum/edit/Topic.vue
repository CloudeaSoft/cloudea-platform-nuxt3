<script setup lang="ts">
import { postPostApi } from '~/api'

const title = ref()

const handlePost = async () => {
  await postPostApi({})
}
</script>

<template>
  <form class="topic-editor">
    <div class="editor-main">
      <div class="title-area">
        <input type="text" placeholder="在此输入标题" />
      </div>
      <div class="text-area">
        <input type="text" placeholder="在此输入文章内容" />
      </div>
      <div class="label-area">标签区域</div>
      <div class="section-area">主题区域</div>
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

    .title-area {
      padding: 0 10px;
      height: 50px;

      input {
        height: 50px;
        width: 100%;
        border: 0;
      }
    }

    .text-area {
      height: 500px;
      width: 100%;
      background-color: #fff;
      text-align: center;
      line-height: 500px;
      font-size: 4rem;
      font-weight: 700;
      padding: 0 20px;
      input {
        width: 100%;
        height: 100%;
        border: none;
      }
    }
    .label-area {
      height: 50px;
      background-color: black;
      color: #fff;
      text-align: center;
      line-height: 50px;
      font-size: 2rem;
      font-weight: 700;
    }
    .section-area {
      height: 50px;
      background-color: #fff;
      color: black;
      text-align: center;
      line-height: 50px;
      font-size: 2rem;
      font-weight: 700;
    }
    .setting-area {
      height: 50px;
      background-color: black;
      color: #fff;
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

      :hover {
        background-color: var(--cloudea-trans-blue-1);
        color: var(--cloudea-white);
      }
    }
  }
}
</style>
