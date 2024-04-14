<script setup lang="ts">
import { getCommentApi, postCommentApi } from '~/api'
import type { PageResponse } from '~/types/api/base-model'
import type { CommentInfo } from '~/types/api/forum-model'

const props = defineProps<{ replyId: string; commentCount: number }>()

const showCommentEditor = ref<boolean>(props.commentCount <= 0)

const handleCommentEditorOpen = () => {
  showCommentEditor.value = true
}

const handleCommentEditorClose = () => {
  showCommentEditor.value = false
}

const pageIndex = ref(1)
const pageSize = ref(10)

const getCommentList = async () => {
  var response = await getCommentApi(props.replyId, {
    PageIndex: pageIndex.value,
    PageSize: pageSize.value
  })
  commentList.value = response.value?.Data
}

const commentList = ref<PageResponse<CommentInfo>>()

commentList.value =
  props.commentCount === 0
    ? {
        Total: 0,
        Rows: []
      }
    : (await getCommentApi(props.replyId, { PageIndex: 1, PageSize: 10 })).value
        ?.Data

const commentContent = ref<string>('')

const handleReplyCommit = async () => {
  if (!commentContent.value.trim()) {
    useMessage('', 'warn')
    return
  }

  var response = await postCommentApi(props.replyId, commentContent.value)
  if (!response.value?.Status) {
    useMessage(response.value?.Error.Message!, 'error')
    return
  }

  getCommentList()
  commentContent.value = ''
}

const handlePageChange = async () => {
  await getCommentList()
}
</script>

<template>
  <div class="comment-wrapper">
    <div class="comment-content">
      <ul class="comment-list">
        <li v-for="comment in commentList?.Rows">
          {{ `${comment.Creator.DisplayName}: ${comment.Content}` }}
        </li>
        <li class="comment-list-footer">
          <button
            class="editor-open"
            v-show="!showCommentEditor"
            @click="handleCommentEditorOpen"
          >
            {{ $t('forum.post.reply.comment.open') }}
          </button>
          <button
            class="editor-close"
            v-show="showCommentEditor"
            @click="handleCommentEditorClose"
          >
            {{ $t('forum.post.reply.comment.close') }}
          </button>
          <CloudeaPagination
            v-model:current-page="pageIndex"
            :total="commentList?.Total!"
            :page-size="pageSize"
            @change="handlePageChange"
            layout="pager"
          />
        </li>
      </ul>
      <div class="comment-editor" v-show="showCommentEditor">
        <CloudeaFormInput v-model="commentContent" full-border />
        <button @click="handleReplyCommit">
          {{ $t('forum.post.reply.comment.commit') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.comment-wrapper {
  border: 1px solid var(--cloudea-font-color-0);

  .comment-content {
    padding: 4px 15px 14px;
    display: flex;
    flex-direction: column;

    .comment-list-footer {
      display: flex;
      flex-direction: row-reverse;

      .editor-open,
      .editor-close {
        padding: 4px 8px;
        cursor: pointer;

        border-radius: 5px;
        border: 1px solid var(--cloudea-font-color-0);
        color: var(--cloudea-font-color-3);

        &:hover {
          border-color: var(--cloudea-blue-5);
          color: var(--cloudea-blue-5);
        }
      }
    }
  }

  .comment-editor {
    padding-top: 13px;
    display: flex;
    align-items: center;

    .cloudea-input {
      padding: 0;
      margin-right: 20px;
    }

    button {
      height: 38px;
      width: 100px;
      border: 2px solid var(--cloudea-blue-5);
      background: var(--cloudea-blue-0);
      color: var(--cloudea-font-color-3);
      cursor: pointer;
    }
  }
}
</style>
