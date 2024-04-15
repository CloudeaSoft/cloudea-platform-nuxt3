<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="user-content">
    <div class="content-title">
      <span class="title-icon"></span>
      <span class="title-text">{{ title }}</span>
    </div>
    <div class="content-body">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-content {
  width: 100%;

  .content-title {
    height: 50px;
    padding-left: 30px;
    border-bottom: 1px solid var(--cloudea-gray-4);

    .title-icon {
      float: left;
      width: 4px;
      height: 16px;
      margin-top: 16px;
      background-color: var(--cloudea-blue-5);
      border-radius: 4px;
    }

    .title-text {
      float: left;
      margin: 15px 0 0 5px;
      color: var(--cloudea-blue-5);
      font-size: 1.125rem;
      cursor: default;
    }
  }

  .content-body {
    padding: 0 20px;
  }
}
</style>
