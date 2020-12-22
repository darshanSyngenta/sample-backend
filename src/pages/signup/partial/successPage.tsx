import React from 'react';
import { useTranslation } from 'react-i18next';
import illustration_password from '../../../assets/images/illustration_password_ok.svg';

export const SuccessPage = (props: any) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="thankyou-msg">
        <img src={illustration_password} alt="password Logo" />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor egestas
            bibendum. Aliquam dapibus ligula non lorem aliquet consectetur. Aliquam erat volutpat.
          </p>
        </div>
      </div>
    </div>
  );
};
