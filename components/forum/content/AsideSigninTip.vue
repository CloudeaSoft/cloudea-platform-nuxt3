<script setup lang="ts"></script>
<template>
  <ForumContentAsideBlock class="signin-tip signin">
    <div class="first-line">
      <div class="icon-text">
        <span class="title">上午好！{{ 'xxx' }}</span>
        <div class="second-line">点亮在社区的每一天</div>
      </div>
      <div class="signin-btn" plain>
        <span class="btn-text">去签到</span>
      </div>
    </div>
  </ForumContentAsideBlock>
</template>
<style scoped>
.signin-tip {
  padding: 20px;
}

.first-line {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.first-line .icon-text {
  display: flex;
  flex-direction: column;
}

.first-line .title {
  color: var(--Cloudea-Font-Black);
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}

.first-line .btn-text {
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
}

.second-line {
  color: var(--Cloudea-Font-Grey);
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  margin-top: 2px;
}
</style>
