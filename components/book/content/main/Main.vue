<script setup lang="ts">
const bookListStyle = ref<boolean>(true)

const list = ref<any[]>([])
onMounted(() => {
  for (let i = 0; i < 20; i++) {
    list.value.push({
      name: '标题aa',
      author: '作者aa',
      intro:
        '在此填写文章的简介描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述。',
      status: 0,
      coverUrl: '',
      total: '总字数a',
      type: '类别a',
      update: '最后更新时间aa',
      latestChapter: {
        title: '最新章节aa',
        link: '链接'
      }
    })
  }
})
</script>

<template>
  <div class="main-content-wrap">
    <div class="tool-bar">
      <div class="view-mode">
        <a
          :class="['iconfont', bookListStyle ? 'active' : '']"
          @click="bookListStyle = true"
        >
          <Icon name="lucide:layout-grid" />
        </a>
        <em>|</em>
        <a
          :class="['iconfont', bookListStyle ? '' : 'active']"
          @click="bookListStyle = false"
        >
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
    <BookContentMainImgTextList :book-list="list" v-if="bookListStyle" />
    <BookContentMainOnlyTextList :book-list="list" v-else />
    <div class="page-box">
      <!-- <CloudeaPagination/> -->
      pagination
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

        transition:
          color 0.3s ease-out,
          background-color 0.3s;
        cursor: pointer;

        &:hover {
          color: #666;
        }

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

  .page-box {
    min-height: 25px;
    padding: 40px 0;
  }
}
</style>
