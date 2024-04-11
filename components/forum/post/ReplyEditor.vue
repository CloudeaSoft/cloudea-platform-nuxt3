<script setup lang="ts">
import { MilkdownProvider } from '@milkdown/vue'
import { ProsemirrorAdapterProvider } from '@prosemirror-adapter/vue'
import { postReplyApi } from '~/api'

interface postProps {
  postId: string
}
const props = defineProps<postProps>()

defineEmits<{
  close: []
}>()

const replyContent = ref('')

const milkdownFocused = ref<boolean>(false)

const handleSave = (editorValue: string) => {
  replyContent.value = editorValue
}

const handleFocus = () => {
  milkdownFocused.value = true
}

const handleBlur = () => {
  milkdownFocused.value = false
}

const handlePublish = async () => {
  const response = await postReplyApi(props.postId, replyContent.value)
  if (!response.value || !response.value.Status || !response.value.Data) {
    return
  }
  navigateTo(useRoute().fullPath)
}
</script>

<template>
  <div class="post-reply-content">
    <div class="reply-title">
      <h2 class="title-text">{{ $t('回复') }}</h2>
      <CloudeaForumButton class="title-publish" @click="handlePublish">
        {{ $t('Commit') }}
      </CloudeaForumButton>
    </div>
    <div class="editor-container">
      <MilkdownProvider>
        <ProsemirrorAdapterProvider>
          <CloudeaMilkdownEditor
            @save="handleSave"
            @focus="handleFocus"
            @blur="handleBlur"
            v-model:editor-value="replyContent"
          />
        </ProsemirrorAdapterProvider>
      </MilkdownProvider>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-reply-content {
  height: 100%;
  border-radius: 10px;
  background-color: var(--cloudea-white);
  padding: 20px;

  .reply-title {
    height: 30px;
    display: flex;
    justify-content: space-between;

    .title-text {
      padding-left: 10px;
      line-height: 40px;
    }
  }

  .editor-container {
    margin-top: 20px;
    padding: 10px;
    height: calc(100% - 50px);
    border: 2px solid var(--cloudea-blue-5);
  }
}
</style>
