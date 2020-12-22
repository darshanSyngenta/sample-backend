import { Button, Modal } from 'antd';
import { convertLegacyProps } from 'antd/lib/button/button';
import { iff } from 'core/iff';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledModal = styled(Modal)`
  .syngenta-ant-modal-header {
    padding: 16px 24px;
    color: rgba(0, 0, 0, 0.65);
    background: #fff;
    border-bottom: 3px solid #f74141;
    border-radius: 4px 4px 0 0;
  }
  .syngenta-ant-modal-footer {
    border-top: none;
  }
`;

const Styledp = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #2f3031;
`;

interface IErrorModalProps {
  visible: boolean;
  onCancelClick?: () => void;
  cancelText?: string;
  onOk: () => void;
  okText: string;
  message: string;
}

export const ErrorModal: React.FC<IErrorModalProps> = (props) => {
  const { t } = useTranslation();
  return (
    <div>
      <StyledModal
        title={t('Error')}
        visible={props.visible}
        closable={false}
        width={320}
        footer={[
          <>
            {iff(
              props.cancelText !== undefined,
              <Button key={1} {...convertLegacyProps('danger')} onClick={props.onCancelClick}>
                {props.cancelText}
              </Button>
            )}
            <Button key={1} {...convertLegacyProps('danger')} onClick={props.onOk}>
              {props.okText}
            </Button>
          </>,
        ]}
      >
        <Styledp>{props.message}</Styledp>
      </StyledModal>
    </div>
  );
};

ErrorModal.defaultProps = {
  visible: false,
  message: 'Something went wrong',
  okText: 'Ok',
  cancelText: undefined,
  onOk: () => null,
  onCancelClick: () => null,
};
