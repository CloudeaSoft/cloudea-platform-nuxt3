<script setup lang="ts">
import { Icon } from '@iconify/vue'
import 'animate.css'

const props = defineProps<{
  message: string
  type: `warn` | `success` | `error` | `info`
}>()

const messageClass = (type: string): string => {
  if (type === 'warn') {
    return `animate__animated animate__headShake ${type}`
  } else if (type === 'success') {
    return `animate__animated animate__bounceInDown ${type}`
  } else if (type === 'error') {
    return `animate__animated animate__tada ${type}`
  } else if (type === 'info') {
    return `animate__animated animate__bounce ${type}`
  } else {
    return ''
  }
}
</script>

<template>
  <div class="cloudea-message-container">
    <div class="cloudea-message" :class="messageClass(type)">
      <span class="icon" v-if="type === 'warn'">
        <Icon icon="lucide:triangle-alert" />
      </span>
      <span class="icon" v-else-if="type === 'success'">
        <Icon icon="lucide:check" />
      </span>
      <span class="icon" v-else-if="type === 'error'">
        <Icon icon="lucide:x" />
      </span>
      <span class="icon" v-else-if="type === 'info'">
        <Icon icon="lucide:info" />
      </span>
      <span v-html="props.message"></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cloudea-message-container {
  position: fixed;
  top: 100px;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  z-index: 9999;
  pointer-events: none;
  user-select: none;
}

.cloudea-message {
  margin: 0 auto;
  font-size: large;
  color: var(--cloudea-font-color-2);
  background-color: var(--cloudea-trans-white-5);
  backdrop-filter: blur(5px);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1vh 10vw;
  box-shadow: var(--shadow);

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

.icon {
  font-size: 23px;
  margin-right: 17px;
}

.warn {
  border: 1px solid var(--cloudea-yellow-3);

  .icon {
    color: var(--cloudea-yellow-3);
  }
}

.success {
  border: 1px solid var(--cloudea-green-4);

  .icon {
    color: var(--cloudea-green-4);
  }
}

.error {
  border: 1px solid var(--cloudea-red-4);

  .icon {
    color: var(--cloudea-red-4);
  }
}

.info {
  border: 1px solid var(--cloudea-blue-5);

  .icon {
    color: var(--cloudea-blue-5);
  }
}
</style>
