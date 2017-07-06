import { observable, action } from 'mobx';
import { request } from '../index';

export default class OrdersStore {
  @observable loading = false;
  @observable errorMessage = '';
  @observable orders = [];
  @observable order = null;

  @action.bound
  setLoading(val) {
    this.loading = val;
  }

  @action.bound
  success(orders) {
    this.orders = orders || [];
  }
  @action.bound
  error(errmsg) {
    this.errorMessage = errmsg;
  }

  async getOrders() {
    this.setLoading(true);

    try {
      const result = await request.get('/api/orders/all');
      this.setLoading(false);
      this.success(result.orders);
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