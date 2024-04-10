<script setup lang="ts">
import { postInfoPostApi } from '@/api'

interface postProps {
  postId: string
}

const props = defineProps<postProps>()

const pageIndex = ref(1)

const data = await postInfoPostApi(props.postId, {
  PageIndex: pageIndex.value,
  PageSize: 15
})

console.log(data.value?.Data.ReplyInfos?.total)
</script>

<template>
  <div class="post-main">
    <div class="post-title">
      <h2>Post Title</h2>
      <div class="post-info">
        <div class="click-count info">点击数: 111</div>
        <div class="reply-count info">回复数: 111</div>
      </div>
    </div>
    <div class="post-body">
      <div class="body-content">
        <div class="user-area">
          <ForumPostMainUserArea
            user-id="1"
            user-name="2"
          ></ForumPostMainUserArea>
        </div>
        <div class="right-area">
          <div class="time-area">time</div>
          <div class="content-area">content</div>
        </div>
      </div>
      <div class="reply-container" v-for="i in 10">
        <ForumPostReply></ForumPostReply>
      </div>
    </div>
    <div class="post-footer">
      <CloudeaPagination :total="data?.Data.ReplyInfos?.total ?? 1" v-model:current-page="pageIndex"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-main {
  height: 100%;
  padding-bottom: 20px;
}

.post-title {
  height: 3.33rem;
  padding: 0 20px;
  line-height: 3.33rem;
  border-bottom: 1px solid var(--cloudea-gray-4);
  display: flex;
  justify-content: space-between;

  .post-info {
    display: flex;
    .info {
      margin-left: 20px;
    }
  }
}

.post-body {
  padding: 0 20px;
  height: calc(100% - 6.66rem);
  overflow-y: scroll;
  scrollbar-width: thin !important;

  .body-content {
    min-height: 200px;
    display: flex;
    border-bottom: 1px solid var(--cloudea-gray-4);
    overflow: hidden;

    .user-area {
      width: 150px;
      padding: 20px 0;
      box-shadow: 1px 0px 3px 0px rgba($color: #000000, $alpha: 0.5);
    }

    .right-area {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 20px 0;
      padding-left: 20px;

      .content-area {
        flex: 1;
      }
    }
  }
}

.post-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.reply-container {
  border-bottom: 1px solid var(--cloudea-gray-4);
}
</style>
