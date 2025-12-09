export interface APIResponse {
  success: boolean;
  message: string;
  payload: object;
}

export interface TokenResponseData {
  accessToken: string;
  refreshToken: string;
}
