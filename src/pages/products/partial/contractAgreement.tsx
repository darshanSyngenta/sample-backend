import { Col, Row, Upload } from 'antd';
import downloadArrow from 'assets/images/download-arrow.svg';
import uploadArrow from 'assets/images/upload-arrow.svg';
import { CancelButton } from 'components/button';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import '../style.less';

const RPPButtonSection = styled.div`
  display: flex;
`;
export const ContractAgreement = (props: any) => {
  const { t } = useTranslation();

  const handleNextClick = () => {
    props.handleContinueClick();
  };

  const handlePreviousClick = () => {
    props.handlePreviousClick();
  };

  const handleUploadClick = () => {};

  return (
    <>
      <Row justify="center" className="d-flex">
        <Col xs={24} md={24} lg={16} className="form-bg synegenta-inner-page-form product-form">
          <div className="product-terms">
            <div>
              <h4>{t('Contract Agreement')} </h4>
              <p> {t('Updated November 2020')} </p>
            </div>
            <div>
              <h3>{t('Contract Agreement')}</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum
              </p>
            </div>
            <div>
              <h3>{t('Contract Agreement')} </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum
              </p>
            </div>
          </div>
          <p>
            {' '}
            {t(
              'To confirm the agreement please download print and upload the manually sign agreement'
            )}{' '}
          </p>
          <div className="product-links">
            <ul>
              <li className="mb-15">
                <img src={downloadArrow} alt="download" />
                <a className="ml-15"> {t('Download Contract Agreement For Signing')}</a>
              </li>

              <Row className="d-flex">
                <Col span={18}>
                  <li>
                    <img src={uploadArrow} alt="upload" />
                    <a className="ml-15">{t('Upload Signed Contract Agreement *')}</a>
                  </li>
                </Col>
                <Col lg={6} xs={24}>
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader product-contractAgreement-form"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    onChange={handleUploadClick}
                  >
                    <p className="product-uploadTxt">{t('Upload File')}</p>
                  </Upload>
                </Col>
              </Row>
            </ul>
          </div>
          <RPPButtonSection className="tin-form-btn">
            <CancelButton
              className="product-btn"
              type="default"
              data-testid="previous"
              onClick={() => handlePreviousClick()}
            >
              {t('Previous')}
            </CancelButton>
            <CancelButton
              className="product-btn"
              type="default"
              data-testid="continue"
              onClick={() => handleNextClick()}
            >
              {t('Continue')}
            </CancelButton>
          </RPPButtonSection>
        </Col>
      </Row>
    </>
  );
};
