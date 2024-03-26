<script setup lang="ts"></script>
<template>
  <div class="sidebar-block cloudea-area">
    <div class="first-line"><slot></slot></div>
  </div>
</template>

<style scoped>
.sidebar-block {
  margin-bottom: 20px;
  /* font-size: 12px; */
  line-height: 1.29;
  color: var(--cloudea-font-color-3);
}
</style>
