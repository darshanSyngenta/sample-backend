import { Progress } from 'antd';
import React from 'react';
import styled from 'styled-components';

const StyledProgress = styled(Progress)`
  width: 55vw;
  top: 20px;
  .syngenta-ant-progress-inner {
    height: 5px;
    border-radius: 10px;
  }
  .syngenta-ant-progress-bg {
    height: 5px;
  }
`;
export const ProgressBar: React.FC<{ progress: number }> = (props) => {
  const progressMap = [
    { color: '#ffffff', per: 0 },
    { color: '#696F88', per: 1 },
    { color: '#696F88', per: 33 },
    { color: '#696F88', per: 66 },
    { color: '#73DC78', per: 100 },
  ];
  return (
    <StyledProgress
      percent={progressMap[props.progress].per}
      showInfo={false}
      strokeColor={progressMap[props.progress].color}
    />
  );
};
