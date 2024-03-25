<script setup lang="ts">
import { SETTINGS_DEFAULT_FONT_FAMILY } from '~/store/types/settings.d'

const font = ref('')
const { systemFontFamily } = storeToRefs(useSettingStore())

const setFont = () => {
  if (font.value) {
    useSettingStore().setFontFamily(font.value)
    font.value = ''
  } else {
    useSettingStore().setFontFamily(SETTINGS_DEFAULT_FONT_FAMILY)
  }
}
</script>

<template>
  <div class="font">
    <div class="title">
      <span>{{ $t('settings.font') }}</span>
      <span v-if="systemFontFamily === SETTINGS_DEFAULT_FONT_FAMILY">
        {{ $t('settings.default') }}
      </span>
      <span v-else-if="systemFontFamily !== SETTINGS_DEFAULT_FONT_FAMILY">
        {{ systemFontFamily }}
      </span>
    </div>

    <div class="font-input">
      <input
        :placeholder="`${$t('settings.fontInput')}`"
        type="text"
        v-model="font"
        required
      />
      <button @click="setFont">
        {{ $t('settings.confirm') }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.font-input {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--cloudea-font-color-3);
  padding-bottom: 10px;

  input {
    width: 100%;
    padding-left: 7px;
    height: 30px;
    border: 1px solid var(--cloudea-blue-5);
    background-color: var(--cloudea-trans-white-9);
    color: var(--cloudea-font-color-3);

    &:focus {
      outline: none;
      background-color: var(--cloudea-trans-blue-0);
    }
  }

  button {
    flex-shrink: 0;
    padding: 0 10px;
    height: 30px;
    width: 70px;
    color: var(--cloudea-font-color-3);
    border: 1px solid var(--cloudea-blue-5);
    border-left: none;
    background-color: var(--cloudea-trans-white-9);
    cursor: pointer;

    &:hover {
      background-color: var(--cloudea-blue-5);
      color: var(--cloudea-white);
    }
  }
}
</style>
