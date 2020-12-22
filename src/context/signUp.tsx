import { ISignupUserInfo } from 'pages/signup/models';
import { ICorporateDetails } from 'pages/signup/partial/corporateDetails';
import { IOrganizationDetails } from 'pages/signup/partial/organization';
import React from 'react';

export const SignupContext: any = React.createContext({} as ISignupUserInfo);

interface Props {
  children: React.ReactNode;
  organizationFormValues: IOrganizationDetails | null;
  corporateFormValues: ICorporateDetails | null;
}
export const SignUpProvider = ({
  organizationFormValues,
  corporateFormValues,
  children,
}: Props) => {
  return (
    <SignupContext.Provider value={{ organizationFormValues, corporateFormValues }}>
      {children}
    </SignupContext.Provider>
  );
};
