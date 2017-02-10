import fetch from 'isomorphic-fetch';
import _ from 'lodash';

import {

} from '../enums';


export const getUsers = function(email, password) {
    return dispatch => {
        dispatch(getUsersRequest());

        fetch('http://localhost:8889/api/users', {
            method: 'GET',
            headers: {
                "Content-type": "application/json"  
            },
            body: JSON.stringify({ email, password })
        }).then(response => {
            return response.json()
        }).then(body => {
            if (body.msg) {
                return dispatch(signInError(body.msg));
            }

            dispatch(signInSuccess(body));
        }).catch(err => {
            dispatch(signInError(err));
        });
    };
};