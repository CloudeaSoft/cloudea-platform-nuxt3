<script setup lang="ts">
const route = useRoute()

const tid = computed(() => {
  return parseInt((route.params as { tid: string }).tid)
})
</script>

<template>
  <div>
    {{ tid }}
  </div>
</template>
