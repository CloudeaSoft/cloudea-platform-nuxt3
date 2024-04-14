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
        <li
          class="comment-item"
          v-for="comment in commentList?.Rows"
          :key="comment.CommentId"
        >
          <div class="item-avatar"></div>
          <div class="item-right">
            <div class="item-content">
              <div class="item-creator">
                {{ comment.Creator.DisplayName }}
              </div>
              :&nbsp;
              <div class="item-text">
                {{ comment.Content }}
              </div>
            </div>
            <div class="item-footer">
              {{ getLocaleTime(comment.CreateTime) }}
            </div>
          </div>
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
            v-if="commentList?.Total! > 0"
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
  border: 1px solid var(--cloudea-grey-0);
  background: var(--cloudea-white);

  .comment-content {
    padding: 4px 15px 14px;
    display: flex;
    flex-direction: column;

    .comment-list {
      .comment-item {
        padding-top: 15px;
        display: flex;
        align-items: center;

        .item-avatar {
          width: 40px;
          height: 40px;
          background-color: var(--cloudea-black);
        }

        .item-right {
          display: flex;
          flex-direction: column;
          margin-left: 15px;
          line-height: 24px;
          flex: 1;

          .item-content {
            display: flex;

            .item-creator {
              color: var(--cloudea-blue-5);
            }
          }

          .item-footer {
            width: 100%;
            text-align: right;
          }
        }
      }

      .comment-list-footer {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        padding-top: 15px;

        .editor-open,
        .editor-close {
          padding: 4px 8px;
          cursor: pointer;

          border-radius: 5px;
          border: 1px solid var(--cloudea-font-color-0);
          color: var(--cloudea-font-color-3);
          background: var(--cloudea-white);
          &:hover {
            border-color: var(--cloudea-blue-5);
            color: var(--cloudea-blue-5);
          }
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
      border: 2px solid var(--cloudea-trans-blue-2);
      background: var(--cloudea-white);
      color: var(--cloudea-font-color-3);
      cursor: pointer;
      transition: border 0.6s;

      &:hover {
        border-color: var(--cloudea-blue-5);
      }
    }
  }
}
</style>
