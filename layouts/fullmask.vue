<script setup lang="ts">
const { systemBackground } = storeToRefs(useSettingStore())

const imageURL = ref('')

onMounted(async () => {
  imageURL.value = await useSettingStore().getCurrentBackground()
})

watch(
  () => systemBackground.value,
  async () => {
    imageURL.value = await useSettingStore().getCurrentBackground()
  }
)
</script>

<template>
  <div class="app" :style="{ backgroundImage: `url(${imageURL})` }">
    <!-- <div id="sakura"></div> -->
    <div id="perticle_1"></div>
    <div class="view-container mask-container">
      <div class="main-header-box">
        <CloudeaTopBar></CloudeaTopBar>
      </div>
      <div class="main-container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('@/assets/css/effect/sakura.scss');
@import url('@/assets/css/effect/perticle.scss');

.app {
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  background-attachment: fixed;
  background-color: white;
}

.mask-container {
  position: relative;
  background-color: rgba(204, 232, 207, 0.95);
  z-index: 1;
}

.main-container {
  max-width: 100%;
  min-height: calc(100dvh - 5rem);
}

.main-header-box {
  position: relative;
  height: 5rem;
}
</style>
