<script setup lang="ts">
import { getProfileApi } from '~/api/user'
import type { UserProfile } from '~/types/api/user-model'

const { userId } = defineProps<{ userId: string }>()
var response = await getProfileApi(userId)
const profile = ref<UserProfile>(response.value?.Data!)
</script>

<template>
  <div class="user-container cloudea-area">
    <div class="user-content">
      <div class="user-header">
        <ul>
          <div class="title">{{ userId }}</div>
          <li>{{ profile.DisplayName }}</li>
          <li>{{ profile.UserName }}</li>
          <li>{{ profile.Leaves }}</li>
          <li>{{ profile.Signature }}</li>
          <li>{{ profile.AvatarUrl }}</li>
        </ul>
      </div>
      <div class="user-body">
        <div class="user-nav"></div>
        <div class="user-slot">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-container {
  margin: auto;
  display: flex;
  height: 80%;
  min-height: 700px;
  overflow: hidden;

  .user-content {
    height: 100%;
    width: 800px;
  }
}
</style>
