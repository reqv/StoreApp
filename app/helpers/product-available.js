import Ember from 'ember';

export function productAvailable(param) {
  if(param < 1)return "unavailable";
  if(param < 4)return "last items left";
  return "in Stock";
}

export default Ember.Helper.helper(productAvailable);
