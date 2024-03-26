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
