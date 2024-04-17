<script setup lang="ts">
import type { ForumPost, PostInfo } from '~/types/api/forum-model'

interface PostListProps {
  data: PostInfo[]
}

const { data } = defineProps<PostListProps>()
</script>

<template>
  <div class="post-list-wrap">
    <div class="entry" v-for="post in data" :key="post.PostId">
      <ForumContentPostListItem :post="post" />
    </div>
  </div>
</template>

<style scoped>
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
</style>
