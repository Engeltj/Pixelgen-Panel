import { request } from '../index';

import {
  GET_ORDERS,
  GET_ORDERS_ERROR,
  GET_ORDERS_SUCCESS
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