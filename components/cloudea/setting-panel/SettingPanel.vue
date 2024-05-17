<script setup lang="ts">
const isShowTransparency = ref(true)

const { showSettingPanel, showAnnounce } = storeToRefs(useTempSettingStore())

const props = defineProps<{
  show: boolean
}>()
</script>

<template>
  <div :class="props.show ? 'setting-panel active' : 'setting-panel'">
    <div class="container">
      <div class="title">
        <span class="title-text">{{ $t('settings.name') }}</span>
        <div class="title-text" style="flex: 1"></div>
        <span><Icon class="settings-icon" name="uiw:setting-o" /></span>
        <div class="close">
          <Icon @click="showSettingPanel = false" name="lucide:x" />
        </div>
      </div>

      <CloudeaSettingPanelMode />

      <CloudeaSettingPanelLanguage />

      <div class="switch">
        <div class="menu">
          <span
            :class="isShowTransparency ? 'active' : ''"
            @click="isShowTransparency = true"
          >
            {{ $t('settings.trans') }}
          </span>
          <span
            :class="isShowTransparency ? '' : 'active'"
            @click="isShowTransparency = false"
          >
            {{ $t('settings.font') }}
          </span>
        </div>

        <TransitionGroup name="item" tag="div">
          <div class="item" v-if="isShowTransparency">
            <CloudeaSettingPanelTransparency />
          </div>

          <div class="item" v-else-if="!isShowTransparency">
            <CloudeaSettingPanelFont />
          </div>
        </TransitionGroup>
      </div>

      <CloudeaSettingPanelBackground />

      <div>
        <span>Show Announce</span>
        <input type="checkbox" v-model="showAnnounce" />
      </div>

      <CloudeaSettingPanelReset />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.setting-panel {
  z-index: 9999;

  top: 75px;
  right: -500px;
  position: fixed;
  background-color: var(--cloudea-trans-white-5);
  backdrop-filter: blur(5px);
  box-shadow: var(--shadow);
  border-radius: 10px;
  display: flex;
  color: var(--cloudea-font-color-3);
  border: 1px solid var(--cloudea-blue-2);

  overflow: hidden;
  transition: right 0.5s;
  padding: 0 20px;
}

.setting-panel.active {
  right: 20px;
}

.container {
  position: relative;
  margin-top: 20px;
  font-size: 17px;
}

.title {
  font-size: 23px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: flex;
    align-items: center;
  }

  .settings-icon {
    margin-left: 20px;
    animation: settings 3s linear infinite;
  }

  .close {
    font-size: 25px;
    width: 270px;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
  }
}

@keyframes settings {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.switch {
  display: flex;
  flex-direction: column;

  .menu {
    display: flex;
    justify-content: space-between;
    margin-bottom: 17px;
    border: 1px solid var(--cloudea-blue-5);

    span {
      cursor: pointer;
      width: 100%;
      padding: 2px;
      display: flex;
      font-size: 15px;
      justify-content: center;
      color: var(--cloudea-blue-5);
      transition: all 0.2s;

      &:nth-child(1) {
        border-right: 1px solid var(--cloudea-blue-5);
      }
    }

    .active {
      background-color: var(--cloudea-blue-5);
      color: var(--cloudea-white);
    }
  }

  .item {
    width: 100%;
    height: 73px;
  }
}

.item-move,
.item-enter-active,
.item-leave-active {
  transition: all 0.5s ease;
}

.item-enter-from,
.item-leave-to {
  opacity: 0;
  transform: translateY(77px);
}

.item-leave-active {
  position: absolute;
}

@media (max-width: 600px) {
  .setting-panel {
    &.active {
      right: calc((100vw - max(90vw, 350px)) / 2);
      width: 90vw;
      min-width: 350px;
    }

    .settings-icon {
      margin-left: 0;
    }

    .title .title-text {
      display: none;
    }
  }
}
@media (max-height: 600px) {
  .setting-panel {
    height: 400px;
    overflow: scroll;
  }
}
</style>
