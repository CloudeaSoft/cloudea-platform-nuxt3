<script setup lang="ts">
const i18n = useI18n()

const username = ref()
const email = ref()
const password = ref()
const vercode = ref()

const handleRegister = () => {
  useMessage(i18n.t('login.registerForm.messages.registerSuccess'), 'success')
}
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
    <LoginFormInput
      type="text"
      v-model="vercode"
      :placeholder="$t('login.registerForm.vercodePlaceholder')"
    />
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

  .button {
    position: absolute;
    bottom: 10%;
  }
}
</style>
