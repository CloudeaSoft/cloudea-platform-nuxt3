<script setup lang="ts">
interface ReplyProps {
  userId: string
  user?: string
  time: string
  content: string
  comment: object[]
}

const props = defineProps<ReplyProps>()
</script>

<template>
  <div class="reply-content">
    <div class="user-area">
      <ForumPostMainUserArea
        :user-id="userId"
        :user-name="user"
      ></ForumPostMainUserArea>
    </div>
    <div class="right-area">
      <div class="time-area">{{ time }}</div>
      <div class="content-area">{{ content }}</div>
      <div class="comment-area">{{ comment }}</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.reply-content {
  min-height: 200px;
  display: flex;
  border-bottom: 1px solid var(--cloudea-gray-4);
  overflow: hidden;

  .user-area {
    width: 150px;
    padding: 20px 0;
    box-shadow: 1px 0px 3px 0px rgba($color: #000000, $alpha: 0.35);
  }

  .right-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    padding-left: 20px;

    .content-area {
      flex: 1;
    }
  }
}
</style>
