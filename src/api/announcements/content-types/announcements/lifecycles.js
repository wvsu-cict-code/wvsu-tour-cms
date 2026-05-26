'use strict';

const { syncEntryToFirestore, deleteEntryFromFirestore } = require('../../../../utils/firestore-sync');

module.exports = {
  async afterCreate(event) {
    await syncEntryToFirestore(event, 'announcements');
  },

  async afterUpdate(event) {
    await syncEntryToFirestore(event, 'announcements');
  },

  async afterDelete(event) {
    await deleteEntryFromFirestore(event, 'announcements');
  },
};
