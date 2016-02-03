import Ember from 'ember';
import { delay } from '../utils/timer';

export default Ember.Controller.extend({
  audio: Ember.inject.service(),
  scores: Ember.inject.service(),

  isWinner: Ember.computed.alias('scores.isWinner'),

  actions: {
    slotSpinning(spinnerValues) {
      this.get('audio').play('spinning');
      this.set('spinnerValues', spinnerValues)
        .set('isSpinning', true)
        .set('isWinner', false)
        .set('showWinner', false);
    },

    spinDone(isWinner) {
      this.set('isSpinning', false).set('isWinner', isWinner);
      this.get('audio').play(isWinner ? 'win' : 'lose');
      this.get('scores').record(isWinner);
      delay(500)(isWinner)
        .then(showWinner => this.set('showWinner', showWinner))
        .then(delay(5000))
        .then(() => this.set('showWinner', false))
        .catch(Ember.Logger.error);
    }
  }
});
