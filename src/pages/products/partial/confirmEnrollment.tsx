import { Col, Row } from 'antd';
import { Button, CancelButton } from 'components/button';
import { get } from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
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
export const ConfirmEnrollment = (props: any) => {
  const { t } = useTranslation();

  const handleNextClick = () => {
    props.handleContinueClick();
  };

  const handlePreviousClick = () => {
    props.handlePreviousClick();
  };

  return (
    <>
      <Row justify="center" className="d-flex">
        <Col xs={24} md={24} lg={16} className="form-bg synegenta-inner-page-form product-form">
          <p>
            {t(`You are about to enroll for Growth Program, Choose "Enroll Now" to confirm your
            enrollment`)}
          </p>
          <RPPButtonSection className="tin-form-btn">
            <CancelButton
              className="product-btn"
              type="default"
              data-testid="previous"
              onClick={() => handlePreviousClick()}
            >
              {t('Previous')}
            </CancelButton>
            <StyledButton
              className="product-btn btn-green"
              data-testid="continue"
              type="btnGreen"
              htmlType="submit"
              onClick={() => handleNextClick()}
            >
              {t('Enroll Now')}
            </StyledButton>
          </RPPButtonSection>
        </Col>
      </Row>
    </>
  );
};
