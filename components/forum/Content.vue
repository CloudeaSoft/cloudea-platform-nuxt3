<script setup lang="ts"></script>

<template>
  <div class="forum-index-nav">
    <div class="side-navigator-wrap">
      <div class="nav-item-wrap">
        <div class="nav-item-content">
          <a href="" class="nav-item">xxx</a>
        </div>
      </div>
      <div class="nav-item-wrap">
        <div class="nav-item-content">
          <a href="" class="nav-item">xxx</a>
        </div>
      </div>
      <div class="nav-item-wrap">
        <div class="nav-item-content">
          <a href="" class="nav-item">xxx</a>
        </div>
      </div>
      <div class="nav-item-wrap">
        <div class="nav-item-content">
          <a href="" class="nav-item">xxx</a>
        </div>
      </div>
      <div class="nav-item-wrap">
        <div class="nav-item-content">
          <a href="" class="nav-item">xxx</a>
        </div>
      </div>
    </div>
  </div>
  <div class="forum-index-container">
    <div class="forum-index-content">
      <ForumContentPostList></ForumContentPostList>
      <ForumContentAside></ForumContentAside>
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
  border-radius: 10px;
  background: var(--cloudea-trans-white-5);
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

.forum-index-content{
  position: relative;
}

@media (max-width: 1000px) {
  .aside {
    display: none;
  }

  .content-container {
    width: 80%;
    border: none;
  }
}

@media (max-width: 700px) {
  .aside {
    display: none;
  }

  .main {
    width: 95%;
  }
}
</style>
