import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from '../components/common/Header';
import { getOrders } from '../actions/orderActions';

const mapStateToProps = (state) => ({
  ...state.orders
});

const mapDispatchToProps = (dispatch) => ({
  getOrders() {
    dispatch(getOrders());
  }
});

class Orders extends Component {

  componentWillMount() {
    this.props.getOrders();
  }

  render() {
    const routes = [{path:'/orders', name:'Orders'}]
    return (
      
      <div>
        <Header title="Manage Discounts" routes={routes} />
      </div>
    );
  }

}

Orders.propTypes = {
  'orders': PropTypes.array.isRequired,
  'loading': PropTypes.bool.isRequired,
  'errorMessage': PropTypes.string,
  'getOrders': PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);