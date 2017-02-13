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
    return (
      <div>
        <Header title="Order History">
          <Link to="/orders">Orders</Link>
        </Header>
      </div>
    );
  }

}

Orders.propTypes = {
  orders: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  getOrders: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);