<script setup lang="ts"></script>

<template>
  <div class="book-container cloudea-area">
    <div class="book-content">
      <div class="novel-list">
        <div class="novel-item" v-for="i in 20">abc</div>
        <i></i><i></i><i></i><i></i><i></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.book-container {
  min-height: 100px;
  padding: 20px;

  .book-content {
    .novel-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;

      .novel-item {
        width: 150px;
        height: 200px;
        margin-bottom: 10px;
        background-color: #f0f0f0;
        border: 1px solid #ccc;
      }

      & > i {
        width: 150px;
      }
    }
  }
}
</style>
