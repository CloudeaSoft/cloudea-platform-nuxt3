<script setup lang="ts">
const route = useRoute()
const guid = computed(() => {
  return (route.params as { guid: string }).guid
})
</script>

<template>
  <div class="view user-view">
    <UserContent :user-id="guid">
      <NuxtPage />
    </UserContent>
  </div>
</template>

<style lang="scss" scoped>
.user-view {
  margin-top: 0;
  min-height: calc(100dvh - 5rem);
  display: flex;
}
</style>
