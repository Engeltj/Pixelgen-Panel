import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';


const mapStateToProps = function(state) {
    return {
        
    };
}

const mapDispatchToProps = function(dispatch) {
    return {
    }
}

class Login extends Component {


    render() {
        return (
            <div className="middle-box text-center loginscreen  animated fadeIn">
                <div>
                    <div>
                        <h1 className="logo-name" style={{marginLeft:-13+'px'}}>PGD</h1>
                    </div>
                    <h3>Welcome to Pixelgen</h3>
                    <p>Login in.</p>
                    <form className="m-t" role="form" action="#">
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Username" required="" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" required="" />
                        </div>
                        <button type="submit" className="btn btn-primary block full-width m-b">Login</button>

                    </form>
                </div>
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
