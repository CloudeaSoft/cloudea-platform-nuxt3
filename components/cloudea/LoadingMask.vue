<script setup lang="ts">
const { loading } = defineProps<{ loading: boolean }>()
</script>

<template>
  <Transition name="fade">
    <div class="loading-mask" v-show="loading">
      <div class="loading">
        <div><span></span></div>
        <div><span></span></div>
        <div><span></span></div>
      </div></div
  ></Transition>
</template>

<style lang="scss" scoped>
.loading-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--cloudea-trans-blue-3);

  display: flex;
  justify-content: center;
  align-items: center;

  .loading,
  .loading > div {
    position: relative;
    box-sizing: border-box;
  }

  .loading {
    display: block;
    font-size: 0;
    color: var(--cloudea-white);
  }

  .loading.la-dark {
    color: #333;
  }

  .loading > div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
  }

  .loading {
    width: 50px;
    height: 50px;
  }

  .loading > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;
    background: transparent;
    border-width: 2px;
    border-radius: 100%;
    opacity: 0;
    animation: ball-scale-ripple-multiple 1.25s 0s infinite
      cubic-bezier(0.21, 0.53, 0.56, 0.8);
  }

  .loading > div:nth-child(1) {
    animation-delay: 0s;
  }

  .loading > div:nth-child(2) {
    animation-delay: 0.25s;
  }

  .loading > div:nth-child(3) {
    animation-delay: 0.5s;
  }

  .loading.la-sm {
    width: 16px;
    height: 16px;
  }

  .loading.la-sm > div {
    width: 16px;
    height: 16px;
    border-width: 1px;
  }

  .loading.la-2x {
    width: 64px;
    height: 64px;
  }

  .loading.la-2x > div {
    width: 64px;
    height: 64px;
    border-width: 4px;
  }

  .loading.la-3x {
    width: 96px;
    height: 96px;
  }

  .loading.la-3x > div {
    width: 96px;
    height: 96px;
    border-width: 6px;
  }

  @keyframes ball-scale-ripple-multiple {
    0% {
      opacity: 1;
      transform: scale(0.1);
    }

    70% {
      opacity: 0.5;
      transform: scale(1);
    }

    95% {
      opacity: 0;
    }
  }
}
</style>
