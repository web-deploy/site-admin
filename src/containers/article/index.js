import React from 'react';
import { Layout } from 'antd';
import store from './store';
import { useRegisterStore } from '../../store';


const paths = ['article'];

// eslint-disable-next-line react/prop-types
const Article = ({ children }) => {
  useRegisterStore(paths, store);
  return (
    <Layout>{children}</Layout>
  );
}

export default Article;
