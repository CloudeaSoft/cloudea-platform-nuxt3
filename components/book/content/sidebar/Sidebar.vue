<script setup lang="ts">
const status = ref<number>(0)
const statusList = [
  {
    value: 0,
    name: '全部'
  },
  {
    value: 1,
    name: '连载中'
  },
  {
    value: 2,
    name: '已完结'
  },
  {
    value: 3,
    name: '短篇'
  },
  {
    value: 4,
    name: '长篇'
  }
]

const update = ref<number>(0)
const updateList = [
  {
    value: 0,
    name: '全部'
  },
  {
    value: 1,
    name: '三日内'
  },
  {
    value: 2,
    name: '七日内'
  },
  {
    value: 3,
    name: '半月内'
  },
  {
    value: 4,
    name: '一月内'
  }
]
</script>

<template>
  <div class="range-sidebar">
    <div class="select-list">
      <div class="work-filter">
        <h3 class="filter-title">状态</h3>
        <ul class="filter-body">
          <li
            :class="status === item.value ? 'active' : ''"
            @click="status = item.value"
            v-for="item in statusList"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="work-filter">
        <h3 class="filter-title">更新时间</h3>
        <ul class="filter-body">
          <li
            :class="update === item.value ? 'active' : ''"
            @click="update = item.value"
            v-for="item in updateList"
          >
            {{ item.name }}
          </li>
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
          cursor: pointer;
          display: inline-block;
          height: 20px;
          margin-bottom: 8px;
          margin-right: 8px;
          padding: 0 4px;
          text-align: center;
          line-height: 20px;

          &:hover {
            background-color: var(--cloudea-blue-2);
          }

          &.active {
            background-color: var(--cloudea-black);
            color: var(--cloudea-white);
          }
        }
      }
    }
  }
}
</style>
