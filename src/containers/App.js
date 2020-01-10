import React from 'react';
import { Row, Col, Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

export default function App({ children }) {
  return (
    <div className="app-root">
      <div className="app-body" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* <Row style={{ flex: 1, display: 'flex' }}>
          <Col span={4} style={{ flex: 1 }}>
            <Layout>
              <Sider>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                  <Menu.Item key="1">
                    <Icon type="user" />
                    <span>nav 1</span>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Icon type="video-camera" />
                    <span>nav 2</span>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Icon type="upload" />
                    <span>nav 3</span>
                  </Menu.Item>
                </Menu>
              </Sider>
            </Layout>
          </Col>
          <Col span={20}>{ children }</Col>
        </Row> */}
        <Layout>
          <Sider trigger={null} collapsible collapsed={false}>
            <div className="logo-wrap">
              <div className="logo">鲁西西</div>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>nav 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={'menu-unfold'}
              />
            </Header>
            <Content
              className="content-wrap"
              style={{
                minHeight: 'calc(100% - 64)',
                padding: 24,
                backgroundColor: '#f0f2f5',
                minHeight: 280,
              }}
            >
              { children }
            </Content>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}
