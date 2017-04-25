import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-filter'],
  value: '',
  init(){
    this._super(...arguments);
    this.get('filter')('').then((results) => this.set('results', results));

  },
  didRender(){
    Ember.debug("did render...");
  },
  actions: {
    handleFilterEntry(){
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');
      filterAction(filterInputValue).then((filterResults)=>this.set('results',filterResults));
    }
  }
});
