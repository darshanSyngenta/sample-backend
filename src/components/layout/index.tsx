import farmLogo from 'assets/images/farm-bg.jpg';
import { BaseLogo } from 'components/base-logo';
import { ErrorBoundary } from 'components/error-boundary';
import { FontIcon } from 'components/icon-component';
import { LanguageDropdown } from 'components/language-dropdown';
import { iff } from 'core/iff';
import { LoginCreateAccountLink } from 'pages/login-create-account-link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 100%;
`;

const StyledContainer = styled.div`
  display: flex;
`;

const CentralLayout = styled.div`
  height: 100%;
  background-size: 97% 100%;
  background-color: #fff;
`;
const CustomLayout = styled.div`
  text-align: center;
  height: 100%;
`;

const LayoutBody = styled.div`
  @media (max-width: 768px) and (min-width: 1200px) {
    min-width: auto;
    padding: 56px 6% 20px;
  }
  background: #ffffff;
  width: 50%;
  min-width: 414px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 12px rgba(112, 115, 116, 0.3);
  border-radius: 12px;
  padding-top: 56px;
  padding-bottom: 20px;
  padding-left: 8%;
  padding-right: 8%;
  overflow: auto;
  max-height: 100vh;
`;

const FlexGrow = styled.div<{ grow: number }>`
  flex-grow: ${(props) => props.grow};
`;

const StyledFarmImage = styled.div<{ image: string }>`
  left: 0;
  top: 0;
  width: 50%;
  height: 100vh;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;

  .invalid-voucher {
    float: right;
    margin: 20px;
    width: 366px;
    height: 103px;
    font-family: 'Noto Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: -0.0075em;
    color: #14151c;
    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(112, 115, 116, 0.3);
    border-radius: 4px;

    .try-again {
      padding-left: 15%;
      display: block;
      margin-top: -9px;
      font-weight: normal;
      line-height: 24px;
      letter-spacing: -0.0075em;
      color: #696f88;
      padding-top: 19px;
    }
  }
`;

const StyledWelcomDiv = styled.div`
  position: absolute;
  bottom: 10px;

  .welcome {
    @media (min-width: 768px) and (max-width: 1100px) {
      font-size: 165px !important;
    }

    @media (min-width: 1024px) and (max-width: 1365px) {
      font-size: 195px !important;
    }
    font-family: Rubik;
    font-style: normal;
    font-style: normal;
    font-weight: 500;
    font-size: 210px;
    line-height: 137px;
    /* or 65% */

    letter-spacing: -13.83px;
    text-transform: uppercase;

    color: #ffffff;

    mix-blend-mode: normal;
    opacity: 0.2;
  }
`;

const BottomDiv = styled.div`
  align-self: bottom;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const centerStyle = { margin: '0 auto 20px', display: 'block' };
interface ILayoutProps {
  type: 'default' | 'custom' | 'central';
  isLogin: boolean;
  showLoginLink?: boolean;
  isAccessCodeValid?: boolean;
  showWelcomeScreen: boolean;
  onClose?: () => void;
}

export const Layout: React.FC<ILayoutProps> = (props) => {
  const { showLoginLink = true } = props;
  const { t } = useTranslation();
  const onCloseInvalidCard = () => {
    if (props.onClose) {
      props.onClose();
    }
  };

  const invalidVoucher = (
    <div className="invalid-voucher">
      <span
        style={{
          width: '366px',
          height: '103px',
          padding: '10px 5px',
        }}
      >
        <div style={{ marginTop: '2px' }}>
          <FontIcon
            style={{ margin: '19px', marginTop: '5.5px', position: 'absolute' }}
            name="alertBox"
          />
          <span style={{ paddingLeft: '15%' }}>{t('Invalid voucher')}</span>
          <span style={{ float: 'right', margin: '0px 9px' }} onClick={() => onCloseInvalidCard()}>
            <FontIcon style={{ cursor: 'pointer', fontSize: '12px' }} name="close" size="12px" />
          </span>
          <span className="try-again">{t('Try again or contact support')}</span>
        </div>
      </span>
    </div>
  );

  return (
    <ErrorBoundary>
      {iff(
        props.type === 'default',
        <StyledContainer>
          <LayoutBody className="accounts-left-block">
            <FlexGrow grow={0}>
              <BaseLogo style={centerStyle} />
            </FlexGrow>
            <FlexGrow grow={0}>{props.children}</FlexGrow>
            <FlexGrow grow={8}>
              {showLoginLink === true && <LoginCreateAccountLink isLogin={props.isLogin} />}
            </FlexGrow>
            <BottomDiv className="syngenta-login-dropdown">
              {/* <SyngentaLogo src={syngentaLogoImg} /> */}
              <LanguageDropdown type="DROPDOWN" />
            </BottomDiv>
          </LayoutBody>

          <StyledFarmImage image={farmLogo} className="accounts-right-block">
            {iff(props.isAccessCodeValid === true, invalidVoucher)}
            {iff(
              props.showWelcomeScreen === true,
              <StyledWelcomDiv>
                <div className="welcome">{t('Wel')}</div>
                <div className="welcome" style={{ paddingLeft: '9%', marginTop: '3%' }}>
                  {t('come')}
                </div>
              </StyledWelcomDiv>
            )}
          </StyledFarmImage>
        </StyledContainer>,
        <CentralLayout>
          <CustomLayout>
            <BaseLogo style={{ position: 'relative', top: '3vh', left: '0' }} />
            {props.children}
          </CustomLayout>
        </CentralLayout>
      )}
    </ErrorBoundary>
  );
};
