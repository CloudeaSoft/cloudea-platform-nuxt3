<template>
  <h2 class="menu-title">Tool Menu</h2>
  <div class="menu-item-list">
    <ToolMenuItem v-for="i in 2"></ToolMenuItem>
  </div>
</template>

<style lang="scss" scoped>
.menu-title{
    text-align: center;
}

.menu-item-list {
    display: flex;
    flex-direction: column;
}
</style>