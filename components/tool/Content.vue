<template>
  <div class="tool-container">
    <div class="tool-menu cloudea-area"><ToolMenu /></div>
    <div class="tool-content cloudea-area">
      <slot><ToolDefaultCard /></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tool-container {
  width: 100%;
  height: calc(100% - 1.66rem);
  display: flex;
  padding-bottom: 1.66rem;
}

.tool-menu {
  position: sticky;
  top: 6.66rem;
  flex-shrink: 0;
  width: 16rem;
  height: fit-content;
  margin-right: 20px;
  padding: 20px;
}

.tool-content {
  min-width: 0;
  width: calc(100% - 16rem);
  height: 100%;
  padding: 20px;
}
</style>
