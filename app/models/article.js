import Model, { attr } from '@ember-data/model';

export default class ArticleModel extends Model {
  @attr('string') title;
  @attr('string') full_text;
  @attr('string') image;
  @attr() created_at;
  @attr() updated_at;
}
