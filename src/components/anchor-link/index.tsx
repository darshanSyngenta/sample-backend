import get from 'lodash/get';
import styled from 'styled-components';

export const AnchorLink = styled.a`
  /* float: right; */
  font-size: ${(props) => get(props, 'theme.fontSizes.small')};
  line-height: 20px;
  margin-bottom: 20px;
  color: ${(props) => get(props, 'theme.colors.fontColor')};
  text-decoration: underline;
  margin-left: 0.2vw;
  &:focus,
  &:hover {
    text-decoration: none;
    outline: 0;
    color: ${(props) => get(props, 'theme.colors.fontColor')} !important;
  }
`;
