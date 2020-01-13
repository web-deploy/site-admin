import React from 'react';
import { Layout, Row } from 'antd';
import ArticleEditor from './ArticleEditor';
import ArticleDescInfo from './ArticleDescInfo';
import store from './store';
import { useRegisterStore } from '../../../store';

const paths = ['article'];
const AddArticle = () => {
  useRegisterStore(paths, store);
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
