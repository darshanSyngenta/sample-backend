import { RightOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React from 'react';
import { Button } from '../button';
import './style.less';

interface IProgramTemplateProps {
  title?: string;
  description: string;
  validityPeriod?: string;
  minimumEligibilityPeriod?: string;
  buttonText?: string;
  icon?: any;
  yourPoints?: number;
  buttonOnClick?: () => void;
  header: string;
  headerOnClick?: () => void;
}

export const ProgramTemplate: React.FC<IProgramTemplateProps> = ({
  title,
  description,
  validityPeriod,
  minimumEligibilityPeriod,
  yourPoints,
  buttonText,
  icon,
  header,
  headerOnClick,
  buttonOnClick,
}) => {
  return (
    <>
      <div className="site-card-border-less-wrapper">
        <Card
          title={header}
          extra={
            <span onClick={headerOnClick}>
              <RightOutlined label="test" />
            </span>
          }
          bordered={true}
        >
          <div className="card-body-inside">
            <div className="d-flex card-image-text">
              <img src={icon} className={'cw-logo-card-placeholder'} />
              <h4 className="md-size-text bold-text">{title}</h4>
            </div>

            <p>{description}</p>

            <p>
              <span className="sm-size-text bold-text">Validity Period</span> : {validityPeriod}
            </p>
            <p>
              <span className="sm-size-text bold-text"> Minimum Eligibility Period </span>:{' '}
              {minimumEligibilityPeriod}
            </p>
            {yourPoints && (
              <p>
                <span className="sm-size-text bold-text">your Points</span>:{yourPoints}
              </p>
            )}
            <Button
              type="primary"
              disabled={yourPoints ? (yourPoints > 28500 ? false : true) : false}
              onClick={buttonOnClick}
            >
              {buttonText}
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};
