<script setup lang="ts">
// const { showSearchPanel } = storeToRefs(useTempSettingStore())

const showSearchPanel = ref(true)
</script>

<template>
  <Teleport to="body" :disabled="showSearchPanel">
    <Transition name="search">
      <div class="mask" v-if="showSearchPanel" @click="showSearchPanel = false">
        <div ref="container" class="container cloudea-area" @click.stop>
          <CloudeaSearchInput />
          <!--<KunSearchHistory v-if="!search.keywords" />

          <KunSearchResult :topics="topics" v-if="topics.length" />

          <span class="empty" v-if="!topics.length && search.keywords">
            {{ $t('home.header.emptyResult') }}
          </span> -->
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;

  display: flex;
  justify-content: center;

  transition: opacity 0.3s ease-in-out;
  background-color: var(--cloudea-mask-color-0);
}

.container {
  position: relative;
  width: 40vw;
  max-width: 500px;
  min-height: 200px;
  max-height: 600px;

  margin-top: 10vh;
  margin-bottom: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--cloudea-trans-white-5);
  border-radius: 20px;
  overflow-y: scroll;
}

.empty {
  display: flex;
  justify-content: center;
  color: var(--cloudea-blue-2);
  font-style: oblique;
  margin-top: 20px;
}

.search-enter-from {
  opacity: 0;
}

.search-leave-to {
  opacity: 0;
}

.search-enter-from .container,
.search-leave-to .container {
  transition: all 0.3s ease;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media (max-width: 1000px) {
  .container {
    width: 60vw;
  }
}

@media (max-width: 700px) {
  .container {
    width: 90vw;
  }
}
</style>
