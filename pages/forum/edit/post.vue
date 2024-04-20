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

<template><ForumEditPost /></template>
