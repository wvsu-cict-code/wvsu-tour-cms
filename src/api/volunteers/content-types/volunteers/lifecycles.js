'use strict';

const { syncEntryToFirestore, deleteEntryFromFirestore } = require('../../../../utils/firestore-sync');

module.exports = {
  async afterCreate(event) {
    await syncEntryToFirestore(event, 'volunteers');
  },

  async afterUpdate(event) {
    await syncEntryToFirestore(event, 'volunteers');
  },

  async afterDelete(event) {
    await deleteEntryFromFirestore(event, 'volunteers');
  },
};
