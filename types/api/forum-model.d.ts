import type { UserProfile } from './user-model'
import type { PageResponse } from './base-model'

export interface GetPostInfoResponse {
  PostInfo: PostInfo
  ReplyInfos: PageResponse<ReplyInfo>
}

export interface PostInfo {
  PostId: string
  Creator: string
  CreatorId: string
  Title: string
  Content: string
  ReplyCount: number
  ClickCount: number
  LikeCount: number
  DislikeCount: number
  CreateTime: string
  LastUpdatedTime?: string | null
}

export interface ReplyInfo {
  ReplyId: string
  Creator: string
  CreatorId: string
  Title?: string | null
  Content: string
  LikeCount: number
  DislikeCount: number
  CreateTime: string
  CommentCount: number
}

export interface CommentInfo {
  CommentId: string
  Creator: string
  CreatorId: string
  Content: string
  LikeCount: number
  DislikeCount: number
  CreateTime: string
}

declare type ForumRecommendPostList = List<PostInfo>

export interface ForumSection {
  Id: string
  MasterUserId: string
  Name: string
  Statement: string
  ClickCount: number
  TopicCount: number
  CreatedOnUtc: string
  ModifiedOnUtc?: string
}

export interface CreatePostRequest {
  SectionId: string
  Title: string
  Content: string
}

export interface ForumPost {
  Id: string
  ParentSectionId: string
  OwnerUserId: string
  OwnerUser: UserProfile
  Title: string
  Content: string
  ClickCount: number
  LikeCount: number
  DislikeCount: number
  LastClickTime: string
  LastEditTime: string | null
  CreatedOnUtc: string
  ModifiedOnUtc: string | null
}
