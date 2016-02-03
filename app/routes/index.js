import Ember from 'ember';

export default Ember.Route.extend({
  audio: Ember.inject.service(),
  scores: Ember.inject.service(),

  actions: {
    didTransition() {
      this.get('audio').stopAll();
      this.get('scores').cleanup();
      return true;
    }
  }
});
