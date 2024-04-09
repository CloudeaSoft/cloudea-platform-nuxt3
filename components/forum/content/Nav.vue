<script setup lang="ts">
import { getSectionApi } from '~/api'
import { GUID_EMPTY } from '~/types/api/base-model.d'

const sectionList = await getSectionApi()

const sectionIdModel = defineModel<string>()

sectionIdModel.value = GUID_EMPTY

const handleSelect = (sectionId: string) => {
  sectionIdModel.value = sectionId
}
</script>

<template>
  <div class="side-navigator-wrap">
    <div
      :class="['nav-item-wrap', sectionIdModel === GUID_EMPTY ? 'active' : '']"
    >
      <div :class="['nav-item-content']" @click="handleSelect(GUID_EMPTY)">
        <NuxtLinkLocale to="/forum" class="nav-item">
          {{ $t('forum.index.commonSection') }}
        </NuxtLinkLocale>
      </div>
    </div>
    <div
      :class="[
        'nav-item-wrap',
        sectionIdModel === sectionItem.Id ? 'active' : ''
      ]"
      v-for="sectionItem in sectionList?.Data.Rows"
    >
      <div :class="['nav-item-content']" @click="handleSelect(sectionItem.Id)">
        <NuxtLinkLocale to="/forum" class="nav-item">
          {{ sectionItem.Name }}
        </NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.side-navigator-wrap {
  min-width: 180px;
  padding: 8px;
}

.nav-item-wrap {
  display: flex;
  flex-direction: column;

  .nav-item-content {
    line-height: 24px;
    border-right: 4px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .nav-item {
      display: inline-block;
      width: 100%;
      box-sizing: border-box;
      position: relative;
      padding: 10px 17px;
      cursor: pointer;
    }
  }

  &.active * {
    color: var(--cloudea-blue-5);
    font-weight: 700;
  }
}
</style>
