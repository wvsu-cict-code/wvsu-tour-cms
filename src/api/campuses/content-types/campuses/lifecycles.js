'use strict';

const { syncEntryToFirestore, deleteEntryFromFirestore } = require('../../../../utils/firestore-sync');

module.exports = {
  async afterCreate(event) {
    await syncEntryToFirestore(event, 'campuses');
  },

  async afterUpdate(event) {
    await syncEntryToFirestore(event, 'campuses');
  },

  async afterDelete(event) {
    await deleteEntryFromFirestore(event, 'campuses');
  },
};
