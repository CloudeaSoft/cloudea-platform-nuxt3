<script setup lang="ts">
import { sessionPostApi } from '~/api'
import { getMyProfileApi } from '~/api/user'
import { LoginType } from '~/types/api/user-model.d'

const { t } = useI18n()

const account = ref<string>()

const password = ref<string>()

const resetForm = () => {
  account.value = undefined
  password.value = undefined
}

const handleLogin = async () => {
  if (!account.value || !account.value?.trim()) {
    useMessage(t('login.loginForm.messages.noAccount'), 'warn')
    return
  }
  if (!password.value || !password.value?.trim()) {
    useMessage(t('login.loginForm.messages.noPassword'), 'warn')
    return
  }
  const tokenRes = await sessionPostApi(
    account.value,
    password.value,
    LoginType.UserNamePassword
  )
  if (tokenRes.value?.Status === false || tokenRes.value?.Data == undefined) {
    useMessage(t('login.loginForm.messages.loginFailed'), 'error')
    return
  }
  resetForm()
  useMessage(t('login.loginForm.messages.loginSuccess'), 'success')
  await handleLoginSuccess(tokenRes.value?.Data)
}

const handleLoginSuccess = async (token: string) => {
  useUserStore().setToken(token)
  var profile = await getMyProfileApi()
  if (profile.value == null) {
    useMessage('Unknown Error', 'error')
    return
  }
  useUserStore().updateUserProfile(profile.value.Data)
  navigateTo('/')
}
</script>

<template>
  <form class="content">
    <h1>{{ $t('login.login') }}</h1>
    <CloudeaFormInput
      type="text"
      v-model="account"
      autocomplete="username"
      :placeholder="$t('login.loginForm.accountPlaceholder')"
    />
    <CloudeaFormInput
      type="text"
      v-model="password"
      :placeholder="$t('login.loginForm.passwordPlaceholder')"
      autocomplete="current-password"
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
