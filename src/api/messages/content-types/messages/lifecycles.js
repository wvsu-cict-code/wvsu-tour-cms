'use strict';

const { syncEntryToFirestore, deleteEntryFromFirestore } = require('../../../../utils/firestore-sync');

module.exports = {
  async afterCreate(event) {
    await syncEntryToFirestore(event, 'messages');
  },

  async afterUpdate(event) {
    await syncEntryToFirestore(event, 'messages');
  },

  async afterDelete(event) {
    await deleteEntryFromFirestore(event, 'messages');
  },
};
