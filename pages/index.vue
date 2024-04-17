<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: t('meta.home.title'),
  meta: [
    {
      name: 'description',
      content: t('meta.home.description')
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
