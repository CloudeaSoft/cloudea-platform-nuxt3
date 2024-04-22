<script setup lang="ts">
const { isAuthorized } = useUserStore()

const { showSettingPanel, showSearchPanel } = storeToRefs(useTempSettingStore())
</script>

<template>
  <div class="right-side-nav">
    <span class="search" @click="showSearchPanel = true">
      <Icon name="lucide:search" />
    </span>
    <span class="settings">
      <Icon
        name="uiw:setting-o"
        @click="showSettingPanel = !showSettingPanel"
      />
    </span>
    <span class="user" v-if="isAuthorized()">
      <NuxtLinkLocale to="/account/home">
        <CloudeaTopBarAvatar />
      </NuxtLinkLocale>
    </span>
    <div class="login" v-else>
      <NuxtLinkLocale to="/login">
        {{ $t('header.login') }}
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.right-side-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  margin: 0;
  order: 0;

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--cloudea-font-color-2);
    font-size: 25px;
    cursor: pointer;
    margin-right: 20px;
  }

  .user {
    color: var(--cloudea-font-color-2) !important;
  }

  .login {
    font-size: 1.33rem;
  }
}
</style>
