<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: t('meta.book.title'),
  meta: [
    {
      name: 'description',
      content: t('meta.book.description')
    }
  ]
})
</script>

<template><div class="book-view view">With books we are living.</div></template>

<style lang="scss" scoped>
.book-view {
  height: calc(100dvh - 6.66rem);
  color: var(--cloudea-font-color-3);
}
</style>
