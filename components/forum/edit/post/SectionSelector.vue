<script setup lang="ts">
import { getSectionApi } from '~/api'

const sectionList = await getSectionApi()

const model = ref<string>('')

const handleSelect = (id: string) => {
  model.value = id
}

watch(model, (newValue) => {
  const { postSection } = storeToRefs(useForumStore())
  postSection.value = model.value
})

onMounted(() => {
  const pS = useForumStore().postSection
  if (!!pS.trim()) {
    model.value = pS
  } else {
    model.value = sectionList.Data.Rows[0]?.Id!
  }
})
</script>
<template>
  <div class="label-selector">
    <ul class="section-list">
      <li
        :class="['section-item', model === item.Id ? 'active' : '']"
        v-for="item in sectionList?.Data.Rows"
        :key="item.Id"
        @click="handleSelect(item.Id)"
      >
        {{ item.Name }}
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.label-selector {
  height: 100%;

  .section-list {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .section-item {
      margin: auto 10px;
      padding: 0 20px;
      height: 30px;
      line-height: 30px;
      border-radius: 5px;
      background-color: var(--cloudea-trans-blue-1);
      user-select: none;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background-color: var(--cloudea-white);
        * {
          color: var(--cloudea-blue-5);
        }
      }

      &.active {
        cursor: inherit;
        background-color: var(--cloudea-blue-5);
        color: var(--cloudea-white);
      }
    }
  }
}
</style>
