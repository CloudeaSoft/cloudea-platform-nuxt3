<script setup lang="ts">
import { getReplyApi, postPostInfoApi } from '@/api'
import type { PageResponse } from '~/types/api/base-model'
import type { ReplyInfo, PostInfo } from '~/types/api/forum-model'

interface postProps {
  postId: string
}

const props = defineProps<postProps>()

const pageIndex = ref(1)

const pageSize = ref(5)

const postData = ref<PostInfo>()

const replyData = ref<PageResponse<ReplyInfo>>()

const getPost = async () => {
  var response = await postPostInfoApi(props.postId)
  postData.value = response.value?.Data
}

const getReply = async () => {
  var response = await getReplyApi(props.postId, {
    PageIndex: pageIndex.value,
    PageSize: pageSize.value
  })
  replyData.value = response.value?.Data
}

await getPost()
await getReply()

const isShowPost = ref<boolean>(pageIndex.value === 1)

const handlePageChange = async () => {
  await getReply()
  if (pageIndex.value === 1) {
    isShowPost.value = true
    return
  }
  isShowPost.value = false
}
</script>

<template>
  <div class="post-main">
    <div class="post-title">
      <h2>{{ postData?.Title }}</h2>
      <div class="post-info">
        <div class="click-count info">
          {{ `点击数: ` + postData?.ClickCount }}
        </div>
        <div class="reply-count info">
          {{ `回复数: ` + replyData?.Total }}
        </div>
      </div>
    </div>
    <div class="post-body">
      <div class="body-content" v-show="isShowPost">
        <div class="user-area">
          <ForumPostUserArea :profile="postData?.Creator!"></ForumPostUserArea>
        </div>
        <div class="right-area">
          <div class="time-area">
            {{ getLocaleTime(postData?.LastUpdatedTime!) }}
          </div>
          <div class="content-area">
            {{ markdownToText(postData?.Content!) }}
          </div>
        </div>
      </div>
      <div
        class="reply-container"
        v-for="(reply, index) in replyData?.Rows"
        :key="reply.ReplyId"
      >
        <ForumPostReply
          :reply-id="reply.ReplyId"
          :creator-id="reply.CreatorId"
          :creator="reply.Creator"
          :time="reply.CreateTime!"
          :content="reply.Content"
          :comment-count="reply.CommentCount"
          :floor="index + 2"
        ></ForumPostReply>
      </div>
    </div>
    <div class="post-footer">
      <CloudeaPagination
        :total="replyData?.Total ?? 1"
        v-model:current-page="pageIndex"
        :page-size="pageSize"
        @change="handlePageChange"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-main {
  position: relative;
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

      .time-area {
        text-align: right;
      }

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
