<script setup lang="ts"></script>

<template>
  <div class="book-container cloudea-area">
    <div class="book-content clearfix">
      <BookContentSidebar></BookContentSidebar>
      <BookContentMain></BookContentMain>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.book-container {
  padding: 20px 30px;
  min-width: 1200px;

  .book-content {
    display: flex;
  }
}
</style>
