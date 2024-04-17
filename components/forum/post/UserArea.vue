<script setup lang="ts">
import type { UserProfile } from '~/types/api/user-model'

defineProps<{
  profile: UserProfile
}>()

const showUserPanel = ref(false)

const panelLeft = ref<number>()
const panelTop = ref<number>()

const userRef = ref<HTMLElement>()

const handleShowUserPanel = (e: MouseEvent) => {
  panelLeft.value = e.pageX - 130
  panelTop.value = e.pageY - 10
  showUserPanel.value = true
}
</script>

<template>
  <div class="user-area-container">
    <NuxtImg class="avatar" :src="profile.AvatarUrl" />
    <div
      ref="userRef"
      class="username"
      @mouseenter="handleShowUserPanel"
      @mouseleave="showUserPanel = false"
    >
      {{ profile.DisplayName }}
      <Transition name="fade">
        <CloudeaUserPanel
          @mouseenter.stop.prevent=""
          :user-id="profile.Id"
          :profile="profile"
          :top="panelTop"
          :left="panelLeft"
          v-if="showUserPanel"
        />
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-area-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-right: 20px;

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }

  .username {
    margin-top: 10px;
    position: relative;
  }
}
</style>
