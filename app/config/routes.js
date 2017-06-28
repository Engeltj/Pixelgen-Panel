import React, { PropTypes } from 'react';
import { Route, Router, IndexRedirect, IndexRoute } from 'react-router';
import { inject, observer } from 'mobx-react';

import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import LoginView from '../views/Login';
import UsersView from '../views/Users';
import DiscountsView from '../views/Discounts';
import OrdersView from '../views/Orders';


const userIsAuthenticated = (Component) => {
  @inject('auth', 'routing')
  @observer
  class AuthenticatedComponent extends React.Component {

    static propTypes = {
      'auth': PropTypes.object.isRequired,
      'routing': PropTypes.object.isRequired
    };

    componentWillMount() {
      this.checkAuth();
    }

    componentDidUpdate() {
      this.checkAuth();
    }

    checkAuth() {
      console.log(this.props.auth.isAuthenticated);
      if (!this.props.auth.isAuthenticated) {
        this.props.routing.push('/login');
      }
    }

    render() {
      console.log(this.props.auth.isAuthenticated);
      return <Component { ...this.props }/>;
    }

  }

  return AuthenticatedComponent;
};

const routes = (history) => (
  <Router history={ history }>
    <Route path="/login" component={ Blank }>
      <IndexRoute component={ LoginView }/>
    </Route>

    <Route path="/" component={ userIsAuthenticated(Main) }>
      <IndexRedirect to="/orders"/>
      <Route path="discounts" component={ DiscountsView }/>
      <Route path="users" component={ UsersView }/>
      <Route path="orders" component={ OrdersView }/>
    </Route>
  </Router>
);

export default routes;