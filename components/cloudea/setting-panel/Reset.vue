<script setup lang="ts">
const handleSetDefault = async () => {
  await useSettingStore().setSettingsDefault()
}
</script>

<template>
  <button class="reset" @click="handleSetDefault">
    {{ $t('settings.reset') }}
  </button>
</template>

<style lang="scss" scoped>
.reset {
  font-size: 15px;
  cursor: pointer;
  margin-top: 20px;
  color: var(--cloudea-red-5);
  border: 1px solid var(--cloudea-red-5);
  background-color: var(--cloudea-trans-white-9);
  width: 100%;
  height: 30px;

  &:hover {
    background-color: var(--cloudea-red-5);
    color: var(--cloudea-white);
  }
}
</style>
