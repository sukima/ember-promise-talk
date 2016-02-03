import Ember from 'ember';
import {animationEndEvents} from '../utils/dom-animation';

export default Ember.Component.extend({
  classNames: ['spinner'],
  classNameBindings: ['isPending:spinning', 'isStopping:stopping', 'content'],

  isPending: Ember.computed.alias('promise.isPending'),
  isFulfilled: Ember.computed.alias('promise.isFulfilled'),
  isRejected: Ember.computed.alias('promise.isRejected'),
  isSettled: Ember.computed.alias('promise.isSettled'),
  content: Ember.computed.alias('promise.content'),

  isStopping: Ember.computed('isFulfilled', 'content', '_stopped', function () {
    return this.get('isFulfilled') &&
      Ember.isPresent(this.get('content')) &&
      !this.get('_stopped');
  }),

  endAnimation: Ember.observer('promise', function () {
    this.set('_stopped', false);
    this.get('promise').then(() => {
      this.$().one(animationEndEvents, () => Ember.trySet(this, '_stopped', true));
    });
  })
});
