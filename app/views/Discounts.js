import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Header from '../components/common/Header';
import Table from '../components/common/Table';
import UserTableItem from '../components/users/UserTableItem';
import { inject, observer } from 'mobx-react';

@inject('discounts', 'users')
@observer
class Discounts extends Component {

  static propTypes = {
    'users': PropTypes.object.isRequired,
    'discounts': PropTypes.object.isRequired
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

  handleSave() {
    this.props.discounts.saveDiscounts(this.props.discounts.user, this.state);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const routes = [{ 'path': '/discounts', 'name': 'Discounts', 'action': this.props.back }];

    if (!this.props.discounts.discounts) {
      return (

        <div>
          <Header title="Manage Discounts" routes={ routes }/>

          <div className="wrapper wrapper-content">
            <div className="row">
              <div className="col-lg-12">
                
                <Table title="Users" headers={ [] }>
                  <div className="input-group">
                    <input type="text" placeholder="Search" className="input form-control"/>
                    <span className="input-group-btn">
                      <button type="button" className="btn btn btn-default"> <i className="fa fa-search"/></button>
                    </span>
                  </div>
                  {this.props.users.users.map((user) => {
                    return <UserTableItem key={ user._id } user={ user } manageFunc={ this.props.discounts.getDiscounts }/>;
                  })}
                </Table>
              </div>
            </div>
          </div>
        </div>
      );
    }
    routes.push({ 'path': '/discounts/' + this.props.discounts.user._id, 'name': this.props.discounts.user.email });
    return (
      <div>
        <Header title="Manage Discounts" routes={ routes }/>

        <Table title="" manageFunc={ this.props.discounts.getDiscounts } headers={ ['Product', 'Price (USD)'] }>
          <button type="button" className="btn btn-success pull-right" onClick={ this.handleSave }><i className="fa fa-floppy-o" aria-hidden="true"/>&nbsp;Save</button>
          {this.props.discounts.discounts.map((product, i) => {
            return (
              <tr key={ i }>
                <td>{product.name}</td>
                <td><input type="text" className="form-control" name={ product._id } onChange={ this.handleChange } placeholder={ product.cost }/></td>
                {/* <td className="client-status"><span className="label label-primary">Active</span></td> */}
              </tr>
            );
          })}
        </Table>
      </div>
    );
  }
}

export default Discounts;