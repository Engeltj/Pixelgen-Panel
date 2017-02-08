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

        console.log(`Email: ${ email }, pass: ${ password }`);

        fetch('http://pixelgendesign.com:8889/api/auth/signin', {
            method: 'POST',
            // credentials: 'include',
            headers: {  
                "Content-type": "application/json"  
            },  
            body: JSON.stringify({ email, password })
        }).then(response => {
            console.log('Response: ', response);
            console.log(response.json().then(result => { console.log('result: ', result); }));
            dispatch({
                type: SIGN_IN_SUCCESS,
                response: response
            });
        }).catch(err => {
            console.error('Error...', err);
            dispatch({
                type: SIGN_IN_ERROR
            });
        });
    };
};