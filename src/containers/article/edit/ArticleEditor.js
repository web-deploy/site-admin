import React from 'react';
import { Col } from 'antd';
import Editor from '../../../components/Editor';
import { useArticleStore } from '../../../utils';

const ArticleEditor = () => {
  const editStore = useArticleStore();
  const { setArticleInfo } = editStore;
  return (
    <Col span={20}>
      <Editor
        onChange={(value) => { setArticleInfo('content', value) }}
      />
    </Col>
  )
}

export default ArticleEditor;
