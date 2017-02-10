import fetch from 'isomorphic-fetch';
import _ from 'lodash';
import { request } from '../index';
import { getUsers } from '../actions/userActions';

import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_USER_DISCOUNTS,
  GET_USER_DISCOUNTS_SUCCESS,
  GET_USER_DISCOUNTS_ERROR
} from '../enums';

