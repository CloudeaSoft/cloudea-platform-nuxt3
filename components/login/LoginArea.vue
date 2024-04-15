<script setup lang="ts">
import { sessionPostApi } from '~/api'
import { getMyProfileApi } from '~/api/user'

const i18n = useI18n()

const account = ref()

const password = ref()

const resetForm = () => {
  account.value = undefined
  password.value = undefined
}

const handleLogin = async () => {
  const tokenRes = await sessionPostApi(account.value, password.value, 0)
  if (tokenRes.value?.Status === false || tokenRes.value?.Data == undefined) {
    // 登录失败
    return
  }
  useUserStore().setToken(tokenRes.value?.Data!)
  resetForm()
  useMessage(i18n.t('login.loginForm.messages.loginSuccess'), 'success')
  await handleLoginSuccess()
}

const handleLoginSuccess = async () => {
  var profile = await getMyProfileApi()
  if (profile.value == null) {
    useMessage('Unknown Error', 'error')
    return
  }
  useUserStore().setUserProfile(profile.value.Data)
  navigateTo('/')
}
</script>

<template>
  <form class="content">
    <h1>{{ $t('login.login') }}</h1>
    <CloudeaFormInput
      type="text"
      v-model="account"
      :placeholder="$t('login.loginForm.accountPlaceholder')"
    />
    <CloudeaFormInput
      type="text"
      v-model="password"
      :placeholder="$t('login.loginForm.passwordPlaceholder')"
    />
    <span>
      <NuxtLinkLocale to="/forgot">
        {{ $t('login.loginForm.forgotPassword') }}
      </NuxtLinkLocale>
    </span>
    <CloudeaForumButton class="button" type="success" @click="handleLogin">
      {{ $t('login.login') }}
    </CloudeaForumButton>
  </form>
</template>
<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0 50px;

  h1 {
    margin-bottom: 30px;
  }

  .button {
    position: absolute;
    bottom: 10%;
  }

  span {
    margin-top: 20px;
    cursor: pointer;

    a {
      color: var(--cloudea-blue-5);
    }
  }
}
</style>
