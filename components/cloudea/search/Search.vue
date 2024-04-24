<script setup lang="ts">
import type { PageResponse, Result } from '~/types/api/base-model'
import type { PostInfo } from '~/types/api/forum-model'

const { showSearchPanel } = storeToRefs(useTempSettingStore())

const searchValue = ref<string>()
const searchPage = ref<number>(1)
const searchTotal = ref<number>(0)
const searchType = ref<number>()
const searchResult = ref<PostInfo[]>([])
const isSearching = ref<boolean>(false)

const getSearchApi = async (query: string, page: number) => {
  const baseAPI = useRuntimeConfig().public.CLOUDEA_API
  return await $fetch<Result<PageResponse<PostInfo>>>('/forum/search', {
    baseURL: baseAPI,
    headers: {
      Authorization: `Bearer ${useUserStore().getToken()}`
    },
    query: {
      query,
      page
    },
    method: 'GET',
    ...responseHandler
  })
}

const onInput = async () => {
  if (!searchValue.value) {
    searchResult.value = []
    searchTotal.value = 0
    return
  }

  if (isSearching.value) return

  if (searchType.value === 1) {
    isSearching.value = true
    var response = await getSearchApi(searchValue.value, searchPage.value)
    if (!response.Status) {
      useMessage('', 'error')
      return
    }
    var data = response.Data
    searchResult.value = data.Rows
    searchTotal.value = data.Total
    isSearching.value = false
  } else {
    return
  }
}

const onSearch = () => {
  useMessage(searchValue.value!, 'success')
}

const onBottom = async () => {
  if (!searchValue.value || isSearching.value) return

  isSearching.value = true
  searchPage.value++
  var response = await getSearchApi(searchValue.value, searchPage.value)
  if (!response.Status) {
    useMessage('', 'error')
    return
  }
  var data = response.Data
  searchResult.value = searchResult.value.concat(data.Rows)
  searchTotal.value = data.Total
  isSearching.value = false
}

watch(searchType, async () => {
  searchResult.value = []
  searchTotal.value = 0
  await onInput()
})
</script>

<template>
  <Teleport to="body" :disabled="showSearchPanel">
    <Transition name="search">
      <div
        class="mask"
        v-if="showSearchPanel"
        @mousedown.stop="showSearchPanel = false"
      >
        <div class="container cloudea-area" @mousedown.stop>
          <CloudeaSearchInput
            @input="onInput"
            @search="onSearch"
            v-model="searchValue"
          />
          <CloudeaSearchNav v-model="searchType" />
          <div class="cloudea-search-divider"></div>
          <CloudeaSearchResult
            :list="searchResult"
            :total="searchTotal"
            @bottom="onBottom"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;

  display: flex;
  justify-content: center;

  transition: opacity 0.3s ease-in-out;
  background-color: var(--cloudea-mask-color-0);
}

.container {
  position: relative;
  width: 40vw;
  max-width: 500px;
  min-height: 200px;
  max-height: 600px;

  margin-top: 10vh;
  margin-bottom: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--cloudea-trans-white-5);
  border-radius: 20px;
  overflow-y: hidden;

  .cloudea-search-divider {
    margin-top: 10px;
    width: 100%;
    border-bottom: 1px solid var(--cloudea-gray-4);
  }
}

.search-enter-from {
  opacity: 0;
}

.search-leave-to {
  opacity: 0;
}

.search-enter-from .container,
.search-leave-to .container {
  transition: all 0.3s ease;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media (max-width: 1000px) {
  .container {
    width: 60vw;
  }
}

@media (max-width: 700px) {
  .container {
    width: 90vw;
  }
}
</style>
