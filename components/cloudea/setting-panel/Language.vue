<script setup lang="ts">
const { availableLocales, locale, setLocale } = useI18n()
</script>

<template>
  <div class="setting-language">
    <span>{{ $t('settings.language') }}</span>
    <CloudeaSelect
      class="cloudea-select"
      :options="availableLocales"
      i18n="settings.languageOptions"
      @set="setLocale"
    >
      <span>{{ $t(`settings.languageOptions.${locale}`) }}</span>
    </CloudeaSelect>
  </div>
</template>

<style lang="scss" scoped>
.setting-language {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.cloudea-select {
  span {
    padding-right: 10px;
  }
}
</style>
