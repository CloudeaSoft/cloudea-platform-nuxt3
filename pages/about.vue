<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: t('meta.about.title'),
  meta: [
    {
      name: 'description',
      content: t('meta.about.description')
    }
  ]
})
</script>

<template>
  <div class="view about-view"></div>
</template>

<style lang="scss" scoped>
.about-view {
  height: calc(100dvh - 6.66rem);
}
</style>
