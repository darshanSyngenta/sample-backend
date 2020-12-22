import { ITINDeatils } from 'pages/products/partial//tinDetails';
import { IBankDeatils } from 'pages/products/partial/bankingDetails';
import { IAgroBonusProgramInfo } from 'pages/signup/models';
import React from 'react';

export const AgrobonusContext: any = React.createContext({} as IAgroBonusProgramInfo);

interface Props {
  children: React.ReactNode;
  bankDetails: IBankDeatils | null;
  tinDetails: ITINDeatils | null;
}
export const AgrobonusProvider = ({ bankDetails, tinDetails, children }: Props) => {
  return (
    <AgrobonusContext.Provider value={{ bankDetails, tinDetails }}>
      {children}
    </AgrobonusContext.Provider>
  );
};
