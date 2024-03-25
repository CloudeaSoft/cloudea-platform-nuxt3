<script setup lang="ts"></script>

<template>
  <div class="home-container">
    <div class="home-main"><span>开发中,敬请期待...</span></div>
    <div class="home-info">xxx</div>
    <div class="home-footer">footer</div>
  </div>
</template>

<style lang="scss" scoped>
.home-container {
  .home-main {
    background-color: var(--cloudea-trans-white-2);
    height: calc(100dvh - 5rem);

    display: flex;
    text-align: center;
    justify-content: center;
    line-height: calc(100dvh - 5rem);

    span {
      font-size: 30px;
      font-weight: 700;
      color: var(--cloudea-font-color-2);
    }
  }

  .home-info {
    background-color: rgba($color: #000000, $alpha: 0.5);
    height: 100dvh;
  }

  .home-footer {
    height: 200px;
  }
}
</style>
