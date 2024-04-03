<script setup lang="ts">
const navItemList = ref([
  {
    name: '首页',
    route: '/account/home',
    icon: 'House'
  },
  {
    name: '我的信息',
    route: '/account/setting',
    icon: 'account'
  },
  {
    name: '我的头像',
    route: '/account/avatar',
    icon: 'Avatar'
  },
  {
    name: '账号安全',
    route: '/account/security',
    icon: 'Key'
  },
  {
    name: '消息通知',
    route: '/account/notice',
    icon: 'Key'
  },
  {
    name: '消息通知',
    route: '/account/notice',
    icon: 'Key'
  },
  {
    name: '消息通知',
    route: '/account/notice',
    icon: 'Key'
  },
  {
    name: '消息通知',
    route: '/account/notice',
    icon: 'Key'
  },
  {
    name: '消息通知',
    route: '/account/notice',
    icon: 'Key'
  },
  {
    name: '消息通知',
    route: '/account/notice',
    icon: 'Key'
  }
])
</script>

<template>
  <div class="account-nav">
    <span class="nav-title">个人中心</span>
    <ul class="nav-ul">
      <NuxtLinkLocale
        v-for="(item, index) in navItemList"
        :key="index"
        :to="item.route"
      >
        <li class="nav-item">
          <i class="nav-item-icon"><Icon name="lucide:baby"> </Icon></i>
          <span class="nav-item-name">{{ item.name }}</span>
        </li>
      </NuxtLinkLocale>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.account-nav {
  display: flex;
  flex-direction: column;

  .nav-title,
  .nav-ul {
    border-bottom: 1px solid var(--cloudea-gray-4);
  }

  .nav-title {
    display: block;
    width: 150px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    color: var(--cloudea-font-color-2);
    cursor: default;
  }

  .nav-ul {
    & li {
      overflow: hidden;
    }

    .nav-item {
      width: 150px;
      height: 48px;
      line-height: 48px;

      &:hover {
        background-color: #fff;
      }

      .nav-item-icon {
        margin-left: 16px;
      }

      .nav-item-name {
        margin-left: 12px;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
