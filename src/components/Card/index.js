import React from 'react';
import { Layout, Row, Col } from 'antd';
import Icon from '../Icon';

import './index.less';



const Card = ({ icon, backgroundColor, topMessage, middleMessage, bottomMessage }) => {
  return (
    <Layout className="card-wrap" style={{ backgroundColor: backgroundColor }}>
      <Row className="home-card-wrap">
        <Col span={12}>
          <Layout className="icon-wrap">
            <Icon type={icon} size={30} color="#ffffff" />
          </Layout>
        </Col>
        <Col span={12}>
          <Layout className="message-wrap">
            <Layout>{topMessage}</Layout>
            <Layout>{middleMessage}</Layout>
            <Layout>{bottomMessage}</Layout>
          </Layout>
        </Col>
      </Row>
    </Layout>
  )
}

export default Card;
