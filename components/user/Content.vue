<script setup lang="ts">
import { getProfileApi } from '~/api/user'
import type { UserProfile } from '~/types/api/user-model'

const { userId } = defineProps<{ userId: string }>()
var response = await getProfileApi(userId)
const profile = ref<UserProfile>(response.value?.Data!)
</script>

<template>
  <div class="user-container">
    <div class="user-content">
      <div class="user-header cloudea-area">
        <div class="avatar-area">
          <NuxtImg class="avatar" :src="profile.AvatarUrl"></NuxtImg>
        </div>
        <div class="info-area">
          <div class="name-area">
            <span class="display-name">{{ profile.DisplayName }}</span>
            <span class="user-name">@{{ profile.UserName }}</span>
          </div>
          <div class="leaves">
            <Icon name="lucide:clover" />
            <span class="count">{{ profile.Leaves }}</span>
          </div>
          <div class="signature">{{ profile.Signature }}</div>
        </div>
      </div>
      <div class="user-body">
        <div class="user-board cloudea-area">留言板</div>
        <div class="user-main cloudea-area">
          <UserNav></UserNav>
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
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 800px;

    .user-header {
      display: flex;
      height: 300px;

      .avatar-area {
        width: 250px;
        display: flex;

        .avatar {
          margin: auto;
          width: 150px;
          height: 150px;
          border-radius: 75px;
        }
      }

      .info-area {
        flex: 1;
        display: flex;
        padding-top: 80px;
        flex-direction: column;

        .name-area {
          display: flex;
          align-items: flex-end;

          .display-name {
            font-weight: 700;
            font-size: 2rem;
          }

          .user-name {
            margin-left: 10px;
            padding-bottom: 2px;
            font-size: 1.5rem;
            color: var(--cloudea-font-color-0);
          }
        }

        .leaves {
          margin-top: 30px;
          font-size: 1.5rem;

          & svg {
            color: var(--cloudea-green-3);
          }

          .count {
            margin-left: 8px;
            color: var(--cloudea-red-2);
          }
        }

        .signature {
          margin-top: 30px;
          font-size: 1.5rem;
          font-style: italic;
        }
      }
    }

    .user-body {
      margin-top: 30px;
      display: flex;

      .user-board {
        width: 250px;
        height: 600px;
        padding: 20px;
      }

      .user-main {
        margin-left: 30px;
        flex: 1;
        padding: 20px;
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
