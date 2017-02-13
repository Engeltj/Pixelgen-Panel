import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getUsers } from '../actions/userActions';
import { getDiscounts, saveDiscounts } from '../actions/discountActions';
import Header from '../components/common/Header';
// import IBox from '../components/common/IBox';
import UserTable from '../components/users/UserTable';
import UserTableItem from '../components/users/UserTableItem';
import IBox from '../components/common/IBox';
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
    },
    saveDiscounts(user, discounts) {
      dispatch(saveDiscounts(user, discounts));
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
    _.bindAll(this, ['handleSave', 'handleChange']);
    this.state = {}
  }

  componentWillMount() {
    this.props.getUsers();
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {

  }

  handleSave(e) {
    this.props.saveDiscounts(this.props.discounts.user, this.state);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const routes = [{path: '/discounts', name: 'Discounts'}];
    
    if (!this.props.discounts.discounts) {
      return (

        <div>
          <Header title="Manage Discounts" routes={routes} />

          <div className="wrapper wrapper-content">
            <div className="row">
              <div className="col-lg-12">
                <UserTable title="Users" users={ this.props.users } manageFunc={ this.props.getDiscounts } headers={[]}>
                    
                    {this.props.users.users.map((user) => {
                       return <UserTableItem key={ user._id } user={ user } manageFunc={ this.props.getDiscounts }/>;
                    })}
                </UserTable>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      routes.push({path:'/discounts/'+this.props.discounts.user._id, name: this.props.discounts.user.email})
      return (
        <div>
          <Header title="Manage Discounts" routes={routes} />
          <IBox title="">
            <div>
              <button type="button" className="btn btn-success pull-right" onClick={this.handleSave}><i className="fa fa-floppy-o" aria-hidden="true" />&nbsp;Save</button>
            </div>
            <br/>
            <br/>
          </IBox>
          <UserTable className="col-md-6 col-md-offset-3" title="Users" users={ this.props.users } manageFunc={ this.props.getDiscounts } headers={['Product', 'Price (USD)']}>
              {this.props.discounts.discounts.map((product ,i) => {
                    return (
                      <tr key={i}>
                        <td>{ product.name }</td>
                        <td><input type="text" className="form-control" name={product._id} onChange={ this.handleChange } placeholder={product.cost}/></td>
                        {/* <td className="client-status"><span className="label label-primary">Active</span></td> */}
                      </tr>
                    )
              })}
          </UserTable>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Discounts);