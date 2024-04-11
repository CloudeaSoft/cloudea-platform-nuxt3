<script setup lang="ts">
const emits = defineEmits<{
  reply: []
}>()
</script>

<template>
  <div class="aside-container">
    <ul class="aside-list">
      <li class="reply" @click="emits('reply')">
        <Icon name="lucide:message-square" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.aside-container {
  height: 100px;
  padding: 10px 15px 0;

  .aside-list {
    font-size: 2rem;

    li {
      cursor: pointer;

      &:hover {
        color: var(--cloudea-blue-5);
      }
    }
  }
}
</style>
