import Ember from 'ember';

export default Ember.Route.extend({
  audio: Ember.inject.service(),

  actions: {
    toggleSound() {
      this.toggleProperty('audio.enabled');
    }
  }
});
