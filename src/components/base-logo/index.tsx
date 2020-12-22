import darkBaseLogoImg from 'assets/images/rev-zorro-logo.svg';
import baseLogoImg from 'assets/images/zorro-logo.svg';
import React from 'react';
import styled from 'styled-components';

const Logo = styled.img<{ dark: boolean }>`
  height: 64px;
  cursor: pointer;
  margin-left: -15px;
  margin-right: 15px;
`;

export const BaseLogo = (props: any) =>
  props.dark ? <Logo src={darkBaseLogoImg} {...props} /> : <Logo src={baseLogoImg} {...props} />;
