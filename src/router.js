import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import App from './containers/App';
import Loading from './components/Loading';
import Home from './containers/home';
import Article from './containers/article';

import config from './config';
const { delay, timeout } = config;

const routeMap = [
  {
    path: `/`,
    component: Home,
    exact: true,
  },
  {
    path: `/article`,
    component: Article,
    routes: [
      {
        path: '/article/list',
        component: './containers/article/home',
        exact: true,
      },
      {
        path: '/article/edit',
        component: './containers/article/edit',
        exact: true,
      },
      {
        path: '/article/edit/:id',
        component: './containers/article/edit',
        exact: true,
      },
    ]
  },
];

const  RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={() => {
        return (
          <route.component>
            {
              <Switch>
                {
                  route.routes && route.routes.map((item, index) => {
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
            }
          </route.component>
        );
      }}
    />
  );
}

export default (
 <BrowserRouter>
    <App>
      <Switch>
      <Switch>
        {routeMap.map((route, i) => {
          return (
            <RouteWithSubRoutes key={i} {...route} />
          );
        })}
      </Switch>
      </Switch>
    </App>
  </BrowserRouter>
);
