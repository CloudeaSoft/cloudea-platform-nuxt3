<template>
  <div class="view edit-view">
    <div class="edit-container">
      <ForumEditNav></ForumEditNav>
      <ForumEditContent>
        <NuxtPage />
      </ForumEditContent>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.edit-view {
  min-height: calc(100dvh - 6.66rem);

  .edit-container {
    display: flex;
    align-items: center;
    padding-bottom: 1.66rem;
  }
}
</style>
