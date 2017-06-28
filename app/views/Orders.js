import React, { Component, PropTypes } from 'react';
import { inject, observer } from 'mobx-react';
import Header from '../components/common/Header';
import Table from '../components/common/Table';
import OrderTableItem from '../components/orders/OrderTableItem';

@inject('orders')
@observer
class Orders extends Component {

  componentWillMount() {
    this.props.orders.getOrders();
  }

  componentWillReceiveProps(next) {
    console.log(next.orders.loading);
  }

  render() {
    if (!this.props.orders.order) {
      const routes = [{ 'path': '/orders', 'name': 'Orders' }];

      return (

        <div>
          <Header title="Manage Orders" routes={ routes }/>
          <div className="wrapper wrapper-content">
            <div className="row">
              <div className="col-lg-12">
                <Table title="Orders" headers={ [] }>
                  {this.props.orders.orders.map((order) => {
                    if (order.state != 5) {
                      return;
                    }
                    return <OrderTableItem key={ order._id } data={ order } manageFunc={ this.props.orders.getOrderDetail }/>;
                  })}

                </Table>
              </div>
            </div>
          </div>
        </div>
      );
    }
    const routes = [{ 'path': '/orders', 'name': 'Orders', 'action': this.props.orders.clearOrderDetail }, { 'path': '/orders', 'name': this.props.orders.order._id }];
    return (
      <div>
        <Header title="Manage Orders" routes={ routes }/>
        <div className="well bg-white">
          <button className="btn btn-success" onClick={ this.props.orders.clearOrderDetail }><i className="fa fa-chevron-left" aria-hidden="true"/>&nbsp;&nbsp;Back</button>
        </div>

        <div className="well bg-white">
          <div className="row">
            <div>
              <div className="col-sm-6" >
                <div>
                  <h4>First Name</h4>
                  <p>{this.props.orders.order.address.shipping.firstname}&nbsp;</p>
                </div>
                <div>
                  <h4>Last Name</h4>
                  <p>{this.props.orders.order.address.shipping.lastname}&nbsp;</p>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>{this.props.orders.order.email}</p>
                </div>
                <div>
                  <h4>Company</h4>
                  <p>{this.props.orders.order.company}&nbsp;</p>
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
                    {this.props.orders.order.cart.map((cart, i) => {
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
                    <p>{this.props.orders.order.address.shipping.firstname} {this.props.orders.order.address.shipping.lastname}</p>
                    <p><span>{this.props.orders.order.address.shipping.address2}</span>{this.props.orders.order.address.shipping.address1}</p>
                    <p>{this.props.orders.order.address.shipping.city}, {this.props.orders.order.address.shipping.stateId} {this.props.orders.order.address.shipping.zipcode}</p>
                    <p>{this.props.orders.order.address.shipping.countryId}</p>
                    <p>Phone: {this.props.orders.order.address.shipping.phone}</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h4>Billing Address</h4>
                  <hr/>
                  <div>
                    <p>{this.props.orders.order.address.billing.firstname} {this.props.orders.order.address.billing.lastname}</p>
                    <p><span>{this.props.orders.order.address.billing.address2}</span>{this.props.orders.order.address.billing.address1}</p>
                    <p>{this.props.orders.order.address.billing.city}, {this.props.orders.order.address.billing.stateId} {this.props.orders.order.address.billing.zipcode}</p>
                    <p>{this.props.orders.order.address.billing.countryId}</p>
                    <p>Phone: {this.props.orders.order.address.billing.phone}</p>
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

export default Orders;