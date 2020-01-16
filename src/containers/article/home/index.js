import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { useArticleStore } from '../../../utils';
import ArticleTable from './ArticleTable';


const ArticleList = () => {
  const articleStore = useArticleStore();

  const { getArticles } = articleStore;

  useEffect(() => {
    getArticles()
  }, [getArticles]);

  return (
    <Layout className="article-list-wrap">
      <ArticleTable />
    </Layout>
  )
}

export default ArticleList;
