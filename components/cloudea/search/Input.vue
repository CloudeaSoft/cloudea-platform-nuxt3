<script setup lang="ts">
const searchValue = ref<string>()

const inputActive = ref<boolean>()

const onInputFocus = () => {
  inputActive.value = true
}
const onInputBlur = () => {
  inputActive.value = false
}

const handleSearch = () => {
  useMessage('', 'success')
}
</script>

<template>
  <div class="search-input-area">
    <div class="search-input-container">
      <form :class="['search-input-content', inputActive ? 'active' : '']">
        <div class="search-input-content__input">
          <input
            type="text"
            @focus="onInputFocus"
            @blur="onInputBlur"
            @keydown.enter="handleSearch"
            v-model="searchValue"
          />
        </div>
        <div class="search-input-content__btn">
          <Icon name="lucide:search" />
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-input-area {
  width: 100%;
  height: 60px;

  .search-input-container {
    position: absolute;
    top: 0;

    height: 60px;
    width: 100%;
    padding: 10px;

    .search-input-content {
      width: 100%;
      height: 100%;

      padding-right: 10px;
      background-color: var(--cloudea-white);

      align-items: center;
      display: flex;
      justify-content: flex-end;

      border-radius: 20px;
      position: relative;

      border: 2px solid var(--cloudea-blue-2);
      transition: border 0.6s;

      &.active {
        border-color: var(--cloudea-blue-5);
      }

      .search-input-content__input {
        flex: 1;

        input {
          width: 100%;
          background-color: transparent;
          padding: 12px 10px 12px 16px;
          border: none;
          outline: none;
          -webkit-appearance: none;
          appearance: none;
        }
      }

      .search-input-content__btn {
        cursor: pointer;

        position: relative;
        min-width: 28px;
        margin: auto;
        width: 5%;
        max-height: 23px;
        height: 100%;

        color: var(--cloudea-font-color-3);

        svg {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
}
</style>
