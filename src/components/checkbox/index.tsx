import { Checkbox as AntdCheckbox } from 'antd';
import get from 'lodash/get';
import styled from 'styled-components';

export const Checkbox = styled(AntdCheckbox)`
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => get(props, 'theme.fontSizes.small')};
  line-height: 24px;
  color: ${(props) => get(props, 'theme.colors.titleColor')};
  float: left;
  .syngenta-ant-checkbox .syngenta-ant-checkbox-inner {
    border: ${(props) => `1px solid ${get(props, 'theme.colors.inputBorder')}`};
  }
  .syngenta-ant-checkbox-checked .syngenta-ant-checkbox-inner {
    border: ${(props) => `1px solid ${get(props, 'theme.colors.primary')}`};
    background-color: ${(props) => get(props, 'theme.colors.primary')};
  }
  span:last-child {
    padding-right: 0;
  }
`;
