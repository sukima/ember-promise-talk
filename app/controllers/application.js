import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleMenu() {
      this.toggleProperty('collapsedMenu');
    }
  }
});
