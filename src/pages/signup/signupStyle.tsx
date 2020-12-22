import { Button as AntDButton } from 'antd';
import { iff } from 'core/iff';
import get from 'lodash/get';
import styled from 'styled-components';

export const MobileLabel = styled.div`
  font-size: ${(props) => get(props, 'theme.fontSizes.medium')};
  line-height: 17px;
  margin: 0 0 4px 4px;
  color: ${(props) => get(props, 'theme.colors.titleColor')};
`;

export const FormBody = styled.div`
  text-align: left;
  .sign-up-checkbox-layout {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .signup-checkbox {
    margin: 0.5em 0;
    font-size: 12px;
  }
  .signup-checkboxEmail {
    margin: 0.5em 0;
    font-size: 12px;
  }

  .signup-checkboxMobile {
    margin: 0 0 0 0;
    font-size: 12px;
    line-height: 20px;
    color: ${(props) => get(props, 'theme.colors.checkboxTextColor')};
  }
  .login-signup-button button {
    margin: 1em 0 0 1em;
  }
`;

export const CheckBoxdivStyle = styled.div`
  margin: 1em 0;
`;

export const SignupBtnStyle = styled(AntDButton)<{ type: any }>`
  margin: 2em 0 2em 1em;
  border-radius: 4px;
  width: 214px;
  height: 40px;
  border: ${(props) => `1px solid ${get(props, `theme.colors.${props.type || 'primary'}`)}`};
  background-color: ${(props) => get(props, `theme.colors.${props.type || 'primary'}`)};
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => get(props, 'theme.fontSizes.medium')};
  line-height: 17px;
  color: ${(props) => {
    return iff(
      props.type === 'secondary',
      get(props, 'theme.colors.fontSecondaryColor'),
      get(props, 'theme.colors.pageBackgroundPrimary')
    );
  }};
  float: right;
  &.ant-btn-primary[disabled] {
    background-color: #c1c5c8;
    color: #e8eaed;
  }
`;
