import fetch from 'isomorphic-fetch';
import _ from 'lodash';
import { request } from '../index'

import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR
} from '../enums';

export const getUsersRequest = () => ({
    type: GET_USERS
});

export const getUsersError = (error) => {
    return {
        type: GET_USERS_ERROR,
        error
    };
};

export const getUsersSuccess = (payload) => {
    return {
        type: GET_USERS_SUCCESS,
        payload
    };
};

export const getUsers = function() {
    return dispatch => {
        dispatch(getUsersRequest());

        let users = [
            {email: "email@mail.com", firstname: "Email", lastname: "Engel"},
            {email: "email2@mail.com", firstname: "Email2", lastname: "Engel"},
            {email: "email3@mail.com", firstname: "Email3", lastname: "Engel"},
            {email: "email4@mail.com", firstname: "Email4", lastname: "Engel"},
        ];

        dispatch(getUsersSuccess({users}));

        // request.get('/api/users')
        //     .then(body => {
        //         if (body.msg) {
        //             return dispatch(getUsersError(body.msg));
        //         }

        //         dispatch(getUsersSuccess(body));
        //     }).catch(err => {
        //         dispatch(getUsersError(err.msg));
        //     });

    };
};