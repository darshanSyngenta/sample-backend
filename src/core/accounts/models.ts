import { Locales, UUID } from 'core/utils/BasicModels';

export interface IUserAccount {
  name: string;
  authorities: any[];
  type: string;
  role: string;
  phone: string;
  locale: Locales;
  clock_format: string;
  tutorial_complete: boolean;
  login: string;
  email: string;
  auto_created_org_id: string;
  opt_ins: any[];
  id: UUID;
}
