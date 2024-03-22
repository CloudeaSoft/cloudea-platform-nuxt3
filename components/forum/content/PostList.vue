<script setup lang="ts">
import type { PostInfo } from '~/types/api/forum-model'

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
    CreateTime: new Date(''),
    LastUpdatedTime: null
  })
}
</script>

<template>
  <div class="post-list">
    <div class="post-list-container">
      <div class="post-list-header">
        <div class="list-nav">
          <ul class="nav-list">
            <li class="nav-item active">
              <NuxtLink to="#">推荐</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="#">最新</NuxtLink>
            </li>
          </ul>
          <div class="drop-down-area"></div>
        </div>
      </div>
      <div class="post-list-wrap">
        <ForumContentPostListItem
          v-for="post in list"
          :key="post.PostId"
          :post="post"
        ></ForumContentPostListItem>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-list {
  margin-right: 23.33rem;
  width: 720px;
  position: relative;
  margin-bottom: 20px;
}

.post-list-container {
  background-color: var(--cloudea-trans-white-5);
  backdrop-filter: blur(10px);

  border-radius: 10px;

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
    margin-left: -1.66rem;
    font-size: 1rem;
    border: none;
    position: relative;
    cursor: pointer;
  }

  .nav-list .nav-item.active a {
    color: var(--cloudea-blue-5);
    font-weight: 500;
  }

  .post-list-header .nav-list {
    align-items: center;
    line-height: 1;
  }
}
</style>
