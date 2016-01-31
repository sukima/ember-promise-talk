import Ember from 'ember';

export default Ember.Controller.extend({
  scores: Ember.inject.service(),
  collapsedMenu: true,

  actions: {
    toggleMenu() {
      this.toggleProperty('collapsedMenu');
    }
  }
});
