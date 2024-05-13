<script setup lang="ts">
import type { PostInfo } from '~/types/api/forum-model.d'

const postLink = computed(() => `/forum/posts/${PostId}`)
const userLink = computed(() => `/user/${CreatorId}/home`)

const showUserArea = ref(false)

const handleClickLike = () => {
  console.log('like')
}

const handleClickTag = (tag: string) => {
  console.log('tag:', tag)
}

const jumpToUser = () => {
  navigateTo(useNuxtApp().$localePath(userLink.value))
}

const props = defineProps<{
  post: PostInfo
}>()

const {
  PostId,
  CreatorId,
  Creator,
  Title,
  Content,
  ReplyCount,
  ClickCount,
  LikeCount,
  DislikeCount,
  CreateTime,
  LastUpdatedTime
} = props.post
</script>

<template>
  <div class="content-wrap">
    <NuxtLinkLocale class="content-main" :to="postLink">
      <div class="title-row">
        <div class="title">
          {{ Title }}
        </div>
      </div>
      <div class="abstract">
        <div>
          {{ markdownToText(Content) }}
        </div>
      </div>
      <div class="entry-footer">
        <ul class="action-list">
          <li class="item meta-container">
            <div
              class="user-info"
              @click="jumpToUser"
              @mouseenter="showUserArea = true"
              @mouseleave="showUserArea = false"
            >
              <div class="user-popover">
                {{ Creator.DisplayName }}
                <Transition name="fade">
                  <CloudeaUserPanel
                    v-if="showUserArea"
                    :user-id="CreatorId"
                    :profile="Creator"
                  />
                </Transition>
              </div>
            </div>
            <div class="footer-divider"></div>
          </li>
          <li class="item date">
            {{ getLocaleTime(CreateTime) }}
            <div class="footer-divider"></div>
          </li>
          <li class="item view">
            <Icon name="lucide:eye" />
            <span>{{ ClickCount }}</span>
          </li>
          <li class="item reply">
            <Icon name="lucide:message-square" />
            <span>{{ ReplyCount }}</span>
          </li>
          <li class="item like" @click.stop="handleClickLike">
            <Icon name="lucide:thumbs-up" />
            <span>{{ LikeCount }}</span>
          </li>
        </ul>
        <div class="entry-footer-tags" @click.stop="handleClickTag('test')">
          <div class="footer-tag footer-tag-only width-limited">
            {{ 'Linux' }}
          </div>
        </div>
      </div>
    </NuxtLinkLocale>
    <img src="" alt="" class="lazy thumb" v-if="false" />
  </div>
</template>

<style lang="scss" scoped>
.content-wrap {
  display: flex;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--cloudea-gray-4);
  width: 100%;

  .content-main {
    flex: 1 1 auto;
  }
}

.title-row {
  display: flex;
  margin-bottom: 2px;

  .title {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: var(--cloudea-font-color-3);
    width: 100%;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
}

.abstract {
  margin-bottom: 4px;
  font-weight: 400;

  div {
    color: var(--cloudea-font-color-1);
    font-size: 13px;
    line-height: 22px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
}

.entry-footer {
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;

  .action-list,
  .action-list > .item {
    display: flex;
    align-items: center;
  }

  .action-list > .item {
    position: relative;
    margin-right: 24px;
    font-size: 13px;
    line-height: 20px;
    color: var(--cloudea-font-color-1);
    flex-shrink: 0;

    span {
      margin-left: 4px;
    }

    svg {
      font-size: 1.2rem;
    }

    &.like:hover {
      color: var(--cloudea-blue-5);
    }

    &.meta-container,
    &.meta-container .user-info {
      display: flex;
      align-items: center;
      color: var(--cloudea-font-color-1);
    }

    &.meta-container .user-info {
      max-width: 132px;
      font-size: 13px;
      line-height: 22px;
      white-space: nowrap;
      // overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;

      &:hover {
        color: var(--cloudea-blue-5);
      }

      & .user-popover {
        display: inline;
        // overflow: hidden;
        position: relative;
        text-overflow: ellipsis;
      }
    }
  }

  .footer-divider {
    width: 1px;
    height: 12px;
    background: var(--cloudea-gray-4);
    margin: 0 -13px 0 12px;
  }
}

.entry-footer,
.entry-footer-tags {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.entry-footer-tags {
  .footer-tag {
    background: var(--cloudea-trans-white-2);
    padding: 0 6px;
    border-radius: 2px;
    max-width: 72px;
    box-sizing: border-box;
    margin-left: 6px;
    color: var(--cloudea-font-color-1);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    min-height: 18px;
    line-height: 18px;

    &:hover {
      color: var(--cloudea-blue-5);
    }
  }

  .footer-tag-only {
    max-width: 104px;
  }

  .footer-tag.width-limited {
    max-width: 65px;
  }
}

/* img */
.thumb {
  flex: 0 0 auto;
  width: 108px;
  height: 72px;
  margin-left: 24px;
  border-radius: 4px;
  border: 1px solid;
}
</style>
