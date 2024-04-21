<script setup lang="ts">
const showMenu = ref<boolean>(false)
</script>

<template>
  <div class="tool-container">
    <div :class="['tool-menu', 'cloudea-area', showMenu ? 'active' : '']">
      <ToolMenu />
      <div class="menu-open" @click="showMenu = !showMenu">
        <Icon name="lucide:arrow-right" v-if="!showMenu" />
        <Icon name="lucide:arrow-left" v-else />
      </div>
    </div>
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
  z-index: 1;

  transition: left 0.3s;

  .menu-open {
    display: none;
    position: absolute;
    right: -50px;
    top: 0;
    width: 50px;
    height: 50px;
    background: var(--cloudea-white);
    border-radius: 0 10px 10px 0;

    align-items: center;
    justify-content: center;

    font-size: 2rem;
  }
}

.tool-content {
  position: static;
  min-width: 0;
  width: calc(100% - 16rem);
  height: 100%;
  padding: 20px;
}

@media (max-width: 800px) {

  .tool-container{
    padding-bottom: 0;
  }
  .tool-menu {
    position: fixed;
    left: -16rem;

    &.active {
      left: 0;
    }

    .menu-open {
      display: flex;
    }
  }

  .tool-content {
    width: 100%;
    min-height: calc(100dvh - 5rem);
  }
}
</style>
