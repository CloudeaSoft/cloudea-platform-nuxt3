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
  <div class="view tool-view">
    <ToolContent><NuxtPage /></ToolContent>
  </div>
</template>

<style lang="scss" scoped></style>
