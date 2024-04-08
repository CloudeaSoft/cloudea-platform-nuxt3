<script setup lang="ts">
// Check if param is undefined.
const isAbsent = (v: unknown): v is undefined => typeof v !== 'number'

type LayoutKey =
  | 'prev'
  | 'pager'
  | 'next'
  | 'jumper'
  | '->'
  | 'total'
  | 'sizes'
  | 'slot'

interface PaginationProps {
  pageSize?: number
  defaultPageSize?: number
  total: number
  pageCount?: number
  pagerCount?: number
  currentPage?: number
  defaultCurrentPage?: number
  layout?: string
  pageSizes?: number[]
  popperClass?: string
  prevText?: string
  prevIcon?: string
  nextText?: string
  nextIcon?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<PaginationProps>(), {
  pageSize: 10,
  defaultPageSize: 10,
  defaultCurrentPage: 1,
  layout: (
    ['prev', 'pager', 'next', 'jumper', '->', 'total'] as LayoutKey[]
  ).join(', '),
  pageSizes: () => [10, 20, 30, 40, 50, 100],
  popperClass: '',
  prevText: '',
  prevIcon: 'arrow-left',
  nextText: '',
  nextIcon: 'arrow-right'
})

const emit = defineEmits(paginationEmits)

const vnodeProps = getCurrentInstance()!.vnode.props || {}

const hasCurrentPageListener =
  'onUpdate:currentPage' in vnodeProps ||
  'onUpdate:current-page' in vnodeProps ||
  'onCurrentChange' in vnodeProps

const hasPageSizeListener =
  'onUpdate:pageSize' in vnodeProps ||
  'onUpdate:page-size' in vnodeProps ||
  'onSizeChange' in vnodeProps

const innerPageSize = ref(
  isAbsent(props.defaultPageSize) ? 10 : props.defaultPageSize
)
const innerCurrentPage = ref(
  isAbsent(props.defaultCurrentPage) ? 1 : props.defaultCurrentPage
)
const pageSizeBridge = computed({
  get() {
    return isAbsent(props.pageSize) ? innerPageSize.value : props.pageSize
  },
  set(v: number) {
    if (isAbsent(props.pageSize)) {
      innerPageSize.value = v
    }
    if (hasPageSizeListener) {
      emit('update:page-size', v)
      emit('size-change', v)
    }
  }
})

const pageCountBridge = computed<number>(() => {
  let pageCount = 0
  if (!isAbsent(props.pageCount)) {
    pageCount = props.pageCount
  } else if (!isAbsent(props.total)) {
    pageCount = Math.max(1, Math.ceil(props.total / pageSizeBridge.value))
  }
  return pageCount
})

const currentPageBridge = computed<number>({
  get() {
    return isAbsent(props.currentPage)
      ? innerCurrentPage.value
      : props.currentPage
  },
  set(v) {
    let newCurrentPage = v
    console.log('New:', newCurrentPage)
    if (v < 1) {
      newCurrentPage = 1
    } else if (v > pageCountBridge.value) {
      newCurrentPage = pageCountBridge.value
    }
    console.log('New:', newCurrentPage)
    console.log(isAbsent(props.currentPage))

    if (isAbsent(props.currentPage)) {
      console.log(1)

      innerCurrentPage.value = newCurrentPage
    }
    console.log('Inner:', innerCurrentPage.value)
    if (hasCurrentPageListener) {
      emit('update:current-page', newCurrentPage)
      emit('current-change', newCurrentPage)
    }
  }
})

watch(pageCountBridge, (val) => {
  if (currentPageBridge.value > val) currentPageBridge.value = val
})

watch(
  [currentPageBridge, pageSizeBridge],
  (value) => {
    emit('change', ...value)
  },
  { flush: 'post' }
)

function handleCurrentChange(val: number) {
  currentPageBridge.value = val
}

function handleSizeChange(val: number) {
  pageSizeBridge.value = val
  const newPageCount = pageCountBridge.value
  if (currentPageBridge.value > newPageCount) {
    currentPageBridge.value = newPageCount
  }
}

function prev() {
  if (props.disabled) return
  currentPageBridge.value -= 1
  emit('prev-click', currentPageBridge.value)
}

function next() {
  if (props.disabled) return
  currentPageBridge.value += 1
  emit('next-click', currentPageBridge.value)
}

provide('pagenation', {
  pageCount: pageCountBridge,
  disabled: computed(() => props.disabled),
  currentPage: currentPageBridge,
  changeEvent: handleCurrentChange,
  handleSizeChange
})
</script>

<script lang="ts">
const isNumber = (val: any): val is number => typeof val === 'number'

const paginationEmits = {
  'update:current-page': (val: number) => isNumber(val),
  'update:page-size': (val: number) => isNumber(val),
  'size-change': (val: number) => isNumber(val),
  change: (currentPage: number, pageSize: number) =>
    isNumber(currentPage) && isNumber(pageSize),
  'current-change': (val: number) => isNumber(val),
  'prev-click': (val: number) => isNumber(val),
  'next-click': (val: number) => isNumber(val)
}
</script>

<template>
  <div class="cloudea-pagination">
    <CloudeaPaginationComponentsPrev
      @click="prev"
      :current-page="currentPageBridge"
      :page-count="pageCountBridge"
      :prev-text="props.prevText"
      :prev-icon="props.prevIcon"
      :disabled="props.disabled"
    ></CloudeaPaginationComponentsPrev>
    <CloudeaPaginationComponentsPager
      @change="handleCurrentChange"
      :current-page="currentPageBridge"
      :page-count="pageCountBridge"
      :pager-count="props.pagerCount"
      :disabled="props.disabled"
    >
    </CloudeaPaginationComponentsPager>
    <CloudeaPaginationComponentsNext
      @click="next"
      :current-page="currentPageBridge"
      :page-count="pageCountBridge"
      :next-text="props.nextText"
      :next-icon="props.nextIcon"
      :disabled="props.disabled"
    ></CloudeaPaginationComponentsNext>
  </div>
</template>

<style lang="scss" scoped>
.cloudea-pagination {
  display: flex;
  align-items: center;
  font-weight: 400;
  white-space: nowrap;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    min-width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    background: var(--cloudea-trans-white-5);
    padding: 0 4px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    text-align: center;
    box-sizing: border-box;

    &:disabled {
      cursor: not-allowed;
    }
  }
}
</style>
