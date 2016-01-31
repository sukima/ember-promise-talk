import Ember from 'ember';
import { delayFor } from '../utils/timer';

export default Ember.Controller.extend({
  audio: Ember.inject.service(),
  scores: Ember.inject.service(),

  isWinner: Ember.computed.alias('scores.isWinner'),

  actions: {
    slotSpinning() {
      this.set('isSpinning', true)
        .set('isWinner', false)
        .set('audio.sound', 'spinning');
    },

    spinDone(isWinner) {
      this.set('isSpinning', false)
        .set('isWinner', isWinner)
        .set('showWinner', isWinner)
        .set('audio.sound', isWinner ? 'win' : 'lose');
      this.get('scores').record(isWinner);
      if (isWinner) {
        delayFor(5000).then(() => this.set('showWinner', false));
      }
    }
  }
});
