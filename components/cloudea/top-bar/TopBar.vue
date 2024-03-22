<script setup lang="ts"></script>
<template>
  <header class="main-header visible">
    <div class="container">
      <CloudeaTopBarNav></CloudeaTopBarNav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: transform 0.2s;
  transform: translate3d(0, -100%, 0);
}

.main-header {
  background: var(--cloudea-trans-white-5);
  box-shadow: 0 2px 10px 3px var(--cloudea-trans-blue-1);
  color: var(--cloudea-font-color-3);
  backdrop-filter: blur(5px);
  height: 5rem;
  z-index: 250;
  flex-shrink: 0;
}

.main-header.visible {
  transform: translateZ(0);
}

.container {
  display: flex;
  align-items: center;
  height: 100%;
}

.main-header .container {
  margin: auto;
  max-width: 1440px;
}
</style>
