<script setup lang="ts">
import * as signalR from '@microsoft/signalr'

const { showAnnounce } = storeToRefs(useTempSettingStore())

const connection = ref<signalR.HubConnection>()

const state = ref({
  userMsg: '123',
  messages: []
})

const txtMsgOnkeypress = async (e: any) => {
  if (e.keyCode != 13) return
  if (!connection.value) {
    return
  }
  await connection.value.invoke('SendMessage', state.value.userMsg)
  state.value.userMsg = ''
}

onMounted(async () => {
  connection.value = new signalR.HubConnectionBuilder()
    .withUrl('https://www.cloudea.work/ChatRoomHub', {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    })
    .withAutomaticReconnect()
    .build()
  await connection.value.start()
  connection.value.on('PublicMsgReceived', (msg: never) => {
    state.value.messages.push(msg)
  })
})
</script>

<template>
  <Teleport to="body">
    <Transition name="search">
      <div class="mask" v-show="showAnnounce">
        <button @click="txtMsgOnkeypress">xxx</button>
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
}
</style>
