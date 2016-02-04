import Ember from 'ember';

export default Ember.Route.extend({
  audio: Ember.inject.service(),
  scores: Ember.inject.service(),
  slides: Ember.inject.service(),

  actions: {
    toggleSound() {
      this.toggleProperty('audio.enabled');
    },

    resetScores() {
      this.get('scores').reset();
    },

    resetSlides() {
      this.get('slides').reset();
    }
  }
});
