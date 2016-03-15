import Ember from 'ember';

export function delayFor(timer) {
  return new Ember.RSVP.Promise(function (resolve) {
    Ember.run.later(null, resolve, timer);
  }, `delayFor ${timer}`);
}

export function delay(timer) {
  return function (result) {
    return delayFor(timer).then(() => result);
  };
}
