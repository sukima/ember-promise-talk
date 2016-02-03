import Ember from 'ember';

export default Ember.Route.extend({
  audio: Ember.inject.service(),
  scores: Ember.inject.service(),

  actions: {
    willTransition() {
      this.get('audio').stopAll();
      return true;
    }
  }
});
