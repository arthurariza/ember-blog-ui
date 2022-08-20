import EmberRouter from '@ember/routing/router';
import config from 'blog-ui/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('articles', function () {
    this.route('show', { path: '/:article_id' });
    this.route('new', { path: '/create' });
    this.route('index', { path: '/' });
  });
});
