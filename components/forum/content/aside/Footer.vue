<script setup lang="ts">
import { ref } from 'vue'

const info = ref({
  email: '2025******@qq.com',
  tel: '010-80001000'
})
</script>
<template>
  <div class="index-aside-footer cloudea-area">
    <ul class="more-list">
      <li class="item">
        <NuxtLinkLocale to="/" rel="nofollow">使用指南</NuxtLinkLocale>
      </li>
      <li class="item">
        <NuxtLinkLocale to="/agreement" rel="nofollow">用户协议</NuxtLinkLocale>
      </li>
      <li class="item">
        <NuxtLinkLocale to="/privacy" rel="nofollow">隐私政策</NuxtLinkLocale>
      </li>
      <li class="item">
        <NuxtLinkLocale to="/about" rel="nofollow">关于我们</NuxtLinkLocale>
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
    <ul class="more-list" hidden>
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
        <span>©{{ new Date().getFullYear() }} Cloudea</span>
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
