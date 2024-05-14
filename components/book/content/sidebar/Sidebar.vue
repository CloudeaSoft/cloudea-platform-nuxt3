<script setup lang="ts"></script>

<template>
  <div class="range-sidebar">
    <div class="select-list">
      <div class="work-filter">
        <h3 class="filter-title">状态</h3>
        <ul class="filter-body">
          <li class="active">全部</li>
          <li>连载</li>
          <li>完本</li>
        </ul>
      </div>
      <div class="work-filter">
        <h3 class="filter-title">更新时间</h3>
        <ul class="filter-body">
          <li class="active">全部</li>
          <li>三日内</li>
          <li>七日内</li>
          <li>半月内</li>
          <li>一月内</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.range-sidebar {
  margin-right: 30px;
  width: 216px;

  .select-list {
    margin-top: 15px;

    .work-filter {
      margin-bottom: 15px;
      padding-bottom: 6px;
      border-bottom: 1px solid #c6c6c6;

      &:last-child {
        border: none;
      }

      .filter-title {
        font-family:
          PingFangSC-Regular,
          -apple-system,
          Simsun;
        font-size: 12px;
        margin-bottom: 15px;
      }

      .filter-body {
        min-height: 27px;

        li {
          float: left;
          height: 20px;
          margin-bottom: 8px;
          margin-right: 8px;
          padding: 0 4px;
          text-align: center;
          line-height: 20px;

          &.active {
            background-color: black;
            color: white;
          }
        }
      }
    }
  }
}
</style>
