<script setup lang="ts">
const user = useUserStore().profile
const displayName = ref(user?.DisplayName)
const userName = ref(user?.UserName)
const signature = ref(user?.Signature)
const leaves = ref(user?.Leaves)

const handleCommitSetting = async () => {
  console.log('xxxx')
}
</script>

<template>
  <div class="setting-container">
    <form class="setting-content clearfix">
      <div class="setting-content-item">
        <div class="item-label">
          {{ `${$t('account.setting.displayName')}&nbsp:&nbsp` }}
        </div>
        <div class="item-content">
          <CloudeaFormInput v-model="displayName" />
        </div>
      </div>
      <div class="setting-content-item">
        <div class="item-label">
          {{ `${$t('account.setting.userName')}&nbsp:&nbsp` }}
        </div>
        <div class="item-content">
          <span>{{ userName }}</span>
        </div>
      </div>
      <div class="setting-content-item">
        <div class="item-label">
          {{ `${$t('account.setting.signature')}&nbsp:&nbsp` }}
        </div>
        <div class="item-content">
          <CloudeaFormInput v-model="signature" />
        </div>
      </div>
      <div class="setting-content-item">
        <div class="item-label">
          {{ `${$t('account.setting.leaves')}&nbsp:&nbsp` }}
        </div>
        <div class="item-content">
          <span>{{ leaves }}</span>
        </div>
      </div>
      <div class="setting-content-item">
        <div class="item-content">
          <div class="padding-dom"></div>
          <div class="button-wrap">
            <CloudeaForumButton @click="handleCommitSetting">
              {{ $t('account.setting.commit') }}
            </CloudeaForumButton>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.setting-container {
  padding-top: 20px;

  .setting-content {
    display: flex;
    flex-direction: column;

    .setting-content-item {
      margin-bottom: 22px;
      width: 789px;

      display: flex;
      font-size: 1.125rem;

      .item-label {
        width: 95px;
        text-align: right;
        float: left;
        margin-right: 20px;
        line-height: 56px;
        vertical-align: middle;
      }

      .item-content {
        flex: 1;
        line-height: 56px;
        position: relative;

        .padding-dom {
          height: 39px;
          width: 789px;
          border-bottom: 1px solid var(--cloudea-font-color-0);
          margin-bottom: 40px;
        }

        .button-wrap {
          text-align: center;
        }
      }
    }
  }
}
</style>
