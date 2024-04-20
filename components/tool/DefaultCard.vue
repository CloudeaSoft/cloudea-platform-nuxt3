<script setup lang="ts"></script>

<template>
  <ToolCard>
    <template #header></template>
    <div class="empty-body">
      <em>{{ $t('tool.empty.description') }}</em>
    </div>
  </ToolCard>
</template>

<style lang="scss" scoped>
.empty-body {
  height: 300px;
  border-radius: 10px;
  border: 1px dashed var(--cloudea-blue-2);
  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;
  font-size: 1.2rem;
}
</style>
