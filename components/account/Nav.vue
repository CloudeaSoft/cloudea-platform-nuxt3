<script setup lang="ts">
const navItemList = ref([
  {
    name: 'home',
    route: '/account/home',
    icon: 'home'
  },
  {
    name: 'setting',
    route: '/account/setting',
    icon: 'user'
  },
  {
    name: 'avatar',
    route: '/account/avatar',
    icon: 'circle-user'
  },
  {
    name: 'security',
    route: '/account/security',
    icon: 'brick-wall'
  },
  {
    name: 'notice',
    route: '/account/notice',
    icon: 'mail'
  }
])
</script>

<template>
  <div class="account-nav">
    <span class="nav-title">{{ $t('account.title') }}</span>
    <ul class="nav-ul">
      <NuxtLinkLocale
        v-for="(item, index) in navItemList"
        :key="index"
        :to="item.route"
      >
        <li class="nav-item">
          <i class="nav-item-icon">
            <Icon :name="'lucide:' + item.icon" />
          </i>
          <span class="nav-item-name">
            {{ $t(`account.nav.${item.name}`) }}
          </span>
        </li>
      </NuxtLinkLocale>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.account-nav {
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--cloudea-gray-4);
  user-select: none;

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

      .nav-item-icon {
        margin-left: 16px;
        font-size: 1.2rem;
        color: var(--cloudea-font-color-0);
      }

      .nav-item-name {
        margin-left: 12px;
        font-size: 1.2rem;
      }

      &:hover {
        background-color: var(--cloudea-white);
        * {
          color: var(--cloudea-blue-5);
        }
      }
    }

    .router-link-active {
      .nav-item {
        background-color: var(--cloudea-blue-5);
        * {
          color: var(--cloudea-white);
        }
      }
    }
  }
}
</style>
