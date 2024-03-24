<script setup lang="ts">
import type { CSSProperties } from 'vue'

const container = ref<HTMLElement>()
const isShowOptions = ref(false)

const props = defineProps<{
  options: string[]
  styles?: CSSProperties
  i18n: string
  position?: 'top' | 'bottom'
}>()
const position = computed(() => (props.position ? props.position : 'bottom'))

const emit = defineEmits<{
  set: [value: string, index: number]
}>()

const handleClickShowLanguage = () => {
  isShowOptions.value = true
  container.value?.focus()
}
</script>
<template>
  <div class="cloudea-select" :style="props.styles">
    <div
      ref="container"
      tabindex="-1"
      @blur="isShowOptions = false"
      class="cloudea-chooser"
      @click="handleClickShowLanguage"
    >
      <slot />
      <Icon class="icon" name="lucide:chevron-down" />
    </div>

    <Transition :name="position">
      <div v-if="isShowOptions" class="options" :class="position">
        <span
          v-for="(option, index) in props.options"
          :key="index"
          @click.stop.prevent="emit('set', option, index)"
          v-once
        >
          {{ $t(`${props.i18n}.${option}`) }}
        </span>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.cloudea-select {
  position: relative;
  cursor: pointer;
}

.cloudea-chooser {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .icon {
    font-size: 18px;
    color: var(--cloudea-blue-5);
  }
}

.options {
  width: 100%;
  position: absolute;
  padding: 7px;
  border: 1px solid var(--cloudea-trans-blue-1);
  background-color: var(--cloudea-trans-white-5);
  backdrop-filter: blur(10px);
  border-radius: 5px;
  box-shadow: var(--shadow);

  span {
    font-size: 15px;
    display: flex;
    padding: 5px;
    border-radius: 5px;

    &:hover {
      background-color: var(--cloudea-blue-0);
    }
  }
}

.top {
  bottom: 27px;
}

.bottom {
  top: 27px;
}

.top-enter-active,
.top-leave-active {
  transition: all 0.2s ease-in-out;
}

.top-enter-from,
.top-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

.bottom-enter-active,
.bottom-leave-active {
  transition: all 0.2s ease-in-out;
}

.bottom-enter-from,
.bottom-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
