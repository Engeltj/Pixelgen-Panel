/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore} from 'mobx-react-router';
import routes from './config/routes';

import 'jquery';
import 'metismenu';

import 'font-awesome/css/font-awesome.css';
import 'animate.css';
import '../public/styles/style.scss';

import RequestService from './services/request';

import AuthorizationStore from './stores/auth';
import DiscountsStore from './stores/discounts';
import OrdersStore from './stores/orders';
import UsersStore from './stores/users';

export const request = new RequestService(); // eslint-disable-line import/prefer-default-export
const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render((
  <Provider
    auth={ new AuthorizationStore() }
    discounts={ new DiscountsStore() }
    orders={ new OrdersStore() }
    users={ new UsersStore() }
    routing={ routingStore }
  >
    { routes(browserHistory) }
  </Provider>
), document.getElementById('root'));