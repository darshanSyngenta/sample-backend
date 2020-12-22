import get from 'lodash/get';
import styled from 'styled-components';

export const SubTitle = styled.h1`
  color: ${(props) => get(props, 'theme.colors.titleColor')};
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => get(props, 'theme.fontSizes.large')};
  line-height: 24px;
`;
