import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ItemRoute extends Route {
  @service store;
  async model(params) {
    const { item_id } = params;
    const data = await this.store.findAll('product');
    const product = data.find(({ id }) => id === item_id);
    return product;
  }
}
