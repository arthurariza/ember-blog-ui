import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ArticleFormComponent extends Component {
  @service store;
  @service router;

  @tracked title = '';
  @tracked full_text = '';

  @action
  async createArticle(event) {
    event.preventDefault();

    const article = this.store.createRecord('article', {
      title: this.title,
      full_text: this.full_text,
    });

    try {
      await article.save();
      this.router.transitionTo('articles.show', article.id);
    } catch (e) {
      console.warn(e);
    }
  }
}
