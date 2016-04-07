import Ember from 'ember';

export default Ember.Component.extend({
  audio: Ember.inject.service(),
  scores: Ember.inject.service(),

  tagName: 'nav',
  classNames: ['navbar', 'navbar-default', 'navbar-static-top'],

  collapsedMenu: true,

  actions: {
    toggleMenu() {
      this.toggleProperty('collapsedMenu');
    }
  }
});
