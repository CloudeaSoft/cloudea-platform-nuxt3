<script setup lang="ts">
import type { PostInfo } from '~/types/api/forum-model'

const props = defineProps<{
  list: PostInfo[]
  total: number
}>()

const emits = defineEmits<{
  bottom: []
}>()

const scrollRef = ref<HTMLElement>()

const onClick = (id: string) => {
  const localPatch = useLocalePath()
  const { showSearchPanel } = storeToRefs(useTempSettingStore())
  navigateTo(localPatch(`/forum/posts/${id}`))
  showSearchPanel.value = false
}

const onScroll = (event: UIEvent) => {
  if (!isScrollAtBottom() || props.total <= props.list.length) {
    return
  }
  emits('bottom')
}

const isScrollAtBottom = () => {
  if (scrollRef.value) {
    const scrollHeight = scrollRef.value.scrollHeight
    const scrollTop = scrollRef.value.scrollTop
    const clientHeight = scrollRef.value.clientHeight

    const errorMargin = 1.007
    return Math.abs(scrollHeight - scrollTop - clientHeight) < errorMargin
  }
}
</script>

<template>
  <div ref="scrollRef" class="search-result-area" @scroll.stop="onScroll">
    <div class="search-result-container" v-if="list.length > 0">
      <ul class="search-result-content">
        <li
          class="search-result-item"
          v-for="item in list"
          @click="onClick(item.PostId)"
        >
          <div class="item-header">
            <div class="title">{{ item.Title }}</div>
            <div class="creator">{{ item.Creator.DisplayName }}</div>
          </div>
          <div class="item-body">
            {{ markdownToText(item.Content) }}
          </div>
          <div class="item-footer">
            <div class="reply">
              <Icon name="lucide:message-square" />
              {{ item.ReplyCount }}
            </div>
            <div class="like">
              <Icon name="lucide:thumbs-up" />
              {{ item.LikeCount }}
            </div>
            <div class="favorite">
              <Icon name="lucide:star" />
              {{ item.FavoriteCount }}
            </div>
            <div class="time">{{ getLocaleTime(item.CreateTime) }}</div>
          </div>
        </li>
        <li class="loading" v-if="list.length < total">
          <div class="blobs">
            <div class="blob-center"></div>
            <div class="blob"></div>
            <div class="blob"></div>
            <div class="blob"></div>
            <div class="blob"></div>
            <div class="blob"></div>
            <div class="blob"></div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
        </li>
      </ul>
    </div>
    <div class="search-result-empty" v-else>
      <em>{{ $t('cloudea.search.result.emptyResult') }}</em>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-result-area {
  width: 100%;
  height: 100%;
  padding: 10px 10px 0;
  flex: 1;
  flex-shrink: 1;
  overflow-y: scroll;
  scrollbar-width: thin;

  .search-result-container {
    width: 100%;
    height: 100%;
    overflow: scroll;

    .search-result-content {
      width: 100%;
      display: flex;
      flex-direction: column;

      .search-result-item {
        margin-bottom: 10px;

        width: 100%;
        border-radius: 10px;

        // height: 70px;
        padding: 0 10px;
        display: flex;
        flex-direction: column;

        background-color: var(--cloudea-trans-blue-0);
        border: 2px solid var(--cloudea-trans-blue-2);
        transition: border 0.3s ease;

        &:hover {
          border-color: var(--cloudea-blue-5);
        }

        .item-header {
          margin-top: 6px;

          height: 24px;
          display: flex;
          align-items: baseline;
          justify-content: space-between;

          .title {
            font-size: 1.2rem;
          }
        }

        .item-body {
          height: 30px;
          line-height: 30px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .item-footer {
          margin: 6px 0;
          height: 20px;
          display: flex;
          align-items: right;
          justify-content: space-between;

          & > * {
            margin-left: 10px;

            &:first-child {
              margin-left: 0;
            }
          }

          .time {
            flex: 1;
            text-align: right;
          }
        }
      }

      .loading {
        height: 40px;
        align-items: center;
        justify-content: center;
        width: 100%;
        text-align: center;
        display: flex;

        svg {
          display: none;
        }

        $bolb-color: var(--cloudea-trans-blue-3);

        // Loader
        .blobs {
          filter: url(#goo);
          width: 200px;
          height: 40px;
          position: relative;
          overflow: hidden;
          border-radius: 35px;
          transform-style: preserve-3d;

          // Blob center item
          .blob-center {
            transform-style: preserve-3d;
            position: absolute;
            background: $bolb-color;
            top: 50%;
            left: 50%;
            width: 10px;
            height: 10px;
            transform-origin: left top;
            transform: scale(0.9) translate(-50%, -50%);
            animation: blob-grow linear 3.4s infinite;
            border-radius: 50%;
            box-shadow: 0 -10px 40px -5px $bolb-color;
          }
        }

        // Blob item
        .blob {
          position: absolute;
          background: $bolb-color;
          top: 50%;
          left: 50%;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          animation: blobs ease-out 3.4s infinite;
          transform: scale(0.9) translate(-50%, -50%);
          transform-origin: center top;
          opacity: 0;

          // Set animation delay for each of type
          @for $i from 1 to 6 {
            &:nth-child(#{$i}) {
              animation-delay: $i * 0.2 + s;
            }
          }
        }

        // Keyframes variables
        $left: calc(-330px - 50%);
        $right: calc(330px - 50%);

        // Keyframes
        @keyframes blobs {
          0% {
            opacity: 0;
            transform: scale(0) translate($left, -50%);
          }
          1% {
            opacity: 1;
          }
          35%,
          65% {
            opacity: 1;
            transform: scale(0.9) translate(-50%, -50%);
          }
          99% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: scale(0) translate($right, -50%);
          }
        }

        @keyframes blob-grow {
          0%,
          39% {
            transform: scale(0) translate(-50%, -50%);
          }
          40%,
          42% {
            transform: scale(1, 0.9) translate(-50%, -50%);
          }
          43%,
          44% {
            transform: scale(1.2, 1.1) translate(-50%, -50%);
          }
          45%,
          46% {
            transform: scale(1.3, 1.2) translate(-50%, -50%);
          }
          47%,
          48% {
            transform: scale(1.4, 1.3) translate(-50%, -50%);
          }
          52% {
            transform: scale(1.5, 1.4) translate(-50%, -50%);
          }
          54% {
            transform: scale(1.7, 1.6) translate(-50%, -50%);
          }
          58% {
            transform: scale(1.8, 1.7) translate(-50%, -50%);
          }
          68%,
          70% {
            transform: scale(1.7, 1.5) translate(-50%, -50%);
          }
          78% {
            transform: scale(1.6, 1.4) translate(-50%, -50%);
          }
          80%,
          81% {
            transform: scale(1.5, 1.4) translate(-50%, -50%);
          }
          82%,
          83% {
            transform: scale(1.4, 1.3) translate(-50%, -50%);
          }
          84%,
          85% {
            transform: scale(1.3, 1.2) translate(-50%, -50%);
          }
          86%,
          87% {
            transform: scale(1.2, 1.1) translate(-50%, -50%);
          }
          90%,
          91% {
            transform: scale(1, 0.9) translate(-50%, -50%);
          }
          92%,
          100% {
            transform: scale(0) translate(-50%, -50%);
          }
        }
      }
    }
  }

  .search-result-empty {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.2rem;
    color: var(--cloudea-red-4);
  }
}
</style>
