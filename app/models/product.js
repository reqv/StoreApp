import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  desc: DS.attr(),
  price: DS.attr(),
  image: DS.attr(),
  availability: DS.attr()
});
