<script setup lang="ts">
// 定义props接口
interface Props {
  type?: 'primary' | 'success' | 'danger'
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
}

// 定义emits接口
interface ButtonEmits {
  (e: 'click', value: void): void
}

// 定义props
const props = withDefaults(defineProps<Props>(), {
  type: 'primary'
})

// 定义emits
const emit = defineEmits<ButtonEmits>()

// 方法
const handleClick = () => {
  if (!props.disabled) {
    emit('click')
    console.log(props.type)
    console.log(typeClass())
  }
}

// 计算属性
const typeClass = () => {
  return `custom-button--${props.type}`
}

const disabledClass = () => {
  return props.disabled ? 'custom-button--disabled' : ''
}
</script>

<template>
  <button
    :class="['custom-button', typeClass(), disabledClass()]"
    :disabled="disabled"
    @click.prevent="handleClick"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.custom-button {
  border-radius: 50px;

  cursor: pointer;
  font-size: 15px;
  letter-spacing: 2px;
  overflow: hidden;
  padding: 7px 0;
  text-transform: uppercase;
  transition: all 0.2s !important;
  white-space: nowrap;
  width: 150px;

  &:active {
    transform: scale(0.95);
  }
}

.custom-button--primary {
  background-color: var(--cloudea-trans-white-5);
  border: 1px solid var(--cloudea-blue-5);
  color: var(--cloudea-blue-5);

  &:hover {
    background-color: var(--cloudea-blue-5);
    color: var(--cloudea-trans-white-5);
  }
}

.custom-button--success {
  background-color: var(--cloudea-green-1);
  border: 1px solid var(--cloudea-green-3);
  color: var(--cloudea-green-3);

  &:hover {
    background-color: var(--cloudea-green-3);
    color: var(--cloudea-green-1);
  }
}

.custom-button--danger {
  background-color: var(--cloudea-red-0);
  border: 1px solid var(--cloudea-red-4);
  color: var(--cloudea-red-4);

  &:hover {
    background-color: var(--cloudea-red-4);
    color: var(--cloudea-red-0);
  }
}

.custom-button--disabled {
  background-color: var(--cloudea-font-color-0);
  border: 1px solid var(--cloudea-font-color-2);
  color: var(--cloudea-font-color-2);

  &:hover {
    background-color: var(--cloudea-font-color-2);
    color: var(--cloudea-font-color-0);
  }
}
</style>
