import Ember from 'ember';
import { delay } from '../utils/timer';

export default Ember.Component.extend({
  slot: Ember.inject.service(),
  classNames: ['slot-machine'],

  checkWinner(results) {
    const isWinner = this.get('slot').isWinner(results);
    this.attrs.spinDone(isWinner);
  },

  actions: {
    spin() {
      if (this.get('disabled')) { return false; }
      const slot = this.get('slot');
      const results = [
        slot.spinnerValue(3000),
        slot.spinnerValue(4000),
        slot.spinnerValue(5000)
      ];
      Ember.RSVP.all(results)
        .then(delay(1000))
        .then(Ember.run.bind(this, 'checkWinner'))
        .catch(Ember.Logger.error);
      this.attrs.spinning(results);
    }
  }
});
