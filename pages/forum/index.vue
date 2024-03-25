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
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: 100dvh;
}

.forum-index-view {
  display: flex;
  flex-direction: row;
}
</style>
