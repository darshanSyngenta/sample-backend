import { Button, Card, Col, Row } from 'antd';
import { Button as CustomBUtton } from 'components/button';
import FileUploader from 'components/file-uploader';
import { Loader } from 'components/loader';
import { TitleBar } from 'components/title-bar';
import { history, RoutePaths } from 'core/history';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles.less';

export const UploadGRN: React.FC<{}> = () => {
  const { t } = useTranslation();
  const [uploadedFiles, setUploadedFiles] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState('');

  const addFileName = (file) => {
    setFile(file);
    setFileName(file.name);
  };

  return (
    <>
      {!showThankYou && (
        <div className="block-center">
          <Row>
            <Col>
              {' '}
              <TitleBar style={{ textAlign: 'center' }} className="header Signin-title card-title">
                {t('Upload All Proofs Of Purchases This Year To Ensure Maximum Coverage')}
              </TitleBar>
              <Card className="productCard lg-w-75 drag-and-drop">
                {loading ? (
                  <Loader tip={t('File is uploading')} />
                ) : (
                  <FileUploader
                    addFileName={addFileName}
                    fileName={fileName}
                    translate={t}
                    loader={setLoading}
                    showUploadList={true}
                    multiple={true}
                  />
                )}

                {!fileName && <p className="text-center">{t('No file Uploaded')}</p>}
                <CustomBUtton
                  type="primary"
                  className="w-100"
                  disabled={!uploadedFiles}
                  onClick={() => setShowThankYou(true)}
                >
                  {t('Submit')}
                </CustomBUtton>
              </Card>
            </Col>
          </Row>
        </div>
      )}
      {showThankYou && (
        <Row>
          <Col span={18} offset={3}>
            {' '}
            <TitleBar style={{ textAlign: 'center' }} className="header Signin-title">
              {t('Thank You!')}
            </TitleBar>
            <Card className="productCard">
              <p>
                {t(
                  'Our Representative wil reach out to you when we review your proof of purchases'
                )}
              </p>
            </Card>
            <Button
              type="primary"
              disabled={!uploadedFiles}
              onClick={() => {
                history.push(RoutePaths.DASHBOARD());
              }}
            >
              {t('Go to Home')}
            </Button>
          </Col>
        </Row>
      )}
    </>
  );
};
