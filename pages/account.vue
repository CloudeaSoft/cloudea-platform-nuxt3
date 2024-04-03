<script setup lang="ts">
const a = ref()
</script>

<template>
  <div class="view user-view">
    <div class="user-container cloudea-area">
      <AccountNav></AccountNav>
      <NuxtPage />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-view {
  height: calc(100dvh - 8rem);
  margin-top: 3rem;
  display: flex;

  .user-container {
    margin: auto;
    display: flex;
    width: 980px;
    height: 70%;
    min-height: 700px;
    overflow: hidden;
  }
}
</style>
