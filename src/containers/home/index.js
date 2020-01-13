import React from 'react';
import { Layout } from 'antd';
import CardList from './CardList';
import ArticlesAndLog from './ArticlesAndLog';


const Home = () => {
  return (
    <Layout className="home-wrap">
      <CardList />
      <ArticlesAndLog />
    </Layout>
  )
}

export default Home;
