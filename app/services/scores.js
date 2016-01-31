import Ember from 'ember';

const MINIMUM_CASH_POT = 50;

export default Ember.Service.extend({
  wins: 0,
  losses: 0,
  isWinner: false,
  consecutiveLoseCount: 0,

  lastPot: 0,
  cashPot: Ember.computed('consecutiveLoseCount', function () {
    return Math.max(Math.pow(this.get('consecutiveLoseCount'), 2) * 100, MINIMUM_CASH_POT);
  }),

  cleanup() {
    this.set('isWinner', false);
  },

  record(isWinner) {
    this.incrementProperty(isWinner ? 'wins' : 'losses');
    if (isWinner) {
      this.set('lastPot', this.get('cashPot'));
      this.set('consecutiveLoseCount', 0);
    } else {
      this.incrementProperty('consecutiveLoseCount');
    }
  }
});
