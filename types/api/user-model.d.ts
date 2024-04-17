export interface UserProfile {
  Id: string
  UserName: string
  DisplayName: string
  Signature?: string
  AvatarUrl?: string
  CoverImageUrl?: string
  Leaves: number
}

export interface UpdateUserProfileRequest {
  DisplayName: string
  Signature: string | undefined
}
