<script setup lang="ts">
const i18n = useI18n()

const account = ref()

const password = ref()

const handleLogin = () => {
  useMessage(i18n.t('login.loginForm.messages.loginSuccess'), 'success')
}
</script>

<template>
  <form class="content">
    <h1>{{ $t('login.login') }}</h1>
    <LoginFormInput
      type="text"
      v-model="account"
      :placeholder="$t('login.loginForm.accountPlaceholder')"
    />
    <LoginFormInput
      type="text"
      v-model="password"
      :placeholder="$t('login.loginForm.passwordPlaceholder')"
    />
    <span>
      <NuxtLinkLocale to="/forgot">
        {{ $t('login.loginForm.forgotPassword') }}
      </NuxtLinkLocale>
    </span>
    <LoginForumButton class="button" type="success" @click="handleLogin">
      {{ $t('login.login') }}
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
