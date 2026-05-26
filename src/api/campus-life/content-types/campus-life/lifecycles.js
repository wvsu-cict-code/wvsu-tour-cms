'use strict';

const { syncEntryToFirestore, deleteEntryFromFirestore } = require('../../../../utils/firestore-sync');

module.exports = {
  async afterCreate(event) {
    await syncEntryToFirestore(event, 'campus_life');
  },

  async afterUpdate(event) {
    await syncEntryToFirestore(event, 'campus_life');
  },

  async afterDelete(event) {
    await deleteEntryFromFirestore(event, 'campus_life');
  },
};
