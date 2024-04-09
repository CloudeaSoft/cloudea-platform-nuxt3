<script setup lang="ts">
const route = useRoute()
const pid = computed(() => {
  return (route.params as { pid: string }).pid
})
</script>

<template>
  <div class="post-view view">
    <ForumPostContent :post-id="pid"></ForumPostContent>
  </div>
</template>

<style lang="scss" scoped>
.post-view {
  height: calc(100dvh - 6.66rem);
}
</style>
