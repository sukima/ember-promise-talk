import Ember from 'ember';

const SOUNDS = {
  _off:     null,
  spinning: 'audio/spinning.mp3',
  win:      'audio/win.mp3',
  lose:     'audio/lose.mp3'
};

export default Ember.Service.extend({
  audioSrc: Ember.computed('sound', function () {
    return SOUNDS[this.getWithDefault('sound', '_off')];
  }),

  play(sound) {
    this.set('sound', sound);
  },

  stop() {
    this.set('sound', '_off');
  }
});
