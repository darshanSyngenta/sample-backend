import get from 'lodash/get';
import styled from 'styled-components';

export const TitleBar = styled.h1`
  color: ${(props) => get(props, 'theme.colors.titleColor')};
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => get(props, 'theme.fontSizes.large')};
  line-height: 24px;
  margin-bottom: 1em;
`;
