/* eslint-disable getter-return */
import Controller from '@ember/controller';

export default class CartController extends Controller {
  get subtotal() {
    return this.model.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  }
  get tax() {
    return 0.09 * this.subtotal;
  }
  get total() {
    return this.tax + this.subtotal;
  }
}
