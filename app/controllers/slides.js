/* globals $ */
import Ember from "ember";

export default Ember.Controller.extend({
  classNames: ["slides"],

  queryParams: {
    slideNum: 'slide'
  },

  slideNum: '1',

  slideIndex: Ember.computed('slideNum', {
    get() {
      return parseInt(this.get('slideNum'), 10) - 1;
    },
    set(key, value) {
      this.set('slideNum', String(value + 1));
      return value;
    }
  }),

  actions: {
    updateSlide(index) {
      this.set('slideIndex', index);
    }
  }
});
