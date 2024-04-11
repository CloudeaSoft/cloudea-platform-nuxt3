<script setup lang="ts">
import { getPostApi } from '~/api'
import { GUID_EMPTY } from '~/types/api/base-model.d'

const sectionId = ref(GUID_EMPTY)

const postList = ref((await getPostApi(undefined)).value?.Data.Rows)

const handleSectionChange = async () => {
  var res = await getPostApi(
    sectionId.value !== GUID_EMPTY ? sectionId.value : undefined
  )
  postList.value = res.value?.Data.Rows!
}
</script>

<template>
  <div class="forum-index-nav cloudea-area">
    <ForumContentNav v-model="sectionId" @change="handleSectionChange" />
  </div>
  <div class="forum-index-container">
    <div class="forum-index-content">
      <div class="post-list">
        <ForumContentPostList :data="postList!"></ForumContentPostList>
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
