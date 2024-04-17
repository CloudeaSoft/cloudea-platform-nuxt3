<script setup lang="ts">
interface postProps {
  postId: string
}

const props = defineProps<postProps>()

const replyEditorRef = ref<HTMLElement>()

const handleScrollToReply = () => {
  const target = replyEditorRef.value
  window.scrollTo({
    top: target?.offsetTop,
    behavior: 'smooth'
  })
}
</script>

<template>
  <div class="forum-post-container">
    <div class="post-content cloudea-area">
      <ForumPostMain :post-id="postId"></ForumPostMain>
    </div>
    <div class="post-aside" v-show="false">
      <ForumPostAside></ForumPostAside>
    </div>
    <div class="post-panel cloudea-area">
      <ForumPostPanel
        :post-id="postId"
        @reply="handleScrollToReply"
      ></ForumPostPanel>
    </div>
    <div ref="replyEditorRef" class="post-reply">
      <ForumPostReplyEditor :post-id="props.postId" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.forum-post-container {
  height: calc(100% - 20px);
  position: relative;

  .post-content {
    height: 100%;
    // backdrop-filter: initial;
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
    margin-top: 20px;
    height: 320px;
    width: 100%;
    padding-bottom: 20px;

    transition: all 0.3s;

    &.active {
      bottom: 0;
    }
  }
}
</style>
