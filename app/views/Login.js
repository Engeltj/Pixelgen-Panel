import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import fetch from 'isomorphic-fetch';

const signIn = function(email, password) {
    return dispatch => {
        dispatch({
            type: 'SIGN_IN'
        });

        fetch('http://pixelgendesign.com:8889/api/auth/signin', {
            method: 'POST',
            body: { email, password }
        }).then(response => {
            console.log('Response: ', response);
            dispatch({
                type: 'SIGN_IN_SUCCES',
                response: response
            });
        }).catch(err => {
            console.log('Error...');
            dispatch({
                type: 'SIGN_IN_ERROR'
            });
        });
    };
};

const mapStateToProps = function(state) {
    return {
        auth: state.auth
    };
}

const mapDispatchToProps = function(dispatch) {
    return {
        signIn(email, password) {
            dispatch(signIn(email, password))
        }
    }
}

class Login extends Component {
    constructor(props) {
        super(props);
        _.bindAll(this, ['handleSubmit']);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signIn(this.refs.email.value, this.refs.email.password);
    }

    render() {
        return (
            <div className="middle-box text-center loginscreen  animated fadeIn">
                <div>
                    <div>
                        <h1 className="logo-name" style={{marginLeft:-13+'px'}}>PGD</h1>
                    </div>
                    <h3>Welcome to Pixelgen</h3>
                    <p>Login in.</p>
                    { this.props.auth.signingIn && <p>Signing in...</p> }
                    { this.props.auth.hasError && <p>AN ERROR OCCURED...</p> }
                    <form className="m-t" role="form" onSubmit={ this.handleSubmit }>
                        <div className="form-group">
                            <input ref="email" type="email" className="form-control" placeholder="Username" required="" />
                        </div>
                        <div className="form-group">
                            <input ref="password" type="password" className="form-control" placeholder="Password" required="" />
                        </div>
                        <button type="submit" disabled={ this.props.auth.signingIn } className="btn btn-primary block full-width m-b">Login</button>

                    </form>
                </div>
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
