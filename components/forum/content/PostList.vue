<script setup lang="ts">
import type { PostInfo } from '~/types/api/forum-model'

const showRecommend = ref(true)

const list = ref<PostInfo[]>([])
for (var i = 0; i < 20; i++) {
  list.value.push({
    PostId: 'string',
    Creator: '用户名',
    CreatorId: 'string',
    Title: '帖子标题',
    Content: 'string',
    ReplyCount: 5,
    ClickCount: 15,
    LikeCount: 3,
    DislikeCount: 0,
    CreateTime: new Date('2024.03.22'),
    LastUpdatedTime: null
  })
}
</script>

<template>
  <div class="post-list-container cloudea-area">
    <div class="post-list-header">
      <div class="list-nav">
        <ul class="nav-list">
          <li :class="showRecommend ? 'nav-item active' : 'nav-item'">
            <div @click="showRecommend = true">推荐</div>
          </li>
          <li :class="showRecommend ? 'nav-item' : 'nav-item active'">
            <div @click="showRecommend = false">最新</div>
          </li>
        </ul>
        <div class="drop-down-area"></div>
      </div>
    </div>
    <div class="post-list-wrap">
      <div class="entry" v-for="post in list">
        <ForumContentPostListItem :key="post.PostId" :post="post" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-list-container {
  .post-list-header {
    padding: 1rem 1.66rem;
    border-bottom: 1px solid var(--cloudea-gray-4);
  }

  .post-list-header .list-nav,
  .post-list-header .list-nav .nav-list {
    display: flex;
    justify-content: space-between;
  }

  .post-list-header .list-nav .nav-list .nav-item {
    padding: 0 1.66rem;
    line-height: 2rem;
    font-size: 1.33em;
    border: none;
    position: relative;
    cursor: pointer;
  }
  .post-list-header .list-nav .nav-list .nav-item:first-child {
    margin-left: -1.66rem;
  }

  .nav-list .nav-item.active {
    color: var(--cloudea-blue-5);
    font-weight: 500;
  }

  .post-list-header .nav-list {
    align-items: center;
    line-height: 1;
  }

  .post-list-wrap {
    .entry {
      cursor: pointer;
      position: relative;
      padding: 12px 20px 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    & .entry:last-child * {
      border-bottom: 0;
    }
  }
}
</style>
