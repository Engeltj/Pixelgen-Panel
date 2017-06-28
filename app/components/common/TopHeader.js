/* global $ */
import React, { PropTypes } from 'react';
import { inject, observer } from 'mobx-react';
import { smoothlyMenu } from '../layouts/Helpers';

@inject('auth')
@observer
class TopHeader extends React.Component {

  handleToggleNavigation(e) {
    e.preventDefault();
    $('body').toggleClass('mini-navbar');
    smoothlyMenu();
  }

  render() {
    return (
      <div className="row border-bottom">
        <nav className="navbar navbar-static-top white-bg" role="navigation" style={{ 'marginBottom': 0 }}>
          <div className="navbar-header">
            <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " onClick={ this.handleToggleNavigation } href="#"><i className="fa fa-bars"/> </a>
          </div>
          <ul className="nav navbar-top-links navbar-right">
            <li className="pull-right logout-btn">
              <a onClick={ this.props.auth.signOut }>
                <i style={{color: 'white'}} className="fa fa-sign-out"/> <span style={{width: '75px', color: 'white'}}>LOGOUT</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default TopHeader;