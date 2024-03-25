<script setup lang="ts">
const handleChangeImage = async (index: number) => {
  await useSettingStore().setSystemBackground(index)
}
</script>

<template>
  <div class="cloudea-background">
    <div class="bg-settings">
      {{ $t('settings.background') }}
    </div>
    <ul class="cloudea-background-container">
      <li>
        <span>{{ $t('settings.backgroundSystem') }}</span>
        <ul class="cloudea-restore-bg">
          <li v-for="item in 7" :key="item">
            <button @click="handleChangeImage(item)">
              {{ `背景${item}` }}
            </button>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.cloudea-background-container {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  display: block;
  height: 100%;
  font-size: 15px;
  font-weight: normal;
  color: var(--cloudea-font-color-3);

  span {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    background-color: #fff;
    border-top: 1px solid black;
  }
}
</style>
