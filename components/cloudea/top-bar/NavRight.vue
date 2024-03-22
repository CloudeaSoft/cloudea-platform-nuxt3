<script setup lang="ts">
const isShowSearch = ref(false)
</script>

<template>
  <div class="right-side-nav">
    <span class="search" @click="isShowSearch = true">
      <Icon name="lucide:search" />
    </span>
    <span class="settings">
      <CloudeaSettingPanelMode></CloudeaSettingPanelMode>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.right-side-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  margin: 0;
  order: 0;

  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--cloudea-font-color-2);
    font-size: 25px;
    cursor: pointer;
    margin-right: 20px;
  }

  .settings {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--cloudea-font-color-2);
    font-size: 25px;
    cursor: pointer;
  }
}
</style>
