import Ember from 'ember';
import SLIDE_NAMES from '../data/slides';

const LEFT_ARROW  = 37;
const UP_ARROW    = 38;
const RIGHT_ARROW = 39;
const DOWN_ARROW  = 40;

export default Ember.Component.extend({
  slideIndex: Ember.computed.readOnly('slide'),

  addDomEvents: Ember.on('didInsertElement', function () {
    Ember.$(document).on(`keyup.${Ember.guidFor(this)}`,
                         Ember.run.bind(this, 'onKeyUp'));
  }),

  removeDomEvents: Ember.on('willRemoveElement', function () {
    Ember.$(document).off(`.${Ember.guidFor(this)}`);
  }),

  onKeyUp({which}) {
    switch (which) {
      case RIGHT_ARROW:
      case DOWN_ARROW:
        this.send('next');
        break;
      case LEFT_ARROW:
      case UP_ARROW:
        this.send('previous');
        break;
      // default: ignore
    }
  },

  slideTemplate: Ember.computed('slideIndex', function () {
    const templateName = SLIDE_NAMES[this.get('slideIndex')];
    return `slides/${templateName}`;
  }),

  actions: {
    next() {
      this.send('pickSlide', this.get('slideIndex') + 1);
    },

    previous() {
      this.send('pickSlide', this.get('slideIndex') - 1);
    },

    pickSlide(index) {
      if (index >= 0 && index < SLIDE_NAMES.length) {
        this.attrs.updateSlide(index);
      }
    }
  }
});
