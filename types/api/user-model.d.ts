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

export interface ResetPasswordRequest {
  Email: string
  NewPassword: string
  VerCode: string
}

export interface ChangePasswordRequest {
  OldPassword: string
  NewPassword: string
}

export enum VerificationCodeType {
  LoginByEmail = 0,
  RegisterByEmail = 1,
  ResetPasswordByEmail = 2
}

export enum LoginType {
  UserNamePassword = 0,
  EmailPassword = 1,
  EmailVercode = 2
}
