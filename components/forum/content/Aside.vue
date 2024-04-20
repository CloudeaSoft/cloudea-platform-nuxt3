<script setup lang="ts"></script>

<template>
  <div class="index-aside">
    <!-- <ForumContentAsideSigninTip></ForumContentAsideSigninTip> -->
    <ForumContentAsideAnnounce></ForumContentAsideAnnounce>
    <!-- <ForumContentAsideHotList>
      <template #title>文章榜</template>
    </ForumContentAsideHotList> -->
    <!-- <ForumAsideHotList><template #title>作者榜</template></ForumAsideHotList> -->
    <!-- <ForumContentAsideHotTheme class="hot-theme"></ForumContentAsideHotTheme> -->
    <ForumContentAsideFooter></ForumContentAsideFooter>
  </div>
</template>

<style scoped>
.index-aside {
  /* width: 21.66rem; */
  width: 260px;
  position: absolute;
  top: 0;
  right: 0;
}

.sidebar-block {
  box-shadow: none;
}

.hot-theme {
  margin-bottom: 20px;
}
</style>
