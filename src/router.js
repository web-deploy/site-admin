import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import App from './containers/App';
import Loading from './components/Loading';

import config from './config';
const { delay, timeout } = config;

const routeMap = [
  {
    path: `/`,
    component: './containers/home',
    exact: true
  },
  {
    path: `/article`,
    component: './containers/article',
    exact: true
  },
  {
    path: `/article/edit`,
    component: './containers/article/editArticle',
  },
];

export default (
 <BrowserRouter>
    <App>
      <Switch>
        {
          routeMap.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                exact={item.exact}
                component={
                  Loadable({
                    loader: () => {
                      return import(`${item.component}`);
                    },
                    loading: Loading,
                    delay,
                    timeout
                  })
                }
              />
            );
          })
        }
      </Switch>
    </App>
  </BrowserRouter>
);
