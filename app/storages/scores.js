import StorageObject from 'ember-local-storage/local/object';

const Storage = StorageObject.extend();

Storage.reopenClass({
  initialState() {
    return {
      wins: 0,
      losses: 0,
      consecutiveLoseCount: 0
    };
  }
});

export default Storage;
