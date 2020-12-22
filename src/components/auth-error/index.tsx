import { ErrorBoundary } from 'components/error-boundary';
import React from 'react';
import styled from 'styled-components';
import { ErrorMessage } from './../error-message';

const StyledAuthError = styled.div`
  position: absolute;
  left: 45%;
  top: 45%;
  z-index: 10;
`;

interface IAutErrorProps {
  label: string;
}

export const AuthError: React.FC<IAutErrorProps> = (props) => {
  return (
    <ErrorBoundary>
      <StyledAuthError>
        <ErrorMessage>{props.label}</ErrorMessage>
      </StyledAuthError>
    </ErrorBoundary>
  );
};
