<script setup lang="ts">
import { ref } from 'vue'

const testList = ref([
  { title: '测试1' },
  { title: '测试2' },
  { title: '测试3' },
  { title: '测试4' },
  { title: '测试5' }
])
</script>

<template>
  <div class="hot-list-container cloudea-area">
    <div class="hot-list-item">
      <div class="hot-item-header">
        <div class="hot-title">
          <!-- <el-icon class="hot-icon"><Tickets /></el-icon> -->
          <span class="title-text"><slot name="title"></slot></span>
        </div>
        <div class="item-header-button">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              data-v-32ef48a4=""
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.66667 6.66667C9.48257 6.66667 9.33333 6.51743 9.33333 6.33333V5.66667C9.33333 5.48257 9.48257 5.33333 9.66667 5.33333L11.8303 5.3334C10.987 4.12437 9.58586 3.33333 8 3.33333C5.42267 3.33333 3.33333 5.42267 3.33333 8C3.33333 10.5773 5.42267 12.6667 8 12.6667C10.1139 12.6667 11.8996 11.2611 12.4733 9.33358L13.8513 9.33355C13.2449 12.0054 10.8554 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C9.88507 2 11.5671 2.86932 12.6671 4.22893L12.6667 2.33333C12.6667 2.14924 12.8159 2 13 2H13.6667C13.8508 2 14 2.14924 14 2.33333V6C14 6.35145 13.728 6.63939 13.3831 6.66484L13.3333 6.66667H9.66667Z"
              fill="#8A919F"
            ></path>
          </svg>
          <span class="text">换一换</span>
        </div>
      </div>
      <div class="divider" style="margin-top: 4px">
        <div class="content"></div>
      </div>
      <ul class="hot-item-body">
        <div class="skeleton">
          <li
            class="hot-item hot-item-article"
            v-for="(e, i) in testList"
            :key="i"
          >
            <div class="body-index">{{ i + 1 }}</div>
            <div class="hot-item-text hot-item-text-article">
              <a href="" class="title-article">{{ e.title }}</a>
              <a href="" class="info"></a>
            </div>
          </li>
        </div>
      </ul>
      <div class="divider" style="margin-bottom: 4px">
        <div class="content"></div>
      </div>
      <div class="hot-item-footer">
        <a class="item-footer-button">
          <span>查看更多</span>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class=""
          >
            <path
              d="M6.6094 4.99959L3.22118 1.61137C3.13982 1.53001 3.13982 1.3981 3.22118 1.31674L3.5158 1.02212C3.59716 0.940757 3.72907 0.940757 3.81043 1.02212L7.49328 4.70496C7.656 4.86768 7.656 5.1315 7.49328 5.29422L3.81043 8.97707C3.72907 9.05843 3.59716 9.05843 3.5158 8.97707L3.22118 8.68244C3.13982 8.60108 3.13982 8.46917 3.22118 8.38781L6.6094 4.99959Z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hot-list-item {
  border-radius: 4px;
  background-color: var(--Forum-Content-Color);
  margin-bottom: 1.66rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 12px 8px;
  overflow: hidden;
}

/** ----------header---------- */
.hot-list-item .hot-item-header {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 12px;
  align-items: center;
  padding: 0 8px;
}

.hot-list-item .hot-item-header .hot-title {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--Cloudea-Font-Black);
}

.hot-list-item .hot-item-header .item-header-button[data-v-32ef48a4] {
  display: flex;
  flex-direction: row;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}

.hot-list-item .hot-item-header .hot-icon {
  width: 20px;
  height: 20px;
  line-height: 0;
  margin-right: 8px;
}

.hot-list-item .hot-item-header .hot-title {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--Cloudea-Font-Black);
}

.hot-list-item .hot-item-header .item-header-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}

.hot-list-item .hot-item-header .item-header-button .text {
  margin-left: 4px;
  color: var(--Cloudea-Font-Grey);
}

/** ----------body---------- */
.hot-list-item .hot-item-body {
  min-height: 84px;
}

.hot-list-item .hot-item-body .hot-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
}

.hot-list-item .hot-item-body .hot-item .body-index {
  font-weight: 800;
  min-width: 18px;
  line-height: 22px;
  margin: 0 0.92rem 0 0;
  color: var(--Cloudea-Font-Grey);
  font-family: Archivo;
  text-align: left;
}

.hot-list-item .hot-item-body .hot-item .hot-item-text-article {
  display: flex;
  align-items: center;
}

.hot-list-item .hot-item-body .hot-item .hot-item-text {
  color: var(--Cloudea-Font-Black);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  flex: 1;
}

.hot-list-item .hot-item-body .hot-item .title-article {
  color: var(--Cloudea-Font-Black);
  display: inline-block;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.hot-list-item .hot-item-body .hot-item .info {
  color: var(--Cloudea-Font-Grey);
  cursor: pointer;
}

/** ----------footer---------- */
.hot-list-item .hot-item-footer {
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.hot-list-item .hot-item-footer .item-footer-button {
  font-size: 14px;
  color: var(--Cloudea-Font-Grey);
  line-height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.hot-list-item .hot-item-footer .item-footer-button path {
  fill: var(--Cloudea-Font-Grey);
}

/** ----------divider---------- */
.hot-list-item .divider {
  width: 100%;
  height: 1px;
}

.hot-list-item .divider .content {
  margin: 0 8px;
  height: 100%;
  background: var(--Forum-Grey);
}
</style>
