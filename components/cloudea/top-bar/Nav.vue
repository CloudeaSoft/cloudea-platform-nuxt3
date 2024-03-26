<script setup lang="ts">
import { topBarItemList } from './topBarItem'

const navItemNum = topBarItemList.length
const navItemLength = `${navItemNum * 100}px`

const showPhoneHide = ref(false)
</script>
<template>
  <nav class="main-nav">
    <ul class="nav-list">
      <li class="main-nav-entry">
        <span @click="showPhoneHide = !showPhoneHide"
          ><Icon name="lucide:menu"
        /></span>
      </li>
      <li class="main-nav-list">
        <ul :class="showPhoneHide ? 'phone-hide active' : 'phone-hide'">
          <li v-for="linkItem in topBarItemList" :key="linkItem.index">
            <NuxtLinkLocale :to="{ path: linkItem.router }">
              <span class="item-wrap">{{ $t(`header.${linkItem.name}`) }}</span>
            </NuxtLinkLocale>
            <div class="underline"></div>
          </li>
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

.main-nav-entry {
  display: none;
  margin: 20px;
  font-size: 25px;
  align-items: center;
  text-align: center;
  line-height: 100%;
  cursor: pointer;
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

    li {
      cursor: pointer;
      display: block;
      font-size: 1.33rem;
      line-height: 5rem;
      width: 100%;

      a {
        display: block;
        color: var(--cloudea-blue-5);
        width: 100%;
        height: 100%;
      }

      &:hover a {
        animation: word-bounce 0.4s;
      }

      @keyframes word-bounce {
        0% {
          transform: translate(0);
        }
        50% {
          transform: translate(0, -10px);
        }
        100% {
          transform: translate(0);
        }
      }

      .underline {
        position: absolute;
        bottom: 0;
        height: 3px;
        width: 100px;
        border-radius: 2px;
        opacity: 0;
        transition: all 0.5s;

        background: linear-gradient(
          90deg,
          hsl(0, 100%, 50%),
          hsl(30, 100%, 50%),
          hsl(60, 100%, 50%),
          hsl(90, 100%, 50%),
          hsl(120, 100%, 50%),
          hsl(150, 100%, 50%),
          hsl(180, 100%, 50%),
          hsl(210, 100%, 50%),
          hsl(240, 100%, 50%),
          hsl(270, 100%, 50%),
          hsl(300, 100%, 50%),
          hsl(330, 100%, 50%),
          hsl(360, 100%, 50%)
        );
        background-size: 600% 600%;
        animation: color-cycle 3s alternate linear infinite;
      }

      &:hover .underline {
        opacity: 1;
      }

      @keyframes color-cycle {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 50% 50%;
        }
        100% {
          background-position: 100% 50%;
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .main-nav-entry {
    display: flex;
  }

  .main-nav-list {
    position: fixed;
    top: 5rem;
    left: 0;
    width: 100px;

    z-index: 999;

    .phone-hide {
      transform: translateX(-100px);
      transition: all 0.6s ease-in-out;
      flex-direction: column;
      height: calc(100dvh - 5rem);
      background-color: var(--cloudea-trans-white-2);

      &.active {
        transform: translateX(0);
      }
    }
  }
}
</style>
