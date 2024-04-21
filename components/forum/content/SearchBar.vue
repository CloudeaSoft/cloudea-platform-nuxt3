<template>
  <div class="search-container">
    <div class="search-content cloudea-area">
      <Icon class="search-icon" name="lucide:search"></Icon>
      <input class="search-input" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.search-container {
  position: sticky;
  top: 80px;

  width: 100%;
  //   background-color: #fff;
  height: 50px;
  margin-bottom: 10px;
  z-index: 100;

  .search-content {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    padding: 10px 20px;

    .search-icon {
      font-size: 1.8rem;
      transition:
        font-size 0.3s,
        color 0.6s;
      cursor: pointer;

      &:hover {
        font-size: 2.4rem;
        color: var(--cloudea-blue-5);
      }
    }

    .search-input {
      width: 100%;
      margin-left: 20px;
      background: none;
      border: none;
      color: var(--cloudea-font-color-3);
      border-bottom: 2px solid var(--cloudea-trans-blue-2);
      font-size: 1.33rem;
      padding-bottom: 2px;
      transition: border 0.6s;

      &:focus {
        border-color: var(--cloudea-blue-5);
      }
    }
  }
}
</style>
