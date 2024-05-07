<script setup lang="ts">
import { getUserHistoryApi } from '~/api'
import type { PostInfo } from '~/types/api/forum-model'

const size = ref<number>(15)
const index = ref<number>(1)
const total = ref<number>(0)
const list = ref<PostInfo[]>()

const handleGetHistory = async () => {
  const response = await getUserHistoryApi({
    PageSize: size.value,
    PageIndex: index.value
  })

  const page = response.value
  total.value = page ? page.Data.Total : 0
  list.value = page ? page.Data.Rows : []
}

await handleGetHistory()
</script>

<template>
  <div class="history-container">
    <div class="history-list">
      <NuxtLinkLocale v-for="i in list" :to="`/forum/posts/${i.PostId}`">
        <div class="post">
          <div class="head-line">
            <div class="title">{{ i.Title }}</div>
            <div class="author">{{ i.Creator.DisplayName }}</div>
          </div>
          <div class="info-line">
            <div class="section">[section]</div>
            <div class="create-time">[create-time]</div>
          </div>
        </div>
      </NuxtLinkLocale>
    </div>
    <div class="history-pagination">
      <CloudeaPagination
        :total="total"
        v-model:current-page="index"
        v-model:page-size="size"
        @change="handleGetHistory"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.history-container {
  display: flex;
  flex-direction: column;
  height: 100%;

  .history-list {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
    flex: 1;

    .post {
      margin-top: 10px;
      padding: 10px;
      border-radius: 10px;

      border: 2px solid var(--cloudea-trans-blue-2);

      &:hover {
        border-color: var(--cloudea-blue-5);
      }

      .head-line {
        display: flex;
        height: 30px;
        justify-content: space-between;
      }

      .info-line {
        display: flex;
        height: 20px;
        justify-content: space-between;
      }
    }
  }

  .history-pagination {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }
}
</style>
