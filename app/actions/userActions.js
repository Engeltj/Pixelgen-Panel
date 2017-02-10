import _ from 'lodash';
import { request } from '../index';

import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR
} from '../enums';

export const getUsersRequest = () => ({
  'type': GET_USERS
});

export const getUsersError = (error) => {
  return {
    'type': GET_USERS_ERROR,
    error
  };
};

export const getUsersSuccess = (payload) => {
  return {
    'type': GET_USERS_SUCCESS,
    payload
  };
};

export const getUsers = function () {
  return (dispatch) => {
    dispatch(getUsersRequest());

    request.get('/api/users')
            .then((body) => {
              if (body.msg) {
                return dispatch(getUsersError(body.msg));
              }

              dispatch(getUsersSuccess(body));
            }).catch((err) => {
              dispatch(getUsersError(err.msg));
            });
  };
};