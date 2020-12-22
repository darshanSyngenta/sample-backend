import { Layout } from 'antd';
import { ErrorBoundary } from 'components/error-boundary';
import { iff } from 'core/iff';
import React from 'react';
import styled from 'styled-components';

const { Content } = Layout;

const StyledLayout = styled(Layout)`
  height: 100%;
  min-height: 100%;
`;

const StyledContent = styled(Content)`
  background-color: #e5e5e5;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px;
`;

interface IPageLayoutProps {
  header: React.ReactNode;
  content: React.ReactNode;
}

export const PageLayout: React.FC<IPageLayoutProps> = (props) => {
  return (
    <StyledLayout>
      <StyledContent>
        <ErrorBoundary>{iff(!!props.content, props.content)}</ErrorBoundary>
      </StyledContent>
    </StyledLayout>
  );
};
