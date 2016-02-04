import Ember from 'ember';

export default Ember.Controller.extend({
  audio: Ember.inject.service(),
  slides: Ember.inject.service()
});
