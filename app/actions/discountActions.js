import _ from 'lodash';
import { request } from '../index';

import {
  GET_USER_DISCOUNTS,
  GET_USER_DISCOUNTS_SUCCESS,
  GET_USER_DISCOUNTS_ERROR
} from '../enums';

export const getDiscountsRequest = () => ({
  'type': GET_USER_DISCOUNTS
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
    dispatch(getDiscountsRequest());
    console.log(user);
    dispatch(getDiscountsSuccess({ 'a': 1 }));

    // request.get('/api/users/'+user._id+'/discounts')
    //         .then((body) => {
    //           if (body.msg) {
    //             return dispatch(getDiscountsError(body.msg));
    //           }

    //           dispatch(getDiscountsSuccess(body));
    //         }).catch((err) => {
    //           dispatch(getDiscountsError(err.msg));
    //         });
  };
};