import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ArticlesShowRoute extends Route {
  @service store;

  model({ article_id }) {
    return this.store.findRecord('article', article_id);
  }
}
