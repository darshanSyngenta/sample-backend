import { ConfigProvider } from 'antd';
import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

interface ITheme {
  colors?: {
    titleColor?: string;
    inputBackground?: string;
    inputBorder?: string;
    pageBackgroundSecondary?: string;
    pageBackgroundPrimary?: string;
    primary?: string;
    secondary?: string;
    btnGreen?: string;
    btnDark?: string;
    fontColor?: string;
    inputFontColor?: string;
    fontSecondaryColor?: string;
    focusRectangleColor?: string;
    ErrorColor?: string;
  };

  font?: {
    family?: string;
  };

  fontSizes?: {
    small?: string;
    medium?: string;
    large?: string;
    Xlarge?: string;
  };
}

const Themes: { [id: string]: ITheme } = {
  defaultTheme: {
    colors: {
      titleColor: '#363948',
      inputBackground: '#F3F4F6',
      inputBorder: '#E8EAED',
      pageBackgroundSecondary: '#E5E5E5',
      pageBackgroundPrimary: '#FFFFFF',
      primary: '#73DC78',
      secondary: '#FFFFFF',
      btnGreen: '#73DC78',
      btnDark: '#2f3031',
      fontColor: '#73DC78',
      inputFontColor: '#363948',
      fontSecondaryColor: '#2F3031',
      focusRectangleColor: '#aab400',
      ErrorColor: 'red',
    },
    font: {
      family: 'Rubik, sans-serif',
    },
    fontSizes: {
      small: '12px',
      medium: '14px',
      large: '20px',
      Xlarge: '27.7941px',
    },
  },
  newTheme: {
    colors: {},
    font: {},
    fontSizes: {},
  },
};

const getThemeWithDefaultFallback = (themeName: string = 'defaultTheme') => {
  return Themes[themeName];
};

interface IThemeProviderProps {
  themeName?: string;
}

export const ThemeProvider: React.FC<IThemeProviderProps> = (props) => (
  <ConfigProvider prefixCls={'syngenta-ant'}>
    <SCThemeProvider theme={getThemeWithDefaultFallback(props.themeName)}>
      {props.children}
    </SCThemeProvider>
  </ConfigProvider>
);
