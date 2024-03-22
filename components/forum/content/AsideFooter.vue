<script setup lang="ts">
import { ref } from 'vue'

const info = ref({
  email: '2025******@qq.com',
  tel: '010-80001000'
})
</script>
<template>
  <div class="index-aside-footer">
    <ul class="more-list">
      <li class="item">
        <a href="" target="_blank" rel="nofollow">使用指南</a>
      </li>
      <li class="item">
        <a href="" target="_blank" rel="nofollow">用户协议</a>
      </li>
      <li class="item">
        <a href="" target="_blank" rel="nofollow">隐私政策</a>
      </li>
      <li class="item">
        <a href="" target="_blank" rel="nofollow">关于我们</a>
      </li>
    </ul>
    <ul class="more-list">
      <li class="item">
        <span>
          联系邮箱：
          <a :href="`mailto:${info.email}`">{{ info.email }}</a>
        </span>
      </li>
    </ul>
    <ul class="more-list">
      <li class="item">
        <span>
          座机电话：
          <a :href="`tel:${info.tel}`">{{ info.tel }}</a>
        </span>
      </li>
    </ul>
    <ul class="more-list">
      <li class="item">
        <a href="https://beian.miit.gov.cn" target="_blank" rel="nofollow"
          >浙ICP备2023031352号</a
        >
      </li>
      <li class="item">
        <span>©2023 Cloudea</span>
      </li>
    </ul>
  </div>
</template>
<style scoped>
li {
  display: list-item;
  text-align: -webkit-match-parent;
}

.index-aside-footer {
  padding: 15px;

  border-radius: 10px;
  background-color: var(--cloudea-trans-white-5);
  backdrop-filter: blur(10px);
  box-shadow: var(--cloudea-shadow-0);
  box-shadow: none;
}

.index-aside-footer .more-list {
  font-size: 12px;
  line-height: 1.6;
  color: var(--cloudea-font-color-0);
}

.index-aside-footer .more-list:after {
  display: table;
  content: '';
  clear: both;
}

.index-aside-footer .more-list .item {
  float: left;
  margin-bottom: 8px;
}

.index-aside-footer .more-list .item:not(:last-child):after {
  content: '';
  margin-right: 12px;
}

.index-aside-footer .more-list .item a,
.index-aside-footer .more-list .item span {
  color: var(--cloudea-font-color-0);
}
</style>
