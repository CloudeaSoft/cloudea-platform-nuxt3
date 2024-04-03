<script setup lang="ts">
const list = ref([
  { title: 'edit.topic.title', route: '/forum/edit/topic', icon: 'scroll-text' }
])
</script>

<template>
  <div class="edit-nav cloudea-area">
    <ul class="edit-nav-content">
      <li class="edit-nav-item" v-for="item in list">
        <NuxtLinkLocale :to="item.route">
          <Icon :name="`lucide:${item.icon}`"></Icon>
        </NuxtLinkLocale>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.edit-nav {
  font-size: 2rem;
  margin-right: 30px;
  height: 100%;
  padding: 20px;

  .edit-nav-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .edit-nav-item {
    padding: 10px 0;
    border-radius: 0px 10px 0px 0px;
  }
}
</style>
