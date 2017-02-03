import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import MainView from '../views/Main';
import MinorView from '../views/Minor';
import DashboardView from '../views/Dashboard';

import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRedirect to="/main" />
            <Route path="dashboard" component={DashboardView}> </Route>
            <Route path="main" component={MainView}> </Route>
            <Route path="minor" component={MinorView}> </Route>
        </Route>
    </Router>

);