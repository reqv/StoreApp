import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('product-listing', 'Integration | Component | product listing', {
  integration: true
});

// Set any properties with this.set('myProperty', 'value');
// Handle any actions with this.on('myAction', function(val) { ... });
let pro = Ember.Object.create({
    id: "sony-xperia-xz",
    name: "test-name",
    desc: "test-desc",
    price: 2012,
    image: "http://files.mgsm.pl/phones/sony-xperia-xz/sony-xperia-xz-big.jpg",
    availability: "In stock"
});

test('display products details', function(assert) {
  this.set('proObj',pro);
  this.render(hbs`{{product-listing pro=proObj}}`);
  assert.equal(this.$('.listing h3').text(), 'test-name',"Showing name of product.");
  assert.equal(this.$('.listing .desc').text().trim(), 'About: test-desc');
});

test('should toggle wide class on click', function(assert) {
  this.set('proObj',pro);
  this.render(hbs`{{product-listing pro=proObj}}`);
  assert.equal(this.$('.image.wide').length,0,"Init the image as small");
  this.$('image').click();
  andThen(()=>{
    assert.equal(this.$('.image.wide').length,1,"Render image as wide after click");
    this.$('image').click();
    assert.equal(this.$('.image.wide').length,0,"Clicked again to shrink image...");
  });
});
