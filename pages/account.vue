<script setup lang="ts">
const { t } = useI18n()

definePageMeta({
  middleware: 'auth'
})

useHead({
  title: t('meta.account.title'),
  meta: [
    {
      name: 'description',
      content: t('meta.account.description')
    }
  ]
})
</script>

<template>
  <div class="view account-view">
    <div class="account-container cloudea-area">
      <AccountNav></AccountNav>
      <NuxtPage />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.account-view {
  height: calc(100dvh - 8rem);
  min-height: 720px;
  margin-top: 3rem;
  display: flex;

  .account-container {
    margin: auto;
    display: flex;
    width: 980px;
    height: 70%;
    min-height: 700px;
    overflow: hidden;
  }
}
</style>
