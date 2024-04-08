<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps(paginationPrevProps)
defineEmits(paginationPrevEmits)

const internalDisabled = computed(
  () => props.disabled || props.currentPage <= 1
)
</script>

<script lang="ts">
const paginationPrevProps = {
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: String
  }
}

const paginationPrevEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent
}
</script>

<template>
  <button
    type="button"
    class="btn-prev"
    :disabled="internalDisabled"
    :aria-label="prevText || $t('cloudea.pagination.prev')"
    :aria-disabled="internalDisabled"
    @click="$emit('click', $event)"
  >
    <span v-if="prevText">{{ prevText }}</span>
    <Icon v-else :name="`lucide:${prevIcon}`" />
  </button>
</template>
