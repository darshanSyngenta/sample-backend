import get from 'lodash/get';
import styled from 'styled-components';

export const RectangleFocusIcon = styled.div`
  background-color: ${(props) => get(props, 'theme.colors.focusRectangleColor')};
  width: 44px;
  height: 44px;
  border-radius: 7px;
  position: absolute;
  left: -12vh;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  top: 66px;
`;
export const SigninRectangleArrowIcon = styled.div`
  position: absolute;
  overflow: hidden;
  left: -55px;
  top: 62px;
`;
