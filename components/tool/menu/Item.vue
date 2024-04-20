<script setup lang="ts">
interface ToolMenuItemProps {
  name: string
  route: string
}
const { name, route } = defineProps<ToolMenuItemProps>()
</script>

<template>
  <div class="menu-item">
    <NuxtLinkLocale :to="route">
      <div class="item-label">{{ name }}</div>
    </NuxtLinkLocale>
  </div>
</template>

<style lang="scss" scoped>
.menu-item {
  margin-top: 10px;
  height: 40px;
  line-height: 40px;
  transition:
    background-color 0.3s,
    color 0.3s;

  border-radius: 5px;
  overflow: hidden;
  background: var(--cloudea-trans-blue-0);

  :hover {
    color: var(--cloudea-blue-5);
    background: var(--cloudea-white);
  }

  .item-label {
    padding-left: 20px;
  }
}
</style>
