import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Route, Router, IndexRedirect, IndexRoute } from 'react-router';

import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import LoginView from '../views/Login';
import UsersView from '../views/Users';
import DiscountsView from '../views/Discounts';

const userIsAuthenticated = (Component) => {
  class AuthenticatedComponent extends React.Component {

    static propTypes = {
      'isAuthenticated': PropTypes.bool.isRequired
    };

    componentWillMount() {
      this.checkAuth();
    }

    componentDidUpdate() {
      this.checkAuth();
    }

    checkAuth() {
      if (!this.props.isAuthenticated) {
        this.context.router.replace('/login');
      }
    }

    render() {
      return <Component {...this.props}/>;
    }

  }

  AuthenticatedComponent.contextTypes = {
    'router': PropTypes.object.isRequired
  };

  const mapStateToProps = (state) => ({
    'isAuthenticated': state.auth.isAuthenticated
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
};

const routes = (history) => (
  <Router history={history}>
    <Route path="/login" component={Blank}>
      <IndexRoute component={LoginView}/>
    </Route>

    <Route path="/" component={userIsAuthenticated(Main)}>
      <IndexRedirect to="/discounts"/>
      <Route path="discounts" component={DiscountsView}/>
      <Route path="users" component={UsersView}/>
    </Route>
  </Router>
);

export default routes;