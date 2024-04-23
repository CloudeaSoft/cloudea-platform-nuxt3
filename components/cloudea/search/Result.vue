<script setup lang="ts">
const { list } = defineProps<{
  list: number[]
}>()
</script>

<template>
  <div class="search-result-area">
    <div class="search-result-container" v-if="list.length > 0">
      <ul class="search-result-content">
        <li class="search-result-item" v-for="item in list">{{ item }}</li>
      </ul>
    </div>
    <div class="search-result-empty" v-else>
      <em>{{ $t('cloudea.search.result.emptyResult') }}</em>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-result-area {
  width: 100%;
  height: 100%;
  padding: 10px 10px 0;
  flex: 1;
  flex-shrink: 1;
  overflow: scroll;

  .search-result-container {
    width: 100%;
    height: 100%;
    overflow: scroll;

    .search-result-content {
      width: 100%;
      display: flex;
      flex-direction: column;

      .search-result-item {
        margin-bottom: 10px;

        width: 100%;
        border-radius: 10px;

        height: 70px;

        background-color: var(--cloudea-trans-blue-0);
        border: 2px solid var(--cloudea-blue-2);
        transition: border 0.3s ease;

        &:hover {
          border-color: var(--cloudea-blue-5);
        }
      }
    }
  }

  .search-result-empty {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.2rem;
    color: var(--cloudea-red-4);
  }
}
</style>
