/* global $ */
import React, { Component, PropTypes } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router';

@inject(['auth'])
@observer
class Navigation extends Component {

  static defaultProps = {
    'user': {}
  };

  static propTypes = {
    'location': PropTypes.object,
    'user': PropTypes.object
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
    const { firstname, lastname, company } = this.props.auth.user || {};
    return (
      <nav className="navbar-default navbar-static-side " role="navigation">
        <ul className="nav metismenu" id="side-menu" ref={ this.handleRef('menu') }>
          <li className="nav-header">
            <div className="dropdown profile-element text-center">
              <img src="img/logo_tile_sm.svg" width="70"/>
              <span/>
              <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <span className="clear"> <span className="block m-t-xs"> {company}
                </span> <span className="text-muted text-xs block"><strong className="font-bold">{ `${firstname || ''} ${lastname || ''}` }&nbsp;</strong></span> </span> </a>
            </div>
            <div className="logo-element">
                PGD
            </div>
          </li>
          <li className={ this.activeRoute('/orders') }>
            <Link to="/orders"><i className="fa fa-credit-card"/> <span className="nav-label">Orders</span></Link>
          </li>
          <li className={ this.activeRoute('/discounts') }>
            <Link to="/discounts"><i className="fa fa-usd"/> <span className="nav-label">Discounts</span></Link>
          </li>
          <li className={ this.activeRoute('/users') }>
            <Link to="/users"><i className="fa fa-users"/> <span className="nav-label">Manage Users</span></Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;