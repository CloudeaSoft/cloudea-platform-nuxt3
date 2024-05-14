<script setup lang="ts"></script>

<template>
  <div class="main-content-wrap">
    <div class="tool-bar">
      <div class="view-mode">
        <a class="iconfont active">
          <Icon name="lucide:layout-grid" />
        </a>
        <em>|</em>
        <a class="iconfont">
          <Icon name="lucide:text" />
        </a>
      </div>
      <div class="select-wrap">
        <a class="active">更新时间</a>
        <a>总收藏</a>
        <a>总字数</a>
        <div class="sort-count">共10000本相关作品</div>
      </div>
    </div>
    <ul class="all-book-list">
      <li v-for="bookItem in 20" :key="bookItem">
        <div class="book-img-box"></div>
        <div class="book-mid-info">
          <h2 class="title"><a>title</a></h2>
          <p class="author">
            <a href="" class="name">作者</a>
            <em>|</em>
            <span>连载中</span>
          </p>
          <p class="intro">
            在此填写文章的简介描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述。
          </p>
          <p class="update">
            <span>字数</span>
            <em>|</em>
            <a>卷号</a>
          </p>
        </div>
      </li>
    </ul>
    <div class="page-box">
      <!-- <CloudeaPagination/> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-content-wrap {
  width: 894px;

  .tool-bar {
    background-color: #f7f6f2;
    height: 40px;
    padding: 0 12px;
    position: relative;

    .view-mode {
      margin-top: 12px;
      position: absolute;
      right: 12px;
      top: 0;
      z-index: 2;

      em {
        color: #e6e6e6;
        float: left;
        font: 14px / 1 Arial;
        margin: 0 10px;
      }

      .iconfont {
        color: #a6a6a6;
        float: left;
        font-size: 16px;
        min-width: 16px;

        display: flex;

        &.active {
          color: #262626;
        }
      }
    }

    .select-wrap {
      position: relative;

      a {
        color: #a6a6a6;
        display: inline-block;
        font:
          12px / 40px PingFangSC-Regular,
          -apple-system,
          Simsun;
        height: 40px;
        position: relative;
        vertical-align: middle;

        margin: 0 10px;

        &:first-child {
          margin-left: 0;
        }
      }

      .sort-count {
        color: #a6a6a6;
        font:
          12px / 40px PingFangSC-Regular,
          -apple-system,
          Simsun;

        position: absolute;
        right: 68px;
        top: 0;
      }
    }
  }

  .all-book-list {
    :first-child,
    :first-child + li {
      border: none;
    }

    li {
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
  }
}
</style>
