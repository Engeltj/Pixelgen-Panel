/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import routes from './config/routes';

import 'jquery';
import 'metismenu';
import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'animate.css';
import '../public/styles/style.scss';

import authReducer from './reducers/auth';
import usersReducer from './reducers/users';
import discountsReducer from './reducers/discounts';
import ordersReducer from './reducers/orders';

import RequestService from './services/request';

import DevTools from './components/developer/DevTools';

const store = createStore(
  combineReducers({
    'routing': routerReducer,
    'auth': authReducer,
    'users': usersReducer,
    'discounts': discountsReducer,
    'orders': ordersReducer
  }),
  compose(applyMiddleware(thunk), DevTools.instrument())
);

export const request = new RequestService(store); // eslint-disable-line import/prefer-default-export

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
  <Provider store={ store }>
    { routes(history) }
  </Provider>
), document.getElementById('root'));