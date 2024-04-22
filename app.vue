<script setup lang="ts">
const { showSettingPanel } = storeToRefs(useTempSettingStore())
</script>

<template>
  <div>
    <CloudeaSettingPanel :show="showSettingPanel" />
    <CloudeaSearch />
    <NuxtLoadingIndicator
      :height="3"
      color="repeating-linear-gradient(90deg, #2ae0c8, #cbf5fb)"
      :duration="2000"
    />
    <CloudeaLayout>
      <NuxtPage />
    </CloudeaLayout>
  </div>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fold-enter-active,
.fold-leave-active {
  transition: height 0.5s ease; /* 设置过渡效果 */
}
</style>
