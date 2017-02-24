import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/common/Header';
import { getOrders, getOrderDetail, clearOrderDetail } from '../actions/orderActions';

import Table from '../components/common/Table';
import OrderTableItem from '../components/orders/OrderTableItem';

const mapStateToProps = function (state) {
  return {
    ...state.orders
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    getOrders() {
      dispatch(getOrders());
    },
    getOrderDetail(order) {
      dispatch(getOrderDetail(order));
    },
    clearOrderDetail() {
      dispatch(clearOrderDetail());
    }
  };
};

class Orders extends Component {

  static propTypes = {
    'orders': PropTypes.array.isRequired,
    'order': PropTypes.object,
    'getOrders': PropTypes.func.isRequired,
    'getOrderDetail': PropTypes.func.isRequired,
    'clearOrderDetail': PropTypes.func.isRequired
  };

  // constructor(props) {
  //   super(props);
  //   // _.bindAll(this, []);
  // }

  componentWillMount() {
    this.props.getOrders();
  }

  componentWillUnmount() {
    // this.props.order = null;
  }

  render() {
    if (!this.props.order) {
      const routes = [{ 'path': '/orders', 'name': 'Orders' }];

      return (

        <div>
          <Header title="Manage Orders" routes={ routes }/>
          <div className="wrapper wrapper-content">
            <div className="row">
              <div className="col-lg-12">
                <Table title="Orders" headers={ [] }>
                  {this.props.orders.map((order) => {
                    if (order.state != 5) {
                      return;
                    }
                    return <OrderTableItem key={ order._id } data={ order } manageFunc={ this.props.getOrderDetail }/>;
                  })}

                </Table>
              </div>
            </div>
          </div>
        </div>
      );
    }
    const routes = [{ 'path': '/orders', 'name': 'Orders', 'action': this.props.clearOrderDetail }, { 'path': '/orders', 'name': this.props.order._id }];
    return (
      <div>
        <Header title="Manage Orders" routes={ routes }/>
        <div className="well bg-white">
          <button className="btn btn-success" onClick={ this.props.clearOrderDetail }><i className="fa fa-chevron-left" aria-hidden="true"/>&nbsp;&nbsp;Back</button>
        </div>

        <div className="well bg-white">
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
              <div className="col-sm-6">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.order.cart.map((cart, i) => {
                      return (<tr key={ i }>
                        <td>{cart.product.name}</td>
                        <td> {cart.quantity}</td>
                      </tr>);
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="well  bg-white">
          <div className="row">
            <div>
              <div className="col-xs-12">
                <div className="col-sm-6">
                  <h4>Shipping Address</h4>
                  <hr/>
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
                  <hr/>
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
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);