<script setup lang="ts">
import { ref } from 'vue'

const itemList = ref([
  {
    id: '12345',
    title: '每日快讯',
    hot: '173k',
    recommend: true
  },
  {
    id: '12345',
    title: '新人报到',
    hot: '173k',
    recommend: true
  },
  {
    id: '12345',
    title: '聊一聊工工程化',
    hot: '173k',
    recommend: false
  },
  {
    id: '12345',
    title: '每天一个知识点',
    hot: '173k',
    recommend: false
  },
  {
    id: '12345',
    title: '日更活动',
    hot: '173k',
    recommend: false
  },
  {
    id: '12345',
    title: '每日快讯',
    hot: '173k',
    recommend: false
  },
  {
    id: '12345',
    title: '每日快讯',
    hot: '173k',
    recommend: false
  },
  {
    id: '12345',
    title: '每日快讯',
    hot: '173k',
    recommend: false
  },
  {
    id: '12345',
    title: '每日快讯',
    hot: '173k',
    recommend: false
  },
  {
    id: '12345',
    title: '每日快讯',
    hot: '173k',
    recommend: false
  }
])
</script>
<template>
  <div class="list-box cloudea-area">
    <p class="title">
      推荐话题
      <span class="refresh">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-v-3ea9885c=""
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.66667 6.66667C9.48257 6.66667 9.33333 6.51743 9.33333 6.33333V5.66667C9.33333 5.48257 9.48257 5.33333 9.66667 5.33333L11.8303 5.3334C10.987 4.12437 9.58586 3.33333 8 3.33333C5.42267 3.33333 3.33333 5.42267 3.33333 8C3.33333 10.5773 5.42267 12.6667 8 12.6667C10.1139 12.6667 11.8996 11.2611 12.4733 9.33358L13.8513 9.33355C13.2449 12.0054 10.8554 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C9.88507 2 11.5671 2.86932 12.6671 4.22893L12.6667 2.33333C12.6667 2.14924 12.8159 2 13 2H13.6667C13.8508 2 14 2.14924 14 2.33333V6C14 6.35145 13.728 6.63939 13.3831 6.66484L13.3333 6.66667H9.66667Z"
            fill="#8A919F"
          ></path>
        </svg>
        换一换
      </span>
    </p>
    <div class="theme-list">
      <a
        class="item"
        v-for="(el, index) in itemList"
        :key="index"
        :href="el.id"
      >
        <p class="content">
          <img alt="" class="tag" v-if="el.recommend" />
          <span class="byte-tooltip__wrapper">
            <span class="content-label">{{ `#${el.title}#` }}</span>
          </span>
        </p>
        <p class="hot">{{ el.hot }}</p>
      </a>
    </div>
    <a class="moreTopics">
      查看更多
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.13909 6.00049L4.07322 1.93463C3.97559 1.837 3.97559 1.6787 4.07322 1.58107L4.42678 1.22752C4.52441 1.12989 4.6827 1.12989 4.78033 1.22752L9.19975 5.64694C9.39501 5.8422 9.39501 6.15878 9.19975 6.35404L4.78033 10.7735C4.6827 10.8711 4.52441 10.8711 4.42678 10.7735L4.07322 10.4199C3.97559 10.3223 3.97559 10.164 4.07322 10.0664L8.13909 6.00049Z"
          fill="#8A919F"
        ></path>
      </svg>
    </a>
  </div>
</template>
<style scoped>
.title {
  justify-content: space-between;
  line-height: 46px;
  margin: 0 16px !important;
  font-weight: 500;
  font-size: 16px;
  color: var(--Cloudea-Font-Black);
  border-bottom: 1px solid var(--Forum-Grey);
  margin: 0;
}

.refresh,
.title {
  display: flex;
  align-items: center;
}

.refresh {
  font-size: 12px;
  line-height: 20px;
  text-align: right;
  color: var(--Cloudea-Font-Grey);
  cursor: pointer;
}

.refresh svg {
  margin-right: 4px;
}

.theme-list {
  padding: 12px 16px;
}

.theme-list .item {
  height: 22px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}

.theme-list .item:last-child {
  margin-bottom: 0;
}

.theme-list .content {
  flex-grow: 1;
  margin: 0;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.theme-list .content .tag {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-bottom: 2px;
  margin-right: 4px;
}

.theme-list .content-label,
.theme-list .content {
  font-size: 14px;
  color: var(--Cloudea-Font-Black);
  word-break: break-all;
}

.theme-list .hot {
  flex-shrink: 0;
  font-size: 12px;
  color: var(--Cloudea-Font-Grey);
  padding-left: 30px;
}

.moreTopics {
  margin: 0 16px;
  border-top: 1px solid var(--Forum-Grey);
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  color: var(--Cloudea-Font-Grey);
}

.moreTopics svg {
  margin-left: 4px;
}
</style>
