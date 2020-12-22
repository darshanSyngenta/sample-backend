import { Card, Col, Row } from 'antd';
import { Button, CancelButton } from 'components/button';
import { history, RoutePaths } from 'core/history';
import get from 'lodash/get';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import '../style.less';
export const StyledButton = styled(Button)<{ type: any }>`
  border-radius: 4px;
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => get(props, 'theme.fontSizes.medium')};
  margin: 0 0 0 16px;
  line-height: 20px;
  @media (min-width: 1024px) and (max-width: 1365px) {
    width: 100%;
  }
`;

const RPPButtonSection = styled.div`
  display: flex;
`;
export const HedgingLevel = (props: any) => {
  const { t } = useTranslation();
  let { points } = useParams();
  const [isSelected, setIsSelected] = useState(false);

  const handleNextClick = () => {
    props.handleContinueClick();
  };

  const handlePreviousClick = () => {
    props.handleContinueClick();
  };

  return (
    <>
      <Row justify="center" className="d-flex points-card">
        <Col xs={24} md={24} lg={16}>
          <Card
            className={
              parseInt(points) >= 285000 && isSelected
                ? 'productCard selectedCard'
                : parseInt(points) >= 285000 && !isSelected
                ? 'productCard'
                : 'disableCard'
            }
            onClick={() => {
              setIsSelected(!isSelected);
            }}
          >
            <p>{t('Zorro 1: 10 m RUB (285,000 points)')}</p>
          </Card>
          <Card
            className={
              parseInt(points) >= 570000 && isSelected
                ? 'productCard selectedCard'
                : parseInt(points) >= 570000 && !isSelected
                ? 'productCard'
                : 'disableCard'
            }
            onClick={() => {
              setIsSelected(!isSelected);
            }}
          >
            <p>{t('Zorro 2: 20 m RUB (570,000 points)')}</p>
          </Card>
          <Card
            className={
              parseInt(points) >= 855000 && isSelected
                ? 'productCard selectedCard'
                : parseInt(points) >= 855000 && !isSelected
                ? 'productCard'
                : 'disableCard'
            }
            onClick={() => {
              setIsSelected(!isSelected);
            }}
          >
            <p>{t('Zorro 3: 30 m RUB (855,000 points)')}</p>
          </Card>
          <Card
            className={
              parseInt(points) >= 1140000 && isSelected
                ? 'productCard selectedCard'
                : parseInt(points) >= 1140000 && !isSelected
                ? 'productCard'
                : 'disableCard'
            }
            onClick={() => {
              setIsSelected(!isSelected);
            }}
          >
            <p>{t('Zorro 4: 40 m RUB (1,140,000 points)')}</p>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={24} md={24} lg={24} className="hedging-btn">
          <RPPButtonSection>
            <CancelButton
              type="default"
              data-testid="previous"
              onClick={() => {
                history.push(RoutePaths.PRODUCTS_PAGE());
              }}
            >
              {t('Previous')}
            </CancelButton>
            <StyledButton
              data-testid="continue"
              className="btn-green"
              type="btnGreen"
              htmlType="submit"
              disabled={!isSelected}
              onClick={handleNextClick}
            >
              {t('Next')}
            </StyledButton>
          </RPPButtonSection>
        </Col>
      </Row>
    </>
  );
};
