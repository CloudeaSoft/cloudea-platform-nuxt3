<script setup lang="ts">
import { ChannelId, channelList } from '~/types/arknights.d'

const channelId = defineModel<ChannelId>()

const handleChange = (id: ChannelId) => {
  channelId.value = id
}
</script>

<template>
  <div class="selector-container">
    <div class="selector-content">
      <div
        :class="{
          'selector-item': true,
          active: channelId == channel.channelId
        }"
        @click="handleChange(channel.channelId)"
        v-for="channel in channelList"
      >
        <span>{{ channel.name }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.selector-container {
  height: 40px;
  border-radius: 5px;
  overflow: hidden;

  .selector-content {
    height: 100%;
    display: flex;

    .selector-item {
      width: 100px;
      text-align: center;
      justify-content: center;
      line-height: 40px;
      align-items: center;
      background-color: var(--cloudea-white);
      cursor: pointer;
      font-size: 1.125rem;
      transition: background 0.3s;

      &:hover {
        background-color: var(--cloudea-blue-0);
      }

      &.active {
        background-color: var(--cloudea-blue-5);
        color: var(--cloudea-white);
      }
    }
  }
}
</style>
