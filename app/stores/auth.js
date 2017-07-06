import { observable, action } from 'mobx';
import { request } from '../index';

export default class AuthorizationStore {
  @observable user = null;
  @observable signingIn = false;
  @observable hasError = false;
  @observable error = null;
  @observable isAuthenticated = Boolean(localStorage.getItem('token'));

  @action.bound
  signOut() {
    localStorage.removeItem('token');
    this.user = null;
    this.isAuthenticated = false;
  }

  @action.bound
  async signIn(email, password) {
    this.signingIn = true;

    try {
      const result = await request.post('/api/auth/signin', { email, password });

      this.signingIn = false;

      if (result.msg) {
        this.hasError = true;
        this.error = result.msg;
        return;
      }

      this.hasError = false;
      this.error = null;

      if (result.token) {
        localStorage.setItem('token', result.token);
        this.isAuthenticated = true;
        this.user = result.user;
      }
    } catch (err) {
      this.signingIn = false;
      this.hasError = true;
      this.error = err.msg;
    }
  }

  @action.bound
  async signInWithToken() {
    const user = await request.get('/api/users/me');
    if (user.msg === 'Expired token') {
      return this.signOut();
    }
    this.user = user;
  }
}