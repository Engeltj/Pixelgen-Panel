import _ from 'lodash';
import { request } from '../index';

import {
  GET_USER_DISCOUNTS,
  GET_USER_DISCOUNTS_SUCCESS,
  GET_USER_DISCOUNTS_ERROR,
  SAVE_USER_DISCOUNTS,
  SAVE_USER_DISCOUNTS_SUCCESS,
  SAVE_USER_DISCOUNTS_ERROR
} from '../enums';

export const getDiscountsRequest = (payload) => ({
  'type': GET_USER_DISCOUNTS,
  payload
});

export const getDiscountsError = (error) => {
  return {
    'type': GET_USER_DISCOUNTS_ERROR,
    error
  };
};

export const getDiscountsSuccess = (payload) => {
  return {
    'type': GET_USER_DISCOUNTS_SUCCESS,
    payload
  };
};

export const getDiscounts = function (user) {
  return (dispatch) => {
    dispatch(getDiscountsRequest(user));

    request.get('/api/discounts/'+user._id)
      .then((body) => {
        if (body.msg) {
          return dispatch(getDiscountsError(body.msg));
        }
        dispatch(getDiscountsSuccess(body));
      }).catch((err) => {
        dispatch(getDiscountsError(err.msg));
      });
  };
};



export const saveDiscountsRequest = (payload) => ({
  'type': SAVE_USER_DISCOUNTS,
  payload
});

export const saveDiscountsError = (error) => {
  return {
    'type': SAVE_USER_DISCOUNTS_ERROR,
    error
  };
};

export const saveDiscountsSuccess = (payload) => {
  return {
    'type': SAVE_USER_DISCOUNTS_SUCCESS,
    payload
  };
};


export const saveDiscounts = function (user, discounts) {
  return (dispatch) => {
    dispatch(getDiscountsRequest(discounts));

    request.post('/api/discounts/'+user._id, discounts)
      .then((body) => {
        if (body.msg) {
          return dispatch(saveDiscountsError(body.msg));
        }
        dispatch(saveDiscountsSuccess(body));
      }).catch((err) => {
        dispatch(saveDiscountsError(err.msg));
      }); 
  }
}
