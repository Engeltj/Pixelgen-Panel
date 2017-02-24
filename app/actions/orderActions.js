import { request } from '../index';

import {
  GET_ORDERS,
  GET_ORDERS_ERROR,
  GET_ORDERS_SUCCESS,
  GET_ORDER_DETAIL,
  GET_ORDER_DETAIL_ERROR,
  GET_ORDER_DETAIL_SUCCESS,
  CLEAR_ORDER_DETAIL
} from '../enums';

export const getOrdersRequest = () => ({
  'type': GET_ORDERS
});

export const getOrdersSuccess = (payload) => ({
  'type': GET_ORDERS_SUCCESS,
  payload
});

export const getOrdersError = (payload) => ({
  'type': GET_ORDERS_ERROR,
  payload
});

export const getOrderDetailRequest = () => ({
  'type': GET_ORDER_DETAIL
});

export const getOrderDetailSuccess = (payload) => ({
  'type': GET_ORDER_DETAIL_SUCCESS,
  payload
});

export const getOrderDetailError = (payload) => ({
  'type': GET_ORDER_DETAIL_ERROR,
  payload
});

export const getOrderDetail = function (order) {
  return (dispatch) => {
    dispatch(getOrderDetailRequest());
    dispatch(getOrderDetailSuccess(order));
  };
};

export const clearOrderDetail = () => ({
  'type': CLEAR_ORDER_DETAIL
});

export const getOrders = () => {
  return (dispatch) => {
    dispatch(getOrdersRequest());

    request.get('/api/orders/all')
      .then((body) => {
        dispatch(getOrdersSuccess(body));
      })
      .catch((err) => {
        dispatch(getOrdersError(err));
      });
  };
};