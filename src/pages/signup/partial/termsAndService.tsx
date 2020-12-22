import { DownloadOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';
import { Button, CancelButton } from 'components/button';
import GeneratePDF from 'components/pdf-downloader';
import get from 'lodash/get';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

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

export interface ITermsAndService {
  isChecked: boolean;
}
export const TermsAndService = (props: any) => {
  const ref = useRef(null);
  const { t } = useTranslation();
  const [isChecked, setIsChecked] = useState(false);

  const handleCreateAccountClick = () => {
    const TermsAndService: ITermsAndService = {
      isChecked,
    };
    props.handleContinueClick(TermsAndService);
  };

  const handlePreviousClick = () => {
    props.handlePreviousClick();
  };

  const onCheckboxChange = (e: any) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <div className="service-links">
        <ul>
          <li>
            <GeneratePDF refName={ref} fileName="text.pdf">
              <a>
                <DownloadOutlined /> {t('Download a PDF')}
              </a>
            </GeneratePDF>
          </li>
        </ul>
      </div>
      <div className="signup-terms">
        <div ref={ref}>
          <div>
            <h4>{t('Terms of service')} </h4>
            <p> {t('Updated November 2020')} </p>
          </div>
          <div>
            <h3>{t('Terms of service')}</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
          <div>
            <h3>{t('Terms of service')} </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
        </div>
      </div>

      <Checkbox style={{ margin: '8px 0px' }} onChange={onCheckboxChange}>
        {t('I agree to the [PRODUCT NAME] Terms of Service')}
      </Checkbox>

      <RPPButtonSection>
        <CancelButton type="default" data-testid="previous" onClick={() => handlePreviousClick()}>
          {t('Previous')}
        </CancelButton>
        <StyledButton
          style={{ marginBottom: '24px' }}
          data-testid="create-account"
          className="btn-green"
          type="btnGreen"
          htmlType="submit"
          disabled={!isChecked}
          onClick={() => handleCreateAccountClick()}
        >
          {t('Create Account')}
        </StyledButton>
      </RPPButtonSection>
    </div>
  );
};
