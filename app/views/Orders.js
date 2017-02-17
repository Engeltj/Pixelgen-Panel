import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from '../components/common/Header';
import { getOrders, getOrderDetail } from '../actions/orderActions';

import Table from '../components/common/Table';
import OrderTableItem from '../components/orders/OrderTableItem';

const mapStateToProps = function (state) {
  return {
    ...state.orders,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    getOrders() {
      dispatch(getOrders());
    },
    getOrderDetail(order) {
      dispatch(getOrderDetail(order));
    }
  };
};

class Orders extends Component {

  static propTypes = {
    'orders': PropTypes.array.isRequired,
    'order': PropTypes.object,
    'loading': PropTypes.bool.isRequired,
    'errorMessage': PropTypes.string,
    'getOrders': PropTypes.func.isRequired,
    'getOrderDetail': PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {};
  }
  // constructor(props) {
  //   super(props);
  //   _.bindAll(this, []);
  //   this.state = {}
  //   this.state.loading = false;
  // }


  componentWillMount() {
    this.props.getOrders();
  }

  componentWillUnmount() {
    // this.props.order = null;
  }

  render() {
    if (!this.props.order) {
      let routes = [{ 'path': '/orders', 'name': 'Orders' }];
      
      return (

        <div>
          <Header title="Manage Orders" routes={routes} />
          <div className="wrapper wrapper-content">
            <div className="row">
              <div className="col-lg-12">
                <Table title="Orders" headers={[]}>
                  {this.props.orders.map((order) => {
                    return <OrderTableItem key={order._id} data={order} manageFunc={this.props.getOrderDetail} />;
                  })}

                </Table>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      let routes = [{ 'path': '/orders', 'name': 'Orders' }, { 'path': '/orders', 'name': this.props.order._id }];
      return (
        <div>
          <Header title="Manage Orders" routes={routes} />
          <div className="well">
            <div className="row">
              <div>
                <div className="col-sm-6" >
                  <div>
                    <h4>First Name</h4>
                    <p>{this.props.order.address.shipping.firstname}&nbsp;</p>
                  </div>
                  <div>
                    <h4>Last Name</h4>
                    <p>{this.props.order.address.shipping.lastname}&nbsp;</p>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>{this.props.order.email}</p>
                  </div>
                  <div>
                    <h4>Company</h4>
                    <p>{this.props.order.company}&nbsp;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="well">
            <div className="row">
              <div>
                <div className="col-xs-12">
                  <div className="col-sm-6">
                    <h4>Shipping Address</h4>
                    <hr></hr>
                    <div >
                      <p>{this.props.order.address.shipping.firstname} {this.props.order.address.shipping.lastname}</p>
                      <p><span>{this.props.order.address.shipping.address2}</span>{this.props.order.address.shipping.address1}</p>
                      <p>{this.props.order.address.shipping.city}, {this.props.order.address.shipping.stateId} {this.props.order.address.shipping.zipcode}</p>
                      <p>{this.props.order.address.shipping.countryId}</p>
                      <p>Phone: {this.props.order.address.shipping.phone}</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h4>Billing Address</h4>
                    <hr></hr>
                    <div>
                      <p>{this.props.order.address.billing.firstname} {this.props.order.address.billing.lastname}</p>
                      <p><span>{this.props.order.address.billing.address2}</span>{this.props.order.address.billing.address1}</p>
                      <p>{this.props.order.address.billing.city}, {this.props.order.address.billing.stateId} {this.props.order.address.billing.zipcode}</p>
                      <p>{this.props.order.address.billing.countryId}</p>
                      <p>Phone: {this.props.order.address.billing.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-sm-offset-3">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {this.props.order.cart.map((cart, i) => {
                  return (<tr key={i}>
                    <td>{cart.product.name}</td>
                    <td> {cart.quantity}</td>
                  </tr>)
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);