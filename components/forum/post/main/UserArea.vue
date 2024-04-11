<script setup lang="ts">
defineProps<{
  userId: string
  userName: string
}>()
</script>

<template>
  <div>用户编号：{{ userId }}</div>
  <div>用户名：{{ userName ? userName : 'NaN' }}</div>
</template>
