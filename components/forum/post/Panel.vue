<script setup lang="ts">
import {
  deletePostFavoriteApi,
  deletePostLikeApi,
  getPostFavoriteApi,
  getPostLikeApi,
  postPostFavoriteApi,
  postPostLikeApi
} from '~/api'

const { t } = useI18n()

interface PostPanelProps {
  postId: string
}

const props = defineProps<PostPanelProps>()

const like = ref<boolean>(false)
const favorite = ref<boolean>(false)

var likeResponse = await getPostLikeApi(props.postId)
like.value = !!likeResponse.value?.Data && likeResponse.value.Data.IsLike
var favoriteResponse = await getPostFavoriteApi(props.postId)
favorite.value = !!favoriteResponse.value?.Data

const likeClass = () => ['like', like.value ? 'active' : '']
const favoriteClass = () => ['favorite', favorite.value ? 'active' : '']

const emits = defineEmits<{
  reply: []
}>()

const handleReply = () => {
  emits('reply')
}

const handleLike = async () => {
  if (!like.value) {
    const response = await postPostLikeApi(props.postId)
    if (!response.value?.Data || !response.value.Status) {
      useMessage(t('forum.post.panel.like.failed'), 'error')
      return
    }
    like.value = true
    useMessage(t('forum.post.panel.like.success'), 'success')
  } else {
    const response = await deletePostLikeApi(props.postId)
    if (!response.value?.Status) {
      useMessage(t('forum.post.panel.nolike.failed'), 'error')
      return
    }
    like.value = false
    useMessage(t('forum.post.panel.nolike.success'), 'success')
  }
}

const handleFavorite = async () => {
  if (!favorite.value) {
    const response = await postPostFavoriteApi(props.postId)
    if (!response.value?.Data || !response.value.Status) {
      useMessage('forum.post.panel.favorite.failed', 'error')
      return
    }
    favorite.value = true
    useMessage('forum.post.panel.favorite.success', 'success')
  } else {
    const response = await deletePostFavoriteApi(props.postId)
    if (!response.value?.Status) {
      useMessage('forum.post.panel.nofavorite.failed', 'error')
      return
    }
    favorite.value = false
    useMessage('forum.post.panel.nofavorite.success', 'success')
  }
}

const handleShare = () => {
  try {
    // 获取当前地址
    const currentUrl = window.location.href

    // 复制到剪贴板
    navigator.clipboard.writeText(currentUrl)

    // 提示用户复制成功
    useMessage(t('forum.post.panel.copy.success'), 'success')
  } catch (err) {
    // 处理错误，比如浏览器不支持或用户拒绝权限
    useMessage(t('forum.post.panel.copy.failed'), 'error')
  }
}
</script>

<template>
  <div class="aside-container">
    <ul class="aside-list">
      <li class="reply" @click="handleReply">
        <Icon name="lucide:message-square" />
      </li>
      <li :class="likeClass()" @click="handleLike">
        <Icon name="ri:thumb-up-fill" v-if="like" />
        <Icon name="ri:thumb-up-line" v-else />
      </li>
      <li :class="favoriteClass()" @click="handleFavorite">
        <Icon name="material-symbols:kid-star-sharp" v-if="favorite" />
        <Icon name="material-symbols:kid-star-outline-sharp" v-else />
      </li>
      <li class="share" @click="handleShare">
        <Icon name="lucide:square-arrow-out-up-right" />
      </li>
      <li class="report">
        <NuxtLinkLocale to="/report">
          <Icon name="lucide:triangle-alert" />
        </NuxtLinkLocale>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.aside-container {
  // height: 100px;
  padding: 10px 15px;

  .aside-list {
    font-size: 2rem;

    li {
      cursor: pointer;
      margin: 20px 0;

      &:hover {
        color: var(--cloudea-blue-5);
        transform: scale(0.95);
      }

      &.active {
        color: var(--cloudea-blue-5);
      }
    }
  }
}
</style>
