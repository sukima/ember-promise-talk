import Ember from 'ember';
import { delayFor } from '../utils/timer';

export default Ember.Controller.extend({
  audio: Ember.inject.service(),
  scores: Ember.inject.service(),

  isWinner: Ember.computed.alias('scores.isWinner'),

  actions: {
    slotSpinning(spinnerValues) {
      this.set('spinnerValues', spinnerValues)
        .set('isSpinning', true)
        .set('isWinner', false);
      this.get('audio').play('spinning');
    },

    spinDone(isWinner) {
      this.set('isSpinning', false)
        .set('isWinner', isWinner)
        .set('showWinner', isWinner);
      this.get('audio').play(isWinner ? 'win' : 'lose');
      this.get('scores').record(isWinner);
      if (isWinner) {
        delayFor(5000).then(() => this.set('showWinner', false));
      }
    }
  }
});
