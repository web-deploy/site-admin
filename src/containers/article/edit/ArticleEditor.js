import React from 'react';
import { observer } from 'mobx-react-lite';
import { Col } from 'antd';
import Editor from '../../../components/Editor';
import { useArticleStore } from '../../../utils';

const ArticleEditor = () => {
  const editStore = useArticleStore();
  const { setArticleInfo } = editStore;
  const { content } = editStore.articleInfo;
  return (
    <Col span={20}>
      <Editor
        value={content}
        onChange={(value) => { setArticleInfo('content', value) }}
      />
    </Col>
  )
}

export default observer(ArticleEditor);
