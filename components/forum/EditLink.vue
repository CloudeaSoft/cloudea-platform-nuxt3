<template>
  <NuxtLinkLocale to="/forum/edit/post">
    <div class="edit-link">
      <div class="link-content">
        <Icon class="link-icon" name="lucide:text" />
      </div>
    </div>
  </NuxtLinkLocale>
</template>

<style lang="scss" scoped>
.edit-link {
  position: fixed;
  right: 40px;
  bottom: 50px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: var(--cloudea-blue-5);
  transition: all 0.3s;

  .link-content {
    line-height: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    .link-icon {
      font-size: 4rem;
      color: var(--cloudea-white);
    }
  }

  &:hover {
    box-shadow: 0px 0px 10px 0px;
    background: var(--cloudea-blue-4);
  }
}
</style>
