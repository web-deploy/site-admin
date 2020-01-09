import React from 'react';
import { Row, Col } from 'antd';

export default function App({ children }) {
  return (
    <div className="app-root">
      <div className="app-body">
        <Row>
          <Col span={18} push={6}>col-12</Col>
          <Col span={6} pull={18}>{ children }</Col>
        </Row>
      </div>
    </div>
  );
}
