<template>
  <div class="view"><LoginContent /></div>
</template>

<style lang="scss" scoped>
.view {
  height: calc(100dvh - 6.66rem);
  min-height: 500px;
}

@media (max-width: 600px) {
  .view {
    height: calc(100dvh - 5rem);
    min-height: 500px;
  }
}
</style>
