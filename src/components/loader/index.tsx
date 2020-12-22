import { ErrorBoundary } from 'components/error-boundary';
import React from 'react';
import styled from 'styled-components';
import { Spin } from 'syngenta-digital-cropwise-react-ui-kit';

const StyledLoader = styled.div`
  position: absolute;
  left: 45%;
  top: 45%;
  z-index: 10;
`;

interface ILoaderProps {
  tip: string;
}

export const Loader: React.FC<ILoaderProps> = (props) => {
  return (
    <ErrorBoundary>
      <StyledLoader>
        <Spin spinning={true} delay={500} tip={props.tip}></Spin>
      </StyledLoader>
    </ErrorBoundary>
  );
};
