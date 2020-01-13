import React from 'react';
import { Row, Col } from 'antd';

import './ArticlesAndLog.less';

const ArticlesAndLog = () => {
  return (
    <Row className="article-log-wrap">
      <Col span={12}>
        <h1>最新文章</h1>
      </Col>
      <Col span={12}>
        <h1>系统日志</h1>
      </Col>
    </Row>
  )
}

export default ArticlesAndLog;
