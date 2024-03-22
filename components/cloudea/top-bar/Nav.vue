<script setup lang="ts">
import { topBarItemList } from './topBarItem'

const navItemNum = topBarItemList.length
const navItemLength = `${navItemNum * 100}px`
</script>
<template>
  <nav class="main-nav">
    <ul class="nav-list">
      <li class="main-nav-list">
        <ul class="phone-hide">
          <li v-for="linkItem in topBarItemList" :key="linkItem.index">
            <NuxtLink :to="{ path: linkItem.router }">
              {{ $t(`header.${linkItem.name}`) }}
            </NuxtLink>
          </li>
          <div class="box"></div>
        </ul>
      </li>
      <CloudeaTopBarNavRight></CloudeaTopBarNavRight>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
$navNumber: v-bind(navItemNum);
.main-nav {
  height: 100%;
  flex: 1 0 auto;
  line-height: 5rem;
}

.nav-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 5rem;
  margin: 0;
}

.main-nav-list {
  position: relative;
  text-align: center;
  width: v-bind(navItemLength);
  align-items: center;
  display: flex;

  .phone-hide {
    display: flex;
    width: 100%;

    .box {
      border-radius: 2px;
      bottom: 0;
      height: 7px;
      left: 0;
      position: absolute;
      transition: 0.5s;
      width: calc(100% / $navNumber);

      &:hover {
        z-index: -1;
      }
    }

    a {
      display: block;
      color: var(--cloudea-blue-5);
      width: 100%;
      height: 100%;
    }

    li {
      cursor: pointer;
      display: block;
      font-weight: 700;
      line-height: 5rem;
      width: 100%;

      &:nth-child(1):hover ~ .box {
        background-color: var(--cloudea-red-3);
        left: calc(100% / $navNumber * 0);
      }

      &:nth-child(2):hover ~ .box {
        background-color: var(--cloudea-blue-3);
        left: calc(100% / $navNumber * 1);
      }

      &:nth-child(3):hover ~ .box {
        background-color: var(--cloudea-yellow-2);
        left: calc(100% / $navNumber * 2);
      }

      &:nth-child(4):hover ~ .box {
        filter: hue-rotate(240deg);
        background-color: var(--cloudea-blue-3);
        left: calc(100% / $navNumber * 3);
      }

      &:nth-child(5):hover ~ .box {
        filter: hue-rotate(60deg);
        background-color: var(--cloudea-blue-3);
        left: calc(100% / $navNumber * 4);
      }
    }
  }
}
</style>
