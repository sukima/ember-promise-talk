import Ember from 'ember';

const animationEndEvents = [
  'webkitAnimationEnd',
  'mozAnimationEnd',
  'MSAnimationEnd',
  'oanimationend',
  'animationend'
].join(' ');

export default Ember.Component.extend({
  classNames: ['slot-handle'],
  classNameBindings: ['animated:handle-animated'],
  click() {
    this.set('animated', true);
    this.$().one(animationEndEvents, () => this.set('animated', false));
    this.attrs.action();
  }
});
