<script setup lang="ts">
import type { UserProfile } from '~/types/api/user-model'

const { userId, profile, top, left } = withDefaults(
  defineProps<{
    userId: string
    profile: UserProfile
    top?: number
    left?: number
  }>(),
  {
    left: 0,
    top: 0
  }
)
</script>

<template>
  <div class="user-area" :style="`left:${left}px;top:${top + 10}px;`">
    <div class="user-area-content">
      <div class="info-row">
        <NuxtImg class="avatar" :src="profile.AvatarUrl"></NuxtImg>
        <div class="user-info">
          <div class="username">{{ profile.DisplayName }}</div>
          <div class="signature">{{ profile.Signature }}</div>
        </div>
      </div>
      <div class="operate-btn">
        <button class="follow-btn" @click.stop="">
          {{ $t('forum.index.userArea.follow') }}
        </button>
        <button class="im-btn" @click.stop="">
          {{ $t('forum.index.userArea.message') }}
        </button>
      </div>
      <div class="meta-row">
        <ul class="meta-list">
          <li class="item">
            <div class="count">0</div>
            <div class="title">{{ $t('forum.index.userArea.following') }}</div>
          </li>
          <div class="divider"></div>
          <li class="item">
            <div class="count">0</div>
            <div class="title">{{ $t('forum.index.userArea.fans') }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-area {
  position: fixed;
  padding-top: 12px;
  z-index: 5;
  cursor: initial;

  .user-area-content {
    width: 100%;
    height: calc(100% + 7px);
    background-color: var(--cloudea-white);
    border-radius: 5px;
    box-shadow: 0 3px 6px 0 var(--cloudea-shadow-color);
    padding: 20px;

    .info-row,
    .operate-btn,
    .meta-row,
    .meta-row .meta-list {
      display: flex;
    }

    .info-row {
      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 25px;
      }

      .user-info {
        margin-left: 20px;

        .username {
          color: var(--cloudea-font-color-3);
        }

        .signature {
          color: var(--cloudea-font-color-1);
        }
      }
    }

    .operate-btn {
      align-items: center;
      margin-top: 16px;

      button {
        cursor: pointer;
        width: 122px;
        height: 40px;
        border: none;
        border-radius: 5px;
        transition: background 0.3s;
      }

      .follow-btn {
        background: var(--cloudea-blue-5);
        color: var(--cloudea-white);

        &:hover {
          background: var(--cloudea-blue-3);
        }
      }

      .im-btn {
        margin-left: 16px;
        border: 1px solid var(--cloudea-blue-2);
        color: var(--cloudea-blue-5);
        background-color: var(--cloudea-white);

        &:hover {
          border-color: var(--cloudea-blue-3);
          background: var(--cloudea-blue-0);
        }
      }
    }

    .meta-row {
      display: flex;
      align-items: center;
      margin-top: 2rem;

      .meta-list {
        position: relative;
        flex: 1 1 auto;
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        align-items: center;

        .item {
          flex: 1 1 auto;
          cursor: pointer;
          display: flex;
          align-items: center;
          flex-direction: column;
          color: var(--cloudea-font-color-3);

          .count {
            font-size: 1.333rem;
            font-weight: 500;
            color: var(--cloudea-font-color-3);
            line-height: 2.333rem;
          }

          .title {
            font-size: 1.167rem;
            line-height: 2rem;
            color: var(--cloudea-font-color-0);
          }
        }
        .divider {
          width: 260px;
          height: 0.5px;
          top: -9px;
          position: absolute;
          background: var(--cloudea-grey-0);
        }
      }
    }

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
  }
}
</style>
