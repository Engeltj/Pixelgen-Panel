import React from 'react';
import ReactDOM from 'react-dom';
import { Router,  browserHistory  } from 'react-router';
import routes from './config/routes';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import jquery from 'jquery';
import metismenu from 'metismenu';
import bootstrap from 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'animate.css';
import '../public/styles/style.scss';

import authReducer from './reducers/auth';
import usersReducer from './reducers/users';
import discountsReducer from './reducers/discounts';

import RequestService from './services/request';

import thunk from 'redux-thunk';

import DevTools from './components/developer/DevTools';

const logger = store => next => action => {
    console.group(action.type);
    console.info('Dispatching: ', action);
    let result = next(action);
    console.log('Next state', store.getState());
    console.groupEnd(action.type);
    return result;
};

const store = createStore(
    combineReducers({
        routing: routerReducer,
        auth: authReducer,
        users: usersReducer,
        discounts: discountsReducer,
    }),
    compose(applyMiddleware(thunk/*, logger*/), DevTools.instrument())
);

export const request = new RequestService(store);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
    <Provider store={ store }>
        { routes(history) }
    </Provider>
), document.getElementById('root'));