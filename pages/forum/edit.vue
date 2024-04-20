<script setup lang="ts">
const { t } = useI18n()

definePageMeta({
  middleware: 'auth'
})

useHead({
  title: t('meta.forum.edit.post.title'),
  meta: [
    {
      name: 'description',
      content: t('meta.forum.edit.post.description')
    }
  ]
})
</script>

<template>
  <div class="view edit-view">
    <div class="edit-container">
      <ForumEditNav></ForumEditNav>
      <ForumEditContent>
        <ForumEditPost />
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
