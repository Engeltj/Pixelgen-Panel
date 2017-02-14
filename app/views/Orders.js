import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from '../components/common/Header';
import { getOrders } from '../actions/orderActions';

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
    }
  };
};

class Orders extends Component {
  // constructor(props) {
  //   super(props);
  //   _.bindAll(this, []);
  //   this.state = {}
  //   this.state.loading = false;
  // }

  componentWillMount() {
    this.props.getOrders();
  }

  render() {
    const routes = [{ 'path': '/orders', 'name': 'Orders' }];
    if (!this.props.orders.orders) {
      return (

        <div>
          <Header title="Manage Orders" routes={ routes }/>
          <div className="wrapper wrapper-content">
            <div className="row">
              <div className="col-lg-12">
                <Table title="Orders" manageFunc={ this.props.getOrders } headers={ [] }>
                  {this.props.orders.map((order) => {
                    return <OrderTableItem key={ order._id } data={ order } manageFunc={ this.props.getOrders }/>;
                  })}

                </Table>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (<div>hello</div>);
  }

}

Orders.propTypes = {
  'orders': PropTypes.array.isRequired,
  'loading': PropTypes.bool.isRequired,
  'errorMessage': PropTypes.string,
  'getOrders': PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);