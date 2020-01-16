import React from 'react';
import { Layout, Row } from 'antd';
import ArticleEditor from './ArticleEditor';
import ArticleDescInfo from './ArticleDescInfo';

const AddArticle = () => {
  // useRegisterStore(paths, store);
  return (
    <Layout style={{ backgroundColor: '#ffffff' }}>
      <Row gutter={16}>
        <ArticleEditor />
        <ArticleDescInfo />
      </Row>
    </Layout>
  )
}

export default AddArticle;
