<script setup lang="ts">
const i18n = useI18n()

const testMessage = () => {
  const text = i18n.t('warning.test')
  useMessage(text, `warn`, 2000)
}
</script>

<template>
  <div class="forum-index-nav cloudea-area">
    <div class="side-navigator-wrap">
      <div class="nav-item-wrap" v-for="i in 5">
        <div class="nav-item-content">
          <NuxtLinkLocale to="/forum" class="nav-item">xxx</NuxtLinkLocale>
        </div>
      </div>
    </div>
  </div>
  <div class="forum-index-container">
    <div class="forum-index-content">
      <div class="post-list">
        <ForumContentPostList></ForumContentPostList>
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

  .side-navigator-wrap {
    min-width: 180px;
    padding: 8px;
  }

  .nav-item-wrap {
    display: flex;
    flex-direction: column;
  }

  .nav-item-content {
    line-height: 24px;
    border-right: 4px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .nav-item-content .nav-item {
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    padding: 10px 17px;
    cursor: pointer;
  }
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
