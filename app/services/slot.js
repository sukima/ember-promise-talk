import Ember from 'ember';
import { delayFor } from '../utils/timer';

const SPINNER_VALUES = [
  'bannanas', 'orange', 'bars', 'cherries', 'seven', 'pear'
];

const WINNING_VALUES = ['seven', 'bars'];

const WIN_CHANCE_RATE = 5;

const LUCKY_PROBABILITY = 70;

export default Ember.Service.extend({
  resultCount: -1,
  _probability: 0,
  isLucky: false,

  probability: Ember.computed('_probability', 'isLucky', function () {
    const luck = this.get('isLucky') ? LUCKY_PROBABILITY : 0;
    return Math.max(this.get('_probability'), luck);
  }),

  updateSlidingScale() {
    let probability = this.get('_probability');
    const resultCount = this.incrementProperty('resultCount');
    if (resultCount % 3 === 0) {
      probability += WIN_CHANCE_RATE;
      this.set('_probability', probability);
      Ember.debug(`Probability of ${WINNING_VALUES.join(" or ")}: ${this.get('probability')}%`);
    }
  },

  randomResult() {
    this.updateSlidingScale();
    if (Math.random() * 100 < this.get('probability')) {
      return WINNING_VALUES[Math.floor(Math.random() * WINNING_VALUES.length)];
    } else {
      return SPINNER_VALUES[Math.floor(Math.random() * SPINNER_VALUES.length)];
    }
  },

  spinnerValue(timer) {
    return delayFor(timer).then(() => this.randomResult());
  },

  isWinner(results) {
    const isWinner = results.every(result => WINNING_VALUES.contains(result));
    if (isWinner) {
      this.set('_probability', 0);
    }
    return isWinner;
  }
});
