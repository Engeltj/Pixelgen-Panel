import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getUsers } from '../actions/userActions';
import { getDiscounts } from '../actions/discountActions';
import Header from '../components/common/Header';
// import IBox from '../components/common/IBox';
// import UserTableItem from '../components/users/UserTableItem';
import UserTable from '../components/users/UserTable';
// import { getDiscounts } from '../actions/discountActions';

const mapStateToProps = function (state) {
  return {
    'users': state.users,
    'discounts': state.discounts
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    getUsers() {
      dispatch(getUsers());
    },
    getDiscounts(user) {
      dispatch(getDiscounts(user));
    }
  };
};

class Discounts extends Component {

  static propTypes = {
    'getUsers': PropTypes.func.isRequired,
    'getDiscounts': PropTypes.func.isRequired,
    'users': PropTypes.object,
    'discounts': PropTypes.object
  };

  constructor(props) {
    super(props);
    _.bindAll(this, []);

    console.log(props.discounts);
  }

  componentWillMount() {
    this.props.getUsers();
  }

  componentDidUpdate() {

  }

  render() {
    if (!this.props.discounts.discounts) {
      return (

        <div>
          <Header title="Manage Discounts">
            <Link to="/discounts">Discounts</Link>
          </Header>

          <div className="wrapper wrapper-content">
            <div className="row">
              <div className="col-lg-12">
                <UserTable title="Users" users={ this.props.users } manageFunc={ this.props.getDiscounts }/>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div> Hello </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Discounts);