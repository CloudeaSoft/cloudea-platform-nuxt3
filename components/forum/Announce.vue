<template>
  <div class="announce-container">
    <div class="announce-content cloudea-area">
      <div class="announce-header">
        <h1 class="header-text">{{ $t('forum.announce.title') }}</h1>
      </div>
      <div class="announce-body">
        <ul class="announce-list">
          <li class="announce-list__item" v-for="announce in 16">
            <span class="item-type">{{ $t('forum.announce.title') }}</span>
            <NuxtLinkLocale class="item-href">
              2024年4月19日 不停机更新公告
            </NuxtLinkLocale>
            <span class="item-time">2024-04-19</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.announce-container {
  padding-bottom: 20px;

  .announce-content {
    padding: 20px;

    .announce-body {
      margin-top: 20px;

      .announce-list {
        height: 996px;
        box-sizing: border-box;
        overflow: hidden;
        padding: 20px 40px 0 40px;
        position: relative;

        .announce-list__item {
          width: 100%;
          height: 61px;
          line-height: 60px;
          overflow: hidden;
          border-top: none;
          border-bottom: 1px var(--cloudea-black) solid;

          display: flex;
          align-items: center;
          justify-content: space-around;

          .item-type {
            display: inline-block;
            vertical-align: middle;
            min-width: 36px;
            padding: 0 5px;
            height: 20px;
            box-sizing: border-box;
            font-size: 12px;
            line-height: 18px;
            text-align: center;

            color: #bb9a6c;
            border: 1px #c5ab86 solid;
          }
          .item-href {
            display: inline-block;
            vertical-align: middle;
            overflow: hidden;
            margin-left: 20px;
            font-size: 14px;
            letter-spacing: 1px;
            text-overflow: ellipsis;
            white-space: nowrap;

            width: 660px;
            height: 60px;
          }
          .item-time {
            display: inline-block;
            vertical-align: middle;
            width: 50px;
            height: 39px;
            overflow: hidden;
            text-align: right;
            font-size: 14px;
            letter-spacing: 1px;
            color: (--cloudea-gray-4);
            margin-left: 18px;
            width: 120px;
            height: 60px;
            font-size: 14px;
            letter-spacing: 1px;
            margin-left: 20px;
          }
        }
      }
    }
  }
}
</style>
