<script setup lang="ts">
const list = ref([{ title: 'edit.topic.title', route: '/forum/edit/topic' }])
</script>

<template>
  <div class="edit-content cloudea-area">
    <div class="edit-title">编辑器</div>
    <div class="edit-content-body">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.edit-content {
  display: flex;
  padding: 20px;
  width: 100%;

  .edit-title {
    background: var(--cloudea-white);
    writing-mode: vertical-rl;
    text-orientation: sideways; /* 使得文字保持水平方向 */
    font-size: 2rem;
    text-align: center;
    border-radius: 10px 0px 0px 10px;
    border-right: 1px solid var(--cloudea-font-color-0);
  }

  .edit-content-body {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
