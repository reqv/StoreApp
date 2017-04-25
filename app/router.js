import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('products', function() {
    this.route('show', {path: '/:product_id'});
  });
  this.route('testing');
  this.route('product');
  this.route('not-found',{path:'/*path'});
  this.route('loading');
});

export default Router;
