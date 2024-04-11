<script setup lang="ts">
interface postProps {
  postId: string
}

const props = defineProps<postProps>()

const isShowReplyEditor = ref<boolean>(false)
</script>

<template>
  <div class="forum-post-container">
    <div class="post-content cloudea-area">
      <ForumPostMain :post-id="postId"></ForumPostMain>
    </div>
    <!-- <div class="post-aside"><ForumPostAside></ForumPostAside></div> -->
    <div class="post-panel cloudea-area">
      <ForumPostPanel
        @reply="isShowReplyEditor = !isShowReplyEditor"
      ></ForumPostPanel>
    </div>
    <div :class="['post-reply', isShowReplyEditor ? 'active' : '']">
      <ForumPostReplyEditor
        :post-id="props.postId"
        @close="isShowReplyEditor = false"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.forum-post-container {
  height: calc(100% - 20px);
  position: relative;

  .post-content {
    height: 100%;
  }

  .post-aside {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 25rem;
  }

  .post-panel {
    position: fixed;
    margin-left: -7rem;
    top: 140px;
    z-index: 2;
  }

  .post-reply {
    position: absolute;
    bottom: -320px;

    height: 300px;
    width: 100%;

    transition: all 0.3s;

    &.active {
      bottom: 0;
    }
  }
}
</style>
