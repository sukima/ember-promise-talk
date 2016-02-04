import Ember from 'ember';

export default Ember.Controller.extend({
  audio: Ember.inject.service(),
  scores: Ember.inject.service(),
  collapsedMenu: true,

  actions: {
    toggleMenu() {
      this.toggleProperty('collapsedMenu');
    }
  }
});
