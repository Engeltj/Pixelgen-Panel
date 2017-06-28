import { observable, action } from 'mobx';
import { request } from '../index';

export default class UsersStore {
  @observable gettingUsers = false;
  @observable users = [];

  @action.bound
  async getUsers() {
    this.gettingUsers = true;
    try {
      const result = await request.get('/api/useres');
      this.gettingUsers = false;
      this.users = result.users;
    } catch (err) {
      this.gettingUsers = false;
    }
  }
}