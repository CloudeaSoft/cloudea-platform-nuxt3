<script setup lang="ts">
import * as echarts from 'echarts'
import type { PoolInfo, RarityInfo } from '~/types/api/arknights-model'

const { data } = defineProps<{ data: PoolInfo }>()

type EChartsOption = echarts.EChartsOption

const echartRef = ref<HTMLElement>()

onMounted(async () => {
  await getEchart()
})

// 饼图相关 - 生成
const getEchart = async () => {
  await nextTick()
  try {
    var myChart = echarts.init(echartRef.value)
    var opt = initPoolOption(data)
    hideEmpty(opt)
    myChart.clear()
    myChart.setOption(opt, true)
    window.addEventListener(
      'resize',
      () => {
        myChart.resize()
      },
      { passive: true }
    )
  } catch (err) {
    console.log('生成图表时发送错误')
  }
}
// 饼图相关 - 隐藏值为0的条目的相关内容
const hideEmpty = (opt: EChartsOption) => {
  if (!Array.isArray(opt.series)) {
    return
  }
  type dataType = {
    data: RarityInfo[]
  }
  ;(opt.series![0] as dataType).data.forEach((element) => {
    // 添加属性，将内容设置为不显示
    if (element.value == 0) {
      if (Array.isArray(opt.legend)) {
        return
      }
      opt.legend!.selected![element.name] = false
      element.labelLine.show = false
      element.label.show = false
    }
  })
}
// 饼图相关 - 初始化的卡池图表参数对象
const initPoolOption = (poolData: PoolInfo): EChartsOption => {
  const option: echarts.EChartsOption = {
    title: {
      text: poolData.name,
      left: 'center',
      top: 25,
      textStyle: {
        color: '#000'
      }
    },
    grid: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      containLabel: true
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '20%',
      left: 'center',
      selected: {
        '6星': true,
        '5星': true,
        '4星': true,
        '3星': true
      }
    },
    series: [
      {
        // name: 'Access From',
        type: 'pie',
        radius: '50%',
        center: ['50%', '65%'],
        color: ['#ee5700', '#cc7a00', '#a231ff', '#40C5F1'],
        data: poolData.stars,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  return option
}
</script>

<template>
  <div class="card-container">
    <div class="card-content">
      <div class="echart">
        <div
          ref="echartRef"
          class="echart-main"
          :style="{ width: '328px', height: '330px' }"
        ></div>
        <div class="echart-text">
          <div>
            {{
              '合计 ' +
              data.total +
              ' 抽 已累计 ' +
              data.notSixStarCounter +
              ' 抽未出6星'
            }}
          </div>
          <div>
            {{
              '6星: ' +
              data.stars[0].value +
              ' [' +
              Math.trunc((data.stars[0].value / data.total) * 100) +
              '%]'
            }}
          </div>
          <div>
            {{
              '5星: ' +
              data.stars[1].value +
              ' [' +
              Math.trunc((data.stars[1].value / data.total) * 100) +
              '%]'
            }}
          </div>
          <div>
            {{
              '4星: ' +
              data.stars[2].value +
              ' [' +
              Math.trunc((data.stars[2].value / data.total) * 100) +
              '%]'
            }}
          </div>
          <div>
            {{
              '3星: ' +
              data.stars[3].value +
              ' [' +
              Math.trunc((data.stars[3].value / data.total) * 100) +
              '%]'
            }}
          </div>
          <div>
            <span>{{ '六星平均抽卡次数为: ' }}</span>
            <span v-if="data.sixStarList.length == 0">无</span>
            <span v-else>{{ data.sixAvg }}</span>
          </div>
          <div>
            <ul>
              <li style="display: inline-block">六星历史记录:</li>
              <li
                v-if="data.sixStarList.length == 0"
                style="display: inline-block; padding-left: 5px"
              >
                无
              </li>
              <li
                v-else
                v-for="(b, index) in data.sixStarList"
                :key="index"
                style="display: inline-block; padding-left: 5px"
              >
                {{ b.name + '[' + b.count + ']' }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  width: 300px;
  height: 500px;
  background-color: var(--cloudea-white);
  box-shadow: var(--cloudea-shadow-0);
  border-radius: 10px;

  .card-content {
    .echart {
      margin-bottom: 10px;
      /* border: 1px solid #999; */
      box-shadow: 10px 5px 10px #dbe8ff;
      border-radius: 5px;
      overflow: hidden;
    }

    .echart-text {
      padding-left: 60px;
      padding-top: 20px;
      padding-bottom: 40px;
      background-color: #eee;
    }

    -header h2 {
      font-size: 30px;
      background: linear-gradient(to right, pink 15%, blue);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }
}
</style>
