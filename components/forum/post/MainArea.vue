<template>
  <div class="post-main">
    <h2 class="post-title">main area</h2>
    <div class="post-body">
      <div class="post-body-content">post content</div>
      <div class="reply-container" v-for="i in 5">
        <ForumPostReply></ForumPostReply>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-main {
  height: 100%;
}

.post-title {
  height: 3.33rem;
  padding-left: 20px;
  line-height: 3.33rem;
  border-bottom: 1px solid var(--cloudea-gray-4);
}

.post-body {
  padding: 20px;
  height: calc(100% - 3.33rem);
  overflow-y: scroll;
  scrollbar-width: thin !important;
}

.post-body-content {
  height: 200px;
  border-bottom: 1px solid var(--cloudea-gray-4);
}

.reply-container {
  border-bottom: 1px solid var(--cloudea-gray-4);
}
</style>
