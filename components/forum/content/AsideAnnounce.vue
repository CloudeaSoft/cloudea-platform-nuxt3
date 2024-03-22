<script setup lang="ts">
import { ref } from 'vue'
const announceList = ref([1, 2, 3, 4, 5])
</script>

<template>
  <ForumContentAsideBlock class="announce-container">
    <div class="announce-header">
      <div class="title">
        <div></div>
        <span class="title-text">公告</span>
      </div>
      <div class="btn-more">
        <span class="text">更多>></span>
      </div>
    </div>
    <div class="divider" style="margin-top: 4px">
      <div class="content"></div>
    </div>
    <ul class="announce-body">
      <li
        class="announce-item"
        v-for="(el, index) in announceList"
        :key="index"
      >
        <div class="item-symbol">
          <el-icon><ArrowRight /></el-icon>
        </div>
        <div class="item-text">测试公告-------{{ el }}</div>
      </li>
    </ul>
  </ForumContentAsideBlock>
</template>

<style scoped>
.announce-container {
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
}

.announce-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
  align-items: center;
  padding: 0 8px;
}

.announce-header .title {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--Cloudea-Font-Black);
}

.announce-header .title-text {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--Cloudea-Font-Black);
}

.announce-header .btn-more {
  display: flex;
  flex-direction: row;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}

.announce-header .btn-more .text {
  color: var(--cloudea-font-color-0);
  margin-bottom: 4px;
}

.announce-body {
  min-height: 84px;
}

.announce-body .announce-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
}

.announce-item .item-symbol {
  height: 18px;
}

.announce-item .item-symbol::after {
  content: '';
  margin-right: 5px;
}

.announce-item .item-text {
  text-decoration: underline wavy var(--cloudea-font-color-0);
}

.announce-item .item-text:hover {
  text-decoration: underline wavy;
}

.divider {
  width: 100%;
  height: 1px;
}

.divider .content {
  margin: 0 8px;
  height: 100%;
  background: var(--cloudea-gray-4);
}
</style>
