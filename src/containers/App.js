/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

const { SubMenu } = Menu;

const menuMap = {
  home: '/',
  articleList: '/article/list',
  addArticle: '/article/edit'
}

const App = (props) => {

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  }

  const onClickMenuItem = (e) => {
    if (menuMap[e.key]) {
      // eslint-disable-next-line react/prop-types
      props.history.push(menuMap[e.key])
      localStorage.setItem('active_key', e.key);
    }
  }

  const defaultKey = localStorage.getItem('active_key') || 'home';

  return (
    <div className="app-root">
      <div className="app-body" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Layout>
          <Sider
            trigger={null} collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo-wrap">
              <div className="logo">鲁 西 西</div>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[defaultKey]}>
              <Menu.Item key="home" onClick={onClickMenuItem}>
                <Icon type="pie-chart" />
                <span>工作台</span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="desktop" />
                    <span>文章管理</span>
                  </span>
                }
              >
              <Menu.Item key="articleList" onClick={onClickMenuItem}>文章列表</Menu.Item>
              <Menu.Item key="addArticle" onClick={onClickMenuItem}>添加文章</Menu.Item>
            </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header className="header">
              <Icon
                className="trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={onCollapse}
              />
            </Header>
            <Content
              className="content-wrap"
            >
              { props.children }
            </Content>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}

export default withRouter(App);
