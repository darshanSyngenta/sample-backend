import { ISODateString, UUID } from 'core/utils/BasicModels';

export interface ISignupUserInfo {
  userName: string;
  email: string;
  mobileNumber: string;
  termsCheckbox: boolean;
  termsAccepetedOn: string;
  isPasswordValid: boolean;
  emailCheckbox: boolean;
  mobileCheckbox: boolean;
  password: string;
}

export interface IAdminConsoleProgramInfo {}
export interface IAgroBonusProgramInfo {
  hedgingLevelSelected: boolean;
}

export interface IGrowthProgramInfo {
  hedgingLevelSelected: boolean;
}
interface IOptIn {
  type: 'EMAIL_OFFERS' | 'CELLPHONE_OFFERS' | 'DATA_SHARING';
  accepted_on: ISODateString;
}

export interface IAccountSignupDTO {
  readonly type: string;
  readonly email: string;
  phone: string;
  readonly name: string;
  readonly password: string;
  readonly locale: string;
  readonly invite_id: UUID;
  readonly org_creation_strategy: 'auto' | 'no' | 'force';
  // readonly terms_accepted_on: ISODateString;
  readonly opt_ins: IOptIn[];
}
