<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: t('meta.tool.title'),
  meta: [
    {
      name: 'description',
      content: t('meta.tool.description')
    }
  ]
})
</script>

<template>
  <div class="view"><ToolContent></ToolContent></div>
</template>

<style lang="scss" scoped>
.view {
  height: calc(100dvh - 6.66rem);
}
</style>
