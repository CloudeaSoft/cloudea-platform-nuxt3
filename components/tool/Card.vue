<script setup lang="ts">
import { ref } from 'vue'

const cardHeaderRef = ref<HTMLElement>()

const elementX = ref(0)
const elementY = ref(0)

const handleMouseMove = (event: MouseEvent) => {
  const rect = cardHeaderRef.value!.getBoundingClientRect()
  elementX.value = event.clientX - rect.left
  elementY.value = event.clientY - rect.top
}
</script>

<template>
  <div class="tool-card up" @mousemove="handleMouseMove">
    <div class="tool-card-container">
      <div class="tool-card-header">
        <div
          class="tool-card-header-content"
          ref="cardHeaderRef"
          :style="{ '--x': elementX + 'px', '--y': elementY + 'px' }"
        >
          <div class="header-body"><slot name="header"></slot></div>
        </div>
      </div>
      <div class="tool-card-main">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tool-card {
  transition: all 0.5s ease-out;
  transform: scale(0.2);
  opacity: 0;
}

.tool-card.up {
  transform: scale(1);
  opacity: 1;
}

.tool-card-container {
  margin: 10px;
  overflow: hidden;
  position: relative;
}

.tool-card-header {
  position: relative;
  height: 4rem;
}

.tool-card-header-content {
  position: relative;

  background: radial-gradient(#e66465, #9198e5);
  border-radius: 20px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  overflow: hidden;
}

.tool-card-header-content::before {
  content: '';
  position: absolute;
  top: var(--y);
  left: var(--x);

  transform: translate(-50%, -50%);
  background: radial-gradient(var(--cloudea-black), transparent, transparent);
  width: 300px;
  height: 150px;

  opacity: 0;

  transition:
    0.5s,
    top 0s,
    left 0s;
}

.tool-card:hover .tool-card-header-content::before {
  opacity: 1;
}

.tool-card-header-content::after {
  content: '';
  position: absolute;
  inset: 3px;
  border-radius: 17px;
  background: var(--cloudea-white);
  backdrop-filter: blur(10px);
  opacity: 0.95;
}

.tool-card-header-content .header-body {
  position: absolute;
  z-index: 1;
}

.tool-card-main {
  margin: 30px 0 0;
}
</style>
