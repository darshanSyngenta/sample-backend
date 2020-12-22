import { Typography } from 'antd';
import leafImage from 'assets/images/cropwise-leaf.svg';
import classNames from 'classnames';
import React from 'react';
import styled from 'styled-components';
import './style.less';

const { Text } = Typography;
const Label = styled(Text)`
  display: block;
  color: #2f3031;
  font-size: 16px;
  font-weight: 400;
`;

interface ITechnologyCardProps {
  name: string;
  selected: boolean;
  onClick: () => void;
}

export const TechnologyCard: React.FC<ITechnologyCardProps> = (props) => (
  <div
    onClick={props.onClick}
    className={classNames('cw-technology-card', {
      'cw-technology-card-selected': props.selected,
    })}
  >
    <img src={leafImage} className={'cw-technology-image-placeholder'} />
    <Label>{props.name}</Label>
  </div>
);
