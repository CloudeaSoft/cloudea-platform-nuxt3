<script setup lang="ts">
const navItemList = [
  {
    name: '帖子',
    value: 1
  },
  {
    name: '用户',
    value: 2
  }
]

const searchType = defineModel<number>()
searchType.value = navItemList[0].value

const navItemClass = (type: number) => [
  'search-nav-list-item',
  type === searchType.value ? 'active' : ''
]
</script>

<template>
  <div class="search-nav">
    <ul class="search-nav-list">
      <li
        :class="navItemClass(item.value)"
        v-for="item in navItemList"
        :key="item.value"
        @click="searchType = item.value"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.search-nav {
  width: 100%;
  height: 30px;
  padding-left: 20px;

  .search-nav-list {
    display: flex;
    align-items: center;
    justify-content: left;
    height: 100%;

    .search-nav-list-item {
      margin-right: 20px;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      font-size: 1.2rem;

      &.active {
        border-color: var(--cloudea-blue-5);
        color: var(--cloudea-blue-5);
      }
    }
  }
}
</style>
