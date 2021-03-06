import Ember from 'ember';

const SOUNDS = {
  spinning: 'audio/spinning.mp3',
  win:      'audio/win.mp3',
  lose:     'audio/lose.mp3'
};

export default Ember.Service.extend({
  enabled: true,

  onMute: Ember.observer('enabled', function () {
    if (!this.get('enabled')) {
      this.stopAll();
    }
  }),

  init(...args) {
    this._super(...args);
    this.audioManager = new Audio();
  },

  play(sound) {
    if (!this.get('enabled')) { return; }
    const audioManager = this.get('audioManager');
    audioManager.src = SOUNDS[sound];
    audioManager.play();
  },

  stopAll() {
    const audioManager = this.get('audioManager');
    try {
      audioManager.pause();
      audioManager.currentTime = 0;
    } catch(e) {
      Ember.debug(`Unable to reset audio ${audioManager.src}`);
    }
  },

  actions: {
    toggleMute() {
      this.toggleProperty('enabled');
    }
  }
});
