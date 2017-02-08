import React from 'react';
import ReactDOM from 'react-dom';
import { Router,  browserHistory  } from 'react-router';
import routes from './config/routes';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import jquery from 'jquery';
import metismenu from 'metismenu';
import bootstrap from 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'animate.css/animate.min.css';
import '../public/styles/style.scss';

import countReducer from './reducers/count';

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
        count: countReducer
    }),
    applyMiddleware(logger)
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
    <Provider store={ store }>
        <Router history={ history }>
            { routes }
        </Router>
    </Provider>
), document.getElementById('root'));