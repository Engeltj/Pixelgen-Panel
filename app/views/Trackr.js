import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Header from '../components/common/Header';
import Table from '../components/common/Table';
import UserTableItem from '../components/users/UserTableItem';
import { inject, observer } from 'mobx-react';

@inject('trackr')
@observer
class Trackr extends Component {

  static propTypes = {
    'users': PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    _.bindAll(this, ['handleSave', 'handleChange']);
    this.state = {};
  }

  componentWillMount() {
    this.props.users.getUsers();
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <div>Hello world</div>
    );
  }
}

export default Trackr;