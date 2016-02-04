import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

const MINIMUM_CASH_POT = 50;

export default Ember.Service.extend({
  storage: storageFor('scores'),
  wins: Ember.computed.alias('storage.wins'),
  losses: Ember.computed.alias('storage.losses'),
  consecutiveLoseCount: Ember.computed.alias('storage.consecutiveLoseCount'),

  isWinner: false,
  lastPot: '0',
  cashPot: Ember.computed('consecutiveLoseCount', function () {
    const growth = (Math.pow(2, this.get('consecutiveLoseCount')) / 2) * 100;
    return Math.max(growth, MINIMUM_CASH_POT).toLocaleString();
  }),

  record(isWinner) {
    this.incrementProperty(isWinner ? 'wins' : 'losses');
    if (isWinner) {
      this.set('lastPot', this.get('cashPot'));
      this.set('consecutiveLoseCount', 0);
    } else {
      this.incrementProperty('consecutiveLoseCount');
    }
  },

  reset() {
    this.get('storage').reset();
  }
});
