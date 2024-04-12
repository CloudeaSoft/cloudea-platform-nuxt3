<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('meta.forum.title'),
  meta: [
    {
      name: 'description',
      content: t('meta.forum.description')
    }
  ]
})
</script>

<template>
  <div class="view forum-index-view">
    <ForumContent></ForumContent>
    <ForumEditLink />
  </div>
</template>

<style lang="scss" scoped>
.forum-index-view {
  display: flex;
  flex-direction: row;
}
</style>
