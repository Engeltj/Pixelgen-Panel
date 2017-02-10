import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import LoginView from '../views/Login';
import UsersView from '../views/Users';
import DiscountsView from '../views/Discounts';

import { Route, Router, IndexRedirect, IndexRoute } from 'react-router';

const UserIsAuthenticated = Component => {
    class AuthenticatedComponent extends React.Component {
        componentWillMount() {
            this.checkAuth.call(this);
        }

        componentDidUpdate() {
            this.checkAuth.call(this);
        }
        
        checkAuth() {
            if (!this.props.isAuthenticated) {
                this.context.router.replace('/login');
            }
        }

        render() {
            return <Component { ...this.props } />;
        }
    }

    AuthenticatedComponent.contextTypes = {
        router: PropTypes.object.isRequired
    };

    const mapStateToProps = (state) => ({
        isAuthenticated: state.auth.isAuthenticated
    });

    return connect(mapStateToProps)(AuthenticatedComponent);
};

export default function(history) {
    return (
        <Router history={history}>
            <Route path="/login" component={Blank}>
                <IndexRoute component={LoginView}/>
            </Route>
            
            <Route path="/" component={UserIsAuthenticated(Main)}>
                <IndexRedirect to="/discounts" />
                <Route path="discounts" component={DiscountsView}> </Route>
                <Route path="users" component={UsersView}> </Route>
            </Route>
        </Router>
    );
}