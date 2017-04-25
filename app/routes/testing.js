import Ember from 'ember';

export default Ember.Route.extend({
  model(){

  },
  actions: {
    changeLink(){
      let _whatLinkNext = this.controller.get('whatLinkNext');
      let link = document.getElementById('test-link');
      _whatLinkNext++;
      Ember.debug(`To jest nowa zmienna ${_whatLinkNext}`);
      if(_whatLinkNext === 1){
        link.href = "http://www.wp.pl";
      }
      else if(_whatLinkNext === 2){
        link.href = "http://www.onet.pl";
      }else{
        link.href = "http://www.interia.pl";
        _whatLinkNext = 0;
      }
      this.controller.set('whatLinkNext',_whatLinkNext);
    }
  },
  setupController(controller){
    //alert("Uważaj na tą stronę, trwają tu różne eksperymenta!");
  }
});
