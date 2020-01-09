import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import App from './containers/App';
import Loading from './components/Loading';

import config from './config';
const { delay, timeout } = config;

const routeMap = [
  {
    path: `/${config.routePrefix}`,
    component: './containers/home/Home',
    exact: true
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