import React, { Component, PropTypes } from 'react';
import { observer, inject } from 'mobx-react';
import _ from 'lodash';

@inject('auth', 'routing')
@observer
class Login extends Component {

  constructor(props) {
    super(props);
    _.bindAll(this, ['handleSubmit', 'handleChange', 'checkAuth']);


    this.state = {
      'email': '',
      'password': ''
    };
  }

  static contextTypes = {
    'router': PropTypes.object.isRequired
  };

  static propTypes = {
    'auth': PropTypes.object.isRequired,
    'routing': PropTypes.object.isRequired
  };

  componentWillMount() {
    this.checkAuth();
  }

  componentDidUpdate() {
    this.checkAuth();
  }

  checkAuth() {
    if (this.props.auth.isAuthenticated) {
      this.context.router.replace('/orders');
    }
  }

  
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.auth.signIn(email, password);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    this.props.auth.isAuthenticated;
    return (
      <div className="middle-box text-center loginscreen  animated fadeIn">
        <div>
          <div>
            <h1 className="logo-name" style={{ 'marginLeft': -13 + 'px' }}>PGD</h1>
          </div>
          <h3>Welcome to Pixelgen</h3>
          <p>Log in.</p>
          <form className="m-t" role="form" onSubmit={ this.handleSubmit }>
            <div className="form-group">
              <input onChange={ this.handleChange } value={ this.state.email } type="email" name="email" className="form-control" placeholder="Username" required=""/>
            </div>
            <div className="form-group">
              <input onChange={ this.handleChange } value={ this.state.password } type="password" name="password" className="form-control" placeholder="Password" required=""/>
            </div>
            { !this.props.auth.signingIn && <button type="submit" className="btn btn-primary block full-width m-b">Login</button>}

            { this.props.auth.signingIn && <p className="animated fadeIn">Signing in...</p> }
            { this.props.auth.hasError && <em className="animated fadeIn">{ this.props.auth.error }</em> }
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
