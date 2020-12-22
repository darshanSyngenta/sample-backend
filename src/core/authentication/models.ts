export const AuthenticationOptions = {
  redirectUri: process.env.REDIRECT_URL || '',
  clientId: 'dev-portal',
};

export interface IAuthTokenRequestDTO {
  readonly grant_type: 'authorization_code';
  readonly code: string;
  readonly redirect_uri: string;
  readonly client_id: string;
}

export interface IAuthTokenResponseDTO {
  readonly access_token: string;
  readonly refresh_token: string;
}

export const defaultAuthRequestParams: IAuthTokenRequestDTO = {
  grant_type: 'authorization_code',
  code: '',
  redirect_uri: AuthenticationOptions.redirectUri,
  client_id: AuthenticationOptions.clientId,
};
