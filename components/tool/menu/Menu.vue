<script setup lang="ts">
const list = ref([
  { name: 'Ark', route: '/tool/arknights-gacha' },
  { name: 'Osu', route: '/tool/osu-skin-ini-reader' }
])
</script>

<template>
  <h2 class="menu-title">Tool Menu</h2>
  <div class="menu-item-list">
    <ToolMenuItem
      v-for="item in list"
      :name="item.name"
      :route="item.route"
    ></ToolMenuItem>
  </div>
</template>

<style lang="scss" scoped>
.menu-title {
  text-align: center;
}

.menu-item-list {
  display: flex;
  flex-direction: column;
}
</style>
