import get from 'lodash/get';
import styled from 'styled-components';

export const ErrorMessage = styled.div`
  font-size: ${(props) => get(props, 'theme.fontSizes.small')};
  line-height: 20px;
  color: ${(props) => get(props, 'theme.colors.ErrorColor')};
  margin-left: 5px;
  text-align: left;
`;
