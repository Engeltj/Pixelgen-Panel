import React, { Component } from 'react';
import { signOut } from '../../actions/authorizationActions';
import { connect } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { Link, Location } from 'react-router';

class Navigation extends Component {

    static defaultProps = {
        user: {}
    };

    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    secondLevelActive(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    }

    render() {
        const { firstname, lastname, company } = this.props.user;
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                <ul className="nav metismenu" id="side-menu" ref="menu">
                    <li className="nav-header">
                        <div className="dropdown profile-element"> <span>
                            </span>
                            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                        <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">{ `${ firstname || '' } ${ lastname || '' }` }</strong>
                            </span> <span className="text-muted text-xs block">{ company }<b className="caret"></b></span> </span> </a>
                            <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                <li><a onClick={ this.props.signOut }> Logout</a></li>
                            </ul>
                        </div>
                        <div className="logo-element">
                            PGD
                        </div>
                    </li>
                    <li className={this.activeRoute("/discounts")}>
                        <Link to="/discounts"><i className="fa fa-usd"></i> <span className="nav-label">Discounts</span></Link>
                    </li>
                    <li className={this.activeRoute("/users")}>
                        <Link to="/users"><i className="fa fa-th-large"></i> <span className="nav-label">Manage Users</span></Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signOut() {
        dispatch(signOut());
    }
});

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user || undefined
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);