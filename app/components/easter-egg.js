import Ember from 'ember';

export default Ember.Component.extend({
  slot: Ember.inject.service(),
  classNames: ['easter-egg'],
  classNameBindings: ['revealed'],
  revealed: false,

  actions: {
    reveal(evt) {
      evt.preventDefault();
      this.toggleProperty('revealed');
    },

    toggleLuck() {
      this.toggleProperty('slot.isLucky');
    }
  }
});
