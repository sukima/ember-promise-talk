import Ember from 'ember';

export default Ember.Component.extend(Ember.PromiseProxyMixin, {
  classNames: ['spinner'],
  classNameBindings: ['isPending:spinning', 'isStopping:stopping', 'content'],
  isStopping: Ember.computed('isFulfilled', 'content', function () {
    return this.get('isFulfilled') && Ember.isPresent(this.get('content'));
  })
});
