<script setup lang="ts">
import { getCommentApi, postCommentApi } from '~/api'

interface ReplyProps {
  replyId: string
  userId: string
  user?: string
  time: string
  content: string
  commentCount: number
  floor: number
}

const props = defineProps<ReplyProps>()

const showComment = ref<boolean>(props.commentCount > 0)

const showCommentEditor = ref<boolean>(props.commentCount <= 0)

const handleCommentOpen = () => {
  showComment.value = true
}

const handleCommentClose = () => {
  showComment.value = false
}

const handleCommentEditorOpen = () => {
  showCommentEditor.value = true
}

const handleCommentEditorClose = () => {
  showCommentEditor.value = false
}

const commentList = ref()
commentList.value = (await getCommentApi(props.replyId)).value?.Data.Rows

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

  commentContent.value = ''
}
</script>

<template>
  <div class="reply-content">
    <div class="user-area">
      <ForumPostMainUserArea
        :user-id="userId"
        :user-name="user"
      ></ForumPostMainUserArea>
    </div>
    <div class="right-area">
      <div class="time-area">{{ getLocaleTime(time) }}</div>
      <div class="content-area">{{ content }}</div>
      <div class="comment-area">
        <div class="detail">
          <div class="detail-wrap">
            <span class="comment-report">{{
              $t('forum.post.reply.report')
            }}</span>
            <span class="comment-floor">{{
              floor + $t('forum.post.reply.floor')
            }}</span>
            <span
              class="comment-open"
              v-show="!showComment"
              @click="handleCommentOpen"
            >
              {{ $t('forum.post.reply.open') }}
            </span>
            <span
              class="comment-close"
              v-show="showComment"
              @click="handleCommentClose"
            >
              {{ $t('forum.post.reply.close') }}
            </span>
          </div>
        </div>
        <div class="comment-wrapper" v-show="showComment">
          <ul class="comment-content">
            <li v-for="comment in commentList">
              {{ `${comment.CreatorId}: ${comment.Content}` }}
            </li>
            <li>
              <button
                v-show="!showCommentEditor"
                @click="handleCommentEditorOpen"
              >
                {{ $t('forum.post.reply.comment.open') }}
              </button>
              <button
                v-show="showCommentEditor"
                @click="handleCommentEditorClose"
              >
                {{ $t('forum.post.reply.comment.close') }}
              </button>
            </li>
          </ul>
          <div class="comment-editor" v-show="showCommentEditor">
            <input type="text" v-model="commentContent" />
            <button @click="handleReplyCommit">
              {{ $t('forum.post.reply.comment.commit') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.reply-content {
  min-height: 200px;
  display: flex;
  border-bottom: 1px solid var(--cloudea-gray-4);
  overflow: hidden;

  .user-area {
    width: 150px;
    padding: 20px 0;
    box-shadow: 1px 0px 3px 0px rgba($color: #000000, $alpha: 0.35);
  }

  .right-area {
    flex: 1;
    padding: 20px 0;
    padding-left: 20px;

    .time-area {
      text-align: right;
    }

    .content-area {
      min-height: 170px;
    }

    .comment-area {
      .detail {
        line-height: 2rem;

        &::after {
          content: ' ';
          display: table;
          clear: both;
        }

        .detail-wrap {
          float: right;
          position: relative;

          & > span {
            margin: 0 4px;
          }

          .comment-open,
          .comment-close,
          .comment-report {
            cursor: pointer;

            &:hover {
              color: var(--cloudea-blue-5);
            }
          }
        }
      }

      .comment-wrapper {
        border: 1px solid var(--cloudea-font-color-0);

        .comment-content {
          padding: 4px 15px 14px;
        }

        .comment-editor {
          padding-top: 13px;
        }
      }
    }
  }
}
</style>
