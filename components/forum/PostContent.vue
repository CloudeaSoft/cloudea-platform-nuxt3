<template>
  <div class="forum-post-container">
    <div class="post-content cloudea-area">
      <ForumPostMainArea></ForumPostMainArea>
    </div>

    <div class="post-aside cloudea-area"><ForumPostAside></ForumPostAside></div>
  </div>
</template>

<style lang="scss" scoped>
.forum-post-container {
  height: max(100dvh);

  .post-aside {
    position: fixed;
    margin-left: -7rem;
    top: 140px;
    z-index: 2;
  }
}
</style>
