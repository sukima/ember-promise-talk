import Ember from "ember";

export default Ember.Controller.extend({
  slides: Ember.inject.service(),
  classNames: ["slides"],

  queryParams: {
    slideNum: 'slide'
  },

  slideNum: Ember.computed.alias('slides.index'),

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
