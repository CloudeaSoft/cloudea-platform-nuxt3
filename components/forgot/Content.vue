<script setup lang="ts">
import { passwordPostApi, vercodePostApi } from '~/api'
import { VerificationCodeType } from '~/types/api/user-model.d'

const { t } = useI18n()

const email = ref<string>('')
const newPassword = ref<string>('')
const vercode = ref<string>('')

const handleReset = async () => {
  if (!email.value || !email.value.trim()) {
    useMessage(t('forgot.messages.noEmail'), 'warn')
    return
  }
  if (!newPassword.value || !newPassword.value.trim()) {
    useMessage(t('forgot.messages.noPassword'), 'warn')
    return
  }
  if (!vercode.value || !vercode.value.trim()) {
    useMessage(t('forgot.messages.noVercode'), 'warn')
    return
  }
  const response = await passwordPostApi({
    Email: email.value,
    NewPassword: newPassword.value,
    VerCode: vercode.value
  })
  if (!response.value?.Status) {
    useMessage(t('forgot.messages.resetFailed'), 'error')
    return
  }
  useMessage(t('forgot.messages.resetSuccess'), 'success')
  clearForm()
  navigateTo(useNuxtApp().$localePath('/login'))
}

const handleGetVercode = async () => {
  if (!email.value || !email.value?.trim()) {
    useMessage(t('forgot.messages.noEmail'), 'warn')
    return
  }
  await vercodePostApi(email.value, VerificationCodeType.ResetPasswordByEmail)
}

const clearForm = () => {
  email.value = ''
  newPassword.value = ''
  vercode.value = ''
}
</script>

<template>
  <div class="forgot-container">
    <div class="forgot-content">
      <h1>{{ $t('forgot.title') }}</h1>
      <CloudeaFormInput
        type="text"
        v-model="email"
        :placeholder="$t('forgot.form.emailPlaceholder')"
      />
      <CloudeaFormInput
        type="text"
        v-model="newPassword"
        :placeholder="$t('forgot.form.passwordPlaceholder')"
      />

      <div class="vercode">
        <CloudeaFormInput
          type="text"
          v-model="vercode"
          :placeholder="$t('forgot.form.vercodePlaceholder')"
        />
        <button class="vercode-getter" @click.prevent="handleGetVercode">
          {{ $t('login.registerForm.vercodeGetter') }}
        </button>
      </div>
      <CloudeaForumButton class="button" type="danger" @click="handleReset">
        {{ $t('forgot.reset') }}
      </CloudeaForumButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.forgot-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.95;

  .forgot-content {
    height: 500px;
    width: 370px;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    box-shadow: var(--cloudea-shadow-1);
    background-color: var(--cloudea-white);
    position: relative;

    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 0 50px;

    h1 {
      margin-bottom: 30px;
    }

    .vercode {
      display: flex;
      width: 100%;

      .vercode-getter {
        margin-left: 20px;
        margin-top: 8px;
        padding: 0 10px;
        height: 40px;
        border: 1px solid var(--cloudea-blue-5);
        border-radius: 10px;
        background-color: var(--cloudea-white);
        color: var(--cloudea-blue-5);
        text-wrap: nowrap;

        &:hover {
          background-color: var(--cloudea-blue-5);
          color: var(--cloudea-white);
        }

        &:active {
          transform: scale(95%);
        }
      }
    }

    .button {
      position: absolute;
      bottom: 10%;
    }
  }
}
</style>
