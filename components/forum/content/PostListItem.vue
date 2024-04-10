<script setup lang="ts">
import type { ForumPost } from '~/types/api/forum-model.d'

const link = () => `/forum/posts/${Id}`

const props = defineProps<{
  post: ForumPost
}>()

const {
  Id,
  OwnerUserId,
  OwnerUser,
  Title,
  Content,
  ClickCount,
  LikeCount,
  DislikeCount,
  LastClickTime,
  LastEditTime,
  CreatedOnUtc
} = props.post
</script>

<template>
  <div class="content-wrap">
    <div class="content-main">
      <div class="title-row">
        <NuxtLinkLocale class="title" :to="link()">{{ Title }}</NuxtLinkLocale>
      </div>
      <div class="abstract">
        <NuxtLinkLocale :to="link()">
          <div>
            {{ Content }}
          </div>
        </NuxtLinkLocale>
      </div>
      <div class="entry-footer">
        <ul class="action-list">
          <li class="item meta-container">
            <a class="user-info" href="">
              <div class="user-popover">{{ OwnerUserId }}</div>
            </a>
            <div class="footer-divider"></div>
          </li>
          <li class="item date">
            {{ getLocaleTime(CreatedOnUtc) }}
            <div class="footer-divider"></div>
          </li>
          <li class="item view">
            <svg
              class="view-icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.90078 2.80078C4.49278 2.80078 1.74745 6.11672 0.800781 7.77469C1.74745 9.58339 4.49278 13.2008 7.90078 13.2008C11.3088 13.2008 14.0541 9.58339 15.0008 7.77469C14.0541 6.11672 11.3088 2.80078 7.90078 2.80078Z"
                stroke="currentColor"
              ></path>
              <circle
                cx="7.89922"
                cy="8.00078"
                r="2.2"
                stroke="currentColor"
              ></circle>
            </svg>
            <span>{{ ClickCount }}</span>
          </li>
          <li class="item like">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="liked-icon"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.56162 1.16952C7.66569 1.09661 7.78195 1.06124 7.88247 1.0912C7.97653 1.11923 8.23851 1.25916 8.50988 1.96799C8.64419 2.31881 8.9356 3.2424 8.42155 5.05431C8.29751 5.49152 8.61394 5.95303 9.09259 5.95971L12.492 6.00716L12.492 6.00721H12.4991C12.6049 6.00721 12.7228 6.01986 12.8134 6.05898C12.8544 6.07671 12.8815 6.09639 12.8999 6.116C12.9166 6.13375 12.9368 6.16247 12.9515 6.21636C12.9848 6.33784 13.0228 6.74712 12.9473 7.42262C12.874 8.07857 12.698 8.94479 12.341 9.9598C12.0424 10.8088 11.6601 11.5292 11.0684 12.4879C11.0558 12.5052 11.0462 12.5197 11.0418 12.5265L11.0404 12.5285C11.0292 12.5454 11.0242 12.5531 11.018 12.5618C11.0076 12.5764 11.0018 12.582 10.9983 12.585C10.996 12.587 10.9908 12.5912 10.9777 12.5959C10.9638 12.6009 10.9311 12.61 10.8706 12.61H4.56278L4.56373 5.58489C4.87126 5.41901 5.19881 5.20128 5.54112 4.84059C5.93883 4.42152 6.33789 3.8294 6.76254 2.94183C6.84974 2.75957 6.91745 2.55962 6.97574 2.37762C6.99264 2.32486 7.0087 2.27379 7.02438 2.22393L7.02439 2.22389C7.066 2.09158 7.10495 1.96776 7.14985 1.84312C7.2758 1.49352 7.40247 1.28101 7.56162 1.16952ZM9.45205 1.60729C9.13229 0.772086 8.70208 0.282772 8.17063 0.124374C7.64564 -0.0320981 7.20308 0.188912 6.98278 0.343248C6.55169 0.64525 6.33837 1.11908 6.20071 1.5012C6.14817 1.64705 6.10002 1.80016 6.05661 1.93824C6.0422 1.98405 6.02832 2.02821 6.01496 2.0699C5.95791 2.24804 5.90763 2.39115 5.85248 2.50643C5.45683 3.3334 5.1121 3.8271 4.80935 4.14611C4.51322 4.45815 4.23983 4.6219 3.9473 4.76821C3.71095 4.88641 3.55494 5.12906 3.55491 5.40159L3.55388 12.9125C3.55383 13.3026 3.87002 13.6188 4.26008 13.6188H10.8706C11.2097 13.6188 11.4663 13.5113 11.6519 13.3535C11.7387 13.2797 11.7988 13.2043 11.8387 13.1484C11.8556 13.1248 11.8704 13.1025 11.8786 13.09L11.8813 13.0859L11.8826 13.0839L11.8955 13.0685L11.9142 13.0382C12.5304 12.0414 12.9578 11.247 13.2927 10.2945C13.6745 9.20895 13.8679 8.26811 13.9499 7.5347C14.0297 6.82084 14.009 6.25845 13.9246 5.95014C13.805 5.51285 13.5104 5.26112 13.2134 5.13284C12.9385 5.01407 12.661 4.99859 12.5028 4.99836L9.49071 4.95631C9.92962 3.15791 9.64796 2.11902 9.45205 1.60729ZM0.000800636 5.46783C-0.0181914 5.0652 0.303128 4.72836 0.706212 4.72836H1.75264C2.14266 4.72836 2.45883 5.04454 2.45883 5.43456V12.9442C2.45883 13.3342 2.14266 13.6504 1.75264 13.6504H1.06044C0.68335 13.6504 0.372791 13.3541 0.355024 12.9775L0.000800636 5.46783Z"
                fill="currentColor"
              ></path>
            </svg>
            <span>{{ LikeCount }}</span>
          </li>
        </ul>
        <div class="entry-footer-tags">
          <NuxtLinkLocale
            class="footer-tag footer-tag-only width-limited"
            to="/forum"
          >
            {{ 'Linux' }}
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
    <img src="" alt="" class="lazy thumb" v-if="false" />
  </div>
</template>

<style lang="scss" scoped>
.content-wrap {
  display: flex;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--cloudea-gray-4);
  width: 100%;
}

.content-main {
  flex: 1 1 auto;
}

.title-row {
  display: flex;
  margin-bottom: 2px;
}

.title {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: var(--cloudea-font-color-3);
  width: 100%;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.abstract {
  margin-bottom: 4px;
  font-weight: 400;
}

.abstract a {
  color: var(--cloudea-font-color-1);
  font-size: 13px;
  line-height: 22px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.entry-footer {
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
}

.action-list,
.action-list > .item {
  display: flex;
  align-items: center;
}

.action-list > .item {
  position: relative;
  margin-right: 24px;
  font-size: 13px;
  line-height: 20px;
  color: var(--cloudea-font-color-1);
  flex-shrink: 0;
}

.meta-container .user-info {
  max-width: 132px;
  font-size: 13px;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
}

.meta-container,
.meta-container .user-info {
  display: flex;
  align-items: center;
  color: var(--cloudea-font-color-1);
}

.meta-container .user-info .user-popover {
  display: inline;
  overflow: hidden;
  text-overflow: ellipsis;
}

.action-list > .item span {
  margin-left: 4px;
}

.action-list > .item.like:hover span {
  color: var(--cloudea-blue-5);
}

.action-list > .item.like:hover .liked-icon path {
  fill: var(--cloudea-blue-5);
}

.footer-divider {
  width: 1px;
  height: 12px;
  background: var(--cloudea-gray-4);
  margin: 0 -13px 0 12px;
}

.entry-footer,
.entry-footer-tags {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.footer-tag {
  background: var(--cloudea-trans-white-2);
  padding: 0 6px;
  border-radius: 2px;
  max-width: 72px;
  box-sizing: border-box;
  margin-left: 6px;
  color: var(--cloudea-font-color-1);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  min-height: 18px;
  line-height: 18px;
}

.footer-tag:hover {
  color: var(--cloudea-blue-5);
}

.footer-tag-only {
  max-width: 104px;
}

.footer-tag.width-limited {
  max-width: 65px;
}

/* img */
.thumb {
  flex: 0 0 auto;
  width: 108px;
  height: 72px;
  margin-left: 24px;
  border-radius: 4px;
  border: 1px solid;
}
</style>
