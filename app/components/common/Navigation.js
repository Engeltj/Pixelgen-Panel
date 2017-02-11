/* global $ */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { signOut } from '../../actions/authActions';

class Navigation extends Component {

  static defaultProps = {
    'user': {}
  };

  static propTypes = {
    'location': PropTypes.object,
    'user': PropTypes.object,
    'onSignOut': PropTypes.func.isRequired
  };

  componentDidMount() {
    const { menu } = this;
    $(menu).metisMenu();
  }

  handleRef(name) {
    return (ref) => {
      this[name] = ref;
    };
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
  }

  secondLevelActive(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav nav-second-level collapse in' : 'nav nav-second-level collapse';
  }

  render() {
    const { firstname, lastname, company } = this.props.user;
    return (
      <nav className="navbar-default navbar-static-side " role="navigation">
        <ul className="nav metismenu" id="side-menu" ref={this.handleRef('menu')}>
          <li className="nav-header">
            <div className="dropdown profile-element text-center">
              <img src="img/logo_tile_sm.svg" width="70"/>
              <span/>
              <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <span className="clear"> <span className="block m-t-xs"> {company}
                </span> <span className="text-muted text-xs block"><strong className="font-bold">{ `${firstname || ''} ${lastname || ''}` }&nbsp;</strong><b className="caret"/></span> </span> </a>
              <ul className="dropdown-menu m-t-xs">
                <li><a onClick={this.props.onSignOut}> Logout</a></li>
              </ul>
            </div>
            <div className="logo-element">
                            PGD
                        </div>
          </li>
          <li className={this.activeRoute('/discounts')}>
            <Link to="/discounts"><i className="fa fa-usd"/> <span className="nav-label">Discounts</span></Link>
          </li>
          <li className={this.activeRoute('/users')}>
            <Link to="/users"><i className="fa fa-th-large"/> <span className="nav-label">Manage Users</span></Link>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSignOut() {
    dispatch(signOut());
  }
});

const mapStateToProps = (state) => ({
  'isAuthenticated': state.auth.isAuthenticated,
  'user': state.auth.user || undefined
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);