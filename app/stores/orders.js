import { observable, action } from 'mobx';
import { request } from '../index';

export default class OrdersStore {
  @observable loading = false;
  @observable errorMessage = '';
  @observable orders = [];
  @observable order = null;

  @action.bound
  async getOrders() {
    this.loading = true;

    try {
      const result = await request.get('/api/orders/all');
      this.orders = result.orders;
      this.loading = false;
    } catch (err) {
      this.loading = false;
      this.errorMessage = 'Failed to obtain order details.';
    }
  }

  @action.bound
  clearOrderDetail() {
    this.order = null;
  }

  @action.bound
  getOrderDetail(order) {
    this.order = order;
  }
}