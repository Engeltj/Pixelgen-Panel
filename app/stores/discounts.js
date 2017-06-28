import { observable, action } from 'mobx';
import { request } from '../index';

export default class DiscountStore {
  @observable gettingDiscounts = false;
  @observable savingDiscounts = false;
  @observable discounts = null;
  @observable user = '';

  @action.bound
  async getDiscounts(user) {
    this.gettingDiscounts = true;
    this.user = user;
    try {
      const result = await request.get(`/api/discounts/${ user._id }`);
      this.gettingDiscounts = false;
      this.discounts = result;
    } catch (err) {
      this.gettingDiscounts = false;
    }
  }

  @action.bound
  async saveDiscounts(user, discounts) {
    this.savingDiscounts = true;
    try {
      const result = await request.post(`/api/discounts/${ user._id }`, discounts);
      this.savingDiscounts = false;
      this.discounts = null;
      this.user = '';
    } catch (err) {
      this.savingDiscounts = false;
    }
  }
}