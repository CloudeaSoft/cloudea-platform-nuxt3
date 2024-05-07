<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: t('meta.home.title'),
  meta: [
    {
      name: 'description',
      content: t('meta.home.description')
    },
    {
      name: 'msvalidate.01',
      content: '85939193CA616FE26C0A5996AF494D83'
    }
  ]
})
</script>

<template>
  <div class="root">
    <HomeContent></HomeContent>
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: 100%;
}
</style>
