<script setup lang="ts">
import { putMyProfileApi } from '~/api/user'

const { profile } = storeToRefs(useUserStore())
let oldDisplayName = profile!.value!.DisplayName
let oldSignature = profile!.value!.Signature
const displayName = ref(profile!.value!.DisplayName)
const userName = ref(profile!.value!.UserName)
const signature = ref(profile!.value!.Signature)
const leaves = ref(profile!.value!.Leaves)

const handleCommitSetting = async () => {
  if (displayName.value == oldDisplayName && signature.value == oldSignature) {
    useMessage('', 'warn')
    return
  }
  if (displayName.value == undefined) {
    useMessage('', 'warn')
    return
  }

  var response = await putMyProfileApi({
    DisplayName: displayName.value,
    Signature: signature.value
  })
  if (!response.value?.Status) {
    useMessage('', 'error')
    return
  }
  useUserStore().updateUserProfile(response.value.Data)
  oldDisplayName = displayName.value
  oldSignature = signature.value
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

      padding-right: 50px;

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
