import Ember from 'ember';
import { delay } from '../utils/timer';

export default Ember.Component.extend({
  slot: Ember.inject.service(),
  classNames: ['slot-machine'],

  spinnerValues: [
    Ember.RSVP.resolve(),
    Ember.RSVP.resolve(),
    Ember.RSVP.resolve()
  ],

  checkWinner(results) {
    const isWinner = this.get('slot').isWinner(results);
    this.attrs.spinDone(isWinner);
  },

  actions: {
    spin() {
      if (this.get('isSpinning')) { return false; }
      this.set('isSpinning', true);
      Ember.run(this.attrs.spinning);
      const slot = this.get('slot');
      const results = [
        slot.spinnerValue(3000),
        slot.spinnerValue(4000),
        slot.spinnerValue(5000)
      ];
      this.set('spinnerValues', results);
      return Ember.RSVP.all(results)
        .then(delay(1000))
        .then(Ember.run.bind(this, 'checkWinner'))
        .finally(() => this.set('isSpinning', false));
    }
  }
});
