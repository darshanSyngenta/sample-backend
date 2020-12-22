import { Input } from 'antd';
import { PasswordProps } from 'antd/lib/input/Password';
import { iff } from 'core/iff';
import get from 'lodash/get';
import React from 'react';
import styled from 'styled-components';

const errorCss = `&:hover {
  border:1px solid #ff4d4f;
};
&:focus {
border-color: #ff4d4f;
border-right-width: 1px!important;
outline: 0;
box-shadow: 0 0 0 2px rgba(245,34,45,.2);
};
border: 1px solid #ff4d4f !important`;

interface IInputPasswordProps extends PasswordProps {
  error?: any;
}

const FixInputPassword = styled(Input.Password)<IInputPasswordProps>`
  input {
    background-color: ${(props) => get(props, 'theme.colors.inputBackground')};
    border: ${(props) => `1px solid ${get(props, 'theme.colors.inputBorder')}`};
    box-sizing: border-box;
    border-radius: 4px;
    font-style: normal;
    font-weight: normal;
    font-size: ${(props) => get(props, 'theme.fontSizes.medium')};
    line-height: 17px;
    margin: 5px 0 5px;
    height: 40px;
    color: ${(props) => get(props, 'theme.colors.inputFontColor')};
    ${(props) => iff(props.error, errorCss)}
  }
  .syngenta-ant-input-affix-wrapper:hover .syngenta-ant-input:not(.syngenta-ant-input-disabled) {
    // border-color: #ffffff00 !important;
    // border-right-width: 0px !important;
  }
  .syngenta-ant-input-affix-wrapper:hover {
    // border-color: #ffffff00 !important;
  }
  .syngenta-ant-input-affix-wrapper:hover .syngenta-ant-input {
    // border-color: #ffffff00 !important;
  }
  .syngenta-ant-input:hover,
  .syngenta-ant-input:focus {
    // border-color: #ffffff00 !important;
    border-right-width: 1px !important;
    box-shadow: 0 0 0 0px !important;
  }
  .syngenta-ant-input-suffix i {
    color: #696f88;
  }
`;

export const InputPassword: React.FC<IInputPasswordProps> = (props) => {
  return (
    // For some reason, this is losing the theme prefix
    <FixInputPassword
      inputPrefixCls="syngenta-ant-input"
      prefixCls="syngenta-ant-input-password"
      {...props}
    />
  );
};
