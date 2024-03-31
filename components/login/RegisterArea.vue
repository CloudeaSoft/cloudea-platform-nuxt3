<script setup lang="ts">
import { vercodePostApi } from '@/api'
import { registerTokenPostApi, userPostApi } from '~/api/identity'

const i18n = useI18n()

const username = ref()
const email = ref()
const password = ref()
const vercode = ref()

const resetForm = () => {
  username.value = undefined
  email.value = undefined
  password.value = undefined
  vercode.value = undefined
}

const handleGetVercode = async () => {
  await vercodePostApi(email.value, 1)
}

const handleRegister = async () => {
  var token = await registerTokenPostApi(email.value, vercode.value)
  if (token == null) {
    return
  }
  var userIdRes = await userPostApi(
    token.value!.Data,
    username.value,
    email.value,
    password.value
  )
  if (userIdRes.value?.Data == null) {
    return
  }
  resetForm()
  handleRegisterSuccess()
  useMessage(i18n.t('login.registerForm.messages.registerSuccess'), 'success')
}

const handleRegisterSuccess = () => {
  emits('success', true)
}

const emits = defineEmits<{
  success: [success: boolean]
}>()
</script>

<template>
  <form class="content">
    <h1>{{ $t('login.register') }}</h1>
    <LoginFormInput
      type="text"
      v-model="username"
      :placeholder="$t('login.registerForm.usernamePlaceholder')"
      :show-password="false"
    />
    <LoginFormInput
      type="text"
      v-model="email"
      :placeholder="$t('login.registerForm.emailPlaceholder')"
    />
    <LoginFormInput
      type="text"
      v-model="password"
      :placeholder="$t('login.registerForm.passwordPlaceholder')"
    />
    <div class="vercode">
      <LoginFormInput
        type="text"
        v-model="vercode"
        :placeholder="$t('login.registerForm.vercodePlaceholder')"
      />
      <button class="vercode-getter" @click.prevent="handleGetVercode">
        {{ $t('login.registerForm.vercodeGetter') }}
      </button>
    </div>
    <LoginForumButton class="button" @click="handleRegister">
      {{ $t('login.register') }}
    </LoginForumButton>
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
</style>
