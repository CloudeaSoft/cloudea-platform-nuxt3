import { render, h, ref } from 'vue'
import Message from '~/components/cloudea/alert/Message.vue'

type MessageType = `warn` | `success` | `error` | `info`

const messageCount = ref(0)

/**
 * @param {string} message - Message Json Key
 * @param {type} type - Type of the message, can be one of `warn`, `success`, `error`, or `info`
 * @param {number} duration - Display duration of the message, optional, default is 3 seconds
 */
export const useMessage = (
  message: string,
  type: MessageType,
  duration: number = 3000
) => {
  messageCount.value++
  render(null, document.body)

  const messageNode = h(Message, {
    message,
    type,
    duration
  })

  const time = duration

  setTimeout(() => {
    messageCount.value--

    if (!messageCount.value) {
      render(null, document.body)
    }
  }, time)

  render(messageNode, document.body)
}
