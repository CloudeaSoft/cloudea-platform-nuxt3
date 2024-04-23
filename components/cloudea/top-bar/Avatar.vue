<script setup lang="ts">
const showUserPanel = ref<boolean>(false)

const avatarStyle = () =>
  useUserStore().profile?.AvatarUrl
    ? `background-image: url(${useUserStore().profile?.AvatarUrl})`
    : 'background: var(--cloudea-black)'

const handleEnter = () => {
  showUserPanel.value = true
}

const handleBlur = () => {
  showUserPanel.value = false
}

const handleLogout = () => {
  useUserStore().$reset()
  useUserStore().removeToken()
  navigateTo(useNuxtApp().$localePath('/'))
}
</script>

<template>
  <div
    class="avatar"
    :style="avatarStyle()"
    @mouseenter="handleEnter"
    @mouseleave="handleBlur"
  >
    <Transition name="fade">
      <div class="user-panel-container" v-show="showUserPanel" @click.prevent>
        <div class="user-panel-content">
          <div class="user-panel-list">
            <div class="list-item">
              <NuxtLinkLocale to="/account/home">
                {{ $t('header.avatar.center') }}
              </NuxtLinkLocale>
            </div>
            <div class="list-item">---</div>
            <div class="list-item">---</div>
            <div class="list-item" @click="handleLogout">
              {{ $t('header.avatar.logout') }}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.avatar {
  position: relative;
  width: 40px;
  height: 40px;
  background-size: cover;
  border-radius: 20px;

  .user-panel-container {
    position: absolute;
    padding-top: 12px;
    left: calc(50% - 60px);
    top: 100%;
    width: 120px;
    height: 180px;
    cursor: initial;

    transition: all 0.3s;

    .user-panel-content {
      width: 100%;
      height: calc(100% + 7px);
      background-color: var(--cloudea-white);
      border-radius: 2px;
      box-shadow: 0 3px 6px 0 var(--cloudea-shadow-color);

      &::before {
        width: 10px;
        height: 8px;
        top: 9px;
        left: calc(50% - 5px) !important;

        content: '';
        display: block;
        position: absolute;
        transform: rotate(45deg);
        background-color: var(--cloudea-white);
        box-shadow: -1px -1px 1px var(--cloudea-shadow-color);
        clip-path: polygon(0 0, 100% 0, 100% 30%, 0 100%);
        z-index: 1;
      }

      .user-panel-list {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 5px 0;

        .list-item {
          margin: 0 10px;
          cursor: pointer;
          height: 25%;
          width: calc(100% - 20px);
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          user-select: none;
          border-radius: 5px;
          font-weight: 700;
          &:hover {
            background: var(--cloudea-blue-5);
            color: var(--cloudea-white);
          }
        }
      }
    }
  }
}
</style>
