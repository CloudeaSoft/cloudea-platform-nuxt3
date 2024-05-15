<script setup lang="ts">
const { bookList } = defineProps<{
  bookList: any[]
}>()

const jumpToBookChapter = () => {
  navigateTo(useNuxtApp().$localePath('/book/chapter/1'))
}
</script>

<template>
  <ul class="all-book-list">
    <li class="img-text-item" v-for="bookItem in bookList" :key="bookItem">
      <div class="book-img-box" @click="jumpToBookChapter"></div>
      <div class="book-mid-info">
        <h2 class="title">
          <a>{{ bookItem.name }}</a>
        </h2>
        <p class="author">
          <a href="" class="name">{{ bookItem.author }}</a>
          <em>|</em>
          <span>{{ bookItem.type }}</span>
          <em>|</em>
          <span>{{ bookItem.status }}</span>
        </p>
        <p class="intro">
          {{ bookItem.intro }}
        </p>
        <p class="update">
          <span>{{ bookItem.total }}</span>
          <em>|</em>
          <a>{{ bookItem.latestChapter.title }}</a>
        </p>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.all-book-list {
  :first-child,
  :first-child + li {
    border: none;
  }
}

.img-text-item {
  float: left;
  width: 447px;
  display: flex;

  border-top: 1px solid #c6c6c6;
  padding: 25px 0;

  .book-img-box {
    height: 136px;
    width: 102px;
    margin-right: 16px;
    background-color: #fff;

    cursor: pointer;
  }

  .book-mid-info {
    width: 314px;
    margin-right: 16px;

    .title {
      font:
        18px / 24px PingFangSC-Regular,
        HelveticaNeue-Light,
        Helvetica Neue Light,
        Microsoft YaHei,
        'sans-serif';
      height: 24px;
      margin-bottom: 8px;
      overflow: hidden;
    }

    .author {
      height: 16px;
      margin-bottom: 6px;
      overflow: hidden;

      a {
        color: #a6a6a6;
        float: left;
        line-height: 16px;
      }

      em {
        color: #e6e6e6;
        float: left;
        font-family: Arial;
        margin: 1px 8px 0;
      }

      span {
        color: #a6a6a6;
        float: left;
        line-height: 16px;
      }
    }

    .intro {
      color: #666;
      font-size: 14px;
      height: 48px;
      line-height: 24px;
      margin-bottom: 8px;

      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .update {
      line-height: 22px;
      white-space: nowrap;

      span {
        vertical-align: middle;
      }

      em {
        color: #b5b5b5;
        display: inline-block;
        vertical-align: middle;
        font-family: Arial;
        margin: 0 5px;
      }

      a {
        color: #3f5a93;
        display: inline-block;
        max-width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: middle;
        white-space: nowrap;
      }
    }
  }
}
</style>
