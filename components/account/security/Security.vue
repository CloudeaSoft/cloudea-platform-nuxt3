<script setup lang="ts">
import { passwordPutApi } from '~/api'

const oldPwd = ref()
const newPwd = ref()
const newPwdRepeat = ref()

const checkPasswordRequest = (): boolean => {
  if (!oldPwd.value) {
    useMessage('', 'warn')
    return false
  }
  if (!newPwd.value) {
    useMessage('', 'warn')
    return false
  }
  if (!newPwdRepeat.value) {
    useMessage('', 'warn')
    return false
  }
  if (!(newPwd.value === newPwdRepeat.value)) {
    useMessage('', 'warn')
    return false
  }
  return true
}

const passwordRequestStatus = computed((): boolean => {
  if (!oldPwd.value) {
    return false
  }
  if (!newPwd.value) {
    return false
  }
  if (!newPwdRepeat.value) {
    return false
  }
  if (!(newPwd.value === newPwdRepeat.value)) {
    return false
  }
  return true
})

const clearPasswordRequest = () => {
  oldPwd.value = undefined
  newPwd.value = undefined
  newPwdRepeat.value = undefined
}

const handleChangePassword = async () => {
  if (!checkPasswordRequest()) {
    return
  }

  var response = await passwordPutApi({
    OldPassword: oldPwd.value,
    NewPassword: newPwd.value
  })

  if (!response.value?.Status) {
    useMessage('', 'error')
    return
  }
  if (!response.value.Data) {
    useMessage('', 'error')
    return
  }
  useUserStore().setToken(response.value.Data)
  useMessage('', 'success')
  clearPasswordRequest()
}
</script>

<template>
  <ul class="security-container">
    <li class="security-content">
      <div class="security-content-item">
        <div class="item-label">
          {{ `${$t('account.security.password.oldPassword')}&nbsp:&nbsp` }}
        </div>
        <div class="item-content">
          <CloudeaFormInput v-model="oldPwd" />
        </div>
      </div>
      <div class="security-content-item">
        <div class="item-label">
          {{ `${$t('account.security.password.newPassword')}&nbsp:&nbsp` }}
        </div>
        <div class="item-content">
          <CloudeaFormInput v-model="newPwd" />
        </div>
      </div>
      <div class="security-content-item">
        <div class="item-label">
          {{
            `${$t('account.security.password.newPasswordRepeat')}&nbsp:&nbsp`
          }}
        </div>
        <div class="item-content">
          <CloudeaFormInput v-model="newPwdRepeat" />
        </div>
      </div>
      <div class="security-content-item">
        <div class="item-content">
          <div class="button-wrap">
            <CloudeaForumButton
              @click="handleChangePassword"
              :type="passwordRequestStatus ? 'success' : 'danger'"
            >
              {{ $t('account.setting.commit') }}
            </CloudeaForumButton>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.security-container {
  padding-top: 20px;

  .security-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .security-content-item {
      margin-bottom: 22px;
      width: 450px;

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

        .button-wrap {
          text-align: center;
        }
      }
    }
  }
}
</style>
