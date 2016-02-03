import Ember from 'ember';
import {animationEndEvents} from '../utils/dom-animation';

export default Ember.Component.extend({
  classNames: ['slot-handle'],
  classNameBindings: ['animated:handle-animated'],
  click() {
    this.set('animated', true);
    this.$().one(animationEndEvents, () => Ember.trySet(this, 'animated', false));
    this.attrs.action();
  }
});
