<script setup lang="ts">
import * as signalR from '@microsoft/signalr'

const { showAnnounce } = storeToRefs(useTempSettingStore())

showAnnounce.value = true

const connection = ref<signalR.HubConnection>()

const userMsg = ref<string>('')
const msgHistory = ref<string[]>(['消息列表'])

const txtMsgOnkeypress = async (e: KeyboardEvent) => {
  if (!connection.value) return

  await connection.value.invoke('SendMessage', userMsg.value)

  userMsg.value = ''
}

onMounted(async () => {
  connection.value = new signalR.HubConnectionBuilder()
    .withUrl('https://api.cloudea.work/ChatRoomHub', {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    })
    .withAutomaticReconnect()
    .build()
  await connection.value.start()
  connection.value.on('PublicMsgReceived', (data) => {
    console.log(data)
    msgHistory.value.push(data)
  })
})
</script>

<template>
  <Teleport to="body">
    <Transition name="search">
      <div class="mask" v-show="showAnnounce">
        <input
          type="text"
          v-model="userMsg"
          @keypress.enter="txtMsgOnkeypress"
        />
        <div>
          <ul>
            <li v-for="(msg, index) in msgHistory" :key="index">
              {{ msg }}
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;

  display: flex;
  justify-content: center;

  transition: opacity 0.3s ease-in-out;
  background-color: var(--cloudea-mask-color-0);

  button {
    height: 100px;
  }

  input {
    height: 100px;
  }
}
</style>
