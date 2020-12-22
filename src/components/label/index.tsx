import get from 'lodash/get';
import styled from 'styled-components';

export const Label = styled.div`
  font-size: ${(props) => get(props, 'theme.fontSizes.medium')};
  line-height: 17px;
  margin: 0;
`;
