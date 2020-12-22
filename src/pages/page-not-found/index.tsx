import { PageLayout } from 'components/page-layout';
import React from 'react';
import { useTranslation } from 'react-i18next';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Label = styled.h1`
  display: inline-block;
  margin-bottom: 0px;
  font-weight: 500;
  font-size: 46px;
  color: rgb(46, 51, 125);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 50vh;
`;

export const PageNotFound = () => {
  const { t } = useTranslation();
  return PageLayout({
    header: null,
    content: (
      <Container>
        <Label>404</Label>
        <h3>{t('Page not found')}</h3>
        <p>{t('We are sorry, the page you requested could not be found!')}</p>
      </Container>
    ),
  });
};
