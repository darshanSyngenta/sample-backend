import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { AnchorLink } from 'components/anchor-link';
import { history, RoutePaths } from 'core/history';
import { iff } from 'core/iff';

const Container = styled.div`
  font-weight: normal;
  font-size: 12px;
  padding: 0;
  width: 100%;
  color: #696F88'
`;

interface ILoginCreateAccountLinkProps {
  isLogin: boolean;
}

export const LoginCreateAccountLink: React.FC<ILoginCreateAccountLinkProps> = (props) => {
  const { t } = useTranslation();

  if (['production'].includes(process.env.envName!)) {
    return null;
  }
  return (
    <div className="account-link">
      <span>
        {iff(props.isLogin, t('Already have an account?'), t("Don't have an account yet?"))}
      </span>
      <AnchorLink
        className="account-create-link"
        onClick={() => {
          if (props.isLogin) {
            history.push(RoutePaths.LOGIN());
          } else {
            history.push(RoutePaths.SIGNUP());
          }
        }}
      >
        {iff(props.isLogin, t('Sign in'), t('Create your account'))}
      </AnchorLink>
    </div>
  );
};

LoginCreateAccountLink.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};
