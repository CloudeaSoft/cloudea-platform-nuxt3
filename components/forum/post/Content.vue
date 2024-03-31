<script setup lang="ts">

</script>

<template>
  <div class="forum-post-container">
    <div class="post-content cloudea-area">
      <ForumPostMain></ForumPostMain>
    </div>
    <!-- <div class="post-aside"><ForumPostAside></ForumPostAside></div> -->
    <div class="post-panel cloudea-area">
      <ForumPostPanel></ForumPostPanel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.forum-post-container {
  height: calc(100% - 20px);

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
}
</style>
