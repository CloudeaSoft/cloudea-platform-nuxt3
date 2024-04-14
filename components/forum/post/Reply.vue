<script setup lang="ts">
import type { UserProfile } from '~/types/api/user-model'

interface ReplyProps {
  replyId: string
  userId: string
  user?: UserProfile
  time: string
  content: string
  commentCount: number
  floor: number
}

const props = defineProps<ReplyProps>()

const showComment = ref<boolean>(props.commentCount > 0)

const handleCommentOpen = () => {
  showComment.value = true
}

const handleCommentClose = () => {
  showComment.value = false
}
</script>

<template>
  <div class="reply-content">
    <div class="user-area">
      <ForumPostMainUserArea
        :user-id="userId"
        :user-name="user?.DisplayName"
      ></ForumPostMainUserArea>
    </div>
    <div class="right-area">
      <div class="time-area">{{ getLocaleTime(time) }}</div>
      <div class="content-area">{{ content }}</div>
      <div class="comment-area">
        <div class="detail">
          <div class="detail-wrap clearfix">
            <span class="comment-report">
              <Icon name="lucide:triangle-alert" />
              <span>{{ $t('forum.post.reply.report') }}</span>
            </span>
            <span class="comment-floor">{{
              floor + $t('forum.post.reply.floor')
            }}</span>
            <div class="comment-button">
              <span
                class="comment-open"
                v-show="!showComment"
                @click="handleCommentOpen"
              >
                {{ `${$t('forum.post.reply.open')}(${props.commentCount})` }}
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
        </div>
        <KeepAlive
          ><ForumPostComment
            v-if="showComment"
            :reply-id="props.replyId"
            :comment-count="props.commentCount"
        /></KeepAlive>
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

          & > * {
            margin: 0 4px;
            line-height: 2rem;
          }

          .comment-button {
            float: right;
            margin-right: 0;
          }

          .comment-open,
          .comment-close,
          .comment-report {
            cursor: pointer;

            &:hover {
              color: var(--cloudea-blue-5);
            }
          }

          .comment-report {
            display: inline-block;

            svg {
              height: 1.2rem;
              width: 1.2rem;
              margin-right: 2px;
            }
          }

          .comment-close {
            position: relative;
            display: inline-block;
            border: 1px solid var(--cloudea-grey-0);
            border-bottom: 0;
            height: 2rem;
            width: 80px;
            text-align: center;
            line-height: 2rem;
            background: var(--cloudea-white);
            box-sizing: content-box;
            user-select: none;

            &::after {
              content: '';
              position: absolute;
              bottom: -1px;
              right: 0;
              width: calc(100%);
              height: calc(1px);
              background-color: var(--cloudea-white);
              z-index: 1;
            }
          }
        }
      }
    }
  }
}
</style>
