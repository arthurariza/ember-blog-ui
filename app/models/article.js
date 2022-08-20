import Model, { attr } from '@ember-data/model';

export default class ArticleModel extends Model {
  @attr('string') title;
  @attr('string') full_text;
  @attr('string', { defaultValue: 'placeholder.jpg' }) image;
  @attr() created_at;
  @attr() updated_at;
  @attr text;
}
