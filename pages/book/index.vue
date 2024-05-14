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

<template>
  <div class="book-view view"><BookContent /></div>
</template>

<style lang="scss" scoped>
.book-view {
  color: var(--cloudea-font-color-3);
  padding-bottom: 20px;
}
</style>
