import React from 'react';
import { Layout, Row } from 'antd';
import ArticleEditor from './ArticleEditor';
import ArticleDescInfo from './ArticleDescInfo';

const AddArticle = (props) => {
  // useRegisterStore(paths, store);
  return (
    <Layout style={{ backgroundColor: '#ffffff' }}>
      <Row gutter={16}>
        <ArticleEditor />
        <ArticleDescInfo { ...props } />
      </Row>
    </Layout>
  )
}

export default AddArticle;
