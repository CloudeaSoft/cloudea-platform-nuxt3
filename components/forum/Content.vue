<script setup lang="ts">
import { getPostApi, getRecommendApi } from '~/api'
import { GUID_EMPTY } from '~/types/api/base-model.d'
import type { PostInfo } from '~/types/api/forum-model'

const sectionId = ref(GUID_EMPTY)
const isRecommend = ref(true)
const forumIndexRef = ref<HTMLElement>()

const pageIndex = ref(1)
const pageSize = ref(15)

const postList = ref<PostInfo[]>([])
const maxPage = ref(1)

const handleGetPostList = async () => {
  if (!isRecommend.value) {
    const res = await getPostApi(
      sectionId.value !== GUID_EMPTY ? sectionId.value : undefined,
      { PageIndex: pageIndex.value, PageSize: pageSize.value }
    )
    postList.value = postList.value?.concat(res.value?.Data.Rows!)
    maxPage.value = res.value?.Data.Total! / pageSize.value
  } else {
    const res = await getRecommendApi()
    const listRes = res.value?.Data
    if (!listRes) {
      useMessage('', 'error')
      return
    }
    postList.value = postList.value?.concat(listRes)
    maxPage.value = 9999
  }
}

const handleSectionChange = async () => {
  if (sectionId.value !== GUID_EMPTY) {
    isRecommend.value = false
  } else {
    isRecommend.value = true
  }
  pageIndex.value = 1
  postList.value = []
  await handleGetPostList()

  const target = forumIndexRef.value
  window.scrollTo({
    top: target?.offsetTop,
    behavior: 'smooth'
  })
}

const handleIsRecommendChange = async (status: boolean) => {
  isRecommend.value = status
  postList.value = []
  await handleGetPostList()
}

const handleMorePostPage = async () => {
  pageIndex.value++
  await handleGetPostList()
}

onMounted(async () => {
  await handleGetPostList()
})
</script>

<template>
  <div class="forum-index-nav cloudea-area">
    <ForumContentNav v-model="sectionId" @change="handleSectionChange" />
  </div>
  <div class="forum-index-container" ref="forumIndexRef">
    <div class="forum-index-content">
      <div class="post-list">
        <div class="post-list-container cloudea-area">
          <div class="post-list-header">
            <div class="list-nav">
              <ul class="nav-list">
                <li
                  :class="isRecommend ? 'nav-item active' : 'nav-item'"
                  v-if="sectionId == GUID_EMPTY"
                >
                  <div @click="handleIsRecommendChange(true)">
                    {{ $t('forum.index.recommend') }}
                  </div>
                </li>
                <li :class="isRecommend ? 'nav-item' : 'nav-item active'">
                  <div @click="handleIsRecommendChange(false)">
                    {{ $t('forum.index.latest') }}
                  </div>
                </li>
              </ul>
              <div class="drop-down-area"></div>
            </div>
          </div>
          <ForumContentPostList :data="postList!"></ForumContentPostList>
        </div>
        <div
          class="post-list-more cloudea-area"
          @click="handleMorePostPage"
          v-show="pageIndex < maxPage"
        >
          -- Load More --
        </div>
      </div>
      <div class="forum-index-aside">
        <ForumContentAside></ForumContentAside>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.forum-index-nav {
  width: 180px;
  position: -webkit-sticky;
  position: sticky;
  top: 80px;
  margin-right: 20px;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  max-height: calc(100dvh - 101px);
  overflow-x: hidden;
}

.forum-index-container {
  // height: calc(100dvh - 6.66rem);
  // overflow-y: auto;
  margin: 0 auto;
}

.forum-index-content {
  position: relative;

  .post-list {
    margin-right: 23.33rem;
    width: 720px;
    position: relative;
    margin-bottom: 20px;
    transition: margin 0.6s ease-in-out;

    .post-list-container {
      // backdrop-filter: initial;

      .post-list-header {
        padding: 1rem 1.66rem;
        border-bottom: 1px solid var(--cloudea-gray-4);
      }

      .post-list-header .list-nav,
      .post-list-header .list-nav .nav-list {
        display: flex;
        justify-content: space-between;
      }

      .post-list-header .list-nav .nav-list .nav-item {
        padding: 0 1.66rem;
        line-height: 2rem;
        font-size: 1.33em;
        border: none;
        position: relative;
        cursor: pointer;
      }
      .post-list-header .list-nav .nav-list .nav-item:first-child {
        margin-left: -1.66rem;
      }

      .nav-list .nav-item.active {
        color: var(--cloudea-blue-5);
        font-weight: 500;
      }

      .post-list-header .nav-list {
        align-items: center;
        line-height: 1;
      }
    }

    .post-list-more {
      cursor: pointer;
      margin-top: 20px;
      height: 50px;
      line-height: 50px;
      display: flex;
      // align-items: center;
      justify-content: center;
      font-size: 2rem;
      // font-weight: 700;
    }
  }
}

@media (max-width: 1220px) {
  .forum-index-nav {
    display: none;
  }
}

@media (max-width: 1000px) {
  .forum-index-content {
    .post-list {
      margin: 0 auto 20px;
      width: 95vw;
    }

    .forum-index-aside {
      display: none;
    }
  }
}

@media (max-width: 600px) {
  .forum-index-content {
    .post-list {
      min-width: 100vw;
      margin-bottom: 0;
    }
  }
}
</style>
