import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import LoginView from '../views/Login';
import UsersView from '../views/Users';
import DiscountsView from '../views/Discounts';

import { Route, Router, IndexRedirect, IndexRoute, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/login" component={Blank}>
            <IndexRoute component={LoginView}/>
        </Route>
        
        <Route path="/" component={Main}>
            <IndexRedirect to="/login" />
            <Route path="discounts" component={DiscountsView}> </Route>
            <Route path="users" component={UsersView}> </Route>
        </Route>
    </Router>

);