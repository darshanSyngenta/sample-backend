import { Loader } from 'components/loader';
import { GlobalHeader } from 'pages/gloab-header';
import { SidebarMenu } from 'pages/sidebar-menu';
import React from 'react';
import { MainRoutes } from 'routes';
import { Layout } from 'syngenta-digital-cropwise-react-ui-kit';
import { useAuth } from '../../context/auth';
import './style.less';
import { RouteComponentProps } from 'react-router';


const { Header, Content } = Layout;

export const MainContainer: React.FC<RouteComponentProps> = (props) => {
  const { logoutStatus } = useAuth();
  if (logoutStatus) {
    return <Loader tip="Logging out of the application!" />;
  }
  return (
    <Layout className={'cw-page-container'}>
      <SidebarMenu url={props.match.url} />
      <Layout>
        <Header>
          <GlobalHeader />
        </Header>
        <Content>
          <MainRoutes />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainContainer;
