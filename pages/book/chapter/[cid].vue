<script setup lang="ts">
definePageMeta({
  layout: 'fullmask'
})

const route = useRoute()
const cid = computed(() => {
  return (route.params as { cid: string }).cid
})

const bookMeta = {
  title: '夏日、柠檬与overlay',
  author: 'Ru',
  translator: '叶樱',
  language: 'zh-cn',

  sourceTitle: '夏とレモンとオーバーレイ',
  sourceAuthor: 'Ru',
  sourceLanguage: 'jp',
  sourceLink: 'pixiv.net/novel/show.php?id=14241819',

  other: {
    翻译: '叶樱',
    转载来源: '百合会'
  },

  content: [
    {
      index: 0,
      name: '第一话 遗书声优与玩INS的女人'
    },
    {
      index: 1,
      name: '第二话 初次约会总有些难熬'
    },
    {
      index: 2,
      name: '第三话 她是柠檬，我是西柚'
    },
    {
      index: 3,
      name: '第四话 封口浴盐'
    },
    {
      index: 4,
      name: '第五话 执念'
    },
    {
      index: 5,
      name: '第六话 夏色相片'
    },
    {
      index: 6,
      name: '第七话 烟花大会新手入门，自带消暑用品'
    },
    {
      index: 7,
      name: '第八话 泡澡计时器'
    },
    {
      index: 8,
      name: '第九话 夏日的终结，清晨的秋千'
    },
    {
      index: 9,
      name: '第十话 不要走'
    },
    {
      index: 10,
      name: '尾声'
    }
  ]
}

let page = ref(1)
let book = ref(`/novels/000001/${page.value}.html`)

const changePage = (val: Boolean) => {
  if (val && page.value < 11) {
    page.value++
    book.value = `/novels/000001/${page.value}.html`
  } else if (!val && page.value > 1) {
    page.value--
    book.value = `/novels/000001/${page.value}.html`
  } else {
    useMessage('没有更多了', 'warn')
  }
}
</script>

<template>
  <div class="chapter-container">
    <div class="book-wrap">
      <div class="book-content">
        <div class="book-title">
          <span>{{
            `${bookMeta.title} —— ${bookMeta.content[page - 1].name}`
          }}</span>
        </div>
        <div class="book-body" ref="bookBody">
          <iframe :src="book"></iframe>
        </div>
        <div class="book-control">
          <CloudeaForumButton @click="changePage(false)">
            上一章
          </CloudeaForumButton>
          <CloudeaForumButton @click="changePage(true)">
            下一章
          </CloudeaForumButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chapter-container {
  height: 100%;
  height: calc(100dvh - 5rem);
}

.book-wrap {
  height: 100%;

  padding: 20px;
  padding-top: var(--header-height);
  padding-bottom: 70px;
}

.book-content {
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  gap: 20px;
}

.book-title {
  display: flex;
  height: 60px;
  line-height: 80px;
  text-align: center;
  justify-content: center;
  margin: 0 20px;
  width: 100%;
  font-size: 18px;
  font-weight: 700;
}

.book-title span {
  color: #333;
}

.book-body {
  width: 100%;
  height: 100%;
}

.book-body iframe {
  background-color: #cce099;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;

  * {
    scrollbar-width: thin;
  }
}

.book-control {
  position: fixed;
  bottom: 20px;
}
</style>
