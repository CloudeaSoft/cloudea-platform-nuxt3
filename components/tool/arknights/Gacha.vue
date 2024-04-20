<script setup lang="ts">
import { ChannelId } from '~/types/arknights.d'
import { gachaGetApi } from '~/api/arknights'
import { gachaHistoryTestData } from './gacha/TestData'
import type { Char, GachaItem, PoolInfo } from '~/types/api/arknights-model'
import { reverseArr } from '~/utils/array'

const { t } = useI18n()

// 账号令牌信息 - 保存在浏览器本地
const gachaTokenFull = ref(
  JSON.parse(localStorage.getItem('gachaTokenFull')!) || ''
)

// 服务器信息 - 保存在浏览器本地
const gachaChannelId = ref<ChannelId>(
  JSON.parse(localStorage.getItem('gachaChannelId')!) || ChannelId.Hypergraph
)

const showChart = ref<boolean>(false)
const showTable = ref<boolean>(false)

// 初始卡池数据
const tableData = ref<GachaItem[]>([])
// 分析结果
const analyzedData = ref<PoolInfo[]>([])
// 加载锁
const loadingCheck = ref(false)

// 总方法 - 获取所有记录 并 分析
const showGacha = async () => {
  // 数据校验
  if (gachaToken.value === '') {
    useMessage(t('tool.arknights.gachaHistory.messages.emptyToken'), 'warn')
    return
  }
  // 禁用页面
  loadingCheck.value = true
  // 初始化，获取并分析数据
  tableData.value = []
  try {
    var res = await getGacha()
    if (!res) {
      loadingCheck.value = false
      return
    }
    analyzeGacha()
    if (!showChart.value && !showTable.value) {
      showChart.value = true
    }
  } catch (err) {
    useMessage('', 'error')
    // 解锁页面
    loadingCheck.value = false
    return
  }
  // 解锁页面
  loadingCheck.value = false
}
// 请求数据 - 获取寻访记录
const getGacha = async () => {
  //获取记录
  var res = await gachaGetApi(gachaToken.value, gachaChannelId.value)
  if (!res.value || !res.value.Status) {
    useMessage(t('tool.arknights.gachaHistory.messages.invalidToken'), 'warn')
    return false
  }
  try {
    // 加入记录列表
    tableData.value = res.value?.Data.list!
    // tableData.value = tableData.value.concat(gachaHistoryTestData.Data.list)
    return true
  } catch (e) {
    // 提示
    useMessage(t('tool.arknights.gachaHistory.messages.emptyHistory'), 'warn')
    return false
  }
}
// 卡池分析 - 分析寻访记录
const analyzeGacha = () => {
  // 初始化
  analyzedData.value = []

  // 获取反转的卡池信息（由旧到新）
  const reversedTableData = reverseArr(tableData.value)
  // 依次扫描并填写相关数据
  reversedTableData.forEach((element) => {
    // 检查是否匹配到对应卡池
    var poolCheck = false

    // 根据卡池名称匹配后 -> 填写内容
    for (var index = 0; index < analyzedData.value.length; index++) {
      if (element.pool == analyzedData.value[index].name) {
        // 查询到对应卡池 -> 填写内容
        poolCheck = true
        // 向卡池对象填入内容
        editPool(index, element.chars)
      }
    }

    // 未查询到对应卡池 -> 新增卡池 -> 填写内容
    if (!poolCheck) {
      //新增卡池并获取到卡池的index
      const index = initPool(element.pool) - 1
      //向卡池对象填写内容
      editPool(index, element.chars)
    }
  })
  // 填写六星平均抽数
  analyzedData.value.forEach((element) => {
    var sixSum = 0
    element.sixStarList.forEach((sixStar) => {
      sixSum += sixStar.count
    })
    element.sixAvg = Math.trunc(sixSum / element.sixStarList.length)
  })
}
// 卡池分析 - 构造 新增卡池并返回卡池的index
const initPool = (name = '未知卡池') => {
  return analyzedData.value.push({
    name,
    total: 0,
    stars: [
      {
        value: 0,
        name: '6星',
        labelLine: { show: true },
        label: { show: true }
      },
      {
        value: 0,
        name: '5星',
        labelLine: { show: true },
        label: { show: true }
      },
      {
        value: 0,
        name: '4星',
        labelLine: { show: true },
        label: { show: true }
      },
      {
        value: 0,
        name: '3星',
        labelLine: { show: true },
        label: { show: true }
      }
    ],
    notSixStarCounter: 0,
    sixStarList: [],
    sixAvg: 0
  })
}
// 卡池分析 - 填写数据
const editPool = (index: number, chars: Char[] = []) => {
  chars.forEach((element) => {
    switch (element.rarity) {
      case 2: // 3星
        analyzedData.value[index].total++
        analyzedData.value[index].stars[3].value++
        analyzedData.value[index].notSixStarCounter++
        break
      case 3: // 4星
        analyzedData.value[index].total++
        analyzedData.value[index].stars[2].value++
        analyzedData.value[index].notSixStarCounter++
        break
      case 4: // 5星
        analyzedData.value[index].total++
        analyzedData.value[index].stars[1].value++
        analyzedData.value[index].notSixStarCounter++
        break
      case 5: // 6星 记录名字与抽数，计数器归零
        analyzedData.value[index].total++
        analyzedData.value[index].stars[0].value++
        analyzedData.value[index].sixStarList.push(
          initSix(element.name, analyzedData.value[index].notSixStarCounter + 1)
        )
        analyzedData.value[index].notSixStarCounter = 0
        break
      default: // 错误数据
        console.log('错误的数据: ' + element.name + '/' + element.rarity)
        break
    }
  })
}
// 卡池分析 - 构造 六星记录对象
const initSix = (name: string, count: number) => {
  return {
    name,
    count
  }
}

const gachaToken = computed(() => {
  // return JSON.parse(gachaTokenFull.value).data.content
  return gachaTokenFull.value
})

const analyzedDataCheck = computed(() => {
  return analyzedData.value.length === 0 ? true : false
})

watch(
  gachaTokenFull,
  (value) => {
    localStorage.setItem('gachaTokenFull', JSON.stringify(value))
  },
  { deep: true }
)

watch(
  gachaChannelId,
  (value) => {
    localStorage.setItem('gachaChannelId', JSON.stringify(value))
  },
  {
    deep: true
  }
)

const chartBoardRef = ref<HTMLElement>()
const chartBoardHeight = ref()

const onChartBoardLeave = () => {
  chartBoardHeight.value = chartBoardRef.value?.offsetHeight
  chartBoardRef.value!.style.overflow = 'hidden'
  setTimeout(function () {
    chartBoardRef.value!.style.height = '0px'
  }, 10)
}

const onChartBoardEnter = () => {
  chartBoardRef.value!.style.overflow = 'hidden'
  setTimeout(function () {
    chartBoardRef.value!.style.height = chartBoardHeight.value + 'px'
  }, 10)
}
</script>

<template>
  <ToolCard>
    <template #header>
      <div>{{ $t('tool.arknights.gachaHistory.title') }}</div>
    </template>
    <form class="gacha-header gacha-area">
      <textarea
        class="token"
        rows="5"
        :placeholder="$t('tool.arknights.gachaHistory.tokenPlaceholder')"
        v-model="gachaTokenFull"
      />
      <div class="action-line">
        <ToolArknightsGachaChannelSelector
          class="channel"
          v-model="gachaChannelId"
        />
        <CloudeaForumButton class="commit" @click="showGacha">
          {{ $t('tool.arknights.gachaHistory.generate') }}
        </CloudeaForumButton>
      </div>
      <CloudeaLoadingMask :loading="loadingCheck" />
    </form>
    <div class="gacha-body">
      <div class="gacha-chart gacha-area">
        <div class="gacha-chart__header">
          <div class="header-text">
            {{ $t('tool.arknights.gachaHistory.charts.title') }}
          </div>
          <div class="header-btn" v-if="analyzedData.length > 0">
            <Icon
              :class="{ 'active-btn': showChart }"
              name="lucide:chevron-down"
              @click="showChart = !showChart"
            />
          </div>
        </div>
        <Transition @leave="onChartBoardLeave" @enter="onChartBoardEnter">
          <div ref="chartBoardRef" class="gacha-chart__main" v-show="showChart">
            <div class="main-content">
              <ToolArknightsGachaChartCard
                v-for="pool in analyzedData"
                :key="pool.name"
                :data="pool"
              />
            </div>
          </div>
        </Transition>
      </div>
      <div class="gacha-history gacha-area">
        {{ $t('tool.arknights.gachaHistory.history.title') }}
      </div>
    </div>
  </ToolCard>
</template>

<style lang="scss" scoped>
.gacha-area {
  border: 1px solid #999;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
}

.gacha-header {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  .token {
    width: 100%;
    height: 100%;
    font-size: 1.25rem;
    resize: none;
    padding: 10px;

    border: 2px solid var(--cloudea-trans-blue-0);

    &:focus {
      border-color: var(--cloudea-blue-5);
    }
  }

  .action-line {
    margin-top: 10px;

    display: flex;
    justify-content: right;
    align-items: center;

    .channel {
      margin-right: 10px;
    }
  }
}

.gacha-body {
  .gacha-chart {
    .gacha-chart__header {
      display: flex;
      justify-content: space-between;

      .header-text {
        font-size: 1.5rem;
        font-weight: 700;
      }

      .header-btn {
        align-items: center;
        font-size: 1.5rem;

        svg {
          transition: transform 0.5s;
        }
      }
    }

    .gacha-chart__main {
      justify-content: center;
      width: 100%;
      display: flex;
      transition: height 0.5s;

      .main-content {
        margin: 20px;
        display: flex;
        overflow-x: scroll;
      }
    }
  }
}

.active-btn {
  transform: rotate(180deg);
}
</style>
