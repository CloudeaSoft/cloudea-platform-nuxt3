<script setup lang="ts">
const isLoginPanel = ref<boolean>(true)
const handleRegisterSuccess = () => {
  isLoginPanel.value = true
}
</script>

<template>
  <div class="login-container">
    <div :class="isLoginPanel ? `login-content` : `login-content active`">
      <div class="change-mode" @click="isLoginPanel = !isLoginPanel">
        {{ isLoginPanel ? $t('login.register') : $t('login.login') }}
      </div>
      <div class="back-area"></div>
      <div class="login-area">
        <LoginArea></LoginArea>
      </div>
      <div class="register-area">
        <LoginRegisterArea @success="handleRegisterSuccess"></LoginRegisterArea>
      </div>
      <div class="cover-area">
        <div class="cover-content">
          <div class="cover left">
            <h2>{{ $t('login.registerWords') }}</h2>
            <LoginForumButton
              class="button"
              type="danger"
              @click="isLoginPanel = true"
            >
              {{ $t('login.login') }}
            </LoginForumButton>
          </div>
          <div class="cover right">
            <h2 style="top: 10px">
              {{ $t('login.loginWords') }}
            </h2>
            <LoginForumButton
              class="button"
              type="danger"
              @click="isLoginPanel = false"
            >
              {{ $t('login.register') }}
            </LoginForumButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.login-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.95;
}

.login-content {
  height: 500px;
  width: 740px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  background: no-repeat top center url(/public/bg/pc-6.webp);
  background-size: cover;
  box-shadow: var(--cloudea-shadow-1);

  & .login-area,
  & .register-area,
  & .back-area {
    width: 50%;
    height: 100%;
    position: absolute;
    transition:
      transform 0.6s ease-in-out,
      opacity 0.6s ease-in-out;
  }

  .back-area {
    background-color: var(--cloudea-white);
  }

  .change-mode {
    cursor: pointer;
    font-size: 1.33rem;
    color: var(--cloudea-blue-5);
    border-bottom: 2px solid var(--cloudea-blue-5);
    position: absolute;
    right: 20px;
    top: 20px;
    display: none;

    z-index: 6;
  }
}

.cover-area {
  left: 50%;
  top: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: absolute;

  .cover-content {
    left: -100%;
    position: relative;
    width: 200%;
    height: 100%;

    .cover {
      position: absolute;
      background-color: var(--cloudea-trans-white-5);
      top: 0;
      height: 100%;
      width: 50%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      align-items: center;

      h2 {
        margin-top: 150px;
      }

      .button {
        position: absolute;
        bottom: 10%;
      }
    }

    .right {
      right: 0;
    }
  }
}

.login-content {
  .back-area {
    z-index: 2;
  }

  .login-area {
    opacity: 1;
    z-index: 4;
  }

  .register-area {
    opacity: 0;
    z-index: 3;
  }

  &.active {
    .back-area {
      transform: translateX(100%);
    }

    .login-area {
      transform: translateX(100%);
      opacity: 0;
      z-index: 3;
    }
    .register-area {
      transform: translateX(100%);
      opacity: 1;
      z-index: 4;
    }
  }

  & * {
    transition: transform 0.6s ease-in-out;
  }

  .left {
    transform: translateX(-20%);
  }

  .right {
    transform: translate(0);
  }

  .cover-content {
    transform: translate(0);
  }

  &.active {
    .cover-area {
      transform: translate(-100%);
    }

    .left {
      transform: translate(0);
    }

    .right {
      transform: translate(20%);
    }

    .cover-content {
      transform: translate(50%);
    }
  }
}

@media (max-width: 600px) {
  .login-content {
    background-image: none !important;
    width: 370px;

    .change-mode {
      display: block;
    }

    .back-area {
      width: 100%;
    }

    .login-area {
      width: 100%;
    }

    .register-area {
      width: 100%;
    }

    .cover-area {
      display: none;
    }

    &.active * {
      transform: translate(0) !important;
    }
  }
}
</style>
