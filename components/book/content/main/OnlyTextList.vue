<script setup lang="ts">
const { bookList } = defineProps<{
  bookList: any[]
}>()
</script>

<template>
  <div class="all-book-list">
    <div class="book-text">
      <table class="rank-table-list">
        <colgroup>
          <col width="15%" />
          <col width="17%" />
          <col width="33%" />
          <col width="9%" />
          <col width="12%" />
          <col width="13%" />
        </colgroup>
        <thead>
          <tr>
            <th>类别</th>
            <th>书名</th>
            <th>最新章节</th>
            <th>字数</th>
            <th>作者</th>
            <th class="right">更新时间</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in bookList">
            <td>
              <a class="type">{{ item.type }}</a>
            </td>
            <td>
              <a class="name">{{ item.name }}</a>
            </td>
            <td>
              <a class="chapter">{{ item.latestChapter.title }}</a>
            </td>
            <td>
              <a class="total">{{ item.total }}</a>
            </td>
            <td>
              <a class="author">{{ item.author }}</a>
            </td>
            <td class="update">{{ item.update }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.all-book-list {
  margin-top: 25px;
  width: 100%;

  .rank-table-list {
    width: 100%;

    th {
      font:
        700 12px / 16px PingFangSC-Regular,
        -apple-system,
        Simsun;
      height: 20px;
      text-align: left;
      vertical-align: top;

      &.right {
        text-align: right;
      }
    }

    tbody tr {
      transition: all 0.3s;

      td {
        font:
          14px / 40px PingFangSC-Regular,
          -apple-system,
          Simsun;
        height: 40px;
        border-bottom: 1px solid #e6e6e6;
      }

      .type {
        color: gray;
      }

      .name,
      .chapter {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .chapter {
        color: #666;
      }
      .total,
      .author {
        color: #999;
        font-size: 12px;
      }

      .update {
        color: #666;
        font: 12px / 40px Arail;
        text-align: right;
      }
    }
  }
}
</style>
