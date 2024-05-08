<script setup lang="ts">
const bgList = [
  {
    path: '/bg/pc-1-min.webp'
  },
  {
    path: '/bg/pc-2-min.webp'
  },
  {
    path: '/bg/pc-3-min.webp'
  },
  {
    path: '/bg/pc-4-min.webp'
  },
  {
    path: '/bg/pc-5-min.webp'
  },
  {
    path: '/bg/pc-6-min.webp'
  },
  {
    path: '/bg/pc-7-min.webp'
  }
]

const handleChangeImage = async (index: number) => {
  await useSettingStore().setSystemBackground(index)
}

const itemRefs = ref<HTMLElement[]>([])
const imageCount = ref<number>(0)
const currentIndex = ref(0)

const isFrontItem = (index: number) => {
  const prevIndex =
    (currentIndex.value + imageCount.value - 1) % imageCount.value
  const nextIndex = (currentIndex.value + 1) % imageCount.value
  if (index == currentIndex.value || index == nextIndex || index == prevIndex)
    return true
  return false
}

const setupView = () => {
  const halfLength = Math.floor(imageCount.value / 2)
  for (let i = 0; i < halfLength; i++) {
    let leftIndex =
      (currentIndex.value - i - 1 + imageCount.value) % imageCount.value
    let rightIndex = (currentIndex.value + i + 1) % imageCount.value

    itemRefs.value[leftIndex].style.transform =
      `translateX(${-150 * (i + 1)}px) translateZ(${200 - i * 100}px) rotateY(30deg)`
    itemRefs.value[rightIndex].style.transform =
      `translateX(${150 * (i + 1)}px) translateZ(${200 - i * 100}px) rotateY(-30deg)`
  }
  itemRefs.value[currentIndex.value].style.transform = `translateZ(300px)`
}

const changeIndex = (index: number) => {
  currentIndex.value = index
  setupView()
}

const onClickPrev = () => {
  var targetIndex = (currentIndex.value =
    (currentIndex.value + imageCount.value - 1) % imageCount.value)
  changeIndex(targetIndex)
}

const onClickNext = () => {
  var targetIndex = (currentIndex.value =
    (currentIndex.value + 1) % imageCount.value)
  changeIndex(targetIndex)
}

const initCarousel = () => {
  setupView()
}

onMounted(() => {
  imageCount.value = itemRefs.value.length
  const getCurrentBackgroundIndex =
    useSettingStore().getCurrentBackgroundIndex()
  currentIndex.value =
    getCurrentBackgroundIndex >= 1 ? getCurrentBackgroundIndex - 1 : 0
  initCarousel()
})
</script>

<template>
  <div class="cloudea-background">
    <div class="bg-settings">
      {{ $t('settings.background') }}
    </div>
    <div class="cloudea-background-container">
      <ul class="carousel-container">
        <li
          :class="['carousel-item', isFrontItem(index) ? 'is-front' : '']"
          v-for="(item, index) in 7"
          :key="index"
          ref="itemRefs"
          @click="changeIndex(index)"
        >
          <div
            class="carousel-item-content"
            :style="`background: url(${bgList[index].path})`"
          >
            <div
              class="select-cross"
              @click="handleChangeImage(item)"
              v-if="index == currentIndex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                data-v-36fef47d=""
              >
                <path
                  fill="currentColor"
                  d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
                ></path>
              </svg>
            </div>
          </div>
        </li>
      </ul>
      <div class="prev-btn" @click="onClickPrev">
        <Icon name="lucide:chevron-left" />
      </div>
      <div class="next-btn" @click="onClickNext">
        <Icon name="lucide:chevron-right" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cloudea-background-container {
  margin-top: 15px;
  padding: 0;
  list-style: none;
  text-decoration: none;
  height: 100%;
  font-size: 15px;
  font-weight: normal;
  color: var(--cloudea-font-color-3);
  height: 180px;

  box-shadow: inset 0 0 3px 3px var(--cloudea-white);
  overflow: hidden;
  position: relative;

  .carousel-container {
    position: absolute;
    width: 100%;
    height: 180px;
    perspective: 1000px;
    transform-style: preserve-3d;
    overflow: hidden;

    .carousel-item {
      width: 120px;
      height: 90px;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      border-radius: 8px;
      transition: transform 1s ease-in-out;
      background-color: var(--cloudea-white);
      box-shadow: var(--cloudea-shadow);
      border: 3px solid var(--cloudea-blue-5);
      overflow: hidden;

      &.is-front {
        z-index: 1;
      }

      .carousel-item-content {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        background-size: cover !important;

        .select-cross {
          display: flex;
          display: none;
          cursor: pointer;

          width: 40px;
          height: 40px;

          align-items: center;
          justify-content: center;

          border-radius: 4px;
          border: 1px solid var(--cloudea-blue-5);
          font-size: 0.8rem;
          color: var(--cloudea-blue-5);
        }
      }

      &:hover {
        .select-cross {
          display: flex;
        }
      }
    }
  }
  .prev-btn,
  .next-btn {
    cursor: pointer;
    position: absolute;
    width: 30px;
    height: 60px;
    background-color: var(--cloudea-trans-blue-0);
    top: 60px;
    display: none;
  }

  .prev-btn {
    left: 0;
  }

  .next-btn {
    right: 0;
  }

  &:hover {
    .prev-btn,
    .next-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 5rem;
    }
  }
}
</style>
