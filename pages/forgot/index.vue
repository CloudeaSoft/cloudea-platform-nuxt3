<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: t('meta.forgot.title'),
  meta: [
    {
      name: 'description',
      content: t('meta.forgot.description')
    }
  ]
})
</script>

<template>
  <div class="view forgot-view"><ForgotContent /></div>
</template>

<style lang="scss" scoped>
.forgot-view {
    height: calc(100dvh - 6.66rem);
}
</style>
