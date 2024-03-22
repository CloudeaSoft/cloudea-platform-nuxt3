<script setup lang="ts">
const imageURL = ref('')

onMounted(async () => {
  imageURL.value = await useSettingStore().getCurrentPageBackground()
})
</script>

<template>
  <div class="app" :style="{ backgroundImage: `url(${imageURL})` }">
    <div class="view-container container index-container">
      <div class="main-header-box">
        <CloudeaTopBar></CloudeaTopBar>
      </div>
      <div class="container main-container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  background-attachment: fixed;
  background-color: white;
}

.container.index-container {
  max-width: 1200px;
}

.main-header-box {
  position: relative;
  height: 5rem;
}
</style>
