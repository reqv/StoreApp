import Ember from 'ember';

export function counter(param) {
  let paramOk = '(error)';
  if(!isNaN(parseInt(param[0])))
    switch(param[0]){
      case 0: paramOk= "Wp.pl"; break;
      case 1: paramOk= "Onet.pl";break;
      case 2: paramOk= "Interia.pl"; break;
      default: paramOk= "Nie mam na liscie...";
    }
  return paramOk;
}

export default Ember.Helper.helper(counter);
