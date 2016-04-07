import Ember from 'ember';

export default Ember.Component.extend({
  audio: Ember.inject.service(),
  scores: Ember.inject.service(),
  slides: Ember.inject.service()
});
