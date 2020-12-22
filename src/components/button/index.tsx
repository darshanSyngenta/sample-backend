import { Button as AntdButton } from 'antd';
import { iff } from 'core/iff';
import get from 'lodash/get';
import styled from 'styled-components';

export const Button = styled(AntdButton)<{ type: any }>`
  border-radius: 4px;
  width: auto;
  height: 40px;
  margin: 0px 0;
  border: ${(props) => `1px solid ${get(props, `theme.colors.${props.type || 'primary'}`)}`};
  background-color: ${(props) => get(props, `theme.colors.${props.type || 'primary'}`)};
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => get(props, 'theme.fontSizes.medium')};
  line-height: 17px;
  color: ${(props) => {
    return iff(
      (props.type as string) === 'secondary',
      get(props, 'theme.colors.fontSecondaryColor'),
      get(props, 'theme.colors.pageBackgroundPrimary')
    );
  }};
  float: right;
  &.syngenta-ant-btn-primary[disabled] {
    background-color: #c1c5c8;
    color: #e8eaed;
  }
`;

export const CancelButton = styled(Button)<{ type: any }>`
  background: #dfe2e7;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.0075em;
  color: #14151c;
  width: 100%;
  &:hover,
  &:active,
  &:focus {
    color: #14151c;
    background-color: #dfe2e7;
    border-color: #dfe2e7;
  }
`;
