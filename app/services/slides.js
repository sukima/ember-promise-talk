import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({
  storage: storageFor('slides'),
  index: Ember.computed.alias('storage.index'),

  reset() {
    this.get('storage').reset();
  }
});
