import { Input as AntdInput } from 'antd';
import get from 'lodash/get';
import styled from 'styled-components';

interface IInputProps {
  error?: any;
}

export const Input = styled(AntdInput)<IInputProps>`
  background-color: ${(props) => get(props, 'theme.colors.inputBackground')};
  border: ${(props) => `1px solid ${get(props, 'theme.colors.inputBorder')}`};
  box-sizing: border-box;
  border-radius: 4px;
  color: ${(props) => get(props, 'theme.colors.inputFontColor')};
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => get(props, 'theme.fontSizes.medium')};
  line-height: 17px;
  margin: 5px 0 2em;
  height: 40px;
  ${(props) => {
    if (props.error) {
      return `border: 1px solid #ff4d4f;
              &:hover {
                border-color: #ff4d4f !important;
                }
              &:focus {
              border-color: #ff4d4f !important;
              border-right-width: 1px!important;
              outline: 0;
              box-shadow: 0 0 0 2px rgba(245,34,45,.2);
          }`;
    }
  }}
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
    // border-color: #ffffff00 !important ;
    // border-right-width: 1px !important;
    // box-shadow: 0 0 0 0px !important;
  }
`;
