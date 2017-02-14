import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import Header from '../components/common/Header';

class Users extends Component {

  render() {
    const routes = [{ 'path': '/users', 'name': 'Users' }];

    return (
      <div>
        <Header title="Manage User Accounts" routes={ routes }/>
        <div className="wrapper wrapper-content">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center m-t-lg" style={{ 'userSelect': 'none' }}>
                <h1/>
                <small>
                    It is an application skeleton for a typical web app. You can use it to quickly bootstrap your webapp projects.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Users;