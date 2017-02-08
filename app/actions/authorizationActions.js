import fetch from 'isomorphic-fetch';

import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR
} from '../enums';

export const signIn = function(email, password) {
    return dispatch => {
        dispatch({
            type: SIGN_IN
        });

        fetch('http://pixelgendesign.com:8889/api/auth/signin', {
            method: 'POST',
            body: { email, password }
        }).then(response => {
            console.log('Response: ', response);
            dispatch({
                type: SIGN_IN_SUCCESS,
                response: response
            });
        }).catch(err => {
            console.log('Error...');
            dispatch({
                type: SIGN_IN_ERROR
            });
        });
    };
};