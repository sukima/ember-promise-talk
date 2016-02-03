import Ember from 'ember';
import {animationEndEvents} from '../utils/dom-animation';

export default Ember.Component.extend(Ember.PromiseProxyMixin, {
  classNames: ['spinner'],
  classNameBindings: ['isPending:spinning', 'isStopping:stopping', 'content'],
  isStopping: Ember.computed('isFulfilled', 'content', '_stopped', function () {
    return this.get('isFulfilled') &&
      Ember.isPresent(this.get('content')) &&
      !this.get('_stopped');
  }),
  endAnimation: Ember.observer('promise', function () {
    this.set('_stopped', false);
    this.then(() => {
      this.$().one(animationEndEvents, () => this.set('_stopped', true));
    });
  })
});
