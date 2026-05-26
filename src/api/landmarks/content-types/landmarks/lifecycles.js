'use strict';

const { syncEntryToFirestore, deleteEntryFromFirestore } = require('../../../../utils/firestore-sync');

module.exports = {
  async afterCreate(event) {
    await syncEntryToFirestore(event, 'landmarks');
  },

  async afterUpdate(event) {
    await syncEntryToFirestore(event, 'landmarks');
  },

  async afterDelete(event) {
    await deleteEntryFromFirestore(event, 'landmarks');
  },
};
