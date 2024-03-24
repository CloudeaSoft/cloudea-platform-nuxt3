<script setup lang="ts">
const showSettingPanel = ref(false)
</script>

<template>
  <div>
    <CloudeaSettingPanel :show="showSettingPanel"></CloudeaSettingPanel>
    <NuxtLoadingIndicator
      :height="2"
      color="repeating-linear-gradient(90deg, #2ae0c8, #cbf5fb)"
    />
    <CloudeaLayout @show="showSettingPanel = true">
      <NuxtPage />
    </CloudeaLayout>
  </div>
</template>
