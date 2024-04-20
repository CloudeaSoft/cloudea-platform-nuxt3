<script setup lang="ts">
const { showSettingPanel } = storeToRefs(useTempSettingStore())
</script>

<template>
  <div>
    <CloudeaSettingPanel :show="showSettingPanel" />
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

.fold-enter,
.fold-leave-to {
  height: 100%; /* 初始和结束状态，元素位于正常位置 */
}

.fold-leave-active {
  height: 0;
}
</style>
