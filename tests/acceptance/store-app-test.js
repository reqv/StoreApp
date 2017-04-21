import { test } from 'qunit';
import moduleForAcceptance from 'store-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | store app');

test('show products at homepage /', function(assert) {
  visit("/");

  andThen(function(){
    assert.equal(currentURL(),"/products","should redirect to products automatically");
  });
});

test('should show link to about info', function(assert) {
  visit("/");
  click('a:contains("About")');
  andThen(function(){
    assert.equal(currentURL(),"/about","should be at about page");
  });
});

test('should show link to contact info', function(assert) {
  visit("/");
  click('a:contains("contact")');
  andThen(() =>{
    assert.equal(currentURL(),"/contact","should be at contact page");
  });
});

test('should list products', function(assert) {
  visit("/");
  andThen(()=>{
    assert.equal(find('.listing').length,3,'Should list atleast 3 products.');
  });
});

test('filter the list by name', function(assert) {

});

test('show details about products', function(assert) {

});
